import type { Question } from '@/types';

// ============================================================================
// SHARED QUESTIONS (used by both profiles for soft-skills and readiness)
// ============================================================================

const sharedSoftSkillsQuestions: Question[] = [
  // --- Communication ---
  {
    id: 'shared-comm-01',
    profileId: '__shared__',
    categoryId: 'soft-skills',
    competencyId: 'communication',
    type: 'multiple-choice',
    content: {
      es: 'Un cliente llama molesto porque no entiende una cláusula de su póliza. ¿Cuál es la mejor forma de manejar la situación?',
      en: 'An upset client calls because they don\'t understand a clause in their policy. What is the best way to handle the situation?',
    },
    options: [
      { id: 'a', text: { es: 'Leer la cláusula textualmente al cliente', en: 'Read the clause verbatim to the client' }, value: 20 },
      { id: 'b', text: { es: 'Escuchar activamente, validar su frustración y explicar la cláusula en términos sencillos', en: 'Actively listen, validate their frustration, and explain the clause in simple terms' }, value: 100 },
      { id: 'c', text: { es: 'Transferir la llamada al departamento legal', en: 'Transfer the call to the legal department' }, value: 10 },
      { id: 'd', text: { es: 'Explicar la cláusula técnicamente y enviar un correo con la documentación', en: 'Explain the clause technically and send an email with the documentation' }, value: 60 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'shared-comm-02',
    profileId: '__shared__',
    categoryId: 'soft-skills',
    competencyId: 'communication',
    type: 'scale',
    content: {
      es: '¿Con qué frecuencia adaptas tu estilo de comunicación según la audiencia (clientes, colegas, supervisores)?',
      en: 'How often do you adapt your communication style based on the audience (clients, colleagues, supervisors)?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nunca', en: 'Never' },
      max: { es: 'Siempre', en: 'Always' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },
  {
    id: 'shared-comm-03',
    profileId: '__shared__',
    categoryId: 'soft-skills',
    competencyId: 'communication',
    type: 'open-text',
    content: {
      es: 'Describe una situación en la que tuviste que explicar un concepto complejo de seguros a alguien sin experiencia en el tema. ¿Cómo lo abordaste y cuál fue el resultado?',
      en: 'Describe a situation where you had to explain a complex insurance concept to someone with no experience in the topic. How did you approach it and what was the result?',
    },
    rubric: {
      es: 'Evaluar: (1) Capacidad de simplificar conceptos técnicos, (2) Empatía con la audiencia, (3) Uso de ejemplos o analogías, (4) Resultado positivo de la comunicación, (5) Verificación de comprensión.',
      en: 'Evaluate: (1) Ability to simplify technical concepts, (2) Empathy with the audience, (3) Use of examples or analogies, (4) Positive communication outcome, (5) Verification of understanding.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },

  // --- Teamwork ---
  {
    id: 'shared-team-01',
    profileId: '__shared__',
    categoryId: 'soft-skills',
    competencyId: 'teamwork',
    type: 'scenario',
    content: {
      es: 'Estás trabajando en un proyecto con un equipo multidisciplinario. Uno de los miembros del equipo no está cumpliendo con sus entregas, afectando al resto. ¿Qué harías?\n\nContexto: El miembro del equipo es competente pero últimamente parece desmotivado. El plazo de entrega es en dos semanas.',
      en: 'You are working on a project with a multidisciplinary team. One of the team members is not meeting their deliverables, affecting the rest. What would you do?\n\nContext: The team member is competent but lately seems unmotivated. The deadline is in two weeks.',
    },
    rubric: {
      es: 'Evaluar: (1) Empatía y comprensión de la situación, (2) Comunicación directa pero respetuosa, (3) Enfoque en soluciones (redistribución de tareas, apoyo), (4) No escalar prematuramente, (5) Compromiso con el resultado del equipo.',
      en: 'Evaluate: (1) Empathy and understanding of the situation, (2) Direct but respectful communication, (3) Solution-focused approach (task redistribution, support), (4) Not escalating prematurely, (5) Commitment to team results.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 4,
    isActive: true,
  },
  {
    id: 'shared-team-02',
    profileId: '__shared__',
    categoryId: 'soft-skills',
    competencyId: 'teamwork',
    type: 'multiple-choice',
    content: {
      es: 'Cuando hay un desacuerdo dentro de tu equipo sobre cómo abordar un caso, ¿cuál es tu enfoque principal?',
      en: 'When there is a disagreement within your team about how to approach a case, what is your main approach?',
    },
    options: [
      { id: 'a', text: { es: 'Imponer mi criterio si tengo más experiencia', en: 'Impose my criteria if I have more experience' }, value: 10 },
      { id: 'b', text: { es: 'Ceder para evitar conflictos', en: 'Give in to avoid conflicts' }, value: 30 },
      { id: 'c', text: { es: 'Facilitar un diálogo donde todos expongan sus argumentos y buscar consenso', en: 'Facilitate a dialogue where everyone presents their arguments and seek consensus' }, value: 100 },
      { id: 'd', text: { es: 'Escalar al supervisor para que tome la decisión', en: 'Escalate to the supervisor for a decision' }, value: 20 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
  {
    id: 'shared-team-03',
    profileId: '__shared__',
    categoryId: 'soft-skills',
    competencyId: 'teamwork',
    type: 'scale',
    content: {
      es: '¿Qué tan dispuesto estás a asumir tareas fuera de tu rol habitual para apoyar al equipo cuando es necesario?',
      en: 'How willing are you to take on tasks outside your usual role to support the team when necessary?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada dispuesto', en: 'Not willing at all' },
      max: { es: 'Totalmente dispuesto', en: 'Fully willing' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 6,
    isActive: true,
  },

  // --- Problem Solving ---
  {
    id: 'shared-prob-01',
    profileId: '__shared__',
    categoryId: 'soft-skills',
    competencyId: 'problem-solving',
    type: 'ranking',
    content: {
      es: 'Ordena los siguientes pasos de resolución de problemas según su importancia al enfrentar un caso complejo de seguros:',
      en: 'Rank the following problem-solving steps by importance when facing a complex insurance case:',
    },
    options: [
      { id: 'a', text: { es: 'Recopilar toda la información relevante', en: 'Gather all relevant information' }, value: 1 },
      { id: 'b', text: { es: 'Identificar las causas raíz del problema', en: 'Identify root causes of the problem' }, value: 2 },
      { id: 'c', text: { es: 'Evaluar posibles soluciones y sus consecuencias', en: 'Evaluate possible solutions and their consequences' }, value: 3 },
      { id: 'd', text: { es: 'Implementar la solución y dar seguimiento', en: 'Implement the solution and follow up' }, value: 4 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 7,
    isActive: true,
  },
  {
    id: 'shared-prob-02',
    profileId: '__shared__',
    categoryId: 'soft-skills',
    competencyId: 'problem-solving',
    type: 'scenario',
    content: {
      es: 'Un cliente importante presenta una reclamación que parece legítima, pero al revisar la documentación encuentras inconsistencias que podrían indicar un error del cliente o un posible fraude. El cliente está presionando por una resolución rápida.\n\n¿Cómo manejarías esta situación paso a paso?',
      en: 'An important client files a claim that seems legitimate, but upon reviewing the documentation you find inconsistencies that could indicate a client error or possible fraud. The client is pushing for a quick resolution.\n\nHow would you handle this situation step by step?',
    },
    rubric: {
      es: 'Evaluar: (1) Análisis metódico de inconsistencias, (2) Profesionalismo sin acusaciones, (3) Solicitud de documentación adicional, (4) Comunicación con el cliente, (5) Seguimiento de protocolos internos, (6) Balance entre servicio al cliente y protección de la empresa.',
      en: 'Evaluate: (1) Methodical analysis of inconsistencies, (2) Professionalism without accusations, (3) Request for additional documentation, (4) Communication with the client, (5) Following internal protocols, (6) Balance between customer service and company protection.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 8,
    isActive: true,
  },

  // --- Customer Service ---
  {
    id: 'shared-cust-01',
    profileId: '__shared__',
    categoryId: 'soft-skills',
    competencyId: 'customer-service',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál consideras que es el factor más importante para brindar un excelente servicio al cliente en seguros?',
      en: 'What do you consider the most important factor in providing excellent customer service in insurance?',
    },
    options: [
      { id: 'a', text: { es: 'Resolver el caso lo más rápido posible', en: 'Resolve the case as quickly as possible' }, value: 40 },
      { id: 'b', text: { es: 'Mantener al cliente informado en todo momento y anticiparse a sus necesidades', en: 'Keep the client informed at all times and anticipate their needs' }, value: 100 },
      { id: 'c', text: { es: 'Seguir estrictamente los procedimientos establecidos', en: 'Strictly follow established procedures' }, value: 30 },
      { id: 'd', text: { es: 'Ofrecer soluciones aunque no estén dentro del alcance estándar', en: 'Offer solutions even if they are not within standard scope' }, value: 60 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 9,
    isActive: true,
  },
  {
    id: 'shared-cust-02',
    profileId: '__shared__',
    categoryId: 'soft-skills',
    competencyId: 'customer-service',
    type: 'scale',
    content: {
      es: '¿Qué tan cómodo te sientes manejando clientes difíciles o en situaciones de alta presión emocional?',
      en: 'How comfortable do you feel handling difficult clients or high emotional pressure situations?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Muy incómodo', en: 'Very uncomfortable' },
      max: { es: 'Muy cómodo', en: 'Very comfortable' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 10,
    isActive: true,
  },
  {
    id: 'shared-cust-03',
    profileId: '__shared__',
    categoryId: 'soft-skills',
    competencyId: 'customer-service',
    type: 'open-text',
    content: {
      es: 'Describe tu enfoque para convertir una experiencia negativa de un cliente en una oportunidad de fidelización. Da un ejemplo concreto si es posible.',
      en: 'Describe your approach to turning a negative client experience into a loyalty opportunity. Give a concrete example if possible.',
    },
    rubric: {
      es: 'Evaluar: (1) Empatía genuina, (2) Capacidad de recuperación del servicio, (3) Seguimiento posterior, (4) Proactividad, (5) Resultado medible o positivo.',
      en: 'Evaluate: (1) Genuine empathy, (2) Service recovery capability, (3) Post-incident follow-up, (4) Proactivity, (5) Measurable or positive outcome.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 11,
    isActive: true,
  },
];

const sharedReadinessQuestions: Question[] = [
  // --- Adaptability ---
  {
    id: 'shared-adapt-01',
    profileId: '__shared__',
    categoryId: 'readiness',
    competencyId: 'adaptability',
    type: 'multiple-choice',
    content: {
      es: 'Tu empresa anuncia un cambio significativo en los procesos de trabajo que afecta directamente tu rol. ¿Cuál es tu primera reacción?',
      en: 'Your company announces a significant change in work processes that directly affects your role. What is your first reaction?',
    },
    options: [
      { id: 'a', text: { es: 'Preocupación y resistencia hasta entender los beneficios', en: 'Concern and resistance until I understand the benefits' }, value: 30 },
      { id: 'b', text: { es: 'Curiosidad por entender el cambio y buscar cómo adaptarme', en: 'Curiosity to understand the change and find ways to adapt' }, value: 100 },
      { id: 'c', text: { es: 'Aceptación pasiva, espero instrucciones claras', en: 'Passive acceptance, I wait for clear instructions' }, value: 40 },
      { id: 'd', text: { es: 'Frustración porque los procesos actuales funcionan bien', en: 'Frustration because current processes work fine' }, value: 10 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'shared-adapt-02',
    profileId: '__shared__',
    categoryId: 'readiness',
    competencyId: 'adaptability',
    type: 'scale',
    content: {
      es: '¿Qué tan cómodo te sientes trabajando con incertidumbre o cuando las reglas del juego cambian?',
      en: 'How comfortable do you feel working with uncertainty or when the rules of the game change?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Muy incómodo', en: 'Very uncomfortable' },
      max: { es: 'Muy cómodo', en: 'Very comfortable' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },
  {
    id: 'shared-adapt-03',
    profileId: '__shared__',
    categoryId: 'readiness',
    competencyId: 'adaptability',
    type: 'scenario',
    content: {
      es: 'La regulación de seguros en tu país cambia significativamente, requiriendo que todos los productos existentes sean reestructurados en 6 meses. Tu equipo tiene que aprender las nuevas normativas mientras mantiene las operaciones diarias.\n\n¿Cómo te organizarías para manejar ambas responsabilidades?',
      en: 'Insurance regulation in your country changes significantly, requiring all existing products to be restructured in 6 months. Your team has to learn the new regulations while maintaining daily operations.\n\nHow would you organize yourself to handle both responsibilities?',
    },
    rubric: {
      es: 'Evaluar: (1) Planificación y priorización, (2) Gestión del tiempo, (3) Proactividad en el aprendizaje, (4) Capacidad de manejar presión, (5) Colaboración con el equipo para distribuir carga.',
      en: 'Evaluate: (1) Planning and prioritization, (2) Time management, (3) Proactive learning, (4) Ability to handle pressure, (5) Team collaboration for workload distribution.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },

  // --- Continuous Learning ---
  {
    id: 'shared-learn-01',
    profileId: '__shared__',
    categoryId: 'readiness',
    competencyId: 'continuous-learning',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál es tu enfoque principal para mantenerte actualizado en tu campo profesional?',
      en: 'What is your main approach to staying current in your professional field?',
    },
    options: [
      { id: 'a', text: { es: 'Solo participo en capacitaciones obligatorias de la empresa', en: 'I only participate in mandatory company training' }, value: 20 },
      { id: 'b', text: { es: 'Busco activamente cursos, artículos y eventos del sector por iniciativa propia', en: 'I actively seek courses, articles, and industry events on my own initiative' }, value: 100 },
      { id: 'c', text: { es: 'Aprendo de mis colegas más experimentados cuando surge la oportunidad', en: 'I learn from more experienced colleagues when the opportunity arises' }, value: 60 },
      { id: 'd', text: { es: 'Espero que la empresa me indique qué necesito aprender', en: 'I wait for the company to tell me what I need to learn' }, value: 10 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },
  {
    id: 'shared-learn-02',
    profileId: '__shared__',
    categoryId: 'readiness',
    competencyId: 'continuous-learning',
    type: 'scale',
    content: {
      es: '¿Con qué frecuencia dedicas tiempo fuera del horario laboral para aprender sobre temas relacionados con tu profesión?',
      en: 'How often do you dedicate time outside work hours to learn about topics related to your profession?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nunca', en: 'Never' },
      max: { es: 'Muy frecuentemente', en: 'Very frequently' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
  {
    id: 'shared-learn-03',
    profileId: '__shared__',
    categoryId: 'readiness',
    competencyId: 'continuous-learning',
    type: 'open-text',
    content: {
      es: '¿Qué nueva habilidad o conocimiento has adquirido recientemente por iniciativa propia? ¿Cómo lo has aplicado o planeas aplicarlo en tu trabajo?',
      en: 'What new skill or knowledge have you recently acquired on your own initiative? How have you applied or plan to apply it in your work?',
    },
    rubric: {
      es: 'Evaluar: (1) Iniciativa personal demostrada, (2) Relevancia del aprendizaje para el rol, (3) Aplicación práctica, (4) Motivación intrínseca, (5) Plan de seguimiento.',
      en: 'Evaluate: (1) Demonstrated personal initiative, (2) Relevance of learning to the role, (3) Practical application, (4) Intrinsic motivation, (5) Follow-up plan.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 6,
    isActive: true,
  },

  // --- Technology Adoption ---
  {
    id: 'shared-tech-01',
    profileId: '__shared__',
    categoryId: 'readiness',
    competencyId: 'tech-adoption',
    type: 'multiple-choice',
    content: {
      es: 'Tu empresa implementa una nueva plataforma digital para gestión de pólizas. ¿Cómo reaccionas?',
      en: 'Your company implements a new digital platform for policy management. How do you react?',
    },
    options: [
      { id: 'a', text: { es: 'Me entusiasma explorar las nuevas funcionalidades y ser de los primeros en usarla', en: 'I\'m excited to explore the new features and be among the first to use it' }, value: 100 },
      { id: 'b', text: { es: 'Espero a que otros la prueben primero y me comparten su experiencia', en: 'I wait for others to try it first and share their experience' }, value: 40 },
      { id: 'c', text: { es: 'La uso cuando es obligatorio pero prefiero los métodos anteriores', en: 'I use it when mandatory but prefer the previous methods' }, value: 20 },
      { id: 'd', text: { es: 'La adopto con una actitud positiva y busco capacitación adicional', en: 'I adopt it with a positive attitude and seek additional training' }, value: 80 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 7,
    isActive: true,
  },
  {
    id: 'shared-tech-02',
    profileId: '__shared__',
    categoryId: 'readiness',
    competencyId: 'tech-adoption',
    type: 'scale',
    content: {
      es: '¿Qué tan familiarizado estás con herramientas de inteligencia artificial aplicadas al sector de seguros?',
      en: 'How familiar are you with artificial intelligence tools applied to the insurance sector?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada familiarizado', en: 'Not familiar at all' },
      max: { es: 'Muy familiarizado', en: 'Very familiar' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 8,
    isActive: true,
  },
  {
    id: 'shared-tech-03',
    profileId: '__shared__',
    categoryId: 'readiness',
    competencyId: 'tech-adoption',
    type: 'ranking',
    content: {
      es: 'Ordena las siguientes tecnologías según cuánto crees que impactarán el sector de seguros en los próximos 5 años (de mayor a menor impacto):',
      en: 'Rank the following technologies by how much you believe they will impact the insurance sector in the next 5 years (from highest to lowest impact):',
    },
    options: [
      { id: 'a', text: { es: 'Inteligencia Artificial y Machine Learning', en: 'Artificial Intelligence and Machine Learning' }, value: 1 },
      { id: 'b', text: { es: 'Automatización de procesos (RPA)', en: 'Process Automation (RPA)' }, value: 2 },
      { id: 'c', text: { es: 'Análisis de Big Data', en: 'Big Data Analytics' }, value: 3 },
      { id: 'd', text: { es: 'Plataformas digitales de autoservicio', en: 'Digital self-service platforms' }, value: 4 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 9,
    isActive: true,
  },
];

// ============================================================================
// SALUD Y VIDA - Professional Skills Questions
// ============================================================================

const saludVidaProfessionalQuestions: Question[] = [
  // --- Product Knowledge ---
  {
    id: 'sv-prod-01',
    profileId: 'salud-vida',
    categoryId: 'professional',
    competencyId: 'product-knowledge',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál es la principal diferencia entre un seguro de vida temporal y un seguro de vida permanente?',
      en: 'What is the main difference between term life insurance and permanent life insurance?',
    },
    options: [
      { id: 'a', text: { es: 'El seguro temporal cubre solo accidentes, el permanente cubre todo', en: 'Term insurance covers only accidents, permanent covers everything' }, value: 0 },
      { id: 'b', text: { es: 'El seguro temporal tiene una vigencia definida; el permanente ofrece cobertura vitalicia y puede acumular valor en efectivo', en: 'Term insurance has a defined period; permanent offers lifelong coverage and may accumulate cash value' }, value: 100 },
      { id: 'c', text: { es: 'No hay diferencia significativa, solo varía la prima', en: 'There is no significant difference, only the premium varies' }, value: 0 },
      { id: 'd', text: { es: 'El seguro permanente solo se ofrece a personas mayores de 50 años', en: 'Permanent insurance is only offered to people over 50' }, value: 0 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'sv-prod-02',
    profileId: 'salud-vida',
    categoryId: 'professional',
    competencyId: 'product-knowledge',
    type: 'multiple-choice',
    content: {
      es: '¿Qué es un período de carencia en un seguro de salud?',
      en: 'What is a waiting period in health insurance?',
    },
    options: [
      { id: 'a', text: { es: 'El tiempo que tarda la aseguradora en pagar una reclamación', en: 'The time it takes the insurer to pay a claim' }, value: 20 },
      { id: 'b', text: { es: 'El período después de la contratación durante el cual ciertas coberturas no están disponibles', en: 'The period after enrollment during which certain coverages are not available' }, value: 100 },
      { id: 'c', text: { es: 'El período de gracia para el pago de primas', en: 'The grace period for premium payment' }, value: 10 },
      { id: 'd', text: { es: 'El tiempo entre la solicitud y la emisión de la póliza', en: 'The time between application and policy issuance' }, value: 10 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },
  {
    id: 'sv-prod-03',
    profileId: 'salud-vida',
    categoryId: 'professional',
    competencyId: 'product-knowledge',
    type: 'open-text',
    content: {
      es: 'Explica las principales coberturas que debe incluir un plan de seguro de salud corporativo y cómo las presentarías a un potencial cliente empresarial.',
      en: 'Explain the main coverages that a corporate health insurance plan should include and how you would present them to a potential corporate client.',
    },
    rubric: {
      es: 'Evaluar: (1) Conocimiento de coberturas (hospitalización, ambulatorio, maternidad, dental, vida), (2) Capacidad de articular beneficios vs. características, (3) Enfoque consultivo orientado a necesidades del cliente, (4) Mención de personalización según tipo de empresa, (5) Claridad y estructura de la explicación.',
      en: 'Evaluate: (1) Knowledge of coverages (hospitalization, outpatient, maternity, dental, life), (2) Ability to articulate benefits vs. features, (3) Consultative approach oriented to client needs, (4) Mention of customization by company type, (5) Clarity and structure of explanation.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },

  // --- Underwriting ---
  {
    id: 'sv-under-01',
    profileId: 'salud-vida',
    categoryId: 'professional',
    competencyId: 'underwriting',
    type: 'multiple-choice',
    content: {
      es: 'Al evaluar una solicitud de seguro de vida, ¿cuál de los siguientes factores tiene generalmente MAYOR impacto en la prima?',
      en: 'When evaluating a life insurance application, which of the following factors generally has the GREATEST impact on the premium?',
    },
    options: [
      { id: 'a', text: { es: 'El código postal del solicitante', en: 'The applicant\'s zip code' }, value: 10 },
      { id: 'b', text: { es: 'La edad y el historial médico del solicitante', en: 'The applicant\'s age and medical history' }, value: 100 },
      { id: 'c', text: { es: 'El nivel educativo del solicitante', en: 'The applicant\'s education level' }, value: 0 },
      { id: 'd', text: { es: 'La cantidad de beneficiarios designados', en: 'The number of designated beneficiaries' }, value: 0 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },
  {
    id: 'sv-under-02',
    profileId: 'salud-vida',
    categoryId: 'professional',
    competencyId: 'underwriting',
    type: 'scenario',
    content: {
      es: 'Un solicitante de 45 años pide un seguro de vida por $500,000. En su declaración médica revela que fue diagnosticado con diabetes tipo 2 hace 3 años, actualmente controlada con medicación. También indica que fuma ocasionalmente.\n\n¿Cómo evaluarías esta solicitud? ¿Qué información adicional solicitarías?',
      en: 'A 45-year-old applicant requests a $500,000 life insurance policy. In their medical declaration, they reveal being diagnosed with type 2 diabetes 3 years ago, currently controlled with medication. They also indicate occasional smoking.\n\nHow would you evaluate this application? What additional information would you request?',
    },
    rubric: {
      es: 'Evaluar: (1) Identificación de factores de riesgo (diabetes + tabaquismo), (2) Solicitud de exámenes médicos adicionales, (3) Consideración de historial de control de la diabetes (HbA1c), (4) Evaluación del impacto en la prima (recargo), (5) Conocimiento de opciones (exclusiones, tabla de recargo, sublímites), (6) Profesionalismo en la comunicación.',
      en: 'Evaluate: (1) Risk factor identification (diabetes + smoking), (2) Request for additional medical exams, (3) Consideration of diabetes control history (HbA1c), (4) Impact assessment on premium (surcharge), (5) Knowledge of options (exclusions, rating table, sublimits), (6) Professional communication.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 5,
    isActive: true,
  },
  {
    id: 'sv-under-03',
    profileId: 'salud-vida',
    categoryId: 'professional',
    competencyId: 'underwriting',
    type: 'scale',
    content: {
      es: '¿Qué tan seguro te sientes al evaluar y clasificar el nivel de riesgo de un solicitante de seguro de salud o vida?',
      en: 'How confident do you feel evaluating and classifying the risk level of a health or life insurance applicant?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada seguro', en: 'Not confident at all' },
      max: { es: 'Muy seguro', en: 'Very confident' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 6,
    isActive: true,
  },

  // --- Claims Management ---
  {
    id: 'sv-claims-01',
    profileId: 'salud-vida',
    categoryId: 'professional',
    competencyId: 'claims-management',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál es el primer paso al recibir una reclamación de seguro de salud?',
      en: 'What is the first step upon receiving a health insurance claim?',
    },
    options: [
      { id: 'a', text: { es: 'Aprobar la reclamación para mantener la satisfacción del cliente', en: 'Approve the claim to maintain customer satisfaction' }, value: 0 },
      { id: 'b', text: { es: 'Verificar la vigencia de la póliza y que el evento esté cubierto', en: 'Verify policy validity and that the event is covered' }, value: 100 },
      { id: 'c', text: { es: 'Solicitar inmediatamente un peritaje externo', en: 'Immediately request an external appraisal' }, value: 20 },
      { id: 'd', text: { es: 'Contactar al beneficiario para verificar los hechos', en: 'Contact the beneficiary to verify the facts' }, value: 40 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 7,
    isActive: true,
  },
  {
    id: 'sv-claims-02',
    profileId: 'salud-vida',
    categoryId: 'professional',
    competencyId: 'claims-management',
    type: 'scenario',
    content: {
      es: 'Recibes una reclamación por fallecimiento en un seguro de vida. La póliza fue emitida hace 18 meses. El beneficiario presenta el certificado de defunción que indica causa de muerte por infarto. Al revisar la solicitud original, notas que el asegurado no declaró antecedentes de hipertensión arterial.\n\n¿Cómo procederías con esta reclamación?',
      en: 'You receive a death claim on a life insurance policy. The policy was issued 18 months ago. The beneficiary presents a death certificate indicating cause of death as cardiac arrest. Upon reviewing the original application, you notice the insured did not declare a history of hypertension.\n\nHow would you proceed with this claim?',
    },
    rubric: {
      es: 'Evaluar: (1) Conocimiento del período de contestabilidad (generalmente 2 años), (2) Proceso de investigación de declaraciones, (3) Solicitud de registros médicos previos, (4) Balance entre derechos del beneficiario y protección de la aseguradora, (5) Conocimiento legal y regulatorio, (6) Comunicación empática con el beneficiario.',
      en: 'Evaluate: (1) Knowledge of contestability period (typically 2 years), (2) Declaration investigation process, (3) Request for prior medical records, (4) Balance between beneficiary rights and insurer protection, (5) Legal and regulatory knowledge, (6) Empathetic communication with the beneficiary.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 8,
    isActive: true,
  },

  // --- Regulatory Compliance ---
  {
    id: 'sv-reg-01',
    profileId: 'salud-vida',
    categoryId: 'professional',
    competencyId: 'regulatory-compliance',
    type: 'multiple-choice',
    content: {
      es: '¿Por qué es importante cumplir con las regulaciones de "Conozca a su Cliente" (KYC) en seguros de vida?',
      en: 'Why is it important to comply with "Know Your Customer" (KYC) regulations in life insurance?',
    },
    options: [
      { id: 'a', text: { es: 'Solo es un requisito burocrático sin impacto real', en: 'It is only a bureaucratic requirement with no real impact' }, value: 0 },
      { id: 'b', text: { es: 'Para prevenir el lavado de dinero y financiamiento del terrorismo, y proteger a la empresa de sanciones', en: 'To prevent money laundering and terrorism financing, and protect the company from sanctions' }, value: 100 },
      { id: 'c', text: { es: 'Para recopilar datos de marketing del cliente', en: 'To collect client marketing data' }, value: 0 },
      { id: 'd', text: { es: 'Solo aplica a seguros comerciales, no a seguros de vida', en: 'It only applies to commercial insurance, not life insurance' }, value: 0 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 9,
    isActive: true,
  },
  {
    id: 'sv-reg-02',
    profileId: 'salud-vida',
    categoryId: 'professional',
    competencyId: 'regulatory-compliance',
    type: 'scale',
    content: {
      es: '¿Qué tan actualizado te mantienes sobre los cambios regulatorios que afectan los seguros de salud y vida en tu jurisdicción?',
      en: 'How up-to-date do you stay on regulatory changes affecting health and life insurance in your jurisdiction?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada actualizado', en: 'Not updated at all' },
      max: { es: 'Completamente actualizado', en: 'Fully updated' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 10,
    isActive: true,
  },
  {
    id: 'sv-reg-03',
    profileId: 'salud-vida',
    categoryId: 'professional',
    competencyId: 'regulatory-compliance',
    type: 'open-text',
    content: {
      es: '¿Qué medidas tomarías si descubres que un proceso interno de tu empresa no cumple con una nueva regulación de seguros recién implementada?',
      en: 'What measures would you take if you discover that an internal process in your company does not comply with a newly implemented insurance regulation?',
    },
    rubric: {
      es: 'Evaluar: (1) Sentido de urgencia apropiado, (2) Escalamiento correcto (supervisores, compliance), (3) Propuesta de solución o plan de acción, (4) Documentación del hallazgo, (5) Conciencia del impacto regulatorio y posibles sanciones.',
      en: 'Evaluate: (1) Appropriate sense of urgency, (2) Correct escalation (supervisors, compliance), (3) Proposed solution or action plan, (4) Documentation of findings, (5) Awareness of regulatory impact and possible sanctions.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 11,
    isActive: true,
  },
];

// ============================================================================
// RIESGOS GENERALES - Professional Skills Questions
// ============================================================================

const riesgosGeneralesProfessionalQuestions: Question[] = [
  // --- Product Knowledge ---
  {
    id: 'rg-prod-01',
    profileId: 'riesgos-generales',
    categoryId: 'professional',
    competencyId: 'product-knowledge',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál es la diferencia fundamental entre un seguro de responsabilidad civil general y un seguro de responsabilidad civil profesional?',
      en: 'What is the fundamental difference between general liability insurance and professional liability insurance?',
    },
    options: [
      { id: 'a', text: { es: 'No hay diferencia, ambos cubren los mismos riesgos', en: 'There is no difference, both cover the same risks' }, value: 0 },
      { id: 'b', text: { es: 'La RC general cubre daños por actividades operativas; la RC profesional cubre errores u omisiones en servicios profesionales', en: 'General liability covers damages from operational activities; professional liability covers errors or omissions in professional services' }, value: 100 },
      { id: 'c', text: { es: 'La RC profesional solo aplica a médicos y abogados', en: 'Professional liability only applies to doctors and lawyers' }, value: 10 },
      { id: 'd', text: { es: 'La RC general es obligatoria y la profesional es opcional', en: 'General liability is mandatory and professional is optional' }, value: 20 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'rg-prod-02',
    profileId: 'riesgos-generales',
    categoryId: 'professional',
    competencyId: 'product-knowledge',
    type: 'multiple-choice',
    content: {
      es: '¿Qué tipo de fianza garantiza el cumplimiento de las obligaciones contractuales de un contratista?',
      en: 'What type of surety bond guarantees the fulfillment of a contractor\'s contractual obligations?',
    },
    options: [
      { id: 'a', text: { es: 'Fianza de fidelidad', en: 'Fidelity bond' }, value: 10 },
      { id: 'b', text: { es: 'Fianza de cumplimiento', en: 'Performance bond' }, value: 100 },
      { id: 'c', text: { es: 'Fianza judicial', en: 'Court bond' }, value: 10 },
      { id: 'd', text: { es: 'Fianza de licitación', en: 'Bid bond' }, value: 30 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },
  {
    id: 'rg-prod-03',
    profileId: 'riesgos-generales',
    categoryId: 'professional',
    competencyId: 'product-knowledge',
    type: 'open-text',
    content: {
      es: 'Una empresa manufacturera solicita una cotización integral de seguros. Describe los principales riesgos que identificarías y las coberturas que recomendarías.',
      en: 'A manufacturing company requests a comprehensive insurance quote. Describe the main risks you would identify and the coverages you would recommend.',
    },
    rubric: {
      es: 'Evaluar: (1) Identificación de riesgos (incendio, robo, RC, transporte, interrupción de negocio), (2) Coberturas recomendadas por tipo de riesgo, (3) Consideración de riesgos específicos de manufactura, (4) Mención de deducibles y límites, (5) Enfoque integral de protección.',
      en: 'Evaluate: (1) Risk identification (fire, theft, liability, transport, business interruption), (2) Recommended coverages by risk type, (3) Consideration of manufacturing-specific risks, (4) Mention of deductibles and limits, (5) Comprehensive protection approach.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },

  // --- Underwriting ---
  {
    id: 'rg-under-01',
    profileId: 'riesgos-generales',
    categoryId: 'professional',
    competencyId: 'underwriting',
    type: 'multiple-choice',
    content: {
      es: 'Al evaluar el riesgo de incendio de una propiedad comercial, ¿cuál de los siguientes factores es MÁS relevante?',
      en: 'When evaluating the fire risk of a commercial property, which of the following factors is MOST relevant?',
    },
    options: [
      { id: 'a', text: { es: 'El color del edificio', en: 'The color of the building' }, value: 0 },
      { id: 'b', text: { es: 'El tipo de construcción, materiales almacenados y sistemas de protección contra incendios', en: 'The type of construction, stored materials, and fire protection systems' }, value: 100 },
      { id: 'c', text: { es: 'La antigüedad del contrato de arrendamiento', en: 'The age of the lease agreement' }, value: 0 },
      { id: 'd', text: { es: 'El número de empleados en el edificio', en: 'The number of employees in the building' }, value: 30 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },
  {
    id: 'rg-under-02',
    profileId: 'riesgos-generales',
    categoryId: 'professional',
    competencyId: 'underwriting',
    type: 'scenario',
    content: {
      es: 'Una constructora solicita una fianza de cumplimiento por $10 millones para un proyecto de infraestructura gubernamental a 3 años. La empresa tiene 5 años de operación, ha completado proyectos similares pero de menor escala (máximo $3 millones), y sus estados financieros muestran un patrimonio neto de $4 millones.\n\n¿Cómo evaluarías esta solicitud? ¿La aprobarías, rechazarías o propondrías condiciones especiales?',
      en: 'A construction company requests a $10 million performance bond for a 3-year government infrastructure project. The company has 5 years of operation, has completed similar but smaller-scale projects (maximum $3 million), and its financial statements show a net worth of $4 million.\n\nHow would you evaluate this application? Would you approve, reject, or propose special conditions?',
    },
    rubric: {
      es: 'Evaluar: (1) Análisis de capacidad financiera vs monto solicitado, (2) Evaluación de experiencia y track record, (3) Identificación de riesgo por salto de escala (3x), (4) Propuesta de condiciones (contragarantías, coafianzamiento, reducción de monto), (5) Análisis de viabilidad del proyecto, (6) Rigor técnico en la evaluación.',
      en: 'Evaluate: (1) Financial capacity analysis vs requested amount, (2) Experience and track record evaluation, (3) Scale jump risk identification (3x), (4) Proposed conditions (counter-guarantees, co-surety, amount reduction), (5) Project viability analysis, (6) Technical rigor in evaluation.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 5,
    isActive: true,
  },
  {
    id: 'rg-under-03',
    profileId: 'riesgos-generales',
    categoryId: 'professional',
    competencyId: 'underwriting',
    type: 'scale',
    content: {
      es: '¿Qué tan competente te sientes realizando inspecciones de riesgo y evaluaciones in situ de propiedades comerciales e industriales?',
      en: 'How competent do you feel performing risk inspections and on-site assessments of commercial and industrial properties?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada competente', en: 'Not competent at all' },
      max: { es: 'Muy competente', en: 'Very competent' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 6,
    isActive: true,
  },

  // --- Claims Management ---
  {
    id: 'rg-claims-01',
    profileId: 'riesgos-generales',
    categoryId: 'professional',
    competencyId: 'claims-management',
    type: 'multiple-choice',
    content: {
      es: 'Un asegurado reporta daños por inundación en su bodega comercial. ¿Cuál es el primer aspecto crítico a verificar?',
      en: 'An insured reports flood damage at their commercial warehouse. What is the first critical aspect to verify?',
    },
    options: [
      { id: 'a', text: { es: 'Si el asegurado tiene fotos del daño', en: 'If the insured has photos of the damage' }, value: 30 },
      { id: 'b', text: { es: 'Si la póliza incluye cobertura por inundación (generalmente es exclusión estándar)', en: 'If the policy includes flood coverage (usually a standard exclusion)' }, value: 100 },
      { id: 'c', text: { es: 'El valor total de la mercancía dañada', en: 'The total value of the damaged merchandise' }, value: 20 },
      { id: 'd', text: { es: 'Si el asegurado presentó la reclamación dentro de las 24 horas', en: 'If the insured filed the claim within 24 hours' }, value: 10 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 7,
    isActive: true,
  },
  {
    id: 'rg-claims-02',
    profileId: 'riesgos-generales',
    categoryId: 'professional',
    competencyId: 'claims-management',
    type: 'scenario',
    content: {
      es: 'Una empresa asegurada con póliza de RC general recibe una demanda por $2 millones de un tercero que sufrió lesiones en sus instalaciones. El límite de la póliza es de $1 millón. La empresa está en pánico y quiere resolver rápidamente.\n\n¿Cómo manejarías este siniestro? Describe los pasos que seguirías.',
      en: 'A company insured with a general liability policy receives a $2 million lawsuit from a third party who suffered injuries on their premises. The policy limit is $1 million. The company is panicking and wants to resolve quickly.\n\nHow would you handle this claim? Describe the steps you would follow.',
    },
    rubric: {
      es: 'Evaluar: (1) Notificación inmediata a la aseguradora y reaseguradora, (2) Asignación de abogado defensor, (3) Investigación de los hechos, (4) Explicación clara del límite de póliza y exposición del asegurado, (5) Reserva técnica, (6) Estrategia de negociación, (7) Comunicación calmada y profesional con el asegurado.',
      en: 'Evaluate: (1) Immediate notification to insurer and reinsurer, (2) Defense attorney assignment, (3) Fact investigation, (4) Clear explanation of policy limit and insured\'s exposure, (5) Technical reserve, (6) Negotiation strategy, (7) Calm and professional communication with the insured.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 8,
    isActive: true,
  },

  // --- Regulatory Compliance ---
  {
    id: 'rg-reg-01',
    profileId: 'riesgos-generales',
    categoryId: 'professional',
    competencyId: 'regulatory-compliance',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál es el propósito principal de los requerimientos de reservas técnicas en seguros de riesgos generales?',
      en: 'What is the main purpose of technical reserve requirements in general risk insurance?',
    },
    options: [
      { id: 'a', text: { es: 'Generar utilidades adicionales para la aseguradora', en: 'Generate additional profits for the insurer' }, value: 0 },
      { id: 'b', text: { es: 'Garantizar que la aseguradora tenga fondos suficientes para cubrir obligaciones futuras con los asegurados', en: 'Ensure the insurer has sufficient funds to cover future obligations to policyholders' }, value: 100 },
      { id: 'c', text: { es: 'Cumplir con requisitos contables internacionales', en: 'Comply with international accounting requirements' }, value: 30 },
      { id: 'd', text: { es: 'Reducir la carga impositiva de la aseguradora', en: 'Reduce the insurer\'s tax burden' }, value: 0 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 9,
    isActive: true,
  },
  {
    id: 'rg-reg-02',
    profileId: 'riesgos-generales',
    categoryId: 'professional',
    competencyId: 'regulatory-compliance',
    type: 'scale',
    content: {
      es: '¿Qué tan familiarizado estás con las normativas de reaseguro y su impacto en la suscripción de riesgos de gran magnitud?',
      en: 'How familiar are you with reinsurance regulations and their impact on underwriting large-scale risks?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada familiarizado', en: 'Not familiar at all' },
      max: { es: 'Muy familiarizado', en: 'Very familiar' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 10,
    isActive: true,
  },
  {
    id: 'rg-reg-03',
    profileId: 'riesgos-generales',
    categoryId: 'professional',
    competencyId: 'regulatory-compliance',
    type: 'open-text',
    content: {
      es: 'Describe los principales retos regulatorios que enfrenta actualmente el sector de seguros de riesgos generales en tu mercado y cómo impactan las operaciones diarias.',
      en: 'Describe the main regulatory challenges currently facing the general risk insurance sector in your market and how they impact daily operations.',
    },
    rubric: {
      es: 'Evaluar: (1) Conocimiento de regulaciones vigentes, (2) Identificación de retos específicos (Solvencia II, IFRS 17, protección al consumidor), (3) Comprensión del impacto operativo, (4) Propuestas de adaptación, (5) Visión actualizada del entorno regulatorio.',
      en: 'Evaluate: (1) Knowledge of current regulations, (2) Identification of specific challenges (Solvency II, IFRS 17, consumer protection), (3) Understanding of operational impact, (4) Adaptation proposals, (5) Updated view of the regulatory environment.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 11,
    isActive: true,
  },
];

// ============================================================================
// Helper to generate profile-specific questions from shared questions
// ============================================================================

function assignToProfile(questions: Question[], profileId: string): Question[] {
  return questions.map((q) => ({
    ...q,
    id: q.id.replace('shared-', `${profileId === 'salud-vida' ? 'sv' : 'rg'}-`),
    profileId,
  }));
}

// ============================================================================
// EXPORT: All questions combined
// ============================================================================

export const questions: Question[] = [
  // Salud y Vida
  ...saludVidaProfessionalQuestions,
  ...assignToProfile(sharedSoftSkillsQuestions, 'salud-vida'),
  ...assignToProfile(sharedReadinessQuestions, 'salud-vida'),

  // Riesgos Generales
  ...riesgosGeneralesProfessionalQuestions,
  ...assignToProfile(sharedSoftSkillsQuestions, 'riesgos-generales'),
  ...assignToProfile(sharedReadinessQuestions, 'riesgos-generales'),
];
