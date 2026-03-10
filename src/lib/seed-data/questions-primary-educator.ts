import type { Question } from '@/types';

// ============================================================================
// PRIMARY SCHOOL EDUCATOR QUESTIONS
// ============================================================================

// ============================================================================
// PROFESSIONAL SKILLS (edu-primary-professional)
// Competencies: curriculum-design, differentiated-instruction, student-assessment, literacy-numeracy
// ============================================================================

export const primEdProfessionalQuestions: Question[] = [
  // --- Curriculum Design ---
  {
    id: 'primed-cd-01',
    profileId: 'primary-school-educator',
    categoryId: 'edu-primary-professional',
    competencyId: 'curriculum-design',
    type: 'multiple-choice',
    content: {
      es: 'Al planificar una unidad didáctica de Ciencias Naturales para 4.° grado, ¿cuál es el primer paso más adecuado?',
      en: 'When planning a Natural Sciences unit for 4th grade, what is the most appropriate first step?',
      fr: 'Lors de la planification d\'une unité de Sciences Naturelles pour la 4e année, quelle est la première étape la plus appropriée ?',
    },
    options: [
      { id: 'a', text: { es: 'Buscar actividades divertidas en internet', en: 'Search for fun activities on the internet', fr: 'Chercher des activités amusantes sur internet' }, value: 15 },
      { id: 'b', text: { es: 'Revisar los estándares curriculares nacionales y los aprendizajes esperados para ese grado', en: 'Review national curriculum standards and expected learning outcomes for that grade', fr: 'Consulter les normes curriculaires nationales et les résultats d\'apprentissage attendus pour ce niveau' }, value: 100 },
      { id: 'c', text: { es: 'Copiar la planificación del año anterior sin modificaciones', en: 'Copy last year\'s plan without modifications', fr: 'Copier la planification de l\'année précédente sans modifications' }, value: 5 },
      { id: 'd', text: { es: 'Preguntar a los alumnos qué temas les interesan y basarse solo en eso', en: 'Ask students what topics interest them and base the plan solely on that', fr: 'Demander aux élèves quels sujets les intéressent et baser le plan uniquement là-dessus' }, value: 35 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'primed-cd-02',
    profileId: 'primary-school-educator',
    categoryId: 'edu-primary-professional',
    competencyId: 'curriculum-design',
    type: 'scenario',
    content: {
      es: 'La dirección de su escuela le informa que a partir del próximo bimestre se debe integrar educación socioemocional de manera transversal en todas las asignaturas de 3.° grado. Usted imparte Matemáticas, Español y Ciencias Naturales.\n\nDescriba cómo rediseñaría sus planificaciones para integrar competencias socioemocionales sin sacrificar los contenidos académicos obligatorios.',
      en: 'Your school administration informs you that starting next term, socio-emotional education must be integrated across all 3rd-grade subjects. You teach Mathematics, Spanish, and Natural Sciences.\n\nDescribe how you would redesign your lesson plans to integrate socio-emotional competencies without sacrificing mandatory academic content.',
      fr: 'La direction de votre école vous informe qu\'à partir du prochain bimestre, l\'éducation socio-émotionnelle doit être intégrée de manière transversale dans toutes les matières de 3e année. Vous enseignez les Mathématiques, l\'Espagnol et les Sciences Naturelles.\n\nDécrivez comment vous reconceviez vos planifications pour intégrer les compétences socio-émotionnelles sans sacrifier les contenus académiques obligatoires.',
    },
    rubric: {
      es: 'Evaluar: (1) Estrategias concretas de integración transversal, (2) Ejemplos por asignatura, (3) Alineación con estándares curriculares, (4) Uso de trabajo colaborativo y reflexión, (5) Indicadores de logro socioemocional, (6) Viabilidad práctica.',
      en: 'Evaluate: (1) Concrete cross-curricular integration strategies, (2) Examples per subject, (3) Alignment with curriculum standards, (4) Use of collaborative work and reflection, (5) Socio-emotional achievement indicators, (6) Practical feasibility.',
      fr: 'Évaluer : (1) Stratégies concrètes d\'intégration transversale, (2) Exemples par matière, (3) Alignement avec les normes curriculaires, (4) Utilisation du travail collaboratif et de la réflexion, (5) Indicateurs de réussite socio-émotionnelle, (6) Faisabilité pratique.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 2,
    isActive: true,
  },

  // --- Differentiated Instruction ---
  {
    id: 'primed-di-01',
    profileId: 'primary-school-educator',
    categoryId: 'edu-primary-professional',
    competencyId: 'differentiated-instruction',
    type: 'scale',
    content: {
      es: '¿Con qué frecuencia adapta sus actividades y materiales para atender a estudiantes con diferentes ritmos de aprendizaje dentro de la misma clase?',
      en: 'How often do you adapt your activities and materials to address students with different learning paces within the same class?',
      fr: 'À quelle fréquence adaptez-vous vos activités et matériels pour répondre aux élèves ayant différents rythmes d\'apprentissage dans la même classe ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nunca', en: 'Never', fr: 'Jamais' },
      max: { es: 'Siempre, en cada clase', en: 'Always, in every class', fr: 'Toujours, dans chaque cours' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 3,
    isActive: true,
  },

  // --- Student Assessment ---
  {
    id: 'primed-sa-01',
    profileId: 'primary-school-educator',
    categoryId: 'edu-primary-professional',
    competencyId: 'student-assessment',
    type: 'multiple-choice',
    content: {
      es: 'Un alumno de 2.° grado obtiene calificaciones bajas en los exámenes escritos, pero demuestra comprensión excelente en las participaciones orales y los proyectos. ¿Cuál es la mejor estrategia de evaluación?',
      en: 'A 2nd-grade student gets low scores on written exams but demonstrates excellent comprehension in oral participation and projects. What is the best assessment strategy?',
      fr: 'Un élève de 2e année obtient de mauvaises notes aux examens écrits mais démontre une excellente compréhension lors des participations orales et des projets. Quelle est la meilleure stratégie d\'évaluation ?',
    },
    options: [
      { id: 'a', text: { es: 'Continuar evaluando solo con exámenes escritos porque es el formato estándar', en: 'Continue assessing only with written exams because it is the standard format', fr: 'Continuer à évaluer uniquement avec des examens écrits car c\'est le format standard' }, value: 5 },
      { id: 'b', text: { es: 'Diversificar los instrumentos de evaluación incluyendo rúbricas de participación, portafolios y evaluación oral', en: 'Diversify assessment instruments including participation rubrics, portfolios, and oral evaluation', fr: 'Diversifier les instruments d\'évaluation en incluant des grilles de participation, des portfolios et une évaluation orale' }, value: 100 },
      { id: 'c', text: { es: 'Bajar el nivel de dificultad de los exámenes escritos', en: 'Lower the difficulty level of written exams', fr: 'Abaisser le niveau de difficulté des examens écrits' }, value: 20 },
      { id: 'd', text: { es: 'Enviarlo a evaluación psicopedagógica porque probablemente tiene un problema de aprendizaje', en: 'Send them for psychoeducational evaluation because they probably have a learning disability', fr: 'L\'envoyer en évaluation psychopédagogique car il a probablement un trouble d\'apprentissage' }, value: 30 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },

  // --- Literacy & Numeracy ---
  {
    id: 'primed-ln-01',
    profileId: 'primary-school-educator',
    categoryId: 'edu-primary-professional',
    competencyId: 'literacy-numeracy',
    type: 'open-text',
    content: {
      es: 'Tiene un grupo de 1.° grado con 30 alumnos. Al iniciar el ciclo escolar, detecta que 8 alumnos aún no reconocen todas las letras del abecedario, 15 están en proceso de lectoescritura inicial y 7 ya leen de manera fluida.\n\nDescriba su plan de trabajo para las primeras 6 semanas que atienda los tres niveles de manera simultánea.',
      en: 'You have a 1st-grade class of 30 students. At the start of the school year, you find that 8 students do not yet recognize all alphabet letters, 15 are in the initial reading-writing process, and 7 already read fluently.\n\nDescribe your work plan for the first 6 weeks that addresses all three levels simultaneously.',
      fr: 'Vous avez une classe de 1re année de 30 élèves. Au début de l\'année scolaire, vous constatez que 8 élèves ne reconnaissent pas encore toutes les lettres de l\'alphabet, 15 sont en processus initial de lecture-écriture et 7 lisent déjà couramment.\n\nDécrivez votre plan de travail pour les 6 premières semaines qui aborde les trois niveaux simultanément.',
    },
    rubric: {
      es: 'Evaluar: (1) Diagnóstico inicial claro, (2) Agrupamiento flexible por niveles, (3) Estrategias diferenciadas para cada nivel, (4) Uso de material concreto y lúdico, (5) Indicadores de avance, (6) Participación de familias en el proceso.',
      en: 'Evaluate: (1) Clear initial diagnosis, (2) Flexible grouping by levels, (3) Differentiated strategies for each level, (4) Use of concrete and playful materials, (5) Progress indicators, (6) Family involvement in the process.',
      fr: 'Évaluer : (1) Diagnostic initial clair, (2) Regroupement flexible par niveaux, (3) Stratégies différenciées pour chaque niveau, (4) Utilisation de matériel concret et ludique, (5) Indicateurs de progrès, (6) Participation des familles au processus.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 5,
    isActive: true,
  },
  {
    id: 'primed-ln-02',
    profileId: 'primary-school-educator',
    categoryId: 'edu-primary-professional',
    competencyId: 'literacy-numeracy',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál es la estrategia más efectiva para enseñar resolución de problemas matemáticos a estudiantes de 3.° grado?',
      en: 'What is the most effective strategy for teaching mathematical problem-solving to 3rd graders?',
      fr: 'Quelle est la stratégie la plus efficace pour enseigner la résolution de problèmes mathématiques aux élèves de 3e année ?',
    },
    options: [
      { id: 'a', text: { es: 'Memorizar fórmulas y practicar con ejercicios repetitivos', en: 'Memorize formulas and practice with repetitive exercises', fr: 'Mémoriser des formules et pratiquer avec des exercices répétitifs' }, value: 10 },
      { id: 'b', text: { es: 'Presentar problemas contextualizados de la vida cotidiana y guiar el razonamiento con material concreto', en: 'Present contextualized real-life problems and guide reasoning with concrete materials', fr: 'Présenter des problèmes contextualisés de la vie quotidienne et guider le raisonnement avec du matériel concret' }, value: 100 },
      { id: 'c', text: { es: 'Resolver los problemas en el pizarrón y pedir que copien el procedimiento', en: 'Solve the problems on the board and ask them to copy the procedure', fr: 'Résoudre les problèmes au tableau et demander de copier la procédure' }, value: 15 },
      { id: 'd', text: { es: 'Usar solo aplicaciones digitales de matemáticas', en: 'Use only digital math applications', fr: 'Utiliser uniquement des applications numériques de mathématiques' }, value: 25 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 6,
    isActive: true,
  },
];

// ============================================================================
// SOFT SKILLS (edu-primary-soft-skills)
// Competencies: classroom-management, parent-teacher-communication, student-wellbeing
// ============================================================================

export const primEdSoftSkillsQuestions: Question[] = [
  // --- Classroom Management ---
  {
    id: 'primed-cm-01',
    profileId: 'primary-school-educator',
    categoryId: 'edu-primary-soft-skills',
    competencyId: 'classroom-management',
    type: 'scenario',
    content: {
      es: 'Es lunes por la mañana en su aula de 5.° grado. Durante una actividad en equipos, dos estudiantes comienzan a discutir acaloradamente, un tercer alumno se pone a llorar porque no quiere trabajar con su equipo, y otros cuatro aprovechan la distracción para jugar con sus celulares.\n\n¿Cómo maneja esta situación de manera inmediata y qué acciones preventivas tomaría para evitar que se repita?',
      en: 'It is Monday morning in your 5th-grade classroom. During a team activity, two students begin arguing heatedly, a third student starts crying because they don\'t want to work with their team, and four others take advantage of the distraction to play on their phones.\n\nHow do you handle this situation immediately and what preventive actions would you take to avoid a recurrence?',
      fr: 'C\'est lundi matin dans votre classe de 5e année. Pendant une activité en équipe, deux élèves commencent à se disputer vivement, un troisième se met à pleurer car il ne veut pas travailler avec son équipe, et quatre autres profitent de la distraction pour jouer sur leurs téléphones.\n\nComment gérez-vous cette situation immédiatement et quelles actions préventives prendriez-vous pour éviter que cela ne se reproduise ?',
    },
    rubric: {
      es: 'Evaluar: (1) Priorización de intervenciones, (2) Manejo emocional del conflicto, (3) Reglas claras sobre dispositivos, (4) Estrategias de prevención (acuerdos de convivencia, roles de equipo), (5) Seguimiento posterior con los involucrados, (6) Tono respetuoso y firme.',
      en: 'Evaluate: (1) Prioritization of interventions, (2) Emotional conflict management, (3) Clear rules about devices, (4) Prevention strategies (coexistence agreements, team roles), (5) Follow-up with those involved, (6) Respectful yet firm tone.',
      fr: 'Évaluer : (1) Priorisation des interventions, (2) Gestion émotionnelle du conflit, (3) Règles claires sur les appareils, (4) Stratégies de prévention (accords de coexistence, rôles d\'équipe), (5) Suivi avec les personnes impliquées, (6) Ton respectueux mais ferme.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 1,
    isActive: true,
  },
  {
    id: 'primed-cm-02',
    profileId: 'primary-school-educator',
    categoryId: 'edu-primary-soft-skills',
    competencyId: 'classroom-management',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál es la estrategia más efectiva para establecer normas de convivencia al inicio del ciclo escolar?',
      en: 'What is the most effective strategy for establishing classroom norms at the beginning of the school year?',
      fr: 'Quelle est la stratégie la plus efficace pour établir les normes de coexistence au début de l\'année scolaire ?',
    },
    options: [
      { id: 'a', text: { es: 'El docente impone las reglas y las publica en el salón', en: 'The teacher imposes the rules and posts them in the classroom', fr: 'L\'enseignant impose les règles et les affiche dans la salle' }, value: 15 },
      { id: 'b', text: { es: 'Se construyen de manera participativa con los alumnos, se firman como acuerdo colectivo y se revisan periódicamente', en: 'They are built participatively with students, signed as a collective agreement, and reviewed periodically', fr: 'Elles sont construites de manière participative avec les élèves, signées comme accord collectif et révisées périodiquement' }, value: 100 },
      { id: 'c', text: { es: 'No se establecen reglas fijas para fomentar la libertad del alumno', en: 'No fixed rules are established to encourage student freedom', fr: 'Aucune règle fixe n\'est établie pour encourager la liberté de l\'élève' }, value: 5 },
      { id: 'd', text: { es: 'Se envían las reglas por escrito a los padres de familia para que las refuercen en casa', en: 'Rules are sent in writing to parents so they can reinforce them at home', fr: 'Les règles sont envoyées par écrit aux parents pour qu\'ils les renforcent à la maison' }, value: 35 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },

  // --- Parent-Teacher Communication ---
  {
    id: 'primed-ptc-01',
    profileId: 'primary-school-educator',
    categoryId: 'edu-primary-soft-skills',
    competencyId: 'parent-teacher-communication',
    type: 'scenario',
    content: {
      es: 'Un padre de familia llega muy molesto a la hora de la salida porque su hijo le dijo que usted lo humilló frente a la clase. Usted recuerda que le llamó la atención de manera respetuosa por interrumpir repetidamente. Hay otros padres de familia observando la situación.\n\nDescriba paso a paso cómo manejaría esta confrontación.',
      en: 'An angry parent arrives at dismissal time because their child told them you humiliated them in front of the class. You recall that you addressed the child respectfully for repeatedly interrupting. Other parents are watching the situation.\n\nDescribe step by step how you would handle this confrontation.',
      fr: 'Un parent d\'élève arrive très en colère à la sortie des classes car son enfant lui a dit que vous l\'aviez humilié devant la classe. Vous vous souvenez que vous lui avez fait une remarque respectueuse pour avoir interrompu à plusieurs reprises. D\'autres parents observent la situation.\n\nDécrivez étape par étape comment vous géreriez cette confrontation.',
    },
    rubric: {
      es: 'Evaluar: (1) Control emocional del docente, (2) Escucha activa del padre, (3) Invitación a un espacio privado para dialogar, (4) Presentación objetiva de los hechos, (5) Búsqueda de solución conjunta, (6) Compromiso de seguimiento.',
      en: 'Evaluate: (1) Teacher\'s emotional control, (2) Active listening to the parent, (3) Invitation to a private space for dialogue, (4) Objective presentation of facts, (5) Joint solution seeking, (6) Follow-up commitment.',
      fr: 'Évaluer : (1) Contrôle émotionnel de l\'enseignant, (2) Écoute active du parent, (3) Invitation dans un espace privé pour dialoguer, (4) Présentation objective des faits, (5) Recherche de solution conjointe, (6) Engagement de suivi.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },

  // --- Student Wellbeing ---
  {
    id: 'primed-sw-01',
    profileId: 'primary-school-educator',
    categoryId: 'edu-primary-soft-skills',
    competencyId: 'student-wellbeing',
    type: 'multiple-choice',
    content: {
      es: 'Nota que un alumno de 4.° grado que solía ser participativo ahora está callado, se aísla en el recreo y ha bajado su rendimiento en las últimas tres semanas. ¿Cuál es la acción más adecuada?',
      en: 'You notice a 4th-grade student who used to be participative is now quiet, isolates during recess, and has declined in performance over the last three weeks. What is the most appropriate action?',
      fr: 'Vous remarquez qu\'un élève de 4e année qui était habituellement participatif est maintenant silencieux, s\'isole pendant la récréation et a baissé son rendement au cours des trois dernières semaines. Quelle est l\'action la plus appropriée ?',
    },
    options: [
      { id: 'a', text: { es: 'Esperar a ver si mejora por sí solo, probablemente es una fase', en: 'Wait to see if they improve on their own, it is probably a phase', fr: 'Attendre pour voir s\'il s\'améliore tout seul, c\'est probablement une phase' }, value: 5 },
      { id: 'b', text: { es: 'Hablar con el alumno en un espacio seguro, contactar a la familia y referir al departamento de orientación si es necesario', en: 'Talk to the student in a safe space, contact the family, and refer to the counseling department if needed', fr: 'Parler à l\'élève dans un espace sûr, contacter la famille et référer au département d\'orientation si nécessaire' }, value: 100 },
      { id: 'c', text: { es: 'Llamarle la atención frente al grupo para motivarlo a participar', en: 'Call them out in front of the group to motivate them to participate', fr: 'L\'interpeller devant le groupe pour le motiver à participer' }, value: 0 },
      { id: 'd', text: { es: 'Enviar una nota a los padres indicando el bajo rendimiento', en: 'Send a note to the parents indicating the low performance', fr: 'Envoyer une note aux parents indiquant le faible rendement' }, value: 30 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },
  {
    id: 'primed-sw-02',
    profileId: 'primary-school-educator',
    categoryId: 'edu-primary-soft-skills',
    competencyId: 'student-wellbeing',
    type: 'scale',
    content: {
      es: '¿Con qué frecuencia incorpora actividades de educación socioemocional (respiración, identificación de emociones, resolución pacífica de conflictos) en su rutina diaria de clase?',
      en: 'How often do you incorporate socio-emotional education activities (breathing, emotion identification, peaceful conflict resolution) into your daily class routine?',
      fr: 'À quelle fréquence intégrez-vous des activités d\'éducation socio-émotionnelle (respiration, identification des émotions, résolution pacifique de conflits) dans votre routine quotidienne de classe ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nunca', en: 'Never', fr: 'Jamais' },
      max: { es: 'Diariamente', en: 'Daily', fr: 'Quotidiennement' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
];

// ============================================================================
// READINESS FOR CHANGE (edu-primary-readiness)
// Competencies: edu-technology, methodological-adaptation, continuous-professional-dev
// ============================================================================

export const primEdReadinessQuestions: Question[] = [
  // --- Educational Technology ---
  {
    id: 'primed-et-01',
    profileId: 'primary-school-educator',
    categoryId: 'edu-primary-readiness',
    competencyId: 'edu-technology',
    type: 'multiple-choice',
    content: {
      es: 'Su escuela adquiere tabletas para todos los alumnos de 5.° grado. ¿Cuál es la mejor forma de integrarlas al proceso de aprendizaje?',
      en: 'Your school acquires tablets for all 5th-grade students. What is the best way to integrate them into the learning process?',
      fr: 'Votre école acquiert des tablettes pour tous les élèves de 5e année. Quelle est la meilleure façon de les intégrer au processus d\'apprentissage ?',
    },
    options: [
      { id: 'a', text: { es: 'Dejar que los alumnos las usen libremente como recompensa por buen comportamiento', en: 'Let students use them freely as a reward for good behavior', fr: 'Laisser les élèves les utiliser librement comme récompense pour bonne conduite' }, value: 10 },
      { id: 'b', text: { es: 'Diseñar actividades pedagógicas específicas que aprovechen las tabletas como herramienta para alcanzar los aprendizajes esperados', en: 'Design specific pedagogical activities that leverage tablets as a tool to achieve expected learning outcomes', fr: 'Concevoir des activités pédagogiques spécifiques qui tirent parti des tablettes comme outil pour atteindre les résultats d\'apprentissage attendus' }, value: 100 },
      { id: 'c', text: { es: 'Usarlas únicamente para que los alumnos busquen información en internet', en: 'Use them only for students to search for information on the internet', fr: 'Les utiliser uniquement pour que les élèves cherchent des informations sur internet' }, value: 25 },
      { id: 'd', text: { es: 'Evitar usarlas porque distraen demasiado a los niños de esas edades', en: 'Avoid using them because they distract children of that age too much', fr: 'Éviter de les utiliser car elles distraient trop les enfants de cet âge' }, value: 5 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'primed-et-02',
    profileId: 'primary-school-educator',
    categoryId: 'edu-primary-readiness',
    competencyId: 'edu-technology',
    type: 'scale',
    content: {
      es: '¿Qué tan cómodo/a se siente utilizando herramientas digitales educativas (Google Classroom, Kahoot, Canva for Education, plataformas de lectura digital) en su práctica docente diaria?',
      en: 'How comfortable do you feel using educational digital tools (Google Classroom, Kahoot, Canva for Education, digital reading platforms) in your daily teaching practice?',
      fr: 'Dans quelle mesure vous sentez-vous à l\'aise avec l\'utilisation d\'outils numériques éducatifs (Google Classroom, Kahoot, Canva for Education, plateformes de lecture numérique) dans votre pratique enseignante quotidienne ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Muy incómodo/a, evito usarlas', en: 'Very uncomfortable, I avoid using them', fr: 'Très mal à l\'aise, je les évite' },
      max: { es: 'Totalmente cómodo/a, las integro de forma natural', en: 'Completely comfortable, I integrate them naturally', fr: 'Tout à fait à l\'aise, je les intègre naturellement' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },

  // --- Methodological Adaptation ---
  {
    id: 'primed-ma-01',
    profileId: 'primary-school-educator',
    categoryId: 'edu-primary-readiness',
    competencyId: 'methodological-adaptation',
    type: 'open-text',
    content: {
      es: 'La nueva reforma educativa de su país exige implementar el Aprendizaje Basado en Proyectos (ABP) como metodología principal en primaria. Usted siempre ha trabajado con el método tradicional expositivo.\n\nDescriba cómo haría la transición al ABP en su aula, incluyendo un ejemplo concreto de un proyecto para el grado que enseña.',
      en: 'Your country\'s new educational reform requires implementing Project-Based Learning (PBL) as the primary methodology in elementary school. You have always worked with the traditional lecture method.\n\nDescribe how you would transition to PBL in your classroom, including a concrete example of a project for the grade you teach.',
      fr: 'La nouvelle réforme éducative de votre pays exige la mise en place de l\'Apprentissage par Projets (APP) comme méthodologie principale en primaire. Vous avez toujours travaillé avec la méthode traditionnelle expositoire.\n\nDécrivez comment vous feriez la transition vers l\'APP dans votre classe, en incluant un exemple concret de projet pour le niveau que vous enseignez.',
    },
    rubric: {
      es: 'Evaluar: (1) Disposición genuina al cambio, (2) Plan de transición gradual y realista, (3) Ejemplo de proyecto con objetivos de aprendizaje claros, (4) Integración de múltiples asignaturas, (5) Evaluación del proyecto, (6) Identificación de desafíos y cómo superarlos.',
      en: 'Evaluate: (1) Genuine willingness to change, (2) Gradual and realistic transition plan, (3) Project example with clear learning objectives, (4) Integration of multiple subjects, (5) Project evaluation, (6) Identification of challenges and how to overcome them.',
      fr: 'Évaluer : (1) Disposition authentique au changement, (2) Plan de transition graduel et réaliste, (3) Exemple de projet avec des objectifs d\'apprentissage clairs, (4) Intégration de multiples matières, (5) Évaluation du projet, (6) Identification des défis et comment les surmonter.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },
  {
    id: 'primed-ma-02',
    profileId: 'primary-school-educator',
    categoryId: 'edu-primary-readiness',
    competencyId: 'methodological-adaptation',
    type: 'multiple-choice',
    content: {
      es: 'Se entera de que una nueva investigación educativa demuestra que la técnica de "aula invertida" mejora significativamente la comprensión lectora en primaria. ¿Cuál es su reacción?',
      en: 'You learn that new educational research shows that the "flipped classroom" technique significantly improves reading comprehension in elementary school. What is your reaction?',
      fr: 'Vous apprenez qu\'une nouvelle recherche éducative montre que la technique de « classe inversée » améliore significativement la compréhension en lecture en primaire. Quelle est votre réaction ?',
    },
    options: [
      { id: 'a', text: { es: 'Lo que funciona no se cambia; mis alumnos aprenden bien con mi método actual', en: 'If it works, don\'t change it; my students learn well with my current method', fr: 'Ce qui fonctionne ne se change pas ; mes élèves apprennent bien avec ma méthode actuelle' }, value: 5 },
      { id: 'b', text: { es: 'Investigo más sobre la técnica, la adapto al contexto de mis alumnos y hago una prueba piloto con un tema específico', en: 'I research the technique further, adapt it to my students\' context, and run a pilot test with a specific topic', fr: 'J\'approfondis mes recherches sur la technique, l\'adapte au contexte de mes élèves et fais un essai pilote avec un sujet spécifique' }, value: 100 },
      { id: 'c', text: { es: 'La implemento de inmediato con todo el grupo sin importar las condiciones', en: 'I implement it immediately with the entire group regardless of conditions', fr: 'Je l\'implémente immédiatement avec tout le groupe sans tenir compte des conditions' }, value: 25 },
      { id: 'd', text: { es: 'Espero a que la dirección de la escuela me obligue a implementarla', en: 'I wait for the school administration to require me to implement it', fr: 'J\'attends que la direction de l\'école m\'oblige à l\'implémenter' }, value: 10 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },

  // --- Continuous Professional Development ---
  {
    id: 'primed-cpd-01',
    profileId: 'primary-school-educator',
    categoryId: 'edu-primary-readiness',
    competencyId: 'continuous-professional-dev',
    type: 'scale',
    content: {
      es: '¿Con qué frecuencia participa voluntariamente en actividades de desarrollo profesional (cursos, talleres, conferencias, comunidades de aprendizaje, lectura de investigación educativa)?',
      en: 'How often do you voluntarily participate in professional development activities (courses, workshops, conferences, learning communities, reading educational research)?',
      fr: 'À quelle fréquence participez-vous volontairement à des activités de développement professionnel (cours, ateliers, conférences, communautés d\'apprentissage, lecture de recherche éducative) ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nunca, solo las obligatorias', en: 'Never, only mandatory ones', fr: 'Jamais, uniquement les obligatoires' },
      max: { es: 'Constantemente, por iniciativa propia', en: 'Constantly, on my own initiative', fr: 'Constamment, de ma propre initiative' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
];
