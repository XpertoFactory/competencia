interface Response {
  questionId: string;
  questionType: string;
  value: string | number | string[];
  score?: number;
}

interface Question {
  id: string;
  categoryId: string;
  competencyId: string;
  maxScore: number;
}

interface CategoryScores {
  professional: number;
  softSkills: number;
  readiness: number;
}

type CategoryId = 'professional' | 'soft-skills' | 'readiness';

/**
 * Calculate competency indices from scored responses.
 * Returns scores from 0-100 for each category.
 */
export function calculateIndices(
  responses: Response[],
  questions: Record<string, Question>
): CategoryScores {
  // Group responses by category
  const categoryResponses: Record<CategoryId, { score: number; maxScore: number }[]> = {
    professional: [],
    'soft-skills': [],
    readiness: [],
  };

  for (const response of responses) {
    const question = questions[response.questionId];
    if (!question || response.score === undefined) continue;

    const categoryId = normalizeCategoryId(question.categoryId);
    if (categoryId && categoryResponses[categoryId]) {
      categoryResponses[categoryId].push({
        score: response.score,
        maxScore: question.maxScore,
      });
    }
  }

  // Calculate weighted average for each category
  const calculateCategoryScore = (
    items: { score: number; maxScore: number }[]
  ): number => {
    if (items.length === 0) return 0;

    const totalScore = items.reduce((sum, item) => sum + item.score, 0);
    const maxPossible = items.length * 100; // All scores normalized to 0-100

    return Math.round((totalScore / maxPossible) * 100);
  };

  return {
    professional: calculateCategoryScore(categoryResponses.professional),
    softSkills: calculateCategoryScore(categoryResponses['soft-skills']),
    readiness: calculateCategoryScore(categoryResponses.readiness),
  };
}

/**
 * Normalize category IDs to handle different naming conventions
 */
function normalizeCategoryId(categoryId: string): CategoryId | null {
  const normalized = categoryId.toLowerCase().replace(/[_\s]/g, '-');

  if (normalized.includes('professional') || normalized.includes('profesional')) {
    return 'professional';
  }
  if (
    normalized.includes('soft') ||
    normalized.includes('habilidades-blandas') ||
    normalized.includes('interpersonal')
  ) {
    return 'soft-skills';
  }
  if (
    normalized.includes('readiness') ||
    normalized.includes('cambio') ||
    normalized.includes('adaptab')
  ) {
    return 'readiness';
  }

  return null;
}

/**
 * Calculate overall competency score (average of all indices)
 */
export function calculateOverallScore(indices: CategoryScores): number {
  return Math.round((indices.professional + indices.softSkills + indices.readiness) / 3);
}

/**
 * Get performance level based on score
 */
export function getPerformanceLevel(score: number): {
  level: 'excellent' | 'good' | 'developing' | 'needsSupport';
  label: { es: string; en: string };
} {
  if (score >= 80) {
    return {
      level: 'excellent',
      label: { es: 'Excelente', en: 'Excellent' },
    };
  }
  if (score >= 60) {
    return {
      level: 'good',
      label: { es: 'Bueno', en: 'Good' },
    };
  }
  if (score >= 40) {
    return {
      level: 'developing',
      label: { es: 'En Desarrollo', en: 'Developing' },
    };
  }
  return {
    level: 'needsSupport',
    label: { es: 'Necesita Apoyo', en: 'Needs Support' },
  };
}
