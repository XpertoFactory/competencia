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
      fr: 'Style DI : Leader dynamique et persuasif. Orienté résultats avec la capacité d\'influencer les autres.',
    },
    'dominance-conscientiousness': {
      es: 'Estilo DC: Líder analítico y decisivo. Combina acción rápida con atención al detalle.',
      en: 'DC Style: Analytical and decisive leader. Combines quick action with attention to detail.',
      fr: 'Style DC : Leader analytique et décisif. Combine action rapide et attention aux détails.',
    },
    'dominance-steadiness': {
      es: 'Estilo DS: Líder determinado y persistente. Mantiene el rumbo con firmeza y consistencia.',
      en: 'DS Style: Determined and persistent leader. Stays the course with firmness and consistency.',
      fr: 'Style DS : Leader déterminé et persistant. Maintient le cap avec fermeté et constance.',
    },
    'influence-dominance': {
      es: 'Estilo ID: Comunicador carismático y orientado a la acción. Motiva e impulsa equipos.',
      en: 'ID Style: Charismatic communicator and action-oriented. Motivates and drives teams.',
      fr: 'Style ID : Communicateur charismatique et orienté vers l\'action. Motive et dynamise les équipes.',
    },
    'influence-steadiness': {
      es: 'Estilo IS: Relacionista empático y paciente. Construye relaciones sólidas y colaborativas.',
      en: 'IS Style: Empathetic and patient relationship builder. Builds solid, collaborative relationships.',
      fr: 'Style IS : Relationnel empathique et patient. Construit des relations solides et collaboratives.',
    },
    'influence-conscientiousness': {
      es: 'Estilo IC: Comunicador detallista. Inspira confianza a través de datos y entusiasmo.',
      en: 'IC Style: Detail-oriented communicator. Inspires confidence through data and enthusiasm.',
      fr: 'Style IC : Communicateur méticuleux. Inspire confiance par les données et l\'enthousiasme.',
    },
    'steadiness-influence': {
      es: 'Estilo SI: Colaborador leal y sociable. Crea armonía en equipos con calidez y consistencia.',
      en: 'SI Style: Loyal and sociable collaborator. Creates team harmony with warmth and consistency.',
      fr: 'Style SI : Collaborateur loyal et sociable. Crée l\'harmonie dans les équipes avec chaleur et constance.',
    },
    'steadiness-conscientiousness': {
      es: 'Estilo SC: Profesional confiable y metódico. Trabaja con precisión y consistencia.',
      en: 'SC Style: Reliable and methodical professional. Works with precision and consistency.',
      fr: 'Style SC : Professionnel fiable et méthodique. Travaille avec précision et constance.',
    },
    'steadiness-dominance': {
      es: 'Estilo SD: Trabajador constante con capacidad de liderazgo cuando es necesario.',
      en: 'SD Style: Steady worker with leadership capability when needed.',
      fr: 'Style SD : Travailleur constant avec capacité de leadership quand nécessaire.',
    },
    'conscientiousness-dominance': {
      es: 'Estilo CD: Analista estratégico. Toma decisiones basadas en datos con determinación.',
      en: 'CD Style: Strategic analyst. Makes data-driven decisions with determination.',
      fr: 'Style CD : Analyste stratégique. Prend des décisions basées sur les données avec détermination.',
    },
    'conscientiousness-steadiness': {
      es: 'Estilo CS: Especialista meticuloso y paciente. Excelente en tareas que requieren precisión.',
      en: 'CS Style: Meticulous and patient specialist. Excellent in tasks requiring precision.',
      fr: 'Style CS : Spécialiste méticuleux et patient. Excellent dans les tâches nécessitant de la précision.',
    },
    'conscientiousness-influence': {
      es: 'Estilo CI: Experto comunicativo. Presenta análisis complejos de forma accesible.',
      en: 'CI Style: Communicative expert. Presents complex analyses in an accessible way.',
      fr: 'Style CI : Expert communicatif. Présente des analyses complexes de manière accessible.',
    },
  };

  const key = `${primary}-${secondary}`;
  return descriptions[key] || {
    es: `Estilo ${primary.charAt(0).toUpperCase()}${secondary.charAt(0).toUpperCase()}: Perfil mixto con características balanceadas.`,
    en: `${primary.charAt(0).toUpperCase()}${secondary.charAt(0).toUpperCase()} Style: Mixed profile with balanced characteristics.`,
    fr: `Style ${primary.charAt(0).toUpperCase()}${secondary.charAt(0).toUpperCase()} : Profil mixte avec des caractéristiques équilibrées.`,
  };
}

function getLeadershipStyle(primary: DISCDimension): LocalizedString {
  const styles: Record<DISCDimension, LocalizedString> = {
    dominance: {
      es: 'Liderazgo directivo: toma de decisiones rápidas, orientado a resultados, delega con claridad.',
      en: 'Directive leadership: quick decision-making, results-oriented, delegates clearly.',
      fr: 'Leadership directif : prise de décision rapide, orienté résultats, délègue clairement.',
    },
    influence: {
      es: 'Liderazgo inspirador: motiva a través del entusiasmo, construye relaciones, fomenta la colaboración.',
      en: 'Inspirational leadership: motivates through enthusiasm, builds relationships, fosters collaboration.',
      fr: 'Leadership inspirant : motive par l\'enthousiasme, construit des relations, favorise la collaboration.',
    },
    steadiness: {
      es: 'Liderazgo de apoyo: paciente, consistente, crea estabilidad y seguridad en el equipo.',
      en: 'Supportive leadership: patient, consistent, creates stability and security in the team.',
      fr: 'Leadership de soutien : patient, constant, crée stabilité et sécurité dans l\'équipe.',
    },
    conscientiousness: {
      es: 'Liderazgo analítico: basado en datos, establece estándares altos, planificación detallada.',
      en: 'Analytical leadership: data-driven, sets high standards, detailed planning.',
      fr: 'Leadership analytique : basé sur les données, établit des normes élevées, planification détaillée.',
    },
  };
  return styles[primary];
}

function getCommunicationStyle(primary: DISCDimension): LocalizedString {
  const styles: Record<DISCDimension, LocalizedString> = {
    dominance: {
      es: 'Comunicación directa y concisa. Prefiere ir al punto y enfocarse en resultados.',
      en: 'Direct and concise communication. Prefers getting to the point and focusing on results.',
      fr: 'Communication directe et concise. Préfère aller droit au but et se concentrer sur les résultats.',
    },
    influence: {
      es: 'Comunicación expresiva y entusiasta. Usa historias y ejemplos para conectar.',
      en: 'Expressive and enthusiastic communication. Uses stories and examples to connect.',
      fr: 'Communication expressive et enthousiaste. Utilise des histoires et des exemples pour créer des liens.',
    },
    steadiness: {
      es: 'Comunicación cálida y escucha activa. Busca entender antes de ser entendido.',
      en: 'Warm communication and active listening. Seeks to understand before being understood.',
      fr: 'Communication chaleureuse et écoute active. Cherche à comprendre avant d\'être compris.',
    },
    conscientiousness: {
      es: 'Comunicación precisa y detallada. Respalda ideas con datos y evidencia.',
      en: 'Precise and detailed communication. Backs ideas with data and evidence.',
      fr: 'Communication précise et détaillée. Appuie les idées avec des données et des preuves.',
    },
  };
  return styles[primary];
}

function getStrengths(primary: DISCDimension, secondary: DISCDimension): LocalizedString[] {
  const allStrengths: Record<DISCDimension, LocalizedString[]> = {
    dominance: [
      { es: 'Toma de decisiones rápida', en: 'Quick decision-making', fr: 'Prise de décision rapide' },
      { es: 'Orientación a resultados', en: 'Results orientation', fr: 'Orientation résultats' },
      { es: 'Capacidad para asumir riesgos calculados', en: 'Ability to take calculated risks', fr: 'Capacité à prendre des risques calculés' },
    ],
    influence: [
      { es: 'Habilidades interpersonales', en: 'Interpersonal skills', fr: 'Compétences interpersonnelles' },
      { es: 'Capacidad de persuasión', en: 'Persuasion ability', fr: 'Capacité de persuasion' },
      { es: 'Creatividad y optimismo', en: 'Creativity and optimism', fr: 'Créativité et optimisme' },
    ],
    steadiness: [
      { es: 'Confiabilidad y consistencia', en: 'Reliability and consistency', fr: 'Fiabilité et constance' },
      { es: 'Paciencia y escucha activa', en: 'Patience and active listening', fr: 'Patience et écoute active' },
      { es: 'Trabajo en equipo', en: 'Teamwork', fr: 'Travail en équipe' },
    ],
    conscientiousness: [
      { es: 'Atención al detalle', en: 'Attention to detail', fr: 'Attention aux détails' },
      { es: 'Pensamiento analítico', en: 'Analytical thinking', fr: 'Pensée analytique' },
      { es: 'Cumplimiento de estándares de calidad', en: 'Quality standards compliance', fr: 'Respect des normes de qualité' },
    ],
  };

  return [...allStrengths[primary], allStrengths[secondary][0]];
}

function getChallenges(primary: DISCDimension): LocalizedString[] {
  const challenges: Record<DISCDimension, LocalizedString[]> = {
    dominance: [
      { es: 'Puede ser percibido como impaciente o agresivo', en: 'May be perceived as impatient or aggressive', fr: 'Peut être perçu comme impatient ou agressif' },
      { es: 'Puede descuidar los sentimientos de los demás', en: 'May overlook others\' feelings', fr: 'Peut négliger les sentiments des autres' },
    ],
    influence: [
      { es: 'Puede perder enfoque en los detalles', en: 'May lose focus on details', fr: 'Peut perdre le focus sur les détails' },
      { es: 'Puede comprometerse en exceso', en: 'May overcommit', fr: 'Peut s\'engager de manière excessive' },
    ],
    steadiness: [
      { es: 'Puede resistirse al cambio', en: 'May resist change', fr: 'Peut résister au changement' },
      { es: 'Puede evitar la confrontación necesaria', en: 'May avoid necessary confrontation', fr: 'Peut éviter la confrontation nécessaire' },
    ],
    conscientiousness: [
      { es: 'Puede ser demasiado perfeccionista', en: 'May be overly perfectionist', fr: 'Peut être trop perfectionniste' },
      { es: 'Puede tardar en tomar decisiones', en: 'May take too long to decide', fr: 'Peut prendre trop de temps pour décider' },
    ],
  };
  return challenges[primary];
}
