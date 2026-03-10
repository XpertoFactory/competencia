import type { ArchetypeProfile } from '@/types';

export const archetypeProfiles: ArchetypeProfile[] = [
  // Professional Archetypes
  {
    id: 'prof-expert',
    category: 'professional',
    name: {
      es: 'Experto Técnico',
      en: 'Technical Expert',
    },
    description: {
      es: 'Dominio profundo del conocimiento técnico y capacidad para resolver situaciones complejas.',
      en: 'Deep mastery of technical knowledge and ability to solve complex situations.',
    },
    traits: [
      { es: 'Conocimiento profundo', en: 'Deep knowledge' },
      { es: 'Análisis riguroso', en: 'Rigorous analysis' },
      { es: 'Referente técnico', en: 'Technical reference' },
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
    },
    description: {
      es: 'Sólida base técnica con capacidad para manejar la mayoría de situaciones estándar.',
      en: 'Solid technical foundation with ability to handle most standard situations.',
    },
    traits: [
      { es: 'Base técnica sólida', en: 'Solid technical base' },
      { es: 'Eficiencia operativa', en: 'Operational efficiency' },
      { es: 'Confiable', en: 'Reliable' },
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
    },
    description: {
      es: 'En proceso de consolidar conocimientos técnicos fundamentales.',
      en: 'In process of consolidating fundamental technical knowledge.',
    },
    traits: [
      { es: 'Potencial de crecimiento', en: 'Growth potential' },
      { es: 'Motivación', en: 'Motivation' },
      { es: 'Curiosidad', en: 'Curiosity' },
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
    },
    description: {
      es: 'Iniciando el desarrollo de competencias técnicas fundamentales.',
      en: 'Starting the development of fundamental technical competencies.',
    },
    traits: [
      { es: 'Nuevo en el rol', en: 'New to role' },
      { es: 'Requiere formación', en: 'Requires training' },
      { es: 'Entusiasmo', en: 'Enthusiasm' },
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
    },
    description: {
      es: 'Excelentes habilidades de comunicación y liderazgo natural en equipos.',
      en: 'Excellent communication skills and natural team leadership.',
    },
    traits: [
      { es: 'Comunicación efectiva', en: 'Effective communication' },
      { es: 'Influencia positiva', en: 'Positive influence' },
      { es: 'Empatía', en: 'Empathy' },
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
    },
    description: {
      es: 'Trabaja bien en equipo y mantiene buenas relaciones interpersonales.',
      en: 'Works well in teams and maintains good interpersonal relationships.',
    },
    traits: [
      { es: 'Trabajo en equipo', en: 'Teamwork' },
      { es: 'Cooperación', en: 'Cooperation' },
      { es: 'Flexibilidad', en: 'Flexibility' },
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
    },
    description: {
      es: 'Desarrollando habilidades interpersonales y de comunicación.',
      en: 'Developing interpersonal and communication skills.',
    },
    traits: [
      { es: 'En desarrollo', en: 'Developing' },
      { es: 'Abierto a feedback', en: 'Open to feedback' },
      { es: 'Mejorando', en: 'Improving' },
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
    },
    description: {
      es: 'Prefiere trabajo independiente y necesita apoyo en habilidades interpersonales.',
      en: 'Prefers independent work and needs support in interpersonal skills.',
    },
    traits: [
      { es: 'Independiente', en: 'Independent' },
      { es: 'Analítico', en: 'Analytical' },
      { es: 'Introspectivo', en: 'Introspective' },
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
    },
    description: {
      es: 'Adopta rápidamente nuevas tecnologías y promueve el cambio en otros.',
      en: 'Quickly adopts new technologies and promotes change in others.',
    },
    traits: [
      { es: 'Early adopter', en: 'Early adopter' },
      { es: 'Proactivo', en: 'Proactive' },
      { es: 'Agente de cambio', en: 'Change agent' },
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
    },
    description: {
      es: 'Se adapta bien a los cambios con el tiempo y apoyo adecuado.',
      en: 'Adapts well to changes over time with adequate support.',
    },
    traits: [
      { es: 'Adaptable', en: 'Adaptable' },
      { es: 'Abierto al cambio', en: 'Open to change' },
      { es: 'Paciente', en: 'Patient' },
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
    },
    description: {
      es: 'Necesita tiempo y evidencia antes de adoptar nuevos procesos.',
      en: 'Needs time and evidence before adopting new processes.',
    },
    traits: [
      { es: 'Cauteloso', en: 'Cautious' },
      { es: 'Metódico', en: 'Methodical' },
      { es: 'Prefiere estabilidad', en: 'Prefers stability' },
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
    },
    description: {
      es: 'Prefiere métodos establecidos y requiere apoyo significativo para el cambio.',
      en: 'Prefers established methods and requires significant support for change.',
    },
    traits: [
      { es: 'Tradicional', en: 'Traditional' },
      { es: 'Experimentado', en: 'Experienced' },
      { es: 'Resistente al cambio', en: 'Resistant to change' },
    ],
    indexRange: { min: 0, max: 39 },
    recommendedResources: ['basic-tech-support', 'transition-program'],
    order: 4,
  },
];
