import type {
  JobProfile,
  JobFitResult,
  JobFitWeights,
  GapItem,
  CombinedAssessmentResult,
  LocalizedString,
  BigFiveTrait,
  DISCDimension,
} from '@/types';

/**
 * Calculate job-fit score for a candidate against a job profile
 */
export function calculateJobFit(
  candidate: CombinedAssessmentResult,
  jobProfile: JobProfile
): JobFitResult {
  const req = jobProfile.requirements;
  const weights = req.weights;
  const dimensionScores: JobFitResult['dimensionScores'] = [];
  const gaps: GapItem[] = [];

  // 1. Competency fit
  if (candidate.competencyResult && weights.competency > 0) {
    const indices = candidate.competencyResult.indices;

    const profFit = scoreDimension(indices.professional, req.minProfessionalScore);
    dimensionScores.push({
      dimension: 'competency-professional',
      candidateScore: indices.professional,
      requiredScore: req.minProfessionalScore,
      fitPercentage: profFit,
      weight: weights.competency * 0.4,
    });
    if (indices.professional < req.minProfessionalScore) {
      gaps.push(createGap(
        { es: 'Competencias Profesionales', en: 'Professional Competencies' },
        indices.professional, req.minProfessionalScore
      ));
    }

    const softFit = scoreDimension(indices.softSkills, req.minSoftSkillsScore);
    dimensionScores.push({
      dimension: 'competency-softSkills',
      candidateScore: indices.softSkills,
      requiredScore: req.minSoftSkillsScore,
      fitPercentage: softFit,
      weight: weights.competency * 0.35,
    });
    if (indices.softSkills < req.minSoftSkillsScore) {
      gaps.push(createGap(
        { es: 'Habilidades Blandas', en: 'Soft Skills' },
        indices.softSkills, req.minSoftSkillsScore
      ));
    }

    const readFit = scoreDimension(indices.readiness, req.minReadinessScore);
    dimensionScores.push({
      dimension: 'competency-readiness',
      candidateScore: indices.readiness,
      requiredScore: req.minReadinessScore,
      fitPercentage: readFit,
      weight: weights.competency * 0.25,
    });
    if (indices.readiness < req.minReadinessScore) {
      gaps.push(createGap(
        { es: 'Disposición al Cambio', en: 'Readiness for Change' },
        indices.readiness, req.minReadinessScore
      ));
    }
  }

  // 2. Cognitive fit
  if (candidate.cognitiveResult && weights.cognitive > 0 && req.minCognitivePercentile) {
    const percentile = candidate.cognitiveResult.percentile;
    const fit = scoreDimension(percentile, req.minCognitivePercentile);
    dimensionScores.push({
      dimension: 'cognitive',
      candidateScore: percentile,
      requiredScore: req.minCognitivePercentile,
      fitPercentage: fit,
      weight: weights.cognitive,
    });
    if (percentile < req.minCognitivePercentile) {
      gaps.push(createGap(
        { es: 'Capacidad Cognitiva', en: 'Cognitive Ability' },
        percentile, req.minCognitivePercentile
      ));
    }
  }

  // 3. Personality fit
  if (candidate.personalityResult && weights.personality > 0 && req.personalityIdeal) {
    const scores = candidate.personalityResult.scores;
    const traits = Object.keys(req.personalityIdeal) as BigFiveTrait[];
    const traitCount = traits.length || 1;

    let totalPersonalityFit = 0;
    for (const trait of traits) {
      const range = req.personalityIdeal[trait];
      if (!range) continue;
      const score = scores[trait];
      const fit = scoreRangeFit(score, range.min, range.max);
      totalPersonalityFit += fit;

      if (score < range.min || score > range.max) {
        const target = score < range.min ? range.min : range.max;
        gaps.push(createGap(
          { es: `Personalidad: ${traitLabelEs(trait)}`, en: `Personality: ${traitLabelEn(trait)}` },
          score, target
        ));
      }
    }

    dimensionScores.push({
      dimension: 'personality',
      candidateScore: Math.round(totalPersonalityFit / traitCount),
      requiredScore: 100,
      fitPercentage: Math.round(totalPersonalityFit / traitCount),
      weight: weights.personality,
    });
  }

  // 4. DISC fit
  if (candidate.discResult && weights.disc > 0 && req.preferredDISCStyles?.length) {
    const primary = candidate.discResult.primaryStyle;
    const secondary = candidate.discResult.secondaryStyle;
    const match = req.preferredDISCStyles.includes(primary) ? 100
      : req.preferredDISCStyles.includes(secondary) ? 70
      : 30;
    dimensionScores.push({
      dimension: 'disc',
      candidateScore: match,
      requiredScore: 100,
      fitPercentage: match,
      weight: weights.disc,
    });
    if (match < 70) {
      gaps.push({
        area: { es: 'Estilo de Comportamiento DISC', en: 'DISC Behavioral Style' },
        currentLevel: match,
        requiredLevel: 100,
        gap: match - 100,
        priority: 'important',
        developmentSuggestion: {
          es: 'Desarrollar habilidades asociadas al estilo de comportamiento requerido para el puesto.',
          en: 'Develop skills associated with the behavioral style required for the position.',
        },
      });
    }
  }

  // 5. Aptitude fit
  if (candidate.aptitudeResult && weights.aptitude > 0 && req.minAptitudeScores) {
    const scores = candidate.aptitudeResult.scores;
    const subtypes = Object.keys(req.minAptitudeScores) as (keyof typeof scores)[];
    let totalAptFit = 0;
    let aptCount = 0;

    for (const subtype of subtypes) {
      const minScore = req.minAptitudeScores[subtype];
      const candidateScore = scores[subtype];
      if (minScore === undefined || candidateScore === undefined) continue;

      const fit = scoreDimension(candidateScore, minScore);
      totalAptFit += fit;
      aptCount += 1;

      if (candidateScore < minScore) {
        gaps.push(createGap(
          { es: `Aptitud: ${subtype}`, en: `Aptitude: ${subtype}` },
          candidateScore, minScore
        ));
      }
    }

    if (aptCount > 0) {
      dimensionScores.push({
        dimension: 'aptitude',
        candidateScore: Math.round(totalAptFit / aptCount),
        requiredScore: 100,
        fitPercentage: Math.round(totalAptFit / aptCount),
        weight: weights.aptitude,
      });
    }
  }

  // 6. Technical fit (from combined result if available)
  // Technical scores would come from a separate test session, not yet scored here
  // Placeholder for future integration

  // Calculate weighted overall score
  let totalWeightedScore = 0;
  let totalWeight = 0;
  for (const ds of dimensionScores) {
    totalWeightedScore += ds.fitPercentage * ds.weight;
    totalWeight += ds.weight;
  }

  const overallFitScore = totalWeight > 0
    ? Math.round(totalWeightedScore / totalWeight)
    : 0;

  const fitLevel = getFitLevel(overallFitScore);

  // Sort gaps by priority
  const priorityOrder = { critical: 0, important: 1, minor: 2 };
  gaps.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  const recommendations = generateRecommendations(gaps, fitLevel);

  return {
    jobProfileId: jobProfile.id,
    jobTitle: jobProfile.title,
    overallFitScore,
    fitLevel,
    dimensionScores,
    gapAnalysis: gaps,
    recommendations,
  };
}

function scoreDimension(actual: number, required: number): number {
  if (actual >= required) return 100;
  if (required === 0) return 100;
  return Math.round((actual / required) * 100);
}

function scoreRangeFit(value: number, min: number, max: number): number {
  if (value >= min && value <= max) return 100;
  if (value < min) {
    const distance = min - value;
    return Math.max(0, 100 - distance * 2);
  }
  const distance = value - max;
  return Math.max(0, 100 - distance * 2);
}

function getFitLevel(score: number): 'excellent' | 'good' | 'partial' | 'poor' {
  if (score >= 85) return 'excellent';
  if (score >= 65) return 'good';
  if (score >= 45) return 'partial';
  return 'poor';
}

function createGap(area: LocalizedString, current: number, required: number): GapItem {
  const gap = current - required;
  const priority: GapItem['priority'] = gap <= -30 ? 'critical' : gap <= -15 ? 'important' : 'minor';

  return {
    area,
    currentLevel: current,
    requiredLevel: required,
    gap,
    priority,
    developmentSuggestion: generateSuggestion(area, gap),
  };
}

function generateSuggestion(area: LocalizedString, gap: number): LocalizedString {
  if (gap <= -30) {
    return {
      es: `Se requiere capacitación intensiva en ${area.es.toLowerCase()}.`,
      en: `Intensive training required in ${area.en.toLowerCase()}.`,
    };
  }
  if (gap <= -15) {
    return {
      es: `Capacitación dirigida recomendada en ${area.es.toLowerCase()}.`,
      en: `Targeted training recommended in ${area.en.toLowerCase()}.`,
    };
  }
  return {
    es: `Reforzamiento menor en ${area.es.toLowerCase()}.`,
    en: `Minor reinforcement in ${area.en.toLowerCase()}.`,
  };
}

function generateRecommendations(gaps: GapItem[], fitLevel: string): LocalizedString[] {
  const recs: LocalizedString[] = [];

  if (fitLevel === 'excellent') {
    recs.push({
      es: 'El candidato muestra un excelente ajuste con el perfil del puesto.',
      en: 'The candidate shows an excellent fit with the job profile.',
    });
  } else if (fitLevel === 'good') {
    recs.push({
      es: 'El candidato tiene un buen ajuste con el perfil. Se recomiendan mejoras puntuales.',
      en: 'The candidate has a good fit with the profile. Specific improvements recommended.',
    });
  } else if (fitLevel === 'partial') {
    recs.push({
      es: 'El candidato tiene un ajuste parcial. Se requiere un plan de desarrollo estructurado.',
      en: 'The candidate has a partial fit. A structured development plan is required.',
    });
  } else {
    recs.push({
      es: 'El candidato muestra brechas significativas. Evaluar si el puesto es adecuado.',
      en: 'The candidate shows significant gaps. Evaluate if the position is appropriate.',
    });
  }

  const criticalGaps = gaps.filter((g) => g.priority === 'critical');
  if (criticalGaps.length > 0) {
    recs.push({
      es: `Atención: ${criticalGaps.length} área(s) con brechas críticas requieren atención inmediata.`,
      en: `Attention: ${criticalGaps.length} area(s) with critical gaps require immediate attention.`,
    });
  }

  return recs;
}

function traitLabelEs(trait: BigFiveTrait): string {
  const labels: Record<BigFiveTrait, string> = {
    openness: 'Apertura',
    conscientiousness: 'Responsabilidad',
    extraversion: 'Extraversión',
    agreeableness: 'Amabilidad',
    neuroticism: 'Neuroticismo',
  };
  return labels[trait];
}

function traitLabelEn(trait: BigFiveTrait): string {
  const labels: Record<BigFiveTrait, string> = {
    openness: 'Openness',
    conscientiousness: 'Conscientiousness',
    extraversion: 'Extraversion',
    agreeableness: 'Agreeableness',
    neuroticism: 'Neuroticism',
  };
  return labels[trait];
}
