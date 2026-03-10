import type { Question } from '@/types';

// ============================================================================
// PRE-SCHOOL EDUCATOR QUESTIONS
// ============================================================================

// ---------- PROFESSIONAL SKILLS (edu-preschool-professional) ----------

export const preSchoolProfessionalQuestions: Question[] = [
  // --- Early Childhood Development ---
  {
    id: 'pse-ecd-01',
    profileId: 'pre-school-educator',
    categoryId: 'edu-preschool-professional',
    competencyId: 'early-childhood-development',
    type: 'multiple-choice',
    content: {
      es: 'Un niño de 4 años muestra dificultad para compartir juguetes con sus compañeros y reacciona con llanto cuando se le pide que los preste. ¿Cuál es la interpretación más adecuada de esta conducta?',
      en: 'A 4-year-old child has difficulty sharing toys with peers and reacts by crying when asked to share. What is the most appropriate interpretation of this behavior?',
      fr: 'Un enfant de 4 ans a du mal à partager ses jouets avec ses camarades et réagit en pleurant lorsqu\'on lui demande de les prêter. Quelle est l\'interprétation la plus appropriée de ce comportement ?',
    },
    options: [
      { id: 'a', text: { es: 'Es una señal de un problema conductual grave que requiere intervención especializada', en: 'It is a sign of a serious behavioral problem requiring specialized intervention', fr: 'C\'est le signe d\'un problème comportemental grave nécessitant une intervention spécialisée' }, value: 10 },
      { id: 'b', text: { es: 'Es una etapa normal del desarrollo socioemocional; el niño aún está desarrollando habilidades de toma de perspectiva', en: 'It is a normal stage of socioemotional development; the child is still developing perspective-taking skills', fr: 'C\'est une étape normale du développement socio-émotionnel ; l\'enfant développe encore ses capacités de prise de perspective' }, value: 100 },
      { id: 'c', text: { es: 'El niño está siendo consentido en casa y necesita disciplina más estricta', en: 'The child is being spoiled at home and needs stricter discipline', fr: 'L\'enfant est trop gâté à la maison et a besoin d\'une discipline plus stricte' }, value: 10 },
      { id: 'd', text: { es: 'Hay que obligarlo a compartir inmediatamente para que aprenda la lección', en: 'He should be forced to share immediately so he learns the lesson', fr: 'Il faut le forcer à partager immédiatement pour qu\'il apprenne la leçon' }, value: 20 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'pse-ecd-02',
    profileId: 'pre-school-educator',
    categoryId: 'edu-preschool-professional',
    competencyId: 'early-childhood-development',
    type: 'scenario',
    content: {
      es: 'Usted nota que una niña de 5 años en su aula ha dejado de participar en actividades grupales, prefiere jugar sola y su lenguaje expresivo ha disminuido en las últimas semanas. Los padres comentan que en casa también la notan más retraída.\n\nDescriba paso a paso cómo abordaría esta situación, desde la observación inicial hasta las posibles acciones con la familia y el equipo de apoyo.',
      en: 'You notice that a 5-year-old girl in your classroom has stopped participating in group activities, prefers to play alone, and her expressive language has decreased in recent weeks. Her parents mention she has also become more withdrawn at home.\n\nDescribe step by step how you would approach this situation, from initial observation to possible actions with the family and support team.',
      fr: 'Vous remarquez qu\'une fillette de 5 ans dans votre classe a cessé de participer aux activités de groupe, préfère jouer seule et son langage expressif a diminué ces dernières semaines. Ses parents mentionnent qu\'elle est également plus renfermée à la maison.\n\nDécrivez étape par étape comment vous aborderiez cette situation, de l\'observation initiale aux actions possibles avec la famille et l\'équipe de soutien.',
    },
    rubric: {
      es: 'Evaluar: (1) Observación sistemática y registro de conductas, (2) Comunicación empática con la familia, (3) Descarte de factores ambientales o familiares, (4) Estrategias de reintegración gradual, (5) Coordinación con equipo psicopedagógico si es necesario, (6) Seguimiento continuo.',
      en: 'Evaluate: (1) Systematic observation and behavior documentation, (2) Empathetic communication with the family, (3) Ruling out environmental or family factors, (4) Gradual reintegration strategies, (5) Coordination with psycho-pedagogical team if necessary, (6) Ongoing follow-up.',
      fr: 'Évaluer : (1) Observation systématique et documentation des comportements, (2) Communication empathique avec la famille, (3) Élimination des facteurs environnementaux ou familiaux, (4) Stratégies de réintégration progressive, (5) Coordination avec l\'équipe psychopédagogique si nécessaire, (6) Suivi continu.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 2,
    isActive: true,
  },

  // --- Creative Pedagogy ---
  {
    id: 'pse-cp-01',
    profileId: 'pre-school-educator',
    categoryId: 'edu-preschool-professional',
    competencyId: 'creative-pedagogy',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál de las siguientes estrategias pedagógicas es más efectiva para enseñar conceptos matemáticos básicos (conteo, clasificación) a niños de 3-4 años?',
      en: 'Which of the following pedagogical strategies is most effective for teaching basic mathematical concepts (counting, sorting) to children ages 3-4?',
      fr: 'Laquelle des stratégies pédagogiques suivantes est la plus efficace pour enseigner des concepts mathématiques de base (comptage, classification) aux enfants de 3-4 ans ?',
    },
    options: [
      { id: 'a', text: { es: 'Fichas de trabajo con números para que los niños practiquen la escritura', en: 'Worksheets with numbers for children to practice writing', fr: 'Fiches de travail avec des chiffres pour que les enfants pratiquent l\'écriture' }, value: 20 },
      { id: 'b', text: { es: 'Juegos con material concreto: bloques, cuentas, objetos cotidianos integrados en actividades lúdicas', en: 'Games with concrete materials: blocks, beads, everyday objects integrated into playful activities', fr: 'Jeux avec du matériel concret : blocs, perles, objets du quotidien intégrés dans des activités ludiques' }, value: 100 },
      { id: 'c', text: { es: 'Repetición oral de los números del 1 al 20 cada mañana', en: 'Oral repetition of numbers 1 to 20 every morning', fr: 'Répétition orale des nombres de 1 à 20 chaque matin' }, value: 30 },
      { id: 'd', text: { es: 'Videos educativos con canciones numéricas durante 30 minutos diarios', en: 'Educational videos with number songs for 30 minutes daily', fr: 'Vidéos éducatives avec des chansons sur les nombres pendant 30 minutes par jour' }, value: 40 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 3,
    isActive: true,
  },

  // --- Child Safety ---
  {
    id: 'pse-cs-01',
    profileId: 'pre-school-educator',
    categoryId: 'edu-preschool-professional',
    competencyId: 'child-safety',
    type: 'multiple-choice',
    content: {
      es: 'Durante el recreo, un niño de 3 años se cae del resbaladero y se golpea la cabeza. Está consciente pero llora mucho y tiene un pequeño chichón. ¿Cuál es la secuencia de acciones correcta?',
      en: 'During recess, a 3-year-old falls off the slide and hits his head. He is conscious but crying a lot and has a small bump. What is the correct sequence of actions?',
      fr: 'Pendant la récréation, un enfant de 3 ans tombe du toboggan et se cogne la tête. Il est conscient mais pleure beaucoup et a une petite bosse. Quelle est la séquence d\'actions correcte ?',
    },
    options: [
      { id: 'a', text: { es: 'Llamar inmediatamente una ambulancia sin revisar al niño', en: 'Immediately call an ambulance without checking the child', fr: 'Appeler immédiatement une ambulance sans examiner l\'enfant' }, value: 20 },
      { id: 'b', text: { es: 'Calmar al niño, evaluar signos de alarma, aplicar frío local, notificar a los padres y registrar el incidente', en: 'Calm the child, assess warning signs, apply cold compress, notify parents, and document the incident', fr: 'Calmer l\'enfant, évaluer les signes d\'alarme, appliquer du froid localement, avertir les parents et documenter l\'incident' }, value: 100 },
      { id: 'c', text: { es: 'Darle agua al niño y mandarlo de vuelta a jugar si deja de llorar', en: 'Give the child water and send him back to play if he stops crying', fr: 'Donner de l\'eau à l\'enfant et le renvoyer jouer s\'il arrête de pleurer' }, value: 10 },
      { id: 'd', text: { es: 'Llevarlo al aula y esperar a que los padres lo recojan al final del día', en: 'Take him to the classroom and wait for parents to pick him up at the end of the day', fr: 'L\'emmener en classe et attendre que les parents le récupèrent à la fin de la journée' }, value: 10 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },
  {
    id: 'pse-cs-02',
    profileId: 'pre-school-educator',
    categoryId: 'edu-preschool-professional',
    competencyId: 'child-safety',
    type: 'open-text',
    content: {
      es: 'Describa los protocolos de seguridad que implementaría en su aula de preescolar para prevenir accidentes, considerando el mobiliario, los materiales didácticos, las áreas de juego y los procedimientos de emergencia como sismos o evacuaciones.',
      en: 'Describe the safety protocols you would implement in your preschool classroom to prevent accidents, considering furniture, teaching materials, play areas, and emergency procedures such as earthquakes or evacuations.',
      fr: 'Décrivez les protocoles de sécurité que vous mettriez en place dans votre classe de maternelle pour prévenir les accidents, en tenant compte du mobilier, du matériel pédagogique, des aires de jeux et des procédures d\'urgence telles que les séismes ou les évacuations.',
    },
    rubric: {
      es: 'Evaluar: (1) Adecuación del espacio físico (esquinas protegidas, materiales no tóxicos), (2) Supervisión constante y ratios adulto-niño, (3) Protocolos de emergencia adaptados a la edad, (4) Simulacros periódicos, (5) Comunicación con familias sobre seguridad, (6) Registro y seguimiento de incidentes.',
      en: 'Evaluate: (1) Physical space adequacy (protected corners, non-toxic materials), (2) Constant supervision and adult-to-child ratios, (3) Age-appropriate emergency protocols, (4) Regular drills, (5) Communication with families about safety, (6) Incident tracking and follow-up.',
      fr: 'Évaluer : (1) Adéquation de l\'espace physique (coins protégés, matériaux non toxiques), (2) Supervision constante et ratios adulte-enfant, (3) Protocoles d\'urgence adaptés à l\'âge, (4) Exercices réguliers, (5) Communication avec les familles sur la sécurité, (6) Suivi et documentation des incidents.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 5,
    isActive: true,
  },

  // --- Inclusive Education ---
  {
    id: 'pse-ie-01',
    profileId: 'pre-school-educator',
    categoryId: 'edu-preschool-professional',
    competencyId: 'inclusive-education',
    type: 'scenario',
    content: {
      es: 'En su grupo de preescolar de 20 niños, se integra un niño de 4 años diagnosticado con Trastorno del Espectro Autista (TEA) nivel 1. El niño tiene dificultades con las transiciones entre actividades, se sobreestimula con el ruido y prefiere rutinas predecibles. Algunos padres de otros niños expresan preocupación por la "atención que recibirán sus hijos".\n\nExplique su plan integral de inclusión para este niño, abordando tanto las adaptaciones en el aula como la comunicación con todas las familias.',
      en: 'In your preschool group of 20 children, a 4-year-old diagnosed with Autism Spectrum Disorder (ASD) level 1 is being integrated. The child has difficulty with transitions between activities, becomes overstimulated by noise, and prefers predictable routines. Some parents of other children express concern about the "attention their children will receive."\n\nExplain your comprehensive inclusion plan for this child, addressing both classroom adaptations and communication with all families.',
      fr: 'Dans votre groupe de maternelle de 20 enfants, un enfant de 4 ans diagnostiqué avec un Trouble du Spectre Autistique (TSA) de niveau 1 est intégré. L\'enfant a des difficultés avec les transitions entre activités, est surstimulé par le bruit et préfère les routines prévisibles. Certains parents d\'autres enfants expriment leur inquiétude quant à « l\'attention que recevront leurs enfants ».\n\nExpliquez votre plan d\'inclusion complet pour cet enfant, en abordant à la fois les adaptations en classe et la communication avec toutes les familles.',
    },
    rubric: {
      es: 'Evaluar: (1) Adaptaciones ambientales específicas (zona de calma, apoyos visuales), (2) Estrategias para facilitar transiciones, (3) Colaboración con especialistas (terapeuta, psicólogo), (4) Sensibilización del grupo de compañeros, (5) Comunicación transparente y empática con todas las familias, (6) Plan individualizado con objetivos medibles.',
      en: 'Evaluate: (1) Specific environmental adaptations (calm zone, visual supports), (2) Strategies to facilitate transitions, (3) Collaboration with specialists (therapist, psychologist), (4) Peer group awareness-building, (5) Transparent and empathetic communication with all families, (6) Individualized plan with measurable objectives.',
      fr: 'Évaluer : (1) Adaptations environnementales spécifiques (zone de calme, supports visuels), (2) Stratégies pour faciliter les transitions, (3) Collaboration avec les spécialistes (thérapeute, psychologue), (4) Sensibilisation du groupe de pairs, (5) Communication transparente et empathique avec toutes les familles, (6) Plan individualisé avec des objectifs mesurables.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 6,
    isActive: true,
  },
];

// ---------- SOFT SKILLS (edu-preschool-soft-skills) ----------

export const preSchoolSoftSkillsQuestions: Question[] = [
  // --- Emotional Intelligence with Children ---
  {
    id: 'pse-eic-01',
    profileId: 'pre-school-educator',
    categoryId: 'edu-preschool-soft-skills',
    competencyId: 'emotional-intelligence-children',
    type: 'multiple-choice',
    content: {
      es: 'Un niño de 5 años llega al aula llorando porque sus padres discutieron en la mañana. ¿Cuál es la respuesta más apropiada como educador?',
      en: 'A 5-year-old arrives at the classroom crying because his parents argued in the morning. What is the most appropriate response as an educator?',
      fr: 'Un enfant de 5 ans arrive en classe en pleurant parce que ses parents se sont disputés le matin. Quelle est la réponse la plus appropriée en tant qu\'éducateur ?',
    },
    options: [
      { id: 'a', text: { es: 'Decirle que no llore porque ya es grande y debe ser fuerte', en: 'Tell him not to cry because he is a big kid and needs to be strong', fr: 'Lui dire de ne pas pleurer parce qu\'il est grand et doit être fort' }, value: 10 },
      { id: 'b', text: { es: 'Acogerlo afectuosamente, validar su emoción y ofrecerle un espacio seguro para expresarse', en: 'Welcome him affectionately, validate his emotion, and offer a safe space to express himself', fr: 'L\'accueillir affectueusement, valider son émotion et lui offrir un espace sûr pour s\'exprimer' }, value: 100 },
      { id: 'c', text: { es: 'Distraerlo rápidamente con un juguete para que deje de llorar', en: 'Quickly distract him with a toy to stop him from crying', fr: 'Le distraire rapidement avec un jouet pour qu\'il arrête de pleurer' }, value: 30 },
      { id: 'd', text: { es: 'Llamar inmediatamente a los padres para reportar la situación', en: 'Immediately call the parents to report the situation', fr: 'Appeler immédiatement les parents pour signaler la situation' }, value: 20 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'pse-eic-02',
    profileId: 'pre-school-educator',
    categoryId: 'edu-preschool-soft-skills',
    competencyId: 'emotional-intelligence-children',
    type: 'scale',
    content: {
      es: '¿Con qué frecuencia incorpora actividades específicas de educación socioemocional (identificación de emociones, resolución de conflictos, empatía) en su planificación semanal?',
      en: 'How often do you incorporate specific socioemotional education activities (emotion identification, conflict resolution, empathy) into your weekly planning?',
      fr: 'À quelle fréquence intégrez-vous des activités spécifiques d\'éducation socio-émotionnelle (identification des émotions, résolution de conflits, empathie) dans votre planification hebdomadaire ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nunca', en: 'Never', fr: 'Jamais' },
      max: { es: 'Todos los días', en: 'Every day', fr: 'Tous les jours' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },

  // --- Parent Communication ---
  {
    id: 'pse-pc-01',
    profileId: 'pre-school-educator',
    categoryId: 'edu-preschool-soft-skills',
    competencyId: 'parent-communication',
    type: 'scenario',
    content: {
      es: 'La mamá de una niña de 4 años se acerca a usted muy molesta porque su hija llegó a casa con un rasguño en el brazo. Le dice que "en esta escuela no cuidan a los niños" y amenaza con retirarla. Usted sabe que el rasguño ocurrió durante el juego libre y fue un accidente menor que se atendió adecuadamente.\n\nDescriba cómo manejaría esta conversación para resolver el conflicto y fortalecer la relación con la familia.',
      en: 'A 4-year-old girl\'s mother approaches you very upset because her daughter came home with a scratch on her arm. She tells you that "this school doesn\'t take care of the children" and threatens to withdraw her. You know the scratch happened during free play and was a minor accident that was properly attended to.\n\nDescribe how you would handle this conversation to resolve the conflict and strengthen the relationship with the family.',
      fr: 'La mère d\'une fillette de 4 ans vient vous voir très en colère parce que sa fille est rentrée à la maison avec une égratignure au bras. Elle vous dit que « cette école ne s\'occupe pas des enfants » et menace de la retirer. Vous savez que l\'égratignure s\'est produite pendant le jeu libre et qu\'il s\'agissait d\'un accident mineur qui a été correctement traité.\n\nDécrivez comment vous géreriez cette conversation pour résoudre le conflit et renforcer la relation avec la famille.',
    },
    rubric: {
      es: 'Evaluar: (1) Escucha activa y validación de la preocupación del padre, (2) Comunicación clara de los hechos sin minimizar, (3) Explicación de los protocolos de seguridad existentes, (4) Propuesta de mejoras o compromisos concretos, (5) Tono profesional y empático, (6) Seguimiento posterior.',
      en: 'Evaluate: (1) Active listening and validation of the parent\'s concern, (2) Clear communication of facts without minimizing, (3) Explanation of existing safety protocols, (4) Proposal of improvements or concrete commitments, (5) Professional and empathetic tone, (6) Follow-up.',
      fr: 'Évaluer : (1) Écoute active et validation de la préoccupation du parent, (2) Communication claire des faits sans minimiser, (3) Explication des protocoles de sécurité existants, (4) Proposition d\'améliorations ou d\'engagements concrets, (5) Ton professionnel et empathique, (6) Suivi ultérieur.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },

  // --- Classroom Management for Young Learners ---
  {
    id: 'pse-cm-01',
    profileId: 'pre-school-educator',
    categoryId: 'edu-preschool-soft-skills',
    competencyId: 'classroom-management-young',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál es la estrategia más efectiva para lograr transiciones suaves entre actividades con un grupo de niños de 3 años?',
      en: 'What is the most effective strategy for achieving smooth transitions between activities with a group of 3-year-olds?',
      fr: 'Quelle est la stratégie la plus efficace pour réaliser des transitions en douceur entre les activités avec un groupe d\'enfants de 3 ans ?',
    },
    options: [
      { id: 'a', text: { es: 'Dar instrucciones verbales detalladas y esperar que todos las sigan al mismo tiempo', en: 'Give detailed verbal instructions and expect everyone to follow them at the same time', fr: 'Donner des instructions verbales détaillées et s\'attendre à ce que tous les suivent en même temps' }, value: 20 },
      { id: 'b', text: { es: 'Usar señales sensoriales (canción, sonido, gesto) combinadas con rutinas visuales predecibles', en: 'Use sensory cues (song, sound, gesture) combined with predictable visual routines', fr: 'Utiliser des signaux sensoriels (chanson, son, geste) combinés avec des routines visuelles prévisibles' }, value: 100 },
      { id: 'c', text: { es: 'Permitir que cada niño termine su actividad cuando quiera sin establecer tiempos', en: 'Allow each child to finish their activity whenever they want without setting times', fr: 'Permettre à chaque enfant de terminer son activité quand il le souhaite sans fixer de temps' }, value: 20 },
      { id: 'd', text: { es: 'Utilizar un silbato para captar la atención del grupo rápidamente', en: 'Use a whistle to quickly capture the group\'s attention', fr: 'Utiliser un sifflet pour capter rapidement l\'attention du groupe' }, value: 10 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },
  {
    id: 'pse-cm-02',
    profileId: 'pre-school-educator',
    categoryId: 'edu-preschool-soft-skills',
    competencyId: 'classroom-management-young',
    type: 'open-text',
    content: {
      es: 'Describa cómo organizaría la jornada diaria en un aula de preescolar con 18 niños de edades mixtas (3-5 años), considerando los momentos de rutina, juego libre, actividades dirigidas, alimentación y descanso. Explique cómo adaptaría las actividades para los diferentes niveles de desarrollo.',
      en: 'Describe how you would organize the daily schedule in a preschool classroom with 18 mixed-age children (3-5 years), considering routine moments, free play, directed activities, meals, and rest. Explain how you would adapt activities for different developmental levels.',
      fr: 'Décrivez comment vous organiseriez la journée dans une classe de maternelle avec 18 enfants d\'âges mixtes (3-5 ans), en tenant compte des moments de routine, du jeu libre, des activités dirigées, des repas et du repos. Expliquez comment vous adapteriez les activités aux différents niveaux de développement.',
    },
    rubric: {
      es: 'Evaluar: (1) Estructura clara con equilibrio entre actividades dirigidas y juego libre, (2) Consideración de ritmos biológicos (alimentación, descanso), (3) Diferenciación por edades/niveles, (4) Inclusión de actividades de motricidad gruesa y fina, (5) Flexibilidad para necesidades individuales, (6) Transiciones suaves entre momentos.',
      en: 'Evaluate: (1) Clear structure balancing directed activities and free play, (2) Consideration of biological rhythms (meals, rest), (3) Differentiation by age/level, (4) Inclusion of gross and fine motor activities, (5) Flexibility for individual needs, (6) Smooth transitions between moments.',
      fr: 'Évaluer : (1) Structure claire équilibrant activités dirigées et jeu libre, (2) Prise en compte des rythmes biologiques (repas, repos), (3) Différenciation par âge/niveau, (4) Inclusion d\'activités de motricité globale et fine, (5) Flexibilité pour les besoins individuels, (6) Transitions en douceur entre les moments.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 5,
    isActive: true,
  },
];

// ---------- READINESS FOR CHANGE (edu-preschool-readiness) ----------

export const preSchoolReadinessQuestions: Question[] = [
  // --- Pedagogical Innovation ---
  {
    id: 'pse-pi-01',
    profileId: 'pre-school-educator',
    categoryId: 'edu-preschool-readiness',
    competencyId: 'pedagogical-innovation',
    type: 'multiple-choice',
    content: {
      es: 'Su directora le propone implementar el enfoque Reggio Emilia en su aula, un método que usted no conoce en profundidad. ¿Cuál sería su reacción más productiva?',
      en: 'Your principal proposes implementing the Reggio Emilia approach in your classroom, a method you are not deeply familiar with. What would be your most productive reaction?',
      fr: 'Votre directrice vous propose de mettre en œuvre l\'approche Reggio Emilia dans votre classe, une méthode que vous ne connaissez pas en profondeur. Quelle serait votre réaction la plus productive ?',
    },
    options: [
      { id: 'a', text: { es: 'Explicar que su método actual funciona bien y no ve necesidad de cambiar', en: 'Explain that your current method works well and you see no need to change', fr: 'Expliquer que votre méthode actuelle fonctionne bien et que vous ne voyez pas la nécessité de changer' }, value: 10 },
      { id: 'b', text: { es: 'Investigar el enfoque, visitar escuelas que lo apliquen, y diseñar un plan de implementación gradual', en: 'Research the approach, visit schools that apply it, and design a gradual implementation plan', fr: 'Rechercher l\'approche, visiter des écoles qui l\'appliquent et concevoir un plan de mise en œuvre progressive' }, value: 100 },
      { id: 'c', text: { es: 'Aceptar sin cuestionar e intentar aplicarlo inmediatamente sin capacitación', en: 'Accept without question and try to apply it immediately without training', fr: 'Accepter sans questionner et essayer de l\'appliquer immédiatement sans formation' }, value: 30 },
      { id: 'd', text: { es: 'Pedir que otro educador lo implemente primero y ver los resultados', en: 'Ask another educator to implement it first and see the results', fr: 'Demander à un autre éducateur de le mettre en œuvre d\'abord et voir les résultats' }, value: 40 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'pse-pi-02',
    profileId: 'pre-school-educator',
    categoryId: 'edu-preschool-readiness',
    competencyId: 'pedagogical-innovation',
    type: 'open-text',
    content: {
      es: 'Describa una experiencia en la que haya modificado significativamente su práctica pedagógica después de conocer un nuevo enfoque, método o investigación sobre educación infantil. ¿Qué lo motivó a cambiar? ¿Cómo implementó la innovación y qué resultados observó?',
      en: 'Describe an experience where you significantly modified your teaching practice after learning about a new approach, method, or research on early childhood education. What motivated you to change? How did you implement the innovation and what results did you observe?',
      fr: 'Décrivez une expérience où vous avez considérablement modifié votre pratique pédagogique après avoir découvert une nouvelle approche, méthode ou recherche sur l\'éducation de la petite enfance. Qu\'est-ce qui vous a motivé à changer ? Comment avez-vous mis en œuvre l\'innovation et quels résultats avez-vous observés ?',
    },
    rubric: {
      es: 'Evaluar: (1) Capacidad de autorreflexión sobre la práctica, (2) Apertura genuina al cambio, (3) Proceso de investigación y capacitación, (4) Implementación planificada y gradual, (5) Evaluación de resultados con evidencia, (6) Aprendizajes para futuras innovaciones.',
      en: 'Evaluate: (1) Self-reflection capacity on practice, (2) Genuine openness to change, (3) Research and training process, (4) Planned and gradual implementation, (5) Results evaluation with evidence, (6) Lessons for future innovations.',
      fr: 'Évaluer : (1) Capacité d\'autoréflexion sur la pratique, (2) Ouverture authentique au changement, (3) Processus de recherche et de formation, (4) Mise en œuvre planifiée et progressive, (5) Évaluation des résultats avec des preuves, (6) Leçons pour les futures innovations.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 2,
    isActive: true,
  },

  // --- Professional Growth ---
  {
    id: 'pse-pg-01',
    profileId: 'pre-school-educator',
    categoryId: 'edu-preschool-readiness',
    competencyId: 'professional-growth',
    type: 'scale',
    content: {
      es: '¿Con qué frecuencia participa en actividades de desarrollo profesional (cursos, talleres, congresos, comunidades de aprendizaje) relacionadas con educación preescolar?',
      en: 'How often do you participate in professional development activities (courses, workshops, conferences, learning communities) related to preschool education?',
      fr: 'À quelle fréquence participez-vous à des activités de développement professionnel (cours, ateliers, congrès, communautés d\'apprentissage) liées à l\'éducation préscolaire ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nunca', en: 'Never', fr: 'Jamais' },
      max: { es: 'Mensualmente o más', en: 'Monthly or more', fr: 'Mensuellement ou plus' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 3,
    isActive: true,
  },
  {
    id: 'pse-pg-02',
    profileId: 'pre-school-educator',
    categoryId: 'edu-preschool-readiness',
    competencyId: 'professional-growth',
    type: 'scale',
    content: {
      es: '¿Qué tan dispuesto/a está a recibir retroalimentación de colegas, directivos o especialistas sobre su práctica docente y utilizarla para mejorar?',
      en: 'How willing are you to receive feedback from colleagues, administrators, or specialists about your teaching practice and use it to improve?',
      fr: 'Dans quelle mesure êtes-vous disposé(e) à recevoir des commentaires de collègues, de directeurs ou de spécialistes sur votre pratique pédagogique et à les utiliser pour vous améliorer ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada dispuesto', en: 'Not at all willing', fr: 'Pas du tout disposé(e)' },
      max: { es: 'Totalmente dispuesto', en: 'Completely willing', fr: 'Tout à fait disposé(e)' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },

  // --- Educational Technology Adoption ---
  {
    id: 'pse-eta-01',
    profileId: 'pre-school-educator',
    categoryId: 'edu-preschool-readiness',
    competencyId: 'edu-tech-adoption',
    type: 'scenario',
    content: {
      es: 'Su centro educativo ha adquirido tablets para uso en el aula de preescolar. Algunos colegas opinan que la tecnología no es apropiada para niños tan pequeños, mientras que la dirección espera que se integren en las actividades diarias.\n\nDescriba cómo integraría las tablets de manera pedagógicamente responsable en su aula, estableciendo límites claros de tiempo y uso, y cómo justificaría su enfoque ante colegas escépticos y ante la dirección.',
      en: 'Your school has acquired tablets for use in the preschool classroom. Some colleagues believe technology is not appropriate for such young children, while the administration expects them to be integrated into daily activities.\n\nDescribe how you would integrate tablets in a pedagogically responsible way in your classroom, establishing clear time and usage limits, and how you would justify your approach to skeptical colleagues and to the administration.',
      fr: 'Votre école a acquis des tablettes pour une utilisation en classe de maternelle. Certains collègues estiment que la technologie n\'est pas appropriée pour des enfants si jeunes, tandis que la direction s\'attend à ce qu\'elles soient intégrées dans les activités quotidiennes.\n\nDécrivez comment vous intégreriez les tablettes de manière pédagogiquement responsable dans votre classe, en établissant des limites claires de temps et d\'utilisation, et comment vous justifieriez votre approche auprès de collègues sceptiques et de la direction.',
    },
    rubric: {
      es: 'Evaluar: (1) Criterios claros de selección de apps/contenido educativo, (2) Límites de tiempo basados en evidencia (recomendaciones pediátricas), (3) Uso como complemento, no sustituto de experiencias concretas, (4) Actividades colaborativas con tecnología, (5) Argumentación basada en investigación, (6) Evaluación del impacto en el aprendizaje.',
      en: 'Evaluate: (1) Clear criteria for selecting educational apps/content, (2) Evidence-based time limits (pediatric recommendations), (3) Use as complement, not substitute for concrete experiences, (4) Collaborative activities with technology, (5) Research-based argumentation, (6) Assessment of impact on learning.',
      fr: 'Évaluer : (1) Critères clairs de sélection d\'applications/contenu éducatif, (2) Limites de temps basées sur des données probantes (recommandations pédiatriques), (3) Utilisation comme complément, non substitut aux expériences concrètes, (4) Activités collaboratives avec la technologie, (5) Argumentation basée sur la recherche, (6) Évaluation de l\'impact sur l\'apprentissage.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 5,
    isActive: true,
  },
];
