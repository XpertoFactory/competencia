import type { Profile, CompetencyCategory } from '@/types';

export const profiles: Profile[] = [
  {
    id: 'salud-vida',
    name: {
      es: 'Técnico en Seguros de Salud y Vida',
      en: 'Health and Life Insurance Technician',
    },
    description: {
      es: 'Profesional especializado en productos de seguros de salud, vida y beneficios para empleados. Requiere conocimientos en suscripción, reclamaciones y servicio al cliente.',
      en: 'Professional specialized in health, life, and employee benefits insurance products. Requires knowledge in underwriting, claims, and customer service.',
    },
    competencyCategories: ['professional', 'soft-skills', 'readiness'],
    isActive: true,
  },
  {
    id: 'riesgos-generales',
    name: {
      es: 'Técnico en Seguros de Riesgos Generales, RC y Fianzas',
      en: 'General Risks, Liability and Surety Insurance Technician',
    },
    description: {
      es: 'Profesional especializado en seguros de propiedad, responsabilidad civil, fianzas y riesgos comerciales. Requiere conocimientos en evaluación de riesgos y gestión de siniestros.',
      en: 'Professional specialized in property, liability, surety, and commercial risk insurance. Requires knowledge in risk assessment and claims management.',
    },
    competencyCategories: ['professional', 'soft-skills', 'readiness'],
    isActive: true,
  },
];

export const competencyCategories: CompetencyCategory[] = [
  {
    id: 'professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
    },
    description: {
      es: 'Conocimientos técnicos, habilidades y capacidades específicas del sector de seguros.',
      en: 'Technical knowledge, skills, and capabilities specific to the insurance sector.',
    },
    competencies: [
      {
        id: 'product-knowledge',
        name: { es: 'Conocimiento del Producto', en: 'Product Knowledge' },
        description: {
          es: 'Comprensión profunda de los productos de seguros y sus características.',
          en: 'Deep understanding of insurance products and their features.',
        },
        weight: 0.25,
      },
      {
        id: 'underwriting',
        name: { es: 'Suscripción', en: 'Underwriting' },
        description: {
          es: 'Capacidad para evaluar riesgos y tomar decisiones de suscripción.',
          en: 'Ability to assess risks and make underwriting decisions.',
        },
        weight: 0.25,
      },
      {
        id: 'claims-management',
        name: { es: 'Gestión de Reclamaciones', en: 'Claims Management' },
        description: {
          es: 'Habilidad para procesar y gestionar reclamaciones de manera eficiente.',
          en: 'Skill in processing and managing claims efficiently.',
        },
        weight: 0.25,
      },
      {
        id: 'regulatory-compliance',
        name: { es: 'Cumplimiento Normativo', en: 'Regulatory Compliance' },
        description: {
          es: 'Conocimiento de regulaciones y capacidad de asegurar cumplimiento.',
          en: 'Knowledge of regulations and ability to ensure compliance.',
        },
        weight: 0.25,
      },
    ],
    order: 1,
  },
  {
    id: 'soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
    },
    description: {
      es: 'Competencias interpersonales y de comunicación esenciales para el éxito profesional.',
      en: 'Interpersonal and communication competencies essential for professional success.',
    },
    competencies: [
      {
        id: 'communication',
        name: { es: 'Comunicación', en: 'Communication' },
        description: {
          es: 'Capacidad para comunicarse efectivamente con clientes y colegas.',
          en: 'Ability to communicate effectively with clients and colleagues.',
        },
        weight: 0.3,
      },
      {
        id: 'teamwork',
        name: { es: 'Trabajo en Equipo', en: 'Teamwork' },
        description: {
          es: 'Habilidad para colaborar y trabajar efectivamente en equipos.',
          en: 'Skill in collaborating and working effectively in teams.',
        },
        weight: 0.25,
      },
      {
        id: 'problem-solving',
        name: { es: 'Resolución de Problemas', en: 'Problem Solving' },
        description: {
          es: 'Capacidad para analizar situaciones y encontrar soluciones efectivas.',
          en: 'Ability to analyze situations and find effective solutions.',
        },
        weight: 0.25,
      },
      {
        id: 'customer-service',
        name: { es: 'Servicio al Cliente', en: 'Customer Service' },
        description: {
          es: 'Orientación al cliente y capacidad de brindar excelente servicio.',
          en: 'Customer orientation and ability to provide excellent service.',
        },
        weight: 0.2,
      },
    ],
    order: 2,
  },
  {
    id: 'readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
    },
    description: {
      es: 'Capacidad de adaptación, aprendizaje continuo y adopción de nuevas tecnologías.',
      en: 'Adaptability, continuous learning, and adoption of new technologies.',
    },
    competencies: [
      {
        id: 'adaptability',
        name: { es: 'Adaptabilidad', en: 'Adaptability' },
        description: {
          es: 'Flexibilidad para ajustarse a nuevas situaciones y cambios.',
          en: 'Flexibility to adjust to new situations and changes.',
        },
        weight: 0.35,
      },
      {
        id: 'continuous-learning',
        name: { es: 'Aprendizaje Continuo', en: 'Continuous Learning' },
        description: {
          es: 'Motivación y capacidad para aprender constantemente.',
          en: 'Motivation and ability to learn constantly.',
        },
        weight: 0.35,
      },
      {
        id: 'tech-adoption',
        name: { es: 'Adopción Tecnológica', en: 'Technology Adoption' },
        description: {
          es: 'Disposición para adoptar y utilizar nuevas tecnologías.',
          en: 'Willingness to adopt and use new technologies.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },
];
