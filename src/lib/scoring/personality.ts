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
      },
      medium: {
        es: 'Apertura moderada. Equilibrio entre innovación y tradición.',
        en: 'Moderate openness. Balance between innovation and tradition.',
      },
      low: {
        es: 'Prefiere lo conocido y probado. Práctico y convencional.',
        en: 'Prefers the known and proven. Practical and conventional.',
      },
    }),
    conscientiousness: getTraitLevel(scores.conscientiousness, {
      high: {
        es: 'Altamente organizado, disciplinado y orientado a metas.',
        en: 'Highly organized, disciplined, and goal-oriented.',
      },
      medium: {
        es: 'Moderadamente organizado. Flexible con estructura cuando es necesario.',
        en: 'Moderately organized. Flexible with structure when needed.',
      },
      low: {
        es: 'Prefiere la espontaneidad y flexibilidad sobre la estructura rígida.',
        en: 'Prefers spontaneity and flexibility over rigid structure.',
      },
    }),
    extraversion: getTraitLevel(scores.extraversion, {
      high: {
        es: 'Extrovertido, sociable y energizado por la interacción social.',
        en: 'Extroverted, sociable, and energized by social interaction.',
      },
      medium: {
        es: 'Ambivertido. Cómodo tanto en grupos como en soledad.',
        en: 'Ambivert. Comfortable both in groups and alone.',
      },
      low: {
        es: 'Introvertido, reflexivo y prefiere trabajar de forma independiente.',
        en: 'Introverted, reflective, and prefers working independently.',
      },
    }),
    agreeableness: getTraitLevel(scores.agreeableness, {
      high: {
        es: 'Altamente cooperativo, empático y orientado al consenso.',
        en: 'Highly cooperative, empathetic, and consensus-oriented.',
      },
      medium: {
        es: 'Equilibrio entre cooperación y asertividad.',
        en: 'Balance between cooperation and assertiveness.',
      },
      low: {
        es: 'Directo, competitivo y orientado a resultados individuales.',
        en: 'Direct, competitive, and individually results-oriented.',
      },
    }),
    neuroticism: getTraitLevel(scores.neuroticism, {
      high: {
        es: 'Sensible al estrés. Puede beneficiarse de técnicas de manejo emocional.',
        en: 'Sensitive to stress. Could benefit from emotional management techniques.',
      },
      medium: {
        es: 'Estabilidad emocional moderada. Maneja la presión razonablemente bien.',
        en: 'Moderate emotional stability. Handles pressure reasonably well.',
      },
      low: {
        es: 'Emocionalmente estable, tranquilo y resiliente ante la presión.',
        en: 'Emotionally stable, calm, and resilient under pressure.',
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
    };
  }
  if (isHighC && isLowN) {
    return {
      es: 'Profesional confiable y estable. Excelente para roles que requieren precisión y consistencia.',
      en: 'Reliable and stable professional. Excellent for roles requiring precision and consistency.',
    };
  }
  if (isHighE && isHighA) {
    return {
      es: 'Persona orientada a las relaciones. Fuerte en roles de servicio al cliente y ventas consultivas.',
      en: 'People-oriented person. Strong in customer service and consultative sales roles.',
    };
  }

  return {
    es: 'Perfil con fortalezas definidas que contribuyen a su estilo profesional único.',
    en: 'Profile with defined strengths that contribute to a unique professional style.',
  };
}
