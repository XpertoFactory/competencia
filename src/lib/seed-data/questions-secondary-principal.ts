import type { Question } from '@/types';

// ============================================================================
// SECONDARY SCHOOL PRINCIPAL QUESTIONS
// ============================================================================

export const secPrincipalProfessionalQuestions: Question[] = [
  // --- Secondary Education Leadership ---
  {
    id: 'secpr-sel-01',
    profileId: 'secondary-principal',
    categoryId: 'secprincipal-professional',
    competencyId: 'secondary-education-leadership',
    type: 'multiple-choice',
    content: {
      es: 'Al asumir la dirección de una escuela secundaria con bajo rendimiento académico, ¿cuál es la primera acción más estratégica?',
      en: 'When taking over as principal of a low-performing secondary school, what is the most strategic first action?',
      fr: 'En prenant la direction d\'un établissement secondaire à faible rendement académique, quelle est la première action la plus stratégique ?',
    },
    options: [
      { id: 'a', text: { es: 'Cambiar inmediatamente a los docentes con peores resultados', en: 'Immediately replace the teachers with the worst results', fr: 'Remplacer immédiatement les enseignants ayant les pires résultats' }, value: 10 },
      { id: 'b', text: { es: 'Realizar un diagnóstico integral del centro educativo involucrando a todos los actores', en: 'Conduct a comprehensive school diagnosis involving all stakeholders', fr: 'Réaliser un diagnostic complet de l\'établissement en impliquant tous les acteurs' }, value: 100 },
      { id: 'c', text: { es: 'Implementar pruebas estandarizadas adicionales para medir el nivel actual', en: 'Implement additional standardized tests to measure current levels', fr: 'Mettre en place des examens standardisés supplémentaires pour mesurer le niveau actuel' }, value: 40 },
      { id: 'd', text: { es: 'Enfocarse exclusivamente en mejorar la disciplina estudiantil', en: 'Focus exclusively on improving student discipline', fr: 'Se concentrer exclusivement sur l\'amélioration de la discipline des élèves' }, value: 20 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'secpr-sel-02',
    profileId: 'secondary-principal',
    categoryId: 'secprincipal-professional',
    competencyId: 'secondary-education-leadership',
    type: 'scenario',
    content: {
      es: 'Los resultados de las pruebas nacionales de su escuela secundaria han caído un 15% respecto al año anterior. Los padres de familia están preocupados, el personal docente se siente desmotivado y la junta directiva exige un plan de acción inmediato.\n\nDescríba su plan estratégico para revertir esta tendencia en los próximos 12 meses.',
      en: 'Your secondary school\'s national test results have dropped 15% compared to the previous year. Parents are concerned, teaching staff feel demotivated, and the board of directors demands an immediate action plan.\n\nDescribe your strategic plan to reverse this trend over the next 12 months.',
      fr: 'Les résultats aux examens nationaux de votre établissement secondaire ont chuté de 15 % par rapport à l\'année précédente. Les parents sont inquiets, le personnel enseignant se sent démotivé et le conseil d\'administration exige un plan d\'action immédiat.\n\nDécrivez votre plan stratégique pour inverser cette tendance au cours des 12 prochains mois.',
    },
    rubric: {
      es: 'Evaluar: (1) Análisis de causas raíz, (2) Plan de desarrollo profesional docente, (3) Estrategias de intervención académica diferenciada, (4) Comunicación con familias y comunidad, (5) Indicadores de seguimiento y metas medibles, (6) Gestión del clima organizacional.',
      en: 'Evaluate: (1) Root cause analysis, (2) Teacher professional development plan, (3) Differentiated academic intervention strategies, (4) Communication with families and community, (5) Monitoring indicators and measurable goals, (6) Organizational climate management.',
      fr: 'Évaluer : (1) Analyse des causes profondes, (2) Plan de développement professionnel des enseignants, (3) Stratégies d\'intervention académique différenciée, (4) Communication avec les familles et la communauté, (5) Indicateurs de suivi et objectifs mesurables, (6) Gestion du climat organisationnel.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 2,
    isActive: true,
  },

  // --- College Preparation Management ---
  {
    id: 'secpr-cpm-01',
    profileId: 'secondary-principal',
    categoryId: 'secprincipal-professional',
    competencyId: 'college-prep-management',
    type: 'open-text',
    content: {
      es: 'Describa cómo estructuraría un programa integral de preparación universitaria para estudiantes de los últimos dos años de secundaria, considerando estudiantes con diferentes niveles académicos y aspiraciones profesionales.',
      en: 'Describe how you would structure a comprehensive college preparation program for students in the last two years of secondary school, considering students with different academic levels and career aspirations.',
      fr: 'Décrivez comment vous structureriez un programme complet de préparation universitaire pour les élèves des deux dernières années du secondaire, en tenant compte des élèves ayant différents niveaux académiques et aspirations professionnelles.',
    },
    rubric: {
      es: 'Evaluar: (1) Inclusión de orientación vocacional, (2) Programas avanzados (AP/IB/doble matrícula), (3) Alianzas con universidades, (4) Preparación para exámenes de admisión, (5) Apoyo para becas y ayuda financiera, (6) Atención a diversidad de aspiraciones.',
      en: 'Evaluate: (1) Inclusion of career counseling, (2) Advanced programs (AP/IB/dual enrollment), (3) University partnerships, (4) Admissions exam preparation, (5) Scholarship and financial aid support, (6) Attention to diverse aspirations.',
      fr: 'Évaluer : (1) Inclusion de l\'orientation professionnelle, (2) Programmes avancés (AP/IB/double inscription), (3) Partenariats universitaires, (4) Préparation aux examens d\'admission, (5) Soutien aux bourses et aides financières, (6) Attention à la diversité des aspirations.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },

  // --- Department Coordination ---
  {
    id: 'secpr-dc-01',
    profileId: 'secondary-principal',
    categoryId: 'secprincipal-professional',
    competencyId: 'department-coordination',
    type: 'multiple-choice',
    content: {
      es: 'El jefe del departamento de matemáticas y la jefa del departamento de ciencias tienen un conflicto sobre la asignación de horas de laboratorio. ¿Cuál es el mejor enfoque?',
      en: 'The head of the mathematics department and the head of the science department have a conflict over laboratory hour allocation. What is the best approach?',
      fr: 'Le chef du département de mathématiques et la cheffe du département de sciences ont un conflit sur l\'attribution des heures de laboratoire. Quelle est la meilleure approche ?',
    },
    options: [
      { id: 'a', text: { es: 'Tomar la decisión unilateralmente basándose en datos de matrícula', en: 'Make the decision unilaterally based on enrollment data', fr: 'Prendre la décision unilatéralement en se basant sur les données d\'inscription' }, value: 30 },
      { id: 'b', text: { es: 'Facilitar una reunión conjunta para negociar un acuerdo que beneficie el aprendizaje de los estudiantes', en: 'Facilitate a joint meeting to negotiate an agreement that benefits student learning', fr: 'Faciliter une réunion conjointe pour négocier un accord bénéficiant à l\'apprentissage des élèves' }, value: 100 },
      { id: 'c', text: { es: 'Delegar la decisión al subdirector académico', en: 'Delegate the decision to the academic vice principal', fr: 'Déléguer la décision au sous-directeur académique' }, value: 20 },
      { id: 'd', text: { es: 'Asignar horarios alternos sin consultar a los departamentos', en: 'Assign alternating schedules without consulting the departments', fr: 'Attribuer des horaires alternés sans consulter les départements' }, value: 10 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 4,
    isActive: true,
  },

  // --- Standardized Testing ---
  {
    id: 'secpr-st-01',
    profileId: 'secondary-principal',
    categoryId: 'secprincipal-professional',
    competencyId: 'standardized-testing',
    type: 'scale',
    content: {
      es: '¿Qué tan preparado se siente para coordinar la logística y preparación académica de pruebas estandarizadas nacionales e internacionales?',
      en: 'How prepared do you feel to coordinate the logistics and academic preparation for national and international standardized tests?',
      fr: 'Dans quelle mesure vous sentez-vous préparé(e) pour coordonner la logistique et la préparation académique des examens standardisés nationaux et internationaux ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada preparado', en: 'Not at all prepared', fr: 'Pas du tout préparé(e)' },
      max: { es: 'Totalmente preparado', en: 'Fully prepared', fr: 'Tout à fait préparé(e)' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
  {
    id: 'secpr-st-02',
    profileId: 'secondary-principal',
    categoryId: 'secprincipal-professional',
    competencyId: 'standardized-testing',
    type: 'multiple-choice',
    content: {
      es: 'Al analizar los resultados de las pruebas estandarizadas, usted nota que el 40% de los estudiantes de 9° grado reprueban el área de comprensión lectora. ¿Cuál es la acción más apropiada?',
      en: 'When analyzing standardized test results, you notice that 40% of 9th-grade students fail the reading comprehension area. What is the most appropriate action?',
      fr: 'En analysant les résultats des examens standardisés, vous constatez que 40 % des élèves de 3e échouent en compréhension de lecture. Quelle est l\'action la plus appropriée ?',
    },
    options: [
      { id: 'a', text: { es: 'Agregar una hora extra de lectura obligatoria para todos los estudiantes', en: 'Add an extra mandatory reading hour for all students', fr: 'Ajouter une heure supplémentaire de lecture obligatoire pour tous les élèves' }, value: 30 },
      { id: 'b', text: { es: 'Diseñar un plan de intervención interdepartamental con estrategias de lectura en todas las materias', en: 'Design an interdepartmental intervention plan with reading strategies across all subjects', fr: 'Concevoir un plan d\'intervention interdépartemental avec des stratégies de lecture dans toutes les matières' }, value: 100 },
      { id: 'c', text: { es: 'Responsabilizar exclusivamente al departamento de lengua y literatura', en: 'Hold the language and literature department exclusively responsible', fr: 'Tenir le département de langue et littérature exclusivement responsable' }, value: 10 },
      { id: 'd', text: { es: 'Implementar clases de preparación para el examen un mes antes de la prueba', en: 'Implement test prep classes one month before the exam', fr: 'Mettre en place des cours de préparation à l\'examen un mois avant l\'épreuve' }, value: 20 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 6,
    isActive: true,
  },

  // --- Career Guidance Oversight ---
  {
    id: 'secpr-cgo-01',
    profileId: 'secondary-principal',
    categoryId: 'secprincipal-professional',
    competencyId: 'career-guidance-oversight',
    type: 'scale',
    content: {
      es: '¿Con qué frecuencia supervisa y evalúa la efectividad de los programas de orientación vocacional y consejería de su institución?',
      en: 'How often do you supervise and evaluate the effectiveness of your institution\'s career guidance and counseling programs?',
      fr: 'À quelle fréquence supervisez-vous et évaluez-vous l\'efficacité des programmes d\'orientation professionnelle et de conseil de votre établissement ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nunca', en: 'Never', fr: 'Jamais' },
      max: { es: 'Siempre', en: 'Always', fr: 'Toujours' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 7,
    isActive: true,
  },
];

export const secPrincipalSoftSkillsQuestions: Question[] = [
  // --- Adolescent Development ---
  {
    id: 'secpr-ad-01',
    profileId: 'secondary-principal',
    categoryId: 'secprincipal-soft-skills',
    competencyId: 'adolescent-development',
    type: 'scenario',
    content: {
      es: 'Un grupo de estudiantes de 10° grado ha reportado que sufren de ansiedad severa debido a la carga académica. Los padres están divididos: algunos exigen reducir tareas y otros quieren mantener la exigencia. El consejero escolar confirma un aumento del 30% en consultas por salud mental.\n\n¿Cómo aborda esta situación equilibrando el bienestar adolescente con las exigencias académicas?',
      en: 'A group of 10th-grade students have reported suffering from severe anxiety due to academic workload. Parents are divided: some demand reduced homework and others want to maintain rigor. The school counselor confirms a 30% increase in mental health consultations.\n\nHow do you address this situation, balancing adolescent welfare with academic demands?',
      fr: 'Un groupe d\'élèves de seconde signale souffrir d\'anxiété sévère due à la charge académique. Les parents sont divisés : certains exigent une réduction des devoirs et d\'autres veulent maintenir l\'exigence. Le conseiller scolaire confirme une augmentation de 30 % des consultations en santé mentale.\n\nComment abordez-vous cette situation en équilibrant le bien-être adolescent et les exigences académiques ?',
    },
    rubric: {
      es: 'Evaluar: (1) Reconocimiento de la salud mental como prioridad, (2) Consulta con profesionales de salud mental, (3) Estrategias de balance carga-bienestar, (4) Comunicación efectiva con padres, (5) Políticas institucionales de bienestar, (6) Seguimiento y evaluación del impacto.',
      en: 'Evaluate: (1) Recognition of mental health as a priority, (2) Consultation with mental health professionals, (3) Workload-wellness balance strategies, (4) Effective communication with parents, (5) Institutional wellness policies, (6) Impact monitoring and evaluation.',
      fr: 'Évaluer : (1) Reconnaissance de la santé mentale comme priorité, (2) Consultation avec des professionnels de santé mentale, (3) Stratégies d\'équilibre charge-bien-être, (4) Communication efficace avec les parents, (5) Politiques institutionnelles de bien-être, (6) Suivi et évaluation de l\'impact.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 1,
    isActive: true,
  },
  {
    id: 'secpr-ad-02',
    profileId: 'secondary-principal',
    categoryId: 'secprincipal-soft-skills',
    competencyId: 'adolescent-development',
    type: 'scale',
    content: {
      es: '¿Qué tan cómodo se siente manejando situaciones que involucran problemas emocionales o de salud mental en adolescentes?',
      en: 'How comfortable do you feel handling situations involving emotional or mental health issues in adolescents?',
      fr: 'Dans quelle mesure vous sentez-vous à l\'aise pour gérer des situations impliquant des problèmes émotionnels ou de santé mentale chez les adolescents ?',
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

  // --- Student Discipline ---
  {
    id: 'secpr-sd-01',
    profileId: 'secondary-principal',
    categoryId: 'secprincipal-soft-skills',
    competencyId: 'student-discipline',
    type: 'multiple-choice',
    content: {
      es: 'Un estudiante de 11° grado con excelente rendimiento académico es sorprendido haciendo trampa en un examen final. Sus padres son donantes importantes de la escuela. ¿Cuál es la acción más apropiada?',
      en: 'An 11th-grade student with excellent academic performance is caught cheating on a final exam. Their parents are major school donors. What is the most appropriate action?',
      fr: 'Un élève de première avec d\'excellents résultats académiques est surpris en train de tricher lors d\'un examen final. Ses parents sont d\'importants donateurs de l\'école. Quelle est l\'action la plus appropriée ?',
    },
    options: [
      { id: 'a', text: { es: 'Aplicar el reglamento disciplinario de manera equitativa, independientemente de quiénes sean los padres', en: 'Apply the disciplinary code equitably, regardless of who the parents are', fr: 'Appliquer le règlement disciplinaire de manière équitable, indépendamment de l\'identité des parents' }, value: 100 },
      { id: 'b', text: { es: 'Darle una advertencia privada para evitar conflictos con la familia', en: 'Give a private warning to avoid conflicts with the family', fr: 'Donner un avertissement privé pour éviter les conflits avec la famille' }, value: 10 },
      { id: 'c', text: { es: 'Expulsar al estudiante para dar un ejemplo a toda la escuela', en: 'Expel the student to set an example for the entire school', fr: 'Expulser l\'élève pour donner l\'exemple à toute l\'école' }, value: 20 },
      { id: 'd', text: { es: 'Permitirle repetir el examen bajo supervisión especial', en: 'Allow the student to retake the exam under special supervision', fr: 'Permettre à l\'élève de repasser l\'examen sous surveillance spéciale' }, value: 40 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 3,
    isActive: true,
  },
  {
    id: 'secpr-sd-02',
    profileId: 'secondary-principal',
    categoryId: 'secprincipal-soft-skills',
    competencyId: 'student-discipline',
    type: 'open-text',
    content: {
      es: 'Describa su filosofía sobre la disciplina restaurativa en educación secundaria. ¿Cómo implementaría prácticas de justicia restaurativa para reemplazar las suspensiones tradicionales?',
      en: 'Describe your philosophy on restorative discipline in secondary education. How would you implement restorative justice practices to replace traditional suspensions?',
      fr: 'Décrivez votre philosophie sur la discipline restaurative dans l\'éducation secondaire. Comment mettriez-vous en œuvre des pratiques de justice restaurative pour remplacer les suspensions traditionnelles ?',
    },
    rubric: {
      es: 'Evaluar: (1) Comprensión de justicia restaurativa, (2) Estrategias concretas de implementación, (3) Capacitación del personal, (4) Participación de la comunidad escolar, (5) Métricas de éxito, (6) Casos en que la suspensión sigue siendo necesaria.',
      en: 'Evaluate: (1) Understanding of restorative justice, (2) Concrete implementation strategies, (3) Staff training, (4) School community participation, (5) Success metrics, (6) Cases where suspension remains necessary.',
      fr: 'Évaluer : (1) Compréhension de la justice restaurative, (2) Stratégies concrètes de mise en œuvre, (3) Formation du personnel, (4) Participation de la communauté scolaire, (5) Indicateurs de réussite, (6) Cas où la suspension reste nécessaire.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 4,
    isActive: true,
  },

  // --- Extracurricular Management ---
  {
    id: 'secpr-em-01',
    profileId: 'secondary-principal',
    categoryId: 'secprincipal-soft-skills',
    competencyId: 'extracurricular-management',
    type: 'multiple-choice',
    content: {
      es: 'El presupuesto para actividades extracurriculares se ha reducido un 25%. Actualmente hay 15 clubes y 8 equipos deportivos. ¿Cuál es la mejor estrategia?',
      en: 'The budget for extracurricular activities has been reduced by 25%. There are currently 15 clubs and 8 sports teams. What is the best strategy?',
      fr: 'Le budget des activités extrascolaires a été réduit de 25 %. Il y a actuellement 15 clubs et 8 équipes sportives. Quelle est la meilleure stratégie ?',
    },
    options: [
      { id: 'a', text: { es: 'Eliminar los clubes y equipos con menor participación', en: 'Eliminate the clubs and teams with the lowest participation', fr: 'Éliminer les clubs et équipes ayant la plus faible participation' }, value: 30 },
      { id: 'b', text: { es: 'Evaluar el impacto de cada actividad, buscar patrocinios externos y priorizar según la misión educativa', en: 'Evaluate each activity\'s impact, seek external sponsorships, and prioritize based on educational mission', fr: 'Évaluer l\'impact de chaque activité, chercher des parrainages externes et prioriser selon la mission éducative' }, value: 100 },
      { id: 'c', text: { es: 'Reducir proporcionalmente el presupuesto de todas las actividades', en: 'Proportionally reduce the budget of all activities', fr: 'Réduire proportionnellement le budget de toutes les activités' }, value: 40 },
      { id: 'd', text: { es: 'Cobrar una cuota adicional a los estudiantes que participen', en: 'Charge an additional fee to participating students', fr: 'Facturer des frais supplémentaires aux élèves participants' }, value: 10 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
  {
    id: 'secpr-em-02',
    profileId: 'secondary-principal',
    categoryId: 'secprincipal-soft-skills',
    competencyId: 'extracurricular-management',
    type: 'scale',
    content: {
      es: '¿Con qué frecuencia asiste personalmente a eventos extracurriculares, deportivos y actividades de gobierno estudiantil?',
      en: 'How often do you personally attend extracurricular events, athletic competitions, and student government activities?',
      fr: 'À quelle fréquence assistez-vous personnellement aux événements extrascolaires, compétitions sportives et activités de gouvernement étudiant ?',
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

export const secPrincipalReadinessQuestions: Question[] = [
  // --- Educational Innovation ---
  {
    id: 'secpr-inn-01',
    profileId: 'secondary-principal',
    categoryId: 'secprincipal-readiness',
    competencyId: 'secprincipal-innovation',
    type: 'open-text',
    content: {
      es: 'La inteligencia artificial generativa está transformando la educación. Describa cómo integraría herramientas de IA en su escuela secundaria de manera ética y pedagógicamente efectiva, considerando tanto oportunidades como riesgos.',
      en: 'Generative AI is transforming education. Describe how you would integrate AI tools in your secondary school in an ethical and pedagogically effective manner, considering both opportunities and risks.',
      fr: 'L\'intelligence artificielle générative transforme l\'éducation. Décrivez comment vous intégreriez des outils d\'IA dans votre établissement secondaire de manière éthique et pédagogiquement efficace, en considérant les opportunités et les risques.',
    },
    rubric: {
      es: 'Evaluar: (1) Comprensión de las herramientas de IA disponibles, (2) Políticas de uso ético y académico, (3) Capacitación docente, (4) Impacto en la evaluación y la integridad académica, (5) Equidad de acceso, (6) Plan de implementación gradual.',
      en: 'Evaluate: (1) Understanding of available AI tools, (2) Ethical and academic use policies, (3) Teacher training, (4) Impact on assessment and academic integrity, (5) Access equity, (6) Gradual implementation plan.',
      fr: 'Évaluer : (1) Compréhension des outils d\'IA disponibles, (2) Politiques d\'utilisation éthique et académique, (3) Formation des enseignants, (4) Impact sur l\'évaluation et l\'intégrité académique, (5) Équité d\'accès, (6) Plan de mise en œuvre progressive.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 1,
    isActive: true,
  },
  {
    id: 'secpr-inn-02',
    profileId: 'secondary-principal',
    categoryId: 'secprincipal-readiness',
    competencyId: 'secprincipal-innovation',
    type: 'scale',
    content: {
      es: '¿Qué tan dispuesto está a implementar cambios significativos en el modelo pedagógico tradicional de su escuela (por ejemplo, aprendizaje basado en proyectos, aula invertida)?',
      en: 'How willing are you to implement significant changes to the traditional pedagogical model at your school (e.g., project-based learning, flipped classroom)?',
      fr: 'Dans quelle mesure êtes-vous disposé(e) à mettre en œuvre des changements significatifs au modèle pédagogique traditionnel de votre école (par ex., apprentissage par projets, classe inversée) ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nada dispuesto', en: 'Not at all willing', fr: 'Pas du tout disposé(e)' },
      max: { es: 'Totalmente dispuesto', en: 'Fully willing', fr: 'Tout à fait disposé(e)' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },

  // --- Community Engagement ---
  {
    id: 'secpr-ce-01',
    profileId: 'secondary-principal',
    categoryId: 'secprincipal-readiness',
    competencyId: 'secprincipal-community-engagement',
    type: 'scenario',
    content: {
      es: 'Una empresa local ofrece patrocinar un laboratorio de tecnología a cambio de colocar su marca en las instalaciones escolares y ofrecer pasantías exclusivas a estudiantes seleccionados por la empresa. Algunos padres consideran esto como una oportunidad, mientras otros lo ven como comercialización de la educación.\n\n¿Cómo evaluaría y manejaría esta propuesta?',
      en: 'A local company offers to sponsor a technology lab in exchange for placing their brand in school facilities and offering exclusive internships to company-selected students. Some parents see this as an opportunity, while others view it as commercialization of education.\n\nHow would you evaluate and manage this proposal?',
      fr: 'Une entreprise locale propose de parrainer un laboratoire technologique en échange du placement de sa marque dans les installations scolaires et de l\'offre de stages exclusifs aux élèves sélectionnés par l\'entreprise. Certains parents y voient une opportunité, d\'autres une commercialisation de l\'éducation.\n\nComment évalueriez-vous et géreriez-vous cette proposition ?',
    },
    rubric: {
      es: 'Evaluar: (1) Análisis de beneficios vs. riesgos, (2) Consulta con la comunidad escolar, (3) Políticas de alianzas público-privadas, (4) Equidad en el acceso a oportunidades, (5) Transparencia en la toma de decisiones, (6) Alternativas de financiamiento.',
      en: 'Evaluate: (1) Benefits vs. risks analysis, (2) Consultation with school community, (3) Public-private partnership policies, (4) Equity in access to opportunities, (5) Transparency in decision-making, (6) Alternative funding sources.',
      fr: 'Évaluer : (1) Analyse bénéfices vs. risques, (2) Consultation avec la communauté scolaire, (3) Politiques de partenariats public-privé, (4) Équité d\'accès aux opportunités, (5) Transparence dans la prise de décision, (6) Sources de financement alternatives.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },
  {
    id: 'secpr-ce-02',
    profileId: 'secondary-principal',
    categoryId: 'secprincipal-readiness',
    competencyId: 'secprincipal-community-engagement',
    type: 'scale',
    content: {
      es: '¿Con qué frecuencia busca activamente nuevas alianzas con organizaciones comunitarias, empresas locales o instituciones de educación superior?',
      en: 'How often do you actively seek new partnerships with community organizations, local businesses, or higher education institutions?',
      fr: 'À quelle fréquence recherchez-vous activement de nouveaux partenariats avec des organisations communautaires, des entreprises locales ou des établissements d\'enseignement supérieur ?',
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

  // --- Prevention Programs ---
  {
    id: 'secpr-pp-01',
    profileId: 'secondary-principal',
    categoryId: 'secprincipal-readiness',
    competencyId: 'secprincipal-prevention-programs',
    type: 'multiple-choice',
    content: {
      es: 'Se detectan indicios de consumo de vapeadores electrónicos entre estudiantes de 8° y 9° grado. ¿Cuál es la respuesta más efectiva?',
      en: 'Signs of e-cigarette/vaping use are detected among 8th and 9th grade students. What is the most effective response?',
      fr: 'Des signes d\'utilisation de cigarettes électroniques/vapotage sont détectés parmi les élèves de 4e et 3e. Quelle est la réponse la plus efficace ?',
    },
    options: [
      { id: 'a', text: { es: 'Suspender a todos los estudiantes involucrados como medida disuasoria', en: 'Suspend all involved students as a deterrent', fr: 'Suspendre tous les élèves impliqués comme mesure dissuasive' }, value: 10 },
      { id: 'b', text: { es: 'Implementar un programa integral de prevención que incluya educación, apoyo y participación de las familias', en: 'Implement a comprehensive prevention program including education, support, and family involvement', fr: 'Mettre en œuvre un programme complet de prévention incluant éducation, soutien et implication des familles' }, value: 100 },
      { id: 'c', text: { es: 'Instalar detectores de humo adicionales en los baños', en: 'Install additional smoke detectors in restrooms', fr: 'Installer des détecteurs de fumée supplémentaires dans les toilettes' }, value: 20 },
      { id: 'd', text: { es: 'Enviar una circular informativa a los padres de familia', en: 'Send an informational letter to parents', fr: 'Envoyer une circulaire d\'information aux parents' }, value: 40 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
  {
    id: 'secpr-pp-02',
    profileId: 'secondary-principal',
    categoryId: 'secprincipal-readiness',
    competencyId: 'secprincipal-prevention-programs',
    type: 'open-text',
    content: {
      es: 'Describa cómo diseñaría un programa integral de prevención de acoso escolar (bullying y ciberbullying) para su escuela secundaria, incluyendo componentes de detección, intervención y seguimiento.',
      en: 'Describe how you would design a comprehensive bullying and cyberbullying prevention program for your secondary school, including detection, intervention, and follow-up components.',
      fr: 'Décrivez comment vous concevriez un programme complet de prévention du harcèlement scolaire (bullying et cyberharcèlement) pour votre établissement secondaire, incluant des composantes de détection, d\'intervention et de suivi.',
    },
    rubric: {
      es: 'Evaluar: (1) Estrategias de detección temprana, (2) Protocolos de intervención, (3) Capacitación del personal, (4) Participación estudiantil como agentes de cambio, (5) Componente digital/ciberbullying, (6) Seguimiento y métricas de efectividad.',
      en: 'Evaluate: (1) Early detection strategies, (2) Intervention protocols, (3) Staff training, (4) Student participation as change agents, (5) Digital/cyberbullying component, (6) Follow-up and effectiveness metrics.',
      fr: 'Évaluer : (1) Stratégies de détection précoce, (2) Protocoles d\'intervention, (3) Formation du personnel, (4) Participation des élèves comme agents de changement, (5) Composante numérique/cyberharcèlement, (6) Suivi et indicateurs d\'efficacité.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 6,
    isActive: true,
  },
];
