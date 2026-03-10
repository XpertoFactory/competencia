import type { DISCTestConfig, DISCForcedChoice } from '@/types';

const forcedChoices: DISCForcedChoice[] = [
  // ===== Dominance vs Influence (4 pairs) =====
  {
    id: 'disc-01',
    optionA: {
      text: {
        es: 'Prefiero tomar el control de las situaciones dificiles',
        en: 'I prefer taking control of difficult situations',
      },
      dimension: 'dominance',
    },
    optionB: {
      text: {
        es: 'Prefiero motivar al equipo para superar los desafios juntos',
        en: 'I prefer motivating the team to overcome challenges together',
      },
      dimension: 'influence',
    },
    order: 1,
    isActive: true,
  },
  {
    id: 'disc-02',
    optionA: {
      text: {
        es: 'Me enfoco en obtener resultados concretos rapidamente',
        en: 'I focus on getting concrete results quickly',
      },
      dimension: 'dominance',
    },
    optionB: {
      text: {
        es: 'Me enfoco en construir relaciones positivas con los clientes',
        en: 'I focus on building positive relationships with clients',
      },
      dimension: 'influence',
    },
    order: 2,
    isActive: true,
  },
  {
    id: 'disc-03',
    optionA: {
      text: {
        es: 'Disfruto persuadir a otros con entusiasmo y energia',
        en: 'I enjoy persuading others with enthusiasm and energy',
      },
      dimension: 'influence',
    },
    optionB: {
      text: {
        es: 'Disfruto superar obstaculos y alcanzar metas ambiciosas',
        en: 'I enjoy overcoming obstacles and reaching ambitious goals',
      },
      dimension: 'dominance',
    },
    order: 3,
    isActive: true,
  },
  {
    id: 'disc-04',
    optionA: {
      text: {
        es: 'Prefiero liderar reuniones y dirigir la conversacion',
        en: 'I prefer leading meetings and directing the conversation',
      },
      dimension: 'dominance',
    },
    optionB: {
      text: {
        es: 'Prefiero animar a todos a participar y compartir ideas',
        en: 'I prefer encouraging everyone to participate and share ideas',
      },
      dimension: 'influence',
    },
    order: 4,
    isActive: true,
  },

  // ===== Dominance vs Steadiness (4 pairs) =====
  {
    id: 'disc-05',
    optionA: {
      text: {
        es: 'Prefiero tomar decisiones rapidas aunque impliquen riesgo',
        en: 'I prefer making quick decisions even if they involve risk',
      },
      dimension: 'dominance',
    },
    optionB: {
      text: {
        es: 'Prefiero avanzar con cautela para asegurar estabilidad',
        en: 'I prefer moving cautiously to ensure stability',
      },
      dimension: 'steadiness',
    },
    order: 5,
    isActive: true,
  },
  {
    id: 'disc-06',
    optionA: {
      text: {
        es: 'Me siento comodo desafiando el statu quo en la organizacion',
        en: 'I feel comfortable challenging the status quo in the organization',
      },
      dimension: 'dominance',
    },
    optionB: {
      text: {
        es: 'Me siento comodo manteniendo procesos que ya funcionan bien',
        en: 'I feel comfortable maintaining processes that already work well',
      },
      dimension: 'steadiness',
    },
    order: 6,
    isActive: true,
  },
  {
    id: 'disc-07',
    optionA: {
      text: {
        es: 'Valoro la lealtad y el compromiso a largo plazo con el equipo',
        en: 'I value loyalty and long-term commitment to the team',
      },
      dimension: 'steadiness',
    },
    optionB: {
      text: {
        es: 'Valoro la competitividad y la capacidad de ganar nuevas cuentas',
        en: 'I value competitiveness and the ability to win new accounts',
      },
      dimension: 'dominance',
    },
    order: 7,
    isActive: true,
  },
  {
    id: 'disc-08',
    optionA: {
      text: {
        es: 'Ante un conflicto con un cliente, busco imponer una solucion clara',
        en: 'When facing a client conflict, I seek to impose a clear solution',
      },
      dimension: 'dominance',
    },
    optionB: {
      text: {
        es: 'Ante un conflicto con un cliente, busco escuchar y mediar pacientemente',
        en: 'When facing a client conflict, I seek to listen and mediate patiently',
      },
      dimension: 'steadiness',
    },
    order: 8,
    isActive: true,
  },

  // ===== Dominance vs Conscientiousness (4 pairs) =====
  {
    id: 'disc-09',
    optionA: {
      text: {
        es: 'Prefiero actuar con rapidez y ajustar sobre la marcha',
        en: 'I prefer acting quickly and adjusting on the go',
      },
      dimension: 'dominance',
    },
    optionB: {
      text: {
        es: 'Prefiero analizar todos los datos antes de decidir',
        en: 'I prefer analyzing all data before deciding',
      },
      dimension: 'conscientiousness',
    },
    order: 9,
    isActive: true,
  },
  {
    id: 'disc-10',
    optionA: {
      text: {
        es: 'Me motiva alcanzar objetivos de ventas agresivos',
        en: 'I am motivated by reaching aggressive sales targets',
      },
      dimension: 'dominance',
    },
    optionB: {
      text: {
        es: 'Me motiva asegurar la precision en las polizas y documentos',
        en: 'I am motivated by ensuring accuracy in policies and documents',
      },
      dimension: 'conscientiousness',
    },
    order: 10,
    isActive: true,
  },
  {
    id: 'disc-11',
    optionA: {
      text: {
        es: 'Prefiero seguir procedimientos establecidos y normas claras',
        en: 'I prefer following established procedures and clear rules',
      },
      dimension: 'conscientiousness',
    },
    optionB: {
      text: {
        es: 'Prefiero crear mis propias reglas y buscar nuevos caminos',
        en: 'I prefer creating my own rules and seeking new paths',
      },
      dimension: 'dominance',
    },
    order: 11,
    isActive: true,
  },
  {
    id: 'disc-12',
    optionA: {
      text: {
        es: 'Tomo decisiones basandome en mi instinto y experiencia',
        en: 'I make decisions based on my instinct and experience',
      },
      dimension: 'dominance',
    },
    optionB: {
      text: {
        es: 'Tomo decisiones basandome en analisis detallados y evidencia',
        en: 'I make decisions based on detailed analysis and evidence',
      },
      dimension: 'conscientiousness',
    },
    order: 12,
    isActive: true,
  },

  // ===== Influence vs Steadiness (5 pairs) =====
  {
    id: 'disc-13',
    optionA: {
      text: {
        es: 'Disfruto conocer gente nueva y ampliar mi red de contactos',
        en: 'I enjoy meeting new people and expanding my network',
      },
      dimension: 'influence',
    },
    optionB: {
      text: {
        es: 'Disfruto profundizar relaciones con clientes existentes',
        en: 'I enjoy deepening relationships with existing clients',
      },
      dimension: 'steadiness',
    },
    order: 13,
    isActive: true,
  },
  {
    id: 'disc-14',
    optionA: {
      text: {
        es: 'Me adapto facilmente a los cambios en el entorno laboral',
        en: 'I adapt easily to changes in the work environment',
      },
      dimension: 'influence',
    },
    optionB: {
      text: {
        es: 'Prefiero un entorno laboral predecible y estable',
        en: 'I prefer a predictable and stable work environment',
      },
      dimension: 'steadiness',
    },
    order: 14,
    isActive: true,
  },
  {
    id: 'disc-15',
    optionA: {
      text: {
        es: 'Prefiero trabajar en equipo y apoyar a mis companeros constantemente',
        en: 'I prefer working in a team and consistently supporting my colleagues',
      },
      dimension: 'steadiness',
    },
    optionB: {
      text: {
        es: 'Prefiero presentar ideas ante grupos grandes con confianza',
        en: 'I prefer presenting ideas to large groups with confidence',
      },
      dimension: 'influence',
    },
    order: 15,
    isActive: true,
  },
  {
    id: 'disc-16',
    optionA: {
      text: {
        es: 'Me gusta generar entusiasmo al presentar nuevos productos de seguros',
        en: 'I like generating enthusiasm when presenting new insurance products',
      },
      dimension: 'influence',
    },
    optionB: {
      text: {
        es: 'Me gusta dar seguimiento constante a las necesidades del cliente',
        en: 'I like consistently following up on client needs',
      },
      dimension: 'steadiness',
    },
    order: 16,
    isActive: true,
  },
  {
    id: 'disc-17',
    optionA: {
      text: {
        es: 'Manejo el estres manteniendo la calma y la rutina',
        en: 'I handle stress by staying calm and maintaining routine',
      },
      dimension: 'steadiness',
    },
    optionB: {
      text: {
        es: 'Manejo el estres hablando con otros y buscando apoyo social',
        en: 'I handle stress by talking to others and seeking social support',
      },
      dimension: 'influence',
    },
    order: 17,
    isActive: true,
  },

  // ===== Influence vs Conscientiousness (5 pairs) =====
  {
    id: 'disc-18',
    optionA: {
      text: {
        es: 'Prefiero convencer a los clientes con entusiasmo y carisma',
        en: 'I prefer convincing clients with enthusiasm and charisma',
      },
      dimension: 'influence',
    },
    optionB: {
      text: {
        es: 'Prefiero convencer a los clientes con datos y hechos solidos',
        en: 'I prefer convincing clients with solid data and facts',
      },
      dimension: 'conscientiousness',
    },
    order: 18,
    isActive: true,
  },
  {
    id: 'disc-19',
    optionA: {
      text: {
        es: 'Me siento comodo improvisando durante una presentacion',
        en: 'I feel comfortable improvising during a presentation',
      },
      dimension: 'influence',
    },
    optionB: {
      text: {
        es: 'Me siento comodo cuando tengo todo preparado con anticipacion',
        en: 'I feel comfortable when I have everything prepared in advance',
      },
      dimension: 'conscientiousness',
    },
    order: 19,
    isActive: true,
  },
  {
    id: 'disc-20',
    optionA: {
      text: {
        es: 'Verifico cada detalle de un contrato antes de presentarlo',
        en: 'I verify every detail of a contract before presenting it',
      },
      dimension: 'conscientiousness',
    },
    optionB: {
      text: {
        es: 'Me concentro en la vision general y dejo los detalles para despues',
        en: 'I focus on the big picture and leave details for later',
      },
      dimension: 'influence',
    },
    order: 20,
    isActive: true,
  },
  {
    id: 'disc-21',
    optionA: {
      text: {
        es: 'Valoro la creatividad y las nuevas ideas en las estrategias de venta',
        en: 'I value creativity and new ideas in sales strategies',
      },
      dimension: 'influence',
    },
    optionB: {
      text: {
        es: 'Valoro la consistencia y el cumplimiento de los estandares de calidad',
        en: 'I value consistency and adherence to quality standards',
      },
      dimension: 'conscientiousness',
    },
    order: 21,
    isActive: true,
  },
  {
    id: 'disc-22',
    optionA: {
      text: {
        es: 'Organizo mi trabajo con listas detalladas y plazos claros',
        en: 'I organize my work with detailed lists and clear deadlines',
      },
      dimension: 'conscientiousness',
    },
    optionB: {
      text: {
        es: 'Organizo mi trabajo de manera flexible segun las oportunidades que surjan',
        en: 'I organize my work flexibly based on opportunities that arise',
      },
      dimension: 'influence',
    },
    order: 22,
    isActive: true,
  },

  // ===== Steadiness vs Conscientiousness (6 pairs) =====
  {
    id: 'disc-23',
    optionA: {
      text: {
        es: 'Priorizo mantener la armonia en el equipo de trabajo',
        en: 'I prioritize maintaining harmony in the work team',
      },
      dimension: 'steadiness',
    },
    optionB: {
      text: {
        es: 'Priorizo cumplir con los estandares y regulaciones establecidas',
        en: 'I prioritize meeting established standards and regulations',
      },
      dimension: 'conscientiousness',
    },
    order: 23,
    isActive: true,
  },
  {
    id: 'disc-24',
    optionA: {
      text: {
        es: 'Me aseguro de que cada documento cumpla con las normativas vigentes',
        en: 'I make sure every document complies with current regulations',
      },
      dimension: 'conscientiousness',
    },
    optionB: {
      text: {
        es: 'Me aseguro de que cada miembro del equipo se sienta valorado y escuchado',
        en: 'I make sure every team member feels valued and heard',
      },
      dimension: 'steadiness',
    },
    order: 24,
    isActive: true,
  },
  {
    id: 'disc-25',
    optionA: {
      text: {
        es: 'Ante un problema, busco una solucion que satisfaga a todas las partes',
        en: 'When facing a problem, I seek a solution that satisfies all parties',
      },
      dimension: 'steadiness',
    },
    optionB: {
      text: {
        es: 'Ante un problema, busco la solucion tecnicamente mas correcta',
        en: 'When facing a problem, I seek the most technically correct solution',
      },
      dimension: 'conscientiousness',
    },
    order: 25,
    isActive: true,
  },
  {
    id: 'disc-26',
    optionA: {
      text: {
        es: 'Prefiero revisar minuciosamente los riesgos antes de emitir una poliza',
        en: 'I prefer thoroughly reviewing risks before issuing a policy',
      },
      dimension: 'conscientiousness',
    },
    optionB: {
      text: {
        es: 'Prefiero construir confianza con el cliente para entender sus necesidades reales',
        en: 'I prefer building trust with the client to understand their real needs',
      },
      dimension: 'steadiness',
    },
    order: 26,
    isActive: true,
  },
  {
    id: 'disc-27',
    optionA: {
      text: {
        es: 'Me destaco por mi paciencia y disposicion para ayudar a otros',
        en: 'I stand out for my patience and willingness to help others',
      },
      dimension: 'steadiness',
    },
    optionB: {
      text: {
        es: 'Me destaco por mi atencion al detalle y pensamiento analitico',
        en: 'I stand out for my attention to detail and analytical thinking',
      },
      dimension: 'conscientiousness',
    },
    order: 27,
    isActive: true,
  },
  {
    id: 'disc-28',
    optionA: {
      text: {
        es: 'Prefiero documentar cada paso del proceso para futuras referencias',
        en: 'I prefer documenting every step of the process for future reference',
      },
      dimension: 'conscientiousness',
    },
    optionB: {
      text: {
        es: 'Prefiero dedicar tiempo a escuchar las preocupaciones de mi equipo',
        en: 'I prefer spending time listening to my team\'s concerns',
      },
      dimension: 'steadiness',
    },
    order: 28,
    isActive: true,
  },
];

export const discTestConfig: DISCTestConfig = {
  id: 'disc-test-default',
  name: {
    es: 'Evaluacion de Comportamiento DISC',
    en: 'DISC Behavioral Assessment',
  },
  description: {
    es: 'Esta evaluacion mide tu estilo de comportamiento en el entorno laboral profesional de seguros. Para cada par de afirmaciones, selecciona la que mejor te describe. No hay respuestas correctas o incorrectas.',
    en: 'This assessment measures your behavioral style in the professional insurance work environment. For each pair of statements, select the one that best describes you. There are no right or wrong answers.',
  },
  forcedChoices,
  isActive: true,
};
