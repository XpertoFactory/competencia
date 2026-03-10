import type { PersonalityTestConfig, PersonalityStatement } from '@/types';

const statements: PersonalityStatement[] = [
  // ──────────────────────────────────────────────
  // OPENNESS (10 statements, 3 reversed)
  // ──────────────────────────────────────────────
  {
    id: 'pers-o1',
    content: {
      en: 'I enjoy trying new approaches to solving problems.',
      es: 'Disfruto probar nuevos enfoques para resolver problemas.',
    },
    trait: 'openness',
    isReversed: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'pers-o2',
    content: {
      en: 'I am curious about how other industries and fields operate.',
      es: 'Tengo curiosidad por cómo funcionan otras industrias y campos.',
    },
    trait: 'openness',
    isReversed: false,
    order: 2,
    isActive: true,
  },
  {
    id: 'pers-o3',
    content: {
      en: 'I prefer sticking to well-established methods rather than experimenting.',
      es: 'Prefiero seguir métodos bien establecidos en lugar de experimentar.',
    },
    trait: 'openness',
    isReversed: true,
    order: 3,
    isActive: true,
  },
  {
    id: 'pers-o4',
    content: {
      en: 'I like to think about abstract concepts and theoretical ideas.',
      es: 'Me gusta pensar en conceptos abstractos e ideas teóricas.',
    },
    trait: 'openness',
    isReversed: false,
    order: 4,
    isActive: true,
  },
  {
    id: 'pers-o5',
    content: {
      en: 'I actively seek out opportunities to learn new skills at work.',
      es: 'Busco activamente oportunidades para aprender nuevas habilidades en el trabajo.',
    },
    trait: 'openness',
    isReversed: false,
    order: 5,
    isActive: true,
  },
  {
    id: 'pers-o6',
    content: {
      en: 'I find it uncomfortable when routines are disrupted at work.',
      es: 'Me resulta incómodo cuando se interrumpen las rutinas en el trabajo.',
    },
    trait: 'openness',
    isReversed: true,
    order: 6,
    isActive: true,
  },
  {
    id: 'pers-o7',
    content: {
      en: 'I often suggest creative ideas during team meetings.',
      es: 'A menudo sugiero ideas creativas durante las reuniones de equipo.',
    },
    trait: 'openness',
    isReversed: false,
    order: 7,
    isActive: true,
  },
  {
    id: 'pers-o8',
    content: {
      en: 'I enjoy exploring different perspectives before making a decision.',
      es: 'Disfruto explorar diferentes perspectivas antes de tomar una decisión.',
    },
    trait: 'openness',
    isReversed: false,
    order: 8,
    isActive: true,
  },
  {
    id: 'pers-o9',
    content: {
      en: 'I have little interest in exploring unfamiliar topics.',
      es: 'Tengo poco interés en explorar temas desconocidos.',
    },
    trait: 'openness',
    isReversed: true,
    order: 9,
    isActive: true,
  },
  {
    id: 'pers-o10',
    content: {
      en: 'I am drawn to innovative projects that push boundaries.',
      es: 'Me atraen los proyectos innovadores que desafían los límites.',
    },
    trait: 'openness',
    isReversed: false,
    order: 10,
    isActive: true,
  },

  // ──────────────────────────────────────────────
  // CONSCIENTIOUSNESS (10 statements, 3 reversed)
  // ──────────────────────────────────────────────
  {
    id: 'pers-c1',
    content: {
      en: 'I always meet my deadlines, even under pressure.',
      es: 'Siempre cumplo con mis plazos, incluso bajo presión.',
    },
    trait: 'conscientiousness',
    isReversed: false,
    order: 11,
    isActive: true,
  },
  {
    id: 'pers-c2',
    content: {
      en: 'I keep my workspace and files well organized.',
      es: 'Mantengo mi espacio de trabajo y archivos bien organizados.',
    },
    trait: 'conscientiousness',
    isReversed: false,
    order: 12,
    isActive: true,
  },
  {
    id: 'pers-c3',
    content: {
      en: 'I sometimes leave tasks unfinished when I lose interest.',
      es: 'A veces dejo tareas sin terminar cuando pierdo el interés.',
    },
    trait: 'conscientiousness',
    isReversed: true,
    order: 13,
    isActive: true,
  },
  {
    id: 'pers-c4',
    content: {
      en: 'I pay close attention to details in my work.',
      es: 'Presto mucha atención a los detalles en mi trabajo.',
    },
    trait: 'conscientiousness',
    isReversed: false,
    order: 14,
    isActive: true,
  },
  {
    id: 'pers-c5',
    content: {
      en: 'I plan my tasks ahead of time to avoid last-minute rushes.',
      es: 'Planifico mis tareas con anticipación para evitar prisas de último momento.',
    },
    trait: 'conscientiousness',
    isReversed: false,
    order: 15,
    isActive: true,
  },
  {
    id: 'pers-c6',
    content: {
      en: 'I tend to act impulsively without thinking through consequences.',
      es: 'Tiendo a actuar impulsivamente sin pensar en las consecuencias.',
    },
    trait: 'conscientiousness',
    isReversed: true,
    order: 16,
    isActive: true,
  },
  {
    id: 'pers-c7',
    content: {
      en: 'I follow through on my commitments to colleagues and clients.',
      es: 'Cumplo con mis compromisos con colegas y clientes.',
    },
    trait: 'conscientiousness',
    isReversed: false,
    order: 17,
    isActive: true,
  },
  {
    id: 'pers-c8',
    content: {
      en: 'I set clear goals for myself and track my progress.',
      es: 'Me fijo metas claras y hago seguimiento de mi progreso.',
    },
    trait: 'conscientiousness',
    isReversed: false,
    order: 18,
    isActive: true,
  },
  {
    id: 'pers-c9',
    content: {
      en: 'I find it difficult to stay focused on repetitive tasks.',
      es: 'Me resulta difícil mantenerme enfocado en tareas repetitivas.',
    },
    trait: 'conscientiousness',
    isReversed: true,
    order: 19,
    isActive: true,
  },
  {
    id: 'pers-c10',
    content: {
      en: 'I double-check my work before submitting it.',
      es: 'Reviso mi trabajo dos veces antes de entregarlo.',
    },
    trait: 'conscientiousness',
    isReversed: false,
    order: 20,
    isActive: true,
  },

  // ──────────────────────────────────────────────
  // EXTRAVERSION (10 statements, 3 reversed)
  // ──────────────────────────────────────────────
  {
    id: 'pers-e1',
    content: {
      en: 'I feel energized after interacting with colleagues and clients.',
      es: 'Me siento con energía después de interactuar con colegas y clientes.',
    },
    trait: 'extraversion',
    isReversed: false,
    order: 21,
    isActive: true,
  },
  {
    id: 'pers-e2',
    content: {
      en: 'I enjoy taking the lead in group projects.',
      es: 'Disfruto tomar la iniciativa en proyectos grupales.',
    },
    trait: 'extraversion',
    isReversed: false,
    order: 22,
    isActive: true,
  },
  {
    id: 'pers-e3',
    content: {
      en: 'I prefer working alone rather than in a team setting.',
      es: 'Prefiero trabajar solo en lugar de en un entorno de equipo.',
    },
    trait: 'extraversion',
    isReversed: true,
    order: 23,
    isActive: true,
  },
  {
    id: 'pers-e4',
    content: {
      en: 'I am comfortable speaking up in meetings and presentations.',
      es: 'Me siento cómodo hablando en reuniones y presentaciones.',
    },
    trait: 'extraversion',
    isReversed: false,
    order: 24,
    isActive: true,
  },
  {
    id: 'pers-e5',
    content: {
      en: 'I build rapport easily with new people at work.',
      es: 'Establezco buenas relaciones fácilmente con personas nuevas en el trabajo.',
    },
    trait: 'extraversion',
    isReversed: false,
    order: 25,
    isActive: true,
  },
  {
    id: 'pers-e6',
    content: {
      en: 'I find large social gatherings at work draining.',
      es: 'Las grandes reuniones sociales en el trabajo me resultan agotadoras.',
    },
    trait: 'extraversion',
    isReversed: true,
    order: 26,
    isActive: true,
  },
  {
    id: 'pers-e7',
    content: {
      en: 'I actively participate in company events and activities.',
      es: 'Participo activamente en eventos y actividades de la empresa.',
    },
    trait: 'extraversion',
    isReversed: false,
    order: 27,
    isActive: true,
  },
  {
    id: 'pers-e8',
    content: {
      en: 'I enjoy networking and meeting people from different departments.',
      es: 'Disfruto hacer networking y conocer personas de diferentes departamentos.',
    },
    trait: 'extraversion',
    isReversed: false,
    order: 28,
    isActive: true,
  },
  {
    id: 'pers-e9',
    content: {
      en: 'I tend to stay quiet and observe rather than contribute in discussions.',
      es: 'Tiendo a mantenerme callado y observar en lugar de contribuir en las discusiones.',
    },
    trait: 'extraversion',
    isReversed: true,
    order: 29,
    isActive: true,
  },
  {
    id: 'pers-e10',
    content: {
      en: 'I feel confident motivating others toward a shared goal.',
      es: 'Me siento seguro motivando a otros hacia una meta compartida.',
    },
    trait: 'extraversion',
    isReversed: false,
    order: 30,
    isActive: true,
  },

  // ──────────────────────────────────────────────
  // AGREEABLENESS (10 statements, 4 reversed)
  // ──────────────────────────────────────────────
  {
    id: 'pers-a1',
    content: {
      en: 'I go out of my way to help a colleague who is struggling.',
      es: 'Hago un esfuerzo adicional para ayudar a un colega que tiene dificultades.',
    },
    trait: 'agreeableness',
    isReversed: false,
    order: 31,
    isActive: true,
  },
  {
    id: 'pers-a2',
    content: {
      en: 'I value cooperation over competition in the workplace.',
      es: 'Valoro la cooperación por encima de la competencia en el lugar de trabajo.',
    },
    trait: 'agreeableness',
    isReversed: false,
    order: 32,
    isActive: true,
  },
  {
    id: 'pers-a3',
    content: {
      en: 'I find it hard to trust the intentions of my coworkers.',
      es: 'Me resulta difícil confiar en las intenciones de mis compañeros de trabajo.',
    },
    trait: 'agreeableness',
    isReversed: true,
    order: 33,
    isActive: true,
  },
  {
    id: 'pers-a4',
    content: {
      en: 'I try to understand the other person\'s point of view during disagreements.',
      es: 'Intento entender el punto de vista de la otra persona durante los desacuerdos.',
    },
    trait: 'agreeableness',
    isReversed: false,
    order: 34,
    isActive: true,
  },
  {
    id: 'pers-a5',
    content: {
      en: 'I am willing to compromise to maintain a positive team dynamic.',
      es: 'Estoy dispuesto a hacer concesiones para mantener una dinámica de equipo positiva.',
    },
    trait: 'agreeableness',
    isReversed: false,
    order: 35,
    isActive: true,
  },
  {
    id: 'pers-a6',
    content: {
      en: 'I tend to be critical of others\' ideas without offering alternatives.',
      es: 'Tiendo a ser crítico con las ideas de otros sin ofrecer alternativas.',
    },
    trait: 'agreeableness',
    isReversed: true,
    order: 36,
    isActive: true,
  },
  {
    id: 'pers-a7',
    content: {
      en: 'I treat everyone with respect, regardless of their role or seniority.',
      es: 'Trato a todos con respeto, independientemente de su rol o antigüedad.',
    },
    trait: 'agreeableness',
    isReversed: false,
    order: 37,
    isActive: true,
  },
  {
    id: 'pers-a8',
    content: {
      en: 'I become impatient when others work at a slower pace than me.',
      es: 'Me impaciento cuando otros trabajan a un ritmo más lento que el mío.',
    },
    trait: 'agreeableness',
    isReversed: true,
    order: 38,
    isActive: true,
  },
  {
    id: 'pers-a9',
    content: {
      en: 'I celebrate my teammates\' successes as if they were my own.',
      es: 'Celebro los éxitos de mis compañeros de equipo como si fueran propios.',
    },
    trait: 'agreeableness',
    isReversed: false,
    order: 39,
    isActive: true,
  },
  {
    id: 'pers-a10',
    content: {
      en: 'I prioritize my own goals over the needs of the team.',
      es: 'Priorizo mis propias metas sobre las necesidades del equipo.',
    },
    trait: 'agreeableness',
    isReversed: true,
    order: 40,
    isActive: true,
  },

  // ──────────────────────────────────────────────
  // NEUROTICISM (10 statements, 4 reversed)
  // ──────────────────────────────────────────────
  {
    id: 'pers-n1',
    content: {
      en: 'I often feel anxious about upcoming deadlines or evaluations.',
      es: 'A menudo me siento ansioso por los plazos o evaluaciones próximas.',
    },
    trait: 'neuroticism',
    isReversed: false,
    order: 41,
    isActive: true,
  },
  {
    id: 'pers-n2',
    content: {
      en: 'I find it easy to stay calm under pressure.',
      es: 'Me resulta fácil mantener la calma bajo presión.',
    },
    trait: 'neuroticism',
    isReversed: true,
    order: 42,
    isActive: true,
  },
  {
    id: 'pers-n3',
    content: {
      en: 'I tend to dwell on mistakes I have made at work.',
      es: 'Tiendo a darle vueltas a los errores que he cometido en el trabajo.',
    },
    trait: 'neuroticism',
    isReversed: false,
    order: 43,
    isActive: true,
  },
  {
    id: 'pers-n4',
    content: {
      en: 'I remain composed and level-headed during workplace conflicts.',
      es: 'Me mantengo sereno y ecuánime durante los conflictos laborales.',
    },
    trait: 'neuroticism',
    isReversed: true,
    order: 44,
    isActive: true,
  },
  {
    id: 'pers-n5',
    content: {
      en: 'I get frustrated easily when things do not go as planned.',
      es: 'Me frustro fácilmente cuando las cosas no salen según lo planeado.',
    },
    trait: 'neuroticism',
    isReversed: false,
    order: 45,
    isActive: true,
  },
  {
    id: 'pers-n6',
    content: {
      en: 'I worry about how others perceive my work performance.',
      es: 'Me preocupa cómo los demás perciben mi desempeño laboral.',
    },
    trait: 'neuroticism',
    isReversed: false,
    order: 46,
    isActive: true,
  },
  {
    id: 'pers-n7',
    content: {
      en: 'I recover quickly from setbacks and disappointments.',
      es: 'Me recupero rápidamente de los contratiempos y decepciones.',
    },
    trait: 'neuroticism',
    isReversed: true,
    order: 47,
    isActive: true,
  },
  {
    id: 'pers-n8',
    content: {
      en: 'I feel overwhelmed when handling multiple responsibilities at once.',
      es: 'Me siento abrumado cuando manejo múltiples responsabilidades a la vez.',
    },
    trait: 'neuroticism',
    isReversed: false,
    order: 48,
    isActive: true,
  },
  {
    id: 'pers-n9',
    content: {
      en: 'I maintain a positive outlook even during challenging projects.',
      es: 'Mantengo una actitud positiva incluso durante proyectos desafiantes.',
    },
    trait: 'neuroticism',
    isReversed: true,
    order: 49,
    isActive: true,
  },
  {
    id: 'pers-n10',
    content: {
      en: 'I experience mood swings that affect my productivity.',
      es: 'Experimento cambios de humor que afectan mi productividad.',
    },
    trait: 'neuroticism',
    isReversed: false,
    order: 50,
    isActive: true,
  },
];

export const personalityTestConfig: PersonalityTestConfig = {
  id: 'big-five-personality-v1',
  name: {
    en: 'Big Five Personality Assessment',
    es: 'Evaluación de Personalidad de los Cinco Grandes',
  },
  description: {
    en: 'This assessment measures five broad dimensions of personality relevant to workplace behavior: Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism. Rate each statement based on how accurately it describes you.',
    es: 'Esta evaluación mide cinco dimensiones amplias de la personalidad relevantes para el comportamiento laboral: Apertura, Responsabilidad, Extraversión, Amabilidad y Neuroticismo. Califique cada afirmación según qué tan bien lo describe.',
  },
  statements,
  scaleMin: 1,
  scaleMax: 5,
  scaleLabels: {
    min: {
      en: 'Strongly Disagree',
      es: 'Totalmente en desacuerdo',
    },
    max: {
      en: 'Strongly Agree',
      es: 'Totalmente de acuerdo',
    },
  },
  isActive: true,
};
