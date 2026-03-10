import type { Question } from '@/types';

// ============================================================================
// SCHOOL PSYCHOLOGIST QUESTIONS
// ============================================================================

export const spProfessionalQuestions: Question[] = [
  // --- Psychological Assessment ---
  {
    id: 'sp-assess-01',
    profileId: 'school-psychologist',
    categoryId: 'sp-professional',
    competencyId: 'sp-psychological-assessment',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál de las siguientes baterías de evaluación es la más apropiada para medir la capacidad cognitiva general de un estudiante de 8 años con sospecha de discapacidad intelectual?',
      en: 'Which of the following assessment batteries is most appropriate for measuring the general cognitive ability of an 8-year-old student with suspected intellectual disability?',
      fr: 'Laquelle des batteries d\'évaluation suivantes est la plus appropriée pour mesurer la capacité cognitive générale d\'un élève de 8 ans avec suspicion de déficience intellectuelle ?',
    },
    options: [
      { id: 'a', text: { es: 'Un cuestionario de autoinforme de personalidad', en: 'A personality self-report questionnaire', fr: 'Un questionnaire d\'auto-évaluation de la personnalité' }, value: 5 },
      { id: 'b', text: { es: 'La Escala de Inteligencia Wechsler para Niños (WISC-V) complementada con observación conductual y entrevista con padres', en: 'The Wechsler Intelligence Scale for Children (WISC-V) supplemented with behavioral observation and parent interview', fr: 'L\'Échelle d\'Intelligence de Wechsler pour Enfants (WISC-V) complétée par l\'observation comportementale et l\'entretien avec les parents' }, value: 100 },
      { id: 'c', text: { es: 'Únicamente una prueba proyectiva de dibujo', en: 'Only a projective drawing test', fr: 'Uniquement un test projectif de dessin' }, value: 15 },
      { id: 'd', text: { es: 'Una encuesta de satisfacción escolar aplicada al docente', en: 'A school satisfaction survey administered to the teacher', fr: 'Un sondage de satisfaction scolaire administré à l\'enseignant' }, value: 5 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'sp-assess-02',
    profileId: 'school-psychologist',
    categoryId: 'sp-professional',
    competencyId: 'sp-psychological-assessment',
    type: 'scenario',
    content: {
      es: 'Una docente le refiere a un estudiante de 10 años cuyo rendimiento académico ha caído drásticamente en los últimos tres meses. Anteriormente era un alumno sobresaliente. Los padres reportan que no ha habido cambios significativos en el hogar. Describa el proceso de evaluación psicológica que seguiría, incluyendo los instrumentos que seleccionaría, las fuentes de información que consultaría y las hipótesis que exploraría.',
      en: 'A teacher refers a 10-year-old student whose academic performance has dropped dramatically over the past three months. Previously, the student was an outstanding performer. Parents report no significant changes at home. Describe the psychological assessment process you would follow, including the instruments you would select, the information sources you would consult, and the hypotheses you would explore.',
      fr: 'Une enseignante vous réfère un élève de 10 ans dont le rendement scolaire a chuté de façon spectaculaire au cours des trois derniers mois. Auparavant, c\'était un élève excellent. Les parents ne rapportent aucun changement significatif à la maison. Décrivez le processus d\'évaluation psychologique que vous suivriez.',
    },
    rubric: {
      es: 'Evaluar: (1) Enfoque multimodal de evaluación (pruebas formales, observación, entrevistas), (2) Consideración de hipótesis variadas (emocional, cognitiva, social, médica), (3) Selección apropiada de instrumentos, (4) Consulta con múltiples fuentes (docente, padres, estudiante), (5) Consideración de factores contextuales y culturales, (6) Plan de evaluación secuencial y lógico.',
      en: 'Evaluate: (1) Multimodal assessment approach (formal tests, observation, interviews), (2) Consideration of varied hypotheses (emotional, cognitive, social, medical), (3) Appropriate instrument selection, (4) Consultation with multiple sources (teacher, parents, student), (5) Consideration of contextual and cultural factors, (6) Sequential and logical evaluation plan.',
      fr: 'Évaluer : (1) Approche d\'évaluation multimodale (tests formels, observation, entretiens), (2) Considération d\'hypothèses variées (émotionnelle, cognitive, sociale, médicale), (3) Sélection appropriée d\'instruments, (4) Consultation de sources multiples (enseignant, parents, élève), (5) Considération des facteurs contextuels et culturels, (6) Plan d\'évaluation séquentiel et logique.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 2,
    isActive: true,
  },

  // --- Learning Disability Evaluation ---
  {
    id: 'sp-ld-01',
    profileId: 'school-psychologist',
    categoryId: 'sp-professional',
    competencyId: 'sp-learning-disability',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál es la diferencia fundamental entre el modelo de discrepancia aptitud-rendimiento y el modelo de Respuesta a la Intervención (RTI) para la identificación de dificultades de aprendizaje?',
      en: 'What is the fundamental difference between the aptitude-achievement discrepancy model and the Response to Intervention (RTI) model for identifying learning disabilities?',
      fr: 'Quelle est la différence fondamentale entre le modèle d\'écart aptitude-rendement et le modèle de Réponse à l\'Intervention (RTI) pour l\'identification des troubles d\'apprentissage ?',
    },
    options: [
      { id: 'a', text: { es: 'No hay diferencia; ambos modelos utilizan los mismos procedimientos', en: 'There is no difference; both models use the same procedures', fr: 'Il n\'y a pas de différence ; les deux modèles utilisent les mêmes procédures' }, value: 5 },
      { id: 'b', text: { es: 'El modelo de discrepancia identifica la dificultad comparando CI y rendimiento académico, mientras que RTI evalúa la respuesta del estudiante a intervenciones basadas en evidencia de intensidad creciente antes de considerar un diagnóstico', en: 'The discrepancy model identifies the disability by comparing IQ and academic achievement, while RTI evaluates the student\'s response to evidence-based interventions of increasing intensity before considering a diagnosis', fr: 'Le modèle d\'écart identifie la difficulté en comparant le QI et le rendement scolaire, tandis que RTI évalue la réponse de l\'élève aux interventions fondées sur les preuves d\'intensité croissante avant d\'envisager un diagnostic' }, value: 100 },
      { id: 'c', text: { es: 'El modelo de discrepancia solo aplica para adultos y RTI solo para niños', en: 'The discrepancy model only applies to adults and RTI only to children', fr: 'Le modèle d\'écart ne s\'applique qu\'aux adultes et RTI qu\'aux enfants' }, value: 5 },
      { id: 'd', text: { es: 'RTI requiere una evaluación médica obligatoria y el modelo de discrepancia no', en: 'RTI requires a mandatory medical evaluation and the discrepancy model does not', fr: 'RTI nécessite une évaluation médicale obligatoire et le modèle d\'écart non' }, value: 10 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 3,
    isActive: true,
  },
  {
    id: 'sp-ld-02',
    profileId: 'school-psychologist',
    categoryId: 'sp-professional',
    competencyId: 'sp-learning-disability',
    type: 'open-text',
    content: {
      es: 'Un estudiante de 7 años presenta dificultades significativas en la lectura. Su docente reporta que confunde letras similares (b/d, p/q), lee con extrema lentitud y no comprende lo que lee. Describa el proceso de evaluación que seguiría para determinar si el estudiante tiene dislexia, incluyendo los instrumentos específicos que utilizaría y los criterios diagnósticos que aplicaría.',
      en: 'A 7-year-old student presents significant reading difficulties. The teacher reports that the student confuses similar letters (b/d, p/q), reads extremely slowly, and does not comprehend what is read. Describe the evaluation process you would follow to determine if the student has dyslexia, including the specific instruments you would use and the diagnostic criteria you would apply.',
      fr: 'Un élève de 7 ans présente des difficultés significatives en lecture. L\'enseignant rapporte que l\'élève confond des lettres similaires (b/d, p/q), lit extrêmement lentement et ne comprend pas ce qu\'il lit. Décrivez le processus d\'évaluation que vous suivriez pour déterminer si l\'élève a une dyslexie.',
    },
    rubric: {
      es: 'Evaluar: (1) Evaluación cognitiva para descartar discapacidad intelectual, (2) Evaluación específica de lectura (conciencia fonológica, decodificación, fluidez, comprensión), (3) Uso de instrumentos estandarizados apropiados, (4) Descarte de factores sensoriales (visión, audición), (5) Consideración del historial de intervención previa, (6) Criterios de exclusión, (7) Integración de datos de múltiples fuentes.',
      en: 'Evaluate: (1) Cognitive assessment to rule out intellectual disability, (2) Specific reading evaluation (phonological awareness, decoding, fluency, comprehension), (3) Use of appropriate standardized instruments, (4) Ruling out sensory factors (vision, hearing), (5) Consideration of prior intervention history, (6) Exclusion criteria, (7) Integration of data from multiple sources.',
      fr: 'Évaluer : (1) Évaluation cognitive pour écarter la déficience intellectuelle, (2) Évaluation spécifique de la lecture (conscience phonologique, décodage, fluidité, compréhension), (3) Utilisation d\'instruments standardisés appropriés, (4) Exclusion des facteurs sensoriels (vision, audition), (5) Considération de l\'historique d\'intervention préalable, (6) Critères d\'exclusion, (7) Intégration de données provenant de sources multiples.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 4,
    isActive: true,
  },

  // --- Behavioral Intervention ---
  {
    id: 'sp-bip-01',
    profileId: 'school-psychologist',
    categoryId: 'sp-professional',
    competencyId: 'sp-behavioral-intervention',
    type: 'scenario',
    content: {
      es: 'Un estudiante de 12 años presenta conductas disruptivas frecuentes en el aula: se levanta de su asiento, interrumpe a la docente, y a veces empuja a sus compañeros. El análisis funcional de la conducta sugiere que las conductas son mantenidas por atención de pares y escape de tareas académicas difíciles. Diseñe un Plan de Intervención Conductual (BIP) completo para este estudiante.',
      en: 'A 12-year-old student presents frequent disruptive behaviors in the classroom: getting out of their seat, interrupting the teacher, and sometimes pushing peers. Functional behavior analysis suggests the behaviors are maintained by peer attention and escape from difficult academic tasks. Design a complete Behavioral Intervention Plan (BIP) for this student.',
      fr: 'Un élève de 12 ans présente des comportements perturbateurs fréquents en classe : se lever de son siège, interrompre l\'enseignante et parfois pousser ses camarades. L\'analyse fonctionnelle du comportement suggère que les comportements sont maintenus par l\'attention des pairs et l\'évitement des tâches académiques difficiles. Concevez un Plan d\'Intervention Comportementale (PIC) complet pour cet élève.',
    },
    rubric: {
      es: 'Evaluar: (1) Identificación clara de conductas objetivo, (2) Estrategias de prevención (antecedentes), (3) Enseñanza de conductas de reemplazo funcionalmente equivalentes, (4) Estrategias de refuerzo positivo, (5) Procedimientos de respuesta ante conducta problemática, (6) Adaptaciones académicas, (7) Métricas de monitoreo de progreso, (8) Plan de generalización.',
      en: 'Evaluate: (1) Clear identification of target behaviors, (2) Prevention strategies (antecedents), (3) Teaching functionally equivalent replacement behaviors, (4) Positive reinforcement strategies, (5) Response procedures for problem behavior, (6) Academic accommodations, (7) Progress monitoring metrics, (8) Generalization plan.',
      fr: 'Évaluer : (1) Identification claire des comportements cibles, (2) Stratégies de prévention (antécédents), (3) Enseignement de comportements de remplacement fonctionnellement équivalents, (4) Stratégies de renforcement positif, (5) Procédures de réponse au comportement problématique, (6) Adaptations académiques, (7) Métriques de suivi des progrès, (8) Plan de généralisation.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 5,
    isActive: true,
  },

  // --- Crisis Intervention ---
  {
    id: 'sp-crisis-01',
    profileId: 'school-psychologist',
    categoryId: 'sp-professional',
    competencyId: 'sp-crisis-intervention',
    type: 'multiple-choice',
    content: {
      es: 'Un estudiante de 15 años le dice en privado: "Ya no quiero estar aquí. He pensado en cómo hacerlo y tengo acceso a los medicamentos de mi mamá." ¿Cuál es la primera acción que debe tomar?',
      en: 'A 15-year-old student tells you privately: "I don\'t want to be here anymore. I\'ve thought about how to do it and I have access to my mom\'s medications." What is the first action you should take?',
      fr: 'Un élève de 15 ans vous dit en privé : « Je ne veux plus être ici. J\'ai réfléchi à comment le faire et j\'ai accès aux médicaments de ma mère. » Quelle est la première action que vous devez prendre ?',
    },
    options: [
      { id: 'a', text: { es: 'Derivar al estudiante a un consejero externo y esperar a que lo atiendan', en: 'Refer the student to an external counselor and wait for them to be seen', fr: 'Référer l\'élève à un conseiller externe et attendre' }, value: 5 },
      { id: 'b', text: { es: 'No dejar solo al estudiante, realizar una evaluación de riesgo suicida inmediata, contactar a los padres y asegurar que el acceso a los medios letales sea restringido', en: 'Do not leave the student alone, conduct an immediate suicide risk assessment, contact parents, and ensure access to lethal means is restricted', fr: 'Ne pas laisser l\'élève seul, effectuer une évaluation immédiate du risque suicidaire, contacter les parents et s\'assurer que l\'accès aux moyens létaux est restreint' }, value: 100 },
      { id: 'c', text: { es: 'Prometer al estudiante que guardará su secreto para mantener la confianza terapéutica', en: 'Promise the student you will keep their secret to maintain therapeutic trust', fr: 'Promettre à l\'élève que vous garderez son secret pour maintenir la confiance thérapeutique' }, value: 0 },
      { id: 'd', text: { es: 'Documentar el incidente en el expediente y seguir con las actividades normales del día', en: 'Document the incident in the file and continue with regular activities for the day', fr: 'Documenter l\'incident dans le dossier et poursuivre les activités normales de la journée' }, value: 5 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 6,
    isActive: true,
  },
  {
    id: 'sp-crisis-02',
    profileId: 'school-psychologist',
    categoryId: 'sp-professional',
    competencyId: 'sp-crisis-intervention',
    type: 'scenario',
    content: {
      es: 'Un docente de la escuela falleció inesperadamente durante el fin de semana. El lunes por la mañana, los estudiantes comienzan a llegar y se enteran de la noticia. Varios estudiantes están llorando, algunos están en estado de shock y otros no saben cómo reaccionar. Usted es el psicólogo escolar. Describa el protocolo de intervención en crisis que implementaría durante las primeras 72 horas.',
      en: 'A teacher at the school passed away unexpectedly over the weekend. Monday morning, students begin arriving and learn the news. Several students are crying, some are in shock, and others don\'t know how to react. You are the school psychologist. Describe the crisis intervention protocol you would implement during the first 72 hours.',
      fr: 'Un enseignant de l\'école est décédé de façon inattendue pendant le week-end. Le lundi matin, les élèves commencent à arriver et apprennent la nouvelle. Plusieurs élèves pleurent, certains sont en état de choc et d\'autres ne savent pas comment réagir. Vous êtes le psychologue scolaire. Décrivez le protocole d\'intervention de crise que vous mettriez en œuvre pendant les 72 premières heures.',
    },
    rubric: {
      es: 'Evaluar: (1) Activación del equipo de crisis escolar, (2) Comunicación oficial a la comunidad escolar, (3) Espacios seguros para expresión emocional, (4) Identificación de estudiantes de alto riesgo, (5) Recursos de apoyo psicológico para personal docente, (6) Comunicación con las familias, (7) Seguimiento a mediano plazo, (8) Consideración de aspectos culturales del duelo.',
      en: 'Evaluate: (1) Activation of school crisis team, (2) Official communication to school community, (3) Safe spaces for emotional expression, (4) Identification of high-risk students, (5) Psychological support resources for teaching staff, (6) Communication with families, (7) Medium-term follow-up, (8) Consideration of cultural aspects of grief.',
      fr: 'Évaluer : (1) Activation de l\'équipe de crise scolaire, (2) Communication officielle à la communauté scolaire, (3) Espaces sûrs pour l\'expression émotionnelle, (4) Identification des élèves à haut risque, (5) Ressources de soutien psychologique pour le personnel enseignant, (6) Communication avec les familles, (7) Suivi à moyen terme, (8) Considération des aspects culturels du deuil.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 7,
    isActive: true,
  },

  // --- Special Education Evaluation ---
  {
    id: 'sp-sped-01',
    profileId: 'school-psychologist',
    categoryId: 'sp-professional',
    competencyId: 'sp-special-education',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál de los siguientes componentes es esencial en un Programa Educativo Individualizado (PEI/IEP) para un estudiante con discapacidad?',
      en: 'Which of the following components is essential in an Individualized Education Program (IEP) for a student with a disability?',
      fr: 'Lequel des composants suivants est essentiel dans un Programme Éducatif Individualisé (PEI) pour un élève en situation de handicap ?',
    },
    options: [
      { id: 'a', text: { es: 'Una lista de todos los estudiantes del aula que podrían necesitar apoyo', en: 'A list of all classroom students who might need support', fr: 'Une liste de tous les élèves de la classe qui pourraient avoir besoin de soutien' }, value: 5 },
      { id: 'b', text: { es: 'Metas anuales medibles, niveles actuales de rendimiento, servicios y adaptaciones específicas, y criterios de evaluación de progreso', en: 'Measurable annual goals, current performance levels, specific services and accommodations, and progress evaluation criteria', fr: 'Objectifs annuels mesurables, niveaux de rendement actuels, services et adaptations spécifiques, et critères d\'évaluation des progrès' }, value: 100 },
      { id: 'c', text: { es: 'Únicamente un diagnóstico médico firmado por un neurólogo', en: 'Only a medical diagnosis signed by a neurologist', fr: 'Uniquement un diagnostic médical signé par un neurologue' }, value: 10 },
      { id: 'd', text: { es: 'Una carta de los padres solicitando que el estudiante sea eximido de todas las evaluaciones', en: 'A letter from parents requesting the student be exempted from all assessments', fr: 'Une lettre des parents demandant que l\'élève soit exempté de toutes les évaluations' }, value: 5 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 8,
    isActive: true,
  },
];

export const spSoftSkillsQuestions: Question[] = [
  // --- Empathic Communication ---
  { id: 'sp-comm-01', profileId: 'school-psychologist', categoryId: 'sp-soft-skills', competencyId: 'sp-empathic-communication', type: 'scenario', content: { es: 'Los padres de un estudiante de 9 años están furiosos porque usted recomendó una evaluación de educación especial. El padre dice: "Mi hijo no está loco, ustedes son los que no saben enseñar. No voy a permitir que lo etiqueten." Describa cómo manejaría esta conversación para lograr la colaboración de los padres sin invalidar sus sentimientos.', en: 'The parents of a 9-year-old student are furious because you recommended a special education evaluation. The father says: "My child isn\'t crazy, you\'re the ones who don\'t know how to teach. I won\'t let you label him." Describe how you would handle this conversation to gain parental collaboration without invalidating their feelings.', fr: 'Les parents d\'un élève de 9 ans sont furieux parce que vous avez recommandé une évaluation d\'éducation spécialisée. Le père dit : « Mon enfant n\'est pas fou, c\'est vous qui ne savez pas enseigner. » Décrivez comment vous géreriez cette conversation pour obtenir la collaboration des parents sans invalider leurs sentiments.' }, rubric: { es: 'Evaluar: (1) Validación emocional de los sentimientos de los padres, (2) Lenguaje no estigmatizante, (3) Explicación clara del propósito de la evaluación, (4) Escucha activa y empatía, (5) Presentación de beneficios concretos para el estudiante, (6) Respeto por la autonomía de los padres, (7) Ofrecimiento de información adicional y tiempo para decidir.', en: 'Evaluate: (1) Emotional validation of parents\' feelings, (2) Non-stigmatizing language, (3) Clear explanation of evaluation purpose, (4) Active listening and empathy, (5) Presentation of concrete benefits for the student, (6) Respect for parental autonomy, (7) Offering additional information and time to decide.', fr: 'Évaluer : (1) Validation émotionnelle des sentiments des parents, (2) Langage non stigmatisant, (3) Explication claire de l\'objectif, (4) Écoute active et empathie, (5) Présentation des bénéfices concrets, (6) Respect de l\'autonomie des parents, (7) Offre d\'informations supplémentaires et de temps pour décider.' }, maxScore: 100, aiEvaluated: true, order: 1, isActive: true },
  { id: 'sp-comm-02', profileId: 'school-psychologist', categoryId: 'sp-soft-skills', competencyId: 'sp-empathic-communication', type: 'scale', content: { es: '¿Con qué frecuencia adapta su estilo de comunicación según la edad, cultura y nivel educativo de su interlocutor (estudiante, padre, docente, administrador)?', en: 'How often do you adapt your communication style based on the age, culture, and educational level of your interlocutor (student, parent, teacher, administrator)?', fr: 'À quelle fréquence adaptez-vous votre style de communication en fonction de l\'âge, de la culture et du niveau éducatif de votre interlocuteur (élève, parent, enseignant, administrateur) ?' }, scaleMin: 1, scaleMax: 5, scaleLabels: { min: { es: 'Nunca', en: 'Never', fr: 'Jamais' }, max: { es: 'Siempre', en: 'Always', fr: 'Toujours' } }, maxScore: 100, aiEvaluated: false, order: 2, isActive: true },

  // --- Multidisciplinary Collaboration ---
  { id: 'sp-collab-01', profileId: 'school-psychologist', categoryId: 'sp-soft-skills', competencyId: 'sp-collaboration', type: 'scenario', content: { es: 'Un docente de tercer grado le pide ayuda con un estudiante que presenta dificultades de atención y bajo rendimiento académico. El docente ya ha probado sentarlo al frente y darle más tiempo en los exámenes, pero sin mejora. Describa cómo trabajaría colaborativamente con el docente, los padres y posiblemente otros profesionales para desarrollar un plan de apoyo integral.', en: 'A third-grade teacher asks for your help with a student who has attention difficulties and low academic performance. The teacher has already tried seating the student at the front and giving extra time on tests, but without improvement. Describe how you would work collaboratively with the teacher, parents, and possibly other professionals to develop a comprehensive support plan.', fr: 'Un enseignant de CE2 vous demande de l\'aide pour un élève qui présente des difficultés d\'attention et un faible rendement scolaire. L\'enseignant a déjà essayé de le placer au premier rang et de lui donner plus de temps pour les examens, sans amélioration. Décrivez comment vous travailleriez en collaboration pour développer un plan de soutien global.' }, rubric: { es: 'Evaluar: (1) Recopilación de datos de múltiples fuentes, (2) Reunión de equipo multidisciplinario, (3) Rol consultivo con el docente, (4) Estrategias de intervención escalonadas, (5) Inclusión de los padres como socios, (6) Posible referencia a evaluación médica si se sospecha TDAH, (7) Plan de seguimiento y monitoreo conjunto.', en: 'Evaluate: (1) Data collection from multiple sources, (2) Multidisciplinary team meeting, (3) Consultative role with teacher, (4) Tiered intervention strategies, (5) Inclusion of parents as partners, (6) Possible referral for medical evaluation if ADHD suspected, (7) Joint follow-up and monitoring plan.', fr: 'Évaluer : (1) Collecte de données de sources multiples, (2) Réunion d\'équipe multidisciplinaire, (3) Rôle consultatif avec l\'enseignant, (4) Stratégies d\'intervention échelonnées, (5) Inclusion des parents comme partenaires, (6) Possible référence pour évaluation médicale, (7) Plan de suivi et de surveillance conjoint.' }, maxScore: 100, aiEvaluated: true, order: 3, isActive: true },
  { id: 'sp-collab-02', profileId: 'school-psychologist', categoryId: 'sp-soft-skills', competencyId: 'sp-collaboration', type: 'scale', content: { es: '¿Con qué frecuencia participa activamente en reuniones de equipo multidisciplinario (docentes, terapeutas, trabajadores sociales) para discutir el progreso de estudiantes con necesidades especiales?', en: 'How often do you actively participate in multidisciplinary team meetings (teachers, therapists, social workers) to discuss the progress of students with special needs?', fr: 'À quelle fréquence participez-vous activement aux réunions d\'équipe multidisciplinaire pour discuter des progrès des élèves ayant des besoins spéciaux ?' }, scaleMin: 1, scaleMax: 5, scaleLabels: { min: { es: 'Nunca', en: 'Never', fr: 'Jamais' }, max: { es: 'Siempre', en: 'Always', fr: 'Toujours' } }, maxScore: 100, aiEvaluated: false, order: 4, isActive: true },

  // --- Counseling ---
  { id: 'sp-counsel-01', profileId: 'school-psychologist', categoryId: 'sp-soft-skills', competencyId: 'sp-counseling', type: 'scenario', content: { es: 'Un grupo de 5 estudiantes de sexto grado ha sido referido por conductas de acoso escolar (bullying) hacia un compañero. La dirección le pide que facilite un grupo de consejería para los agresores. Describa su enfoque terapéutico grupal, las técnicas que utilizaría y cómo mediría la efectividad de la intervención.', en: 'A group of 5 sixth-grade students have been referred for bullying behavior toward a peer. The administration asks you to facilitate a counseling group for the aggressors. Describe your group therapeutic approach, the techniques you would use, and how you would measure the effectiveness of the intervention.', fr: 'Un groupe de 5 élèves de sixième a été référé pour des comportements de harcèlement envers un camarade. La direction vous demande de faciliter un groupe de conseil pour les agresseurs. Décrivez votre approche thérapeutique de groupe, les techniques que vous utiliseriez et comment vous mesureriez l\'efficacité de l\'intervention.' }, rubric: { es: 'Evaluar: (1) Marco teórico apropiado (cognitivo-conductual, restaurativo), (2) Estructura de sesiones grupales, (3) Desarrollo de empatía y conciencia del impacto, (4) Técnicas de responsabilización sin humillación, (5) Práctica de habilidades sociales alternativas, (6) Indicadores medibles de cambio, (7) Coordinación con docentes para monitoreo, (8) Seguimiento con la víctima.', en: 'Evaluate: (1) Appropriate theoretical framework (cognitive-behavioral, restorative), (2) Group session structure, (3) Development of empathy and impact awareness, (4) Accountability techniques without humiliation, (5) Practice of alternative social skills, (6) Measurable change indicators, (7) Coordination with teachers for monitoring, (8) Follow-up with the victim.', fr: 'Évaluer : (1) Cadre théorique approprié (cognitivo-comportemental, restauratif), (2) Structure des séances de groupe, (3) Développement de l\'empathie, (4) Techniques de responsabilisation sans humiliation, (5) Pratique de compétences sociales alternatives, (6) Indicateurs mesurables de changement, (7) Coordination avec les enseignants, (8) Suivi avec la victime.' }, maxScore: 100, aiEvaluated: true, order: 5, isActive: true },
  { id: 'sp-counsel-02', profileId: 'school-psychologist', categoryId: 'sp-soft-skills', competencyId: 'sp-counseling', type: 'open-text', content: { es: 'Describa las principales diferencias en su enfoque de consejería cuando trabaja individualmente con un niño de 6 años versus un adolescente de 16 años. ¿Cómo adapta sus técnicas, el entorno físico y la duración de las sesiones?', en: 'Describe the main differences in your counseling approach when working individually with a 6-year-old child versus a 16-year-old adolescent. How do you adapt your techniques, the physical environment, and session duration?', fr: 'Décrivez les principales différences dans votre approche de conseil lorsque vous travaillez individuellement avec un enfant de 6 ans par rapport à un adolescent de 16 ans. Comment adaptez-vous vos techniques, l\'environnement physique et la durée des séances ?' }, rubric: { es: 'Evaluar: (1) Uso de juego terapéutico y medios expresivos con niños pequeños, (2) Enfoque más verbal y cognitivo con adolescentes, (3) Adaptación de la duración de sesión según edad, (4) Consideración del desarrollo cognitivo y emocional, (5) Diferencias en confidencialidad y consentimiento, (6) Adaptación del espacio físico, (7) Rol de los padres en cada caso.', en: 'Evaluate: (1) Use of play therapy and expressive media with young children, (2) More verbal and cognitive approach with adolescents, (3) Adaptation of session duration by age, (4) Consideration of cognitive and emotional development, (5) Differences in confidentiality and consent, (6) Adaptation of physical space, (7) Role of parents in each case.', fr: 'Évaluer : (1) Utilisation de la thérapie par le jeu et des médias expressifs avec les jeunes enfants, (2) Approche plus verbale et cognitive avec les adolescents, (3) Adaptation de la durée des séances selon l\'âge, (4) Considération du développement cognitif et émotionnel, (5) Différences de confidentialité et de consentement, (6) Adaptation de l\'espace physique, (7) Rôle des parents dans chaque cas.' }, maxScore: 100, aiEvaluated: true, order: 6, isActive: true },
];

export const spReadinessQuestions: Question[] = [
  // --- Evidence-Based Practice ---
  { id: 'sp-ebp-01', profileId: 'school-psychologist', categoryId: 'sp-readiness', competencyId: 'sp-evidence-based-practice', type: 'multiple-choice', content: { es: '¿Cuál de las siguientes fuentes es la más confiable para seleccionar una intervención basada en evidencia para un estudiante con trastorno de ansiedad en el entorno escolar?', en: 'Which of the following sources is the most reliable for selecting an evidence-based intervention for a student with anxiety disorder in the school setting?', fr: 'Laquelle des sources suivantes est la plus fiable pour sélectionner une intervention fondée sur les preuves pour un élève souffrant de trouble anxieux en milieu scolaire ?' }, options: [{ id: 'a', text: { es: 'Una publicación en redes sociales de un psicólogo popular', en: 'A social media post from a popular psychologist', fr: 'Une publication sur les réseaux sociaux d\'un psychologue populaire' }, value: 5 }, { id: 'b', text: { es: 'Revisiones sistemáticas y metaanálisis publicados en revistas científicas revisadas por pares que demuestren eficacia en poblaciones escolares', en: 'Systematic reviews and meta-analyses published in peer-reviewed scientific journals demonstrating efficacy in school populations', fr: 'Des revues systématiques et méta-analyses publiées dans des revues scientifiques évaluées par des pairs démontrant l\'efficacité dans les populations scolaires' }, value: 100 }, { id: 'c', text: { es: 'La opinión de un colega que lleva muchos años trabajando en escuelas', en: 'The opinion of a colleague who has worked in schools for many years', fr: 'L\'opinion d\'un collègue qui travaille dans les écoles depuis de nombreuses années' }, value: 20 }, { id: 'd', text: { es: 'Un manual de autoayuda para padres disponible en librerías', en: 'A self-help manual for parents available at bookstores', fr: 'Un manuel d\'auto-aide pour parents disponible en librairie' }, value: 10 }], maxScore: 100, aiEvaluated: false, order: 1, isActive: true },
  { id: 'sp-ebp-02', profileId: 'school-psychologist', categoryId: 'sp-readiness', competencyId: 'sp-evidence-based-practice', type: 'scale', content: { es: '¿Con qué frecuencia consulta bases de datos académicas (PsycINFO, ERIC, PubMed) o registros de intervenciones basadas en evidencia para actualizar sus prácticas profesionales?', en: 'How often do you consult academic databases (PsycINFO, ERIC, PubMed) or evidence-based intervention registries to update your professional practices?', fr: 'À quelle fréquence consultez-vous des bases de données académiques (PsycINFO, ERIC, PubMed) ou des registres d\'interventions fondées sur les preuves pour mettre à jour vos pratiques professionnelles ?' }, scaleMin: 1, scaleMax: 5, scaleLabels: { min: { es: 'Nunca', en: 'Never', fr: 'Jamais' }, max: { es: 'Semanalmente', en: 'Weekly', fr: 'Chaque semaine' } }, maxScore: 100, aiEvaluated: false, order: 2, isActive: true },

  // --- SEL Innovation ---
  { id: 'sp-sel-01', profileId: 'school-psychologist', categoryId: 'sp-readiness', competencyId: 'sp-sel-innovation', type: 'open-text', content: { es: 'La dirección de la escuela le solicita diseñar un programa de aprendizaje socioemocional (SEL) para implementar en todos los grados (preescolar a secundaria). Describa los componentes clave del programa, cómo lo diferenciaría por nivel de desarrollo, las competencias SEL que priorizaría y cómo mediría su impacto.', en: 'The school administration asks you to design a social-emotional learning (SEL) program to implement across all grades (pre-K through high school). Describe the key components of the program, how you would differentiate it by developmental level, the SEL competencies you would prioritize, and how you would measure its impact.', fr: 'La direction de l\'école vous demande de concevoir un programme d\'apprentissage socio-émotionnel (ASE) à mettre en œuvre dans tous les niveaux. Décrivez les composantes clés du programme, comment vous le différencieriez par niveau de développement, les compétences ASE que vous prioriseriez et comment vous mesureriez son impact.' }, rubric: { es: 'Evaluar: (1) Referencia a marcos SEL reconocidos (CASEL), (2) Competencias clave (autoconciencia, autorregulación, conciencia social, habilidades de relación, toma de decisiones responsable), (3) Diferenciación por edad, (4) Integración curricular, (5) Capacitación docente, (6) Métricas de evaluación de impacto, (7) Inclusión de familias.', en: 'Evaluate: (1) Reference to recognized SEL frameworks (CASEL), (2) Key competencies (self-awareness, self-management, social awareness, relationship skills, responsible decision-making), (3) Age differentiation, (4) Curricular integration, (5) Teacher training, (6) Impact evaluation metrics, (7) Family inclusion.', fr: 'Évaluer : (1) Référence aux cadres ASE reconnus (CASEL), (2) Compétences clés, (3) Différenciation par âge, (4) Intégration curriculaire, (5) Formation des enseignants, (6) Métriques d\'évaluation de l\'impact, (7) Inclusion des familles.' }, maxScore: 100, aiEvaluated: true, order: 3, isActive: true },
  { id: 'sp-sel-02', profileId: 'school-psychologist', categoryId: 'sp-readiness', competencyId: 'sp-sel-innovation', type: 'multiple-choice', content: { es: '¿Cuál de los siguientes enfoques es más efectivo para la prevención del acoso escolar (bullying) según la investigación actual?', en: 'Which of the following approaches is most effective for bullying prevention according to current research?', fr: 'Laquelle des approches suivantes est la plus efficace pour la prévention du harcèlement scolaire selon la recherche actuelle ?' }, options: [{ id: 'a', text: { es: 'Programas de "tolerancia cero" que expulsan automáticamente a los agresores', en: 'Zero-tolerance programs that automatically expel aggressors', fr: 'Programmes de « tolérance zéro » qui expulsent automatiquement les agresseurs' }, value: 10 }, { id: 'b', text: { es: 'Programas integrales a nivel de toda la escuela que combinan políticas claras, desarrollo de habilidades socioemocionales, participación de testigos y cambio de clima escolar', en: 'Comprehensive whole-school programs that combine clear policies, social-emotional skill development, bystander involvement, and school climate change', fr: 'Des programmes globaux à l\'échelle de toute l\'école combinant des politiques claires, le développement de compétences socio-émotionnelles, l\'implication des témoins et le changement de climat scolaire' }, value: 100 }, { id: 'c', text: { es: 'Charlas motivacionales mensuales sobre valores y respeto', en: 'Monthly motivational talks about values and respect', fr: 'Des conférences motivationnelles mensuelles sur les valeurs et le respect' }, value: 20 }, { id: 'd', text: { es: 'Instalar cámaras de vigilancia en todos los espacios de la escuela', en: 'Install surveillance cameras in all school spaces', fr: 'Installer des caméras de surveillance dans tous les espaces de l\'école' }, value: 15 }], maxScore: 100, aiEvaluated: false, order: 4, isActive: true },

  // --- Assessment Technology Adoption ---
  { id: 'sp-tech-01', profileId: 'school-psychologist', categoryId: 'sp-readiness', competencyId: 'sp-tech-adoption', type: 'scale', content: { es: '¿En qué medida utiliza herramientas digitales (plataformas de evaluación en línea, aplicaciones de monitoreo de progreso, sistemas de gestión de datos) en su práctica diaria como psicólogo escolar?', en: 'To what extent do you use digital tools (online assessment platforms, progress monitoring apps, data management systems) in your daily practice as a school psychologist?', fr: 'Dans quelle mesure utilisez-vous des outils numériques (plateformes d\'évaluation en ligne, applications de suivi des progrès, systèmes de gestion des données) dans votre pratique quotidienne de psychologue scolaire ?' }, scaleMin: 1, scaleMax: 5, scaleLabels: { min: { es: 'Nunca', en: 'Never', fr: 'Jamais' }, max: { es: 'Extensamente', en: 'Extensively', fr: 'Largement' } }, maxScore: 100, aiEvaluated: false, order: 5, isActive: true },
  { id: 'sp-tech-02', profileId: 'school-psychologist', categoryId: 'sp-readiness', competencyId: 'sp-tech-adoption', type: 'open-text', content: { es: 'La escuela está considerando adoptar una plataforma digital de evaluación psicoeducativa que utiliza inteligencia artificial para generar informes automáticos. ¿Cuáles son las oportunidades y los riesgos éticos que identifica? ¿Cómo garantizaría que la tecnología complemente y no reemplace el juicio clínico profesional?', en: 'The school is considering adopting a digital psychoeducational assessment platform that uses artificial intelligence to generate automatic reports. What opportunities and ethical risks do you identify? How would you ensure that technology complements and does not replace professional clinical judgment?', fr: 'L\'école envisage d\'adopter une plateforme numérique d\'évaluation psychoéducative utilisant l\'intelligence artificielle pour générer des rapports automatiques. Quelles opportunités et quels risques éthiques identifiez-vous ? Comment garantiriez-vous que la technologie complète et ne remplace pas le jugement clinique professionnel ?' }, rubric: { es: 'Evaluar: (1) Oportunidades identificadas (eficiencia, consistencia, acceso a datos), (2) Riesgos éticos (sesgo algorítmico, privacidad de datos, sobrediagnóstico), (3) Importancia del juicio clínico humano, (4) Necesidad de validación de resultados automatizados, (5) Consideraciones de confidencialidad y protección de datos de menores, (6) Capacitación necesaria para uso responsable, (7) Marco ético profesional.', en: 'Evaluate: (1) Opportunities identified (efficiency, consistency, data access), (2) Ethical risks (algorithmic bias, data privacy, overdiagnosis), (3) Importance of human clinical judgment, (4) Need for validation of automated results, (5) Confidentiality and minor data protection considerations, (6) Training needed for responsible use, (7) Professional ethical framework.', fr: 'Évaluer : (1) Opportunités identifiées (efficacité, cohérence, accès aux données), (2) Risques éthiques (biais algorithmique, confidentialité des données, surdiagnostic), (3) Importance du jugement clinique humain, (4) Nécessité de validation des résultats automatisés, (5) Considérations de confidentialité et de protection des données des mineurs, (6) Formation nécessaire pour une utilisation responsable, (7) Cadre éthique professionnel.' }, maxScore: 100, aiEvaluated: true, order: 6, isActive: true },
];
