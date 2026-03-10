import type { Resource } from '@/types';

export const resources: Resource[] = [
  // Courses
  {
    id: 'course-fundamentals',
    type: 'course',
    name: {
      es: 'Fundamentos del Seguro',
      en: 'Insurance Fundamentals',
    },
    description: {
      es: 'Curso introductorio que cubre los conceptos básicos del seguro, tipos de pólizas y terminología esencial.',
      en: 'Introductory course covering basic insurance concepts, policy types, and essential terminology.',
    },
    targetCategories: ['professional'],
    targetProfiles: ['prof-beginner', 'prof-developing'],
    targetCompetencies: ['product-knowledge'],
    url: '#',
    duration: '20 horas',
    priority: 1,
    isActive: true,
  },
  {
    id: 'course-underwriting',
    type: 'course',
    name: {
      es: 'Suscripción de Riesgos',
      en: 'Risk Underwriting',
    },
    description: {
      es: 'Curso intermedio sobre evaluación de riesgos, análisis de solicitudes y toma de decisiones de suscripción.',
      en: 'Intermediate course on risk evaluation, application analysis, and underwriting decision making.',
    },
    targetCategories: ['professional'],
    targetProfiles: ['prof-developing', 'prof-competent'],
    targetCompetencies: ['underwriting'],
    url: '#',
    duration: '30 horas',
    priority: 2,
    isActive: true,
  },
  {
    id: 'course-claims',
    type: 'course',
    name: {
      es: 'Gestión de Reclamaciones',
      en: 'Claims Management',
    },
    description: {
      es: 'Curso sobre procesamiento de reclamaciones, investigación de siniestros y servicio al cliente.',
      en: 'Course on claims processing, loss investigation, and customer service.',
    },
    targetCategories: ['professional'],
    targetProfiles: ['prof-competent'],
    targetCompetencies: ['claims-management'],
    url: '#',
    duration: '25 horas',
    priority: 2,
    isActive: true,
  },
  {
    id: 'course-soft-skills',
    type: 'course',
    name: {
      es: 'Habilidades de Comunicación Efectiva',
      en: 'Effective Communication Skills',
    },
    description: {
      es: 'Desarrollo de habilidades de comunicación verbal, escrita y presentaciones.',
      en: 'Development of verbal, written, and presentation communication skills.',
    },
    targetCategories: ['soft-skills'],
    targetProfiles: ['soft-developing', 'soft-reserved'],
    targetCompetencies: ['communication'],
    url: '#',
    duration: '15 horas',
    priority: 1,
    isActive: true,
  },
  {
    id: 'course-leadership',
    type: 'course',
    name: {
      es: 'Liderazgo en el Sector Seguros',
      en: 'Leadership in Insurance',
    },
    description: {
      es: 'Programa de desarrollo de liderazgo para profesionales del sector seguros.',
      en: 'Leadership development program for insurance professionals.',
    },
    targetCategories: ['soft-skills'],
    targetProfiles: ['soft-leader'],
    targetCompetencies: ['teamwork'],
    url: '#',
    duration: '40 horas',
    priority: 3,
    isActive: true,
  },
  {
    id: 'course-digital',
    type: 'course',
    name: {
      es: 'Transformación Digital en Seguros',
      en: 'Digital Transformation in Insurance',
    },
    description: {
      es: 'Introducción a las tecnologías digitales y su impacto en la industria de seguros.',
      en: 'Introduction to digital technologies and their impact on the insurance industry.',
    },
    targetCategories: ['readiness'],
    targetProfiles: ['ready-cautious', 'ready-adapter'],
    targetCompetencies: ['tech-adoption'],
    url: '#',
    duration: '20 horas',
    priority: 1,
    isActive: true,
  },

  // Activities
  {
    id: 'activity-shadowing',
    type: 'activity',
    name: {
      es: 'Shadowing con Experto',
      en: 'Expert Shadowing',
    },
    description: {
      es: 'Acompañamiento a un profesional experimentado durante sus actividades diarias.',
      en: 'Accompanying an experienced professional during their daily activities.',
    },
    targetCategories: ['professional'],
    targetProfiles: ['prof-beginner', 'prof-developing'],
    targetCompetencies: [],
    priority: 1,
    isActive: true,
  },
  {
    id: 'activity-case-study',
    type: 'activity',
    name: {
      es: 'Análisis de Casos Reales',
      en: 'Real Case Analysis',
    },
    description: {
      es: 'Ejercicio práctico analizando casos reales de suscripción y reclamaciones.',
      en: 'Practical exercise analyzing real underwriting and claims cases.',
    },
    targetCategories: ['professional'],
    targetProfiles: ['prof-developing', 'prof-competent'],
    targetCompetencies: ['underwriting', 'claims-management'],
    priority: 2,
    isActive: true,
  },
  {
    id: 'activity-role-play',
    type: 'activity',
    name: {
      es: 'Role Play de Servicio al Cliente',
      en: 'Customer Service Role Play',
    },
    description: {
      es: 'Simulaciones de interacciones con clientes para practicar comunicación.',
      en: 'Client interaction simulations to practice communication.',
    },
    targetCategories: ['soft-skills'],
    targetProfiles: ['soft-developing', 'soft-collaborator'],
    targetCompetencies: ['communication', 'customer-service'],
    priority: 1,
    isActive: true,
  },
  {
    id: 'activity-tech-pilot',
    type: 'activity',
    name: {
      es: 'Piloto de Nueva Tecnología',
      en: 'New Technology Pilot',
    },
    description: {
      es: 'Participación en proyectos piloto para probar nuevas herramientas tecnológicas.',
      en: 'Participation in pilot projects to test new technological tools.',
    },
    targetCategories: ['readiness'],
    targetProfiles: ['ready-adapter', 'ready-innovator'],
    targetCompetencies: ['tech-adoption'],
    priority: 2,
    isActive: true,
  },

  // Resources
  {
    id: 'resource-glossary',
    type: 'resource',
    name: {
      es: 'Glosario de Términos de Seguros',
      en: 'Insurance Terms Glossary',
    },
    description: {
      es: 'Diccionario completo de términos técnicos del sector seguros.',
      en: 'Complete dictionary of technical terms in the insurance sector.',
    },
    targetCategories: ['professional'],
    targetProfiles: [],
    targetCompetencies: ['product-knowledge'],
    url: '#',
    priority: 1,
    isActive: true,
  },
  {
    id: 'resource-templates',
    type: 'resource',
    name: {
      es: 'Plantillas de Comunicación',
      en: 'Communication Templates',
    },
    description: {
      es: 'Plantillas para comunicación con clientes en diferentes situaciones.',
      en: 'Templates for client communication in different situations.',
    },
    targetCategories: ['soft-skills'],
    targetProfiles: [],
    targetCompetencies: ['communication'],
    url: '#',
    priority: 2,
    isActive: true,
  },
  {
    id: 'resource-podcast',
    type: 'resource',
    name: {
      es: 'Podcast: Innovación en Seguros',
      en: 'Podcast: Insurance Innovation',
    },
    description: {
      es: 'Episodios semanales sobre tendencias y tecnología en seguros.',
      en: 'Weekly episodes on trends and technology in insurance.',
    },
    targetCategories: ['readiness'],
    targetProfiles: [],
    targetCompetencies: ['tech-adoption', 'continuous-learning'],
    url: '#',
    priority: 3,
    isActive: true,
  },

  // Strategies
  {
    id: 'strategy-mentoring',
    type: 'strategy',
    name: {
      es: 'Programa de Mentoría',
      en: 'Mentoring Program',
    },
    description: {
      es: 'Asignación de un mentor experimentado para guiar el desarrollo profesional.',
      en: 'Assignment of an experienced mentor to guide professional development.',
    },
    targetCategories: ['professional', 'soft-skills'],
    targetProfiles: ['prof-beginner', 'prof-developing'],
    targetCompetencies: [],
    priority: 1,
    isActive: true,
  },
  {
    id: 'strategy-peer-support',
    type: 'strategy',
    name: {
      es: 'Grupos de Apoyo entre Pares',
      en: 'Peer Support Groups',
    },
    description: {
      es: 'Grupos pequeños para compartir experiencias y aprender juntos.',
      en: 'Small groups to share experiences and learn together.',
    },
    targetCategories: ['soft-skills', 'readiness'],
    targetProfiles: ['soft-developing', 'ready-cautious'],
    targetCompetencies: ['teamwork'],
    priority: 2,
    isActive: true,
  },
  {
    id: 'strategy-gradual-tech',
    type: 'strategy',
    name: {
      es: 'Adopción Tecnológica Gradual',
      en: 'Gradual Technology Adoption',
    },
    description: {
      es: 'Plan paso a paso para adoptar nuevas tecnologías con apoyo continuo.',
      en: 'Step-by-step plan to adopt new technologies with ongoing support.',
    },
    targetCategories: ['readiness'],
    targetProfiles: ['ready-traditional', 'ready-cautious'],
    targetCompetencies: ['tech-adoption', 'adaptability'],
    priority: 1,
    isActive: true,
  },
];
