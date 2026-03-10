import type {
  AptitudeQuestion,
  AptitudeResult,
  AptitudeScores,
  AptitudeSubtype,
  TestResponse,
  LocalizedString,
} from '@/types';

/**
 * Score an aptitude test from responses and questions
 */
export function scoreAptitudeTest(
  responses: TestResponse[],
  questions: AptitudeQuestion[]
): AptitudeResult {
  const subtypeScores: Record<AptitudeSubtype, { correct: number; total: number }> = {
    numerical: { correct: 0, total: 0 },
    verbal: { correct: 0, total: 0 },
    analytical: { correct: 0, total: 0 },
    technical: { correct: 0, total: 0 },
  };

  for (const question of questions) {
    subtypeScores[question.subtype].total += 1;

    const response = responses.find((r) => r.questionId === question.id);
    if (response && response.selectedOptionId === question.correctOptionId) {
      subtypeScores[question.subtype].correct += 1;
    }
  }

  const toScore = (data: { correct: number; total: number }): number =>
    data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;

  const scores: AptitudeScores = {
    numerical: toScore(subtypeScores.numerical),
    verbal: toScore(subtypeScores.verbal),
    analytical: toScore(subtypeScores.analytical),
    technical: subtypeScores.technical.total > 0 ? toScore(subtypeScores.technical) : undefined,
  };

  const activeScores = Object.entries(scores)
    .filter(([, v]) => v !== undefined) as [AptitudeSubtype, number][];

  const overallScore = activeScores.length > 0
    ? Math.round(activeScores.reduce((sum, [, v]) => sum + v, 0) / activeScores.length)
    : 0;

  const strengths = activeScores
    .filter(([, v]) => v >= 70)
    .sort((a, b) => b[1] - a[1])
    .map(([k]) => k);

  const weaknesses = activeScores
    .filter(([, v]) => v < 50)
    .sort((a, b) => a[1] - b[1])
    .map(([k]) => k);

  const suitableRoles = getSuitableRoles(scores);

  return { scores, overallScore, strengths, weaknesses, suitableRoles };
}

function getSuitableRoles(scores: AptitudeScores): LocalizedString[] {
  const roles: LocalizedString[] = [];

  if (scores.numerical >= 70) {
    roles.push({
      es: 'Análisis actuarial y suscripción de riesgos',
      en: 'Actuarial analysis and risk underwriting',
    });
    roles.push({
      es: 'Administración financiera y contabilidad',
      en: 'Financial administration and accounting',
    });
  }

  if (scores.verbal >= 70) {
    roles.push({
      es: 'Gestión de relaciones con clientes',
      en: 'Client relationship management',
    });
    roles.push({
      es: 'Redacción de pólizas y documentación legal',
      en: 'Policy writing and legal documentation',
    });
  }

  if (scores.analytical >= 70) {
    roles.push({
      es: 'Investigación de siniestros y fraudes',
      en: 'Claims investigation and fraud detection',
    });
    roles.push({
      es: 'Planificación estratégica y análisis de mercado',
      en: 'Strategic planning and market analysis',
    });
  }

  if ((scores.technical ?? 0) >= 70) {
    roles.push({
      es: 'Tecnología de seguros (InsurTech)',
      en: 'Insurance technology (InsurTech)',
    });
  }

  if (scores.numerical >= 60 && scores.verbal >= 60) {
    roles.push({
      es: 'Ventas consultivas de seguros',
      en: 'Consultative insurance sales',
    });
  }

  if (roles.length === 0) {
    roles.push({
      es: 'Roles operativos con capacitación dirigida',
      en: 'Operational roles with targeted training',
    });
  }

  return roles;
}
