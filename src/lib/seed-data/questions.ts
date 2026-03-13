import type { Question } from '@/types';
import { secPrincipalProfessionalQuestions, secPrincipalSoftSkillsQuestions, secPrincipalReadinessQuestions } from './questions-secondary-principal';
import { spProfessionalQuestions, spSoftSkillsQuestions, spReadinessQuestions } from './questions-school-psychologist';
import { primEdProfessionalQuestions, primEdSoftSkillsQuestions, primEdReadinessQuestions } from './questions-primary-educator';
import { preSchoolProfessionalQuestions, preSchoolSoftSkillsQuestions, preSchoolReadinessQuestions } from './questions-pre-school-educator';
import { acctMgrProfessionalQuestions, acctMgrSoftSkillsQuestions, acctMgrReadinessQuestions } from './questions-accounting-manager';
import { techSupProfessionalQuestions, techSupSoftSkillsQuestions, techSupReadinessQuestions } from './questions-technical-support';
import { bmProfessionalQuestions, bmSoftSkillsQuestions, bmReadinessQuestions } from './questions-business-manager';
import { cfoProfessionalQuestions, cfoSoftSkillsQuestions, cfoReadinessQuestions } from './cfo-questions';
import { insCeoProfessionalQuestions, insCeoSoftSkillsQuestions, insCeoReadinessQuestions, insBrokerProfessionalQuestions, insBrokerSoftSkillsQuestions, insBrokerReadinessQuestions } from './insurance-ceo-questions';
import { insCroProfessionalQuestions, insCroSoftSkillsQuestions, insCroReadinessQuestions, insCuoProfessionalQuestions, insCuoSoftSkillsQuestions, insCuoReadinessQuestions, insActuaryProfessionalQuestions, insActuarySoftSkillsQuestions, insActuaryReadinessQuestions } from './insurance-risk-questions';
import { techSwdevProfessionalQuestions, techSwdevSoftSkillsQuestions, techSwdevReadinessQuestions, techItmgrProfessionalQuestions, techItmgrSoftSkillsQuestions, techItmgrReadinessQuestions, techDataProfessionalQuestions, techDataSoftSkillsQuestions, techDataReadinessQuestions, techCyberProfessionalQuestions, techCyberSoftSkillsQuestions, techCyberReadinessQuestions, techApmProfessionalQuestions, techApmSoftSkillsQuestions, techApmReadinessQuestions } from './tech-questions';
import { bankBmProfessionalQuestions, bankBmSoftSkillsQuestions, bankBmReadinessQuestions, bankLoProfessionalQuestions, bankLoSoftSkillsQuestions, bankLoReadinessQuestions, bankIaProfessionalQuestions, bankIaSoftSkillsQuestions, bankIaReadinessQuestions, bankBtProfessionalQuestions, bankBtSoftSkillsQuestions, bankBtReadinessQuestions } from './banking-questions';
import { hospHgmProfessionalQuestions, hospHgmSoftSkillsQuestions, hospHgmReadinessQuestions, hospRmProfessionalQuestions, hospRmSoftSkillsQuestions, hospRmReadinessQuestions, hospFdaProfessionalQuestions, hospFdaSoftSkillsQuestions, hospFdaReadinessQuestions, hospCkmProfessionalQuestions, hospCkmSoftSkillsQuestions, hospCkmReadinessQuestions } from './hospitality-questions';
import { legalMpProfessionalQuestions, legalMpSoftSkillsQuestions, legalMpReadinessQuestions, legalPdProfessionalQuestions, legalPdSoftSkillsQuestions, legalPdReadinessQuestions, legalSaProfessionalQuestions, legalSaSoftSkillsQuestions, legalSaReadinessQuestions, legalCcProfessionalQuestions, legalCcSoftSkillsQuestions, legalCcReadinessQuestions, legalPlProfessionalQuestions, legalPlSoftSkillsQuestions, legalPlReadinessQuestions, legalLsProfessionalQuestions, legalLsSoftSkillsQuestions, legalLsReadinessQuestions } from './legal-questions';
import { msDynProfessionalQuestions, msDynSoftSkillsQuestions, msDynReadinessQuestions, msOfficeProfessionalQuestions, msOfficeSoftSkillsQuestions, msOfficeReadinessQuestions, msSpProfessionalQuestions, msSpSoftSkillsQuestions, msSpReadinessQuestions } from './ms-questions';

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
      fr: 'Un client mécontent appelle car il ne comprend pas une clause de sa police. Quelle est la meilleure façon de gérer la situation ?',
    },
    options: [
      { id: 'a', text: { es: 'Leer la cláusula textualmente al cliente', en: 'Read the clause verbatim to the client', fr: 'Lire la clause textuellement au client' }, value: 20 },
      { id: 'b', text: { es: 'Escuchar activamente, validar su frustración y explicar la cláusula en términos sencillos', en: 'Actively listen, validate their frustration, and explain the clause in simple terms', fr: 'Écouter activement, valider sa frustration et expliquer la clause en termes simples' }, value: 100 },
      { id: 'c', text: { es: 'Transferir la llamada al departamento legal', en: 'Transfer the call to the legal department', fr: 'Transférer l\'appel au service juridique' }, value: 10 },
      { id: 'd', text: { es: 'Explicar la cláusula técnicamente y enviar un correo con la documentación', en: 'Explain the clause technically and send an email with the documentation', fr: 'Expliquer la clause de manière technique et envoyer un courriel avec la documentation' }, value: 60 },
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
      fr: 'À quelle fréquence adaptez-vous votre style de communication en fonction de l\'auditoire (clients, collègues, superviseurs) ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nunca', en: 'Never', fr: 'Jamais' },
      max: { es: 'Siempre', en: 'Always', fr: 'Toujours' },
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
      fr: 'Décrivez une situation dans laquelle vous avez dû expliquer un concept complexe d\'assurance à une personne sans expérience dans le domaine. Comment avez-vous procédé et quel a été le résultat ?',
    },
    rubric: {
      es: 'Evaluar: (1) Capacidad de simplificar conceptos técnicos, (2) Empatía con la audiencia, (3) Uso de ejemplos o analogías, (4) Resultado positivo de la comunicación, (5) Verificación de comprensión.',
      en: 'Evaluate: (1) Ability to simplify technical concepts, (2) Empathy with the audience, (3) Use of examples or analogies, (4) Positive communication outcome, (5) Verification of understanding.',
      fr: 'Évaluer : (1) Capacité à simplifier des concepts techniques, (2) Empathie envers l\'auditoire, (3) Utilisation d\'exemples ou d\'analogies, (4) Résultat positif de la communication, (5) Vérification de la compréhension.',
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
      fr: 'Vous travaillez sur un projet avec une équipe pluridisciplinaire. L\'un des membres de l\'équipe ne respecte pas ses livrables, ce qui affecte les autres. Que feriez-vous ?\n\nContexte : Le membre de l\'équipe est compétent mais semble dernièrement démotivé. L\'échéance est dans deux semaines.',
    },
    rubric: {
      es: 'Evaluar: (1) Empatía y comprensión de la situación, (2) Comunicación directa pero respetuosa, (3) Enfoque en soluciones (redistribución de tareas, apoyo), (4) No escalar prematuramente, (5) Compromiso con el resultado del equipo.',
      en: 'Evaluate: (1) Empathy and understanding of the situation, (2) Direct but respectful communication, (3) Solution-focused approach (task redistribution, support), (4) Not escalating prematurely, (5) Commitment to team results.',
      fr: 'Évaluer : (1) Empathie et compréhension de la situation, (2) Communication directe mais respectueuse, (3) Approche orientée solutions (redistribution des tâches, soutien), (4) Ne pas escalader prématurément, (5) Engagement envers les résultats de l\'équipe.',
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
      fr: 'Lorsqu\'il y a un désaccord au sein de votre équipe sur la façon d\'aborder un dossier, quelle est votre approche principale ?',
    },
    options: [
      { id: 'a', text: { es: 'Imponer mi criterio si tengo más experiencia', en: 'Impose my criteria if I have more experience', fr: 'Imposer mon point de vue si j\'ai plus d\'expérience' }, value: 10 },
      { id: 'b', text: { es: 'Ceder para evitar conflictos', en: 'Give in to avoid conflicts', fr: 'Céder pour éviter les conflits' }, value: 30 },
      { id: 'c', text: { es: 'Facilitar un diálogo donde todos expongan sus argumentos y buscar consenso', en: 'Facilitate a dialogue where everyone presents their arguments and seek consensus', fr: 'Faciliter un dialogue où chacun expose ses arguments et rechercher un consensus' }, value: 100 },
      { id: 'd', text: { es: 'Escalar al supervisor para que tome la decisión', en: 'Escalate to the supervisor for a decision', fr: 'Escalader au superviseur pour qu\'il prenne la décision' }, value: 20 },
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
      fr: 'Dans quelle mesure êtes-vous disposé à assumer des tâches en dehors de votre rôle habituel pour soutenir l\'équipe lorsque nécessaire ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada dispuesto', en: 'Not willing at all', fr: 'Pas du tout disposé' },
      max: { es: 'Totalmente dispuesto', en: 'Fully willing', fr: 'Tout à fait disposé' },
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
      fr: 'Classez les étapes suivantes de résolution de problèmes par ordre d\'importance face à un dossier d\'assurance complexe :',
    },
    options: [
      { id: 'a', text: { es: 'Recopilar toda la información relevante', en: 'Gather all relevant information', fr: 'Rassembler toutes les informations pertinentes' }, value: 1 },
      { id: 'b', text: { es: 'Identificar las causas raíz del problema', en: 'Identify root causes of the problem', fr: 'Identifier les causes profondes du problème' }, value: 2 },
      { id: 'c', text: { es: 'Evaluar posibles soluciones y sus consecuencias', en: 'Evaluate possible solutions and their consequences', fr: 'Évaluer les solutions possibles et leurs conséquences' }, value: 3 },
      { id: 'd', text: { es: 'Implementar la solución y dar seguimiento', en: 'Implement the solution and follow up', fr: 'Mettre en œuvre la solution et assurer le suivi' }, value: 4 },
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
      fr: 'Un client important dépose une réclamation qui semble légitime, mais en examinant la documentation, vous trouvez des incohérences qui pourraient indiquer une erreur du client ou une fraude éventuelle. Le client exerce une pression pour une résolution rapide.\n\nComment géreriez-vous cette situation étape par étape ?',
    },
    rubric: {
      es: 'Evaluar: (1) Análisis metódico de inconsistencias, (2) Profesionalismo sin acusaciones, (3) Solicitud de documentación adicional, (4) Comunicación con el cliente, (5) Seguimiento de protocolos internos, (6) Balance entre servicio al cliente y protección de la empresa.',
      en: 'Evaluate: (1) Methodical analysis of inconsistencies, (2) Professionalism without accusations, (3) Request for additional documentation, (4) Communication with the client, (5) Following internal protocols, (6) Balance between customer service and company protection.',
      fr: 'Évaluer : (1) Analyse méthodique des incohérences, (2) Professionnalisme sans accusations, (3) Demande de documentation supplémentaire, (4) Communication avec le client, (5) Respect des protocoles internes, (6) Équilibre entre service client et protection de l\'entreprise.',
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
      fr: 'Quel est selon vous le facteur le plus important pour offrir un excellent service client en assurance ?',
    },
    options: [
      { id: 'a', text: { es: 'Resolver el caso lo más rápido posible', en: 'Resolve the case as quickly as possible', fr: 'Résoudre le dossier le plus rapidement possible' }, value: 40 },
      { id: 'b', text: { es: 'Mantener al cliente informado en todo momento y anticiparse a sus necesidades', en: 'Keep the client informed at all times and anticipate their needs', fr: 'Tenir le client informé en permanence et anticiper ses besoins' }, value: 100 },
      { id: 'c', text: { es: 'Seguir estrictamente los procedimientos establecidos', en: 'Strictly follow established procedures', fr: 'Suivre strictement les procédures établies' }, value: 30 },
      { id: 'd', text: { es: 'Ofrecer soluciones aunque no estén dentro del alcance estándar', en: 'Offer solutions even if they are not within standard scope', fr: 'Proposer des solutions même si elles ne relèvent pas du périmètre standard' }, value: 60 },
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
      fr: 'Dans quelle mesure vous sentez-vous à l\'aise pour gérer des clients difficiles ou des situations de forte pression émotionnelle ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Muy incómodo', en: 'Very uncomfortable', fr: 'Très mal à l\'aise' },
      max: { es: 'Muy cómodo', en: 'Very comfortable', fr: 'Très à l\'aise' },
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
      fr: 'Décrivez votre approche pour transformer une expérience client négative en une opportunité de fidélisation. Donnez un exemple concret si possible.',
    },
    rubric: {
      es: 'Evaluar: (1) Empatía genuina, (2) Capacidad de recuperación del servicio, (3) Seguimiento posterior, (4) Proactividad, (5) Resultado medible o positivo.',
      en: 'Evaluate: (1) Genuine empathy, (2) Service recovery capability, (3) Post-incident follow-up, (4) Proactivity, (5) Measurable or positive outcome.',
      fr: 'Évaluer : (1) Empathie authentique, (2) Capacité de rétablissement du service, (3) Suivi post-incident, (4) Proactivité, (5) Résultat mesurable ou positif.',
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
      fr: 'Votre entreprise annonce un changement important dans les processus de travail qui affecte directement votre rôle. Quelle est votre première réaction ?',
    },
    options: [
      { id: 'a', text: { es: 'Preocupación y resistencia hasta entender los beneficios', en: 'Concern and resistance until I understand the benefits', fr: 'Inquiétude et résistance jusqu\'à ce que je comprenne les avantages' }, value: 30 },
      { id: 'b', text: { es: 'Curiosidad por entender el cambio y buscar cómo adaptarme', en: 'Curiosity to understand the change and find ways to adapt', fr: 'Curiosité pour comprendre le changement et chercher comment m\'adapter' }, value: 100 },
      { id: 'c', text: { es: 'Aceptación pasiva, espero instrucciones claras', en: 'Passive acceptance, I wait for clear instructions', fr: 'Acceptation passive, j\'attends des instructions claires' }, value: 40 },
      { id: 'd', text: { es: 'Frustración porque los procesos actuales funcionan bien', en: 'Frustration because current processes work fine', fr: 'Frustration car les processus actuels fonctionnent bien' }, value: 10 },
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
      fr: 'Dans quelle mesure vous sentez-vous à l\'aise pour travailler dans l\'incertitude ou lorsque les règles du jeu changent ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Muy incómodo', en: 'Very uncomfortable', fr: 'Très mal à l\'aise' },
      max: { es: 'Muy cómodo', en: 'Very comfortable', fr: 'Très à l\'aise' },
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
      fr: 'La réglementation des assurances dans votre pays évolue considérablement, exigeant que tous les produits existants soient restructurés en 6 mois. Votre équipe doit apprendre les nouvelles normes tout en maintenant les opérations quotidiennes.\n\nComment vous organiseriez-vous pour gérer ces deux responsabilités ?',
    },
    rubric: {
      es: 'Evaluar: (1) Planificación y priorización, (2) Gestión del tiempo, (3) Proactividad en el aprendizaje, (4) Capacidad de manejar presión, (5) Colaboración con el equipo para distribuir carga.',
      en: 'Evaluate: (1) Planning and prioritization, (2) Time management, (3) Proactive learning, (4) Ability to handle pressure, (5) Team collaboration for workload distribution.',
      fr: 'Évaluer : (1) Planification et priorisation, (2) Gestion du temps, (3) Apprentissage proactif, (4) Capacité à gérer la pression, (5) Collaboration avec l\'équipe pour la répartition de la charge de travail.',
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
      fr: 'Quelle est votre approche principale pour rester à jour dans votre domaine professionnel ?',
    },
    options: [
      { id: 'a', text: { es: 'Solo participo en capacitaciones obligatorias de la empresa', en: 'I only participate in mandatory company training', fr: 'Je ne participe qu\'aux formations obligatoires de l\'entreprise' }, value: 20 },
      { id: 'b', text: { es: 'Busco activamente cursos, artículos y eventos del sector por iniciativa propia', en: 'I actively seek courses, articles, and industry events on my own initiative', fr: 'Je recherche activement des formations, des articles et des événements du secteur de ma propre initiative' }, value: 100 },
      { id: 'c', text: { es: 'Aprendo de mis colegas más experimentados cuando surge la oportunidad', en: 'I learn from more experienced colleagues when the opportunity arises', fr: 'J\'apprends de mes collègues plus expérimentés lorsque l\'occasion se présente' }, value: 60 },
      { id: 'd', text: { es: 'Espero que la empresa me indique qué necesito aprender', en: 'I wait for the company to tell me what I need to learn', fr: 'J\'attends que l\'entreprise m\'indique ce que je dois apprendre' }, value: 10 },
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
      fr: 'À quelle fréquence consacrez-vous du temps en dehors des heures de travail pour vous former sur des sujets liés à votre profession ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nunca', en: 'Never', fr: 'Jamais' },
      max: { es: 'Muy frecuentemente', en: 'Very frequently', fr: 'Très fréquemment' },
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
      fr: 'Quelle nouvelle compétence ou connaissance avez-vous récemment acquise de votre propre initiative ? Comment l\'avez-vous appliquée ou prévoyez-vous de l\'appliquer dans votre travail ?',
    },
    rubric: {
      es: 'Evaluar: (1) Iniciativa personal demostrada, (2) Relevancia del aprendizaje para el rol, (3) Aplicación práctica, (4) Motivación intrínseca, (5) Plan de seguimiento.',
      en: 'Evaluate: (1) Demonstrated personal initiative, (2) Relevance of learning to the role, (3) Practical application, (4) Intrinsic motivation, (5) Follow-up plan.',
      fr: 'Évaluer : (1) Initiative personnelle démontrée, (2) Pertinence de l\'apprentissage par rapport au poste, (3) Application pratique, (4) Motivation intrinsèque, (5) Plan de suivi.',
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
      fr: 'Votre entreprise met en place une nouvelle plateforme numérique de gestion des polices. Comment réagissez-vous ?',
    },
    options: [
      { id: 'a', text: { es: 'Me entusiasma explorar las nuevas funcionalidades y ser de los primeros en usarla', en: 'I\'m excited to explore the new features and be among the first to use it', fr: 'Je suis enthousiaste à l\'idée d\'explorer les nouvelles fonctionnalités et d\'être parmi les premiers à l\'utiliser' }, value: 100 },
      { id: 'b', text: { es: 'Espero a que otros la prueben primero y me comparten su experiencia', en: 'I wait for others to try it first and share their experience', fr: 'J\'attends que d\'autres l\'essaient d\'abord et partagent leur expérience' }, value: 40 },
      { id: 'c', text: { es: 'La uso cuando es obligatorio pero prefiero los métodos anteriores', en: 'I use it when mandatory but prefer the previous methods', fr: 'Je l\'utilise quand c\'est obligatoire mais je préfère les méthodes précédentes' }, value: 20 },
      { id: 'd', text: { es: 'La adopto con una actitud positiva y busco capacitación adicional', en: 'I adopt it with a positive attitude and seek additional training', fr: 'Je l\'adopte avec une attitude positive et recherche une formation complémentaire' }, value: 80 },
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
      fr: 'Dans quelle mesure connaissez-vous les outils d\'intelligence artificielle appliqués au secteur de l\'assurance ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada familiarizado', en: 'Not familiar at all', fr: 'Pas du tout familiarisé' },
      max: { es: 'Muy familiarizado', en: 'Very familiar', fr: 'Très familiarisé' },
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
      fr: 'Classez les technologies suivantes selon l\'impact que vous estimez qu\'elles auront sur le secteur de l\'assurance dans les 5 prochaines années (du plus fort au plus faible impact) :',
    },
    options: [
      { id: 'a', text: { es: 'Inteligencia Artificial y Machine Learning', en: 'Artificial Intelligence and Machine Learning', fr: 'Intelligence artificielle et apprentissage automatique' }, value: 1 },
      { id: 'b', text: { es: 'Automatización de procesos (RPA)', en: 'Process Automation (RPA)', fr: 'Automatisation des processus (RPA)' }, value: 2 },
      { id: 'c', text: { es: 'Análisis de Big Data', en: 'Big Data Analytics', fr: 'Analyse de mégadonnées (Big Data)' }, value: 3 },
      { id: 'd', text: { es: 'Plataformas digitales de autoservicio', en: 'Digital self-service platforms', fr: 'Plateformes numériques en libre-service' }, value: 4 },
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
      fr: 'Quelle est la principale différence entre une assurance vie temporaire et une assurance vie permanente ?',
    },
    options: [
      { id: 'a', text: { es: 'El seguro temporal cubre solo accidentes, el permanente cubre todo', en: 'Term insurance covers only accidents, permanent covers everything', fr: 'L\'assurance temporaire couvre uniquement les accidents, la permanente couvre tout' }, value: 0 },
      { id: 'b', text: { es: 'El seguro temporal tiene una vigencia definida; el permanente ofrece cobertura vitalicia y puede acumular valor en efectivo', en: 'Term insurance has a defined period; permanent offers lifelong coverage and may accumulate cash value', fr: 'L\'assurance temporaire a une durée définie ; la permanente offre une couverture à vie et peut accumuler une valeur de rachat' }, value: 100 },
      { id: 'c', text: { es: 'No hay diferencia significativa, solo varía la prima', en: 'There is no significant difference, only the premium varies', fr: 'Il n\'y a pas de différence significative, seule la prime varie' }, value: 0 },
      { id: 'd', text: { es: 'El seguro permanente solo se ofrece a personas mayores de 50 años', en: 'Permanent insurance is only offered to people over 50', fr: 'L\'assurance permanente n\'est proposée qu\'aux personnes de plus de 50 ans' }, value: 0 },
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
      fr: 'Qu\'est-ce qu\'un délai de carence en assurance santé ?',
    },
    options: [
      { id: 'a', text: { es: 'El tiempo que tarda la aseguradora en pagar una reclamación', en: 'The time it takes the insurer to pay a claim', fr: 'Le temps que met l\'assureur à régler un sinistre' }, value: 20 },
      { id: 'b', text: { es: 'El período después de la contratación durante el cual ciertas coberturas no están disponibles', en: 'The period after enrollment during which certain coverages are not available', fr: 'La période après la souscription pendant laquelle certaines garanties ne sont pas disponibles' }, value: 100 },
      { id: 'c', text: { es: 'El período de gracia para el pago de primas', en: 'The grace period for premium payment', fr: 'Le délai de grâce pour le paiement des primes' }, value: 10 },
      { id: 'd', text: { es: 'El tiempo entre la solicitud y la emisión de la póliza', en: 'The time between application and policy issuance', fr: 'Le délai entre la demande et l\'émission de la police' }, value: 10 },
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
      fr: 'Expliquez les principales garanties que doit inclure un contrat d\'assurance santé collective et comment vous les présenteriez à un client entreprise potentiel.',
    },
    rubric: {
      es: 'Evaluar: (1) Conocimiento de coberturas (hospitalización, ambulatorio, maternidad, dental, vida), (2) Capacidad de articular beneficios vs. características, (3) Enfoque consultivo orientado a necesidades del cliente, (4) Mención de personalización según tipo de empresa, (5) Claridad y estructura de la explicación.',
      en: 'Evaluate: (1) Knowledge of coverages (hospitalization, outpatient, maternity, dental, life), (2) Ability to articulate benefits vs. features, (3) Consultative approach oriented to client needs, (4) Mention of customization by company type, (5) Clarity and structure of explanation.',
      fr: 'Évaluer : (1) Connaissance des garanties (hospitalisation, soins ambulatoires, maternité, dentaire, vie), (2) Capacité à articuler les avantages par rapport aux caractéristiques, (3) Approche consultative orientée vers les besoins du client, (4) Mention de la personnalisation selon le type d\'entreprise, (5) Clarté et structure de l\'explication.',
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
      fr: 'Lors de l\'évaluation d\'une demande d\'assurance vie, lequel des facteurs suivants a généralement le PLUS GRAND impact sur la prime ?',
    },
    options: [
      { id: 'a', text: { es: 'El código postal del solicitante', en: 'The applicant\'s zip code', fr: 'Le code postal du demandeur' }, value: 10 },
      { id: 'b', text: { es: 'La edad y el historial médico del solicitante', en: 'The applicant\'s age and medical history', fr: 'L\'âge et les antécédents médicaux du demandeur' }, value: 100 },
      { id: 'c', text: { es: 'El nivel educativo del solicitante', en: 'The applicant\'s education level', fr: 'Le niveau d\'études du demandeur' }, value: 0 },
      { id: 'd', text: { es: 'La cantidad de beneficiarios designados', en: 'The number of designated beneficiaries', fr: 'Le nombre de bénéficiaires désignés' }, value: 0 },
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
      fr: 'Un demandeur de 45 ans sollicite une assurance vie de 500 000 $. Dans sa déclaration médicale, il révèle avoir été diagnostiqué avec un diabète de type 2 il y a 3 ans, actuellement contrôlé par médication. Il indique également fumer occasionnellement.\n\nComment évalueriez-vous cette demande ? Quelles informations supplémentaires demanderiez-vous ?',
    },
    rubric: {
      es: 'Evaluar: (1) Identificación de factores de riesgo (diabetes + tabaquismo), (2) Solicitud de exámenes médicos adicionales, (3) Consideración de historial de control de la diabetes (HbA1c), (4) Evaluación del impacto en la prima (recargo), (5) Conocimiento de opciones (exclusiones, tabla de recargo, sublímites), (6) Profesionalismo en la comunicación.',
      en: 'Evaluate: (1) Risk factor identification (diabetes + smoking), (2) Request for additional medical exams, (3) Consideration of diabetes control history (HbA1c), (4) Impact assessment on premium (surcharge), (5) Knowledge of options (exclusions, rating table, sublimits), (6) Professional communication.',
      fr: 'Évaluer : (1) Identification des facteurs de risque (diabète + tabagisme), (2) Demande d\'examens médicaux complémentaires, (3) Prise en compte de l\'historique de contrôle du diabète (HbA1c), (4) Évaluation de l\'impact sur la prime (surprime), (5) Connaissance des options (exclusions, barème de surprime, sous-limites), (6) Communication professionnelle.',
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
      fr: 'Dans quelle mesure vous sentez-vous confiant pour évaluer et classifier le niveau de risque d\'un demandeur d\'assurance santé ou vie ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada seguro', en: 'Not confident at all', fr: 'Pas du tout confiant' },
      max: { es: 'Muy seguro', en: 'Very confident', fr: 'Très confiant' },
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
      fr: 'Quelle est la première étape lors de la réception d\'une déclaration de sinistre en assurance santé ?',
    },
    options: [
      { id: 'a', text: { es: 'Aprobar la reclamación para mantener la satisfacción del cliente', en: 'Approve the claim to maintain customer satisfaction', fr: 'Approuver la réclamation pour maintenir la satisfaction du client' }, value: 0 },
      { id: 'b', text: { es: 'Verificar la vigencia de la póliza y que el evento esté cubierto', en: 'Verify policy validity and that the event is covered', fr: 'Vérifier la validité de la police et que l\'événement est couvert' }, value: 100 },
      { id: 'c', text: { es: 'Solicitar inmediatamente un peritaje externo', en: 'Immediately request an external appraisal', fr: 'Demander immédiatement une expertise externe' }, value: 20 },
      { id: 'd', text: { es: 'Contactar al beneficiario para verificar los hechos', en: 'Contact the beneficiary to verify the facts', fr: 'Contacter le bénéficiaire pour vérifier les faits' }, value: 40 },
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
      fr: 'Vous recevez une déclaration de sinistre décès sur une police d\'assurance vie. La police a été émise il y a 18 mois. Le bénéficiaire présente un certificat de décès indiquant un infarctus comme cause du décès. En examinant la demande initiale, vous constatez que l\'assuré n\'a pas déclaré d\'antécédents d\'hypertension artérielle.\n\nComment procéderiez-vous avec cette réclamation ?',
    },
    rubric: {
      es: 'Evaluar: (1) Conocimiento del período de contestabilidad (generalmente 2 años), (2) Proceso de investigación de declaraciones, (3) Solicitud de registros médicos previos, (4) Balance entre derechos del beneficiario y protección de la aseguradora, (5) Conocimiento legal y regulatorio, (6) Comunicación empática con el beneficiario.',
      en: 'Evaluate: (1) Knowledge of contestability period (typically 2 years), (2) Declaration investigation process, (3) Request for prior medical records, (4) Balance between beneficiary rights and insurer protection, (5) Legal and regulatory knowledge, (6) Empathetic communication with the beneficiary.',
      fr: 'Évaluer : (1) Connaissance de la période de contestabilité (généralement 2 ans), (2) Processus d\'investigation des déclarations, (3) Demande de dossiers médicaux antérieurs, (4) Équilibre entre les droits du bénéficiaire et la protection de l\'assureur, (5) Connaissances juridiques et réglementaires, (6) Communication empathique avec le bénéficiaire.',
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
      fr: 'Pourquoi est-il important de respecter les réglementations « Connaître son client » (KYC) en assurance vie ?',
    },
    options: [
      { id: 'a', text: { es: 'Solo es un requisito burocrático sin impacto real', en: 'It is only a bureaucratic requirement with no real impact', fr: 'C\'est uniquement une exigence bureaucratique sans impact réel' }, value: 0 },
      { id: 'b', text: { es: 'Para prevenir el lavado de dinero y financiamiento del terrorismo, y proteger a la empresa de sanciones', en: 'To prevent money laundering and terrorism financing, and protect the company from sanctions', fr: 'Pour prévenir le blanchiment d\'argent et le financement du terrorisme, et protéger l\'entreprise contre les sanctions' }, value: 100 },
      { id: 'c', text: { es: 'Para recopilar datos de marketing del cliente', en: 'To collect client marketing data', fr: 'Pour collecter des données marketing sur le client' }, value: 0 },
      { id: 'd', text: { es: 'Solo aplica a seguros comerciales, no a seguros de vida', en: 'It only applies to commercial insurance, not life insurance', fr: 'Cela ne s\'applique qu\'aux assurances commerciales, pas à l\'assurance vie' }, value: 0 },
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
      fr: 'Dans quelle mesure restez-vous informé des changements réglementaires affectant l\'assurance santé et vie dans votre juridiction ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada actualizado', en: 'Not updated at all', fr: 'Pas du tout à jour' },
      max: { es: 'Completamente actualizado', en: 'Fully updated', fr: 'Parfaitement à jour' },
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
      fr: 'Quelles mesures prendriez-vous si vous découvriez qu\'un processus interne de votre entreprise ne respecte pas une nouvelle réglementation d\'assurance récemment mise en œuvre ?',
    },
    rubric: {
      es: 'Evaluar: (1) Sentido de urgencia apropiado, (2) Escalamiento correcto (supervisores, compliance), (3) Propuesta de solución o plan de acción, (4) Documentación del hallazgo, (5) Conciencia del impacto regulatorio y posibles sanciones.',
      en: 'Evaluate: (1) Appropriate sense of urgency, (2) Correct escalation (supervisors, compliance), (3) Proposed solution or action plan, (4) Documentation of findings, (5) Awareness of regulatory impact and possible sanctions.',
      fr: 'Évaluer : (1) Sens de l\'urgence approprié, (2) Escalade correcte (superviseurs, conformité), (3) Proposition de solution ou plan d\'action, (4) Documentation des constatations, (5) Conscience de l\'impact réglementaire et des sanctions possibles.',
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
      fr: 'Quelle est la différence fondamentale entre une assurance responsabilité civile générale et une assurance responsabilité civile professionnelle ?',
    },
    options: [
      { id: 'a', text: { es: 'No hay diferencia, ambos cubren los mismos riesgos', en: 'There is no difference, both cover the same risks', fr: 'Il n\'y a pas de différence, les deux couvrent les mêmes risques' }, value: 0 },
      { id: 'b', text: { es: 'La RC general cubre daños por actividades operativas; la RC profesional cubre errores u omisiones en servicios profesionales', en: 'General liability covers damages from operational activities; professional liability covers errors or omissions in professional services', fr: 'La RC générale couvre les dommages liés aux activités opérationnelles ; la RC professionnelle couvre les erreurs ou omissions dans les services professionnels' }, value: 100 },
      { id: 'c', text: { es: 'La RC profesional solo aplica a médicos y abogados', en: 'Professional liability only applies to doctors and lawyers', fr: 'La RC professionnelle ne s\'applique qu\'aux médecins et aux avocats' }, value: 10 },
      { id: 'd', text: { es: 'La RC general es obligatoria y la profesional es opcional', en: 'General liability is mandatory and professional is optional', fr: 'La RC générale est obligatoire et la professionnelle est facultative' }, value: 20 },
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
      fr: 'Quel type de cautionnement garantit l\'exécution des obligations contractuelles d\'un entrepreneur ?',
    },
    options: [
      { id: 'a', text: { es: 'Fianza de fidelidad', en: 'Fidelity bond', fr: 'Cautionnement de fidélité' }, value: 10 },
      { id: 'b', text: { es: 'Fianza de cumplimiento', en: 'Performance bond', fr: 'Cautionnement de bonne exécution' }, value: 100 },
      { id: 'c', text: { es: 'Fianza judicial', en: 'Court bond', fr: 'Cautionnement judiciaire' }, value: 10 },
      { id: 'd', text: { es: 'Fianza de licitación', en: 'Bid bond', fr: 'Cautionnement de soumission' }, value: 30 },
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
      fr: 'Une entreprise manufacturière demande un devis d\'assurance complet. Décrivez les principaux risques que vous identifieriez et les garanties que vous recommanderiez.',
    },
    rubric: {
      es: 'Evaluar: (1) Identificación de riesgos (incendio, robo, RC, transporte, interrupción de negocio), (2) Coberturas recomendadas por tipo de riesgo, (3) Consideración de riesgos específicos de manufactura, (4) Mención de deducibles y límites, (5) Enfoque integral de protección.',
      en: 'Evaluate: (1) Risk identification (fire, theft, liability, transport, business interruption), (2) Recommended coverages by risk type, (3) Consideration of manufacturing-specific risks, (4) Mention of deductibles and limits, (5) Comprehensive protection approach.',
      fr: 'Évaluer : (1) Identification des risques (incendie, vol, RC, transport, interruption d\'activité), (2) Garanties recommandées par type de risque, (3) Prise en compte des risques spécifiques à la manufacture, (4) Mention des franchises et des limites, (5) Approche de protection globale.',
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
      fr: 'Lors de l\'évaluation du risque d\'incendie d\'un bien commercial, lequel des facteurs suivants est le PLUS pertinent ?',
    },
    options: [
      { id: 'a', text: { es: 'El color del edificio', en: 'The color of the building', fr: 'La couleur du bâtiment' }, value: 0 },
      { id: 'b', text: { es: 'El tipo de construcción, materiales almacenados y sistemas de protección contra incendios', en: 'The type of construction, stored materials, and fire protection systems', fr: 'Le type de construction, les matériaux stockés et les systèmes de protection contre l\'incendie' }, value: 100 },
      { id: 'c', text: { es: 'La antigüedad del contrato de arrendamiento', en: 'The age of the lease agreement', fr: 'L\'ancienneté du contrat de bail' }, value: 0 },
      { id: 'd', text: { es: 'El número de empleados en el edificio', en: 'The number of employees in the building', fr: 'Le nombre d\'employés dans le bâtiment' }, value: 30 },
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
      fr: 'Une entreprise de construction demande un cautionnement de bonne exécution de 10 millions de dollars pour un projet d\'infrastructure gouvernemental de 3 ans. L\'entreprise a 5 ans d\'activité, a réalisé des projets similaires mais de moindre envergure (maximum 3 millions de dollars), et ses états financiers affichent un actif net de 4 millions de dollars.\n\nComment évalueriez-vous cette demande ? L\'approuveriez-vous, la refuseriez-vous ou proposeriez-vous des conditions particulières ?',
    },
    rubric: {
      es: 'Evaluar: (1) Análisis de capacidad financiera vs monto solicitado, (2) Evaluación de experiencia y track record, (3) Identificación de riesgo por salto de escala (3x), (4) Propuesta de condiciones (contragarantías, coafianzamiento, reducción de monto), (5) Análisis de viabilidad del proyecto, (6) Rigor técnico en la evaluación.',
      en: 'Evaluate: (1) Financial capacity analysis vs requested amount, (2) Experience and track record evaluation, (3) Scale jump risk identification (3x), (4) Proposed conditions (counter-guarantees, co-surety, amount reduction), (5) Project viability analysis, (6) Technical rigor in evaluation.',
      fr: 'Évaluer : (1) Analyse de la capacité financière par rapport au montant demandé, (2) Évaluation de l\'expérience et de l\'historique, (3) Identification du risque lié au saut d\'échelle (3x), (4) Conditions proposées (contre-garanties, co-cautionnement, réduction du montant), (5) Analyse de viabilité du projet, (6) Rigueur technique de l\'évaluation.',
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
      fr: 'Dans quelle mesure vous sentez-vous compétent pour réaliser des inspections de risques et des évaluations sur site de propriétés commerciales et industrielles ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada competente', en: 'Not competent at all', fr: 'Pas du tout compétent' },
      max: { es: 'Muy competente', en: 'Very competent', fr: 'Très compétent' },
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
      fr: 'Un assuré signale des dommages dus à une inondation dans son entrepôt commercial. Quel est le premier aspect critique à vérifier ?',
    },
    options: [
      { id: 'a', text: { es: 'Si el asegurado tiene fotos del daño', en: 'If the insured has photos of the damage', fr: 'Si l\'assuré dispose de photos des dommages' }, value: 30 },
      { id: 'b', text: { es: 'Si la póliza incluye cobertura por inundación (generalmente es exclusión estándar)', en: 'If the policy includes flood coverage (usually a standard exclusion)', fr: 'Si la police inclut la garantie inondation (généralement une exclusion standard)' }, value: 100 },
      { id: 'c', text: { es: 'El valor total de la mercancía dañada', en: 'The total value of the damaged merchandise', fr: 'La valeur totale des marchandises endommagées' }, value: 20 },
      { id: 'd', text: { es: 'Si el asegurado presentó la reclamación dentro de las 24 horas', en: 'If the insured filed the claim within 24 hours', fr: 'Si l\'assuré a déposé la réclamation dans les 24 heures' }, value: 10 },
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
      fr: 'Une entreprise assurée en RC générale reçoit une poursuite de 2 millions de dollars d\'un tiers ayant subi des blessures dans ses locaux. Le plafond de la police est de 1 million de dollars. L\'entreprise panique et veut résoudre rapidement.\n\nComment géreriez-vous ce sinistre ? Décrivez les étapes que vous suivriez.',
    },
    rubric: {
      es: 'Evaluar: (1) Notificación inmediata a la aseguradora y reaseguradora, (2) Asignación de abogado defensor, (3) Investigación de los hechos, (4) Explicación clara del límite de póliza y exposición del asegurado, (5) Reserva técnica, (6) Estrategia de negociación, (7) Comunicación calmada y profesional con el asegurado.',
      en: 'Evaluate: (1) Immediate notification to insurer and reinsurer, (2) Defense attorney assignment, (3) Fact investigation, (4) Clear explanation of policy limit and insured\'s exposure, (5) Technical reserve, (6) Negotiation strategy, (7) Calm and professional communication with the insured.',
      fr: 'Évaluer : (1) Notification immédiate à l\'assureur et au réassureur, (2) Désignation d\'un avocat en défense, (3) Investigation des faits, (4) Explication claire du plafond de la police et de l\'exposition de l\'assuré, (5) Réserve technique, (6) Stratégie de négociation, (7) Communication calme et professionnelle avec l\'assuré.',
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
      fr: 'Quel est l\'objectif principal des exigences de provisions techniques en assurance de risques généraux ?',
    },
    options: [
      { id: 'a', text: { es: 'Generar utilidades adicionales para la aseguradora', en: 'Generate additional profits for the insurer', fr: 'Générer des bénéfices supplémentaires pour l\'assureur' }, value: 0 },
      { id: 'b', text: { es: 'Garantizar que la aseguradora tenga fondos suficientes para cubrir obligaciones futuras con los asegurados', en: 'Ensure the insurer has sufficient funds to cover future obligations to policyholders', fr: 'Garantir que l\'assureur dispose de fonds suffisants pour couvrir les obligations futures envers les assurés' }, value: 100 },
      { id: 'c', text: { es: 'Cumplir con requisitos contables internacionales', en: 'Comply with international accounting requirements', fr: 'Se conformer aux exigences comptables internationales' }, value: 30 },
      { id: 'd', text: { es: 'Reducir la carga impositiva de la aseguradora', en: 'Reduce the insurer\'s tax burden', fr: 'Réduire la charge fiscale de l\'assureur' }, value: 0 },
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
      fr: 'Dans quelle mesure connaissez-vous les réglementations de réassurance et leur impact sur la souscription de risques de grande envergure ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada familiarizado', en: 'Not familiar at all', fr: 'Pas du tout familiarisé' },
      max: { es: 'Muy familiarizado', en: 'Very familiar', fr: 'Très familiarisé' },
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
      fr: 'Décrivez les principaux défis réglementaires auxquels le secteur de l\'assurance de risques généraux fait actuellement face sur votre marché et comment ils impactent les opérations quotidiennes.',
    },
    rubric: {
      es: 'Evaluar: (1) Conocimiento de regulaciones vigentes, (2) Identificación de retos específicos (Solvencia II, IFRS 17, protección al consumidor), (3) Comprensión del impacto operativo, (4) Propuestas de adaptación, (5) Visión actualizada del entorno regulatorio.',
      en: 'Evaluate: (1) Knowledge of current regulations, (2) Identification of specific challenges (Solvency II, IFRS 17, consumer protection), (3) Understanding of operational impact, (4) Adaptation proposals, (5) Updated view of the regulatory environment.',
      fr: 'Évaluer : (1) Connaissance des réglementations en vigueur, (2) Identification des défis spécifiques (Solvabilité II, IFRS 17, protection du consommateur), (3) Compréhension de l\'impact opérationnel, (4) Propositions d\'adaptation, (5) Vision actualisée de l\'environnement réglementaire.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 11,
    isActive: true,
  },
];

// ============================================================================
// RIDE-HAILING DRIVER - Professional Skills Questions
// ============================================================================

const ridehailingProfessionalQuestions: Question[] = [
  // --- Passenger Safety ---
  {
    id: 'rh-safety-01',
    profileId: 'ridehailing-driver',
    categoryId: 'ridehailing-professional',
    competencyId: 'passenger-safety',
    type: 'multiple-choice',
    content: {
      es: 'Durante un viaje nocturno, un pasajero le pide que exceda el límite de velocidad porque tiene prisa. ¿Cuál es la mejor respuesta?',
      en: 'During a nighttime trip, a passenger asks you to exceed the speed limit because they are in a hurry. What is the best response?',
      fr: 'Lors d\'un trajet nocturne, un passager vous demande de dépasser la limite de vitesse car il est pressé. Quelle est la meilleure réponse ?',
    },
    options: [
      { id: 'a', text: { es: 'Acepto porque el cliente tiene la razón y quiero buena calificación', en: 'I agree because the customer is always right and I want a good rating', fr: 'J\'accepte car le client a toujours raison et je veux une bonne note' }, value: 0 },
      { id: 'b', text: { es: 'Le explico amablemente que mi prioridad es su seguridad y busco la ruta más rápida respetando los límites', en: 'I kindly explain that my priority is their safety and I look for the fastest route while respecting the limits', fr: 'J\'explique aimablement que ma priorité est leur sécurité et je cherche l\'itinéraire le plus rapide en respectant les limites' }, value: 100 },
      { id: 'c', text: { es: 'Acelero un poco sin que sea demasiado evidente', en: 'I speed up a little without it being too obvious', fr: 'J\'accélère un peu sans que ce soit trop évident' }, value: 10 },
      { id: 'd', text: { es: 'Ignoro la petición sin dar explicación', en: 'I ignore the request without explanation', fr: 'J\'ignore la demande sans explication' }, value: 30 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'rh-safety-02',
    profileId: 'ridehailing-driver',
    categoryId: 'ridehailing-professional',
    competencyId: 'passenger-safety',
    type: 'scale',
    content: {
      es: '¿Con qué frecuencia realiza una inspección visual de seguridad de su vehículo (cinturones, luces, frenos, llantas) antes de iniciar su jornada?',
      en: 'How often do you perform a visual safety inspection of your vehicle (seatbelts, lights, brakes, tires) before starting your shift?',
      fr: 'À quelle fréquence effectuez-vous une inspection visuelle de sécurité de votre véhicule (ceintures, feux, freins, pneus) avant de commencer votre journée ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nunca', en: 'Never', fr: 'Jamais' },
      max: { es: 'Siempre', en: 'Always', fr: 'Toujours' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },

  // --- Navigation Skills ---
  {
    id: 'rh-nav-01',
    profileId: 'ridehailing-driver',
    categoryId: 'ridehailing-professional',
    competencyId: 'navigation-skills',
    type: 'scenario',
    content: {
      es: 'Está realizando un viaje y el GPS le indica una ruta que usted sabe que está congestionada a esa hora del día. El pasajero le dice que siga la ruta del GPS. ¿Qué hace?\n\nContexto: Usted conoce una ruta alternativa que es 10 minutos más rápida pero 2 km más larga.',
      en: 'You are on a trip and the GPS indicates a route that you know is congested at this time of day. The passenger tells you to follow the GPS route. What do you do?\n\nContext: You know an alternative route that is 10 minutes faster but 2 km longer.',
      fr: 'Vous effectuez un trajet et le GPS indique un itinéraire que vous savez encombré à cette heure de la journée. Le passager vous dit de suivre l\'itinéraire du GPS. Que faites-vous ?\n\nContexte : Vous connaissez un itinéraire alternatif qui est 10 minutes plus rapide mais 2 km plus long.',
    },
    rubric: {
      es: 'Evaluar: (1) Comunicación con el pasajero sobre opciones, (2) Conocimiento local demostrado, (3) Respeto por la decisión del pasajero, (4) Capacidad de explicar pros y contras, (5) Profesionalismo en la interacción.',
      en: 'Evaluate: (1) Communication with the passenger about options, (2) Demonstrated local knowledge, (3) Respect for the passenger\'s decision, (4) Ability to explain pros and cons, (5) Professionalism in the interaction.',
      fr: 'Évaluer : (1) Communication avec le passager sur les options, (2) Connaissance locale démontrée, (3) Respect de la décision du passager, (4) Capacité à expliquer les avantages et inconvénients, (5) Professionnalisme dans l\'interaction.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },
  {
    id: 'rh-nav-02',
    profileId: 'ridehailing-driver',
    categoryId: 'ridehailing-professional',
    competencyId: 'navigation-skills',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál es la mejor práctica cuando el GPS pierde señal durante un viaje?',
      en: 'What is the best practice when GPS signal is lost during a trip?',
      fr: 'Quelle est la meilleure pratique lorsque le signal GPS est perdu pendant un trajet ?',
    },
    options: [
      { id: 'a', text: { es: 'Detenerse inmediatamente hasta que la señal regrese', en: 'Stop immediately until the signal returns', fr: 'S\'arrêter immédiatement jusqu\'au retour du signal' }, value: 20 },
      { id: 'b', text: { es: 'Usar conocimiento local de la zona, informar al pasajero y buscar un punto seguro para recalcular si es necesario', en: 'Use local knowledge of the area, inform the passenger, and find a safe spot to recalculate if needed', fr: 'Utiliser la connaissance locale de la zone, informer le passager et trouver un endroit sûr pour recalculer si nécessaire' }, value: 100 },
      { id: 'c', text: { es: 'Pedirle al pasajero que le dé indicaciones', en: 'Ask the passenger for directions', fr: 'Demander au passager de donner les directions' }, value: 40 },
      { id: 'd', text: { es: 'Seguir conduciendo en la dirección general del destino', en: 'Keep driving in the general direction of the destination', fr: 'Continuer à conduire dans la direction générale de la destination' }, value: 30 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },

  // --- Vehicle Maintenance ---
  {
    id: 'rh-maint-01',
    profileId: 'ridehailing-driver',
    categoryId: 'ridehailing-professional',
    competencyId: 'vehicle-maintenance',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál de los siguientes elementos NO es parte de un mantenimiento preventivo básico del vehículo?',
      en: 'Which of the following items is NOT part of basic preventive vehicle maintenance?',
      fr: 'Lequel des éléments suivants ne fait PAS partie de l\'entretien préventif de base du véhicule ?',
    },
    options: [
      { id: 'a', text: { es: 'Cambio de aceite según el kilometraje recomendado', en: 'Oil change according to recommended mileage', fr: 'Vidange d\'huile selon le kilométrage recommandé' }, value: 0 },
      { id: 'b', text: { es: 'Revisión de la presión de las llantas semanalmente', en: 'Weekly tire pressure check', fr: 'Vérification hebdomadaire de la pression des pneus' }, value: 0 },
      { id: 'c', text: { es: 'Modificar el motor para obtener mayor potencia', en: 'Modify the engine for more power', fr: 'Modifier le moteur pour plus de puissance' }, value: 100 },
      { id: 'd', text: { es: 'Verificar el nivel de líquido de frenos periódicamente', en: 'Periodically check brake fluid level', fr: 'Vérifier périodiquement le niveau de liquide de frein' }, value: 0 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
  {
    id: 'rh-maint-02',
    profileId: 'ridehailing-driver',
    categoryId: 'ridehailing-professional',
    competencyId: 'vehicle-maintenance',
    type: 'open-text',
    content: {
      es: 'Describa su rutina de mantenimiento vehicular. ¿Qué revisiones realiza diariamente, semanalmente y mensualmente para mantener su vehículo en condiciones óptimas de servicio?',
      en: 'Describe your vehicle maintenance routine. What checks do you perform daily, weekly, and monthly to keep your vehicle in optimal service condition?',
      fr: 'Décrivez votre routine d\'entretien du véhicule. Quelles vérifications effectuez-vous quotidiennement, hebdomadairement et mensuellement pour maintenir votre véhicule en conditions optimales de service ?',
    },
    rubric: {
      es: 'Evaluar: (1) Sistematicidad de la rutina, (2) Cobertura de elementos clave (aceite, llantas, frenos, luces, limpieza), (3) Frecuencia apropiada de revisiones, (4) Conocimiento de señales de alerta, (5) Registro o documentación de mantenimiento.',
      en: 'Evaluate: (1) Systematic routine, (2) Coverage of key elements (oil, tires, brakes, lights, cleanliness), (3) Appropriate frequency of checks, (4) Knowledge of warning signs, (5) Maintenance logging or documentation.',
      fr: 'Évaluer : (1) Caractère systématique de la routine, (2) Couverture des éléments clés (huile, pneus, freins, feux, propreté), (3) Fréquence appropriée des vérifications, (4) Connaissance des signaux d\'alerte, (5) Registre ou documentation de l\'entretien.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 6,
    isActive: true,
  },

  // --- Local Regulations ---
  {
    id: 'rh-reg-01',
    profileId: 'ridehailing-driver',
    categoryId: 'ridehailing-professional',
    competencyId: 'local-regulations',
    type: 'multiple-choice',
    content: {
      es: '¿Qué documentos debe tener vigentes un conductor de plataforma de transporte para operar legalmente?',
      en: 'What documents must a ride-hailing driver have up to date to operate legally?',
      fr: 'Quels documents un chauffeur de VTC doit-il avoir à jour pour opérer légalement ?',
    },
    options: [
      { id: 'a', text: { es: 'Solo la licencia de conducir', en: 'Only the driver\'s license', fr: 'Uniquement le permis de conduire' }, value: 10 },
      { id: 'b', text: { es: 'Licencia de conducir, seguro vehicular, tarjeta de circulación y permisos de la plataforma', en: 'Driver\'s license, vehicle insurance, registration card, and platform permits', fr: 'Permis de conduire, assurance véhicule, carte grise et autorisations de la plateforme' }, value: 100 },
      { id: 'c', text: { es: 'Licencia de conducir y seguro vehicular solamente', en: 'Driver\'s license and vehicle insurance only', fr: 'Permis de conduire et assurance véhicule uniquement' }, value: 40 },
      { id: 'd', text: { es: 'Los documentos que la plataforma me pida, nada más', en: 'Whatever documents the platform asks for, nothing else', fr: 'Les documents que la plateforme me demande, rien de plus' }, value: 20 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 7,
    isActive: true,
  },
  {
    id: 'rh-reg-02',
    profileId: 'ridehailing-driver',
    categoryId: 'ridehailing-professional',
    competencyId: 'local-regulations',
    type: 'scenario',
    content: {
      es: 'Un pasajero le pide que lo lleve a una zona donde las plataformas de transporte están prohibidas por regulación municipal. El pasajero ofrece pagarle en efectivo fuera de la aplicación.\n\nContexto: La zona tiene restricciones conocidas y hay operativos de tránsito frecuentes.',
      en: 'A passenger asks you to take them to an area where ride-hailing platforms are prohibited by municipal regulation. The passenger offers to pay you in cash outside the app.\n\nContext: The area has known restrictions and there are frequent traffic enforcement operations.',
      fr: 'Un passager vous demande de l\'emmener dans une zone où les plateformes de VTC sont interdites par réglementation municipale. Le passager propose de vous payer en espèces en dehors de l\'application.\n\nContexte : La zone a des restrictions connues et il y a des opérations de contrôle fréquentes.',
    },
    rubric: {
      es: 'Evaluar: (1) Conocimiento de las restricciones regulatorias, (2) Negativa profesional y respetuosa, (3) No aceptar pagos fuera de la plataforma, (4) Ofrecimiento de alternativas legales, (5) Priorización de la legalidad sobre la ganancia.',
      en: 'Evaluate: (1) Knowledge of regulatory restrictions, (2) Professional and respectful refusal, (3) Not accepting payments outside the platform, (4) Offering legal alternatives, (5) Prioritizing legality over profit.',
      fr: 'Évaluer : (1) Connaissance des restrictions réglementaires, (2) Refus professionnel et respectueux, (3) Non-acceptation de paiements hors plateforme, (4) Proposition d\'alternatives légales, (5) Priorité à la légalité sur le profit.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 8,
    isActive: true,
  },
];

// ============================================================================
// RIDE-HAILING DRIVER - Soft Skills Questions
// ============================================================================

const ridehailingSoftSkillsQuestions: Question[] = [
  // --- Rider Customer Service ---
  {
    id: 'rh-cs-01',
    profileId: 'ridehailing-driver',
    categoryId: 'ridehailing-soft-skills',
    competencyId: 'rider-customer-service',
    type: 'multiple-choice',
    content: {
      es: 'Un pasajero sube al vehículo y se ve molesto. No saluda y se pone los audífonos. ¿Cuál es la mejor forma de manejar la situación?',
      en: 'A passenger gets in the vehicle looking upset. They don\'t greet you and put on headphones. What is the best way to handle the situation?',
      fr: 'Un passager monte dans le véhicule en ayant l\'air contrarié. Il ne vous salue pas et met ses écouteurs. Quelle est la meilleure façon de gérer la situation ?',
    },
    options: [
      { id: 'a', text: { es: 'Saludar amablemente, confirmar el destino y respetar su espacio sin forzar conversación', en: 'Greet them kindly, confirm the destination, and respect their space without forcing conversation', fr: 'Les saluer aimablement, confirmer la destination et respecter leur espace sans forcer la conversation' }, value: 100 },
      { id: 'b', text: { es: 'No decir nada y simplemente conducir', en: 'Say nothing and just drive', fr: 'Ne rien dire et simplement conduire' }, value: 30 },
      { id: 'c', text: { es: 'Intentar animarlo con conversación para mejorar mi calificación', en: 'Try to cheer them up with conversation to improve my rating', fr: 'Essayer de le réconforter avec la conversation pour améliorer ma note' }, value: 20 },
      { id: 'd', text: { es: 'Preguntarle directamente por qué está molesto', en: 'Directly ask them why they are upset', fr: 'Leur demander directement pourquoi ils sont contrariés' }, value: 10 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'rh-cs-02',
    profileId: 'ridehailing-driver',
    categoryId: 'ridehailing-soft-skills',
    competencyId: 'rider-customer-service',
    type: 'scale',
    content: {
      es: '¿Qué tan importante considera mantener su vehículo limpio, con buen aroma y con amenidades básicas (cargador, agua, dulces) para los pasajeros?',
      en: 'How important do you consider keeping your vehicle clean, well-scented, and with basic amenities (charger, water, candy) for passengers?',
      fr: 'Quelle importance accordez-vous au maintien de votre véhicule propre, avec une bonne odeur et des commodités de base (chargeur, eau, bonbons) pour les passagers ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada importante', en: 'Not important at all', fr: 'Pas du tout important' },
      max: { es: 'Muy importante', en: 'Very important', fr: 'Très important' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },
  {
    id: 'rh-cs-03',
    profileId: 'ridehailing-driver',
    categoryId: 'ridehailing-soft-skills',
    competencyId: 'rider-customer-service',
    type: 'open-text',
    content: {
      es: 'Describa qué acciones toma para ofrecer un servicio de cinco estrellas a cada pasajero. ¿Cómo personaliza la experiencia del viaje?',
      en: 'Describe what actions you take to offer a five-star service to every passenger. How do you personalize the ride experience?',
      fr: 'Décrivez les actions que vous prenez pour offrir un service cinq étoiles à chaque passager. Comment personnalisez-vous l\'expérience du trajet ?',
    },
    rubric: {
      es: 'Evaluar: (1) Atención a detalles (limpieza, temperatura, música), (2) Comunicación profesional, (3) Adaptación al tipo de pasajero, (4) Proactividad en la experiencia, (5) Consistencia del servicio.',
      en: 'Evaluate: (1) Attention to details (cleanliness, temperature, music), (2) Professional communication, (3) Adaptation to the type of passenger, (4) Proactivity in the experience, (5) Service consistency.',
      fr: 'Évaluer : (1) Attention aux détails (propreté, température, musique), (2) Communication professionnelle, (3) Adaptation au type de passager, (4) Proactivité dans l\'expérience, (5) Cohérence du service.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },

  // --- Conflict Resolution ---
  {
    id: 'rh-conflict-01',
    profileId: 'ridehailing-driver',
    categoryId: 'ridehailing-soft-skills',
    competencyId: 'driver-conflict-resolution',
    type: 'scenario',
    content: {
      es: 'Un pasajero en estado de ebriedad sube a su vehículo. Durante el trayecto comienza a gritar y amenaza con no pagar. Se pone agresivo verbalmente.\n\nContexto: Es de noche, la zona no es muy transitada y el pasajero tiene un destino a 15 minutos de distancia.',
      en: 'An intoxicated passenger gets into your vehicle. During the trip, they start yelling and threaten not to pay. They become verbally aggressive.\n\nContext: It is nighttime, the area is not very busy, and the passenger has a destination 15 minutes away.',
      fr: 'Un passager en état d\'ébriété monte dans votre véhicule. Pendant le trajet, il commence à crier et menace de ne pas payer. Il devient verbalement agressif.\n\nContexte : C\'est la nuit, la zone n\'est pas très fréquentée et le passager a une destination à 15 minutes.',
    },
    rubric: {
      es: 'Evaluar: (1) Priorización de la seguridad personal, (2) Mantener la calma y el profesionalismo, (3) Uso de recursos de la plataforma (botón de emergencia, soporte), (4) Detenerse en lugar seguro si es necesario, (5) Documentación del incidente.',
      en: 'Evaluate: (1) Prioritizing personal safety, (2) Maintaining calm and professionalism, (3) Using platform resources (emergency button, support), (4) Stopping in a safe location if necessary, (5) Incident documentation.',
      fr: 'Évaluer : (1) Priorité à la sécurité personnelle, (2) Maintien du calme et du professionnalisme, (3) Utilisation des ressources de la plateforme (bouton d\'urgence, support), (4) Arrêt dans un lieu sûr si nécessaire, (5) Documentation de l\'incident.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 4,
    isActive: true,
  },
  {
    id: 'rh-conflict-02',
    profileId: 'ridehailing-driver',
    categoryId: 'ridehailing-soft-skills',
    competencyId: 'driver-conflict-resolution',
    type: 'multiple-choice',
    content: {
      es: 'Un pasajero insiste en que usted tomó una ruta más larga a propósito para cobrar más. La ruta fue la que indicó el GPS. ¿Cómo responde?',
      en: 'A passenger insists that you took a longer route on purpose to charge more. The route was the one the GPS indicated. How do you respond?',
      fr: 'Un passager insiste sur le fait que vous avez pris un itinéraire plus long exprès pour facturer davantage. L\'itinéraire était celui indiqué par le GPS. Comment répondez-vous ?',
    },
    options: [
      { id: 'a', text: { es: 'Le muestro calmadamente el GPS y le explico que la ruta fue la sugerida por la aplicación; le ofrezco reportar el problema a soporte', en: 'I calmly show them the GPS and explain that the route was suggested by the app; I offer to report the issue to support', fr: 'Je leur montre calmement le GPS et explique que l\'itinéraire a été suggéré par l\'application ; je propose de signaler le problème au support' }, value: 100 },
      { id: 'b', text: { es: 'Le digo que no es mi problema y que se queje con la plataforma', en: 'I tell them it\'s not my problem and they should complain to the platform', fr: 'Je leur dis que ce n\'est pas mon problème et qu\'ils doivent se plaindre à la plateforme' }, value: 20 },
      { id: 'c', text: { es: 'Discuto con el pasajero para defender mi posición', en: 'I argue with the passenger to defend my position', fr: 'Je me dispute avec le passager pour défendre ma position' }, value: 10 },
      { id: 'd', text: { es: 'Ofrezco un descuento de mi bolsillo para evitar conflicto', en: 'I offer a discount out of my pocket to avoid conflict', fr: 'J\'offre une réduction de ma poche pour éviter le conflit' }, value: 40 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },

  // --- Accessibility Awareness ---
  {
    id: 'rh-access-01',
    profileId: 'ridehailing-driver',
    categoryId: 'ridehailing-soft-skills',
    competencyId: 'accessibility-awareness',
    type: 'scenario',
    content: {
      es: 'Recibe una solicitud de viaje y al llegar al punto de recogida, ve que el pasajero es una persona con discapacidad visual que viaja con un perro guía.\n\nContexto: Su vehículo está limpio y usted no tiene alergias a los animales, pero nunca ha transportado a un pasajero con perro guía.',
      en: 'You receive a trip request and upon arriving at the pickup point, you see that the passenger is a visually impaired person traveling with a guide dog.\n\nContext: Your vehicle is clean and you have no animal allergies, but you have never transported a passenger with a guide dog.',
      fr: 'Vous recevez une demande de trajet et en arrivant au point de prise en charge, vous voyez que le passager est une personne malvoyante voyageant avec un chien guide.\n\nContexte : Votre véhicule est propre et vous n\'avez pas d\'allergies aux animaux, mais vous n\'avez jamais transporté un passager avec un chien guide.',
    },
    rubric: {
      es: 'Evaluar: (1) Aceptación inmediata del viaje con el perro guía, (2) Asistencia proactiva al pasajero, (3) Comunicación verbal clara sobre el entorno, (4) Paciencia y empatía, (5) Conocimiento de la obligación legal de aceptar animales de asistencia.',
      en: 'Evaluate: (1) Immediate acceptance of the trip with the guide dog, (2) Proactive assistance to the passenger, (3) Clear verbal communication about the surroundings, (4) Patience and empathy, (5) Knowledge of the legal obligation to accept assistance animals.',
      fr: 'Évaluer : (1) Acceptation immédiate du trajet avec le chien guide, (2) Assistance proactive au passager, (3) Communication verbale claire sur l\'environnement, (4) Patience et empathie, (5) Connaissance de l\'obligation légale d\'accepter les animaux d\'assistance.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 6,
    isActive: true,
  },
  {
    id: 'rh-access-02',
    profileId: 'ridehailing-driver',
    categoryId: 'ridehailing-soft-skills',
    competencyId: 'accessibility-awareness',
    type: 'scale',
    content: {
      es: '¿Qué tan preparado se siente para asistir a pasajeros con movilidad reducida (silla de ruedas, muletas, andador)?',
      en: 'How prepared do you feel to assist passengers with reduced mobility (wheelchair, crutches, walker)?',
      fr: 'Dans quelle mesure vous sentez-vous préparé pour aider les passagers à mobilité réduite (fauteuil roulant, béquilles, déambulateur) ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada preparado', en: 'Not prepared at all', fr: 'Pas du tout préparé' },
      max: { es: 'Muy preparado', en: 'Very prepared', fr: 'Très préparé' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 7,
    isActive: true,
  },
];

// ============================================================================
// RIDE-HAILING DRIVER - Readiness for Change Questions
// ============================================================================

const ridehailingReadinessQuestions: Question[] = [
  // --- Time Management ---
  {
    id: 'rh-time-01',
    profileId: 'ridehailing-driver',
    categoryId: 'ridehailing-readiness',
    competencyId: 'driver-time-management',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál es la mejor estrategia para maximizar sus ingresos durante las horas de menor demanda?',
      en: 'What is the best strategy to maximize your income during low-demand hours?',
      fr: 'Quelle est la meilleure stratégie pour maximiser vos revenus pendant les heures de faible demande ?',
    },
    options: [
      { id: 'a', text: { es: 'Quedarse estacionado esperando solicitudes en un solo punto', en: 'Stay parked waiting for requests at a single point', fr: 'Rester garé en attendant des demandes à un seul endroit' }, value: 10 },
      { id: 'b', text: { es: 'Ubicarse estratégicamente en zonas de alta demanda (aeropuertos, centros comerciales, oficinas) y aprovechar para mantenimiento personal o del vehículo', en: 'Position yourself strategically in high-demand areas (airports, malls, offices) and use downtime for personal or vehicle maintenance', fr: 'Se positionner stratégiquement dans les zones de forte demande (aéroports, centres commerciaux, bureaux) et profiter du temps libre pour l\'entretien personnel ou du véhicule' }, value: 100 },
      { id: 'c', text: { es: 'Conducir constantemente por la ciudad buscando pasajeros', en: 'Drive constantly around the city looking for passengers', fr: 'Conduire constamment dans la ville en cherchant des passagers' }, value: 20 },
      { id: 'd', text: { es: 'Desconectarse de la aplicación y regresar en horario pico', en: 'Disconnect from the app and return during peak hours', fr: 'Se déconnecter de l\'application et revenir aux heures de pointe' }, value: 60 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'rh-time-02',
    profileId: 'ridehailing-driver',
    categoryId: 'ridehailing-readiness',
    competencyId: 'driver-time-management',
    type: 'ranking',
    content: {
      es: 'Ordene las siguientes prácticas de gestión del tiempo según su impacto en la productividad como conductor (de mayor a menor impacto):',
      en: 'Rank the following time management practices by their impact on driver productivity (from highest to lowest impact):',
      fr: 'Classez les pratiques suivantes de gestion du temps selon leur impact sur la productivité du chauffeur (du plus grand au plus petit impact) :',
    },
    options: [
      { id: 'a', text: { es: 'Planificar horarios basándose en patrones de demanda', en: 'Plan schedules based on demand patterns', fr: 'Planifier les horaires en fonction des modèles de demande' }, value: 1 },
      { id: 'b', text: { es: 'Tomar descansos regulares para evitar fatiga', en: 'Take regular breaks to avoid fatigue', fr: 'Prendre des pauses régulières pour éviter la fatigue' }, value: 2 },
      { id: 'c', text: { es: 'Conocer eventos y actividades locales que generan demanda', en: 'Know local events and activities that generate demand', fr: 'Connaître les événements et activités locaux qui génèrent de la demande' }, value: 3 },
      { id: 'd', text: { es: 'Mantener el vehículo siempre listo para operar', en: 'Keep the vehicle always ready to operate', fr: 'Maintenir le véhicule toujours prêt à opérer' }, value: 4 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },

  // --- Financial Literacy ---
  {
    id: 'rh-fin-01',
    profileId: 'ridehailing-driver',
    categoryId: 'ridehailing-readiness',
    competencyId: 'financial-literacy',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál de los siguientes gastos NO debería considerarse como costo operativo al calcular sus ganancias reales como conductor?',
      en: 'Which of the following expenses should NOT be considered as an operating cost when calculating your real earnings as a driver?',
      fr: 'Laquelle des dépenses suivantes ne devrait PAS être considérée comme un coût opérationnel lors du calcul de vos gains réels en tant que chauffeur ?',
    },
    options: [
      { id: 'a', text: { es: 'Combustible o carga eléctrica', en: 'Fuel or electric charging', fr: 'Carburant ou recharge électrique' }, value: 0 },
      { id: 'b', text: { es: 'Depreciación del vehículo', en: 'Vehicle depreciation', fr: 'Dépréciation du véhicule' }, value: 0 },
      { id: 'c', text: { es: 'Las compras personales del supermercado', en: 'Personal grocery shopping', fr: 'Les courses personnelles au supermarché' }, value: 100 },
      { id: 'd', text: { es: 'Seguro vehicular y mantenimiento', en: 'Vehicle insurance and maintenance', fr: 'Assurance véhicule et entretien' }, value: 0 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 3,
    isActive: true,
  },
  {
    id: 'rh-fin-02',
    profileId: 'ridehailing-driver',
    categoryId: 'ridehailing-readiness',
    competencyId: 'financial-literacy',
    type: 'open-text',
    content: {
      es: 'Explique cómo lleva el control de sus ingresos y gastos como conductor de plataforma. ¿Qué herramientas o métodos utiliza? ¿Cómo maneja sus obligaciones fiscales?',
      en: 'Explain how you track your income and expenses as a platform driver. What tools or methods do you use? How do you handle your tax obligations?',
      fr: 'Expliquez comment vous suivez vos revenus et dépenses en tant que chauffeur de plateforme. Quels outils ou méthodes utilisez-vous ? Comment gérez-vous vos obligations fiscales ?',
    },
    rubric: {
      es: 'Evaluar: (1) Sistema de registro de ingresos y gastos, (2) Separación de gastos operativos vs personales, (3) Conocimiento de obligaciones fiscales, (4) Planificación de ahorro y fondo de emergencia, (5) Uso de herramientas digitales para finanzas.',
      en: 'Evaluate: (1) Income and expense tracking system, (2) Separation of operating vs personal expenses, (3) Knowledge of tax obligations, (4) Savings and emergency fund planning, (5) Use of digital tools for finances.',
      fr: 'Évaluer : (1) Système de suivi des revenus et dépenses, (2) Séparation des dépenses opérationnelles et personnelles, (3) Connaissance des obligations fiscales, (4) Planification de l\'épargne et du fonds d\'urgence, (5) Utilisation d\'outils numériques pour les finances.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 4,
    isActive: true,
  },
  {
    id: 'rh-fin-03',
    profileId: 'ridehailing-driver',
    categoryId: 'ridehailing-readiness',
    competencyId: 'financial-literacy',
    type: 'scale',
    content: {
      es: '¿Qué tan seguro se siente administrando sus finanzas personales como trabajador independiente (impuestos, ahorro, inversión)?',
      en: 'How confident do you feel managing your personal finances as an independent worker (taxes, savings, investment)?',
      fr: 'Dans quelle mesure vous sentez-vous confiant pour gérer vos finances personnelles en tant que travailleur indépendant (impôts, épargne, investissement) ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada seguro', en: 'Not confident at all', fr: 'Pas du tout confiant' },
      max: { es: 'Muy seguro', en: 'Very confident', fr: 'Très confiant' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },

  // --- App Proficiency ---
  {
    id: 'rh-app-01',
    profileId: 'ridehailing-driver',
    categoryId: 'ridehailing-readiness',
    competencyId: 'driver-app-proficiency',
    type: 'multiple-choice',
    content: {
      es: 'La plataforma acaba de lanzar una actualización importante que cambia la interfaz y agrega nuevas funciones. ¿Cómo reacciona?',
      en: 'The platform just released a major update that changes the interface and adds new features. How do you react?',
      fr: 'La plateforme vient de publier une mise à jour majeure qui change l\'interface et ajoute de nouvelles fonctionnalités. Comment réagissez-vous ?',
    },
    options: [
      { id: 'a', text: { es: 'Exploro las nuevas funciones, veo tutoriales y practico antes de mi siguiente turno', en: 'I explore the new features, watch tutorials, and practice before my next shift', fr: 'J\'explore les nouvelles fonctionnalités, regarde des tutoriels et pratique avant mon prochain créneau' }, value: 100 },
      { id: 'b', text: { es: 'Espero a que otros conductores me cuenten cómo funciona', en: 'I wait for other drivers to tell me how it works', fr: 'J\'attends que d\'autres chauffeurs me disent comment ça fonctionne' }, value: 30 },
      { id: 'c', text: { es: 'La uso sobre la marcha durante los viajes', en: 'I use it on the go during trips', fr: 'Je l\'utilise en cours de route pendant les trajets' }, value: 40 },
      { id: 'd', text: { es: 'Me quejo de los cambios y busco la versión anterior', en: 'I complain about the changes and look for the previous version', fr: 'Je me plains des changements et cherche la version précédente' }, value: 10 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 6,
    isActive: true,
  },
  {
    id: 'rh-app-02',
    profileId: 'ridehailing-driver',
    categoryId: 'ridehailing-readiness',
    competencyId: 'driver-app-proficiency',
    type: 'scale',
    content: {
      es: '¿Qué tan cómodo se siente utilizando múltiples aplicaciones simultáneamente (GPS, app de la plataforma, app de música, app de pagos)?',
      en: 'How comfortable do you feel using multiple apps simultaneously (GPS, platform app, music app, payment app)?',
      fr: 'Dans quelle mesure êtes-vous à l\'aise pour utiliser plusieurs applications simultanément (GPS, application de la plateforme, application de musique, application de paiement) ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada cómodo', en: 'Not comfortable at all', fr: 'Pas du tout à l\'aise' },
      max: { es: 'Muy cómodo', en: 'Very comfortable', fr: 'Très à l\'aise' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 7,
    isActive: true,
  },
];

// ============================================================================
// PHARMACY CLERK QUESTIONS
// ============================================================================

const pharmacyProfessionalQuestions: Question[] = [
  // --- OTC Product Knowledge ---
  {
    id: 'ph-otc-01',
    profileId: 'pharmacy-clerk',
    categoryId: 'pharmacy-professional',
    competencyId: 'otc-product-knowledge',
    type: 'multiple-choice',
    content: {
      es: 'Un cliente pide un analgésico para dolor de cabeza leve. ¿Cuál es la mejor forma de atenderlo?',
      en: 'A customer asks for a painkiller for a mild headache. What is the best way to assist them?',
      fr: 'Un client demande un analgésique pour un léger mal de tête. Quelle est la meilleure façon de l\'aider ?',
    },
    options: [
      { id: 'a', text: { es: 'Ofrecerle el analgésico más caro disponible', en: 'Offer them the most expensive painkiller available', fr: 'Lui proposer l\'analgésique le plus cher disponible' }, value: 10 },
      { id: 'b', text: { es: 'Preguntarle si tiene alergias o toma otros medicamentos, y ofrecerle opciones de venta libre adecuadas', en: 'Ask if they have allergies or take other medications, and offer suitable OTC options', fr: 'Demander s\'il a des allergies ou prend d\'autres médicaments, et proposer des options en vente libre adaptées' }, value: 100 },
      { id: 'c', text: { es: 'Darle cualquier analgésico sin preguntar nada', en: 'Give them any painkiller without asking anything', fr: 'Lui donner n\'importe quel analgésique sans rien demander' }, value: 20 },
      { id: 'd', text: { es: 'Referirlo directamente al farmacéutico sin intentar ayudar', en: 'Refer them directly to the pharmacist without trying to help', fr: 'Le diriger directement vers le pharmacien sans essayer d\'aider' }, value: 40 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'ph-otc-02',
    profileId: 'pharmacy-clerk',
    categoryId: 'pharmacy-professional',
    competencyId: 'otc-product-knowledge',
    type: 'scale',
    content: {
      es: '¿Qué tan familiarizado está con las categorías de productos de venta libre (analgésicos, antiácidos, vitaminas, productos de higiene personal)?',
      en: 'How familiar are you with the categories of over-the-counter products (painkillers, antacids, vitamins, personal hygiene products)?',
      fr: 'Dans quelle mesure êtes-vous familier avec les catégories de produits en vente libre (analgésiques, antiacides, vitamines, produits d\'hygiène personnelle) ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada familiarizado', en: 'Not familiar at all', fr: 'Pas du tout familier' },
      max: { es: 'Muy familiarizado', en: 'Very familiar', fr: 'Très familier' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },

  // --- POS/Cash Handling ---
  {
    id: 'ph-pos-01',
    profileId: 'pharmacy-clerk',
    categoryId: 'pharmacy-professional',
    competencyId: 'pos-cash-handling',
    type: 'scenario',
    content: {
      es: 'Al cerrar la caja al final de su turno, descubre que hay una diferencia de $50 entre el efectivo y el registro del sistema. ¿Qué hace?\n\nContexto: Es la segunda vez que sucede esta semana. El turno anterior no reportó ningún problema.',
      en: 'When closing the register at the end of your shift, you discover a $50 discrepancy between the cash and the system record. What do you do?\n\nContext: This is the second time this week. The previous shift reported no issues.',
      fr: 'En fermant la caisse à la fin de votre quart de travail, vous découvrez un écart de 50 $ entre l\'argent liquide et le registre du système. Que faites-vous ?\n\nContexte : C\'est la deuxième fois cette semaine. Le quart précédent n\'a signalé aucun problème.',
    },
    rubric: {
      es: 'Evaluar: (1) Honestidad y transparencia al reportar, (2) Proceso de verificación antes de escalar, (3) Documentación del incidente, (4) Comunicación con el supervisor, (5) Propuesta de medidas preventivas.',
      en: 'Evaluate: (1) Honesty and transparency in reporting, (2) Verification process before escalating, (3) Incident documentation, (4) Communication with supervisor, (5) Proposal for preventive measures.',
      fr: 'Évaluer : (1) Honnêteté et transparence dans le signalement, (2) Processus de vérification avant escalade, (3) Documentation de l\'incident, (4) Communication avec le superviseur, (5) Proposition de mesures préventives.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },
  {
    id: 'ph-pos-02',
    profileId: 'pharmacy-clerk',
    categoryId: 'pharmacy-professional',
    competencyId: 'pos-cash-handling',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál es el procedimiento correcto cuando un cliente quiere pagar con tarjeta y el terminal no funciona?',
      en: 'What is the correct procedure when a customer wants to pay by card and the terminal is not working?',
      fr: 'Quelle est la procédure correcte lorsqu\'un client veut payer par carte et que le terminal ne fonctionne pas ?',
    },
    options: [
      { id: 'a', text: { es: 'Decirle que solo se acepta efectivo y que vuelva después', en: 'Tell them only cash is accepted and to come back later', fr: 'Lui dire que seul l\'argent liquide est accepté et de revenir plus tard' }, value: 10 },
      { id: 'b', text: { es: 'Intentar reiniciar el terminal, disculparse por la inconveniencia, ofrecer alternativas como efectivo o transferencia, y reportar la falla', en: 'Try to restart the terminal, apologize for the inconvenience, offer alternatives like cash or transfer, and report the issue', fr: 'Essayer de redémarrer le terminal, s\'excuser pour le désagrément, proposer des alternatives comme l\'argent liquide ou le virement, et signaler le problème' }, value: 100 },
      { id: 'c', text: { es: 'Dejar que el cliente se lleve los productos y pague después', en: 'Let the customer take the products and pay later', fr: 'Laisser le client emporter les produits et payer plus tard' }, value: 0 },
      { id: 'd', text: { es: 'Llamar inmediatamente al gerente sin intentar resolver el problema', en: 'Immediately call the manager without trying to solve the problem', fr: 'Appeler immédiatement le gérant sans essayer de résoudre le problème' }, value: 30 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },

  // --- Inventory Management ---
  {
    id: 'ph-inv-01',
    profileId: 'pharmacy-clerk',
    categoryId: 'pharmacy-professional',
    competencyId: 'inventory-management',
    type: 'multiple-choice',
    content: {
      es: 'Al revisar los estantes, encuentra un producto cuya fecha de vencimiento es dentro de dos semanas. ¿Qué hace?',
      en: 'While checking the shelves, you find a product whose expiration date is in two weeks. What do you do?',
      fr: 'En vérifiant les rayons, vous trouvez un produit dont la date de péremption est dans deux semaines. Que faites-vous ?',
    },
    options: [
      { id: 'a', text: { es: 'Lo deja en el estante porque aún no ha vencido', en: 'Leave it on the shelf because it has not expired yet', fr: 'Le laisser en rayon car il n\'est pas encore périmé' }, value: 20 },
      { id: 'b', text: { es: 'Lo retira del estante, lo registra en el sistema y lo reporta al encargado de inventario siguiendo el protocolo', en: 'Remove it from the shelf, log it in the system, and report it to the inventory manager following protocol', fr: 'Le retirer du rayon, l\'enregistrer dans le système et le signaler au responsable des stocks selon le protocole' }, value: 100 },
      { id: 'c', text: { es: 'Lo mueve al frente del estante para que se venda más rápido', en: 'Move it to the front of the shelf so it sells faster', fr: 'Le déplacer à l\'avant du rayon pour qu\'il se vende plus vite' }, value: 40 },
      { id: 'd', text: { es: 'Lo tira directamente a la basura', en: 'Throw it directly in the trash', fr: 'Le jeter directement à la poubelle' }, value: 30 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
  {
    id: 'ph-inv-02',
    profileId: 'pharmacy-clerk',
    categoryId: 'pharmacy-professional',
    competencyId: 'inventory-management',
    type: 'open-text',
    content: {
      es: 'Describa cómo organizaría un proceso de recepción de mercancía nueva en la farmacia, desde que llega el pedido hasta que los productos están en los estantes.',
      en: 'Describe how you would organize the process of receiving new merchandise at the pharmacy, from when the order arrives until the products are on the shelves.',
      fr: 'Décrivez comment vous organiseriez le processus de réception de nouvelles marchandises à la pharmacie, depuis l\'arrivée de la commande jusqu\'à la mise en rayon des produits.',
    },
    rubric: {
      es: 'Evaluar: (1) Verificación del pedido contra la factura, (2) Inspección de productos y fechas de vencimiento, (3) Registro en el sistema de inventario, (4) Organización según categoría y rotación PEPS, (5) Comunicación con el equipo sobre nuevos productos.',
      en: 'Evaluate: (1) Order verification against the invoice, (2) Product and expiration date inspection, (3) Inventory system logging, (4) Organization by category and FIFO rotation, (5) Communication with the team about new products.',
      fr: 'Évaluer : (1) Vérification de la commande par rapport à la facture, (2) Inspection des produits et des dates de péremption, (3) Enregistrement dans le système d\'inventaire, (4) Organisation par catégorie et rotation PEPS, (5) Communication avec l\'équipe sur les nouveaux produits.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 6,
    isActive: true,
  },

  // --- Regulatory Awareness ---
  {
    id: 'ph-reg-01',
    profileId: 'pharmacy-clerk',
    categoryId: 'pharmacy-professional',
    competencyId: 'regulatory-awareness',
    type: 'scenario',
    content: {
      es: 'Un cliente le pide que le venda un antibiótico sin receta médica, diciendo que ya lo ha tomado antes y sabe cuál necesita. ¿Qué hace?\n\nContexto: El cliente parece tener prisa y menciona que su médico habitual no está disponible.',
      en: 'A customer asks you to sell them an antibiotic without a prescription, saying they have taken it before and know which one they need. What do you do?\n\nContext: The customer seems to be in a hurry and mentions that their regular doctor is not available.',
      fr: 'Un client vous demande de lui vendre un antibiotique sans ordonnance, en disant qu\'il l\'a déjà pris et sait lequel il lui faut. Que faites-vous ?\n\nContexte : Le client semble pressé et mentionne que son médecin habituel n\'est pas disponible.',
    },
    rubric: {
      es: 'Evaluar: (1) Conocimiento de que los antibióticos requieren receta, (2) Firmeza respetuosa al negar la venta, (3) Empatía con la situación del cliente, (4) Ofrecimiento de alternativas (referir al farmacéutico, sugerir consulta médica, urgencias), (5) Cumplimiento normativo sin excepciones.',
      en: 'Evaluate: (1) Knowledge that antibiotics require a prescription, (2) Respectful firmness in denying the sale, (3) Empathy with the customer\'s situation, (4) Offering alternatives (refer to pharmacist, suggest medical consultation, urgent care), (5) Regulatory compliance without exceptions.',
      fr: 'Évaluer : (1) Connaissance que les antibiotiques nécessitent une ordonnance, (2) Fermeté respectueuse pour refuser la vente, (3) Empathie avec la situation du client, (4) Proposition d\'alternatives (référer au pharmacien, suggérer une consultation médicale, urgences), (5) Conformité réglementaire sans exceptions.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 7,
    isActive: true,
  },
];

const pharmacySoftSkillsQuestions: Question[] = [
  // --- Customer Service ---
  {
    id: 'ph-cs-01',
    profileId: 'pharmacy-clerk',
    categoryId: 'pharmacy-soft-skills',
    competencyId: 'pharmacy-customer-service',
    type: 'multiple-choice',
    content: {
      es: 'Un cliente de la tercera edad está confundido sobre cuál producto comprar y hay una fila larga detrás de él. ¿Cuál es la mejor forma de actuar?',
      en: 'An elderly customer is confused about which product to buy and there is a long line behind them. What is the best way to act?',
      fr: 'Un client âgé est confus quant au produit à acheter et il y a une longue file derrière lui. Quelle est la meilleure façon d\'agir ?',
    },
    options: [
      { id: 'a', text: { es: 'Atenderlo rápidamente y darle cualquier producto para avanzar la fila', en: 'Serve them quickly and give them any product to move the line along', fr: 'Le servir rapidement et lui donner n\'importe quel produit pour faire avancer la file' }, value: 10 },
      { id: 'b', text: { es: 'Pedirle paciencia, explicarle las opciones con calma y, si es necesario, pedir apoyo de un compañero para la fila', en: 'Ask for patience, calmly explain the options, and if necessary, ask a colleague for help with the line', fr: 'Demander de la patience, expliquer calmement les options et, si nécessaire, demander l\'aide d\'un collègue pour la file' }, value: 100 },
      { id: 'c', text: { es: 'Decirle que vuelva cuando haya menos gente', en: 'Tell them to come back when it is less busy', fr: 'Lui dire de revenir quand il y a moins de monde' }, value: 0 },
      { id: 'd', text: { es: 'Referirlo al farmacéutico para que no retrase la fila', en: 'Refer them to the pharmacist so they don\'t hold up the line', fr: 'Le diriger vers le pharmacien pour ne pas retarder la file' }, value: 30 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'ph-cs-02',
    profileId: 'pharmacy-clerk',
    categoryId: 'pharmacy-soft-skills',
    competencyId: 'pharmacy-customer-service',
    type: 'open-text',
    content: {
      es: 'Describa una situación en la que tuvo que manejar a un cliente difícil o insatisfecho. ¿Cómo resolvió la situación y qué aprendió de la experiencia?',
      en: 'Describe a situation where you had to handle a difficult or dissatisfied customer. How did you resolve the situation and what did you learn from the experience?',
      fr: 'Décrivez une situation où vous avez dû gérer un client difficile ou insatisfait. Comment avez-vous résolu la situation et qu\'avez-vous appris de cette expérience ?',
    },
    rubric: {
      es: 'Evaluar: (1) Escucha activa y empatía, (2) Control emocional bajo presión, (3) Enfoque en la solución, (4) Resultado positivo o aprendizaje, (5) Profesionalismo y cortesía.',
      en: 'Evaluate: (1) Active listening and empathy, (2) Emotional control under pressure, (3) Solution-focused approach, (4) Positive outcome or learning, (5) Professionalism and courtesy.',
      fr: 'Évaluer : (1) Écoute active et empathie, (2) Contrôle émotionnel sous pression, (3) Approche axée sur la solution, (4) Résultat positif ou apprentissage, (5) Professionnalisme et courtoisie.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 2,
    isActive: true,
  },

  // --- Teamwork ---
  {
    id: 'ph-tw-01',
    profileId: 'pharmacy-clerk',
    categoryId: 'pharmacy-soft-skills',
    competencyId: 'pharmacy-teamwork',
    type: 'scenario',
    content: {
      es: 'El farmacéutico le pide que se encargue de atender el mostrador solo durante 30 minutos mientras él atiende una consulta urgente. En ese momento llegan varios clientes con preguntas que usted no puede responder sobre interacciones de medicamentos. ¿Qué hace?\n\nContexto: No hay otro personal disponible y los clientes están esperando.',
      en: 'The pharmacist asks you to handle the counter alone for 30 minutes while they deal with an urgent consultation. At that moment, several customers arrive with questions about drug interactions that you cannot answer. What do you do?\n\nContext: No other staff is available and customers are waiting.',
      fr: 'Le pharmacien vous demande de gérer le comptoir seul pendant 30 minutes pendant qu\'il s\'occupe d\'une consultation urgente. À ce moment-là, plusieurs clients arrivent avec des questions sur les interactions médicamenteuses auxquelles vous ne pouvez pas répondre. Que faites-vous ?\n\nContexte : Aucun autre personnel n\'est disponible et les clients attendent.',
    },
    rubric: {
      es: 'Evaluar: (1) Reconocimiento de los límites de su rol, (2) Gestión profesional de la espera, (3) Comunicación clara con los clientes sobre tiempos, (4) Priorización de consultas según urgencia, (5) Apoyo al farmacéutico sin interrumpir innecesariamente.',
      en: 'Evaluate: (1) Recognition of role limitations, (2) Professional management of wait times, (3) Clear communication with customers about timing, (4) Prioritization of inquiries by urgency, (5) Supporting the pharmacist without unnecessary interruptions.',
      fr: 'Évaluer : (1) Reconnaissance des limites de son rôle, (2) Gestion professionnelle des temps d\'attente, (3) Communication claire avec les clients sur les délais, (4) Priorisation des demandes selon l\'urgence, (5) Soutien au pharmacien sans interruptions inutiles.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },
  {
    id: 'ph-tw-02',
    profileId: 'pharmacy-clerk',
    categoryId: 'pharmacy-soft-skills',
    competencyId: 'pharmacy-teamwork',
    type: 'scale',
    content: {
      es: '¿Con qué frecuencia se ofrece a ayudar a sus compañeros cuando ve que están ocupados, aunque no sea su responsabilidad directa?',
      en: 'How often do you offer to help your colleagues when you see they are busy, even if it is not your direct responsibility?',
      fr: 'À quelle fréquence proposez-vous d\'aider vos collègues lorsque vous voyez qu\'ils sont occupés, même si ce n\'est pas votre responsabilité directe ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nunca', en: 'Never', fr: 'Jamais' },
      max: { es: 'Siempre', en: 'Always', fr: 'Toujours' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },

  // --- Attention to Detail ---
  {
    id: 'ph-det-01',
    profileId: 'pharmacy-clerk',
    categoryId: 'pharmacy-soft-skills',
    competencyId: 'pharmacy-attention-detail',
    type: 'multiple-choice',
    content: {
      es: 'Un cliente le entrega una receta y usted nota que el nombre del paciente en la receta no coincide con la identificación del cliente. ¿Qué hace?',
      en: 'A customer hands you a prescription and you notice that the patient name on the prescription does not match the customer\'s ID. What do you do?',
      fr: 'Un client vous remet une ordonnance et vous remarquez que le nom du patient sur l\'ordonnance ne correspond pas à la pièce d\'identité du client. Que faites-vous ?',
    },
    options: [
      { id: 'a', text: { es: 'Despachar la receta de todos modos porque quizás es para un familiar', en: 'Dispense the prescription anyway because it might be for a family member', fr: 'Délivrer l\'ordonnance de toute façon car c\'est peut-être pour un membre de la famille' }, value: 0 },
      { id: 'b', text: { es: 'Verificar la discrepancia con el cliente, pedir aclaración y consultar con el farmacéutico antes de proceder', en: 'Verify the discrepancy with the customer, ask for clarification, and consult the pharmacist before proceeding', fr: 'Vérifier l\'écart avec le client, demander des éclaircissements et consulter le pharmacien avant de procéder' }, value: 100 },
      { id: 'c', text: { es: 'Negar la venta sin dar explicación', en: 'Deny the sale without giving an explanation', fr: 'Refuser la vente sans donner d\'explication' }, value: 20 },
      { id: 'd', text: { es: 'Pedir solo una identificación adicional y proceder', en: 'Just ask for additional ID and proceed', fr: 'Demander simplement une pièce d\'identité supplémentaire et procéder' }, value: 40 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
  {
    id: 'ph-det-02',
    profileId: 'pharmacy-clerk',
    categoryId: 'pharmacy-soft-skills',
    competencyId: 'pharmacy-attention-detail',
    type: 'scale',
    content: {
      es: '¿Con qué frecuencia verifica dos veces los precios y cantidades antes de completar una transacción?',
      en: 'How often do you double-check prices and quantities before completing a transaction?',
      fr: 'À quelle fréquence vérifiez-vous deux fois les prix et les quantités avant de finaliser une transaction ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nunca', en: 'Never', fr: 'Jamais' },
      max: { es: 'Siempre', en: 'Always', fr: 'Toujours' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 6,
    isActive: true,
  },
];

const pharmacyReadinessQuestions: Question[] = [
  // --- Adaptability ---
  {
    id: 'ph-adapt-01',
    profileId: 'pharmacy-clerk',
    categoryId: 'pharmacy-readiness',
    competencyId: 'pharmacy-adaptability',
    type: 'multiple-choice',
    content: {
      es: 'La farmacia implementa un nuevo sistema digital de inventario que reemplaza el proceso manual que usted dominaba. ¿Cuál es su reacción?',
      en: 'The pharmacy implements a new digital inventory system that replaces the manual process you had mastered. What is your reaction?',
      fr: 'La pharmacie met en place un nouveau système numérique d\'inventaire qui remplace le processus manuel que vous maîtrisiez. Quelle est votre réaction ?',
    },
    options: [
      { id: 'a', text: { es: 'Me resisto porque el sistema anterior funcionaba bien', en: 'I resist because the previous system worked fine', fr: 'Je résiste car l\'ancien système fonctionnait bien' }, value: 0 },
      { id: 'b', text: { es: 'Acepto el cambio, tomo la capacitación con interés y practico por mi cuenta para dominarlo rápido', en: 'I accept the change, take the training with interest, and practice on my own to master it quickly', fr: 'J\'accepte le changement, je suis la formation avec intérêt et je pratique par moi-même pour le maîtriser rapidement' }, value: 100 },
      { id: 'c', text: { es: 'Lo uso porque me obligan, pero sigo usando el método anterior cuando puedo', en: 'I use it because I have to, but I keep using the old method when I can', fr: 'Je l\'utilise parce que je dois, mais je continue à utiliser l\'ancienne méthode quand je peux' }, value: 20 },
      { id: 'd', text: { es: 'Espero a que otros aprendan primero y luego les pido que me enseñen', en: 'I wait for others to learn first and then ask them to teach me', fr: 'J\'attends que d\'autres apprennent d\'abord et ensuite je leur demande de m\'enseigner' }, value: 40 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'ph-adapt-02',
    profileId: 'pharmacy-clerk',
    categoryId: 'pharmacy-readiness',
    competencyId: 'pharmacy-adaptability',
    type: 'open-text',
    content: {
      es: 'Describa una situación en la que tuvo que aprender algo nuevo rápidamente en un trabajo. ¿Cómo lo abordó y cuánto tiempo le tomó sentirse cómodo?',
      en: 'Describe a situation where you had to learn something new quickly at work. How did you approach it and how long did it take you to feel comfortable?',
      fr: 'Décrivez une situation où vous avez dû apprendre quelque chose de nouveau rapidement au travail. Comment l\'avez-vous abordé et combien de temps vous a-t-il fallu pour vous sentir à l\'aise ?',
    },
    rubric: {
      es: 'Evaluar: (1) Actitud proactiva hacia el aprendizaje, (2) Estrategias de aprendizaje utilizadas, (3) Manejo de la frustración o dificultad, (4) Tiempo de adaptación razonable, (5) Aplicación práctica de lo aprendido.',
      en: 'Evaluate: (1) Proactive attitude toward learning, (2) Learning strategies used, (3) Handling frustration or difficulty, (4) Reasonable adaptation time, (5) Practical application of what was learned.',
      fr: 'Évaluer : (1) Attitude proactive envers l\'apprentissage, (2) Stratégies d\'apprentissage utilisées, (3) Gestion de la frustration ou de la difficulté, (4) Temps d\'adaptation raisonnable, (5) Application pratique de ce qui a été appris.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 2,
    isActive: true,
  },

  // --- Store Organization ---
  {
    id: 'ph-org-01',
    profileId: 'pharmacy-clerk',
    categoryId: 'pharmacy-readiness',
    competencyId: 'pharmacy-store-organization',
    type: 'scenario',
    content: {
      es: 'El gerente le informa que habrá una inspección sanitaria mañana. Al revisar la tienda, nota que varios estantes están desordenados, hay productos fuera de lugar y el área de almacenamiento necesita limpieza. Solo quedan 2 horas de su turno. ¿Cómo prioriza las tareas?\n\nContexto: Hay un compañero disponible para ayudar, pero también tiene sus propias tareas pendientes.',
      en: 'The manager informs you that there will be a health inspection tomorrow. When reviewing the store, you notice several shelves are disorganized, products are misplaced, and the storage area needs cleaning. Only 2 hours remain in your shift. How do you prioritize the tasks?\n\nContext: A colleague is available to help, but they also have their own pending tasks.',
      fr: 'Le gérant vous informe qu\'il y aura une inspection sanitaire demain. En examinant le magasin, vous remarquez que plusieurs rayons sont désorganisés, des produits sont mal placés et la zone de stockage a besoin d\'être nettoyée. Il ne reste que 2 heures dans votre quart. Comment priorisez-vous les tâches ?\n\nContexte : Un collègue est disponible pour aider, mais il a aussi ses propres tâches en cours.',
    },
    rubric: {
      es: 'Evaluar: (1) Capacidad de priorización según riesgo sanitario, (2) Organización y planificación del tiempo, (3) Delegación efectiva y trabajo en equipo, (4) Atención a normas de higiene y seguridad, (5) Comunicación con el gerente sobre avances y limitaciones.',
      en: 'Evaluate: (1) Prioritization ability based on health risk, (2) Time organization and planning, (3) Effective delegation and teamwork, (4) Attention to hygiene and safety standards, (5) Communication with the manager about progress and limitations.',
      fr: 'Évaluer : (1) Capacité de priorisation selon le risque sanitaire, (2) Organisation et planification du temps, (3) Délégation efficace et travail d\'équipe, (4) Attention aux normes d\'hygiène et de sécurité, (5) Communication avec le gérant sur les progrès et les limites.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },
  {
    id: 'ph-org-02',
    profileId: 'pharmacy-clerk',
    categoryId: 'pharmacy-readiness',
    competencyId: 'pharmacy-store-organization',
    type: 'scale',
    content: {
      es: '¿Qué tan cómodo se siente implementando nuevos protocolos de organización y limpieza, aunque impliquen cambiar sus rutinas habituales?',
      en: 'How comfortable are you implementing new organization and cleaning protocols, even if they involve changing your usual routines?',
      fr: 'Dans quelle mesure êtes-vous à l\'aise pour mettre en œuvre de nouveaux protocoles d\'organisation et de nettoyage, même s\'ils impliquent de changer vos routines habituelles ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Muy incómodo', en: 'Very uncomfortable', fr: 'Très mal à l\'aise' },
      max: { es: 'Muy cómodo', en: 'Very comfortable', fr: 'Très à l\'aise' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },

  // --- Phone Etiquette ---
  {
    id: 'ph-phone-01',
    profileId: 'pharmacy-clerk',
    categoryId: 'pharmacy-readiness',
    competencyId: 'pharmacy-phone-etiquette',
    type: 'multiple-choice',
    content: {
      es: 'Recibe una llamada telefónica de un cliente que pregunta si tienen un medicamento específico. Usted está atendiendo a otro cliente en el mostrador. ¿Qué hace?',
      en: 'You receive a phone call from a customer asking if you have a specific medication. You are currently serving another customer at the counter. What do you do?',
      fr: 'Vous recevez un appel téléphonique d\'un client qui demande si vous avez un médicament spécifique. Vous êtes en train de servir un autre client au comptoir. Que faites-vous ?',
    },
    options: [
      { id: 'a', text: { es: 'Ignoro la llamada y sigo con el cliente presencial', en: 'Ignore the call and continue with the in-person customer', fr: 'Ignorer l\'appel et continuer avec le client en personne' }, value: 20 },
      { id: 'b', text: { es: 'Contesto brevemente, me disculpo, pido el nombre y número para devolver la llamada en unos minutos', en: 'Answer briefly, apologize, ask for their name and number to call back in a few minutes', fr: 'Répondre brièvement, m\'excuser, demander le nom et le numéro pour rappeler dans quelques minutes' }, value: 100 },
      { id: 'c', text: { es: 'Pongo al cliente presencial en espera para atender la llamada completa', en: 'Put the in-person customer on hold to take the full call', fr: 'Mettre le client en personne en attente pour prendre l\'appel complet' }, value: 30 },
      { id: 'd', text: { es: 'Contesto y digo que llamen después porque estoy ocupado', en: 'Answer and tell them to call later because I am busy', fr: 'Répondre et dire de rappeler plus tard car je suis occupé' }, value: 40 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
  {
    id: 'ph-phone-02',
    profileId: 'pharmacy-clerk',
    categoryId: 'pharmacy-readiness',
    competencyId: 'pharmacy-phone-etiquette',
    type: 'scenario',
    content: {
      es: 'Un cliente llama por teléfono y le describe sus síntomas esperando que usted le recomiende un medicamento. Los síntomas que describe suenan preocupantes. ¿Cómo maneja esta llamada?\n\nContexto: El farmacéutico está en su descanso y no hay otro profesional de salud disponible.',
      en: 'A customer calls on the phone and describes their symptoms, expecting you to recommend a medication. The symptoms they describe sound concerning. How do you handle this call?\n\nContext: The pharmacist is on break and no other healthcare professional is available.',
      fr: 'Un client appelle par téléphone et décrit ses symptômes en s\'attendant à ce que vous lui recommandiez un médicament. Les symptômes qu\'il décrit semblent préoccupants. Comment gérez-vous cet appel ?\n\nContexte : Le pharmacien est en pause et aucun autre professionnel de santé n\'est disponible.',
    },
    rubric: {
      es: 'Evaluar: (1) Reconocimiento de los límites de su competencia, (2) Empatía y trato amable al cliente, (3) No recomendar medicamentos fuera de su alcance, (4) Orientación apropiada (urgencias, llamar al médico, esperar al farmacéutico), (5) Registro de la llamada para seguimiento.',
      en: 'Evaluate: (1) Recognition of competency limits, (2) Empathy and friendly treatment of the customer, (3) Not recommending medications beyond their scope, (4) Appropriate guidance (emergency services, call doctor, wait for pharmacist), (5) Call logging for follow-up.',
      fr: 'Évaluer : (1) Reconnaissance des limites de compétence, (2) Empathie et traitement aimable du client, (3) Ne pas recommander de médicaments hors de sa portée, (4) Orientation appropriée (urgences, appeler le médecin, attendre le pharmacien), (5) Enregistrement de l\'appel pour suivi.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 6,
    isActive: true,
  },
];

// ============================================================================
// GAS STATION ATTENDANT QUESTIONS
// ============================================================================

// --- Professional Skills ---
const gasStationProfessionalQuestions: Question[] = [
  {
    id: 'gs-fuel-01',
    profileId: 'gas-station-attendant',
    categoryId: 'gas-station-professional',
    competencyId: 'fuel-dispensing-safety',
    type: 'multiple-choice',
    content: {
      es: 'Un cliente llega a la estación con el motor encendido y quiere que le despache gasolina. ¿Qué debe hacer usted?',
      en: 'A customer arrives at the station with the engine running and wants you to dispense fuel. What should you do?',
      fr: 'Un client arrive à la station avec le moteur en marche et veut que vous lui distribuiez du carburant. Que devez-vous faire ?',
    },
    options: [
      { id: 'a', text: { es: 'Despachar normalmente, no hay riesgo real', en: 'Dispense normally, there is no real risk', fr: 'Distribuer normalement, il n\'y a pas de risque réel' }, value: 0 },
      { id: 'b', text: { es: 'Pedirle amablemente que apague el motor antes de despachar, explicando el protocolo de seguridad', en: 'Kindly ask them to turn off the engine before dispensing, explaining the safety protocol', fr: 'Lui demander aimablement d\'éteindre le moteur avant de distribuer, en expliquant le protocole de sécurité' }, value: 100 },
      { id: 'c', text: { es: 'Negarse a atenderlo y llamar al supervisor', en: 'Refuse to serve them and call the supervisor', fr: 'Refuser de le servir et appeler le superviseur' }, value: 30 },
      { id: 'd', text: { es: 'Despachar rápido para minimizar el riesgo', en: 'Dispense quickly to minimize the risk', fr: 'Distribuer rapidement pour minimiser le risque' }, value: 10 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'gs-fuel-02',
    profileId: 'gas-station-attendant',
    categoryId: 'gas-station-professional',
    competencyId: 'fuel-dispensing-safety',
    type: 'scale',
    content: {
      es: '¿Qué tan familiarizado está con los diferentes tipos de combustible (regular, premium, diésel) y las consecuencias de despachar el tipo incorrecto?',
      en: 'How familiar are you with the different types of fuel (regular, premium, diesel) and the consequences of dispensing the wrong type?',
      fr: 'Dans quelle mesure êtes-vous familiarisé avec les différents types de carburant (ordinaire, premium, diesel) et les conséquences de distribuer le mauvais type ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada familiarizado', en: 'Not familiar at all', fr: 'Pas du tout familiarisé' },
      max: { es: 'Muy familiarizado', en: 'Very familiar', fr: 'Très familiarisé' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },
  {
    id: 'gs-pay-01',
    profileId: 'gas-station-attendant',
    categoryId: 'gas-station-professional',
    competencyId: 'payment-processing',
    type: 'multiple-choice',
    content: {
      es: 'Un cliente paga $500 en efectivo por una carga de $347. ¿Cuál es el cambio correcto y cómo lo verifica?',
      en: 'A customer pays $500 in cash for a $347 fill-up. What is the correct change and how do you verify it?',
      fr: 'Un client paie 500 $ en espèces pour un plein de 347 $. Quel est le rendu correct et comment le vérifiez-vous ?',
    },
    options: [
      { id: 'a', text: { es: '$153, contando el cambio en voz alta frente al cliente', en: '$153, counting the change out loud in front of the customer', fr: '153 $, en comptant la monnaie à voix haute devant le client' }, value: 100 },
      { id: 'b', text: { es: '$153, entregándolo directamente sin contar', en: '$153, handing it over directly without counting', fr: '153 $, en le remettant directement sans compter' }, value: 40 },
      { id: 'c', text: { es: '$163, redondeando a favor del cliente', en: '$163, rounding in the customer\'s favor', fr: '163 $, en arrondissant en faveur du client' }, value: 0 },
      { id: 'd', text: { es: '$153, pero primero verifico el billete de $500 con luz ultravioleta', en: '$153, but first I verify the $500 bill with UV light', fr: '153 $, mais d\'abord je vérifie le billet de 500 $ avec la lumière UV' }, value: 80 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 3,
    isActive: true,
  },
  {
    id: 'gs-vehicle-01',
    profileId: 'gas-station-attendant',
    categoryId: 'gas-station-professional',
    competencyId: 'basic-vehicle-knowledge',
    type: 'scenario',
    content: {
      es: 'Un cliente le pide que revise el nivel de aceite de su vehículo. Al revisar, nota que el aceite está muy oscuro y por debajo del nivel mínimo.\n\nContexto: La estación vende aceites de motor y el cliente parece tener prisa.',
      en: 'A customer asks you to check their vehicle\'s oil level. When checking, you notice the oil is very dark and below the minimum level.\n\nContext: The station sells motor oils and the customer seems to be in a hurry.',
      fr: 'Un client vous demande de vérifier le niveau d\'huile de son véhicule. En vérifiant, vous remarquez que l\'huile est très foncée et en dessous du niveau minimum.\n\nContexte : La station vend des huiles moteur et le client semble être pressé.',
    },
    rubric: {
      es: 'Evaluar: (1) Comunicación clara del hallazgo al cliente, (2) Recomendación profesional sin ser alarmista, (3) Ofrecimiento de productos disponibles en la estación, (4) Respeto por la decisión del cliente, (5) Conocimiento básico de consecuencias de operar con aceite bajo.',
      en: 'Evaluate: (1) Clear communication of the finding to the customer, (2) Professional recommendation without being alarmist, (3) Offering available products at the station, (4) Respect for the customer\'s decision, (5) Basic knowledge of consequences of operating with low oil.',
      fr: 'Évaluer : (1) Communication claire de la constatation au client, (2) Recommandation professionnelle sans être alarmiste, (3) Proposition des produits disponibles à la station, (4) Respect de la décision du client, (5) Connaissance de base des conséquences de rouler avec un niveau d\'huile bas.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 4,
    isActive: true,
  },
  {
    id: 'gs-hazmat-01',
    profileId: 'gas-station-attendant',
    categoryId: 'gas-station-professional',
    competencyId: 'hazmat-safety',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál es la primera acción que se debe tomar cuando se detecta un derrame de combustible en el área de bombas?',
      en: 'What is the first action to take when a fuel spill is detected in the pump area?',
      fr: 'Quelle est la première action à prendre lorsqu\'un déversement de carburant est détecté dans la zone des pompes ?',
    },
    options: [
      { id: 'a', text: { es: 'Limpiar el derrame inmediatamente con un trapo', en: 'Clean up the spill immediately with a rag', fr: 'Nettoyer le déversement immédiatement avec un chiffon' }, value: 20 },
      { id: 'b', text: { es: 'Detener el despacho, alejar fuentes de ignición y aplicar material absorbente', en: 'Stop dispensing, remove ignition sources, and apply absorbent material', fr: 'Arrêter la distribution, éloigner les sources d\'ignition et appliquer du matériau absorbant' }, value: 100 },
      { id: 'c', text: { es: 'Llamar a los bomberos de inmediato', en: 'Call the fire department immediately', fr: 'Appeler les pompiers immédiatement' }, value: 40 },
      { id: 'd', text: { es: 'Echar agua para diluir el combustible', en: 'Pour water to dilute the fuel', fr: 'Verser de l\'eau pour diluer le carburant' }, value: 0 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
  {
    id: 'gs-maint-01',
    profileId: 'gas-station-attendant',
    categoryId: 'gas-station-professional',
    competencyId: 'station-maintenance',
    type: 'scale',
    content: {
      es: '¿Qué tan importante considera mantener limpios y organizados los baños, la isla de bombas y la tienda de conveniencia durante todo su turno?',
      en: 'How important do you consider keeping the restrooms, pump island, and convenience store clean and organized throughout your shift?',
      fr: 'Quelle importance accordez-vous au maintien de la propreté et de l\'organisation des toilettes, de l\'îlot de pompes et de la boutique de proximité pendant tout votre quart de travail ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada importante', en: 'Not important at all', fr: 'Pas du tout important' },
      max: { es: 'Muy importante', en: 'Very important', fr: 'Très important' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 6,
    isActive: true,
  },
];

// --- Soft Skills ---
const gasStationSoftSkillsQuestions: Question[] = [
  {
    id: 'gs-cs-01',
    profileId: 'gas-station-attendant',
    categoryId: 'gas-station-soft-skills',
    competencyId: 'gas-customer-service',
    type: 'multiple-choice',
    content: {
      es: 'Es hora pico y hay fila de vehículos esperando. Un cliente se baja de su auto molesto porque ha esperado 10 minutos. ¿Cómo lo atiende?',
      en: 'It\'s rush hour and there is a line of vehicles waiting. A customer gets out of their car upset because they have waited 10 minutes. How do you serve them?',
      fr: 'C\'est l\'heure de pointe et il y a une file de véhicules en attente. Un client sort de sa voiture mécontent d\'avoir attendu 10 minutes. Comment le servez-vous ?',
    },
    options: [
      { id: 'a', text: { es: 'Disculparse por la espera, atenderlo con rapidez y amabilidad, y agradecer su paciencia', en: 'Apologize for the wait, serve them quickly and kindly, and thank them for their patience', fr: 'S\'excuser pour l\'attente, le servir rapidement et aimablement, et le remercier pour sa patience' }, value: 100 },
      { id: 'b', text: { es: 'Explicarle que hay mucha gente y que no es su culpa', en: 'Explain that there are many people and it\'s not your fault', fr: 'Lui expliquer qu\'il y a beaucoup de monde et que ce n\'est pas votre faute' }, value: 20 },
      { id: 'c', text: { es: 'Ignorar su molestia y atenderlo normalmente', en: 'Ignore their frustration and serve them normally', fr: 'Ignorer sa frustration et le servir normalement' }, value: 30 },
      { id: 'd', text: { es: 'Pedirle que se calme antes de atenderlo', en: 'Ask them to calm down before serving them', fr: 'Lui demander de se calmer avant de le servir' }, value: 10 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'gs-cs-02',
    profileId: 'gas-station-attendant',
    categoryId: 'gas-station-soft-skills',
    competencyId: 'gas-customer-service',
    type: 'open-text',
    content: {
      es: 'Describa qué acciones realiza para brindar un servicio excelente a cada cliente que llega a la estación. ¿Cómo se diferencia de otros despachadores?',
      en: 'Describe what actions you take to provide excellent service to every customer who arrives at the station. How do you differentiate yourself from other attendants?',
      fr: 'Décrivez les actions que vous prenez pour fournir un excellent service à chaque client qui arrive à la station. Comment vous différenciez-vous des autres pompistes ?',
    },
    rubric: {
      es: 'Evaluar: (1) Saludo y actitud positiva, (2) Rapidez en la atención, (3) Proactividad (ofrecer servicios adicionales), (4) Atención a detalles (limpiar parabrisas, revisar llantas), (5) Despedida cordial.',
      en: 'Evaluate: (1) Greeting and positive attitude, (2) Speed of service, (3) Proactivity (offering additional services), (4) Attention to details (cleaning windshield, checking tires), (5) Cordial farewell.',
      fr: 'Évaluer : (1) Accueil et attitude positive, (2) Rapidité du service, (3) Proactivité (proposer des services supplémentaires), (4) Attention aux détails (nettoyer le pare-brise, vérifier les pneus), (5) Adieu cordial.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 2,
    isActive: true,
  },
  {
    id: 'gs-conflict-01',
    profileId: 'gas-station-attendant',
    categoryId: 'gas-station-soft-skills',
    competencyId: 'gas-conflict-resolution',
    type: 'scenario',
    content: {
      es: 'Un cliente afirma que usted le despachó menos combustible del que pidió. Dice que pidió un tanque lleno pero la bomba marcó solo $400 y su tanque no está lleno. El cliente se pone agresivo y amenaza con llamar a la policía.\n\nContexto: Usted está seguro de que despachó correctamente. Hay otros clientes observando la situación.',
      en: 'A customer claims you dispensed less fuel than requested. They say they asked for a full tank but the pump only showed $400 and their tank is not full. The customer becomes aggressive and threatens to call the police.\n\nContext: You are sure you dispensed correctly. Other customers are watching the situation.',
      fr: 'Un client affirme que vous lui avez distribué moins de carburant que demandé. Il dit qu\'il a demandé un plein mais la pompe n\'a affiché que 400 $ et son réservoir n\'est pas plein. Le client devient agressif et menace d\'appeler la police.\n\nContexte : Vous êtes sûr d\'avoir distribué correctement. D\'autres clients observent la situation.',
    },
    rubric: {
      es: 'Evaluar: (1) Mantener la calma y profesionalismo, (2) Escuchar al cliente sin ponerse a la defensiva, (3) Ofrecer verificar la bomba o llamar al supervisor, (4) No escalar el conflicto, (5) Documentar el incidente si es necesario.',
      en: 'Evaluate: (1) Maintaining calm and professionalism, (2) Listening to the customer without becoming defensive, (3) Offering to verify the pump or call the supervisor, (4) Not escalating the conflict, (5) Documenting the incident if necessary.',
      fr: 'Évaluer : (1) Maintenir le calme et le professionnalisme, (2) Écouter le client sans se mettre sur la défensive, (3) Proposer de vérifier la pompe ou d\'appeler le superviseur, (4) Ne pas aggraver le conflit, (5) Documenter l\'incident si nécessaire.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },
  {
    id: 'gs-conflict-02',
    profileId: 'gas-station-attendant',
    categoryId: 'gas-station-soft-skills',
    competencyId: 'gas-conflict-resolution',
    type: 'scale',
    content: {
      es: '¿Qué tan preparado se siente para manejar situaciones conflictivas con clientes difíciles o agresivos?',
      en: 'How prepared do you feel to handle conflict situations with difficult or aggressive customers?',
      fr: 'Dans quelle mesure vous sentez-vous préparé à gérer des situations conflictuelles avec des clients difficiles ou agressifs ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada preparado', en: 'Not prepared at all', fr: 'Pas du tout préparé' },
      max: { es: 'Muy preparado', en: 'Very prepared', fr: 'Très préparé' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },
  {
    id: 'gs-upsell-01',
    profileId: 'gas-station-attendant',
    categoryId: 'gas-station-soft-skills',
    competencyId: 'gas-upselling',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál es la mejor forma de ofrecer servicios adicionales (lavado de auto, aditivos, productos de conveniencia) a un cliente mientras despacha combustible?',
      en: 'What is the best way to offer additional services (car wash, additives, convenience products) to a customer while dispensing fuel?',
      fr: 'Quelle est la meilleure façon de proposer des services supplémentaires (lavage de voiture, additifs, produits de proximité) à un client pendant la distribution de carburant ?',
    },
    options: [
      { id: 'a', text: { es: 'Preguntar amablemente si desea algún servicio adicional mientras espera la carga', en: 'Kindly ask if they would like any additional service while waiting for the fill-up', fr: 'Demander aimablement s\'il souhaite un service supplémentaire en attendant le plein' }, value: 100 },
      { id: 'b', text: { es: 'No ofrecer nada a menos que el cliente pregunte', en: 'Don\'t offer anything unless the customer asks', fr: 'Ne rien proposer à moins que le client ne demande' }, value: 20 },
      { id: 'c', text: { es: 'Insistir repetidamente en que compre algo de la tienda', en: 'Repeatedly insist they buy something from the store', fr: 'Insister de manière répétée pour qu\'il achète quelque chose au magasin' }, value: 0 },
      { id: 'd', text: { es: 'Ofrecer solo cuando el parabrisas está sucio o las llantas se ven bajas', en: 'Only offer when the windshield is dirty or the tires look low', fr: 'Proposer uniquement quand le pare-brise est sale ou les pneus semblent dégonflés' }, value: 70 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
  {
    id: 'gs-upsell-02',
    profileId: 'gas-station-attendant',
    categoryId: 'gas-station-soft-skills',
    competencyId: 'gas-upselling',
    type: 'open-text',
    content: {
      es: 'Describa su estrategia para incrementar las ventas de productos y servicios adicionales sin ser invasivo con los clientes.',
      en: 'Describe your strategy for increasing sales of additional products and services without being invasive with customers.',
      fr: 'Décrivez votre stratégie pour augmenter les ventes de produits et services supplémentaires sans être envahissant avec les clients.',
    },
    rubric: {
      es: 'Evaluar: (1) Lectura del cliente y momento oportuno, (2) Conocimiento de productos disponibles, (3) Comunicación persuasiva pero respetuosa, (4) Ofrecimiento basado en necesidades observadas, (5) Aceptación del "no" sin insistir.',
      en: 'Evaluate: (1) Reading the customer and timing, (2) Knowledge of available products, (3) Persuasive but respectful communication, (4) Offering based on observed needs, (5) Accepting "no" without insisting.',
      fr: 'Évaluer : (1) Lecture du client et moment opportun, (2) Connaissance des produits disponibles, (3) Communication persuasive mais respectueuse, (4) Proposition basée sur les besoins observés, (5) Acceptation du "non" sans insister.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 6,
    isActive: true,
  },
];

// --- Readiness for Change ---
const gasStationReadinessQuestions: Question[] = [
  {
    id: 'gs-emerg-01',
    profileId: 'gas-station-attendant',
    categoryId: 'gas-station-readiness',
    competencyId: 'emergency-response',
    type: 'scenario',
    content: {
      es: 'Durante su turno, un vehículo se incendia cerca de las bombas de combustible. El conductor sale del vehículo asustado y otros clientes comienzan a entrar en pánico.\n\nContexto: Hay un extintor en cada isla de bombas y un botón de paro de emergencia en la cabina del despachador. Los bomberos están a 10 minutos.',
      en: 'During your shift, a vehicle catches fire near the fuel pumps. The driver exits the vehicle frightened and other customers begin to panic.\n\nContext: There is a fire extinguisher at each pump island and an emergency stop button in the attendant\'s booth. The fire department is 10 minutes away.',
      fr: 'Pendant votre quart de travail, un véhicule prend feu près des pompes à carburant. Le conducteur sort du véhicule effrayé et d\'autres clients commencent à paniquer.\n\nContexte : Il y a un extincteur à chaque îlot de pompes et un bouton d\'arrêt d\'urgence dans la cabine du pompiste. Les pompiers sont à 10 minutes.',
    },
    rubric: {
      es: 'Evaluar: (1) Activar paro de emergencia como primera acción, (2) Evacuación ordenada de clientes, (3) Uso correcto del extintor si es seguro, (4) Llamar a emergencias, (5) No arriesgar la vida propia innecesariamente, (6) Conocimiento de procedimientos de emergencia.',
      en: 'Evaluate: (1) Activating emergency stop as first action, (2) Orderly evacuation of customers, (3) Correct use of fire extinguisher if safe, (4) Calling emergency services, (5) Not risking one\'s own life unnecessarily, (6) Knowledge of emergency procedures.',
      fr: 'Évaluer : (1) Activation de l\'arrêt d\'urgence comme première action, (2) Évacuation ordonnée des clients, (3) Utilisation correcte de l\'extincteur si c\'est sécuritaire, (4) Appel aux services d\'urgence, (5) Ne pas risquer sa propre vie inutilement, (6) Connaissance des procédures d\'urgence.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 1,
    isActive: true,
  },
  {
    id: 'gs-emerg-02',
    profileId: 'gas-station-attendant',
    categoryId: 'gas-station-readiness',
    competencyId: 'emergency-response',
    type: 'multiple-choice',
    content: {
      es: '¿Dónde se encuentra el botón de paro de emergencia en una estación de servicio y cuándo debe usarse?',
      en: 'Where is the emergency stop button located at a gas station and when should it be used?',
      fr: 'Où se trouve le bouton d\'arrêt d\'urgence dans une station-service et quand doit-il être utilisé ?',
    },
    options: [
      { id: 'a', text: { es: 'En la cabina del despachador; se usa ante cualquier emergencia que involucre combustible, fuego o derrames', en: 'In the attendant\'s booth; it is used for any emergency involving fuel, fire, or spills', fr: 'Dans la cabine du pompiste ; il est utilisé pour toute urgence impliquant du carburant, du feu ou des déversements' }, value: 100 },
      { id: 'b', text: { es: 'Junto a cada bomba; solo se usa en caso de incendio', en: 'Next to each pump; only used in case of fire', fr: 'À côté de chaque pompe ; utilisé uniquement en cas d\'incendie' }, value: 30 },
      { id: 'c', text: { es: 'No sé dónde está ni cuándo usarlo', en: 'I don\'t know where it is or when to use it', fr: 'Je ne sais pas où il se trouve ni quand l\'utiliser' }, value: 0 },
      { id: 'd', text: { es: 'En la oficina del gerente; solo el gerente puede activarlo', en: 'In the manager\'s office; only the manager can activate it', fr: 'Dans le bureau du gérant ; seul le gérant peut l\'activer' }, value: 10 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },
  {
    id: 'gs-env-01',
    profileId: 'gas-station-attendant',
    categoryId: 'gas-station-readiness',
    competencyId: 'environmental-awareness',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál es el procedimiento correcto para desechar material absorbente contaminado con combustible después de limpiar un derrame menor?',
      en: 'What is the correct procedure for disposing of absorbent material contaminated with fuel after cleaning a minor spill?',
      fr: 'Quelle est la procédure correcte pour éliminer le matériau absorbant contaminé par du carburant après avoir nettoyé un déversement mineur ?',
    },
    options: [
      { id: 'a', text: { es: 'Tirarlo en el bote de basura común', en: 'Throw it in the regular trash can', fr: 'Le jeter dans la poubelle ordinaire' }, value: 0 },
      { id: 'b', text: { es: 'Depositarlo en el contenedor designado para residuos peligrosos', en: 'Place it in the designated hazardous waste container', fr: 'Le placer dans le conteneur désigné pour les déchets dangereux' }, value: 100 },
      { id: 'c', text: { es: 'Quemarlo en un área segura', en: 'Burn it in a safe area', fr: 'Le brûler dans une zone sûre' }, value: 0 },
      { id: 'd', text: { es: 'Dejarlo secar al sol y reutilizarlo', en: 'Let it dry in the sun and reuse it', fr: 'Le laisser sécher au soleil et le réutiliser' }, value: 10 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 3,
    isActive: true,
  },
  {
    id: 'gs-env-02',
    profileId: 'gas-station-attendant',
    categoryId: 'gas-station-readiness',
    competencyId: 'environmental-awareness',
    type: 'open-text',
    content: {
      es: 'Explique qué prácticas ambientales debe seguir un despachador de gasolina para prevenir la contaminación del suelo y el agua en la estación.',
      en: 'Explain what environmental practices a gas station attendant should follow to prevent soil and water contamination at the station.',
      fr: 'Expliquez quelles pratiques environnementales un pompiste doit suivre pour prévenir la contamination du sol et de l\'eau à la station.',
    },
    rubric: {
      es: 'Evaluar: (1) Prevención de derrames y sobrellenado, (2) Limpieza inmediata de derrames, (3) Disposición correcta de residuos, (4) Mantenimiento de trampas de grasa y drenajes, (5) Conocimiento de regulaciones ambientales básicas.',
      en: 'Evaluate: (1) Prevention of spills and overfilling, (2) Immediate cleanup of spills, (3) Correct waste disposal, (4) Maintenance of grease traps and drains, (5) Knowledge of basic environmental regulations.',
      fr: 'Évaluer : (1) Prévention des déversements et du remplissage excessif, (2) Nettoyage immédiat des déversements, (3) Élimination correcte des déchets, (4) Entretien des bacs à graisse et des drains, (5) Connaissance des réglementations environnementales de base.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 4,
    isActive: true,
  },
  {
    id: 'gs-tech-01',
    profileId: 'gas-station-attendant',
    categoryId: 'gas-station-readiness',
    competencyId: 'gas-tech-adaptability',
    type: 'scale',
    content: {
      es: '¿Qué tan dispuesto está a aprender a operar nuevos sistemas de pago electrónico, bombas digitales o software de gestión que se implementen en la estación?',
      en: 'How willing are you to learn to operate new electronic payment systems, digital pumps, or management software implemented at the station?',
      fr: 'Dans quelle mesure êtes-vous disposé à apprendre à utiliser de nouveaux systèmes de paiement électronique, des pompes numériques ou des logiciels de gestion mis en place à la station ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada dispuesto', en: 'Not willing at all', fr: 'Pas du tout disposé' },
      max: { es: 'Totalmente dispuesto', en: 'Fully willing', fr: 'Tout à fait disposé' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
  {
    id: 'gs-tech-02',
    profileId: 'gas-station-attendant',
    categoryId: 'gas-station-readiness',
    competencyId: 'gas-tech-adaptability',
    type: 'multiple-choice',
    content: {
      es: 'La estación implementa un nuevo sistema de punto de venta digital que reemplaza la caja registradora tradicional. ¿Cuál es su reacción?',
      en: 'The station implements a new digital POS system that replaces the traditional cash register. What is your reaction?',
      fr: 'La station met en place un nouveau système de point de vente numérique qui remplace la caisse enregistreuse traditionnelle. Quelle est votre réaction ?',
    },
    options: [
      { id: 'a', text: { es: 'Pedir capacitación, practicar en horas de bajo tráfico y aprender lo más rápido posible', en: 'Request training, practice during low-traffic hours, and learn as quickly as possible', fr: 'Demander une formation, pratiquer pendant les heures creuses et apprendre le plus vite possible' }, value: 100 },
      { id: 'b', text: { es: 'Esperar a que un compañero me enseñe cuando tenga tiempo', en: 'Wait for a coworker to teach me when they have time', fr: 'Attendre qu\'un collègue m\'enseigne quand il aura le temps' }, value: 30 },
      { id: 'c', text: { es: 'Resistirme al cambio porque el sistema anterior funcionaba bien', en: 'Resist the change because the previous system worked fine', fr: 'Résister au changement parce que l\'ancien système fonctionnait bien' }, value: 0 },
      { id: 'd', text: { es: 'Usarlo solo cuando sea estrictamente necesario y preferir el método anterior', en: 'Use it only when strictly necessary and prefer the previous method', fr: 'L\'utiliser uniquement quand c\'est strictement nécessaire et préférer la méthode précédente' }, value: 20 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 6,
    isActive: true,
  },
];

// ============================================================================
// PHARMACIST - Professional Skills Questions
// ============================================================================

const pharmacistProfessionalQuestions: Question[] = [
  // --- Pharmaceutical Knowledge ---
  {
    id: 'pharm-pk-01',
    profileId: 'pharmacist',
    categoryId: 'pharma-professional',
    competencyId: 'pharmaceutical-knowledge',
    type: 'multiple-choice',
    content: {
      es: 'Un paciente con insuficiencia renal crónica presenta una receta de metformina 850 mg. ¿Cuál es la acción más apropiada?',
      en: 'A patient with chronic kidney disease presents a prescription for metformin 850 mg. What is the most appropriate action?',
      fr: 'Un patient souffrant d\'insuffisance rénale chronique présente une ordonnance de metformine 850 mg. Quelle est l\'action la plus appropriée ?',
    },
    options: [
      { id: 'a', text: { es: 'Dispensar el medicamento tal como está prescrito', en: 'Dispense the medication as prescribed', fr: 'Dispenser le médicament tel que prescrit' }, value: 10 },
      { id: 'b', text: { es: 'Contactar al médico prescriptor para verificar la dosis considerando la función renal del paciente', en: 'Contact the prescribing physician to verify the dose considering the patient\'s renal function', fr: 'Contacter le médecin prescripteur pour vérifier la dose compte tenu de la fonction rénale du patient' }, value: 100 },
      { id: 'c', text: { es: 'Rechazar la receta y pedir al paciente que regrese con otra', en: 'Reject the prescription and ask the patient to come back with another one', fr: 'Rejeter l\'ordonnance et demander au patient de revenir avec une autre' }, value: 30 },
      { id: 'd', text: { es: 'Reducir la dosis por cuenta propia a 500 mg', en: 'Reduce the dose on your own to 500 mg', fr: 'Réduire la dose de votre propre initiative à 500 mg' }, value: 0 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'pharm-pk-02',
    profileId: 'pharmacist',
    categoryId: 'pharma-professional',
    competencyId: 'pharmaceutical-knowledge',
    type: 'open-text',
    content: {
      es: 'Explique la diferencia entre biodisponibilidad y bioequivalencia, y por qué estos conceptos son importantes al sustituir un medicamento de marca por un genérico.',
      en: 'Explain the difference between bioavailability and bioequivalence, and why these concepts are important when substituting a brand-name medication with a generic.',
      fr: 'Expliquez la différence entre biodisponibilité et bioéquivalence, et pourquoi ces concepts sont importants lors de la substitution d\'un médicament de marque par un générique.',
    },
    rubric: {
      es: 'Evaluar: (1) Definición correcta de biodisponibilidad, (2) Definición correcta de bioequivalencia, (3) Relación entre ambos conceptos, (4) Implicaciones clínicas en la sustitución, (5) Mención de medicamentos de estrecho margen terapéutico.',
      en: 'Evaluate: (1) Correct definition of bioavailability, (2) Correct definition of bioequivalence, (3) Relationship between both concepts, (4) Clinical implications in substitution, (5) Mention of narrow therapeutic index drugs.',
      fr: 'Évaluer : (1) Définition correcte de la biodisponibilité, (2) Définition correcte de la bioéquivalence, (3) Relation entre les deux concepts, (4) Implications cliniques de la substitution, (5) Mention des médicaments à marge thérapeutique étroite.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 2,
    isActive: true,
  },

  // --- Dispensing Accuracy ---
  {
    id: 'pharm-da-01',
    profileId: 'pharmacist',
    categoryId: 'pharma-professional',
    competencyId: 'dispensing-accuracy',
    type: 'scenario',
    content: {
      es: 'Al verificar una receta antes de entregarla al paciente, nota que el auxiliar de farmacia preparó amoxicilina 500 mg cápsulas cuando la receta indica amoxicilina 250 mg/5 mL suspensión pediátrica para un niño de 4 años.\n\n¿Cómo maneja esta situación y qué medidas toma para prevenir errores similares en el futuro?',
      en: 'While verifying a prescription before handing it to the patient, you notice the pharmacy technician prepared amoxicillin 500 mg capsules when the prescription calls for amoxicillin 250 mg/5 mL pediatric suspension for a 4-year-old child.\n\nHow do you handle this situation and what measures do you take to prevent similar errors in the future?',
      fr: 'En vérifiant une ordonnance avant de la remettre au patient, vous remarquez que le préparateur a préparé de l\'amoxicilline 500 mg en gélules alors que l\'ordonnance indique de l\'amoxicilline 250 mg/5 mL suspension pédiatrique pour un enfant de 4 ans.\n\nComment gérez-vous cette situation et quelles mesures prenez-vous pour prévenir des erreurs similaires à l\'avenir ?',
    },
    rubric: {
      es: 'Evaluar: (1) Detención inmediata de la entrega, (2) Corrección del error sin culpabilizar públicamente, (3) Comunicación con el auxiliar para retroalimentación, (4) Implementación de controles de verificación, (5) Documentación del incidente.',
      en: 'Evaluate: (1) Immediate stop of delivery, (2) Error correction without public blame, (3) Communication with technician for feedback, (4) Implementation of verification controls, (5) Incident documentation.',
      fr: 'Évaluer : (1) Arrêt immédiat de la dispensation, (2) Correction de l\'erreur sans blâme public, (3) Communication avec le préparateur pour rétroaction, (4) Mise en place de contrôles de vérification, (5) Documentation de l\'incident.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },

  // --- Drug Interaction Assessment ---
  {
    id: 'pharm-di-01',
    profileId: 'pharmacist',
    categoryId: 'pharma-professional',
    competencyId: 'drug-interaction-assessment',
    type: 'multiple-choice',
    content: {
      es: 'Un paciente que toma warfarina llega con una nueva receta de ciprofloxacino. ¿Cuál es la interacción principal y la acción correcta?',
      en: 'A patient taking warfarin arrives with a new prescription for ciprofloxacin. What is the main interaction and the correct action?',
      fr: 'Un patient sous warfarine arrive avec une nouvelle ordonnance de ciprofloxacine. Quelle est l\'interaction principale et l\'action correcte ?',
    },
    options: [
      { id: 'a', text: { es: 'No hay interacción relevante, se puede dispensar normalmente', en: 'There is no relevant interaction, it can be dispensed normally', fr: 'Il n\'y a pas d\'interaction pertinente, on peut dispenser normalement' }, value: 0 },
      { id: 'b', text: { es: 'El ciprofloxacino potencia el efecto anticoagulante; contactar al médico para ajuste de dosis o alternativa', en: 'Ciprofloxacin potentiates the anticoagulant effect; contact the physician for dose adjustment or alternative', fr: 'La ciprofloxacine potentialise l\'effet anticoagulant ; contacter le médecin pour ajustement de dose ou alternative' }, value: 100 },
      { id: 'c', text: { es: 'El ciprofloxacino reduce el efecto de la warfarina; aumentar la dosis de warfarina', en: 'Ciprofloxacin reduces the effect of warfarin; increase warfarin dose', fr: 'La ciprofloxacine réduit l\'effet de la warfarine ; augmenter la dose de warfarine' }, value: 0 },
      { id: 'd', text: { es: 'Dispensar ambos pero recomendar tomarlos con 4 horas de diferencia', en: 'Dispense both but recommend taking them 4 hours apart', fr: 'Dispenser les deux mais recommander de les prendre à 4 heures d\'intervalle' }, value: 20 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },

  // --- Regulatory Compliance ---
  {
    id: 'pharm-rc-01',
    profileId: 'pharmacist',
    categoryId: 'pharma-professional',
    competencyId: 'pharma-regulatory-compliance',
    type: 'scale',
    content: {
      es: '¿Con qué frecuencia revisa y actualiza sus conocimientos sobre los cambios en la regulación sanitaria y las normas de la autoridad de salud de su país?',
      en: 'How often do you review and update your knowledge about changes in health regulations and health authority standards in your country?',
      fr: 'À quelle fréquence révisez-vous et mettez-vous à jour vos connaissances sur les changements de réglementation sanitaire et les normes de l\'autorité de santé de votre pays ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nunca', en: 'Never', fr: 'Jamais' },
      max: { es: 'Continuamente', en: 'Continuously', fr: 'En permanence' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
  {
    id: 'pharm-rc-02',
    profileId: 'pharmacist',
    categoryId: 'pharma-professional',
    competencyId: 'pharma-regulatory-compliance',
    type: 'multiple-choice',
    content: {
      es: 'Un paciente solicita un antibiótico sin presentar receta médica. ¿Cuál es la acción correcta?',
      en: 'A patient requests an antibiotic without presenting a medical prescription. What is the correct action?',
      fr: 'Un patient demande un antibiotique sans présenter d\'ordonnance médicale. Quelle est l\'action correcte ?',
    },
    options: [
      { id: 'a', text: { es: 'Venderlo porque es un medicamento común y el paciente ya lo ha tomado antes', en: 'Sell it because it is a common medication and the patient has taken it before', fr: 'Le vendre car c\'est un médicament courant et le patient l\'a déjà pris' }, value: 0 },
      { id: 'b', text: { es: 'Negar la venta, explicar la necesidad de receta y referir al paciente a consulta médica', en: 'Deny the sale, explain the need for a prescription, and refer the patient to a medical consultation', fr: 'Refuser la vente, expliquer la nécessité d\'une ordonnance et orienter le patient vers une consultation médicale' }, value: 100 },
      { id: 'c', text: { es: 'Vender solo unos pocos comprimidos para que el paciente inicie el tratamiento', en: 'Sell only a few tablets so the patient can start the treatment', fr: 'Vendre seulement quelques comprimés pour que le patient commence le traitement' }, value: 0 },
      { id: 'd', text: { es: 'Recomendar un antibiótico de venta libre como alternativa', en: 'Recommend an over-the-counter antibiotic as an alternative', fr: 'Recommander un antibiotique en vente libre comme alternative' }, value: 10 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 6,
    isActive: true,
  },

  // --- Pharmacovigilance ---
  {
    id: 'pharm-pvig-01',
    profileId: 'pharmacist',
    categoryId: 'pharma-professional',
    competencyId: 'pharmacovigilance',
    type: 'scenario',
    content: {
      es: 'Un paciente que inició un nuevo medicamento antihipertensivo hace dos semanas regresa a la farmacia reportando tos seca persistente, mareos al levantarse y edema en los tobillos.\n\n¿Cómo evalúa estos síntomas y qué acciones toma como farmacéutico?',
      en: 'A patient who started a new antihypertensive medication two weeks ago returns to the pharmacy reporting persistent dry cough, dizziness upon standing, and ankle edema.\n\nHow do you evaluate these symptoms and what actions do you take as a pharmacist?',
      fr: 'Un patient qui a commencé un nouveau médicament antihypertenseur il y a deux semaines revient à la pharmacie en signalant une toux sèche persistante, des vertiges en se levant et un œdème des chevilles.\n\nComment évaluez-vous ces symptômes et quelles actions prenez-vous en tant que pharmacien ?',
    },
    rubric: {
      es: 'Evaluar: (1) Identificación de la tos seca como efecto adverso típico de IECA, (2) Reconocimiento de hipotensión ortostática, (3) Evaluación del edema como posible signo de insuficiencia cardíaca o efecto del medicamento, (4) Reporte de reacciones adversas al sistema de farmacovigilancia, (5) Derivación al médico con información documentada.',
      en: 'Evaluate: (1) Identification of dry cough as a typical ACE inhibitor adverse effect, (2) Recognition of orthostatic hypotension, (3) Evaluation of edema as possible sign of heart failure or drug effect, (4) Reporting adverse reactions to the pharmacovigilance system, (5) Referral to the physician with documented information.',
      fr: 'Évaluer : (1) Identification de la toux sèche comme effet indésirable typique des IEC, (2) Reconnaissance de l\'hypotension orthostatique, (3) Évaluation de l\'œdème comme signe possible d\'insuffisance cardiaque ou d\'effet du médicament, (4) Signalement des effets indésirables au système de pharmacovigilance, (5) Orientation vers le médecin avec des informations documentées.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 7,
    isActive: true,
  },
];

// ============================================================================
// PHARMACIST - Soft Skills Questions
// ============================================================================

const pharmacistSoftSkillsQuestions: Question[] = [
  // --- Patient Counseling ---
  {
    id: 'pharm-pc-01',
    profileId: 'pharmacist',
    categoryId: 'pharma-soft-skills',
    competencyId: 'patient-counseling',
    type: 'scenario',
    content: {
      es: 'Una paciente anciana con baja escolaridad acude a la farmacia con 5 medicamentos diferentes recetados por distintos médicos. Está confundida sobre cuándo y cómo tomar cada uno, y le dice que a veces se le olvida tomarlos.\n\n¿Cómo la asesora para garantizar la adherencia al tratamiento?',
      en: 'An elderly patient with low literacy comes to the pharmacy with 5 different medications prescribed by different doctors. She is confused about when and how to take each one, and tells you she sometimes forgets to take them.\n\nHow do you counsel her to ensure treatment adherence?',
      fr: 'Une patiente âgée avec un faible niveau de scolarité se présente à la pharmacie avec 5 médicaments différents prescrits par différents médecins. Elle est confuse quant au moment et à la façon de prendre chacun d\'entre eux, et vous dit qu\'elle oublie parfois de les prendre.\n\nComment la conseillez-vous pour assurer l\'adhérence au traitement ?',
    },
    rubric: {
      es: 'Evaluar: (1) Empatía y paciencia, (2) Uso de lenguaje sencillo y visual (pictogramas, colores), (3) Creación de un esquema de dosificación simplificado, (4) Recomendación de organizadores de medicamentos, (5) Verificación de comprensión y seguimiento.',
      en: 'Evaluate: (1) Empathy and patience, (2) Use of simple and visual language (pictograms, colors), (3) Creation of a simplified dosing schedule, (4) Recommendation of pill organizers, (5) Verification of understanding and follow-up.',
      fr: 'Évaluer : (1) Empathie et patience, (2) Utilisation d\'un langage simple et visuel (pictogrammes, couleurs), (3) Création d\'un schéma de dosage simplifié, (4) Recommandation de piluliers, (5) Vérification de la compréhension et suivi.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 1,
    isActive: true,
  },
  {
    id: 'pharm-pc-02',
    profileId: 'pharmacist',
    categoryId: 'pharma-soft-skills',
    competencyId: 'patient-counseling',
    type: 'scale',
    content: {
      es: '¿Con qué frecuencia dedica tiempo adicional a explicar los efectos secundarios y las precauciones de los medicamentos a los pacientes, más allá de lo que dice la etiqueta?',
      en: 'How often do you dedicate extra time to explain side effects and precautions of medications to patients, beyond what the label says?',
      fr: 'À quelle fréquence consacrez-vous du temps supplémentaire à expliquer les effets secondaires et les précautions des médicaments aux patients, au-delà de ce que dit l\'étiquette ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nunca', en: 'Never', fr: 'Jamais' },
      max: { es: 'Siempre', en: 'Always', fr: 'Toujours' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },

  // --- Clinical Decision-Making ---
  {
    id: 'pharm-cd-01',
    profileId: 'pharmacist',
    categoryId: 'pharma-soft-skills',
    competencyId: 'clinical-decision-making',
    type: 'multiple-choice',
    content: {
      es: 'Un paciente diabético controlado con metformina le pide recomendación para un antigripal de venta libre. ¿Cuál es la mejor opción?',
      en: 'A diabetic patient controlled with metformin asks you to recommend an over-the-counter cold remedy. What is the best option?',
      fr: 'Un patient diabétique contrôlé par metformine vous demande de lui recommander un médicament contre le rhume en vente libre. Quelle est la meilleure option ?',
    },
    options: [
      { id: 'a', text: { es: 'Recomendar cualquier antigripal sin consideraciones especiales', en: 'Recommend any cold remedy without special considerations', fr: 'Recommander n\'importe quel médicament contre le rhume sans considérations spéciales' }, value: 0 },
      { id: 'b', text: { es: 'Recomendar un antigripal sin azúcar y sin descongestionantes que puedan elevar la glucosa o la presión arterial', en: 'Recommend a sugar-free cold remedy without decongestants that could raise glucose or blood pressure', fr: 'Recommander un médicament contre le rhume sans sucre et sans décongestionnants susceptibles d\'augmenter la glycémie ou la tension artérielle' }, value: 100 },
      { id: 'c', text: { es: 'Decirle que no puede tomar ningún antigripal y que consulte a su médico', en: 'Tell them they cannot take any cold remedy and should consult their doctor', fr: 'Lui dire qu\'il ne peut prendre aucun médicament contre le rhume et qu\'il doit consulter son médecin' }, value: 30 },
      { id: 'd', text: { es: 'Recomendar un jarabe con pseudoefedrina por su mayor efectividad', en: 'Recommend a syrup with pseudoephedrine for its greater effectiveness', fr: 'Recommander un sirop à la pseudoéphédrine pour sa plus grande efficacité' }, value: 10 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 3,
    isActive: true,
  },
  {
    id: 'pharm-cd-02',
    profileId: 'pharmacist',
    categoryId: 'pharma-soft-skills',
    competencyId: 'clinical-decision-making',
    type: 'open-text',
    content: {
      es: 'Describa su proceso de toma de decisiones cuando un paciente presenta síntomas que podrían requerir derivación médica versus automedicación responsable. ¿Qué criterios utiliza para decidir?',
      en: 'Describe your decision-making process when a patient presents symptoms that could require medical referral versus responsible self-medication. What criteria do you use to decide?',
      fr: 'Décrivez votre processus de prise de décision lorsqu\'un patient présente des symptômes qui pourraient nécessiter une orientation médicale versus une automédication responsable. Quels critères utilisez-vous pour décider ?',
    },
    rubric: {
      es: 'Evaluar: (1) Criterios de gravedad y duración de síntomas, (2) Consideración de población vulnerable (niños, embarazadas, ancianos), (3) Evaluación de interacciones con medicamentos actuales, (4) Conocimiento de señales de alarma, (5) Documentación y seguimiento.',
      en: 'Evaluate: (1) Criteria for severity and duration of symptoms, (2) Consideration of vulnerable populations (children, pregnant women, elderly), (3) Evaluation of interactions with current medications, (4) Knowledge of warning signs, (5) Documentation and follow-up.',
      fr: 'Évaluer : (1) Critères de gravité et de durée des symptômes, (2) Prise en compte des populations vulnérables (enfants, femmes enceintes, personnes âgées), (3) Évaluation des interactions avec les médicaments actuels, (4) Connaissance des signes d\'alarme, (5) Documentation et suivi.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 4,
    isActive: true,
  },

  // --- Health Promotion ---
  {
    id: 'pharm-hp-01',
    profileId: 'pharmacist',
    categoryId: 'pharma-soft-skills',
    competencyId: 'health-promotion',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál de las siguientes actividades de promoción de la salud genera mayor impacto cuando es liderada desde la farmacia?',
      en: 'Which of the following health promotion activities generates the greatest impact when led from the pharmacy?',
      fr: 'Laquelle des activités de promotion de la santé suivantes génère le plus grand impact lorsqu\'elle est menée depuis la pharmacie ?',
    },
    options: [
      { id: 'a', text: { es: 'Distribuir folletos informativos sobre enfermedades comunes', en: 'Distribute informational brochures about common diseases', fr: 'Distribuer des brochures informatives sur les maladies courantes' }, value: 30 },
      { id: 'b', text: { es: 'Ofrecer servicios de tamizaje (presión arterial, glucosa) combinados con educación personalizada al paciente', en: 'Offer screening services (blood pressure, glucose) combined with personalized patient education', fr: 'Offrir des services de dépistage (tension artérielle, glycémie) combinés à une éducation personnalisée du patient' }, value: 100 },
      { id: 'c', text: { es: 'Publicar contenido de salud en redes sociales de la farmacia', en: 'Post health content on the pharmacy\'s social media', fr: 'Publier du contenu santé sur les réseaux sociaux de la pharmacie' }, value: 40 },
      { id: 'd', text: { es: 'Ofrecer descuentos en vitaminas y suplementos', en: 'Offer discounts on vitamins and supplements', fr: 'Offrir des réductions sur les vitamines et les suppléments' }, value: 10 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
  {
    id: 'pharm-hp-02',
    profileId: 'pharmacist',
    categoryId: 'pharma-soft-skills',
    competencyId: 'health-promotion',
    type: 'scale',
    content: {
      es: '¿Con qué frecuencia aprovecha las interacciones con pacientes para educarlos sobre prevención de enfermedades, vacunación o hábitos de vida saludable?',
      en: 'How often do you take advantage of patient interactions to educate them about disease prevention, vaccination, or healthy lifestyle habits?',
      fr: 'À quelle fréquence profitez-vous des interactions avec les patients pour les éduquer sur la prévention des maladies, la vaccination ou les habitudes de vie saines ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nunca', en: 'Never', fr: 'Jamais' },
      max: { es: 'Siempre', en: 'Always', fr: 'Toujours' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 6,
    isActive: true,
  },
];

// ============================================================================
// PHARMACIST - Readiness for Change Questions
// ============================================================================

const pharmacistReadinessQuestions: Question[] = [
  // --- Professional Adaptability ---
  {
    id: 'pharm-ad-01',
    profileId: 'pharmacist',
    categoryId: 'pharma-readiness',
    competencyId: 'pharma-adaptability',
    type: 'multiple-choice',
    content: {
      es: 'La autoridad sanitaria introduce nuevas guías clínicas que modifican los protocolos de dispensación de opioides. ¿Cuál es su primera acción?',
      en: 'The health authority introduces new clinical guidelines that modify opioid dispensing protocols. What is your first action?',
      fr: 'L\'autorité sanitaire introduit de nouvelles directives cliniques qui modifient les protocoles de dispensation des opioïdes. Quelle est votre première action ?',
    },
    options: [
      { id: 'a', text: { es: 'Esperar a que el distribuidor envíe información actualizada', en: 'Wait for the distributor to send updated information', fr: 'Attendre que le distributeur envoie des informations mises à jour' }, value: 10 },
      { id: 'b', text: { es: 'Estudiar las nuevas guías de inmediato, actualizar los procedimientos internos y capacitar al equipo', en: 'Study the new guidelines immediately, update internal procedures, and train the team', fr: 'Étudier immédiatement les nouvelles directives, mettre à jour les procédures internes et former l\'équipe' }, value: 100 },
      { id: 'c', text: { es: 'Seguir con los protocolos anteriores hasta que sea obligatorio cambiar', en: 'Continue with previous protocols until it is mandatory to change', fr: 'Continuer avec les anciens protocoles jusqu\'à ce qu\'il soit obligatoire de changer' }, value: 10 },
      { id: 'd', text: { es: 'Delegar la actualización al auxiliar de farmacia', en: 'Delegate the update to the pharmacy technician', fr: 'Déléguer la mise à jour au préparateur en pharmacie' }, value: 0 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'pharm-ad-02',
    profileId: 'pharmacist',
    categoryId: 'pharma-readiness',
    competencyId: 'pharma-adaptability',
    type: 'scale',
    content: {
      es: '¿Qué tan dispuesto está a adoptar nuevas tecnologías como sistemas de dispensación automatizada, receta electrónica o plataformas de telefarmacia?',
      en: 'How willing are you to adopt new technologies such as automated dispensing systems, electronic prescriptions, or telepharmacy platforms?',
      fr: 'Dans quelle mesure êtes-vous disposé à adopter de nouvelles technologies telles que les systèmes de dispensation automatisée, les ordonnances électroniques ou les plateformes de télépharmacie ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada dispuesto', en: 'Not willing at all', fr: 'Pas du tout disposé' },
      max: { es: 'Totalmente dispuesto', en: 'Fully willing', fr: 'Tout à fait disposé' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },

  // --- Controlled Substance Management ---
  {
    id: 'pharm-cs-01',
    profileId: 'pharmacist',
    categoryId: 'pharma-readiness',
    competencyId: 'controlled-substance-mgmt',
    type: 'scenario',
    content: {
      es: 'Durante el conteo mensual de inventario de sustancias controladas, detecta una discrepancia: faltan 10 tabletas de diazepam 10 mg según el registro. Las entradas y salidas del libro de control no cuadran.\n\n¿Qué pasos sigue para investigar y resolver esta situación?',
      en: 'During the monthly controlled substance inventory count, you detect a discrepancy: 10 tablets of diazepam 10 mg are missing according to the record. The entries and exits in the control log do not match.\n\nWhat steps do you follow to investigate and resolve this situation?',
      fr: 'Lors du comptage mensuel de l\'inventaire des substances contrôlées, vous détectez une divergence : 10 comprimés de diazépam 10 mg manquent selon le registre. Les entrées et sorties du registre de contrôle ne correspondent pas.\n\nQuelles étapes suivez-vous pour enquêter et résoudre cette situation ?',
    },
    rubric: {
      es: 'Evaluar: (1) Verificación inmediata y doble conteo, (2) Revisión de registros y transacciones, (3) Notificación a la dirección, (4) Reporte a la autoridad regulatoria si se confirma la pérdida, (5) Implementación de medidas correctivas y preventivas.',
      en: 'Evaluate: (1) Immediate verification and double count, (2) Review of records and transactions, (3) Notification to management, (4) Report to regulatory authority if loss is confirmed, (5) Implementation of corrective and preventive measures.',
      fr: 'Évaluer : (1) Vérification immédiate et double comptage, (2) Revue des registres et transactions, (3) Notification à la direction, (4) Signalement à l\'autorité réglementaire si la perte est confirmée, (5) Mise en place de mesures correctives et préventives.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },
  {
    id: 'pharm-cs-02',
    profileId: 'pharmacist',
    categoryId: 'pharma-readiness',
    competencyId: 'controlled-substance-mgmt',
    type: 'multiple-choice',
    content: {
      es: 'Un paciente presenta una receta de tramadol con indicios de posible alteración (tachones, letra diferente en la dosis). ¿Cuál es el procedimiento correcto?',
      en: 'A patient presents a tramadol prescription with signs of possible alteration (cross-outs, different handwriting on the dose). What is the correct procedure?',
      fr: 'Un patient présente une ordonnance de tramadol avec des signes de possible altération (ratures, écriture différente sur la dose). Quelle est la procédure correcte ?',
    },
    options: [
      { id: 'a', text: { es: 'Dispensar si el paciente parece legítimo y tiene identificación', en: 'Dispense if the patient appears legitimate and has identification', fr: 'Dispenser si le patient semble légitime et a une pièce d\'identité' }, value: 0 },
      { id: 'b', text: { es: 'Retener la receta, verificar con el médico prescriptor antes de dispensar y documentar la situación', en: 'Hold the prescription, verify with the prescribing physician before dispensing, and document the situation', fr: 'Retenir l\'ordonnance, vérifier auprès du médecin prescripteur avant de dispenser et documenter la situation' }, value: 100 },
      { id: 'c', text: { es: 'Devolver la receta y pedir al paciente que traiga una nueva', en: 'Return the prescription and ask the patient to bring a new one', fr: 'Rendre l\'ordonnance et demander au patient d\'en apporter une nouvelle' }, value: 40 },
      { id: 'd', text: { es: 'Dispensar una cantidad menor como precaución', en: 'Dispense a smaller quantity as a precaution', fr: 'Dispenser une quantité moindre par précaution' }, value: 10 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },

  // --- Prescription Verification ---
  {
    id: 'pharm-prv-01',
    profileId: 'pharmacist',
    categoryId: 'pharma-readiness',
    competencyId: 'prescription-verification',
    type: 'open-text',
    content: {
      es: 'Describa su proceso paso a paso para verificar una receta médica antes de dispensar el medicamento. ¿Qué elementos revisa y qué haría si encuentra una irregularidad?',
      en: 'Describe your step-by-step process for verifying a medical prescription before dispensing the medication. What elements do you check and what would you do if you find an irregularity?',
      fr: 'Décrivez votre processus étape par étape pour vérifier une ordonnance médicale avant de dispenser le médicament. Quels éléments vérifiez-vous et que feriez-vous si vous trouvez une irrégularité ?',
    },
    rubric: {
      es: 'Evaluar: (1) Verificación de datos del paciente y del prescriptor, (2) Revisión de dosis, frecuencia y duración del tratamiento, (3) Comprobación de interacciones y alergias, (4) Validez legal de la receta (fecha, sello, firma), (5) Protocolo ante irregularidades.',
      en: 'Evaluate: (1) Verification of patient and prescriber data, (2) Review of dose, frequency, and treatment duration, (3) Check for interactions and allergies, (4) Legal validity of the prescription (date, stamp, signature), (5) Protocol for irregularities.',
      fr: 'Évaluer : (1) Vérification des données du patient et du prescripteur, (2) Revue de la dose, de la fréquence et de la durée du traitement, (3) Vérification des interactions et des allergies, (4) Validité légale de l\'ordonnance (date, cachet, signature), (5) Protocole en cas d\'irrégularités.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 5,
    isActive: true,
  },
  {
    id: 'pharm-prv-02',
    profileId: 'pharmacist',
    categoryId: 'pharma-readiness',
    competencyId: 'prescription-verification',
    type: 'scale',
    content: {
      es: '¿Qué tan cómodo se siente contactando al médico prescriptor cuando tiene dudas sobre una receta, incluso si el paciente está impaciente?',
      en: 'How comfortable do you feel contacting the prescribing physician when you have doubts about a prescription, even if the patient is impatient?',
      fr: 'Dans quelle mesure vous sentez-vous à l\'aise pour contacter le médecin prescripteur lorsque vous avez des doutes sur une ordonnance, même si le patient est impatient ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Muy incómodo', en: 'Very uncomfortable', fr: 'Très mal à l\'aise' },
      max: { es: 'Muy cómodo', en: 'Very comfortable', fr: 'Très à l\'aise' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 6,
    isActive: true,
  },
];

// ============================================================================
// AML/CFT COMPLIANCE OFFICER QUESTIONS
// ============================================================================

const amlProfessionalQuestions: Question[] = [
  // --- AML Regulatory Knowledge ---
  {
    id: 'aml-reg-01',
    profileId: 'aml-compliance-officer',
    categoryId: 'aml-professional',
    competencyId: 'aml-regulatory-knowledge',
    type: 'multiple-choice',
    content: {
      es: '¿Cuántas Recomendaciones emite actualmente el GAFI/FATF como estándares internacionales para combatir el lavado de activos y el financiamiento del terrorismo?',
      en: 'How many Recommendations does FATF currently issue as international standards to combat money laundering and terrorist financing?',
      fr: 'Combien de Recommandations le GAFI émet-il actuellement en tant que normes internationales pour lutter contre le blanchiment de capitaux et le financement du terrorisme ?',
    },
    options: [
      { id: 'a', text: { es: '25 Recomendaciones', en: '25 Recommendations', fr: '25 Recommandations' }, value: 10 },
      { id: 'b', text: { es: '40 Recomendaciones', en: '40 Recommendations', fr: '40 Recommandations' }, value: 100 },
      { id: 'c', text: { es: '49 Recomendaciones', en: '49 Recommendations', fr: '49 Recommandations' }, value: 20 },
      { id: 'd', text: { es: '30 Recomendaciones', en: '30 Recommendations', fr: '30 Recommandations' }, value: 10 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'aml-reg-02',
    profileId: 'aml-compliance-officer',
    categoryId: 'aml-professional',
    competencyId: 'aml-regulatory-knowledge',
    type: 'scenario',
    content: {
      es: 'Su jurisdicción acaba de ser incluida en la "lista gris" del GAFI por deficiencias estratégicas en su régimen PLAFT. Como Oficial de Cumplimiento de una entidad financiera regulada, el regulador le solicita un plan de acción inmediato.\n\nDescriba las medidas concretas que implementaría en los primeros 90 días para fortalecer el programa de cumplimiento de su institución ante esta situación.',
      en: 'Your jurisdiction has just been placed on the FATF "grey list" due to strategic deficiencies in its AML/CFT regime. As the Compliance Officer of a regulated financial institution, the regulator requests an immediate action plan.\n\nDescribe the concrete measures you would implement in the first 90 days to strengthen your institution\'s compliance program in response to this situation.',
      fr: 'Votre juridiction vient d\'être placée sur la « liste grise » du GAFI en raison de déficiences stratégiques dans son régime LCB-FT. En tant que Responsable de la Conformité d\'un établissement financier réglementé, le régulateur vous demande un plan d\'action immédiat.\n\nDécrivez les mesures concrètes que vous mettriez en œuvre dans les 90 premiers jours pour renforcer le programme de conformité de votre établissement face à cette situation.',
    },
    rubric: {
      es: 'Evaluar: (1) Conocimiento de las implicaciones de estar en lista gris del GAFI, (2) Revisión y fortalecimiento de la evaluación de riesgos institucional, (3) Reforzamiento de procesos de DDC/KYC, (4) Actualización de matrices de riesgo, (5) Plan de capacitación urgente, (6) Comunicación con la alta dirección y el directorio, (7) Coordinación con el regulador y la UIF.',
      en: 'Evaluate: (1) Knowledge of FATF grey list implications, (2) Review and strengthening of institutional risk assessment, (3) Enhancement of CDD/KYC processes, (4) Update of risk matrices, (5) Urgent training plan, (6) Communication with senior management and board, (7) Coordination with regulator and FIU.',
      fr: 'Évaluer : (1) Connaissance des implications de la liste grise du GAFI, (2) Révision et renforcement de l\'évaluation des risques institutionnels, (3) Renforcement des processus de CDD/KYC, (4) Mise à jour des matrices de risque, (5) Plan de formation urgent, (6) Communication avec la direction et le conseil, (7) Coordination avec le régulateur et la CRF.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 2,
    isActive: true,
  },

  // --- KYC / Customer Due Diligence ---
  {
    id: 'aml-kyc-01',
    profileId: 'aml-compliance-officer',
    categoryId: 'aml-professional',
    competencyId: 'kyc-cdd',
    type: 'multiple-choice',
    content: {
      es: '¿En cuál de los siguientes casos se debe aplicar Debida Diligencia Reforzada (DDR/EDD) obligatoriamente según las recomendaciones del GAFI?',
      en: 'In which of the following cases must Enhanced Due Diligence (EDD) be mandatorily applied according to FATF recommendations?',
      fr: 'Dans lequel des cas suivants la Diligence Renforcée (DR/EDD) doit-elle être obligatoirement appliquée selon les recommandations du GAFI ?',
    },
    options: [
      { id: 'a', text: { es: 'Clientes con transacciones superiores a USD 5,000', en: 'Clients with transactions exceeding USD 5,000', fr: 'Clients avec des transactions supérieures à 5 000 USD' }, value: 20 },
      { id: 'b', text: { es: 'Personas Expuestas Políticamente (PEP) y sus familiares cercanos', en: 'Politically Exposed Persons (PEPs) and their close family members', fr: 'Personnes Politiquement Exposées (PPE) et leurs proches' }, value: 100 },
      { id: 'c', text: { es: 'Todos los clientes nuevos sin excepción', en: 'All new clients without exception', fr: 'Tous les nouveaux clients sans exception' }, value: 10 },
      { id: 'd', text: { es: 'Solo clientes corporativos con más de 50 empleados', en: 'Only corporate clients with more than 50 employees', fr: 'Uniquement les clients corporatifs de plus de 50 employés' }, value: 5 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 3,
    isActive: true,
  },
  {
    id: 'aml-kyc-02',
    profileId: 'aml-compliance-officer',
    categoryId: 'aml-professional',
    competencyId: 'kyc-cdd',
    type: 'open-text',
    content: {
      es: 'Explique el proceso completo de identificación del beneficiario final (UBO - Ultimate Beneficial Owner) para una estructura corporativa compleja que involucra una sociedad holding con subsidiarias en tres jurisdicciones diferentes, incluyendo una jurisdicción considerada de alto riesgo.',
      en: 'Explain the complete process of identifying the Ultimate Beneficial Owner (UBO) for a complex corporate structure involving a holding company with subsidiaries in three different jurisdictions, including one considered high-risk.',
      fr: 'Expliquez le processus complet d\'identification du Bénéficiaire Effectif (BE) pour une structure corporative complexe impliquant une société holding avec des filiales dans trois juridictions différentes, dont une considérée à haut risque.',
    },
    rubric: {
      es: 'Evaluar: (1) Conocimiento del concepto de beneficiario final y umbrales de propiedad (25% GAFI), (2) Proceso de obtención de documentación corporativa (escrituras, actas, registros), (3) Técnicas de penetración de estructuras complejas (cadenas de propiedad), (4) Tratamiento especial para la jurisdicción de alto riesgo, (5) Fuentes de verificación independiente, (6) Documentación y registro del proceso.',
      en: 'Evaluate: (1) Knowledge of UBO concept and ownership thresholds (25% FATF), (2) Process of obtaining corporate documentation (deeds, minutes, registries), (3) Techniques for penetrating complex structures (ownership chains), (4) Special treatment for high-risk jurisdiction, (5) Independent verification sources, (6) Documentation and record-keeping.',
      fr: 'Évaluer : (1) Connaissance du concept de bénéficiaire effectif et seuils de propriété (25% GAFI), (2) Processus d\'obtention de la documentation corporative (actes, procès-verbaux, registres), (3) Techniques de pénétration des structures complexes (chaînes de propriété), (4) Traitement spécial pour la juridiction à haut risque, (5) Sources de vérification indépendantes, (6) Documentation et tenue des registres.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 4,
    isActive: true,
  },

  // --- Suspicious Activity Detection and Reporting ---
  {
    id: 'aml-sar-01',
    profileId: 'aml-compliance-officer',
    categoryId: 'aml-professional',
    competencyId: 'suspicious-activity-reporting',
    type: 'scenario',
    content: {
      es: 'Un cliente empresarial de bajo perfil de riesgo, con una facturación histórica promedio de USD 50,000 mensuales, comienza a recibir transferencias internacionales por USD 500,000 mensuales desde tres países diferentes durante los últimos dos meses. El cliente justifica las transacciones como "nuevos contratos de exportación" pero no puede proporcionar la documentación de respaldo inmediatamente.\n\n¿Cómo procedería usted ante esta situación? Detalle cada paso del proceso.',
      en: 'A low-risk business client with an average historical turnover of USD 50,000 per month begins receiving international transfers of USD 500,000 per month from three different countries over the past two months. The client justifies the transactions as "new export contracts" but cannot provide supporting documentation immediately.\n\nHow would you proceed in this situation? Detail each step of the process.',
      fr: 'Un client entreprise à faible profil de risque, avec un chiffre d\'affaires historique moyen de 50 000 USD par mois, commence à recevoir des virements internationaux de 500 000 USD par mois provenant de trois pays différents au cours des deux derniers mois. Le client justifie les transactions comme de « nouveaux contrats d\'exportation » mais ne peut pas fournir la documentation justificative immédiatement.\n\nComment procéderiez-vous dans cette situation ? Détaillez chaque étape du processus.',
    },
    rubric: {
      es: 'Evaluar: (1) Identificación correcta de señales de alerta (cambio abrupto de perfil transaccional, múltiples jurisdicciones), (2) Análisis del perfil transaccional histórico vs. actual, (3) Solicitud formal de documentación de respaldo con plazo definido, (4) Decisión sobre la presentación del ROS a la UIF, (5) Medidas de mitigación inmediatas, (6) Documentación del análisis, (7) Independencia del proceso (no alertar al cliente sobre la investigación - tipping off).',
      en: 'Evaluate: (1) Correct identification of red flags (abrupt change in transaction profile, multiple jurisdictions), (2) Analysis of historical vs. current transaction profile, (3) Formal request for supporting documentation with defined deadline, (4) Decision on filing the SAR with the FIU, (5) Immediate mitigation measures, (6) Documentation of the analysis, (7) Process independence (not tipping off the client about the investigation).',
      fr: 'Évaluer : (1) Identification correcte des signaux d\'alerte (changement brusque du profil transactionnel, juridictions multiples), (2) Analyse du profil transactionnel historique vs actuel, (3) Demande formelle de documentation justificative avec délai défini, (4) Décision sur le dépôt de la DS auprès de la CRF, (5) Mesures d\'atténuation immédiates, (6) Documentation de l\'analyse, (7) Indépendance du processus (ne pas alerter le client sur l\'enquête - tipping off).',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 5,
    isActive: true,
  },
  {
    id: 'aml-sar-02',
    profileId: 'aml-compliance-officer',
    categoryId: 'aml-professional',
    competencyId: 'suspicious-activity-reporting',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál de las siguientes situaciones constituye una violación del principio de "no alertamiento" (tipping off) según las normas PLAFT?',
      en: 'Which of the following situations constitutes a violation of the "tipping off" principle according to AML/CFT regulations?',
      fr: 'Laquelle des situations suivantes constitue une violation du principe de « tipping off » (non-divulgation) selon les normes LCB-FT ?',
    },
    options: [
      { id: 'a', text: { es: 'Informar al cliente que se ha presentado un ROS sobre sus transacciones', en: 'Informing the client that a SAR has been filed about their transactions', fr: 'Informer le client qu\'une DS a été déposée concernant ses transactions' }, value: 100 },
      { id: 'b', text: { es: 'Solicitar documentación adicional al cliente como parte de la DDC', en: 'Requesting additional documentation from the client as part of CDD', fr: 'Demander une documentation supplémentaire au client dans le cadre de la CDD' }, value: 10 },
      { id: 'c', text: { es: 'Consultar con el área legal interna sobre una transacción sospechosa', en: 'Consulting with the internal legal area about a suspicious transaction', fr: 'Consulter le service juridique interne sur une transaction suspecte' }, value: 5 },
      { id: 'd', text: { es: 'Reportar a la alta dirección sobre el estado del programa de cumplimiento', en: 'Reporting to senior management on the status of the compliance program', fr: 'Rendre compte à la direction sur l\'état du programme de conformité' }, value: 5 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 6,
    isActive: true,
  },

  // --- Risk Assessment Methodology ---
  {
    id: 'aml-risk-01',
    profileId: 'aml-compliance-officer',
    categoryId: 'aml-professional',
    competencyId: 'risk-assessment-methodology',
    type: 'multiple-choice',
    content: {
      es: 'En el enfoque basado en riesgo (EBR) recomendado por el GAFI, ¿cuáles son los factores principales que deben considerarse en la evaluación de riesgo LA/FT a nivel de cliente?',
      en: 'In the risk-based approach (RBA) recommended by FATF, what are the main factors that must be considered in the ML/TF risk assessment at the client level?',
      fr: 'Dans l\'approche fondée sur les risques (AFR) recommandée par le GAFI, quels sont les principaux facteurs à considérer dans l\'évaluation des risques BC/FT au niveau du client ?',
    },
    options: [
      { id: 'a', text: { es: 'Solo el monto de las transacciones y la antigüedad del cliente', en: 'Only the amount of transactions and the client\'s tenure', fr: 'Uniquement le montant des transactions et l\'ancienneté du client' }, value: 10 },
      { id: 'b', text: { es: 'Cliente (tipo, actividad, PEP), producto/servicio, canal de distribución y jurisdicción geográfica', en: 'Client (type, activity, PEP), product/service, distribution channel, and geographic jurisdiction', fr: 'Client (type, activité, PPE), produit/service, canal de distribution et juridiction géographique' }, value: 100 },
      { id: 'c', text: { es: 'El historial crediticio y los estados financieros del cliente', en: 'The client\'s credit history and financial statements', fr: 'L\'historique de crédit et les états financiers du client' }, value: 15 },
      { id: 'd', text: { es: 'La industria del cliente y el tamaño de la empresa únicamente', en: 'The client\'s industry and company size only', fr: 'L\'industrie du client et la taille de l\'entreprise uniquement' }, value: 25 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 7,
    isActive: true,
  },

  // --- Transaction Monitoring ---
  {
    id: 'aml-mon-01',
    profileId: 'aml-compliance-officer',
    categoryId: 'aml-professional',
    competencyId: 'transaction-monitoring',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál de las siguientes NO es una señal de alerta (red flag) típica en el monitoreo de transacciones para la prevención de lavado de activos?',
      en: 'Which of the following is NOT a typical red flag in transaction monitoring for money laundering prevention?',
      fr: 'Lequel des éléments suivants n\'est PAS un signal d\'alerte typique dans la surveillance des transactions pour la prévention du blanchiment de capitaux ?',
    },
    options: [
      { id: 'a', text: { es: 'Structuring (fraccionamiento de transacciones para evitar umbrales de reporte)', en: 'Structuring (splitting transactions to avoid reporting thresholds)', fr: 'Structuration (fractionnement de transactions pour éviter les seuils de déclaration)' }, value: 5 },
      { id: 'b', text: { es: 'Transacciones con países de la lista gris o negra del GAFI', en: 'Transactions with FATF grey or black list countries', fr: 'Transactions avec des pays de la liste grise ou noire du GAFI' }, value: 5 },
      { id: 'c', text: { es: 'Un cliente que realiza depósitos regulares correspondientes a su nómina mensual', en: 'A client making regular deposits corresponding to their monthly payroll', fr: 'Un client effectuant des dépôts réguliers correspondant à sa paie mensuelle' }, value: 100 },
      { id: 'd', text: { es: 'Uso frecuente de terceros para realizar transacciones sin justificación clara', en: 'Frequent use of third parties to conduct transactions without clear justification', fr: 'Utilisation fréquente de tiers pour effectuer des transactions sans justification claire' }, value: 5 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 8,
    isActive: true,
  },
  {
    id: 'aml-mon-02',
    profileId: 'aml-compliance-officer',
    categoryId: 'aml-professional',
    competencyId: 'transaction-monitoring',
    type: 'open-text',
    content: {
      es: 'Describa cómo diseñaría un sistema de monitoreo transaccional para una entidad financiera que ofrece banca comercial, seguros y transferencias internacionales. Incluya los tipos de alertas, umbrales, frecuencia de revisión y proceso de escalamiento.',
      en: 'Describe how you would design a transaction monitoring system for a financial institution that offers commercial banking, insurance, and international transfers. Include alert types, thresholds, review frequency, and escalation process.',
      fr: 'Décrivez comment vous concevriez un système de surveillance transactionnelle pour un établissement financier offrant la banque commerciale, l\'assurance et les transferts internationaux. Incluez les types d\'alertes, les seuils, la fréquence de révision et le processus d\'escalade.',
    },
    rubric: {
      es: 'Evaluar: (1) Segmentación de alertas por tipo de producto (banca, seguros, transferencias), (2) Definición de umbrales basados en riesgo (no solo montos fijos), (3) Reglas de detección de patrones (structuring, layering, round-tripping), (4) Frecuencia de revisión proporcional al riesgo, (5) Proceso de escalamiento claro (analista → oficial de cumplimiento → comité → UIF), (6) Métricas de eficacia del sistema (tasa de falsos positivos, tiempo de resolución).',
      en: 'Evaluate: (1) Alert segmentation by product type (banking, insurance, transfers), (2) Risk-based threshold definition (not just fixed amounts), (3) Pattern detection rules (structuring, layering, round-tripping), (4) Review frequency proportional to risk, (5) Clear escalation process (analyst → compliance officer → committee → FIU), (6) System effectiveness metrics (false positive rate, resolution time).',
      fr: 'Évaluer : (1) Segmentation des alertes par type de produit (banque, assurance, transferts), (2) Définition de seuils basés sur les risques (pas uniquement des montants fixes), (3) Règles de détection de schémas (structuration, stratification, round-tripping), (4) Fréquence de révision proportionnelle au risque, (5) Processus d\'escalade clair (analyste → responsable conformité → comité → CRF), (6) Métriques d\'efficacité du système (taux de faux positifs, temps de résolution).',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 9,
    isActive: true,
  },
];

const amlSoftSkillsQuestions: Question[] = [
  // --- Ethics and Integrity ---
  {
    id: 'aml-eth-01',
    profileId: 'aml-compliance-officer',
    categoryId: 'aml-soft-skills',
    competencyId: 'aml-ethics-integrity',
    type: 'scenario',
    content: {
      es: 'El director comercial de su empresa, quien tiene una relación estrecha con el CEO, le solicita que "agilice" la aprobación de un cliente corporativo de alto valor que presenta inconsistencias en su documentación KYC. El director argumenta que perder este cliente significaría una pérdida millonaria y que "el riesgo es bajo". Usted ha identificado que el beneficiario final de la empresa está vinculado a una persona en una lista de sanciones.\n\n¿Cómo manejaría esta situación?',
      en: 'The commercial director of your company, who has a close relationship with the CEO, asks you to "expedite" the approval of a high-value corporate client that presents inconsistencies in its KYC documentation. The director argues that losing this client would mean a multimillion-dollar loss and that "the risk is low." You have identified that the company\'s beneficial owner is linked to a person on a sanctions list.\n\nHow would you handle this situation?',
      fr: 'Le directeur commercial de votre entreprise, qui a une relation étroite avec le PDG, vous demande d\'« accélérer » l\'approbation d\'un client corporatif de grande valeur qui présente des incohérences dans sa documentation KYC. Le directeur argue que perdre ce client signifierait une perte de plusieurs millions et que « le risque est faible ». Vous avez identifié que le bénéficiaire effectif de l\'entreprise est lié à une personne figurant sur une liste de sanctions.\n\nComment géreriez-vous cette situation ?',
    },
    rubric: {
      es: 'Evaluar: (1) Firmeza ética sin ceder a presiones comerciales, (2) Documentación de la presión recibida, (3) Escalamiento apropiado (comité de cumplimiento, directorio, regulador si es necesario), (4) Rechazo fundamentado de la relación comercial por coincidencia en lista de sanciones, (5) Conocimiento de que las sanciones son de cumplimiento obligatorio sin excepciones, (6) Protección personal ante represalias.',
      en: 'Evaluate: (1) Ethical firmness without yielding to commercial pressure, (2) Documentation of the pressure received, (3) Appropriate escalation (compliance committee, board, regulator if necessary), (4) Well-founded rejection of the business relationship due to sanctions list match, (5) Knowledge that sanctions are mandatory with no exceptions, (6) Personal protection against retaliation.',
      fr: 'Évaluer : (1) Fermeté éthique sans céder aux pressions commerciales, (2) Documentation de la pression reçue, (3) Escalade appropriée (comité de conformité, conseil, régulateur si nécessaire), (4) Rejet fondé de la relation commerciale pour correspondance sur liste de sanctions, (5) Connaissance que les sanctions sont obligatoires sans exception, (6) Protection personnelle contre les représailles.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 1,
    isActive: true,
  },
  {
    id: 'aml-eth-02',
    profileId: 'aml-compliance-officer',
    categoryId: 'aml-soft-skills',
    competencyId: 'aml-ethics-integrity',
    type: 'scale',
    content: {
      es: '¿Qué tan dispuesto está a rechazar una operación comercialmente rentable si identifica riesgos de LA/FT que no pueden ser mitigados adecuadamente?',
      en: 'How willing are you to reject a commercially profitable operation if you identify ML/TF risks that cannot be adequately mitigated?',
      fr: 'Dans quelle mesure êtes-vous disposé à rejeter une opération commercialement rentable si vous identifiez des risques de BC/FT qui ne peuvent pas être atténués de manière adéquate ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada dispuesto', en: 'Not willing at all', fr: 'Pas du tout disposé' },
      max: { es: 'Totalmente dispuesto', en: 'Fully willing', fr: 'Tout à fait disposé' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },

  // --- Communication with Regulators and Senior Management ---
  {
    id: 'aml-comm-01',
    profileId: 'aml-compliance-officer',
    categoryId: 'aml-soft-skills',
    competencyId: 'aml-communication',
    type: 'scenario',
    content: {
      es: 'La Unidad de Inteligencia Financiera (UIF) le ha enviado un requerimiento de información sobre un cliente que tiene cuentas activas en su institución. El requerimiento tiene un plazo de 48 horas. Sin embargo, el sistema de información de la institución está en mantenimiento y la documentación física está en un archivo externo.\n\nDescriba cómo gestionaría esta situación con la UIF, la alta dirección y las áreas internas involucradas.',
      en: 'The Financial Intelligence Unit (FIU) has sent you an information request about a client with active accounts at your institution. The request has a 48-hour deadline. However, the institution\'s information system is under maintenance and physical documentation is in an external archive.\n\nDescribe how you would manage this situation with the FIU, senior management, and the internal areas involved.',
      fr: 'La Cellule de Renseignement Financier (CRF) vous a envoyé une demande d\'information sur un client ayant des comptes actifs dans votre établissement. La demande a un délai de 48 heures. Cependant, le système d\'information de l\'établissement est en maintenance et la documentation physique est dans des archives externes.\n\nDécrivez comment vous géreriez cette situation avec la CRF, la direction et les services internes concernés.',
    },
    rubric: {
      es: 'Evaluar: (1) Comunicación inmediata con la UIF sobre las limitaciones técnicas, (2) Solicitud formal de prórroga si es necesario, (3) Coordinación con TI para acceso urgente a datos, (4) Gestión del archivo externo para recuperación de documentos, (5) Informe a la alta dirección sobre el requerimiento, (6) Priorización y plan de acción con tiempos específicos.',
      en: 'Evaluate: (1) Immediate communication with the FIU about technical limitations, (2) Formal extension request if necessary, (3) Coordination with IT for urgent data access, (4) External archive management for document retrieval, (5) Report to senior management about the request, (6) Prioritization and action plan with specific timelines.',
      fr: 'Évaluer : (1) Communication immédiate avec la CRF sur les limitations techniques, (2) Demande formelle de prolongation si nécessaire, (3) Coordination avec l\'informatique pour un accès urgent aux données, (4) Gestion des archives externes pour la récupération des documents, (5) Rapport à la direction sur la demande, (6) Priorisation et plan d\'action avec des délais spécifiques.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },
  {
    id: 'aml-comm-02',
    profileId: 'aml-compliance-officer',
    categoryId: 'aml-soft-skills',
    competencyId: 'aml-communication',
    type: 'multiple-choice',
    content: {
      es: '¿Con qué frecuencia mínima debe el Oficial de Cumplimiento reportar al Directorio/Junta Directiva sobre el estado del programa PLAFT según las mejores prácticas internacionales?',
      en: 'What is the minimum frequency with which the Compliance Officer should report to the Board of Directors on the status of the AML/CFT program according to international best practices?',
      fr: 'Quelle est la fréquence minimale à laquelle le Responsable de la Conformité doit rendre compte au Conseil d\'Administration de l\'état du programme LCB-FT selon les meilleures pratiques internationales ?',
    },
    options: [
      { id: 'a', text: { es: 'Solo cuando ocurra un incidente significativo', en: 'Only when a significant incident occurs', fr: 'Uniquement lorsqu\'un incident significatif survient' }, value: 10 },
      { id: 'b', text: { es: 'Anualmente, junto con la memoria del programa', en: 'Annually, along with the program report', fr: 'Annuellement, avec le rapport du programme' }, value: 30 },
      { id: 'c', text: { es: 'Al menos trimestralmente, con informes escritos y presentaciones', en: 'At least quarterly, with written reports and presentations', fr: 'Au moins trimestriellement, avec des rapports écrits et des présentations' }, value: 100 },
      { id: 'd', text: { es: 'Mensualmente, pero solo de forma verbal', en: 'Monthly, but only verbally', fr: 'Mensuellement, mais uniquement verbalement' }, value: 40 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },

  // --- Training Capacity ---
  {
    id: 'aml-train-01',
    profileId: 'aml-compliance-officer',
    categoryId: 'aml-soft-skills',
    competencyId: 'aml-training-capacity',
    type: 'open-text',
    content: {
      es: 'Diseñe un plan de capacitación anual en PLAFT para una institución financiera con 500 empleados distribuidos en oficinas centrales, 10 sucursales y un canal digital. Considere que los empleados tienen diferentes niveles de exposición al riesgo LA/FT según sus funciones.',
      en: 'Design an annual AML/CFT training plan for a financial institution with 500 employees distributed across headquarters, 10 branches, and a digital channel. Consider that employees have different levels of ML/TF risk exposure based on their roles.',
      fr: 'Concevez un plan de formation annuel en LCB-FT pour un établissement financier de 500 employés répartis entre le siège, 10 agences et un canal numérique. Considérez que les employés ont différents niveaux d\'exposition au risque BC/FT selon leurs fonctions.',
    },
    rubric: {
      es: 'Evaluar: (1) Segmentación por nivel de riesgo (primera línea, segunda línea, alta dirección, directorio), (2) Contenidos diferenciados por función, (3) Metodología mixta (presencial, virtual, e-learning), (4) Frecuencia adecuada (inducción + refrescos periódicos), (5) Inclusión de casos prácticos y tipologías actuales, (6) Mecanismos de evaluación de conocimiento, (7) Registro y evidencia para el regulador.',
      en: 'Evaluate: (1) Segmentation by risk level (first line, second line, senior management, board), (2) Differentiated content by function, (3) Mixed methodology (in-person, virtual, e-learning), (4) Appropriate frequency (induction + periodic refreshers), (5) Inclusion of practical cases and current typologies, (6) Knowledge assessment mechanisms, (7) Record-keeping and evidence for the regulator.',
      fr: 'Évaluer : (1) Segmentation par niveau de risque (première ligne, deuxième ligne, direction, conseil), (2) Contenus différenciés par fonction, (3) Méthodologie mixte (présentiel, virtuel, e-learning), (4) Fréquence appropriée (induction + rappels périodiques), (5) Inclusion de cas pratiques et typologies actuelles, (6) Mécanismes d\'évaluation des connaissances, (7) Tenue de registres et preuves pour le régulateur.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 5,
    isActive: true,
  },
  {
    id: 'aml-train-02',
    profileId: 'aml-compliance-officer',
    categoryId: 'aml-soft-skills',
    competencyId: 'aml-training-capacity',
    type: 'scale',
    content: {
      es: '¿Qué tan seguro se siente explicando conceptos complejos de PLAFT (como tipologías de lavado, structuring o trade-based money laundering) a empleados sin formación técnica en cumplimiento?',
      en: 'How confident do you feel explaining complex AML/CFT concepts (such as money laundering typologies, structuring, or trade-based money laundering) to employees without technical compliance training?',
      fr: 'Dans quelle mesure vous sentez-vous confiant pour expliquer des concepts complexes de LCB-FT (tels que les typologies de blanchiment, la structuration ou le blanchiment basé sur le commerce) à des employés sans formation technique en conformité ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada seguro', en: 'Not confident at all', fr: 'Pas du tout confiant' },
      max: { es: 'Muy seguro', en: 'Very confident', fr: 'Très confiant' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 6,
    isActive: true,
  },
];

const amlReadinessQuestions: Question[] = [
  // --- Regulatory Adaptability ---
  {
    id: 'aml-radapt-01',
    profileId: 'aml-compliance-officer',
    categoryId: 'aml-readiness',
    competencyId: 'aml-regulatory-adaptability',
    type: 'multiple-choice',
    content: {
      es: 'El regulador local ha emitido una nueva circular que modifica sustancialmente los requisitos de DDC para clientes de alto riesgo, con entrada en vigencia en 60 días. ¿Cuál debería ser su primera acción?',
      en: 'The local regulator has issued a new circular that substantially modifies CDD requirements for high-risk clients, effective in 60 days. What should be your first action?',
      fr: 'Le régulateur local a émis une nouvelle circulaire modifiant substantiellement les exigences de CDD pour les clients à haut risque, effective dans 60 jours. Quelle devrait être votre première action ?',
    },
    options: [
      { id: 'a', text: { es: 'Esperar a que el área legal emita su interpretación de la circular', en: 'Wait for the legal area to issue its interpretation of the circular', fr: 'Attendre que le service juridique émette son interprétation de la circulaire' }, value: 15 },
      { id: 'b', text: { es: 'Realizar un análisis de brechas (gap analysis) entre los requisitos actuales y los nuevos, y presentar un plan de implementación a la alta dirección', en: 'Perform a gap analysis between current and new requirements, and present an implementation plan to senior management', fr: 'Effectuer une analyse des écarts (gap analysis) entre les exigences actuelles et les nouvelles, et présenter un plan de mise en œuvre à la direction' }, value: 100 },
      { id: 'c', text: { es: 'Actualizar inmediatamente todos los formularios KYC sin un análisis previo', en: 'Immediately update all KYC forms without a prior analysis', fr: 'Mettre à jour immédiatement tous les formulaires KYC sans analyse préalable' }, value: 20 },
      { id: 'd', text: { es: 'Enviar la circular a todo el personal para que la lean por su cuenta', en: 'Send the circular to all staff so they can read it on their own', fr: 'Envoyer la circulaire à tout le personnel pour qu\'il la lise par lui-même' }, value: 5 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'aml-radapt-02',
    profileId: 'aml-compliance-officer',
    categoryId: 'aml-readiness',
    competencyId: 'aml-regulatory-adaptability',
    type: 'scenario',
    content: {
      es: 'Su país ha aprobado una nueva ley que extiende las obligaciones PLAFT a los Proveedores de Servicios de Activos Virtuales (PSAV/VASP). Su institución financiera ha comenzado a ofrecer servicios de custodia de criptoactivos hace 6 meses sin haber actualizado su programa de cumplimiento para cubrir estos nuevos servicios.\n\nDescriba el plan de acción que implementaría para poner en cumplimiento esta nueva línea de negocio.',
      en: 'Your country has passed a new law extending AML/CFT obligations to Virtual Asset Service Providers (VASPs). Your financial institution started offering crypto-asset custody services 6 months ago without having updated its compliance program to cover these new services.\n\nDescribe the action plan you would implement to bring this new business line into compliance.',
      fr: 'Votre pays a adopté une nouvelle loi étendant les obligations LCB-FT aux Prestataires de Services sur Actifs Virtuels (PSAV). Votre établissement financier a commencé à offrir des services de conservation de cryptoactifs il y a 6 mois sans avoir mis à jour son programme de conformité pour couvrir ces nouveaux services.\n\nDécrivez le plan d\'action que vous mettriez en œuvre pour mettre cette nouvelle ligne d\'activité en conformité.',
    },
    rubric: {
      es: 'Evaluar: (1) Comprensión de la "travel rule" aplicada a activos virtuales (Recomendación 16 del GAFI), (2) Adaptación de la evaluación de riesgo para incluir riesgos específicos de criptoactivos, (3) Actualización de políticas y procedimientos KYC para clientes de activos virtuales, (4) Implementación de herramientas de blockchain analytics, (5) Capacitación especializada del personal, (6) Comunicación con el regulador sobre el plan de remediación, (7) Evaluación de la necesidad de licencias adicionales.',
      en: 'Evaluate: (1) Understanding of the travel rule applied to virtual assets (FATF Recommendation 16), (2) Adaptation of risk assessment to include crypto-asset specific risks, (3) Update of KYC policies and procedures for virtual asset clients, (4) Implementation of blockchain analytics tools, (5) Specialized staff training, (6) Communication with regulator about remediation plan, (7) Assessment of need for additional licenses.',
      fr: 'Évaluer : (1) Compréhension de la « travel rule » appliquée aux actifs virtuels (Recommandation 16 du GAFI), (2) Adaptation de l\'évaluation des risques pour inclure les risques spécifiques aux cryptoactifs, (3) Mise à jour des politiques et procédures KYC pour les clients d\'actifs virtuels, (4) Mise en œuvre d\'outils d\'analytique blockchain, (5) Formation spécialisée du personnel, (6) Communication avec le régulateur sur le plan de remédiation, (7) Évaluation du besoin de licences supplémentaires.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 2,
    isActive: true,
  },

  // --- Continuous AML/CFT Learning ---
  {
    id: 'aml-learn-01',
    profileId: 'aml-compliance-officer',
    categoryId: 'aml-readiness',
    competencyId: 'aml-continuous-learning',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál de las siguientes es una tipología emergente de lavado de activos que ha ganado relevancia en los últimos años según informes del GAFI?',
      en: 'Which of the following is an emerging money laundering typology that has gained relevance in recent years according to FATF reports?',
      fr: 'Laquelle des typologies émergentes de blanchiment de capitaux suivantes a gagné en pertinence ces dernières années selon les rapports du GAFI ?',
    },
    options: [
      { id: 'a', text: { es: 'Lavado a través de activos virtuales y finanzas descentralizadas (DeFi)', en: 'Laundering through virtual assets and decentralized finance (DeFi)', fr: 'Blanchiment via les actifs virtuels et la finance décentralisée (DeFi)' }, value: 100 },
      { id: 'b', text: { es: 'Uso exclusivo de efectivo en transacciones bancarias tradicionales', en: 'Exclusive use of cash in traditional banking transactions', fr: 'Utilisation exclusive d\'espèces dans les transactions bancaires traditionnelles' }, value: 20 },
      { id: 'c', text: { es: 'Apertura de cuentas de ahorro a nombre propio', en: 'Opening savings accounts in one\'s own name', fr: 'Ouverture de comptes d\'épargne en son propre nom' }, value: 5 },
      { id: 'd', text: { es: 'Compra de bonos gubernamentales con fondos verificados', en: 'Purchasing government bonds with verified funds', fr: 'Achat d\'obligations gouvernementales avec des fonds vérifiés' }, value: 5 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 3,
    isActive: true,
  },
  {
    id: 'aml-learn-02',
    profileId: 'aml-compliance-officer',
    categoryId: 'aml-readiness',
    competencyId: 'aml-continuous-learning',
    type: 'scale',
    content: {
      es: '¿Con qué frecuencia consulta publicaciones especializadas en PLAFT (informes del GAFI, guías de GAFILAT, boletines de la UIF, publicaciones de Wolfsberg Group)?',
      en: 'How often do you consult specialized AML/CFT publications (FATF reports, GAFILAT guides, FIU bulletins, Wolfsberg Group publications)?',
      fr: 'À quelle fréquence consultez-vous des publications spécialisées en LCB-FT (rapports du GAFI, guides du GAFILAT, bulletins de la CRF, publications du Wolfsberg Group) ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nunca', en: 'Never', fr: 'Jamais' },
      max: { es: 'Semanalmente', en: 'Weekly', fr: 'Hebdomadairement' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },

  // --- RegTech Technology Adoption ---
  {
    id: 'aml-tech-01',
    profileId: 'aml-compliance-officer',
    categoryId: 'aml-readiness',
    competencyId: 'aml-tech-adoption',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál de las siguientes tecnologías RegTech tiene mayor impacto en la eficiencia del monitoreo de transacciones para la prevención de LA/FT?',
      en: 'Which of the following RegTech technologies has the greatest impact on the efficiency of transaction monitoring for ML/TF prevention?',
      fr: 'Laquelle des technologies RegTech suivantes a le plus grand impact sur l\'efficacité de la surveillance des transactions pour la prévention du BC/FT ?',
    },
    options: [
      { id: 'a', text: { es: 'Hojas de cálculo compartidas con macros avanzadas', en: 'Shared spreadsheets with advanced macros', fr: 'Tableurs partagés avec des macros avancées' }, value: 5 },
      { id: 'b', text: { es: 'Inteligencia artificial y machine learning para detección de patrones anómalos y reducción de falsos positivos', en: 'Artificial intelligence and machine learning for anomalous pattern detection and false positive reduction', fr: 'Intelligence artificielle et apprentissage automatique pour la détection de schémas anormaux et la réduction des faux positifs' }, value: 100 },
      { id: 'c', text: { es: 'Correo electrónico encriptado para comunicación con la UIF', en: 'Encrypted email for communication with the FIU', fr: 'Courrier électronique chiffré pour la communication avec la CRF' }, value: 15 },
      { id: 'd', text: { es: 'Sistemas de videovigilancia en sucursales', en: 'Video surveillance systems in branches', fr: 'Systèmes de vidéosurveillance dans les agences' }, value: 5 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
  {
    id: 'aml-tech-02',
    profileId: 'aml-compliance-officer',
    categoryId: 'aml-readiness',
    competencyId: 'aml-tech-adoption',
    type: 'open-text',
    content: {
      es: 'Su institución actualmente utiliza un sistema de monitoreo transaccional basado en reglas estáticas que genera una alta tasa de falsos positivos (85%). La alta dirección le ha autorizado evaluar la implementación de una solución basada en inteligencia artificial. Describa los criterios de evaluación que utilizaría para seleccionar el proveedor, los riesgos de la implementación y cómo garantizaría la explicabilidad del modelo ante el regulador.',
      en: 'Your institution currently uses a static rule-based transaction monitoring system that generates a high false positive rate (85%). Senior management has authorized you to evaluate the implementation of an AI-based solution. Describe the evaluation criteria you would use to select the vendor, the implementation risks, and how you would ensure model explainability to the regulator.',
      fr: 'Votre établissement utilise actuellement un système de surveillance transactionnelle basé sur des règles statiques générant un taux élevé de faux positifs (85%). La direction vous a autorisé à évaluer la mise en œuvre d\'une solution basée sur l\'intelligence artificielle. Décrivez les critères d\'évaluation que vous utiliseriez pour sélectionner le fournisseur, les risques de mise en œuvre et comment vous garantiriez l\'explicabilité du modèle au régulateur.',
    },
    rubric: {
      es: 'Evaluar: (1) Criterios de selección del proveedor (precisión, reducción de falsos positivos, integración, cumplimiento de protección de datos), (2) Importancia de la explicabilidad del modelo (no "caja negra"), (3) Plan de transición y período de funcionamiento paralelo, (4) Validación del modelo con datos históricos, (5) Gobernanza del modelo (revisión periódica, reentrenamiento), (6) Documentación para el regulador sobre la metodología, (7) Gestión del cambio con los equipos de análisis.',
      en: 'Evaluate: (1) Vendor selection criteria (accuracy, false positive reduction, integration, data protection compliance), (2) Importance of model explainability (not a "black box"), (3) Transition plan and parallel running period, (4) Model validation with historical data, (5) Model governance (periodic review, retraining), (6) Documentation for the regulator on methodology, (7) Change management with analysis teams.',
      fr: 'Évaluer : (1) Critères de sélection du fournisseur (précision, réduction des faux positifs, intégration, conformité à la protection des données), (2) Importance de l\'explicabilité du modèle (pas une « boîte noire »), (3) Plan de transition et période de fonctionnement en parallèle, (4) Validation du modèle avec des données historiques, (5) Gouvernance du modèle (révision périodique, réentraînement), (6) Documentation pour le régulateur sur la méthodologie, (7) Gestion du changement avec les équipes d\'analyse.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 6,
    isActive: true,
  },
];

// ============================================================================
// COLLECTIONS OFFICER QUESTIONS
// ============================================================================

const collectionsProfessionalQuestions: Question[] = [
  // --- Collections Negotiation ---
  {
    id: 'co-neg-01',
    profileId: 'collections-officer',
    categoryId: 'collections-professional',
    competencyId: 'collections-negotiation',
    type: 'multiple-choice',
    content: {
      es: 'Un deudor le dice que no puede pagar el monto total adeudado pero tiene disposición de pagar una parte. ¿Cuál es la mejor estrategia?',
      en: 'A debtor tells you they cannot pay the full amount owed but are willing to pay a portion. What is the best strategy?',
      fr: 'Un débiteur vous dit qu\'il ne peut pas payer le montant total dû mais qu\'il est disposé à en payer une partie. Quelle est la meilleure stratégie ?',
    },
    options: [
      { id: 'a', text: { es: 'Rechazar cualquier pago parcial y exigir el monto total', en: 'Reject any partial payment and demand the full amount', fr: 'Refuser tout paiement partiel et exiger le montant total' }, value: 0 },
      { id: 'b', text: { es: 'Evaluar su capacidad de pago, proponer un plan de cuotas realista y documentar el acuerdo', en: 'Evaluate their ability to pay, propose a realistic installment plan, and document the agreement', fr: 'Évaluer sa capacité de paiement, proposer un plan de versements réaliste et documenter l\'accord' }, value: 100 },
      { id: 'c', text: { es: 'Aceptar cualquier monto que ofrezca sin negociar', en: 'Accept any amount offered without negotiating', fr: 'Accepter tout montant offert sans négocier' }, value: 30 },
      { id: 'd', text: { es: 'Transferir el caso a un supervisor sin intentar negociar', en: 'Transfer the case to a supervisor without attempting to negotiate', fr: 'Transférer le cas à un superviseur sans essayer de négocier' }, value: 20 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'co-neg-02',
    profileId: 'collections-officer',
    categoryId: 'collections-professional',
    competencyId: 'collections-negotiation',
    type: 'scenario',
    content: {
      es: 'Usted contacta a un deudor que tiene una cuenta vencida de 90 días por $5,000. El deudor explica que perdió su empleo hace dos meses y está buscando trabajo activamente. Tiene ahorros limitados pero quiere evitar que su cuenta pase a agencia de cobro externa.\n\nContexto: La política de la empresa permite planes de pago de hasta 12 meses y descuentos por pronto pago de hasta 10%.',
      en: 'You contact a debtor with a 90-day overdue account for $5,000. The debtor explains they lost their job two months ago and are actively looking for work. They have limited savings but want to avoid having their account sent to an external collection agency.\n\nContext: Company policy allows payment plans of up to 12 months and early payment discounts of up to 10%.',
      fr: 'Vous contactez un débiteur avec un compte en souffrance de 90 jours pour 5 000 $. Le débiteur explique qu\'il a perdu son emploi il y a deux mois et cherche activement du travail. Il a des économies limitées mais veut éviter que son compte soit envoyé à une agence de recouvrement externe.\n\nContexte : La politique de l\'entreprise autorise des plans de paiement jusqu\'à 12 mois et des remises pour paiement anticipé jusqu\'à 10 %.',
    },
    rubric: {
      es: 'Evaluar: (1) Empatía sin comprometer la recuperación, (2) Propuesta de plan de pago realista, (3) Uso de herramientas disponibles (descuentos, plazos), (4) Documentación del acuerdo, (5) Seguimiento propuesto.',
      en: 'Evaluate: (1) Empathy without compromising recovery, (2) Realistic payment plan proposal, (3) Use of available tools (discounts, terms), (4) Agreement documentation, (5) Proposed follow-up.',
      fr: 'Évaluer : (1) Empathie sans compromettre le recouvrement, (2) Proposition de plan de paiement réaliste, (3) Utilisation des outils disponibles (remises, délais), (4) Documentation de l\'accord, (5) Suivi proposé.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 2,
    isActive: true,
  },

  // --- Regulations & Compliance ---
  {
    id: 'co-reg-01',
    profileId: 'collections-officer',
    categoryId: 'collections-professional',
    competencyId: 'collections-regulations',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál de las siguientes prácticas está generalmente prohibida por las leyes de protección al consumidor en materia de cobranza?',
      en: 'Which of the following practices is generally prohibited by consumer protection laws regarding collections?',
      fr: 'Laquelle des pratiques suivantes est généralement interdite par les lois de protection des consommateurs en matière de recouvrement ?',
    },
    options: [
      { id: 'a', text: { es: 'Enviar un recordatorio de pago por escrito', en: 'Sending a written payment reminder', fr: 'Envoyer un rappel de paiement écrit' }, value: 0 },
      { id: 'b', text: { es: 'Llamar al deudor en horario laboral razonable', en: 'Calling the debtor during reasonable business hours', fr: 'Appeler le débiteur pendant les heures ouvrables raisonnables' }, value: 0 },
      { id: 'c', text: { es: 'Amenazar al deudor con acciones legales que la empresa no tiene intención de tomar', en: 'Threatening the debtor with legal actions the company has no intention of taking', fr: 'Menacer le débiteur d\'actions en justice que l\'entreprise n\'a pas l\'intention d\'entreprendre' }, value: 100 },
      { id: 'd', text: { es: 'Ofrecer un plan de pago al deudor', en: 'Offering a payment plan to the debtor', fr: 'Offrir un plan de paiement au débiteur' }, value: 0 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 3,
    isActive: true,
  },
  {
    id: 'co-reg-02',
    profileId: 'collections-officer',
    categoryId: 'collections-professional',
    competencyId: 'collections-regulations',
    type: 'open-text',
    content: {
      es: 'Explique qué información debe incluir obligatoriamente en una notificación de cobro escrita según las prácticas de cobranza justa, y qué derechos tiene el deudor al recibirla.',
      en: 'Explain what information must be included in a written collection notice according to fair debt collection practices, and what rights the debtor has upon receiving it.',
      fr: 'Expliquez quelles informations doivent obligatoirement figurer dans un avis de recouvrement écrit selon les pratiques de recouvrement équitable, et quels droits le débiteur a en le recevant.',
    },
    rubric: {
      es: 'Evaluar: (1) Monto adeudado, (2) Nombre del acreedor, (3) Derecho a disputar la deuda, (4) Plazo para disputar, (5) Información de contacto del cobrador.',
      en: 'Evaluate: (1) Amount owed, (2) Creditor name, (3) Right to dispute the debt, (4) Time period to dispute, (5) Collector contact information.',
      fr: 'Évaluer : (1) Montant dû, (2) Nom du créancier, (3) Droit de contester la dette, (4) Délai pour contester, (5) Coordonnées du recouvreur.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 4,
    isActive: true,
  },

  // --- Collection Management Systems ---
  {
    id: 'co-sys-01',
    profileId: 'collections-officer',
    categoryId: 'collections-professional',
    competencyId: 'collections-systems',
    type: 'scale',
    content: {
      es: '¿Qué tan competente se considera en el uso de sistemas de gestión de cobros (CRM de cobranza, software de cuentas por cobrar, marcadores automáticos)?',
      en: 'How competent do you consider yourself in using collection management systems (collections CRM, accounts receivable software, automatic dialers)?',
      fr: 'À quel point vous considérez-vous compétent dans l\'utilisation des systèmes de gestion de recouvrement (CRM de recouvrement, logiciel de comptes clients, composeurs automatiques) ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada competente', en: 'Not competent at all', fr: 'Pas du tout compétent' },
      max: { es: 'Muy competente', en: 'Very competent', fr: 'Très compétent' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },

  // --- Documentation & Record-Keeping ---
  {
    id: 'co-doc-01',
    profileId: 'collections-officer',
    categoryId: 'collections-professional',
    competencyId: 'collections-documentation',
    type: 'multiple-choice',
    content: {
      es: 'Después de una llamada de cobro, ¿qué información es más importante registrar en el sistema?',
      en: 'After a collection call, what information is most important to record in the system?',
      fr: 'Après un appel de recouvrement, quelle information est la plus importante à enregistrer dans le système ?',
    },
    options: [
      { id: 'a', text: { es: 'Solo si el deudor pagó o no', en: 'Only whether the debtor paid or not', fr: 'Seulement si le débiteur a payé ou non' }, value: 20 },
      { id: 'b', text: { es: 'La fecha, hora, resumen de la conversación, compromisos adquiridos, monto acordado y fecha de seguimiento', en: 'The date, time, conversation summary, commitments made, agreed amount, and follow-up date', fr: 'La date, l\'heure, le résumé de la conversation, les engagements pris, le montant convenu et la date de suivi' }, value: 100 },
      { id: 'c', text: { es: 'Solo el monto que prometió pagar', en: 'Only the amount they promised to pay', fr: 'Seulement le montant qu\'il a promis de payer' }, value: 30 },
      { id: 'd', text: { es: 'No es necesario registrar si no hubo pago', en: 'It is not necessary to record if there was no payment', fr: 'Il n\'est pas nécessaire d\'enregistrer s\'il n\'y a pas eu de paiement' }, value: 0 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 6,
    isActive: true,
  },
];

const collectionsSoftSkillsQuestions: Question[] = [
  // --- Persuasive Communication ---
  {
    id: 'co-comm-01',
    profileId: 'collections-officer',
    categoryId: 'collections-soft-skills',
    competencyId: 'collections-communication',
    type: 'scenario',
    content: {
      es: 'Llama a un deudor y este le responde de manera agresiva diciendo: "¡Dejen de acosarme! ¡Ya les dije que no tengo dinero!" Usted puede escuchar que la persona está genuinamente estresada.\n\nContexto: Es la tercera llamada este mes. La cuenta tiene 60 días de vencida.',
      en: 'You call a debtor and they respond aggressively saying: "Stop harassing me! I already told you I don\'t have money!" You can hear the person is genuinely stressed.\n\nContext: This is the third call this month. The account is 60 days overdue.',
      fr: 'Vous appelez un débiteur et il répond agressivement en disant : "Arrêtez de me harceler ! Je vous ai déjà dit que je n\'ai pas d\'argent !" Vous pouvez entendre que la personne est véritablement stressée.\n\nContexte : C\'est le troisième appel ce mois-ci. Le compte est en retard de 60 jours.',
    },
    rubric: {
      es: 'Evaluar: (1) Control emocional del cobrador, (2) Escucha activa y empatía, (3) Redirección profesional de la conversación, (4) Búsqueda de soluciones, (5) Manejo ético y respetuoso.',
      en: 'Evaluate: (1) Collector\'s emotional control, (2) Active listening and empathy, (3) Professional conversation redirection, (4) Solution-seeking, (5) Ethical and respectful handling.',
      fr: 'Évaluer : (1) Contrôle émotionnel du recouvreur, (2) Écoute active et empathie, (3) Redirection professionnelle de la conversation, (4) Recherche de solutions, (5) Traitement éthique et respectueux.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 1,
    isActive: true,
  },
  {
    id: 'co-comm-02',
    profileId: 'collections-officer',
    categoryId: 'collections-soft-skills',
    competencyId: 'collections-communication',
    type: 'multiple-choice',
    content: {
      es: 'Al contactar a un deudor por primera vez, ¿cuál es el enfoque de comunicación más efectivo?',
      en: 'When contacting a debtor for the first time, what is the most effective communication approach?',
      fr: 'Lorsque vous contactez un débiteur pour la première fois, quelle est l\'approche de communication la plus efficace ?',
    },
    options: [
      { id: 'a', text: { es: 'Ser firme y directo desde el inicio, mencionando las consecuencias del impago', en: 'Be firm and direct from the start, mentioning the consequences of non-payment', fr: 'Être ferme et direct dès le début, en mentionnant les conséquences du non-paiement' }, value: 40 },
      { id: 'b', text: { es: 'Presentarse profesionalmente, confirmar la identidad del deudor, explicar el motivo de la llamada con respeto y escuchar su situación', en: 'Introduce yourself professionally, confirm the debtor\'s identity, explain the reason for the call with respect, and listen to their situation', fr: 'Se présenter professionnellement, confirmer l\'identité du débiteur, expliquer le motif de l\'appel avec respect et écouter sa situation' }, value: 100 },
      { id: 'c', text: { es: 'Hablar rápidamente sobre el monto adeudado para no perder tiempo', en: 'Quickly talk about the amount owed to avoid wasting time', fr: 'Parler rapidement du montant dû pour ne pas perdre de temps' }, value: 20 },
      { id: 'd', text: { es: 'Enviar un mensaje de texto en lugar de llamar', en: 'Send a text message instead of calling', fr: 'Envoyer un message texte au lieu d\'appeler' }, value: 10 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },

  // --- Resilience & Stress Management ---
  {
    id: 'co-res-01',
    profileId: 'collections-officer',
    categoryId: 'collections-soft-skills',
    competencyId: 'collections-resilience',
    type: 'scale',
    content: {
      es: '¿Con qué frecuencia logra mantener una actitud positiva y productiva después de una serie de llamadas de cobro donde los deudores fueron hostiles o se negaron a cooperar?',
      en: 'How often do you manage to maintain a positive and productive attitude after a series of collection calls where debtors were hostile or refused to cooperate?',
      fr: 'À quelle fréquence parvenez-vous à maintenir une attitude positive et productive après une série d\'appels de recouvrement où les débiteurs étaient hostiles ou refusaient de coopérer ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nunca', en: 'Never', fr: 'Jamais' },
      max: { es: 'Siempre', en: 'Always', fr: 'Toujours' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 3,
    isActive: true,
  },
  {
    id: 'co-res-02',
    profileId: 'collections-officer',
    categoryId: 'collections-soft-skills',
    competencyId: 'collections-resilience',
    type: 'open-text',
    content: {
      es: 'Describa las estrategias personales que utiliza para manejar el estrés y evitar el agotamiento emocional en un puesto de cobros donde recibe rechazo frecuentemente.',
      en: 'Describe the personal strategies you use to manage stress and avoid emotional burnout in a collections position where you frequently face rejection.',
      fr: 'Décrivez les stratégies personnelles que vous utilisez pour gérer le stress et éviter l\'épuisement émotionnel dans un poste de recouvrement où vous faites fréquemment face au rejet.',
    },
    rubric: {
      es: 'Evaluar: (1) Conciencia del impacto emocional del trabajo, (2) Estrategias concretas de autocuidado, (3) Separación saludable entre trabajo y vida personal, (4) Capacidad de buscar apoyo cuando es necesario, (5) Enfoque en metas y resultados.',
      en: 'Evaluate: (1) Awareness of emotional impact of the work, (2) Concrete self-care strategies, (3) Healthy work-life separation, (4) Ability to seek support when needed, (5) Focus on goals and results.',
      fr: 'Évaluer : (1) Conscience de l\'impact émotionnel du travail, (2) Stratégies concrètes d\'autosoins, (3) Séparation saine entre travail et vie personnelle, (4) Capacité à chercher du soutien quand nécessaire, (5) Concentration sur les objectifs et les résultats.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 4,
    isActive: true,
  },

  // --- Problem Solving ---
  {
    id: 'co-ps-01',
    profileId: 'collections-officer',
    categoryId: 'collections-soft-skills',
    competencyId: 'collections-problem-solving',
    type: 'scenario',
    content: {
      es: 'Un deudor tiene tres cuentas vencidas con su empresa por un total de $12,000. Dice que solo puede pagar $200 al mes. Su supervisor le pide que recupere al menos el 50% en los próximos 3 meses.\n\nContexto: Las tres cuentas tienen diferentes antigüedades: 30, 60 y 120 días. La política permite condonar hasta un 15% en cuentas mayores a 90 días.',
      en: 'A debtor has three overdue accounts with your company totaling $12,000. They say they can only pay $200 per month. Your supervisor asks you to recover at least 50% in the next 3 months.\n\nContext: The three accounts have different aging: 30, 60, and 120 days. Policy allows waiving up to 15% on accounts over 90 days.',
      fr: 'Un débiteur a trois comptes en souffrance avec votre entreprise pour un total de 12 000 $. Il dit qu\'il ne peut payer que 200 $ par mois. Votre superviseur vous demande de récupérer au moins 50 % dans les 3 prochains mois.\n\nContexte : Les trois comptes ont des anciennetés différentes : 30, 60 et 120 jours. La politique permet de renoncer jusqu\'à 15 % sur les comptes de plus de 90 jours.',
    },
    rubric: {
      es: 'Evaluar: (1) Análisis de priorización de cuentas, (2) Creatividad en la propuesta de solución, (3) Uso estratégico de las políticas de descuento, (4) Balance entre necesidades del deudor y metas de la empresa, (5) Plan de seguimiento.',
      en: 'Evaluate: (1) Account prioritization analysis, (2) Creativity in proposed solution, (3) Strategic use of discount policies, (4) Balance between debtor needs and company goals, (5) Follow-up plan.',
      fr: 'Évaluer : (1) Analyse de priorisation des comptes, (2) Créativité dans la solution proposée, (3) Utilisation stratégique des politiques de remise, (4) Équilibre entre les besoins du débiteur et les objectifs de l\'entreprise, (5) Plan de suivi.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 5,
    isActive: true,
  },
];

const collectionsReadinessQuestions: Question[] = [
  // --- Adaptability ---
  {
    id: 'co-adapt-01',
    profileId: 'collections-officer',
    categoryId: 'collections-readiness',
    competencyId: 'collections-adaptability',
    type: 'multiple-choice',
    content: {
      es: 'La empresa cambia su política de cobranza: ahora se prohíben las llamadas después de las 7 PM y se requiere ofrecer al menos dos opciones de pago en cada contacto. ¿Cuál es su reacción?',
      en: 'The company changes its collection policy: calls after 7 PM are now prohibited and you must offer at least two payment options on each contact. What is your reaction?',
      fr: 'L\'entreprise modifie sa politique de recouvrement : les appels après 19 h sont désormais interdits et vous devez offrir au moins deux options de paiement à chaque contact. Quelle est votre réaction ?',
    },
    options: [
      { id: 'a', text: { es: 'Ajustar mi horario de llamadas y preparar opciones de pago antes de cada contacto', en: 'Adjust my calling schedule and prepare payment options before each contact', fr: 'Ajuster mon horaire d\'appels et préparer des options de paiement avant chaque contact' }, value: 100 },
      { id: 'b', text: { es: 'Quejarme porque las llamadas nocturnas eran las más efectivas', en: 'Complain because evening calls were the most effective', fr: 'Me plaindre parce que les appels du soir étaient les plus efficaces' }, value: 0 },
      { id: 'c', text: { es: 'Seguir las nuevas reglas solo cuando mi supervisor me observa', en: 'Follow the new rules only when my supervisor is watching', fr: 'Suivre les nouvelles règles uniquement quand mon superviseur m\'observe' }, value: 10 },
      { id: 'd', text: { es: 'Adaptarme gradualmente pero seguir usando las prácticas anteriores por un tiempo', en: 'Gradually adapt but continue using previous practices for a while', fr: 'M\'adapter graduellement mais continuer à utiliser les pratiques précédentes pendant un certain temps' }, value: 30 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'co-adapt-02',
    profileId: 'collections-officer',
    categoryId: 'collections-readiness',
    competencyId: 'collections-adaptability',
    type: 'scale',
    content: {
      es: '¿Qué tan cómodo se siente cuando la empresa cambia las estrategias o scripts de cobranza que usted ya dominaba?',
      en: 'How comfortable do you feel when the company changes collection strategies or scripts that you had already mastered?',
      fr: 'À quel point êtes-vous à l\'aise lorsque l\'entreprise modifie les stratégies ou scripts de recouvrement que vous maîtrisiez déjà ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Muy incómodo', en: 'Very uncomfortable', fr: 'Très mal à l\'aise' },
      max: { es: 'Muy cómodo', en: 'Very comfortable', fr: 'Très à l\'aise' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },

  // --- Continuous Learning ---
  {
    id: 'co-learn-01',
    profileId: 'collections-officer',
    categoryId: 'collections-readiness',
    competencyId: 'collections-continuous-learning',
    type: 'open-text',
    content: {
      es: 'Describa cómo se mantiene actualizado sobre cambios en las regulaciones de cobranza, nuevas técnicas de negociación o mejores prácticas del sector. Dé ejemplos concretos.',
      en: 'Describe how you stay updated on changes in collection regulations, new negotiation techniques, or industry best practices. Provide concrete examples.',
      fr: 'Décrivez comment vous restez à jour sur les changements dans les réglementations de recouvrement, les nouvelles techniques de négociation ou les meilleures pratiques du secteur. Donnez des exemples concrets.',
    },
    rubric: {
      es: 'Evaluar: (1) Fuentes de información consultadas, (2) Frecuencia de actualización, (3) Aplicación práctica de lo aprendido, (4) Participación en capacitaciones, (5) Iniciativa propia vs. solo capacitación obligatoria.',
      en: 'Evaluate: (1) Information sources consulted, (2) Frequency of updating, (3) Practical application of learning, (4) Participation in training, (5) Self-initiative vs. mandatory training only.',
      fr: 'Évaluer : (1) Sources d\'information consultées, (2) Fréquence de mise à jour, (3) Application pratique des apprentissages, (4) Participation aux formations, (5) Initiative personnelle vs. formation obligatoire uniquement.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },

  // --- Technology Adoption ---
  {
    id: 'co-tech-01',
    profileId: 'collections-officer',
    categoryId: 'collections-readiness',
    competencyId: 'collections-tech-adoption',
    type: 'multiple-choice',
    content: {
      es: 'La empresa implementa un nuevo sistema de gestión de cobros con inteligencia artificial que prioriza automáticamente las cuentas y sugiere el mejor horario y canal de contacto. ¿Cómo reacciona?',
      en: 'The company implements a new AI-powered collection management system that automatically prioritizes accounts and suggests the best contact time and channel. How do you react?',
      fr: 'L\'entreprise met en place un nouveau système de gestion de recouvrement basé sur l\'IA qui priorise automatiquement les comptes et suggère le meilleur moment et canal de contact. Comment réagissez-vous ?',
    },
    options: [
      { id: 'a', text: { es: 'Solicitar capacitación inmediata y explorar el sistema por cuenta propia para aprovechar sus funcionalidades', en: 'Request immediate training and explore the system on my own to take advantage of its features', fr: 'Demander une formation immédiate et explorer le système par moi-même pour profiter de ses fonctionnalités' }, value: 100 },
      { id: 'b', text: { es: 'Esperar a que otros colegas lo usen primero para ver si funciona', en: 'Wait for other colleagues to use it first to see if it works', fr: 'Attendre que d\'autres collègues l\'utilisent d\'abord pour voir si ça fonctionne' }, value: 30 },
      { id: 'c', text: { es: 'Preferir seguir usando mi método tradicional porque confío más en mi experiencia', en: 'Prefer to continue using my traditional method because I trust my experience more', fr: 'Préférer continuer à utiliser ma méthode traditionnelle car je fais plus confiance à mon expérience' }, value: 10 },
      { id: 'd', text: { es: 'Usarlo solo para las funciones básicas y seguir con mis propios criterios de priorización', en: 'Use it only for basic functions and continue with my own prioritization criteria', fr: 'L\'utiliser uniquement pour les fonctions de base et continuer avec mes propres critères de priorisation' }, value: 40 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },
  {
    id: 'co-tech-02',
    profileId: 'collections-officer',
    categoryId: 'collections-readiness',
    competencyId: 'collections-tech-adoption',
    type: 'scale',
    content: {
      es: '¿Qué tan dispuesto está a aprender a utilizar nuevas herramientas digitales de cobro (aplicaciones de pago, portales de autoservicio para deudores, chatbots)?',
      en: 'How willing are you to learn to use new digital collection tools (payment apps, debtor self-service portals, chatbots)?',
      fr: 'Dans quelle mesure êtes-vous disposé à apprendre à utiliser de nouveaux outils numériques de recouvrement (applications de paiement, portails en libre-service pour les débiteurs, chatbots) ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada dispuesto', en: 'Not willing at all', fr: 'Pas du tout disposé' },
      max: { es: 'Totalmente dispuesto', en: 'Fully willing', fr: 'Tout à fait disposé' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
];

// ============================================================================
// ACCOUNTING OFFICER QUESTIONS
// ============================================================================

const accountingProfessionalQuestions: Question[] = [
  // --- Journal Entries ---
  {
    id: 'acct-je-01',
    profileId: 'accounting-officer',
    categoryId: 'acct-professional',
    competencyId: 'acct-journal-entries',
    type: 'multiple-choice',
    content: {
      es: 'La empresa compra suministros de oficina por $2,500 a crédito. ¿Cuál es el asiento contable correcto?',
      en: 'The company purchases office supplies for $2,500 on credit. What is the correct journal entry?',
      fr: 'L\'entreprise achète des fournitures de bureau pour 2 500 $ à crédit. Quelle est l\'écriture comptable correcte ?',
    },
    options: [
      { id: 'a', text: { es: 'Débito a Suministros de Oficina $2,500, Crédito a Cuentas por Pagar $2,500', en: 'Debit Office Supplies $2,500, Credit Accounts Payable $2,500', fr: 'Débit Fournitures de Bureau 2 500 $, Crédit Comptes Fournisseurs 2 500 $' }, value: 100 },
      { id: 'b', text: { es: 'Débito a Cuentas por Pagar $2,500, Crédito a Suministros de Oficina $2,500', en: 'Debit Accounts Payable $2,500, Credit Office Supplies $2,500', fr: 'Débit Comptes Fournisseurs 2 500 $, Crédit Fournitures de Bureau 2 500 $' }, value: 0 },
      { id: 'c', text: { es: 'Débito a Caja $2,500, Crédito a Suministros de Oficina $2,500', en: 'Debit Cash $2,500, Credit Office Supplies $2,500', fr: 'Débit Caisse 2 500 $, Crédit Fournitures de Bureau 2 500 $' }, value: 0 },
      { id: 'd', text: { es: 'Débito a Suministros de Oficina $2,500, Crédito a Caja $2,500', en: 'Debit Office Supplies $2,500, Credit Cash $2,500', fr: 'Débit Fournitures de Bureau 2 500 $, Crédit Caisse 2 500 $' }, value: 30 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'acct-je-02',
    profileId: 'accounting-officer',
    categoryId: 'acct-professional',
    competencyId: 'acct-journal-entries',
    type: 'scenario',
    content: {
      es: 'Al revisar los asientos del mes, descubre que un pago de nómina por $15,000 fue registrado como gasto de alquiler. El cierre mensual es mañana.\n\nContexto: El error afecta los estados financieros preliminares que ya fueron enviados al gerente financiero.',
      en: 'While reviewing the month\'s entries, you discover that a payroll payment of $15,000 was recorded as rent expense. The monthly close is tomorrow.\n\nContext: The error affects the preliminary financial statements that were already sent to the finance manager.',
      fr: 'En révisant les écritures du mois, vous découvrez qu\'un paiement de salaires de 15 000 $ a été enregistré comme charge de loyer. La clôture mensuelle est demain.\n\nContexte : L\'erreur affecte les états financiers préliminaires déjà envoyés au directeur financier.',
    },
    rubric: {
      es: 'Evaluar: (1) Identificación correcta del asiento de ajuste necesario, (2) Comunicación oportuna al supervisor, (3) Documentación del error y la corrección, (4) Impacto en los estados financieros, (5) Medidas preventivas propuestas.',
      en: 'Evaluate: (1) Correct identification of the adjustment entry needed, (2) Timely communication to supervisor, (3) Documentation of the error and correction, (4) Impact on financial statements, (5) Proposed preventive measures.',
      fr: 'Évaluer : (1) Identification correcte de l\'écriture d\'ajustement nécessaire, (2) Communication opportune au superviseur, (3) Documentation de l\'erreur et de la correction, (4) Impact sur les états financiers, (5) Mesures préventives proposées.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 2,
    isActive: true,
  },
  // --- Bank Reconciliations ---
  {
    id: 'acct-recon-01',
    profileId: 'accounting-officer',
    categoryId: 'acct-professional',
    competencyId: 'acct-reconciliation',
    type: 'multiple-choice',
    content: {
      es: 'Al realizar la conciliación bancaria, el saldo del estado de cuenta del banco es $45,200 y el saldo en libros es $43,700. Identifica un cheque emitido por $1,800 que no ha sido cobrado y un depósito en tránsito de $300. ¿Cuál es el saldo conciliado?',
      en: 'When performing the bank reconciliation, the bank statement balance is $45,200 and the book balance is $43,700. You identify an outstanding check of $1,800 and a deposit in transit of $300. What is the reconciled balance?',
      fr: 'Lors du rapprochement bancaire, le solde du relevé bancaire est de 45 200 $ et le solde comptable est de 43 700 $. Vous identifiez un chèque émis non encaissé de 1 800 $ et un dépôt en transit de 300 $. Quel est le solde rapproché ?',
    },
    options: [
      { id: 'a', text: { es: '$43,700', en: '$43,700', fr: '43 700 $' }, value: 100 },
      { id: 'b', text: { es: '$45,200', en: '$45,200', fr: '45 200 $' }, value: 0 },
      { id: 'c', text: { es: '$44,000', en: '$44,000', fr: '44 000 $' }, value: 20 },
      { id: 'd', text: { es: '$43,400', en: '$43,400', fr: '43 400 $' }, value: 0 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 3,
    isActive: true,
  },
  {
    id: 'acct-recon-02',
    profileId: 'accounting-officer',
    categoryId: 'acct-professional',
    competencyId: 'acct-reconciliation',
    type: 'scale',
    content: {
      es: '¿Qué tan familiarizado está con el proceso completo de conciliación bancaria, incluyendo la identificación de partidas en tránsito, cargos bancarios y ajustes?',
      en: 'How familiar are you with the complete bank reconciliation process, including identifying items in transit, bank charges, and adjustments?',
      fr: 'Dans quelle mesure êtes-vous familiarisé avec le processus complet de rapprochement bancaire, y compris l\'identification des éléments en transit, des frais bancaires et des ajustements ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada familiarizado', en: 'Not familiar at all', fr: 'Pas du tout familiarisé' },
      max: { es: 'Muy familiarizado', en: 'Very familiar', fr: 'Très familiarisé' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },
  // --- Accounts Payable & Receivable ---
  {
    id: 'acct-ap-01',
    profileId: 'accounting-officer',
    categoryId: 'acct-professional',
    competencyId: 'acct-payables-receivables',
    type: 'multiple-choice',
    content: {
      es: 'Un proveedor envía una factura con un descuento del 2% si se paga dentro de 10 días (términos 2/10, n/30). La factura es de $10,000 y hoy es el día 8. ¿Qué acción recomienda?',
      en: 'A vendor sends an invoice with a 2% discount if paid within 10 days (terms 2/10, n/30). The invoice is $10,000 and today is day 8. What action do you recommend?',
      fr: 'Un fournisseur envoie une facture avec une remise de 2 % si elle est payée sous 10 jours (conditions 2/10, n/30). La facture est de 10 000 $ et nous sommes au jour 8. Quelle action recommandez-vous ?',
    },
    options: [
      { id: 'a', text: { es: 'Pagar $9,800 hoy para aprovechar el descuento y registrar el ahorro', en: 'Pay $9,800 today to take advantage of the discount and record the savings', fr: 'Payer 9 800 $ aujourd\'hui pour profiter de la remise et enregistrer l\'économie' }, value: 100 },
      { id: 'b', text: { es: 'Esperar al día 30 y pagar $10,000', en: 'Wait until day 30 and pay $10,000', fr: 'Attendre le jour 30 et payer 10 000 $' }, value: 20 },
      { id: 'c', text: { es: 'Pagar $10,000 hoy sin considerar el descuento', en: 'Pay $10,000 today without considering the discount', fr: 'Payer 10 000 $ aujourd\'hui sans considérer la remise' }, value: 30 },
      { id: 'd', text: { es: 'Consultar con el supervisor si hay flujo de caja disponible para aprovechar el descuento', en: 'Check with the supervisor if there is cash flow available to take the discount', fr: 'Vérifier avec le superviseur s\'il y a de la trésorerie disponible pour profiter de la remise' }, value: 80 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
  // --- ERP Systems ---
  {
    id: 'acct-erp-01',
    profileId: 'accounting-officer',
    categoryId: 'acct-professional',
    competencyId: 'acct-erp-systems',
    type: 'scale',
    content: {
      es: '¿Qué tan competente se considera en el uso de sistemas ERP o software contable (por ejemplo, SAP, QuickBooks, Sage, o similares)?',
      en: 'How competent do you consider yourself in using ERP systems or accounting software (e.g., SAP, QuickBooks, Sage, or similar)?',
      fr: 'Dans quelle mesure vous considérez-vous compétent dans l\'utilisation de systèmes ERP ou de logiciels comptables (par exemple, SAP, QuickBooks, Sage ou similaires) ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada competente', en: 'Not competent at all', fr: 'Pas du tout compétent' },
      max: { es: 'Muy competente', en: 'Very competent', fr: 'Très compétent' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 6,
    isActive: true,
  },
  {
    id: 'acct-erp-02',
    profileId: 'accounting-officer',
    categoryId: 'acct-professional',
    competencyId: 'acct-erp-systems',
    type: 'open-text',
    content: {
      es: 'Describa su experiencia con sistemas ERP o software contable. ¿Qué sistemas ha utilizado, qué módulos maneja y cómo los utiliza en su trabajo diario?',
      en: 'Describe your experience with ERP systems or accounting software. What systems have you used, which modules do you handle, and how do you use them in your daily work?',
      fr: 'Décrivez votre expérience avec les systèmes ERP ou les logiciels comptables. Quels systèmes avez-vous utilisés, quels modules maîtrisez-vous et comment les utilisez-vous dans votre travail quotidien ?',
    },
    rubric: {
      es: 'Evaluar: (1) Variedad de sistemas conocidos, (2) Profundidad de uso (no solo ingreso de datos), (3) Módulos manejados (contabilidad general, CxP, CxC, activos fijos), (4) Capacidad de generar reportes, (5) Resolución de problemas técnicos básicos.',
      en: 'Evaluate: (1) Variety of systems known, (2) Depth of use (not just data entry), (3) Modules handled (general ledger, AP, AR, fixed assets), (4) Ability to generate reports, (5) Basic technical problem-solving.',
      fr: 'Évaluer : (1) Variété de systèmes connus, (2) Profondeur d\'utilisation (pas seulement la saisie de données), (3) Modules maîtrisés (comptabilité générale, CF, CC, immobilisations), (4) Capacité à générer des rapports, (5) Résolution de problèmes techniques de base.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 7,
    isActive: true,
  },
];

const accountingSoftSkillsQuestions: Question[] = [
  // --- Attention to Detail ---
  {
    id: 'acct-detail-01',
    profileId: 'accounting-officer',
    categoryId: 'acct-soft-skills',
    competencyId: 'acct-attention-detail',
    type: 'multiple-choice',
    content: {
      es: 'Está ingresando 200 facturas al sistema. En la factura #147, nota que el monto total ($5,430) no coincide con la suma de los ítems individuales ($5,340). ¿Qué hace?',
      en: 'You are entering 200 invoices into the system. On invoice #147, you notice the total amount ($5,430) does not match the sum of individual items ($5,340). What do you do?',
      fr: 'Vous saisissez 200 factures dans le système. Sur la facture n°147, vous remarquez que le montant total (5 430 $) ne correspond pas à la somme des éléments individuels (5 340 $). Que faites-vous ?',
    },
    options: [
      { id: 'a', text: { es: 'Registrar el monto total de la factura ($5,430) tal como aparece', en: 'Record the total amount on the invoice ($5,430) as shown', fr: 'Enregistrer le montant total de la facture (5 430 $) tel qu\'affiché' }, value: 10 },
      { id: 'b', text: { es: 'Detener el ingreso, verificar la discrepancia y contactar al proveedor para aclarar antes de registrar', en: 'Stop entry, verify the discrepancy and contact the vendor to clarify before recording', fr: 'Arrêter la saisie, vérifier l\'écart et contacter le fournisseur pour clarifier avant d\'enregistrer' }, value: 100 },
      { id: 'c', text: { es: 'Registrar el monto menor ($5,340) para ser conservador', en: 'Record the lesser amount ($5,340) to be conservative', fr: 'Enregistrer le montant inférieur (5 340 $) pour être conservateur' }, value: 20 },
      { id: 'd', text: { es: 'Dejarla pendiente y continuar con las demás facturas, revisarla después', en: 'Set it aside and continue with other invoices, review it later', fr: 'La mettre de côté et continuer avec les autres factures, la réviser plus tard' }, value: 50 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'acct-detail-02',
    profileId: 'accounting-officer',
    categoryId: 'acct-soft-skills',
    competencyId: 'acct-attention-detail',
    type: 'scale',
    content: {
      es: '¿Con qué frecuencia verifica dos veces los cálculos y los datos ingresados antes de enviar o cerrar un registro contable?',
      en: 'How often do you double-check calculations and entered data before submitting or closing an accounting record?',
      fr: 'À quelle fréquence vérifiez-vous les calculs et les données saisies avant de soumettre ou de clôturer un enregistrement comptable ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nunca', en: 'Never', fr: 'Jamais' },
      max: { es: 'Siempre', en: 'Always', fr: 'Toujours' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },
  // --- Organization & Time Management ---
  {
    id: 'acct-org-01',
    profileId: 'accounting-officer',
    categoryId: 'acct-soft-skills',
    competencyId: 'acct-organization',
    type: 'scenario',
    content: {
      es: 'Es el día 28 del mes. Tiene pendiente: (1) el cierre de cuentas por pagar, (2) la conciliación bancaria, (3) un informe de gastos urgente del gerente general y (4) archivar documentos fiscales del mes anterior. No puede completar todo hoy.\n\nContexto: El cierre contable es el día 30 y el informe del gerente lo necesita para una reunión mañana a las 8:00 AM.',
      en: 'It is the 28th of the month. You have pending: (1) accounts payable close, (2) bank reconciliation, (3) an urgent expense report from the general manager, and (4) filing tax documents from the previous month. You cannot complete everything today.\n\nContext: The accounting close is on the 30th and the manager needs the report for an 8:00 AM meeting tomorrow.',
      fr: 'Nous sommes le 28 du mois. Vous avez en attente : (1) la clôture des comptes fournisseurs, (2) le rapprochement bancaire, (3) un rapport de dépenses urgent du directeur général et (4) le classement des documents fiscaux du mois précédent. Vous ne pouvez pas tout terminer aujourd\'hui.\n\nContexte : La clôture comptable est le 30 et le directeur a besoin du rapport pour une réunion demain à 8h00.',
    },
    rubric: {
      es: 'Evaluar: (1) Priorización lógica de tareas según urgencia e importancia, (2) Comunicación proactiva al supervisor sobre la situación, (3) Plan de trabajo realista, (4) Capacidad de delegar o pedir apoyo, (5) Cumplimiento de los compromisos más críticos.',
      en: 'Evaluate: (1) Logical prioritization of tasks by urgency and importance, (2) Proactive communication to supervisor about the situation, (3) Realistic work plan, (4) Ability to delegate or ask for support, (5) Meeting the most critical commitments.',
      fr: 'Évaluer : (1) Priorisation logique des tâches selon l\'urgence et l\'importance, (2) Communication proactive au superviseur sur la situation, (3) Plan de travail réaliste, (4) Capacité à déléguer ou demander du soutien, (5) Respect des engagements les plus critiques.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },
  {
    id: 'acct-org-02',
    profileId: 'accounting-officer',
    categoryId: 'acct-soft-skills',
    competencyId: 'acct-organization',
    type: 'scale',
    content: {
      es: '¿Qué tan organizado mantiene sus archivos contables (digitales y físicos) para que cualquier persona pueda localizar un documento fácilmente?',
      en: 'How organized do you keep your accounting files (digital and physical) so that anyone can easily locate a document?',
      fr: 'Dans quelle mesure gardez-vous vos dossiers comptables (numériques et physiques) organisés pour que n\'importe qui puisse facilement localiser un document ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Muy desorganizado', en: 'Very disorganized', fr: 'Très désorganisé' },
      max: { es: 'Muy organizado', en: 'Very organized', fr: 'Très organisé' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },
  // --- Professional Communication ---
  {
    id: 'acct-comm-01',
    profileId: 'accounting-officer',
    categoryId: 'acct-soft-skills',
    competencyId: 'acct-communication',
    type: 'scenario',
    content: {
      es: 'Un auditor externo le solicita las conciliaciones bancarias de los últimos 6 meses y la documentación de soporte de tres transacciones específicas que parecen inusuales. Usted nota que una de esas transacciones fue un error que ya fue corregido pero no fue documentado formalmente.\n\nContexto: Su supervisor está de vacaciones y el auditor necesita la información hoy.',
      en: 'An external auditor requests the bank reconciliations for the last 6 months and supporting documentation for three specific transactions that appear unusual. You notice that one of those transactions was an error that was already corrected but not formally documented.\n\nContext: Your supervisor is on vacation and the auditor needs the information today.',
      fr: 'Un auditeur externe demande les rapprochements bancaires des 6 derniers mois et la documentation justificative de trois transactions spécifiques qui semblent inhabituelles. Vous remarquez que l\'une de ces transactions était une erreur déjà corrigée mais non documentée formellement.\n\nContexte : Votre superviseur est en vacances et l\'auditeur a besoin de l\'information aujourd\'hui.',
    },
    rubric: {
      es: 'Evaluar: (1) Transparencia y honestidad con el auditor, (2) Profesionalismo en la comunicación, (3) Documentación retroactiva del error corregido, (4) Escalamiento apropiado (contactar al supervisor aunque esté de vacaciones), (5) Organización de la información solicitada.',
      en: 'Evaluate: (1) Transparency and honesty with the auditor, (2) Professionalism in communication, (3) Retroactive documentation of the corrected error, (4) Appropriate escalation (contacting the supervisor even though they are on vacation), (5) Organization of the requested information.',
      fr: 'Évaluer : (1) Transparence et honnêteté avec l\'auditeur, (2) Professionnalisme dans la communication, (3) Documentation rétroactive de l\'erreur corrigée, (4) Escalade appropriée (contacter le superviseur même en vacances), (5) Organisation de l\'information demandée.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 5,
    isActive: true,
  },
  {
    id: 'acct-comm-02',
    profileId: 'accounting-officer',
    categoryId: 'acct-soft-skills',
    competencyId: 'acct-communication',
    type: 'open-text',
    content: {
      es: '¿Cómo explicaría a un gerente no financiero la diferencia entre el flujo de caja y la utilidad neta de la empresa? Proporcione un ejemplo sencillo.',
      en: 'How would you explain to a non-financial manager the difference between cash flow and net income? Provide a simple example.',
      fr: 'Comment expliqueriez-vous à un gestionnaire non financier la différence entre le flux de trésorerie et le bénéfice net de l\'entreprise ? Fournissez un exemple simple.',
    },
    rubric: {
      es: 'Evaluar: (1) Claridad de la explicación, (2) Uso de lenguaje accesible (no técnico), (3) Calidad del ejemplo proporcionado, (4) Precisión conceptual, (5) Capacidad de simplificar sin perder exactitud.',
      en: 'Evaluate: (1) Clarity of the explanation, (2) Use of accessible (non-technical) language, (3) Quality of the example provided, (4) Conceptual accuracy, (5) Ability to simplify without losing accuracy.',
      fr: 'Évaluer : (1) Clarté de l\'explication, (2) Utilisation d\'un langage accessible (non technique), (3) Qualité de l\'exemple fourni, (4) Précision conceptuelle, (5) Capacité à simplifier sans perdre en exactitude.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 6,
    isActive: true,
  },
];

const accountingReadinessQuestions: Question[] = [
  // --- Regulatory Adaptability ---
  {
    id: 'acct-reg-01',
    profileId: 'accounting-officer',
    categoryId: 'acct-readiness',
    competencyId: 'acct-regulatory-adaptability',
    type: 'multiple-choice',
    content: {
      es: 'La autoridad fiscal del país anuncia un cambio en el tratamiento contable del IVA que entra en vigor el próximo mes. ¿Cuál es su reacción?',
      en: 'The country\'s tax authority announces a change in the accounting treatment of VAT/sales tax that takes effect next month. What is your reaction?',
      fr: 'L\'autorité fiscale du pays annonce un changement dans le traitement comptable de la TVA qui entre en vigueur le mois prochain. Quelle est votre réaction ?',
    },
    options: [
      { id: 'a', text: { es: 'Investigar inmediatamente el cambio, estudiar la normativa y preparar un resumen para el equipo', en: 'Immediately research the change, study the regulation, and prepare a summary for the team', fr: 'Rechercher immédiatement le changement, étudier la réglementation et préparer un résumé pour l\'équipe' }, value: 100 },
      { id: 'b', text: { es: 'Esperar a que el contador principal o supervisor indique qué hacer', en: 'Wait for the lead accountant or supervisor to indicate what to do', fr: 'Attendre que le comptable principal ou le superviseur indique quoi faire' }, value: 30 },
      { id: 'c', text: { es: 'Seguir registrando de la misma manera hasta que alguien me corrija', en: 'Continue recording the same way until someone corrects me', fr: 'Continuer à enregistrer de la même manière jusqu\'à ce que quelqu\'un me corrige' }, value: 0 },
      { id: 'd', text: { es: 'Buscar un curso o seminario sobre la nueva normativa', en: 'Look for a course or seminar about the new regulation', fr: 'Chercher un cours ou séminaire sur la nouvelle réglementation' }, value: 70 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'acct-reg-02',
    profileId: 'accounting-officer',
    categoryId: 'acct-readiness',
    competencyId: 'acct-regulatory-adaptability',
    type: 'scale',
    content: {
      es: '¿Qué tan actualizado se mantiene sobre los cambios en las normas contables (NIIF/NIC) y la legislación fiscal de su país?',
      en: 'How up to date do you stay on changes in accounting standards (IFRS/IAS) and your country\'s tax legislation?',
      fr: 'Dans quelle mesure restez-vous à jour sur les changements des normes comptables (IFRS/IAS) et la législation fiscale de votre pays ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada actualizado', en: 'Not updated at all', fr: 'Pas du tout à jour' },
      max: { es: 'Muy actualizado', en: 'Very updated', fr: 'Très à jour' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },
  // --- Continuous Learning ---
  {
    id: 'acct-learn-01',
    profileId: 'accounting-officer',
    categoryId: 'acct-readiness',
    competencyId: 'acct-continuous-learning',
    type: 'open-text',
    content: {
      es: '¿Qué acciones ha tomado en el último año para mejorar sus conocimientos y habilidades contables? Mencione cursos, certificaciones, lecturas o prácticas de desarrollo profesional.',
      en: 'What actions have you taken in the past year to improve your accounting knowledge and skills? Mention courses, certifications, readings, or professional development practices.',
      fr: 'Quelles actions avez-vous entreprises au cours de la dernière année pour améliorer vos connaissances et compétences comptables ? Mentionnez les cours, certifications, lectures ou pratiques de développement professionnel.',
    },
    rubric: {
      es: 'Evaluar: (1) Variedad de acciones de desarrollo, (2) Relevancia para el puesto, (3) Iniciativa propia vs. requerimiento de la empresa, (4) Aplicación práctica de lo aprendido, (5) Plan de desarrollo futuro.',
      en: 'Evaluate: (1) Variety of development actions, (2) Relevance to the position, (3) Self-initiative vs. company requirement, (4) Practical application of learnings, (5) Future development plan.',
      fr: 'Évaluer : (1) Variété des actions de développement, (2) Pertinence pour le poste, (3) Initiative propre vs. exigence de l\'entreprise, (4) Application pratique des apprentissages, (5) Plan de développement futur.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },
  {
    id: 'acct-learn-02',
    profileId: 'accounting-officer',
    categoryId: 'acct-readiness',
    competencyId: 'acct-continuous-learning',
    type: 'scale',
    content: {
      es: '¿Qué tan motivado se siente para obtener certificaciones profesionales adicionales (por ejemplo, CPA, CMA) o continuar estudios formales en contabilidad o finanzas?',
      en: 'How motivated do you feel to obtain additional professional certifications (e.g., CPA, CMA) or continue formal studies in accounting or finance?',
      fr: 'Dans quelle mesure êtes-vous motivé à obtenir des certifications professionnelles supplémentaires (par exemple, CPA, CMA) ou à poursuivre des études formelles en comptabilité ou finance ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada motivado', en: 'Not motivated at all', fr: 'Pas du tout motivé' },
      max: { es: 'Muy motivado', en: 'Very motivated', fr: 'Très motivé' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },
  // --- Accounting Technology Adoption ---
  {
    id: 'acct-tech-01',
    profileId: 'accounting-officer',
    categoryId: 'acct-readiness',
    competencyId: 'acct-tech-adoption',
    type: 'multiple-choice',
    content: {
      es: 'La empresa decide migrar de un sistema contable de escritorio a un ERP en la nube. ¿Cuál es su reacción?',
      en: 'The company decides to migrate from a desktop accounting system to a cloud-based ERP. What is your reaction?',
      fr: 'L\'entreprise décide de migrer d\'un système comptable de bureau vers un ERP en cloud. Quelle est votre réaction ?',
    },
    options: [
      { id: 'a', text: { es: 'Participar activamente en la migración, tomar la capacitación y ser un recurso de apoyo para los colegas', en: 'Actively participate in the migration, take the training, and be a support resource for colleagues', fr: 'Participer activement à la migration, suivre la formation et être une ressource de soutien pour les collègues' }, value: 100 },
      { id: 'b', text: { es: 'Tomar la capacitación requerida pero seguir usando el sistema anterior cuando sea posible', en: 'Take the required training but keep using the old system when possible', fr: 'Suivre la formation requise mais continuer à utiliser l\'ancien système quand c\'est possible' }, value: 20 },
      { id: 'c', text: { es: 'Resistir el cambio porque el sistema actual funciona bien', en: 'Resist the change because the current system works fine', fr: 'Résister au changement parce que le système actuel fonctionne bien' }, value: 0 },
      { id: 'd', text: { es: 'Esperar a que el equipo de TI configure todo y luego aprender lo mínimo necesario', en: 'Wait for the IT team to set everything up and then learn the bare minimum', fr: 'Attendre que l\'équipe informatique configure tout puis apprendre le minimum nécessaire' }, value: 10 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
  {
    id: 'acct-tech-02',
    profileId: 'accounting-officer',
    categoryId: 'acct-readiness',
    competencyId: 'acct-tech-adoption',
    type: 'scenario',
    content: {
      es: 'Su empresa está implementando un sistema de facturación electrónica que cambiará completamente cómo se reciben, validan y registran las facturas de proveedores. Usted ha sido asignado como el responsable de adaptar los procesos contables al nuevo sistema.\n\nContexto: Tiene 3 semanas para prepararse antes del lanzamiento y otros 2 colegas del departamento contable también necesitarán capacitarse.',
      en: 'Your company is implementing an electronic invoicing system that will completely change how vendor invoices are received, validated, and recorded. You have been assigned as the person responsible for adapting accounting processes to the new system.\n\nContext: You have 3 weeks to prepare before launch and 2 other colleagues in the accounting department will also need training.',
      fr: 'Votre entreprise met en place un système de facturation électronique qui changera complètement la façon dont les factures fournisseurs sont reçues, validées et enregistrées. Vous avez été désigné comme responsable de l\'adaptation des processus comptables au nouveau système.\n\nContexte : Vous avez 3 semaines pour vous préparer avant le lancement et 2 autres collègues du département comptable devront également être formés.',
    },
    rubric: {
      es: 'Evaluar: (1) Plan de aprendizaje estructurado, (2) Identificación de impactos en los procesos actuales, (3) Estrategia de capacitación para colegas, (4) Gestión del período de transición, (5) Actitud proactiva ante la tecnología.',
      en: 'Evaluate: (1) Structured learning plan, (2) Identification of impacts on current processes, (3) Training strategy for colleagues, (4) Transition period management, (5) Proactive attitude towards technology.',
      fr: 'Évaluer : (1) Plan d\'apprentissage structuré, (2) Identification des impacts sur les processus actuels, (3) Stratégie de formation pour les collègues, (4) Gestion de la période de transition, (5) Attitude proactive envers la technologie.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 6,
    isActive: true,
  },
];

// ============================================================================
// SECONDARY SCHOOL EDUCATOR QUESTIONS
// ============================================================================

// --- Secondary School Educator: Professional Skills ---
const secEdProfessionalQuestions: Question[] = [
  // Subject Matter Expertise
  {
    id: 'seced-sme-01',
    profileId: 'secondary-school-educator',
    categoryId: 'edu-secondary-professional',
    competencyId: 'subject-matter-expertise',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál de las siguientes estrategias es más efectiva para profundizar el dominio de su materia y mantenerlo actualizado?',
      en: 'Which of the following strategies is most effective for deepening your subject mastery and keeping it current?',
      fr: 'Laquelle des stratégies suivantes est la plus efficace pour approfondir votre maîtrise disciplinaire et la maintenir à jour ?',
    },
    options: [
      { id: 'a', text: { es: 'Participar en comunidades académicas, leer publicaciones especializadas y asistir a congresos disciplinares', en: 'Participate in academic communities, read specialized publications, and attend disciplinary conferences', fr: 'Participer à des communautés académiques, lire des publications spécialisées et assister à des congrès disciplinaires' }, value: 100 },
      { id: 'b', text: { es: 'Revisar el libro de texto asignado al inicio de cada año escolar', en: 'Review the assigned textbook at the beginning of each school year', fr: 'Revoir le manuel scolaire assigné au début de chaque année scolaire' }, value: 20 },
      { id: 'c', text: { es: 'Basarse únicamente en la formación universitaria recibida', en: 'Rely solely on university training received', fr: 'Se fier uniquement à la formation universitaire reçue' }, value: 0 },
      { id: 'd', text: { es: 'Consultar videos en internet cuando surge una duda específica', en: 'Look up videos online when a specific question arises', fr: 'Consulter des vidéos en ligne lorsqu\'une question spécifique se pose' }, value: 40 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'seced-sme-02',
    profileId: 'secondary-school-educator',
    categoryId: 'edu-secondary-professional',
    competencyId: 'subject-matter-expertise',
    type: 'scenario',
    content: {
      es: 'Un estudiante de décimo grado le hace una pregunta avanzada sobre su materia que va más allá del currículo establecido. Usted no conoce la respuesta con certeza.\n\nContexto: La pregunta surge durante una clase con 35 estudiantes y el tema está relacionado con un descubrimiento científico reciente que ha sido noticia.',
      en: 'A tenth-grade student asks you an advanced question about your subject that goes beyond the established curriculum. You are not certain of the answer.\n\nContext: The question arises during a class with 35 students and the topic is related to a recent scientific discovery that has been in the news.',
      fr: 'Un élève de seconde vous pose une question avancée sur votre matière qui dépasse le programme établi. Vous n\'êtes pas certain de la réponse.\n\nContexte : La question survient pendant un cours de 35 élèves et le sujet est lié à une découverte scientifique récente qui a fait l\'actualité.',
    },
    rubric: {
      es: 'Evaluar: (1) Honestidad intelectual al reconocer los límites del conocimiento propio, (2) Capacidad de convertir la situación en oportunidad de aprendizaje, (3) Modelaje de investigación y pensamiento crítico, (4) Compromiso de dar seguimiento con información verificada, (5) Manejo del grupo durante la discusión.',
      en: 'Evaluate: (1) Intellectual honesty in acknowledging the limits of one\'s knowledge, (2) Ability to turn the situation into a learning opportunity, (3) Modeling research and critical thinking, (4) Commitment to follow up with verified information, (5) Group management during the discussion.',
      fr: 'Évaluer : (1) Honnêteté intellectuelle en reconnaissant les limites de ses connaissances, (2) Capacité à transformer la situation en opportunité d\'apprentissage, (3) Modélisation de la recherche et de la pensée critique, (4) Engagement à donner suite avec des informations vérifiées, (5) Gestion du groupe pendant la discussion.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 2,
    isActive: true,
  },
  // Advanced Assessment
  {
    id: 'seced-assess-01',
    profileId: 'secondary-school-educator',
    categoryId: 'edu-secondary-professional',
    competencyId: 'advanced-assessment',
    type: 'multiple-choice',
    content: {
      es: '¿Qué tipo de evaluación es más adecuada para medir la comprensión profunda y el pensamiento crítico en estudiantes de secundaria?',
      en: 'What type of assessment is most appropriate for measuring deep understanding and critical thinking in secondary students?',
      fr: 'Quel type d\'évaluation est le plus approprié pour mesurer la compréhension approfondie et la pensée critique chez les élèves du secondaire ?',
    },
    options: [
      { id: 'a', text: { es: 'Exámenes de opción múltiple con preguntas de memoria', en: 'Multiple-choice exams with memory-based questions', fr: 'Examens à choix multiples avec des questions de mémoire' }, value: 10 },
      { id: 'b', text: { es: 'Proyectos basados en problemas reales con rúbricas analíticas que incluyan autoevaluación y coevaluación', en: 'Problem-based projects with analytical rubrics that include self-assessment and peer assessment', fr: 'Projets basés sur des problèmes réels avec des grilles d\'évaluation analytiques incluant l\'auto-évaluation et l\'évaluation par les pairs' }, value: 100 },
      { id: 'c', text: { es: 'Dictados y resúmenes escritos calificados por extensión', en: 'Dictations and written summaries graded by length', fr: 'Dictées et résumés écrits notés selon leur longueur' }, value: 0 },
      { id: 'd', text: { es: 'Cuestionarios de verdadero o falso al final de cada unidad', en: 'True-or-false quizzes at the end of each unit', fr: 'Questionnaires vrai ou faux à la fin de chaque unité' }, value: 20 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 3,
    isActive: true,
  },
  // Critical Thinking Development
  {
    id: 'seced-crit-01',
    profileId: 'secondary-school-educator',
    categoryId: 'edu-secondary-professional',
    competencyId: 'critical-thinking-dev',
    type: 'open-text',
    content: {
      es: 'Describa una actividad o secuencia didáctica que haya diseñado (o diseñaría) para fomentar el pensamiento crítico y la argumentación en sus estudiantes de secundaria. Incluya el tema, los pasos y cómo evaluaría el resultado.',
      en: 'Describe an activity or teaching sequence you have designed (or would design) to foster critical thinking and argumentation in your secondary students. Include the topic, the steps, and how you would evaluate the outcome.',
      fr: 'Décrivez une activité ou une séquence didactique que vous avez conçue (ou concevriez) pour favoriser la pensée critique et l\'argumentation chez vos élèves du secondaire. Incluez le sujet, les étapes et comment vous évalueriez le résultat.',
    },
    rubric: {
      es: 'Evaluar: (1) Claridad y estructura de la actividad propuesta, (2) Nivel de desafío cognitivo para adolescentes, (3) Fomento de la argumentación y análisis de evidencia, (4) Inclusión de múltiples perspectivas, (5) Criterios de evaluación del pensamiento crítico.',
      en: 'Evaluate: (1) Clarity and structure of the proposed activity, (2) Level of cognitive challenge for adolescents, (3) Fostering argumentation and evidence analysis, (4) Inclusion of multiple perspectives, (5) Assessment criteria for critical thinking.',
      fr: 'Évaluer : (1) Clarté et structure de l\'activité proposée, (2) Niveau de défi cognitif pour les adolescents, (3) Promotion de l\'argumentation et de l\'analyse de preuves, (4) Inclusion de perspectives multiples, (5) Critères d\'évaluation de la pensée critique.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 4,
    isActive: true,
  },
  // Career Readiness Guidance
  {
    id: 'seced-career-01',
    profileId: 'secondary-school-educator',
    categoryId: 'edu-secondary-professional',
    competencyId: 'career-readiness-guidance',
    type: 'scale',
    content: {
      es: '¿Qué tan preparado se siente para orientar a sus estudiantes sobre opciones universitarias, carreras técnicas y oportunidades laborales relacionadas con su materia?',
      en: 'How prepared do you feel to guide your students about university options, technical careers, and job opportunities related to your subject?',
      fr: 'Dans quelle mesure vous sentez-vous prêt à orienter vos élèves sur les options universitaires, les carrières techniques et les opportunités d\'emploi liées à votre matière ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada preparado', en: 'Not prepared at all', fr: 'Pas du tout préparé' },
      max: { es: 'Muy preparado', en: 'Very prepared', fr: 'Très préparé' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
  {
    id: 'seced-career-02',
    profileId: 'secondary-school-educator',
    categoryId: 'edu-secondary-professional',
    competencyId: 'career-readiness-guidance',
    type: 'scenario',
    content: {
      es: 'Una estudiante de undécimo grado le dice que quiere abandonar la escuela para trabajar porque su familia necesita ingresos. Tiene buenas calificaciones y muestra talento en su materia.\n\nContexto: La institución cuenta con un departamento de orientación y programas de becas, pero la estudiante parece tener la decisión tomada.',
      en: 'An eleventh-grade student tells you she wants to drop out of school to work because her family needs income. She has good grades and shows talent in your subject.\n\nContext: The institution has a counseling department and scholarship programs, but the student seems to have already made up her mind.',
      fr: 'Une élève de première vous dit qu\'elle veut quitter l\'école pour travailler car sa famille a besoin de revenus. Elle a de bonnes notes et montre du talent dans votre matière.\n\nContexte : L\'établissement dispose d\'un département d\'orientation et de programmes de bourses, mais l\'élève semble avoir pris sa décision.',
    },
    rubric: {
      es: 'Evaluar: (1) Empatía y escucha activa hacia la situación familiar, (2) Conocimiento de recursos institucionales disponibles (becas, orientación), (3) Capacidad de presentar alternativas viables sin imponer, (4) Trabajo colaborativo con orientación y familia, (5) Seguimiento propuesto.',
      en: 'Evaluate: (1) Empathy and active listening regarding the family situation, (2) Knowledge of available institutional resources (scholarships, counseling), (3) Ability to present viable alternatives without imposing, (4) Collaborative work with counseling and family, (5) Proposed follow-up.',
      fr: 'Évaluer : (1) Empathie et écoute active face à la situation familiale, (2) Connaissance des ressources institutionnelles disponibles (bourses, orientation), (3) Capacité à présenter des alternatives viables sans imposer, (4) Travail collaboratif avec l\'orientation et la famille, (5) Suivi proposé.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 6,
    isActive: true,
  },
];

// --- Secondary School Educator: Soft Skills ---
const secEdSoftSkillsQuestions: Question[] = [
  // Adolescent Engagement
  {
    id: 'seced-engage-01',
    profileId: 'secondary-school-educator',
    categoryId: 'edu-secondary-soft-skills',
    competencyId: 'adolescent-engagement',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál es la estrategia más efectiva para captar la atención de un grupo de adolescentes que muestra desinterés generalizado por la clase?',
      en: 'What is the most effective strategy for capturing the attention of a group of teenagers showing widespread disinterest in class?',
      fr: 'Quelle est la stratégie la plus efficace pour capter l\'attention d\'un groupe d\'adolescents montrant un désintérêt généralisé pour le cours ?',
    },
    options: [
      { id: 'a', text: { es: 'Aumentar la cantidad de tarea para que se tomen la clase en serio', en: 'Increase the amount of homework so they take the class seriously', fr: 'Augmenter la quantité de devoirs pour qu\'ils prennent le cours au sérieux' }, value: 0 },
      { id: 'b', text: { es: 'Conectar el contenido con situaciones reales de su vida cotidiana y usar metodologías activas y participativas', en: 'Connect the content with real situations from their daily life and use active, participatory methodologies', fr: 'Relier le contenu à des situations réelles de leur vie quotidienne et utiliser des méthodologies actives et participatives' }, value: 100 },
      { id: 'c', text: { es: 'Reportar a los estudiantes desinteresados a la dirección', en: 'Report disinterested students to the administration', fr: 'Signaler les élèves désintéressés à la direction' }, value: 10 },
      { id: 'd', text: { es: 'Dar el contenido más rápido para que sobre tiempo libre al final', en: 'Cover the content faster so there is free time at the end', fr: 'Couvrir le contenu plus rapidement pour avoir du temps libre à la fin' }, value: 15 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'seced-engage-02',
    profileId: 'secondary-school-educator',
    categoryId: 'edu-secondary-soft-skills',
    competencyId: 'adolescent-engagement',
    type: 'scenario',
    content: {
      es: 'Un grupo de estudiantes de noveno grado se niega a participar en una actividad grupal que usted preparó. Dicen que "es aburrido" y que "no sirve para nada". Algunos empiezan a usar sus celulares.\n\nContexto: Es su segunda semana con este grupo y todavía está construyendo la relación con ellos.',
      en: 'A group of ninth-grade students refuses to participate in a group activity you prepared. They say it\'s "boring" and "useless." Some start using their phones.\n\nContext: It is your second week with this group and you are still building the relationship with them.',
      fr: 'Un groupe d\'élèves de troisième refuse de participer à une activité de groupe que vous avez préparée. Ils disent que c\'est « ennuyeux » et que « ça ne sert à rien ». Certains commencent à utiliser leurs téléphones.\n\nContexte : C\'est votre deuxième semaine avec ce groupe et vous êtes encore en train de construire la relation avec eux.',
    },
    rubric: {
      es: 'Evaluar: (1) Control emocional ante la resistencia, (2) Disposición a escuchar la retroalimentación de los estudiantes, (3) Flexibilidad para adaptar la actividad en el momento, (4) Estrategias para generar conexión y confianza, (5) Manejo del uso de celulares sin confrontación excesiva.',
      en: 'Evaluate: (1) Emotional control in the face of resistance, (2) Willingness to listen to student feedback, (3) Flexibility to adapt the activity in the moment, (4) Strategies for building connection and trust, (5) Managing phone use without excessive confrontation.',
      fr: 'Évaluer : (1) Contrôle émotionnel face à la résistance, (2) Volonté d\'écouter les retours des élèves, (3) Flexibilité pour adapter l\'activité sur le moment, (4) Stratégies pour créer une connexion et de la confiance, (5) Gestion de l\'utilisation des téléphones sans confrontation excessive.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 2,
    isActive: true,
  },
  // Classroom Discipline
  {
    id: 'seced-disc-01',
    profileId: 'secondary-school-educator',
    categoryId: 'edu-secondary-soft-skills',
    competencyId: 'classroom-discipline',
    type: 'scale',
    content: {
      es: '¿Qué tan seguro se siente estableciendo límites claros y gestionando situaciones de indisciplina con estudiantes adolescentes?',
      en: 'How confident do you feel establishing clear boundaries and managing disciplinary situations with adolescent students?',
      fr: 'Dans quelle mesure vous sentez-vous confiant pour établir des limites claires et gérer les situations d\'indiscipline avec des élèves adolescents ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada seguro', en: 'Not confident at all', fr: 'Pas du tout confiant' },
      max: { es: 'Muy seguro', en: 'Very confident', fr: 'Très confiant' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 3,
    isActive: true,
  },
  // Digital Literacy
  {
    id: 'seced-digital-01',
    profileId: 'secondary-school-educator',
    categoryId: 'edu-secondary-soft-skills',
    competencyId: 'digital-literacy',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál de las siguientes prácticas promueve mejor el uso responsable y crítico de la tecnología entre los estudiantes de secundaria?',
      en: 'Which of the following practices best promotes responsible and critical use of technology among secondary students?',
      fr: 'Laquelle des pratiques suivantes favorise le mieux l\'utilisation responsable et critique de la technologie chez les élèves du secondaire ?',
    },
    options: [
      { id: 'a', text: { es: 'Prohibir completamente el uso de dispositivos electrónicos en el aula', en: 'Completely ban the use of electronic devices in the classroom', fr: 'Interdire complètement l\'utilisation d\'appareils électroniques en classe' }, value: 10 },
      { id: 'b', text: { es: 'Integrar herramientas digitales en las actividades de clase enseñando alfabetización mediática, verificación de fuentes y ciudadanía digital', en: 'Integrate digital tools into class activities while teaching media literacy, source verification, and digital citizenship', fr: 'Intégrer les outils numériques dans les activités de classe en enseignant l\'éducation aux médias, la vérification des sources et la citoyenneté numérique' }, value: 100 },
      { id: 'c', text: { es: 'Permitir uso libre de tecnología sin guía ni restricciones', en: 'Allow unrestricted technology use without guidance', fr: 'Permettre l\'utilisation libre de la technologie sans guide ni restrictions' }, value: 15 },
      { id: 'd', text: { es: 'Usar la tecnología solo para proyectar presentaciones del docente', en: 'Use technology only to project teacher presentations', fr: 'Utiliser la technologie uniquement pour projeter les présentations de l\'enseignant' }, value: 30 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },
  {
    id: 'seced-digital-02',
    profileId: 'secondary-school-educator',
    categoryId: 'edu-secondary-soft-skills',
    competencyId: 'digital-literacy',
    type: 'open-text',
    content: {
      es: 'Describa cómo integraría una herramienta digital (plataforma educativa, aplicación, recurso en línea) en una secuencia didáctica de su materia. Explique qué herramienta usaría, con qué objetivo pedagógico y cómo abordaría los riesgos del uso de tecnología con adolescentes.',
      en: 'Describe how you would integrate a digital tool (educational platform, app, online resource) into a teaching sequence for your subject. Explain what tool you would use, with what pedagogical objective, and how you would address the risks of technology use with adolescents.',
      fr: 'Décrivez comment vous intégreriez un outil numérique (plateforme éducative, application, ressource en ligne) dans une séquence didactique de votre matière. Expliquez quel outil vous utiliseriez, avec quel objectif pédagogique et comment vous aborderiez les risques de l\'utilisation de la technologie avec les adolescents.',
    },
    rubric: {
      es: 'Evaluar: (1) Selección pertinente de la herramienta digital, (2) Alineación con un objetivo pedagógico claro, (3) Conciencia sobre riesgos digitales (privacidad, ciberacoso, desinformación), (4) Estrategias de uso responsable, (5) Viabilidad de implementación en el contexto escolar.',
      en: 'Evaluate: (1) Relevant selection of the digital tool, (2) Alignment with a clear pedagogical objective, (3) Awareness of digital risks (privacy, cyberbullying, misinformation), (4) Responsible use strategies, (5) Feasibility of implementation in the school context.',
      fr: 'Évaluer : (1) Sélection pertinente de l\'outil numérique, (2) Alignement avec un objectif pédagogique clair, (3) Conscience des risques numériques (vie privée, cyberharcèlement, désinformation), (4) Stratégies d\'utilisation responsable, (5) Faisabilité de mise en œuvre dans le contexte scolaire.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 5,
    isActive: true,
  },
];

// --- Secondary School Educator: Readiness for Change ---
const secEdReadinessQuestions: Question[] = [
  // Interdisciplinary Teaching
  {
    id: 'seced-inter-01',
    profileId: 'secondary-school-educator',
    categoryId: 'edu-secondary-readiness',
    competencyId: 'interdisciplinary-teaching',
    type: 'scale',
    content: {
      es: '¿Con qué frecuencia diseña o participa en proyectos que integran su materia con otras disciplinas (por ejemplo, ciencias con matemáticas, historia con literatura)?',
      en: 'How often do you design or participate in projects that integrate your subject with other disciplines (e.g., science with math, history with literature)?',
      fr: 'À quelle fréquence concevez-vous ou participez-vous à des projets qui intègrent votre matière à d\'autres disciplines (par exemple, sciences et mathématiques, histoire et littérature) ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nunca', en: 'Never', fr: 'Jamais' },
      max: { es: 'Muy frecuentemente', en: 'Very frequently', fr: 'Très fréquemment' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'seced-inter-02',
    profileId: 'secondary-school-educator',
    categoryId: 'edu-secondary-readiness',
    competencyId: 'interdisciplinary-teaching',
    type: 'open-text',
    content: {
      es: 'Proponga un proyecto interdisciplinario para estudiantes de secundaria que conecte su área de especialización con al menos otra materia. Describa los objetivos de aprendizaje, las actividades principales y cómo se evaluaría el proyecto.',
      en: 'Propose an interdisciplinary project for secondary students that connects your area of specialization with at least one other subject. Describe the learning objectives, main activities, and how the project would be assessed.',
      fr: 'Proposez un projet interdisciplinaire pour des élèves du secondaire qui relie votre domaine de spécialisation à au moins une autre matière. Décrivez les objectifs d\'apprentissage, les activités principales et comment le projet serait évalué.',
    },
    rubric: {
      es: 'Evaluar: (1) Conexión significativa entre disciplinas (no superficial), (2) Objetivos de aprendizaje claros y medibles, (3) Relevancia para la vida de los adolescentes, (4) Viabilidad en un entorno escolar real, (5) Criterios de evaluación que consideren ambas disciplinas.',
      en: 'Evaluate: (1) Meaningful connection between disciplines (not superficial), (2) Clear and measurable learning objectives, (3) Relevance to adolescents\' lives, (4) Feasibility in a real school setting, (5) Assessment criteria that consider both disciplines.',
      fr: 'Évaluer : (1) Connexion significative entre les disciplines (pas superficielle), (2) Objectifs d\'apprentissage clairs et mesurables, (3) Pertinence pour la vie des adolescents, (4) Faisabilité dans un cadre scolaire réel, (5) Critères d\'évaluation prenant en compte les deux disciplines.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 2,
    isActive: true,
  },
  // Data-Driven Instruction
  {
    id: 'seced-data-01',
    profileId: 'secondary-school-educator',
    categoryId: 'edu-secondary-readiness',
    competencyId: 'data-driven-instruction',
    type: 'multiple-choice',
    content: {
      es: 'Después de aplicar un examen, descubre que el 60% del grupo reprobó un tema específico. ¿Cuál es la acción más adecuada?',
      en: 'After administering a test, you discover that 60% of the class failed a specific topic. What is the most appropriate action?',
      fr: 'Après avoir administré un examen, vous découvrez que 60 % de la classe a échoué sur un sujet spécifique. Quelle est l\'action la plus appropriée ?',
    },
    options: [
      { id: 'a', text: { es: 'Continuar con el temario porque el programa debe cumplirse en tiempo', en: 'Continue with the syllabus because the program must be completed on time', fr: 'Continuer avec le programme car il doit être complété à temps' }, value: 10 },
      { id: 'b', text: { es: 'Analizar los errores más comunes, ajustar la estrategia didáctica y retomar el tema con un enfoque diferente', en: 'Analyze the most common errors, adjust the teaching strategy, and revisit the topic with a different approach', fr: 'Analyser les erreurs les plus courantes, ajuster la stratégie pédagogique et reprendre le sujet avec une approche différente' }, value: 100 },
      { id: 'c', text: { es: 'Dar una oportunidad de recuperación con el mismo examen', en: 'Give a recovery opportunity with the same test', fr: 'Donner une opportunité de rattrapage avec le même examen' }, value: 30 },
      { id: 'd', text: { es: 'Asumir que los estudiantes no estudiaron lo suficiente y pasar al siguiente tema', en: 'Assume the students did not study enough and move on to the next topic', fr: 'Supposer que les élèves n\'ont pas assez étudié et passer au sujet suivant' }, value: 0 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 3,
    isActive: true,
  },
  // Educational Innovation
  {
    id: 'seced-innov-01',
    profileId: 'secondary-school-educator',
    categoryId: 'edu-secondary-readiness',
    competencyId: 'edu-innovation',
    type: 'multiple-choice',
    content: {
      es: 'Su institución le pide implementar la metodología de "aula invertida" (flipped classroom) en sus clases. ¿Cuál es su reacción?',
      en: 'Your institution asks you to implement the "flipped classroom" methodology in your classes. What is your reaction?',
      fr: 'Votre établissement vous demande de mettre en œuvre la méthodologie de « classe inversée » dans vos cours. Quelle est votre réaction ?',
    },
    options: [
      { id: 'a', text: { es: 'Investigar la metodología, diseñar un plan piloto y solicitar retroalimentación de los estudiantes para iterar', en: 'Research the methodology, design a pilot plan, and request student feedback to iterate', fr: 'Rechercher la méthodologie, concevoir un plan pilote et demander un retour des élèves pour itérer' }, value: 100 },
      { id: 'b', text: { es: 'Negarse porque los métodos tradicionales siempre han funcionado bien', en: 'Refuse because traditional methods have always worked well', fr: 'Refuser car les méthodes traditionnelles ont toujours bien fonctionné' }, value: 0 },
      { id: 'c', text: { es: 'Aceptar pero seguir enseñando igual esperando que nadie lo note', en: 'Accept but continue teaching the same way hoping nobody notices', fr: 'Accepter mais continuer à enseigner de la même manière en espérant que personne ne le remarque' }, value: 5 },
      { id: 'd', text: { es: 'Implementarlo de inmediato sin capacitación ni planificación previa', en: 'Implement it immediately without training or prior planning', fr: 'Le mettre en œuvre immédiatement sans formation ni planification préalable' }, value: 25 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },
  {
    id: 'seced-innov-02',
    profileId: 'secondary-school-educator',
    categoryId: 'edu-secondary-readiness',
    competencyId: 'edu-innovation',
    type: 'scenario',
    content: {
      es: 'El ministerio de educación anuncia una reforma curricular que cambia significativamente los contenidos y la metodología de evaluación de su materia. Tendrá 6 meses para adaptarse antes de la implementación obligatoria.\n\nContexto: Muchos colegas están molestos y resisten el cambio. Los recursos de capacitación disponibles son limitados.',
      en: 'The ministry of education announces a curricular reform that significantly changes the content and assessment methodology of your subject. You will have 6 months to adapt before mandatory implementation.\n\nContext: Many colleagues are upset and resisting the change. Available training resources are limited.',
      fr: 'Le ministère de l\'éducation annonce une réforme curriculaire qui modifie significativement les contenus et la méthodologie d\'évaluation de votre matière. Vous aurez 6 mois pour vous adapter avant la mise en œuvre obligatoire.\n\nContexte : De nombreux collègues sont mécontents et résistent au changement. Les ressources de formation disponibles sont limitées.',
    },
    rubric: {
      es: 'Evaluar: (1) Actitud proactiva frente al cambio, (2) Estrategia personal de capacitación y actualización, (3) Liderazgo o colaboración con colegas para abordar la transición, (4) Búsqueda creativa de recursos cuando los oficiales son limitados, (5) Plan de implementación gradual realista.',
      en: 'Evaluate: (1) Proactive attitude toward change, (2) Personal training and updating strategy, (3) Leadership or collaboration with colleagues to address the transition, (4) Creative search for resources when official ones are limited, (5) Realistic gradual implementation plan.',
      fr: 'Évaluer : (1) Attitude proactive face au changement, (2) Stratégie personnelle de formation et de mise à jour, (3) Leadership ou collaboration avec les collègues pour aborder la transition, (4) Recherche créative de ressources lorsque les ressources officielles sont limitées, (5) Plan de mise en œuvre progressive réaliste.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 5,
    isActive: true,
  },
];

// ============================================================================
// SALES ASSOCIATE QUESTIONS
// ============================================================================

// --- Sales Associate: Professional Skills ---
const salesAssociateProfessionalQuestions: Question[] = [
  // Product Knowledge
  {
    id: 'sa-prod-01',
    profileId: 'sales-associate',
    categoryId: 'sales-professional',
    competencyId: 'sales-product-knowledge',
    type: 'multiple-choice',
    content: {
      es: 'Un cliente pregunta por las diferencias entre dos modelos de teléfono celular similares en precio. ¿Cuál es la mejor forma de responder?',
      en: 'A customer asks about the differences between two similarly priced cell phone models. What is the best way to respond?',
      fr: 'Un client demande les différences entre deux modèles de téléphone portable de prix similaire. Quelle est la meilleure façon de répondre ?',
    },
    options: [
      { id: 'a', text: { es: 'Comparar características clave (cámara, batería, almacenamiento) según las necesidades expresadas por el cliente', en: 'Compare key features (camera, battery, storage) based on the customer\'s expressed needs', fr: 'Comparer les caractéristiques clés (caméra, batterie, stockage) selon les besoins exprimés par le client' }, value: 100 },
      { id: 'b', text: { es: 'Recomendar el más caro porque tiene mejor margen de ganancia', en: 'Recommend the more expensive one because it has a better profit margin', fr: 'Recommander le plus cher car il a une meilleure marge bénéficiaire' }, value: 10 },
      { id: 'c', text: { es: 'Decir que ambos son iguales y que elija el que más le guste', en: 'Say both are the same and let them pick whichever they like', fr: 'Dire que les deux sont identiques et de choisir celui qui leur plaît' }, value: 20 },
      { id: 'd', text: { es: 'Leer las especificaciones de la etiqueta de cada producto sin interpretarlas', en: 'Read the specs from each product label without interpreting them', fr: 'Lire les spécifications de l\'étiquette de chaque produit sans les interpréter' }, value: 40 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'sa-prod-02',
    profileId: 'sales-associate',
    categoryId: 'sales-professional',
    competencyId: 'sales-product-knowledge',
    type: 'scale',
    content: {
      es: '¿Qué tan seguro se siente explicando las características técnicas y beneficios de los productos que vende?',
      en: 'How confident do you feel explaining the technical features and benefits of the products you sell?',
      fr: 'Dans quelle mesure vous sentez-vous à l\'aise pour expliquer les caractéristiques techniques et les avantages des produits que vous vendez ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada seguro', en: 'Not confident at all', fr: 'Pas du tout confiant' },
      max: { es: 'Muy seguro', en: 'Very confident', fr: 'Très confiant' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },
  // Sales Techniques
  {
    id: 'sa-tech-01',
    profileId: 'sales-associate',
    categoryId: 'sales-professional',
    competencyId: 'sales-techniques',
    type: 'scenario',
    content: {
      es: 'Un cliente entra a la tienda y dice: "Solo estoy mirando". Lleva 10 minutos observando una sección de productos premium sin pedir ayuda.\n\nDescribe paso a paso cómo abordarías a este cliente para convertir su visita en una oportunidad de venta sin ser invasivo.',
      en: 'A customer walks into the store and says: "I\'m just looking." They\'ve spent 10 minutes browsing a premium product section without asking for help.\n\nDescribe step by step how you would approach this customer to turn their visit into a sales opportunity without being pushy.',
      fr: 'Un client entre dans le magasin et dit : « Je ne fais que regarder. » Il passe 10 minutes à parcourir une section de produits premium sans demander d\'aide.\n\nDécrivez étape par étape comment vous aborderiez ce client pour transformer sa visite en opportunité de vente sans être insistant.',
    },
    rubric: {
      es: 'Evaluar: (1) Momento adecuado del abordaje, (2) Técnica de acercamiento no invasiva, (3) Identificación de necesidades mediante preguntas abiertas, (4) Presentación de beneficios relevantes, (5) Cierre suave o invitación a seguir la conversación.',
      en: 'Evaluate: (1) Appropriate timing of approach, (2) Non-invasive approach technique, (3) Needs identification through open-ended questions, (4) Presentation of relevant benefits, (5) Soft close or invitation to continue the conversation.',
      fr: 'Évaluer : (1) Moment approprié de l\'approche, (2) Technique d\'approche non invasive, (3) Identification des besoins par des questions ouvertes, (4) Présentation des avantages pertinents, (5) Clôture douce ou invitation à poursuivre la conversation.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },
  {
    id: 'sa-tech-02',
    profileId: 'sales-associate',
    categoryId: 'sales-professional',
    competencyId: 'sales-techniques',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál es la técnica más efectiva para cerrar una venta cuando el cliente está indeciso?',
      en: 'What is the most effective technique to close a sale when the customer is undecided?',
      fr: 'Quelle est la technique la plus efficace pour conclure une vente lorsque le client est indécis ?',
    },
    options: [
      { id: 'a', text: { es: 'Resumir los beneficios principales y ofrecer una opción que resuelva sus dudas principales', en: 'Summarize the main benefits and offer an option that addresses their main concerns', fr: 'Résumer les principaux avantages et proposer une option qui répond à leurs principales préoccupations' }, value: 100 },
      { id: 'b', text: { es: 'Presionar al cliente diciendo que la oferta termina hoy', en: 'Pressure the customer by saying the offer ends today', fr: 'Mettre la pression sur le client en disant que l\'offre se termine aujourd\'hui' }, value: 15 },
      { id: 'c', text: { es: 'Dejarlo solo para que piense y regrese cuando esté listo', en: 'Leave them alone to think and come back when they\'re ready', fr: 'Le laisser seul pour réfléchir et revenir quand il sera prêt' }, value: 30 },
      { id: 'd', text: { es: 'Ofrecer un descuento inmediatamente sin que el cliente lo pida', en: 'Immediately offer a discount without the customer asking', fr: 'Offrir immédiatement une remise sans que le client ne le demande' }, value: 20 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },
  // POS & Inventory Systems
  {
    id: 'sa-pos-01',
    profileId: 'sales-associate',
    categoryId: 'sales-professional',
    competencyId: 'pos-inventory',
    type: 'multiple-choice',
    content: {
      es: 'Al procesar un pago, el sistema de punto de venta muestra un error y no puede completar la transacción con tarjeta. ¿Qué hace?',
      en: 'While processing a payment, the POS system shows an error and cannot complete the card transaction. What do you do?',
      fr: 'Lors du traitement d\'un paiement, le système de point de vente affiche une erreur et ne peut pas finaliser la transaction par carte. Que faites-vous ?',
    },
    options: [
      { id: 'a', text: { es: 'Intentar la transacción nuevamente, verificar la conexión y si persiste, ofrecer alternativas de pago mientras se contacta al soporte técnico', en: 'Retry the transaction, check the connection, and if it persists, offer alternative payment methods while contacting technical support', fr: 'Réessayer la transaction, vérifier la connexion et si le problème persiste, proposer des modes de paiement alternatifs tout en contactant le support technique' }, value: 100 },
      { id: 'b', text: { es: 'Pedir al cliente que regrese más tarde cuando el sistema funcione', en: 'Ask the customer to come back later when the system is working', fr: 'Demander au client de revenir plus tard quand le système fonctionnera' }, value: 10 },
      { id: 'c', text: { es: 'Llamar inmediatamente al gerente sin intentar solucionar el problema', en: 'Immediately call the manager without trying to solve the problem', fr: 'Appeler immédiatement le responsable sans essayer de résoudre le problème' }, value: 30 },
      { id: 'd', text: { es: 'Continuar intentando la misma transacción repetidamente hasta que funcione', en: 'Keep retrying the same transaction repeatedly until it works', fr: 'Continuer à réessayer la même transaction jusqu\'à ce qu\'elle fonctionne' }, value: 20 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
  {
    id: 'sa-pos-02',
    profileId: 'sales-associate',
    categoryId: 'sales-professional',
    competencyId: 'pos-inventory',
    type: 'scale',
    content: {
      es: '¿Qué tan competente se considera en el manejo de sistemas de punto de venta, lectores de código de barras y software de inventario?',
      en: 'How competent do you consider yourself in using POS systems, barcode scanners, and inventory software?',
      fr: 'Dans quelle mesure vous considérez-vous compétent dans l\'utilisation des systèmes de point de vente, des lecteurs de codes-barres et des logiciels d\'inventaire ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada competente', en: 'Not competent at all', fr: 'Pas du tout compétent' },
      max: { es: 'Muy competente', en: 'Very competent', fr: 'Très compétent' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 6,
    isActive: true,
  },
  // Visual Merchandising
  {
    id: 'sa-merch-01',
    profileId: 'sales-associate',
    categoryId: 'sales-professional',
    competencyId: 'visual-merchandising',
    type: 'open-text',
    content: {
      es: 'Describa cómo organizaría un exhibidor de temporada para maximizar el atractivo visual y las ventas. Considere ubicación, iluminación, señalización y disposición del producto.',
      en: 'Describe how you would organize a seasonal display to maximize visual appeal and sales. Consider location, lighting, signage, and product arrangement.',
      fr: 'Décrivez comment vous organiseriez un présentoir saisonnier pour maximiser l\'attrait visuel et les ventes. Considérez l\'emplacement, l\'éclairage, la signalétique et la disposition des produits.',
    },
    rubric: {
      es: 'Evaluar: (1) Comprensión de principios de merchandising visual, (2) Consideración del flujo de clientes, (3) Uso estratégico de señalización y precios, (4) Creatividad en la presentación, (5) Enfoque en la conversión de ventas.',
      en: 'Evaluate: (1) Understanding of visual merchandising principles, (2) Consideration of customer flow, (3) Strategic use of signage and pricing, (4) Creativity in presentation, (5) Focus on sales conversion.',
      fr: 'Évaluer : (1) Compréhension des principes de merchandising visuel, (2) Prise en compte du flux de clients, (3) Utilisation stratégique de la signalétique et des prix, (4) Créativité dans la présentation, (5) Orientation vers la conversion des ventes.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 7,
    isActive: true,
  },
];

// --- Sales Associate: Soft Skills ---
const salesAssociateSoftSkillsQuestions: Question[] = [
  // Customer Service
  {
    id: 'sa-cust-01',
    profileId: 'sales-associate',
    categoryId: 'sales-soft-skills',
    competencyId: 'retail-customer-service',
    type: 'scenario',
    content: {
      es: 'Una clienta habitual llega a la tienda visiblemente molesta porque un producto que compró la semana pasada dejó de funcionar. No tiene el recibo de compra y la política de la tienda requiere recibo para devoluciones.\n\nContexto: La clienta gasta en promedio $500 mensuales en la tienda y hoy hay otros clientes observando la situación.',
      en: 'A regular customer arrives at the store visibly upset because a product she bought last week stopped working. She doesn\'t have the purchase receipt and the store policy requires a receipt for returns.\n\nContext: The customer spends an average of $500 monthly at the store and other customers are watching the situation today.',
      fr: 'Une cliente régulière arrive au magasin visiblement contrariée car un produit acheté la semaine dernière a cessé de fonctionner. Elle n\'a pas le ticket de caisse et la politique du magasin exige le ticket pour les retours.\n\nContexte : La cliente dépense en moyenne 500 $ par mois dans le magasin et d\'autres clients observent la situation aujourd\'hui.',
    },
    rubric: {
      es: 'Evaluar: (1) Empatía y escucha activa, (2) Búsqueda de solución dentro de las políticas, (3) Manejo de la presión de ser observado, (4) Preservación de la relación con el cliente, (5) Equilibrio entre políticas y satisfacción del cliente.',
      en: 'Evaluate: (1) Empathy and active listening, (2) Solution-seeking within policies, (3) Handling pressure of being observed, (4) Preservation of customer relationship, (5) Balance between policies and customer satisfaction.',
      fr: 'Évaluer : (1) Empathie et écoute active, (2) Recherche de solution dans le cadre des politiques, (3) Gestion de la pression d\'être observé, (4) Préservation de la relation client, (5) Équilibre entre politiques et satisfaction client.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 1,
    isActive: true,
  },
  {
    id: 'sa-cust-02',
    profileId: 'sales-associate',
    categoryId: 'sales-soft-skills',
    competencyId: 'retail-customer-service',
    type: 'scale',
    content: {
      es: '¿Qué tan cómodo se siente atendiendo a múltiples clientes simultáneamente en momentos de alta afluencia en la tienda?',
      en: 'How comfortable do you feel serving multiple customers simultaneously during busy periods in the store?',
      fr: 'Dans quelle mesure êtes-vous à l\'aise pour servir plusieurs clients simultanément pendant les périodes d\'affluence en magasin ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada cómodo', en: 'Not comfortable at all', fr: 'Pas du tout à l\'aise' },
      max: { es: 'Muy cómodo', en: 'Very comfortable', fr: 'Très à l\'aise' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },
  // Conflict Resolution
  {
    id: 'sa-conf-01',
    profileId: 'sales-associate',
    categoryId: 'sales-soft-skills',
    competencyId: 'conflict-resolution',
    type: 'multiple-choice',
    content: {
      es: 'Un cliente se queja en voz alta de que el precio en la caja es diferente al que vio en el estante. Otros clientes están formados detrás de él. ¿Qué hace?',
      en: 'A customer loudly complains that the price at the register is different from what they saw on the shelf. Other customers are waiting in line behind them. What do you do?',
      fr: 'Un client se plaint bruyamment que le prix en caisse est différent de celui qu\'il a vu en rayon. D\'autres clients attendent derrière lui. Que faites-vous ?',
    },
    options: [
      { id: 'a', text: { es: 'Disculparse, verificar rápidamente el precio en el estante, y si hay error, honrar el precio exhibido mientras se corrige la discrepancia', en: 'Apologize, quickly verify the shelf price, and if there\'s an error, honor the displayed price while correcting the discrepancy', fr: 'S\'excuser, vérifier rapidement le prix en rayon, et s\'il y a une erreur, honorer le prix affiché tout en corrigeant l\'écart' }, value: 100 },
      { id: 'b', text: { es: 'Decirle que el precio del sistema es el correcto y que no puede hacer nada', en: 'Tell them the system price is correct and there\'s nothing you can do', fr: 'Lui dire que le prix du système est correct et que vous ne pouvez rien faire' }, value: 10 },
      { id: 'c', text: { es: 'Llamar al gerente inmediatamente sin intentar resolver la situación', en: 'Immediately call the manager without trying to resolve the situation', fr: 'Appeler immédiatement le responsable sans essayer de résoudre la situation' }, value: 30 },
      { id: 'd', text: { es: 'Ofrecer un descuento adicional para compensar la molestia sin verificar el precio', en: 'Offer an additional discount to compensate for the inconvenience without verifying the price', fr: 'Offrir une remise supplémentaire pour compenser le désagrément sans vérifier le prix' }, value: 25 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 3,
    isActive: true,
  },
  {
    id: 'sa-conf-02',
    profileId: 'sales-associate',
    categoryId: 'sales-soft-skills',
    competencyId: 'conflict-resolution',
    type: 'open-text',
    content: {
      es: 'Describa una situación en la que tuvo que manejar un cliente difícil o una queja complicada. ¿Qué hizo, cuál fue el resultado, y qué aprendió de la experiencia?',
      en: 'Describe a situation where you had to handle a difficult customer or a complicated complaint. What did you do, what was the result, and what did you learn from the experience?',
      fr: 'Décrivez une situation où vous avez dû gérer un client difficile ou une plainte compliquée. Qu\'avez-vous fait, quel a été le résultat, et qu\'avez-vous appris de cette expérience ?',
    },
    rubric: {
      es: 'Evaluar: (1) Descripción clara de la situación, (2) Acciones específicas tomadas, (3) Control emocional demostrado, (4) Resultado obtenido, (5) Reflexión y aprendizaje aplicable.',
      en: 'Evaluate: (1) Clear situation description, (2) Specific actions taken, (3) Emotional control demonstrated, (4) Result obtained, (5) Applicable reflection and learning.',
      fr: 'Évaluer : (1) Description claire de la situation, (2) Actions spécifiques prises, (3) Contrôle émotionnel démontré, (4) Résultat obtenu, (5) Réflexion et apprentissage applicables.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 4,
    isActive: true,
  },
  // Team Collaboration
  {
    id: 'sa-team-01',
    profileId: 'sales-associate',
    categoryId: 'sales-soft-skills',
    competencyId: 'retail-teamwork',
    type: 'scenario',
    content: {
      es: 'Es viernes de quincena y la tienda está llena. Tu compañero de turno no se presentó a trabajar y el gerente está en reunión. Tienes fila en caja, un cliente necesita ayuda en el piso de ventas, y acaba de llegar un envío de mercancía que debe guardarse.\n\nExplica cómo priorizarías y manejarías esta situación.',
      en: 'It\'s payday Friday and the store is packed. Your shift partner didn\'t show up and the manager is in a meeting. You have a line at the register, a customer needs help on the sales floor, and a shipment just arrived that needs to be stored.\n\nExplain how you would prioritize and handle this situation.',
      fr: 'C\'est vendredi de paie et le magasin est bondé. Votre collègue de quart ne s\'est pas présenté et le responsable est en réunion. Vous avez une file en caisse, un client a besoin d\'aide dans l\'espace de vente, et une livraison vient d\'arriver qui doit être rangée.\n\nExpliquez comment vous prioriseriez et géreriez cette situation.',
    },
    rubric: {
      es: 'Evaluar: (1) Priorización correcta (clientes primero), (2) Comunicación proactiva con el gerente, (3) Manejo del estrés, (4) Soluciones creativas para cubrir múltiples necesidades, (5) Disposición a asumir responsabilidades extra.',
      en: 'Evaluate: (1) Correct prioritization (customers first), (2) Proactive communication with manager, (3) Stress management, (4) Creative solutions to cover multiple needs, (5) Willingness to take on extra responsibilities.',
      fr: 'Évaluer : (1) Priorisation correcte (clients en premier), (2) Communication proactive avec le responsable, (3) Gestion du stress, (4) Solutions créatives pour couvrir plusieurs besoins, (5) Volonté d\'assumer des responsabilités supplémentaires.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 5,
    isActive: true,
  },
  {
    id: 'sa-team-02',
    profileId: 'sales-associate',
    categoryId: 'sales-soft-skills',
    competencyId: 'retail-teamwork',
    type: 'scale',
    content: {
      es: '¿Qué tan dispuesto está a cubrir las tareas de un compañero o cambiar de turno cuando el equipo lo necesita?',
      en: 'How willing are you to cover a colleague\'s tasks or switch shifts when the team needs it?',
      fr: 'Dans quelle mesure êtes-vous disposé à couvrir les tâches d\'un collègue ou à changer de quart lorsque l\'équipe en a besoin ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada dispuesto', en: 'Not willing at all', fr: 'Pas du tout disposé' },
      max: { es: 'Totalmente dispuesto', en: 'Completely willing', fr: 'Tout à fait disposé' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 6,
    isActive: true,
  },
];

// --- Sales Associate: Readiness for Change ---
const salesAssociateReadinessQuestions: Question[] = [
  // Upselling & Cross-Selling
  {
    id: 'sa-upsell-01',
    profileId: 'sales-associate',
    categoryId: 'sales-readiness',
    competencyId: 'upselling-cross-selling',
    type: 'scenario',
    content: {
      es: 'Un cliente compra un teléfono celular de gama media. Tienes la oportunidad de ofrecer productos complementarios: funda protectora, protector de pantalla, audífonos inalámbricos y un plan de garantía extendida.\n\nDescribe tu estrategia para sugerir estos productos adicionales sin que el cliente se sienta presionado.',
      en: 'A customer is buying a mid-range cell phone. You have the opportunity to offer complementary products: a protective case, screen protector, wireless earbuds, and an extended warranty plan.\n\nDescribe your strategy for suggesting these additional products without making the customer feel pressured.',
      fr: 'Un client achète un téléphone portable de gamme moyenne. Vous avez l\'opportunité de proposer des produits complémentaires : une coque de protection, un protecteur d\'écran, des écouteurs sans fil et un plan de garantie prolongée.\n\nDécrivez votre stratégie pour suggérer ces produits supplémentaires sans que le client se sente sous pression.',
    },
    rubric: {
      es: 'Evaluar: (1) Conexión natural entre producto principal y complementarios, (2) Enfoque en el valor para el cliente, (3) Lectura de señales del cliente, (4) Técnica consultiva vs. impositiva, (5) Priorización inteligente de los complementos a ofrecer.',
      en: 'Evaluate: (1) Natural connection between main and complementary products, (2) Focus on customer value, (3) Reading customer signals, (4) Consultative vs. pushy technique, (5) Smart prioritization of which add-ons to offer.',
      fr: 'Évaluer : (1) Connexion naturelle entre le produit principal et les complémentaires, (2) Focus sur la valeur pour le client, (3) Lecture des signaux du client, (4) Technique consultative vs. imposante, (5) Priorisation intelligente des compléments à proposer.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 1,
    isActive: true,
  },
  {
    id: 'sa-upsell-02',
    profileId: 'sales-associate',
    categoryId: 'sales-readiness',
    competencyId: 'upselling-cross-selling',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál es el mejor momento para sugerir un producto complementario durante una venta?',
      en: 'When is the best time to suggest a complementary product during a sale?',
      fr: 'Quel est le meilleur moment pour suggérer un produit complémentaire pendant une vente ?',
    },
    options: [
      { id: 'a', text: { es: 'Cuando el cliente ya decidió el producto principal y durante el proceso de cierre, conectando el complemento con su necesidad', en: 'When the customer has decided on the main product and during the closing process, connecting the add-on to their need', fr: 'Quand le client a choisi le produit principal et pendant le processus de clôture, en reliant le complément à son besoin' }, value: 100 },
      { id: 'b', text: { es: 'Al inicio de la interacción, antes de que el cliente elija algo', en: 'At the start of the interaction, before the customer chooses anything', fr: 'Au début de l\'interaction, avant que le client ne choisisse quoi que ce soit' }, value: 15 },
      { id: 'c', text: { es: 'Después de que el cliente ya pagó, en la salida de la tienda', en: 'After the customer has already paid, at the store exit', fr: 'Après que le client a déjà payé, à la sortie du magasin' }, value: 10 },
      { id: 'd', text: { es: 'Solo cuando el gerente instruye que se deben ofrecer productos adicionales', en: 'Only when the manager instructs that additional products should be offered', fr: 'Seulement quand le responsable demande de proposer des produits supplémentaires' }, value: 20 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },
  // Retail Adaptability
  {
    id: 'sa-adapt-01',
    profileId: 'sales-associate',
    categoryId: 'sales-readiness',
    competencyId: 'retail-adaptability',
    type: 'multiple-choice',
    content: {
      es: 'La tienda acaba de recibir una nueva línea de productos que usted no conoce y mañana inicia la promoción de lanzamiento. ¿Cómo se prepara?',
      en: 'The store just received a new product line you\'re unfamiliar with and the launch promotion starts tomorrow. How do you prepare?',
      fr: 'Le magasin vient de recevoir une nouvelle gamme de produits que vous ne connaissez pas et la promotion de lancement commence demain. Comment vous préparez-vous ?',
    },
    options: [
      { id: 'a', text: { es: 'Revisar catálogos, probar los productos si es posible, preguntar al proveedor o gerente, y preparar puntos clave de venta', en: 'Review catalogs, try the products if possible, ask the supplier or manager, and prepare key selling points', fr: 'Consulter les catalogues, essayer les produits si possible, demander au fournisseur ou responsable, et préparer les arguments de vente clés' }, value: 100 },
      { id: 'b', text: { es: 'Leer la información del empaque el mismo día de la promoción', en: 'Read the packaging information on the day of the promotion', fr: 'Lire les informations de l\'emballage le jour de la promotion' }, value: 25 },
      { id: 'c', text: { es: 'Esperar a que los clientes pregunten y buscar la información en el momento', en: 'Wait for customers to ask and look up the information on the spot', fr: 'Attendre que les clients posent des questions et chercher l\'information sur le moment' }, value: 15 },
      { id: 'd', text: { es: 'Derivar todas las preguntas sobre la nueva línea al gerente', en: 'Direct all questions about the new line to the manager', fr: 'Diriger toutes les questions sur la nouvelle gamme vers le responsable' }, value: 10 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 3,
    isActive: true,
  },
  {
    id: 'sa-adapt-02',
    profileId: 'sales-associate',
    categoryId: 'sales-readiness',
    competencyId: 'retail-adaptability',
    type: 'scale',
    content: {
      es: '¿Qué tan bien se adapta cuando la tienda cambia la distribución de productos, las políticas de atención o los procesos de cobro?',
      en: 'How well do you adapt when the store changes product layouts, service policies, or checkout processes?',
      fr: 'Dans quelle mesure vous adaptez-vous quand le magasin change la disposition des produits, les politiques de service ou les processus de paiement ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Me cuesta mucho adaptarme', en: 'I struggle a lot to adapt', fr: 'J\'ai beaucoup de mal à m\'adapter' },
      max: { es: 'Me adapto rápidamente', en: 'I adapt quickly', fr: 'Je m\'adapte rapidement' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },
  // Retail Technology
  {
    id: 'sa-rtech-01',
    profileId: 'sales-associate',
    categoryId: 'sales-readiness',
    competencyId: 'retail-tech',
    type: 'multiple-choice',
    content: {
      es: 'La empresa implementa una nueva aplicación móvil para que los clientes consulten disponibilidad y hagan pedidos. Como dependiente, ¿cuál es su responsabilidad?',
      en: 'The company launches a new mobile app for customers to check availability and place orders. As a sales associate, what is your responsibility?',
      fr: 'L\'entreprise lance une nouvelle application mobile pour que les clients vérifient la disponibilité et passent des commandes. En tant que vendeur, quelle est votre responsabilité ?',
    },
    options: [
      { id: 'a', text: { es: 'Aprender a usar la app, ayudar a los clientes a descargarla y usarla, y reportar problemas que encuentre', en: 'Learn to use the app, help customers download and use it, and report any issues found', fr: 'Apprendre à utiliser l\'application, aider les clients à la télécharger et l\'utiliser, et signaler les problèmes rencontrés' }, value: 100 },
      { id: 'b', text: { es: 'Esperar a que el equipo de tecnología capacite a todo el personal', en: 'Wait for the technology team to train all staff', fr: 'Attendre que l\'équipe technologique forme tout le personnel' }, value: 30 },
      { id: 'c', text: { es: 'Decir a los clientes que descarguen la app y la usen por su cuenta', en: 'Tell customers to download the app and figure it out on their own', fr: 'Dire aux clients de télécharger l\'application et de se débrouiller seuls' }, value: 15 },
      { id: 'd', text: { es: 'No involucrarme porque eso es responsabilidad del departamento de sistemas', en: 'Not get involved because that\'s the IT department\'s responsibility', fr: 'Ne pas s\'impliquer car c\'est la responsabilité du département informatique' }, value: 0 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
  {
    id: 'sa-rtech-02',
    profileId: 'sales-associate',
    categoryId: 'sales-readiness',
    competencyId: 'retail-tech',
    type: 'open-text',
    content: {
      es: '¿Qué herramientas digitales o tecnológicas ha utilizado en su experiencia laboral en retail? Describa cómo las usó y qué tan rápido aprendió a dominarlas.',
      en: 'What digital or technological tools have you used in your retail work experience? Describe how you used them and how quickly you learned to master them.',
      fr: 'Quels outils numériques ou technologiques avez-vous utilisés dans votre expérience professionnelle en commerce de détail ? Décrivez comment vous les avez utilisés et à quelle vitesse vous avez appris à les maîtriser.',
    },
    rubric: {
      es: 'Evaluar: (1) Variedad de herramientas mencionadas, (2) Profundidad de uso (no solo superficial), (3) Velocidad de aprendizaje, (4) Aplicación práctica en ventas, (5) Actitud positiva hacia la tecnología.',
      en: 'Evaluate: (1) Variety of tools mentioned, (2) Depth of use (not just surface level), (3) Speed of learning, (4) Practical application in sales, (5) Positive attitude towards technology.',
      fr: 'Évaluer : (1) Variété des outils mentionnés, (2) Profondeur d\'utilisation (pas seulement superficielle), (3) Vitesse d\'apprentissage, (4) Application pratique en ventes, (5) Attitude positive envers la technologie.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 6,
    isActive: true,
  },
];

// ============================================================================
// K-12 SCHOOL PRINCIPAL QUESTIONS
// ============================================================================

// --- Professional Skills ---
const k12ProfessionalQuestions: Question[] = [
  // Educational Leadership
  {
    id: 'k12-lead-01',
    profileId: 'k12-school-principal',
    categoryId: 'k12-principal-professional',
    competencyId: 'k12-educational-leadership',
    type: 'multiple-choice',
    content: {
      es: 'Los resultados de las evaluaciones estandarizadas muestran una caída significativa en el rendimiento de matemáticas en los grados 4 a 7. ¿Cuál es su primer paso como director?',
      en: 'Standardized test results show a significant drop in math performance across grades 4 through 7. What is your first step as principal?',
      fr: 'Les résultats des évaluations standardisées montrent une baisse significative des performances en mathématiques de la 4e à la 7e année. Quelle est votre première action en tant que directeur ?',
    },
    options: [
      { id: 'a', text: { es: 'Comprar un nuevo programa de matemáticas de inmediato', en: 'Purchase a new math program immediately', fr: 'Acheter immédiatement un nouveau programme de mathématiques' }, value: 15 },
      { id: 'b', text: { es: 'Convocar al equipo docente de matemáticas para analizar los datos, identificar causas raíz y diseñar un plan de mejora colaborativo', en: 'Convene the math teaching team to analyze data, identify root causes, and design a collaborative improvement plan', fr: 'Réunir l\'équipe enseignante de mathématiques pour analyser les données, identifier les causes profondes et concevoir un plan d\'amélioration collaboratif' }, value: 100 },
      { id: 'c', text: { es: 'Enviar una comunicación a los padres explicando la situación', en: 'Send a communication to parents explaining the situation', fr: 'Envoyer une communication aux parents expliquant la situation' }, value: 30 },
      { id: 'd', text: { es: 'Esperar los resultados del próximo periodo para confirmar la tendencia', en: 'Wait for next period results to confirm the trend', fr: 'Attendre les résultats de la prochaine période pour confirmer la tendance' }, value: 10 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'k12-lead-02',
    profileId: 'k12-school-principal',
    categoryId: 'k12-principal-professional',
    competencyId: 'k12-educational-leadership',
    type: 'scenario',
    content: {
      es: 'Usted acaba de asumir la dirección de un colegio donde la moral del personal docente es baja, las inscripciones han disminuido un 15% en dos años y los padres de familia expresan insatisfacción con la calidad académica.\n\nDescriba su plan de acción para los primeros 90 días, incluyendo cómo priorizaría las iniciativas y cómo mediría el progreso.',
      en: 'You have just taken over as principal of a school where teacher morale is low, enrollment has declined 15% over two years, and parents are expressing dissatisfaction with academic quality.\n\nDescribe your action plan for the first 90 days, including how you would prioritize initiatives and measure progress.',
      fr: 'Vous venez de prendre la direction d\'une école où le moral des enseignants est bas, les inscriptions ont diminué de 15% en deux ans et les parents expriment leur insatisfaction quant à la qualité académique.\n\nDécrivez votre plan d\'action pour les 90 premiers jours, y compris comment vous prioriseriez les initiatives et mesureriez les progrès.',
    },
    rubric: {
      es: 'Evaluar: (1) Diagnóstico antes de actuar, (2) Comunicación con todas las partes interesadas, (3) Priorización clara, (4) Metas medibles a corto plazo, (5) Equilibrio entre lo urgente y lo importante, (6) Inclusión del personal en la solución.',
      en: 'Evaluate: (1) Diagnosis before action, (2) Communication with all stakeholders, (3) Clear prioritization, (4) Measurable short-term goals, (5) Balance between urgent and important, (6) Inclusion of staff in solutions.',
      fr: 'Évaluer : (1) Diagnostic avant l\'action, (2) Communication avec toutes les parties prenantes, (3) Priorisation claire, (4) Objectifs mesurables à court terme, (5) Équilibre entre l\'urgent et l\'important, (6) Inclusion du personnel dans les solutions.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 2,
    isActive: true,
  },
  // Faculty Management
  {
    id: 'k12-faculty-01',
    profileId: 'k12-school-principal',
    categoryId: 'k12-principal-professional',
    competencyId: 'k12-faculty-management',
    type: 'multiple-choice',
    content: {
      es: 'Un docente con 15 años de experiencia muestra resistencia a implementar las nuevas metodologías de enseñanza aprobadas por el colegio. ¿Cómo abordaría esta situación?',
      en: 'A teacher with 15 years of experience is resistant to implementing the new teaching methodologies approved by the school. How would you address this situation?',
      fr: 'Un enseignant avec 15 ans d\'expérience résiste à la mise en œuvre des nouvelles méthodologies d\'enseignement approuvées par l\'école. Comment aborderiez-vous cette situation ?',
    },
    options: [
      { id: 'a', text: { es: 'Iniciar un proceso disciplinario formal por incumplimiento', en: 'Initiate a formal disciplinary process for non-compliance', fr: 'Engager un processus disciplinaire formel pour non-conformité' }, value: 5 },
      { id: 'b', text: { es: 'Reunirse en privado para entender sus preocupaciones, ofrecer acompañamiento personalizado y buscar integrar su experiencia en la implementación', en: 'Meet privately to understand their concerns, offer personalized coaching, and seek to integrate their experience into the implementation', fr: 'Rencontrer en privé pour comprendre ses préoccupations, offrir un accompagnement personnalisé et chercher à intégrer son expérience dans la mise en œuvre' }, value: 100 },
      { id: 'c', text: { es: 'Ignorar la situación ya que tiene mucha experiencia y sabe lo que hace', en: 'Ignore the situation since they have extensive experience and know what they are doing', fr: 'Ignorer la situation puisqu\'il a beaucoup d\'expérience et sait ce qu\'il fait' }, value: 0 },
      { id: 'd', text: { es: 'Asignarlo a otra área donde no necesite usar las nuevas metodologías', en: 'Reassign them to another area where they do not need to use the new methodologies', fr: 'Le réaffecter dans un autre domaine où il n\'a pas besoin d\'utiliser les nouvelles méthodologies' }, value: 20 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 3,
    isActive: true,
  },
  {
    id: 'k12-faculty-02',
    profileId: 'k12-school-principal',
    categoryId: 'k12-principal-professional',
    competencyId: 'k12-faculty-management',
    type: 'scale',
    content: {
      es: '¿Con qué frecuencia realiza observaciones en el aula y brinda retroalimentación constructiva a sus docentes?',
      en: 'How often do you conduct classroom observations and provide constructive feedback to your teachers?',
      fr: 'À quelle fréquence effectuez-vous des observations en classe et fournissez-vous un retour constructif à vos enseignants ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nunca', en: 'Never', fr: 'Jamais' },
      max: { es: 'Semanalmente', en: 'Weekly', fr: 'Chaque semaine' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },
  // Curriculum Oversight
  {
    id: 'k12-curric-01',
    profileId: 'k12-school-principal',
    categoryId: 'k12-principal-professional',
    competencyId: 'k12-curriculum-oversight',
    type: 'open-text',
    content: {
      es: 'Describa cómo aseguraría la articulación curricular entre los niveles de primaria y secundaria en su centro educativo. ¿Qué mecanismos de coordinación implementaría?',
      en: 'Describe how you would ensure curricular articulation between primary and secondary levels in your school. What coordination mechanisms would you implement?',
      fr: 'Décrivez comment vous assureriez l\'articulation curriculaire entre les niveaux primaire et secondaire dans votre établissement. Quels mécanismes de coordination mettriez-vous en place ?',
    },
    rubric: {
      es: 'Evaluar: (1) Conocimiento de secuencia curricular K-12, (2) Mecanismos concretos de coordinación entre niveles, (3) Reuniones interdisciplinarias, (4) Seguimiento de progresión de aprendizajes, (5) Uso de datos para informar decisiones curriculares.',
      en: 'Evaluate: (1) Knowledge of K-12 curricular sequence, (2) Concrete cross-level coordination mechanisms, (3) Interdisciplinary meetings, (4) Learning progression tracking, (5) Data-driven curricular decisions.',
      fr: 'Évaluer : (1) Connaissance de la séquence curriculaire K-12, (2) Mécanismes concrets de coordination entre niveaux, (3) Réunions interdisciplinaires, (4) Suivi de la progression des apprentissages, (5) Décisions curriculaires basées sur les données.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 5,
    isActive: true,
  },
  // Budget Administration
  {
    id: 'k12-budget-01',
    profileId: 'k12-school-principal',
    categoryId: 'k12-principal-professional',
    competencyId: 'k12-budget-administration',
    type: 'multiple-choice',
    content: {
      es: 'El presupuesto escolar debe reducirse un 10% para el próximo año. ¿Cómo priorizaría los recortes?',
      en: 'The school budget must be reduced by 10% for next year. How would you prioritize the cuts?',
      fr: 'Le budget scolaire doit être réduit de 10% pour l\'année prochaine. Comment prioriseriez-vous les réductions ?',
    },
    options: [
      { id: 'a', text: { es: 'Recortar proporcionalmente todas las áreas por igual', en: 'Cut all areas proportionally and equally', fr: 'Réduire proportionnellement tous les domaines de manière égale' }, value: 25 },
      { id: 'b', text: { es: 'Analizar el impacto de cada partida en los resultados de aprendizaje, consultar con los equipos docentes y proteger las inversiones que más impactan al estudiante', en: 'Analyze each budget line\'s impact on learning outcomes, consult with teaching teams, and protect investments that most impact students', fr: 'Analyser l\'impact de chaque poste budgétaire sur les résultats d\'apprentissage, consulter les équipes enseignantes et protéger les investissements ayant le plus d\'impact sur les élèves' }, value: 100 },
      { id: 'c', text: { es: 'Eliminar las actividades extracurriculares y de enriquecimiento primero', en: 'Eliminate extracurricular and enrichment activities first', fr: 'Éliminer d\'abord les activités extrascolaires et d\'enrichissement' }, value: 15 },
      { id: 'd', text: { es: 'Solicitar a los padres de familia una cuota adicional para cubrir el déficit', en: 'Ask parents for an additional fee to cover the deficit', fr: 'Demander aux parents une cotisation supplémentaire pour couvrir le déficit' }, value: 30 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 6,
    isActive: true,
  },
  // Accreditation Compliance
  {
    id: 'k12-accred-01',
    profileId: 'k12-school-principal',
    categoryId: 'k12-principal-professional',
    competencyId: 'k12-accreditation-compliance',
    type: 'scale',
    content: {
      es: '¿Qué tan familiarizado está con los estándares de acreditación y los requisitos regulatorios de las autoridades educativas aplicables a su centro escolar?',
      en: 'How familiar are you with accreditation standards and regulatory requirements from education authorities applicable to your school?',
      fr: 'Dans quelle mesure êtes-vous familiarisé avec les normes d\'accréditation et les exigences réglementaires des autorités éducatives applicables à votre établissement ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada familiarizado', en: 'Not familiar at all', fr: 'Pas du tout familiarisé' },
      max: { es: 'Completamente familiarizado', en: 'Fully familiar', fr: 'Tout à fait familiarisé' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 7,
    isActive: true,
  },
  {
    id: 'k12-accred-02',
    profileId: 'k12-school-principal',
    categoryId: 'k12-principal-professional',
    competencyId: 'k12-accreditation-compliance',
    type: 'scenario',
    content: {
      es: 'Su colegio recibirá una visita de acreditación en 4 meses. Durante una autoevaluación interna, se identifican deficiencias en la documentación de planes de estudio, registros de desarrollo profesional docente y protocolos de seguridad.\n\nDescriba su plan de acción para preparar al colegio y asegurar el cumplimiento antes de la visita.',
      en: 'Your school will receive an accreditation visit in 4 months. During an internal self-assessment, deficiencies are identified in curriculum documentation, teacher professional development records, and safety protocols.\n\nDescribe your action plan to prepare the school and ensure compliance before the visit.',
      fr: 'Votre école recevra une visite d\'accréditation dans 4 mois. Lors d\'une auto-évaluation interne, des lacunes sont identifiées dans la documentation des programmes d\'études, les dossiers de développement professionnel des enseignants et les protocoles de sécurité.\n\nDécrivez votre plan d\'action pour préparer l\'école et assurer la conformité avant la visite.',
    },
    rubric: {
      es: 'Evaluar: (1) Priorización de deficiencias, (2) Asignación de responsables, (3) Cronograma realista, (4) Involucramiento del personal, (5) Sistemas de seguimiento, (6) Preparación para la visita en sí.',
      en: 'Evaluate: (1) Prioritization of deficiencies, (2) Assignment of responsible parties, (3) Realistic timeline, (4) Staff involvement, (5) Tracking systems, (6) Preparation for the visit itself.',
      fr: 'Évaluer : (1) Priorisation des lacunes, (2) Attribution des responsables, (3) Calendrier réaliste, (4) Implication du personnel, (5) Systèmes de suivi, (6) Préparation de la visite elle-même.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 8,
    isActive: true,
  },
];

// --- Soft Skills ---
const k12SoftSkillsQuestions: Question[] = [
  // Community Relations
  {
    id: 'k12-comm-01',
    profileId: 'k12-school-principal',
    categoryId: 'k12-principal-soft-skills',
    competencyId: 'k12-community-relations',
    type: 'multiple-choice',
    content: {
      es: 'Un grupo de padres de familia se presenta en su oficina molestos porque se eliminó una tradición escolar para dar espacio a una nueva iniciativa académica. ¿Cómo maneja la situación?',
      en: 'A group of parents arrives at your office upset because a school tradition was eliminated to make room for a new academic initiative. How do you handle the situation?',
      fr: 'Un groupe de parents se présente à votre bureau mécontent car une tradition scolaire a été supprimée pour faire place à une nouvelle initiative académique. Comment gérez-vous la situation ?',
    },
    options: [
      { id: 'a', text: { es: 'Les explico que la decisión ya fue tomada y es final', en: 'I explain that the decision has already been made and is final', fr: 'J\'explique que la décision a déjà été prise et est définitive' }, value: 10 },
      { id: 'b', text: { es: 'Los escucho activamente, valido sus sentimientos, explico las razones pedagógicas y busco un compromiso que respete ambas necesidades', en: 'I actively listen, validate their feelings, explain the pedagogical reasons, and seek a compromise that respects both needs', fr: 'J\'écoute activement, valide leurs sentiments, explique les raisons pédagogiques et cherche un compromis qui respecte les deux besoins' }, value: 100 },
      { id: 'c', text: { es: 'Cancelo la nueva iniciativa para evitar el conflicto', en: 'I cancel the new initiative to avoid conflict', fr: 'J\'annule la nouvelle initiative pour éviter le conflit' }, value: 15 },
      { id: 'd', text: { es: 'Derivo la queja al coordinador académico para que la resuelva', en: 'I redirect the complaint to the academic coordinator to resolve', fr: 'Je redirige la plainte au coordinateur académique pour qu\'il la résolve' }, value: 20 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'k12-comm-02',
    profileId: 'k12-school-principal',
    categoryId: 'k12-principal-soft-skills',
    competencyId: 'k12-community-relations',
    type: 'open-text',
    content: {
      es: 'Describa las estrategias que implementaría para fortalecer la participación de los padres de familia en la vida escolar, especialmente de aquellas familias que históricamente han tenido menor participación.',
      en: 'Describe the strategies you would implement to strengthen parent engagement in school life, especially for families that have historically had lower participation.',
      fr: 'Décrivez les stratégies que vous mettriez en place pour renforcer l\'engagement des parents dans la vie scolaire, en particulier pour les familles qui ont historiquement eu une participation moindre.',
    },
    rubric: {
      es: 'Evaluar: (1) Diversidad de canales de comunicación, (2) Sensibilidad cultural, (3) Flexibilidad de horarios, (4) Estrategias de inclusión específicas, (5) Medición de participación.',
      en: 'Evaluate: (1) Diversity of communication channels, (2) Cultural sensitivity, (3) Schedule flexibility, (4) Specific inclusion strategies, (5) Participation measurement.',
      fr: 'Évaluer : (1) Diversité des canaux de communication, (2) Sensibilité culturelle, (3) Flexibilité des horaires, (4) Stratégies d\'inclusion spécifiques, (5) Mesure de la participation.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 2,
    isActive: true,
  },
  // Student Welfare
  {
    id: 'k12-welfare-01',
    profileId: 'k12-school-principal',
    categoryId: 'k12-principal-soft-skills',
    competencyId: 'k12-student-welfare',
    type: 'scenario',
    content: {
      es: 'Un maestro le reporta que un estudiante de 5to grado ha mostrado cambios drásticos de conducta: se aísla, ha bajado su rendimiento y a veces llega con señales de no haber dormido bien. Los intentos del maestro de hablar con los padres no han tenido respuesta.\n\n¿Qué pasos seguiría como director para atender esta situación?',
      en: 'A teacher reports that a 5th-grade student has shown drastic behavioral changes: withdrawing, declining performance, and sometimes arriving with signs of poor sleep. The teacher\'s attempts to contact the parents have gone unanswered.\n\nWhat steps would you take as principal to address this situation?',
      fr: 'Un enseignant vous signale qu\'un élève de CM2 a montré des changements de comportement drastiques : il s\'isole, ses résultats ont baissé et il arrive parfois avec des signes de manque de sommeil. Les tentatives de l\'enseignant de contacter les parents sont restées sans réponse.\n\nQuelles mesures prendriez-vous en tant que directeur pour traiter cette situation ?',
    },
    rubric: {
      es: 'Evaluar: (1) Priorización del bienestar del niño, (2) Activación de protocolos de protección, (3) Comunicación con consejería escolar, (4) Intento de contacto con la familia por múltiples vías, (5) Conocimiento de obligaciones legales de reporte, (6) Documentación adecuada.',
      en: 'Evaluate: (1) Prioritization of child welfare, (2) Activation of protection protocols, (3) Communication with school counseling, (4) Multiple attempts to contact family, (5) Knowledge of mandatory reporting obligations, (6) Proper documentation.',
      fr: 'Évaluer : (1) Priorité au bien-être de l\'enfant, (2) Activation des protocoles de protection, (3) Communication avec le conseil scolaire, (4) Tentatives multiples de contact avec la famille, (5) Connaissance des obligations légales de signalement, (6) Documentation appropriée.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },
  {
    id: 'k12-welfare-02',
    profileId: 'k12-school-principal',
    categoryId: 'k12-principal-soft-skills',
    competencyId: 'k12-student-welfare',
    type: 'scale',
    content: {
      es: '¿Qué tan preparado se siente para implementar programas de apoyo socioemocional para estudiantes de diferentes edades y contextos?',
      en: 'How prepared do you feel to implement socio-emotional support programs for students of different ages and backgrounds?',
      fr: 'Dans quelle mesure vous sentez-vous préparé pour mettre en œuvre des programmes de soutien socio-émotionnel pour des élèves d\'âges et de contextes différents ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada preparado', en: 'Not prepared at all', fr: 'Pas du tout préparé' },
      max: { es: 'Completamente preparado', en: 'Fully prepared', fr: 'Tout à fait préparé' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },
  // Conflict Management
  {
    id: 'k12-conflict-01',
    profileId: 'k12-school-principal',
    categoryId: 'k12-principal-soft-skills',
    competencyId: 'k12-conflict-management',
    type: 'multiple-choice',
    content: {
      es: 'Dos docentes de secundaria tienen un conflicto abierto que está afectando el clima laboral del departamento. Uno acusa al otro de no cumplir con los acuerdos de coordinación. ¿Cómo interviene?',
      en: 'Two secondary teachers have an open conflict that is affecting the department\'s work climate. One accuses the other of not following coordination agreements. How do you intervene?',
      fr: 'Deux enseignants du secondaire ont un conflit ouvert qui affecte le climat de travail du département. L\'un accuse l\'autre de ne pas respecter les accords de coordination. Comment intervenez-vous ?',
    },
    options: [
      { id: 'a', text: { es: 'Separo a los docentes en diferentes departamentos para que no interactúen', en: 'I separate the teachers into different departments so they don\'t interact', fr: 'Je sépare les enseignants dans différents départements pour qu\'ils n\'interagissent pas' }, value: 15 },
      { id: 'b', text: { es: 'Facilito una reunión de mediación donde ambos expresen sus perspectivas, identifiquen puntos en común y establezcan acuerdos claros con seguimiento', en: 'I facilitate a mediation meeting where both express their perspectives, identify common ground, and establish clear agreements with follow-up', fr: 'Je facilite une réunion de médiation où les deux expriment leurs perspectives, identifient des points communs et établissent des accords clairs avec suivi' }, value: 100 },
      { id: 'c', text: { es: 'Les digo que resuelvan sus diferencias como adultos profesionales', en: 'I tell them to resolve their differences as professional adults', fr: 'Je leur dis de résoudre leurs différences en tant qu\'adultes professionnels' }, value: 10 },
      { id: 'd', text: { es: 'Investigo quién tiene razón y sanciono al responsable', en: 'I investigate who is right and sanction the responsible party', fr: 'J\'enquête pour savoir qui a raison et sanctionne le responsable' }, value: 25 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
  // School Safety
  {
    id: 'k12-safety-01',
    profileId: 'k12-school-principal',
    categoryId: 'k12-principal-soft-skills',
    competencyId: 'k12-school-safety',
    type: 'scenario',
    content: {
      es: 'Durante la hora de recreo, se produce un sismo moderado. Algunos estudiantes y docentes entran en pánico. El protocolo de evacuación no se ha practicado en los últimos 8 meses.\n\nDescriba cómo manejaría la situación inmediata y qué acciones tomaría después para prevenir esta falta de preparación en el futuro.',
      en: 'During recess, a moderate earthquake occurs. Some students and teachers panic. The evacuation protocol has not been practiced in the last 8 months.\n\nDescribe how you would handle the immediate situation and what actions you would take afterward to prevent this lack of preparedness in the future.',
      fr: 'Pendant la récréation, un tremblement de terre modéré se produit. Certains élèves et enseignants paniquent. Le protocole d\'évacuation n\'a pas été pratiqué depuis 8 mois.\n\nDécrivez comment vous géreriez la situation immédiate et quelles actions vous prendriez ensuite pour prévenir ce manque de préparation à l\'avenir.',
    },
    rubric: {
      es: 'Evaluar: (1) Liderazgo en crisis, (2) Priorización de la seguridad de los estudiantes, (3) Comunicación clara durante la emergencia, (4) Plan correctivo post-evento, (5) Calendarización de simulacros, (6) Revisión y actualización de protocolos.',
      en: 'Evaluate: (1) Crisis leadership, (2) Prioritization of student safety, (3) Clear communication during emergency, (4) Post-event corrective plan, (5) Drill scheduling, (6) Protocol review and update.',
      fr: 'Évaluer : (1) Leadership en situation de crise, (2) Priorité à la sécurité des élèves, (3) Communication claire pendant l\'urgence, (4) Plan correctif post-événement, (5) Planification des exercices, (6) Révision et mise à jour des protocoles.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 6,
    isActive: true,
  },
  {
    id: 'k12-safety-02',
    profileId: 'k12-school-principal',
    categoryId: 'k12-principal-soft-skills',
    competencyId: 'k12-school-safety',
    type: 'scale',
    content: {
      es: '¿Qué tan actualizado mantiene los planes de seguridad y emergencia de su centro educativo?',
      en: 'How up-to-date do you keep your school\'s safety and emergency plans?',
      fr: 'Dans quelle mesure maintenez-vous à jour les plans de sécurité et d\'urgence de votre établissement ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Muy desactualizado', en: 'Very outdated', fr: 'Très obsolète' },
      max: { es: 'Completamente actualizado', en: 'Fully up-to-date', fr: 'Entièrement à jour' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 7,
    isActive: true,
  },
];

// --- Readiness for Change ---
const k12ReadinessQuestions: Question[] = [
  // Strategic Planning
  {
    id: 'k12-strat-01',
    profileId: 'k12-school-principal',
    categoryId: 'k12-principal-readiness',
    competencyId: 'k12-strategic-planning',
    type: 'open-text',
    content: {
      es: 'Describa cómo desarrollaría un plan estratégico de mejora escolar a 3 años. ¿Qué partes interesadas involucraría, qué datos utilizaría y cómo aseguraría la implementación efectiva?',
      en: 'Describe how you would develop a 3-year strategic school improvement plan. Which stakeholders would you involve, what data would you use, and how would you ensure effective implementation?',
      fr: 'Décrivez comment vous développeriez un plan stratégique d\'amélioration scolaire sur 3 ans. Quelles parties prenantes impliqueriez-vous, quelles données utiliseriez-vous et comment assureriez-vous une mise en œuvre efficace ?',
    },
    rubric: {
      es: 'Evaluar: (1) Proceso participativo, (2) Uso de datos diagnósticos, (3) Metas SMART, (4) Asignación de recursos, (5) Mecanismos de seguimiento, (6) Flexibilidad para ajustes.',
      en: 'Evaluate: (1) Participatory process, (2) Use of diagnostic data, (3) SMART goals, (4) Resource allocation, (5) Monitoring mechanisms, (6) Flexibility for adjustments.',
      fr: 'Évaluer : (1) Processus participatif, (2) Utilisation de données diagnostiques, (3) Objectifs SMART, (4) Allocation des ressources, (5) Mécanismes de suivi, (6) Flexibilité pour les ajustements.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 1,
    isActive: true,
  },
  {
    id: 'k12-strat-02',
    profileId: 'k12-school-principal',
    categoryId: 'k12-principal-readiness',
    competencyId: 'k12-strategic-planning',
    type: 'multiple-choice',
    content: {
      es: 'Las proyecciones demográficas indican que su comunidad escolar cambiará significativamente en los próximos 5 años, con mayor diversidad lingüística y cultural. ¿Cuál es su enfoque?',
      en: 'Demographic projections indicate your school community will change significantly in the next 5 years, with greater linguistic and cultural diversity. What is your approach?',
      fr: 'Les projections démographiques indiquent que votre communauté scolaire changera considérablement dans les 5 prochaines années, avec une plus grande diversité linguistique et culturelle. Quelle est votre approche ?',
    },
    options: [
      { id: 'a', text: { es: 'Espero a que los cambios ocurran para adaptar la escuela', en: 'I wait for the changes to happen before adapting the school', fr: 'J\'attends que les changements se produisent avant d\'adapter l\'école' }, value: 5 },
      { id: 'b', text: { es: 'Inicio la planificación proactiva: capacitación docente en diversidad, adaptación curricular, programas de idiomas y alianzas comunitarias', en: 'I begin proactive planning: teacher diversity training, curricular adaptation, language programs, and community partnerships', fr: 'Je commence une planification proactive : formation des enseignants à la diversité, adaptation curriculaire, programmes linguistiques et partenariats communautaires' }, value: 100 },
      { id: 'c', text: { es: 'Contrato docentes bilingües y considero el tema resuelto', en: 'I hire bilingual teachers and consider the issue resolved', fr: 'J\'embauche des enseignants bilingues et considère le problème résolu' }, value: 30 },
      { id: 'd', text: { es: 'Solicito a las autoridades educativas que redirijan la inscripción a otras escuelas', en: 'I request education authorities to redirect enrollment to other schools', fr: 'Je demande aux autorités éducatives de rediriger les inscriptions vers d\'autres écoles' }, value: 0 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },
  // Staff Development
  {
    id: 'k12-staffdev-01',
    profileId: 'k12-school-principal',
    categoryId: 'k12-principal-readiness',
    competencyId: 'k12-staff-development',
    type: 'scale',
    content: {
      es: '¿Qué tan comprometido está con diseñar y facilitar oportunidades de desarrollo profesional continuo para su equipo docente y administrativo?',
      en: 'How committed are you to designing and facilitating continuous professional development opportunities for your teaching and administrative team?',
      fr: 'Dans quelle mesure êtes-vous engagé à concevoir et faciliter des opportunités de développement professionnel continu pour votre équipe enseignante et administrative ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Poco comprometido', en: 'Not very committed', fr: 'Peu engagé' },
      max: { es: 'Totalmente comprometido', en: 'Fully committed', fr: 'Totalement engagé' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 3,
    isActive: true,
  },
  {
    id: 'k12-staffdev-02',
    profileId: 'k12-school-principal',
    categoryId: 'k12-principal-readiness',
    competencyId: 'k12-staff-development',
    type: 'multiple-choice',
    content: {
      es: 'Varios docentes solicitan capacitación en inteligencia artificial aplicada a la educación, pero el presupuesto de desarrollo profesional es limitado. ¿Qué hace?',
      en: 'Several teachers request training in AI applied to education, but the professional development budget is limited. What do you do?',
      fr: 'Plusieurs enseignants demandent une formation en intelligence artificielle appliquée à l\'éducation, mais le budget de développement professionnel est limité. Que faites-vous ?',
    },
    options: [
      { id: 'a', text: { es: 'Les digo que no hay presupuesto y que busquen cursos gratuitos por su cuenta', en: 'I tell them there\'s no budget and to look for free courses on their own', fr: 'Je leur dis qu\'il n\'y a pas de budget et de chercher des cours gratuits par eux-mêmes' }, value: 10 },
      { id: 'b', text: { es: 'Busco opciones de capacitación accesibles, formo un grupo piloto de docentes que luego capaciten a otros, y busco alianzas con universidades o empresas tecnológicas', en: 'I look for affordable training options, form a pilot group of teachers who then train others, and seek partnerships with universities or tech companies', fr: 'Je cherche des options de formation abordables, forme un groupe pilote d\'enseignants qui formeront ensuite les autres, et cherche des partenariats avec des universités ou des entreprises technologiques' }, value: 100 },
      { id: 'c', text: { es: 'Incluyo el tema en el plan de desarrollo profesional del próximo año', en: 'I include the topic in next year\'s professional development plan', fr: 'J\'inclus le sujet dans le plan de développement professionnel de l\'année prochaine' }, value: 40 },
      { id: 'd', text: { es: 'La IA no es prioridad; prefiero invertir en áreas más tradicionales', en: 'AI is not a priority; I prefer to invest in more traditional areas', fr: 'L\'IA n\'est pas une priorité ; je préfère investir dans des domaines plus traditionnels' }, value: 5 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },
  // Innovation Adoption
  {
    id: 'k12-innov-01',
    profileId: 'k12-school-principal',
    categoryId: 'k12-principal-readiness',
    competencyId: 'k12-innovation-adoption',
    type: 'scenario',
    content: {
      es: 'El ministerio de educación ha implementado una nueva normativa que requiere integrar competencias digitales transversales en todas las materias a partir del próximo ciclo escolar. Su equipo docente tiene niveles muy dispares de competencia tecnológica.\n\nDescriba cómo lideraría esta transición garantizando que ningún docente quede rezagado y que la calidad educativa se mantenga.',
      en: 'The ministry of education has implemented a new regulation requiring the integration of cross-curricular digital competencies in all subjects starting next school year. Your teaching staff has very uneven levels of technological competence.\n\nDescribe how you would lead this transition ensuring no teacher is left behind and educational quality is maintained.',
      fr: 'Le ministère de l\'éducation a mis en place une nouvelle réglementation exigeant l\'intégration de compétences numériques transversales dans toutes les matières à partir de la prochaine année scolaire. Votre personnel enseignant a des niveaux très inégaux de compétence technologique.\n\nDécrivez comment vous dirigeriez cette transition en veillant à ce qu\'aucun enseignant ne soit laissé pour compte et que la qualité éducative soit maintenue.',
    },
    rubric: {
      es: 'Evaluar: (1) Diagnóstico de niveles de competencia, (2) Plan de capacitación diferenciado, (3) Mentoría entre pares, (4) Recursos y soporte técnico, (5) Cronograma gradual, (6) Medición de impacto en el aprendizaje.',
      en: 'Evaluate: (1) Competence level assessment, (2) Differentiated training plan, (3) Peer mentoring, (4) Resources and technical support, (5) Gradual timeline, (6) Learning impact measurement.',
      fr: 'Évaluer : (1) Évaluation des niveaux de compétence, (2) Plan de formation différencié, (3) Mentorat entre pairs, (4) Ressources et support technique, (5) Calendrier progressif, (6) Mesure de l\'impact sur l\'apprentissage.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 5,
    isActive: true,
  },
  {
    id: 'k12-innov-02',
    profileId: 'k12-school-principal',
    categoryId: 'k12-principal-readiness',
    competencyId: 'k12-innovation-adoption',
    type: 'scale',
    content: {
      es: '¿Qué tan dispuesto está a experimentar con nuevas metodologías pedagógicas (aprendizaje basado en proyectos, aula invertida, gamificación) aunque impliquen riesgo de fracaso inicial?',
      en: 'How willing are you to experiment with new pedagogical methodologies (project-based learning, flipped classroom, gamification) even if they involve risk of initial failure?',
      fr: 'Dans quelle mesure êtes-vous disposé à expérimenter de nouvelles méthodologies pédagogiques (apprentissage par projets, classe inversée, gamification) même si elles impliquent un risque d\'échec initial ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada dispuesto', en: 'Not willing at all', fr: 'Pas du tout disposé' },
      max: { es: 'Completamente dispuesto', en: 'Fully willing', fr: 'Tout à fait disposé' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 6,
    isActive: true,
  },
];

// ============================================================================
// RECEPTIONIST QUESTIONS
// ============================================================================

// --- Professional Skills ---
const receptionistProfessionalQuestions: Question[] = [
  {
    id: 'rec-vm-01',
    profileId: 'receptionist',
    categoryId: 'rec-professional',
    competencyId: 'rec-visitor-management',
    type: 'multiple-choice',
    content: {
      es: 'Llega un visitante sin cita que dice tener una reunión urgente con el director. El director está en una reunión con otros clientes. ¿Qué hace usted?',
      en: 'A walk-in visitor claims to have an urgent meeting with the director. The director is currently in a meeting with other clients. What do you do?',
      fr: 'Un visiteur sans rendez-vous affirme avoir une réunion urgente avec le directeur. Le directeur est actuellement en réunion avec d\'autres clients. Que faites-vous ?',
    },
    options: [
      { id: 'a', text: { es: 'Interrumpir la reunión del director para avisarle', en: 'Interrupt the director\'s meeting to notify them', fr: 'Interrompre la réunion du directeur pour le prévenir' }, value: 20 },
      { id: 'b', text: { es: 'Registrar al visitante, ofrecerle asiento y una bebida, e informar al asistente del director por mensaje para que decida', en: 'Register the visitor, offer them a seat and a beverage, and message the director\'s assistant to decide', fr: 'Enregistrer le visiteur, lui offrir un siège et une boisson, et informer l\'assistant du directeur par message pour qu\'il décide' }, value: 100 },
      { id: 'c', text: { es: 'Decirle que vuelva cuando el director esté disponible', en: 'Tell them to come back when the director is available', fr: 'Lui dire de revenir quand le directeur sera disponible' }, value: 10 },
      { id: 'd', text: { es: 'Hacer pasar al visitante directamente a la oficina del director', en: 'Let the visitor go directly to the director\'s office', fr: 'Faire entrer le visiteur directement au bureau du directeur' }, value: 0 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'rec-vm-02',
    profileId: 'receptionist',
    categoryId: 'rec-professional',
    competencyId: 'rec-visitor-management',
    type: 'scale',
    content: {
      es: '¿Qué tan familiarizado está con los procedimientos de registro de visitantes, control de acceso y emisión de gafetes de identificación?',
      en: 'How familiar are you with visitor registration procedures, access control, and issuing identification badges?',
      fr: 'Dans quelle mesure êtes-vous familiarisé avec les procédures d\'enregistrement des visiteurs, le contrôle d\'accès et la délivrance de badges d\'identification ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada familiarizado', en: 'Not familiar at all', fr: 'Pas du tout familiarisé' },
      max: { es: 'Muy familiarizado', en: 'Very familiar', fr: 'Très familiarisé' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },
  {
    id: 'rec-phone-01',
    profileId: 'receptionist',
    categoryId: 'rec-professional',
    competencyId: 'rec-phone-system',
    type: 'multiple-choice',
    content: {
      es: 'Está atendiendo una llamada importante cuando entran dos líneas más simultáneamente y un visitante se acerca al mostrador. ¿Cuál es la mejor forma de manejar esta situación?',
      en: 'You are handling an important call when two more lines come in simultaneously and a visitor approaches the counter. What is the best way to handle this situation?',
      fr: 'Vous gérez un appel important lorsque deux autres lignes arrivent simultanément et un visiteur s\'approche du comptoir. Quelle est la meilleure façon de gérer cette situation ?',
    },
    options: [
      { id: 'a', text: { es: 'Colgar la llamada actual para atender las nuevas', en: 'Hang up the current call to take the new ones', fr: 'Raccrocher l\'appel en cours pour prendre les nouveaux' }, value: 0 },
      { id: 'b', text: { es: 'Poner la llamada actual en espera brevemente, saludar al visitante con una señal amable, contestar las líneas tomando mensajes rápidos, y retomar la llamada original', en: 'Briefly put the current call on hold, greet the visitor with a friendly gesture, answer the lines taking quick messages, and return to the original call', fr: 'Mettre brièvement l\'appel en cours en attente, saluer le visiteur d\'un geste aimable, répondre aux lignes en prenant des messages rapides, et reprendre l\'appel initial' }, value: 100 },
      { id: 'c', text: { es: 'Ignorar las otras líneas y terminar la llamada actual primero', en: 'Ignore the other lines and finish the current call first', fr: 'Ignorer les autres lignes et terminer d\'abord l\'appel en cours' }, value: 20 },
      { id: 'd', text: { es: 'Pedirle al visitante que espere y dejar que las llamadas vayan al buzón de voz', en: 'Ask the visitor to wait and let the calls go to voicemail', fr: 'Demander au visiteur d\'attendre et laisser les appels aller à la messagerie vocale' }, value: 30 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 3,
    isActive: true,
  },
  {
    id: 'rec-sched-01',
    profileId: 'receptionist',
    categoryId: 'rec-professional',
    competencyId: 'rec-scheduling',
    type: 'scenario',
    content: {
      es: 'Dos gerentes de departamento necesitan la misma sala de reuniones a la misma hora para reuniones que ambos consideran prioritarias. No hay otras salas disponibles en ese horario.\n\nContexto: Usted es responsable de coordinar las reservaciones de las salas de reuniones.',
      en: 'Two department managers need the same meeting room at the same time for meetings they both consider a priority. No other rooms are available at that time.\n\nContext: You are responsible for coordinating meeting room reservations.',
      fr: 'Deux responsables de département ont besoin de la même salle de réunion à la même heure pour des réunions qu\'ils considèrent tous deux prioritaires. Aucune autre salle n\'est disponible à cette heure.\n\nContexte : Vous êtes responsable de la coordination des réservations de salles de réunion.',
    },
    rubric: {
      es: 'Evaluar: (1) Propuesta de soluciones alternativas (cambiar horario, sala alternativa, reunión virtual), (2) Imparcialidad al tratar con ambos gerentes, (3) Comunicación profesional y diplomatica, (4) Escalamiento adecuado si no se llega a acuerdo, (5) Registro de la resolución para evitar futuros conflictos.',
      en: 'Evaluate: (1) Proposal of alternative solutions (change time, alternative room, virtual meeting), (2) Impartiality when dealing with both managers, (3) Professional and diplomatic communication, (4) Appropriate escalation if no agreement is reached, (5) Recording the resolution to prevent future conflicts.',
      fr: 'Évaluer : (1) Proposition de solutions alternatives (changer l\'heure, salle alternative, réunion virtuelle), (2) Impartialité dans le traitement des deux responsables, (3) Communication professionnelle et diplomatique, (4) Escalade appropriée si aucun accord n\'est trouvé, (5) Enregistrement de la résolution pour éviter les conflits futurs.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 4,
    isActive: true,
  },
  {
    id: 'rec-mail-01',
    profileId: 'receptionist',
    categoryId: 'rec-professional',
    competencyId: 'rec-mail-packages',
    type: 'multiple-choice',
    content: {
      es: 'Llega un paquete certificado que requiere firma para un empleado que está de vacaciones por dos semanas. ¿Qué hace?',
      en: 'A certified package requiring a signature arrives for an employee who is on vacation for two weeks. What do you do?',
      fr: 'Un colis certifié nécessitant une signature arrive pour un employé en vacances pour deux semaines. Que faites-vous ?',
    },
    options: [
      { id: 'a', text: { es: 'Firmar y guardar el paquete, registrarlo en la bitácora con fecha y hora, y notificar al supervisor del empleado por correo electrónico', en: 'Sign for and store the package, log it in the register with date and time, and notify the employee\'s supervisor by email', fr: 'Signer et ranger le colis, l\'enregistrer dans le registre avec la date et l\'heure, et notifier le superviseur de l\'employé par courriel' }, value: 100 },
      { id: 'b', text: { es: 'Rechazar el paquete porque el destinatario no está disponible', en: 'Reject the package because the recipient is not available', fr: 'Refuser le colis car le destinataire n\'est pas disponible' }, value: 10 },
      { id: 'c', text: { es: 'Firmar y dejarlo en el escritorio del empleado sin notificar a nadie', en: 'Sign for it and leave it on the employee\'s desk without notifying anyone', fr: 'Signer et le laisser sur le bureau de l\'employé sans notifier personne' }, value: 20 },
      { id: 'd', text: { es: 'Pedir al mensajero que vuelva cuando el empleado regrese', en: 'Ask the courier to come back when the employee returns', fr: 'Demander au coursier de revenir quand l\'employé sera de retour' }, value: 30 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
  {
    id: 'rec-tech-01',
    profileId: 'receptionist',
    categoryId: 'rec-professional',
    competencyId: 'rec-office-technology',
    type: 'scale',
    content: {
      es: '¿Qué tan competente se considera en el uso de herramientas de oficina como correo electrónico, hojas de cálculo, software de gestión de calendarios y equipos como impresoras y escáneres?',
      en: 'How competent do you consider yourself in using office tools such as email, spreadsheets, calendar management software, and equipment like printers and scanners?',
      fr: 'Dans quelle mesure vous considérez-vous compétent dans l\'utilisation des outils de bureau tels que le courrier électronique, les tableurs, les logiciels de gestion de calendrier et les équipements comme les imprimantes et les scanners ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada competente', en: 'Not competent at all', fr: 'Pas du tout compétent' },
      max: { es: 'Muy competente', en: 'Very competent', fr: 'Très compétent' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 6,
    isActive: true,
  },
];

// --- Receptionist Soft Skills ---
const receptionistSoftSkillsQuestions: Question[] = [
  {
    id: 'rec-pres-01',
    profileId: 'receptionist',
    categoryId: 'rec-soft-skills',
    competencyId: 'rec-professional-presentation',
    type: 'open-text',
    content: {
      es: '¿Qué acciones concretas realiza usted diariamente para proyectar una imagen profesional y crear una primera impresión positiva de la organización ante cada visitante?',
      en: 'What specific actions do you take daily to project a professional image and create a positive first impression of the organization for every visitor?',
      fr: 'Quelles actions concrètes prenez-vous quotidiennement pour projeter une image professionnelle et créer une première impression positive de l\'organisation auprès de chaque visiteur ?',
    },
    rubric: {
      es: 'Evaluar: (1) Apariencia personal e higiene, (2) Organización y limpieza del área de recepción, (3) Saludo cordial y lenguaje corporal abierto, (4) Tono de voz amable, (5) Conocimiento de la imagen corporativa de la organización.',
      en: 'Evaluate: (1) Personal appearance and hygiene, (2) Organization and cleanliness of the reception area, (3) Cordial greeting and open body language, (4) Friendly tone of voice, (5) Knowledge of the organization\'s corporate image.',
      fr: 'Évaluer : (1) Apparence personnelle et hygiène, (2) Organisation et propreté de la zone de réception, (3) Salutation cordiale et langage corporel ouvert, (4) Ton de voix aimable, (5) Connaissance de l\'image de marque de l\'organisation.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 1,
    isActive: true,
  },
  {
    id: 'rec-comm-01',
    profileId: 'receptionist',
    categoryId: 'rec-soft-skills',
    competencyId: 'rec-communication',
    type: 'scenario',
    content: {
      es: 'Un cliente importante llega visiblemente frustrado porque ha tenido problemas para encontrar la oficina y lleva 20 minutos de retraso a su reunión. Al llegar, le habla de forma brusca y exige ser atendido de inmediato.\n\nContexto: La persona con quien tiene la reunión está disponible y usted tiene a otros dos visitantes esperando registro.',
      en: 'An important client arrives visibly frustrated because they had trouble finding the office and are 20 minutes late for their meeting. Upon arrival, they speak to you brusquely and demand to be seen immediately.\n\nContext: The person they are meeting with is available, and you have two other visitors waiting to be registered.',
      fr: 'Un client important arrive visiblement frustré car il a eu du mal à trouver le bureau et a 20 minutes de retard pour sa réunion. À son arrivée, il vous parle de manière brusque et exige d\'être reçu immédiatement.\n\nContexte : La personne avec qui il a rendez-vous est disponible et vous avez deux autres visiteurs en attente d\'enregistrement.',
    },
    rubric: {
      es: 'Evaluar: (1) Empatía con la frustración del cliente, (2) Mantener tono calmado y profesional, (3) Agilidad en el registro sin descuidar a otros visitantes, (4) Comunicar al anfitrión la llegada del cliente, (5) Ofrecer orientación para futuras visitas.',
      en: 'Evaluate: (1) Empathy with the client\'s frustration, (2) Maintaining a calm and professional tone, (3) Quick registration without neglecting other visitors, (4) Communicating the client\'s arrival to the host, (5) Offering directions for future visits.',
      fr: 'Évaluer : (1) Empathie face à la frustration du client, (2) Maintien d\'un ton calme et professionnel, (3) Rapidité d\'enregistrement sans négliger les autres visiteurs, (4) Communication de l\'arrivée du client à l\'hôte, (5) Offrir des indications pour les futures visites.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 2,
    isActive: true,
  },
  {
    id: 'rec-comm-02',
    profileId: 'receptionist',
    categoryId: 'rec-soft-skills',
    competencyId: 'rec-communication',
    type: 'multiple-choice',
    content: {
      es: 'Recibe una llamada de un cliente que habla muy rápido y con un acento que le resulta difícil de entender. ¿Cuál es la mejor forma de proceder?',
      en: 'You receive a call from a client who speaks very fast and with an accent that is difficult for you to understand. What is the best way to proceed?',
      fr: 'Vous recevez un appel d\'un client qui parle très vite et avec un accent difficile à comprendre pour vous. Quelle est la meilleure façon de procéder ?',
    },
    options: [
      { id: 'a', text: { es: 'Pedirle amablemente que repita más despacio, confirmar los datos clave repitiéndolos de vuelta', en: 'Politely ask them to repeat more slowly, confirm key information by repeating it back', fr: 'Lui demander poliment de répéter plus lentement, confirmer les informations clés en les répétant' }, value: 100 },
      { id: 'b', text: { es: 'Transferir la llamada a otra persona que pueda entenderlo mejor', en: 'Transfer the call to someone who might understand them better', fr: 'Transférer l\'appel à quelqu\'un qui pourrait mieux le comprendre' }, value: 40 },
      { id: 'c', text: { es: 'Anotar lo que pueda entender y asumir el resto', en: 'Write down what you can understand and assume the rest', fr: 'Noter ce que vous pouvez comprendre et supposer le reste' }, value: 10 },
      { id: 'd', text: { es: 'Pedirle que envíe su solicitud por correo electrónico', en: 'Ask them to send their request by email', fr: 'Lui demander d\'envoyer sa demande par courriel' }, value: 50 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 3,
    isActive: true,
  },
  {
    id: 'rec-multi-01',
    profileId: 'receptionist',
    categoryId: 'rec-soft-skills',
    competencyId: 'rec-multitasking',
    type: 'scale',
    content: {
      es: '¿Qué tan cómodo se siente manejando múltiples tareas al mismo tiempo, como atender una llamada mientras registra un visitante y gestiona una entrega?',
      en: 'How comfortable are you handling multiple tasks simultaneously, such as taking a call while registering a visitor and managing a delivery?',
      fr: 'Dans quelle mesure êtes-vous à l\'aise pour gérer plusieurs tâches simultanément, comme prendre un appel tout en enregistrant un visiteur et en gérant une livraison ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada cómodo', en: 'Not comfortable at all', fr: 'Pas du tout à l\'aise' },
      max: { es: 'Muy cómodo', en: 'Very comfortable', fr: 'Très à l\'aise' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },
  {
    id: 'rec-multi-02',
    profileId: 'receptionist',
    categoryId: 'rec-soft-skills',
    competencyId: 'rec-multitasking',
    type: 'open-text',
    content: {
      es: 'Describa una situación en la que tuvo que manejar varias tareas urgentes al mismo tiempo. ¿Cómo priorizó y qué resultado obtuvo?',
      en: 'Describe a situation where you had to handle several urgent tasks at the same time. How did you prioritize and what was the outcome?',
      fr: 'Décrivez une situation où vous avez dû gérer plusieurs tâches urgentes en même temps. Comment avez-vous priorisé et quel a été le résultat ?',
    },
    rubric: {
      es: 'Evaluar: (1) Capacidad de priorización lógica, (2) Manejo del estrés y compostura, (3) Organización y uso de herramientas de apoyo, (4) Comunicación con las partes involucradas, (5) Resultado final y lecciones aprendidas.',
      en: 'Evaluate: (1) Logical prioritization ability, (2) Stress management and composure, (3) Organization and use of support tools, (4) Communication with involved parties, (5) Final outcome and lessons learned.',
      fr: 'Évaluer : (1) Capacité de priorisation logique, (2) Gestion du stress et sang-froid, (3) Organisation et utilisation d\'outils d\'aide, (4) Communication avec les parties impliquées, (5) Résultat final et leçons apprises.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 5,
    isActive: true,
  },
];

// --- Receptionist Readiness for Change ---
const receptionistReadinessQuestions: Question[] = [
  {
    id: 'rec-emerg-01',
    profileId: 'receptionist',
    categoryId: 'rec-readiness',
    competencyId: 'rec-emergency-procedures',
    type: 'multiple-choice',
    content: {
      es: 'Se activa la alarma de incendios del edificio. ¿Cuál es la secuencia correcta de acciones como recepcionista?',
      en: 'The building fire alarm is activated. What is the correct sequence of actions as a receptionist?',
      fr: 'L\'alarme incendie du bâtiment se déclenche. Quelle est la séquence correcte d\'actions en tant que réceptionniste ?',
    },
    options: [
      { id: 'a', text: { es: 'Verificar la bitácora de visitantes, guiar a visitantes hacia las salidas de emergencia, notificar a seguridad y llevar el registro de visitantes al punto de reunión', en: 'Check the visitor log, guide visitors to emergency exits, notify security, and bring the visitor register to the assembly point', fr: 'Vérifier le registre des visiteurs, guider les visiteurs vers les sorties de secours, notifier la sécurité et apporter le registre des visiteurs au point de rassemblement' }, value: 100 },
      { id: 'b', text: { es: 'Salir inmediatamente del edificio por su cuenta', en: 'Leave the building immediately on your own', fr: 'Quitter immédiatement le bâtiment par vos propres moyens' }, value: 10 },
      { id: 'c', text: { es: 'Llamar a los bomberos y esperar en la recepción', en: 'Call the fire department and wait at reception', fr: 'Appeler les pompiers et attendre à la réception' }, value: 30 },
      { id: 'd', text: { es: 'Investigar de dónde viene la alarma para verificar si es real', en: 'Investigate where the alarm is coming from to verify if it is real', fr: 'Enquêter d\'où vient l\'alarme pour vérifier si elle est réelle' }, value: 0 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'rec-emerg-02',
    profileId: 'receptionist',
    categoryId: 'rec-readiness',
    competencyId: 'rec-emergency-procedures',
    type: 'scenario',
    content: {
      es: 'Un visitante en la sala de espera se desmaya repentinamente. Hay otros tres visitantes presentes y el personal médico más cercano está a 15 minutos.\n\nContexto: Usted ha recibido capacitación básica en primeros auxilios y tiene un botiquín en recepción.',
      en: 'A visitor in the waiting area suddenly faints. There are three other visitors present and the nearest medical personnel are 15 minutes away.\n\nContext: You have received basic first aid training and have a first aid kit at reception.',
      fr: 'Un visiteur dans la salle d\'attente s\'évanouit soudainement. Il y a trois autres visiteurs présents et le personnel médical le plus proche est à 15 minutes.\n\nContexte : Vous avez reçu une formation de base en premiers secours et disposez d\'une trousse de premiers soins à la réception.',
    },
    rubric: {
      es: 'Evaluar: (1) Aplicación de protocolos de primeros auxilios básicos, (2) Llamada inmediata a servicios de emergencia, (3) Manejo de los demás visitantes (calma, espacio), (4) Notificación a personal interno apropiado, (5) Documentación del incidente.',
      en: 'Evaluate: (1) Application of basic first aid protocols, (2) Immediate call to emergency services, (3) Management of other visitors (calm, space), (4) Notification of appropriate internal staff, (5) Documentation of the incident.',
      fr: 'Évaluer : (1) Application des protocoles de premiers secours de base, (2) Appel immédiat aux services d\'urgence, (3) Gestion des autres visiteurs (calme, espace), (4) Notification du personnel interne approprié, (5) Documentation de l\'incident.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 2,
    isActive: true,
  },
  {
    id: 'rec-adapt-01',
    profileId: 'receptionist',
    categoryId: 'rec-readiness',
    competencyId: 'rec-adaptability',
    type: 'scale',
    content: {
      es: '¿Qué tan dispuesto está a aprender y utilizar un nuevo sistema digital de gestión de visitantes que reemplazaría la bitácora manual que ha usado por años?',
      en: 'How willing are you to learn and use a new digital visitor management system that would replace the manual logbook you have used for years?',
      fr: 'Dans quelle mesure êtes-vous disposé à apprendre et utiliser un nouveau système numérique de gestion des visiteurs qui remplacerait le registre manuel que vous utilisez depuis des années ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada dispuesto', en: 'Not willing at all', fr: 'Pas du tout disposé' },
      max: { es: 'Completamente dispuesto', en: 'Fully willing', fr: 'Tout à fait disposé' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 3,
    isActive: true,
  },
  {
    id: 'rec-adapt-02',
    profileId: 'receptionist',
    categoryId: 'rec-readiness',
    competencyId: 'rec-adaptability',
    type: 'open-text',
    content: {
      es: 'La empresa decide implementar un protocolo de recepción completamente nuevo que cambia todos los procedimientos que usted conoce. ¿Cómo manejaría esta transición?',
      en: 'The company decides to implement a completely new reception protocol that changes all the procedures you know. How would you handle this transition?',
      fr: 'L\'entreprise décide de mettre en place un protocole de réception entièrement nouveau qui modifie toutes les procédures que vous connaissez. Comment géreriez-vous cette transition ?',
    },
    rubric: {
      es: 'Evaluar: (1) Actitud positiva ante el cambio, (2) Plan concreto de aprendizaje, (3) Disposición para pedir ayuda, (4) Capacidad de dar retroalimentación constructiva, (5) Compromiso con la nueva forma de trabajo.',
      en: 'Evaluate: (1) Positive attitude toward change, (2) Concrete learning plan, (3) Willingness to ask for help, (4) Ability to provide constructive feedback, (5) Commitment to the new way of working.',
      fr: 'Évaluer : (1) Attitude positive face au changement, (2) Plan d\'apprentissage concret, (3) Volonté de demander de l\'aide, (4) Capacité à fournir un retour constructif, (5) Engagement envers la nouvelle méthode de travail.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 4,
    isActive: true,
  },
  {
    id: 'rec-learn-01',
    profileId: 'receptionist',
    categoryId: 'rec-readiness',
    competencyId: 'rec-continuous-learning',
    type: 'multiple-choice',
    content: {
      es: 'Su empresa introduce un nuevo software de videoconferencia que usted debe aprender a configurar para las reuniones. ¿Cuál es su primer enfoque?',
      en: 'Your company introduces new video conferencing software that you need to learn to set up for meetings. What is your first approach?',
      fr: 'Votre entreprise introduit un nouveau logiciel de vidéoconférence que vous devez apprendre à configurer pour les réunions. Quelle est votre première approche ?',
    },
    options: [
      { id: 'a', text: { es: 'Buscar tutoriales en línea, practicar por su cuenta y pedir apoyo a TI si es necesario', en: 'Search for online tutorials, practice on your own, and ask IT for support if needed', fr: 'Chercher des tutoriels en ligne, pratiquer par vous-même et demander de l\'aide au service informatique si nécessaire' }, value: 100 },
      { id: 'b', text: { es: 'Esperar a que le den una capacitación formal', en: 'Wait until formal training is provided', fr: 'Attendre qu\'une formation formelle soit dispensée' }, value: 30 },
      { id: 'c', text: { es: 'Pedirle a un compañero que configure las reuniones por usted', en: 'Ask a colleague to set up the meetings for you', fr: 'Demander à un collègue de configurer les réunions pour vous' }, value: 10 },
      { id: 'd', text: { es: 'Intentar usar el software sin ninguna preparación', en: 'Try to use the software without any preparation', fr: 'Essayer d\'utiliser le logiciel sans aucune préparation' }, value: 20 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
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
// HR OFFICER QUESTIONS
// ============================================================================

const hrOfficerProfessionalQuestions: Question[] = [
  { id: 'hro-pay-01', profileId: 'hr-officer', categoryId: 'hro-professional', competencyId: 'hro-payroll-admin', type: 'multiple-choice', content: { es: 'Al procesar la nómina quincenal, descubre que un empleado tiene horas extra no autorizadas registradas. ¿Qué hace?', en: 'While processing the biweekly payroll, you discover an employee has unauthorized overtime hours recorded. What do you do?', fr: 'En traitant la paie bimensuelle, vous découvrez qu\'un employé a des heures supplémentaires non autorisées enregistrées. Que faites-vous ?' }, options: [{ id: 'a', text: { es: 'Retener el pago de las horas extra hasta verificar con el supervisor del empleado y documentar la resolución', en: 'Withhold the overtime payment until verifying with the employee\'s supervisor and document the resolution', fr: 'Retenir le paiement des heures supplémentaires jusqu\'à vérification avec le superviseur de l\'employé et documenter la résolution' }, value: 100 }, { id: 'b', text: { es: 'Pagar las horas extra para no retrasar la nómina y preguntar después', en: 'Pay the overtime to avoid delaying payroll and ask later', fr: 'Payer les heures supplémentaires pour ne pas retarder la paie et demander après' }, value: 20 }, { id: 'c', text: { es: 'Eliminar las horas extra sin avisar a nadie', en: 'Delete the overtime hours without telling anyone', fr: 'Supprimer les heures supplémentaires sans prévenir personne' }, value: 0 }, { id: 'd', text: { es: 'Escalar el caso a su jefe inmediato y esperar instrucciones sin procesar nada', en: 'Escalate the case to your direct manager and wait for instructions without processing anything', fr: 'Escalader le cas à votre supérieur direct et attendre les instructions sans rien traiter' }, value: 60 }], maxScore: 100, aiEvaluated: false, order: 1, isActive: true },
  { id: 'hro-pay-02', profileId: 'hr-officer', categoryId: 'hro-professional', competencyId: 'hro-payroll-admin', type: 'scale', content: { es: '¿Qué tan familiarizado está con el cálculo de deducciones legales (seguro social, impuesto sobre la renta, aportes a fondos de pensión) en la nómina?', en: 'How familiar are you with calculating legal deductions (social security, income tax, pension fund contributions) on payroll?', fr: 'Dans quelle mesure êtes-vous familiarisé avec le calcul des déductions légales (sécurité sociale, impôt sur le revenu, cotisations de retraite) sur la paie ?' }, scaleMin: 1, scaleMax: 5, scaleLabels: { min: { es: 'Nada familiarizado', en: 'Not familiar at all', fr: 'Pas du tout familiarisé' }, max: { es: 'Muy familiarizado', en: 'Very familiar', fr: 'Très familiarisé' } }, maxScore: 100, aiEvaluated: false, order: 2, isActive: true },
  { id: 'hro-rec-01', profileId: 'hr-officer', categoryId: 'hro-professional', competencyId: 'hro-recruitment-logistics', type: 'scenario', content: { es: 'El gerente de ventas necesita cubrir urgentemente una vacante de ejecutivo comercial. Le pide que publique la oferta y le envíe candidatos filtrados en 48 horas. Actualmente tiene otras 3 vacantes abiertas en proceso.\n\nContexto: La empresa usa un portal de empleo en línea y tiene una base de datos interna de candidatos anteriores.', en: 'The sales manager urgently needs to fill a business executive vacancy. He asks you to post the job and send screened candidates within 48 hours. You currently have 3 other open positions in process.\n\nContext: The company uses an online job portal and has an internal database of previous candidates.', fr: 'Le directeur commercial a un besoin urgent de pourvoir un poste de cadre commercial. Il vous demande de publier l\'offre et d\'envoyer des candidats présélectionnés sous 48 heures. Vous avez actuellement 3 autres postes ouverts en cours.\n\nContexte : L\'entreprise utilise un portail d\'emploi en ligne et dispose d\'une base de données interne de candidats précédents.' }, rubric: { es: 'Evaluar: (1) Priorización y gestión del tiempo, (2) Uso de múltiples fuentes de reclutamiento, (3) Criterios claros de filtrado, (4) Comunicación con el gerente sobre expectativas realistas, (5) Organización del proceso.', en: 'Evaluate: (1) Prioritization and time management, (2) Use of multiple recruitment sources, (3) Clear screening criteria, (4) Communication with manager about realistic expectations, (5) Process organization.', fr: 'Évaluer : (1) Priorisation et gestion du temps, (2) Utilisation de multiples sources de recrutement, (3) Critères de présélection clairs, (4) Communication avec le responsable sur les attentes réalistes, (5) Organisation du processus.' }, maxScore: 100, aiEvaluated: true, order: 3, isActive: true },
  { id: 'hro-rec-02', profileId: 'hr-officer', categoryId: 'hro-professional', competencyId: 'hro-recruitment-logistics', type: 'multiple-choice', content: { es: '¿Cuál es el orden correcto de los pasos en un proceso de reclutamiento y selección estándar?', en: 'What is the correct order of steps in a standard recruitment and selection process?', fr: 'Quel est l\'ordre correct des étapes dans un processus de recrutement et sélection standard ?' }, options: [{ id: 'a', text: { es: 'Definir perfil → Publicar vacante → Filtrar CVs → Entrevistas → Verificar referencias → Oferta', en: 'Define profile → Post job → Screen CVs → Interviews → Check references → Offer', fr: 'Définir le profil → Publier l\'offre → Trier les CV → Entretiens → Vérifier les références → Offre' }, value: 100 }, { id: 'b', text: { es: 'Publicar vacante → Entrevistas → Filtrar CVs → Oferta → Verificar referencias', en: 'Post job → Interviews → Screen CVs → Offer → Check references', fr: 'Publier l\'offre → Entretiens → Trier les CV → Offre → Vérifier les références' }, value: 10 }, { id: 'c', text: { es: 'Filtrar CVs → Publicar vacante → Definir perfil → Oferta → Entrevistas', en: 'Screen CVs → Post job → Define profile → Offer → Interviews', fr: 'Trier les CV → Publier l\'offre → Définir le profil → Offre → Entretiens' }, value: 0 }, { id: 'd', text: { es: 'Definir perfil → Publicar vacante → Entrevistas → Filtrar CVs → Oferta', en: 'Define profile → Post job → Interviews → Screen CVs → Offer', fr: 'Définir le profil → Publier l\'offre → Entretiens → Trier les CV → Offre' }, value: 30 }], maxScore: 100, aiEvaluated: false, order: 4, isActive: true },
  { id: 'hro-exp-01', profileId: 'hr-officer', categoryId: 'hro-professional', competencyId: 'hro-records-compliance', type: 'open-text', content: { es: 'Describa qué documentos debe contener un expediente laboral completo y cómo garantiza que se mantenga actualizado y en cumplimiento con la legislación laboral.', en: 'Describe what documents a complete employee file should contain and how you ensure it stays updated and in compliance with labor law.', fr: 'Décrivez quels documents un dossier d\'employé complet doit contenir et comment vous vous assurez qu\'il reste à jour et conforme au droit du travail.' }, rubric: { es: 'Evaluar: (1) Conocimiento de documentos requeridos (contrato, identificaciones, formularios fiscales, beneficios), (2) Sistema de organización, (3) Proceso de actualización periódica, (4) Conocimiento de requisitos legales de retención, (5) Protección de datos personales.', en: 'Evaluate: (1) Knowledge of required documents (contract, IDs, tax forms, benefits), (2) Organization system, (3) Periodic update process, (4) Knowledge of legal retention requirements, (5) Personal data protection.', fr: 'Évaluer : (1) Connaissance des documents requis (contrat, pièces d\'identité, formulaires fiscaux, avantages), (2) Système d\'organisation, (3) Processus de mise à jour périodique, (4) Connaissance des exigences légales de conservation, (5) Protection des données personnelles.' }, maxScore: 100, aiEvaluated: true, order: 5, isActive: true },
  { id: 'hro-onb-01', profileId: 'hr-officer', categoryId: 'hro-professional', competencyId: 'hro-onboarding', type: 'scenario', content: { es: 'Un nuevo colaborador se incorpora el lunes. Usted es responsable de coordinar su proceso de integración. El jefe directo estará de viaje la primera semana.\n\nContexto: La empresa tiene 80 empleados, no cuenta con un programa de integración formal documentado.', en: 'A new hire starts on Monday. You are responsible for coordinating their onboarding. The direct manager will be traveling the first week.\n\nContext: The company has 80 employees and does not have a formally documented onboarding program.', fr: 'Un nouvel employé commence lundi. Vous êtes responsable de coordonner son intégration. Le responsable direct sera en déplacement la première semaine.\n\nContexte : L\'entreprise compte 80 employés et ne dispose pas d\'un programme d\'intégration formellement documenté.' }, rubric: { es: 'Evaluar: (1) Preparación previa (puesto de trabajo, accesos, equipo), (2) Designación de un compañero mentor, (3) Agenda estructurada de la primera semana, (4) Coordinación alternativa ante la ausencia del jefe, (5) Seguimiento posterior a la integración.', en: 'Evaluate: (1) Prior preparation (workstation, access, equipment), (2) Assigning a buddy/mentor, (3) Structured first-week agenda, (4) Alternative coordination given manager absence, (5) Post-onboarding follow-up.', fr: 'Évaluer : (1) Préparation préalable (poste de travail, accès, équipement), (2) Désignation d\'un parrain/mentor, (3) Agenda structuré de la première semaine, (4) Coordination alternative en l\'absence du responsable, (5) Suivi post-intégration.' }, maxScore: 100, aiEvaluated: true, order: 6, isActive: true },
];

const hrOfficerSoftSkillsQuestions: Question[] = [
  { id: 'hro-comm-01', profileId: 'hr-officer', categoryId: 'hro-soft-skills', competencyId: 'hro-communication', type: 'scenario', content: { es: 'Debe comunicar a todos los empleados un cambio importante en la política de vacaciones que reduce los días disponibles para el próximo año. Varios empleados ya tenían planes hechos.\n\nContexto: La decisión fue tomada por la dirección general y no es negociable.', en: 'You must communicate to all employees an important change in vacation policy that reduces available days for next year. Several employees already had plans made.\n\nContext: The decision was made by senior management and is non-negotiable.', fr: 'Vous devez communiquer à tous les employés un changement important de la politique de congés qui réduit les jours disponibles pour l\'année prochaine. Plusieurs employés avaient déjà fait des projets.\n\nContexte : La décision a été prise par la direction générale et n\'est pas négociable.' }, rubric: { es: 'Evaluar: (1) Tono empático y profesional, (2) Claridad en la explicación del cambio, (3) Anticipación de reacciones negativas, (4) Ofrecimiento de canales de comunicación para dudas, (5) Propuesta de medidas de transición.', en: 'Evaluate: (1) Empathetic and professional tone, (2) Clarity in explaining the change, (3) Anticipation of negative reactions, (4) Offering communication channels for questions, (5) Proposing transition measures.', fr: 'Évaluer : (1) Ton empathique et professionnel, (2) Clarté dans l\'explication du changement, (3) Anticipation des réactions négatives, (4) Offre de canaux de communication pour les questions, (5) Proposition de mesures de transition.' }, maxScore: 100, aiEvaluated: true, order: 1, isActive: true },
  { id: 'hro-comm-02', profileId: 'hr-officer', categoryId: 'hro-soft-skills', competencyId: 'hro-communication', type: 'scale', content: { es: '¿Qué tan cómodo se siente redactando comunicados oficiales de RR.HH. (memorandos, circulares, notificaciones) de manera clara y profesional?', en: 'How comfortable do you feel drafting official HR communications (memos, circulars, notifications) in a clear and professional manner?', fr: 'Dans quelle mesure êtes-vous à l\'aise pour rédiger des communications RH officielles (notes de service, circulaires, notifications) de manière claire et professionnelle ?' }, scaleMin: 1, scaleMax: 5, scaleLabels: { min: { es: 'Nada cómodo', en: 'Not comfortable at all', fr: 'Pas du tout à l\'aise' }, max: { es: 'Muy cómodo', en: 'Very comfortable', fr: 'Très à l\'aise' } }, maxScore: 100, aiEvaluated: false, order: 2, isActive: true },
  { id: 'hro-conf-01', profileId: 'hr-officer', categoryId: 'hro-soft-skills', competencyId: 'hro-confidentiality', type: 'multiple-choice', content: { es: 'Un compañero de otro departamento le pregunta cuánto gana un empleado específico porque "necesita saber para un proyecto". ¿Cómo responde?', en: 'A colleague from another department asks you how much a specific employee earns because they "need to know for a project." How do you respond?', fr: 'Un collègue d\'un autre département vous demande combien gagne un employé spécifique parce qu\'il "a besoin de savoir pour un projet." Comment répondez-vous ?' }, options: [{ id: 'a', text: { es: 'Explicar que la información salarial es confidencial y sugerir que consulte con su gerente o con el director de RR.HH.', en: 'Explain that salary information is confidential and suggest they consult with their manager or the HR director', fr: 'Expliquer que les informations salariales sont confidentielles et suggérer de consulter son responsable ou le directeur RH' }, value: 100 }, { id: 'b', text: { es: 'Dar la información porque es un compañero de confianza', en: 'Share the information because they are a trusted colleague', fr: 'Donner l\'information parce que c\'est un collègue de confiance' }, value: 0 }, { id: 'c', text: { es: 'Dar un rango aproximado sin ser específico', en: 'Give an approximate range without being specific', fr: 'Donner une fourchette approximative sans être précis' }, value: 20 }, { id: 'd', text: { es: 'Ignorar la solicitud sin dar explicación', en: 'Ignore the request without explanation', fr: 'Ignorer la demande sans explication' }, value: 30 }], maxScore: 100, aiEvaluated: false, order: 3, isActive: true },
  { id: 'hro-conf-02', profileId: 'hr-officer', categoryId: 'hro-soft-skills', competencyId: 'hro-confidentiality', type: 'open-text', content: { es: 'Describa las medidas que toma para proteger la confidencialidad de los expedientes de los empleados, tanto en formato físico como digital.', en: 'Describe the measures you take to protect the confidentiality of employee files, both in physical and digital format.', fr: 'Décrivez les mesures que vous prenez pour protéger la confidentialité des dossiers des employés, tant en format physique que numérique.' }, rubric: { es: 'Evaluar: (1) Control de acceso físico (archivadores con llave), (2) Control de acceso digital (contraseñas, permisos), (3) Política de escritorio limpio, (4) Destrucción segura de documentos, (5) Conciencia de regulaciones de protección de datos.', en: 'Evaluate: (1) Physical access control (locked cabinets), (2) Digital access control (passwords, permissions), (3) Clean desk policy, (4) Secure document destruction, (5) Awareness of data protection regulations.', fr: 'Évaluer : (1) Contrôle d\'accès physique (armoires verrouillées), (2) Contrôle d\'accès numérique (mots de passe, permissions), (3) Politique de bureau propre, (4) Destruction sécurisée des documents, (5) Connaissance des réglementations de protection des données.' }, maxScore: 100, aiEvaluated: true, order: 4, isActive: true },
  { id: 'hro-serv-01', profileId: 'hr-officer', categoryId: 'hro-soft-skills', competencyId: 'hro-service-orientation', type: 'multiple-choice', content: { es: 'Un empleado llega molesto a su oficina porque le descontaron más de lo esperado en su último pago. Está alzando la voz. ¿Cómo actúa?', en: 'An employee comes to your office upset because they were deducted more than expected on their last paycheck. They are raising their voice. How do you act?', fr: 'Un employé arrive à votre bureau contrarié car on lui a déduit plus que prévu sur son dernier salaire. Il élève la voix. Comment agissez-vous ?' }, options: [{ id: 'a', text: { es: 'Escucharlo con calma, validar su frustración, revisar el detalle del pago juntos y explicar cada deducción de forma clara', en: 'Listen calmly, validate their frustration, review the payment detail together, and explain each deduction clearly', fr: 'Écouter calmement, valider sa frustration, examiner le détail du paiement ensemble et expliquer chaque déduction clairement' }, value: 100 }, { id: 'b', text: { es: 'Pedirle que se calme o no lo atenderá', en: 'Ask them to calm down or you won\'t help them', fr: 'Lui demander de se calmer ou vous ne l\'aiderez pas' }, value: 10 }, { id: 'c', text: { es: 'Decirle que el sistema lo calculó automáticamente y que no puede hacer nada', en: 'Tell them the system calculated it automatically and there\'s nothing you can do', fr: 'Lui dire que le système a calculé automatiquement et que vous ne pouvez rien faire' }, value: 0 }, { id: 'd', text: { es: 'Tomar nota de su queja y prometerle revisarlo cuando tenga tiempo', en: 'Take note of their complaint and promise to review it when you have time', fr: 'Prendre note de sa plainte et promettre de la revoir quand vous aurez le temps' }, value: 40 }], maxScore: 100, aiEvaluated: false, order: 5, isActive: true },
];

const hrOfficerReadinessQuestions: Question[] = [
  { id: 'hro-tech-01', profileId: 'hr-officer', categoryId: 'hro-readiness', competencyId: 'hro-tech-adaptability', type: 'multiple-choice', content: { es: 'La empresa decide implementar un nuevo sistema HRIS que reemplazará todos los procesos manuales. ¿Cuál es su reacción?', en: 'The company decides to implement a new HRIS that will replace all manual processes. What is your reaction?', fr: 'L\'entreprise décide d\'implémenter un nouveau SIRH qui remplacera tous les processus manuels. Quelle est votre réaction ?' }, options: [{ id: 'a', text: { es: 'Solicitar ser parte del equipo de implementación, tomar la capacitación con entusiasmo y proponer mejoras basadas en su experiencia operativa', en: 'Request to be part of the implementation team, take the training enthusiastically, and propose improvements based on your operational experience', fr: 'Demander à faire partie de l\'équipe de mise en œuvre, suivre la formation avec enthousiasme et proposer des améliorations basées sur votre expérience opérationnelle' }, value: 100 }, { id: 'b', text: { es: 'Tomar la capacitación cuando la programen y adaptarse gradualmente', en: 'Take the training when scheduled and adapt gradually', fr: 'Suivre la formation quand elle est programmée et s\'adapter progressivement' }, value: 60 }, { id: 'c', text: { es: 'Preocuparse porque los sistemas manuales funcionan bien y el cambio generará errores', en: 'Worry because manual systems work fine and the change will generate errors', fr: 'S\'inquiéter parce que les systèmes manuels fonctionnent bien et le changement générera des erreurs' }, value: 20 }, { id: 'd', text: { es: 'Resistirse y seguir usando los procesos manuales mientras sea posible', en: 'Resist and keep using manual processes as long as possible', fr: 'Résister et continuer à utiliser les processus manuels aussi longtemps que possible' }, value: 0 }], maxScore: 100, aiEvaluated: false, order: 1, isActive: true },
  { id: 'hro-tech-02', profileId: 'hr-officer', categoryId: 'hro-readiness', competencyId: 'hro-tech-adaptability', type: 'scale', content: { es: '¿Qué tan dispuesto está a aprender herramientas digitales de gestión de talento, plataformas de reclutamiento en línea y software de nómina?', en: 'How willing are you to learn digital talent management tools, online recruitment platforms, and payroll software?', fr: 'Dans quelle mesure êtes-vous disposé à apprendre des outils numériques de gestion des talents, des plateformes de recrutement en ligne et des logiciels de paie ?' }, scaleMin: 1, scaleMax: 5, scaleLabels: { min: { es: 'Nada dispuesto', en: 'Not willing at all', fr: 'Pas du tout disposé' }, max: { es: 'Totalmente dispuesto', en: 'Fully willing', fr: 'Tout à fait disposé' } }, maxScore: 100, aiEvaluated: false, order: 2, isActive: true },
  { id: 'hro-reg-01', profileId: 'hr-officer', categoryId: 'hro-readiness', competencyId: 'hro-regulatory-awareness', type: 'open-text', content: { es: 'Explique cómo se mantiene actualizado sobre cambios en la legislación laboral, reformas fiscales y regulaciones de seguridad social que afectan la gestión de nómina y beneficios.', en: 'Explain how you stay updated on changes in labor law, tax reforms, and social security regulations that affect payroll and benefits management.', fr: 'Expliquez comment vous restez à jour sur les changements du droit du travail, les réformes fiscales et les réglementations de sécurité sociale qui affectent la gestion de la paie et des avantages sociaux.' }, rubric: { es: 'Evaluar: (1) Fuentes de información utilizadas (boletines oficiales, asociaciones profesionales), (2) Frecuencia de actualización, (3) Aplicación práctica de los cambios, (4) Comunicación de cambios relevantes al equipo, (5) Proactividad vs. reactividad.', en: 'Evaluate: (1) Information sources used (official bulletins, professional associations), (2) Update frequency, (3) Practical application of changes, (4) Communication of relevant changes to the team, (5) Proactivity vs. reactivity.', fr: 'Évaluer : (1) Sources d\'information utilisées (bulletins officiels, associations professionnelles), (2) Fréquence de mise à jour, (3) Application pratique des changements, (4) Communication des changements pertinents à l\'équipe, (5) Proactivité vs. réactivité.' }, maxScore: 100, aiEvaluated: true, order: 3, isActive: true },
  { id: 'hro-reg-02', profileId: 'hr-officer', categoryId: 'hro-readiness', competencyId: 'hro-regulatory-awareness', type: 'multiple-choice', content: { es: 'Se aprueba una nueva ley que modifica el cálculo de las vacaciones. Su jefe le pide actualizar el sistema. ¿Qué hace primero?', en: 'A new law is passed that changes how vacation days are calculated. Your boss asks you to update the system. What do you do first?', fr: 'Une nouvelle loi est adoptée qui modifie le calcul des congés. Votre responsable vous demande de mettre à jour le système. Que faites-vous en premier ?' }, options: [{ id: 'a', text: { es: 'Leer el texto completo de la ley, consultar fuentes confiables sobre su interpretación, y preparar un resumen antes de hacer cambios', en: 'Read the full text of the law, consult reliable sources on its interpretation, and prepare a summary before making changes', fr: 'Lire le texte complet de la loi, consulter des sources fiables sur son interprétation et préparer un résumé avant de faire des modifications' }, value: 100 }, { id: 'b', text: { es: 'Cambiar el sistema inmediatamente basándose en lo que leyó en las noticias', en: 'Change the system immediately based on what you read in the news', fr: 'Modifier le système immédiatement en se basant sur ce que vous avez lu dans les actualités' }, value: 10 }, { id: 'c', text: { es: 'Esperar a que el abogado de la empresa le diga exactamente qué hacer', en: 'Wait for the company lawyer to tell you exactly what to do', fr: 'Attendre que l\'avocat de l\'entreprise vous dise exactement quoi faire' }, value: 40 }, { id: 'd', text: { es: 'No hacer nada hasta que la ley entre en vigor', en: 'Do nothing until the law takes effect', fr: 'Ne rien faire jusqu\'à ce que la loi entre en vigueur' }, value: 20 }], maxScore: 100, aiEvaluated: false, order: 4, isActive: true },
  { id: 'hro-imp-01', profileId: 'hr-officer', categoryId: 'hro-readiness', competencyId: 'hro-process-improvement', type: 'open-text', content: { es: 'Identifique un proceso de RR.HH. que considere ineficiente en una organización típica y proponga una mejora concreta con pasos para implementarla.', en: 'Identify an HR process you consider inefficient in a typical organization and propose a concrete improvement with steps to implement it.', fr: 'Identifiez un processus RH que vous considérez inefficace dans une organisation typique et proposez une amélioration concrète avec les étapes pour la mettre en œuvre.' }, rubric: { es: 'Evaluar: (1) Identificación clara del problema, (2) Análisis de causa raíz, (3) Propuesta de solución viable, (4) Plan de implementación con pasos concretos, (5) Métricas de éxito propuestas.', en: 'Evaluate: (1) Clear problem identification, (2) Root cause analysis, (3) Viable solution proposal, (4) Implementation plan with concrete steps, (5) Proposed success metrics.', fr: 'Évaluer : (1) Identification claire du problème, (2) Analyse des causes profondes, (3) Proposition de solution viable, (4) Plan de mise en œuvre avec des étapes concrètes, (5) Métriques de succès proposées.' }, maxScore: 100, aiEvaluated: true, order: 5, isActive: true },
];

// ============================================================================
// EXECUTIVE ASSISTANT QUESTIONS
// ============================================================================

// --- Professional Skills ---
const execAssistantProfessionalQuestions: Question[] = [
  {
    id: 'ea-cal-01',
    profileId: 'executive-assistant',
    categoryId: 'ea-professional',
    competencyId: 'calendar-agenda-management',
    type: 'multiple-choice',
    content: {
      es: 'El director general tiene dos reuniones programadas a la misma hora: una con un cliente importante y una reunión interna de presupuesto. ¿Cómo maneja la situación?',
      en: 'The CEO has two meetings scheduled at the same time: one with an important client and an internal budget meeting. How do you handle the situation?',
      fr: 'Le PDG a deux réunions programmées à la même heure : une avec un client important et une réunion budgétaire interne. Comment gérez-vous la situation ?',
    },
    options: [
      { id: 'a', text: { es: 'Cancelar la reunión interna sin consultar', en: 'Cancel the internal meeting without consulting', fr: 'Annuler la réunion interne sans consulter' }, value: 20 },
      { id: 'b', text: { es: 'Consultar con el ejecutivo sobre la prioridad, proponer reprogramar la de menor urgencia y notificar a todos los involucrados con opciones de horario alternativo', en: 'Consult with the executive on priority, propose rescheduling the less urgent one, and notify all parties with alternative time options', fr: 'Consulter le dirigeant sur la priorité, proposer de reprogrammer la moins urgente et notifier toutes les parties avec des options d\'horaires alternatifs' }, value: 100 },
      { id: 'c', text: { es: 'Dejar que el ejecutivo decida sin ofrecer opciones', en: 'Let the executive decide without offering options', fr: 'Laisser le dirigeant décider sans offrir d\'options' }, value: 30 },
      { id: 'd', text: { es: 'Mover ambas reuniones a otro día', en: 'Move both meetings to another day', fr: 'Déplacer les deux réunions à un autre jour' }, value: 10 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'ea-cal-02',
    profileId: 'executive-assistant',
    categoryId: 'ea-professional',
    competencyId: 'calendar-agenda-management',
    type: 'scale',
    content: {
      es: '¿Qué tan competente se considera en el uso de herramientas de calendario digital (Google Calendar, Outlook) para gestionar agendas complejas con múltiples zonas horarias?',
      en: 'How proficient do you consider yourself in using digital calendar tools (Google Calendar, Outlook) to manage complex schedules across multiple time zones?',
      fr: 'À quel point vous considérez-vous compétent dans l\'utilisation d\'outils de calendrier numérique (Google Calendar, Outlook) pour gérer des agendas complexes avec plusieurs fuseaux horaires ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada competente', en: 'Not proficient at all', fr: 'Pas du tout compétent' },
      max: { es: 'Muy competente', en: 'Very proficient', fr: 'Très compétent' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },
  {
    id: 'ea-corr-01',
    profileId: 'executive-assistant',
    categoryId: 'ea-professional',
    competencyId: 'business-correspondence',
    type: 'open-text',
    content: {
      es: 'Describa cómo redactaría un correo electrónico formal en nombre del director general para declinar una invitación a un evento de la industria, manteniendo la relación profesional con el organizador.',
      en: 'Describe how you would draft a formal email on behalf of the CEO to decline an invitation to an industry event, while maintaining the professional relationship with the organizer.',
      fr: 'Décrivez comment vous rédigeriez un courriel formel au nom du PDG pour décliner une invitation à un événement du secteur, tout en maintenant la relation professionnelle avec l\'organisateur.',
    },
    rubric: {
      es: 'Evaluar: (1) Tono profesional y cortés, (2) Justificación adecuada sin revelar información confidencial, (3) Expresión de agradecimiento, (4) Ofrecimiento de alternativa o mantenimiento del vínculo, (5) Formato y estructura correctos.',
      en: 'Evaluate: (1) Professional and courteous tone, (2) Appropriate justification without revealing confidential information, (3) Expression of gratitude, (4) Offering an alternative or maintaining the relationship, (5) Correct format and structure.',
      fr: 'Évaluer : (1) Ton professionnel et courtois, (2) Justification appropriée sans révéler d\'informations confidentielles, (3) Expression de gratitude, (4) Offre d\'alternative ou maintien du lien, (5) Format et structure corrects.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },
  {
    id: 'ea-doc-01',
    profileId: 'executive-assistant',
    categoryId: 'ea-professional',
    competencyId: 'document-management',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál es la mejor práctica para organizar documentos confidenciales del ejecutivo en un sistema de archivos digital?',
      en: 'What is the best practice for organizing confidential executive documents in a digital filing system?',
      fr: 'Quelle est la meilleure pratique pour organiser les documents confidentiels du dirigeant dans un système de classement numérique ?',
    },
    options: [
      { id: 'a', text: { es: 'Guardar todo en una sola carpeta para fácil acceso', en: 'Save everything in a single folder for easy access', fr: 'Tout sauvegarder dans un seul dossier pour un accès facile' }, value: 10 },
      { id: 'b', text: { es: 'Crear una estructura de carpetas lógica con nomenclatura estandarizada, permisos de acceso restringidos y respaldo regular', en: 'Create a logical folder structure with standardized naming conventions, restricted access permissions, and regular backups', fr: 'Créer une structure de dossiers logique avec des conventions de nommage standardisées, des permissions d\'accès restreintes et des sauvegardes régulières' }, value: 100 },
      { id: 'c', text: { es: 'Dejar que el ejecutivo decida cómo organizar sus archivos', en: 'Let the executive decide how to organize their files', fr: 'Laisser le dirigeant décider comment organiser ses fichiers' }, value: 20 },
      { id: 'd', text: { es: 'Organizar por fecha sin categorías temáticas', en: 'Organize by date without thematic categories', fr: 'Organiser par date sans catégories thématiques' }, value: 40 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },
  {
    id: 'ea-travel-01',
    profileId: 'executive-assistant',
    categoryId: 'ea-professional',
    competencyId: 'travel-coordination',
    type: 'scenario',
    content: {
      es: 'El ejecutivo tiene un viaje de negocios a tres ciudades en una semana. El vuelo de conexión entre la segunda y tercera ciudad fue cancelado 24 horas antes de la salida.\n\nContexto: El ejecutivo tiene reuniones críticas en la tercera ciudad que no pueden reprogramarse.',
      en: 'The executive has a business trip to three cities in one week. The connecting flight between the second and third city was canceled 24 hours before departure.\n\nContext: The executive has critical meetings in the third city that cannot be rescheduled.',
      fr: 'Le dirigeant a un voyage d\'affaires dans trois villes en une semaine. Le vol de correspondance entre la deuxième et la troisième ville a été annulé 24 heures avant le départ.\n\nContexte : Le dirigeant a des réunions critiques dans la troisième ville qui ne peuvent pas être reprogrammées.',
    },
    rubric: {
      es: 'Evaluar: (1) Rapidez en la búsqueda de alternativas (otros vuelos, aerolíneas, rutas), (2) Consideración de opciones de transporte terrestre, (3) Comunicación proactiva con el ejecutivo, (4) Actualización de reservas de hotel y transporte local, (5) Plan de contingencia si no se puede llegar a tiempo.',
      en: 'Evaluate: (1) Speed in searching for alternatives (other flights, airlines, routes), (2) Consideration of ground transportation options, (3) Proactive communication with the executive, (4) Updating hotel and local transport reservations, (5) Contingency plan if unable to arrive on time.',
      fr: 'Évaluer : (1) Rapidité dans la recherche d\'alternatives (autres vols, compagnies, itinéraires), (2) Considération des options de transport terrestre, (3) Communication proactive avec le dirigeant, (4) Mise à jour des réservations d\'hôtel et de transport local, (5) Plan de contingence en cas d\'impossibilité d\'arriver à temps.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 5,
    isActive: true,
  },
  {
    id: 'ea-tech-01',
    profileId: 'executive-assistant',
    categoryId: 'ea-professional',
    competencyId: 'office-technology',
    type: 'scale',
    content: {
      es: '¿Qué tan hábil se considera en la creación de presentaciones ejecutivas profesionales utilizando PowerPoint o Google Slides, incluyendo gráficos, animaciones y diseño visual?',
      en: 'How skilled do you consider yourself in creating professional executive presentations using PowerPoint or Google Slides, including charts, animations, and visual design?',
      fr: 'À quel point vous considérez-vous habile dans la création de présentations exécutives professionnelles avec PowerPoint ou Google Slides, y compris les graphiques, les animations et le design visuel ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada hábil', en: 'Not skilled at all', fr: 'Pas du tout habile' },
      max: { es: 'Muy hábil', en: 'Very skilled', fr: 'Très habile' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 6,
    isActive: true,
  },
];

// --- Soft Skills ---
const execAssistantSoftSkillsQuestions: Question[] = [
  {
    id: 'ea-comm-01',
    profileId: 'executive-assistant',
    categoryId: 'ea-soft-skills',
    competencyId: 'executive-communication',
    type: 'scenario',
    content: {
      es: 'Un proveedor importante llama insistiendo en hablar directamente con el director general, quien está en una reunión de directorio que no puede interrumpirse. El proveedor dice que es urgente y amenaza con cancelar el contrato.\n\nContexto: Usted sabe que la relación con este proveedor es estratégica para la empresa.',
      en: 'An important vendor calls insisting on speaking directly with the CEO, who is in a board meeting that cannot be interrupted. The vendor says it is urgent and threatens to cancel the contract.\n\nContext: You know the relationship with this vendor is strategic for the company.',
      fr: 'Un fournisseur important appelle en insistant pour parler directement au PDG, qui est en réunion de conseil d\'administration et ne peut être interrompu. Le fournisseur dit que c\'est urgent et menace d\'annuler le contrat.\n\nContexte : Vous savez que la relation avec ce fournisseur est stratégique pour l\'entreprise.',
    },
    rubric: {
      es: 'Evaluar: (1) Manejo empático de la urgencia del proveedor, (2) Protección del tiempo del ejecutivo, (3) Ofrecimiento de soluciones intermedias, (4) Toma de nota precisa del mensaje, (5) Seguimiento oportuno después de la reunión.',
      en: 'Evaluate: (1) Empathetic handling of vendor urgency, (2) Protection of executive time, (3) Offering intermediate solutions, (4) Accurate message-taking, (5) Timely follow-up after the meeting.',
      fr: 'Évaluer : (1) Gestion empathique de l\'urgence du fournisseur, (2) Protection du temps du dirigeant, (3) Offre de solutions intermédiaires, (4) Prise de message précise, (5) Suivi opportun après la réunion.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 1,
    isActive: true,
  },
  {
    id: 'ea-conf-01',
    profileId: 'executive-assistant',
    categoryId: 'ea-soft-skills',
    competencyId: 'confidentiality-discretion',
    type: 'multiple-choice',
    content: {
      es: 'Un colega le pregunta sobre los detalles de una reunión privada entre el director general y el director financiero que usted organizó. ¿Cómo responde?',
      en: 'A colleague asks you about the details of a private meeting between the CEO and CFO that you organized. How do you respond?',
      fr: 'Un collègue vous demande les détails d\'une réunion privée entre le PDG et le directeur financier que vous avez organisée. Comment répondez-vous ?',
    },
    options: [
      { id: 'a', text: { es: 'Compartir algunos detalles generales para mantener buena relación con el colega', en: 'Share some general details to maintain a good relationship with the colleague', fr: 'Partager quelques détails généraux pour maintenir une bonne relation avec le collègue' }, value: 10 },
      { id: 'b', text: { es: 'Indicar amablemente que no puede compartir esa información por tratarse de una reunión privada', en: 'Kindly indicate that you cannot share that information as it was a private meeting', fr: 'Indiquer aimablement que vous ne pouvez pas partager cette information car il s\'agissait d\'une réunion privée' }, value: 100 },
      { id: 'c', text: { es: 'Inventar una excusa sobre el tema de la reunión', en: 'Make up an excuse about the meeting topic', fr: 'Inventer une excuse sur le sujet de la réunion' }, value: 20 },
      { id: 'd', text: { es: 'Decir que no sabe de qué reunión habla', en: 'Say you do not know what meeting they are talking about', fr: 'Dire que vous ne savez pas de quelle réunion il parle' }, value: 30 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },
  {
    id: 'ea-conf-02',
    profileId: 'executive-assistant',
    categoryId: 'ea-soft-skills',
    competencyId: 'confidentiality-discretion',
    type: 'scale',
    content: {
      es: '¿Qué tan cómodo se siente manejando información altamente confidencial (contratos, compensaciones, decisiones estratégicas) sin compartirla con nadie?',
      en: 'How comfortable do you feel handling highly confidential information (contracts, compensation, strategic decisions) without sharing it with anyone?',
      fr: 'À quel point vous sentez-vous à l\'aise pour gérer des informations hautement confidentielles (contrats, rémunérations, décisions stratégiques) sans les partager avec personne ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Muy incómodo', en: 'Very uncomfortable', fr: 'Très mal à l\'aise' },
      max: { es: 'Muy cómodo', en: 'Very comfortable', fr: 'Très à l\'aise' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 3,
    isActive: true,
  },
  {
    id: 'ea-prot-01',
    profileId: 'executive-assistant',
    categoryId: 'ea-soft-skills',
    competencyId: 'protocol-etiquette',
    type: 'multiple-choice',
    content: {
      es: 'Va a recibir a una delegación internacional de un país asiático para una reunión con los ejecutivos de su empresa. ¿Cuál es el protocolo más apropiado?',
      en: 'You are going to receive an international delegation from an Asian country for a meeting with your company\'s executives. What is the most appropriate protocol?',
      fr: 'Vous allez recevoir une délégation internationale d\'un pays asiatique pour une réunion avec les dirigeants de votre entreprise. Quel est le protocole le plus approprié ?',
    },
    options: [
      { id: 'a', text: { es: 'Recibirlos de manera informal para que se sientan cómodos', en: 'Receive them informally so they feel comfortable', fr: 'Les recevoir de manière informelle pour qu\'ils se sentent à l\'aise' }, value: 10 },
      { id: 'b', text: { es: 'Investigar las costumbres culturales del país, preparar tarjetas de presentación bilingües, organizar la sala según jerarquía y coordinar el protocolo de bienvenida', en: 'Research the country\'s cultural customs, prepare bilingual business cards, arrange the room by hierarchy, and coordinate the welcome protocol', fr: 'Rechercher les coutumes culturelles du pays, préparer des cartes de visite bilingues, organiser la salle selon la hiérarchie et coordonner le protocole d\'accueil' }, value: 100 },
      { id: 'c', text: { es: 'Seguir el protocolo estándar de la empresa sin adaptaciones', en: 'Follow the company\'s standard protocol without adaptations', fr: 'Suivre le protocole standard de l\'entreprise sans adaptations' }, value: 40 },
      { id: 'd', text: { es: 'Delegar la organización al departamento de relaciones públicas', en: 'Delegate the organization to the public relations department', fr: 'Déléguer l\'organisation au département de relations publiques' }, value: 30 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },
  {
    id: 'ea-multi-01',
    profileId: 'executive-assistant',
    categoryId: 'ea-soft-skills',
    competencyId: 'multitasking-prioritization',
    type: 'open-text',
    content: {
      es: 'Es lunes por la mañana y tiene las siguientes tareas pendientes: preparar la presentación para la junta del miércoles, confirmar los vuelos del viaje del jueves, responder 15 correos del fin de semana, atender una llamada urgente de un cliente VIP y coordinar el almuerzo de trabajo del día siguiente. Describa cómo priorizaría y organizaría su mañana.',
      en: 'It is Monday morning and you have the following pending tasks: prepare the presentation for Wednesday\'s board meeting, confirm flights for Thursday\'s trip, respond to 15 weekend emails, handle an urgent call from a VIP client, and coordinate the next day\'s working lunch. Describe how you would prioritize and organize your morning.',
      fr: 'C\'est lundi matin et vous avez les tâches suivantes en attente : préparer la présentation pour le conseil de mercredi, confirmer les vols du voyage de jeudi, répondre à 15 courriels du week-end, gérer un appel urgent d\'un client VIP et coordonner le déjeuner de travail du lendemain. Décrivez comment vous prioriseriez et organiseriez votre matinée.',
    },
    rubric: {
      es: 'Evaluar: (1) Identificación correcta de urgencias vs. importancias, (2) Secuencia lógica de tareas, (3) Uso eficiente del tiempo, (4) Capacidad de delegación cuando sea posible, (5) Manejo del estrés y múltiples demandas.',
      en: 'Evaluate: (1) Correct identification of urgent vs. important tasks, (2) Logical task sequence, (3) Efficient time use, (4) Ability to delegate when possible, (5) Stress management and handling multiple demands.',
      fr: 'Évaluer : (1) Identification correcte des urgences vs. importances, (2) Séquence logique des tâches, (3) Utilisation efficace du temps, (4) Capacité de délégation quand c\'est possible, (5) Gestion du stress et des demandes multiples.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 5,
    isActive: true,
  },
];

// --- Readiness for Change ---
const execAssistantReadinessQuestions: Question[] = [
  {
    id: 'ea-adapt-01',
    profileId: 'executive-assistant',
    categoryId: 'ea-readiness',
    competencyId: 'ea-adaptability',
    type: 'multiple-choice',
    content: {
      es: 'La empresa acaba de cambiar de un sistema de gestión documental tradicional a una plataforma 100% en la nube. ¿Cómo enfrenta este cambio?',
      en: 'The company has just switched from a traditional document management system to a 100% cloud platform. How do you face this change?',
      fr: 'L\'entreprise vient de passer d\'un système de gestion documentaire traditionnel à une plateforme 100% cloud. Comment faites-vous face à ce changement ?',
    },
    options: [
      { id: 'a', text: { es: 'Seguir usando el sistema antiguo mientras sea posible', en: 'Keep using the old system as long as possible', fr: 'Continuer à utiliser l\'ancien système aussi longtemps que possible' }, value: 0 },
      { id: 'b', text: { es: 'Tomar la capacitación disponible, practicar por cuenta propia y ofrecer ayuda a otros colegas que tengan dificultades', en: 'Take available training, practice on your own, and offer help to colleagues who struggle', fr: 'Suivre la formation disponible, pratiquer par soi-même et offrir de l\'aide aux collègues en difficulté' }, value: 100 },
      { id: 'c', text: { es: 'Esperar a que alguien le enseñe cuando surja la necesidad', en: 'Wait for someone to teach you when the need arises', fr: 'Attendre que quelqu\'un vous enseigne quand le besoin se présente' }, value: 20 },
      { id: 'd', text: { es: 'Quejarse con el jefe de que el cambio fue innecesario', en: 'Complain to the boss that the change was unnecessary', fr: 'Se plaindre au patron que le changement était inutile' }, value: 5 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'ea-adapt-02',
    profileId: 'executive-assistant',
    categoryId: 'ea-readiness',
    competencyId: 'ea-adaptability',
    type: 'scale',
    content: {
      es: '¿Qué tan dispuesto(a) está a modificar sus métodos de trabajo cuando la empresa implementa nuevos procesos o políticas?',
      en: 'How willing are you to modify your work methods when the company implements new processes or policies?',
      fr: 'Dans quelle mesure êtes-vous disposé(e) à modifier vos méthodes de travail lorsque l\'entreprise met en place de nouveaux processus ou politiques ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada dispuesto', en: 'Not willing at all', fr: 'Pas du tout disposé' },
      max: { es: 'Muy dispuesto', en: 'Very willing', fr: 'Très disposé' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },
  {
    id: 'ea-meet-01',
    profileId: 'executive-assistant',
    categoryId: 'ea-readiness',
    competencyId: 'meeting-organization',
    type: 'open-text',
    content: {
      es: 'Describa paso a paso cómo organizaría una reunión virtual con participantes de cinco países diferentes, incluyendo la preparación previa, la logística durante la reunión y el seguimiento posterior.',
      en: 'Describe step by step how you would organize a virtual meeting with participants from five different countries, including pre-meeting preparation, logistics during the meeting, and post-meeting follow-up.',
      fr: 'Décrivez étape par étape comment vous organiseriez une réunion virtuelle avec des participants de cinq pays différents, y compris la préparation avant la réunion, la logistique pendant la réunion et le suivi après la réunion.',
    },
    rubric: {
      es: 'Evaluar: (1) Coordinación de zonas horarias, (2) Envío de agenda y materiales previos, (3) Prueba de plataforma tecnológica, (4) Toma de minutas durante la reunión, (5) Distribución de acuerdos y seguimiento de compromisos.',
      en: 'Evaluate: (1) Time zone coordination, (2) Sending agenda and pre-meeting materials, (3) Technology platform testing, (4) Minute-taking during the meeting, (5) Distribution of agreements and tracking of commitments.',
      fr: 'Évaluer : (1) Coordination des fuseaux horaires, (2) Envoi de l\'ordre du jour et des documents préparatoires, (3) Test de la plateforme technologique, (4) Prise de notes pendant la réunion, (5) Distribution des décisions et suivi des engagements.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },
  {
    id: 'ea-meet-02',
    profileId: 'executive-assistant',
    categoryId: 'ea-readiness',
    competencyId: 'meeting-organization',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál es el elemento más importante a incluir en las minutas de una reunión ejecutiva?',
      en: 'What is the most important element to include in executive meeting minutes?',
      fr: 'Quel est l\'élément le plus important à inclure dans les comptes rendus d\'une réunion exécutive ?',
    },
    options: [
      { id: 'a', text: { es: 'Una transcripción completa de todo lo que se dijo', en: 'A complete transcription of everything that was said', fr: 'Une transcription complète de tout ce qui a été dit' }, value: 20 },
      { id: 'b', text: { es: 'Decisiones tomadas, responsables asignados, plazos acordados y próximos pasos', en: 'Decisions made, assigned responsible parties, agreed deadlines, and next steps', fr: 'Décisions prises, responsables désignés, délais convenus et prochaines étapes' }, value: 100 },
      { id: 'c', text: { es: 'Solo los puntos de la agenda que se cubrieron', en: 'Only the agenda items that were covered', fr: 'Uniquement les points de l\'ordre du jour qui ont été couverts' }, value: 40 },
      { id: 'd', text: { es: 'Los nombres de los asistentes y la hora de inicio y fin', en: 'The names of attendees and start and end time', fr: 'Les noms des participants et l\'heure de début et de fin' }, value: 30 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },
  {
    id: 'ea-techad-01',
    profileId: 'executive-assistant',
    categoryId: 'ea-readiness',
    competencyId: 'ea-tech-adoption',
    type: 'scenario',
    content: {
      es: 'La empresa decide implementar una herramienta de inteligencia artificial para automatizar la programación de reuniones y la gestión de correos electrónicos. Algunos colegas están preocupados de que la IA reemplace su trabajo.\n\nContexto: Su jefe le pide que sea la primera en adoptar la herramienta y que ayude al equipo administrativo en la transición.',
      en: 'The company decides to implement an artificial intelligence tool to automate meeting scheduling and email management. Some colleagues are worried that AI will replace their jobs.\n\nContext: Your boss asks you to be the first to adopt the tool and help the administrative team with the transition.',
      fr: 'L\'entreprise décide d\'implémenter un outil d\'intelligence artificielle pour automatiser la programmation des réunions et la gestion des courriels. Certains collègues craignent que l\'IA ne remplace leur travail.\n\nContexte : Votre patron vous demande d\'être la première à adopter l\'outil et d\'aider l\'équipe administrative dans la transition.',
    },
    rubric: {
      es: 'Evaluar: (1) Actitud positiva hacia la tecnología, (2) Capacidad para aprender rápidamente, (3) Empatía con los temores de los colegas, (4) Estrategia para ayudar al equipo en la adopción, (5) Visión de la IA como complemento y no reemplazo.',
      en: 'Evaluate: (1) Positive attitude toward technology, (2) Ability to learn quickly, (3) Empathy with colleagues\' fears, (4) Strategy to help the team with adoption, (5) Vision of AI as a complement and not a replacement.',
      fr: 'Évaluer : (1) Attitude positive envers la technologie, (2) Capacité d\'apprentissage rapide, (3) Empathie envers les craintes des collègues, (4) Stratégie pour aider l\'équipe dans l\'adoption, (5) Vision de l\'IA comme complément et non remplacement.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 5,
    isActive: true,
  },
];

// ============================================================================
// GENERAL MANAGER (CEO-LEVEL) QUESTIONS
// ============================================================================

const gmProfessionalQuestions: Question[] = [
  // Strategic Vision
  { id: 'gm-sv-01', profileId: 'general-manager', categoryId: 'gm-professional', competencyId: 'gm-strategic-vision', type: 'open-text', content: { es: 'Describa cómo desarrollaría un plan estratégico a 5 años para una aseguradora que necesita expandirse a nuevos mercados en Centroamérica. Incluya el proceso de análisis, la participación de actores clave y los mecanismos de seguimiento.', en: 'Describe how you would develop a 5-year strategic plan for an insurance company that needs to expand into new markets in Central America. Include the analysis process, involvement of key stakeholders, and monitoring mechanisms.', fr: 'Décrivez comment vous développeriez un plan stratégique à 5 ans pour une compagnie d\'assurance qui doit s\'étendre à de nouveaux marchés en Amérique centrale. Incluez le processus d\'analyse, l\'implication des acteurs clés et les mécanismes de suivi.' }, rubric: { es: 'Evaluar: (1) Análisis del entorno competitivo (PESTEL, Porter), (2) Definición de mercados objetivo con criterios claros, (3) Alineación de recursos y capacidades, (4) Involucramiento del directorio y equipo ejecutivo, (5) KPIs y mecanismos de revisión periódica, (6) Gestión de riesgos de la expansión.', en: 'Evaluate: (1) Competitive environment analysis (PESTEL, Porter), (2) Target market definition with clear criteria, (3) Resource and capability alignment, (4) Board and executive team involvement, (5) KPIs and periodic review mechanisms, (6) Expansion risk management.', fr: 'Évaluer : (1) Analyse de l\'environnement concurrentiel (PESTEL, Porter), (2) Définition des marchés cibles avec des critères clairs, (3) Alignement des ressources et capacités, (4) Implication du conseil et de l\'équipe exécutive, (5) KPIs et mécanismes de révision périodique, (6) Gestion des risques de l\'expansion.' }, maxScore: 100, aiEvaluated: true, order: 1, isActive: true },
  { id: 'gm-sv-02', profileId: 'general-manager', categoryId: 'gm-professional', competencyId: 'gm-strategic-vision', type: 'multiple-choice', content: { es: 'El directorio le pide presentar la visión estratégica para los próximos 3 años. Las tendencias indican crecimiento del insurtech y cambio en los hábitos de consumo de seguros. ¿Cuál es su enfoque principal?', en: 'The board asks you to present the strategic vision for the next 3 years. Trends indicate insurtech growth and changing insurance consumption habits. What is your main approach?', fr: 'Le conseil vous demande de présenter la vision stratégique pour les 3 prochaines années. Les tendances indiquent une croissance de l\'insurtech et un changement des habitudes de consommation d\'assurance. Quelle est votre approche principale ?' }, options: [{ id: 'a', text: { es: 'Desarrollar una estrategia integral de transformación digital con alianzas insurtech, nuevos canales y adaptación del portafolio de productos', en: 'Develop a comprehensive digital transformation strategy with insurtech partnerships, new channels, and product portfolio adaptation', fr: 'Développer une stratégie complète de transformation numérique avec des partenariats insurtech, de nouveaux canaux et une adaptation du portefeuille de produits' }, value: 100 }, { id: 'b', text: { es: 'Mantener el modelo actual que ha funcionado y monitorear cómo evoluciona el mercado', en: 'Keep the current model that has worked and monitor how the market evolves', fr: 'Maintenir le modèle actuel qui a fonctionné et surveiller l\'évolution du marché' }, value: 10 }, { id: 'c', text: { es: 'Invertir fuertemente en tecnología sin modificar los procesos comerciales existentes', en: 'Invest heavily in technology without modifying existing commercial processes', fr: 'Investir massivement dans la technologie sans modifier les processus commerciaux existants' }, value: 30 }, { id: 'd', text: { es: 'Adquirir una insurtech y delegar la innovación a ese equipo', en: 'Acquire an insurtech and delegate innovation to that team', fr: 'Acquérir une insurtech et déléguer l\'innovation à cette équipe' }, value: 50 }], maxScore: 100, aiEvaluated: false, order: 2, isActive: true },
  // Financial Acumen
  { id: 'gm-fa-01', profileId: 'general-manager', categoryId: 'gm-professional', competencyId: 'gm-financial-acumen', type: 'scenario', content: { es: 'Los resultados financieros del tercer trimestre muestran una caída del 15% en el EBITDA respecto al año anterior, un ratio combinado que supera el 105% y un aumento en los costos de siniestralidad. El directorio exige un plan de acción inmediato.\n\nContexto: La empresa tiene 2,500 empleados, opera en seguros generales y vida, y su principal competidor acaba de reducir tarifas un 10%.', en: 'Q3 financial results show a 15% drop in EBITDA vs. prior year, a combined ratio exceeding 105%, and rising claims costs. The board demands an immediate action plan.\n\nContext: The company has 2,500 employees, operates in general and life insurance, and its main competitor just cut rates by 10%.', fr: 'Les résultats financiers du troisième trimestre montrent une baisse de 15% de l\'EBITDA par rapport à l\'année précédente, un ratio combiné dépassant 105% et une augmentation des coûts de sinistralité. Le conseil exige un plan d\'action immédiat.\n\nContexte : L\'entreprise compte 2 500 employés, opère en assurance générale et vie, et son principal concurrent vient de réduire ses tarifs de 10%.' }, rubric: { es: 'Evaluar: (1) Diagnóstico financiero integral (no solo reducción de costos), (2) Estrategia de pricing vs. competencia, (3) Optimización del portafolio de riesgo, (4) Balance entre corto plazo y sostenibilidad, (5) Comunicación transparente al directorio, (6) Impacto en empleados y cultura.', en: 'Evaluate: (1) Comprehensive financial diagnosis (not just cost-cutting), (2) Pricing strategy vs. competition, (3) Risk portfolio optimization, (4) Balance between short-term and sustainability, (5) Transparent board communication, (6) Impact on employees and culture.', fr: 'Évaluer : (1) Diagnostic financier complet (pas seulement réduction des coûts), (2) Stratégie de tarification vs. concurrence, (3) Optimisation du portefeuille de risques, (4) Équilibre entre court terme et durabilité, (5) Communication transparente au conseil, (6) Impact sur les employés et la culture.' }, maxScore: 100, aiEvaluated: true, order: 3, isActive: true },
  // Corporate Governance
  { id: 'gm-cg-01', profileId: 'general-manager', categoryId: 'gm-professional', competencyId: 'gm-corporate-governance', type: 'multiple-choice', content: { es: 'El directorio aprueba una política de gobierno corporativo que incluye la creación de comités especializados. ¿Cuál considera el comité MÁS crítico para una aseguradora?', en: 'The board approves a corporate governance policy that includes creating specialized committees. Which committee do you consider MOST critical for an insurance company?', fr: 'Le conseil approuve une politique de gouvernance d\'entreprise incluant la création de comités spécialisés. Quel comité considérez-vous comme le PLUS critique pour une compagnie d\'assurance ?' }, options: [{ id: 'a', text: { es: 'Comité de Riesgos: supervisa el apetito de riesgo, la reserva técnica, el reaseguro y la solvencia regulatoria', en: 'Risk Committee: oversees risk appetite, technical reserves, reinsurance, and regulatory solvency', fr: 'Comité des Risques : supervise l\'appétit pour le risque, les réserves techniques, la réassurance et la solvabilité réglementaire' }, value: 100 }, { id: 'b', text: { es: 'Comité de Compensaciones: define los salarios y bonificaciones del equipo ejecutivo', en: 'Compensation Committee: defines executive team salaries and bonuses', fr: 'Comité de Rémunération : définit les salaires et primes de l\'équipe exécutive' }, value: 30 }, { id: 'c', text: { es: 'Comité de Tecnología: supervisa la inversión en sistemas y plataformas digitales', en: 'Technology Committee: oversees investment in systems and digital platforms', fr: 'Comité Technologie : supervise l\'investissement dans les systèmes et plateformes numériques' }, value: 40 }, { id: 'd', text: { es: 'Comité de Marketing: aprueba las campañas publicitarias y la estrategia de marca', en: 'Marketing Committee: approves advertising campaigns and brand strategy', fr: 'Comité Marketing : approuve les campagnes publicitaires et la stratégie de marque' }, value: 10 }], maxScore: 100, aiEvaluated: false, order: 4, isActive: true },
  { id: 'gm-cg-02', profileId: 'general-manager', categoryId: 'gm-professional', competencyId: 'gm-corporate-governance', type: 'scale', content: { es: '¿Qué tan familiarizado está con los marcos regulatorios de seguros (Solvencia II, regulaciones locales de la superintendencia) y su impacto en las decisiones de gobierno corporativo?', en: 'How familiar are you with insurance regulatory frameworks (Solvency II, local superintendency regulations) and their impact on corporate governance decisions?', fr: 'Dans quelle mesure êtes-vous familiarisé avec les cadres réglementaires d\'assurance (Solvabilité II, réglementations locales de la surintendance) et leur impact sur les décisions de gouvernance d\'entreprise ?' }, scaleMin: 1, scaleMax: 5, scaleLabels: { min: { es: 'Nada familiarizado', en: 'Not familiar at all', fr: 'Pas du tout familiarisé' }, max: { es: 'Experto en la materia', en: 'Subject matter expert', fr: 'Expert en la matière' } }, maxScore: 100, aiEvaluated: false, order: 5, isActive: true },
  // Market Positioning
  { id: 'gm-mp-01', profileId: 'general-manager', categoryId: 'gm-professional', competencyId: 'gm-market-positioning', type: 'open-text', content: { es: 'Su aseguradora ocupa el cuarto lugar en participación de mercado. El directorio le solicita una estrategia para alcanzar el segundo lugar en 3 años sin comprometer la rentabilidad. ¿Cuál sería su plan?', en: 'Your insurance company ranks fourth in market share. The board asks for a strategy to reach second place in 3 years without compromising profitability. What would your plan be?', fr: 'Votre compagnie d\'assurance est quatrième en parts de marché. Le conseil vous demande une stratégie pour atteindre la deuxième place en 3 ans sans compromettre la rentabilité. Quel serait votre plan ?' }, rubric: { es: 'Evaluar: (1) Análisis competitivo detallado (brechas vs. líderes), (2) Segmentación de mercado y nichos de oportunidad, (3) Propuesta de valor diferenciada, (4) Estrategia de canales de distribución, (5) Inversión en marca y experiencia del cliente, (6) Métricas de seguimiento y hitos intermedios.', en: 'Evaluate: (1) Detailed competitive analysis (gaps vs. leaders), (2) Market segmentation and opportunity niches, (3) Differentiated value proposition, (4) Distribution channel strategy, (5) Brand and customer experience investment, (6) Tracking metrics and milestones.', fr: 'Évaluer : (1) Analyse concurrentielle détaillée (écarts vs. leaders), (2) Segmentation du marché et niches d\'opportunité, (3) Proposition de valeur différenciée, (4) Stratégie de canaux de distribution, (5) Investissement dans la marque et l\'expérience client, (6) Métriques de suivi et jalons intermédiaires.' }, maxScore: 100, aiEvaluated: true, order: 6, isActive: true },
  { id: 'gm-mp-02', profileId: 'general-manager', categoryId: 'gm-professional', competencyId: 'gm-market-positioning', type: 'multiple-choice', content: { es: 'Un nuevo competidor digital (insurtech) ingresa al mercado ofreciendo seguros de auto con primas 30% más bajas y un proceso 100% digital. ¿Cuál es su respuesta estratégica?', en: 'A new digital competitor (insurtech) enters the market offering auto insurance with 30% lower premiums and a 100% digital process. What is your strategic response?', fr: 'Un nouveau concurrent numérique (insurtech) entre sur le marché en offrant une assurance auto avec des primes 30% moins élevées et un processus 100% numérique. Quelle est votre réponse stratégique ?' }, options: [{ id: 'a', text: { es: 'Desarrollar nuestra propia plataforma digital, enfocarnos en servicios de valor agregado (asistencia, atención personalizada) y segmentar hacia clientes que valoran la confianza y la experiencia', en: 'Develop our own digital platform, focus on value-added services (assistance, personalized attention), and target customers who value trust and experience', fr: 'Développer notre propre plateforme numérique, se concentrer sur les services à valeur ajoutée (assistance, attention personnalisée) et cibler les clients qui valorisent la confiance et l\'expérience' }, value: 100 }, { id: 'b', text: { es: 'Igualar las tarifas inmediatamente para no perder clientes', en: 'Match their rates immediately to avoid losing customers', fr: 'Aligner les tarifs immédiatement pour ne pas perdre de clients' }, value: 15 }, { id: 'c', text: { es: 'Ignorar al competidor porque las insurtechs no tienen la solidez financiera para sostener esas tarifas', en: 'Ignore the competitor because insurtechs lack the financial strength to sustain those rates', fr: 'Ignorer le concurrent car les insurtechs n\'ont pas la solidité financière pour maintenir ces tarifs' }, value: 5 }, { id: 'd', text: { es: 'Proponer al directorio la adquisición del competidor para eliminar la amenaza', en: 'Propose to the board to acquire the competitor to eliminate the threat', fr: 'Proposer au conseil l\'acquisition du concurrent pour éliminer la menace' }, value: 50 }], maxScore: 100, aiEvaluated: false, order: 7, isActive: true },
];

const gmSoftSkillsQuestions: Question[] = [
  // Organizational Leadership
  { id: 'gm-ol-01', profileId: 'general-manager', categoryId: 'gm-soft-skills', competencyId: 'gm-organizational-leadership', type: 'scenario', content: { es: 'Acaba de asumir como Gerente General de una aseguradora que ha tenido tres cambios de CEO en los últimos cuatro años. La moral del equipo ejecutivo está baja, hay desconfianza y varios talentos clave están considerando irse.\n\nContexto: La empresa es rentable pero ha perdido cuota de mercado. El directorio le da 6 meses para demostrar resultados en clima organizacional y retención.', en: 'You have just taken over as CEO of an insurance company that has had three CEO changes in the last four years. Executive team morale is low, there is distrust, and several key talents are considering leaving.\n\nContext: The company is profitable but has lost market share. The board gives you 6 months to show results in organizational climate and retention.', fr: 'Vous venez de prendre le poste de Directeur Général d\'une compagnie d\'assurance qui a connu trois changements de PDG au cours des quatre dernières années. Le moral de l\'équipe exécutive est bas, il y a de la méfiance et plusieurs talents clés envisagent de partir.\n\nContexte : L\'entreprise est rentable mais a perdu des parts de marché. Le conseil vous donne 6 mois pour montrer des résultats en climat organisationnel et rétention.' }, rubric: { es: 'Evaluar: (1) Diagnóstico rápido del clima (escucha activa, reuniones 1:1), (2) Construcción de confianza con acciones concretas, (3) Visión clara y comunicación constante, (4) Plan de retención diferenciado para talentos clave, (5) Quick wins vs. cambios estructurales, (6) Rendición de cuentas al directorio.', en: 'Evaluate: (1) Rapid climate diagnosis (active listening, 1:1 meetings), (2) Building trust through concrete actions, (3) Clear vision and consistent communication, (4) Differentiated retention plan for key talent, (5) Quick wins vs. structural changes, (6) Board accountability.', fr: 'Évaluer : (1) Diagnostic rapide du climat (écoute active, réunions individuelles), (2) Construction de la confiance par des actions concrètes, (3) Vision claire et communication constante, (4) Plan de rétention différencié pour les talents clés, (5) Gains rapides vs. changements structurels, (6) Responsabilité devant le conseil.' }, maxScore: 100, aiEvaluated: true, order: 1, isActive: true },
  { id: 'gm-ol-02', profileId: 'general-manager', categoryId: 'gm-soft-skills', competencyId: 'gm-organizational-leadership', type: 'scale', content: { es: '¿Qué tan efectivo se considera para inspirar y alinear a equipos multifuncionales (finanzas, operaciones, comercial, TI) hacia una meta organizacional común?', en: 'How effective do you consider yourself at inspiring and aligning cross-functional teams (finance, operations, commercial, IT) toward a common organizational goal?', fr: 'Dans quelle mesure vous considérez-vous efficace pour inspirer et aligner des équipes multifonctionnelles (finances, opérations, commercial, TI) vers un objectif organisationnel commun ?' }, scaleMin: 1, scaleMax: 5, scaleLabels: { min: { es: 'Poco efectivo', en: 'Not very effective', fr: 'Peu efficace' }, max: { es: 'Altamente efectivo', en: 'Highly effective', fr: 'Très efficace' } }, maxScore: 100, aiEvaluated: false, order: 2, isActive: true },
  // Stakeholder Management
  { id: 'gm-sm-01', profileId: 'general-manager', categoryId: 'gm-soft-skills', competencyId: 'gm-stakeholder-management', type: 'open-text', content: { es: 'El mayor accionista de la aseguradora (40% de participación) tiene una visión de crecimiento agresivo a corto plazo, mientras que el regulador exige mayor capitalización y prudencia. Describa cómo gestionaría estas expectativas contrapuestas.', en: 'The insurance company\'s largest shareholder (40% stake) has a vision of aggressive short-term growth, while the regulator demands greater capitalization and prudence. Describe how you would manage these opposing expectations.', fr: 'Le plus grand actionnaire de la compagnie d\'assurance (40% de participation) a une vision de croissance agressive à court terme, tandis que le régulateur exige une plus grande capitalisation et de la prudence. Décrivez comment vous géreriez ces attentes contradictoires.' }, rubric: { es: 'Evaluar: (1) Comprensión de ambas perspectivas, (2) Propuesta de equilibrio entre crecimiento y cumplimiento regulatorio, (3) Comunicación transparente con el accionista sobre riesgos, (4) Estrategia de crecimiento que satisfaga al regulador, (5) Uso de datos para respaldar argumentos, (6) Habilidad diplomática.', en: 'Evaluate: (1) Understanding of both perspectives, (2) Balanced proposal between growth and regulatory compliance, (3) Transparent communication with shareholder about risks, (4) Growth strategy that satisfies the regulator, (5) Data-driven arguments, (6) Diplomatic skill.', fr: 'Évaluer : (1) Compréhension des deux perspectives, (2) Proposition d\'équilibre entre croissance et conformité réglementaire, (3) Communication transparente avec l\'actionnaire sur les risques, (4) Stratégie de croissance satisfaisant le régulateur, (5) Arguments basés sur les données, (6) Habileté diplomatique.' }, maxScore: 100, aiEvaluated: true, order: 3, isActive: true },
  { id: 'gm-sm-02', profileId: 'general-manager', categoryId: 'gm-soft-skills', competencyId: 'gm-stakeholder-management', type: 'multiple-choice', content: { es: 'Un grupo de corredores de seguros que representan el 35% de la producción de su compañía amenaza con migrar a la competencia si no mejoran las comisiones. ¿Cuál es su enfoque?', en: 'A group of insurance brokers representing 35% of your company\'s production threatens to migrate to the competition if commissions are not improved. What is your approach?', fr: 'Un groupe de courtiers d\'assurance représentant 35% de la production de votre compagnie menace de migrer vers la concurrence si les commissions ne sont pas améliorées. Quelle est votre approche ?' }, options: [{ id: 'a', text: { es: 'Analizar la rentabilidad por corredor, negociar un esquema de incentivos por desempeño y fortalecer la propuesta de valor más allá de la comisión (soporte técnico, rapidez en emisión, tecnología)', en: 'Analyze profitability per broker, negotiate a performance-based incentive scheme, and strengthen the value proposition beyond commission (technical support, issuance speed, technology)', fr: 'Analyser la rentabilité par courtier, négocier un système d\'incitations basé sur la performance et renforcer la proposition de valeur au-delà de la commission (support technique, rapidité d\'émission, technologie)' }, value: 100 }, { id: 'b', text: { es: 'Aumentar las comisiones inmediatamente para evitar la fuga', en: 'Increase commissions immediately to prevent the exodus', fr: 'Augmenter les commissions immédiatement pour éviter l\'exode' }, value: 20 }, { id: 'c', text: { es: 'Dejar que se vayan y enfocarse en el canal directo digital', en: 'Let them go and focus on the direct digital channel', fr: 'Les laisser partir et se concentrer sur le canal numérique direct' }, value: 15 }, { id: 'd', text: { es: 'Escalar al directorio para que tomen la decisión sobre las comisiones', en: 'Escalate to the board to make the decision about commissions', fr: 'Escalader au conseil pour qu\'il prenne la décision sur les commissions' }, value: 30 }], maxScore: 100, aiEvaluated: false, order: 4, isActive: true },
  // Executive Communication
  { id: 'gm-ec-01', profileId: 'general-manager', categoryId: 'gm-soft-skills', competencyId: 'gm-executive-communication', type: 'scenario', content: { es: 'Un evento catastrófico (terremoto) ha generado miles de reclamos simultáneos. Los medios de comunicación están solicitando declaraciones, los clientes están llamando masivamente, los empleados necesitan dirección y el regulador exige reportes inmediatos.\n\nContexto: Es su primer mes como Gerente General. La empresa tiene reservas adecuadas pero los procesos de ajuste de siniestros no están preparados para este volumen.', en: 'A catastrophic event (earthquake) has generated thousands of simultaneous claims. Media are requesting statements, customers are calling en masse, employees need direction, and the regulator demands immediate reports.\n\nContext: It is your first month as CEO. The company has adequate reserves but claims adjustment processes are not prepared for this volume.', fr: 'Un événement catastrophique (tremblement de terre) a généré des milliers de réclamations simultanées. Les médias demandent des déclarations, les clients appellent en masse, les employés ont besoin de direction et le régulateur exige des rapports immédiats.\n\nContexte : C\'est votre premier mois en tant que Directeur Général. L\'entreprise a des réserves adéquates mais les processus d\'ajustement des sinistres ne sont pas préparés pour ce volume.' }, rubric: { es: 'Evaluar: (1) Priorización de audiencias (clientes afectados primero), (2) Mensaje consistente para cada audiencia, (3) Liderazgo visible y empático, (4) Activación de plan de crisis, (5) Coordinación del comité de crisis, (6) Transparencia sin generar pánico.', en: 'Evaluate: (1) Audience prioritization (affected customers first), (2) Consistent messaging for each audience, (3) Visible and empathetic leadership, (4) Crisis plan activation, (5) Crisis committee coordination, (6) Transparency without generating panic.', fr: 'Évaluer : (1) Priorisation des audiences (clients affectés d\'abord), (2) Messages cohérents pour chaque audience, (3) Leadership visible et empathique, (4) Activation du plan de crise, (5) Coordination du comité de crise, (6) Transparence sans générer de panique.' }, maxScore: 100, aiEvaluated: true, order: 5, isActive: true },
  // Crisis Management
  { id: 'gm-cm-01', profileId: 'general-manager', categoryId: 'gm-soft-skills', competencyId: 'gm-crisis-management', type: 'multiple-choice', content: { es: 'Se descubre un fraude interno significativo: el director financiero ha estado manipulando las reservas técnicas durante dos años, sobreestimando la solvencia reportada al regulador. ¿Cuál es su primera acción?', en: 'A significant internal fraud is discovered: the CFO has been manipulating technical reserves for two years, overestimating solvency reported to the regulator. What is your first action?', fr: 'Une fraude interne significative est découverte : le directeur financier a manipulé les réserves techniques pendant deux ans, surestimant la solvabilité déclarée au régulateur. Quelle est votre première action ?' }, options: [{ id: 'a', text: { es: 'Suspender al CFO, activar una auditoría forense independiente, notificar al directorio y al regulador de forma proactiva, y asegurar la continuidad de las operaciones financieras', en: 'Suspend the CFO, activate an independent forensic audit, proactively notify the board and regulator, and ensure continuity of financial operations', fr: 'Suspendre le directeur financier, activer un audit forensique indépendant, notifier proactivement le conseil et le régulateur, et assurer la continuité des opérations financières' }, value: 100 }, { id: 'b', text: { es: 'Investigar internamente primero antes de involucrar al regulador para minimizar el impacto', en: 'Investigate internally first before involving the regulator to minimize impact', fr: 'Enquêter en interne d\'abord avant d\'impliquer le régulateur pour minimiser l\'impact' }, value: 25 }, { id: 'c', text: { es: 'Corregir las reservas silenciosamente y despedir al CFO por "reestructuración"', en: 'Silently correct the reserves and fire the CFO for "restructuring"', fr: 'Corriger silencieusement les réserves et licencier le directeur financier pour "restructuration"' }, value: 0 }, { id: 'd', text: { es: 'Consultar con el abogado corporativo antes de tomar cualquier acción para proteger legalmente a la empresa', en: 'Consult with corporate counsel before taking any action to legally protect the company', fr: 'Consulter l\'avocat d\'entreprise avant de prendre toute action pour protéger légalement l\'entreprise' }, value: 50 }], maxScore: 100, aiEvaluated: false, order: 6, isActive: true },
  { id: 'gm-cm-02', profileId: 'general-manager', categoryId: 'gm-soft-skills', competencyId: 'gm-crisis-management', type: 'scale', content: { es: '¿Qué tan preparado se siente para tomar decisiones críticas bajo presión extrema cuando la información disponible es incompleta y las consecuencias son significativas?', en: 'How prepared do you feel to make critical decisions under extreme pressure when available information is incomplete and consequences are significant?', fr: 'Dans quelle mesure vous sentez-vous préparé à prendre des décisions critiques sous pression extrême lorsque l\'information disponible est incomplète et les conséquences sont significatives ?' }, scaleMin: 1, scaleMax: 5, scaleLabels: { min: { es: 'Poco preparado', en: 'Not very prepared', fr: 'Peu préparé' }, max: { es: 'Totalmente preparado', en: 'Fully prepared', fr: 'Totalement préparé' } }, maxScore: 100, aiEvaluated: false, order: 7, isActive: true },
];

const gmReadinessQuestions: Question[] = [
  // Change Leadership
  { id: 'gm-cl-01', profileId: 'general-manager', categoryId: 'gm-readiness', competencyId: 'gm-change-leadership', type: 'scenario', content: { es: 'El directorio aprueba la fusión con otra aseguradora de tamaño similar. Usted será el CEO de la entidad combinada. Debe integrar dos culturas organizacionales distintas, sistemas tecnológicos incompatibles y equipos ejecutivos duplicados.\n\nContexto: La fusión debe completarse en 18 meses. Se espera una reducción de personal del 20% por sinergias. Los reguladores exigen continuidad operativa sin interrupciones para los asegurados.', en: 'The board approves a merger with another insurance company of similar size. You will be the CEO of the combined entity. You must integrate two distinct organizational cultures, incompatible technology systems, and duplicate executive teams.\n\nContext: The merger must be completed in 18 months. A 20% staff reduction is expected from synergies. Regulators require operational continuity without disruption to policyholders.', fr: 'Le conseil approuve la fusion avec une autre compagnie d\'assurance de taille similaire. Vous serez le PDG de l\'entité combinée. Vous devez intégrer deux cultures organisationnelles distinctes, des systèmes technologiques incompatibles et des équipes exécutives en double.\n\nContexte : La fusion doit être achevée en 18 mois. Une réduction de personnel de 20% est attendue grâce aux synergies. Les régulateurs exigent une continuité opérationnelle sans interruption pour les assurés.' }, rubric: { es: 'Evaluar: (1) Plan de integración estructurado con fases, (2) Gestión del cambio cultural, (3) Estrategia de comunicación para todos los stakeholders, (4) Manejo humano de las reducciones de personal, (5) Gobernanza del proceso de fusión, (6) Mitigación de riesgos operativos y regulatorios.', en: 'Evaluate: (1) Structured integration plan with phases, (2) Cultural change management, (3) Communication strategy for all stakeholders, (4) Humane handling of staff reductions, (5) Merger process governance, (6) Operational and regulatory risk mitigation.', fr: 'Évaluer : (1) Plan d\'intégration structuré par phases, (2) Gestion du changement culturel, (3) Stratégie de communication pour toutes les parties prenantes, (4) Gestion humaine des réductions de personnel, (5) Gouvernance du processus de fusion, (6) Atténuation des risques opérationnels et réglementaires.' }, maxScore: 100, aiEvaluated: true, order: 1, isActive: true },
  { id: 'gm-cl-02', profileId: 'general-manager', categoryId: 'gm-readiness', competencyId: 'gm-change-leadership', type: 'multiple-choice', content: { es: 'Está liderando una transformación digital que requiere cambiar los procesos core de suscripción y siniestros. El 40% de los gerentes medios se resiste activamente al cambio. ¿Cuál es su estrategia?', en: 'You are leading a digital transformation that requires changing core underwriting and claims processes. 40% of middle managers are actively resisting the change. What is your strategy?', fr: 'Vous dirigez une transformation numérique qui nécessite de changer les processus fondamentaux de souscription et de sinistres. 40% des cadres intermédiaires résistent activement au changement. Quelle est votre stratégie ?' }, options: [{ id: 'a', text: { es: 'Identificar a los líderes de opinión dentro del grupo resistente, involucrarlos como agentes de cambio, crear pilotos con quick wins visibles y gestionar la resistencia con empatía pero firmeza', en: 'Identify opinion leaders within the resistant group, involve them as change agents, create pilots with visible quick wins, and manage resistance with empathy but firmness', fr: 'Identifier les leaders d\'opinion dans le groupe résistant, les impliquer comme agents du changement, créer des pilotes avec des gains rapides visibles et gérer la résistance avec empathie mais fermeté' }, value: 100 }, { id: 'b', text: { es: 'Reemplazar a los gerentes que se resisten con personas alineadas a la transformación', en: 'Replace the resisting managers with people aligned to the transformation', fr: 'Remplacer les managers qui résistent par des personnes alignées sur la transformation' }, value: 20 }, { id: 'c', text: { es: 'Ralentizar la transformación para dar más tiempo de adaptación', en: 'Slow down the transformation to allow more adaptation time', fr: 'Ralentir la transformation pour donner plus de temps d\'adaptation' }, value: 35 }, { id: 'd', text: { es: 'Imponer los cambios por decreto y establecer consecuencias claras para quienes no se adapten', en: 'Impose changes by decree and establish clear consequences for those who don\'t adapt', fr: 'Imposer les changements par décret et établir des conséquences claires pour ceux qui ne s\'adaptent pas' }, value: 10 }], maxScore: 100, aiEvaluated: false, order: 2, isActive: true },
  // Innovation Strategy
  { id: 'gm-is-01', profileId: 'general-manager', categoryId: 'gm-readiness', competencyId: 'gm-innovation-strategy', type: 'open-text', content: { es: 'La inteligencia artificial generativa está transformando la industria aseguradora. Describa su estrategia para incorporar IA en las operaciones de la compañía, considerando oportunidades, riesgos éticos y el impacto en la fuerza laboral.', en: 'Generative AI is transforming the insurance industry. Describe your strategy for incorporating AI into company operations, considering opportunities, ethical risks, and workforce impact.', fr: 'L\'intelligence artificielle générative transforme le secteur de l\'assurance. Décrivez votre stratégie pour incorporer l\'IA dans les opérations de l\'entreprise, en considérant les opportunités, les risques éthiques et l\'impact sur la main-d\'œuvre.' }, rubric: { es: 'Evaluar: (1) Casos de uso concretos y prioritizados (suscripción, siniestros, atención al cliente), (2) Marco ético y de gobernanza de IA, (3) Plan de capacitación y reconversión del talento, (4) Inversión escalonada con métricas de ROI, (5) Gestión de riesgos (sesgo algorítmico, regulación), (6) Ventaja competitiva sostenible.', en: 'Evaluate: (1) Concrete and prioritized use cases (underwriting, claims, customer service), (2) AI ethics and governance framework, (3) Talent training and reskilling plan, (4) Phased investment with ROI metrics, (5) Risk management (algorithmic bias, regulation), (6) Sustainable competitive advantage.', fr: 'Évaluer : (1) Cas d\'utilisation concrets et priorisés (souscription, sinistres, service client), (2) Cadre éthique et de gouvernance de l\'IA, (3) Plan de formation et reconversion des talents, (4) Investissement échelonné avec métriques de ROI, (5) Gestion des risques (biais algorithmique, réglementation), (6) Avantage concurrentiel durable.' }, maxScore: 100, aiEvaluated: true, order: 3, isActive: true },
  { id: 'gm-is-02', profileId: 'general-manager', categoryId: 'gm-readiness', competencyId: 'gm-innovation-strategy', type: 'multiple-choice', content: { es: 'Su equipo de innovación propone lanzar un producto de microseguros paramétricos para el segmento agrícola usando tecnología satelital. El producto es innovador pero fuera del core business tradicional. ¿Qué decide?', en: 'Your innovation team proposes launching a parametric microinsurance product for the agricultural segment using satellite technology. The product is innovative but outside the traditional core business. What do you decide?', fr: 'Votre équipe d\'innovation propose de lancer un produit de micro-assurance paramétrique pour le segment agricole utilisant la technologie satellitaire. Le produit est innovateur mais en dehors du cœur de métier traditionnel. Que décidez-vous ?' }, options: [{ id: 'a', text: { es: 'Aprobar un piloto controlado con inversión limitada, definir métricas de éxito claras, y evaluar la escalabilidad después de 6 meses de datos reales', en: 'Approve a controlled pilot with limited investment, define clear success metrics, and evaluate scalability after 6 months of real data', fr: 'Approuver un pilote contrôlé avec un investissement limité, définir des métriques de succès claires et évaluer l\'évolutivité après 6 mois de données réelles' }, value: 100 }, { id: 'b', text: { es: 'Rechazar la propuesta porque no está alineada con el core business y dispersa los recursos', en: 'Reject the proposal because it\'s not aligned with core business and disperses resources', fr: 'Rejeter la proposition car elle n\'est pas alignée avec le cœur de métier et disperse les ressources' }, value: 20 }, { id: 'c', text: { es: 'Aprobar el lanzamiento completo inmediato para ganar ventaja de primer entrante', en: 'Approve full immediate launch to gain first-mover advantage', fr: 'Approuver le lancement complet immédiat pour gagner l\'avantage du premier entrant' }, value: 30 }, { id: 'd', text: { es: 'Crear una subsidiaria separada para desarrollar el producto sin afectar las operaciones principales', en: 'Create a separate subsidiary to develop the product without affecting main operations', fr: 'Créer une filiale séparée pour développer le produit sans affecter les opérations principales' }, value: 60 }], maxScore: 100, aiEvaluated: false, order: 4, isActive: true },
  // Executive Team Building
  { id: 'gm-etb-01', profileId: 'general-manager', categoryId: 'gm-readiness', competencyId: 'gm-executive-team-building', type: 'open-text', content: { es: 'Al evaluar su equipo ejecutivo actual, identifica que dos vicepresidentes tienen bajo desempeño consistente, un puesto clave (VP de Tecnología) está vacante, y hay conflictos interpersonales entre el VP Comercial y el VP de Operaciones. ¿Cómo abordaría esta situación?', en: 'When evaluating your current executive team, you identify that two VPs have consistently low performance, a key role (VP of Technology) is vacant, and there are interpersonal conflicts between the Commercial VP and Operations VP. How would you address this situation?', fr: 'En évaluant votre équipe exécutive actuelle, vous identifiez que deux vice-présidents ont des performances constamment faibles, un poste clé (VP Technologie) est vacant et il y a des conflits interpersonnels entre le VP Commercial et le VP Opérations. Comment aborderiez-vous cette situation ?' }, rubric: { es: 'Evaluar: (1) Proceso de diagnóstico justo (conversaciones, datos de desempeño), (2) Planes de desarrollo vs. decisiones de salida para los VP de bajo rendimiento, (3) Estrategia de reclutamiento ejecutivo para el VP de Tecnología, (4) Mediación del conflicto Comercial-Operaciones, (5) Construcción de equipo como prioridad estratégica, (6) Plazos y seguimiento.', en: 'Evaluate: (1) Fair diagnostic process (conversations, performance data), (2) Development plans vs. exit decisions for underperforming VPs, (3) Executive recruitment strategy for VP of Technology, (4) Commercial-Operations conflict mediation, (5) Team building as strategic priority, (6) Timelines and follow-up.', fr: 'Évaluer : (1) Processus de diagnostic équitable (conversations, données de performance), (2) Plans de développement vs. décisions de sortie pour les VP sous-performants, (3) Stratégie de recrutement exécutif pour le VP Technologie, (4) Médiation du conflit Commercial-Opérations, (5) Construction d\'équipe comme priorité stratégique, (6) Délais et suivi.' }, maxScore: 100, aiEvaluated: true, order: 5, isActive: true },
  { id: 'gm-etb-02', profileId: 'general-manager', categoryId: 'gm-readiness', competencyId: 'gm-executive-team-building', type: 'scale', content: { es: '¿Qué tan efectivo se considera para identificar, atraer y desarrollar talento ejecutivo de alto nivel que fortalezca el equipo de liderazgo de la organización?', en: 'How effective do you consider yourself at identifying, attracting, and developing senior executive talent that strengthens the organization\'s leadership team?', fr: 'Dans quelle mesure vous considérez-vous efficace pour identifier, attirer et développer des talents exécutifs de haut niveau qui renforcent l\'équipe de direction de l\'organisation ?' }, scaleMin: 1, scaleMax: 5, scaleLabels: { min: { es: 'Poco efectivo', en: 'Not very effective', fr: 'Peu efficace' }, max: { es: 'Altamente efectivo', en: 'Highly effective', fr: 'Très efficace' } }, maxScore: 100, aiEvaluated: false, order: 6, isActive: true },
];

// ============================================================================
// CUSTOMER SERVICE OFFICER QUESTIONS
// ============================================================================

// --- Professional Skills ---
const csoProfessionalQuestions: Question[] = [
  { id: 'csof-inq-01', profileId: 'customer-service-officer', categoryId: 'cso-professional', competencyId: 'cso-inquiry-handling', type: 'multiple-choice', content: { es: 'Un cliente llama preguntando por el estado de un reclamo que presentó hace dos semanas. No encuentra el número de caso. ¿Cuál es la mejor forma de proceder?', en: 'A customer calls asking about the status of a claim they filed two weeks ago. They cannot find their case number. What is the best way to proceed?', fr: 'Un client appelle pour connaître l\'état d\'une réclamation soumise il y a deux semaines. Il ne trouve pas son numéro de dossier. Quelle est la meilleure façon de procéder ?' }, options: [{ id: 'a', text: { es: 'Pedirle que busque el número de caso y vuelva a llamar cuando lo tenga', en: 'Ask them to find the case number and call back when they have it', fr: 'Lui demander de trouver le numéro de dossier et de rappeler' }, value: 10 }, { id: 'b', text: { es: 'Verificar su identidad con datos alternativos (nombre, cédula, fecha del reclamo) y buscar el caso en el sistema', en: 'Verify their identity with alternative data (name, ID number, claim date) and look up the case in the system', fr: 'Vérifier son identité avec des données alternatives (nom, numéro d\'identité, date de réclamation) et rechercher le dossier dans le système' }, value: 100 }, { id: 'c', text: { es: 'Transferir la llamada al departamento de reclamos sin verificar nada', en: 'Transfer the call to the claims department without verifying anything', fr: 'Transférer l\'appel au département des réclamations sans rien vérifier' }, value: 20 }, { id: 'd', text: { es: 'Darle un nuevo número de caso y registrar un reclamo nuevo', en: 'Give them a new case number and register a new claim', fr: 'Lui donner un nouveau numéro de dossier et enregistrer une nouvelle réclamation' }, value: 0 }], maxScore: 100, aiEvaluated: false, order: 1, isActive: true },
  { id: 'csof-inq-02', profileId: 'customer-service-officer', categoryId: 'cso-professional', competencyId: 'cso-inquiry-handling', type: 'scale', content: { es: '¿Qué tan competente se considera para manejar consultas simultáneas a través de múltiples canales (teléfono, correo electrónico, chat en vivo)?', en: 'How proficient do you consider yourself at handling simultaneous inquiries across multiple channels (phone, email, live chat)?', fr: 'À quel point vous considérez-vous compétent pour gérer des demandes simultanées sur plusieurs canaux (téléphone, courriel, chat en direct) ?' }, scaleMin: 1, scaleMax: 5, scaleLabels: { min: { es: 'Nada competente', en: 'Not proficient at all', fr: 'Pas du tout compétent' }, max: { es: 'Muy competente', en: 'Very proficient', fr: 'Très compétent' } }, maxScore: 100, aiEvaluated: false, order: 2, isActive: true },
  { id: 'csof-comp-01', profileId: 'customer-service-officer', categoryId: 'cso-professional', competencyId: 'cso-complaint-resolution', type: 'scenario', content: { es: 'Un cliente llega furioso a la oficina porque le cobraron dos veces la prima de su póliza de seguro. Exige un reembolso inmediato y amenaza con cancelar todos sus productos. Su sistema muestra que efectivamente hubo un cobro duplicado.\n\nContexto: Usted puede procesar reembolsos de hasta $200, pero el monto duplicado es de $450. Su supervisor no está disponible por la próxima hora.', en: 'A customer arrives at the office furious because they were charged twice for their insurance policy premium. They demand an immediate refund and threaten to cancel all their products. Your system shows there was indeed a duplicate charge.\n\nContext: You can process refunds up to $200, but the duplicate amount is $450. Your supervisor is unavailable for the next hour.', fr: 'Un client arrive au bureau furieux car on lui a facturé deux fois la prime de sa police d\'assurance. Il exige un remboursement immédiat et menace d\'annuler tous ses produits. Votre système montre qu\'il y a effectivement eu un double prélèvement.\n\nContexte : Vous pouvez traiter des remboursements jusqu\'à 200 $, mais le montant en double est de 450 $. Votre superviseur n\'est pas disponible pendant la prochaine heure.' }, rubric: { es: 'Evaluar: (1) Manejo emocional del cliente (empatía, validación), (2) Reconocimiento del error sin buscar excusas, (3) Acción inmediata dentro de su autoridad (reembolso parcial o compromiso documentado), (4) Plan de escalamiento claro con plazos, (5) Medidas de retención del cliente, (6) Documentación del caso.', en: 'Evaluate: (1) Emotional handling of the customer (empathy, validation), (2) Error acknowledgment without excuses, (3) Immediate action within authority (partial refund or documented commitment), (4) Clear escalation plan with timelines, (5) Customer retention measures, (6) Case documentation.', fr: 'Évaluer : (1) Gestion émotionnelle du client (empathie, validation), (2) Reconnaissance de l\'erreur sans excuses, (3) Action immédiate dans les limites d\'autorité (remboursement partiel ou engagement documenté), (4) Plan d\'escalade clair avec délais, (5) Mesures de rétention du client, (6) Documentation du cas.' }, maxScore: 100, aiEvaluated: true, order: 3, isActive: true },
  { id: 'csof-crm-01', profileId: 'customer-service-officer', categoryId: 'cso-professional', competencyId: 'cso-crm-documentation', type: 'open-text', content: { es: 'Describa qué información considera esencial registrar en el CRM después de cada interacción con un cliente y por qué es importante mantener un registro completo y preciso.', en: 'Describe what information you consider essential to record in the CRM after each customer interaction and why it is important to maintain a complete and accurate record.', fr: 'Décrivez quelles informations vous considérez essentielles à enregistrer dans le CRM après chaque interaction avec un client et pourquoi il est important de maintenir un registre complet et précis.' }, rubric: { es: 'Evaluar: (1) Datos del cliente y canal de contacto, (2) Motivo de la consulta/problema, (3) Acciones tomadas y resolución, (4) Compromisos pendientes con fechas, (5) Comprensión de la importancia para continuidad del servicio y análisis de tendencias, (6) Clasificación o etiquetado del caso.', en: 'Evaluate: (1) Customer data and contact channel, (2) Inquiry/issue reason, (3) Actions taken and resolution, (4) Pending commitments with dates, (5) Understanding of importance for service continuity and trend analysis, (6) Case classification or tagging.', fr: 'Évaluer : (1) Données du client et canal de contact, (2) Motif de la demande/problème, (3) Actions prises et résolution, (4) Engagements en attente avec dates, (5) Compréhension de l\'importance pour la continuité du service et l\'analyse des tendances, (6) Classification ou étiquetage du cas.' }, maxScore: 100, aiEvaluated: true, order: 4, isActive: true },
  { id: 'csof-trans-01', profileId: 'customer-service-officer', categoryId: 'cso-professional', competencyId: 'cso-transaction-processing', type: 'multiple-choice', content: { es: 'Un cliente solicita un cambio de beneficiario en su póliza de vida. ¿Cuál es el procedimiento correcto?', en: 'A customer requests a beneficiary change on their life insurance policy. What is the correct procedure?', fr: 'Un client demande un changement de bénéficiaire sur sa police d\'assurance vie. Quelle est la procédure correcte ?' }, options: [{ id: 'a', text: { es: 'Solicitar la documentación requerida (formulario firmado, identificación), verificar la identidad del titular, procesar el cambio en el sistema y confirmar por escrito al cliente', en: 'Request the required documentation (signed form, ID), verify the policyholder\'s identity, process the change in the system, and confirm in writing to the customer', fr: 'Demander la documentation requise (formulaire signé, pièce d\'identité), vérifier l\'identité du titulaire, traiter le changement dans le système et confirmer par écrit au client' }, value: 100 }, { id: 'b', text: { es: 'Hacer el cambio inmediatamente en el sistema con la solicitud verbal del cliente', en: 'Make the change immediately in the system with the customer\'s verbal request', fr: 'Effectuer le changement immédiatement dans le système avec la demande verbale du client' }, value: 0 }, { id: 'c', text: { es: 'Pedirle que envíe un correo electrónico y procesarlo cuando pueda', en: 'Ask them to send an email and process it when you can', fr: 'Lui demander d\'envoyer un courriel et le traiter quand vous pourrez' }, value: 30 }, { id: 'd', text: { es: 'Transferirlo al departamento legal porque es un cambio sensible', en: 'Transfer them to the legal department because it is a sensitive change', fr: 'Le transférer au département juridique car c\'est un changement sensible' }, value: 20 }], maxScore: 100, aiEvaluated: false, order: 5, isActive: true },
  { id: 'csof-prod-01', profileId: 'customer-service-officer', categoryId: 'cso-professional', competencyId: 'cso-product-knowledge', type: 'scenario', content: { es: 'Un cliente llama interesado en contratar un seguro, pero no sabe si necesita un seguro de vida, un seguro de gastos médicos o ambos. Tiene 35 años, está casado, tiene dos hijos pequeños y trabaja como empleado de oficina.\n\nContexto: Usted maneja el catálogo completo de productos de seguros de la compañía.', en: 'A customer calls interested in purchasing insurance but is unsure whether they need life insurance, health insurance, or both. They are 35 years old, married, have two young children, and work as an office employee.\n\nContext: You handle the company\'s complete insurance product catalog.', fr: 'Un client appelle intéressé par une assurance mais ne sait pas s\'il a besoin d\'une assurance vie, d\'une assurance santé ou des deux. Il a 35 ans, est marié, a deux jeunes enfants et travaille comme employé de bureau.\n\nContexte : Vous gérez le catalogue complet de produits d\'assurance de la compagnie.' }, rubric: { es: 'Evaluar: (1) Preguntas de descubrimiento de necesidades, (2) Explicación clara de las diferencias entre productos, (3) Recomendación personalizada basada en el perfil familiar, (4) Mención de coberturas y beneficios relevantes, (5) Transparencia sobre costos y exclusiones, (6) Invitación a una cita con un asesor para profundizar.', en: 'Evaluate: (1) Needs discovery questions, (2) Clear explanation of product differences, (3) Personalized recommendation based on family profile, (4) Mention of relevant coverages and benefits, (5) Transparency about costs and exclusions, (6) Invitation to an advisor appointment for deeper discussion.', fr: 'Évaluer : (1) Questions de découverte des besoins, (2) Explication claire des différences entre produits, (3) Recommandation personnalisée selon le profil familial, (4) Mention des couvertures et avantages pertinents, (5) Transparence sur les coûts et exclusions, (6) Invitation à un rendez-vous avec un conseiller.' }, maxScore: 100, aiEvaluated: true, order: 6, isActive: true },
];

// --- Soft Skills ---
const csoSoftSkillsQuestions: Question[] = [
  { id: 'csof-emp-01', profileId: 'customer-service-officer', categoryId: 'cso-soft-skills', competencyId: 'cso-empathy', type: 'scenario', content: { es: 'Una señora de edad avanzada llama llorando porque acaba de fallecer su esposo y necesita saber qué pasa con la póliza de seguro de vida. Está muy confundida y no entiende los términos que usted le menciona.\n\nContexto: Es su primer contacto con la aseguradora después del fallecimiento. No tiene familiares que la acompañen en ese momento.', en: 'An elderly woman calls crying because her husband just passed away and she needs to know what happens with the life insurance policy. She is very confused and does not understand the terms you mention.\n\nContext: This is her first contact with the insurance company after the death. She has no family members with her at the moment.', fr: 'Une dame âgée appelle en pleurant car son mari vient de décéder et elle a besoin de savoir ce qui se passe avec la police d\'assurance vie. Elle est très confuse et ne comprend pas les termes que vous mentionnez.\n\nContexte : C\'est son premier contact avec l\'assureur après le décès. Elle n\'a pas de proches avec elle à ce moment.' }, rubric: { es: 'Evaluar: (1) Tono empático y compasivo, (2) Dar tiempo y espacio emocional, (3) Simplificar el lenguaje técnico, (4) Guía paso a paso clara del proceso de reclamo, (5) Ofrecimiento de ayuda adicional (llamar después, enviar información por escrito), (6) Sensibilidad ante la situación de duelo.', en: 'Evaluate: (1) Empathetic and compassionate tone, (2) Giving emotional time and space, (3) Simplifying technical language, (4) Clear step-by-step claims process guidance, (5) Offering additional help (callback, written information), (6) Sensitivity to the grieving situation.', fr: 'Évaluer : (1) Ton empathique et compatissant, (2) Donner du temps et de l\'espace émotionnel, (3) Simplifier le langage technique, (4) Guide étape par étape clair du processus de réclamation, (5) Offre d\'aide supplémentaire (rappel, informations écrites), (6) Sensibilité à la situation de deuil.' }, maxScore: 100, aiEvaluated: true, order: 1, isActive: true },
  { id: 'csof-comm-01', profileId: 'customer-service-officer', categoryId: 'cso-soft-skills', competencyId: 'cso-communication', type: 'multiple-choice', content: { es: 'Un cliente le envía un correo electrónico extenso y confuso con múltiples preguntas sobre su póliza, pagos y cobertura. ¿Cómo responde?', en: 'A customer sends you a long, confusing email with multiple questions about their policy, payments, and coverage. How do you respond?', fr: 'Un client vous envoie un courriel long et confus avec plusieurs questions sur sa police, ses paiements et sa couverture. Comment répondez-vous ?' }, options: [{ id: 'a', text: { es: 'Responder con un correo organizado punto por punto, numerando cada pregunta y su respuesta de forma clara y concisa', en: 'Reply with an organized email addressing each point, numbering each question and its answer clearly and concisely', fr: 'Répondre avec un courriel organisé point par point, numérotant chaque question et sa réponse de manière claire et concise' }, value: 100 }, { id: 'b', text: { es: 'Llamarle por teléfono para resolver todo más rápido', en: 'Call them by phone to resolve everything faster', fr: 'L\'appeler par téléphone pour tout résoudre plus vite' }, value: 50 }, { id: 'c', text: { es: 'Responder solo las preguntas más urgentes e ignorar las demás', en: 'Answer only the most urgent questions and ignore the rest', fr: 'Répondre seulement aux questions les plus urgentes et ignorer les autres' }, value: 10 }, { id: 'd', text: { es: 'Reenviar el correo a su supervisor porque es muy complejo', en: 'Forward the email to your supervisor because it is too complex', fr: 'Transférer le courriel à votre superviseur car c\'est trop complexe' }, value: 20 }], maxScore: 100, aiEvaluated: false, order: 2, isActive: true },
  { id: 'csof-pat-01', profileId: 'customer-service-officer', categoryId: 'cso-soft-skills', competencyId: 'cso-patience-composure', type: 'multiple-choice', content: { es: 'Un cliente lleva 15 minutos repitiendo la misma queja y elevando el tono de voz a pesar de que usted ya le explicó la solución disponible. ¿Qué hace?', en: 'A customer has been repeating the same complaint for 15 minutes and raising their voice even though you have already explained the available solution. What do you do?', fr: 'Un client répète la même plainte depuis 15 minutes et élève le ton malgré que vous avez déjà expliqué la solution disponible. Que faites-vous ?' }, options: [{ id: 'a', text: { es: 'Mantener la calma, reconocer su frustración nuevamente, resumir lo acordado y preguntar si hay algo adicional que pueda hacer por él', en: 'Stay calm, acknowledge their frustration again, summarize what was agreed, and ask if there is anything else you can do for them', fr: 'Rester calme, reconnaître à nouveau sa frustration, résumer ce qui a été convenu et demander s\'il y a autre chose que vous pouvez faire' }, value: 100 }, { id: 'b', text: { es: 'Decirle que ya le explicó la solución y que no puede hacer más', en: 'Tell them you already explained the solution and cannot do more', fr: 'Lui dire que vous avez déjà expliqué la solution et ne pouvez pas faire plus' }, value: 15 }, { id: 'c', text: { es: 'Transferir la llamada a un compañero para que no siga lidiando con el cliente', en: 'Transfer the call to a colleague so you do not have to keep dealing with the customer', fr: 'Transférer l\'appel à un collègue pour ne plus avoir à gérer le client' }, value: 10 }, { id: 'd', text: { es: 'Ofrecerle que hable con un supervisor para que sienta que su caso se está tomando en serio', en: 'Offer to let them speak with a supervisor so they feel their case is being taken seriously', fr: 'Lui proposer de parler à un superviseur pour qu\'il sente que son cas est pris au sérieux' }, value: 70 }], maxScore: 100, aiEvaluated: false, order: 3, isActive: true },
  { id: 'csof-team-01', profileId: 'customer-service-officer', categoryId: 'cso-soft-skills', competencyId: 'cso-teamwork', type: 'open-text', content: { es: 'Describa una situación en la que tuvo que colaborar con compañeros de otros departamentos (ventas, reclamos, operaciones) para resolver un problema de un cliente. ¿Cómo coordinó la comunicación y cuál fue el resultado?', en: 'Describe a situation where you had to collaborate with colleagues from other departments (sales, claims, operations) to resolve a customer issue. How did you coordinate communication and what was the outcome?', fr: 'Décrivez une situation où vous avez dû collaborer avec des collègues d\'autres départements (ventes, réclamations, opérations) pour résoudre un problème client. Comment avez-vous coordonné la communication et quel a été le résultat ?' }, rubric: { es: 'Evaluar: (1) Claridad en la identificación del problema, (2) Iniciativa para buscar apoyo interdepartamental, (3) Comunicación efectiva entre equipos, (4) Seguimiento del caso hasta la resolución, (5) Resultado positivo para el cliente.', en: 'Evaluate: (1) Clarity in problem identification, (2) Initiative in seeking cross-departmental support, (3) Effective communication between teams, (4) Case follow-up through resolution, (5) Positive outcome for the customer.', fr: 'Évaluer : (1) Clarté dans l\'identification du problème, (2) Initiative pour chercher un soutien interdépartemental, (3) Communication efficace entre équipes, (4) Suivi du cas jusqu\'à la résolution, (5) Résultat positif pour le client.' }, maxScore: 100, aiEvaluated: true, order: 4, isActive: true },
  { id: 'csof-pat-02', profileId: 'customer-service-officer', categoryId: 'cso-soft-skills', competencyId: 'cso-patience-composure', type: 'scale', content: { es: '¿Qué tan cómodo se siente manejando clientes difíciles o agresivos sin perder la compostura profesional durante toda la interacción?', en: 'How comfortable do you feel handling difficult or aggressive customers without losing professional composure throughout the interaction?', fr: 'À quel point êtes-vous à l\'aise pour gérer des clients difficiles ou agressifs sans perdre votre calme professionnel pendant toute l\'interaction ?' }, scaleMin: 1, scaleMax: 5, scaleLabels: { min: { es: 'Nada cómodo', en: 'Not comfortable at all', fr: 'Pas du tout à l\'aise' }, max: { es: 'Muy cómodo', en: 'Very comfortable', fr: 'Très à l\'aise' } }, maxScore: 100, aiEvaluated: false, order: 5, isActive: true },
];

// --- Readiness for Change ---
const csoReadinessQuestions: Question[] = [
  { id: 'csof-adapt-01', profileId: 'customer-service-officer', categoryId: 'cso-readiness', competencyId: 'cso-process-adaptability', type: 'multiple-choice', content: { es: 'La empresa cambia el protocolo de atención de reclamos: ahora debe seguirse un flujo de 8 pasos en lugar de los 5 anteriores. ¿Cuál es su reacción?', en: 'The company changes the claims handling protocol: now an 8-step flow must be followed instead of the previous 5. What is your reaction?', fr: 'L\'entreprise change le protocole de traitement des réclamations : un processus en 8 étapes doit désormais être suivi au lieu des 5 précédentes. Quelle est votre réaction ?' }, options: [{ id: 'a', text: { es: 'Estudiar el nuevo flujo, practicarlo con casos de ejemplo y proponer mejoras si encuentra oportunidades', en: 'Study the new flow, practice it with sample cases, and propose improvements if opportunities are found', fr: 'Étudier le nouveau processus, le pratiquer avec des cas exemples et proposer des améliorations si des opportunités sont identifiées' }, value: 100 }, { id: 'b', text: { es: 'Seguir el nuevo flujo cuando se lo exijan pero preferir el anterior cuando nadie supervise', en: 'Follow the new flow when required but prefer the previous one when no one is supervising', fr: 'Suivre le nouveau processus quand c\'est exigé mais préférer l\'ancien quand personne ne supervise' }, value: 10 }, { id: 'c', text: { es: 'Quejarse con los compañeros porque el proceso anterior funcionaba bien', en: 'Complain to colleagues because the previous process worked fine', fr: 'Se plaindre auprès des collègues car le processus précédent fonctionnait bien' }, value: 0 }, { id: 'd', text: { es: 'Adaptarse al nuevo flujo gradualmente sin cuestionar', en: 'Adapt to the new flow gradually without questioning', fr: 'S\'adapter progressivement au nouveau processus sans questionner' }, value: 60 }], maxScore: 100, aiEvaluated: false, order: 1, isActive: true },
  { id: 'csof-tech-01', profileId: 'customer-service-officer', categoryId: 'cso-readiness', competencyId: 'cso-tech-tools', type: 'scenario', content: { es: 'La empresa implementa un nuevo sistema de CRM con inteligencia artificial que sugiere respuestas automáticas a los clientes y clasifica los casos por prioridad. Varios compañeros expresan resistencia porque sienten que la IA reemplazará su trabajo.\n\nContexto: Usted tiene una semana de capacitación antes de que el sistema entre en producción. La herramienta es complementaria, no sustitutiva del agente.', en: 'The company implements a new AI-powered CRM system that suggests automatic responses to customers and classifies cases by priority. Several colleagues express resistance because they feel AI will replace their jobs.\n\nContext: You have one week of training before the system goes into production. The tool is complementary, not a replacement for the agent.', fr: 'L\'entreprise implémente un nouveau système CRM avec intelligence artificielle qui suggère des réponses automatiques aux clients et classifie les cas par priorité. Plusieurs collègues expriment de la résistance car ils sentent que l\'IA remplacera leur travail.\n\nContexte : Vous avez une semaine de formation avant la mise en production. L\'outil est complémentaire, pas un substitut de l\'agent.' }, rubric: { es: 'Evaluar: (1) Actitud positiva ante la nueva herramienta, (2) Aprovechamiento del periodo de capacitación, (3) Comprensión de la IA como herramienta de apoyo, (4) Disposición para ayudar a compañeros con la transición, (5) Ideas de cómo la IA puede mejorar la calidad del servicio, (6) Equilibrio entre automatización y toque humano.', en: 'Evaluate: (1) Positive attitude toward the new tool, (2) Making the most of the training period, (3) Understanding AI as a support tool, (4) Willingness to help colleagues with the transition, (5) Ideas on how AI can improve service quality, (6) Balance between automation and human touch.', fr: 'Évaluer : (1) Attitude positive envers le nouvel outil, (2) Optimisation de la période de formation, (3) Compréhension de l\'IA comme outil de soutien, (4) Disposition à aider les collègues dans la transition, (5) Idées sur comment l\'IA peut améliorer la qualité du service, (6) Équilibre entre automatisation et touche humaine.' }, maxScore: 100, aiEvaluated: true, order: 2, isActive: true },
  { id: 'csof-tech-02', profileId: 'customer-service-officer', categoryId: 'cso-readiness', competencyId: 'cso-tech-tools', type: 'scale', content: { es: '¿Qué tan dispuesto está a aprender nuevas plataformas digitales de atención al cliente (chatbots, sistemas omnicanal, herramientas de autoservicio)?', en: 'How willing are you to learn new digital customer service platforms (chatbots, omnichannel systems, self-service tools)?', fr: 'Dans quelle mesure êtes-vous disposé à apprendre de nouvelles plateformes numériques de service client (chatbots, systèmes omnicanaux, outils de libre-service) ?' }, scaleMin: 1, scaleMax: 5, scaleLabels: { min: { es: 'Nada dispuesto', en: 'Not willing at all', fr: 'Pas du tout disposé' }, max: { es: 'Totalmente dispuesto', en: 'Fully willing', fr: 'Tout à fait disposé' } }, maxScore: 100, aiEvaluated: false, order: 3, isActive: true },
  { id: 'csof-imp-01', profileId: 'customer-service-officer', categoryId: 'cso-readiness', competencyId: 'cso-continuous-improvement', type: 'open-text', content: { es: 'Identifique un aspecto del servicio al cliente en una aseguradora que considera podría mejorarse significativamente. Proponga una mejora concreta explicando los pasos para implementarla y cómo mediría su impacto.', en: 'Identify one aspect of customer service at an insurance company that you believe could be significantly improved. Propose a concrete improvement, explaining the steps to implement it and how you would measure its impact.', fr: 'Identifiez un aspect du service client dans une compagnie d\'assurance qui pourrait être significativement amélioré. Proposez une amélioration concrète en expliquant les étapes de mise en œuvre et comment vous mesureriez son impact.' }, rubric: { es: 'Evaluar: (1) Identificación clara de un problema real, (2) Análisis de la causa raíz, (3) Propuesta de solución viable y práctica, (4) Plan de implementación con pasos concretos, (5) Métricas de éxito propuestas (NPS, tiempo de resolución, satisfacción).', en: 'Evaluate: (1) Clear identification of a real problem, (2) Root cause analysis, (3) Viable and practical solution proposal, (4) Implementation plan with concrete steps, (5) Proposed success metrics (NPS, resolution time, satisfaction).', fr: 'Évaluer : (1) Identification claire d\'un problème réel, (2) Analyse des causes profondes, (3) Proposition de solution viable et pratique, (4) Plan de mise en œuvre avec étapes concrètes, (5) Métriques de succès proposées (NPS, temps de résolution, satisfaction).' }, maxScore: 100, aiEvaluated: true, order: 4, isActive: true },
  { id: 'csof-adapt-02', profileId: 'customer-service-officer', categoryId: 'cso-readiness', competencyId: 'cso-process-adaptability', type: 'multiple-choice', content: { es: 'La aseguradora decide implementar un horario de atención extendido que incluye sábados. Le asignan turnos rotativos que cambian cada dos semanas. ¿Cómo lo maneja?', en: 'The insurance company decides to implement extended service hours that include Saturdays. You are assigned rotating shifts that change every two weeks. How do you handle it?', fr: 'La compagnie d\'assurance décide d\'implémenter des heures de service étendues incluant les samedis. On vous attribue des quarts rotatifs qui changent toutes les deux semaines. Comment gérez-vous cela ?' }, options: [{ id: 'a', text: { es: 'Adaptarse con buena actitud, reorganizar sus actividades personales y aprovechar los beneficios de los turnos rotativos', en: 'Adapt with a positive attitude, reorganize personal activities, and take advantage of the rotating shift benefits', fr: 'S\'adapter avec une bonne attitude, réorganiser ses activités personnelles et profiter des avantages des quarts rotatifs' }, value: 100 }, { id: 'b', text: { es: 'Aceptar pero quejarse constantemente del cambio', en: 'Accept but constantly complain about the change', fr: 'Accepter mais se plaindre constamment du changement' }, value: 20 }, { id: 'c', text: { es: 'Buscar inmediatamente un intercambio de turno con un compañero para evitar los sábados', en: 'Immediately seek a shift swap with a colleague to avoid Saturdays', fr: 'Chercher immédiatement un échange de quart avec un collègue pour éviter les samedis' }, value: 30 }, { id: 'd', text: { es: 'Solicitar una excepción formal argumentando razones personales', en: 'Request a formal exception citing personal reasons', fr: 'Demander une exception formelle en invoquant des raisons personnelles' }, value: 15 }], maxScore: 100, aiEvaluated: false, order: 5, isActive: true },
];

// ============================================================================
// EXPORT: All questions combined
// ============================================================================

const elemPrincipalProfessionalQuestions: Question[] = [{ id: 'ep-lead-01', profileId: 'elementary-principal', categoryId: 'ep-professional', competencyId: 'ep-primary-ed-leadership', type: 'multiple-choice', content: { es: 'Como director, los resultados bajaron 15%. ¿Primer paso?', en: 'As principal, results dropped 15%. First step?', fr: 'En tant que directeur, résultats -15%. Première étape ?' }, options: [{ id: 'a', text: { es: 'Tutoría inmediata', en: 'Immediate tutoring', fr: 'Tutorat immédiat' }, value: 30 }, { id: 'b', text: { es: 'Analizar datos por grado, materia y demografía', en: 'Analyze data by grade, subject, demographics', fr: 'Analyser données par niveau, matière, démographie' }, value: 100 }, { id: 'c', text: { es: 'Pedir más esfuerzo a docentes', en: 'Ask teachers to try harder', fr: 'Demander plus d\'efforts' }, value: 10 }, { id: 'd', text: { es: 'Carta a padres', en: 'Letter to parents', fr: 'Lettre aux parents' }, value: 20 }], maxScore: 100, aiEvaluated: false, order: 1, isActive: true }, { id: 'ep-lead-02', profileId: 'elementary-principal', categoryId: 'ep-professional', competencyId: 'ep-primary-ed-leadership', type: 'scenario', content: { es: 'Plan estratégico a 3 años. 40% bajo nivel lectura, 35% matemáticas. Describa componentes clave.', en: '3-year strategic plan. 40% below reading, 35% math. Describe key components.', fr: 'Plan stratégique 3 ans. 40% sous niveau lecture, 35% maths. Composantes clés.' }, rubric: { es: 'Evaluar: diagnóstico, metas SMART, desarrollo profesional, intervenciones, familias, monitoreo.', en: 'Evaluate: diagnosis, SMART goals, PD, interventions, families, monitoring.', fr: 'Évaluer : diagnostic, objectifs SMART, développement professionnel, interventions, familles, suivi.' }, maxScore: 100, aiEvaluated: true, order: 2, isActive: true }, { id: 'ep-litn-01', profileId: 'elementary-principal', categoryId: 'ep-professional', competencyId: 'ep-literacy-numeracy-oversight', type: 'multiple-choice', content: { es: 'Docente usa método lectura no alineado con evidencia. ¿Cómo aborda?', en: 'Teacher uses reading method not aligned with evidence. How address?', fr: 'Enseignant utilise méthode non alignée. Comment aborder ?' }, options: [{ id: 'a', text: { es: 'Ordeno cambiar', en: 'Order change', fr: 'Ordonner de changer' }, value: 10 }, { id: 'b', text: { es: 'Desarrollo profesional basado en evidencia y acompañamiento', en: 'Evidence-based PD and coaching', fr: 'Développement professionnel et accompagnement' }, value: 100 }, { id: 'c', text: { es: 'No intervengo, libertad de cátedra', en: 'Don\'t intervene, academic freedom', fr: 'Ne pas intervenir, liberté pédagogique' }, value: 0 }, { id: 'd', text: { es: 'Materiales sin explicación', en: 'Materials without explanation', fr: 'Matériel sans explication' }, value: 25 }], maxScore: 100, aiEvaluated: false, order: 3, isActive: true }, { id: 'ep-coach-01', profileId: 'elementary-principal', categoryId: 'ep-professional', competencyId: 'ep-teacher-coaching', type: 'open-text', content: { es: 'Proceso de observación de clase y retroalimentación constructiva a docente de primaria.', en: 'Process for classroom observation and constructive feedback to elementary teacher.', fr: 'Processus d\'observation de classe et rétroaction constructive.' }, rubric: { es: 'Evaluar: preparación, observación, rúbricas, fortalezas, seguimiento.', en: 'Evaluate: preparation, observation, rubrics, strengths, follow-up.', fr: 'Évaluer : préparation, observation, grilles, forces, suivi.' }, maxScore: 100, aiEvaluated: true, order: 4, isActive: true }, { id: 'ep-sped-01', profileId: 'elementary-principal', categoryId: 'ep-professional', competencyId: 'ep-special-ed-coordination', type: 'scenario', content: { es: 'Estudiante 7 años: dificultades lectura, atención, conducta. Padres: "necesita disciplina". ¿Pasos?', en: '7-year-old: reading, attention, behavior difficulties. Parents: "needs discipline." Steps?', fr: 'Élève 7 ans: difficultés lecture, attention, comportement. Parents: "besoin discipline." Mesures ?' }, rubric: { es: 'Evaluar: referencia, RTI, comunicación empática, especialistas, plan individualizado.', en: 'Evaluate: referral, RTI, empathetic communication, specialists, individualized plan.', fr: 'Évaluer : référence, RTI, communication empathique, spécialistes, plan individualisé.' }, maxScore: 100, aiEvaluated: true, order: 5, isActive: true }, { id: 'ep-early-01', profileId: 'elementary-principal', categoryId: 'ep-professional', competencyId: 'ep-early-learning-programs', type: 'scale', content: { es: '¿Familiarizado con aprendizaje basado en juego para primaria?', en: 'Familiar with play-based learning for elementary?', fr: 'Familiarisé avec apprentissage par le jeu ?' }, scaleMin: 1, scaleMax: 5, scaleLabels: { min: { es: 'Nada', en: 'Not at all', fr: 'Pas du tout' }, max: { es: 'Muy', en: 'Very', fr: 'Très' } }, maxScore: 100, aiEvaluated: false, order: 6, isActive: true }];
const elemPrincipalSoftSkillsQuestions: Question[] = [{ id: 'ep-parent-01', profileId: 'elementary-principal', categoryId: 'ep-soft-skills', competencyId: 'ep-parent-engagement', type: 'scenario', content: { es: 'Padres molestos: programa de arte eliminado para lectura. Petición. ¿Cómo maneja?', en: 'Parents upset: art program cut for reading. Petition. How handle?', fr: 'Parents mécontents: programme arts supprimé pour lecture. Pétition. Comment gérer ?' }, rubric: { es: 'Evaluar: escucha, transparencia, alternativas, involucramiento, comunicación.', en: 'Evaluate: listening, transparency, alternatives, involvement, communication.', fr: 'Évaluer : écoute, transparence, alternatives, implication, communication.' }, maxScore: 100, aiEvaluated: true, order: 1, isActive: true }, { id: 'ep-parent-02', profileId: 'elementary-principal', categoryId: 'ep-soft-skills', competencyId: 'ep-parent-engagement', type: 'multiple-choice', content: { es: '¿Estrategia para participación de padres que trabajan tiempo completo?', en: 'Strategy for full-time working parents\' participation?', fr: 'Stratégie pour parents travaillant à temps plein ?' }, options: [{ id: 'a', text: { es: 'Más circulares', en: 'More flyers', fr: 'Plus de circulaires' }, value: 15 }, { id: 'b', text: { es: 'Canales flexibles: virtuales nocturnas, app, voluntariado fin de semana, encuestas en línea', en: 'Flexible channels: evening virtual, app, weekend volunteering, online surveys', fr: 'Canaux flexibles: virtuelles soirée, app, bénévolat week-end, sondages' }, value: 100 }, { id: 'c', text: { es: 'Reuniones obligatorias', en: 'Mandatory meetings', fr: 'Réunions obligatoires' }, value: 5 }, { id: 'd', text: { es: 'Docentes llamen familias', en: 'Teachers call families', fr: 'Enseignants appellent familles' }, value: 40 }], maxScore: 100, aiEvaluated: false, order: 2, isActive: true }, { id: 'ep-welfare-01', profileId: 'elementary-principal', categoryId: 'ep-soft-skills', competencyId: 'ep-child-welfare-safety', type: 'scenario', content: { es: 'Niño 6 años: moretones, ropa sucia, sin lonchera, retraído. ¿Pasos como director?', en: '6-year-old: bruises, dirty clothes, no lunch, withdrawn. Steps as principal?', fr: 'Enfant 6 ans: ecchymoses, vêtements sales, sans déjeuner, renfermé. Mesures ?' }, rubric: { es: 'Evaluar: reporte obligatorio, documentación, protección infantil, apoyo, confidencialidad, seguimiento.', en: 'Evaluate: mandatory reporting, documentation, CPS, support, confidentiality, follow-up.', fr: 'Évaluer : signalement, documentation, protection enfance, soutien, confidentialité, suivi.' }, maxScore: 100, aiEvaluated: true, order: 3, isActive: true }, { id: 'ep-welfare-02', profileId: 'elementary-principal', categoryId: 'ep-soft-skills', competencyId: 'ep-child-welfare-safety', type: 'scale', content: { es: '¿Preparado para emergencias escolares?', en: 'Prepared for school emergencies?', fr: 'Préparé aux urgences scolaires ?' }, scaleMin: 1, scaleMax: 5, scaleLabels: { min: { es: 'Nada', en: 'Not at all', fr: 'Pas du tout' }, max: { es: 'Totalmente', en: 'Fully', fr: 'Tout à fait' } }, maxScore: 100, aiEvaluated: false, order: 4, isActive: true }, { id: 'ep-climate-01', profileId: 'elementary-principal', categoryId: 'ep-soft-skills', competencyId: 'ep-school-climate', type: 'open-text', content: { es: 'Tres iniciativas para clima escolar positivo e inclusivo para niños con dificultades socioemocionales.', en: 'Three initiatives for positive, inclusive climate for children with social-emotional difficulties.', fr: 'Trois initiatives pour climat scolaire positif et inclusif.' }, rubric: { es: 'Evaluar: SEL, inclusión, conflictos, espacios seguros, participación.', en: 'Evaluate: SEL, inclusion, conflict resolution, safe spaces, participation.', fr: 'Évaluer : SEL, inclusion, conflits, espaces sûrs, participation.' }, maxScore: 100, aiEvaluated: true, order: 5, isActive: true }];
const elemPrincipalReadinessQuestions: Question[] = [{ id: 'ep-innov-01', profileId: 'elementary-principal', categoryId: 'ep-readiness', competencyId: 'ep-pedagogical-innovation', type: 'multiple-choice', content: { es: 'Docente veterano resiste tecnología. ¿Cómo aborda?', en: 'Veteran teacher resists ed-tech. How address?', fr: 'Enseignant expérimenté résiste technologie. Comment aborder ?' }, options: [{ id: 'a', text: { es: 'Exijo tecnología', en: 'Require technology', fr: 'Exiger technologie' }, value: 15 }, { id: 'b', text: { es: 'Reconozco experiencia, muestro complementariedad, mentoría entre pares', en: 'Acknowledge experience, show complement, peer mentoring', fr: 'Reconnaître expérience, montrer complémentarité, mentorat pairs' }, value: 100 }, { id: 'c', text: { es: 'Dejo seguir si buenos resultados', en: 'Let continue if good results', fr: 'Laisser continuer si bons résultats' }, value: 30 }, { id: 'd', text: { es: 'Asigno asistente tecnológico', en: 'Assign tech assistant', fr: 'Assigner assistant techno' }, value: 20 }], maxScore: 100, aiEvaluated: false, order: 1, isActive: true }, { id: 'ep-innov-02', profileId: 'elementary-principal', categoryId: 'ep-readiness', competencyId: 'ep-pedagogical-innovation', type: 'scale', content: { es: '¿Dispuesto a pilotear PBL, aula invertida, STEAM?', en: 'Willing to pilot PBL, flipped classroom, STEAM?', fr: 'Disposé à piloter PBL, classe inversée, STEAM ?' }, scaleMin: 1, scaleMax: 5, scaleLabels: { min: { es: 'Nada', en: 'Not at all', fr: 'Pas du tout' }, max: { es: 'Totalmente', en: 'Fully', fr: 'Tout à fait' } }, maxScore: 100, aiEvaluated: false, order: 2, isActive: true }, { id: 'ep-comm-01', profileId: 'elementary-principal', categoryId: 'ep-readiness', competencyId: 'ep-community-partnership', type: 'open-text', content: { es: 'Cómo desarrollar alianzas comunitarias para estudiantes. Dos ejemplos concretos.', en: 'How develop community partnerships for students? Two concrete examples.', fr: 'Comment développer partenariats communautaires ? Deux exemples concrets.' }, rubric: { es: 'Evaluar: necesidades, organizaciones, beneficios, sostenibilidad, formalización.', en: 'Evaluate: needs, organizations, benefits, sustainability, formalization.', fr: 'Évaluer : besoins, organisations, bénéfices, durabilité, formalisation.' }, maxScore: 100, aiEvaluated: true, order: 3, isActive: true }, { id: 'ep-improve-01', profileId: 'elementary-principal', categoryId: 'ep-readiness', competencyId: 'ep-continuous-improvement', type: 'scenario', content: { es: '30% docentes agotados, ausentismo +10%, quejas x2. ¿Plan mejora continua?', en: '30% burned out, absenteeism +10%, complaints x2. Continuous improvement plan?', fr: '30% épuisés, absentéisme +10%, plaintes x2. Plan amélioration continue ?' }, rubric: { es: 'Evaluar: análisis causal, priorización, bienestar, ausentismo, comunicación, indicadores.', en: 'Evaluate: root cause, prioritization, wellbeing, absenteeism, communication, indicators.', fr: 'Évaluer : analyse causale, priorisation, bien-être, absentéisme, communication, indicateurs.' }, maxScore: 100, aiEvaluated: true, order: 4, isActive: true }, { id: 'ep-improve-02', profileId: 'elementary-principal', categoryId: 'ep-readiness', competencyId: 'ep-continuous-improvement', type: 'multiple-choice', content: { es: '¿Enfoque más efectivo mejora continua escuela primaria?', en: 'Most effective continuous improvement approach for elementary?', fr: 'Approche la plus efficace amélioration continue primaire ?' }, options: [{ id: 'a', text: { es: 'Esperar resultados anuales', en: 'Wait for annual results', fr: 'Attendre résultats annuels' }, value: 10 }, { id: 'b', text: { es: 'Ciclos PDCA con datos formativos, observaciones, retroalimentación', en: 'PDCA cycles with formative data, observations, feedback', fr: 'Cycles PDCA avec données formatives, observations, retours' }, value: 100 }, { id: 'c', text: { es: 'Copiar mejores escuelas', en: 'Copy top schools', fr: 'Copier meilleures écoles' }, value: 25 }, { id: 'd', text: { es: 'Consultores externos', en: 'External consultants', fr: 'Consultants externes' }, value: 30 }], maxScore: 100, aiEvaluated: false, order: 5, isActive: true }];

// ============================================================================
// BUSINESS OFFICER (Ejecutivo de Negocios)
// ============================================================================

const boProfessionalQuestions: Question[] = [
  {
    id: 'bo-prosp-01',
    profileId: 'business-officer',
    categoryId: 'bo-professional',
    competencyId: 'bo-prospecting',
    type: 'multiple-choice',
    content: {
      es: 'Necesita generar 20 prospectos nuevos este mes en el sector asegurador. ¿Cuál estrategia de prospección sería más efectiva?',
      en: 'You need to generate 20 new prospects this month in the insurance sector. Which prospecting strategy would be most effective?',
      fr: 'Vous devez générer 20 nouveaux prospects ce mois-ci dans le secteur des assurances. Quelle stratégie de prospection serait la plus efficace ?',
    },
    options: [
      { id: 'a', text: { es: 'Esperar a que lleguen referidos de clientes actuales', en: 'Wait for referrals from current clients', fr: 'Attendre les recommandations de clients actuels' }, value: 15 },
      { id: 'b', text: { es: 'Combinar bases de datos segmentadas, redes sociales profesionales, eventos del sector y solicitar referidos activamente', en: 'Combine segmented databases, professional social media, industry events, and actively request referrals', fr: 'Combiner bases de données segmentées, réseaux sociaux professionnels, événements du secteur et demander activement des recommandations' }, value: 100 },
      { id: 'c', text: { es: 'Realizar llamadas en frío a números aleatorios del directorio', en: 'Make cold calls to random directory numbers', fr: 'Faire des appels à froid à des numéros aléatoires de l\'annuaire' }, value: 20 },
      { id: 'd', text: { es: 'Publicar anuncios genéricos en redes sociales personales', en: 'Post generic ads on personal social media', fr: 'Publier des annonces génériques sur les réseaux sociaux personnels' }, value: 30 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'bo-port-01',
    profileId: 'business-officer',
    categoryId: 'bo-professional',
    competencyId: 'bo-portfolio-management',
    type: 'scenario',
    content: {
      es: 'Tiene una cartera de 80 clientes. Detecta que el 25% no ha renovado su póliza en los últimos 3 meses y otro 15% ha reducido su cobertura. Describa su plan de acción para retener y hacer crecer esta cartera.',
      en: 'You have a portfolio of 80 clients. You detect that 25% have not renewed their policy in the last 3 months and another 15% have reduced their coverage. Describe your action plan to retain and grow this portfolio.',
      fr: 'Vous avez un portefeuille de 80 clients. Vous constatez que 25% n\'ont pas renouvelé leur police au cours des 3 derniers mois et 15% ont réduit leur couverture. Décrivez votre plan d\'action pour retenir et faire croître ce portefeuille.',
    },
    rubric: {
      es: 'Evaluar: segmentación de clientes por riesgo de fuga, plan de contacto personalizado, análisis de motivos de no renovación, propuestas de valor diferenciadas, estrategia de recuperación y seguimiento.',
      en: 'Evaluate: client segmentation by churn risk, personalized contact plan, analysis of non-renewal reasons, differentiated value propositions, recovery strategy and follow-up.',
      fr: 'Évaluer : segmentation des clients par risque de départ, plan de contact personnalisé, analyse des raisons de non-renouvellement, propositions de valeur différenciées, stratégie de récupération et suivi.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 2,
    isActive: true,
  },
  {
    id: 'bo-prop-01',
    profileId: 'business-officer',
    categoryId: 'bo-professional',
    competencyId: 'bo-commercial-proposals',
    type: 'open-text',
    content: {
      es: 'Un cliente potencial del sector industrial le pide una propuesta de seguros para su empresa con 200 empleados. ¿Qué elementos incluiría en su propuesta comercial y cómo la diferenciaría de la competencia?',
      en: 'A potential client from the industrial sector asks you for an insurance proposal for their company with 200 employees. What elements would you include in your commercial proposal and how would you differentiate it from the competition?',
      fr: 'Un client potentiel du secteur industriel vous demande une proposition d\'assurance pour son entreprise de 200 employés. Quels éléments incluriez-vous dans votre proposition commerciale et comment la différencieriez-vous de la concurrence ?',
    },
    rubric: {
      es: 'Evaluar: análisis de necesidades del cliente, personalización de coberturas, comparativo competitivo, valor agregado, condiciones de precio, plan de implementación y servicio postventa.',
      en: 'Evaluate: client needs analysis, coverage customization, competitive comparison, added value, pricing conditions, implementation plan, and after-sales service.',
      fr: 'Évaluer : analyse des besoins du client, personnalisation des couvertures, comparatif concurrentiel, valeur ajoutée, conditions de prix, plan de mise en œuvre et service après-vente.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },
  {
    id: 'bo-quota-01',
    profileId: 'business-officer',
    categoryId: 'bo-professional',
    competencyId: 'bo-sales-quotas',
    type: 'scale',
    content: {
      es: '¿Qué tan disciplinado es usted para planificar y ejecutar actividades diarias que contribuyan al cumplimiento de sus metas de ventas mensuales?',
      en: 'How disciplined are you in planning and executing daily activities that contribute to meeting your monthly sales targets?',
      fr: 'À quel point êtes-vous discipliné pour planifier et exécuter des activités quotidiennes contribuant à l\'atteinte de vos objectifs de vente mensuels ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada disciplinado', en: 'Not disciplined at all', fr: 'Pas du tout discipliné' },
      max: { es: 'Muy disciplinado', en: 'Very disciplined', fr: 'Très discipliné' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },
  {
    id: 'bo-pres-01',
    profileId: 'business-officer',
    categoryId: 'bo-professional',
    competencyId: 'bo-product-presentations',
    type: 'multiple-choice',
    content: {
      es: 'Debe presentar un nuevo producto de seguro de vida a un grupo de 15 empresarios. ¿Cuál es el enfoque más efectivo?',
      en: 'You need to present a new life insurance product to a group of 15 business owners. What is the most effective approach?',
      fr: 'Vous devez présenter un nouveau produit d\'assurance-vie à un groupe de 15 entrepreneurs. Quelle est l\'approche la plus efficace ?',
    },
    options: [
      { id: 'a', text: { es: 'Leer las diapositivas con todas las características técnicas del producto', en: 'Read slides with all the technical features of the product', fr: 'Lire les diapositives avec toutes les caractéristiques techniques du produit' }, value: 10 },
      { id: 'b', text: { es: 'Adaptar la presentación al perfil de la audiencia, usar casos reales, destacar beneficios y abrir espacio para preguntas', en: 'Adapt the presentation to the audience profile, use real cases, highlight benefits, and open space for questions', fr: 'Adapter la présentation au profil de l\'audience, utiliser des cas réels, mettre en avant les avantages et ouvrir l\'espace aux questions' }, value: 100 },
      { id: 'c', text: { es: 'Entregar folletos y esperar a que los lean', en: 'Hand out brochures and wait for them to read them', fr: 'Distribuer des brochures et attendre qu\'ils les lisent' }, value: 5 },
      { id: 'd', text: { es: 'Enfocarse únicamente en el precio como ventaja competitiva', en: 'Focus solely on price as a competitive advantage', fr: 'Se concentrer uniquement sur le prix comme avantage concurrentiel' }, value: 25 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
  {
    id: 'bo-crm-01',
    profileId: 'business-officer',
    categoryId: 'bo-professional',
    competencyId: 'bo-crm',
    type: 'scale',
    content: {
      es: '¿Qué tan consistente es usted en registrar todas sus interacciones con clientes, oportunidades y seguimientos en el sistema CRM al final de cada día?',
      en: 'How consistent are you in recording all your client interactions, opportunities, and follow-ups in the CRM system at the end of each day?',
      fr: 'À quel point êtes-vous constant dans l\'enregistrement de toutes vos interactions clients, opportunités et suivis dans le système CRM à la fin de chaque journée ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nunca lo hago', en: 'Never do it', fr: 'Je ne le fais jamais' },
      max: { es: 'Siempre, sin excepción', en: 'Always, without exception', fr: 'Toujours, sans exception' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 6,
    isActive: true,
  },
];

const boSoftSkillsQuestions: Question[] = [
  {
    id: 'bo-pers-01',
    profileId: 'business-officer',
    categoryId: 'bo-soft-skills',
    competencyId: 'bo-persuasion',
    type: 'scenario',
    content: {
      es: 'Un cliente le dice: "Ya tengo seguro con otra compañía y estoy conforme. No necesito cambiar." Describa cómo manejaría esta conversación para generar interés sin ser agresivo.',
      en: 'A client tells you: "I already have insurance with another company and I\'m satisfied. I don\'t need to switch." Describe how you would handle this conversation to generate interest without being aggressive.',
      fr: 'Un client vous dit : « J\'ai déjà une assurance avec une autre compagnie et je suis satisfait. Je n\'ai pas besoin de changer. » Décrivez comment vous géreriez cette conversation pour susciter l\'intérêt sans être agressif.',
    },
    rubric: {
      es: 'Evaluar: escucha activa, validación de la posición del cliente, preguntas consultivas para descubrir brechas de cobertura, presentación de valor diferenciado sin criticar a la competencia, cierre suave.',
      en: 'Evaluate: active listening, validation of client position, consultative questions to uncover coverage gaps, differentiated value presentation without criticizing competition, soft close.',
      fr: 'Évaluer : écoute active, validation de la position du client, questions consultatives pour découvrir les lacunes de couverture, présentation de valeur différenciée sans critiquer la concurrence, clôture douce.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 1,
    isActive: true,
  },
  {
    id: 'bo-neg-01',
    profileId: 'business-officer',
    categoryId: 'bo-soft-skills',
    competencyId: 'bo-negotiation',
    type: 'multiple-choice',
    content: {
      es: 'Un cliente importante solicita un descuento del 30% que está fuera de su autoridad para aprobar. ¿Cómo procede?',
      en: 'An important client requests a 30% discount that is outside your authority to approve. How do you proceed?',
      fr: 'Un client important demande une remise de 30% qui dépasse votre autorité d\'approbation. Comment procédez-vous ?',
    },
    options: [
      { id: 'a', text: { es: 'Aceptar el descuento para no perder al cliente', en: 'Accept the discount to avoid losing the client', fr: 'Accepter la remise pour ne pas perdre le client' }, value: 5 },
      { id: 'b', text: { es: 'Explorar las necesidades detrás de la solicitud, proponer alternativas de valor agregado y escalar a gerencia con una recomendación fundamentada', en: 'Explore the needs behind the request, propose value-added alternatives, and escalate to management with a well-founded recommendation', fr: 'Explorer les besoins derrière la demande, proposer des alternatives à valeur ajoutée et escalader à la direction avec une recommandation fondée' }, value: 100 },
      { id: 'c', text: { es: 'Rechazar de inmediato porque no tiene autoridad', en: 'Reject immediately because you lack authority', fr: 'Rejeter immédiatement car vous n\'avez pas l\'autorité' }, value: 15 },
      { id: 'd', text: { es: 'Prometer el descuento y luego buscar la aprobación', en: 'Promise the discount and then seek approval', fr: 'Promettre la remise puis chercher l\'approbation' }, value: 10 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },
  {
    id: 'bo-res-01',
    profileId: 'business-officer',
    categoryId: 'bo-soft-skills',
    competencyId: 'bo-resilience',
    type: 'open-text',
    content: {
      es: 'Describa una situación en la que enfrentó múltiples rechazos consecutivos de clientes potenciales. ¿Cómo mantuvo su motivación y qué aprendió de esa experiencia?',
      en: 'Describe a situation where you faced multiple consecutive rejections from potential clients. How did you maintain your motivation and what did you learn from that experience?',
      fr: 'Décrivez une situation où vous avez fait face à de multiples rejets consécutifs de clients potentiels. Comment avez-vous maintenu votre motivation et qu\'avez-vous appris de cette expérience ?',
    },
    rubric: {
      es: 'Evaluar: capacidad de autorreflexión, estrategias de manejo emocional, ajustes en el enfoque comercial, mentalidad de crecimiento, persistencia con inteligencia.',
      en: 'Evaluate: self-reflection capacity, emotional management strategies, adjustments in commercial approach, growth mindset, smart persistence.',
      fr: 'Évaluer : capacité d\'autoréflexion, stratégies de gestion émotionnelle, ajustements dans l\'approche commerciale, mentalité de croissance, persévérance intelligente.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },
  {
    id: 'bo-rel-01',
    profileId: 'business-officer',
    categoryId: 'bo-soft-skills',
    competencyId: 'bo-relationship-building',
    type: 'scale',
    content: {
      es: '¿Qué tan efectivo se considera para convertir una primera reunión de negocios en una relación comercial de largo plazo basada en la confianza?',
      en: 'How effective do you consider yourself at turning a first business meeting into a long-term commercial relationship based on trust?',
      fr: 'À quel point vous considérez-vous efficace pour transformer une première réunion d\'affaires en une relation commerciale à long terme basée sur la confiance ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Poco efectivo', en: 'Not very effective', fr: 'Peu efficace' },
      max: { es: 'Muy efectivo', en: 'Very effective', fr: 'Très efficace' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },
  {
    id: 'bo-neg-02',
    profileId: 'business-officer',
    categoryId: 'bo-soft-skills',
    competencyId: 'bo-negotiation',
    type: 'scenario',
    content: {
      es: 'Está negociando un contrato corporativo de seguros con el gerente de compras de una empresa mediana. Él insiste en que la competencia ofrece la misma cobertura a menor precio. ¿Cómo maneja la negociación?',
      en: 'You are negotiating a corporate insurance contract with the purchasing manager of a mid-size company. He insists the competition offers the same coverage at a lower price. How do you handle the negotiation?',
      fr: 'Vous négociez un contrat d\'assurance d\'entreprise avec le responsable des achats d\'une entreprise de taille moyenne. Il insiste sur le fait que la concurrence offre la même couverture à un prix inférieur. Comment gérez-vous la négociation ?',
    },
    rubric: {
      es: 'Evaluar: indagación sobre las necesidades reales, diferenciación por servicio y no solo precio, manejo de objeciones, creación de valor percibido, técnicas de cierre consultivo.',
      en: 'Evaluate: inquiry into real needs, differentiation by service not just price, objection handling, perceived value creation, consultative closing techniques.',
      fr: 'Évaluer : investigation des besoins réels, différenciation par le service et pas seulement le prix, gestion des objections, création de valeur perçue, techniques de clôture consultative.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 5,
    isActive: true,
  },
];

const boReadinessQuestions: Question[] = [
  {
    id: 'bo-mkt-01',
    profileId: 'business-officer',
    categoryId: 'bo-readiness',
    competencyId: 'bo-market-adaptability',
    type: 'multiple-choice',
    content: {
      es: 'Una nueva regulación gubernamental cambia significativamente las condiciones de los seguros obligatorios para empresas. ¿Cuál es su primera acción como ejecutivo de negocios?',
      en: 'A new government regulation significantly changes the conditions of mandatory business insurance. What is your first action as a business officer?',
      fr: 'Une nouvelle réglementation gouvernementale modifie considérablement les conditions des assurances obligatoires pour les entreprises. Quelle est votre première action en tant que chargé d\'affaires ?',
    },
    options: [
      { id: 'a', text: { es: 'Esperar a que la empresa emita un comunicado oficial con las nuevas directrices', en: 'Wait for the company to issue an official communication with new guidelines', fr: 'Attendre que l\'entreprise émette un communiqué officiel avec les nouvelles directives' }, value: 20 },
      { id: 'b', text: { es: 'Estudiar la regulación, identificar el impacto en la cartera actual, preparar un plan de comunicación proactiva para los clientes afectados', en: 'Study the regulation, identify the impact on the current portfolio, prepare a proactive communication plan for affected clients', fr: 'Étudier la réglementation, identifier l\'impact sur le portefeuille actuel, préparer un plan de communication proactif pour les clients concernés' }, value: 100 },
      { id: 'c', text: { es: 'Llamar a los clientes cuando ellos pregunten', en: 'Call clients when they ask', fr: 'Appeler les clients quand ils demandent' }, value: 10 },
      { id: 'd', text: { es: 'Compartir el enlace de la regulación por correo a todos los clientes', en: 'Share the regulation link via email to all clients', fr: 'Partager le lien de la réglementation par courriel à tous les clients' }, value: 30 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'bo-tech-01',
    profileId: 'business-officer',
    categoryId: 'bo-readiness',
    competencyId: 'bo-tech-adoption',
    type: 'scale',
    content: {
      es: '¿Qué tan dispuesto está a aprender y adoptar nuevas herramientas digitales (CRM avanzado, automatización de ventas, firma electrónica, videollamadas) para mejorar su productividad comercial?',
      en: 'How willing are you to learn and adopt new digital tools (advanced CRM, sales automation, e-signatures, video calls) to improve your commercial productivity?',
      fr: 'Dans quelle mesure êtes-vous disposé à apprendre et adopter de nouveaux outils numériques (CRM avancé, automatisation des ventes, signature électronique, visioconférences) pour améliorer votre productivité commerciale ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada dispuesto', en: 'Not willing at all', fr: 'Pas du tout disposé' },
      max: { es: 'Totalmente dispuesto', en: 'Fully willing', fr: 'Tout à fait disposé' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },
  {
    id: 'bo-mkt-02',
    profileId: 'business-officer',
    categoryId: 'bo-readiness',
    competencyId: 'bo-market-adaptability',
    type: 'scenario',
    content: {
      es: 'Una insurtech (empresa de tecnología de seguros) entra al mercado local ofreciendo pólizas 100% digitales a precios significativamente menores. Sus clientes empiezan a preguntar por esta opción. ¿Cómo adapta su estrategia comercial?',
      en: 'An insurtech enters the local market offering 100% digital policies at significantly lower prices. Your clients start asking about this option. How do you adapt your commercial strategy?',
      fr: 'Une insurtech entre sur le marché local en offrant des polices 100% numériques à des prix nettement inférieurs. Vos clients commencent à s\'intéresser à cette option. Comment adaptez-vous votre stratégie commerciale ?',
    },
    rubric: {
      es: 'Evaluar: análisis competitivo, refuerzo de propuesta de valor (asesoría personalizada, acompañamiento en siniestros, servicio humano), segmentación de clientes por perfil de riesgo, adopción de herramientas digitales propias, capacitación continua.',
      en: 'Evaluate: competitive analysis, value proposition reinforcement (personalized advice, claims support, human service), client segmentation by risk profile, adoption of own digital tools, continuous training.',
      fr: 'Évaluer : analyse concurrentielle, renforcement de la proposition de valeur (conseil personnalisé, accompagnement sinistres, service humain), segmentation des clients par profil de risque, adoption d\'outils numériques propres, formation continue.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },
  {
    id: 'bo-ci-01',
    profileId: 'business-officer',
    categoryId: 'bo-readiness',
    competencyId: 'bo-continuous-improvement',
    type: 'open-text',
    content: {
      es: '¿Qué acciones concretas realiza de forma regular para mantenerse actualizado en productos de seguros, técnicas de venta y tendencias del mercado asegurador?',
      en: 'What concrete actions do you regularly take to stay up-to-date on insurance products, sales techniques, and insurance market trends?',
      fr: 'Quelles actions concrètes prenez-vous régulièrement pour rester à jour sur les produits d\'assurance, les techniques de vente et les tendances du marché des assurances ?',
    },
    rubric: {
      es: 'Evaluar: formación continua (cursos, certificaciones), lectura de publicaciones del sector, participación en eventos, networking con colegas, uso de herramientas de inteligencia de mercado.',
      en: 'Evaluate: continuous training (courses, certifications), industry publications, event participation, networking with peers, use of market intelligence tools.',
      fr: 'Évaluer : formation continue (cours, certifications), publications du secteur, participation à des événements, réseautage avec des pairs, utilisation d\'outils d\'intelligence de marché.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 4,
    isActive: true,
  },
  {
    id: 'bo-tech-02',
    profileId: 'business-officer',
    categoryId: 'bo-readiness',
    competencyId: 'bo-tech-adoption',
    type: 'multiple-choice',
    content: {
      es: 'La empresa implementa un nuevo sistema CRM que cambia completamente el flujo de trabajo de ventas. ¿Cuál es su actitud?',
      en: 'The company implements a new CRM system that completely changes the sales workflow. What is your attitude?',
      fr: 'L\'entreprise implémente un nouveau système CRM qui change complètement le flux de travail des ventes. Quelle est votre attitude ?',
    },
    options: [
      { id: 'a', text: { es: 'Resistirse y seguir usando el método anterior mientras sea posible', en: 'Resist and keep using the old method as long as possible', fr: 'Résister et continuer à utiliser l\'ancienne méthode aussi longtemps que possible' }, value: 0 },
      { id: 'b', text: { es: 'Capacitarse activamente, practicar en horas libres y ofrecer ayuda a colegas que tengan dificultades', en: 'Actively train, practice during free hours, and offer help to struggling colleagues', fr: 'Se former activement, pratiquer pendant les heures libres et offrir de l\'aide aux collègues en difficulté' }, value: 100 },
      { id: 'c', text: { es: 'Esperar la capacitación obligatoria y usarlo solo cuando sea estrictamente necesario', en: 'Wait for mandatory training and use it only when strictly necessary', fr: 'Attendre la formation obligatoire et l\'utiliser uniquement quand c\'est strictement nécessaire' }, value: 30 },
      { id: 'd', text: { es: 'Quejarse con el equipo sobre lo innecesario del cambio', en: 'Complain to the team about the unnecessary change', fr: 'Se plaindre auprès de l\'équipe du changement inutile' }, value: 5 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
];

// ============================================================================
// COLLECTIONS MANAGER QUESTIONS
// ============================================================================

const colMgrProfessionalQuestions: Question[] = [
  {
    id: 'cm-strategy-01',
    profileId: 'collections-manager',
    categoryId: 'colmgr-professional',
    competencyId: 'collection-strategy',
    type: 'multiple-choice',
    content: {
      es: 'Su empresa tiene una cartera de morosidad con un 60% de cuentas en etapa temprana (30-60 días) y un 40% en etapa avanzada (más de 90 días). ¿Cuál es la mejor estrategia de cobranza para maximizar la recuperación?',
      en: 'Your company has a delinquency portfolio with 60% of accounts in early stage (30-60 days) and 40% in advanced stage (over 90 days). What is the best collection strategy to maximize recovery?',
      fr: 'Votre entreprise a un portefeuille de créances impayées avec 60 % de comptes en phase précoce (30-60 jours) et 40 % en phase avancée (plus de 90 jours). Quelle est la meilleure stratégie de recouvrement pour maximiser la récupération ?',
    },
    options: [
      { id: 'a', text: { es: 'Aplicar la misma estrategia intensiva de llamadas a todas las cuentas', en: 'Apply the same intensive calling strategy to all accounts', fr: 'Appliquer la même stratégie d\'appels intensive à tous les comptes' }, value: 10 },
      { id: 'b', text: { es: 'Priorizar las cuentas de etapa avanzada porque son las más difíciles', en: 'Prioritize advanced-stage accounts because they are the hardest', fr: 'Prioriser les comptes en phase avancée car ils sont les plus difficiles' }, value: 30 },
      { id: 'c', text: { es: 'Segmentar la cartera y aplicar estrategias diferenciadas: contacto preventivo automatizado para etapa temprana y gestión personalizada con opciones de reestructuración para etapa avanzada', en: 'Segment the portfolio and apply differentiated strategies: automated preventive contact for early stage and personalized management with restructuring options for advanced stage', fr: 'Segmenter le portefeuille et appliquer des stratégies différenciées : contact préventif automatisé pour la phase précoce et gestion personnalisée avec options de restructuration pour la phase avancée' }, value: 100 },
      { id: 'd', text: { es: 'Enviar todas las cuentas mayores a 90 días directamente a cobro legal', en: 'Send all accounts over 90 days directly to legal collection', fr: 'Envoyer tous les comptes de plus de 90 jours directement au recouvrement judiciaire' }, value: 20 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'cm-strategy-02',
    profileId: 'collections-manager',
    categoryId: 'colmgr-professional',
    competencyId: 'collection-strategy',
    type: 'scenario',
    content: {
      es: 'Usted acaba de asumir la gerencia de cobros de una aseguradora. La tasa de recuperación ha caído del 85% al 62% en los últimos 6 meses. El equipo utiliza las mismas estrategias de hace 3 años, no hay segmentación de cartera, y la rotación de personal es del 45%.\n\nDescriba su plan de acción para los primeros 90 días, incluyendo diagnóstico, estrategia de cobranza, gestión del equipo y métricas de seguimiento.',
      en: 'You have just assumed the collections management role at an insurance company. The recovery rate has dropped from 85% to 62% in the last 6 months. The team uses the same strategies from 3 years ago, there is no portfolio segmentation, and staff turnover is 45%.\n\nDescribe your action plan for the first 90 days, including diagnosis, collection strategy, team management, and tracking metrics.',
      fr: 'Vous venez d\'assumer la direction du recouvrement d\'une compagnie d\'assurance. Le taux de récupération est passé de 85 % à 62 % au cours des 6 derniers mois. L\'équipe utilise les mêmes stratégies qu\'il y a 3 ans, il n\'y a pas de segmentation du portefeuille et le taux de rotation du personnel est de 45 %.\n\nDécrivez votre plan d\'action pour les 90 premiers jours, incluant le diagnostic, la stratégie de recouvrement, la gestion de l\'équipe et les indicateurs de suivi.',
    },
    rubric: {
      es: 'Evaluar: (1) Diagnóstico basado en datos de la cartera y análisis de procesos actuales, (2) Segmentación de la cartera por antigüedad, monto y perfil de deudor, (3) Plan de retención y capacitación del equipo, (4) Definición de KPIs claros (tasa de contacto, promesas de pago, tasa de recuperación por segmento), (5) Estrategia de comunicación multicanal, (6) Cronograma realista con hitos medibles.',
      en: 'Evaluate: (1) Data-driven portfolio diagnosis and current process analysis, (2) Portfolio segmentation by aging, amount, and debtor profile, (3) Team retention and training plan, (4) Clear KPI definition (contact rate, promise-to-pay, recovery rate by segment), (5) Multi-channel communication strategy, (6) Realistic timeline with measurable milestones.',
      fr: 'Évaluer : (1) Diagnostic basé sur les données du portefeuille et analyse des processus actuels, (2) Segmentation du portefeuille par ancienneté, montant et profil du débiteur, (3) Plan de rétention et de formation de l\'équipe, (4) Définition claire des KPI, (5) Stratégie de communication multicanal, (6) Chronogramme réaliste avec jalons mesurables.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 2,
    isActive: true,
  },
  {
    id: 'cm-portfolio-01',
    profileId: 'collections-manager',
    categoryId: 'colmgr-professional',
    competencyId: 'portfolio-management',
    type: 'multiple-choice',
    content: {
      es: 'Al analizar el reporte de antigüedad de saldos (aging report), usted detecta que las cuentas de 61-90 días aumentaron un 35% este mes respecto al anterior. ¿Cuál es la acción más apropiada?',
      en: 'When analyzing the aging report, you detect that 61-90 day accounts increased by 35% this month compared to the previous one. What is the most appropriate action?',
      fr: 'En analysant le rapport d\'ancienneté des soldes, vous détectez que les comptes de 61-90 jours ont augmenté de 35 % ce mois-ci par rapport au précédent. Quelle est l\'action la plus appropriée ?',
    },
    options: [
      { id: 'a', text: { es: 'Esperar al cierre del siguiente mes para confirmar la tendencia', en: 'Wait until next month\'s close to confirm the trend', fr: 'Attendre la clôture du mois suivant pour confirmer la tendance' }, value: 10 },
      { id: 'b', text: { es: 'Investigar las causas del aumento, revisar si hubo cambios en la originación de crédito, ajustar la intensidad de gestión en la banda de 31-60 días para evitar migración, y reportar a la dirección con plan correctivo', en: 'Investigate the causes of the increase, review if there were changes in credit origination, adjust management intensity in the 31-60 day band to prevent migration, and report to management with a corrective plan', fr: 'Enquêter sur les causes de l\'augmentation, vérifier s\'il y a eu des changements dans l\'origination du crédit, ajuster l\'intensité de gestion dans la bande 31-60 jours pour éviter la migration, et rapporter à la direction avec un plan correctif' }, value: 100 },
      { id: 'c', text: { es: 'Enviar cartas de cobro más agresivas a las cuentas de 61-90 días', en: 'Send more aggressive collection letters to the 61-90 day accounts', fr: 'Envoyer des lettres de recouvrement plus agressives aux comptes de 61-90 jours' }, value: 25 },
      { id: 'd', text: { es: 'Transferir todas esas cuentas a una agencia externa inmediatamente', en: 'Transfer all those accounts to an external agency immediately', fr: 'Transférer tous ces comptes à une agence externe immédiatement' }, value: 15 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 3,
    isActive: true,
  },
  {
    id: 'cm-regulatory-01',
    profileId: 'collections-manager',
    categoryId: 'colmgr-professional',
    competencyId: 'colmgr-regulatory',
    type: 'scenario',
    content: {
      es: 'Un deudor presenta una queja formal ante la superintendencia de seguros alegando que su equipo de cobranza lo contacta fuera del horario permitido, usa lenguaje amenazante y divulgó información de su deuda a un familiar.\n\nContexto: Usted es el gerente de cobros y debe responder a la queja regulatoria y tomar medidas correctivas internas.\n\nDescriba cómo maneja esta situación.',
      en: 'A debtor files a formal complaint with the insurance superintendent alleging that your collection team contacts them outside permitted hours, uses threatening language, and disclosed debt information to a family member.\n\nContext: You are the collections manager and must respond to the regulatory complaint and take internal corrective measures.\n\nDescribe how you handle this situation.',
      fr: 'Un débiteur dépose une plainte formelle auprès de la surintendance des assurances alléguant que votre équipe de recouvrement le contacte en dehors des heures permises, utilise un langage menaçant et a divulgué des informations sur sa dette à un membre de sa famille.\n\nContexte : Vous êtes le responsable du recouvrement et devez répondre à la plainte réglementaire et prendre des mesures correctives internes.\n\nDécrivez comment vous gérez cette situation.',
    },
    rubric: {
      es: 'Evaluar: (1) Investigación inmediata con revisión de grabaciones y bitácoras, (2) Conocimiento de la normativa de protección al consumidor y prácticas justas de cobranza, (3) Respuesta formal a la superintendencia con evidencia y plan correctivo, (4) Acciones disciplinarias hacia los colaboradores involucrados, (5) Capacitación reforzada al equipo sobre normativa, (6) Implementación de controles preventivos (horarios automatizados, scripts aprobados, monitoreo de calidad).',
      en: 'Evaluate: (1) Immediate investigation with review of recordings and logs, (2) Knowledge of consumer protection regulations and fair debt collection practices, (3) Formal response to the superintendent with evidence and corrective plan, (4) Disciplinary actions toward involved staff, (5) Reinforced team training on regulations, (6) Implementation of preventive controls (automated schedules, approved scripts, quality monitoring).',
      fr: 'Évaluer : (1) Enquête immédiate avec examen des enregistrements et des journaux, (2) Connaissance de la réglementation de protection du consommateur, (3) Réponse formelle à la surintendance avec preuves et plan correctif, (4) Actions disciplinaires, (5) Formation renforcée de l\'équipe, (6) Mise en place de contrôles préventifs.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 4,
    isActive: true,
  },
  {
    id: 'cm-metrics-01',
    profileId: 'collections-manager',
    categoryId: 'colmgr-professional',
    competencyId: 'recovery-metrics',
    type: 'scale',
    content: {
      es: '¿Qué tan familiarizado está con el diseño y monitoreo de KPIs de cobranza como tasa de recuperación, roll rate, índice de contactabilidad, promesas de pago cumplidas y costo por peso recuperado?',
      en: 'How familiar are you with designing and monitoring collection KPIs such as recovery rate, roll rate, contactability index, promises-to-pay kept, and cost per dollar recovered?',
      fr: 'Dans quelle mesure êtes-vous familiarisé avec la conception et le suivi des KPI de recouvrement tels que le taux de récupération, le taux de migration, l\'indice de contactabilité, les promesses de paiement tenues et le coût par dollar récupéré ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada familiarizado', en: 'Not familiar at all', fr: 'Pas du tout familiarisé' },
      max: { es: 'Muy familiarizado y con experiencia implementándolos', en: 'Very familiar with implementation experience', fr: 'Très familiarisé avec expérience de mise en œuvre' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
  {
    id: 'cm-agencies-01',
    profileId: 'collections-manager',
    categoryId: 'colmgr-professional',
    competencyId: 'external-agencies',
    type: 'open-text',
    content: {
      es: 'Describa su proceso para seleccionar, evaluar y gestionar agencias externas de cobro. Incluya los criterios de selección, indicadores de desempeño que monitorearía, y cómo manejaría a una agencia que no cumple con las metas establecidas.',
      en: 'Describe your process for selecting, evaluating, and managing external collection agencies. Include selection criteria, performance indicators you would monitor, and how you would handle an agency that fails to meet established targets.',
      fr: 'Décrivez votre processus de sélection, d\'évaluation et de gestion des agences de recouvrement externes. Incluez les critères de sélection, les indicateurs de performance que vous surveilleriez, et comment vous géreriez une agence qui ne respecte pas les objectifs établis.',
    },
    rubric: {
      es: 'Evaluar: (1) Criterios de selección claros (experiencia, cobertura, tecnología, reputación, tarifas), (2) Contratos con SLAs y cláusulas de cumplimiento regulatorio, (3) KPIs de monitoreo (tasa de recuperación, costo, quejas, cumplimiento normativo), (4) Proceso de escalamiento y plan de mejora para agencias con bajo rendimiento, (5) Auditoría periódica de prácticas de la agencia, (6) Diversificación de proveedores para mitigar riesgo.',
      en: 'Evaluate: (1) Clear selection criteria (experience, coverage, technology, reputation, fees), (2) Contracts with SLAs and regulatory compliance clauses, (3) Monitoring KPIs (recovery rate, cost, complaints, regulatory compliance), (4) Escalation process and improvement plan for underperforming agencies, (5) Periodic audit of agency practices, (6) Provider diversification to mitigate risk.',
      fr: 'Évaluer : (1) Critères de sélection clairs, (2) Contrats avec SLA et clauses de conformité, (3) KPI de suivi, (4) Processus d\'escalade pour agences sous-performantes, (5) Audit périodique, (6) Diversification des fournisseurs.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 6,
    isActive: true,
  },
];

const colMgrSoftSkillsQuestions: Question[] = [
  {
    id: 'cm-negotiation-01',
    profileId: 'collections-manager',
    categoryId: 'colmgr-soft-skills',
    competencyId: 'colmgr-negotiation',
    type: 'scenario',
    content: {
      es: 'Un cliente corporativo importante le debe a la aseguradora $2.5 millones con 120 días de mora. El cliente alega problemas de flujo de caja pero tiene intención de pagar. Su equipo comercial insiste en mantener la relación, pero la dirección financiera exige resultados inmediatos.\n\nDescriba su estrategia de negociación para lograr la recuperación sin perder al cliente.',
      en: 'A major corporate client owes the insurer $2.5 million with 120 days past due. The client claims cash flow problems but intends to pay. Your sales team insists on maintaining the relationship, while financial management demands immediate results.\n\nDescribe your negotiation strategy to achieve recovery without losing the client.',
      fr: 'Un client corporatif important doit 2,5 millions de dollars à l\'assureur avec 120 jours de retard. Le client allègue des problèmes de trésorerie mais a l\'intention de payer. Votre équipe commerciale insiste pour maintenir la relation, tandis que la direction financière exige des résultats immédiats.\n\nDécrivez votre stratégie de négociation pour obtenir le recouvrement sans perdre le client.',
    },
    rubric: {
      es: 'Evaluar: (1) Análisis de la capacidad real de pago del deudor, (2) Propuesta de reestructuración creativa (pagos parciales, plazos, garantías adicionales), (3) Balance entre firmeza y empatía, (4) Comunicación con las partes internas (comercial, finanzas, legal), (5) Documentación formal del acuerdo, (6) Plan de seguimiento con consecuencias claras si incumple.',
      en: 'Evaluate: (1) Analysis of the debtor\'s actual payment capacity, (2) Creative restructuring proposal (partial payments, terms, additional guarantees), (3) Balance between firmness and empathy, (4) Communication with internal parties (sales, finance, legal), (5) Formal agreement documentation, (6) Follow-up plan with clear consequences for non-compliance.',
      fr: 'Évaluer : (1) Analyse de la capacité réelle de paiement, (2) Proposition de restructuration créative, (3) Équilibre fermeté et empathie, (4) Communication interne, (5) Documentation formelle, (6) Plan de suivi avec conséquences.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 1,
    isActive: true,
  },
  {
    id: 'cm-negotiation-02',
    profileId: 'collections-manager',
    categoryId: 'colmgr-soft-skills',
    competencyId: 'colmgr-negotiation',
    type: 'multiple-choice',
    content: {
      es: 'Durante una negociación, un deudor se pone agresivo verbalmente y amenaza con demandar a la empresa por acoso. ¿Cuál es la mejor forma de manejar esta situación?',
      en: 'During a negotiation, a debtor becomes verbally aggressive and threatens to sue the company for harassment. What is the best way to handle this situation?',
      fr: 'Pendant une négociation, un débiteur devient verbalement agressif et menace de poursuivre l\'entreprise pour harcèlement. Quelle est la meilleure façon de gérer cette situation ?',
    },
    options: [
      { id: 'a', text: { es: 'Responder con firmeza que la deuda es legítima y que tiene obligación de pagar', en: 'Respond firmly that the debt is legitimate and they have an obligation to pay', fr: 'Répondre fermement que la dette est légitime et qu\'il a l\'obligation de payer' }, value: 15 },
      { id: 'b', text: { es: 'Mantener la calma, reconocer su frustración, redirigir la conversación hacia soluciones, documentar el incidente y ofrecer canales formales de queja', en: 'Stay calm, acknowledge their frustration, redirect the conversation toward solutions, document the incident, and offer formal complaint channels', fr: 'Rester calme, reconnaître sa frustration, rediriger la conversation vers des solutions, documenter l\'incident et offrir des canaux formels de plainte' }, value: 100 },
      { id: 'c', text: { es: 'Terminar la llamada inmediatamente y transferir el caso al área legal', en: 'End the call immediately and transfer the case to the legal department', fr: 'Terminer l\'appel immédiatement et transférer le dossier au service juridique' }, value: 30 },
      { id: 'd', text: { es: 'Ofrecer una condonación parcial para calmar la situación', en: 'Offer a partial debt forgiveness to calm the situation', fr: 'Offrir une remise partielle pour calmer la situation' }, value: 20 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },
  {
    id: 'cm-leadership-01',
    profileId: 'collections-manager',
    categoryId: 'colmgr-soft-skills',
    competencyId: 'colmgr-leadership',
    type: 'scenario',
    content: {
      es: 'Su equipo de 12 gestores de cobro tiene una moral baja. Tres colaboradores renunciaron el mes pasado, los que quedan se quejan de metas inalcanzables, y la calidad de las llamadas ha descendido según el monitoreo. Sin embargo, la dirección acaba de aumentar las metas de recuperación un 20%.\n\nDescriba cómo abordaría esta situación para mejorar el desempeño y retener al equipo.',
      en: 'Your team of 12 collection agents has low morale. Three employees resigned last month, those remaining complain about unachievable targets, and call quality has declined according to monitoring. However, management has just increased recovery targets by 20%.\n\nDescribe how you would address this situation to improve performance and retain the team.',
      fr: 'Votre équipe de 12 agents de recouvrement a un moral bas. Trois employés ont démissionné le mois dernier, ceux qui restent se plaignent d\'objectifs irréalisables, et la qualité des appels a diminué selon le monitoring. Cependant, la direction vient d\'augmenter les objectifs de récupération de 20 %.\n\nDécrivez comment vous aborderiez cette situation pour améliorer la performance et retenir l\'équipe.',
    },
    rubric: {
      es: 'Evaluar: (1) Diagnóstico de causas de desmotivación mediante reuniones individuales, (2) Revisión y ajuste de metas con datos que sustenten su viabilidad, (3) Plan de incentivos y reconocimiento, (4) Programa de capacitación y coaching, (5) Mejora de condiciones de trabajo, (6) Comunicación transparente con la dirección sobre la realidad del equipo, (7) Plan de contratación y onboarding para reponer vacantes.',
      en: 'Evaluate: (1) Diagnosis of demotivation causes through individual meetings, (2) Review and adjustment of targets with data supporting viability, (3) Incentive and recognition plan, (4) Training and coaching program, (5) Work condition improvements, (6) Transparent communication with management about team reality, (7) Hiring and onboarding plan to fill vacancies.',
      fr: 'Évaluer : (1) Diagnostic des causes de démotivation, (2) Révision des objectifs avec données, (3) Plan d\'incentives, (4) Programme de formation et coaching, (5) Amélioration des conditions, (6) Communication transparente avec la direction, (7) Plan de recrutement.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },
  {
    id: 'cm-communication-01',
    profileId: 'collections-manager',
    categoryId: 'colmgr-soft-skills',
    competencyId: 'colmgr-communication',
    type: 'multiple-choice',
    content: {
      es: 'Debe presentar a la junta directiva los resultados de cobranza del trimestre, que muestran una caída del 12% en la tasa de recuperación. ¿Cuál es el mejor enfoque para esta presentación?',
      en: 'You must present the quarterly collection results to the board of directors, which show a 12% drop in the recovery rate. What is the best approach for this presentation?',
      fr: 'Vous devez présenter au conseil d\'administration les résultats trimestriels de recouvrement, qui montrent une baisse de 12 % du taux de récupération. Quelle est la meilleure approche pour cette présentation ?',
    },
    options: [
      { id: 'a', text: { es: 'Minimizar los resultados negativos y enfocarse en los logros positivos del área', en: 'Minimize negative results and focus on the positive achievements of the area', fr: 'Minimiser les résultats négatifs et se concentrer sur les réalisations positives' }, value: 10 },
      { id: 'b', text: { es: 'Presentar los datos con transparencia, incluir análisis de causas raíz, comparativo con el mercado, y un plan de acción con metas específicas y cronograma para revertir la tendencia', en: 'Present the data transparently, include root cause analysis, market comparison, and an action plan with specific targets and timeline to reverse the trend', fr: 'Présenter les données de manière transparente, inclure l\'analyse des causes profondes, la comparaison avec le marché, et un plan d\'action avec des objectifs spécifiques et un calendrier pour inverser la tendance' }, value: 100 },
      { id: 'c', text: { es: 'Culpar a factores externos como la situación económica del país', en: 'Blame external factors such as the country\'s economic situation', fr: 'Accuser des facteurs externes comme la situation économique du pays' }, value: 5 },
      { id: 'd', text: { es: 'Enviar un informe por escrito sin hacer presentación presencial', en: 'Send a written report without making an in-person presentation', fr: 'Envoyer un rapport écrit sans faire de présentation en personne' }, value: 15 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },
  {
    id: 'cm-communication-02',
    profileId: 'collections-manager',
    categoryId: 'colmgr-soft-skills',
    competencyId: 'colmgr-communication',
    type: 'scale',
    content: {
      es: '¿Qué tan efectivo se considera para comunicar resultados complejos de cobranza a audiencias no técnicas (directivos, área comercial, reguladores) de manera clara y persuasiva?',
      en: 'How effective do you consider yourself at communicating complex collection results to non-technical audiences (executives, sales teams, regulators) in a clear and persuasive manner?',
      fr: 'Dans quelle mesure vous considérez-vous efficace pour communiquer des résultats complexes de recouvrement à des audiences non techniques (dirigeants, équipes commerciales, régulateurs) de manière claire et persuasive ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Poco efectivo', en: 'Not very effective', fr: 'Peu efficace' },
      max: { es: 'Muy efectivo', en: 'Very effective', fr: 'Très efficace' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
];

const colMgrReadinessQuestions: Question[] = [
  {
    id: 'cm-tech-01',
    profileId: 'collections-manager',
    categoryId: 'colmgr-readiness',
    competencyId: 'colmgr-tech-adoption',
    type: 'multiple-choice',
    content: {
      es: 'La empresa está evaluando implementar un sistema de cobranza con inteligencia artificial que automatiza la segmentación de cartera, prioriza contactos y sugiere scripts personalizados. Algunos miembros del equipo se resisten al cambio. ¿Cómo gestionaría la implementación?',
      en: 'The company is evaluating implementing a collection system with artificial intelligence that automates portfolio segmentation, prioritizes contacts, and suggests personalized scripts. Some team members resist the change. How would you manage the implementation?',
      fr: 'L\'entreprise évalue la mise en œuvre d\'un système de recouvrement avec intelligence artificielle qui automatise la segmentation du portefeuille, priorise les contacts et suggère des scripts personnalisés. Certains membres de l\'équipe résistent au changement. Comment géreriez-vous la mise en œuvre ?',
    },
    options: [
      { id: 'a', text: { es: 'Implementar el sistema de inmediato y exigir que todos lo usen', en: 'Implement the system immediately and require everyone to use it', fr: 'Mettre en œuvre le système immédiatement et exiger que tout le monde l\'utilise' }, value: 10 },
      { id: 'b', text: { es: 'Esperar a que otra empresa del sector lo implemente primero para ver resultados', en: 'Wait for another company in the sector to implement it first to see results', fr: 'Attendre qu\'une autre entreprise du secteur le mette en œuvre d\'abord pour voir les résultats' }, value: 15 },
      { id: 'c', text: { es: 'Involucrar al equipo desde la evaluación, hacer un piloto con un grupo, capacitar progresivamente, mostrar beneficios con datos, y escalar gradualmente con retroalimentación continua', en: 'Involve the team from the evaluation stage, run a pilot with a group, train progressively, demonstrate benefits with data, and scale gradually with continuous feedback', fr: 'Impliquer l\'équipe dès l\'évaluation, faire un pilote avec un groupe, former progressivement, montrer les bénéfices avec des données, et déployer graduellement avec retour d\'information continu' }, value: 100 },
      { id: 'd', text: { es: 'Contratar personal nuevo que ya tenga experiencia con IA y reemplazar a quienes se resistan', en: 'Hire new staff who already have AI experience and replace those who resist', fr: 'Embaucher du nouveau personnel ayant de l\'expérience en IA et remplacer ceux qui résistent' }, value: 5 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'cm-tech-02',
    profileId: 'collections-manager',
    categoryId: 'colmgr-readiness',
    competencyId: 'colmgr-tech-adoption',
    type: 'scale',
    content: {
      es: '¿Qué tan dispuesto está a adoptar herramientas digitales de cobranza como marcadores predictivos, bots de mensajería, plataformas de pago en línea y dashboards analíticos en tiempo real?',
      en: 'How willing are you to adopt digital collection tools such as predictive dialers, messaging bots, online payment platforms, and real-time analytical dashboards?',
      fr: 'Dans quelle mesure êtes-vous disposé à adopter des outils numériques de recouvrement tels que les composeurs prédictifs, les bots de messagerie, les plateformes de paiement en ligne et les tableaux de bord analytiques en temps réel ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada dispuesto', en: 'Not willing at all', fr: 'Pas du tout disposé' },
      max: { es: 'Totalmente dispuesto y con experiencia', en: 'Fully willing and experienced', fr: 'Tout à fait disposé et expérimenté' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },
  {
    id: 'cm-innovation-01',
    profileId: 'collections-manager',
    categoryId: 'colmgr-readiness',
    competencyId: 'colmgr-process-innovation',
    type: 'open-text',
    content: {
      es: 'Describa una innovación o mejora significativa que haya implementado (o implementaría) en un proceso de cobranza. Explique el problema que resolvió, cómo diseñó la solución, los obstáculos que enfrentó y los resultados obtenidos.',
      en: 'Describe a significant innovation or improvement you have implemented (or would implement) in a collection process. Explain the problem it solved, how you designed the solution, the obstacles you faced, and the results obtained.',
      fr: 'Décrivez une innovation ou amélioration significative que vous avez mise en œuvre (ou que vous mettriez en œuvre) dans un processus de recouvrement. Expliquez le problème résolu, comment vous avez conçu la solution, les obstacles rencontrés et les résultats obtenus.',
    },
    rubric: {
      es: 'Evaluar: (1) Identificación clara del problema o ineficiencia, (2) Creatividad y viabilidad de la solución propuesta, (3) Metodología de implementación (piloto, métricas, ajustes), (4) Gestión del cambio con el equipo, (5) Resultados cuantificables o esperados, (6) Escalabilidad de la mejora.',
      en: 'Evaluate: (1) Clear identification of the problem or inefficiency, (2) Creativity and feasibility of the proposed solution, (3) Implementation methodology (pilot, metrics, adjustments), (4) Change management with the team, (5) Quantifiable or expected results, (6) Scalability of the improvement.',
      fr: 'Évaluer : (1) Identification claire du problème, (2) Créativité et faisabilité de la solution, (3) Méthodologie de mise en œuvre, (4) Gestion du changement, (5) Résultats quantifiables, (6) Scalabilité.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },
  {
    id: 'cm-market-01',
    profileId: 'collections-manager',
    categoryId: 'colmgr-readiness',
    competencyId: 'colmgr-market-adaptability',
    type: 'scenario',
    content: {
      es: 'El banco central acaba de emitir una nueva regulación que prohíbe cobrar intereses moratorios superiores al 1% mensual y exige ofrecer reestructuración automática a deudores afectados por desastres naturales. Esto impacta directamente el 30% de su cartera en mora y reduce sus proyecciones de recuperación.\n\nDescriba cómo adaptaría su estrategia de cobranza ante este cambio regulatorio.',
      en: 'The central bank has just issued a new regulation prohibiting late payment interest above 1% monthly and requiring automatic restructuring for debtors affected by natural disasters. This directly impacts 30% of your delinquent portfolio and reduces your recovery projections.\n\nDescribe how you would adapt your collection strategy to this regulatory change.',
      fr: 'La banque centrale vient d\'émettre une nouvelle réglementation interdisant les intérêts moratoires supérieurs à 1 % par mois et exigeant une restructuration automatique pour les débiteurs affectés par des catastrophes naturelles. Cela impacte directement 30 % de votre portefeuille en souffrance et réduit vos projections de récupération.\n\nDécrivez comment vous adapteriez votre stratégie de recouvrement face à ce changement réglementaire.',
    },
    rubric: {
      es: 'Evaluar: (1) Análisis inmediato del impacto en la cartera y proyecciones financieras, (2) Actualización de políticas y procedimientos internos, (3) Capacitación al equipo sobre la nueva regulación, (4) Rediseño de estrategias de cobro dentro del nuevo marco legal, (5) Comunicación proactiva con deudores afectados, (6) Propuestas alternativas para mantener los niveles de recuperación (eficiencia operativa, canales digitales, prevención de morosidad).',
      en: 'Evaluate: (1) Immediate impact analysis on portfolio and financial projections, (2) Update of internal policies and procedures, (3) Team training on new regulation, (4) Redesign of collection strategies within the new legal framework, (5) Proactive communication with affected debtors, (6) Alternative proposals to maintain recovery levels (operational efficiency, digital channels, delinquency prevention).',
      fr: 'Évaluer : (1) Analyse immédiate de l\'impact, (2) Mise à jour des politiques internes, (3) Formation de l\'équipe, (4) Refonte des stratégies, (5) Communication proactive avec les débiteurs, (6) Propositions alternatives pour maintenir les niveaux de récupération.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 4,
    isActive: true,
  },
  {
    id: 'cm-market-02',
    profileId: 'collections-manager',
    categoryId: 'colmgr-readiness',
    competencyId: 'colmgr-market-adaptability',
    type: 'multiple-choice',
    content: {
      es: 'Una recesión económica está aumentando la morosidad general del mercado. Su cartera de cobros ha crecido un 40% en volumen pero su presupuesto operativo se mantiene igual. ¿Qué estrategia prioriza?',
      en: 'An economic recession is increasing overall market delinquency. Your collection portfolio has grown 40% in volume but your operating budget remains the same. Which strategy do you prioritize?',
      fr: 'Une récession économique augmente la délinquance générale du marché. Votre portefeuille de recouvrement a augmenté de 40 % en volume mais votre budget opérationnel reste le même. Quelle stratégie priorisez-vous ?',
    },
    options: [
      { id: 'a', text: { es: 'Solicitar aumento de presupuesto y más personal antes de actuar', en: 'Request a budget increase and more staff before acting', fr: 'Demander une augmentation de budget et plus de personnel avant d\'agir' }, value: 15 },
      { id: 'b', text: { es: 'Automatizar la gestión de cuentas de menor monto, priorizar cuentas de alto valor con gestión personalizada, implementar canales de autoservicio para reestructuración, y optimizar la asignación de cartera por gestor', en: 'Automate management of lower-value accounts, prioritize high-value accounts with personalized management, implement self-service restructuring channels, and optimize portfolio assignment per agent', fr: 'Automatiser la gestion des comptes de faible montant, prioriser les comptes de haute valeur avec gestion personnalisée, mettre en place des canaux d\'auto-service pour la restructuration, et optimiser l\'assignation du portefeuille par agent' }, value: 100 },
      { id: 'c', text: { es: 'Reducir las metas de recuperación proporcionalmente al aumento de cartera', en: 'Reduce recovery targets proportionally to the portfolio increase', fr: 'Réduire les objectifs de récupération proportionnellement à l\'augmentation du portefeuille' }, value: 20 },
      { id: 'd', text: { es: 'Externalizar toda la cartera nueva a agencias de cobro', en: 'Outsource all new portfolio to collection agencies', fr: 'Externaliser tout le nouveau portefeuille aux agences de recouvrement' }, value: 25 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
];

// ============================================================================
// CUSTOMER SERVICE MANAGER (Gerente de Servicio al Cliente) QUESTIONS
// ============================================================================
const csmProfessionalQuestions: Question[] = [
  { id: 'csm-sat-01', profileId: 'customer-service-manager', categoryId: 'csm-professional', competencyId: 'csm-satisfaction-strategy', type: 'scenario', content: { es: 'La encuesta anual de satisfacción del cliente revela que el índice CSAT cayó 12 puntos porcentuales en los últimos seis meses. El CEO le pide un plan de acción para revertir la tendencia en un trimestre.\n\nContexto: Usted cuenta con un equipo de 25 agentes, un presupuesto limitado y los principales motivos de insatisfacción son tiempos de espera largos y falta de resolución en el primer contacto.', en: 'The annual customer satisfaction survey reveals that the CSAT index has dropped 12 percentage points in the last six months. The CEO asks you for an action plan to reverse the trend within one quarter.\n\nContext: You have a team of 25 agents, a limited budget, and the main reasons for dissatisfaction are long wait times and lack of first-contact resolution.', fr: 'L\'enquête annuelle de satisfaction client révèle que l\'indice CSAT a chuté de 12 points de pourcentage au cours des six derniers mois. Le PDG vous demande un plan d\'action pour inverser la tendance en un trimestre.\n\nContexte : Vous disposez d\'une équipe de 25 agents, d\'un budget limité, et les principales raisons d\'insatisfaction sont les longs temps d\'attente et le manque de résolution au premier contact.' }, rubric: { es: 'Evaluar: (1) Análisis de causas raíz basado en datos, (2) Priorización de acciones de alto impacto y bajo costo, (3) Metas SMART con indicadores de seguimiento, (4) Plan de capacitación para mejorar resolución al primer contacto, (5) Estrategia de comunicación con el equipo y la dirección.', en: 'Evaluate: (1) Data-based root cause analysis, (2) Prioritization of high-impact, low-cost actions, (3) SMART goals with tracking indicators, (4) Training plan to improve first-contact resolution, (5) Communication strategy with the team and management.', fr: 'Évaluer : (1) Analyse des causes profondes basée sur les données, (2) Priorisation des actions à fort impact et faible coût, (3) Objectifs SMART avec indicateurs de suivi, (4) Plan de formation pour améliorer la résolution au premier contact, (5) Stratégie de communication avec l\'équipe et la direction.' }, maxScore: 100, aiEvaluated: true, order: 1, isActive: true },
  { id: 'csm-sla-01', profileId: 'customer-service-manager', categoryId: 'csm-professional', competencyId: 'csm-sla-management', type: 'multiple-choice', content: { es: 'Su centro de contacto tiene un SLA de respuesta telefónica de 80/20 (80% de llamadas contestadas en 20 segundos). Durante el último mes, el indicador bajó a 65/20. ¿Cuál es la primera acción que toma como gerente?', en: 'Your contact center has a phone response SLA of 80/20 (80% of calls answered within 20 seconds). In the past month, the metric dropped to 65/20. What is the first action you take as manager?', fr: 'Votre centre de contact a un SLA de réponse téléphonique de 80/20 (80% des appels répondus en 20 secondes). Le mois dernier, l\'indicateur est tombé à 65/20. Quelle est la première action que vous prenez en tant que responsable ?' }, options: [{ id: 'a', text: { es: 'Contratar más agentes de inmediato', en: 'Hire more agents immediately', fr: 'Embaucher plus d\'agents immédiatement' }, value: 20 }, { id: 'b', text: { es: 'Analizar los datos de volumen de llamadas por franja horaria para identificar picos y redistribuir turnos', en: 'Analyze call volume data by time slot to identify peaks and redistribute shifts', fr: 'Analyser les données de volume d\'appels par tranche horaire pour identifier les pics et redistribuer les quarts' }, value: 100 }, { id: 'c', text: { es: 'Reducir el tiempo máximo de cada llamada a 3 minutos', en: 'Reduce the maximum time per call to 3 minutes', fr: 'Réduire le temps maximum par appel à 3 minutes' }, value: 10 }, { id: 'd', text: { es: 'Enviar un correo al equipo pidiendo mayor esfuerzo', en: 'Send an email to the team asking for more effort', fr: 'Envoyer un courriel à l\'équipe demandant plus d\'efforts' }, value: 5 }], maxScore: 100, aiEvaluated: false, order: 2, isActive: true },
  { id: 'csm-comp-01', profileId: 'customer-service-manager', categoryId: 'csm-professional', competencyId: 'csm-complaint-management', type: 'scenario', content: { es: 'Un cliente corporativo importante publicó una queja negativa en redes sociales sobre su empresa, mencionando que ha llamado tres veces sin resolución y que considera cancelar su contrato. El caso ya fue escalado a usted.\n\nContexto: El cliente genera el 5% de los ingresos anuales del departamento y su contrato se renueva en 45 días.', en: 'An important corporate client posted a negative complaint on social media about your company, mentioning they have called three times without resolution and are considering canceling their contract. The case has been escalated to you.\n\nContext: The client generates 5% of the department\'s annual revenue and their contract renewal is in 45 days.', fr: 'Un client corporatif important a publié une plainte négative sur les réseaux sociaux concernant votre entreprise, mentionnant qu\'il a appelé trois fois sans résolution et qu\'il envisage d\'annuler son contrat. Le cas vous a été escaladé.\n\nContexte : Le client génère 5% des revenus annuels du département et le renouvellement de son contrat est dans 45 jours.' }, rubric: { es: 'Evaluar: (1) Respuesta inmediata y empática al cliente, (2) Investigación interna de las tres interacciones previas, (3) Plan de resolución con oferta de valor, (4) Estrategia de recuperación de la relación comercial, (5) Acciones correctivas para evitar recurrencia, (6) Manejo de la situación en redes sociales.', en: 'Evaluate: (1) Immediate and empathetic response to the client, (2) Internal investigation of the three prior interactions, (3) Resolution plan with value proposition, (4) Commercial relationship recovery strategy, (5) Corrective actions to prevent recurrence, (6) Social media situation management.', fr: 'Évaluer : (1) Réponse immédiate et empathique au client, (2) Enquête interne sur les trois interactions précédentes, (3) Plan de résolution avec proposition de valeur, (4) Stratégie de récupération de la relation commerciale, (5) Actions correctives pour éviter la récurrence, (6) Gestion de la situation sur les réseaux sociaux.' }, maxScore: 100, aiEvaluated: true, order: 3, isActive: true },
  { id: 'csm-ops-01', profileId: 'customer-service-manager', categoryId: 'csm-professional', competencyId: 'csm-contact-center-ops', type: 'multiple-choice', content: { es: 'Está planificando el dimensionamiento de su centro de contacto para la temporada alta (diciembre-enero). Históricamente el volumen de llamadas aumenta un 40%. ¿Cuál es el enfoque más adecuado?', en: 'You are planning your contact center\'s workforce sizing for the peak season (December-January). Historically, call volume increases by 40%. What is the most appropriate approach?', fr: 'Vous planifiez le dimensionnement des effectifs de votre centre de contact pour la haute saison (décembre-janvier). Historiquement, le volume d\'appels augmente de 40%. Quelle est l\'approche la plus appropriée ?' }, options: [{ id: 'a', text: { es: 'Pedir horas extra al equipo actual durante toda la temporada', en: 'Ask the current team for overtime throughout the season', fr: 'Demander des heures supplémentaires à l\'équipe actuelle pendant toute la saison' }, value: 15 }, { id: 'b', text: { es: 'Usar datos históricos para crear un modelo de pronóstico, combinar agentes temporales, turnos flexibles y desvío a canales digitales', en: 'Use historical data to create a forecast model, combining temporary agents, flexible shifts, and digital channel deflection', fr: 'Utiliser les données historiques pour créer un modèle de prévision, combiner agents temporaires, quarts flexibles et déviation vers les canaux numériques' }, value: 100 }, { id: 'c', text: { es: 'Implementar un IVR más restrictivo para reducir llamadas', en: 'Implement a more restrictive IVR to reduce calls', fr: 'Mettre en place un SVI plus restrictif pour réduire les appels' }, value: 25 }, { id: 'd', text: { es: 'Contratar el doble de agentes permanentes para cubrir el pico', en: 'Hire double the permanent agents to cover the peak', fr: 'Embaucher le double d\'agents permanents pour couvrir le pic' }, value: 10 }], maxScore: 100, aiEvaluated: false, order: 4, isActive: true },
  { id: 'csm-crm-01', profileId: 'customer-service-manager', categoryId: 'csm-professional', competencyId: 'csm-crm-management', type: 'scale', content: { es: '¿Qué tan competente se considera en la administración y optimización de sistemas CRM (Salesforce, HubSpot, Zendesk u otros) para la gestión integral de la relación con el cliente?', en: 'How competent do you consider yourself in administering and optimizing CRM systems (Salesforce, HubSpot, Zendesk, or others) for comprehensive customer relationship management?', fr: 'Dans quelle mesure vous considérez-vous compétent dans l\'administration et l\'optimisation des systèmes CRM (Salesforce, HubSpot, Zendesk ou autres) pour la gestion intégrale de la relation client ?' }, scaleMin: 1, scaleMax: 5, scaleLabels: { min: { es: 'Nada competente', en: 'Not competent at all', fr: 'Pas du tout compétent' }, max: { es: 'Altamente competente', en: 'Highly competent', fr: 'Hautement compétent' } }, maxScore: 100, aiEvaluated: false, order: 5, isActive: true },
  { id: 'csm-qa-01', profileId: 'customer-service-manager', categoryId: 'csm-professional', competencyId: 'csm-quality-assurance', type: 'open-text', content: { es: 'Describa cómo diseñaría un programa de aseguramiento de calidad para su centro de contacto. Incluya los criterios de evaluación, frecuencia de monitoreo y cómo utilizaría los resultados para mejorar el desempeño del equipo.', en: 'Describe how you would design a quality assurance program for your contact center. Include evaluation criteria, monitoring frequency, and how you would use results to improve team performance.', fr: 'Décrivez comment vous concevriez un programme d\'assurance qualité pour votre centre de contact. Incluez les critères d\'évaluation, la fréquence de surveillance et comment vous utiliseriez les résultats pour améliorer la performance de l\'équipe.' }, rubric: { es: 'Evaluar: (1) Criterios claros y objetivos de evaluación (saludo, empatía, resolución, cumplimiento de protocolo), (2) Metodología de monitoreo (grabaciones, escucha en vivo, mystery shopper), (3) Frecuencia adecuada de evaluaciones, (4) Proceso de retroalimentación constructiva, (5) Vinculación con planes de capacitación y desarrollo.', en: 'Evaluate: (1) Clear and objective evaluation criteria (greeting, empathy, resolution, protocol compliance), (2) Monitoring methodology (recordings, live listening, mystery shopper), (3) Appropriate evaluation frequency, (4) Constructive feedback process, (5) Link to training and development plans.', fr: 'Évaluer : (1) Critères clairs et objectifs d\'évaluation (accueil, empathie, résolution, respect du protocole), (2) Méthodologie de surveillance (enregistrements, écoute en direct, client mystère), (3) Fréquence d\'évaluation appropriée, (4) Processus de rétroaction constructive, (5) Lien avec les plans de formation et de développement.' }, maxScore: 100, aiEvaluated: true, order: 6, isActive: true },
];
const csmSoftSkillsQuestions: Question[] = [
  { id: 'csm-lead-01', profileId: 'customer-service-manager', categoryId: 'csm-soft-skills', competencyId: 'csm-leadership', type: 'scenario', content: { es: 'Tres de sus mejores agentes presentan su renuncia en la misma semana, citando agotamiento y falta de oportunidades de crecimiento. La moral del equipo restante ha bajado significativamente y los indicadores de servicio comienzan a deteriorarse.\n\nContexto: Usted tiene 22 agentes restantes, un presupuesto de capacitación limitado y la próxima temporada alta es en dos meses.', en: 'Three of your best agents submit their resignation in the same week, citing burnout and lack of growth opportunities. The remaining team\'s morale has dropped significantly and service metrics are beginning to deteriorate.\n\nContext: You have 22 remaining agents, a limited training budget, and the next peak season is in two months.', fr: 'Trois de vos meilleurs agents soumettent leur démission la même semaine, citant l\'épuisement et le manque d\'opportunités de croissance. Le moral de l\'équipe restante a considérablement baissé et les indicateurs de service commencent à se détériorer.\n\nContexte : Vous avez 22 agents restants, un budget de formation limité, et la prochaine haute saison est dans deux mois.' }, rubric: { es: 'Evaluar: (1) Acciones inmediatas de retención y escucha con el equipo, (2) Diagnóstico de causas de rotación, (3) Plan de desarrollo de carrera y reconocimiento, (4) Estrategia de reclutamiento acelerado, (5) Comunicación transparente con el equipo y la dirección, (6) Medidas de contingencia para mantener niveles de servicio.', en: 'Evaluate: (1) Immediate retention and listening actions with the team, (2) Diagnosis of turnover causes, (3) Career development and recognition plan, (4) Accelerated recruitment strategy, (5) Transparent communication with team and management, (6) Contingency measures to maintain service levels.', fr: 'Évaluer : (1) Actions immédiates de rétention et d\'écoute avec l\'équipe, (2) Diagnostic des causes de rotation, (3) Plan de développement de carrière et de reconnaissance, (4) Stratégie de recrutement accéléré, (5) Communication transparente avec l\'équipe et la direction, (6) Mesures de contingence pour maintenir les niveaux de service.' }, maxScore: 100, aiEvaluated: true, order: 1, isActive: true },
  { id: 'csm-lead-02', profileId: 'customer-service-manager', categoryId: 'csm-soft-skills', competencyId: 'csm-leadership', type: 'scale', content: { es: '¿Con qué frecuencia realiza sesiones individuales de retroalimentación y coaching con cada miembro de su equipo?', en: 'How often do you conduct individual feedback and coaching sessions with each member of your team?', fr: 'À quelle fréquence effectuez-vous des sessions individuelles de rétroaction et de coaching avec chaque membre de votre équipe ?' }, scaleMin: 1, scaleMax: 5, scaleLabels: { min: { es: 'Nunca', en: 'Never', fr: 'Jamais' }, max: { es: 'Semanalmente', en: 'Weekly', fr: 'Chaque semaine' } }, maxScore: 100, aiEvaluated: false, order: 2, isActive: true },
  { id: 'csm-emp-01', profileId: 'customer-service-manager', categoryId: 'csm-soft-skills', competencyId: 'csm-empathy-communication', type: 'multiple-choice', content: { es: 'Un agente de su equipo le informa en privado que está pasando por una situación personal difícil que está afectando su rendimiento. Sus métricas han bajado notablemente en las últimas dos semanas. ¿Cómo maneja la situación?', en: 'A team member privately informs you that they are going through a difficult personal situation that is affecting their performance. Their metrics have noticeably dropped in the last two weeks. How do you handle the situation?', fr: 'Un membre de votre équipe vous informe en privé qu\'il traverse une situation personnelle difficile qui affecte sa performance. Ses indicateurs ont notablement baissé ces deux dernières semaines. Comment gérez-vous la situation ?' }, options: [{ id: 'a', text: { es: 'Escuchar con empatía, ofrecer flexibilidad temporal, acordar un plan de apoyo con metas realistas y hacer seguimiento', en: 'Listen with empathy, offer temporary flexibility, agree on a support plan with realistic goals, and follow up', fr: 'Écouter avec empathie, offrir une flexibilité temporaire, convenir d\'un plan de soutien avec des objectifs réalistes et faire le suivi' }, value: 100 }, { id: 'b', text: { es: 'Decirle que entiende, pero que debe mantener sus métricas igual que los demás', en: 'Tell them you understand but they must maintain their metrics like everyone else', fr: 'Lui dire que vous comprenez mais qu\'il doit maintenir ses indicateurs comme tout le monde' }, value: 20 }, { id: 'c', text: { es: 'Darle unos días libres sin crear un plan de seguimiento', en: 'Give them a few days off without creating a follow-up plan', fr: 'Lui donner quelques jours de congé sans créer de plan de suivi' }, value: 40 }, { id: 'd', text: { es: 'Remitirlo directamente a Recursos Humanos sin involucrarse más', en: 'Refer them directly to HR without further involvement', fr: 'Le diriger directement vers les RH sans plus d\'implication' }, value: 15 }], maxScore: 100, aiEvaluated: false, order: 3, isActive: true },
  { id: 'csm-conf-01', profileId: 'customer-service-manager', categoryId: 'csm-soft-skills', competencyId: 'csm-conflict-resolution', type: 'scenario', content: { es: 'Dos supervisores de turno de su equipo tienen un conflicto abierto que está dividiendo al departamento. Un supervisor acusa al otro de asignar los casos más fáciles a sus agentes favoritos, mientras que el segundo supervisor dice que el primero no respeta los procesos de escalamiento.\n\nContexto: Ambos son empleados con más de 3 años en la empresa y su desempeño individual ha sido bueno históricamente.', en: 'Two shift supervisors on your team have an open conflict that is dividing the department. One supervisor accuses the other of assigning the easiest cases to their favorite agents, while the second supervisor says the first one doesn\'t follow escalation processes.\n\nContext: Both are employees with over 3 years at the company and their individual performance has historically been good.', fr: 'Deux superviseurs de quart de votre équipe ont un conflit ouvert qui divise le département. Un superviseur accuse l\'autre d\'attribuer les cas les plus faciles à ses agents préférés, tandis que le second superviseur dit que le premier ne respecte pas les processus d\'escalade.\n\nContexte : Les deux sont des employés avec plus de 3 ans dans l\'entreprise et leur performance individuelle a historiquement été bonne.' }, rubric: { es: 'Evaluar: (1) Reunión individual con cada supervisor para escuchar versiones, (2) Identificación de hechos vs. percepciones, (3) Mediación estructurada enfocada en soluciones, (4) Establecimiento de reglas claras de asignación y escalamiento, (5) Seguimiento para verificar que el conflicto se resolvió, (6) Acciones preventivas para evitar futuros conflictos similares.', en: 'Evaluate: (1) Individual meeting with each supervisor to hear their side, (2) Identification of facts vs. perceptions, (3) Structured mediation focused on solutions, (4) Establishment of clear assignment and escalation rules, (5) Follow-up to verify the conflict was resolved, (6) Preventive actions to avoid similar future conflicts.', fr: 'Évaluer : (1) Réunion individuelle avec chaque superviseur pour écouter sa version, (2) Identification des faits vs. perceptions, (3) Médiation structurée axée sur les solutions, (4) Établissement de règles claires d\'attribution et d\'escalade, (5) Suivi pour vérifier que le conflit est résolu, (6) Actions préventives pour éviter de futurs conflits similaires.' }, maxScore: 100, aiEvaluated: true, order: 4, isActive: true },
  { id: 'csm-analy-01', profileId: 'customer-service-manager', categoryId: 'csm-soft-skills', competencyId: 'csm-analytical-thinking', type: 'multiple-choice', content: { es: 'Al revisar el dashboard mensual, nota que el tiempo promedio de manejo (AHT) subió un 25%, pero la satisfacción del cliente (CSAT) también mejoró 8 puntos. ¿Cómo interpreta estos datos?', en: 'While reviewing the monthly dashboard, you notice that the average handling time (AHT) increased by 25%, but customer satisfaction (CSAT) also improved by 8 points. How do you interpret this data?', fr: 'En examinant le tableau de bord mensuel, vous remarquez que le temps moyen de traitement (AHT) a augmenté de 25%, mais la satisfaction client (CSAT) s\'est aussi améliorée de 8 points. Comment interprétez-vous ces données ?' }, options: [{ id: 'a', text: { es: 'El AHT alto es siempre negativo; hay que reducirlo inmediatamente', en: 'High AHT is always negative; it must be reduced immediately', fr: 'Un AHT élevé est toujours négatif ; il faut le réduire immédiatement' }, value: 10 }, { id: 'b', text: { es: 'Los agentes están siendo más empáticos y resolviendo mejor, lo cual justifica el mayor AHT; hay que analizar si el incremento en CSAT compensa el costo operativo', en: 'Agents are being more empathetic and resolving better, which justifies the higher AHT; analyze whether the CSAT increase offsets the operational cost', fr: 'Les agents sont plus empathiques et résolvent mieux, ce qui justifie le AHT plus élevé ; il faut analyser si l\'augmentation du CSAT compense le coût opérationnel' }, value: 100 }, { id: 'c', text: { es: 'Los datos son contradictorios y no se puede sacar una conclusión', en: 'The data is contradictory and no conclusion can be drawn', fr: 'Les données sont contradictoires et aucune conclusion ne peut être tirée' }, value: 20 }, { id: 'd', text: { es: 'La mejora del CSAT es lo único que importa, ignorar el AHT', en: 'CSAT improvement is all that matters, ignore AHT', fr: 'L\'amélioration du CSAT est tout ce qui compte, ignorer le AHT' }, value: 30 }], maxScore: 100, aiEvaluated: false, order: 5, isActive: true },
];
const csmReadinessQuestions: Question[] = [
  { id: 'csm-digi-01', profileId: 'customer-service-manager', categoryId: 'csm-readiness', competencyId: 'csm-digital-transformation', type: 'multiple-choice', content: { es: 'La dirección le pide evaluar la implementación de un chatbot con inteligencia artificial para atender el 30% de las consultas más frecuentes. Su equipo expresa preocupación por posibles recortes de personal. ¿Cómo procede?', en: 'Management asks you to evaluate implementing an AI chatbot to handle 30% of the most frequent inquiries. Your team expresses concern about potential staff cuts. How do you proceed?', fr: 'La direction vous demande d\'évaluer la mise en place d\'un chatbot IA pour traiter 30% des demandes les plus fréquentes. Votre équipe exprime des inquiétudes concernant d\'éventuelles réductions de personnel. Comment procédez-vous ?' }, options: [{ id: 'a', text: { es: 'Implementar el chatbot sin consultar al equipo para no generar más resistencia', en: 'Implement the chatbot without consulting the team to avoid more resistance', fr: 'Mettre en place le chatbot sans consulter l\'équipe pour éviter plus de résistance' }, value: 5 }, { id: 'b', text: { es: 'Realizar un piloto controlado, involucrar al equipo en el diseño, comunicar que el chatbot liberará tiempo para casos complejos de mayor valor, y reentrenar a los agentes', en: 'Run a controlled pilot, involve the team in the design, communicate that the chatbot will free up time for higher-value complex cases, and retrain agents', fr: 'Mener un pilote contrôlé, impliquer l\'équipe dans la conception, communiquer que le chatbot libérera du temps pour les cas complexes de plus grande valeur, et reformer les agents' }, value: 100 }, { id: 'c', text: { es: 'Rechazar la propuesta para proteger los empleos del equipo', en: 'Reject the proposal to protect the team\'s jobs', fr: 'Rejeter la proposition pour protéger les emplois de l\'équipe' }, value: 10 }, { id: 'd', text: { es: 'Aceptar la implementación y reasignar agentes a otras áreas sin evaluar sus competencias', en: 'Accept the implementation and reassign agents to other areas without evaluating their competencies', fr: 'Accepter la mise en œuvre et réaffecter les agents à d\'autres domaines sans évaluer leurs compétences' }, value: 15 }], maxScore: 100, aiEvaluated: false, order: 1, isActive: true },
  { id: 'csm-digi-02', profileId: 'customer-service-manager', categoryId: 'csm-readiness', competencyId: 'csm-digital-transformation', type: 'scale', content: { es: '¿Qué tan familiarizado está con herramientas de inteligencia artificial, automatización de procesos (RPA) y analítica predictiva aplicadas al servicio al cliente?', en: 'How familiar are you with artificial intelligence tools, robotic process automation (RPA), and predictive analytics applied to customer service?', fr: 'Dans quelle mesure êtes-vous familiarisé avec les outils d\'intelligence artificielle, l\'automatisation des processus (RPA) et l\'analytique prédictive appliqués au service client ?' }, scaleMin: 1, scaleMax: 5, scaleLabels: { min: { es: 'Nada familiarizado', en: 'Not familiar at all', fr: 'Pas du tout familiarisé' }, max: { es: 'Muy familiarizado', en: 'Very familiar', fr: 'Très familiarisé' } }, maxScore: 100, aiEvaluated: false, order: 2, isActive: true },
  { id: 'csm-proc-01', profileId: 'customer-service-manager', categoryId: 'csm-readiness', competencyId: 'csm-process-improvement', type: 'open-text', content: { es: 'Describa un proceso de servicio al cliente que haya identificado como ineficiente en su experiencia. ¿Qué metodología utilizó o utilizaría para mejorarlo y qué resultados obtuvo o esperaría obtener?', en: 'Describe a customer service process that you have identified as inefficient in your experience. What methodology did you use or would you use to improve it, and what results did you achieve or would you expect?', fr: 'Décrivez un processus de service client que vous avez identifié comme inefficace dans votre expérience. Quelle méthodologie avez-vous utilisée ou utiliseriez-vous pour l\'améliorer, et quels résultats avez-vous obtenus ou attendriez-vous ?' }, rubric: { es: 'Evaluar: (1) Identificación clara del proceso y sus ineficiencias, (2) Uso de metodología estructurada (Lean, Six Sigma, Kaizen, PDCA), (3) Involucramiento del equipo en la mejora, (4) Métricas de antes y después o métricas esperadas, (5) Sostenibilidad de la mejora implementada.', en: 'Evaluate: (1) Clear identification of the process and its inefficiencies, (2) Use of structured methodology (Lean, Six Sigma, Kaizen, PDCA), (3) Team involvement in the improvement, (4) Before and after metrics or expected metrics, (5) Sustainability of the implemented improvement.', fr: 'Évaluer : (1) Identification claire du processus et de ses inefficacités, (2) Utilisation d\'une méthodologie structurée (Lean, Six Sigma, Kaizen, PDCA), (3) Implication de l\'équipe dans l\'amélioration, (4) Indicateurs avant et après ou indicateurs attendus, (5) Durabilité de l\'amélioration mise en œuvre.' }, maxScore: 100, aiEvaluated: true, order: 3, isActive: true },
  { id: 'csm-proc-02', profileId: 'customer-service-manager', categoryId: 'csm-readiness', competencyId: 'csm-process-improvement', type: 'multiple-choice', content: { es: '¿Cuál de las siguientes herramientas o enfoques es más efectivo para identificar cuellos de botella en el flujo de atención al cliente?', en: 'Which of the following tools or approaches is most effective for identifying bottlenecks in the customer service flow?', fr: 'Lequel des outils ou approches suivants est le plus efficace pour identifier les goulots d\'étranglement dans le flux de service client ?' }, options: [{ id: 'a', text: { es: 'Mapeo del viaje del cliente (Customer Journey Map) combinado con análisis de datos operativos', en: 'Customer Journey Mapping combined with operational data analysis', fr: 'Cartographie du parcours client combinée à l\'analyse des données opérationnelles' }, value: 100 }, { id: 'b', text: { es: 'Reuniones semanales de equipo para discutir problemas', en: 'Weekly team meetings to discuss problems', fr: 'Réunions hebdomadaires d\'équipe pour discuter des problèmes' }, value: 30 }, { id: 'c', text: { es: 'Encuestas de satisfacción al cliente únicamente', en: 'Customer satisfaction surveys only', fr: 'Enquêtes de satisfaction client uniquement' }, value: 25 }, { id: 'd', text: { es: 'Observación directa del trabajo de los agentes sin analizar datos', en: 'Direct observation of agents\' work without analyzing data', fr: 'Observation directe du travail des agents sans analyser les données' }, value: 15 }], maxScore: 100, aiEvaluated: false, order: 4, isActive: true },
  { id: 'csm-mkt-01', profileId: 'customer-service-manager', categoryId: 'csm-readiness', competencyId: 'csm-market-adaptability', type: 'scenario', content: { es: 'Una nueva regulación del sector exige que todas las interacciones de servicio al cliente queden grabadas y que se implemente un proceso de consentimiento explícito del cliente antes de cada llamada. Además, los competidores están migrando a modelos de atención 100% digital.\n\nContexto: Su centro de contacto actualmente opera en un 70% telefónico y 30% digital. Su sistema de grabación actual no cumple con los nuevos requisitos.', en: 'A new industry regulation requires that all customer service interactions be recorded and that an explicit customer consent process be implemented before each call. Additionally, competitors are migrating to 100% digital service models.\n\nContext: Your contact center currently operates 70% by phone and 30% digital. Your current recording system does not meet the new requirements.', fr: 'Une nouvelle réglementation sectorielle exige que toutes les interactions de service client soient enregistrées et qu\'un processus de consentement explicite du client soit mis en place avant chaque appel. De plus, les concurrents migrent vers des modèles de service 100% numériques.\n\nContexte : Votre centre de contact fonctionne actuellement à 70% par téléphone et 30% numérique. Votre système d\'enregistrement actuel ne répond pas aux nouvelles exigences.' }, rubric: { es: 'Evaluar: (1) Plan de cumplimiento regulatorio con cronograma, (2) Evaluación de inversión tecnológica necesaria, (3) Estrategia de migración gradual hacia canales digitales, (4) Capacitación del equipo en nuevos procesos, (5) Balance entre innovación y mantenimiento de calidad de servicio, (6) Benchmarking competitivo.', en: 'Evaluate: (1) Regulatory compliance plan with timeline, (2) Required technology investment assessment, (3) Gradual migration strategy towards digital channels, (4) Team training on new processes, (5) Balance between innovation and maintaining service quality, (6) Competitive benchmarking.', fr: 'Évaluer : (1) Plan de conformité réglementaire avec calendrier, (2) Évaluation de l\'investissement technologique nécessaire, (3) Stratégie de migration progressive vers les canaux numériques, (4) Formation de l\'équipe aux nouveaux processus, (5) Équilibre entre innovation et maintien de la qualité de service, (6) Analyse comparative concurrentielle.' }, maxScore: 100, aiEvaluated: true, order: 5, isActive: true },
];

// ============================================================================
// HR MANAGER (Gerente de Recursos Humanos) QUESTIONS
// ============================================================================
const hrmProfessionalQuestions: Question[] = [
  { id: 'hrm-ta-01', profileId: 'hr-manager', categoryId: 'hr-professional', competencyId: 'hrm-talent-acquisition', type: 'scenario', content: { es: 'La empresa necesita contratar 15 ingenieros de software en 90 días para un proyecto estratégico. El mercado de talento tecnológico es altamente competitivo y la marca empleadora no es muy conocida en ese segmento.\n\nContexto: Usted es el Gerente de RR.HH. y debe diseñar la estrategia de atracción y selección.', en: 'The company needs to hire 15 software engineers in 90 days for a strategic project. The tech talent market is highly competitive and the employer brand is not well-known in that segment.\n\nContext: You are the HR Manager and must design the attraction and selection strategy.', fr: 'L\'entreprise doit embaucher 15 ingénieurs logiciels en 90 jours pour un projet stratégique. Le marché des talents technologiques est très concurrentiel et la marque employeur n\'est pas très connue.\n\nContexte : Vous êtes le Responsable RH et devez concevoir la stratégie d\'attraction et de sélection.' }, rubric: { es: 'Evaluar: (1) Estrategia multicanal de sourcing, (2) Propuesta de valor al empleado (EVP) diferenciada, (3) Proceso de selección ágil, (4) Uso de métricas, (5) Plan de contingencia.', en: 'Evaluate: (1) Multichannel sourcing strategy, (2) Differentiated EVP, (3) Agile selection process, (4) Use of metrics, (5) Contingency plan.', fr: 'Évaluer : (1) Stratégie de sourcing multicanal, (2) EVP différenciée, (3) Processus de sélection agile, (4) Métriques, (5) Plan de contingence.' }, maxScore: 100, aiEvaluated: true, order: 1, isActive: true },
  { id: 'hrm-er-01', profileId: 'hr-manager', categoryId: 'hr-professional', competencyId: 'hrm-employee-relations', type: 'multiple-choice', content: { es: 'Un grupo de colaboradores presenta una queja formal por presunto acoso laboral de su supervisor directo. El supervisor es uno de los gerentes con mejores resultados comerciales. ¿Cuál es su primer paso?', en: 'A group of employees files a formal complaint alleging workplace harassment by their direct supervisor. The supervisor is one of the top-performing managers. What is your first step?', fr: 'Un groupe d\'employés dépose une plainte formelle pour harcèlement présumé de leur superviseur direct. Le superviseur est l\'un des gestionnaires les plus performants. Quelle est votre première étape ?' }, options: [{ id: 'a', text: { es: 'Iniciar una investigación imparcial documentada, separando temporalmente al supervisor del equipo', en: 'Initiate a documented impartial investigation, temporarily separating the supervisor from the team', fr: 'Lancer une enquête impartiale documentée, en séparant temporairement le superviseur de l\'équipe' }, value: 100 }, { id: 'b', text: { es: 'Hablar en privado con el supervisor para conocer su versión antes de tomar cualquier acción', en: 'Speak privately with the supervisor to hear their side before taking any action', fr: 'Parler en privé avec le superviseur pour connaître sa version avant toute action' }, value: 40 }, { id: 'c', text: { es: 'Mediar informalmente entre las partes para resolver el conflicto rápidamente', en: 'Informally mediate between the parties to resolve the conflict quickly', fr: 'Faire une médiation informelle entre les parties' }, value: 20 }, { id: 'd', text: { es: 'Trasladar a los empleados quejosos a otro departamento para separar a las partes', en: 'Transfer the complaining employees to another department to separate the parties', fr: 'Transférer les employés plaignants à un autre département' }, value: 0 }], maxScore: 100, aiEvaluated: false, order: 2, isActive: true },
  { id: 'hrm-pm-01', profileId: 'hr-manager', categoryId: 'hr-professional', competencyId: 'hrm-performance-management', type: 'open-text', content: { es: 'Describa cómo diseñaría un sistema de gestión del desempeño para una empresa de 200 empleados que actualmente no tiene ninguno. Incluya frecuencia, metodología, vinculación con compensación y plan de implementación.', en: 'Describe how you would design a performance management system for a 200-employee company that currently has none. Include frequency, methodology, link to compensation, and implementation plan.', fr: 'Décrivez comment vous concevriez un système de gestion de la performance pour une entreprise de 200 employés qui n\'en a aucun. Incluez fréquence, méthodologie, lien avec rémunération et plan de mise en œuvre.' }, rubric: { es: 'Evaluar: (1) Competencias y objetivos SMART, (2) Metodología (90°, 180° o 360°), (3) Frecuencia, (4) Capacitación a evaluadores, (5) Vinculación con desarrollo y compensación, (6) Plan de comunicación y piloto.', en: 'Evaluate: (1) Competencies and SMART objectives, (2) Methodology (90°, 180°, or 360°), (3) Frequency, (4) Evaluator training, (5) Link to development and compensation, (6) Communication and pilot plan.', fr: 'Évaluer : (1) Compétences et objectifs SMART, (2) Méthodologie, (3) Fréquence, (4) Formation des évaluateurs, (5) Lien développement et rémunération, (6) Plan de communication et pilote.' }, maxScore: 100, aiEvaluated: true, order: 3, isActive: true },
  { id: 'hrm-cb-01', profileId: 'hr-manager', categoryId: 'hr-professional', competencyId: 'hrm-compensation-benefits', type: 'multiple-choice', content: { es: 'La rotación voluntaria aumentó 25%. Los salarios están 15% por debajo del mercado, pero el presupuesto solo permite un ajuste del 8%. ¿Qué estrategia integral propone?', en: 'Voluntary turnover increased 25%. Salaries are 15% below market, but the budget only allows an 8% adjustment. What comprehensive strategy do you propose?', fr: 'Le turnover volontaire a augmenté de 25%. Les salaires sont 15% en dessous du marché, mais le budget ne permet qu\'un ajustement de 8%. Quelle stratégie proposez-vous ?' }, options: [{ id: 'a', text: { es: 'Ajuste del 8% focalizado en posiciones críticas, complementado con beneficios no monetarios y plan de ajuste gradual a 18 meses', en: 'Focused 8% adjustment on critical positions, complemented with non-monetary benefits and 18-month gradual plan', fr: 'Ajustement de 8% ciblé sur les postes critiques, complété par des avantages non monétaires et un plan progressif sur 18 mois' }, value: 100 }, { id: 'b', text: { es: 'Distribuir el 8% equitativamente entre todos', en: 'Distribute the 8% equally among all', fr: 'Distribuer les 8% équitablement' }, value: 30 }, { id: 'c', text: { es: 'No hacer ajustes salariales, mejorar ambiente laboral', en: 'No salary adjustments, improve work environment', fr: 'Pas d\'ajustements, améliorer l\'environnement' }, value: 15 }, { id: 'd', text: { es: 'Solicitar más presupuesto a la dirección para cubrir el 15%', en: 'Request more budget from management to cover the full 15%', fr: 'Demander plus de budget pour couvrir les 15%' }, value: 40 }], maxScore: 100, aiEvaluated: false, order: 4, isActive: true },
  { id: 'hrm-td-01', profileId: 'hr-manager', categoryId: 'hr-professional', competencyId: 'hrm-training-development', type: 'scale', content: { es: '¿Qué tan experimentado se considera en el diseño de programas de capacitación basados en diagnósticos de necesidades (DNC), incluyendo objetivos de aprendizaje, selección de metodologías y medición de ROI?', en: 'How experienced do you consider yourself in designing training programs based on Training Needs Analysis (TNA), including learning objectives, methodologies, and ROI measurement?', fr: 'Dans quelle mesure vous considérez-vous expérimenté dans la conception de programmes de formation basés sur l\'analyse des besoins, y compris objectifs, méthodologies et mesure du ROI ?' }, scaleMin: 1, scaleMax: 5, scaleLabels: { min: { es: 'Nada experimentado', en: 'Not experienced at all', fr: 'Pas du tout expérimenté' }, max: { es: 'Muy experimentado', en: 'Very experienced', fr: 'Très expérimenté' } }, maxScore: 100, aiEvaluated: false, order: 5, isActive: true },
  { id: 'hrm-ll-01', profileId: 'hr-manager', categoryId: 'hr-professional', competencyId: 'hrm-labor-law', type: 'scenario', content: { es: 'Un empleado con 12 años de antigüedad tiene bajo desempeño documentado por 8 meses a pesar de dos planes de mejora. El gerente solicita su despido inmediato. El empleado es representante sindical.\n\nContexto: Legislación laboral protectora y convenio colectivo vigente.', en: 'An employee with 12 years tenure has had documented poor performance for 8 months despite two improvement plans. The manager requests immediate termination. The employee is a union representative.\n\nContext: Protective labor legislation and current collective agreement.', fr: 'Un employé avec 12 ans d\'ancienneté a eu des performances insuffisantes pendant 8 mois malgré deux plans d\'amélioration. Le responsable demande son licenciement. L\'employé est représentant syndical.\n\nContexte : Législation du travail protectrice et convention collective en vigueur.' }, rubric: { es: 'Evaluar: (1) Conocimiento de fuero sindical, (2) Revisión de documentación y due process, (3) Consulta legal, (4) Alternativas antes del despido, (5) Procedimiento legal correcto.', en: 'Evaluate: (1) Knowledge of union protections, (2) Performance documentation review, (3) Legal consultation, (4) Alternatives before termination, (5) Correct legal procedure.', fr: 'Évaluer : (1) Connaissance des protections syndicales, (2) Examen de la documentation, (3) Consultation juridique, (4) Alternatives, (5) Procédure légale correcte.' }, maxScore: 100, aiEvaluated: true, order: 6, isActive: true },
];
const hrmSoftSkillsQuestions: Question[] = [
  { id: 'hrm-lid-01', profileId: 'hr-manager', categoryId: 'hr-soft-skills', competencyId: 'hrm-leadership', type: 'scenario', content: { es: 'Acaba de asumir como Gerente de RR.HH. en una empresa donde el departamento tiene mala reputación interna. Los empleados lo ven como un área burocrática. Su equipo de 6 personas está desmotivado.\n\nContexto: Tiene 6 meses para transformar la percepción del departamento.', en: 'You have just taken over as HR Manager where the department has a poor internal reputation. Employees see it as bureaucratic. Your team of 6 is demotivated.\n\nContext: You have 6 months to transform the department\'s perception.', fr: 'Vous venez de prendre le poste de Responsable RH dans une entreprise où le département a une mauvaise réputation. Votre équipe de 6 personnes est démotivée.\n\nContexte : Vous avez 6 mois pour transformer la perception du département.' }, rubric: { es: 'Evaluar: (1) Diagnóstico del equipo y quick wins, (2) Visión y objetivos claros, (3) Desarrollo y empoderamiento del equipo, (4) Acciones de valor agregado, (5) Métricas de satisfacción interna.', en: 'Evaluate: (1) Team diagnosis and quick wins, (2) Clear vision and objectives, (3) Team development and empowerment, (4) Value-added actions, (5) Internal satisfaction metrics.', fr: 'Évaluer : (1) Diagnostic et victoires rapides, (2) Vision et objectifs clairs, (3) Développement de l\'équipe, (4) Actions à valeur ajoutée, (5) Métriques de satisfaction.' }, maxScore: 100, aiEvaluated: true, order: 1, isActive: true },
  { id: 'hrm-com-01', profileId: 'hr-manager', categoryId: 'hr-soft-skills', competencyId: 'hrm-strategic-communication', type: 'multiple-choice', content: { es: 'La empresa debe implementar una reestructuración que eliminará 20 posiciones. ¿Cuál es el enfoque más adecuado para comunicarlo?', en: 'The company must implement a restructuring that will eliminate 20 positions. What is the most appropriate communication approach?', fr: 'L\'entreprise doit mettre en œuvre une restructuration qui supprimera 20 postes. Quelle est l\'approche de communication la plus appropriée ?' }, options: [{ id: 'a', text: { es: 'Comunicar primero a los afectados en reuniones individuales con dignidad, luego informar a la organización con transparencia y plan de apoyo', en: 'First communicate to those affected individually with dignity, then inform the organization transparently with support plan', fr: 'Communiquer d\'abord individuellement aux personnes concernées avec dignité, puis informer l\'organisation avec transparence' }, value: 100 }, { id: 'b', text: { es: 'Enviar un correo masivo a toda la empresa', en: 'Send a mass email to the entire company', fr: 'Envoyer un courriel de masse' }, value: 10 }, { id: 'c', text: { es: 'Dejar que cada gerente comunique a su equipo', en: 'Let each manager communicate to their team', fr: 'Laisser chaque responsable communiquer' }, value: 20 }, { id: 'd', text: { es: 'Reunión general con todos los empleados', en: 'General meeting with all employees', fr: 'Réunion générale avec tous les employés' }, value: 30 }], maxScore: 100, aiEvaluated: false, order: 2, isActive: true },
  { id: 'hrm-ie-01', profileId: 'hr-manager', categoryId: 'hr-soft-skills', competencyId: 'hrm-emotional-intelligence', type: 'multiple-choice', content: { es: 'Durante una reunión de comité directivo, el Director Financiero critica públicamente a RR.HH. diciendo que "solo genera costos y no aporta valor". ¿Cómo reacciona?', en: 'During an executive committee meeting, the CFO publicly criticizes HR saying it "only generates costs and adds no value." How do you react?', fr: 'Lors d\'une réunion du comité de direction, le Directeur Financier critique publiquement les RH. Comment réagissez-vous ?' }, options: [{ id: 'a', text: { es: 'Mantener la compostura, reconocer la importancia de la eficiencia, y proponer una reunión bilateral con datos concretos de impacto', en: 'Maintain composure, acknowledge the importance of efficiency, and propose a bilateral meeting with concrete impact data', fr: 'Garder son sang-froid, reconnaître l\'importance de l\'efficacité, et proposer une réunion bilatérale avec des données concrètes' }, value: 100 }, { id: 'b', text: { es: 'Defenderse inmediatamente con datos', en: 'Immediately defend yourself with data', fr: 'Se défendre immédiatement avec des données' }, value: 40 }, { id: 'c', text: { es: 'No decir nada y quejarse después con el CEO', en: 'Say nothing and complain to the CEO later', fr: 'Ne rien dire et se plaindre au PDG après' }, value: 10 }, { id: 'd', text: { es: 'Responder que finanzas tampoco genera ingresos directos', en: 'Respond that finance doesn\'t generate direct revenue either', fr: 'Répondre que les finances ne génèrent pas de revenus directs non plus' }, value: 0 }], maxScore: 100, aiEvaluated: false, order: 3, isActive: true },
  { id: 'hrm-neg-01', profileId: 'hr-manager', categoryId: 'hr-soft-skills', competencyId: 'hrm-negotiation', type: 'scenario', content: { es: 'El sindicato exige aumento del 12% y reducción de jornada a 40 horas. La dirección acepta máximo 6% sin cambios en jornada. Negociación estancada, amenaza de huelga.\n\nContexto: Convenio vence en 30 días. Inflación acumulada: 9%.', en: 'The union demands 12% raise and 40-hour week. Management accepts max 6% with no schedule changes. Negotiations stalled, strike threat.\n\nContext: Agreement expires in 30 days. Accumulated inflation: 9%.', fr: 'Le syndicat exige 12% d\'augmentation et 40 heures. La direction accepte max 6% sans changement. Négociations au point mort, menace de grève.\n\nContexte : Convention expire dans 30 jours. Inflation cumulée : 9%.' }, rubric: { es: 'Evaluar: (1) Preparación con datos de mercado, (2) Búsqueda de ZOPA, (3) Propuestas creativas, (4) Manejo del conflicto, (5) Comunicación transparente.', en: 'Evaluate: (1) Market data preparation, (2) ZOPA search, (3) Creative proposals, (4) Conflict management, (5) Transparent communication.', fr: 'Évaluer : (1) Préparation avec données, (2) Recherche de ZOPA, (3) Propositions créatives, (4) Gestion du conflit, (5) Communication transparente.' }, maxScore: 100, aiEvaluated: true, order: 4, isActive: true },
  { id: 'hrm-neg-02', profileId: 'hr-manager', categoryId: 'hr-soft-skills', competencyId: 'hrm-negotiation', type: 'scale', content: { es: '¿Qué tan competente se considera utilizando métricas y analítica de RR.HH. (dashboards, KPIs de rotación, costo por contratación, eNPS) para fundamentar decisiones y negociar presupuesto?', en: 'How competent do you consider yourself in using HR metrics and analytics (dashboards, turnover KPIs, cost-per-hire, eNPS) to support decisions and negotiate budgets?', fr: 'Dans quelle mesure vous considérez-vous compétent dans l\'utilisation des métriques RH (tableaux de bord, KPI de turnover, coût par embauche, eNPS) pour étayer les décisions ?' }, scaleMin: 1, scaleMax: 5, scaleLabels: { min: { es: 'Nada competente', en: 'Not competent at all', fr: 'Pas du tout compétent' }, max: { es: 'Muy competente', en: 'Very competent', fr: 'Très compétent' } }, maxScore: 100, aiEvaluated: false, order: 5, isActive: true },
];
const hrmReadinessQuestions: Question[] = [
  { id: 'hrm-tech-01', profileId: 'hr-manager', categoryId: 'hr-readiness', competencyId: 'hrm-hr-technology', type: 'multiple-choice', content: { es: 'La empresa evalúa implementar IA para filtrado de currículos y predicción de rotación. ¿Cuál es su postura como Gerente de RR.HH.?', en: 'The company is evaluating AI for resume screening and turnover prediction. What is your position as HR Manager?', fr: 'L\'entreprise évalue l\'IA pour le filtrage des CV et la prédiction du turnover. Quelle est votre position ?' }, options: [{ id: 'a', text: { es: 'Liderar la evaluación de proveedores, asegurar ausencia de sesgos, implementar piloto con métricas y capacitar al equipo en uso ético', en: 'Lead vendor evaluation, ensure no biases, implement pilot with metrics, train team on ethical use', fr: 'Diriger l\'évaluation, s\'assurer de l\'absence de biais, pilote avec métriques, former l\'équipe' }, value: 100 }, { id: 'b', text: { es: 'Adoptar lo que el proveedor recomiende de inmediato', en: 'Adopt what the vendor recommends immediately', fr: 'Adopter la recommandation du fournisseur immédiatement' }, value: 20 }, { id: 'c', text: { es: 'Oponerse porque la IA no puede reemplazar el criterio humano', en: 'Oppose because AI cannot replace human judgment', fr: 'S\'opposer car l\'IA ne peut remplacer le jugement humain' }, value: 10 }, { id: 'd', text: { es: 'Esperar a que otras empresas la implementen primero', en: 'Wait for other companies to implement first', fr: 'Attendre que d\'autres entreprises la mettent en œuvre' }, value: 30 }], maxScore: 100, aiEvaluated: false, order: 1, isActive: true },
  { id: 'hrm-tech-02', profileId: 'hr-manager', categoryId: 'hr-readiness', competencyId: 'hrm-hr-technology', type: 'scale', content: { es: '¿Qué tan familiarizado está con plataformas de People Analytics, sistemas HRIS avanzados (Workday, SAP SuccessFactors, BambooHR) y herramientas de automatización de procesos de RR.HH.?', en: 'How familiar are you with People Analytics platforms, advanced HRIS (Workday, SAP SuccessFactors, BambooHR), and HR process automation tools?', fr: 'Dans quelle mesure êtes-vous familiarisé avec les plateformes People Analytics, les SIRH avancés (Workday, SAP SuccessFactors, BambooHR) et les outils d\'automatisation RH ?' }, scaleMin: 1, scaleMax: 5, scaleLabels: { min: { es: 'Nada familiarizado', en: 'Not familiar at all', fr: 'Pas du tout familiarisé' }, max: { es: 'Muy familiarizado', en: 'Very familiar', fr: 'Très familiarisé' } }, maxScore: 100, aiEvaluated: false, order: 2, isActive: true },
  { id: 'hrm-cm-01', profileId: 'hr-manager', categoryId: 'hr-readiness', competencyId: 'hrm-change-management', type: 'scenario', content: { es: 'La empresa será adquirida por un grupo internacional. Fusión cultural entre empresa familiar/jerárquica y corporativa/horizontal.\n\nContexto: Usted liderará la integración cultural. Tiene 12 meses.', en: 'The company will be acquired by an international group. Cultural merger between family/hierarchical and corporate/flat organizations.\n\nContext: You will lead the cultural integration. You have 12 months.', fr: 'L\'entreprise sera acquise par un groupe international. Fusion culturelle entre entreprise familiale/hiérarchique et corporative/horizontale.\n\nContexte : Vous dirigerez l\'intégration culturelle. Vous avez 12 mois.' }, rubric: { es: 'Evaluar: (1) Diagnóstico cultural, (2) Valores compartidos y diferencias, (3) Plan de comunicación, (4) Retención de talento clave, (5) Gestión de resistencia, (6) Indicadores de éxito.', en: 'Evaluate: (1) Cultural diagnosis, (2) Shared values and differences, (3) Communication plan, (4) Key talent retention, (5) Resistance management, (6) Success indicators.', fr: 'Évaluer : (1) Diagnostic culturel, (2) Valeurs partagées et différences, (3) Plan de communication, (4) Rétention des talents, (5) Gestion de la résistance, (6) Indicateurs de succès.' }, maxScore: 100, aiEvaluated: true, order: 3, isActive: true },
  { id: 'hrm-cm-02', profileId: 'hr-manager', categoryId: 'hr-readiness', competencyId: 'hrm-change-management', type: 'multiple-choice', content: { es: '¿Cuál es la secuencia correcta para gestionar un cambio organizacional según las mejores prácticas?', en: 'What is the correct sequence for managing organizational change according to best practices?', fr: 'Quelle est la séquence correcte pour gérer un changement organisationnel selon les meilleures pratiques ?' }, options: [{ id: 'a', text: { es: 'Crear urgencia → Coalición → Visión → Comunicar → Empoderar → Victorias rápidas → Consolidar → Anclar en cultura', en: 'Create urgency → Coalition → Vision → Communicate → Empower → Quick wins → Consolidate → Anchor in culture', fr: 'Créer urgence → Coalition → Vision → Communiquer → Habiliter → Victoires rapides → Consolider → Ancrer dans la culture' }, value: 100 }, { id: 'b', text: { es: 'Comunicar → Implementar → Capacitar → Evaluar', en: 'Communicate → Implement → Train → Evaluate', fr: 'Communiquer → Mettre en œuvre → Former → Évaluer' }, value: 20 }, { id: 'c', text: { es: 'Diseñar → Informar gerentes → Ejecutar → Medir', en: 'Design → Inform managers → Execute → Measure', fr: 'Concevoir → Informer → Exécuter → Mesurer' }, value: 30 }, { id: 'd', text: { es: 'Contratar consultores → Seguir plan → Implementar → Reportar', en: 'Hire consultants → Follow plan → Implement → Report', fr: 'Embaucher consultants → Suivre plan → Mettre en œuvre → Rapporter' }, value: 10 }], maxScore: 100, aiEvaluated: false, order: 4, isActive: true },
  { id: 'hrm-dei-01', profileId: 'hr-manager', categoryId: 'hr-readiness', competencyId: 'hrm-dei-trends', type: 'open-text', content: { es: 'Diseñe una estrategia de Diversidad, Equidad e Inclusión (DEI) para una empresa de 500 empleados en América Latina que nunca ha tenido una iniciativa formal. Incluya diagnóstico, objetivos, acciones concretas y métricas.', en: 'Design a DEI strategy for a 500-employee company in Latin America that has never had a formal initiative. Include diagnosis, objectives, concrete actions, and tracking metrics.', fr: 'Concevez une stratégie DEI pour une entreprise de 500 employés en Amérique latine sans initiative formelle. Incluez diagnostic, objectifs, actions concrètes et métriques.' }, rubric: { es: 'Evaluar: (1) Diagnóstico de diversidad actual, (2) Objetivos medibles, (3) Acciones concretas (reclutamiento inclusivo, sesgos inconscientes, equidad salarial, grupos de afinidad), (4) Involucramiento de alta dirección, (5) Métricas y rendición de cuentas.', en: 'Evaluate: (1) Current diversity diagnosis, (2) Measurable objectives, (3) Concrete actions (inclusive recruitment, unconscious bias training, pay equity, affinity groups), (4) Senior management involvement, (5) Tracking metrics and accountability.', fr: 'Évaluer : (1) Diagnostic de diversité actuelle, (2) Objectifs mesurables, (3) Actions concrètes, (4) Implication de la direction, (5) Métriques et responsabilisation.' }, maxScore: 100, aiEvaluated: true, order: 5, isActive: true },
];

export const questions: Question[] = [
  // Salud y Vida
  ...saludVidaProfessionalQuestions,
  ...assignToProfile(sharedSoftSkillsQuestions, 'salud-vida'),
  ...assignToProfile(sharedReadinessQuestions, 'salud-vida'),

  // Riesgos Generales
  ...riesgosGeneralesProfessionalQuestions,
  ...assignToProfile(sharedSoftSkillsQuestions, 'riesgos-generales'),
  ...assignToProfile(sharedReadinessQuestions, 'riesgos-generales'),

  // Ride-Hailing Driver
  ...ridehailingProfessionalQuestions,
  ...ridehailingSoftSkillsQuestions,
  ...ridehailingReadinessQuestions,

  // Pharmacy Clerk
  ...pharmacyProfessionalQuestions,
  ...pharmacySoftSkillsQuestions,
  ...pharmacyReadinessQuestions,

  // Gas Station Attendant
  ...gasStationProfessionalQuestions,
  ...gasStationSoftSkillsQuestions,
  ...gasStationReadinessQuestions,

  // Pharmacist
  ...pharmacistProfessionalQuestions,
  ...pharmacistSoftSkillsQuestions,
  ...pharmacistReadinessQuestions,

  // AML/CFT Compliance Officer
  ...amlProfessionalQuestions,
  ...amlSoftSkillsQuestions,
  ...amlReadinessQuestions,

  // Collections Officer
  ...collectionsProfessionalQuestions,
  ...collectionsSoftSkillsQuestions,
  ...collectionsReadinessQuestions,

  // Accounting Officer
  ...accountingProfessionalQuestions,
  ...accountingSoftSkillsQuestions,
  ...accountingReadinessQuestions,

  // Secondary School Educator
  ...secEdProfessionalQuestions,
  ...secEdSoftSkillsQuestions,
  ...secEdReadinessQuestions,

  // Sales Associate
  ...salesAssociateProfessionalQuestions,
  ...salesAssociateSoftSkillsQuestions,
  ...salesAssociateReadinessQuestions,

  // K-12 School Principal
  ...k12ProfessionalQuestions,
  ...k12SoftSkillsQuestions,
  ...k12ReadinessQuestions,

  // Elementary School Principal
  ...elemPrincipalProfessionalQuestions,
  ...elemPrincipalSoftSkillsQuestions,
  ...elemPrincipalReadinessQuestions,

  // General Manager (CEO-level)
  ...gmProfessionalQuestions,
  ...gmSoftSkillsQuestions,
  ...gmReadinessQuestions,

  // HR Officer
  ...hrOfficerProfessionalQuestions,
  ...hrOfficerSoftSkillsQuestions,
  ...hrOfficerReadinessQuestions,

  // Customer Service Officer
  ...csoProfessionalQuestions,
  ...csoSoftSkillsQuestions,
  ...csoReadinessQuestions,

  // Secondary School Principal
  ...secPrincipalProfessionalQuestions,
  ...secPrincipalSoftSkillsQuestions,
  ...secPrincipalReadinessQuestions,

  // Executive Assistant
  ...execAssistantProfessionalQuestions,
  ...execAssistantSoftSkillsQuestions,
  ...execAssistantReadinessQuestions,

  // Pre-School Educator
  ...preSchoolProfessionalQuestions,
  ...preSchoolSoftSkillsQuestions,
  ...preSchoolReadinessQuestions,

  // Receptionist
  ...receptionistProfessionalQuestions,
  ...receptionistSoftSkillsQuestions,
  ...receptionistReadinessQuestions,

  // Collections Manager
  ...colMgrProfessionalQuestions,
  ...colMgrSoftSkillsQuestions,
  ...colMgrReadinessQuestions,

  // Technical Support Specialist
  ...techSupProfessionalQuestions,
  ...techSupSoftSkillsQuestions,
  ...techSupReadinessQuestions,

  // CFO (Director Financiero)
  ...cfoProfessionalQuestions,
  ...cfoSoftSkillsQuestions,
  ...cfoReadinessQuestions,

  // Insurance Company CEO
  ...insCeoProfessionalQuestions,
  ...insCeoSoftSkillsQuestions,
  ...insCeoReadinessQuestions,
  // Insurance Broker Company CEO
  ...insBrokerProfessionalQuestions,
  ...insBrokerSoftSkillsQuestions,
  ...insBrokerReadinessQuestions,
  // Chief Risk Officer (CRO)
  ...insCroProfessionalQuestions,
  ...insCroSoftSkillsQuestions,
  ...insCroReadinessQuestions,
  // Chief Underwriting Officer (CUO)
  ...insCuoProfessionalQuestions,
  ...insCuoSoftSkillsQuestions,
  ...insCuoReadinessQuestions,
  // Chief Actuary
  ...insActuaryProfessionalQuestions,
  ...insActuarySoftSkillsQuestions,
  ...insActuaryReadinessQuestions,

  // Technology/IT - Software Developer
  ...techSwdevProfessionalQuestions,
  ...techSwdevSoftSkillsQuestions,
  ...techSwdevReadinessQuestions,
  // Technology/IT - IT Manager / CTO
  ...techItmgrProfessionalQuestions,
  ...techItmgrSoftSkillsQuestions,
  ...techItmgrReadinessQuestions,
  // Technology/IT - Data Analyst
  ...techDataProfessionalQuestions,
  ...techDataSoftSkillsQuestions,
  ...techDataReadinessQuestions,
  // Technology/IT - Cybersecurity Analyst
  ...techCyberProfessionalQuestions,
  ...techCyberSoftSkillsQuestions,
  ...techCyberReadinessQuestions,
  // Technology/IT - Agile Project Manager
  ...techApmProfessionalQuestions,
  ...techApmSoftSkillsQuestions,
  ...techApmReadinessQuestions,

  // Banking - Branch Manager
  ...bankBmProfessionalQuestions,
  ...bankBmSoftSkillsQuestions,
  ...bankBmReadinessQuestions,
  // Banking - Loan Officer
  ...bankLoProfessionalQuestions,
  ...bankLoSoftSkillsQuestions,
  ...bankLoReadinessQuestions,
  // Banking - Investment Advisor
  ...bankIaProfessionalQuestions,
  ...bankIaSoftSkillsQuestions,
  ...bankIaReadinessQuestions,
  // Banking - Bank Teller
  ...bankBtProfessionalQuestions,
  ...bankBtSoftSkillsQuestions,
  ...bankBtReadinessQuestions,

  // Hospitality - Hotel General Manager
  ...hospHgmProfessionalQuestions,
  ...hospHgmSoftSkillsQuestions,
  ...hospHgmReadinessQuestions,
  // Hospitality - Restaurant Manager
  ...hospRmProfessionalQuestions,
  ...hospRmSoftSkillsQuestions,
  ...hospRmReadinessQuestions,
  // Hospitality - Front Desk Agent
  ...hospFdaProfessionalQuestions,
  ...hospFdaSoftSkillsQuestions,
  ...hospFdaReadinessQuestions,
  // Hospitality - Chef / Kitchen Manager
  ...hospCkmProfessionalQuestions,
  ...hospCkmSoftSkillsQuestions,
  ...hospCkmReadinessQuestions,

  // Primary School Educator
  ...primEdProfessionalQuestions,
  ...primEdSoftSkillsQuestions,
  ...primEdReadinessQuestions,

  // Business Manager (Gerente de Negocios)
  ...bmProfessionalQuestions,
  ...bmSoftSkillsQuestions,
  ...bmReadinessQuestions,

  // Accounting Manager (Gerente de Contabilidad)
  ...acctMgrProfessionalQuestions,
  ...acctMgrSoftSkillsQuestions,
  ...acctMgrReadinessQuestions,

  // HR Manager (Gerente de Recursos Humanos)
  ...hrmProfessionalQuestions,
  ...hrmSoftSkillsQuestions,
  ...hrmReadinessQuestions,

  // Customer Service Manager (Gerente de Servicio al Cliente)
  ...csmProfessionalQuestions,
  ...csmSoftSkillsQuestions,
  ...csmReadinessQuestions,

  // Business Officer (Ejecutivo de Negocios)
  ...boProfessionalQuestions,
  ...boSoftSkillsQuestions,
  ...boReadinessQuestions,

  // School Psychologist (Psicólogo Escolar)
  ...spProfessionalQuestions,
  ...spSoftSkillsQuestions,
  ...spReadinessQuestions,

  // Legal Practice — Managing Partner
  ...legalMpProfessionalQuestions,
  ...legalMpSoftSkillsQuestions,
  ...legalMpReadinessQuestions,

  // Legal Practice — Practice Area Director
  ...legalPdProfessionalQuestions,
  ...legalPdSoftSkillsQuestions,
  ...legalPdReadinessQuestions,

  // Legal Practice — Senior Attorney
  ...legalSaProfessionalQuestions,
  ...legalSaSoftSkillsQuestions,
  ...legalSaReadinessQuestions,

  // Legal Practice — Corporate Counsel
  ...legalCcProfessionalQuestions,
  ...legalCcSoftSkillsQuestions,
  ...legalCcReadinessQuestions,

  // Legal Practice — Paralegal
  ...legalPlProfessionalQuestions,
  ...legalPlSoftSkillsQuestions,
  ...legalPlReadinessQuestions,

  // Legal Practice — Legal Secretary
  ...legalLsProfessionalQuestions,
  ...legalLsSoftSkillsQuestions,
  ...legalLsReadinessQuestions,

  // Microsoft — Dynamics Operator
  ...msDynProfessionalQuestions,
  ...msDynSoftSkillsQuestions,
  ...msDynReadinessQuestions,

  // Microsoft — Office/365 User
  ...msOfficeProfessionalQuestions,
  ...msOfficeSoftSkillsQuestions,
  ...msOfficeReadinessQuestions,

  // Microsoft — SharePoint User
  ...msSpProfessionalQuestions,
  ...msSpSoftSkillsQuestions,
  ...msSpReadinessQuestions,
];
