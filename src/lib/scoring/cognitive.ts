import type {
  CognitiveQuestion,
  CognitiveResult,
  CognitiveSubtype,
  TestResponse,
  LocalizedString,
} from '@/types';

/**
 * Score a cognitive test from responses and questions
 */
export function scoreCognitiveTest(
  responses: TestResponse[],
  questions: CognitiveQuestion[],
  totalTimeUsedSeconds: number
): CognitiveResult {
  const subtypeScores: Record<CognitiveSubtype, { correct: number; total: number }> = {
    logical: { correct: 0, total: 0 },
    verbal: { correct: 0, total: 0 },
    numerical: { correct: 0, total: 0 },
    pattern: { correct: 0, total: 0 },
  };

  let totalCorrect = 0;

  for (const question of questions) {
    subtypeScores[question.subtype].total += 1;

    const response = responses.find((r) => r.questionId === question.id);
    if (response && response.selectedOptionId === question.correctOptionId) {
      totalCorrect += 1;
      subtypeScores[question.subtype].correct += 1;
    }
  }

  const totalQuestions = questions.length;
  const rawScore = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0;

  // Percentile estimation based on normal distribution approximation
  const percentile = estimatePercentile(rawScore);
  const iqEstimate = estimateIQ(rawScore);
  const classification = getClassification(rawScore);

  return {
    totalCorrect,
    totalQuestions,
    percentile,
    subtypeScores,
    iqEstimate,
    timeUsedSeconds: totalTimeUsedSeconds,
    classification,
  };
}

function estimatePercentile(rawScore: number): number {
  if (rawScore >= 95) return 99;
  if (rawScore >= 90) return 95;
  if (rawScore >= 85) return 90;
  if (rawScore >= 80) return 84;
  if (rawScore >= 70) return 75;
  if (rawScore >= 60) return 60;
  if (rawScore >= 50) return 50;
  if (rawScore >= 40) return 35;
  if (rawScore >= 30) return 20;
  if (rawScore >= 20) return 10;
  return 5;
}

function estimateIQ(rawScore: number): number {
  // Map 0-100 score to roughly 70-145 IQ range
  return Math.round(70 + (rawScore / 100) * 75);
}

function getClassification(rawScore: number): LocalizedString {
  if (rawScore >= 90) return { es: 'Superior', en: 'Superior' };
  if (rawScore >= 75) return { es: 'Por encima del promedio', en: 'Above Average' };
  if (rawScore >= 50) return { es: 'Promedio', en: 'Average' };
  if (rawScore >= 25) return { es: 'Por debajo del promedio', en: 'Below Average' };
  return { es: 'Necesita desarrollo', en: 'Needs Development' };
}
