import type { ArchetypeProfile } from '@/types';

export const archetypeProfiles: ArchetypeProfile[] = [
  // Professional Archetypes
  {
    id: 'prof-expert',
    category: 'professional',
    name: {
      es: 'Experto Técnico',
      en: 'Technical Expert',
      fr: 'Expert technique',
    },
    description: {
      es: 'Dominio profundo del conocimiento técnico y capacidad para resolver situaciones complejas.',
      en: 'Deep mastery of technical knowledge and ability to solve complex situations.',
      fr: 'Maîtrise approfondie des connaissances techniques et capacité à résoudre des situations complexes.',
    },
    traits: [
      { es: 'Conocimiento profundo', en: 'Deep knowledge', fr: 'Connaissances approfondies' },
      { es: 'Análisis riguroso', en: 'Rigorous analysis', fr: 'Analyse rigoureuse' },
      { es: 'Referente técnico', en: 'Technical reference', fr: 'Référence technique' },
    ],
    indexRange: { min: 80, max: 100 },
    recommendedResources: ['course-advanced-underwriting', 'cert-professional'],
    order: 1,
  },
  {
    id: 'prof-competent',
    category: 'professional',
    name: {
      es: 'Profesional Competente',
      en: 'Competent Professional',
      fr: 'Professionnel compétent',
    },
    description: {
      es: 'Sólida base técnica con capacidad para manejar la mayoría de situaciones estándar.',
      en: 'Solid technical foundation with ability to handle most standard situations.',
      fr: 'Base technique solide avec la capacité de gérer la plupart des situations standard.',
    },
    traits: [
      { es: 'Base técnica sólida', en: 'Solid technical base', fr: 'Base technique solide' },
      { es: 'Eficiencia operativa', en: 'Operational efficiency', fr: 'Efficacité opérationnelle' },
      { es: 'Confiable', en: 'Reliable', fr: 'Fiable' },
    ],
    indexRange: { min: 60, max: 79 },
    recommendedResources: ['course-intermediate', 'workshop-cases'],
    order: 2,
  },
  {
    id: 'prof-developing',
    category: 'professional',
    name: {
      es: 'Profesional en Desarrollo',
      en: 'Developing Professional',
      fr: 'Professionnel en développement',
    },
    description: {
      es: 'En proceso de consolidar conocimientos técnicos fundamentales.',
      en: 'In process of consolidating fundamental technical knowledge.',
      fr: 'En processus de consolidation des connaissances techniques fondamentales.',
    },
    traits: [
      { es: 'Potencial de crecimiento', en: 'Growth potential', fr: 'Potentiel de croissance' },
      { es: 'Motivación', en: 'Motivation', fr: 'Motivation' },
      { es: 'Curiosidad', en: 'Curiosity', fr: 'Curiosité' },
    ],
    indexRange: { min: 40, max: 59 },
    recommendedResources: ['course-fundamentals', 'mentoring-program'],
    order: 3,
  },
  {
    id: 'prof-beginner',
    category: 'professional',
    name: {
      es: 'Profesional Inicial',
      en: 'Beginning Professional',
      fr: 'Professionnel débutant',
    },
    description: {
      es: 'Iniciando el desarrollo de competencias técnicas fundamentales.',
      en: 'Starting the development of fundamental technical competencies.',
      fr: 'Début du développement des compétences techniques fondamentales.',
    },
    traits: [
      { es: 'Nuevo en el rol', en: 'New to role', fr: 'Nouveau dans le rôle' },
      { es: 'Requiere formación', en: 'Requires training', fr: 'Nécessite une formation' },
      { es: 'Entusiasmo', en: 'Enthusiasm', fr: 'Enthousiasme' },
    ],
    indexRange: { min: 0, max: 39 },
    recommendedResources: ['course-basics', 'onboarding-program'],
    order: 4,
  },

  // Soft Skills Archetypes
  {
    id: 'soft-leader',
    category: 'soft-skills',
    name: {
      es: 'Líder Comunicador',
      en: 'Communicating Leader',
      fr: 'Leader communicant',
    },
    description: {
      es: 'Excelentes habilidades de comunicación y liderazgo natural en equipos.',
      en: 'Excellent communication skills and natural team leadership.',
      fr: "Excellentes compétences en communication et leadership naturel d'équipe.",
    },
    traits: [
      { es: 'Comunicación efectiva', en: 'Effective communication', fr: 'Communication efficace' },
      { es: 'Influencia positiva', en: 'Positive influence', fr: 'Influence positive' },
      { es: 'Empatía', en: 'Empathy', fr: 'Empathie' },
    ],
    indexRange: { min: 80, max: 100 },
    recommendedResources: ['course-leadership', 'mentoring-others'],
    order: 1,
  },
  {
    id: 'soft-collaborator',
    category: 'soft-skills',
    name: {
      es: 'Colaborador Efectivo',
      en: 'Effective Collaborator',
      fr: 'Collaborateur efficace',
    },
    description: {
      es: 'Trabaja bien en equipo y mantiene buenas relaciones interpersonales.',
      en: 'Works well in teams and maintains good interpersonal relationships.',
      fr: 'Travaille bien en équipe et maintient de bonnes relations interpersonnelles.',
    },
    traits: [
      { es: 'Trabajo en equipo', en: 'Teamwork', fr: "Travail d'équipe" },
      { es: 'Cooperación', en: 'Cooperation', fr: 'Coopération' },
      { es: 'Flexibilidad', en: 'Flexibility', fr: 'Flexibilité' },
    ],
    indexRange: { min: 60, max: 79 },
    recommendedResources: ['workshop-communication', 'team-dynamics'],
    order: 2,
  },
  {
    id: 'soft-developing',
    category: 'soft-skills',
    name: {
      es: 'Comunicador en Desarrollo',
      en: 'Developing Communicator',
      fr: 'Communicateur en développement',
    },
    description: {
      es: 'Desarrollando habilidades interpersonales y de comunicación.',
      en: 'Developing interpersonal and communication skills.',
      fr: 'Développement des compétences interpersonnelles et de communication.',
    },
    traits: [
      { es: 'En desarrollo', en: 'Developing', fr: 'En développement' },
      { es: 'Abierto a feedback', en: 'Open to feedback', fr: 'Ouvert aux retours' },
      { es: 'Mejorando', en: 'Improving', fr: 'En amélioration' },
    ],
    indexRange: { min: 40, max: 59 },
    recommendedResources: ['course-soft-skills', 'coaching'],
    order: 3,
  },
  {
    id: 'soft-reserved',
    category: 'soft-skills',
    name: {
      es: 'Perfil Reservado',
      en: 'Reserved Profile',
      fr: 'Profil réservé',
    },
    description: {
      es: 'Prefiere trabajo independiente y necesita apoyo en habilidades interpersonales.',
      en: 'Prefers independent work and needs support in interpersonal skills.',
      fr: 'Préfère le travail indépendant et a besoin de soutien en compétences interpersonnelles.',
    },
    traits: [
      { es: 'Independiente', en: 'Independent', fr: 'Indépendant' },
      { es: 'Analítico', en: 'Analytical', fr: 'Analytique' },
      { es: 'Introspectivo', en: 'Introspective', fr: 'Introspectif' },
    ],
    indexRange: { min: 0, max: 39 },
    recommendedResources: ['course-communication-basics', 'social-skills'],
    order: 4,
  },

  // Readiness Archetypes
  {
    id: 'ready-innovator',
    category: 'readiness',
    name: {
      es: 'Innovador Digital',
      en: 'Digital Innovator',
      fr: 'Innovateur numérique',
    },
    description: {
      es: 'Adopta rápidamente nuevas tecnologías y promueve el cambio en otros.',
      en: 'Quickly adopts new technologies and promotes change in others.',
      fr: 'Adopte rapidement les nouvelles technologies et promeut le changement chez les autres.',
    },
    traits: [
      { es: 'Early adopter', en: 'Early adopter', fr: 'Adopteur précoce' },
      { es: 'Proactivo', en: 'Proactive', fr: 'Proactif' },
      { es: 'Agente de cambio', en: 'Change agent', fr: 'Agent de changement' },
    ],
    indexRange: { min: 80, max: 100 },
    recommendedResources: ['innovation-lab', 'digital-leadership'],
    order: 1,
  },
  {
    id: 'ready-adapter',
    category: 'readiness',
    name: {
      es: 'Adaptador Progresivo',
      en: 'Progressive Adapter',
      fr: 'Adaptateur progressif',
    },
    description: {
      es: 'Se adapta bien a los cambios con el tiempo y apoyo adecuado.',
      en: 'Adapts well to changes over time with adequate support.',
      fr: "S'adapte bien aux changements au fil du temps avec un soutien adéquat.",
    },
    traits: [
      { es: 'Adaptable', en: 'Adaptable', fr: 'Adaptable' },
      { es: 'Abierto al cambio', en: 'Open to change', fr: 'Ouvert au changement' },
      { es: 'Paciente', en: 'Patient', fr: 'Patient' },
    ],
    indexRange: { min: 60, max: 79 },
    recommendedResources: ['tech-fundamentals', 'change-management'],
    order: 2,
  },
  {
    id: 'ready-cautious',
    category: 'readiness',
    name: {
      es: 'Adaptador Cauteloso',
      en: 'Cautious Adapter',
      fr: 'Adaptateur prudent',
    },
    description: {
      es: 'Necesita tiempo y evidencia antes de adoptar nuevos procesos.',
      en: 'Needs time and evidence before adopting new processes.',
      fr: "A besoin de temps et de preuves avant d'adopter de nouveaux processus.",
    },
    traits: [
      { es: 'Cauteloso', en: 'Cautious', fr: 'Prudent' },
      { es: 'Metódico', en: 'Methodical', fr: 'Méthodique' },
      { es: 'Prefiere estabilidad', en: 'Prefers stability', fr: 'Préfère la stabilité' },
    ],
    indexRange: { min: 40, max: 59 },
    recommendedResources: ['guided-tech-training', 'peer-support'],
    order: 3,
  },
  {
    id: 'ready-traditional',
    category: 'readiness',
    name: {
      es: 'Perfil Tradicional',
      en: 'Traditional Profile',
      fr: 'Profil traditionnel',
    },
    description: {
      es: 'Prefiere métodos establecidos y requiere apoyo significativo para el cambio.',
      en: 'Prefers established methods and requires significant support for change.',
      fr: 'Préfère les méthodes établies et nécessite un soutien important pour le changement.',
    },
    traits: [
      { es: 'Tradicional', en: 'Traditional', fr: 'Traditionnel' },
      { es: 'Experimentado', en: 'Experienced', fr: 'Expérimenté' },
      { es: 'Resistente al cambio', en: 'Resistant to change', fr: 'Résistant au changement' },
    ],
    indexRange: { min: 0, max: 39 },
    recommendedResources: ['basic-tech-support', 'transition-program'],
    order: 4,
  },
];
