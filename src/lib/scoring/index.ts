import type { Question, Response, ObjectiveIndices } from '@/types';

// Re-export new test scoring engines
export { scoreCognitiveTest } from './cognitive';
export { scorePersonalityTest } from './personality';
export { scoreDISCTest } from './disc';
export { scoreAptitudeTest } from './aptitude';
export { calculateJobFit } from './job-fit';

/**
 * Calculate score for a multiple choice response
 */
export function scoreMultipleChoice(
  response: string,
  options: { id: string; value: number }[]
): number {
  const selectedOption = options.find((o) => o.id === response);
  return selectedOption?.value ?? 0;
}

/**
 * Calculate score for a scale (Likert) response
 * Converts 1-5 scale to 0-100
 */
export function scoreScale(value: number, min = 1, max = 5): number {
  return ((value - min) / (max - min)) * 100;
}

/**
 * Calculate score for a ranking response
 * Simple scoring based on having provided an ordering
 */
export function scoreRanking(orderedIds: string[], expectedCount: number): number {
  if (!orderedIds || orderedIds.length !== expectedCount) {
    return 0;
  }
  return 75; // Default score for completing ranking
}

/**
 * Estimate score for open text based on length (before AI evaluation)
 */
export function estimateOpenTextScore(text: string, minLength = 50): number {
  if (!text || text.trim().length === 0) return 0;
  const length = text.trim().length;
  if (length < minLength) return Math.round((length / minLength) * 50);
  return Math.min(100, 50 + Math.round((length - minLength) / 20));
}

/**
 * Calculate category scores from responses
 */
export function calculateCategoryScores(
  responses: Response[],
  questions: Record<string, Question>
): ObjectiveIndices {
  const categoryTotals: Record<string, { sum: number; count: number }> = {
    professional: { sum: 0, count: 0 },
    'soft-skills': { sum: 0, count: 0 },
    readiness: { sum: 0, count: 0 },
  };

  for (const response of responses) {
    const question = questions[response.questionId];
    if (!question || response.score === undefined) continue;

    const categoryId = normalizeCategoryId(question.categoryId);
    if (categoryId && categoryTotals[categoryId]) {
      categoryTotals[categoryId].sum += response.score;
      categoryTotals[categoryId].count += 1;
    }
  }

  const calculateAverage = (cat: { sum: number; count: number }) =>
    cat.count > 0 ? Math.round(cat.sum / cat.count) : 0;

  return {
    professional: calculateAverage(categoryTotals.professional),
    softSkills: calculateAverage(categoryTotals['soft-skills']),
    readiness: calculateAverage(categoryTotals.readiness),
  };
}

function normalizeCategoryId(id: string): string | null {
  const normalized = id.toLowerCase().replace(/[_\s]/g, '-');
  if (normalized.includes('professional') || normalized.includes('profesional')) {
    return 'professional';
  }
  if (normalized.includes('soft') || normalized.includes('blandas')) {
    return 'soft-skills';
  }
  if (normalized.includes('readiness') || normalized.includes('cambio')) {
    return 'readiness';
  }
  return null;
}

/**
 * Get performance level description
 */
export function getPerformanceLevel(score: number): {
  level: 'excellent' | 'good' | 'developing' | 'needsSupport';
  label: { es: string; en: string };
  color: string;
} {
  if (score >= 80) {
    return {
      level: 'excellent',
      label: { es: 'Excelente', en: 'Excellent' },
      color: 'green',
    };
  }
  if (score >= 60) {
    return {
      level: 'good',
      label: { es: 'Bueno', en: 'Good' },
      color: 'blue',
    };
  }
  if (score >= 40) {
    return {
      level: 'developing',
      label: { es: 'En Desarrollo', en: 'Developing' },
      color: 'yellow',
    };
  }
  return {
    level: 'needsSupport',
    label: { es: 'Necesita Apoyo', en: 'Needs Support' },
    color: 'red',
  };
}

/**
 * Calculate overall score as weighted average
 */
export function calculateOverallScore(
  indices: ObjectiveIndices,
  weights = { professional: 0.4, softSkills: 0.35, readiness: 0.25 }
): number {
  return Math.round(
    indices.professional * weights.professional +
      indices.softSkills * weights.softSkills +
      indices.readiness * weights.readiness
  );
}
