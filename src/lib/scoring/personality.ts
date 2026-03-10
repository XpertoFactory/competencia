import type {
  PersonalityStatement,
  PersonalityResult,
  PersonalityScores,
  BigFiveTrait,
  TestResponse,
  LocalizedString,
} from '@/types';

/**
 * Score a Big Five personality test from responses and statements
 */
export function scorePersonalityTest(
  responses: TestResponse[],
  statements: PersonalityStatement[],
  scaleMin: number,
  scaleMax: number
): PersonalityResult {
  const traitTotals: Record<BigFiveTrait, { sum: number; count: number }> = {
    openness: { sum: 0, count: 0 },
    conscientiousness: { sum: 0, count: 0 },
    extraversion: { sum: 0, count: 0 },
    agreeableness: { sum: 0, count: 0 },
    neuroticism: { sum: 0, count: 0 },
  };

  for (const statement of statements) {
    const response = responses.find((r) => r.questionId === statement.id);
    if (!response || response.scaleValue === undefined) continue;

    let value = response.scaleValue;

    // Reverse scoring: if statement is reversed, flip the scale
    if (statement.isReversed) {
      value = scaleMax - value + scaleMin;
    }

    // Normalize to 0-100
    const normalized = ((value - scaleMin) / (scaleMax - scaleMin)) * 100;

    traitTotals[statement.trait].sum += normalized;
    traitTotals[statement.trait].count += 1;
  }

  const scores: PersonalityScores = {
    openness: average(traitTotals.openness),
    conscientiousness: average(traitTotals.conscientiousness),
    extraversion: average(traitTotals.extraversion),
    agreeableness: average(traitTotals.agreeableness),
    neuroticism: average(traitTotals.neuroticism),
  };

  const dominantTraits = getDominantTraits(scores);
  const traitDescriptions = getTraitDescriptions(scores);
  const workStyleSummary = generateWorkStyleSummary(scores, dominantTraits);

  return { scores, dominantTraits, traitDescriptions, workStyleSummary };
}

function average(data: { sum: number; count: number }): number {
  return data.count > 0 ? Math.round(data.sum / data.count) : 50;
}

function getDominantTraits(scores: PersonalityScores): BigFiveTrait[] {
  const entries = Object.entries(scores) as [BigFiveTrait, number][];
  return entries
    .filter(([trait, score]) => {
      // For neuroticism, low score is "dominant" (emotionally stable)
      if (trait === 'neuroticism') return score <= 35;
      return score >= 65;
    })
    .sort((a, b) => {
      if (a[0] === 'neuroticism') return (100 - a[1]) - (100 - b[1]);
      return b[1] - a[1];
    })
    .map(([trait]) => trait);
}

function getTraitDescriptions(scores: PersonalityScores): Record<BigFiveTrait, LocalizedString> {
  return {
    openness: getTraitLevel(scores.openness, {
      high: {
        es: 'Alta apertura a nuevas experiencias. Creativo, curioso y receptivo al cambio.',
        en: 'High openness to new experiences. Creative, curious, and receptive to change.',
        fr: 'Grande ouverture aux nouvelles expériences. Créatif, curieux et réceptif au changement.',
      },
      medium: {
        es: 'Apertura moderada. Equilibrio entre innovación y tradición.',
        en: 'Moderate openness. Balance between innovation and tradition.',
        fr: 'Ouverture modérée. Équilibre entre innovation et tradition.',
      },
      low: {
        es: 'Prefiere lo conocido y probado. Práctico y convencional.',
        en: 'Prefers the known and proven. Practical and conventional.',
        fr: 'Préfère le connu et l\'éprouvé. Pratique et conventionnel.',
      },
    }),
    conscientiousness: getTraitLevel(scores.conscientiousness, {
      high: {
        es: 'Altamente organizado, disciplinado y orientado a metas.',
        en: 'Highly organized, disciplined, and goal-oriented.',
        fr: 'Très organisé, discipliné et orienté vers les objectifs.',
      },
      medium: {
        es: 'Moderadamente organizado. Flexible con estructura cuando es necesario.',
        en: 'Moderately organized. Flexible with structure when needed.',
        fr: 'Modérément organisé. Flexible avec de la structure quand nécessaire.',
      },
      low: {
        es: 'Prefiere la espontaneidad y flexibilidad sobre la estructura rígida.',
        en: 'Prefers spontaneity and flexibility over rigid structure.',
        fr: 'Préfère la spontanéité et la flexibilité à la structure rigide.',
      },
    }),
    extraversion: getTraitLevel(scores.extraversion, {
      high: {
        es: 'Extrovertido, sociable y energizado por la interacción social.',
        en: 'Extroverted, sociable, and energized by social interaction.',
        fr: 'Extraverti, sociable et dynamisé par l\'interaction sociale.',
      },
      medium: {
        es: 'Ambivertido. Cómodo tanto en grupos como en soledad.',
        en: 'Ambivert. Comfortable both in groups and alone.',
        fr: 'Ambiverti. À l\'aise aussi bien en groupe que seul.',
      },
      low: {
        es: 'Introvertido, reflexivo y prefiere trabajar de forma independiente.',
        en: 'Introverted, reflective, and prefers working independently.',
        fr: 'Introverti, réfléchi et préfère travailler de manière indépendante.',
      },
    }),
    agreeableness: getTraitLevel(scores.agreeableness, {
      high: {
        es: 'Altamente cooperativo, empático y orientado al consenso.',
        en: 'Highly cooperative, empathetic, and consensus-oriented.',
        fr: 'Très coopératif, empathique et orienté vers le consensus.',
      },
      medium: {
        es: 'Equilibrio entre cooperación y asertividad.',
        en: 'Balance between cooperation and assertiveness.',
        fr: 'Équilibre entre coopération et assertivité.',
      },
      low: {
        es: 'Directo, competitivo y orientado a resultados individuales.',
        en: 'Direct, competitive, and individually results-oriented.',
        fr: 'Direct, compétitif et orienté vers les résultats individuels.',
      },
    }),
    neuroticism: getTraitLevel(scores.neuroticism, {
      high: {
        es: 'Sensible al estrés. Puede beneficiarse de técnicas de manejo emocional.',
        en: 'Sensitive to stress. Could benefit from emotional management techniques.',
        fr: 'Sensible au stress. Pourrait bénéficier de techniques de gestion émotionnelle.',
      },
      medium: {
        es: 'Estabilidad emocional moderada. Maneja la presión razonablemente bien.',
        en: 'Moderate emotional stability. Handles pressure reasonably well.',
        fr: 'Stabilité émotionnelle modérée. Gère la pression raisonnablement bien.',
      },
      low: {
        es: 'Emocionalmente estable, tranquilo y resiliente ante la presión.',
        en: 'Emotionally stable, calm, and resilient under pressure.',
        fr: 'Émotionnellement stable, calme et résilient sous la pression.',
      },
    }),
  };
}

function getTraitLevel(
  score: number,
  levels: { high: LocalizedString; medium: LocalizedString; low: LocalizedString }
): LocalizedString {
  if (score >= 65) return levels.high;
  if (score >= 35) return levels.medium;
  return levels.low;
}

function generateWorkStyleSummary(
  scores: PersonalityScores,
  dominantTraits: BigFiveTrait[]
): LocalizedString {
  if (dominantTraits.length === 0) {
    return {
      es: 'Perfil equilibrado sin rasgos marcadamente dominantes. Adapta su estilo según la situación.',
      en: 'Balanced profile without markedly dominant traits. Adapts style to the situation.',
      fr: 'Profil équilibré sans traits nettement dominants. Adapte son style selon la situation.',
    };
  }

  const isHighC = scores.conscientiousness >= 65;
  const isHighE = scores.extraversion >= 65;
  const isHighA = scores.agreeableness >= 65;
  const isLowN = scores.neuroticism <= 35;

  if (isHighC && isHighE && isHighA) {
    return {
      es: 'Líder natural: organizado, sociable y colaborador. Ideal para roles de gestión de equipos.',
      en: 'Natural leader: organized, sociable, and collaborative. Ideal for team management roles.',
      fr: 'Leader naturel : organisé, sociable et collaboratif. Idéal pour les rôles de gestion d\'équipe.',
    };
  }
  if (isHighC && isLowN) {
    return {
      es: 'Profesional confiable y estable. Excelente para roles que requieren precisión y consistencia.',
      en: 'Reliable and stable professional. Excellent for roles requiring precision and consistency.',
      fr: 'Professionnel fiable et stable. Excellent pour les rôles nécessitant précision et constance.',
    };
  }
  if (isHighE && isHighA) {
    return {
      es: 'Persona orientada a las relaciones. Fuerte en roles de servicio al cliente y ventas consultivas.',
      en: 'People-oriented person. Strong in customer service and consultative sales roles.',
      fr: 'Personne orientée vers les relations. Forte dans les rôles de service client et vente consultative.',
    };
  }

  return {
    es: 'Perfil con fortalezas definidas que contribuyen a su estilo profesional único.',
    en: 'Profile with defined strengths that contribute to a unique professional style.',
    fr: 'Profil avec des forces définies qui contribuent à un style professionnel unique.',
  };
}
