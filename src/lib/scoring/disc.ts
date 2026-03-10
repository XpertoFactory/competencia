import type {
  DISCForcedChoice,
  DISCResult,
  DISCProfile,
  DISCDimension,
  TestResponse,
  LocalizedString,
} from '@/types';

/**
 * Score a DISC behavioral assessment from forced-choice responses
 */
export function scoreDISCTest(
  responses: TestResponse[],
  forcedChoices: DISCForcedChoice[]
): DISCResult {
  const dimensionCounts: Record<DISCDimension, number> = {
    dominance: 0,
    influence: 0,
    steadiness: 0,
    conscientiousness: 0,
  };

  let totalAnswered = 0;

  for (const choice of forcedChoices) {
    const response = responses.find((r) => r.questionId === choice.id);
    if (!response || !response.selectedOptionId) continue;

    totalAnswered += 1;

    if (response.selectedOptionId === 'a') {
      dimensionCounts[choice.optionA.dimension] += 1;
    } else if (response.selectedOptionId === 'b') {
      dimensionCounts[choice.optionB.dimension] += 1;
    }
  }

  // Normalize to 0-100 scale
  const maxPossible = Math.max(totalAnswered, 1);
  const profile: DISCProfile = {
    dominance: Math.round((dimensionCounts.dominance / maxPossible) * 100),
    influence: Math.round((dimensionCounts.influence / maxPossible) * 100),
    steadiness: Math.round((dimensionCounts.steadiness / maxPossible) * 100),
    conscientiousness: Math.round((dimensionCounts.conscientiousness / maxPossible) * 100),
  };

  const sortedDimensions = (Object.entries(profile) as [DISCDimension, number][])
    .sort((a, b) => b[1] - a[1]);

  const primaryStyle = sortedDimensions[0][0];
  const secondaryStyle = sortedDimensions[1][0];

  return {
    profile,
    primaryStyle,
    secondaryStyle,
    styleDescription: getStyleDescription(primaryStyle, secondaryStyle),
    leadershipStyle: getLeadershipStyle(primaryStyle),
    communicationStyle: getCommunicationStyle(primaryStyle),
    strengths: getStrengths(primaryStyle, secondaryStyle),
    challenges: getChallenges(primaryStyle),
  };
}

function getStyleDescription(primary: DISCDimension, secondary: DISCDimension): LocalizedString {
  const descriptions: Record<string, LocalizedString> = {
    'dominance-influence': {
      es: 'Estilo DI: Líder dinámico y persuasivo. Orientado a resultados con habilidad para influir en otros.',
      en: 'DI Style: Dynamic and persuasive leader. Results-oriented with ability to influence others.',
    },
    'dominance-conscientiousness': {
      es: 'Estilo DC: Líder analítico y decisivo. Combina acción rápida con atención al detalle.',
      en: 'DC Style: Analytical and decisive leader. Combines quick action with attention to detail.',
    },
    'dominance-steadiness': {
      es: 'Estilo DS: Líder determinado y persistente. Mantiene el rumbo con firmeza y consistencia.',
      en: 'DS Style: Determined and persistent leader. Stays the course with firmness and consistency.',
    },
    'influence-dominance': {
      es: 'Estilo ID: Comunicador carismático y orientado a la acción. Motiva e impulsa equipos.',
      en: 'ID Style: Charismatic communicator and action-oriented. Motivates and drives teams.',
    },
    'influence-steadiness': {
      es: 'Estilo IS: Relacionista empático y paciente. Construye relaciones sólidas y colaborativas.',
      en: 'IS Style: Empathetic and patient relationship builder. Builds solid, collaborative relationships.',
    },
    'influence-conscientiousness': {
      es: 'Estilo IC: Comunicador detallista. Inspira confianza a través de datos y entusiasmo.',
      en: 'IC Style: Detail-oriented communicator. Inspires confidence through data and enthusiasm.',
    },
    'steadiness-influence': {
      es: 'Estilo SI: Colaborador leal y sociable. Crea armonía en equipos con calidez y consistencia.',
      en: 'SI Style: Loyal and sociable collaborator. Creates team harmony with warmth and consistency.',
    },
    'steadiness-conscientiousness': {
      es: 'Estilo SC: Profesional confiable y metódico. Trabaja con precisión y consistencia.',
      en: 'SC Style: Reliable and methodical professional. Works with precision and consistency.',
    },
    'steadiness-dominance': {
      es: 'Estilo SD: Trabajador constante con capacidad de liderazgo cuando es necesario.',
      en: 'SD Style: Steady worker with leadership capability when needed.',
    },
    'conscientiousness-dominance': {
      es: 'Estilo CD: Analista estratégico. Toma decisiones basadas en datos con determinación.',
      en: 'CD Style: Strategic analyst. Makes data-driven decisions with determination.',
    },
    'conscientiousness-steadiness': {
      es: 'Estilo CS: Especialista meticuloso y paciente. Excelente en tareas que requieren precisión.',
      en: 'CS Style: Meticulous and patient specialist. Excellent in tasks requiring precision.',
    },
    'conscientiousness-influence': {
      es: 'Estilo CI: Experto comunicativo. Presenta análisis complejos de forma accesible.',
      en: 'CI Style: Communicative expert. Presents complex analyses in an accessible way.',
    },
  };

  const key = `${primary}-${secondary}`;
  return descriptions[key] || {
    es: `Estilo ${primary.charAt(0).toUpperCase()}${secondary.charAt(0).toUpperCase()}: Perfil mixto con características balanceadas.`,
    en: `${primary.charAt(0).toUpperCase()}${secondary.charAt(0).toUpperCase()} Style: Mixed profile with balanced characteristics.`,
  };
}

function getLeadershipStyle(primary: DISCDimension): LocalizedString {
  const styles: Record<DISCDimension, LocalizedString> = {
    dominance: {
      es: 'Liderazgo directivo: toma de decisiones rápidas, orientado a resultados, delega con claridad.',
      en: 'Directive leadership: quick decision-making, results-oriented, delegates clearly.',
    },
    influence: {
      es: 'Liderazgo inspirador: motiva a través del entusiasmo, construye relaciones, fomenta la colaboración.',
      en: 'Inspirational leadership: motivates through enthusiasm, builds relationships, fosters collaboration.',
    },
    steadiness: {
      es: 'Liderazgo de apoyo: paciente, consistente, crea estabilidad y seguridad en el equipo.',
      en: 'Supportive leadership: patient, consistent, creates stability and security in the team.',
    },
    conscientiousness: {
      es: 'Liderazgo analítico: basado en datos, establece estándares altos, planificación detallada.',
      en: 'Analytical leadership: data-driven, sets high standards, detailed planning.',
    },
  };
  return styles[primary];
}

function getCommunicationStyle(primary: DISCDimension): LocalizedString {
  const styles: Record<DISCDimension, LocalizedString> = {
    dominance: {
      es: 'Comunicación directa y concisa. Prefiere ir al punto y enfocarse en resultados.',
      en: 'Direct and concise communication. Prefers getting to the point and focusing on results.',
    },
    influence: {
      es: 'Comunicación expresiva y entusiasta. Usa historias y ejemplos para conectar.',
      en: 'Expressive and enthusiastic communication. Uses stories and examples to connect.',
    },
    steadiness: {
      es: 'Comunicación cálida y escucha activa. Busca entender antes de ser entendido.',
      en: 'Warm communication and active listening. Seeks to understand before being understood.',
    },
    conscientiousness: {
      es: 'Comunicación precisa y detallada. Respalda ideas con datos y evidencia.',
      en: 'Precise and detailed communication. Backs ideas with data and evidence.',
    },
  };
  return styles[primary];
}

function getStrengths(primary: DISCDimension, secondary: DISCDimension): LocalizedString[] {
  const allStrengths: Record<DISCDimension, LocalizedString[]> = {
    dominance: [
      { es: 'Toma de decisiones rápida', en: 'Quick decision-making' },
      { es: 'Orientación a resultados', en: 'Results orientation' },
      { es: 'Capacidad para asumir riesgos calculados', en: 'Ability to take calculated risks' },
    ],
    influence: [
      { es: 'Habilidades interpersonales', en: 'Interpersonal skills' },
      { es: 'Capacidad de persuasión', en: 'Persuasion ability' },
      { es: 'Creatividad y optimismo', en: 'Creativity and optimism' },
    ],
    steadiness: [
      { es: 'Confiabilidad y consistencia', en: 'Reliability and consistency' },
      { es: 'Paciencia y escucha activa', en: 'Patience and active listening' },
      { es: 'Trabajo en equipo', en: 'Teamwork' },
    ],
    conscientiousness: [
      { es: 'Atención al detalle', en: 'Attention to detail' },
      { es: 'Pensamiento analítico', en: 'Analytical thinking' },
      { es: 'Cumplimiento de estándares de calidad', en: 'Quality standards compliance' },
    ],
  };

  return [...allStrengths[primary], allStrengths[secondary][0]];
}

function getChallenges(primary: DISCDimension): LocalizedString[] {
  const challenges: Record<DISCDimension, LocalizedString[]> = {
    dominance: [
      { es: 'Puede ser percibido como impaciente o agresivo', en: 'May be perceived as impatient or aggressive' },
      { es: 'Puede descuidar los sentimientos de los demás', en: 'May overlook others\' feelings' },
    ],
    influence: [
      { es: 'Puede perder enfoque en los detalles', en: 'May lose focus on details' },
      { es: 'Puede comprometerse en exceso', en: 'May overcommit' },
    ],
    steadiness: [
      { es: 'Puede resistirse al cambio', en: 'May resist change' },
      { es: 'Puede evitar la confrontación necesaria', en: 'May avoid necessary confrontation' },
    ],
    conscientiousness: [
      { es: 'Puede ser demasiado perfeccionista', en: 'May be overly perfectionist' },
      { es: 'Puede tardar en tomar decisiones', en: 'May take too long to decide' },
    ],
  };
  return challenges[primary];
}
