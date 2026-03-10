interface CategoryScores {
  professional: number;
  softSkills: number;
  readiness: number;
}

interface LocalizedString {
  es: string;
  en: string;
}

interface ArchetypeProfile {
  id: string;
  category: 'professional' | 'soft-skills' | 'readiness';
  name: LocalizedString;
  description: LocalizedString;
  traits: LocalizedString[];
  indexRange: { min: number; max: number };
  recommendedResources: string[];
}

interface ProfileAssignment {
  profileId: string;
  profileName: LocalizedString;
  matchPercentage: number;
  explanation: LocalizedString;
}

interface AssignedProfiles {
  professional: ProfileAssignment;
  softSkills: ProfileAssignment;
  readiness: ProfileAssignment;
}

/**
 * Assign archetype profiles based on competency indices.
 * Each category gets the best matching profile based on the score range.
 */
export function assignProfiles(
  indices: CategoryScores,
  archetypes: ArchetypeProfile[]
): AssignedProfiles {
  const categoryMap: Record<string, 'professional' | 'softSkills' | 'readiness'> = {
    professional: 'professional',
    'soft-skills': 'softSkills',
    readiness: 'readiness',
  };

  const result: Partial<AssignedProfiles> = {};

  // Process each category
  for (const [category, key] of Object.entries(categoryMap)) {
    const score = indices[key];
    const categoryArchetypes = archetypes.filter((a) => a.category === category);

    if (categoryArchetypes.length === 0) {
      // Create default profile if none exist
      result[key] = createDefaultProfile(category, score);
      continue;
    }

    // Find best matching archetype
    let bestMatch: ArchetypeProfile | null = null;
    let bestMatchScore = -1;

    for (const archetype of categoryArchetypes) {
      const matchScore = calculateMatchScore(score, archetype.indexRange);
      if (matchScore > bestMatchScore) {
        bestMatchScore = matchScore;
        bestMatch = archetype;
      }
    }

    if (bestMatch) {
      result[key] = {
        profileId: bestMatch.id,
        profileName: bestMatch.name,
        matchPercentage: Math.round(bestMatchScore),
        explanation: generateExplanation(bestMatch, score),
      };
    } else {
      result[key] = createDefaultProfile(category, score);
    }
  }

  return result as AssignedProfiles;
}

/**
 * Calculate match score between a score and a profile's index range.
 * Returns 0-100 based on how well the score fits the range.
 */
function calculateMatchScore(
  score: number,
  range: { min: number; max: number }
): number {
  // If score is within range, return high match
  if (score >= range.min && score <= range.max) {
    const rangeSize = range.max - range.min;
    const position = score - range.min;
    // Best match is at the middle of the range
    const distanceFromMiddle = Math.abs(position - rangeSize / 2);
    const normalizedDistance = distanceFromMiddle / (rangeSize / 2);
    return 100 - normalizedDistance * 20; // 80-100 within range
  }

  // Calculate distance from range
  const distance = score < range.min ? range.min - score : score - range.max;
  const matchScore = Math.max(0, 80 - distance * 2);

  return matchScore;
}

/**
 * Generate explanation for profile assignment
 */
function generateExplanation(
  profile: ArchetypeProfile,
  score: number
): LocalizedString {
  const isHighMatch = score >= profile.indexRange.min && score <= profile.indexRange.max;

  if (isHighMatch) {
    return {
      es: `Tu puntuación de ${score}% se alinea bien con el perfil ${profile.name.es}. ${profile.description.es}`,
      en: `Your score of ${score}% aligns well with the ${profile.name.en} profile. ${profile.description.en}`,
    };
  }

  if (score < profile.indexRange.min) {
    return {
      es: `Muestras características de ${profile.name.es} pero con oportunidades de desarrollo. Enfócate en las recomendaciones para fortalecer estas competencias.`,
      en: `You show characteristics of ${profile.name.en} but with development opportunities. Focus on recommendations to strengthen these competencies.`,
    };
  }

  return {
    es: `Superas las expectativas del perfil ${profile.name.es}. Considera roles de mayor responsabilidad o mentoría en esta área.`,
    en: `You exceed expectations of the ${profile.name.en} profile. Consider higher responsibility roles or mentoring in this area.`,
  };
}

/**
 * Create a default profile when no archetypes are defined
 */
function createDefaultProfile(
  category: string,
  score: number
): ProfileAssignment {
  const categoryNames: Record<string, LocalizedString> = {
    professional: { es: 'Profesional', en: 'Professional' },
    'soft-skills': { es: 'Habilidades Blandas', en: 'Soft Skills' },
    readiness: { es: 'Adaptabilidad', en: 'Adaptability' },
  };

  let level: LocalizedString;
  if (score >= 80) {
    level = { es: 'Avanzado', en: 'Advanced' };
  } else if (score >= 60) {
    level = { es: 'Intermedio', en: 'Intermediate' };
  } else if (score >= 40) {
    level = { es: 'En Desarrollo', en: 'Developing' };
  } else {
    level = { es: 'Inicial', en: 'Beginning' };
  }

  return {
    profileId: `default-${category}-${score >= 60 ? 'high' : 'low'}`,
    profileName: {
      es: `${level.es} en ${categoryNames[category]?.es || category}`,
      en: `${level.en} in ${categoryNames[category]?.en || category}`,
    },
    matchPercentage: score,
    explanation: {
      es: `Tu nivel de ${score}% indica un perfil ${level.es.toLowerCase()} en esta categoría.`,
      en: `Your level of ${score}% indicates a ${level.en.toLowerCase()} profile in this category.`,
    },
  };
}

/**
 * Detect if candidate shows traits from multiple profiles
 */
export function detectCombinedProfiles(
  indices: CategoryScores,
  archetypes: ArchetypeProfile[]
): ProfileAssignment[] {
  const allMatches: { profile: ArchetypeProfile; matchScore: number }[] = [];

  for (const archetype of archetypes) {
    let score: number;
    switch (archetype.category) {
      case 'professional':
        score = indices.professional;
        break;
      case 'soft-skills':
        score = indices.softSkills;
        break;
      case 'readiness':
        score = indices.readiness;
        break;
      default:
        continue;
    }

    const matchScore = calculateMatchScore(score, archetype.indexRange);
    if (matchScore >= 60) {
      allMatches.push({ profile: archetype, matchScore });
    }
  }

  // Return top matches sorted by score
  return allMatches
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 5)
    .map(({ profile, matchScore }) => ({
      profileId: profile.id,
      profileName: profile.name,
      matchPercentage: Math.round(matchScore),
      explanation: profile.description,
    }));
}
