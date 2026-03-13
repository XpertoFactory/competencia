import type { Profile, CompetencyCategory, ProfileSector, ProfileLevel } from '@/types';

export const profiles: Profile[] = [
  {
    id: 'salud-vida',
    name: {
      es: 'Técnico en Seguros de Salud y Vida',
      en: 'Health and Life Insurance Technician',
      fr: 'Technicien en Assurance Santé et Vie',
    },
    description: {
      es: 'Profesional especializado en productos de seguros de salud, vida y beneficios para empleados. Requiere conocimientos en suscripción, reclamaciones y servicio al cliente.',
      en: 'Professional specialized in health, life, and employee benefits insurance products. Requires knowledge in underwriting, claims, and customer service.',
      fr: 'Professionnel spécialisé dans les produits d\'assurance santé, vie et avantages sociaux. Nécessite des connaissances en souscription, sinistres et service client.',
    },
    sectors: ['insurance'] as ProfileSector[],
    level: 'professional-specialist' as ProfileLevel,
    competencyCategories: ['professional', 'soft-skills', 'readiness'],
    isActive: true,
  },
  {
    id: 'riesgos-generales',
    name: {
      es: 'Técnico en Seguros de Riesgos Generales, RC y Fianzas',
      en: 'General Risks, Liability and Surety Insurance Technician',
      fr: 'Technicien en Assurance Risques Généraux, RC et Cautions',
    },
    description: {
      es: 'Profesional especializado en seguros de propiedad, responsabilidad civil, fianzas y riesgos comerciales. Requiere conocimientos en evaluación de riesgos y gestión de siniestros.',
      en: 'Professional specialized in property, liability, surety, and commercial risk insurance. Requires knowledge in risk assessment and claims management.',
      fr: 'Professionnel spécialisé dans les assurances de biens, responsabilité civile, cautions et risques commerciaux. Nécessite des connaissances en évaluation des risques et gestion des sinistres.',
    },
    sectors: ['insurance'] as ProfileSector[],
    level: 'professional-specialist' as ProfileLevel,
    competencyCategories: ['professional', 'soft-skills', 'readiness'],
    isActive: true,
  },
  {
    id: 'pre-school-educator',
    name: {
      es: 'Educador de Preescolar',
      en: 'Pre-School Educator',
      fr: 'Éducateur Préscolaire',
    },
    description: {
      es: 'Profesional dedicado a la educación y desarrollo integral de niños en edad preescolar (3-6 años). Requiere competencias en pedagogía creativa, desarrollo infantil temprano, inteligencia emocional y comunicación con padres de familia.',
      en: 'Professional dedicated to the education and holistic development of pre-school age children (3-6 years). Requires competencies in creative pedagogy, early childhood development, emotional intelligence, and parent communication.',
      fr: 'Professionnel dédié à l\'éducation et au développement global des enfants d\'âge préscolaire (3-6 ans). Nécessite des compétences en pédagogie créative, développement de la petite enfance, intelligence émotionnelle et communication avec les parents.',
    },
    sectors: ['education'] as ProfileSector[],
    level: 'professional-specialist' as ProfileLevel,
    competencyCategories: ['edu-preschool-professional', 'edu-preschool-soft-skills', 'edu-preschool-readiness'],
    isActive: true,
  },
  {
    id: 'primary-school-educator',
    name: {
      es: 'Educador de Primaria',
      en: 'Primary School Educator',
      fr: 'Éducateur du Primaire',
    },
    description: {
      es: 'Profesional dedicado a la enseñanza de niños en educación primaria (6-12 años). Requiere competencias en diseño curricular, instrucción diferenciada, evaluación estudiantil, tecnología educativa y bienestar del alumno.',
      en: 'Professional dedicated to teaching children in primary education (6-12 years). Requires competencies in curriculum design, differentiated instruction, student assessment, educational technology, and student wellbeing.',
      fr: 'Professionnel dédié à l\'enseignement des enfants en éducation primaire (6-12 ans). Nécessite des compétences en conception de programmes, instruction différenciée, évaluation des élèves, technologie éducative et bien-être des élèves.',
    },
    sectors: ['education'] as ProfileSector[],
    level: 'professional-specialist' as ProfileLevel,
    competencyCategories: ['edu-primary-professional', 'edu-primary-soft-skills', 'edu-primary-readiness'],
    isActive: true,
  },
  {
    id: 'secondary-school-educator',
    name: {
      es: 'Educador de Secundaria',
      en: 'Secondary School Educator',
      fr: 'Éducateur du Secondaire',
    },
    description: {
      es: 'Profesional dedicado a la enseñanza de adolescentes en educación secundaria y preparatoria (12-18 años). Requiere competencias en dominio de materia, desarrollo adolescente, métodos avanzados de evaluación, pensamiento crítico y orientación vocacional.',
      en: 'Professional dedicated to teaching adolescents in middle and high school (12-18 years). Requires competencies in subject matter expertise, adolescent development, advanced assessment methods, critical thinking development, and college/career readiness guidance.',
      fr: 'Professionnel dédié à l\'enseignement des adolescents au collège et au lycée (12-18 ans). Nécessite des compétences en expertise disciplinaire, développement adolescent, méthodes d\'évaluation avancées, développement de la pensée critique et orientation professionnelle.',
    },
    sectors: ['education'] as ProfileSector[],
    level: 'professional-specialist' as ProfileLevel,
    competencyCategories: ['edu-secondary-professional', 'edu-secondary-soft-skills', 'edu-secondary-readiness'],
    isActive: true,
  },
  {
    id: 'sales-associate',
    name: {
      es: 'Dependiente de Tienda / Asesor de Ventas',
      en: 'Sales Associate',
      fr: 'Vendeur / Conseiller de Vente',
    },
    description: {
      es: 'Profesional de ventas al detalle en tiendas de telecomunicaciones, ropa, electrónica u otros establecimientos comerciales. Requiere competencias en atención al cliente, técnicas de venta, manejo de sistemas de punto de venta, merchandising visual y trabajo en equipo.',
      en: 'Retail sales professional in telecommunications, clothing, electronics, or other commercial establishments. Requires competencies in customer service, sales techniques, POS/inventory systems, visual merchandising, and team collaboration.',
      fr: 'Professionnel de la vente au détail dans les magasins de télécommunications, vêtements, électronique ou autres établissements commerciaux. Nécessite des compétences en service client, techniques de vente, systèmes de point de vente, merchandising visuel et travail d\'équipe.',
    },
    sectors: ['retail-services'] as ProfileSector[],
    level: 'operative' as ProfileLevel,
    competencyCategories: ['sales-professional', 'sales-soft-skills', 'sales-readiness'],
    isActive: true,
  },
  {
    id: 'ridehailing-driver',
    name: {
      es: 'Conductor de Plataforma de Transporte',
      en: 'Ride-Hailing Driver',
      fr: 'Chauffeur de VTC',
    },
    description: {
      es: 'Conductor profesional que opera a través de plataformas digitales de transporte de pasajeros. Requiere competencias en seguridad del pasajero, habilidades de navegación, servicio al cliente, mantenimiento vehicular, gestión del tiempo, dominio de aplicaciones y tecnología, resolución de conflictos, educación financiera, conocimiento de regulaciones locales y conciencia de accesibilidad.',
      en: 'Professional driver who operates through digital passenger transportation platforms. Requires competencies in passenger safety, navigation skills, customer service, vehicle maintenance, time management, app and technology proficiency, conflict resolution, financial literacy, local regulations knowledge, and accessibility awareness.',
      fr: 'Chauffeur professionnel opérant via des plateformes numériques de transport de passagers. Nécessite des compétences en sécurité des passagers, navigation, service client, entretien du véhicule, gestion du temps, maîtrise des applications et de la technologie, résolution de conflits, littératie financière, connaissance des réglementations locales et sensibilisation à l\'accessibilité.',
    },
    sectors: ['retail-services', 'transportation'] as ProfileSector[],
    level: 'operative' as ProfileLevel,
    competencyCategories: ['ridehailing-professional', 'ridehailing-soft-skills', 'ridehailing-readiness'],
    isActive: true,
  },
  {
    id: 'pharmacy-clerk',
    name: {
      es: 'Auxiliar de Farmacia',
      en: 'Pharmacy Clerk',
      fr: 'Préparateur/trice en pharmacie',
    },
    description: {
      es: 'Personal de apoyo en farmacia que atiende clientes en el mostrador, maneja ventas de productos de venta libre, gestiona inventario y reposición de estantes, procesa pagos, brinda información básica de productos (no clínica), mantiene la limpieza de la tienda, atiende consultas telefónicas y apoya al farmacéutico con tareas administrativas.',
      en: 'A pharmacy support staff member who assists customers at the counter, handles over-the-counter product sales, manages inventory and shelf stocking, processes payments, provides basic product information (non-clinical), maintains store cleanliness, handles phone inquiries, and supports the pharmacist with administrative tasks.',
      fr: 'Personnel de soutien en pharmacie qui assiste les clients au comptoir, gère les ventes de produits en vente libre, gère les stocks et le réapprovisionnement des rayons, traite les paiements, fournit des informations de base sur les produits (non cliniques), maintient la propreté du magasin, répond aux appels téléphoniques et soutient le pharmacien dans les tâches administratives.',
    },
    sectors: ['healthcare', 'retail-services'] as ProfileSector[],
    level: 'operative' as ProfileLevel,
    competencyCategories: ['pharmacy-professional', 'pharmacy-soft-skills', 'pharmacy-readiness'],
    isActive: true,
  },
  {
    id: 'pharmacist',
    name: {
      es: 'Farmacéutico/a',
      en: 'Pharmacist',
      fr: 'Pharmacien(ne)',
    },
    description: {
      es: 'Farmacéutico/a licenciado/a responsable de dispensar medicamentos, brindar atención farmacéutica, asesorar a pacientes sobre interacciones medicamentosas, dosis y efectos secundarios, gestionar sustancias controladas, asegurar el cumplimiento regulatorio, supervisar personal de farmacia y administrar el inventario de medicamentos.',
      en: 'A licensed pharmacist responsible for dispensing medications, providing pharmaceutical care, counseling patients on drug interactions, dosages and side effects, managing controlled substances, ensuring regulatory compliance, supervising pharmacy staff, and managing inventory of medications.',
      fr: 'Pharmacien(ne) diplômé(e) responsable de la dispensation des médicaments, des soins pharmaceutiques, du conseil aux patients sur les interactions médicamenteuses, les posologies et les effets secondaires, de la gestion des substances contrôlées, de la conformité réglementaire, de la supervision du personnel de pharmacie et de la gestion des stocks de médicaments.',
    },
    sectors: ['healthcare', 'retail-services'] as ProfileSector[],
    level: 'professional-specialist' as ProfileLevel,
    competencyCategories: ['pharma-professional', 'pharma-soft-skills', 'pharma-readiness'],
    isActive: true,
  },
  {
    id: 'business-manager',
    name: {
      es: 'Gerente de Negocios',
      en: 'Business Manager',
      fr: 'Directeur Commercial',
    },
    description: {
      es: 'Gestiona el área de negocios y comercial. Responsable del crecimiento de ingresos, gestión de relaciones con clientes, análisis de mercado, desarrollo de estrategia comercial, liderazgo de equipos de ventas, gestión de P&L, desarrollo de nuevos negocios, inteligencia competitiva, negociación de alianzas, planificación comercial y estrategias de precios.',
      en: 'Manages the business/commercial area. Responsible for revenue growth, client relationship management, market analysis, business strategy development, sales team leadership, P&L management, new business development, competitive intelligence, partnership negotiations, commercial planning, and pricing strategies.',
      fr: 'Gère le domaine commercial et des affaires. Responsable de la croissance des revenus, de la gestion des relations clients, de l\'analyse de marché, du développement de la stratégie commerciale, du leadership des équipes de vente, de la gestion du P&L, du développement de nouvelles affaires, de la veille concurrentielle, de la négociation de partenariats, de la planification commerciale et des stratégies de prix.',
    },
    sectors: ['commercial-business'] as ProfileSector[],
    level: 'managerial' as ProfileLevel,
    competencyCategories: ['bm-professional', 'bm-soft-skills', 'bm-readiness'],
    isActive: true,
  },
  {
    id: 'gas-station-attendant',
    name: {
      es: 'Personal de Estación de Gasolina',
      en: 'Gas Station Attendant',
      fr: 'Pompiste / Agent de station-service',
    },
    description: {
      es: 'Empleado de estación de servicio que atiende a clientes en bombas de combustible, despacha gasolina, procesa pagos en efectivo y tarjeta, realiza revisiones básicas de vehículos (aceite, agua, presión de llantas), mantiene la limpieza de la estación, sigue protocolos de seguridad para materiales inflamables, maneja ventas de tienda de conveniencia y responde ante situaciones de emergencia.',
      en: 'Gas station employee who serves customers at fuel pumps, handles fuel dispensing, processes cash and card payments, performs basic vehicle checks (oil, water, tire pressure) when requested, maintains cleanliness of the station area, follows safety protocols for handling flammable materials, manages convenience store sales if applicable, and handles emergency situations.',
      fr: 'Employé de station-service qui sert les clients aux pompes à carburant, gère la distribution de carburant, traite les paiements en espèces et par carte, effectue des vérifications de base des véhicules (huile, eau, pression des pneus) sur demande, maintient la propreté de la station, suit les protocoles de sécurité pour les matières inflammables, gère les ventes en boutique de proximité et gère les situations d\'urgence.',
    },
    sectors: ['retail-services', 'transportation'] as ProfileSector[],
    level: 'operative' as ProfileLevel,
    competencyCategories: ['gas-station-professional', 'gas-station-soft-skills', 'gas-station-readiness'],
    isActive: true,
  },
  {
    id: 'aml-compliance-officer',
    name: {
      es: 'Oficial de Cumplimiento PLAFT',
      en: 'AML/CFT Compliance Officer',
      fr: 'Responsable Conformité LCB-FT',
    },
    description: {
      es: 'Profesional responsable de la Prevención de Lavado de Activos, Financiamiento del Terrorismo y la Proliferación de Armas de Destrucción Masiva (PLAFT). Diseña e implementa programas de cumplimiento, realiza evaluaciones de riesgo, presenta reportes de operaciones sospechosas (ROS), capacita al personal en procedimientos antilavado, se relaciona con reguladores y unidades de inteligencia financiera (UIF), ejecuta procesos de Conoce a tu Cliente (KYC/DDC), monitorea transacciones para detectar señales de alerta, y asegura que la organización cumpla con todos los requisitos regulatorios conforme a las recomendaciones del GAFI/FATF y la legislación local.',
      en: 'Professional responsible for preventing money laundering, terrorist financing, and weapons of mass destruction proliferation financing (AML/CFT). Designs and implements compliance programs, conducts risk assessments, files suspicious activity reports (SAR), trains staff on AML procedures, liaises with regulators and financial intelligence units (FIU), performs Know Your Customer / Customer Due Diligence (KYC/CDD), monitors transactions for red flags, and ensures the organization meets all regulatory requirements in accordance with FATF recommendations and local legislation.',
      fr: 'Professionnel responsable de la prévention du blanchiment de capitaux, du financement du terrorisme et de la prolifération des armes de destruction massive (LCB-FT). Conçoit et met en œuvre des programmes de conformité, effectue des évaluations des risques, dépose des déclarations de soupçon (DS), forme le personnel aux procédures anti-blanchiment, assure la liaison avec les régulateurs et les cellules de renseignement financier (CRF), exécute les procédures de connaissance du client (KYC/CDD), surveille les transactions pour détecter les signaux d\'alerte, et veille à ce que l\'organisation respecte toutes les exigences réglementaires conformément aux recommandations du GAFI et à la législation locale.',
    },
    sectors: ['compliance-legal'] as ProfileSector[],
    level: 'professional-specialist' as ProfileLevel,
    competencyCategories: ['aml-professional', 'aml-soft-skills', 'aml-readiness'],
    isActive: true,
  },
  {
    id: 'hr-manager',
    name: {
      es: 'Gerente de Recursos Humanos',
      en: 'Human Resources Manager',
      fr: 'Responsable des Ressources Humaines',
    },
    description: {
      es: 'Responsable del departamento de Recursos Humanos. Gestiona la adquisición de talento, relaciones laborales, gestión del desempeño, compensación y beneficios, capacitación y desarrollo, cumplimiento de legislación laboral, desarrollo organizacional, planificación de fuerza laboral, compromiso de los colaboradores, mediación de conflictos y diseño de políticas de RR.HH.',
      en: 'Manages the HR department. Responsible for talent acquisition, employee relations, performance management, compensation & benefits, training & development, labor law compliance, organizational development, workforce planning, employee engagement, conflict mediation, and HR policy design.',
      fr: 'Responsable du département des Ressources Humaines. Gère l\'acquisition de talents, les relations avec les employés, la gestion de la performance, la rémunération et les avantages sociaux, la formation et le développement, la conformité au droit du travail, le développement organisationnel, la planification des effectifs, l\'engagement des collaborateurs, la médiation des conflits et la conception des politiques RH.',
    },
    sectors: ['human-resources'] as ProfileSector[],
    level: 'managerial' as ProfileLevel,
    competencyCategories: ['hr-professional', 'hr-soft-skills', 'hr-readiness'],
    isActive: true,
  },
  {
    id: 'business-officer',
    name: {
      es: 'Ejecutivo de Negocios',
      en: 'Business Officer',
      fr: 'Chargé d\'Affaires',
    },
    description: {
      es: 'Rol comercial de nivel ejecutivo responsable de la prospección de nuevos clientes, gestión de cartera de clientes, elaboración de propuestas comerciales, cumplimiento de cuotas de ventas, presentaciones de productos, procesamiento de pedidos y contratos, mantenimiento de registros en CRM, seguimiento de prospectos, venta cruzada y upselling, reportes de actividad comercial y asistencia a eventos del sector.',
      en: 'Execution-level commercial role responsible for prospecting new clients, managing a client portfolio, preparing commercial proposals, meeting sales quotas, conducting product presentations, processing orders and contracts, maintaining CRM records, following up on leads, cross-selling and upselling, reporting sales activity, and attending trade events.',
      fr: 'Rôle commercial de niveau exécutif responsable de la prospection de nouveaux clients, de la gestion d\'un portefeuille clients, de la préparation de propositions commerciales, de l\'atteinte des quotas de vente, des présentations de produits, du traitement des commandes et contrats, de la tenue des registres CRM, du suivi des prospects, de la vente croisée et de la montée en gamme, des rapports d\'activité commerciale et de la participation aux événements du secteur.',
    },
    sectors: ['commercial-business'] as ProfileSector[],
    level: 'administrative' as ProfileLevel,
    competencyCategories: ['bo-professional', 'bo-soft-skills', 'bo-readiness'],
    isActive: true,
  },
  {
    id: 'customer-service-manager',
    name: {
      es: 'Gerente de Servicio al Cliente',
      en: 'Customer Service Manager',
      fr: 'Responsable Service Client',
    },
    description: {
      es: 'Gestiona el departamento de servicio al cliente. Responsable de la estrategia de satisfacción del cliente, acuerdos de nivel de servicio (SLAs), gestión de quejas y escalamiento, operaciones de centro de contacto, gestión de sistemas CRM, diseño de experiencia del cliente (CX), capacitación y coaching de equipos, aseguramiento de calidad, métricas NPS/CSAT, estrategia de servicio omnicanal y mejora continua de procesos.',
      en: 'Manages the customer service department. Responsible for customer satisfaction strategy, service level agreements (SLAs), complaint management and escalation, call center/contact center operations, CRM system management, customer experience (CX) design, team training and coaching, quality assurance, NPS/CSAT metrics, omnichannel service strategy, and process improvement.',
      fr: 'Gère le département de service client. Responsable de la stratégie de satisfaction client, des accords de niveau de service (SLA), de la gestion des réclamations et de l\'escalade, des opérations de centre de contact, de la gestion des systèmes CRM, de la conception de l\'expérience client (CX), de la formation et du coaching des équipes, de l\'assurance qualité, des métriques NPS/CSAT, de la stratégie de service omnicanal et de l\'amélioration continue des processus.',
    },
    sectors: ['customer-service'] as ProfileSector[],
    level: 'managerial' as ProfileLevel,
    competencyCategories: ['csm-professional', 'csm-soft-skills', 'csm-readiness'],
    isActive: true,
  },
  {
    id: 'hr-officer',
    name: {
      es: 'Oficial de Recursos Humanos',
      en: 'HR Officer',
      fr: 'Agent des Ressources Humaines',
    },
    description: {
      es: 'Rol de ejecución en Recursos Humanos. Responsable de procesar nóminas, mantener expedientes de empleados, coordinar la logística de reclutamiento (publicar vacantes, filtrar currículos, programar entrevistas), integrar nuevos colaboradores, administrar la inscripción de beneficios, dar seguimiento a asistencia y permisos, preparar reportes de RR.HH., atender consultas de empleados, apoyar procesos disciplinarios y gestionar documentación regulatoria.',
      en: 'An HR execution-level role. Responsible for processing payroll, maintaining employee records, coordinating recruitment logistics (posting jobs, screening resumes, scheduling interviews), onboarding new hires, administering benefits enrollment, tracking attendance and leave, preparing HR reports, handling employee inquiries, supporting disciplinary processes, and filing regulatory documentation.',
      fr: 'Un rôle d\'exécution en Ressources Humaines. Responsable du traitement de la paie, de la tenue des dossiers des employés, de la coordination logistique du recrutement (publication d\'offres, tri de CV, planification d\'entretiens), de l\'intégration des nouveaux employés, de l\'administration des avantages sociaux, du suivi des présences et des congés, de la préparation de rapports RH, de la gestion des demandes des employés, du soutien aux processus disciplinaires et du classement de la documentation réglementaire.',
    },
    sectors: ['human-resources'] as ProfileSector[],
    level: 'administrative' as ProfileLevel,
    competencyCategories: ['hro-professional', 'hro-soft-skills', 'hro-readiness'],
    isActive: true,
  },
  {
    id: 'collections-officer',
    name: {
      es: 'Oficial de Cobros',
      en: 'Collections Officer',
      fr: 'Agent de Recouvrement',
    },
    description: {
      es: 'Puesto operativo de cobros. Responsable de contactar a deudores por teléfono, correo electrónico o visita, negociar planes de pago, procesar pagos, documentar la actividad de cobranza, utilizar sistemas de gestión de cobros, escalar cuentas difíciles, cumplir con regulaciones de protección al consumidor, mantener registros precisos de cuentas y alcanzar metas de recuperación, manejando las objeciones de los clientes de manera profesional.',
      en: 'An execution-level collections role. Responsible for contacting debtors by phone, email, or visit, negotiating payment plans, processing payments, documenting collection activity, using collection management systems, escalating difficult accounts, following consumer protection regulations, maintaining accurate account records, meeting recovery targets, and handling customer objections professionally.',
      fr: 'Poste opérationnel de recouvrement. Responsable de contacter les débiteurs par téléphone, courriel ou visite, négocier des plans de paiement, traiter les paiements, documenter l\'activité de recouvrement, utiliser les systèmes de gestion de recouvrement, escalader les comptes difficiles, respecter les réglementations de protection des consommateurs, maintenir des registres de comptes précis, atteindre les objectifs de récupération et gérer les objections des clients de manière professionnelle.',
    },
    sectors: ['collections-credit'] as ProfileSector[],
    level: 'administrative' as ProfileLevel,
    competencyCategories: ['collections-professional', 'collections-soft-skills', 'collections-readiness'],
    isActive: true,
  },
  {
    id: 'customer-service-officer',
    name: {
      es: 'Oficial de Servicio al Cliente',
      en: 'Customer Service Officer',
      fr: 'Agent de Service Client',
    },
    description: {
      es: 'Rol de ejecución en servicio al cliente. Responsable de atender consultas de clientes (teléfono, correo electrónico, chat, presencial), resolver quejas, procesar solicitudes y transacciones, documentar interacciones en CRM, seguir guiones y protocolos de servicio, escalar casos complejos, cumplir metas de tiempo de respuesta, brindar información sobre productos y servicios, realizar seguimientos de satisfacción del cliente y mantener estándares de calidad de servicio.',
      en: 'An execution-level customer service role. Responsible for answering customer inquiries (phone, email, chat, in-person), resolving complaints, processing requests and transactions, documenting interactions in CRM, following service scripts and protocols, escalating complex issues, meeting response time targets, providing product/service information, conducting customer satisfaction follow-ups, and maintaining service quality standards.',
      fr: 'Un rôle d\'exécution en service client. Responsable de répondre aux demandes des clients (téléphone, courriel, chat, en personne), résoudre les plaintes, traiter les demandes et transactions, documenter les interactions dans le CRM, suivre les scripts et protocoles de service, escalader les problèmes complexes, atteindre les objectifs de temps de réponse, fournir des informations sur les produits et services, effectuer des suivis de satisfaction client et maintenir les standards de qualité de service.',
    },
    sectors: ['customer-service'] as ProfileSector[],
    level: 'administrative' as ProfileLevel,
    competencyCategories: ['cso-professional', 'cso-soft-skills', 'cso-readiness'],
    isActive: true,
  },
  {
    id: 'collections-manager',
    name: {
      es: 'Gerente de Cobros',
      en: 'Collections Manager',
      fr: 'Responsable du Recouvrement',
    },
    description: {
      es: 'Gestiona el departamento de cobros y cuentas por cobrar. Responsable de diseñar estrategias de cobranza, administrar portafolios de morosidad, supervisar reportes de antigüedad de saldos, establecer metas de recuperación, supervisar al equipo de cobros, negociar con deudores principales, asegurar el cumplimiento regulatorio (protección al consumidor, prácticas justas de cobranza), implementar sistemas y herramientas de cobranza, reportar a la alta dirección y gestionar agencias externas de cobro.',
      en: 'Manages the collections/accounts receivable department. Responsible for designing collection strategies, managing delinquency portfolios, overseeing aging reports, setting recovery targets, supervising the collections team, negotiating with major debtors, ensuring regulatory compliance (consumer protection, fair debt collection), implementing collection systems/tools, reporting to senior management, and managing external collection agencies.',
      fr: 'Gère le département de recouvrement et des comptes clients. Responsable de la conception de stratégies de recouvrement, de la gestion des portefeuilles de créances impayées, de la supervision des rapports d\'ancienneté des soldes, de l\'établissement d\'objectifs de récupération, de la supervision de l\'équipe de recouvrement, de la négociation avec les débiteurs principaux, du respect de la conformité réglementaire (protection du consommateur, pratiques équitables de recouvrement), de la mise en œuvre de systèmes et outils de recouvrement, du reporting à la direction générale et de la gestion des agences de recouvrement externes.',
    },
    sectors: ['collections-credit'] as ProfileSector[],
    level: 'managerial' as ProfileLevel,
    competencyCategories: ['colmgr-professional', 'colmgr-soft-skills', 'colmgr-readiness'],
    isActive: true,
  },
  {
    id: 'accounting-officer',
    name: {
      es: 'Oficial de Contabilidad',
      en: 'Accounting Officer',
      fr: 'Agent Comptable',
    },
    description: {
      es: 'Rol contable de nivel operativo. Responsable de asientos diarios, procesamiento de cuentas por pagar y cobrar, conciliaciones bancarias, procesamiento de facturas, verificación de informes de gastos, manejo de caja chica, ingreso de datos en sistemas ERP/contables, archivo de documentos fiscales, preparación de cédulas de soporte y mantenimiento de registros financieros organizados, y apoyo en auditorías.',
      en: 'An execution-level accounting role. Responsible for daily journal entries, accounts payable/receivable processing, bank reconciliations, invoice processing, expense report verification, petty cash management, data entry into ERP/accounting systems, filing tax documents, preparing supporting schedules, maintaining organized financial records, and assisting with audits.',
      fr: 'Un rôle comptable de niveau opérationnel. Responsable des écritures journalières, du traitement des comptes fournisseurs et clients, des rapprochements bancaires, du traitement des factures, de la vérification des notes de frais, de la gestion de la petite caisse, de la saisie de données dans les systèmes ERP/comptables, du classement des documents fiscaux, de la préparation des annexes justificatives, de la tenue de registres financiers organisés et du soutien aux audits.',
    },
    sectors: ['finance-accounting'] as ProfileSector[],
    level: 'administrative' as ProfileLevel,
    competencyCategories: ['acct-professional', 'acct-soft-skills', 'acct-readiness'],
    isActive: true,
  },
  {
    id: 'executive-assistant',
    name: {
      es: 'Secretaria Ejecutiva',
      en: 'Executive Assistant',
      fr: 'Assistant(e) de Direction',
    },
    description: {
      es: 'Brinda soporte administrativo de alto nivel a ejecutivos y alta gerencia. Responsable de la gestión de agenda y calendario, coordinación de viajes, preparación de reuniones y minutas, gestión de correspondencia y comunicaciones, preparación y archivo de documentos, manejo de información confidencial, coordinación de eventos, procesamiento de informes de gastos, gestión de suministros de oficina, enlace entre ejecutivos y partes interesadas internas y externas, preparación de presentaciones, y protocolo y etiqueta.',
      en: 'Provides high-level administrative support to executives and senior management. Responsible for calendar and agenda management, travel coordination, meeting preparation and minutes, correspondence and communication management, document preparation and filing, confidential information handling, event coordination, expense report processing, office supply management, liaison between executives and internal/external stakeholders, presentation preparation, and protocol and etiquette.',
      fr: 'Fournit un soutien administratif de haut niveau aux dirigeants et à la haute direction. Responsable de la gestion de l\'agenda et du calendrier, de la coordination des voyages, de la préparation des réunions et des comptes rendus, de la gestion de la correspondance et des communications, de la préparation et du classement des documents, du traitement des informations confidentielles, de la coordination d\'événements, du traitement des notes de frais, de la gestion des fournitures de bureau, de la liaison entre les dirigeants et les parties prenantes internes et externes, de la préparation de présentations, et du protocole et de l\'étiquette.',
    },
    sectors: ['general-management'] as ProfileSector[],
    level: 'administrative' as ProfileLevel,
    competencyCategories: ['ea-professional', 'ea-soft-skills', 'ea-readiness'],
    isActive: true,
  },
  {
    id: 'cfo',
    name: {
      es: 'Director Financiero',
      en: 'Chief Financial Officer (CFO)',
      fr: 'Directeur Financier',
    },
    description: {
      es: 'Ejecutivo de alta dirección responsable de la salud financiera de la organización. Responsable de la estrategia y planificación financiera, gestión de la estructura de capital, relaciones con inversionistas, informes financieros y cumplimiento (NIIF/PCGA), gestión de tesorería y flujo de caja, gestión de riesgos (financiero, de mercado, crediticio), presupuestación y pronósticos, estrategia fiscal, supervisión de auditoría interna, due diligence financiero en fusiones y adquisiciones, relaciones bancarias, cumplimiento regulatorio, optimización de costos y liderazgo del equipo financiero.',
      en: 'Senior executive responsible for the financial health of the organization. Responsible for financial strategy and planning, capital structure management, investor relations, financial reporting and compliance (IFRS/GAAP), treasury and cash flow management, risk management (financial, market, credit), budgeting and forecasting, tax strategy, internal audit oversight, mergers & acquisitions financial due diligence, banking relationships, regulatory compliance, cost optimization, and financial team leadership.',
      fr: 'Cadre dirigeant responsable de la santé financière de l\'organisation. Responsable de la stratégie et de la planification financières, de la gestion de la structure du capital, des relations avec les investisseurs, des rapports financiers et de la conformité (IFRS/GAAP), de la gestion de la trésorerie et des flux de trésorerie, de la gestion des risques (financier, de marché, de crédit), de la budgétisation et des prévisions, de la stratégie fiscale, de la supervision de l\'audit interne, de la due diligence financière dans les fusions et acquisitions, des relations bancaires, de la conformité réglementaire, de l\'optimisation des coûts et du leadership de l\'équipe financière.',
    },
    sectors: ['finance-accounting', 'general-management'] as ProfileSector[],
    level: 'executive' as ProfileLevel,
    competencyCategories: ['cfo-professional', 'cfo-soft-skills', 'cfo-readiness'],
    isActive: true,
  },
  {
    id: 'general-manager',
    name: {
      es: 'Gerente General',
      en: 'General Manager',
      fr: 'Directeur Général',
    },
    description: {
      es: 'Máximo ejecutivo responsable del desempeño organizacional integral. Responsable de la planificación estratégica y visión, liderazgo organizacional, responsabilidad sobre el P&L, relaciones con el directorio y gobernanza, gestión de partes interesadas, desarrollo de cultura corporativa, gestión de riesgos a nivel empresarial, fusiones y adquisiciones, supervisión del cumplimiento regulatorio y legal, estrategia de talento, gestión de crisis, representación pública de la organización, alineación interfuncional, y estrategia de innovación y crecimiento.',
      en: 'The top executive responsible for overall organizational performance. Responsible for strategic planning and vision, organizational leadership, P&L accountability, board relations and governance, stakeholder management, corporate culture development, risk management at enterprise level, mergers and acquisitions, regulatory and legal compliance oversight, talent strategy, crisis management, public representation of the organization, cross-functional alignment, innovation and growth strategy.',
      fr: 'Le cadre dirigeant responsable de la performance organisationnelle globale. Responsable de la planification stratégique et de la vision, du leadership organisationnel, de la responsabilité du P&L, des relations avec le conseil d\'administration et de la gouvernance, de la gestion des parties prenantes, du développement de la culture d\'entreprise, de la gestion des risques au niveau de l\'entreprise, des fusions et acquisitions, de la supervision de la conformité réglementaire et juridique, de la stratégie de talents, de la gestion de crise, de la représentation publique de l\'organisation, de l\'alignement interfonctionnel, et de la stratégie d\'innovation et de croissance.',
    },
    sectors: ['general-management'] as ProfileSector[],
    level: 'executive' as ProfileLevel,
    competencyCategories: ['gm-professional', 'gm-soft-skills', 'gm-readiness'],
    isActive: true,
  },
  {
    id: 'accounting-manager',
    name: {
      es: 'Gerente de Contabilidad',
      en: 'Accounting Manager',
      fr: 'Responsable Comptable',
    },
    description: {
      es: 'Gestiona el departamento de contabilidad. Responsable de la elaboración de informes financieros, administración del libro mayor, procesos de cierre mensual y anual, cumplimiento con NIIF/PCGA, cumplimiento y planificación tributaria, controles internos, coordinación de auditorías, presupuestos y proyecciones, supervisión de cuentas por pagar/cobrar, supervisión del equipo, gestión del sistema ERP y presentación de informes regulatorios.',
      en: 'Manages the accounting department. Responsible for financial reporting, general ledger management, month/year-end close processes, IFRS/GAAP compliance, tax compliance and planning, internal controls, audit coordination, budgeting and forecasting, accounts payable/receivable oversight, team supervision, ERP system management, and regulatory filings.',
      fr: 'Gère le département comptable. Responsable de l\'établissement des rapports financiers, de la gestion du grand livre, des processus de clôture mensuelle et annuelle, de la conformité IFRS/GAAP, de la conformité et planification fiscale, des contrôles internes, de la coordination des audits, de la budgétisation et des prévisions, de la supervision des comptes fournisseurs/clients, de la supervision de l\'équipe, de la gestion du système ERP et des déclarations réglementaires.',
    },
    sectors: ['finance-accounting'] as ProfileSector[],
    level: 'managerial' as ProfileLevel,
    competencyCategories: ['acctmgr-professional', 'acctmgr-soft-skills', 'acctmgr-readiness'],
    isActive: true,
  },
  {
    id: 'secondary-principal',
    name: {
      es: 'Director de Escuela Secundaria',
      en: 'Secondary School Principal',
      fr: 'Directeur d\'Établissement Secondaire',
    },
    description: {
      es: 'Director de educación secundaria y preparatoria (grados 7-12 o equivalente). Responsable de la gestión de programas de educación secundaria, programas de preparación universitaria, desarrollo y bienestar adolescente, coordinación curricular avanzada (programas AP/IB si aplica), supervisión de actividades extracurriculares y deportivas, supervisión de programas de consejería estudiantil, gestión disciplinaria para adolescentes, programas de orientación vocacional, coordinación de pruebas estandarizadas, gestión de departamentos y especialización docente, gobierno estudiantil y desarrollo de liderazgo, programas de prevención de abuso de sustancias, y cumplimiento de requisitos de graduación.',
      en: 'Principal for middle and high school (grades 7-12 or equivalent). Responsible for secondary education program management, college/university preparation programs, adolescent development and welfare, advanced curriculum coordination (AP/IB programs if applicable), extracurricular and athletics oversight, student counseling program supervision, discipline management for adolescents, career guidance and vocational programs, standardized testing coordination, teacher specialization and department management, student government and leadership development, substance abuse prevention programs, and graduation requirements compliance.',
      fr: 'Directeur d\'établissement secondaire (classes de la 5e à la terminale ou équivalent). Responsable de la gestion des programmes d\'éducation secondaire, des programmes de préparation universitaire, du développement et du bien-être des adolescents, de la coordination des programmes avancés (AP/IB le cas échéant), de la supervision des activités extrascolaires et sportives, de la supervision des programmes de conseil aux élèves, de la gestion disciplinaire des adolescents, des programmes d\'orientation professionnelle, de la coordination des examens standardisés, de la gestion des départements et de la spécialisation des enseignants, du gouvernement étudiant et du développement du leadership, des programmes de prévention de l\'abus de substances, et de la conformité aux exigences de diplomation.',
    },
    sectors: ['education'] as ProfileSector[],
    level: 'managerial' as ProfileLevel,
    competencyCategories: ['secprincipal-professional', 'secprincipal-soft-skills', 'secprincipal-readiness'],
    isActive: true,
  },
  {
    id: 'elementary-principal',
    name: {
      es: 'Director de Escuela Primaria',
      en: 'Elementary School Principal',
      fr: 'Directeur d\'École Primaire',
    },
    description: {
      es: 'Director específicamente para escuelas primarias (grados K-6 o equivalente). Responsable de la calidad de programas de educación temprana y primaria, supervisión de programas de lectoescritura y matemáticas, evaluación y acompañamiento docente, participación y comunicación con padres de familia, manejo de conducta estudiantil para niños pequeños, coordinación de educación especial, programas de preparación escolar, promoción del aprendizaje basado en juego y experiencia, programas de nutrición y salud escolar, entorno escolar seguro y acogedor, e intervención temprana para dificultades de aprendizaje.',
      en: 'Principal specifically for elementary/primary school (grades K-6 or equivalent). Responsible for early childhood and primary education program quality, literacy and numeracy program oversight, teacher evaluation and coaching, parent engagement and communication, student behavior management for young learners, special education coordination, school readiness programs, play-based and experiential learning promotion, school nutrition and health programs, safe and nurturing school environment, early intervention for learning difficulties.',
      fr: 'Directeur spécifiquement pour les écoles primaires (classes de maternelle à CM2 ou équivalent). Responsable de la qualité des programmes d\'éducation de la petite enfance et du primaire, de la supervision des programmes de lecture-écriture et de calcul, de l\'évaluation et de l\'accompagnement des enseignants, de l\'engagement et de la communication avec les parents, de la gestion du comportement des jeunes élèves, de la coordination de l\'éducation spécialisée, des programmes de préparation scolaire, de la promotion de l\'apprentissage par le jeu et l\'expérience, des programmes de nutrition et de santé scolaire, d\'un environnement scolaire sûr et bienveillant, et de l\'intervention précoce pour les difficultés d\'apprentissage.',
    },
    sectors: ['education'] as ProfileSector[],
    level: 'managerial' as ProfileLevel,
    competencyCategories: ['ep-professional', 'ep-soft-skills', 'ep-readiness'],
    isActive: true,
  },
  {
    id: 'k12-school-principal',
    name: {
      es: 'Director de Escuela (Primaria y Secundaria)',
      en: 'K-12 School Principal',
      fr: 'Directeur d\'Établissement Scolaire (Primaire et Secondaire)',
    },
    description: {
      es: 'Director de centro educativo que supervisa los niveles de primaria y secundaria. Responsable de la administración general del colegio, supervisión de programas académicos, gestión y evaluación del personal docente, disciplina y bienestar estudiantil, relaciones con padres de familia y comunidad, administración presupuestaria, cumplimiento de acreditación, seguridad escolar, coordinación curricular entre niveles, desarrollo profesional del personal, cultura y clima escolar, cumplimiento regulatorio ante autoridades educativas, gestión de inscripciones y planificación estratégica para la mejora escolar.',
      en: 'A school principal overseeing both primary and secondary levels. Responsible for overall school administration, academic program oversight, faculty management and evaluation, student discipline and welfare, parent and community relations, budget administration, accreditation compliance, school safety, curriculum coordination across grade levels, staff professional development, school culture and climate, regulatory compliance with education authorities, enrollment management, and strategic planning for school improvement.',
      fr: 'Directeur d\'établissement scolaire supervisant les niveaux primaire et secondaire. Responsable de l\'administration générale de l\'école, de la supervision des programmes académiques, de la gestion et de l\'évaluation du personnel enseignant, de la discipline et du bien-être des élèves, des relations avec les parents et la communauté, de l\'administration budgétaire, de la conformité à l\'accréditation, de la sécurité scolaire, de la coordination des programmes entre les niveaux, du développement professionnel du personnel, de la culture et du climat scolaire, de la conformité réglementaire auprès des autorités éducatives, de la gestion des inscriptions et de la planification stratégique pour l\'amélioration scolaire.',
    },
    sectors: ['education'] as ProfileSector[],
    level: 'managerial' as ProfileLevel,
    competencyCategories: ['k12-principal-professional', 'k12-principal-soft-skills', 'k12-principal-readiness'],
    isActive: true,
  },
  {
    id: 'school-psychologist',
    name: {
      es: 'Psicólogo Escolar',
      en: 'School Psychologist',
      fr: 'Psychologue Scolaire',
    },
    description: {
      es: 'Psicólogo que trabaja en un entorno educativo. Responsable de la evaluación psicológica de estudiantes, evaluación de dificultades de aprendizaje, planes de intervención conductual, consejería individual y grupal, intervención en crisis (riesgo suicida, trauma, duelo), consulta con docentes y padres de familia, evaluaciones de educación especial, desarrollo de programas de aprendizaje socioemocional (SEL), prevención del acoso escolar, mediación de conflictos entre estudiantes, referencias a servicios externos de salud mental, recolección de datos y monitoreo de progreso, evaluación del desarrollo, identificación de estudiantes superdotados y promoción de recursos de salud mental estudiantil.',
      en: 'A psychologist working in an educational setting. Responsible for student psychological assessment, learning disability evaluation, behavioral intervention plans, individual and group counseling, crisis intervention (suicide risk, trauma, grief), consultation with teachers and parents, special education evaluations, social-emotional learning (SEL) program development, bullying prevention, conflict mediation among students, referrals to external mental health services, data collection and progress monitoring, developmental screening, gifted student identification, and advocacy for student mental health resources.',
      fr: 'Psychologue travaillant dans un cadre éducatif. Responsable de l\'évaluation psychologique des élèves, de l\'évaluation des troubles d\'apprentissage, des plans d\'intervention comportementale, du conseil individuel et de groupe, de l\'intervention de crise (risque suicidaire, traumatisme, deuil), de la consultation avec les enseignants et les parents, des évaluations d\'éducation spécialisée, du développement de programmes d\'apprentissage socio-émotionnel (ASE), de la prévention du harcèlement scolaire, de la médiation des conflits entre élèves, des références vers des services externes de santé mentale, de la collecte de données et du suivi des progrès, du dépistage développemental, de l\'identification des élèves surdoués et de la promotion des ressources de santé mentale des élèves.',
    },
    sectors: ['education', 'healthcare'] as ProfileSector[],
    level: 'professional-specialist' as ProfileLevel,
    competencyCategories: ['sp-professional', 'sp-soft-skills', 'sp-readiness'],
    isActive: true,
  },
  {
    id: 'receptionist',
    name: {
      es: 'Recepcionista',
      en: 'Receptionist',
      fr: 'Réceptionniste',
    },
    description: {
      es: 'Primer punto de contacto para visitantes, clientes y llamadas. Responsable de recibir y dirigir visitantes, operar un sistema telefónico multilínea, programar citas, manejar correspondencia y paquetes entrantes y salientes, mantener el área de recepción, registro de visitantes y gafetes, coordinación de salas de reuniones, soporte administrativo básico (copias, archivo, ingreso de datos), gestión de suministros de oficina, manejo de entregas, conocimiento de procedimientos de emergencia y mantenimiento de una atmósfera profesional y acogedora.',
      en: 'The first point of contact for visitors, clients, and callers. Responsible for greeting and directing visitors, managing a multi-line phone system, scheduling appointments, handling incoming/outgoing mail and packages, maintaining the reception area, visitor registration and badges, coordinating meeting rooms, basic administrative support (copying, filing, data entry), managing office supplies, handling deliveries, emergency procedures awareness, and maintaining a professional and welcoming atmosphere.',
      fr: 'Premier point de contact pour les visiteurs, clients et appelants. Responsable de l\'accueil et de l\'orientation des visiteurs, de la gestion d\'un système téléphonique multiligne, de la planification des rendez-vous, de la gestion du courrier et des colis entrants et sortants, de l\'entretien de la zone de réception, de l\'enregistrement des visiteurs et des badges, de la coordination des salles de réunion, du support administratif de base (copies, classement, saisie de données), de la gestion des fournitures de bureau, de la gestion des livraisons, de la connaissance des procédures d\'urgence et du maintien d\'une atmosphère professionnelle et accueillante.',
    },
    sectors: ['retail-services'] as ProfileSector[],
    level: 'administrative' as ProfileLevel,
    competencyCategories: ['rec-professional', 'rec-soft-skills', 'rec-readiness'],
    isActive: true,
  },
  {
    id: 'technical-support',
    name: {
      es: 'Soporte Técnico',
      en: 'Technical Support Specialist',
      fr: 'Technicien(ne) de Support',
    },
    description: {
      es: 'Profesional que brinda asistencia técnica a usuarios y clientes. Responsable de diagnosticar y resolver problemas de hardware y software, gestionar y priorizar tickets, brindar soporte remoto y presencial, diagnosticar problemas de red y conectividad, instalar y configurar software, administrar cuentas de usuario, documentar soluciones y mantener la base de conocimiento, escalar incidentes complejos, dar seguimiento a activos de TI, promover la conciencia de seguridad (phishing, malware), cumplir con los SLA del mesa de ayuda y capacitar a los usuarios en sistemas y herramientas.',
      en: 'Professional who provides technical assistance to users and customers. Responsible for troubleshooting hardware and software issues, ticket management and prioritization, remote and on-site support, network and connectivity diagnostics, software installation and configuration, user account management, documentation of solutions and knowledge base maintenance, escalation of complex issues, IT asset tracking, security awareness (phishing, malware), help desk SLA compliance, and training users on systems and tools.',
      fr: 'Professionnel qui fournit une assistance technique aux utilisateurs et aux clients. Responsable du diagnostic et de la résolution des problèmes matériels et logiciels, de la gestion et de la priorisation des tickets, du support à distance et sur site, du diagnostic réseau et connectivité, de l\'installation et de la configuration des logiciels, de la gestion des comptes utilisateurs, de la documentation des solutions et de la maintenance de la base de connaissances, de l\'escalade des incidents complexes, du suivi des actifs informatiques, de la sensibilisation à la sécurité (phishing, malware), du respect des SLA du service d\'assistance et de la formation des utilisateurs sur les systèmes et outils.',
    },
    sectors: ['retail-services'] as ProfileSector[],
    level: 'professional-specialist' as ProfileLevel,
    competencyCategories: ['ts-professional', 'ts-soft-skills', 'ts-readiness'],
    isActive: true,
  },
  {
    id: 'insurance-ceo',
    name: {
      es: 'Director General de Compañía de Seguros',
      en: 'Insurance Company CEO',
      fr: 'Directeur Général de Compagnie d\'Assurances',
    },
    description: {
      es: 'Máximo ejecutivo de una compañía de seguros responsable de la visión estratégica, posicionamiento de mercado, gobernanza regulatoria, estrategia de productos y distribución, gestión de reaseguro, solvencia y capital, relaciones con la junta directiva, liderazgo de la industria, gestión de crisis, desarrollo de cultura organizacional y talento, transformación digital e insurtech, riesgo climático y ESG, y toma de decisiones basada en datos.',
      en: 'Top executive of an insurance company responsible for strategic vision, market positioning, regulatory governance, product and distribution strategy, reinsurance management, solvency and capital, board relations, industry leadership, crisis management, organizational culture and talent development, digital transformation and insurtech, climate risk and ESG, and data-driven decision making.',
      fr: 'Cadre dirigeant d\'une compagnie d\'assurances responsable de la vision stratégique, du positionnement sur le marché, de la gouvernance réglementaire, de la stratégie produits et distribution, de la gestion de la réassurance, de la solvabilité et du capital, des relations avec le conseil d\'administration, du leadership sectoriel, de la gestion de crise, du développement de la culture organisationnelle et des talents, de la transformation numérique et de l\'insurtech, du risque climatique et ESG, et de la prise de décision basée sur les données.',
    },
    sectors: ['insurance'] as ProfileSector[],
    level: 'executive' as ProfileLevel,
    competencyCategories: ['ins-ceo-professional', 'ins-ceo-soft-skills', 'ins-ceo-readiness'],
    isActive: true,
  },
  {
    id: 'insurance-broker-ceo',
    name: {
      es: 'Director General de Empresa de Corretaje de Seguros',
      en: 'Insurance Broker Company CEO',
      fr: 'Directeur Général de Société de Courtage en Assurances',
    },
    description: {
      es: 'Máximo ejecutivo de una empresa de corretaje de seguros responsable de la estrategia comercial, gestión de cartera de clientes, relaciones con aseguradoras, análisis de mercado y colocación de riesgos, diversificación de ingresos, cumplimiento regulatorio, liderazgo consultivo, desarrollo de equipos, negociación, presencia en la industria, distribución digital, analítica de datos e insights de clientes, y desarrollo de nuevos productos y mercados.',
      en: 'Top executive of an insurance brokerage firm responsible for business strategy, client portfolio management, carrier relationships, market analysis and risk placement, revenue diversification, regulatory compliance, advisory leadership, team development, negotiation, industry presence, digital distribution, data analytics and client insights, and new product and market development.',
      fr: 'Cadre dirigeant d\'une société de courtage en assurances responsable de la stratégie commerciale, de la gestion du portefeuille clients, des relations avec les assureurs, de l\'analyse de marché et du placement des risques, de la diversification des revenus, de la conformité réglementaire, du leadership consultatif, du développement des équipes, de la négociation, de la présence sectorielle, de la distribution numérique, de l\'analytique de données et des insights clients, et du développement de nouveaux produits et marchés.',
    },
    sectors: ['insurance'] as ProfileSector[],
    level: 'executive' as ProfileLevel,
    competencyCategories: ['ins-broker-professional', 'ins-broker-soft-skills', 'ins-broker-readiness'],
    isActive: true,
  },
  {
    id: 'insurance-cro',
    name: {
      es: 'Director de Riesgos',
      en: 'Chief Risk Officer (CRO)',
      fr: 'Directeur des Risques',
    },
    description: {
      es: 'Ejecutivo de alta dirección en el sector asegurador responsable del marco de gestión de riesgos empresariales, solvencia y adecuación de capital, modelización de catástrofes y riesgo natural, gestión de riesgo operacional, supervisión de riesgo de inversión, riesgo regulatorio y cumplimiento, cultura de riesgos, reportes al directorio, colaboración interfuncional, liderazgo en crisis, riesgos emergentes (ciber, clima, pandemia), analítica de riesgos e IA, y planificación de escenarios y pruebas de estrés.',
      en: 'Senior executive in the insurance sector responsible for enterprise risk management framework, solvency and capital adequacy, catastrophe modeling and nat-cat risk, operational risk management, investment risk oversight, regulatory risk and compliance, risk culture evangelism, board risk reporting, cross-functional collaboration, crisis leadership, emerging risks (cyber, climate, pandemic), risk analytics and AI, and scenario planning and stress testing.',
      fr: 'Cadre dirigeant dans le secteur de l\'assurance responsable du cadre de gestion des risques d\'entreprise, de la solvabilité et de l\'adéquation du capital, de la modélisation des catastrophes et du risque naturel, de la gestion du risque opérationnel, de la supervision du risque d\'investissement, du risque réglementaire et de la conformité, de la culture du risque, des rapports de risque au conseil d\'administration, de la collaboration interfonctionnelle, du leadership en situation de crise, des risques émergents (cyber, climat, pandémie), de l\'analytique des risques et de l\'IA, et de la planification de scénarios et des tests de résistance.',
    },
    sectors: ['insurance'] as ProfileSector[],
    level: 'executive' as ProfileLevel,
    competencyCategories: ['ins-cro-professional', 'ins-cro-soft-skills', 'ins-cro-readiness'],
    isActive: true,
  },
  {
    id: 'insurance-cuo',
    name: {
      es: 'Director de Suscripción',
      en: 'Chief Underwriting Officer (CUO)',
      fr: 'Directeur de la Souscription',
    },
    description: {
      es: 'Ejecutivo de alta dirección en el sector asegurador responsable de la estrategia y filosofía de suscripción, gestión de rentabilidad del portafolio, pricing y adecuación de tarifas, selección de riesgos y apetito de riesgo, optimización del reaseguro, supervisión de reservas técnicas, desarrollo y mentoría de suscriptores, relaciones con corredores y agentes, comunicación ejecutiva, storytelling de datos, suscripción predictiva e IA, seguros paramétricos y embebidos, y suscripción ajustada al clima.',
      en: 'Senior executive in the insurance sector responsible for underwriting strategy and philosophy, portfolio profitability management, pricing and rate adequacy, risk selection and appetite, reinsurance optimization, technical reserving oversight, underwriter development and mentoring, broker/agent relationship management, executive communication, data storytelling, predictive underwriting and AI, parametric and embedded insurance, and climate-adjusted underwriting.',
      fr: 'Cadre dirigeant dans le secteur de l\'assurance responsable de la stratégie et de la philosophie de souscription, de la gestion de la rentabilité du portefeuille, de la tarification et de l\'adéquation des taux, de la sélection des risques et de l\'appétit pour le risque, de l\'optimisation de la réassurance, de la supervision des réserves techniques, du développement et du mentorat des souscripteurs, de la gestion des relations avec les courtiers et agents, de la communication exécutive, du storytelling de données, de la souscription prédictive et de l\'IA, des assurances paramétriques et intégrées, et de la souscription ajustée au climat.',
    },
    sectors: ['insurance'] as ProfileSector[],
    level: 'executive' as ProfileLevel,
    competencyCategories: ['ins-cuo-professional', 'ins-cuo-soft-skills', 'ins-cuo-readiness'],
    isActive: true,
  },
  {
    id: 'insurance-actuary',
    name: {
      es: 'Actuario Jefe',
      en: 'Chief Actuary',
      fr: 'Actuaire en Chef',
    },
    description: {
      es: 'Ejecutivo de alta dirección en el sector asegurador responsable de la tarificación y pricing, reservas y valoración de pasivos, modelización de capital (Solvencia II/ORSA), optimización del reaseguro, cumplimiento NIIF 17, estudios de experiencia y tablas de mortalidad/morbilidad, traducción de hallazgos técnicos para ejecutivos, influencia interdepartamental, mentoría de equipos actuariales, relaciones con reguladores, aprendizaje automático en ciencias actuariales, modelización de riesgo climático, y pricing en tiempo real y telemática.',
      en: 'Senior executive in the insurance sector responsible for pricing and tarification, reserving and liability valuation, capital modeling (Solvency II/ORSA), reinsurance optimization, IFRS 17 compliance, experience studies and mortality/morbidity tables, translating technical findings for executives, cross-departmental influence, mentoring actuarial teams, regulatory relationship management, machine learning in actuarial science, climate risk modeling, and real-time pricing and telematics.',
      fr: 'Cadre dirigeant dans le secteur de l\'assurance responsable de la tarification, des réserves et de la valorisation des passifs, de la modélisation du capital (Solvabilité II/ORSA), de l\'optimisation de la réassurance, de la conformité IFRS 17, des études d\'expérience et des tables de mortalité/morbidité, de la traduction des résultats techniques pour les dirigeants, de l\'influence interdépartementale, du mentorat des équipes actuarielles, des relations avec les régulateurs, de l\'apprentissage automatique en sciences actuarielles, de la modélisation du risque climatique, et de la tarification en temps réel et de la télématique.',
    },
    sectors: ['insurance'] as ProfileSector[],
    level: 'executive' as ProfileLevel,
    competencyCategories: ['ins-actuary-professional', 'ins-actuary-soft-skills', 'ins-actuary-readiness'],
    isActive: true,
  },
  // --- Technology / IT ---
  {
    id: 'software-developer',
    name: {
      es: 'Desarrollador de Software',
      en: 'Software Developer',
      fr: 'Développeur Logiciel',
    },
    description: {
      es: 'Ingeniero de software profesional especializado en diseño, desarrollo y mantenimiento de aplicaciones. Requiere competencias en arquitectura de software, programación, pruebas, DevOps y metodologías ágiles.',
      en: 'Professional software engineer specialized in the design, development, and maintenance of applications. Requires competencies in software architecture, programming, testing, DevOps, and agile methodologies.',
      fr: 'Ingénieur logiciel professionnel spécialisé dans la conception, le développement et la maintenance d\'applications. Nécessite des compétences en architecture logicielle, programmation, tests, DevOps et méthodologies agiles.',
    },
    sectors: ['technology-it'] as ProfileSector[],
    level: 'professional-specialist' as ProfileLevel,
    competencyCategories: ['tech-swdev-professional', 'tech-swdev-soft-skills', 'tech-swdev-readiness'],
    isActive: true,
  },
  {
    id: 'it-manager',
    name: {
      es: 'Gerente de TI / CTO',
      en: 'IT Manager / CTO',
      fr: 'Directeur IT / CTO',
    },
    description: {
      es: 'Ejecutivo responsable de la estrategia tecnológica, infraestructura, equipos de desarrollo y transformación digital de la organización. Requiere competencias en liderazgo tecnológico, gobernanza de TI, gestión de presupuestos y alineación tecnología-negocio.',
      en: 'Executive responsible for the technology strategy, infrastructure, development teams, and digital transformation of the organization. Requires competencies in technology leadership, IT governance, budget management, and technology-business alignment.',
      fr: 'Cadre dirigeant responsable de la stratégie technologique, de l\'infrastructure, des équipes de développement et de la transformation numérique de l\'organisation. Nécessite des compétences en leadership technologique, gouvernance IT, gestion budgétaire et alignement technologie-affaires.',
    },
    sectors: ['technology-it'] as ProfileSector[],
    level: 'executive' as ProfileLevel,
    competencyCategories: ['tech-itmgr-professional', 'tech-itmgr-soft-skills', 'tech-itmgr-readiness'],
    isActive: true,
  },
  {
    id: 'data-analyst',
    name: {
      es: 'Analista de Datos / Científico de Datos',
      en: 'Data Analyst / Data Scientist',
      fr: 'Analyste de Données / Scientifique des Données',
    },
    description: {
      es: 'Profesional especializado en la recolección, análisis e interpretación de datos para apoyar la toma de decisiones empresariales. Requiere competencias en estadística, programación analítica, visualización de datos y comunicación de insights.',
      en: 'Professional specialized in data collection, analysis, and interpretation to support business decision-making. Requires competencies in statistics, analytical programming, data visualization, and insight communication.',
      fr: 'Professionnel spécialisé dans la collecte, l\'analyse et l\'interprétation des données pour soutenir la prise de décisions d\'entreprise. Nécessite des compétences en statistiques, programmation analytique, visualisation de données et communication d\'insights.',
    },
    sectors: ['technology-it'] as ProfileSector[],
    level: 'professional-specialist' as ProfileLevel,
    competencyCategories: ['tech-data-professional', 'tech-data-soft-skills', 'tech-data-readiness'],
    isActive: true,
  },
  {
    id: 'cybersecurity-analyst',
    name: {
      es: 'Analista de Ciberseguridad',
      en: 'Cybersecurity Analyst',
      fr: 'Analyste en Cybersécurité',
    },
    description: {
      es: 'Profesional especializado en la protección de sistemas informáticos, redes y datos contra amenazas cibernéticas. Requiere competencias en seguridad de redes, análisis de vulnerabilidades, respuesta a incidentes, cumplimiento normativo y concienciación en seguridad.',
      en: 'Professional specialized in protecting computer systems, networks, and data against cyber threats. Requires competencies in network security, vulnerability analysis, incident response, regulatory compliance, and security awareness.',
      fr: 'Professionnel spécialisé dans la protection des systèmes informatiques, réseaux et données contre les cybermenaces. Nécessite des compétences en sécurité réseau, analyse de vulnérabilités, réponse aux incidents, conformité réglementaire et sensibilisation à la sécurité.',
    },
    sectors: ['technology-it'] as ProfileSector[],
    level: 'professional-specialist' as ProfileLevel,
    competencyCategories: ['tech-cyber-professional', 'tech-cyber-soft-skills', 'tech-cyber-readiness'],
    isActive: true,
  },
  {
    id: 'agile-project-manager',
    name: {
      es: 'Gerente de Proyectos Ágil',
      en: 'Agile Project Manager',
      fr: 'Chef de Projet Agile',
    },
    description: {
      es: 'Profesional de nivel gerencial responsable de liderar proyectos tecnológicos usando metodologías ágiles (Scrum, Kanban, SAFe). Requiere competencias en facilitación de equipos, gestión de backlog, entrega continua, gestión de stakeholders y mejora de procesos.',
      en: 'Managerial-level professional responsible for leading technology projects using agile methodologies (Scrum, Kanban, SAFe). Requires competencies in team facilitation, backlog management, continuous delivery, stakeholder management, and process improvement.',
      fr: 'Professionnel de niveau managérial responsable de la conduite de projets technologiques avec des méthodologies agiles (Scrum, Kanban, SAFe). Nécessite des compétences en facilitation d\'équipes, gestion du backlog, livraison continue, gestion des parties prenantes et amélioration des processus.',
    },
    sectors: ['technology-it'] as ProfileSector[],
    level: 'managerial' as ProfileLevel,
    competencyCategories: ['tech-apm-professional', 'tech-apm-soft-skills', 'tech-apm-readiness'],
    isActive: true,
  },
  // --- Hospitality & Tourism ---
  {
    id: 'hotel-general-manager',
    name: {
      es: 'Gerente General de Hotel',
      en: 'Hotel General Manager',
      fr: 'Directeur Général d\'Hôtel',
    },
    description: {
      es: 'Ejecutivo responsable de la operación integral de un hotel, incluyendo gestión de ingresos, experiencia del huésped, liderazgo de equipos multidisciplinarios, cumplimiento normativo y posicionamiento competitivo en el mercado hotelero.',
      en: 'Executive responsible for the overall operation of a hotel, including revenue management, guest experience, leadership of multidisciplinary teams, regulatory compliance, and competitive positioning in the hospitality market.',
      fr: 'Cadre responsable de l\'exploitation globale d\'un hôtel, incluant la gestion des revenus, l\'expérience client, le leadership d\'équipes multidisciplinaires, la conformité réglementaire et le positionnement concurrentiel sur le marché hôtelier.',
    },
    sectors: ['hospitality-tourism'] as ProfileSector[],
    level: 'managerial' as ProfileLevel,
    competencyCategories: ['hosp-hgm-professional', 'hosp-hgm-soft-skills', 'hosp-hgm-readiness'],
    isActive: true,
  },
  {
    id: 'restaurant-manager',
    name: {
      es: 'Gerente de Restaurante',
      en: 'Restaurant Manager',
      fr: 'Directeur de Restaurant',
    },
    description: {
      es: 'Profesional responsable de la gestión operativa y financiera de un restaurante, incluyendo control de costos de alimentos y bebidas, servicio al cliente, gestión de personal, cumplimiento sanitario y estrategias de rentabilidad.',
      en: 'Professional responsible for the operational and financial management of a restaurant, including food and beverage cost control, customer service, staff management, health compliance, and profitability strategies.',
      fr: 'Professionnel responsable de la gestion opérationnelle et financière d\'un restaurant, incluant le contrôle des coûts alimentaires, le service client, la gestion du personnel, la conformité sanitaire et les stratégies de rentabilité.',
    },
    sectors: ['hospitality-tourism'] as ProfileSector[],
    level: 'managerial' as ProfileLevel,
    competencyCategories: ['hosp-rm-professional', 'hosp-rm-soft-skills', 'hosp-rm-readiness'],
    isActive: true,
  },
  {
    id: 'front-desk-agent',
    name: {
      es: 'Agente de Recepción / Servicios al Huésped',
      en: 'Front Desk / Guest Services Agent',
      fr: 'Agent de Réception / Services aux Clients',
    },
    description: {
      es: 'Profesional operativo encargado de la recepción hotelera, check-in/check-out, atención de solicitudes y quejas de huéspedes, coordinación con housekeeping y otros departamentos, y manejo de sistemas de gestión hotelera (PMS).',
      en: 'Operative professional in charge of hotel front desk operations, check-in/check-out, handling guest requests and complaints, coordinating with housekeeping and other departments, and managing property management systems (PMS).',
      fr: 'Professionnel opérationnel chargé de la réception hôtelière, du check-in/check-out, du traitement des demandes et plaintes des clients, de la coordination avec l\'entretien ménager et d\'autres départements, et de la gestion des systèmes de gestion hôtelière (PMS).',
    },
    sectors: ['hospitality-tourism'] as ProfileSector[],
    level: 'operative' as ProfileLevel,
    competencyCategories: ['hosp-fda-professional', 'hosp-fda-soft-skills', 'hosp-fda-readiness'],
    isActive: true,
  },
  {
    id: 'chef-kitchen-manager',
    name: {
      es: 'Chef / Gerente de Cocina',
      en: 'Chef / Kitchen Manager',
      fr: 'Chef / Responsable de Cuisine',
    },
    description: {
      es: 'Especialista culinario responsable de la planificación de menús, control de calidad alimentaria, gestión de inventarios de cocina, liderazgo del equipo culinario, cumplimiento de normas de higiene y seguridad alimentaria, y creatividad gastronómica.',
      en: 'Culinary specialist responsible for menu planning, food quality control, kitchen inventory management, culinary team leadership, food hygiene and safety compliance, and gastronomic creativity.',
      fr: 'Spécialiste culinaire responsable de la planification des menus, du contrôle de la qualité alimentaire, de la gestion des stocks de cuisine, du leadership de l\'équipe culinaire, de la conformité aux normes d\'hygiène et de sécurité alimentaire, et de la créativité gastronomique.',
    },
    sectors: ['hospitality-tourism'] as ProfileSector[],
    level: 'professional-specialist' as ProfileLevel,
    competencyCategories: ['hosp-ckm-professional', 'hosp-ckm-soft-skills', 'hosp-ckm-readiness'],
    isActive: true,
  },
  // --- Banking ---
  {
    id: 'bank-branch-manager',
    name: {
      es: 'Gerente de Sucursal Bancaria',
      en: 'Bank Branch Manager',
      fr: 'Directeur d\'Agence Bancaire',
    },
    description: {
      es: 'Líder responsable de la operación integral de una sucursal bancaria, incluyendo gestión comercial, cumplimiento regulatorio, administración de personal, experiencia del cliente y cumplimiento de metas financieras. Requiere competencias en liderazgo, gestión de riesgos operativos y desarrollo de negocios.',
      en: 'Leader responsible for the comprehensive operation of a bank branch, including commercial management, regulatory compliance, personnel administration, customer experience, and achievement of financial targets. Requires competencies in leadership, operational risk management, and business development.',
      fr: 'Leader responsable de l\'opération intégrale d\'une agence bancaire, incluant la gestion commerciale, la conformité réglementaire, l\'administration du personnel, l\'expérience client et l\'atteinte des objectifs financiers. Nécessite des compétences en leadership, gestion des risques opérationnels et développement des affaires.',
    },
    sectors: ['banking'] as ProfileSector[],
    level: 'managerial' as ProfileLevel,
    competencyCategories: ['bank-bm-professional', 'bank-bm-soft-skills', 'bank-bm-readiness'],
    isActive: true,
  },
  {
    id: 'loan-officer',
    name: {
      es: 'Oficial de Crédito / Analista de Crédito',
      en: 'Loan Officer / Credit Analyst',
      fr: 'Agent de Crédit / Analyste de Crédit',
    },
    description: {
      es: 'Profesional especializado en la evaluación, estructuración y aprobación de créditos bancarios. Analiza la capacidad de pago, garantías y riesgo crediticio de solicitantes individuales y empresariales. Requiere competencias en análisis financiero, normativa crediticia y gestión de cartera.',
      en: 'Professional specialized in the evaluation, structuring, and approval of bank loans. Analyzes repayment capacity, collateral, and credit risk for individual and corporate applicants. Requires competencies in financial analysis, credit regulation, and portfolio management.',
      fr: 'Professionnel spécialisé dans l\'évaluation, la structuration et l\'approbation de crédits bancaires. Analyse la capacité de remboursement, les garanties et le risque de crédit des demandeurs individuels et entreprises. Nécessite des compétences en analyse financière, réglementation du crédit et gestion de portefeuille.',
    },
    sectors: ['banking'] as ProfileSector[],
    level: 'professional-specialist' as ProfileLevel,
    competencyCategories: ['bank-lo-professional', 'bank-lo-soft-skills', 'bank-lo-readiness'],
    isActive: true,
  },
  {
    id: 'investment-advisor',
    name: {
      es: 'Asesor de Inversiones',
      en: 'Investment Advisor',
      fr: 'Conseiller en Investissements',
    },
    description: {
      es: 'Profesional especializado en asesoría patrimonial y productos de inversión bancarios. Evalúa perfiles de riesgo del cliente, recomienda portafolios diversificados y asegura el cumplimiento de normativas de protección al inversionista. Requiere competencias en mercados financieros, planificación patrimonial y relación con clientes de alto valor.',
      en: 'Professional specialized in wealth advisory and banking investment products. Evaluates client risk profiles, recommends diversified portfolios, and ensures compliance with investor protection regulations. Requires competencies in financial markets, wealth planning, and high-net-worth client relationships.',
      fr: 'Professionnel spécialisé dans le conseil patrimonial et les produits d\'investissement bancaires. Évalue les profils de risque des clients, recommande des portefeuilles diversifiés et assure la conformité aux réglementations de protection des investisseurs. Nécessite des compétences en marchés financiers, planification patrimoniale et relations avec les clients à forte valeur.',
    },
    sectors: ['banking'] as ProfileSector[],
    level: 'professional-specialist' as ProfileLevel,
    competencyCategories: ['bank-ia-professional', 'bank-ia-soft-skills', 'bank-ia-readiness'],
    isActive: true,
  },
  {
    id: 'bank-teller',
    name: {
      es: 'Cajero Bancario / Oficial de Operaciones',
      en: 'Bank Teller / Operations Officer',
      fr: 'Caissier Bancaire / Agent des Opérations',
    },
    description: {
      es: 'Profesional operativo responsable de la atención directa al cliente en ventanilla, procesamiento de transacciones bancarias, manejo de efectivo, prevención de fraudes y cumplimiento de protocolos de seguridad. Requiere competencias en precisión operativa, servicio al cliente y detección de operaciones sospechosas.',
      en: 'Operative professional responsible for direct customer service at the counter, processing banking transactions, cash handling, fraud prevention, and compliance with security protocols. Requires competencies in operational accuracy, customer service, and detection of suspicious operations.',
      fr: 'Professionnel opérationnel responsable du service direct au client au guichet, du traitement des transactions bancaires, de la gestion des espèces, de la prévention de la fraude et du respect des protocoles de sécurité. Nécessite des compétences en précision opérationnelle, service client et détection d\'opérations suspectes.',
    },
    sectors: ['banking'] as ProfileSector[],
    level: 'operative' as ProfileLevel,
    competencyCategories: ['bank-bt-professional', 'bank-bt-soft-skills', 'bank-bt-readiness'],
    isActive: true,
  },

  // ============================================================================
  // LEGAL PRACTICE PROFILES
  // ============================================================================
  {
    id: 'legal-managing-partner',
    name: {
      es: 'Socio Director / Managing Partner',
      en: 'Managing Partner',
      fr: 'Associé Directeur',
    },
    description: {
      es: 'Líder senior de firma de abogados o departamento legal, responsable de la dirección estratégica, desarrollo de negocios, relaciones con clientes y gobernanza de la firma.',
      en: 'Senior leader of law firm/legal department, responsible for strategic direction, business development, client relationships, and firm governance.',
      fr: 'Dirigeant senior de cabinet d\'avocats ou département juridique, responsable de la direction stratégique, du développement commercial, des relations clients et de la gouvernance du cabinet.',
    },
    sectors: ['legal-practice'] as ProfileSector[],
    level: 'executive' as ProfileLevel,
    competencyCategories: ['legal-mp-professional', 'legal-mp-soft-skills', 'legal-mp-readiness'],
    isActive: true,
  },
  {
    id: 'legal-practice-director',
    name: {
      es: 'Director de Área de Práctica',
      en: 'Practice Area Director',
      fr: 'Directeur de Département Juridique',
    },
    description: {
      es: 'Gestiona equipos de abogados dentro de un área de práctica, supervisa la asignación de casos, relaciones con clientes, desarrollo del equipo y estándares de calidad.',
      en: 'Manages attorney teams within a practice area, oversees case allocation, client relationships, team development, and quality standards.',
      fr: 'Gère des équipes d\'avocats au sein d\'un département, supervise l\'attribution des dossiers, les relations clients, le développement de l\'équipe et les normes de qualité.',
    },
    sectors: ['legal-practice'] as ProfileSector[],
    level: 'managerial' as ProfileLevel,
    competencyCategories: ['legal-pd-professional', 'legal-pd-soft-skills', 'legal-pd-readiness'],
    isActive: true,
  },
  {
    id: 'legal-senior-attorney',
    name: {
      es: 'Abogado Senior',
      en: 'Senior Attorney',
      fr: 'Avocat Senior',
    },
    description: {
      es: 'Profesional jurídico principal que maneja litigios complejos, asesoría corporativa, negociación de contratos y consultoría legal. Requiere profunda experiencia legal, razonamiento analítico y juicio ético.',
      en: 'Core legal practitioner handling complex litigation, corporate advisory, contract negotiation, and client counsel. Requires deep legal expertise, analytical reasoning, and ethical judgment.',
      fr: 'Praticien juridique principal gérant des litiges complexes, le conseil aux entreprises, la négociation de contrats et le conseil aux clients. Nécessite une expertise juridique approfondie, un raisonnement analytique et un jugement éthique.',
    },
    sectors: ['legal-practice'] as ProfileSector[],
    level: 'professional-specialist' as ProfileLevel,
    competencyCategories: ['legal-sa-professional', 'legal-sa-soft-skills', 'legal-sa-readiness'],
    isActive: true,
  },
  {
    id: 'legal-corporate-counsel',
    name: {
      es: 'Abogado Corporativo / Asesor Legal Interno',
      en: 'Corporate Counsel',
      fr: 'Conseiller Juridique d\'Entreprise',
    },
    description: {
      es: 'Asesor legal interno que gestiona cumplimiento corporativo, revisión de contratos, mitigación de riesgos, asuntos regulatorios y soporte legal multifuncional.',
      en: 'In-house legal advisor managing corporate compliance, contract review, risk mitigation, regulatory affairs, and cross-functional legal support.',
      fr: 'Conseiller juridique interne gérant la conformité d\'entreprise, la révision de contrats, l\'atténuation des risques, les affaires réglementaires et le soutien juridique transversal.',
    },
    sectors: ['legal-practice'] as ProfileSector[],
    level: 'professional-specialist' as ProfileLevel,
    competencyCategories: ['legal-cc-professional', 'legal-cc-soft-skills', 'legal-cc-readiness'],
    isActive: true,
  },
  {
    id: 'legal-paralegal',
    name: {
      es: 'Paralegal / Asistente Jurídico',
      en: 'Paralegal',
      fr: 'Parajuriste',
    },
    description: {
      es: 'Profesional de soporte legal que maneja preparación de casos, investigación jurídica, gestión documental, presentaciones ante tribunales y coordinación con clientes bajo supervisión de abogados.',
      en: 'Legal support professional handling case preparation, legal research, document management, court filings, and client coordination under attorney supervision.',
      fr: 'Professionnel de soutien juridique gérant la préparation de dossiers, la recherche juridique, la gestion documentaire, les dépôts au tribunal et la coordination avec les clients sous la supervision d\'avocats.',
    },
    sectors: ['legal-practice'] as ProfileSector[],
    level: 'administrative' as ProfileLevel,
    competencyCategories: ['legal-pl-professional', 'legal-pl-soft-skills', 'legal-pl-readiness'],
    isActive: true,
  },
  {
    id: 'legal-secretary',
    name: {
      es: 'Secretario/a Legal',
      en: 'Legal Secretary',
      fr: 'Secrétaire Juridique',
    },
    description: {
      es: 'Soporte operativo que maneja programación, archivo, presentaciones ante tribunales, formato de documentos, correspondencia y cumplimiento de procedimientos.',
      en: 'Operational support handling scheduling, filing, court submissions, document formatting, correspondence, and procedural compliance.',
      fr: 'Soutien opérationnel gérant la planification, le classement, les dépôts au tribunal, la mise en forme de documents, la correspondance et la conformité procédurale.',
    },
    sectors: ['legal-practice'] as ProfileSector[],
    level: 'operative' as ProfileLevel,
    competencyCategories: ['legal-ls-professional', 'legal-ls-soft-skills', 'legal-ls-readiness'],
    isActive: true,
  },
  // --- Microsoft Technology Profiles ---
  {
    id: 'ms-dynamics-operator',
    name: {
      es: 'Operador de Microsoft Dynamics',
      en: 'Microsoft Dynamics Operator',
      fr: 'Opérateur Microsoft Dynamics',
    },
    description: {
      es: 'Usuario operativo de Microsoft Dynamics 365 (ERP/CRM), responsable de la captura de datos, procesamiento de transacciones, generación de reportes, navegación de módulos y operaciones diarias del negocio dentro de la plataforma.',
      en: 'Operational user of Microsoft Dynamics 365 (ERP/CRM), responsible for data entry, transaction processing, report generation, module navigation, and daily business operations within the platform.',
      fr: 'Utilisateur opérationnel de Microsoft Dynamics 365 (ERP/CRM), responsable de la saisie de données, du traitement des transactions, de la génération de rapports, de la navigation dans les modules et des opérations quotidiennes de l\'entreprise au sein de la plateforme.',
    },
    sectors: ['technology-it'] as ProfileSector[],
    level: 'operative' as ProfileLevel,
    competencyCategories: ['ms-dyn-professional', 'ms-dyn-soft-skills', 'ms-dyn-readiness'],
    isActive: true,
  },
  {
    id: 'ms-office-user',
    name: {
      es: 'Usuario de Microsoft Office/365',
      en: 'Microsoft Office/365 User',
      fr: 'Utilisateur Microsoft Office/365',
    },
    description: {
      es: 'Usuario competente de la suite Microsoft 365 (Word, Excel, PowerPoint, Outlook, OneNote, Planner, OneDrive) para la creación de documentos, gestión de datos, presentaciones, comunicación, planificación de tareas y colaboración en la nube.',
      en: 'Proficient user of Microsoft 365 suite (Word, Excel, PowerPoint, Outlook, OneNote, Planner, OneDrive) for document creation, data management, presentations, communication, task planning, and cloud collaboration.',
      fr: 'Utilisateur compétent de la suite Microsoft 365 (Word, Excel, PowerPoint, Outlook, OneNote, Planner, OneDrive) pour la création de documents, la gestion de données, les présentations, la communication, la planification de tâches et la collaboration dans le cloud.',
    },
    sectors: ['technology-it'] as ProfileSector[],
    level: 'operative' as ProfileLevel,
    competencyCategories: ['ms-office-professional', 'ms-office-soft-skills', 'ms-office-readiness'],
    isActive: true,
  },
  {
    id: 'ms-sharepoint-user',
    name: {
      es: 'Usuario de Microsoft SharePoint',
      en: 'Microsoft SharePoint User',
      fr: 'Utilisateur Microsoft SharePoint',
    },
    description: {
      es: 'Usuario responsable de la gestión y colaboración en sitios de SharePoint, bibliotecas de documentos, listas, flujos de trabajo y contenido de intranet. Maneja permisos, metadatos, control de versiones y colaboración en equipo.',
      en: 'User responsible for managing and collaborating on SharePoint sites, document libraries, lists, workflows, and intranet content. Handles permissions, metadata, version control, and team collaboration.',
      fr: 'Utilisateur responsable de la gestion et de la collaboration sur les sites SharePoint, les bibliothèques de documents, les listes, les flux de travail et le contenu intranet. Gère les autorisations, les métadonnées, le contrôle de versions et la collaboration en équipe.',
    },
    sectors: ['technology-it'] as ProfileSector[],
    level: 'operative' as ProfileLevel,
    competencyCategories: ['ms-sp-professional', 'ms-sp-soft-skills', 'ms-sp-readiness'],
    isActive: true,
  },
];

// ============================================================================
// COMPETENCY CATEGORIES
// ============================================================================

export const competencyCategories: CompetencyCategory[] = [
  // --- Insurance (existing) ---
  {
    id: 'professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Conocimientos técnicos, habilidades y capacidades específicas del sector de seguros.',
      en: 'Technical knowledge, skills, and capabilities specific to the insurance sector.',
      fr: 'Connaissances techniques, compétences et capacités spécifiques au secteur des assurances.',
    },
    competencies: [
      {
        id: 'product-knowledge',
        name: { es: 'Conocimiento del Producto', en: 'Product Knowledge', fr: 'Connaissance des Produits' },
        description: {
          es: 'Comprensión profunda de los productos de seguros y sus características.',
          en: 'Deep understanding of insurance products and their features.',
          fr: 'Compréhension approfondie des produits d\'assurance et de leurs caractéristiques.',
        },
        weight: 0.25,
      },
      {
        id: 'underwriting',
        name: { es: 'Suscripción', en: 'Underwriting', fr: 'Souscription' },
        description: {
          es: 'Capacidad para evaluar riesgos y tomar decisiones de suscripción.',
          en: 'Ability to assess risks and make underwriting decisions.',
          fr: 'Capacité à évaluer les risques et à prendre des décisions de souscription.',
        },
        weight: 0.25,
      },
      {
        id: 'claims-management',
        name: { es: 'Gestión de Reclamaciones', en: 'Claims Management', fr: 'Gestion des Sinistres' },
        description: {
          es: 'Habilidad para procesar y gestionar reclamaciones de manera eficiente.',
          en: 'Skill in processing and managing claims efficiently.',
          fr: 'Compétence dans le traitement et la gestion efficace des sinistres.',
        },
        weight: 0.25,
      },
      {
        id: 'regulatory-compliance',
        name: { es: 'Cumplimiento Normativo', en: 'Regulatory Compliance', fr: 'Conformité Réglementaire' },
        description: {
          es: 'Conocimiento de regulaciones y capacidad de asegurar cumplimiento.',
          en: 'Knowledge of regulations and ability to ensure compliance.',
          fr: 'Connaissance des réglementations et capacité à assurer la conformité.',
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
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales y de comunicación esenciales para el éxito profesional.',
      en: 'Interpersonal and communication competencies essential for professional success.',
      fr: 'Compétences interpersonnelles et de communication essentielles pour le succès professionnel.',
    },
    competencies: [
      {
        id: 'communication',
        name: { es: 'Comunicación', en: 'Communication', fr: 'Communication' },
        description: {
          es: 'Capacidad para comunicarse efectivamente con clientes y colegas.',
          en: 'Ability to communicate effectively with clients and colleagues.',
          fr: 'Capacité à communiquer efficacement avec les clients et les collègues.',
        },
        weight: 0.3,
      },
      {
        id: 'teamwork',
        name: { es: 'Trabajo en Equipo', en: 'Teamwork', fr: 'Travail d\'Équipe' },
        description: {
          es: 'Habilidad para colaborar y trabajar efectivamente en equipos.',
          en: 'Skill in collaborating and working effectively in teams.',
          fr: 'Compétence en collaboration et travail efficace en équipe.',
        },
        weight: 0.25,
      },
      {
        id: 'problem-solving',
        name: { es: 'Resolución de Problemas', en: 'Problem Solving', fr: 'Résolution de Problèmes' },
        description: {
          es: 'Capacidad para analizar situaciones y encontrar soluciones efectivas.',
          en: 'Ability to analyze situations and find effective solutions.',
          fr: 'Capacité à analyser des situations et trouver des solutions efficaces.',
        },
        weight: 0.25,
      },
      {
        id: 'customer-service',
        name: { es: 'Servicio al Cliente', en: 'Customer Service', fr: 'Service Client' },
        description: {
          es: 'Orientación al cliente y capacidad de brindar excelente servicio.',
          en: 'Customer orientation and ability to provide excellent service.',
          fr: 'Orientation client et capacité à fournir un excellent service.',
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
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación, aprendizaje continuo y adopción de nuevas tecnologías.',
      en: 'Adaptability, continuous learning, and adoption of new technologies.',
      fr: 'Adaptabilité, apprentissage continu et adoption de nouvelles technologies.',
    },
    competencies: [
      {
        id: 'adaptability',
        name: { es: 'Adaptabilidad', en: 'Adaptability', fr: 'Adaptabilité' },
        description: {
          es: 'Flexibilidad para ajustarse a nuevas situaciones y cambios.',
          en: 'Flexibility to adjust to new situations and changes.',
          fr: 'Flexibilité pour s\'adapter à de nouvelles situations et changements.',
        },
        weight: 0.35,
      },
      {
        id: 'continuous-learning',
        name: { es: 'Aprendizaje Continuo', en: 'Continuous Learning', fr: 'Apprentissage Continu' },
        description: {
          es: 'Motivación y capacidad para aprender constantemente.',
          en: 'Motivation and ability to learn constantly.',
          fr: 'Motivation et capacité à apprendre constamment.',
        },
        weight: 0.35,
      },
      {
        id: 'tech-adoption',
        name: { es: 'Adopción Tecnológica', en: 'Technology Adoption', fr: 'Adoption Technologique' },
        description: {
          es: 'Disposición para adoptar y utilizar nuevas tecnologías.',
          en: 'Willingness to adopt and use new technologies.',
          fr: 'Volonté d\'adopter et d\'utiliser de nouvelles technologies.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },

  // ============================================================================
  // PRE-SCHOOL EDUCATOR CATEGORIES
  // ============================================================================
  {
    id: 'edu-preschool-professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Conocimientos y habilidades técnicas específicas de la educación preescolar.',
      en: 'Technical knowledge and skills specific to pre-school education.',
      fr: 'Connaissances et compétences techniques spécifiques à l\'éducation préscolaire.',
    },
    competencies: [
      {
        id: 'early-childhood-development',
        name: { es: 'Desarrollo Infantil Temprano', en: 'Early Childhood Development', fr: 'Développement de la Petite Enfance' },
        description: {
          es: 'Comprensión de las etapas del desarrollo cognitivo, social y emocional de niños de 3-6 años.',
          en: 'Understanding of cognitive, social, and emotional development stages for children ages 3-6.',
          fr: 'Compréhension des étapes du développement cognitif, social et émotionnel des enfants de 3 à 6 ans.',
        },
        weight: 0.25,
      },
      {
        id: 'creative-pedagogy',
        name: { es: 'Pedagogía Creativa', en: 'Creative Pedagogy', fr: 'Pédagogie Créative' },
        description: {
          es: 'Capacidad de diseñar actividades lúdicas y creativas que promuevan el aprendizaje.',
          en: 'Ability to design playful and creative activities that promote learning.',
          fr: 'Capacité à concevoir des activités ludiques et créatives favorisant l\'apprentissage.',
        },
        weight: 0.25,
      },
      {
        id: 'child-safety',
        name: { es: 'Seguridad Infantil', en: 'Child Safety', fr: 'Sécurité de l\'Enfant' },
        description: {
          es: 'Conocimiento de protocolos de seguridad y primeros auxilios para niños pequeños.',
          en: 'Knowledge of safety protocols and first aid for young children.',
          fr: 'Connaissance des protocoles de sécurité et de premiers secours pour les jeunes enfants.',
        },
        weight: 0.25,
      },
      {
        id: 'inclusive-education',
        name: { es: 'Educación Inclusiva', en: 'Inclusive Education', fr: 'Éducation Inclusive' },
        description: {
          es: 'Capacidad para atender la diversidad y necesidades especiales en el aula.',
          en: 'Ability to address diversity and special needs in the classroom.',
          fr: 'Capacité à répondre à la diversité et aux besoins spéciaux en classe.',
        },
        weight: 0.25,
      },
    ],
    order: 1,
  },
  {
    id: 'edu-preschool-soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales clave para la educación preescolar.',
      en: 'Key interpersonal competencies for pre-school education.',
      fr: 'Compétences interpersonnelles clés pour l\'éducation préscolaire.',
    },
    competencies: [
      {
        id: 'emotional-intelligence-children',
        name: { es: 'Inteligencia Emocional con Niños', en: 'Emotional Intelligence with Children', fr: 'Intelligence Émotionnelle avec les Enfants' },
        description: {
          es: 'Capacidad para comprender y gestionar las emociones de los niños pequeños.',
          en: 'Ability to understand and manage the emotions of young children.',
          fr: 'Capacité à comprendre et gérer les émotions des jeunes enfants.',
        },
        weight: 0.3,
      },
      {
        id: 'parent-communication',
        name: { es: 'Comunicación con Padres', en: 'Parent Communication', fr: 'Communication avec les Parents' },
        description: {
          es: 'Habilidad para mantener una comunicación efectiva y empática con las familias.',
          en: 'Skill in maintaining effective and empathetic communication with families.',
          fr: 'Compétence en communication efficace et empathique avec les familles.',
        },
        weight: 0.35,
      },
      {
        id: 'classroom-management-young',
        name: { es: 'Gestión del Aula para Pequeños', en: 'Classroom Management for Young Learners', fr: 'Gestion de Classe pour les Petits' },
        description: {
          es: 'Capacidad para crear y mantener un ambiente de aprendizaje estructurado y seguro.',
          en: 'Ability to create and maintain a structured and safe learning environment.',
          fr: 'Capacité à créer et maintenir un environnement d\'apprentissage structuré et sûr.',
        },
        weight: 0.35,
      },
    ],
    order: 2,
  },
  {
    id: 'edu-preschool-readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación e innovación en la educación preescolar.',
      en: 'Adaptability and innovation capacity in pre-school education.',
      fr: 'Capacité d\'adaptation et d\'innovation dans l\'éducation préscolaire.',
    },
    competencies: [
      {
        id: 'pedagogical-innovation',
        name: { es: 'Innovación Pedagógica', en: 'Pedagogical Innovation', fr: 'Innovation Pédagogique' },
        description: {
          es: 'Disposición para explorar nuevos métodos y enfoques educativos.',
          en: 'Willingness to explore new educational methods and approaches.',
          fr: 'Volonté d\'explorer de nouvelles méthodes et approches éducatives.',
        },
        weight: 0.35,
      },
      {
        id: 'professional-growth',
        name: { es: 'Crecimiento Profesional', en: 'Professional Growth', fr: 'Croissance Professionnelle' },
        description: {
          es: 'Compromiso con la formación continua y el desarrollo profesional.',
          en: 'Commitment to ongoing training and professional development.',
          fr: 'Engagement envers la formation continue et le développement professionnel.',
        },
        weight: 0.35,
      },
      {
        id: 'edu-tech-adoption',
        name: { es: 'Adopción de Tecnología Educativa', en: 'Educational Technology Adoption', fr: 'Adoption de la Technologie Éducative' },
        description: {
          es: 'Capacidad para integrar herramientas digitales apropiadas para la edad.',
          en: 'Ability to integrate age-appropriate digital tools.',
          fr: 'Capacité à intégrer des outils numériques adaptés à l\'âge.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },

  // ============================================================================
  // PRIMARY SCHOOL EDUCATOR CATEGORIES
  // ============================================================================
  {
    id: 'edu-primary-professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Conocimientos y habilidades técnicas específicas de la educación primaria.',
      en: 'Technical knowledge and skills specific to primary education.',
      fr: 'Connaissances et compétences techniques spécifiques à l\'éducation primaire.',
    },
    competencies: [
      {
        id: 'curriculum-design',
        name: { es: 'Diseño Curricular', en: 'Curriculum Design', fr: 'Conception de Programmes' },
        description: {
          es: 'Capacidad para diseñar y adaptar planes de estudio alineados con estándares educativos.',
          en: 'Ability to design and adapt curricula aligned with educational standards.',
          fr: 'Capacité à concevoir et adapter des programmes alignés sur les normes éducatives.',
        },
        weight: 0.25,
      },
      {
        id: 'differentiated-instruction',
        name: { es: 'Instrucción Diferenciada', en: 'Differentiated Instruction', fr: 'Enseignement Différencié' },
        description: {
          es: 'Habilidad para adaptar la enseñanza a diferentes estilos y ritmos de aprendizaje.',
          en: 'Skill in adapting teaching to different learning styles and paces.',
          fr: 'Compétence en adaptation de l\'enseignement aux différents styles et rythmes d\'apprentissage.',
        },
        weight: 0.25,
      },
      {
        id: 'student-assessment',
        name: { es: 'Evaluación Estudiantil', en: 'Student Assessment', fr: 'Évaluation des Élèves' },
        description: {
          es: 'Conocimiento de métodos de evaluación formativa y sumativa para primaria.',
          en: 'Knowledge of formative and summative assessment methods for primary level.',
          fr: 'Connaissance des méthodes d\'évaluation formative et sommative pour le primaire.',
        },
        weight: 0.25,
      },
      {
        id: 'literacy-numeracy',
        name: { es: 'Lectoescritura y Matemáticas', en: 'Literacy and Numeracy', fr: 'Lecture-Écriture et Calcul' },
        description: {
          es: 'Competencia en la enseñanza de habilidades fundamentales de lectura, escritura y matemáticas.',
          en: 'Competence in teaching fundamental reading, writing, and mathematics skills.',
          fr: 'Compétence dans l\'enseignement des compétences fondamentales en lecture, écriture et mathématiques.',
        },
        weight: 0.25,
      },
    ],
    order: 1,
  },
  {
    id: 'edu-primary-soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales clave para la educación primaria.',
      en: 'Key interpersonal competencies for primary education.',
      fr: 'Compétences interpersonnelles clés pour l\'éducation primaire.',
    },
    competencies: [
      {
        id: 'classroom-management',
        name: { es: 'Gestión del Aula', en: 'Classroom Management', fr: 'Gestion de Classe' },
        description: {
          es: 'Capacidad para mantener un ambiente de aprendizaje productivo y respetuoso.',
          en: 'Ability to maintain a productive and respectful learning environment.',
          fr: 'Capacité à maintenir un environnement d\'apprentissage productif et respectueux.',
        },
        weight: 0.3,
      },
      {
        id: 'parent-teacher-communication',
        name: { es: 'Comunicación Padres-Docente', en: 'Parent-Teacher Communication', fr: 'Communication Parents-Enseignant' },
        description: {
          es: 'Habilidad para establecer una relación colaborativa con las familias.',
          en: 'Skill in establishing a collaborative relationship with families.',
          fr: 'Compétence en établissement d\'une relation collaborative avec les familles.',
        },
        weight: 0.35,
      },
      {
        id: 'student-wellbeing',
        name: { es: 'Bienestar del Alumno', en: 'Student Wellbeing', fr: 'Bien-être de l\'Élève' },
        description: {
          es: 'Sensibilidad para detectar y atender las necesidades emocionales y sociales del alumno.',
          en: 'Sensitivity to detect and address students\' emotional and social needs.',
          fr: 'Sensibilité pour détecter et répondre aux besoins émotionnels et sociaux des élèves.',
        },
        weight: 0.35,
      },
    ],
    order: 2,
  },
  {
    id: 'edu-primary-readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación e innovación en la educación primaria.',
      en: 'Adaptability and innovation capacity in primary education.',
      fr: 'Capacité d\'adaptation et d\'innovation dans l\'éducation primaire.',
    },
    competencies: [
      {
        id: 'edu-technology',
        name: { es: 'Tecnología Educativa', en: 'Educational Technology', fr: 'Technologie Éducative' },
        description: {
          es: 'Capacidad para integrar tecnología en el proceso de enseñanza-aprendizaje.',
          en: 'Ability to integrate technology into the teaching-learning process.',
          fr: 'Capacité à intégrer la technologie dans le processus enseignement-apprentissage.',
        },
        weight: 0.35,
      },
      {
        id: 'methodological-adaptation',
        name: { es: 'Adaptación Metodológica', en: 'Methodological Adaptation', fr: 'Adaptation Méthodologique' },
        description: {
          es: 'Flexibilidad para adoptar nuevas metodologías pedagógicas basadas en evidencia.',
          en: 'Flexibility to adopt new evidence-based pedagogical methodologies.',
          fr: 'Flexibilité pour adopter de nouvelles méthodologies pédagogiques fondées sur des preuves.',
        },
        weight: 0.35,
      },
      {
        id: 'continuous-professional-dev',
        name: { es: 'Desarrollo Profesional Continuo', en: 'Continuous Professional Development', fr: 'Développement Professionnel Continu' },
        description: {
          es: 'Compromiso con la actualización y mejora de la práctica docente.',
          en: 'Commitment to updating and improving teaching practice.',
          fr: 'Engagement envers la mise à jour et l\'amélioration de la pratique enseignante.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },

  // ============================================================================
  // SECONDARY SCHOOL EDUCATOR CATEGORIES
  // ============================================================================
  {
    id: 'edu-secondary-professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Conocimientos y habilidades técnicas específicas de la educación secundaria.',
      en: 'Technical knowledge and skills specific to secondary education.',
      fr: 'Connaissances et compétences techniques spécifiques à l\'éducation secondaire.',
    },
    competencies: [
      {
        id: 'subject-matter-expertise',
        name: { es: 'Dominio de la Materia', en: 'Subject Matter Expertise', fr: 'Expertise Disciplinaire' },
        description: {
          es: 'Profundidad de conocimiento en el área de especialización docente.',
          en: 'Depth of knowledge in the teaching specialization area.',
          fr: 'Profondeur de connaissances dans le domaine de spécialisation pédagogique.',
        },
        weight: 0.25,
      },
      {
        id: 'advanced-assessment',
        name: { es: 'Evaluación Avanzada', en: 'Advanced Assessment', fr: 'Évaluation Avancée' },
        description: {
          es: 'Capacidad para diseñar evaluaciones que midan comprensión profunda y pensamiento crítico.',
          en: 'Ability to design assessments that measure deep understanding and critical thinking.',
          fr: 'Capacité à concevoir des évaluations mesurant la compréhension approfondie et la pensée critique.',
        },
        weight: 0.25,
      },
      {
        id: 'critical-thinking-dev',
        name: { es: 'Desarrollo del Pensamiento Crítico', en: 'Critical Thinking Development', fr: 'Développement de la Pensée Critique' },
        description: {
          es: 'Habilidad para fomentar el análisis, la argumentación y el pensamiento independiente.',
          en: 'Skill in fostering analysis, argumentation, and independent thinking.',
          fr: 'Compétence pour favoriser l\'analyse, l\'argumentation et la pensée indépendante.',
        },
        weight: 0.25,
      },
      {
        id: 'career-readiness-guidance',
        name: { es: 'Orientación Vocacional', en: 'College/Career Readiness Guidance', fr: 'Orientation Professionnelle' },
        description: {
          es: 'Capacidad para guiar a los estudiantes en decisiones académicas y profesionales.',
          en: 'Ability to guide students in academic and career decisions.',
          fr: 'Capacité à guider les étudiants dans leurs décisions académiques et professionnelles.',
        },
        weight: 0.25,
      },
    ],
    order: 1,
  },
  {
    id: 'edu-secondary-soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales clave para la educación secundaria.',
      en: 'Key interpersonal competencies for secondary education.',
      fr: 'Compétences interpersonnelles clés pour l\'éducation secondaire.',
    },
    competencies: [
      {
        id: 'adolescent-engagement',
        name: { es: 'Engagement con Adolescentes', en: 'Adolescent Engagement', fr: 'Engagement avec les Adolescents' },
        description: {
          es: 'Habilidad para motivar y conectar con estudiantes adolescentes.',
          en: 'Skill in motivating and connecting with adolescent students.',
          fr: 'Compétence pour motiver et se connecter avec les élèves adolescents.',
        },
        weight: 0.35,
      },
      {
        id: 'classroom-discipline',
        name: { es: 'Disciplina en el Aula', en: 'Classroom Discipline', fr: 'Discipline en Classe' },
        description: {
          es: 'Capacidad para establecer normas claras y gestionar comportamiento adolescente.',
          en: 'Ability to establish clear rules and manage adolescent behavior.',
          fr: 'Capacité à établir des règles claires et gérer le comportement adolescent.',
        },
        weight: 0.35,
      },
      {
        id: 'digital-literacy',
        name: { es: 'Competencia Digital', en: 'Digital Literacy', fr: 'Littératie Numérique' },
        description: {
          es: 'Habilidad para promover el uso responsable y crítico de la tecnología.',
          en: 'Skill in promoting responsible and critical use of technology.',
          fr: 'Compétence pour promouvoir l\'utilisation responsable et critique de la technologie.',
        },
        weight: 0.3,
      },
    ],
    order: 2,
  },
  {
    id: 'edu-secondary-readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación e innovación en la educación secundaria.',
      en: 'Adaptability and innovation capacity in secondary education.',
      fr: 'Capacité d\'adaptation et d\'innovation dans l\'éducation secondaire.',
    },
    competencies: [
      {
        id: 'interdisciplinary-teaching',
        name: { es: 'Enseñanza Interdisciplinaria', en: 'Interdisciplinary Teaching', fr: 'Enseignement Interdisciplinaire' },
        description: {
          es: 'Disposición para integrar conocimientos de múltiples disciplinas en la enseñanza.',
          en: 'Willingness to integrate knowledge from multiple disciplines in teaching.',
          fr: 'Volonté d\'intégrer les connaissances de plusieurs disciplines dans l\'enseignement.',
        },
        weight: 0.35,
      },
      {
        id: 'data-driven-instruction',
        name: { es: 'Instrucción Basada en Datos', en: 'Data-Driven Instruction', fr: 'Enseignement Basé sur les Données' },
        description: {
          es: 'Capacidad para usar datos de rendimiento estudiantil para mejorar la instrucción.',
          en: 'Ability to use student performance data to improve instruction.',
          fr: 'Capacité à utiliser les données de performance des élèves pour améliorer l\'enseignement.',
        },
        weight: 0.35,
      },
      {
        id: 'edu-innovation',
        name: { es: 'Innovación Educativa', en: 'Educational Innovation', fr: 'Innovation Éducative' },
        description: {
          es: 'Apertura a nuevas tendencias pedagógicas y herramientas digitales avanzadas.',
          en: 'Openness to new pedagogical trends and advanced digital tools.',
          fr: 'Ouverture aux nouvelles tendances pédagogiques et aux outils numériques avancés.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },

  // ============================================================================
  // SALES ASSOCIATE CATEGORIES
  // ============================================================================
  {
    id: 'sales-professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Conocimientos y habilidades técnicas específicas de la venta al detalle.',
      en: 'Technical knowledge and skills specific to retail sales.',
      fr: 'Connaissances et compétences techniques spécifiques à la vente au détail.',
    },
    competencies: [
      {
        id: 'sales-product-knowledge',
        name: { es: 'Conocimiento del Producto', en: 'Product Knowledge', fr: 'Connaissance des Produits' },
        description: {
          es: 'Dominio de las características, beneficios y diferenciadores de los productos ofrecidos.',
          en: 'Mastery of features, benefits, and differentiators of the products offered.',
          fr: 'Maîtrise des caractéristiques, avantages et différenciateurs des produits proposés.',
        },
        weight: 0.25,
      },
      {
        id: 'sales-techniques',
        name: { es: 'Técnicas de Venta', en: 'Sales Techniques', fr: 'Techniques de Vente' },
        description: {
          es: 'Habilidad para identificar necesidades, presentar soluciones y cerrar ventas.',
          en: 'Skill in identifying needs, presenting solutions, and closing sales.',
          fr: 'Compétence en identification des besoins, présentation de solutions et conclusion de ventes.',
        },
        weight: 0.25,
      },
      {
        id: 'pos-inventory',
        name: { es: 'Sistemas de Punto de Venta e Inventario', en: 'POS and Inventory Systems', fr: 'Systèmes de Point de Vente et d\'Inventaire' },
        description: {
          es: 'Competencia en el uso de sistemas de cobro, inventario y herramientas tecnológicas de la tienda.',
          en: 'Competence in using checkout systems, inventory, and store technology tools.',
          fr: 'Compétence dans l\'utilisation des systèmes de caisse, d\'inventaire et des outils technologiques du magasin.',
        },
        weight: 0.25,
      },
      {
        id: 'visual-merchandising',
        name: { es: 'Merchandising Visual', en: 'Visual Merchandising', fr: 'Merchandising Visuel' },
        description: {
          es: 'Capacidad para organizar y presentar productos de manera atractiva para impulsar ventas.',
          en: 'Ability to organize and display products attractively to drive sales.',
          fr: 'Capacité à organiser et présenter les produits de manière attrayante pour stimuler les ventes.',
        },
        weight: 0.25,
      },
    ],
    order: 1,
  },
  {
    id: 'sales-soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales clave para la venta al detalle.',
      en: 'Key interpersonal competencies for retail sales.',
      fr: 'Compétences interpersonnelles clés pour la vente au détail.',
    },
    competencies: [
      {
        id: 'retail-customer-service',
        name: { es: 'Atención al Cliente', en: 'Customer Service', fr: 'Service Client' },
        description: {
          es: 'Capacidad para ofrecer una experiencia de compra excepcional y personalizada.',
          en: 'Ability to deliver an exceptional and personalized shopping experience.',
          fr: 'Capacité à offrir une expérience d\'achat exceptionnelle et personnalisée.',
        },
        weight: 0.35,
      },
      {
        id: 'conflict-resolution',
        name: { es: 'Resolución de Conflictos', en: 'Conflict Resolution', fr: 'Résolution de Conflits' },
        description: {
          es: 'Habilidad para manejar quejas, devoluciones y situaciones difíciles con clientes.',
          en: 'Skill in handling complaints, returns, and difficult customer situations.',
          fr: 'Compétence dans la gestion des plaintes, retours et situations difficiles avec les clients.',
        },
        weight: 0.3,
      },
      {
        id: 'retail-teamwork',
        name: { es: 'Trabajo en Equipo en Tienda', en: 'In-Store Teamwork', fr: 'Travail d\'Équipe en Magasin' },
        description: {
          es: 'Capacidad para colaborar con compañeros para cumplir metas de la tienda.',
          en: 'Ability to collaborate with colleagues to meet store goals.',
          fr: 'Capacité à collaborer avec les collègues pour atteindre les objectifs du magasin.',
        },
        weight: 0.35,
      },
    ],
    order: 2,
  },
  {
    id: 'sales-readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación e innovación en el entorno de venta al detalle.',
      en: 'Adaptability and innovation capacity in the retail environment.',
      fr: 'Capacité d\'adaptation et d\'innovation dans l\'environnement de vente au détail.',
    },
    competencies: [
      {
        id: 'upselling-cross-selling',
        name: { es: 'Venta Cruzada y Adicional', en: 'Upselling and Cross-Selling', fr: 'Vente Croisée et Additionnelle' },
        description: {
          es: 'Disposición y habilidad para ofrecer productos complementarios y de mayor valor.',
          en: 'Willingness and skill to offer complementary and higher-value products.',
          fr: 'Volonté et compétence pour proposer des produits complémentaires et de plus grande valeur.',
        },
        weight: 0.35,
      },
      {
        id: 'retail-adaptability',
        name: { es: 'Adaptabilidad Comercial', en: 'Retail Adaptability', fr: 'Adaptabilité Commerciale' },
        description: {
          es: 'Flexibilidad para adaptarse a cambios en productos, promociones y procesos de tienda.',
          en: 'Flexibility to adapt to changes in products, promotions, and store processes.',
          fr: 'Flexibilité pour s\'adapter aux changements de produits, promotions et processus du magasin.',
        },
        weight: 0.35,
      },
      {
        id: 'retail-tech',
        name: { es: 'Tecnología en Retail', en: 'Retail Technology', fr: 'Technologie en Commerce de Détail' },
        description: {
          es: 'Disposición para aprender y utilizar nuevas herramientas digitales en el punto de venta.',
          en: 'Willingness to learn and use new digital tools at the point of sale.',
          fr: 'Volonté d\'apprendre et d\'utiliser de nouveaux outils numériques au point de vente.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },

  // ============================================================================
  // RIDE-HAILING DRIVER CATEGORIES
  // ============================================================================
  {
    id: 'ridehailing-professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Conocimientos y habilidades técnicas específicas para conductores de plataformas de transporte.',
      en: 'Technical knowledge and skills specific to ride-hailing platform drivers.',
      fr: 'Connaissances et compétences techniques spécifiques aux chauffeurs de plateformes de transport.',
    },
    competencies: [
      {
        id: 'passenger-safety',
        name: { es: 'Seguridad del Pasajero', en: 'Passenger Safety', fr: 'Sécurité des Passagers' },
        description: {
          es: 'Conocimiento y aplicación de protocolos de seguridad vial y protección del pasajero.',
          en: 'Knowledge and application of road safety protocols and passenger protection.',
          fr: 'Connaissance et application des protocoles de sécurité routière et de protection des passagers.',
        },
        weight: 0.25,
      },
      {
        id: 'navigation-skills',
        name: { es: 'Habilidades de Navegación', en: 'Navigation Skills', fr: 'Compétences de Navigation' },
        description: {
          es: 'Capacidad para orientarse eficientemente usando GPS y conocimiento local de rutas.',
          en: 'Ability to navigate efficiently using GPS and local route knowledge.',
          fr: 'Capacité à naviguer efficacement en utilisant le GPS et la connaissance locale des itinéraires.',
        },
        weight: 0.25,
      },
      {
        id: 'vehicle-maintenance',
        name: { es: 'Mantenimiento Vehicular', en: 'Vehicle Maintenance', fr: 'Entretien du Véhicule' },
        description: {
          es: 'Conocimiento de mantenimiento preventivo y cuidado del vehículo para el servicio.',
          en: 'Knowledge of preventive maintenance and vehicle care for service.',
          fr: 'Connaissance de l\'entretien préventif et du soin du véhicule pour le service.',
        },
        weight: 0.25,
      },
      {
        id: 'local-regulations',
        name: { es: 'Conocimiento de Regulaciones Locales', en: 'Local Regulations Knowledge', fr: 'Connaissance des Réglementations Locales' },
        description: {
          es: 'Comprensión de las leyes y normativas de tránsito y transporte de pasajeros.',
          en: 'Understanding of traffic and passenger transportation laws and regulations.',
          fr: 'Compréhension des lois et réglementations de circulation et de transport de passagers.',
        },
        weight: 0.25,
      },
    ],
    order: 1,
  },
  {
    id: 'ridehailing-soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales clave para conductores de plataformas de transporte.',
      en: 'Key interpersonal competencies for ride-hailing platform drivers.',
      fr: 'Compétences interpersonnelles clés pour les chauffeurs de plateformes de transport.',
    },
    competencies: [
      {
        id: 'rider-customer-service',
        name: { es: 'Servicio al Pasajero', en: 'Rider Customer Service', fr: 'Service au Passager' },
        description: {
          es: 'Capacidad para ofrecer una experiencia de viaje cómoda, profesional y agradable.',
          en: 'Ability to provide a comfortable, professional, and pleasant ride experience.',
          fr: 'Capacité à offrir une expérience de trajet confortable, professionnelle et agréable.',
        },
        weight: 0.35,
      },
      {
        id: 'driver-conflict-resolution',
        name: { es: 'Resolución de Conflictos', en: 'Conflict Resolution', fr: 'Résolution de Conflits' },
        description: {
          es: 'Habilidad para manejar situaciones difíciles con pasajeros de manera calmada y profesional.',
          en: 'Skill in handling difficult situations with passengers in a calm and professional manner.',
          fr: 'Compétence pour gérer les situations difficiles avec les passagers de manière calme et professionnelle.',
        },
        weight: 0.35,
      },
      {
        id: 'accessibility-awareness',
        name: { es: 'Conciencia de Accesibilidad', en: 'Accessibility Awareness', fr: 'Sensibilisation à l\'Accessibilité' },
        description: {
          es: 'Sensibilidad y disposición para atender a pasajeros con necesidades especiales o discapacidad.',
          en: 'Sensitivity and willingness to serve passengers with special needs or disabilities.',
          fr: 'Sensibilité et volonté de servir les passagers ayant des besoins spéciaux ou des handicaps.',
        },
        weight: 0.3,
      },
    ],
    order: 2,
  },
  {
    id: 'ridehailing-readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación, gestión financiera y adopción de tecnología para conductores de plataformas.',
      en: 'Adaptability, financial management, and technology adoption for platform drivers.',
      fr: 'Adaptabilité, gestion financière et adoption de la technologie pour les chauffeurs de plateformes.',
    },
    competencies: [
      {
        id: 'driver-time-management',
        name: { es: 'Gestión del Tiempo', en: 'Time Management', fr: 'Gestion du Temps' },
        description: {
          es: 'Capacidad para organizar horarios, optimizar turnos y maximizar productividad.',
          en: 'Ability to organize schedules, optimize shifts, and maximize productivity.',
          fr: 'Capacité à organiser les horaires, optimiser les créneaux et maximiser la productivité.',
        },
        weight: 0.3,
      },
      {
        id: 'financial-literacy',
        name: { es: 'Educación Financiera', en: 'Financial Literacy', fr: 'Littératie Financière' },
        description: {
          es: 'Habilidad para gestionar ingresos, gastos, impuestos y planificación financiera como conductor independiente.',
          en: 'Skill in managing income, expenses, taxes, and financial planning as an independent driver.',
          fr: 'Compétence en gestion des revenus, dépenses, impôts et planification financière en tant que chauffeur indépendant.',
        },
        weight: 0.35,
      },
      {
        id: 'driver-app-proficiency',
        name: { es: 'Dominio de Aplicaciones', en: 'App Proficiency', fr: 'Maîtrise des Applications' },
        description: {
          es: 'Disposición y capacidad para usar eficientemente aplicaciones de transporte, GPS y herramientas digitales.',
          en: 'Willingness and ability to efficiently use transportation apps, GPS, and digital tools.',
          fr: 'Volonté et capacité à utiliser efficacement les applications de transport, le GPS et les outils numériques.',
        },
        weight: 0.35,
      },
    ],
    order: 3,
  },

  // ============================================================================
  // PHARMACY CLERK CATEGORIES
  // ============================================================================
  {
    id: 'pharmacy-professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Conocimientos técnicos y habilidades específicas para auxiliares de farmacia, incluyendo manejo de productos, cobro, inventario y normativas.',
      en: 'Technical knowledge and skills specific to pharmacy clerks, including product handling, payment processing, inventory, and regulations.',
      fr: 'Connaissances techniques et compétences spécifiques aux préparateurs en pharmacie, y compris la gestion des produits, le traitement des paiements, l\'inventaire et les réglementations.',
    },
    competencies: [
      {
        id: 'otc-product-knowledge',
        name: { es: 'Conocimiento de Productos de Venta Libre', en: 'OTC Product Knowledge', fr: 'Connaissance des Produits en Vente Libre' },
        description: {
          es: 'Conocimiento de medicamentos de venta libre, productos de salud, suplementos y sus indicaciones básicas.',
          en: 'Knowledge of over-the-counter medications, health products, supplements, and their basic indications.',
          fr: 'Connaissance des médicaments en vente libre, des produits de santé, des suppléments et de leurs indications de base.',
        },
        weight: 0.25,
      },
      {
        id: 'pos-cash-handling',
        name: { es: 'Manejo de Caja y Punto de Venta', en: 'POS/Cash Handling', fr: 'Gestion de Caisse et Point de Vente' },
        description: {
          es: 'Habilidad para operar el sistema de punto de venta, procesar pagos y manejar efectivo de forma precisa.',
          en: 'Skill in operating the point-of-sale system, processing payments, and handling cash accurately.',
          fr: 'Compétence dans l\'utilisation du système de point de vente, le traitement des paiements et la gestion de l\'argent liquide de manière précise.',
        },
        weight: 0.25,
      },
      {
        id: 'inventory-management',
        name: { es: 'Gestión de Inventario', en: 'Inventory Management', fr: 'Gestion des Stocks' },
        description: {
          es: 'Capacidad para controlar existencias, reponer estantes, verificar fechas de vencimiento y organizar productos.',
          en: 'Ability to track stock, restock shelves, check expiration dates, and organize products.',
          fr: 'Capacité à suivre les stocks, réapprovisionner les rayons, vérifier les dates de péremption et organiser les produits.',
        },
        weight: 0.25,
      },
      {
        id: 'regulatory-awareness',
        name: { es: 'Conocimiento Regulatorio', en: 'Regulatory Awareness', fr: 'Sensibilisation Réglementaire' },
        description: {
          es: 'Comprensión de las normas sobre qué productos puede y no puede recomendar, y cuándo referir al farmacéutico.',
          en: 'Understanding of regulations regarding what products can and cannot be recommended, and when to refer to the pharmacist.',
          fr: 'Compréhension des réglementations concernant les produits pouvant ou non être recommandés, et quand référer au pharmacien.',
        },
        weight: 0.25,
      },
    ],
    order: 1,
  },
  {
    id: 'pharmacy-soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales clave para auxiliares de farmacia, incluyendo atención al cliente, trabajo en equipo y comunicación.',
      en: 'Key interpersonal competencies for pharmacy clerks, including customer service, teamwork, and communication.',
      fr: 'Compétences interpersonnelles clés pour les préparateurs en pharmacie, y compris le service client, le travail d\'équipe et la communication.',
    },
    competencies: [
      {
        id: 'pharmacy-customer-service',
        name: { es: 'Atención al Cliente', en: 'Customer Service', fr: 'Service Client' },
        description: {
          es: 'Capacidad para atender a los clientes de forma amable, eficiente y profesional en el mostrador y por teléfono.',
          en: 'Ability to serve customers in a friendly, efficient, and professional manner at the counter and over the phone.',
          fr: 'Capacité à servir les clients de manière aimable, efficace et professionnelle au comptoir et par téléphone.',
        },
        weight: 0.35,
      },
      {
        id: 'pharmacy-teamwork',
        name: { es: 'Trabajo en Equipo', en: 'Teamwork', fr: 'Travail d\'Équipe' },
        description: {
          es: 'Habilidad para colaborar con el farmacéutico y otros compañeros para garantizar un servicio fluido.',
          en: 'Skill in collaborating with the pharmacist and other colleagues to ensure smooth service.',
          fr: 'Compétence pour collaborer avec le pharmacien et les autres collègues afin d\'assurer un service fluide.',
        },
        weight: 0.35,
      },
      {
        id: 'pharmacy-attention-detail',
        name: { es: 'Atención al Detalle', en: 'Attention to Detail', fr: 'Attention aux Détails' },
        description: {
          es: 'Capacidad para ser minucioso en el manejo de productos, precios, fechas de vencimiento y pedidos de clientes.',
          en: 'Ability to be thorough in handling products, prices, expiration dates, and customer orders.',
          fr: 'Capacité à être minutieux dans la gestion des produits, des prix, des dates de péremption et des commandes des clients.',
        },
        weight: 0.3,
      },
    ],
    order: 2,
  },
  {
    id: 'pharmacy-readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación a nuevos productos, tecnologías, protocolos y tendencias del sector farmacéutico.',
      en: 'Adaptability to new products, technologies, protocols, and trends in the pharmaceutical sector.',
      fr: 'Adaptabilité aux nouveaux produits, technologies, protocoles et tendances du secteur pharmaceutique.',
    },
    competencies: [
      {
        id: 'pharmacy-adaptability',
        name: { es: 'Adaptabilidad', en: 'Adaptability', fr: 'Adaptabilité' },
        description: {
          es: 'Disposición para aprender sobre nuevos productos, procedimientos y cambios en normativas.',
          en: 'Willingness to learn about new products, procedures, and regulatory changes.',
          fr: 'Volonté d\'apprendre sur les nouveaux produits, procédures et changements réglementaires.',
        },
        weight: 0.35,
      },
      {
        id: 'pharmacy-store-organization',
        name: { es: 'Organización de la Tienda', en: 'Store Organization', fr: 'Organisation du Magasin' },
        description: {
          es: 'Capacidad para mantener el orden, limpieza y organización del espacio de trabajo y las áreas de exhibición.',
          en: 'Ability to maintain order, cleanliness, and organization of the workspace and display areas.',
          fr: 'Capacité à maintenir l\'ordre, la propreté et l\'organisation de l\'espace de travail et des zones d\'exposition.',
        },
        weight: 0.3,
      },
      {
        id: 'pharmacy-phone-etiquette',
        name: { es: 'Etiqueta Telefónica', en: 'Phone Etiquette', fr: 'Étiquette Téléphonique' },
        description: {
          es: 'Habilidad para atender llamadas telefónicas de forma profesional, tomar mensajes y canalizar consultas.',
          en: 'Skill in answering phone calls professionally, taking messages, and routing inquiries.',
          fr: 'Compétence pour répondre aux appels téléphoniques de manière professionnelle, prendre des messages et acheminer les demandes.',
        },
        weight: 0.35,
      },
    ],
    order: 3,
  },

  // --- Gas Station Attendant ---
  {
    id: 'gas-station-professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Conocimientos técnicos y operativos específicos para el trabajo en estaciones de servicio.',
      en: 'Technical and operational knowledge specific to gas station work.',
      fr: 'Connaissances techniques et opérationnelles spécifiques au travail en station-service.',
    },
    competencies: [
      {
        id: 'fuel-dispensing-safety',
        name: { es: 'Seguridad en Despacho de Combustible', en: 'Fuel Dispensing Safety', fr: 'Sécurité de Distribution de Carburant' },
        description: {
          es: 'Conocimiento y aplicación de procedimientos seguros para despachar combustible, incluyendo tipos de combustible y manejo de equipos.',
          en: 'Knowledge and application of safe procedures for dispensing fuel, including fuel types and equipment handling.',
          fr: 'Connaissance et application des procédures sécuritaires pour distribuer le carburant, y compris les types de carburant et la manipulation des équipements.',
        },
        weight: 0.25,
      },
      {
        id: 'payment-processing',
        name: { es: 'Procesamiento de Pagos', en: 'Payment Processing', fr: 'Traitement des Paiements' },
        description: {
          es: 'Capacidad para manejar transacciones en efectivo y tarjeta, operar terminales de punto de venta y cuadrar caja.',
          en: 'Ability to handle cash and card transactions, operate POS terminals, and balance the cash register.',
          fr: 'Capacité à gérer les transactions en espèces et par carte, opérer les terminaux de point de vente et faire la caisse.',
        },
        weight: 0.2,
      },
      {
        id: 'basic-vehicle-knowledge',
        name: { es: 'Conocimiento Básico de Vehículos', en: 'Basic Vehicle Knowledge', fr: 'Connaissances de Base sur les Véhicules' },
        description: {
          es: 'Capacidad para realizar revisiones básicas de vehículos como verificar aceite, agua, presión de llantas y niveles de fluidos.',
          en: 'Ability to perform basic vehicle checks such as verifying oil, water, tire pressure, and fluid levels.',
          fr: 'Capacité à effectuer des vérifications de base des véhicules comme vérifier l\'huile, l\'eau, la pression des pneus et les niveaux de liquides.',
        },
        weight: 0.2,
      },
      {
        id: 'hazmat-safety',
        name: { es: 'Seguridad con Materiales Peligrosos', en: 'Hazardous Materials Safety', fr: 'Sécurité des Matières Dangereuses' },
        description: {
          es: 'Conocimiento de protocolos de seguridad para el manejo de combustibles y materiales inflamables, prevención de derrames y respuesta ante emergencias.',
          en: 'Knowledge of safety protocols for handling fuels and flammable materials, spill prevention, and emergency response.',
          fr: 'Connaissance des protocoles de sécurité pour la manipulation de carburants et matières inflammables, prévention des déversements et réponse aux urgences.',
        },
        weight: 0.2,
      },
      {
        id: 'station-maintenance',
        name: { es: 'Mantenimiento y Limpieza de Estación', en: 'Station Maintenance and Cleanliness', fr: 'Entretien et Propreté de la Station' },
        description: {
          es: 'Capacidad para mantener la estación limpia, ordenada y en condiciones operativas óptimas.',
          en: 'Ability to keep the station clean, organized, and in optimal operating condition.',
          fr: 'Capacité à maintenir la station propre, organisée et en conditions opérationnelles optimales.',
        },
        weight: 0.15,
      },
    ],
    order: 1,
  },
  {
    id: 'gas-station-soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales clave para la atención al cliente en estaciones de servicio.',
      en: 'Key interpersonal competencies for customer service at gas stations.',
      fr: 'Compétences interpersonnelles clés pour le service client en station-service.',
    },
    competencies: [
      {
        id: 'gas-customer-service',
        name: { es: 'Atención al Cliente', en: 'Customer Service', fr: 'Service Client' },
        description: {
          es: 'Capacidad para brindar atención rápida, amable y eficiente a los conductores y clientes de la estación.',
          en: 'Ability to provide fast, friendly, and efficient service to drivers and station customers.',
          fr: 'Capacité à fournir un service rapide, aimable et efficace aux conducteurs et clients de la station.',
        },
        weight: 0.35,
      },
      {
        id: 'gas-conflict-resolution',
        name: { es: 'Resolución de Conflictos', en: 'Conflict Resolution', fr: 'Résolution de Conflits' },
        description: {
          es: 'Habilidad para manejar quejas, situaciones difíciles y clientes molestos de forma profesional.',
          en: 'Skill in handling complaints, difficult situations, and upset customers professionally.',
          fr: 'Compétence dans la gestion des plaintes, situations difficiles et clients mécontents de manière professionnelle.',
        },
        weight: 0.3,
      },
      {
        id: 'gas-upselling',
        name: { es: 'Venta de Servicios Adicionales', en: 'Upselling Services', fr: 'Vente de Services Additionnels' },
        description: {
          es: 'Disposición y habilidad para ofrecer servicios y productos complementarios como lavado de auto, aditivos y artículos de conveniencia.',
          en: 'Willingness and skill to offer complementary services and products such as car wash, additives, and convenience items.',
          fr: 'Volonté et compétence pour proposer des services et produits complémentaires comme le lavage de voiture, les additifs et les articles de proximité.',
        },
        weight: 0.35,
      },
    ],
    order: 2,
  },
  {
    id: 'gas-station-readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación, conciencia ambiental y adopción de nuevas tecnologías en estaciones de servicio.',
      en: 'Adaptability, environmental awareness, and adoption of new technologies at gas stations.',
      fr: 'Adaptabilité, conscience environnementale et adoption de nouvelles technologies en station-service.',
    },
    competencies: [
      {
        id: 'emergency-response',
        name: { es: 'Respuesta ante Emergencias', en: 'Emergency Response', fr: 'Réponse aux Urgences' },
        description: {
          es: 'Capacidad para actuar rápida y correctamente ante emergencias como incendios, derrames o accidentes en la estación.',
          en: 'Ability to act quickly and correctly during emergencies such as fires, spills, or accidents at the station.',
          fr: 'Capacité à agir rapidement et correctement lors d\'urgences telles que les incendies, déversements ou accidents à la station.',
        },
        weight: 0.35,
      },
      {
        id: 'environmental-awareness',
        name: { es: 'Conciencia Ambiental', en: 'Environmental Awareness', fr: 'Conscience Environnementale' },
        description: {
          es: 'Conocimiento y aplicación de prácticas para prevenir contaminación, manejo adecuado de derrames y disposición correcta de residuos.',
          en: 'Knowledge and application of practices to prevent contamination, proper spill handling, and correct waste disposal.',
          fr: 'Connaissance et application des pratiques de prévention de la contamination, gestion adéquate des déversements et élimination correcte des déchets.',
        },
        weight: 0.35,
      },
      {
        id: 'gas-tech-adaptability',
        name: { es: 'Adaptación Tecnológica', en: 'Technology Adaptability', fr: 'Adaptabilité Technologique' },
        description: {
          es: 'Disposición para aprender y utilizar nuevas tecnologías como sistemas de pago electrónico, bombas automatizadas y software de gestión.',
          en: 'Willingness to learn and use new technologies such as electronic payment systems, automated pumps, and management software.',
          fr: 'Volonté d\'apprendre et d\'utiliser de nouvelles technologies comme les systèmes de paiement électronique, les pompes automatisées et les logiciels de gestion.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },

  // ============================================================================
  // AML/CFT COMPLIANCE OFFICER CATEGORIES
  // ============================================================================
  {
    id: 'aml-professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Conocimientos técnicos y regulatorios específicos para la prevención de lavado de activos y financiamiento del terrorismo.',
      en: 'Technical and regulatory knowledge specific to anti-money laundering and counter-terrorist financing.',
      fr: 'Connaissances techniques et réglementaires spécifiques à la lutte contre le blanchiment de capitaux et le financement du terrorisme.',
    },
    competencies: [
      {
        id: 'aml-regulatory-knowledge',
        name: { es: 'Conocimiento Regulatorio PLAFT', en: 'AML/CFT Regulatory Knowledge', fr: 'Connaissances Réglementaires LCB-FT' },
        description: {
          es: 'Dominio de las recomendaciones del GAFI/FATF, legislación local antilavado, y normativa de los entes reguladores y la UIF.',
          en: 'Mastery of FATF recommendations, local AML legislation, and regulations from supervisory bodies and the FIU.',
          fr: 'Maîtrise des recommandations du GAFI, de la législation locale anti-blanchiment et des réglementations des organismes de surveillance et de la CRF.',
        },
        weight: 0.2,
      },
      {
        id: 'kyc-cdd',
        name: { es: 'KYC / Debida Diligencia del Cliente', en: 'KYC / Customer Due Diligence', fr: 'KYC / Devoir de Diligence Client' },
        description: {
          es: 'Capacidad para ejecutar procesos de Conoce a tu Cliente, debida diligencia simplificada, estándar y reforzada, e identificación de beneficiario final.',
          en: 'Ability to execute Know Your Customer processes, simplified, standard, and enhanced due diligence, and beneficial ownership identification.',
          fr: 'Capacité à exécuter les processus de connaissance du client, diligence simplifiée, standard et renforcée, et identification du bénéficiaire effectif.',
        },
        weight: 0.2,
      },
      {
        id: 'suspicious-activity-reporting',
        name: { es: 'Detección y Reporte de Operaciones Sospechosas', en: 'Suspicious Activity Detection and Reporting', fr: 'Détection et Déclaration d\'Activités Suspectes' },
        description: {
          es: 'Habilidad para identificar señales de alerta (red flags), elaborar y presentar Reportes de Operaciones Sospechosas (ROS/SAR) ante la UIF.',
          en: 'Skill in identifying red flags, preparing and filing Suspicious Activity Reports (SAR) with the FIU.',
          fr: 'Compétence pour identifier les signaux d\'alerte, préparer et déposer des Déclarations de Soupçon (DS) auprès de la CRF.',
        },
        weight: 0.2,
      },
      {
        id: 'risk-assessment-methodology',
        name: { es: 'Metodología de Evaluación de Riesgos', en: 'Risk Assessment Methodology', fr: 'Méthodologie d\'Évaluation des Risques' },
        description: {
          es: 'Capacidad para diseñar y ejecutar evaluaciones de riesgo LA/FT a nivel de cliente, producto, canal y jurisdicción, aplicando el enfoque basado en riesgo.',
          en: 'Ability to design and execute ML/TF risk assessments at client, product, channel, and jurisdiction level, applying the risk-based approach.',
          fr: 'Capacité à concevoir et exécuter des évaluations des risques BC/FT au niveau du client, du produit, du canal et de la juridiction, en appliquant l\'approche fondée sur les risques.',
        },
        weight: 0.2,
      },
      {
        id: 'transaction-monitoring',
        name: { es: 'Monitoreo de Transacciones', en: 'Transaction Monitoring', fr: 'Surveillance des Transactions' },
        description: {
          es: 'Conocimiento de sistemas y metodologías de monitoreo transaccional, filtrado contra listas de sanciones (OFAC, ONU, UE) y detección de patrones inusuales.',
          en: 'Knowledge of transaction monitoring systems and methodologies, sanctions screening (OFAC, UN, EU lists), and detection of unusual patterns.',
          fr: 'Connaissance des systèmes et méthodologies de surveillance des transactions, filtrage contre les listes de sanctions (OFAC, ONU, UE) et détection de schémas inhabituels.',
        },
        weight: 0.2,
      },
    ],
    order: 1,
  },
  {
    id: 'aml-soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales clave para el rol de oficial de cumplimiento PLAFT.',
      en: 'Key interpersonal competencies for the AML/CFT compliance officer role.',
      fr: 'Compétences interpersonnelles clés pour le rôle de responsable conformité LCB-FT.',
    },
    competencies: [
      {
        id: 'aml-ethics-integrity',
        name: { es: 'Ética e Integridad', en: 'Ethics and Integrity', fr: 'Éthique et Intégrité' },
        description: {
          es: 'Compromiso inquebrantable con la ética profesional, la confidencialidad y la integridad en el manejo de información sensible.',
          en: 'Unwavering commitment to professional ethics, confidentiality, and integrity in handling sensitive information.',
          fr: 'Engagement indéfectible envers l\'éthique professionnelle, la confidentialité et l\'intégrité dans le traitement des informations sensibles.',
        },
        weight: 0.35,
      },
      {
        id: 'aml-communication',
        name: { es: 'Comunicación con Reguladores y Alta Dirección', en: 'Communication with Regulators and Senior Management', fr: 'Communication avec les Régulateurs et la Direction' },
        description: {
          es: 'Capacidad para comunicarse eficazmente con la UIF, supervisores, alta dirección, y áreas de negocio sobre temas de cumplimiento.',
          en: 'Ability to communicate effectively with the FIU, supervisors, senior management, and business areas on compliance matters.',
          fr: 'Capacité à communiquer efficacement avec la CRF, les superviseurs, la direction et les secteurs d\'activité sur les questions de conformité.',
        },
        weight: 0.35,
      },
      {
        id: 'aml-training-capacity',
        name: { es: 'Capacidad de Capacitación', en: 'Training Capacity', fr: 'Capacité de Formation' },
        description: {
          es: 'Habilidad para diseñar y ejecutar programas de capacitación en PLAFT para todo el personal de la organización.',
          en: 'Skill in designing and delivering AML/CFT training programs for all organizational staff.',
          fr: 'Compétence pour concevoir et dispenser des programmes de formation LCB-FT pour tout le personnel de l\'organisation.',
        },
        weight: 0.3,
      },
    ],
    order: 2,
  },
  {
    id: 'aml-readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación ante cambios regulatorios, nuevas tipologías de lavado y evolución tecnológica en el ámbito PLAFT.',
      en: 'Adaptability to regulatory changes, new money laundering typologies, and technological evolution in AML/CFT.',
      fr: 'Capacité d\'adaptation aux changements réglementaires, nouvelles typologies de blanchiment et évolution technologique en LCB-FT.',
    },
    competencies: [
      {
        id: 'aml-regulatory-adaptability',
        name: { es: 'Adaptabilidad Regulatoria', en: 'Regulatory Adaptability', fr: 'Adaptabilité Réglementaire' },
        description: {
          es: 'Flexibilidad para ajustar programas de cumplimiento ante cambios en la regulación local e internacional.',
          en: 'Flexibility to adjust compliance programs in response to changes in local and international regulation.',
          fr: 'Flexibilité pour ajuster les programmes de conformité face aux changements de la réglementation locale et internationale.',
        },
        weight: 0.35,
      },
      {
        id: 'aml-continuous-learning',
        name: { es: 'Actualización Continua en PLAFT', en: 'Continuous AML/CFT Learning', fr: 'Formation Continue en LCB-FT' },
        description: {
          es: 'Compromiso con la formación continua en nuevas tipologías de LA/FT, tendencias internacionales y mejores prácticas.',
          en: 'Commitment to continuous learning in new ML/TF typologies, international trends, and best practices.',
          fr: 'Engagement envers la formation continue sur les nouvelles typologies de BC/FT, les tendances internationales et les meilleures pratiques.',
        },
        weight: 0.35,
      },
      {
        id: 'aml-tech-adoption',
        name: { es: 'Adopción de Tecnología RegTech', en: 'RegTech Technology Adoption', fr: 'Adoption de la Technologie RegTech' },
        description: {
          es: 'Disposición para adoptar herramientas tecnológicas de cumplimiento regulatorio (RegTech), inteligencia artificial para monitoreo y analítica avanzada.',
          en: 'Willingness to adopt regulatory technology (RegTech) tools, AI-powered monitoring, and advanced analytics.',
          fr: 'Volonté d\'adopter des outils technologiques de conformité réglementaire (RegTech), la surveillance par intelligence artificielle et l\'analytique avancée.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },

  // ============================================================================
  // PHARMACIST CATEGORIES
  // ============================================================================
  {
    id: 'pharma-professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Conocimientos técnicos y habilidades clínicas específicas para farmacéuticos licenciados, incluyendo dispensación, farmacovigilancia, cumplimiento regulatorio y gestión de sustancias controladas.',
      en: 'Technical knowledge and clinical skills specific to licensed pharmacists, including dispensing, pharmacovigilance, regulatory compliance, and controlled substance management.',
      fr: 'Connaissances techniques et compétences cliniques spécifiques aux pharmaciens diplômés, y compris la dispensation, la pharmacovigilance, la conformité réglementaire et la gestion des substances contrôlées.',
    },
    competencies: [
      {
        id: 'pharmaceutical-knowledge',
        name: { es: 'Conocimiento Farmacéutico', en: 'Pharmaceutical Knowledge', fr: 'Connaissances Pharmaceutiques' },
        description: {
          es: 'Dominio de farmacología, mecanismos de acción, indicaciones, contraindicaciones y formas farmacéuticas.',
          en: 'Mastery of pharmacology, mechanisms of action, indications, contraindications, and dosage forms.',
          fr: 'Maîtrise de la pharmacologie, des mécanismes d\'action, des indications, des contre-indications et des formes pharmaceutiques.',
        },
        weight: 0.2,
      },
      {
        id: 'dispensing-accuracy',
        name: { es: 'Precisión en la Dispensación', en: 'Medication Dispensing Accuracy', fr: 'Précision de Dispensation' },
        description: {
          es: 'Capacidad para dispensar medicamentos con exactitud, verificando dosis, forma farmacéutica e instrucciones.',
          en: 'Ability to dispense medications accurately, verifying dose, dosage form, and instructions.',
          fr: 'Capacité à dispenser les médicaments avec précision, en vérifiant la dose, la forme pharmaceutique et les instructions.',
        },
        weight: 0.2,
      },
      {
        id: 'drug-interaction-assessment',
        name: { es: 'Evaluación de Interacciones Medicamentosas', en: 'Drug Interaction Assessment', fr: 'Évaluation des Interactions Médicamenteuses' },
        description: {
          es: 'Habilidad para identificar y gestionar interacciones medicamentosas potencialmente peligrosas.',
          en: 'Skill in identifying and managing potentially dangerous drug interactions.',
          fr: 'Compétence pour identifier et gérer les interactions médicamenteuses potentiellement dangereuses.',
        },
        weight: 0.2,
      },
      {
        id: 'pharma-regulatory-compliance',
        name: { es: 'Cumplimiento Regulatorio', en: 'Regulatory Compliance', fr: 'Conformité Réglementaire' },
        description: {
          es: 'Conocimiento y aplicación de las regulaciones sanitarias, leyes de farmacia y normativas de sustancias controladas.',
          en: 'Knowledge and application of health regulations, pharmacy laws, and controlled substance regulations.',
          fr: 'Connaissance et application des réglementations sanitaires, des lois sur la pharmacie et des réglementations sur les substances contrôlées.',
        },
        weight: 0.2,
      },
      {
        id: 'pharmacovigilance',
        name: { es: 'Farmacovigilancia', en: 'Pharmacovigilance', fr: 'Pharmacovigilance' },
        description: {
          es: 'Capacidad para detectar, evaluar y reportar reacciones adversas a medicamentos y problemas de seguridad.',
          en: 'Ability to detect, evaluate, and report adverse drug reactions and safety concerns.',
          fr: 'Capacité à détecter, évaluer et signaler les effets indésirables des médicaments et les problèmes de sécurité.',
        },
        weight: 0.2,
      },
    ],
    order: 1,
  },
  {
    id: 'pharma-soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales clave para farmacéuticos, incluyendo asesoría al paciente, toma de decisiones clínicas y promoción de la salud.',
      en: 'Key interpersonal competencies for pharmacists, including patient counseling, clinical decision-making, and health promotion.',
      fr: 'Compétences interpersonnelles clés pour les pharmaciens, y compris le conseil aux patients, la prise de décision clinique et la promotion de la santé.',
    },
    competencies: [
      {
        id: 'patient-counseling',
        name: { es: 'Asesoría al Paciente', en: 'Patient Counseling', fr: 'Conseil aux Patients' },
        description: {
          es: 'Capacidad para comunicar información sobre medicamentos de forma clara, empática y comprensible para el paciente.',
          en: 'Ability to communicate medication information clearly, empathetically, and in a patient-understandable manner.',
          fr: 'Capacité à communiquer les informations sur les médicaments de manière claire, empathique et compréhensible pour le patient.',
        },
        weight: 0.35,
      },
      {
        id: 'clinical-decision-making',
        name: { es: 'Toma de Decisiones Clínicas', en: 'Clinical Decision-Making', fr: 'Prise de Décision Clinique' },
        description: {
          es: 'Habilidad para tomar decisiones informadas sobre terapias farmacológicas basándose en evidencia clínica.',
          en: 'Skill in making informed decisions about pharmacological therapies based on clinical evidence.',
          fr: 'Compétence pour prendre des décisions éclairées sur les thérapies pharmacologiques basées sur des preuves cliniques.',
        },
        weight: 0.35,
      },
      {
        id: 'health-promotion',
        name: { es: 'Promoción de la Salud', en: 'Health Promotion', fr: 'Promotion de la Santé' },
        description: {
          es: 'Compromiso con la educación del paciente sobre prevención de enfermedades, vacunación, estilo de vida saludable y uso racional de medicamentos.',
          en: 'Commitment to patient education on disease prevention, vaccination, healthy lifestyle, and rational use of medications.',
          fr: 'Engagement envers l\'éducation des patients sur la prévention des maladies, la vaccination, le mode de vie sain et l\'utilisation rationnelle des médicaments.',
        },
        weight: 0.3,
      },
    ],
    order: 2,
  },
  {
    id: 'pharma-readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación a nuevas terapias, tecnologías farmacéuticas, cambios regulatorios y tendencias en atención farmacéutica.',
      en: 'Adaptability to new therapies, pharmaceutical technologies, regulatory changes, and trends in pharmaceutical care.',
      fr: 'Adaptabilité aux nouvelles thérapies, technologies pharmaceutiques, changements réglementaires et tendances en soins pharmaceutiques.',
    },
    competencies: [
      {
        id: 'pharma-adaptability',
        name: { es: 'Adaptabilidad Profesional', en: 'Professional Adaptability', fr: 'Adaptabilité Professionnelle' },
        description: {
          es: 'Disposición para aprender sobre nuevos medicamentos, guías clínicas y cambios en la práctica farmacéutica.',
          en: 'Willingness to learn about new medications, clinical guidelines, and changes in pharmaceutical practice.',
          fr: 'Volonté d\'apprendre sur les nouveaux médicaments, les directives cliniques et les changements dans la pratique pharmaceutique.',
        },
        weight: 0.35,
      },
      {
        id: 'controlled-substance-mgmt',
        name: { es: 'Gestión de Sustancias Controladas', en: 'Controlled Substance Management', fr: 'Gestion des Substances Contrôlées' },
        description: {
          es: 'Capacidad para gestionar el almacenamiento, dispensación y registro de sustancias controladas conforme a la ley.',
          en: 'Ability to manage the storage, dispensing, and record-keeping of controlled substances according to law.',
          fr: 'Capacité à gérer le stockage, la dispensation et la tenue de registres des substances contrôlées conformément à la loi.',
        },
        weight: 0.3,
      },
      {
        id: 'prescription-verification',
        name: { es: 'Verificación de Recetas', en: 'Prescription Verification', fr: 'Vérification des Ordonnances' },
        description: {
          es: 'Habilidad para verificar la validez, autenticidad y adecuación de las prescripciones médicas.',
          en: 'Skill in verifying the validity, authenticity, and appropriateness of medical prescriptions.',
          fr: 'Compétence pour vérifier la validité, l\'authenticité et l\'adéquation des prescriptions médicales.',
        },
        weight: 0.35,
      },
    ],
    order: 3,
  },

  // ============================================================================
  // ACCOUNTING OFFICER CATEGORIES
  // ============================================================================
  {
    id: 'acct-professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Conocimientos técnicos y habilidades específicas del área contable y financiera.',
      en: 'Technical knowledge and skills specific to accounting and finance.',
      fr: 'Connaissances techniques et compétences spécifiques au domaine comptable et financier.',
    },
    competencies: [
      {
        id: 'acct-journal-entries',
        name: { es: 'Asientos Contables', en: 'Journal Entries', fr: 'Écritures Comptables' },
        description: {
          es: 'Capacidad para registrar correctamente transacciones financieras siguiendo los principios de contabilidad generalmente aceptados.',
          en: 'Ability to correctly record financial transactions following generally accepted accounting principles.',
          fr: 'Capacité à enregistrer correctement les transactions financières selon les principes comptables généralement reconnus.',
        },
        weight: 0.25,
      },
      {
        id: 'acct-reconciliation',
        name: { es: 'Conciliaciones Bancarias', en: 'Bank Reconciliations', fr: 'Rapprochements Bancaires' },
        description: {
          es: 'Habilidad para conciliar estados de cuenta bancarios con los registros contables e identificar discrepancias.',
          en: 'Skill in reconciling bank statements with accounting records and identifying discrepancies.',
          fr: 'Compétence pour rapprocher les relevés bancaires avec les registres comptables et identifier les écarts.',
        },
        weight: 0.25,
      },
      {
        id: 'acct-payables-receivables',
        name: { es: 'Cuentas por Pagar y Cobrar', en: 'Accounts Payable & Receivable', fr: 'Comptes Fournisseurs et Clients' },
        description: {
          es: 'Gestión eficiente de las cuentas por pagar a proveedores y cuentas por cobrar a clientes.',
          en: 'Efficient management of accounts payable to vendors and accounts receivable from clients.',
          fr: 'Gestion efficace des comptes fournisseurs et des comptes clients.',
        },
        weight: 0.25,
      },
      {
        id: 'acct-erp-systems',
        name: { es: 'Sistemas ERP/Contables', en: 'ERP/Accounting Systems', fr: 'Systèmes ERP/Comptables' },
        description: {
          es: 'Dominio de sistemas de planificación de recursos empresariales y software contable para el registro y consulta de información financiera.',
          en: 'Proficiency in enterprise resource planning systems and accounting software for recording and querying financial information.',
          fr: 'Maîtrise des systèmes de planification des ressources d\'entreprise et des logiciels comptables pour l\'enregistrement et la consultation des informations financières.',
        },
        weight: 0.25,
      },
    ],
    order: 1,
  },
  {
    id: 'acct-soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales y organizativas esenciales para el desempeño contable.',
      en: 'Interpersonal and organizational competencies essential for accounting performance.',
      fr: 'Compétences interpersonnelles et organisationnelles essentielles pour la performance comptable.',
    },
    competencies: [
      {
        id: 'acct-attention-detail',
        name: { es: 'Atención al Detalle', en: 'Attention to Detail', fr: 'Souci du Détail' },
        description: {
          es: 'Capacidad para revisar datos numéricos con precisión y detectar errores o inconsistencias.',
          en: 'Ability to review numerical data with precision and detect errors or inconsistencies.',
          fr: 'Capacité à examiner les données numériques avec précision et à détecter les erreurs ou incohérences.',
        },
        weight: 0.35,
      },
      {
        id: 'acct-organization',
        name: { es: 'Organización y Gestión del Tiempo', en: 'Organization & Time Management', fr: 'Organisation et Gestion du Temps' },
        description: {
          es: 'Habilidad para organizar archivos, priorizar tareas y cumplir con fechas límite de cierre contable y reportes.',
          en: 'Skill in organizing files, prioritizing tasks, and meeting accounting close and reporting deadlines.',
          fr: 'Compétence en organisation de dossiers, priorisation de tâches et respect des délais de clôture comptable et de reporting.',
        },
        weight: 0.35,
      },
      {
        id: 'acct-communication',
        name: { es: 'Comunicación Profesional', en: 'Professional Communication', fr: 'Communication Professionnelle' },
        description: {
          es: 'Capacidad para comunicar información financiera de manera clara a colegas, supervisores y auditores.',
          en: 'Ability to communicate financial information clearly to colleagues, supervisors, and auditors.',
          fr: 'Capacité à communiquer les informations financières de manière claire aux collègues, superviseurs et auditeurs.',
        },
        weight: 0.3,
      },
    ],
    order: 2,
  },
  {
    id: 'acct-readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación a cambios normativos, nuevos sistemas contables y tendencias en la profesión.',
      en: 'Adaptability to regulatory changes, new accounting systems, and trends in the profession.',
      fr: 'Adaptabilité aux changements réglementaires, aux nouveaux systèmes comptables et aux tendances de la profession.',
    },
    competencies: [
      {
        id: 'acct-regulatory-adaptability',
        name: { es: 'Adaptabilidad Normativa', en: 'Regulatory Adaptability', fr: 'Adaptabilité Réglementaire' },
        description: {
          es: 'Disposición para aprender e implementar cambios en normas contables, fiscales y regulatorias.',
          en: 'Willingness to learn and implement changes in accounting, tax, and regulatory standards.',
          fr: 'Volonté d\'apprendre et de mettre en œuvre les changements dans les normes comptables, fiscales et réglementaires.',
        },
        weight: 0.35,
      },
      {
        id: 'acct-continuous-learning',
        name: { es: 'Aprendizaje Continuo', en: 'Continuous Learning', fr: 'Apprentissage Continu' },
        description: {
          es: 'Compromiso con la actualización profesional y capacitación continua en el área contable.',
          en: 'Commitment to professional updating and continuous training in accounting.',
          fr: 'Engagement envers la mise à jour professionnelle et la formation continue en comptabilité.',
        },
        weight: 0.35,
      },
      {
        id: 'acct-tech-adoption',
        name: { es: 'Adopción de Tecnología Contable', en: 'Accounting Technology Adoption', fr: 'Adoption de la Technologie Comptable' },
        description: {
          es: 'Disposición para adoptar y utilizar nuevas herramientas tecnológicas, software contable y sistemas automatizados.',
          en: 'Willingness to adopt and use new technological tools, accounting software, and automated systems.',
          fr: 'Volonté d\'adopter et d\'utiliser de nouveaux outils technologiques, logiciels comptables et systèmes automatisés.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },
  // ============================================================================
  // COLLECTIONS OFFICER CATEGORIES
  // ============================================================================
  {
    id: 'collections-professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Conocimientos técnicos y habilidades específicas del área de cobranza.',
      en: 'Technical knowledge and skills specific to the collections area.',
      fr: 'Connaissances techniques et compétences spécifiques au domaine du recouvrement.',
    },
    competencies: [
      {
        id: 'collections-negotiation',
        name: { es: 'Negociación de Cobros', en: 'Collections Negotiation', fr: 'Négociation de Recouvrement' },
        description: {
          es: 'Capacidad para negociar planes de pago y acuerdos de recuperación con deudores.',
          en: 'Ability to negotiate payment plans and recovery agreements with debtors.',
          fr: 'Capacité à négocier des plans de paiement et des accords de recouvrement avec les débiteurs.',
        },
        weight: 0.25,
      },
      {
        id: 'collections-regulations',
        name: { es: 'Regulaciones y Cumplimiento', en: 'Regulations & Compliance', fr: 'Réglementations et Conformité' },
        description: {
          es: 'Conocimiento de las leyes de protección al consumidor y regulaciones de cobranza aplicables.',
          en: 'Knowledge of consumer protection laws and applicable collections regulations.',
          fr: 'Connaissance des lois de protection des consommateurs et des réglementations de recouvrement applicables.',
        },
        weight: 0.25,
      },
      {
        id: 'collections-systems',
        name: { es: 'Sistemas de Gestión de Cobros', en: 'Collection Management Systems', fr: 'Systèmes de Gestion de Recouvrement' },
        description: {
          es: 'Dominio de herramientas y sistemas tecnológicos para la gestión de cuentas por cobrar.',
          en: 'Proficiency in tools and technology systems for accounts receivable management.',
          fr: 'Maîtrise des outils et systèmes technologiques pour la gestion des comptes à recevoir.',
        },
        weight: 0.25,
      },
      {
        id: 'collections-documentation',
        name: { es: 'Documentación y Registro', en: 'Documentation & Record-Keeping', fr: 'Documentation et Tenue de Registres' },
        description: {
          es: 'Habilidad para mantener registros precisos de actividad de cobranza y estados de cuenta.',
          en: 'Skill in maintaining accurate records of collection activity and account statements.',
          fr: 'Compétence pour maintenir des registres précis de l\'activité de recouvrement et des relevés de compte.',
        },
        weight: 0.25,
      },
    ],
    order: 1,
  },
  {
    id: 'collections-soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales esenciales para la gestión efectiva de cobros.',
      en: 'Interpersonal competencies essential for effective collections management.',
      fr: 'Compétences interpersonnelles essentielles pour une gestion efficace du recouvrement.',
    },
    competencies: [
      {
        id: 'collections-communication',
        name: { es: 'Comunicación Persuasiva', en: 'Persuasive Communication', fr: 'Communication Persuasive' },
        description: {
          es: 'Capacidad para comunicarse de forma clara, firme y empática con deudores.',
          en: 'Ability to communicate clearly, firmly, and empathetically with debtors.',
          fr: 'Capacité à communiquer de manière claire, ferme et empathique avec les débiteurs.',
        },
        weight: 0.35,
      },
      {
        id: 'collections-resilience',
        name: { es: 'Resiliencia y Manejo del Estrés', en: 'Resilience & Stress Management', fr: 'Résilience et Gestion du Stress' },
        description: {
          es: 'Habilidad para manejar el rechazo, la presión y las situaciones difíciles sin perder la compostura.',
          en: 'Skill in handling rejection, pressure, and difficult situations without losing composure.',
          fr: 'Compétence pour gérer le rejet, la pression et les situations difficiles sans perdre son calme.',
        },
        weight: 0.35,
      },
      {
        id: 'collections-problem-solving',
        name: { es: 'Resolución de Problemas', en: 'Problem Solving', fr: 'Résolution de Problèmes' },
        description: {
          es: 'Capacidad para analizar la situación financiera del deudor y encontrar soluciones viables de pago.',
          en: 'Ability to analyze the debtor\'s financial situation and find viable payment solutions.',
          fr: 'Capacité à analyser la situation financière du débiteur et trouver des solutions de paiement viables.',
        },
        weight: 0.3,
      },
    ],
    order: 2,
  },
  {
    id: 'collections-readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación a nuevas herramientas, regulaciones y estrategias de cobranza.',
      en: 'Adaptability to new tools, regulations, and collections strategies.',
      fr: 'Adaptabilité aux nouveaux outils, réglementations et stratégies de recouvrement.',
    },
    competencies: [
      {
        id: 'collections-adaptability',
        name: { es: 'Adaptabilidad', en: 'Adaptability', fr: 'Adaptabilité' },
        description: {
          es: 'Disposición para ajustarse a cambios en políticas, herramientas o estrategias de cobranza.',
          en: 'Willingness to adjust to changes in collections policies, tools, or strategies.',
          fr: 'Volonté de s\'adapter aux changements de politiques, d\'outils ou de stratégies de recouvrement.',
        },
        weight: 0.35,
      },
      {
        id: 'collections-continuous-learning',
        name: { es: 'Aprendizaje Continuo', en: 'Continuous Learning', fr: 'Apprentissage Continu' },
        description: {
          es: 'Motivación para mantenerse actualizado en técnicas de cobranza y regulaciones.',
          en: 'Motivation to stay updated on collection techniques and regulations.',
          fr: 'Motivation pour rester à jour sur les techniques de recouvrement et les réglementations.',
        },
        weight: 0.35,
      },
      {
        id: 'collections-tech-adoption',
        name: { es: 'Adopción Tecnológica', en: 'Technology Adoption', fr: 'Adoption Technologique' },
        description: {
          es: 'Disposición para adoptar nuevos sistemas de gestión de cobros y herramientas digitales.',
          en: 'Willingness to adopt new collection management systems and digital tools.',
          fr: 'Volonté d\'adopter de nouveaux systèmes de gestion de recouvrement et outils numériques.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },

  // ============================================================================
  // K-12 SCHOOL PRINCIPAL CATEGORIES
  // ============================================================================
  {
    id: 'k12-principal-professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Conocimientos y habilidades técnicas específicas para la dirección de centros educativos de primaria y secundaria.',
      en: 'Technical knowledge and skills specific to K-12 school administration and leadership.',
      fr: 'Connaissances et compétences techniques spécifiques à la direction d\'établissements scolaires primaires et secondaires.',
    },
    competencies: [
      {
        id: 'k12-educational-leadership',
        name: { es: 'Liderazgo Educativo', en: 'Educational Leadership', fr: 'Leadership Éducatif' },
        description: {
          es: 'Capacidad para establecer la visión académica, inspirar al personal docente y guiar la mejora continua del centro educativo.',
          en: 'Ability to establish an academic vision, inspire teaching staff, and guide continuous school improvement.',
          fr: 'Capacité à établir une vision académique, inspirer le personnel enseignant et guider l\'amélioration continue de l\'établissement.',
        },
        weight: 0.2,
      },
      {
        id: 'k12-faculty-management',
        name: { es: 'Gestión del Personal Docente', en: 'Faculty Management', fr: 'Gestion du Personnel Enseignant' },
        description: {
          es: 'Habilidad para reclutar, evaluar, desarrollar y retener docentes de calidad en todos los niveles.',
          en: 'Skill in recruiting, evaluating, developing, and retaining quality teachers across all grade levels.',
          fr: 'Compétence pour recruter, évaluer, développer et retenir des enseignants de qualité à tous les niveaux.',
        },
        weight: 0.2,
      },
      {
        id: 'k12-curriculum-oversight',
        name: { es: 'Supervisión Curricular', en: 'Curriculum Oversight', fr: 'Supervision des Programmes' },
        description: {
          es: 'Conocimiento de diseño curricular y capacidad para coordinar programas académicos coherentes desde primaria hasta secundaria.',
          en: 'Knowledge of curriculum design and ability to coordinate coherent academic programs from primary through secondary levels.',
          fr: 'Connaissance de la conception curriculaire et capacité à coordonner des programmes académiques cohérents du primaire au secondaire.',
        },
        weight: 0.2,
      },
      {
        id: 'k12-budget-administration',
        name: { es: 'Administración Presupuestaria', en: 'Budget Administration', fr: 'Administration Budgétaire' },
        description: {
          es: 'Capacidad para planificar, administrar y rendir cuentas del presupuesto escolar de manera transparente y eficiente.',
          en: 'Ability to plan, manage, and account for the school budget transparently and efficiently.',
          fr: 'Capacité à planifier, gérer et rendre compte du budget scolaire de manière transparente et efficace.',
        },
        weight: 0.2,
      },
      {
        id: 'k12-accreditation-compliance',
        name: { es: 'Cumplimiento y Acreditación', en: 'Accreditation Compliance', fr: 'Conformité et Accréditation' },
        description: {
          es: 'Conocimiento de estándares de acreditación y normativas educativas, y capacidad para asegurar su cumplimiento.',
          en: 'Knowledge of accreditation standards and educational regulations, and ability to ensure compliance.',
          fr: 'Connaissance des normes d\'accréditation et des réglementations éducatives, et capacité à en assurer le respect.',
        },
        weight: 0.2,
      },
    ],
    order: 1,
  },
  {
    id: 'k12-principal-soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales y de comunicación esenciales para la dirección escolar.',
      en: 'Interpersonal and communication competencies essential for school leadership.',
      fr: 'Compétences interpersonnelles et de communication essentielles pour la direction scolaire.',
    },
    competencies: [
      {
        id: 'k12-community-relations',
        name: { es: 'Relaciones con la Comunidad', en: 'Community Relations', fr: 'Relations Communautaires' },
        description: {
          es: 'Habilidad para construir y mantener relaciones positivas con padres de familia, comunidad local y otras instituciones.',
          en: 'Ability to build and maintain positive relationships with parents, the local community, and other institutions.',
          fr: 'Capacité à construire et maintenir des relations positives avec les parents, la communauté locale et d\'autres institutions.',
        },
        weight: 0.25,
      },
      {
        id: 'k12-student-welfare',
        name: { es: 'Bienestar Estudiantil', en: 'Student Welfare', fr: 'Bien-être des Élèves' },
        description: {
          es: 'Compromiso con el bienestar integral de los estudiantes, incluyendo disciplina positiva, apoyo emocional e inclusión.',
          en: 'Commitment to holistic student wellbeing, including positive discipline, emotional support, and inclusion.',
          fr: 'Engagement envers le bien-être global des élèves, incluant la discipline positive, le soutien émotionnel et l\'inclusion.',
        },
        weight: 0.25,
      },
      {
        id: 'k12-conflict-management',
        name: { es: 'Gestión de Conflictos', en: 'Conflict Management', fr: 'Gestion des Conflits' },
        description: {
          es: 'Capacidad para mediar y resolver conflictos entre docentes, estudiantes, padres y otros miembros de la comunidad escolar.',
          en: 'Ability to mediate and resolve conflicts among teachers, students, parents, and other school community members.',
          fr: 'Capacité à résoudre les conflits entre enseignants, élèves, parents et autres membres de la communauté scolaire.',
        },
        weight: 0.25,
      },
      {
        id: 'k12-school-safety',
        name: { es: 'Seguridad Escolar', en: 'School Safety', fr: 'Sécurité Scolaire' },
        description: {
          es: 'Conocimiento y aplicación de protocolos de seguridad, planes de emergencia y prevención de riesgos en el centro educativo.',
          en: 'Knowledge and application of safety protocols, emergency plans, and risk prevention in the school.',
          fr: 'Connaissance et application des protocoles de sécurité, plans d\'urgence et prévention des risques dans l\'établissement.',
        },
        weight: 0.25,
      },
    ],
    order: 2,
  },
  {
    id: 'k12-principal-readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación a nuevas tendencias educativas, tecnologías y reformas regulatorias.',
      en: 'Adaptability to new educational trends, technologies, and regulatory reforms.',
      fr: 'Adaptabilité aux nouvelles tendances éducatives, technologies et réformes réglementaires.',
    },
    competencies: [
      {
        id: 'k12-strategic-planning',
        name: { es: 'Planificación Estratégica', en: 'Strategic Planning', fr: 'Planification Stratégique' },
        description: {
          es: 'Capacidad para desarrollar e implementar planes de mejora escolar a mediano y largo plazo.',
          en: 'Ability to develop and implement medium- and long-term school improvement plans.',
          fr: 'Capacité à développer et mettre en œuvre des plans d\'amélioration scolaire à moyen et long terme.',
        },
        weight: 0.35,
      },
      {
        id: 'k12-staff-development',
        name: { es: 'Desarrollo Profesional del Personal', en: 'Staff Professional Development', fr: 'Développement Professionnel du Personnel' },
        description: {
          es: 'Compromiso con la formación continua del personal docente y administrativo, incluyendo adopción de nuevas metodologías.',
          en: 'Commitment to continuous training of teaching and administrative staff, including adoption of new methodologies.',
          fr: 'Engagement envers la formation continue du personnel enseignant et administratif, incluant l\'adoption de nouvelles méthodologies.',
        },
        weight: 0.35,
      },
      {
        id: 'k12-innovation-adoption',
        name: { es: 'Adopción de Innovación Educativa', en: 'Educational Innovation Adoption', fr: 'Adoption de l\'Innovation Éducative' },
        description: {
          es: 'Disposición para integrar tecnología educativa, nuevas pedagogías y prácticas innovadoras en la gestión escolar.',
          en: 'Willingness to integrate educational technology, new pedagogies, and innovative practices in school management.',
          fr: 'Volonté d\'intégrer la technologie éducative, les nouvelles pédagogies et les pratiques innovantes dans la gestion scolaire.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },

  // ============================================================================
  // SCHOOL PSYCHOLOGIST CATEGORIES
  // ============================================================================
  {
    id: 'sp-professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Conocimientos técnicos y habilidades clínicas específicas para psicólogos escolares, incluyendo evaluación psicológica, intervención conductual, educación especial y consejería.',
      en: 'Technical knowledge and clinical skills specific to school psychologists, including psychological assessment, behavioral intervention, special education, and counseling.',
      fr: 'Connaissances techniques et compétences cliniques spécifiques aux psychologues scolaires, y compris l\'évaluation psychologique, l\'intervention comportementale, l\'éducation spécialisée et le conseil.',
    },
    competencies: [
      {
        id: 'sp-psychological-assessment',
        name: { es: 'Evaluación Psicológica', en: 'Psychological Assessment', fr: 'Évaluation Psychologique' },
        description: {
          es: 'Capacidad para administrar, calificar e interpretar pruebas psicológicas y psicoeducativas estandarizadas para evaluar el funcionamiento cognitivo, emocional y conductual de los estudiantes.',
          en: 'Ability to administer, score, and interpret standardized psychological and psychoeducational tests to assess students\' cognitive, emotional, and behavioral functioning.',
          fr: 'Capacité à administrer, noter et interpréter des tests psychologiques et psychoéducatifs standardisés pour évaluer le fonctionnement cognitif, émotionnel et comportemental des élèves.',
        },
        weight: 0.2,
      },
      {
        id: 'sp-learning-disability',
        name: { es: 'Evaluación de Dificultades de Aprendizaje', en: 'Learning Disability Evaluation', fr: 'Évaluation des Troubles d\'Apprentissage' },
        description: {
          es: 'Habilidad para identificar y diagnosticar trastornos específicos del aprendizaje como dislexia, discalculia y disgrafía, utilizando modelos de discrepancia y respuesta a la intervención (RTI).',
          en: 'Skill in identifying and diagnosing specific learning disabilities such as dyslexia, dyscalculia, and dysgraphia, using discrepancy models and Response to Intervention (RTI).',
          fr: 'Compétence pour identifier et diagnostiquer les troubles spécifiques d\'apprentissage tels que la dyslexie, la dyscalculie et la dysgraphie, en utilisant des modèles d\'écart et la Réponse à l\'Intervention (RTI).',
        },
        weight: 0.2,
      },
      {
        id: 'sp-behavioral-intervention',
        name: { es: 'Intervención Conductual', en: 'Behavioral Intervention', fr: 'Intervention Comportementale' },
        description: {
          es: 'Capacidad para diseñar, implementar y monitorear planes de intervención conductual (BIP) basados en análisis funcional de la conducta.',
          en: 'Ability to design, implement, and monitor Behavioral Intervention Plans (BIP) based on functional behavior analysis.',
          fr: 'Capacité à concevoir, mettre en œuvre et surveiller des Plans d\'Intervention Comportementale (PIC) basés sur l\'analyse fonctionnelle du comportement.',
        },
        weight: 0.2,
      },
      {
        id: 'sp-crisis-intervention',
        name: { es: 'Intervención en Crisis', en: 'Crisis Intervention', fr: 'Intervention de Crise' },
        description: {
          es: 'Habilidad para responder ante situaciones de crisis como riesgo suicida, trauma, duelo, violencia escolar y desastres naturales, aplicando protocolos de seguridad y primeros auxilios psicológicos.',
          en: 'Skill in responding to crisis situations such as suicide risk, trauma, grief, school violence, and natural disasters, applying safety protocols and psychological first aid.',
          fr: 'Compétence pour répondre aux situations de crise telles que le risque suicidaire, les traumatismes, le deuil, la violence scolaire et les catastrophes naturelles, en appliquant les protocoles de sécurité et les premiers secours psychologiques.',
        },
        weight: 0.2,
      },
      {
        id: 'sp-special-education',
        name: { es: 'Evaluación de Educación Especial', en: 'Special Education Evaluation', fr: 'Évaluation en Éducation Spécialisée' },
        description: {
          es: 'Conocimiento de los marcos legales y procedimientos para determinar la elegibilidad de estudiantes para servicios de educación especial, incluyendo elaboración de Programas Educativos Individualizados (PEI/IEP).',
          en: 'Knowledge of legal frameworks and procedures for determining student eligibility for special education services, including development of Individualized Education Programs (IEP).',
          fr: 'Connaissance des cadres juridiques et des procédures pour déterminer l\'éligibilité des élèves aux services d\'éducation spécialisée, y compris l\'élaboration de Programmes Éducatifs Individualisés (PEI).',
        },
        weight: 0.2,
      },
    ],
    order: 1,
  },
  {
    id: 'sp-soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales clave para el rol de psicólogo escolar, incluyendo comunicación empática, colaboración multidisciplinaria y consejería.',
      en: 'Key interpersonal competencies for the school psychologist role, including empathic communication, multidisciplinary collaboration, and counseling.',
      fr: 'Compétences interpersonnelles clés pour le rôle de psychologue scolaire, y compris la communication empathique, la collaboration multidisciplinaire et le conseil.',
    },
    competencies: [
      {
        id: 'sp-empathic-communication',
        name: { es: 'Comunicación Empática', en: 'Empathic Communication', fr: 'Communication Empathique' },
        description: {
          es: 'Capacidad para comunicarse de manera sensible y efectiva con estudiantes, padres de familia, docentes y administradores, adaptando el lenguaje al público.',
          en: 'Ability to communicate sensitively and effectively with students, parents, teachers, and administrators, adapting language to the audience.',
          fr: 'Capacité à communiquer de manière sensible et efficace avec les élèves, les parents, les enseignants et les administrateurs, en adaptant le langage au public.',
        },
        weight: 0.35,
      },
      {
        id: 'sp-collaboration',
        name: { es: 'Colaboración Multidisciplinaria', en: 'Multidisciplinary Collaboration', fr: 'Collaboration Multidisciplinaire' },
        description: {
          es: 'Habilidad para trabajar en equipos multidisciplinarios con docentes, terapeutas, trabajadores sociales y médicos para apoyar integralmente al estudiante.',
          en: 'Skill in working with multidisciplinary teams including teachers, therapists, social workers, and physicians to provide comprehensive student support.',
          fr: 'Compétence pour travailler en équipes multidisciplinaires avec des enseignants, des thérapeutes, des travailleurs sociaux et des médecins pour soutenir globalement l\'élève.',
        },
        weight: 0.35,
      },
      {
        id: 'sp-counseling',
        name: { es: 'Consejería Individual y Grupal', en: 'Individual and Group Counseling', fr: 'Conseil Individuel et de Groupe' },
        description: {
          es: 'Capacidad para conducir sesiones de consejería individual y grupal con estudiantes, abordando temas socioemocionales, conductuales y académicos.',
          en: 'Ability to conduct individual and group counseling sessions with students, addressing social-emotional, behavioral, and academic issues.',
          fr: 'Capacité à mener des séances de conseil individuel et de groupe avec les élèves, abordant les questions socio-émotionnelles, comportementales et académiques.',
        },
        weight: 0.3,
      },
    ],
    order: 2,
  },
  {
    id: 'sp-readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación ante nuevos enfoques en psicología escolar, avances en neurociencia educativa, marcos legales y tecnologías de evaluación.',
      en: 'Adaptability to new approaches in school psychology, advances in educational neuroscience, legal frameworks, and assessment technologies.',
      fr: 'Capacité d\'adaptation aux nouvelles approches en psychologie scolaire, aux avancées en neurosciences éducatives, aux cadres juridiques et aux technologies d\'évaluation.',
    },
    competencies: [
      {
        id: 'sp-evidence-based-practice',
        name: { es: 'Práctica Basada en Evidencia', en: 'Evidence-Based Practice', fr: 'Pratique Fondée sur les Preuves' },
        description: {
          es: 'Compromiso con la implementación de intervenciones y evaluaciones respaldadas por investigación científica actualizada.',
          en: 'Commitment to implementing interventions and assessments supported by current scientific research.',
          fr: 'Engagement envers la mise en œuvre d\'interventions et d\'évaluations soutenues par la recherche scientifique actuelle.',
        },
        weight: 0.35,
      },
      {
        id: 'sp-sel-innovation',
        name: { es: 'Innovación en Aprendizaje Socioemocional', en: 'SEL Innovation', fr: 'Innovation en Apprentissage Socio-Émotionnel' },
        description: {
          es: 'Disposición para diseñar e implementar programas innovadores de aprendizaje socioemocional (SEL) y prevención del acoso escolar.',
          en: 'Willingness to design and implement innovative social-emotional learning (SEL) programs and bullying prevention initiatives.',
          fr: 'Volonté de concevoir et mettre en œuvre des programmes innovants d\'apprentissage socio-émotionnel (ASE) et de prévention du harcèlement scolaire.',
        },
        weight: 0.35,
      },
      {
        id: 'sp-tech-adoption',
        name: { es: 'Adopción de Tecnología en Evaluación', en: 'Assessment Technology Adoption', fr: 'Adoption de la Technologie d\'Évaluation' },
        description: {
          es: 'Disposición para adoptar herramientas digitales de evaluación psicológica, plataformas de monitoreo de progreso y sistemas de gestión de datos estudiantiles.',
          en: 'Willingness to adopt digital psychological assessment tools, progress monitoring platforms, and student data management systems.',
          fr: 'Volonté d\'adopter des outils numériques d\'évaluation psychologique, des plateformes de suivi des progrès et des systèmes de gestion des données des élèves.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },
  // ============================================================================
  // SECONDARY SCHOOL PRINCIPAL CATEGORIES
  // ============================================================================
  {
    id: 'secprincipal-professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Conocimientos y habilidades técnicas específicas de la dirección de educación secundaria.',
      en: 'Technical knowledge and skills specific to secondary education leadership.',
      fr: 'Connaissances et compétences techniques spécifiques à la direction d\'établissement secondaire.',
    },
    competencies: [
      {
        id: 'secondary-education-leadership',
        name: { es: 'Liderazgo Educativo Secundario', en: 'Secondary Education Leadership', fr: 'Leadership Éducatif Secondaire' },
        description: {
          es: 'Capacidad para liderar y gestionar programas de educación secundaria de manera efectiva.',
          en: 'Ability to lead and manage secondary education programs effectively.',
          fr: 'Capacité à diriger et gérer efficacement les programmes d\'éducation secondaire.',
        },
        weight: 0.2,
      },
      {
        id: 'college-prep-management',
        name: { es: 'Gestión de Preparación Universitaria', en: 'College Preparation Management', fr: 'Gestion de la Préparation Universitaire' },
        description: {
          es: 'Habilidad para coordinar programas de preparación para la universidad y carreras.',
          en: 'Skill in coordinating college and career preparation programs.',
          fr: 'Compétence dans la coordination des programmes de préparation universitaire et professionnelle.',
        },
        weight: 0.2,
      },
      {
        id: 'department-coordination',
        name: { es: 'Coordinación de Departamentos', en: 'Department Coordination', fr: 'Coordination des Départements' },
        description: {
          es: 'Capacidad para gestionar y coordinar departamentos académicos y sus jefes.',
          en: 'Ability to manage and coordinate academic departments and their heads.',
          fr: 'Capacité à gérer et coordonner les départements académiques et leurs responsables.',
        },
        weight: 0.2,
      },
      {
        id: 'standardized-testing',
        name: { es: 'Pruebas Estandarizadas', en: 'Standardized Testing', fr: 'Examens Standardisés' },
        description: {
          es: 'Conocimiento y gestión de procesos de pruebas estandarizadas y cumplimiento de requisitos de graduación.',
          en: 'Knowledge and management of standardized testing processes and graduation requirements compliance.',
          fr: 'Connaissance et gestion des processus d\'examens standardisés et conformité aux exigences de diplomation.',
        },
        weight: 0.2,
      },
      {
        id: 'career-guidance-oversight',
        name: { es: 'Supervisión de Orientación Vocacional', en: 'Career Guidance Oversight', fr: 'Supervision de l\'Orientation Professionnelle' },
        description: {
          es: 'Capacidad para supervisar programas de orientación vocacional y preparación profesional.',
          en: 'Ability to oversee career guidance and vocational preparation programs.',
          fr: 'Capacité à superviser les programmes d\'orientation professionnelle et de préparation à la carrière.',
        },
        weight: 0.2,
      },
    ],
    order: 1,
  },
  {
    id: 'secprincipal-soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales clave para la dirección de educación secundaria.',
      en: 'Key interpersonal competencies for secondary education leadership.',
      fr: 'Compétences interpersonnelles clés pour la direction d\'établissement secondaire.',
    },
    competencies: [
      {
        id: 'adolescent-development',
        name: { es: 'Desarrollo Adolescente', en: 'Adolescent Development Expertise', fr: 'Expertise en Développement Adolescent' },
        description: {
          es: 'Comprensión profunda del desarrollo adolescente y habilidad para promover su bienestar.',
          en: 'Deep understanding of adolescent development and ability to promote their welfare.',
          fr: 'Compréhension approfondie du développement adolescent et capacité à promouvoir leur bien-être.',
        },
        weight: 0.35,
      },
      {
        id: 'student-discipline',
        name: { es: 'Disciplina Estudiantil', en: 'Student Discipline', fr: 'Discipline des Élèves' },
        description: {
          es: 'Capacidad para gestionar la disciplina con equidad, respeto y enfoque formativo.',
          en: 'Ability to manage discipline with fairness, respect, and a formative approach.',
          fr: 'Capacité à gérer la discipline avec équité, respect et approche formative.',
        },
        weight: 0.35,
      },
      {
        id: 'extracurricular-management',
        name: { es: 'Gestión Extracurricular', en: 'Extracurricular Management', fr: 'Gestion des Activités Extrascolaires' },
        description: {
          es: 'Habilidad para supervisar y potenciar actividades extracurriculares, deportivas y de liderazgo estudiantil.',
          en: 'Skill in overseeing and enhancing extracurricular, athletics, and student leadership activities.',
          fr: 'Compétence dans la supervision et le renforcement des activités extrascolaires, sportives et de leadership étudiant.',
        },
        weight: 0.3,
      },
    ],
    order: 2,
  },
  {
    id: 'secprincipal-readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación e innovación en la dirección de educación secundaria.',
      en: 'Adaptability and innovation capacity in secondary education leadership.',
      fr: 'Capacité d\'adaptation et d\'innovation dans la direction d\'établissement secondaire.',
    },
    competencies: [
      {
        id: 'secprincipal-innovation',
        name: { es: 'Innovación Educativa', en: 'Educational Innovation', fr: 'Innovation Éducative' },
        description: {
          es: 'Disposición para adoptar metodologías innovadoras y reformas educativas.',
          en: 'Willingness to adopt innovative methodologies and educational reforms.',
          fr: 'Volonté d\'adopter des méthodologies innovantes et des réformes éducatives.',
        },
        weight: 0.35,
      },
      {
        id: 'secprincipal-community-engagement',
        name: { es: 'Vinculación Comunitaria', en: 'Community Engagement', fr: 'Engagement Communautaire' },
        description: {
          es: 'Capacidad para involucrar a familias, comunidad y aliados estratégicos en la mejora continua.',
          en: 'Ability to engage families, community, and strategic partners in continuous improvement.',
          fr: 'Capacité à impliquer les familles, la communauté et les partenaires stratégiques dans l\'amélioration continue.',
        },
        weight: 0.35,
      },
      {
        id: 'secprincipal-prevention-programs',
        name: { es: 'Programas de Prevención', en: 'Prevention Programs', fr: 'Programmes de Prévention' },
        description: {
          es: 'Disposición para implementar y actualizar programas de prevención de riesgos adolescentes.',
          en: 'Willingness to implement and update adolescent risk prevention programs.',
          fr: 'Volonté de mettre en œuvre et de mettre à jour les programmes de prévention des risques adolescents.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },
  // ============================================================================
  // GENERAL MANAGER (CEO-LEVEL) CATEGORIES
  // ============================================================================
  {
    id: 'gm-professional',
    name: { es: 'Habilidades Profesionales', en: 'Professional Skills', fr: 'Compétences Professionnelles' },
    description: {
      es: 'Competencias estratégicas y ejecutivas requeridas para la dirección general de una organización.',
      en: 'Strategic and executive competencies required for the overall leadership of an organization.',
      fr: 'Compétences stratégiques et exécutives requises pour la direction générale d\'une organisation.',
    },
    competencies: [
      {
        id: 'gm-strategic-vision',
        name: { es: 'Visión Estratégica', en: 'Strategic Vision', fr: 'Vision Stratégique' },
        description: {
          es: 'Capacidad para definir y comunicar una visión organizacional a largo plazo, alineando recursos y esfuerzos hacia objetivos estratégicos.',
          en: 'Ability to define and communicate a long-term organizational vision, aligning resources and efforts toward strategic objectives.',
          fr: 'Capacité à définir et communiquer une vision organisationnelle à long terme, en alignant les ressources et les efforts vers les objectifs stratégiques.',
        },
        weight: 0.25,
      },
      {
        id: 'gm-financial-acumen',
        name: { es: 'Acumen Financiero', en: 'Financial Acumen', fr: 'Perspicacité Financière' },
        description: {
          es: 'Dominio de indicadores financieros clave (P&L, ROI, EBITDA), presupuestos y estrategias de crecimiento rentable.',
          en: 'Mastery of key financial indicators (P&L, ROI, EBITDA), budgets, and profitable growth strategies.',
          fr: 'Maîtrise des indicateurs financiers clés (P&L, ROI, EBITDA), des budgets et des stratégies de croissance rentable.',
        },
        weight: 0.25,
      },
      {
        id: 'gm-corporate-governance',
        name: { es: 'Gobernanza Corporativa', en: 'Corporate Governance', fr: 'Gouvernance d\'Entreprise' },
        description: {
          es: 'Conocimiento de mejores prácticas de gobierno corporativo, relación con el directorio y cumplimiento regulatorio.',
          en: 'Knowledge of corporate governance best practices, board relations, and regulatory compliance.',
          fr: 'Connaissance des meilleures pratiques de gouvernance d\'entreprise, des relations avec le conseil d\'administration et de la conformité réglementaire.',
        },
        weight: 0.25,
      },
      {
        id: 'gm-market-positioning',
        name: { es: 'Posicionamiento de Mercado', en: 'Market Positioning', fr: 'Positionnement sur le Marché' },
        description: {
          es: 'Capacidad para analizar el entorno competitivo y posicionar la organización estratégicamente en el mercado.',
          en: 'Ability to analyze the competitive landscape and strategically position the organization in the market.',
          fr: 'Capacité à analyser l\'environnement concurrentiel et à positionner stratégiquement l\'organisation sur le marché.',
        },
        weight: 0.25,
      },
    ],
    order: 1,
  },
  {
    id: 'gm-soft-skills',
    name: { es: 'Habilidades Blandas', en: 'Soft Skills', fr: 'Compétences Interpersonnelles' },
    description: {
      es: 'Competencias interpersonales y de liderazgo ejecutivo necesarias para inspirar, influir y dirigir equipos de alto nivel.',
      en: 'Interpersonal and executive leadership competencies needed to inspire, influence, and lead senior teams and stakeholders.',
      fr: 'Compétences interpersonnelles et de leadership exécutif nécessaires pour inspirer, influencer et diriger des équipes de haut niveau.',
    },
    competencies: [
      {
        id: 'gm-organizational-leadership',
        name: { es: 'Liderazgo Organizacional', en: 'Organizational Leadership', fr: 'Leadership Organisationnel' },
        description: {
          es: 'Capacidad para liderar y alinear a toda la organización hacia una dirección común, construyendo cultura y compromiso.',
          en: 'Ability to lead and align the entire organization toward a common direction, building culture and engagement.',
          fr: 'Capacité à diriger et aligner toute l\'organisation vers une direction commune, en construisant la culture et l\'engagement.',
        },
        weight: 0.25,
      },
      {
        id: 'gm-stakeholder-management',
        name: { es: 'Gestión de Partes Interesadas', en: 'Stakeholder Management', fr: 'Gestion des Parties Prenantes' },
        description: {
          es: 'Habilidad para gestionar relaciones con accionistas, directorio, clientes clave, reguladores y otros actores estratégicos.',
          en: 'Skill in managing relationships with shareholders, board members, key clients, regulators, and other strategic stakeholders.',
          fr: 'Habileté à gérer les relations avec les actionnaires, les membres du conseil, les clients clés, les régulateurs et les autres parties prenantes stratégiques.',
        },
        weight: 0.25,
      },
      {
        id: 'gm-executive-communication',
        name: { es: 'Comunicación Ejecutiva', en: 'Executive Communication', fr: 'Communication Exécutive' },
        description: {
          es: 'Capacidad para comunicar de manera efectiva a todos los niveles: directorio, equipos ejecutivos, empleados, medios y público.',
          en: 'Ability to communicate effectively at all levels: board, executive teams, employees, media, and the public.',
          fr: 'Capacité à communiquer efficacement à tous les niveaux : conseil d\'administration, équipes exécutives, employés, médias et public.',
        },
        weight: 0.25,
      },
      {
        id: 'gm-crisis-management',
        name: { es: 'Gestión de Crisis', en: 'Crisis Management', fr: 'Gestion de Crise' },
        description: {
          es: 'Capacidad para tomar decisiones rápidas y efectivas bajo presión extrema, protegiendo a la organización y sus partes interesadas.',
          en: 'Ability to make quick and effective decisions under extreme pressure, protecting the organization and its stakeholders.',
          fr: 'Capacité à prendre des décisions rapides et efficaces sous pression extrême, en protégeant l\'organisation et ses parties prenantes.',
        },
        weight: 0.25,
      },
    ],
    order: 2,
  },
  {
    id: 'gm-readiness',
    name: { es: 'Disposición al Cambio', en: 'Readiness for Change', fr: 'Disposition au Changement' },
    description: {
      es: 'Capacidad para liderar transformaciones organizacionales, impulsar la innovación y adaptar la empresa a nuevas realidades de mercado.',
      en: 'Ability to lead organizational transformations, drive innovation, and adapt the company to new market realities.',
      fr: 'Capacité à diriger les transformations organisationnelles, à stimuler l\'innovation et à adapter l\'entreprise aux nouvelles réalités du marché.',
    },
    competencies: [
      {
        id: 'gm-change-leadership',
        name: { es: 'Liderazgo del Cambio', en: 'Change Leadership', fr: 'Leadership du Changement' },
        description: {
          es: 'Capacidad para impulsar y gestionar transformaciones organizacionales complejas, desde fusiones hasta reestructuraciones.',
          en: 'Ability to drive and manage complex organizational transformations, from mergers to restructurings.',
          fr: 'Capacité à impulser et gérer des transformations organisationnelles complexes, des fusions aux restructurations.',
        },
        weight: 0.35,
      },
      {
        id: 'gm-innovation-strategy',
        name: { es: 'Estrategia de Innovación', en: 'Innovation Strategy', fr: 'Stratégie d\'Innovation' },
        description: {
          es: 'Habilidad para fomentar una cultura de innovación y dirigir iniciativas de crecimiento disruptivo.',
          en: 'Skill in fostering an innovation culture and directing disruptive growth initiatives.',
          fr: 'Habileté à favoriser une culture d\'innovation et à diriger des initiatives de croissance disruptive.',
        },
        weight: 0.35,
      },
      {
        id: 'gm-executive-team-building',
        name: { es: 'Construcción de Equipo Ejecutivo', en: 'Executive Team Building', fr: 'Construction d\'Équipe Exécutive' },
        description: {
          es: 'Capacidad para atraer, desarrollar y retener talento de nivel ejecutivo, creando equipos de alto rendimiento.',
          en: 'Ability to attract, develop, and retain executive-level talent, creating high-performance teams.',
          fr: 'Capacité à attirer, développer et retenir les talents de niveau exécutif, en créant des équipes de haute performance.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },
  // ============================================================================
  // CUSTOMER SERVICE OFFICER CATEGORIES
  // ============================================================================
  {
    id: 'cso-professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Conocimientos técnicos y operativos específicos para la atención y servicio al cliente.',
      en: 'Technical and operational knowledge specific to customer service and support.',
      fr: 'Connaissances techniques et opérationnelles spécifiques au service et à l\'assistance client.',
    },
    competencies: [
      {
        id: 'cso-inquiry-handling',
        name: { es: 'Manejo de Consultas', en: 'Inquiry Handling', fr: 'Gestion des Demandes' },
        description: {
          es: 'Capacidad para recibir, interpretar y responder consultas de clientes por teléfono, correo electrónico, chat o de forma presencial.',
          en: 'Ability to receive, interpret, and respond to customer inquiries via phone, email, chat, or in-person.',
          fr: 'Capacité à recevoir, interpréter et répondre aux demandes des clients par téléphone, courriel, chat ou en personne.',
        },
        weight: 0.2,
      },
      {
        id: 'cso-complaint-resolution',
        name: { es: 'Resolución de Quejas', en: 'Complaint Resolution', fr: 'Résolution de Réclamations' },
        description: {
          es: 'Habilidad para manejar quejas de clientes, identificar la causa raíz y ofrecer soluciones satisfactorias siguiendo los protocolos establecidos.',
          en: 'Skill in handling customer complaints, identifying root causes, and offering satisfactory solutions following established protocols.',
          fr: 'Compétence dans la gestion des réclamations clients, l\'identification des causes profondes et la proposition de solutions satisfaisantes selon les protocoles établis.',
        },
        weight: 0.2,
      },
      {
        id: 'cso-crm-documentation',
        name: { es: 'Documentación en CRM', en: 'CRM Documentation', fr: 'Documentation CRM' },
        description: {
          es: 'Capacidad para registrar de manera precisa y completa todas las interacciones con clientes en el sistema CRM.',
          en: 'Ability to accurately and thoroughly record all customer interactions in the CRM system.',
          fr: 'Capacité à enregistrer de manière précise et complète toutes les interactions avec les clients dans le système CRM.',
        },
        weight: 0.2,
      },
      {
        id: 'cso-transaction-processing',
        name: { es: 'Procesamiento de Transacciones', en: 'Transaction Processing', fr: 'Traitement des Transactions' },
        description: {
          es: 'Conocimiento y habilidad para procesar solicitudes, transacciones y gestiones de clientes de forma precisa y oportuna.',
          en: 'Knowledge and ability to process customer requests, transactions, and procedures accurately and promptly.',
          fr: 'Connaissance et capacité à traiter les demandes, transactions et procédures des clients de manière précise et rapide.',
        },
        weight: 0.2,
      },
      {
        id: 'cso-product-knowledge',
        name: { es: 'Conocimiento de Productos y Servicios', en: 'Product and Service Knowledge', fr: 'Connaissance des Produits et Services' },
        description: {
          es: 'Dominio de la información sobre los productos y servicios de la empresa para brindar orientación precisa al cliente.',
          en: 'Mastery of company product and service information to provide accurate guidance to customers.',
          fr: 'Maîtrise des informations sur les produits et services de l\'entreprise pour fournir des conseils précis aux clients.',
        },
        weight: 0.2,
      },
    ],
    order: 1,
  },
  {
    id: 'cso-soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales clave para la interacción efectiva con clientes y compañeros de trabajo.',
      en: 'Key interpersonal competencies for effective interaction with customers and coworkers.',
      fr: 'Compétences interpersonnelles clés pour une interaction efficace avec les clients et les collègues.',
    },
    competencies: [
      {
        id: 'cso-empathy',
        name: { es: 'Empatía y Escucha Activa', en: 'Empathy and Active Listening', fr: 'Empathie et Écoute Active' },
        description: {
          es: 'Capacidad para comprender las emociones y necesidades del cliente, escuchando activamente antes de responder.',
          en: 'Ability to understand customer emotions and needs, actively listening before responding.',
          fr: 'Capacité à comprendre les émotions et les besoins du client, en écoutant activement avant de répondre.',
        },
        weight: 0.25,
      },
      {
        id: 'cso-communication',
        name: { es: 'Comunicación Clara', en: 'Clear Communication', fr: 'Communication Claire' },
        description: {
          es: 'Habilidad para expresarse de forma clara, concisa y profesional tanto oralmente como por escrito.',
          en: 'Skill in expressing oneself clearly, concisely, and professionally both orally and in writing.',
          fr: 'Compétence à s\'exprimer de manière claire, concise et professionnelle à l\'oral comme à l\'écrit.',
        },
        weight: 0.25,
      },
      {
        id: 'cso-patience-composure',
        name: { es: 'Paciencia y Compostura', en: 'Patience and Composure', fr: 'Patience et Sang-froid' },
        description: {
          es: 'Capacidad para mantener la calma y la profesionalidad al tratar con clientes difíciles o situaciones de alta presión.',
          en: 'Ability to remain calm and professional when dealing with difficult customers or high-pressure situations.',
          fr: 'Capacité à rester calme et professionnel face à des clients difficiles ou des situations de forte pression.',
        },
        weight: 0.25,
      },
      {
        id: 'cso-teamwork',
        name: { es: 'Trabajo en Equipo', en: 'Teamwork', fr: 'Travail d\'Équipe' },
        description: {
          es: 'Disposición para colaborar con compañeros, compartir información y apoyar al equipo para lograr los objetivos de servicio.',
          en: 'Willingness to collaborate with colleagues, share information, and support the team to achieve service goals.',
          fr: 'Volonté de collaborer avec les collègues, partager l\'information et soutenir l\'équipe pour atteindre les objectifs de service.',
        },
        weight: 0.25,
      },
    ],
    order: 2,
  },
  {
    id: 'cso-readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación a nuevos procesos, tecnologías y estándares de servicio al cliente.',
      en: 'Adaptability to new processes, technologies, and customer service standards.',
      fr: 'Adaptabilité aux nouveaux processus, technologies et standards de service client.',
    },
    competencies: [
      {
        id: 'cso-process-adaptability',
        name: { es: 'Adaptabilidad a Nuevos Procesos', en: 'Process Adaptability', fr: 'Adaptabilité aux Processus' },
        description: {
          es: 'Disposición para aprender y aplicar nuevos procedimientos, guiones de servicio y políticas de la empresa.',
          en: 'Willingness to learn and apply new procedures, service scripts, and company policies.',
          fr: 'Volonté d\'apprendre et d\'appliquer de nouvelles procédures, scripts de service et politiques de l\'entreprise.',
        },
        weight: 0.35,
      },
      {
        id: 'cso-tech-tools',
        name: { es: 'Dominio de Herramientas Tecnológicas', en: 'Technology Tool Proficiency', fr: 'Maîtrise des Outils Technologiques' },
        description: {
          es: 'Capacidad para adoptar y utilizar eficientemente nuevas herramientas tecnológicas como CRM, plataformas omnicanal y sistemas de ticketing.',
          en: 'Ability to adopt and efficiently use new technology tools such as CRM, omnichannel platforms, and ticketing systems.',
          fr: 'Capacité à adopter et utiliser efficacement de nouveaux outils technologiques comme le CRM, les plateformes omnicanales et les systèmes de tickets.',
        },
        weight: 0.35,
      },
      {
        id: 'cso-continuous-improvement',
        name: { es: 'Mejora Continua', en: 'Continuous Improvement', fr: 'Amélioration Continue' },
        description: {
          es: 'Compromiso con la retroalimentación, el aprendizaje constante y la búsqueda de maneras de mejorar la calidad del servicio.',
          en: 'Commitment to feedback, constant learning, and seeking ways to improve service quality.',
          fr: 'Engagement envers la rétroaction, l\'apprentissage constant et la recherche de moyens d\'améliorer la qualité du service.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },
  { id: 'ep-professional', name: { es: 'Habilidades Profesionales', en: 'Professional Skills', fr: 'Compétences Professionnelles' }, description: { es: 'Conocimientos y habilidades técnicas específicas de la dirección de escuelas primarias.', en: 'Technical knowledge and skills specific to elementary school leadership.', fr: 'Connaissances et compétences techniques spécifiques à la direction d\'écoles primaires.' }, competencies: [{ id: 'ep-primary-ed-leadership', name: { es: 'Liderazgo en Educación Primaria', en: 'Primary Education Leadership', fr: 'Leadership en Éducation Primaire' }, description: { es: 'Capacidad para liderar y dirigir una escuela primaria con visión estratégica enfocada en el desarrollo integral de los niños.', en: 'Ability to lead and manage an elementary school with a strategic vision focused on children\'s holistic development.', fr: 'Capacité à diriger une école primaire avec une vision stratégique axée sur le développement global des enfants.' }, weight: 0.2 }, { id: 'ep-literacy-numeracy-oversight', name: { es: 'Supervisión de Lectoescritura y Matemáticas', en: 'Literacy & Numeracy Program Oversight', fr: 'Supervision des Programmes de Lecture-Écriture et Calcul' }, description: { es: 'Habilidad para supervisar y mejorar los programas de lectoescritura y matemáticas en toda la escuela.', en: 'Skill in overseeing and improving literacy and numeracy programs school-wide.', fr: 'Compétence en supervision et amélioration des programmes de lecture-écriture et de calcul à l\'échelle de l\'école.' }, weight: 0.2 }, { id: 'ep-teacher-coaching', name: { es: 'Evaluación y Acompañamiento Docente', en: 'Teacher Evaluation & Coaching', fr: 'Évaluation et Accompagnement des Enseignants' }, description: { es: 'Capacidad para evaluar, retroalimentar y acompañar a docentes en su desarrollo profesional.', en: 'Ability to evaluate, provide feedback, and coach teachers in their professional development.', fr: 'Capacité à évaluer, fournir un retour d\'information et accompagner les enseignants dans leur développement professionnel.' }, weight: 0.2 }, { id: 'ep-special-ed-coordination', name: { es: 'Coordinación de Educación Especial', en: 'Special Education Coordination', fr: 'Coordination de l\'Éducation Spécialisée' }, description: { es: 'Conocimiento en coordinación de programas de educación especial e intervención temprana para dificultades de aprendizaje.', en: 'Knowledge in coordinating special education programs and early intervention for learning difficulties.', fr: 'Connaissance en coordination de programmes d\'éducation spécialisée et d\'intervention précoce pour les difficultés d\'apprentissage.' }, weight: 0.2 }, { id: 'ep-early-learning-programs', name: { es: 'Gestión de Programas de Aprendizaje Temprano', en: 'Early Learning Program Management', fr: 'Gestion des Programmes d\'Apprentissage Précoce' }, description: { es: 'Habilidad para gestionar programas de aprendizaje basado en juego, experiencial y de preparación escolar.', en: 'Skill in managing play-based, experiential, and school readiness learning programs.', fr: 'Compétence en gestion de programmes d\'apprentissage par le jeu, l\'expérience et de préparation scolaire.' }, weight: 0.2 }], order: 1 },
  { id: 'ep-soft-skills', name: { es: 'Habilidades Blandas', en: 'Soft Skills', fr: 'Compétences Interpersonnelles' }, description: { es: 'Competencias interpersonales clave para la dirección de escuelas primarias.', en: 'Key interpersonal competencies for elementary school leadership.', fr: 'Compétences interpersonnelles clés pour la direction d\'écoles primaires.' }, competencies: [{ id: 'ep-parent-engagement', name: { es: 'Participación de Padres de Familia', en: 'Parent Engagement', fr: 'Engagement des Parents' }, description: { es: 'Capacidad para fomentar la participación activa de las familias en la vida escolar y el aprendizaje de los niños.', en: 'Ability to foster active family participation in school life and children\'s learning.', fr: 'Capacité à favoriser la participation active des familles dans la vie scolaire et l\'apprentissage des enfants.' }, weight: 0.35 }, { id: 'ep-child-welfare-safety', name: { es: 'Bienestar y Seguridad Infantil', en: 'Child Welfare & Safety', fr: 'Bien-être et Sécurité des Enfants' }, description: { es: 'Sensibilidad y habilidad para garantizar un entorno escolar seguro, acogedor y saludable para los niños.', en: 'Sensitivity and skill in ensuring a safe, nurturing, and healthy school environment for children.', fr: 'Sensibilité et compétence pour garantir un environnement scolaire sûr, bienveillant et sain pour les enfants.' }, weight: 0.35 }, { id: 'ep-school-climate', name: { es: 'Clima Escolar para Niños Pequeños', en: 'School Climate for Young Learners', fr: 'Climat Scolaire pour les Jeunes Élèves' }, description: { es: 'Capacidad para crear y mantener un clima escolar positivo, inclusivo y apropiado para la edad de los niños.', en: 'Ability to create and maintain a positive, inclusive, and age-appropriate school climate for children.', fr: 'Capacité à créer et maintenir un climat scolaire positif, inclusif et adapté à l\'âge des enfants.' }, weight: 0.3 }], order: 2 },
  { id: 'ep-readiness', name: { es: 'Disposición al Cambio', en: 'Readiness for Change', fr: 'Disposition au Changement' }, description: { es: 'Capacidad de adaptación e innovación en la dirección de escuelas primarias.', en: 'Adaptability and innovation capacity in elementary school leadership.', fr: 'Capacité d\'adaptation et d\'innovation dans la direction d\'écoles primarias.' }, competencies: [{ id: 'ep-pedagogical-innovation', name: { es: 'Innovación Pedagógica', en: 'Pedagogical Innovation', fr: 'Innovation Pédagogique' }, description: { es: 'Disposición para implementar nuevas metodologías de enseñanza y enfoques pedagógicos innovadores.', en: 'Willingness to implement new teaching methodologies and innovative pedagogical approaches.', fr: 'Volonté de mettre en œuvre de nouvelles méthodologies d\'enseignement et des approches pédagogiques innovantes.' }, weight: 0.35 }, { id: 'ep-community-partnership', name: { es: 'Alianzas con la Comunidad', en: 'Community Partnerships', fr: 'Partenariats Communautaires' }, description: { es: 'Capacidad para desarrollar alianzas con la comunidad, servicios de salud y organizaciones que beneficien a los estudiantes.', en: 'Ability to develop partnerships with the community, health services, and organizations that benefit students.', fr: 'Capacité à développer des partenariats avec la communauté, les services de santé et les organisations au bénéfice des élèves.' }, weight: 0.3 }, { id: 'ep-continuous-improvement', name: { es: 'Mejora Continua Escolar', en: 'Continuous School Improvement', fr: 'Amélioration Continue de l\'École' }, description: { es: 'Compromiso con la evaluación continua y mejora de los programas y procesos escolares.', en: 'Commitment to continuous evaluation and improvement of school programs and processes.', fr: 'Engagement envers l\'évaluation continue et l\'amélioration des programmes et processus scolaires.' }, weight: 0.35 }], order: 3 },
  // HR OFFICER CATEGORIES
  { id: 'hro-professional', name: { es: 'Habilidades Profesionales', en: 'Professional Skills', fr: 'Compétences Professionnelles' }, description: { es: 'Conocimientos técnicos y operativos propios de la gestión de Recursos Humanos a nivel de ejecución: nómina, expedientes, reclutamiento, integración y cumplimiento laboral.', en: 'Technical and operational knowledge specific to HR execution: payroll, records, recruitment, onboarding, and labor compliance.', fr: 'Connaissances techniques et opérationnelles propres à l\'exécution RH : paie, dossiers, recrutement, intégration et conformité au droit du travail.' }, competencies: [{ id: 'hro-payroll-admin', name: { es: 'Administración de Nómina', en: 'Payroll Administration', fr: 'Administration de la Paie' }, description: { es: 'Capacidad para procesar nóminas con precisión, calcular deducciones, impuestos y beneficios, y resolver discrepancias.', en: 'Ability to process payroll accurately, calculate deductions, taxes, and benefits, and resolve discrepancies.', fr: 'Capacité à traiter la paie avec précision, calculer les déductions, impôts et avantages, et résoudre les écarts.' }, weight: 0.25 }, { id: 'hro-recruitment-logistics', name: { es: 'Logística de Reclutamiento', en: 'Recruitment Logistics', fr: 'Logistique de Recrutement' }, description: { es: 'Habilidad para publicar vacantes, filtrar currículos, programar entrevistas y coordinar el proceso de selección.', en: 'Skill in posting job openings, screening resumes, scheduling interviews, and coordinating the selection process.', fr: 'Compétence pour publier des offres d\'emploi, trier des CV, planifier des entretiens et coordonner le processus de sélection.' }, weight: 0.25 }, { id: 'hro-records-compliance', name: { es: 'Expedientes y Cumplimiento', en: 'Records & Compliance', fr: 'Dossiers et Conformité' }, description: { es: 'Mantenimiento organizado de expedientes de personal y documentación regulatoria conforme a la legislación laboral vigente.', en: 'Organized maintenance of personnel files and regulatory documentation in compliance with current labor law.', fr: 'Tenue organisée des dossiers du personnel et de la documentation réglementaire conformément au droit du travail en vigueur.' }, weight: 0.25 }, { id: 'hro-onboarding', name: { es: 'Integración de Personal', en: 'Employee Onboarding', fr: 'Intégration des Employés' }, description: { es: 'Capacidad para ejecutar un proceso de integración efectivo que asegure una transición fluida para los nuevos colaboradores.', en: 'Ability to execute an effective onboarding process ensuring a smooth transition for new hires.', fr: 'Capacité à exécuter un processus d\'intégration efficace assurant une transition fluide pour les nouveaux employés.' }, weight: 0.25 }], order: 1 },
  { id: 'hro-soft-skills', name: { es: 'Habilidades Blandas', en: 'Soft Skills', fr: 'Compétences Interpersonnelles' }, description: { es: 'Competencias interpersonales esenciales para un oficial de RR.HH., incluyendo comunicación, confidencialidad, empatía y organización.', en: 'Essential interpersonal competencies for an HR officer, including communication, confidentiality, empathy, and organization.', fr: 'Compétences interpersonnelles essentielles pour un agent RH, y compris la communication, la confidentialité, l\'empathie et l\'organisation.' }, competencies: [{ id: 'hro-communication', name: { es: 'Comunicación Efectiva', en: 'Effective Communication', fr: 'Communication Efficace' }, description: { es: 'Habilidad para comunicar políticas, procedimientos e información sensible de forma clara y respetuosa.', en: 'Ability to communicate policies, procedures, and sensitive information clearly and respectfully.', fr: 'Capacité à communiquer les politiques, procédures et informations sensibles de manière claire et respectueuse.' }, weight: 0.35 }, { id: 'hro-confidentiality', name: { es: 'Confidencialidad y Ética', en: 'Confidentiality & Ethics', fr: 'Confidentialité et Éthique' }, description: { es: 'Compromiso con la protección de datos personales, la discreción y los estándares éticos en el manejo de información del personal.', en: 'Commitment to personal data protection, discretion, and ethical standards in handling employee information.', fr: 'Engagement envers la protection des données personnelles, la discrétion et les normes éthiques dans la gestion des informations du personnel.' }, weight: 0.35 }, { id: 'hro-service-orientation', name: { es: 'Orientación al Servicio', en: 'Service Orientation', fr: 'Orientation Service' }, description: { es: 'Disposición para atender consultas de empleados con empatía, paciencia y orientación a la solución.', en: 'Willingness to handle employee inquiries with empathy, patience, and a solution-oriented approach.', fr: 'Disposition à traiter les demandes des employés avec empathie, patience et orientation vers les solutions.' }, weight: 0.3 }], order: 2 },
  { id: 'hro-readiness', name: { es: 'Disposición al Cambio', en: 'Readiness for Change', fr: 'Disposition au Changement' }, description: { es: 'Capacidad de adaptación ante nuevas tecnologías de RR.HH., cambios en la legislación laboral y evolución de las prácticas de gestión de personas.', en: 'Adaptability to new HR technologies, changes in labor legislation, and evolving people management practices.', fr: 'Adaptabilité aux nouvelles technologies RH, aux changements de la législation du travail et à l\'évolution des pratiques de gestion des personnes.' }, competencies: [{ id: 'hro-tech-adaptability', name: { es: 'Adaptabilidad Tecnológica', en: 'Technology Adaptability', fr: 'Adaptabilité Technologique' }, description: { es: 'Disposición para aprender y adoptar sistemas HRIS, plataformas de nómina digital y herramientas de gestión de talento.', en: 'Willingness to learn and adopt HRIS systems, digital payroll platforms, and talent management tools.', fr: 'Volonté d\'apprendre et d\'adopter les systèmes SIRH, les plateformes de paie numérique et les outils de gestion des talents.' }, weight: 0.35 }, { id: 'hro-regulatory-awareness', name: { es: 'Actualización Regulatoria', en: 'Regulatory Awareness', fr: 'Veille Réglementaire' }, description: { es: 'Compromiso con mantenerse actualizado en legislación laboral, reformas fiscales y normativas de seguridad social.', en: 'Commitment to staying current with labor law, tax reforms, and social security regulations.', fr: 'Engagement à rester à jour avec le droit du travail, les réformes fiscales et les réglementations de sécurité sociale.' }, weight: 0.35 }, { id: 'hro-process-improvement', name: { es: 'Mejora de Procesos', en: 'Process Improvement', fr: 'Amélioration des Processus' }, description: { es: 'Disposición para identificar ineficiencias en procesos de RR.HH. y proponer mejoras operativas.', en: 'Willingness to identify inefficiencies in HR processes and propose operational improvements.', fr: 'Volonté d\'identifier les inefficacités dans les processus RH et de proposer des améliorations opérationnelles.' }, weight: 0.3 }], order: 3 },

  // --- CFO (Chief Financial Officer / Director Financiero) ---
  {
    id: 'cfo-professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Competencias técnicas y estratégicas financieras requeridas para un Director Financiero, incluyendo estrategia financiera, cumplimiento NIIF/PCGA, gestión de tesorería, riesgos financieros y fusiones y adquisiciones.',
      en: 'Technical and strategic financial competencies required for a CFO, including financial strategy, IFRS/GAAP compliance, treasury management, financial risk, and mergers & acquisitions.',
      fr: 'Compétences techniques et stratégiques financières requises pour un Directeur Financier, y compris la stratégie financière, la conformité IFRS/GAAP, la gestion de la trésorerie, les risques financiers et les fusions et acquisitions.',
    },
    competencies: [
      {
        id: 'cfo-financial-strategy',
        name: { es: 'Estrategia y Planificación Financiera', en: 'Financial Strategy & Planning', fr: 'Stratégie et Planification Financières' },
        description: {
          es: 'Capacidad para diseñar e implementar la estrategia financiera corporativa, incluyendo estructura de capital, asignación de recursos y planificación a largo plazo.',
          en: 'Ability to design and implement corporate financial strategy, including capital structure, resource allocation, and long-term planning.',
          fr: 'Capacité à concevoir et mettre en œuvre la stratégie financière de l\'entreprise, y compris la structure du capital, l\'allocation des ressources et la planification à long terme.',
        },
        weight: 0.2,
      },
      {
        id: 'cfo-ifrs-compliance',
        name: { es: 'Cumplimiento NIIF/PCGA', en: 'IFRS/GAAP Compliance', fr: 'Conformité IFRS/GAAP' },
        description: {
          es: 'Dominio de las Normas Internacionales de Información Financiera (NIIF) y Principios de Contabilidad Generalmente Aceptados (PCGA) para garantizar informes financieros precisos y conformes.',
          en: 'Mastery of International Financial Reporting Standards (IFRS) and Generally Accepted Accounting Principles (GAAP) to ensure accurate and compliant financial reporting.',
          fr: 'Maîtrise des Normes Internationales d\'Information Financière (IFRS) et des Principes Comptables Généralement Admis (GAAP) pour garantir des rapports financiers précis et conformes.',
        },
        weight: 0.2,
      },
      {
        id: 'cfo-treasury',
        name: { es: 'Gestión de Tesorería y Flujo de Caja', en: 'Treasury & Cash Flow Management', fr: 'Gestion de la Trésorerie et des Flux de Trésorerie' },
        description: {
          es: 'Habilidad para gestionar la liquidez organizacional, optimizar el flujo de caja, administrar relaciones bancarias y supervisar operaciones de tesorería.',
          en: 'Skill in managing organizational liquidity, optimizing cash flow, administering banking relationships, and overseeing treasury operations.',
          fr: 'Compétence dans la gestion de la liquidité organisationnelle, l\'optimisation des flux de trésorerie, l\'administration des relations bancaires et la supervision des opérations de trésorerie.',
        },
        weight: 0.2,
      },
      {
        id: 'cfo-risk-assessment',
        name: { es: 'Evaluación de Riesgos Financieros', en: 'Financial Risk Assessment', fr: 'Évaluation des Risques Financiers' },
        description: {
          es: 'Capacidad para identificar, medir y mitigar riesgos financieros, de mercado y crediticios que enfrenta la organización.',
          en: 'Ability to identify, measure, and mitigate financial, market, and credit risks facing the organization.',
          fr: 'Capacité à identifier, mesurer et atténuer les risques financiers, de marché et de crédit auxquels fait face l\'organisation.',
        },
        weight: 0.2,
      },
      {
        id: 'cfo-ma-due-diligence',
        name: { es: 'Due Diligence en Fusiones y Adquisiciones', en: 'M&A Due Diligence', fr: 'Due Diligence en Fusions et Acquisitions' },
        description: {
          es: 'Experiencia en liderar procesos de due diligence financiero, valoración de empresas y estructuración de transacciones de fusiones y adquisiciones.',
          en: 'Experience in leading financial due diligence processes, company valuation, and structuring mergers & acquisitions transactions.',
          fr: 'Expérience dans la conduite de processus de due diligence financière, l\'évaluation d\'entreprises et la structuration de transactions de fusions et acquisitions.',
        },
        weight: 0.2,
      },
    ],
    order: 1,
  },
  {
    id: 'cfo-soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales y de liderazgo estratégico esenciales para un Director Financiero, incluyendo comunicación ejecutiva, relaciones con inversionistas, liderazgo de equipos y negociación de alto nivel.',
      en: 'Interpersonal and strategic leadership competencies essential for a CFO, including executive communication, investor relations, team leadership, and high-level negotiation.',
      fr: 'Compétences interpersonnelles et de leadership stratégique essentielles pour un Directeur Financier, y compris la communication exécutive, les relations avec les investisseurs, le leadership d\'équipe et la négociation de haut niveau.',
    },
    competencies: [
      {
        id: 'cfo-executive-communication',
        name: { es: 'Comunicación Ejecutiva', en: 'Executive Communication', fr: 'Communication Exécutive' },
        description: {
          es: 'Capacidad para comunicar información financiera compleja de manera clara y persuasiva a la junta directiva, inversionistas y partes interesadas clave.',
          en: 'Ability to communicate complex financial information clearly and persuasively to the board of directors, investors, and key stakeholders.',
          fr: 'Capacité à communiquer des informations financières complexes de manière claire et persuasive au conseil d\'administration, aux investisseurs et aux parties prenantes clés.',
        },
        weight: 0.25,
      },
      {
        id: 'cfo-investor-relations',
        name: { es: 'Relaciones con Inversionistas', en: 'Investor Relations', fr: 'Relations avec les Investisseurs' },
        description: {
          es: 'Habilidad para gestionar relaciones con inversionistas, analistas y mercados de capital, proyectando confianza y transparencia financiera.',
          en: 'Skill in managing relationships with investors, analysts, and capital markets, projecting confidence and financial transparency.',
          fr: 'Compétence dans la gestion des relations avec les investisseurs, les analystes et les marchés de capitaux, en projetant confiance et transparence financière.',
        },
        weight: 0.25,
      },
      {
        id: 'cfo-team-leadership',
        name: { es: 'Liderazgo del Equipo Financiero', en: 'Financial Team Leadership', fr: 'Leadership de l\'Équipe Financière' },
        description: {
          es: 'Capacidad para dirigir, desarrollar y motivar equipos financieros de alto rendimiento, incluyendo contabilidad, tesorería, control de gestión y auditoría interna.',
          en: 'Ability to lead, develop, and motivate high-performance financial teams, including accounting, treasury, management control, and internal audit.',
          fr: 'Capacité à diriger, développer et motiver des équipes financières de haute performance, y compris la comptabilité, la trésorerie, le contrôle de gestion et l\'audit interne.',
        },
        weight: 0.25,
      },
      {
        id: 'cfo-strategic-negotiation',
        name: { es: 'Negociación Estratégica', en: 'Strategic Negotiation', fr: 'Négociation Stratégique' },
        description: {
          es: 'Habilidad para negociar acuerdos financieros complejos, incluyendo líneas de crédito, emisiones de deuda, contratos con proveedores y términos de adquisiciones.',
          en: 'Skill in negotiating complex financial agreements, including credit facilities, debt issuances, vendor contracts, and acquisition terms.',
          fr: 'Compétence dans la négociation d\'accords financiers complexes, y compris les lignes de crédit, les émissions de dette, les contrats fournisseurs et les conditions d\'acquisition.',
        },
        weight: 0.25,
      },
    ],
    order: 2,
  },
  {
    id: 'cfo-readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación a cambios regulatorios, nuevas tecnologías financieras, transformaciones digitales y evolución de los mercados de capital.',
      en: 'Adaptability to regulatory changes, new financial technologies, digital transformations, and capital market evolution.',
      fr: 'Adaptabilité aux changements réglementaires, aux nouvelles technologies financières, aux transformations numériques et à l\'évolution des marchés de capitaux.',
    },
    competencies: [
      {
        id: 'cfo-fintech-innovation',
        name: { es: 'Innovación y Tecnología Financiera', en: 'FinTech Innovation', fr: 'Innovation et Technologie Financière' },
        description: {
          es: 'Disposición para adoptar tecnologías financieras emergentes como inteligencia artificial, blockchain, automatización robótica de procesos (RPA) y analítica avanzada.',
          en: 'Willingness to adopt emerging financial technologies such as artificial intelligence, blockchain, robotic process automation (RPA), and advanced analytics.',
          fr: 'Volonté d\'adopter les technologies financières émergentes telles que l\'intelligence artificielle, la blockchain, l\'automatisation robotique des processus (RPA) et l\'analytique avancée.',
        },
        weight: 0.35,
      },
      {
        id: 'cfo-regulatory-adaptability',
        name: { es: 'Adaptabilidad Regulatoria', en: 'Regulatory Adaptability', fr: 'Adaptabilité Réglementaire' },
        description: {
          es: 'Capacidad para anticipar y adaptarse a cambios en normativas financieras, fiscales y de gobierno corporativo a nivel local e internacional.',
          en: 'Ability to anticipate and adapt to changes in financial, tax, and corporate governance regulations at local and international levels.',
          fr: 'Capacité à anticiper et s\'adapter aux changements des réglementations financières, fiscales et de gouvernance d\'entreprise aux niveaux local et international.',
        },
        weight: 0.35,
      },
      {
        id: 'cfo-modeling-forecasting',
        name: { es: 'Modelaje Financiero y Pronósticos', en: 'Financial Modeling & Forecasting', fr: 'Modélisation Financière et Prévisions' },
        description: {
          es: 'Habilidad para construir modelos financieros sofisticados, escenarios prospectivos y pronósticos que soporten la toma de decisiones estratégicas.',
          en: 'Skill in building sophisticated financial models, prospective scenarios, and forecasts that support strategic decision-making.',
          fr: 'Compétence dans la construction de modèles financiers sophistiqués, de scénarios prospectifs et de prévisions soutenant la prise de décision stratégique.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },

  // ============================================================================
  // ACCOUNTING MANAGER CATEGORIES
  // ============================================================================
  {
    id: 'acctmgr-professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Conocimientos técnicos y habilidades de gestión contable necesarios para dirigir el departamento de contabilidad.',
      en: 'Technical knowledge and accounting management skills required to lead the accounting department.',
      fr: 'Connaissances techniques et compétences en gestion comptable nécessaires pour diriger le département comptable.',
    },
    competencies: [
      {
        id: 'acctmgr-financial-reporting',
        name: { es: 'Informes Financieros', en: 'Financial Reporting', fr: 'Rapports Financiers' },
        description: {
          es: 'Capacidad para preparar y supervisar estados financieros precisos conforme a NIIF/PCGA, incluyendo estado de resultados, balance general y flujo de efectivo.',
          en: 'Ability to prepare and oversee accurate financial statements in compliance with IFRS/GAAP, including income statement, balance sheet, and cash flow statement.',
          fr: 'Capacité à préparer et superviser des états financiers précis conformément aux IFRS/GAAP, y compris le compte de résultat, le bilan et le tableau des flux de trésorerie.',
        },
        weight: 0.25,
      },
      {
        id: 'acctmgr-tax-compliance',
        name: { es: 'Cumplimiento Tributario', en: 'Tax Compliance', fr: 'Conformité Fiscale' },
        description: {
          es: 'Conocimiento de legislación fiscal, planificación tributaria, presentación de declaraciones y gestión de obligaciones fiscales.',
          en: 'Knowledge of tax legislation, tax planning, filing returns, and managing tax obligations.',
          fr: 'Connaissance de la législation fiscale, planification fiscale, déclarations et gestion des obligations fiscales.',
        },
        weight: 0.2,
      },
      {
        id: 'acctmgr-internal-controls',
        name: { es: 'Controles Internos y Auditoría', en: 'Internal Controls and Audit', fr: 'Contrôles Internes et Audit' },
        description: {
          es: 'Diseño, implementación y supervisión de controles internos contables, y coordinación con auditores externos e internos.',
          en: 'Design, implementation, and oversight of accounting internal controls, and coordination with external and internal auditors.',
          fr: 'Conception, mise en œuvre et supervision des contrôles internes comptables, et coordination avec les auditeurs externes et internes.',
        },
        weight: 0.2,
      },
      {
        id: 'acctmgr-budgeting',
        name: { es: 'Presupuestos y Proyecciones', en: 'Budgeting and Forecasting', fr: 'Budgétisation et Prévisions' },
        description: {
          es: 'Elaboración de presupuestos, análisis de variaciones, proyecciones financieras y apoyo en la toma de decisiones estratégicas.',
          en: 'Budget preparation, variance analysis, financial forecasting, and support for strategic decision-making.',
          fr: 'Préparation de budgets, analyse des écarts, prévisions financières et soutien à la prise de décisions stratégiques.',
        },
        weight: 0.2,
      },
      {
        id: 'acctmgr-erp-management',
        name: { es: 'Gestión de ERP y Tecnología', en: 'ERP and Technology Management', fr: 'Gestion ERP et Technologie' },
        description: {
          es: 'Dominio de sistemas ERP contables, optimización de procesos mediante tecnología y gestión de datos financieros.',
          en: 'Mastery of accounting ERP systems, process optimization through technology, and financial data management.',
          fr: 'Maîtrise des systèmes ERP comptables, optimisation des processus par la technologie et gestion des données financières.',
        },
        weight: 0.15,
      },
    ],
    order: 1,
  },
  {
    id: 'acctmgr-soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales y de liderazgo esenciales para gestionar el departamento contable y colaborar con otras áreas.',
      en: 'Interpersonal and leadership competencies essential for managing the accounting department and collaborating with other areas.',
      fr: 'Compétences interpersonnelles et de leadership essentielles pour gérer le département comptable et collaborer avec d\'autres domaines.',
    },
    competencies: [
      {
        id: 'acctmgr-leadership',
        name: { es: 'Liderazgo y Supervisión de Equipo', en: 'Team Leadership and Supervision', fr: 'Leadership et Supervision d\'Équipe' },
        description: {
          es: 'Capacidad para dirigir, motivar y desarrollar al equipo contable, delegando responsabilidades y asegurando la calidad del trabajo.',
          en: 'Ability to lead, motivate, and develop the accounting team, delegating responsibilities and ensuring work quality.',
          fr: 'Capacité à diriger, motiver et développer l\'équipe comptable, en déléguant des responsabilités et en assurant la qualité du travail.',
        },
        weight: 0.35,
      },
      {
        id: 'acctmgr-communication',
        name: { es: 'Comunicación Financiera', en: 'Financial Communication', fr: 'Communication Financière' },
        description: {
          es: 'Habilidad para comunicar información financiera compleja de manera clara a audiencias no financieras, incluyendo la alta dirección.',
          en: 'Skill in communicating complex financial information clearly to non-financial audiences, including senior management.',
          fr: 'Compétence pour communiquer des informations financières complexes de manière claire à des publics non financiers, y compris la direction.',
        },
        weight: 0.35,
      },
      {
        id: 'acctmgr-problem-solving',
        name: { es: 'Resolución de Problemas y Pensamiento Analítico', en: 'Problem Solving and Analytical Thinking', fr: 'Résolution de Problèmes et Pensée Analytique' },
        description: {
          es: 'Capacidad para identificar discrepancias, analizar datos financieros complejos y proponer soluciones efectivas.',
          en: 'Ability to identify discrepancies, analyze complex financial data, and propose effective solutions.',
          fr: 'Capacité à identifier les écarts, analyser des données financières complexes et proposer des solutions efficaces.',
        },
        weight: 0.3,
      },
    ],
    order: 2,
  },
  {
    id: 'acctmgr-readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación a nuevas normativas contables, tecnologías financieras y cambios organizacionales.',
      en: 'Adaptability to new accounting standards, financial technologies, and organizational changes.',
      fr: 'Adaptabilité aux nouvelles normes comptables, technologies financières et changements organisationnels.',
    },
    competencies: [
      {
        id: 'acctmgr-regulatory-adaptability',
        name: { es: 'Adaptación Regulatoria', en: 'Regulatory Adaptability', fr: 'Adaptabilité Réglementaire' },
        description: {
          es: 'Disposición para mantenerse actualizado y adaptar procesos ante cambios en normas contables (NIIF) y regulaciones fiscales.',
          en: 'Willingness to stay updated and adapt processes to changes in accounting standards (IFRS) and tax regulations.',
          fr: 'Volonté de rester à jour et d\'adapter les processus aux changements des normes comptables (IFRS) et des réglementations fiscales.',
        },
        weight: 0.35,
      },
      {
        id: 'acctmgr-digital-transformation',
        name: { es: 'Transformación Digital', en: 'Digital Transformation', fr: 'Transformation Numérique' },
        description: {
          es: 'Apertura a la automatización de procesos contables, inteligencia artificial aplicada a finanzas y nuevas herramientas tecnológicas.',
          en: 'Openness to accounting process automation, AI applied to finance, and new technological tools.',
          fr: 'Ouverture à l\'automatisation des processus comptables, à l\'IA appliquée à la finance et aux nouveaux outils technologiques.',
        },
        weight: 0.35,
      },
      {
        id: 'acctmgr-continuous-improvement',
        name: { es: 'Mejora Continua', en: 'Continuous Improvement', fr: 'Amélioration Continue' },
        description: {
          es: 'Compromiso con la optimización de procesos contables, reducción de tiempos de cierre y mejora de la calidad de la información financiera.',
          en: 'Commitment to optimizing accounting processes, reducing close times, and improving financial information quality.',
          fr: 'Engagement envers l\'optimisation des processus comptables, la réduction des délais de clôture et l\'amélioration de la qualité de l\'information financière.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },

  // --- Receptionist ---
  {
    id: 'rec-professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Conocimientos técnicos y operativos específicos para el puesto de recepcionista.',
      en: 'Technical and operational knowledge specific to the receptionist role.',
      fr: 'Connaissances techniques et opérationnelles spécifiques au poste de réceptionniste.',
    },
    competencies: [
      {
        id: 'rec-visitor-management',
        name: { es: 'Gestión de Visitantes', en: 'Visitor Management', fr: 'Gestion des Visiteurs' },
        description: {
          es: 'Capacidad para recibir, registrar, orientar y despedir visitantes de forma profesional, incluyendo el manejo de gafetes y bitácoras.',
          en: 'Ability to greet, register, direct, and see off visitors professionally, including badge and logbook management.',
          fr: 'Capacité à accueillir, enregistrer, orienter et raccompagner les visiteurs de manière professionnelle, y compris la gestion des badges et des registres.',
        },
        weight: 0.25,
      },
      {
        id: 'rec-phone-system',
        name: { es: 'Operación del Sistema Telefónico', en: 'Phone System Operation', fr: 'Opération du Système Téléphonique' },
        description: {
          es: 'Habilidad para operar un sistema telefónico multilínea, transferir llamadas, tomar mensajes y manejar un alto volumen de llamadas.',
          en: 'Skill in operating a multi-line phone system, transferring calls, taking messages, and handling a high volume of calls.',
          fr: 'Compétence dans l\'utilisation d\'un système téléphonique multiligne, le transfert d\'appels, la prise de messages et la gestion d\'un volume élevé d\'appels.',
        },
        weight: 0.2,
      },
      {
        id: 'rec-scheduling',
        name: { es: 'Programación de Citas', en: 'Appointment Scheduling', fr: 'Planification des Rendez-vous' },
        description: {
          es: 'Capacidad para gestionar agendas, programar citas, coordinar salas de reuniones y evitar conflictos de horario.',
          en: 'Ability to manage calendars, schedule appointments, coordinate meeting rooms, and avoid scheduling conflicts.',
          fr: 'Capacité à gérer les agendas, planifier les rendez-vous, coordonner les salles de réunion et éviter les conflits d\'horaire.',
        },
        weight: 0.2,
      },
      {
        id: 'rec-mail-packages',
        name: { es: 'Manejo de Correspondencia y Paquetes', en: 'Mail and Package Handling', fr: 'Gestion du Courrier et des Colis' },
        description: {
          es: 'Capacidad para recibir, clasificar, distribuir y enviar correspondencia y paquetes de forma organizada y oportuna.',
          en: 'Ability to receive, sort, distribute, and send mail and packages in an organized and timely manner.',
          fr: 'Capacité à recevoir, trier, distribuer et envoyer le courrier et les colis de manière organisée et ponctuelle.',
        },
        weight: 0.15,
      },
      {
        id: 'rec-office-technology',
        name: { es: 'Dominio de Tecnología de Oficina', en: 'Office Technology Proficiency', fr: 'Maîtrise de la Technologie de Bureau' },
        description: {
          es: 'Manejo de herramientas ofimáticas, correo electrónico, impresoras, escáneres, sistemas de control de acceso y software de gestión de visitantes.',
          en: 'Proficiency with office tools, email, printers, scanners, access control systems, and visitor management software.',
          fr: 'Maîtrise des outils bureautiques, du courrier électronique, des imprimantes, des scanners, des systèmes de contrôle d\'accès et des logiciels de gestion des visiteurs.',
        },
        weight: 0.2,
      },
    ],
    order: 1,
  },
  {
    id: 'rec-soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales clave para la atención al público y la imagen institucional.',
      en: 'Key interpersonal competencies for public-facing service and institutional image.',
      fr: 'Compétences interpersonnelles clés pour le service au public et l\'image institutionnelle.',
    },
    competencies: [
      {
        id: 'rec-professional-presentation',
        name: { es: 'Presentación Profesional', en: 'Professional Presentation', fr: 'Présentation Professionnelle' },
        description: {
          es: 'Capacidad para mantener una imagen personal impecable, actitud cordial y crear una primera impresión positiva de la organización.',
          en: 'Ability to maintain an impeccable personal image, cordial attitude, and create a positive first impression of the organization.',
          fr: 'Capacité à maintenir une image personnelle impeccable, une attitude cordiale et créer une première impression positive de l\'organisation.',
        },
        weight: 0.35,
      },
      {
        id: 'rec-communication',
        name: { es: 'Comunicación Efectiva', en: 'Effective Communication', fr: 'Communication Efficace' },
        description: {
          es: 'Habilidad para comunicarse de forma clara, cortés y profesional tanto de forma verbal como escrita con personas de diversos perfiles.',
          en: 'Skill in communicating clearly, courteously, and professionally both verbally and in writing with people of diverse backgrounds.',
          fr: 'Compétence à communiquer de manière claire, courtoise et professionnelle tant à l\'oral qu\'à l\'écrit avec des personnes de divers profils.',
        },
        weight: 0.35,
      },
      {
        id: 'rec-multitasking',
        name: { es: 'Capacidad de Multitarea', en: 'Multitasking Ability', fr: 'Capacité de Multitâche' },
        description: {
          es: 'Capacidad para manejar múltiples tareas simultáneamente (atender visitantes, contestar teléfono, gestionar correo) sin perder calidad ni compostura.',
          en: 'Ability to handle multiple tasks simultaneously (attending visitors, answering phones, managing mail) without losing quality or composure.',
          fr: 'Capacité à gérer plusieurs tâches simultanément (accueillir les visiteurs, répondre au téléphone, gérer le courrier) sans perdre en qualité ni en sérénité.',
        },
        weight: 0.3,
      },
    ],
    order: 2,
  },
  {
    id: 'rec-readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación, manejo de situaciones imprevistas y adopción de nuevas tecnologías y procedimientos.',
      en: 'Adaptability, handling of unforeseen situations, and adoption of new technologies and procedures.',
      fr: 'Adaptabilité, gestion des situations imprévues et adoption de nouvelles technologies et procédures.',
    },
    competencies: [
      {
        id: 'rec-emergency-procedures',
        name: { es: 'Procedimientos de Emergencia', en: 'Emergency Procedures', fr: 'Procédures d\'Urgence' },
        description: {
          es: 'Conocimiento y aplicación de protocolos de emergencia, incluyendo evacuación, primeros auxilios básicos y comunicación en situaciones de crisis.',
          en: 'Knowledge and application of emergency protocols, including evacuation, basic first aid, and communication during crisis situations.',
          fr: 'Connaissance et application des protocoles d\'urgence, y compris l\'évacuation, les premiers secours de base et la communication en situation de crise.',
        },
        weight: 0.35,
      },
      {
        id: 'rec-adaptability',
        name: { es: 'Adaptabilidad', en: 'Adaptability', fr: 'Adaptabilité' },
        description: {
          es: 'Disposición para adaptarse a cambios en procesos, nuevas tecnologías, reestructuraciones y diferentes estilos de trabajo.',
          en: 'Willingness to adapt to process changes, new technologies, restructurings, and different work styles.',
          fr: 'Volonté de s\'adapter aux changements de processus, aux nouvelles technologies, aux restructurations et aux différents styles de travail.',
        },
        weight: 0.35,
      },
      {
        id: 'rec-continuous-learning',
        name: { es: 'Aprendizaje Continuo', en: 'Continuous Learning', fr: 'Apprentissage Continu' },
        description: {
          es: 'Interés por capacitarse en nuevas herramientas, mejorar habilidades de servicio y mantenerse actualizado en procedimientos organizacionales.',
          en: 'Interest in training on new tools, improving service skills, and staying current on organizational procedures.',
          fr: 'Intérêt pour la formation aux nouveaux outils, l\'amélioration des compétences de service et le maintien à jour des procédures organisationnelles.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },

  // ============================================================================
  // TECHNICAL SUPPORT SPECIALIST
  // ============================================================================
  {
    id: 'ts-professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Conocimientos y habilidades técnicas específicas para especialistas en soporte técnico.',
      en: 'Technical knowledge and skills specific to technical support specialists.',
      fr: 'Connaissances et compétences techniques spécifiques aux spécialistes du support technique.',
    },
    competencies: [
      {
        id: 'ts-troubleshooting',
        name: { es: 'Metodología de Diagnóstico', en: 'Troubleshooting Methodology', fr: 'Méthodologie de Diagnostic' },
        description: {
          es: 'Capacidad para aplicar un proceso sistemático de identificación, análisis y resolución de problemas técnicos de hardware y software.',
          en: 'Ability to apply a systematic process for identifying, analyzing, and resolving hardware and software technical issues.',
          fr: 'Capacité à appliquer un processus systématique d\'identification, d\'analyse et de résolution de problèmes techniques matériels et logiciels.',
        },
        weight: 0.2,
      },
      {
        id: 'ts-ticket-management',
        name: { es: 'Gestión de Tickets', en: 'Ticket Management', fr: 'Gestion des Tickets' },
        description: {
          es: 'Habilidad para registrar, priorizar, dar seguimiento y cerrar incidentes y solicitudes de servicio de manera eficiente.',
          en: 'Skill in logging, prioritizing, tracking, and closing incidents and service requests efficiently.',
          fr: 'Compétence pour enregistrer, prioriser, suivre et clôturer les incidents et demandes de service de manière efficace.',
        },
        weight: 0.15,
      },
      {
        id: 'ts-hardware-software',
        name: { es: 'Soporte de Hardware y Software', en: 'Hardware & Software Support', fr: 'Support Matériel et Logiciel' },
        description: {
          es: 'Conocimiento en instalación, configuración y reparación de equipos, sistemas operativos y aplicaciones empresariales.',
          en: 'Knowledge in installing, configuring, and repairing equipment, operating systems, and enterprise applications.',
          fr: 'Connaissances en installation, configuration et réparation d\'équipements, systèmes d\'exploitation et applications d\'entreprise.',
        },
        weight: 0.2,
      },
      {
        id: 'ts-network-diagnostics',
        name: { es: 'Diagnóstico de Redes', en: 'Network Diagnostics', fr: 'Diagnostic Réseau' },
        description: {
          es: 'Capacidad para identificar y resolver problemas de conectividad, redes LAN/WAN, VPN y servicios en la nube.',
          en: 'Ability to identify and resolve connectivity issues, LAN/WAN networks, VPN, and cloud services.',
          fr: 'Capacité à identifier et résoudre les problèmes de connectivité, réseaux LAN/WAN, VPN et services cloud.',
        },
        weight: 0.15,
      },
      {
        id: 'ts-documentation',
        name: { es: 'Documentación y Base de Conocimiento', en: 'Documentation & Knowledge Base', fr: 'Documentation et Base de Connaissances' },
        description: {
          es: 'Habilidad para crear y mantener documentación técnica clara, guías de solución y artículos de base de conocimiento.',
          en: 'Skill in creating and maintaining clear technical documentation, solution guides, and knowledge base articles.',
          fr: 'Compétence pour créer et maintenir une documentation technique claire, des guides de solutions et des articles de base de connaissances.',
        },
        weight: 0.15,
      },
      {
        id: 'ts-security-awareness',
        name: { es: 'Conciencia de Seguridad TI', en: 'IT Security Awareness', fr: 'Sensibilisation à la Sécurité IT' },
        description: {
          es: 'Conocimiento de buenas prácticas de seguridad informática, detección de phishing, malware y gestión de accesos de usuario.',
          en: 'Knowledge of IT security best practices, phishing and malware detection, and user access management.',
          fr: 'Connaissance des bonnes pratiques de sécurité informatique, détection de phishing, malware et gestion des accès utilisateurs.',
        },
        weight: 0.15,
      },
    ],
    order: 1,
  },
  {
    id: 'ts-soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales clave para especialistas en soporte técnico.',
      en: 'Key interpersonal competencies for technical support specialists.',
      fr: 'Compétences interpersonnelles clés pour les spécialistes du support technique.',
    },
    competencies: [
      {
        id: 'ts-user-communication',
        name: { es: 'Comunicación con el Usuario', en: 'User Communication', fr: 'Communication avec l\'Utilisateur' },
        description: {
          es: 'Capacidad para explicar conceptos técnicos en términos sencillos y comunicarse de forma clara y empática con usuarios de distintos niveles.',
          en: 'Ability to explain technical concepts in simple terms and communicate clearly and empathetically with users of varying skill levels.',
          fr: 'Capacité à expliquer des concepts techniques en termes simples et à communiquer clairement et avec empathie avec des utilisateurs de différents niveaux.',
        },
        weight: 0.35,
      },
      {
        id: 'ts-patience-empathy',
        name: { es: 'Paciencia y Empatía', en: 'Patience & Empathy', fr: 'Patience et Empathie' },
        description: {
          es: 'Habilidad para mantener la calma y mostrar comprensión ante usuarios frustrados o con dificultades técnicas.',
          en: 'Skill in staying calm and showing understanding when dealing with frustrated users or those facing technical difficulties.',
          fr: 'Compétence pour rester calme et montrer de la compréhension face à des utilisateurs frustrés ou ayant des difficultés techniques.',
        },
        weight: 0.35,
      },
      {
        id: 'ts-teamwork-escalation',
        name: { es: 'Trabajo en Equipo y Escalamiento', en: 'Teamwork & Escalation', fr: 'Travail d\'Équipe et Escalade' },
        description: {
          es: 'Capacidad para colaborar con otros equipos de TI y escalar incidentes complejos de manera oportuna y efectiva.',
          en: 'Ability to collaborate with other IT teams and escalate complex incidents in a timely and effective manner.',
          fr: 'Capacité à collaborer avec d\'autres équipes IT et à escalader les incidents complexes de manière opportune et efficace.',
        },
        weight: 0.3,
      },
    ],
    order: 2,
  },
  {
    id: 'ts-readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación a nuevas tecnologías, herramientas y metodologías de soporte técnico.',
      en: 'Adaptability to new technologies, tools, and technical support methodologies.',
      fr: 'Adaptabilité aux nouvelles technologies, outils et méthodologies de support technique.',
    },
    competencies: [
      {
        id: 'ts-tech-adaptability',
        name: { es: 'Adaptabilidad Tecnológica', en: 'Technology Adaptability', fr: 'Adaptabilité Technologique' },
        description: {
          es: 'Disposición para aprender y adoptar nuevas herramientas, sistemas operativos y plataformas de soporte rápidamente.',
          en: 'Willingness to learn and adopt new tools, operating systems, and support platforms quickly.',
          fr: 'Volonté d\'apprendre et d\'adopter rapidement de nouveaux outils, systèmes d\'exploitation et plateformes de support.',
        },
        weight: 0.35,
      },
      {
        id: 'ts-continuous-learning',
        name: { es: 'Aprendizaje Continuo', en: 'Continuous Learning', fr: 'Apprentissage Continu' },
        description: {
          es: 'Compromiso con la actualización constante en certificaciones, tendencias tecnológicas y mejores prácticas de soporte.',
          en: 'Commitment to staying current with certifications, technology trends, and support best practices.',
          fr: 'Engagement envers la mise à jour constante des certifications, tendances technologiques et meilleures pratiques de support.',
        },
        weight: 0.35,
      },
      {
        id: 'ts-process-improvement',
        name: { es: 'Mejora de Procesos', en: 'Process Improvement', fr: 'Amélioration des Processus' },
        description: {
          es: 'Capacidad para identificar oportunidades de mejora en flujos de trabajo de soporte, automatización de tareas y optimización de SLAs.',
          en: 'Ability to identify improvement opportunities in support workflows, task automation, and SLA optimization.',
          fr: 'Capacité à identifier les opportunités d\'amélioration dans les flux de travail de support, l\'automatisation des tâches et l\'optimisation des SLA.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },
  // ============================================================================
  // EXECUTIVE ASSISTANT CATEGORIES
  // ============================================================================
  {
    id: 'ea-professional',
    name: { es: 'Habilidades Profesionales', en: 'Professional Skills', fr: 'Compétences Professionnelles' },
    description: {
      es: 'Conocimientos técnicos y habilidades administrativas específicas para asistentes ejecutivas, incluyendo gestión de agenda, correspondencia, coordinación de viajes, tecnología de oficina y protocolo.',
      en: 'Technical knowledge and administrative skills specific to executive assistants, including calendar management, correspondence, travel coordination, office technology, and protocol.',
      fr: 'Connaissances techniques et compétences administratives spécifiques aux assistantes de direction.',
    },
    competencies: [
      {
        id: 'calendar-agenda-management',
        name: { es: 'Gestión de Agenda y Calendario', en: 'Calendar and Agenda Management', fr: 'Gestion de l\'Agenda et du Calendrier' },
        description: { es: 'Capacidad para organizar, priorizar y coordinar agendas complejas de ejecutivos.', en: 'Ability to organize, prioritize, and coordinate complex executive schedules.', fr: 'Capacité à organiser, prioriser et coordonner les agendas complexes des dirigeants.' },
        weight: 0.2,
      },
      {
        id: 'business-correspondence',
        name: { es: 'Correspondencia Empresarial', en: 'Business Correspondence', fr: 'Correspondance Professionnelle' },
        description: { es: 'Habilidad para redactar, revisar y gestionar comunicaciones escritas formales.', en: 'Skill in drafting, reviewing, and managing formal written communications.', fr: 'Compétence pour rédiger, réviser et gérer les communications écrites formelles.' },
        weight: 0.2,
      },
      {
        id: 'document-management',
        name: { es: 'Gestión Documental', en: 'Document Management', fr: 'Gestion Documentaire' },
        description: { es: 'Capacidad para organizar, archivar y recuperar documentos eficientemente.', en: 'Ability to organize, file, and retrieve documents efficiently.', fr: 'Capacité à organiser, classer et retrouver des documents efficacement.' },
        weight: 0.2,
      },
      {
        id: 'travel-coordination',
        name: { es: 'Coordinación de Viajes', en: 'Travel Coordination', fr: 'Coordination des Voyages' },
        description: { es: 'Habilidad para planificar y gestionar itinerarios de viaje completos.', en: 'Skill in planning and managing complete travel itineraries.', fr: 'Compétence pour planifier et gérer des itinéraires de voyage complets.' },
        weight: 0.2,
      },
      {
        id: 'office-technology',
        name: { es: 'Tecnología de Oficina', en: 'Office Technology Proficiency', fr: 'Maîtrise des Technologies de Bureau' },
        description: { es: 'Dominio de herramientas ofimáticas (MS Office, Google Workspace) y plataformas de videoconferencia.', en: 'Proficiency in office tools (MS Office, Google Workspace) and video conferencing platforms.', fr: 'Maîtrise des outils bureautiques (MS Office, Google Workspace) et des plateformes de visioconférence.' },
        weight: 0.2,
      },
    ],
    order: 1,
  },
  {
    id: 'ea-soft-skills',
    name: { es: 'Habilidades Blandas', en: 'Soft Skills', fr: 'Compétences Interpersonnelles' },
    description: {
      es: 'Competencias interpersonales clave para asistentes ejecutivas, incluyendo comunicación ejecutiva, discreción, protocolo y multitarea.',
      en: 'Key interpersonal competencies for executive assistants, including executive communication, discretion, protocol, and multitasking.',
      fr: 'Compétences interpersonnelles clés pour les assistantes de direction.',
    },
    competencies: [
      {
        id: 'executive-communication',
        name: { es: 'Comunicación Ejecutiva', en: 'Executive Communication', fr: 'Communication Exécutive' },
        description: { es: 'Capacidad para comunicarse profesional y efectivamente con ejecutivos y partes interesadas de alto nivel.', en: 'Ability to communicate professionally and effectively with executives and high-level stakeholders.', fr: 'Capacité à communiquer de manière professionnelle et efficace avec les dirigeants et les parties prenantes de haut niveau.' },
        weight: 0.25,
      },
      {
        id: 'confidentiality-discretion',
        name: { es: 'Confidencialidad y Discreción', en: 'Confidentiality and Discretion', fr: 'Confidentialité et Discrétion' },
        description: { es: 'Compromiso con la protección de información sensible y manejo discreto de asuntos confidenciales.', en: 'Commitment to protecting sensitive information and discreet handling of confidential matters.', fr: 'Engagement envers la protection des informations sensibles et le traitement discret des affaires confidentielles.' },
        weight: 0.25,
      },
      {
        id: 'protocol-etiquette',
        name: { es: 'Protocolo y Etiqueta', en: 'Protocol and Etiquette', fr: 'Protocole et Étiquette' },
        description: { es: 'Conocimiento y aplicación de normas de protocolo empresarial y etiqueta profesional.', en: 'Knowledge and application of business protocol norms and professional etiquette.', fr: 'Connaissance et application des normes de protocole des affaires et de l\'étiquette professionnelle.' },
        weight: 0.25,
      },
      {
        id: 'multitasking-prioritization',
        name: { es: 'Multitarea y Priorización', en: 'Multitasking and Prioritization', fr: 'Gestion Multitâche et Priorisation' },
        description: { es: 'Habilidad para manejar múltiples tareas simultáneamente y priorizar según urgencia e importancia.', en: 'Skill in handling multiple tasks simultaneously and prioritizing by urgency and importance.', fr: 'Compétence pour gérer plusieurs tâches simultanément et prioriser selon l\'urgence et l\'importance.' },
        weight: 0.25,
      },
    ],
    order: 2,
  },
  {
    id: 'ea-readiness',
    name: { es: 'Disposición al Cambio', en: 'Readiness for Change', fr: 'Disposition au Changement' },
    description: {
      es: 'Capacidad de adaptación a nuevas herramientas tecnológicas, cambios organizacionales y nuevos procesos administrativos.',
      en: 'Adaptability to new technological tools, organizational changes, and new administrative processes.',
      fr: 'Adaptabilité aux nouveaux outils technologiques, aux changements organisationnels et aux nouveaux processus administratifs.',
    },
    competencies: [
      {
        id: 'ea-adaptability',
        name: { es: 'Adaptabilidad Profesional', en: 'Professional Adaptability', fr: 'Adaptabilité Professionnelle' },
        description: { es: 'Disposición para aprender nuevas herramientas, procesos y adaptarse a cambios organizacionales.', en: 'Willingness to learn new tools, processes, and adapt to organizational changes.', fr: 'Volonté d\'apprendre de nouveaux outils, processus et de s\'adapter aux changements organisationnels.' },
        weight: 0.35,
      },
      {
        id: 'meeting-organization',
        name: { es: 'Organización de Reuniones', en: 'Meeting Organization', fr: 'Organisation des Réunions' },
        description: { es: 'Capacidad para planificar, coordinar y dar seguimiento a reuniones, incluyendo minutas y seguimiento de acuerdos.', en: 'Ability to plan, coordinate, and follow up on meetings, including minutes and tracking action items.', fr: 'Capacité à planifier, coordonner et assurer le suivi des réunions, y compris les comptes rendus et le suivi des décisions.' },
        weight: 0.35,
      },
      {
        id: 'ea-tech-adoption',
        name: { es: 'Adopción Tecnológica', en: 'Technology Adoption', fr: 'Adoption Technologique' },
        description: { es: 'Disposición para adoptar nuevas plataformas digitales, herramientas de productividad y sistemas de gestión.', en: 'Willingness to adopt new digital platforms, productivity tools, and management systems.', fr: 'Volonté d\'adopter de nouvelles plateformes numériques, des outils de productivité et des systèmes de gestion.' },
        weight: 0.3,
      },
    ],
    order: 3,
  },

  // ============================================================================
  // COLLECTIONS MANAGER CATEGORIES
  // ============================================================================
  {
    id: 'colmgr-professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Conocimientos técnicos y operativos específicos para la gestión estratégica de cobros y cuentas por cobrar.',
      en: 'Technical and operational knowledge specific to strategic collections and accounts receivable management.',
      fr: 'Connaissances techniques et opérationnelles spécifiques à la gestion stratégique du recouvrement et des comptes clients.',
    },
    competencies: [
      {
        id: 'collection-strategy',
        name: { es: 'Estrategia de Cobranza', en: 'Collection Strategy', fr: 'Stratégie de Recouvrement' },
        description: {
          es: 'Capacidad para diseñar e implementar estrategias de cobranza efectivas según el tipo de cartera y nivel de morosidad.',
          en: 'Ability to design and implement effective collection strategies based on portfolio type and delinquency level.',
          fr: 'Capacité à concevoir et mettre en œuvre des stratégies de recouvrement efficaces selon le type de portefeuille et le niveau de délinquance.',
        },
        weight: 0.2,
      },
      {
        id: 'portfolio-management',
        name: { es: 'Gestión de Portafolio de Morosidad', en: 'Delinquency Portfolio Management', fr: 'Gestion du Portefeuille de Créances Impayées' },
        description: {
          es: 'Habilidad para analizar, segmentar y gestionar portafolios de cuentas morosas, incluyendo reportes de antigüedad de saldos.',
          en: 'Skill in analyzing, segmenting, and managing delinquent account portfolios, including aging reports.',
          fr: 'Compétence pour analyser, segmenter et gérer les portefeuilles de comptes en souffrance, y compris les rapports d\'ancienneté des soldes.',
        },
        weight: 0.2,
      },
      {
        id: 'colmgr-regulatory',
        name: { es: 'Cumplimiento Regulatorio de Cobranza', en: 'Collections Regulatory Compliance', fr: 'Conformité Réglementaire du Recouvrement' },
        description: {
          es: 'Conocimiento de leyes de protección al consumidor, prácticas justas de cobranza y regulaciones aplicables al proceso de cobros.',
          en: 'Knowledge of consumer protection laws, fair debt collection practices, and regulations applicable to the collections process.',
          fr: 'Connaissance des lois de protection du consommateur, des pratiques équitables de recouvrement et des réglementations applicables au processus de recouvrement.',
        },
        weight: 0.2,
      },
      {
        id: 'recovery-metrics',
        name: { es: 'Métricas y Metas de Recuperación', en: 'Recovery Metrics and Targets', fr: 'Métriques et Objectifs de Récupération' },
        description: {
          es: 'Capacidad para establecer, monitorear y alcanzar metas de recuperación de cartera, incluyendo KPIs de cobranza.',
          en: 'Ability to set, monitor, and achieve portfolio recovery targets, including collections KPIs.',
          fr: 'Capacité à établir, suivre et atteindre les objectifs de récupération de portefeuille, y compris les KPI de recouvrement.',
        },
        weight: 0.2,
      },
      {
        id: 'external-agencies',
        name: { es: 'Gestión de Agencias Externas', en: 'External Agency Management', fr: 'Gestion des Agences Externes' },
        description: {
          es: 'Habilidad para seleccionar, supervisar y evaluar el desempeño de agencias externas de cobro y despachos legales.',
          en: 'Skill in selecting, supervising, and evaluating the performance of external collection agencies and legal firms.',
          fr: 'Compétence pour sélectionner, superviser et évaluer la performance des agences de recouvrement externes et des cabinets juridiques.',
        },
        weight: 0.2,
      },
    ],
    order: 1,
  },
  {
    id: 'colmgr-soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales clave para la gestión efectiva de cobros y liderazgo de equipos.',
      en: 'Key interpersonal competencies for effective collections management and team leadership.',
      fr: 'Compétences interpersonnelles clés pour la gestion efficace du recouvrement et le leadership d\'équipe.',
    },
    competencies: [
      {
        id: 'colmgr-negotiation',
        name: { es: 'Negociación con Deudores', en: 'Debtor Negotiation', fr: 'Négociation avec les Débiteurs' },
        description: {
          es: 'Capacidad para negociar acuerdos de pago, reestructuraciones y convenios con deudores de manera firme pero respetuosa.',
          en: 'Ability to negotiate payment agreements, restructurings, and settlements with debtors in a firm yet respectful manner.',
          fr: 'Capacité à négocier des accords de paiement, des restructurations et des conventions avec les débiteurs de manière ferme mais respectueuse.',
        },
        weight: 0.35,
      },
      {
        id: 'colmgr-leadership',
        name: { es: 'Liderazgo de Equipo de Cobros', en: 'Collections Team Leadership', fr: 'Leadership de l\'Équipe de Recouvrement' },
        description: {
          es: 'Habilidad para supervisar, motivar y desarrollar al equipo de cobranza, incluyendo coaching y gestión del desempeño.',
          en: 'Skill in supervising, motivating, and developing the collections team, including coaching and performance management.',
          fr: 'Compétence pour superviser, motiver et développer l\'équipe de recouvrement, y compris le coaching et la gestion de la performance.',
        },
        weight: 0.35,
      },
      {
        id: 'colmgr-communication',
        name: { es: 'Comunicación Efectiva', en: 'Effective Communication', fr: 'Communication Efficace' },
        description: {
          es: 'Capacidad para comunicarse de manera clara y profesional con deudores, equipo interno, alta dirección y agencias externas.',
          en: 'Ability to communicate clearly and professionally with debtors, internal teams, senior management, and external agencies.',
          fr: 'Capacité à communiquer de manière claire et professionnelle avec les débiteurs, les équipes internes, la direction générale et les agences externes.',
        },
        weight: 0.3,
      },
    ],
    order: 2,
  },
  {
    id: 'colmgr-readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación ante cambios tecnológicos, regulatorios y de mercado en el ámbito de la cobranza.',
      en: 'Adaptability to technological, regulatory, and market changes in the collections field.',
      fr: 'Capacité d\'adaptation aux changements technologiques, réglementaires et de marché dans le domaine du recouvrement.',
    },
    competencies: [
      {
        id: 'colmgr-tech-adoption',
        name: { es: 'Adopción de Tecnología de Cobranza', en: 'Collections Technology Adoption', fr: 'Adoption de la Technologie de Recouvrement' },
        description: {
          es: 'Disposición para implementar y adoptar nuevos sistemas de cobranza, automatización de procesos y herramientas digitales.',
          en: 'Willingness to implement and adopt new collection systems, process automation, and digital tools.',
          fr: 'Volonté de mettre en œuvre et d\'adopter de nouveaux systèmes de recouvrement, l\'automatisation des processus et les outils numériques.',
        },
        weight: 0.35,
      },
      {
        id: 'colmgr-process-innovation',
        name: { es: 'Innovación en Procesos de Cobro', en: 'Collections Process Innovation', fr: 'Innovation dans les Processus de Recouvrement' },
        description: {
          es: 'Capacidad para identificar oportunidades de mejora y proponer cambios innovadores en los procesos de cobranza.',
          en: 'Ability to identify improvement opportunities and propose innovative changes in collection processes.',
          fr: 'Capacité à identifier des opportunités d\'amélioration et à proposer des changements innovants dans les processus de recouvrement.',
        },
        weight: 0.35,
      },
      {
        id: 'colmgr-market-adaptability',
        name: { es: 'Adaptabilidad al Mercado', en: 'Market Adaptability', fr: 'Adaptabilité au Marché' },
        description: {
          es: 'Flexibilidad para ajustar estrategias de cobranza ante cambios económicos, nuevas regulaciones y tendencias del mercado financiero.',
          en: 'Flexibility to adjust collection strategies in response to economic changes, new regulations, and financial market trends.',
          fr: 'Flexibilité pour ajuster les stratégies de recouvrement face aux changements économiques, aux nouvelles réglementations et aux tendances du marché financier.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },

  // ============================================================================
  // BUSINESS OFFICER (Ejecutivo de Negocios)
  // ============================================================================
  {
    id: 'bo-professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Competencias técnicas y comerciales propias del rol de ejecutivo de negocios en el sector asegurador.',
      en: 'Technical and commercial competencies specific to the business officer role in the insurance sector.',
      fr: 'Compétences techniques et commerciales spécifiques au rôle de chargé d\'affaires dans le secteur des assurances.',
    },
    competencies: [
      {
        id: 'bo-prospecting',
        name: { es: 'Prospección de Clientes', en: 'Client Prospecting', fr: 'Prospection de Clients' },
        description: {
          es: 'Capacidad para identificar, investigar y contactar clientes potenciales mediante diversas estrategias de prospección.',
          en: 'Ability to identify, research, and contact potential clients through various prospecting strategies.',
          fr: 'Capacité à identifier, rechercher et contacter des clients potentiels à travers diverses stratégies de prospection.',
        },
        weight: 0.15,
      },
      {
        id: 'bo-portfolio-management',
        name: { es: 'Gestión de Cartera de Clientes', en: 'Client Portfolio Management', fr: 'Gestion du Portefeuille Clients' },
        description: {
          es: 'Habilidad para administrar y hacer crecer una cartera de clientes existente, garantizando su satisfacción y retención.',
          en: 'Skill in managing and growing an existing client portfolio, ensuring satisfaction and retention.',
          fr: 'Compétence dans la gestion et la croissance d\'un portefeuille clients existant, en garantissant la satisfaction et la rétention.',
        },
        weight: 0.15,
      },
      {
        id: 'bo-commercial-proposals',
        name: { es: 'Propuestas Comerciales', en: 'Commercial Proposals', fr: 'Propositions Commerciales' },
        description: {
          es: 'Capacidad para elaborar propuestas comerciales claras, competitivas y adaptadas a las necesidades del cliente.',
          en: 'Ability to prepare clear, competitive commercial proposals tailored to client needs.',
          fr: 'Capacité à élaborer des propositions commerciales claires, compétitives et adaptées aux besoins du client.',
        },
        weight: 0.1,
      },
      {
        id: 'bo-sales-quotas',
        name: { es: 'Cumplimiento de Cuotas de Ventas', en: 'Sales Quota Achievement', fr: 'Atteinte des Quotas de Vente' },
        description: {
          es: 'Disciplina y estrategia para alcanzar o superar las metas de ventas asignadas de forma consistente.',
          en: 'Discipline and strategy to consistently meet or exceed assigned sales targets.',
          fr: 'Discipline et stratégie pour atteindre ou dépasser de manière constante les objectifs de vente assignés.',
        },
        weight: 0.1,
      },
      {
        id: 'bo-product-presentations',
        name: { es: 'Presentaciones de Productos', en: 'Product Presentations', fr: 'Présentations de Produits' },
        description: {
          es: 'Habilidad para presentar productos y servicios de seguros de forma persuasiva y adaptada a cada audiencia.',
          en: 'Skill in presenting insurance products and services persuasively and tailored to each audience.',
          fr: 'Compétence à présenter les produits et services d\'assurance de manière persuasive et adaptée à chaque public.',
        },
        weight: 0.1,
      },
      {
        id: 'bo-orders-contracts',
        name: { es: 'Procesamiento de Pedidos y Contratos', en: 'Order & Contract Processing', fr: 'Traitement des Commandes et Contrats' },
        description: {
          es: 'Capacidad para procesar pedidos, gestionar contratos y garantizar la documentación correcta de cada operación.',
          en: 'Ability to process orders, manage contracts, and ensure correct documentation of each transaction.',
          fr: 'Capacité à traiter les commandes, gérer les contrats et assurer la documentation correcte de chaque opération.',
        },
        weight: 0.1,
      },
      {
        id: 'bo-crm',
        name: { es: 'Registros en CRM', en: 'CRM Records', fr: 'Registres CRM' },
        description: {
          es: 'Disciplina para registrar y actualizar oportunamente toda la actividad comercial en el sistema CRM.',
          en: 'Discipline to promptly record and update all commercial activity in the CRM system.',
          fr: 'Discipline pour enregistrer et mettre à jour rapidement toute l\'activité commerciale dans le système CRM.',
        },
        weight: 0.1,
      },
      {
        id: 'bo-cross-selling',
        name: { es: 'Venta Cruzada y Upselling', en: 'Cross-Selling & Upselling', fr: 'Vente Croisée et Montée en Gamme' },
        description: {
          es: 'Capacidad para identificar oportunidades de venta cruzada y upselling dentro de la cartera de clientes.',
          en: 'Ability to identify cross-selling and upselling opportunities within the client portfolio.',
          fr: 'Capacité à identifier les opportunités de vente croisée et de montée en gamme au sein du portefeuille clients.',
        },
        weight: 0.1,
      },
      {
        id: 'bo-sales-reporting',
        name: { es: 'Reportes de Actividad Comercial', en: 'Sales Reporting', fr: 'Rapports d\'Activité Commerciale' },
        description: {
          es: 'Habilidad para preparar reportes claros y oportunos sobre la actividad comercial, embudo de ventas y resultados.',
          en: 'Skill in preparing clear and timely reports on commercial activity, sales funnel, and results.',
          fr: 'Compétence à préparer des rapports clairs et opportuns sur l\'activité commerciale, l\'entonnoir de vente et les résultats.',
        },
        weight: 0.1,
      },
    ],
    order: 1,
  },
  {
    id: 'bo-soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales clave para la gestión comercial y la relación con clientes.',
      en: 'Key interpersonal competencies for commercial management and client relations.',
      fr: 'Compétences interpersonnelles clés pour la gestion commerciale et les relations clients.',
    },
    competencies: [
      {
        id: 'bo-persuasion',
        name: { es: 'Comunicación Persuasiva', en: 'Persuasive Communication', fr: 'Communication Persuasive' },
        description: {
          es: 'Capacidad para comunicar ideas, beneficios y propuestas de forma convincente, generando confianza en el cliente.',
          en: 'Ability to communicate ideas, benefits, and proposals convincingly, building client trust.',
          fr: 'Capacité à communiquer des idées, des avantages et des propositions de manière convaincante, en instaurant la confiance du client.',
        },
        weight: 0.25,
      },
      {
        id: 'bo-negotiation',
        name: { es: 'Negociación', en: 'Negotiation', fr: 'Négociation' },
        description: {
          es: 'Habilidad para negociar condiciones comerciales que beneficien a la empresa y satisfagan al cliente.',
          en: 'Skill in negotiating commercial terms that benefit the company and satisfy the client.',
          fr: 'Compétence à négocier des conditions commerciales bénéfiques pour l\'entreprise et satisfaisantes pour le client.',
        },
        weight: 0.25,
      },
      {
        id: 'bo-resilience',
        name: { es: 'Resiliencia ante el Rechazo', en: 'Resilience to Rejection', fr: 'Résilience face au Rejet' },
        description: {
          es: 'Capacidad para manejar el rechazo, mantener la motivación y persistir en la búsqueda de oportunidades de venta.',
          en: 'Ability to handle rejection, maintain motivation, and persist in pursuing sales opportunities.',
          fr: 'Capacité à gérer le rejet, maintenir la motivation et persister dans la recherche d\'opportunités de vente.',
        },
        weight: 0.25,
      },
      {
        id: 'bo-relationship-building',
        name: { es: 'Construcción de Relaciones', en: 'Relationship Building', fr: 'Construction de Relations' },
        description: {
          es: 'Habilidad para establecer y mantener relaciones de largo plazo basadas en confianza y valor mutuo.',
          en: 'Skill in establishing and maintaining long-term relationships based on trust and mutual value.',
          fr: 'Compétence à établir et maintenir des relations à long terme basées sur la confiance et la valeur mutuelle.',
        },
        weight: 0.25,
      },
    ],
    order: 2,
  },
  {
    id: 'bo-readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación a cambios del mercado, nuevas tecnologías comerciales y evolución de productos.',
      en: 'Adaptability to market changes, new commercial technologies, and product evolution.',
      fr: 'Adaptabilité aux changements du marché, aux nouvelles technologies commerciales et à l\'évolution des produits.',
    },
    competencies: [
      {
        id: 'bo-market-adaptability',
        name: { es: 'Adaptabilidad al Mercado', en: 'Market Adaptability', fr: 'Adaptabilité au Marché' },
        description: {
          es: 'Flexibilidad para ajustar estrategias comerciales ante cambios en el mercado, la competencia y las tendencias del sector.',
          en: 'Flexibility to adjust commercial strategies in response to changes in the market, competition, and industry trends.',
          fr: 'Flexibilité pour ajuster les stratégies commerciales face aux changements du marché, de la concurrence et des tendances du secteur.',
        },
        weight: 0.35,
      },
      {
        id: 'bo-tech-adoption',
        name: { es: 'Adopción de Tecnología Comercial', en: 'Commercial Technology Adoption', fr: 'Adoption de Technologie Commerciale' },
        description: {
          es: 'Disposición para adoptar nuevas herramientas digitales, CRM, automatización de ventas y canales de comunicación.',
          en: 'Willingness to adopt new digital tools, CRM systems, sales automation, and communication channels.',
          fr: 'Volonté d\'adopter de nouveaux outils numériques, systèmes CRM, automatisation des ventes et canaux de communication.',
        },
        weight: 0.35,
      },
      {
        id: 'bo-continuous-improvement',
        name: { es: 'Mejora Continua', en: 'Continuous Improvement', fr: 'Amélioration Continue' },
        description: {
          es: 'Interés por capacitarse, aprender nuevas técnicas de venta y mantenerse actualizado en productos y regulaciones del sector.',
          en: 'Interest in training, learning new sales techniques, and staying current on products and industry regulations.',
          fr: 'Intérêt pour la formation, l\'apprentissage de nouvelles techniques de vente et le maintien à jour des produits et réglementations du secteur.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },
  // ============================================================================
  // BUSINESS MANAGER CATEGORIES
  // ============================================================================
  {
    id: 'bm-professional',
    name: { es: 'Habilidades Profesionales', en: 'Professional Skills', fr: 'Compétences Professionnelles' },
    description: {
      es: 'Competencias comerciales y de gestión de negocios requeridas para liderar el área de ventas y desarrollo comercial.',
      en: 'Commercial and business management competencies required to lead sales and business development.',
      fr: 'Compétences commerciales et de gestion d\'affaires requises pour diriger les ventes et le développement commercial.',
    },
    competencies: [
      {
        id: 'bm-revenue-growth',
        name: { es: 'Crecimiento de Ingresos', en: 'Revenue Growth', fr: 'Croissance des Revenus' },
        description: {
          es: 'Capacidad para diseñar e implementar estrategias que incrementen sostenidamente los ingresos de la organización.',
          en: 'Ability to design and implement strategies that sustainably increase organizational revenue.',
          fr: 'Capacité à concevoir et mettre en œuvre des stratégies qui augmentent durablement les revenus de l\'organisation.',
        },
        weight: 0.12,
      },
      {
        id: 'bm-client-relationship',
        name: { es: 'Gestión de Relaciones con Clientes', en: 'Client Relationship Management', fr: 'Gestion des Relations Clients' },
        description: {
          es: 'Habilidad para construir, mantener y profundizar relaciones estratégicas con clientes clave.',
          en: 'Skill in building, maintaining, and deepening strategic relationships with key clients.',
          fr: 'Habileté à construire, maintenir et approfondir les relations stratégiques avec les clients clés.',
        },
        weight: 0.1,
      },
      {
        id: 'bm-market-analysis',
        name: { es: 'Análisis de Mercado', en: 'Market Analysis', fr: 'Analyse de Marché' },
        description: {
          es: 'Capacidad para investigar y analizar tendencias de mercado, segmentos y oportunidades comerciales.',
          en: 'Ability to research and analyze market trends, segments, and commercial opportunities.',
          fr: 'Capacité à rechercher et analyser les tendances du marché, les segments et les opportunités commerciales.',
        },
        weight: 0.1,
      },
      {
        id: 'bm-business-strategy',
        name: { es: 'Estrategia de Negocios', en: 'Business Strategy', fr: 'Stratégie Commerciale' },
        description: {
          es: 'Habilidad para desarrollar y ejecutar planes estratégicos comerciales alineados con los objetivos organizacionales.',
          en: 'Skill in developing and executing commercial strategic plans aligned with organizational objectives.',
          fr: 'Habileté à développer et exécuter des plans stratégiques commerciaux alignés sur les objectifs organisationnels.',
        },
        weight: 0.1,
      },
      {
        id: 'bm-sales-leadership',
        name: { es: 'Liderazgo de Equipos de Ventas', en: 'Sales Team Leadership', fr: 'Leadership des Équipes de Vente' },
        description: {
          es: 'Capacidad para dirigir, motivar y desarrollar equipos comerciales de alto rendimiento.',
          en: 'Ability to lead, motivate, and develop high-performance sales teams.',
          fr: 'Capacité à diriger, motiver et développer des équipes commerciales de haute performance.',
        },
        weight: 0.1,
      },
      {
        id: 'bm-pl-management',
        name: { es: 'Gestión de P&L', en: 'P&L Management', fr: 'Gestion du P&L' },
        description: {
          es: 'Dominio de estados de pérdidas y ganancias, presupuestos comerciales y control de rentabilidad.',
          en: 'Mastery of profit and loss statements, commercial budgets, and profitability control.',
          fr: 'Maîtrise des comptes de résultat, des budgets commerciaux et du contrôle de la rentabilité.',
        },
        weight: 0.1,
      },
      {
        id: 'bm-new-business',
        name: { es: 'Desarrollo de Nuevos Negocios', en: 'New Business Development', fr: 'Développement de Nouvelles Affaires' },
        description: {
          es: 'Habilidad para identificar, evaluar y capitalizar nuevas oportunidades de negocio y mercados.',
          en: 'Skill in identifying, evaluating, and capitalizing on new business opportunities and markets.',
          fr: 'Habileté à identifier, évaluer et capitaliser sur de nouvelles opportunités d\'affaires et marchés.',
        },
        weight: 0.1,
      },
      {
        id: 'bm-competitive-intel',
        name: { es: 'Inteligencia Competitiva', en: 'Competitive Intelligence', fr: 'Veille Concurrentielle' },
        description: {
          es: 'Capacidad para monitorear y analizar la actividad de la competencia y convertir información en ventaja estratégica.',
          en: 'Ability to monitor and analyze competitor activity and convert information into strategic advantage.',
          fr: 'Capacité à surveiller et analyser l\'activité de la concurrence et à convertir l\'information en avantage stratégique.',
        },
        weight: 0.08,
      },
      {
        id: 'bm-partnerships',
        name: { es: 'Negociación de Alianzas', en: 'Partnership Negotiations', fr: 'Négociation de Partenariats' },
        description: {
          es: 'Habilidad para negociar y estructurar alianzas estratégicas que generen valor para la organización.',
          en: 'Skill in negotiating and structuring strategic partnerships that generate value for the organization.',
          fr: 'Habileté à négocier et structurer des partenariats stratégiques qui génèrent de la valeur pour l\'organisation.',
        },
        weight: 0.1,
      },
      {
        id: 'bm-pricing',
        name: { es: 'Estrategias de Precios', en: 'Pricing Strategies', fr: 'Stratégies de Prix' },
        description: {
          es: 'Capacidad para diseñar modelos de precios competitivos que maximicen ingresos y participación de mercado.',
          en: 'Ability to design competitive pricing models that maximize revenue and market share.',
          fr: 'Capacité à concevoir des modèles de prix compétitifs qui maximisent les revenus et la part de marché.',
        },
        weight: 0.1,
      },
    ],
    order: 1,
  },
  {
    id: 'bm-soft-skills',
    name: { es: 'Habilidades Blandas', en: 'Soft Skills', fr: 'Compétences Interpersonnelles' },
    description: {
      es: 'Competencias interpersonales y de liderazgo necesarias para gestionar relaciones comerciales y equipos de trabajo.',
      en: 'Interpersonal and leadership competencies needed to manage commercial relationships and teams.',
      fr: 'Compétences interpersonnelles et de leadership nécessaires pour gérer les relations commerciales et les équipes.',
    },
    competencies: [
      {
        id: 'bm-negotiation',
        name: { es: 'Negociación', en: 'Negotiation', fr: 'Négociation' },
        description: {
          es: 'Habilidad para negociar acuerdos comerciales complejos logrando resultados favorables para todas las partes.',
          en: 'Skill in negotiating complex commercial agreements achieving favorable outcomes for all parties.',
          fr: 'Habileté à négocier des accords commerciaux complexes en obtenant des résultats favorables pour toutes les parties.',
        },
        weight: 0.2,
      },
      {
        id: 'bm-communication',
        name: { es: 'Comunicación Ejecutiva', en: 'Executive Communication', fr: 'Communication Exécutive' },
        description: {
          es: 'Capacidad para comunicar de manera clara y persuasiva a clientes, equipos y alta dirección.',
          en: 'Ability to communicate clearly and persuasively to clients, teams, and senior management.',
          fr: 'Capacité à communiquer de manière claire et persuasive aux clients, équipes et direction générale.',
        },
        weight: 0.2,
      },
      {
        id: 'bm-influence',
        name: { es: 'Influencia y Persuasión', en: 'Influence & Persuasion', fr: 'Influence et Persuasion' },
        description: {
          es: 'Capacidad para influir en decisiones de compra, generar confianza y mover stakeholders hacia la acción.',
          en: 'Ability to influence purchasing decisions, build trust, and move stakeholders to action.',
          fr: 'Capacité à influencer les décisions d\'achat, à bâtir la confiance et à amener les parties prenantes à l\'action.',
        },
        weight: 0.2,
      },
      {
        id: 'bm-team-development',
        name: { es: 'Desarrollo de Equipos', en: 'Team Development', fr: 'Développement des Équipes' },
        description: {
          es: 'Habilidad para formar, mentorizar y desarrollar el talento dentro del equipo comercial.',
          en: 'Skill in training, mentoring, and developing talent within the commercial team.',
          fr: 'Habileté à former, encadrer et développer les talents au sein de l\'équipe commerciale.',
        },
        weight: 0.2,
      },
      {
        id: 'bm-resilience',
        name: { es: 'Resiliencia Comercial', en: 'Commercial Resilience', fr: 'Résilience Commerciale' },
        description: {
          es: 'Capacidad para manejar la presión de metas, rechazos y ciclos de venta largos sin perder motivación.',
          en: 'Ability to handle target pressure, rejections, and long sales cycles without losing motivation.',
          fr: 'Capacité à gérer la pression des objectifs, les rejets et les cycles de vente longs sans perdre la motivation.',
        },
        weight: 0.2,
      },
    ],
    order: 2,
  },
  {
    id: 'bm-readiness',
    name: { es: 'Disposición al Cambio', en: 'Readiness for Change', fr: 'Disposition au Changement' },
    description: {
      es: 'Capacidad para adaptarse a nuevos modelos de negocio, tecnologías comerciales y cambios en el entorno competitivo.',
      en: 'Ability to adapt to new business models, commercial technologies, and changes in the competitive environment.',
      fr: 'Capacité à s\'adapter aux nouveaux modèles d\'affaires, technologies commerciales et changements de l\'environnement concurrentiel.',
    },
    competencies: [
      {
        id: 'bm-digital-transformation',
        name: { es: 'Transformación Digital Comercial', en: 'Commercial Digital Transformation', fr: 'Transformation Numérique Commerciale' },
        description: {
          es: 'Disposición para adoptar herramientas digitales de ventas, CRM avanzados, automatización y canales digitales.',
          en: 'Willingness to adopt digital sales tools, advanced CRM, automation, and digital channels.',
          fr: 'Volonté d\'adopter les outils de vente numériques, CRM avancés, automatisation et canaux digitaux.',
        },
        weight: 0.35,
      },
      {
        id: 'bm-market-adaptation',
        name: { es: 'Adaptación al Mercado', en: 'Market Adaptation', fr: 'Adaptation au Marché' },
        description: {
          es: 'Capacidad para ajustar rápidamente estrategias ante cambios regulatorios, económicos o competitivos.',
          en: 'Ability to quickly adjust strategies in response to regulatory, economic, or competitive changes.',
          fr: 'Capacité à ajuster rapidement les stratégies face aux changements réglementaires, économiques ou concurrentiels.',
        },
        weight: 0.35,
      },
      {
        id: 'bm-innovation',
        name: { es: 'Innovación en Modelos de Negocio', en: 'Business Model Innovation', fr: 'Innovation des Modèles d\'Affaires' },
        description: {
          es: 'Interés por explorar nuevos modelos de negocio, canales de distribución y propuestas de valor.',
          en: 'Interest in exploring new business models, distribution channels, and value propositions.',
          fr: 'Intérêt pour l\'exploration de nouveaux modèles d\'affaires, canaux de distribution et propositions de valeur.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },
  // --- HR MANAGER (Gerente de Recursos Humanos) ---
  { id: 'hr-professional', name: { es: 'Habilidades Profesionales', en: 'Professional Skills', fr: 'Compétences Professionnelles' }, description: { es: 'Competencias técnicas y estratégicas de gestión de Recursos Humanos a nivel gerencial: adquisición de talento, relaciones laborales, gestión del desempeño, compensación y beneficios, capacitación, cumplimiento legal, desarrollo organizacional, planificación de fuerza laboral, compromiso del colaborador y mediación de conflictos.', en: 'Technical and strategic HR management competencies at a managerial level: talent acquisition, employee relations, performance management, compensation & benefits, training & development, labor law compliance, organizational development, workforce planning, employee engagement, and conflict mediation.', fr: 'Compétences techniques et stratégiques en gestion des RH au niveau managérial : acquisition de talents, relations employés, gestion de la performance, rémunération et avantages, formation et développement, conformité au droit du travail, développement organisationnel, planification des effectifs, engagement des collaborateurs et médiation des conflits.' }, competencies: [{ id: 'hrm-talent-acquisition', name: { es: 'Adquisición de Talento', en: 'Talent Acquisition', fr: 'Acquisition de Talents' }, description: { es: 'Capacidad para diseñar e implementar estrategias de atracción, selección y contratación de talento alineadas con los objetivos organizacionales.', en: 'Ability to design and implement talent attraction, selection, and hiring strategies aligned with organizational goals.', fr: 'Capacité à concevoir et mettre en œuvre des stratégies d\'attraction, de sélection et d\'embauche de talents alignées sur les objectifs organisationnels.' }, weight: 0.1 }, { id: 'hrm-employee-relations', name: { es: 'Relaciones Laborales', en: 'Employee Relations', fr: 'Relations avec les Employés' }, description: { es: 'Habilidad para gestionar las relaciones entre la empresa y los colaboradores, promoviendo un clima laboral sano y resolviendo conflictos de manera justa.', en: 'Skill in managing employer-employee relationships, promoting a healthy work environment, and resolving conflicts fairly.', fr: 'Compétence dans la gestion des relations employeur-employé, la promotion d\'un environnement de travail sain et la résolution équitable des conflits.' }, weight: 0.1 }, { id: 'hrm-performance-management', name: { es: 'Gestión del Desempeño', en: 'Performance Management', fr: 'Gestion de la Performance' }, description: { es: 'Capacidad para diseñar sistemas de evaluación del desempeño, establecer objetivos, dar retroalimentación y gestionar planes de mejora.', en: 'Ability to design performance evaluation systems, set objectives, provide feedback, and manage improvement plans.', fr: 'Capacité à concevoir des systèmes d\'évaluation de la performance, fixer des objectifs, fournir un retour d\'information et gérer des plans d\'amélioration.' }, weight: 0.1 }, { id: 'hrm-compensation-benefits', name: { es: 'Compensación y Beneficios', en: 'Compensation & Benefits', fr: 'Rémunération et Avantages' }, description: { es: 'Conocimiento para diseñar y administrar estructuras salariales competitivas, programas de beneficios y esquemas de incentivos.', en: 'Knowledge to design and administer competitive salary structures, benefits programs, and incentive schemes.', fr: 'Connaissance pour concevoir et administrer des structures salariales compétitives, des programmes d\'avantages et des systèmes d\'incitation.' }, weight: 0.1 }, { id: 'hrm-training-development', name: { es: 'Capacitación y Desarrollo', en: 'Training & Development', fr: 'Formation et Développement' }, description: { es: 'Habilidad para identificar necesidades de formación, diseñar programas de capacitación y gestionar planes de desarrollo profesional.', en: 'Skill in identifying training needs, designing training programs, and managing professional development plans.', fr: 'Compétence pour identifier les besoins de formation, concevoir des programmes de formation et gérer des plans de développement professionnel.' }, weight: 0.1 }, { id: 'hrm-labor-law', name: { es: 'Cumplimiento de Legislación Laboral', en: 'Labor Law Compliance', fr: 'Conformité au Droit du Travail' }, description: { es: 'Dominio de la legislación laboral vigente y capacidad para asegurar que las políticas y prácticas de RR.HH. cumplan con la normativa legal.', en: 'Mastery of current labor legislation and ability to ensure HR policies and practices comply with legal requirements.', fr: 'Maîtrise de la législation du travail en vigueur et capacité à garantir que les politiques et pratiques RH sont conformes aux exigences légales.' }, weight: 0.1 }, { id: 'hrm-org-development', name: { es: 'Desarrollo Organizacional', en: 'Organizational Development', fr: 'Développement Organisationnel' }, description: { es: 'Capacidad para liderar iniciativas de cambio organizacional, diseño de estructuras y gestión de la cultura empresarial.', en: 'Ability to lead organizational change initiatives, structure design, and corporate culture management.', fr: 'Capacité à diriger des initiatives de changement organisationnel, la conception de structures et la gestion de la culture d\'entreprise.' }, weight: 0.1 }, { id: 'hrm-workforce-planning', name: { es: 'Planificación de Fuerza Laboral', en: 'Workforce Planning', fr: 'Planification des Effectifs' }, description: { es: 'Habilidad para analizar las necesidades actuales y futuras de talento, prever brechas y diseñar planes de sucesión.', en: 'Skill in analyzing current and future talent needs, forecasting gaps, and designing succession plans.', fr: 'Compétence pour analyser les besoins actuels et futurs en talents, prévoir les écarts et concevoir des plans de succession.' }, weight: 0.1 }, { id: 'hrm-employee-engagement', name: { es: 'Compromiso de los Colaboradores', en: 'Employee Engagement', fr: 'Engagement des Collaborateurs' }, description: { es: 'Capacidad para diseñar e implementar estrategias que fomenten la motivación, satisfacción y retención del talento.', en: 'Ability to design and implement strategies that foster motivation, satisfaction, and talent retention.', fr: 'Capacité à concevoir et mettre en œuvre des stratégies favorisant la motivation, la satisfaction et la rétention des talents.' }, weight: 0.1 }, { id: 'hrm-conflict-mediation', name: { es: 'Mediación de Conflictos', en: 'Conflict Mediation', fr: 'Médiation des Conflits' }, description: { es: 'Habilidad para intervenir en disputas laborales como tercero imparcial, facilitando acuerdos justos y preservando las relaciones profesionales.', en: 'Skill in intervening in workplace disputes as an impartial third party, facilitating fair agreements and preserving professional relationships.', fr: 'Compétence pour intervenir dans les conflits professionnels en tant que tiers impartial, facilitant des accords équitables et préservant les relations professionnelles.' }, weight: 0.1 }], order: 1 },
  { id: 'hr-soft-skills', name: { es: 'Habilidades Blandas', en: 'Soft Skills', fr: 'Compétences Interpersonnelles' }, description: { es: 'Competencias interpersonales esenciales para un Gerente de Recursos Humanos: liderazgo, comunicación estratégica, inteligencia emocional, negociación y pensamiento analítico.', en: 'Essential interpersonal competencies for an HR Manager: leadership, strategic communication, emotional intelligence, negotiation, and analytical thinking.', fr: 'Compétences interpersonnelles essentielles pour un Responsable RH : leadership, communication stratégique, intelligence émotionnelle, négociation et pensée analytique.' }, competencies: [{ id: 'hrm-leadership', name: { es: 'Liderazgo y Dirección de Equipos', en: 'Leadership & Team Management', fr: 'Leadership et Gestion d\'Équipe' }, description: { es: 'Capacidad para liderar, inspirar y desarrollar al equipo de RR.HH., estableciendo dirección clara y fomentando el alto desempeño.', en: 'Ability to lead, inspire, and develop the HR team, setting clear direction and fostering high performance.', fr: 'Capacité à diriger, inspirer et développer l\'équipe RH, en établissant une direction claire et en favorisant la haute performance.' }, weight: 0.25 }, { id: 'hrm-strategic-communication', name: { es: 'Comunicación Estratégica', en: 'Strategic Communication', fr: 'Communication Stratégique' }, description: { es: 'Habilidad para comunicar políticas, cambios organizacionales y decisiones de manera clara, persuasiva y empática a todos los niveles.', en: 'Skill in communicating policies, organizational changes, and decisions clearly, persuasively, and empathetically at all levels.', fr: 'Compétence pour communiquer les politiques, les changements organisationnels et les décisions de manière claire, persuasive et empathique à tous les niveaux.' }, weight: 0.25 }, { id: 'hrm-emotional-intelligence', name: { es: 'Inteligencia Emocional', en: 'Emotional Intelligence', fr: 'Intelligence Émotionnelle' }, description: { es: 'Capacidad para reconocer, comprender y gestionar las propias emociones y las de los demás en el entorno laboral.', en: 'Ability to recognize, understand, and manage one\'s own emotions and those of others in the workplace.', fr: 'Capacité à reconnaître, comprendre et gérer ses propres émotions et celles des autres dans l\'environnement professionnel.' }, weight: 0.25 }, { id: 'hrm-negotiation', name: { es: 'Negociación y Pensamiento Analítico', en: 'Negotiation & Analytical Thinking', fr: 'Négociation et Pensée Analytique' }, description: { es: 'Habilidad para negociar con sindicatos, proveedores y la dirección, utilizando datos y análisis para fundamentar decisiones de RR.HH.', en: 'Skill in negotiating with unions, vendors, and management, using data and analysis to support HR decisions.', fr: 'Compétence pour négocier avec les syndicats, fournisseurs et la direction, en utilisant les données et l\'analyse pour étayer les décisions RH.' }, weight: 0.25 }], order: 2 },
  { id: 'hr-readiness', name: { es: 'Disposición al Cambio', en: 'Readiness for Change', fr: 'Disposition au Changement' }, description: { es: 'Capacidad de adaptación e innovación en la gestión de Recursos Humanos ante nuevas tecnologías, tendencias y regulaciones.', en: 'Adaptability and innovation capacity in HR management facing new technologies, trends, and regulations.', fr: 'Capacité d\'adaptation et d\'innovation dans la gestion RH face aux nouvelles technologies, tendances et réglementations.' }, competencies: [{ id: 'hrm-hr-technology', name: { es: 'Tecnología e Innovación en RR.HH.', en: 'HR Technology & Innovation', fr: 'Technologie et Innovation RH' }, description: { es: 'Disposición para adoptar y liderar la implementación de sistemas HRIS, analítica de personas, inteligencia artificial y automatización en procesos de RR.HH.', en: 'Willingness to adopt and lead the implementation of HRIS systems, people analytics, AI, and automation in HR processes.', fr: 'Volonté d\'adopter et de diriger la mise en œuvre de systèmes SIRH, d\'analytique des personnes, d\'IA et d\'automatisation dans les processus RH.' }, weight: 0.35 }, { id: 'hrm-change-management', name: { es: 'Gestión del Cambio', en: 'Change Management', fr: 'Gestion du Changement' }, description: { es: 'Capacidad para liderar procesos de transformación organizacional, gestionar la resistencia al cambio y asegurar transiciones exitosas.', en: 'Ability to lead organizational transformation processes, manage resistance to change, and ensure successful transitions.', fr: 'Capacité à diriger des processus de transformation organisationnelle, gérer la résistance au changement et assurer des transitions réussies.' }, weight: 0.35 }, { id: 'hrm-dei-trends', name: { es: 'Tendencias y Diversidad e Inclusión', en: 'Trends & Diversity, Equity & Inclusion', fr: 'Tendances et Diversité, Équité & Inclusion' }, description: { es: 'Compromiso con las tendencias emergentes de RR.HH., incluyendo diversidad, equidad, inclusión, trabajo remoto y bienestar integral.', en: 'Commitment to emerging HR trends, including diversity, equity, inclusion, remote work, and holistic well-being.', fr: 'Engagement envers les tendances émergentes des RH, y compris la diversité, l\'équité, l\'inclusion, le travail à distance et le bien-être global.' }, weight: 0.3 }], order: 3 },
  // ============================================================================
  // CUSTOMER SERVICE MANAGER CATEGORIES (csm-)
  // ============================================================================
  {
    id: 'csm-professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Competencias técnicas y estratégicas para la gestión del departamento de servicio al cliente, incluyendo satisfacción del cliente, SLAs, operaciones de centro de contacto, CRM y métricas de servicio.',
      en: 'Technical and strategic competencies for managing the customer service department, including customer satisfaction, SLAs, contact center operations, CRM, and service metrics.',
      fr: 'Compétences techniques et stratégiques pour la gestion du département de service client, y compris la satisfaction client, les SLA, les opérations de centre de contact, le CRM et les indicateurs de service.',
    },
    competencies: [
      {
        id: 'csm-satisfaction-strategy',
        name: { es: 'Estrategia de Satisfacción del Cliente', en: 'Customer Satisfaction Strategy', fr: 'Stratégie de Satisfaction Client' },
        description: {
          es: 'Capacidad para diseñar e implementar estrategias integrales de satisfacción del cliente alineadas con los objetivos del negocio.',
          en: 'Ability to design and implement comprehensive customer satisfaction strategies aligned with business objectives.',
          fr: 'Capacité à concevoir et mettre en œuvre des stratégies globales de satisfaction client alignées sur les objectifs de l\'entreprise.',
        },
        weight: 0.15,
      },
      {
        id: 'csm-sla-management',
        name: { es: 'Gestión de SLAs', en: 'SLA Management', fr: 'Gestion des SLA' },
        description: {
          es: 'Habilidad para definir, monitorear y cumplir acuerdos de nivel de servicio, estableciendo metas de tiempo de respuesta y resolución.',
          en: 'Skill in defining, monitoring, and meeting service level agreements, setting response time and resolution targets.',
          fr: 'Compétence pour définir, surveiller et respecter les accords de niveau de service, en fixant des objectifs de temps de réponse et de résolution.',
        },
        weight: 0.1,
      },
      {
        id: 'csm-complaint-management',
        name: { es: 'Gestión de Quejas y Escalamiento', en: 'Complaint Management & Escalation', fr: 'Gestion des Réclamations et Escalade' },
        description: {
          es: 'Capacidad para diseñar procesos de gestión de quejas, definir rutas de escalamiento y convertir quejas en oportunidades de mejora.',
          en: 'Ability to design complaint management processes, define escalation paths, and turn complaints into improvement opportunities.',
          fr: 'Capacité à concevoir des processus de gestion des réclamations, définir des chemins d\'escalade et transformer les plaintes en opportunités d\'amélioration.',
        },
        weight: 0.1,
      },
      {
        id: 'csm-contact-center-ops',
        name: { es: 'Operaciones de Centro de Contacto', en: 'Contact Center Operations', fr: 'Opérations de Centre de Contact' },
        description: {
          es: 'Conocimiento en la gestión operativa de centros de contacto: planificación de turnos, dimensionamiento de personal, productividad y eficiencia.',
          en: 'Knowledge of contact center operational management: shift planning, workforce sizing, productivity, and efficiency.',
          fr: 'Connaissance de la gestion opérationnelle des centres de contact : planification des quarts, dimensionnement des effectifs, productivité et efficacité.',
        },
        weight: 0.1,
      },
      {
        id: 'csm-crm-management',
        name: { es: 'Gestión de CRM', en: 'CRM Management', fr: 'Gestion du CRM' },
        description: {
          es: 'Capacidad para administrar, optimizar y aprovechar sistemas CRM para mejorar la relación con el cliente y la toma de decisiones basada en datos.',
          en: 'Ability to administer, optimize, and leverage CRM systems to improve customer relationships and data-driven decision-making.',
          fr: 'Capacité à administrer, optimiser et exploiter les systèmes CRM pour améliorer la relation client et la prise de décisions basée sur les données.',
        },
        weight: 0.1,
      },
      {
        id: 'csm-cx-design',
        name: { es: 'Diseño de Experiencia del Cliente (CX)', en: 'Customer Experience (CX) Design', fr: 'Conception de l\'Expérience Client (CX)' },
        description: {
          es: 'Habilidad para mapear el viaje del cliente, identificar puntos de dolor y diseñar experiencias que generen lealtad y diferenciación.',
          en: 'Skill in mapping the customer journey, identifying pain points, and designing experiences that drive loyalty and differentiation.',
          fr: 'Compétence pour cartographier le parcours client, identifier les points de douleur et concevoir des expériences qui favorisent la fidélité et la différenciation.',
        },
        weight: 0.1,
      },
      {
        id: 'csm-team-training',
        name: { es: 'Capacitación y Coaching de Equipos', en: 'Team Training & Coaching', fr: 'Formation et Coaching d\'Équipes' },
        description: {
          es: 'Capacidad para desarrollar programas de capacitación, realizar coaching individual y grupal, y elevar las competencias del equipo de servicio.',
          en: 'Ability to develop training programs, conduct individual and group coaching, and elevate service team competencies.',
          fr: 'Capacité à développer des programmes de formation, mener du coaching individuel et collectif, et élever les compétences de l\'équipe de service.',
        },
        weight: 0.1,
      },
      {
        id: 'csm-quality-assurance',
        name: { es: 'Aseguramiento de Calidad', en: 'Quality Assurance', fr: 'Assurance Qualité' },
        description: {
          es: 'Conocimiento en diseño e implementación de programas de aseguramiento de calidad: monitoreo de llamadas, evaluaciones de servicio y estándares de atención.',
          en: 'Knowledge in designing and implementing quality assurance programs: call monitoring, service evaluations, and service standards.',
          fr: 'Connaissance en conception et mise en œuvre de programmes d\'assurance qualité : surveillance des appels, évaluations de service et normes de service.',
        },
        weight: 0.1,
      },
      {
        id: 'csm-nps-csat-metrics',
        name: { es: 'Métricas NPS/CSAT', en: 'NPS/CSAT Metrics', fr: 'Indicateurs NPS/CSAT' },
        description: {
          es: 'Dominio en la medición, análisis y mejora de indicadores clave como Net Promoter Score, Customer Satisfaction Score y Customer Effort Score.',
          en: 'Mastery of measuring, analyzing, and improving key metrics such as Net Promoter Score, Customer Satisfaction Score, and Customer Effort Score.',
          fr: 'Maîtrise de la mesure, de l\'analyse et de l\'amélioration des indicateurs clés tels que le Net Promoter Score, le Customer Satisfaction Score et le Customer Effort Score.',
        },
        weight: 0.1,
      },
      {
        id: 'csm-omnichannel-strategy',
        name: { es: 'Estrategia Omnicanal', en: 'Omnichannel Strategy', fr: 'Stratégie Omnicanale' },
        description: {
          es: 'Capacidad para diseñar y gestionar una estrategia de servicio integrada a través de múltiples canales: teléfono, correo, chat, redes sociales y presencial.',
          en: 'Ability to design and manage an integrated service strategy across multiple channels: phone, email, chat, social media, and in-person.',
          fr: 'Capacité à concevoir et gérer une stratégie de service intégrée sur plusieurs canaux : téléphone, courriel, chat, réseaux sociaux et en personne.',
        },
        weight: 0.05,
      },
    ],
    order: 1,
  },
  {
    id: 'csm-soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales y de liderazgo clave para un gerente de servicio al cliente.',
      en: 'Key interpersonal and leadership competencies for a customer service manager.',
      fr: 'Compétences interpersonnelles et de leadership clés pour un responsable du service client.',
    },
    competencies: [
      {
        id: 'csm-leadership',
        name: { es: 'Liderazgo y Motivación', en: 'Leadership & Motivation', fr: 'Leadership et Motivation' },
        description: {
          es: 'Capacidad para liderar, inspirar y motivar al equipo de servicio al cliente hacia el logro de objetivos y la excelencia en la atención.',
          en: 'Ability to lead, inspire, and motivate the customer service team towards achieving goals and service excellence.',
          fr: 'Capacité à diriger, inspirer et motiver l\'équipe de service client vers l\'atteinte des objectifs et l\'excellence du service.',
        },
        weight: 0.25,
      },
      {
        id: 'csm-empathy-communication',
        name: { es: 'Empatía y Comunicación', en: 'Empathy & Communication', fr: 'Empathie et Communication' },
        description: {
          es: 'Habilidad para comunicarse con empatía, claridad y profesionalismo tanto con el equipo como con clientes, especialmente en situaciones de conflicto.',
          en: 'Skill in communicating with empathy, clarity, and professionalism with both team members and customers, especially in conflict situations.',
          fr: 'Compétence à communiquer avec empathie, clarté et professionnalisme tant avec l\'équipe qu\'avec les clients, surtout en situations de conflit.',
        },
        weight: 0.25,
      },
      {
        id: 'csm-conflict-resolution',
        name: { es: 'Resolución de Conflictos', en: 'Conflict Resolution', fr: 'Résolution de Conflits' },
        description: {
          es: 'Capacidad para mediar y resolver conflictos tanto internos del equipo como con clientes insatisfechos de manera constructiva.',
          en: 'Ability to mediate and resolve conflicts both within the team and with dissatisfied customers in a constructive manner.',
          fr: 'Capacité à arbitrer et résoudre les conflits tant au sein de l\'équipe qu\'avec les clients insatisfaits de manière constructive.',
        },
        weight: 0.25,
      },
      {
        id: 'csm-analytical-thinking',
        name: { es: 'Pensamiento Analítico', en: 'Analytical Thinking', fr: 'Pensée Analytique' },
        description: {
          es: 'Capacidad para analizar datos de servicio, identificar tendencias, diagnosticar problemas recurrentes y tomar decisiones basadas en evidencia.',
          en: 'Ability to analyze service data, identify trends, diagnose recurring problems, and make evidence-based decisions.',
          fr: 'Capacité à analyser les données de service, identifier les tendances, diagnostiquer les problèmes récurrents et prendre des décisions fondées sur des preuves.',
        },
        weight: 0.25,
      },
    ],
    order: 2,
  },
  {
    id: 'csm-readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación e innovación en la gestión del servicio al cliente.',
      en: 'Adaptability and innovation capacity in customer service management.',
      fr: 'Capacité d\'adaptation et d\'innovation dans la gestion du service client.',
    },
    competencies: [
      {
        id: 'csm-digital-transformation',
        name: { es: 'Transformación Digital del Servicio', en: 'Service Digital Transformation', fr: 'Transformation Numérique du Service' },
        description: {
          es: 'Disposición para adoptar e implementar tecnologías emergentes como chatbots, IA, automatización y plataformas digitales de servicio.',
          en: 'Willingness to adopt and implement emerging technologies such as chatbots, AI, automation, and digital service platforms.',
          fr: 'Volonté d\'adopter et de mettre en œuvre des technologies émergentes telles que les chatbots, l\'IA, l\'automatisation et les plateformes numériques de service.',
        },
        weight: 0.35,
      },
      {
        id: 'csm-process-improvement',
        name: { es: 'Mejora Continua de Procesos', en: 'Continuous Process Improvement', fr: 'Amélioration Continue des Processus' },
        description: {
          es: 'Compromiso con la identificación de ineficiencias, la implementación de mejoras y la estandarización de procesos de servicio.',
          en: 'Commitment to identifying inefficiencies, implementing improvements, and standardizing service processes.',
          fr: 'Engagement envers l\'identification des inefficacités, la mise en œuvre d\'améliorations et la standardisation des processus de service.',
        },
        weight: 0.35,
      },
      {
        id: 'csm-market-adaptability',
        name: { es: 'Adaptación a Tendencias del Mercado', en: 'Market Trend Adaptability', fr: 'Adaptation aux Tendances du Marché' },
        description: {
          es: 'Capacidad para mantenerse actualizado en tendencias de servicio al cliente, expectativas cambiantes del consumidor y mejores prácticas de la industria.',
          en: 'Ability to stay current with customer service trends, changing consumer expectations, and industry best practices.',
          fr: 'Capacité à rester à jour avec les tendances du service client, les attentes changeantes des consommateurs et les meilleures pratiques de l\'industrie.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },

  // ============================================================================
  // INSURANCE CEO CATEGORIES
  // ============================================================================
  {
    id: 'ins-ceo-professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Competencias técnicas y estratégicas requeridas para dirigir una compañía de seguros, incluyendo visión de mercado, gobernanza regulatoria, estrategia de productos, distribución, reaseguro y gestión de capital.',
      en: 'Technical and strategic competencies required to lead an insurance company, including market vision, regulatory governance, product strategy, distribution, reinsurance, and capital management.',
      fr: 'Compétences techniques et stratégiques requises pour diriger une compagnie d\'assurances, y compris la vision du marché, la gouvernance réglementaire, la stratégie produits, la distribution, la réassurance et la gestion du capital.',
    },
    competencies: [
      {
        id: 'ins-ceo-strategic-vision',
        name: { es: 'Visión Estratégica y Posicionamiento de Mercado', en: 'Strategic Vision & Market Positioning', fr: 'Vision Stratégique et Positionnement sur le Marché' },
        description: {
          es: 'Capacidad para definir la dirección estratégica de la compañía, identificar oportunidades de mercado, anticipar tendencias competitivas y posicionar la marca como líder en el sector asegurador.',
          en: 'Ability to define the company\'s strategic direction, identify market opportunities, anticipate competitive trends, and position the brand as a leader in the insurance sector.',
          fr: 'Capacité à définir la direction stratégique de l\'entreprise, identifier les opportunités de marché, anticiper les tendances concurrentielles et positionner la marque comme leader dans le secteur de l\'assurance.',
        },
        weight: 0.18,
      },
      {
        id: 'ins-ceo-regulatory-governance',
        name: { es: 'Gobernanza Regulatoria y Cumplimiento', en: 'Regulatory Governance & Compliance', fr: 'Gouvernance Réglementaire et Conformité' },
        description: {
          es: 'Dominio del marco regulatorio del sector asegurador, incluyendo relaciones con superintendencias, cumplimiento de normativas de solvencia, protección al consumidor y gobierno corporativo.',
          en: 'Mastery of the insurance regulatory framework, including relations with supervisory authorities, compliance with solvency regulations, consumer protection, and corporate governance.',
          fr: 'Maîtrise du cadre réglementaire du secteur de l\'assurance, y compris les relations avec les autorités de supervision, la conformité aux réglementations de solvabilité, la protection des consommateurs et la gouvernance d\'entreprise.',
        },
        weight: 0.18,
      },
      {
        id: 'ins-ceo-product-portfolio',
        name: { es: 'Estrategia de Portafolio de Productos', en: 'Product Portfolio Strategy', fr: 'Stratégie de Portefeuille de Produits' },
        description: {
          es: 'Capacidad para diseñar y gestionar un portafolio de productos de seguros diversificado, equilibrado y rentable, alineado con las necesidades del mercado y los objetivos de la compañía.',
          en: 'Ability to design and manage a diversified, balanced, and profitable insurance product portfolio aligned with market needs and company objectives.',
          fr: 'Capacité à concevoir et gérer un portefeuille de produits d\'assurance diversifié, équilibré et rentable, aligné sur les besoins du marché et les objectifs de l\'entreprise.',
        },
        weight: 0.16,
      },
      {
        id: 'ins-ceo-distribution',
        name: { es: 'Gestión de Distribución y Canales', en: 'Distribution & Channel Management', fr: 'Gestion de la Distribution et des Canaux' },
        description: {
          es: 'Habilidad para diseñar y optimizar la estrategia de distribución multicanal, incluyendo agentes, corredores, bancaseguros, canales digitales y alianzas estratégicas.',
          en: 'Skill in designing and optimizing multi-channel distribution strategy, including agents, brokers, bancassurance, digital channels, and strategic alliances.',
          fr: 'Compétence dans la conception et l\'optimisation de la stratégie de distribution multicanal, y compris les agents, les courtiers, la bancassurance, les canaux numériques et les alliances stratégiques.',
        },
        weight: 0.16,
      },
      {
        id: 'ins-ceo-reinsurance',
        name: { es: 'Estrategia de Reaseguro', en: 'Reinsurance Strategy', fr: 'Stratégie de Réassurance' },
        description: {
          es: 'Comprensión estratégica del reaseguro como herramienta de gestión de riesgo, incluyendo diseño de programas, negociación con reaseguradores y optimización de la retención.',
          en: 'Strategic understanding of reinsurance as a risk management tool, including program design, negotiation with reinsurers, and retention optimization.',
          fr: 'Compréhension stratégique de la réassurance comme outil de gestion des risques, y compris la conception de programmes, la négociation avec les réassureurs et l\'optimisation de la rétention.',
        },
        weight: 0.16,
      },
      {
        id: 'ins-ceo-capital-solvency',
        name: { es: 'Gestión de Capital y Solvencia', en: 'Capital Management & Solvency', fr: 'Gestion du Capital et Solvabilité' },
        description: {
          es: 'Capacidad para gestionar la estructura de capital, garantizar la solvencia de la compañía, optimizar el retorno sobre el capital y cumplir con los requisitos regulatorios de adecuación de capital.',
          en: 'Ability to manage capital structure, ensure company solvency, optimize return on capital, and comply with regulatory capital adequacy requirements.',
          fr: 'Capacité à gérer la structure du capital, assurer la solvabilité de l\'entreprise, optimiser le rendement du capital et se conformer aux exigences réglementaires d\'adéquation du capital.',
        },
        weight: 0.16,
      },
    ],
    order: 1,
  },
  {
    id: 'ins-ceo-soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales y de liderazgo estratégico esenciales para el CEO de una compañía de seguros, incluyendo gestión de directorio, liderazgo sectorial, gestión de crisis y desarrollo de cultura y talento.',
      en: 'Interpersonal and strategic leadership competencies essential for an insurance company CEO, including board management, industry leadership, crisis management, and culture and talent development.',
      fr: 'Compétences interpersonnelles et de leadership stratégique essentielles pour le PDG d\'une compagnie d\'assurances, y compris la gestion du conseil d\'administration, le leadership sectoriel, la gestion de crise et le développement de la culture et des talents.',
    },
    competencies: [
      {
        id: 'ins-ceo-board-management',
        name: { es: 'Gestión del Directorio y Partes Interesadas', en: 'Board & Stakeholder Management', fr: 'Gestion du Conseil d\'Administration et des Parties Prenantes' },
        description: {
          es: 'Habilidad para gestionar relaciones con el directorio, accionistas, reguladores y demás partes interesadas clave, asegurando alineación estratégica y confianza institucional.',
          en: 'Skill in managing relationships with the board, shareholders, regulators, and other key stakeholders, ensuring strategic alignment and institutional trust.',
          fr: 'Compétence dans la gestion des relations avec le conseil d\'administration, les actionnaires, les régulateurs et les autres parties prenantes clés, en assurant l\'alignement stratégique et la confiance institutionnelle.',
        },
        weight: 0.25,
      },
      {
        id: 'ins-ceo-industry-leadership',
        name: { es: 'Liderazgo y Representación Sectorial', en: 'Industry Leadership & Representation', fr: 'Leadership et Représentation Sectorielle' },
        description: {
          es: 'Capacidad para representar a la compañía ante asociaciones gremiales, foros internacionales, medios de comunicación y entidades gubernamentales, posicionándola como referente del sector.',
          en: 'Ability to represent the company before industry associations, international forums, media, and government entities, positioning it as a sector benchmark.',
          fr: 'Capacité à représenter l\'entreprise auprès des associations professionnelles, des forums internationaux, des médias et des entités gouvernementales, en la positionnant comme référence du secteur.',
        },
        weight: 0.25,
      },
      {
        id: 'ins-ceo-crisis-management',
        name: { es: 'Gestión de Crisis', en: 'Crisis Management', fr: 'Gestion de Crise' },
        description: {
          es: 'Capacidad para liderar la organización durante eventos catastróficos, crisis reputacionales, disrupciones operativas o crisis financieras, tomando decisiones rápidas y comunicando con transparencia.',
          en: 'Ability to lead the organization during catastrophic events, reputational crises, operational disruptions, or financial crises, making swift decisions and communicating transparently.',
          fr: 'Capacité à diriger l\'organisation lors d\'événements catastrophiques, de crises de réputation, de perturbations opérationnelles ou de crises financières, en prenant des décisions rapides et en communiquant avec transparence.',
        },
        weight: 0.25,
      },
      {
        id: 'ins-ceo-culture-talent',
        name: { es: 'Cultura Organizacional y Desarrollo de Talento', en: 'Organizational Culture & Talent Development', fr: 'Culture Organisationnelle et Développement des Talents' },
        description: {
          es: 'Habilidad para construir una cultura organizacional sólida, atraer y retener talento de primer nivel, fomentar la diversidad e inclusión, y desarrollar la próxima generación de líderes del sector asegurador.',
          en: 'Skill in building a strong organizational culture, attracting and retaining top talent, fostering diversity and inclusion, and developing the next generation of insurance sector leaders.',
          fr: 'Compétence dans la construction d\'une culture organisationnelle solide, l\'attraction et la rétention des meilleurs talents, la promotion de la diversité et de l\'inclusion, et le développement de la prochaine génération de leaders du secteur de l\'assurance.',
        },
        weight: 0.25,
      },
    ],
    order: 2,
  },
  {
    id: 'ins-ceo-readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación ante la transformación digital, riesgos climáticos y ESG, y la evolución hacia un modelo de negocio basado en datos en el sector asegurador.',
      en: 'Adaptability to digital transformation, climate risks and ESG, and the evolution toward a data-driven business model in the insurance sector.',
      fr: 'Adaptabilité à la transformation numérique, aux risques climatiques et ESG, et à l\'évolution vers un modèle d\'affaires axé sur les données dans le secteur de l\'assurance.',
    },
    competencies: [
      {
        id: 'ins-ceo-insurtech',
        name: { es: 'Insurtech y Transformación Digital', en: 'Insurtech & Digital Transformation', fr: 'Insurtech et Transformation Numérique' },
        description: {
          es: 'Disposición para liderar la adopción de tecnologías insurtech, automatización de procesos, plataformas digitales de distribución y nuevos modelos de negocio habilitados por la tecnología.',
          en: 'Willingness to lead the adoption of insurtech technologies, process automation, digital distribution platforms, and new technology-enabled business models.',
          fr: 'Volonté de diriger l\'adoption des technologies insurtech, l\'automatisation des processus, les plateformes de distribution numérique et les nouveaux modèles d\'affaires rendus possibles par la technologie.',
        },
        weight: 0.35,
      },
      {
        id: 'ins-ceo-climate-esg',
        name: { es: 'Riesgo Climático y ESG', en: 'Climate Risk & ESG', fr: 'Risque Climatique et ESG' },
        description: {
          es: 'Capacidad para integrar criterios ESG en la estrategia corporativa, evaluar el impacto del cambio climático en el negocio asegurador y desarrollar productos sostenibles.',
          en: 'Ability to integrate ESG criteria into corporate strategy, assess the impact of climate change on the insurance business, and develop sustainable products.',
          fr: 'Capacité à intégrer les critères ESG dans la stratégie d\'entreprise, évaluer l\'impact du changement climatique sur l\'activité d\'assurance et développer des produits durables.',
        },
        weight: 0.35,
      },
      {
        id: 'ins-ceo-data-driven',
        name: { es: 'Toma de Decisiones Basada en Datos', en: 'Data-Driven Decision Making', fr: 'Prise de Décision Basée sur les Données' },
        description: {
          es: 'Disposición para impulsar una cultura de analítica avanzada, inteligencia artificial y ciencia de datos para fundamentar decisiones estratégicas, mejorar la experiencia del cliente y optimizar operaciones.',
          en: 'Willingness to drive a culture of advanced analytics, artificial intelligence, and data science to inform strategic decisions, improve customer experience, and optimize operations.',
          fr: 'Volonté de promouvoir une culture d\'analytique avancée, d\'intelligence artificielle et de science des données pour éclairer les décisions stratégiques, améliorer l\'expérience client et optimiser les opérations.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },

  // ============================================================================
  // INSURANCE BROKER CEO CATEGORIES
  // ============================================================================
  {
    id: 'ins-broker-professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Competencias técnicas y estratégicas requeridas para dirigir una empresa de corretaje de seguros, incluyendo estrategia de negocio, gestión de cartera, relaciones con aseguradoras, análisis de mercado, diversificación y cumplimiento.',
      en: 'Technical and strategic competencies required to lead an insurance brokerage firm, including business strategy, portfolio management, carrier relationships, market analysis, diversification, and compliance.',
      fr: 'Compétences techniques et stratégiques requises pour diriger une société de courtage en assurances, y compris la stratégie d\'affaires, la gestion de portefeuille, les relations avec les assureurs, l\'analyse de marché, la diversification et la conformité.',
    },
    competencies: [
      {
        id: 'ins-broker-business-strategy',
        name: { es: 'Estrategia de Negocio de Corretaje', en: 'Brokerage Business Strategy', fr: 'Stratégie d\'Affaires de Courtage' },
        description: {
          es: 'Capacidad para diseñar y ejecutar la estrategia de negocio del corretaje, incluyendo posicionamiento de mercado, crecimiento orgánico e inorgánico, y diferenciación competitiva.',
          en: 'Ability to design and execute the brokerage business strategy, including market positioning, organic and inorganic growth, and competitive differentiation.',
          fr: 'Capacité à concevoir et exécuter la stratégie d\'affaires du courtage, y compris le positionnement sur le marché, la croissance organique et inorganique, et la différenciation concurrentielle.',
        },
        weight: 0.18,
      },
      {
        id: 'ins-broker-client-portfolio',
        name: { es: 'Gestión de Cartera de Clientes', en: 'Client Portfolio Management', fr: 'Gestion du Portefeuille Clients' },
        description: {
          es: 'Habilidad para gestionar y expandir la cartera de clientes, asegurando altos niveles de retención, cross-selling y satisfacción, con enfoque en clientes corporativos e institucionales.',
          en: 'Skill in managing and expanding the client portfolio, ensuring high retention rates, cross-selling, and satisfaction, with a focus on corporate and institutional clients.',
          fr: 'Compétence dans la gestion et l\'expansion du portefeuille clients, en assurant des taux de rétention élevés, des ventes croisées et la satisfaction, avec un accent sur les clients corporatifs et institutionnels.',
        },
        weight: 0.18,
      },
      {
        id: 'ins-broker-carrier-relations',
        name: { es: 'Gestión de Relaciones con Aseguradoras', en: 'Carrier Relationship Management', fr: 'Gestion des Relations avec les Assureurs' },
        description: {
          es: 'Capacidad para construir y mantener relaciones estratégicas con compañías aseguradoras, negociar condiciones preferenciales y asegurar acceso a los mejores productos y capacidades del mercado.',
          en: 'Ability to build and maintain strategic relationships with insurance carriers, negotiate preferential terms, and ensure access to the best products and market capacities.',
          fr: 'Capacité à construire et maintenir des relations stratégiques avec les compagnies d\'assurance, négocier des conditions préférentielles et assurer l\'accès aux meilleurs produits et capacités du marché.',
        },
        weight: 0.16,
      },
      {
        id: 'ins-broker-market-placement',
        name: { es: 'Análisis de Mercado y Colocación', en: 'Market Analysis & Placement', fr: 'Analyse de Marché et Placement' },
        description: {
          es: 'Habilidad para analizar condiciones del mercado asegurador, identificar las mejores opciones de colocación de riesgos y estructurar programas de seguros complejos para los clientes.',
          en: 'Skill in analyzing insurance market conditions, identifying optimal risk placement options, and structuring complex insurance programs for clients.',
          fr: 'Compétence dans l\'analyse des conditions du marché de l\'assurance, l\'identification des meilleures options de placement des risques et la structuration de programmes d\'assurance complexes pour les clients.',
        },
        weight: 0.16,
      },
      {
        id: 'ins-broker-revenue-diversification',
        name: { es: 'Diversificación de Ingresos', en: 'Revenue Diversification', fr: 'Diversification des Revenus' },
        description: {
          es: 'Capacidad para desarrollar fuentes de ingresos complementarias más allá de las comisiones tradicionales, incluyendo consultoría de riesgos, servicios de gestión de siniestros y soluciones tecnológicas.',
          en: 'Ability to develop complementary revenue streams beyond traditional commissions, including risk consulting, claims management services, and technology solutions.',
          fr: 'Capacité à développer des sources de revenus complémentaires au-delà des commissions traditionnelles, y compris le conseil en risques, les services de gestion des sinistres et les solutions technologiques.',
        },
        weight: 0.16,
      },
      {
        id: 'ins-broker-regulatory',
        name: { es: 'Cumplimiento Regulatorio para Corredores', en: 'Regulatory Compliance for Brokers', fr: 'Conformité Réglementaire pour les Courtiers' },
        description: {
          es: 'Conocimiento y cumplimiento del marco regulatorio aplicable a intermediarios de seguros, incluyendo licencias, obligaciones fiduciarias, prevención de lavado de activos y protección de datos.',
          en: 'Knowledge of and compliance with the regulatory framework applicable to insurance intermediaries, including licensing, fiduciary obligations, anti-money laundering, and data protection.',
          fr: 'Connaissance et conformité au cadre réglementaire applicable aux intermédiaires d\'assurance, y compris les licences, les obligations fiduciaires, la lutte contre le blanchiment d\'argent et la protection des données.',
        },
        weight: 0.16,
      },
    ],
    order: 1,
  },
  {
    id: 'ins-broker-soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales y de liderazgo esenciales para el CEO de una empresa de corretaje de seguros, incluyendo liderazgo consultivo, desarrollo de equipos, negociación y presencia en la industria.',
      en: 'Interpersonal and leadership competencies essential for an insurance brokerage CEO, including advisory leadership, team development, negotiation, and industry presence.',
      fr: 'Compétences interpersonnelles et de leadership essentielles pour le PDG d\'une société de courtage en assurances, y compris le leadership consultatif, le développement des équipes, la négociation et la présence sectorielle.',
    },
    competencies: [
      {
        id: 'ins-broker-advisory-leadership',
        name: { es: 'Liderazgo Consultivo al Cliente', en: 'Client Advisory Leadership', fr: 'Leadership Consultatif Client' },
        description: {
          es: 'Capacidad para posicionarse como asesor de confianza de los clientes, ofreciendo soluciones integrales de gestión de riesgos que trasciendan la simple colocación de pólizas.',
          en: 'Ability to position oneself as a trusted client advisor, offering comprehensive risk management solutions that go beyond simple policy placement.',
          fr: 'Capacité à se positionner comme conseiller de confiance des clients, en offrant des solutions complètes de gestion des risques qui dépassent le simple placement de polices.',
        },
        weight: 0.25,
      },
      {
        id: 'ins-broker-team-building',
        name: { es: 'Desarrollo y Retención de Equipos', en: 'Team Building & Retention', fr: 'Développement et Rétention des Équipes' },
        description: {
          es: 'Habilidad para construir, desarrollar y retener equipos de alto desempeño en un mercado competitivo por talento especializado en seguros y gestión de riesgos.',
          en: 'Skill in building, developing, and retaining high-performance teams in a competitive market for specialized insurance and risk management talent.',
          fr: 'Compétence dans la construction, le développement et la rétention d\'équipes de haute performance dans un marché concurrentiel pour les talents spécialisés en assurance et gestion des risques.',
        },
        weight: 0.25,
      },
      {
        id: 'ins-broker-negotiation',
        name: { es: 'Negociación e Influencia', en: 'Negotiation & Influence', fr: 'Négociation et Influence' },
        description: {
          es: 'Capacidad para negociar condiciones favorables con aseguradoras en nombre de los clientes, influir en decisiones de suscripción y obtener términos competitivos en el mercado.',
          en: 'Ability to negotiate favorable terms with carriers on behalf of clients, influence underwriting decisions, and obtain competitive market terms.',
          fr: 'Capacité à négocier des conditions favorables avec les assureurs au nom des clients, influencer les décisions de souscription et obtenir des conditions concurrentielles sur le marché.',
        },
        weight: 0.25,
      },
      {
        id: 'ins-broker-networking',
        name: { es: 'Networking y Presencia en la Industria', en: 'Networking & Industry Presence', fr: 'Réseautage et Présence dans l\'Industrie' },
        description: {
          es: 'Habilidad para construir una red de contactos influyente en el sector asegurador, participar activamente en asociaciones gremiales y posicionar la marca del corretaje a nivel nacional e internacional.',
          en: 'Skill in building an influential network of contacts in the insurance sector, actively participating in industry associations, and positioning the brokerage brand nationally and internationally.',
          fr: 'Compétence dans la construction d\'un réseau de contacts influent dans le secteur de l\'assurance, la participation active aux associations professionnelles et le positionnement de la marque du courtage au niveau national et international.',
        },
        weight: 0.25,
      },
    ],
    order: 2,
  },
  {
    id: 'ins-broker-readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación ante la distribución digital, analítica de datos y desarrollo de nuevos productos y mercados en el sector de intermediación de seguros.',
      en: 'Adaptability to digital distribution, data analytics, and new product and market development in the insurance intermediation sector.',
      fr: 'Adaptabilité à la distribution numérique, à l\'analytique de données et au développement de nouveaux produits et marchés dans le secteur de l\'intermédiation en assurance.',
    },
    competencies: [
      {
        id: 'ins-broker-digital-distribution',
        name: { es: 'Distribución Digital y Plataformas', en: 'Digital Distribution & Platforms', fr: 'Distribution Numérique et Plateformes' },
        description: {
          es: 'Disposición para adoptar plataformas digitales de distribución, comparadores de seguros, portales de autoservicio para clientes y herramientas de cotización automatizada.',
          en: 'Willingness to adopt digital distribution platforms, insurance comparators, client self-service portals, and automated quoting tools.',
          fr: 'Volonté d\'adopter des plateformes de distribution numérique, des comparateurs d\'assurance, des portails en libre-service pour les clients et des outils de cotation automatisée.',
        },
        weight: 0.35,
      },
      {
        id: 'ins-broker-data-analytics',
        name: { es: 'Analítica de Datos e Insights de Clientes', en: 'Data Analytics & Client Insights', fr: 'Analytique de Données et Insights Clients' },
        description: {
          es: 'Capacidad para aprovechar la analítica de datos para comprender mejor las necesidades de los clientes, predecir renovaciones, identificar oportunidades de venta cruzada y mejorar la retención.',
          en: 'Ability to leverage data analytics to better understand client needs, predict renewals, identify cross-selling opportunities, and improve retention.',
          fr: 'Capacité à exploiter l\'analytique de données pour mieux comprendre les besoins des clients, prédire les renouvellements, identifier les opportunités de vente croisée et améliorer la rétention.',
        },
        weight: 0.35,
      },
      {
        id: 'ins-broker-new-markets',
        name: { es: 'Desarrollo de Nuevos Productos y Mercados', en: 'New Product & Market Development', fr: 'Développement de Nouveaux Produits et Marchés' },
        description: {
          es: 'Disposición para explorar nuevos segmentos de mercado, desarrollar soluciones innovadoras de seguros y expandir la oferta hacia riesgos emergentes como ciberseguros, seguros paramétricos y microinsurance.',
          en: 'Willingness to explore new market segments, develop innovative insurance solutions, and expand offerings toward emerging risks such as cyber insurance, parametric insurance, and microinsurance.',
          fr: 'Volonté d\'explorer de nouveaux segments de marché, développer des solutions d\'assurance innovantes et étendre l\'offre vers les risques émergents tels que la cyberassurance, l\'assurance paramétrique et la micro-assurance.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },

  // ============================================================================
  // INSURANCE CRO (CHIEF RISK OFFICER) CATEGORIES
  // ============================================================================
  {
    id: 'ins-cro-professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Competencias técnicas y estratégicas de gestión de riesgos requeridas para un Director de Riesgos en el sector asegurador, incluyendo ERM, solvencia, modelización de catástrofes, riesgo operacional, inversiones y cumplimiento regulatorio.',
      en: 'Technical and strategic risk management competencies required for a CRO in the insurance sector, including ERM, solvency, catastrophe modeling, operational risk, investments, and regulatory compliance.',
      fr: 'Compétences techniques et stratégiques de gestion des risques requises pour un Directeur des Risques dans le secteur de l\'assurance, y compris l\'ERM, la solvabilité, la modélisation des catastrophes, le risque opérationnel, les investissements et la conformité réglementaire.',
    },
    competencies: [
      {
        id: 'ins-cro-erm-framework',
        name: { es: 'Marco de Gestión de Riesgos Empresariales', en: 'Enterprise Risk Management Framework', fr: 'Cadre de Gestion des Risques d\'Entreprise' },
        description: {
          es: 'Capacidad para diseñar, implementar y supervisar un marco integral de gestión de riesgos empresariales (ERM) que abarque todos los tipos de riesgo y se alinee con la estrategia corporativa.',
          en: 'Ability to design, implement, and oversee a comprehensive enterprise risk management (ERM) framework encompassing all risk types and aligned with corporate strategy.',
          fr: 'Capacité à concevoir, mettre en œuvre et superviser un cadre complet de gestion des risques d\'entreprise (ERM) englobant tous les types de risques et aligné sur la stratégie d\'entreprise.',
        },
        weight: 0.18,
      },
      {
        id: 'ins-cro-solvency',
        name: { es: 'Solvencia y Adecuación de Capital', en: 'Solvency & Capital Adequacy', fr: 'Solvabilité et Adéquation du Capital' },
        description: {
          es: 'Dominio de los marcos regulatorios de solvencia (Solvencia II, ORSA, RBC), incluyendo cálculo de requerimientos de capital, evaluación interna de riesgos y solvencia, y gestión del ratio de solvencia.',
          en: 'Mastery of solvency regulatory frameworks (Solvency II, ORSA, RBC), including capital requirement calculations, own risk and solvency assessment, and solvency ratio management.',
          fr: 'Maîtrise des cadres réglementaires de solvabilité (Solvabilité II, ORSA, RBC), y compris le calcul des exigences de capital, l\'évaluation interne des risques et de la solvabilité, et la gestion du ratio de solvabilité.',
        },
        weight: 0.18,
      },
      {
        id: 'ins-cro-cat-modeling',
        name: { es: 'Modelización de Catástrofes y Riesgo Natural', en: 'Catastrophe Modeling & Nat-Cat Risk', fr: 'Modélisation des Catastrophes et Risque Naturel' },
        description: {
          es: 'Habilidad para utilizar e interpretar modelos de catástrofes naturales, evaluar la exposición a eventos catastróficos y diseñar estrategias de mitigación y transferencia de riesgo.',
          en: 'Skill in using and interpreting natural catastrophe models, assessing exposure to catastrophic events, and designing risk mitigation and transfer strategies.',
          fr: 'Compétence dans l\'utilisation et l\'interprétation des modèles de catastrophes naturelles, l\'évaluation de l\'exposition aux événements catastrophiques et la conception de stratégies d\'atténuation et de transfert des risques.',
        },
        weight: 0.16,
      },
      {
        id: 'ins-cro-operational-risk',
        name: { es: 'Gestión de Riesgo Operacional', en: 'Operational Risk Management', fr: 'Gestion du Risque Opérationnel' },
        description: {
          es: 'Capacidad para identificar, medir y mitigar riesgos operacionales, incluyendo fraude, fallas de procesos, riesgo tecnológico, continuidad del negocio y riesgo de terceros.',
          en: 'Ability to identify, measure, and mitigate operational risks, including fraud, process failures, technology risk, business continuity, and third-party risk.',
          fr: 'Capacité à identifier, mesurer et atténuer les risques opérationnels, y compris la fraude, les défaillances de processus, le risque technologique, la continuité des activités et le risque lié aux tiers.',
        },
        weight: 0.16,
      },
      {
        id: 'ins-cro-investment-risk',
        name: { es: 'Supervisión de Riesgo de Inversión', en: 'Investment Risk Oversight', fr: 'Supervision du Risque d\'Investissement' },
        description: {
          es: 'Habilidad para supervisar y gestionar los riesgos asociados al portafolio de inversiones de la aseguradora, incluyendo riesgo de mercado, crediticio, de liquidez y de concentración.',
          en: 'Skill in overseeing and managing risks associated with the insurer\'s investment portfolio, including market, credit, liquidity, and concentration risk.',
          fr: 'Compétence dans la supervision et la gestion des risques associés au portefeuille d\'investissements de l\'assureur, y compris le risque de marché, de crédit, de liquidité et de concentration.',
        },
        weight: 0.16,
      },
      {
        id: 'ins-cro-regulatory-risk',
        name: { es: 'Riesgo Regulatorio y Cumplimiento', en: 'Regulatory Risk & Compliance', fr: 'Risque Réglementaire et Conformité' },
        description: {
          es: 'Capacidad para anticipar y gestionar riesgos regulatorios, asegurar el cumplimiento normativo, y mantener relaciones constructivas con los entes supervisores del sector asegurador.',
          en: 'Ability to anticipate and manage regulatory risks, ensure regulatory compliance, and maintain constructive relationships with insurance sector supervisory bodies.',
          fr: 'Capacité à anticiper et gérer les risques réglementaires, assurer la conformité réglementaire et maintenir des relations constructives avec les organismes de supervision du secteur de l\'assurance.',
        },
        weight: 0.16,
      },
    ],
    order: 1,
  },
  {
    id: 'ins-cro-soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales y de liderazgo esenciales para un Director de Riesgos, incluyendo evangelización de cultura de riesgos, reportes al directorio, colaboración interfuncional y liderazgo en crisis.',
      en: 'Interpersonal and leadership competencies essential for a CRO, including risk culture evangelism, board reporting, cross-functional collaboration, and crisis leadership.',
      fr: 'Compétences interpersonnelles et de leadership essentielles pour un Directeur des Risques, y compris l\'évangélisation de la culture du risque, les rapports au conseil d\'administration, la collaboration interfonctionnelle et le leadership en situation de crise.',
    },
    competencies: [
      {
        id: 'ins-cro-risk-culture',
        name: { es: 'Evangelización de Cultura de Riesgos', en: 'Risk Culture Evangelism', fr: 'Évangélisation de la Culture du Risque' },
        description: {
          es: 'Capacidad para fomentar una cultura organizacional donde la gestión de riesgos sea responsabilidad de todos, promoviendo la conciencia y el comportamiento prudente en todos los niveles.',
          en: 'Ability to foster an organizational culture where risk management is everyone\'s responsibility, promoting awareness and prudent behavior at all levels.',
          fr: 'Capacité à promouvoir une culture organisationnelle où la gestion des risques est la responsabilité de tous, en favorisant la sensibilisation et un comportement prudent à tous les niveaux.',
        },
        weight: 0.25,
      },
      {
        id: 'ins-cro-board-reporting',
        name: { es: 'Reportes de Riesgo al Directorio', en: 'Board Risk Reporting', fr: 'Rapports de Risque au Conseil d\'Administration' },
        description: {
          es: 'Habilidad para comunicar información compleja de riesgos de manera clara, concisa y accionable al directorio y la alta dirección, facilitando la toma de decisiones informada.',
          en: 'Skill in communicating complex risk information clearly, concisely, and actionably to the board and senior management, facilitating informed decision-making.',
          fr: 'Compétence dans la communication d\'informations complexes sur les risques de manière claire, concise et exploitable au conseil d\'administration et à la direction générale, facilitant la prise de décision éclairée.',
        },
        weight: 0.25,
      },
      {
        id: 'ins-cro-cross-functional',
        name: { es: 'Colaboración Interfuncional', en: 'Cross-Functional Collaboration', fr: 'Collaboration Interfonctionnelle' },
        description: {
          es: 'Capacidad para trabajar eficazmente con suscripción, actuaría, inversiones, operaciones y tecnología, integrando la perspectiva de riesgos en todas las decisiones de negocio.',
          en: 'Ability to work effectively with underwriting, actuarial, investments, operations, and technology, integrating the risk perspective into all business decisions.',
          fr: 'Capacité à travailler efficacement avec la souscription, l\'actuariat, les investissements, les opérations et la technologie, en intégrant la perspective des risques dans toutes les décisions commerciales.',
        },
        weight: 0.25,
      },
      {
        id: 'ins-cro-crisis-leadership',
        name: { es: 'Liderazgo en Crisis', en: 'Crisis Leadership', fr: 'Leadership en Situation de Crise' },
        description: {
          es: 'Habilidad para liderar la respuesta organizacional ante eventos de riesgo materializados, coordinando equipos multidisciplinarios, comunicando con claridad y ejecutando planes de contingencia.',
          en: 'Skill in leading the organizational response to materialized risk events, coordinating multidisciplinary teams, communicating clearly, and executing contingency plans.',
          fr: 'Compétence dans la conduite de la réponse organisationnelle aux événements de risque matérialisés, la coordination d\'équipes multidisciplinaires, la communication claire et l\'exécution de plans de contingence.',
        },
        weight: 0.25,
      },
    ],
    order: 2,
  },
  {
    id: 'ins-cro-readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación ante riesgos emergentes, nuevas tecnologías de analítica de riesgos y evolución de las metodologías de planificación de escenarios en el sector asegurador.',
      en: 'Adaptability to emerging risks, new risk analytics technologies, and evolving scenario planning methodologies in the insurance sector.',
      fr: 'Adaptabilité aux risques émergents, aux nouvelles technologies d\'analytique des risques et à l\'évolution des méthodologies de planification de scénarios dans le secteur de l\'assurance.',
    },
    competencies: [
      {
        id: 'ins-cro-emerging-risks',
        name: { es: 'Riesgos Emergentes (Ciber, Clima, Pandemia)', en: 'Emerging Risks (Cyber, Climate, Pandemic)', fr: 'Risques Émergents (Cyber, Climat, Pandémie)' },
        description: {
          es: 'Disposición para identificar, evaluar y desarrollar respuestas ante riesgos emergentes como ciberataques, cambio climático, pandemias, inteligencia artificial y riesgos geopolíticos.',
          en: 'Willingness to identify, assess, and develop responses to emerging risks such as cyberattacks, climate change, pandemics, artificial intelligence, and geopolitical risks.',
          fr: 'Volonté d\'identifier, évaluer et développer des réponses aux risques émergents tels que les cyberattaques, le changement climatique, les pandémies, l\'intelligence artificielle et les risques géopolitiques.',
        },
        weight: 0.35,
      },
      {
        id: 'ins-cro-risk-analytics',
        name: { es: 'Analítica de Riesgos e IA', en: 'Risk Analytics & AI', fr: 'Analytique des Risques et IA' },
        description: {
          es: 'Capacidad para adoptar herramientas avanzadas de analítica de riesgos, inteligencia artificial y machine learning para mejorar la identificación, medición y monitoreo de riesgos.',
          en: 'Ability to adopt advanced risk analytics tools, artificial intelligence, and machine learning to improve risk identification, measurement, and monitoring.',
          fr: 'Capacité à adopter des outils avancés d\'analytique des risques, d\'intelligence artificielle et d\'apprentissage automatique pour améliorer l\'identification, la mesure et le suivi des risques.',
        },
        weight: 0.35,
      },
      {
        id: 'ins-cro-scenario-planning',
        name: { es: 'Planificación de Escenarios y Pruebas de Estrés', en: 'Scenario Planning & Stress Testing', fr: 'Planification de Scénarios et Tests de Résistance' },
        description: {
          es: 'Disposición para desarrollar y ejecutar ejercicios de planificación de escenarios, pruebas de estrés y análisis de sensibilidad que fortalezcan la resiliencia organizacional.',
          en: 'Willingness to develop and execute scenario planning exercises, stress tests, and sensitivity analyses that strengthen organizational resilience.',
          fr: 'Volonté de développer et exécuter des exercices de planification de scénarios, des tests de résistance et des analyses de sensibilité qui renforcent la résilience organisationnelle.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },

  // ============================================================================
  // INSURANCE CUO (CHIEF UNDERWRITING OFFICER) CATEGORIES
  // ============================================================================
  {
    id: 'ins-cuo-professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Competencias técnicas y estratégicas de suscripción requeridas para un Director de Suscripción, incluyendo estrategia de suscripción, rentabilidad del portafolio, pricing, selección de riesgos, reaseguro y reservas técnicas.',
      en: 'Technical and strategic underwriting competencies required for a CUO, including underwriting strategy, portfolio profitability, pricing, risk selection, reinsurance, and technical reserving.',
      fr: 'Compétences techniques et stratégiques de souscription requises pour un Directeur de la Souscription, y compris la stratégie de souscription, la rentabilité du portefeuille, la tarification, la sélection des risques, la réassurance et les réserves techniques.',
    },
    competencies: [
      {
        id: 'ins-cuo-strategy',
        name: { es: 'Estrategia y Filosofía de Suscripción', en: 'Underwriting Strategy & Philosophy', fr: 'Stratégie et Philosophie de Souscription' },
        description: {
          es: 'Capacidad para definir y comunicar la filosofía de suscripción de la compañía, estableciendo guías claras de apetito de riesgo, criterios de aceptación y estándares de calidad.',
          en: 'Ability to define and communicate the company\'s underwriting philosophy, establishing clear risk appetite guidelines, acceptance criteria, and quality standards.',
          fr: 'Capacité à définir et communiquer la philosophie de souscription de l\'entreprise, en établissant des directives claires d\'appétit pour le risque, des critères d\'acceptation et des normes de qualité.',
        },
        weight: 0.18,
      },
      {
        id: 'ins-cuo-portfolio-profitability',
        name: { es: 'Gestión de Rentabilidad del Portafolio', en: 'Portfolio Profitability Management', fr: 'Gestion de la Rentabilité du Portefeuille' },
        description: {
          es: 'Habilidad para analizar, monitorear y optimizar la rentabilidad del portafolio de suscripción, identificando líneas de negocio rentables y tomando acciones correctivas en segmentos con bajo desempeño.',
          en: 'Skill in analyzing, monitoring, and optimizing the underwriting portfolio profitability, identifying profitable lines of business and taking corrective actions on underperforming segments.',
          fr: 'Compétence dans l\'analyse, le suivi et l\'optimisation de la rentabilité du portefeuille de souscription, l\'identification des lignes d\'activité rentables et la prise de mesures correctives sur les segments sous-performants.',
        },
        weight: 0.18,
      },
      {
        id: 'ins-cuo-pricing',
        name: { es: 'Pricing y Adecuación de Tarifas', en: 'Pricing & Rate Adequacy', fr: 'Tarification et Adéquation des Taux' },
        description: {
          es: 'Capacidad para supervisar la tarificación técnica, asegurar la adecuación de primas, evaluar la suficiencia de tasas y ajustar precios según las condiciones del mercado y la experiencia siniestral.',
          en: 'Ability to oversee technical pricing, ensure premium adequacy, evaluate rate sufficiency, and adjust prices based on market conditions and loss experience.',
          fr: 'Capacité à superviser la tarification technique, assurer l\'adéquation des primes, évaluer la suffisance des taux et ajuster les prix en fonction des conditions du marché et de l\'expérience sinistre.',
        },
        weight: 0.16,
      },
      {
        id: 'ins-cuo-risk-selection',
        name: { es: 'Selección de Riesgos y Apetito de Riesgo', en: 'Risk Selection & Appetite', fr: 'Sélection des Risques et Appétit pour le Risque' },
        description: {
          es: 'Habilidad para definir y aplicar criterios rigurosos de selección de riesgos, gestionando el apetito de riesgo de la compañía y asegurando una cartera diversificada y equilibrada.',
          en: 'Skill in defining and applying rigorous risk selection criteria, managing the company\'s risk appetite, and ensuring a diversified and balanced portfolio.',
          fr: 'Compétence dans la définition et l\'application de critères rigoureux de sélection des risques, la gestion de l\'appétit pour le risque de l\'entreprise et la garantie d\'un portefeuille diversifié et équilibré.',
        },
        weight: 0.16,
      },
      {
        id: 'ins-cuo-reinsurance',
        name: { es: 'Optimización del Reaseguro', en: 'Reinsurance Optimization', fr: 'Optimisation de la Réassurance' },
        description: {
          es: 'Capacidad para diseñar y optimizar el programa de reaseguro, negociar con reaseguradores, y asegurar una protección adecuada que maximice la capacidad de suscripción.',
          en: 'Ability to design and optimize the reinsurance program, negotiate with reinsurers, and ensure adequate protection that maximizes underwriting capacity.',
          fr: 'Capacité à concevoir et optimiser le programme de réassurance, négocier avec les réassureurs et assurer une protection adéquate qui maximise la capacité de souscription.',
        },
        weight: 0.16,
      },
      {
        id: 'ins-cuo-reserving',
        name: { es: 'Supervisión de Reservas Técnicas', en: 'Technical Reserving Oversight', fr: 'Supervision des Réserves Techniques' },
        description: {
          es: 'Habilidad para supervisar la constitución y adecuación de reservas técnicas, asegurando que reflejen adecuadamente las obligaciones futuras y cumplan con los requisitos regulatorios.',
          en: 'Skill in overseeing the establishment and adequacy of technical reserves, ensuring they adequately reflect future obligations and comply with regulatory requirements.',
          fr: 'Compétence dans la supervision de la constitution et de l\'adéquation des réserves techniques, en s\'assurant qu\'elles reflètent adéquatement les obligations futures et respectent les exigences réglementaires.',
        },
        weight: 0.16,
      },
    ],
    order: 1,
  },
  {
    id: 'ins-cuo-soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales y de liderazgo esenciales para un Director de Suscripción, incluyendo desarrollo de suscriptores, relaciones con intermediarios, comunicación ejecutiva y storytelling de datos.',
      en: 'Interpersonal and leadership competencies essential for a CUO, including underwriter development, intermediary relationships, executive communication, and data storytelling.',
      fr: 'Compétences interpersonnelles et de leadership essentielles pour un Directeur de la Souscription, y compris le développement des souscripteurs, les relations avec les intermédiaires, la communication exécutive et le storytelling de données.',
    },
    competencies: [
      {
        id: 'ins-cuo-mentoring',
        name: { es: 'Desarrollo y Mentoría de Suscriptores', en: 'Underwriter Development & Mentoring', fr: 'Développement et Mentorat des Souscripteurs' },
        description: {
          es: 'Capacidad para desarrollar el talento de suscripción, transferir conocimiento técnico, establecer estándares de formación y crear programas de mentoría que fortalezcan las capacidades del equipo.',
          en: 'Ability to develop underwriting talent, transfer technical knowledge, establish training standards, and create mentoring programs that strengthen team capabilities.',
          fr: 'Capacité à développer les talents de souscription, transférer les connaissances techniques, établir des normes de formation et créer des programmes de mentorat qui renforcent les capacités de l\'équipe.',
        },
        weight: 0.25,
      },
      {
        id: 'ins-cuo-broker-relations',
        name: { es: 'Gestión de Relaciones con Corredores y Agentes', en: 'Broker/Agent Relationship Management', fr: 'Gestion des Relations avec les Courtiers et Agents' },
        description: {
          es: 'Habilidad para construir y mantener relaciones productivas con corredores y agentes de seguros, equilibrando las necesidades comerciales con la disciplina técnica de suscripción.',
          en: 'Skill in building and maintaining productive relationships with insurance brokers and agents, balancing commercial needs with technical underwriting discipline.',
          fr: 'Compétence dans la construction et le maintien de relations productives avec les courtiers et agents d\'assurance, en équilibrant les besoins commerciaux avec la discipline technique de souscription.',
        },
        weight: 0.25,
      },
      {
        id: 'ins-cuo-exec-communication',
        name: { es: 'Comunicación Ejecutiva', en: 'Executive Communication', fr: 'Communication Exécutive' },
        description: {
          es: 'Capacidad para comunicar estrategias, resultados y desafíos de suscripción de manera clara y persuasiva al comité ejecutivo, directorio y partes interesadas clave.',
          en: 'Ability to communicate underwriting strategies, results, and challenges clearly and persuasively to the executive committee, board, and key stakeholders.',
          fr: 'Capacité à communiquer les stratégies, résultats et défis de souscription de manière claire et persuasive au comité exécutif, au conseil d\'administration et aux parties prenantes clés.',
        },
        weight: 0.25,
      },
      {
        id: 'ins-cuo-data-storytelling',
        name: { es: 'Storytelling de Datos', en: 'Data Storytelling', fr: 'Storytelling de Données' },
        description: {
          es: 'Habilidad para transformar datos complejos de suscripción y siniestralidad en narrativas comprensibles y accionables que faciliten la toma de decisiones a todos los niveles.',
          en: 'Skill in transforming complex underwriting and loss data into comprehensible and actionable narratives that facilitate decision-making at all levels.',
          fr: 'Compétence dans la transformation de données complexes de souscription et de sinistralité en récits compréhensibles et exploitables qui facilitent la prise de décision à tous les niveaux.',
        },
        weight: 0.25,
      },
    ],
    order: 2,
  },
  {
    id: 'ins-cuo-readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación ante la suscripción predictiva, nuevos modelos de seguros y la necesidad de ajustar la suscripción al cambio climático.',
      en: 'Adaptability to predictive underwriting, new insurance models, and the need to adjust underwriting to climate change.',
      fr: 'Adaptabilité à la souscription prédictive, aux nouveaux modèles d\'assurance et à la nécessité d\'ajuster la souscription au changement climatique.',
    },
    competencies: [
      {
        id: 'ins-cuo-predictive-uw',
        name: { es: 'Suscripción Predictiva e IA', en: 'Predictive Underwriting & AI', fr: 'Souscription Prédictive et IA' },
        description: {
          es: 'Disposición para integrar modelos predictivos, inteligencia artificial y machine learning en los procesos de suscripción, mejorando la precisión en la selección y tarificación de riesgos.',
          en: 'Willingness to integrate predictive models, artificial intelligence, and machine learning into underwriting processes, improving accuracy in risk selection and pricing.',
          fr: 'Volonté d\'intégrer des modèles prédictifs, l\'intelligence artificielle et l\'apprentissage automatique dans les processus de souscription, améliorant la précision dans la sélection et la tarification des risques.',
        },
        weight: 0.35,
      },
      {
        id: 'ins-cuo-parametric-embedded',
        name: { es: 'Seguros Paramétricos y Embebidos', en: 'Parametric & Embedded Insurance', fr: 'Assurances Paramétriques et Intégrées' },
        description: {
          es: 'Capacidad para evaluar y desarrollar productos de seguros paramétricos basados en índices, así como seguros embebidos integrados en plataformas y ecosistemas digitales.',
          en: 'Ability to evaluate and develop index-based parametric insurance products, as well as embedded insurance integrated into digital platforms and ecosystems.',
          fr: 'Capacité à évaluer et développer des produits d\'assurance paramétrique basés sur des indices, ainsi que des assurances intégrées dans des plateformes et écosystèmes numériques.',
        },
        weight: 0.35,
      },
      {
        id: 'ins-cuo-climate-uw',
        name: { es: 'Suscripción Ajustada al Clima', en: 'Climate-Adjusted Underwriting', fr: 'Souscription Ajustée au Climat' },
        description: {
          es: 'Disposición para incorporar escenarios de cambio climático en los modelos de suscripción, ajustar tarifas y condiciones según proyecciones climáticas y desarrollar coberturas para riesgos climáticos emergentes.',
          en: 'Willingness to incorporate climate change scenarios into underwriting models, adjust rates and conditions based on climate projections, and develop coverages for emerging climate risks.',
          fr: 'Volonté d\'incorporer des scénarios de changement climatique dans les modèles de souscription, d\'ajuster les taux et les conditions en fonction des projections climatiques et de développer des couvertures pour les risques climatiques émergents.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },

  // ============================================================================
  // INSURANCE CHIEF ACTUARY CATEGORIES
  // ============================================================================
  {
    id: 'ins-actuary-professional',
    name: {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
    },
    description: {
      es: 'Competencias técnicas y estratégicas actuariales requeridas para un Actuario Jefe, incluyendo tarificación, reservas, modelización de capital, reaseguro, NIIF 17 y estudios de experiencia.',
      en: 'Technical and strategic actuarial competencies required for a Chief Actuary, including pricing, reserving, capital modeling, reinsurance, IFRS 17, and experience studies.',
      fr: 'Compétences techniques et stratégiques actuarielles requises pour un Actuaire en Chef, y compris la tarification, les réserves, la modélisation du capital, la réassurance, l\'IFRS 17 et les études d\'expérience.',
    },
    competencies: [
      {
        id: 'ins-actuary-pricing',
        name: { es: 'Tarificación y Pricing', en: 'Pricing & Tarification', fr: 'Tarification et Pricing' },
        description: {
          es: 'Dominio de las metodologías actuariales de tarificación, incluyendo análisis de frecuencia y severidad, modelos GLM, credibilidad y ajuste de tarifas a las condiciones del mercado.',
          en: 'Mastery of actuarial pricing methodologies, including frequency and severity analysis, GLM models, credibility theory, and rate adjustments to market conditions.',
          fr: 'Maîtrise des méthodologies actuarielles de tarification, y compris l\'analyse de la fréquence et de la sévérité, les modèles GLM, la théorie de la crédibilité et l\'ajustement des tarifs aux conditions du marché.',
        },
        weight: 0.18,
      },
      {
        id: 'ins-actuary-reserving',
        name: { es: 'Reservas y Valoración de Pasivos', en: 'Reserving & Liability Valuation', fr: 'Réserves et Valorisation des Passifs' },
        description: {
          es: 'Habilidad para estimar y supervisar las reservas técnicas de la compañía utilizando métodos como Chain Ladder, Bornhuetter-Ferguson y análisis de siniestros individuales, asegurando adecuación y cumplimiento regulatorio.',
          en: 'Skill in estimating and overseeing the company\'s technical reserves using methods such as Chain Ladder, Bornhuetter-Ferguson, and individual claims analysis, ensuring adequacy and regulatory compliance.',
          fr: 'Compétence dans l\'estimation et la supervision des réserves techniques de l\'entreprise en utilisant des méthodes telles que Chain Ladder, Bornhuetter-Ferguson et l\'analyse individuelle des sinistres, en assurant l\'adéquation et la conformité réglementaire.',
        },
        weight: 0.18,
      },
      {
        id: 'ins-actuary-capital-modeling',
        name: { es: 'Modelización de Capital (Solvencia II/ORSA)', en: 'Capital Modeling (Solvency II/ORSA)', fr: 'Modélisation du Capital (Solvabilité II/ORSA)' },
        description: {
          es: 'Capacidad para desarrollar y mantener modelos internos de capital, calcular requerimientos de capital regulatorio bajo Solvencia II, y liderar el proceso de evaluación interna de riesgos y solvencia (ORSA).',
          en: 'Ability to develop and maintain internal capital models, calculate regulatory capital requirements under Solvency II, and lead the own risk and solvency assessment (ORSA) process.',
          fr: 'Capacité à développer et maintenir des modèles internes de capital, calculer les exigences de capital réglementaire sous Solvabilité II et diriger le processus d\'évaluation interne des risques et de la solvabilité (ORSA).',
        },
        weight: 0.16,
      },
      {
        id: 'ins-actuary-reinsurance',
        name: { es: 'Optimización del Reaseguro', en: 'Reinsurance Optimization', fr: 'Optimisation de la Réassurance' },
        description: {
          es: 'Habilidad para modelar y optimizar la estructura de reaseguro desde una perspectiva actuarial, evaluando el costo-beneficio de diferentes programas y su impacto en la volatilidad de resultados.',
          en: 'Skill in modeling and optimizing the reinsurance structure from an actuarial perspective, evaluating the cost-benefit of different programs and their impact on results volatility.',
          fr: 'Compétence dans la modélisation et l\'optimisation de la structure de réassurance d\'un point de vue actuariel, en évaluant le rapport coût-bénéfice des différents programmes et leur impact sur la volatilité des résultats.',
        },
        weight: 0.16,
      },
      {
        id: 'ins-actuary-ifrs17',
        name: { es: 'Cumplimiento NIIF 17', en: 'IFRS 17 Compliance', fr: 'Conformité IFRS 17' },
        description: {
          es: 'Dominio de la norma NIIF 17 de contratos de seguros, incluyendo modelos de medición (BBA, PAA, VFA), márgenes de servicio contractual, y la transición desde marcos contables anteriores.',
          en: 'Mastery of the IFRS 17 insurance contracts standard, including measurement models (BBA, PAA, VFA), contractual service margins, and the transition from previous accounting frameworks.',
          fr: 'Maîtrise de la norme IFRS 17 sur les contrats d\'assurance, y compris les modèles de mesure (BBA, PAA, VFA), les marges de service contractuelles et la transition depuis les cadres comptables précédents.',
        },
        weight: 0.16,
      },
      {
        id: 'ins-actuary-experience-studies',
        name: { es: 'Estudios de Experiencia y Tablas de Mortalidad/Morbilidad', en: 'Experience Studies & Mortality/Morbidity Tables', fr: 'Études d\'Expérience et Tables de Mortalité/Morbidité' },
        description: {
          es: 'Capacidad para realizar estudios de experiencia actuarial, desarrollar y ajustar tablas de mortalidad, morbilidad y persistencia, y aplicar los resultados a la tarificación y reservas.',
          en: 'Ability to conduct actuarial experience studies, develop and adjust mortality, morbidity, and persistency tables, and apply results to pricing and reserving.',
          fr: 'Capacité à réaliser des études d\'expérience actuarielle, développer et ajuster des tables de mortalité, morbidité et persistance, et appliquer les résultats à la tarification et aux réserves.',
        },
        weight: 0.16,
      },
    ],
    order: 1,
  },
  {
    id: 'ins-actuary-soft-skills',
    name: {
      es: 'Habilidades Blandas',
      en: 'Soft Skills',
      fr: 'Compétences Interpersonnelles',
    },
    description: {
      es: 'Competencias interpersonales y de liderazgo esenciales para un Actuario Jefe, incluyendo traducción de hallazgos técnicos, influencia interdepartamental, mentoría de equipos y relaciones con reguladores.',
      en: 'Interpersonal and leadership competencies essential for a Chief Actuary, including translating technical findings, cross-departmental influence, team mentoring, and regulatory relationships.',
      fr: 'Compétences interpersonnelles et de leadership essentielles pour un Actuaire en Chef, y compris la traduction des résultats techniques, l\'influence interdépartementale, le mentorat d\'équipes et les relations avec les régulateurs.',
    },
    competencies: [
      {
        id: 'ins-actuary-technical-translation',
        name: { es: 'Traducción de Hallazgos Técnicos para Ejecutivos', en: 'Translating Technical Findings for Executives', fr: 'Traduction des Résultats Techniques pour les Dirigeants' },
        description: {
          es: 'Capacidad para traducir análisis actuariales complejos en recomendaciones claras y accionables para la alta dirección, facilitando la comprensión de implicaciones financieras y de riesgo.',
          en: 'Ability to translate complex actuarial analyses into clear, actionable recommendations for senior management, facilitating understanding of financial and risk implications.',
          fr: 'Capacité à traduire des analyses actuarielles complexes en recommandations claires et exploitables pour la direction générale, facilitant la compréhension des implications financières et de risque.',
        },
        weight: 0.25,
      },
      {
        id: 'ins-actuary-cross-dept-influence',
        name: { es: 'Influencia Interdepartamental', en: 'Cross-Departmental Influence', fr: 'Influence Interdépartementale' },
        description: {
          es: 'Habilidad para influir en decisiones de suscripción, inversiones, productos y estrategia desde la perspectiva actuarial, construyendo credibilidad y relaciones de confianza con otras áreas.',
          en: 'Skill in influencing underwriting, investment, product, and strategy decisions from the actuarial perspective, building credibility and trust relationships with other departments.',
          fr: 'Compétence dans l\'influence des décisions de souscription, d\'investissement, de produits et de stratégie d\'un point de vue actuariel, en construisant la crédibilité et des relations de confiance avec les autres départements.',
        },
        weight: 0.25,
      },
      {
        id: 'ins-actuary-team-mentoring',
        name: { es: 'Mentoría de Equipos Actuariales', en: 'Mentoring Actuarial Teams', fr: 'Mentorat des Équipes Actuarielles' },
        description: {
          es: 'Capacidad para desarrollar, motivar y retener talento actuarial, fomentando el crecimiento profesional, la certificación y la innovación metodológica dentro del equipo.',
          en: 'Ability to develop, motivate, and retain actuarial talent, fostering professional growth, certification, and methodological innovation within the team.',
          fr: 'Capacité à développer, motiver et retenir les talents actuariels, en favorisant la croissance professionnelle, la certification et l\'innovation méthodologique au sein de l\'équipe.',
        },
        weight: 0.25,
      },
      {
        id: 'ins-actuary-regulatory-relations',
        name: { es: 'Gestión de Relaciones con Reguladores', en: 'Regulatory Relationship Management', fr: 'Gestion des Relations avec les Régulateurs' },
        description: {
          es: 'Habilidad para mantener relaciones constructivas con los entes reguladores, responder a requerimientos actuariales, participar en consultas regulatorias y representar a la compañía ante autoridades de supervisión.',
          en: 'Skill in maintaining constructive relationships with regulators, responding to actuarial requirements, participating in regulatory consultations, and representing the company before supervisory authorities.',
          fr: 'Compétence dans le maintien de relations constructives avec les régulateurs, la réponse aux exigences actuarielles, la participation aux consultations réglementaires et la représentation de l\'entreprise auprès des autorités de supervision.',
        },
        weight: 0.25,
      },
    ],
    order: 2,
  },
  {
    id: 'ins-actuary-readiness',
    name: {
      es: 'Disposición al Cambio',
      en: 'Readiness for Change',
      fr: 'Disposition au Changement',
    },
    description: {
      es: 'Capacidad de adaptación ante el aprendizaje automático en ciencias actuariales, la modelización de riesgo climático y la evolución hacia el pricing en tiempo real y la telemática.',
      en: 'Adaptability to machine learning in actuarial science, climate risk modeling, and the evolution toward real-time pricing and telematics.',
      fr: 'Adaptabilité à l\'apprentissage automatique en sciences actuarielles, à la modélisation du risque climatique et à l\'évolution vers la tarification en temps réel et la télématique.',
    },
    competencies: [
      {
        id: 'ins-actuary-ml',
        name: { es: 'Aprendizaje Automático en Ciencias Actuariales', en: 'Machine Learning in Actuarial Science', fr: 'Apprentissage Automatique en Sciences Actuarielles' },
        description: {
          es: 'Disposición para integrar técnicas de machine learning y ciencia de datos en los procesos actuariales tradicionales, mejorando la precisión predictiva y automatizando análisis repetitivos.',
          en: 'Willingness to integrate machine learning and data science techniques into traditional actuarial processes, improving predictive accuracy and automating repetitive analyses.',
          fr: 'Volonté d\'intégrer les techniques d\'apprentissage automatique et de science des données dans les processus actuariels traditionnels, améliorant la précision prédictive et automatisant les analyses répétitives.',
        },
        weight: 0.35,
      },
      {
        id: 'ins-actuary-climate-modeling',
        name: { es: 'Modelización de Riesgo Climático', en: 'Climate Risk Modeling', fr: 'Modélisation du Risque Climatique' },
        description: {
          es: 'Capacidad para incorporar modelos de cambio climático en las proyecciones actuariales, ajustar supuestos de frecuencia y severidad según escenarios climáticos y valorar el impacto a largo plazo en reservas y capital.',
          en: 'Ability to incorporate climate change models into actuarial projections, adjust frequency and severity assumptions based on climate scenarios, and assess long-term impact on reserves and capital.',
          fr: 'Capacité à incorporer des modèles de changement climatique dans les projections actuarielles, ajuster les hypothèses de fréquence et de sévérité selon les scénarios climatiques et évaluer l\'impact à long terme sur les réserves et le capital.',
        },
        weight: 0.35,
      },
      {
        id: 'ins-actuary-realtime-pricing',
        name: { es: 'Pricing en Tiempo Real y Telemática', en: 'Real-Time Pricing & Telematics', fr: 'Tarification en Temps Réel et Télématique' },
        description: {
          es: 'Disposición para desarrollar modelos de tarificación dinámica basados en datos en tiempo real, telemática, IoT y comportamiento del asegurado, evolucionando desde la tarificación estática tradicional.',
          en: 'Willingness to develop dynamic pricing models based on real-time data, telematics, IoT, and policyholder behavior, evolving from traditional static pricing.',
          fr: 'Volonté de développer des modèles de tarification dynamique basés sur des données en temps réel, la télématique, l\'IoT et le comportement de l\'assuré, en évoluant depuis la tarification statique traditionnelle.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },
  // ==========================================================================
  // HOSPITALITY & TOURISM — Hotel General Manager
  // ==========================================================================
  {
    id: 'hosp-hgm-professional',
    name: {
      es: 'Habilidades Profesionales — Gerente General de Hotel',
      en: 'Professional Skills — Hotel General Manager',
      fr: 'Compétences Professionnelles — Directeur Général d\'Hôtel',
    },
    description: {
      es: 'Conocimientos técnicos en operación hotelera, gestión de ingresos y estándares de calidad.',
      en: 'Technical knowledge in hotel operations, revenue management, and quality standards.',
      fr: 'Connaissances techniques en exploitation hôtelière, gestion des revenus et normes de qualité.',
    },
    competencies: [
      {
        id: 'hosp-hgm-hotel-operations',
        name: { es: 'Operaciones Hoteleras', en: 'Hotel Operations', fr: 'Opérations Hôtelières' },
        description: {
          es: 'Capacidad para gestionar las operaciones diarias del hotel: recepción, housekeeping, mantenimiento, alimentos y bebidas, y seguridad.',
          en: 'Ability to manage daily hotel operations: front desk, housekeeping, maintenance, food and beverage, and security.',
          fr: 'Capacité à gérer les opérations quotidiennes de l\'hôtel : réception, entretien ménager, maintenance, restauration et sécurité.',
        },
        weight: 0.3,
      },
      {
        id: 'hosp-hgm-revenue-management',
        name: { es: 'Gestión de Ingresos', en: 'Revenue Management', fr: 'Gestion des Revenus' },
        description: {
          es: 'Dominio de estrategias de pricing dinámico, gestión de ocupación, distribución de canales y maximización del RevPAR.',
          en: 'Mastery of dynamic pricing strategies, occupancy management, channel distribution, and RevPAR maximization.',
          fr: 'Maîtrise des stratégies de tarification dynamique, gestion du taux d\'occupation, distribution des canaux et maximisation du RevPAR.',
        },
        weight: 0.35,
      },
      {
        id: 'hosp-hgm-quality-standards',
        name: { es: 'Estándares de Calidad y Cumplimiento', en: 'Quality Standards & Compliance', fr: 'Normes de Qualité et Conformité' },
        description: {
          es: 'Conocimiento de normativas turísticas, estándares de marca, certificaciones de calidad (ISO, AAA, Forbes) y regulación local.',
          en: 'Knowledge of tourism regulations, brand standards, quality certifications (ISO, AAA, Forbes), and local regulation.',
          fr: 'Connaissance des réglementations touristiques, normes de marque, certifications qualité (ISO, AAA, Forbes) et réglementation locale.',
        },
        weight: 0.35,
      },
    ],
    order: 1,
  },
  {
    id: 'hosp-hgm-soft-skills',
    name: {
      es: 'Habilidades Blandas — Gerente General de Hotel',
      en: 'Soft Skills — Hotel General Manager',
      fr: 'Compétences Interpersonnelles — Directeur Général d\'Hôtel',
    },
    description: {
      es: 'Competencias interpersonales para liderar equipos multidisciplinarios y garantizar la excelencia en la experiencia del huésped.',
      en: 'Interpersonal competencies for leading multidisciplinary teams and ensuring guest experience excellence.',
      fr: 'Compétences interpersonnelles pour diriger des équipes multidisciplinaires et garantir l\'excellence de l\'expérience client.',
    },
    competencies: [
      {
        id: 'hosp-hgm-leadership',
        name: { es: 'Liderazgo Multidepartamental', en: 'Multi-Departmental Leadership', fr: 'Leadership Multidépartemental' },
        description: {
          es: 'Capacidad para dirigir y motivar equipos de diferentes departamentos, alinear objetivos y fomentar la colaboración interdisciplinaria.',
          en: 'Ability to lead and motivate teams across departments, align goals, and foster cross-functional collaboration.',
          fr: 'Capacité à diriger et motiver des équipes de différents départements, aligner les objectifs et favoriser la collaboration interdisciplinaire.',
        },
        weight: 0.35,
      },
      {
        id: 'hosp-hgm-guest-relations',
        name: { es: 'Relaciones con Huéspedes', en: 'Guest Relations', fr: 'Relations avec les Clients' },
        description: {
          es: 'Habilidad para manejar quejas VIP, construir relaciones con huéspedes frecuentes y garantizar la satisfacción del cliente.',
          en: 'Skill in handling VIP complaints, building relationships with frequent guests, and ensuring customer satisfaction.',
          fr: 'Compétence dans la gestion des plaintes VIP, la construction de relations avec les clients réguliers et la satisfaction client.',
        },
        weight: 0.35,
      },
      {
        id: 'hosp-hgm-communication',
        name: { es: 'Comunicación Ejecutiva', en: 'Executive Communication', fr: 'Communication Exécutive' },
        description: {
          es: 'Capacidad de comunicación efectiva con propietarios, inversionistas, medios de comunicación y autoridades turísticas.',
          en: 'Effective communication ability with owners, investors, media, and tourism authorities.',
          fr: 'Capacité de communication efficace avec les propriétaires, investisseurs, médias et autorités touristiques.',
        },
        weight: 0.3,
      },
    ],
    order: 2,
  },
  {
    id: 'hosp-hgm-readiness',
    name: {
      es: 'Disposición al Cambio — Gerente General de Hotel',
      en: 'Readiness for Change — Hotel General Manager',
      fr: 'Disposition au Changement — Directeur Général d\'Hôtel',
    },
    description: {
      es: 'Capacidad de adaptación ante la transformación digital hotelera, turismo sostenible y nuevas expectativas del viajero.',
      en: 'Adaptability to hotel digital transformation, sustainable tourism, and new traveler expectations.',
      fr: 'Adaptabilité à la transformation numérique hôtelière, au tourisme durable et aux nouvelles attentes des voyageurs.',
    },
    competencies: [
      {
        id: 'hosp-hgm-digital-transformation',
        name: { es: 'Transformación Digital Hotelera', en: 'Hotel Digital Transformation', fr: 'Transformation Numérique Hôtelière' },
        description: {
          es: 'Disposición para adoptar tecnologías como check-in móvil, IoT en habitaciones, chatbots y plataformas de gestión hotelera en la nube.',
          en: 'Willingness to adopt technologies such as mobile check-in, in-room IoT, chatbots, and cloud-based hotel management platforms.',
          fr: 'Volonté d\'adopter des technologies telles que le check-in mobile, l\'IoT dans les chambres, les chatbots et les plateformes de gestion hôtelière en nuage.',
        },
        weight: 0.35,
      },
      {
        id: 'hosp-hgm-sustainability',
        name: { es: 'Turismo Sostenible', en: 'Sustainable Tourism', fr: 'Tourisme Durable' },
        description: {
          es: 'Capacidad para implementar prácticas de sostenibilidad ambiental, certificaciones verdes y reducción de huella de carbono.',
          en: 'Ability to implement environmental sustainability practices, green certifications, and carbon footprint reduction.',
          fr: 'Capacité à mettre en œuvre des pratiques de durabilité environnementale, des certifications vertes et la réduction de l\'empreinte carbone.',
        },
        weight: 0.35,
      },
      {
        id: 'hosp-hgm-new-traveler',
        name: { es: 'Nuevas Expectativas del Viajero', en: 'New Traveler Expectations', fr: 'Nouvelles Attentes des Voyageurs' },
        description: {
          es: 'Adaptación a las tendencias del viajero moderno: experiencias personalizadas, bienestar, bleisure y economía colaborativa.',
          en: 'Adaptation to modern traveler trends: personalized experiences, wellness, bleisure, and the sharing economy.',
          fr: 'Adaptation aux tendances du voyageur moderne : expériences personnalisées, bien-être, bleisure et économie collaborative.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },
  // ==========================================================================
  // HOSPITALITY & TOURISM — Restaurant Manager
  // ==========================================================================
  {
    id: 'hosp-rm-professional',
    name: {
      es: 'Habilidades Profesionales — Gerente de Restaurante',
      en: 'Professional Skills — Restaurant Manager',
      fr: 'Compétences Professionnelles — Directeur de Restaurant',
    },
    description: {
      es: 'Conocimientos técnicos en operación de restaurante, control de costos y cumplimiento sanitario.',
      en: 'Technical knowledge in restaurant operations, cost control, and health compliance.',
      fr: 'Connaissances techniques en exploitation de restaurant, contrôle des coûts et conformité sanitaire.',
    },
    competencies: [
      {
        id: 'hosp-rm-fb-operations',
        name: { es: 'Operaciones de A&B', en: 'F&B Operations', fr: 'Opérations de Restauration' },
        description: {
          es: 'Gestión de la operación diaria del restaurante: flujo de servicio, mise en place, estándares de servicio y gestión de reservas.',
          en: 'Management of daily restaurant operations: service flow, mise en place, service standards, and reservation management.',
          fr: 'Gestion de l\'exploitation quotidienne du restaurant : flux de service, mise en place, normes de service et gestion des réservations.',
        },
        weight: 0.3,
      },
      {
        id: 'hosp-rm-cost-control',
        name: { es: 'Control de Costos y Rentabilidad', en: 'Cost Control & Profitability', fr: 'Contrôle des Coûts et Rentabilité' },
        description: {
          es: 'Dominio del food cost, beverage cost, control de merma, ingeniería de menú y análisis de rentabilidad por platillo.',
          en: 'Mastery of food cost, beverage cost, waste control, menu engineering, and per-dish profitability analysis.',
          fr: 'Maîtrise du coût alimentaire, du coût des boissons, du contrôle des pertes, de l\'ingénierie des menus et de l\'analyse de rentabilité par plat.',
        },
        weight: 0.35,
      },
      {
        id: 'hosp-rm-health-safety',
        name: { es: 'Higiene y Seguridad Alimentaria', en: 'Food Hygiene & Safety', fr: 'Hygiène et Sécurité Alimentaire' },
        description: {
          es: 'Conocimiento de normativas sanitarias (HACCP, BPM), inspecciones, manejo de alérgenos y trazabilidad de alimentos.',
          en: 'Knowledge of health regulations (HACCP, GMP), inspections, allergen management, and food traceability.',
          fr: 'Connaissance des réglementations sanitaires (HACCP, BPF), inspections, gestion des allergènes et traçabilité alimentaire.',
        },
        weight: 0.35,
      },
    ],
    order: 1,
  },
  {
    id: 'hosp-rm-soft-skills',
    name: {
      es: 'Habilidades Blandas — Gerente de Restaurante',
      en: 'Soft Skills — Restaurant Manager',
      fr: 'Compétences Interpersonnelles — Directeur de Restaurant',
    },
    description: {
      es: 'Competencias interpersonales para gestionar equipos de servicio y cocina, resolver conflictos y fidelizar clientes.',
      en: 'Interpersonal competencies for managing service and kitchen teams, resolving conflicts, and building customer loyalty.',
      fr: 'Compétences interpersonnelles pour gérer les équipes de service et de cuisine, résoudre les conflits et fidéliser les clients.',
    },
    competencies: [
      {
        id: 'hosp-rm-team-management',
        name: { es: 'Gestión de Equipo', en: 'Team Management', fr: 'Gestion d\'Équipe' },
        description: {
          es: 'Capacidad para reclutar, capacitar, programar turnos y retener talento en un entorno de alta rotación.',
          en: 'Ability to recruit, train, schedule shifts, and retain talent in a high-turnover environment.',
          fr: 'Capacité à recruter, former, planifier les horaires et retenir les talents dans un environnement à forte rotation.',
        },
        weight: 0.35,
      },
      {
        id: 'hosp-rm-customer-experience',
        name: { es: 'Experiencia del Cliente', en: 'Customer Experience', fr: 'Expérience Client' },
        description: {
          es: 'Habilidad para crear experiencias gastronómicas memorables, manejar quejas y gestionar reputación en línea.',
          en: 'Skill in creating memorable dining experiences, handling complaints, and managing online reputation.',
          fr: 'Compétence dans la création d\'expériences gastronomiques mémorables, la gestion des plaintes et la réputation en ligne.',
        },
        weight: 0.35,
      },
      {
        id: 'hosp-rm-pressure-management',
        name: { es: 'Manejo Bajo Presión', en: 'Performance Under Pressure', fr: 'Gestion sous Pression' },
        description: {
          es: 'Capacidad para mantener la calma y tomar decisiones rápidas durante el servicio de alta demanda (rush hours).',
          en: 'Ability to stay calm and make quick decisions during high-demand service periods (rush hours).',
          fr: 'Capacité à rester calme et à prendre des décisions rapides pendant les périodes de forte demande (heures de pointe).',
        },
        weight: 0.3,
      },
    ],
    order: 2,
  },
  {
    id: 'hosp-rm-readiness',
    name: {
      es: 'Disposición al Cambio — Gerente de Restaurante',
      en: 'Readiness for Change — Restaurant Manager',
      fr: 'Disposition au Changement — Directeur de Restaurant',
    },
    description: {
      es: 'Capacidad de adaptación ante las nuevas tendencias gastronómicas, delivery digital y sostenibilidad alimentaria.',
      en: 'Adaptability to new gastronomic trends, digital delivery, and food sustainability.',
      fr: 'Adaptabilité aux nouvelles tendances gastronomiques, à la livraison numérique et à la durabilité alimentaire.',
    },
    competencies: [
      {
        id: 'hosp-rm-digital-delivery',
        name: { es: 'Canales Digitales y Delivery', en: 'Digital Channels & Delivery', fr: 'Canaux Numériques et Livraison' },
        description: {
          es: 'Disposición para gestionar plataformas de delivery, pedidos en línea, menús digitales y marketing en redes sociales.',
          en: 'Willingness to manage delivery platforms, online ordering, digital menus, and social media marketing.',
          fr: 'Volonté de gérer les plateformes de livraison, les commandes en ligne, les menus numériques et le marketing sur les réseaux sociaux.',
        },
        weight: 0.35,
      },
      {
        id: 'hosp-rm-gastronomic-trends',
        name: { es: 'Tendencias Gastronómicas', en: 'Gastronomic Trends', fr: 'Tendances Gastronomiques' },
        description: {
          es: 'Apertura para incorporar tendencias como cocina plant-based, cocina de autor, fusión y gastronomía experiencial.',
          en: 'Openness to incorporate trends such as plant-based cuisine, signature cuisine, fusion, and experiential gastronomy.',
          fr: 'Ouverture pour intégrer des tendances telles que la cuisine végétale, la cuisine d\'auteur, la fusion et la gastronomie expérientielle.',
        },
        weight: 0.35,
      },
      {
        id: 'hosp-rm-food-sustainability',
        name: { es: 'Sostenibilidad Alimentaria', en: 'Food Sustainability', fr: 'Durabilité Alimentaire' },
        description: {
          es: 'Capacidad para implementar prácticas de cero desperdicio, proveedores locales, empaques sostenibles y trazabilidad.',
          en: 'Ability to implement zero-waste practices, local sourcing, sustainable packaging, and traceability.',
          fr: 'Capacité à mettre en œuvre des pratiques zéro déchet, l\'approvisionnement local, les emballages durables et la traçabilité.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },
  // ==========================================================================
  // HOSPITALITY & TOURISM — Front Desk Agent
  // ==========================================================================
  {
    id: 'hosp-fda-professional',
    name: {
      es: 'Habilidades Profesionales — Agente de Recepción',
      en: 'Professional Skills — Front Desk Agent',
      fr: 'Compétences Professionnelles — Agent de Réception',
    },
    description: {
      es: 'Conocimientos técnicos en recepción hotelera, sistemas PMS y procedimientos operativos.',
      en: 'Technical knowledge in hotel front desk operations, PMS systems, and operational procedures.',
      fr: 'Connaissances techniques en réception hôtelière, systèmes PMS et procédures opérationnelles.',
    },
    competencies: [
      {
        id: 'hosp-fda-front-desk-ops',
        name: { es: 'Operaciones de Recepción', en: 'Front Desk Operations', fr: 'Opérations de Réception' },
        description: {
          es: 'Dominio de los procesos de check-in/check-out, asignación de habitaciones, manejo de llaves y coordinación con housekeeping.',
          en: 'Mastery of check-in/check-out processes, room assignment, key management, and housekeeping coordination.',
          fr: 'Maîtrise des processus de check-in/check-out, attribution des chambres, gestion des clés et coordination avec l\'entretien ménager.',
        },
        weight: 0.35,
      },
      {
        id: 'hosp-fda-pms-systems',
        name: { es: 'Sistemas de Gestión Hotelera (PMS)', en: 'Property Management Systems (PMS)', fr: 'Systèmes de Gestion Hôtelière (PMS)' },
        description: {
          es: 'Habilidad para operar sistemas PMS (Opera, Cloudbeds, etc.), gestionar reservas, facturación y reportes operativos.',
          en: 'Skill in operating PMS systems (Opera, Cloudbeds, etc.), managing reservations, billing, and operational reports.',
          fr: 'Compétence dans l\'utilisation des systèmes PMS (Opera, Cloudbeds, etc.), la gestion des réservations, la facturation et les rapports opérationnels.',
        },
        weight: 0.35,
      },
      {
        id: 'hosp-fda-cash-handling',
        name: { es: 'Manejo de Caja y Facturación', en: 'Cash Handling & Billing', fr: 'Gestion de Caisse et Facturation' },
        description: {
          es: 'Capacidad para manejar transacciones en efectivo, tarjeta y crédito, cuadrar caja y procesar facturación de huéspedes.',
          en: 'Ability to handle cash, card, and credit transactions, balance the cash drawer, and process guest billing.',
          fr: 'Capacité à gérer les transactions en espèces, par carte et à crédit, équilibrer la caisse et traiter la facturation des clients.',
        },
        weight: 0.3,
      },
    ],
    order: 1,
  },
  {
    id: 'hosp-fda-soft-skills',
    name: {
      es: 'Habilidades Blandas — Agente de Recepción',
      en: 'Soft Skills — Front Desk Agent',
      fr: 'Compétences Interpersonnelles — Agent de Réception',
    },
    description: {
      es: 'Competencias interpersonales para la atención directa al huésped y trabajo en equipo operativo.',
      en: 'Interpersonal competencies for direct guest service and operational teamwork.',
      fr: 'Compétences interpersonnelles pour le service direct aux clients et le travail d\'équipe opérationnel.',
    },
    competencies: [
      {
        id: 'hosp-fda-guest-service',
        name: { es: 'Servicio al Huésped', en: 'Guest Service', fr: 'Service aux Clients' },
        description: {
          es: 'Capacidad para brindar un servicio cálido, profesional y personalizado a cada huésped.',
          en: 'Ability to provide warm, professional, and personalized service to each guest.',
          fr: 'Capacité à offrir un service chaleureux, professionnel et personnalisé à chaque client.',
        },
        weight: 0.35,
      },
      {
        id: 'hosp-fda-conflict-resolution',
        name: { es: 'Resolución de Conflictos', en: 'Conflict Resolution', fr: 'Résolution de Conflits' },
        description: {
          es: 'Habilidad para manejar quejas, situaciones difíciles y huéspedes insatisfechos con empatía y soluciones efectivas.',
          en: 'Skill in handling complaints, difficult situations, and dissatisfied guests with empathy and effective solutions.',
          fr: 'Compétence dans la gestion des plaintes, des situations difficiles et des clients insatisfaits avec empathie et solutions efficaces.',
        },
        weight: 0.35,
      },
      {
        id: 'hosp-fda-teamwork',
        name: { es: 'Trabajo en Equipo Operativo', en: 'Operational Teamwork', fr: 'Travail d\'Équipe Opérationnel' },
        description: {
          es: 'Capacidad para coordinarse eficazmente con housekeeping, mantenimiento, bell service y otros departamentos.',
          en: 'Ability to coordinate effectively with housekeeping, maintenance, bell service, and other departments.',
          fr: 'Capacité à se coordonner efficacement avec l\'entretien ménager, la maintenance, le service de bagages et d\'autres départements.',
        },
        weight: 0.3,
      },
    ],
    order: 2,
  },
  {
    id: 'hosp-fda-readiness',
    name: {
      es: 'Disposición al Cambio — Agente de Recepción',
      en: 'Readiness for Change — Front Desk Agent',
      fr: 'Disposition au Changement — Agent de Réception',
    },
    description: {
      es: 'Capacidad de adaptación ante nuevas tecnologías de recepción, autoservicio y comunicación digital con huéspedes.',
      en: 'Adaptability to new front desk technologies, self-service, and digital guest communication.',
      fr: 'Adaptabilité aux nouvelles technologies de réception, au libre-service et à la communication numérique avec les clients.',
    },
    competencies: [
      {
        id: 'hosp-fda-tech-adoption',
        name: { es: 'Adopción Tecnológica', en: 'Technology Adoption', fr: 'Adoption Technologique' },
        description: {
          es: 'Disposición para aprender y utilizar nuevas herramientas: check-in móvil, kioscos de autoservicio, tabletas y apps de comunicación.',
          en: 'Willingness to learn and use new tools: mobile check-in, self-service kiosks, tablets, and communication apps.',
          fr: 'Volonté d\'apprendre et d\'utiliser de nouveaux outils : check-in mobile, bornes libre-service, tablettes et applications de communication.',
        },
        weight: 0.35,
      },
      {
        id: 'hosp-fda-multilingual',
        name: { es: 'Comunicación Multilingüe', en: 'Multilingual Communication', fr: 'Communication Multilingue' },
        description: {
          es: 'Apertura para desarrollar competencias lingüísticas adicionales y comunicarse con huéspedes internacionales.',
          en: 'Openness to develop additional language skills and communicate with international guests.',
          fr: 'Ouverture pour développer des compétences linguistiques supplémentaires et communiquer avec des clients internationaux.',
        },
        weight: 0.3,
      },
      {
        id: 'hosp-fda-service-evolution',
        name: { es: 'Evolución del Servicio', en: 'Service Evolution', fr: 'Évolution du Service' },
        description: {
          es: 'Capacidad para adaptarse a nuevos estándares de servicio, protocolos post-pandemia y expectativas cambiantes del viajero.',
          en: 'Ability to adapt to new service standards, post-pandemic protocols, and changing traveler expectations.',
          fr: 'Capacité à s\'adapter aux nouvelles normes de service, aux protocoles post-pandémie et aux attentes changeantes des voyageurs.',
        },
        weight: 0.35,
      },
    ],
    order: 3,
  },
  // ==========================================================================
  // HOSPITALITY & TOURISM — Chef / Kitchen Manager
  // ==========================================================================
  {
    id: 'hosp-ckm-professional',
    name: {
      es: 'Habilidades Profesionales — Chef / Gerente de Cocina',
      en: 'Professional Skills — Chef / Kitchen Manager',
      fr: 'Compétences Professionnelles — Chef / Responsable de Cuisine',
    },
    description: {
      es: 'Conocimientos técnicos en artes culinarias, gestión de cocina y seguridad alimentaria.',
      en: 'Technical knowledge in culinary arts, kitchen management, and food safety.',
      fr: 'Connaissances techniques en arts culinaires, gestion de cuisine et sécurité alimentaire.',
    },
    competencies: [
      {
        id: 'hosp-ckm-culinary-expertise',
        name: { es: 'Expertise Culinaria', en: 'Culinary Expertise', fr: 'Expertise Culinaire' },
        description: {
          es: 'Dominio de técnicas culinarias, diseño de menús, maridaje, presentación de platos y creatividad gastronómica.',
          en: 'Mastery of culinary techniques, menu design, pairing, plating, and gastronomic creativity.',
          fr: 'Maîtrise des techniques culinaires, conception de menus, accords mets-vins, dressage et créativité gastronomique.',
        },
        weight: 0.35,
      },
      {
        id: 'hosp-ckm-kitchen-management',
        name: { es: 'Gestión de Cocina', en: 'Kitchen Management', fr: 'Gestion de Cuisine' },
        description: {
          es: 'Capacidad para gestionar inventarios, proveedores, costos de materia prima, mise en place y flujo de producción.',
          en: 'Ability to manage inventory, suppliers, raw material costs, mise en place, and production flow.',
          fr: 'Capacité à gérer les stocks, les fournisseurs, les coûts des matières premières, la mise en place et le flux de production.',
        },
        weight: 0.35,
      },
      {
        id: 'hosp-ckm-food-safety',
        name: { es: 'Seguridad Alimentaria', en: 'Food Safety', fr: 'Sécurité Alimentaire' },
        description: {
          es: 'Conocimiento y aplicación de normas HACCP, BPM, manejo de temperaturas, trazabilidad y gestión de alérgenos.',
          en: 'Knowledge and application of HACCP, GMP standards, temperature management, traceability, and allergen management.',
          fr: 'Connaissance et application des normes HACCP, BPF, gestion des températures, traçabilité et gestion des allergènes.',
        },
        weight: 0.3,
      },
    ],
    order: 1,
  },
  {
    id: 'hosp-ckm-soft-skills',
    name: {
      es: 'Habilidades Blandas — Chef / Gerente de Cocina',
      en: 'Soft Skills — Chef / Kitchen Manager',
      fr: 'Compétences Interpersonnelles — Chef / Responsable de Cuisine',
    },
    description: {
      es: 'Competencias interpersonales para liderar brigadas de cocina y colaborar con el equipo de servicio.',
      en: 'Interpersonal competencies for leading kitchen brigades and collaborating with the service team.',
      fr: 'Compétences interpersonnelles pour diriger les brigades de cuisine et collaborer avec l\'équipe de service.',
    },
    competencies: [
      {
        id: 'hosp-ckm-brigade-leadership',
        name: { es: 'Liderazgo de Brigada', en: 'Brigade Leadership', fr: 'Leadership de Brigade' },
        description: {
          es: 'Capacidad para dirigir la brigada de cocina, delegar tareas, capacitar cocineros y mantener la disciplina operativa.',
          en: 'Ability to lead the kitchen brigade, delegate tasks, train cooks, and maintain operational discipline.',
          fr: 'Capacité à diriger la brigade de cuisine, déléguer les tâches, former les cuisiniers et maintenir la discipline opérationnelle.',
        },
        weight: 0.35,
      },
      {
        id: 'hosp-ckm-stress-management',
        name: { es: 'Gestión del Estrés en Cocina', en: 'Kitchen Stress Management', fr: 'Gestion du Stress en Cuisine' },
        description: {
          es: 'Habilidad para mantener la calma, la calidad y la eficiencia durante servicios de alta presión.',
          en: 'Skill in maintaining calm, quality, and efficiency during high-pressure service periods.',
          fr: 'Compétence dans le maintien du calme, de la qualité et de l\'efficacité pendant les services à haute pression.',
        },
        weight: 0.35,
      },
      {
        id: 'hosp-ckm-collaboration',
        name: { es: 'Colaboración con Servicio', en: 'Front-of-House Collaboration', fr: 'Collaboration avec le Service' },
        description: {
          es: 'Capacidad para comunicarse y coordinarse con el equipo de salón, sommelier y gerencia para garantizar una experiencia integrada.',
          en: 'Ability to communicate and coordinate with the front-of-house team, sommelier, and management for an integrated experience.',
          fr: 'Capacité à communiquer et se coordonner avec l\'équipe de salle, le sommelier et la direction pour une expérience intégrée.',
        },
        weight: 0.3,
      },
    ],
    order: 2,
  },
  {
    id: 'hosp-ckm-readiness',
    name: {
      es: 'Disposición al Cambio — Chef / Gerente de Cocina',
      en: 'Readiness for Change — Chef / Kitchen Manager',
      fr: 'Disposition au Changement — Chef / Responsable de Cuisine',
    },
    description: {
      es: 'Capacidad de adaptación ante nuevas tendencias culinarias, tecnología de cocina y sostenibilidad alimentaria.',
      en: 'Adaptability to new culinary trends, kitchen technology, and food sustainability.',
      fr: 'Adaptabilité aux nouvelles tendances culinaires, à la technologie de cuisine et à la durabilité alimentaire.',
    },
    competencies: [
      {
        id: 'hosp-ckm-culinary-innovation',
        name: { es: 'Innovación Culinaria', en: 'Culinary Innovation', fr: 'Innovation Culinaire' },
        description: {
          es: 'Disposición para experimentar con nuevas técnicas (sous-vide, fermentación, cocina molecular), ingredientes y presentaciones.',
          en: 'Willingness to experiment with new techniques (sous-vide, fermentation, molecular gastronomy), ingredients, and presentations.',
          fr: 'Volonté d\'expérimenter de nouvelles techniques (sous-vide, fermentation, gastronomie moléculaire), ingrédients et présentations.',
        },
        weight: 0.35,
      },
      {
        id: 'hosp-ckm-kitchen-tech',
        name: { es: 'Tecnología en Cocina', en: 'Kitchen Technology', fr: 'Technologie en Cuisine' },
        description: {
          es: 'Apertura para adoptar equipos modernos, sistemas de gestión de recetas digitales y automatización parcial de procesos.',
          en: 'Openness to adopt modern equipment, digital recipe management systems, and partial process automation.',
          fr: 'Ouverture pour adopter des équipements modernes, des systèmes de gestion de recettes numériques et l\'automatisation partielle des processus.',
        },
        weight: 0.3,
      },
      {
        id: 'hosp-ckm-sustainable-cooking',
        name: { es: 'Cocina Sostenible', en: 'Sustainable Cooking', fr: 'Cuisine Durable' },
        description: {
          es: 'Capacidad para adoptar prácticas de cocina sostenible: reducción de desperdicio, aprovechamiento integral, ingredientes locales y estacionales.',
          en: 'Ability to adopt sustainable cooking practices: waste reduction, whole-ingredient usage, local and seasonal ingredients.',
          fr: 'Capacité à adopter des pratiques de cuisine durable : réduction des déchets, utilisation intégrale des ingrédients, produits locaux et de saison.',
        },
        weight: 0.35,
      },
    ],
    order: 3,
  },
  // =========================================================================
  // BANKING — Bank Branch Manager
  // =========================================================================
  {
    id: 'bank-bm-professional',
    name: {
      es: 'Habilidades Profesionales — Gerente de Sucursal',
      en: 'Professional Skills — Branch Manager',
      fr: 'Compétences Professionnelles — Directeur d\'Agence',
    },
    description: {
      es: 'Conocimientos técnicos en operaciones bancarias, gestión comercial de sucursal, cumplimiento regulatorio y administración de riesgos operativos.',
      en: 'Technical knowledge in banking operations, branch commercial management, regulatory compliance, and operational risk administration.',
      fr: 'Connaissances techniques en opérations bancaires, gestion commerciale d\'agence, conformité réglementaire et administration des risques opérationnels.',
    },
    competencies: [
      {
        id: 'bank-bm-branch-operations',
        name: { es: 'Gestión de Operaciones de Sucursal', en: 'Branch Operations Management', fr: 'Gestion des Opérations d\'Agence' },
        description: {
          es: 'Capacidad para supervisar y optimizar los procesos operativos diarios de la sucursal, incluyendo apertura/cierre, arqueos, cuadres de caja, gestión de bóveda y cumplimiento de estándares de servicio.',
          en: 'Ability to oversee and optimize daily branch operational processes, including opening/closing, cash counts, vault management, and compliance with service standards.',
          fr: 'Capacité à superviser et optimiser les processus opérationnels quotidiens de l\'agence, incluant ouverture/fermeture, comptages, gestion du coffre et respect des standards de service.',
        },
        weight: 0.3,
      },
      {
        id: 'bank-bm-commercial-mgmt',
        name: { es: 'Gestión Comercial y Metas', en: 'Commercial Management & Targets', fr: 'Gestion Commerciale et Objectifs' },
        description: {
          es: 'Habilidad para diseñar estrategias comerciales locales, impulsar la colocación de productos bancarios, gestionar la cartera de clientes y alcanzar las metas de captación, colocación y rentabilidad.',
          en: 'Skill in designing local commercial strategies, driving banking product placement, managing the client portfolio, and achieving deposit, lending, and profitability targets.',
          fr: 'Compétence pour concevoir des stratégies commerciales locales, promouvoir les produits bancaires, gérer le portefeuille clients et atteindre les objectifs de captation, placement et rentabilité.',
        },
        weight: 0.35,
      },
      {
        id: 'bank-bm-regulatory',
        name: { es: 'Cumplimiento Regulatorio Bancario', en: 'Banking Regulatory Compliance', fr: 'Conformité Réglementaire Bancaire' },
        description: {
          es: 'Conocimiento de normativas bancarias (prevención de lavado de dinero, conocimiento del cliente KYC, protección al usuario financiero) y capacidad para implementar controles internos efectivos.',
          en: 'Knowledge of banking regulations (anti-money laundering, KYC, financial consumer protection) and ability to implement effective internal controls.',
          fr: 'Connaissance des réglementations bancaires (lutte anti-blanchiment, KYC, protection du consommateur financier) et capacité à mettre en place des contrôles internes efficaces.',
        },
        weight: 0.35,
      },
    ],
    order: 1,
  },
  {
    id: 'bank-bm-soft-skills',
    name: {
      es: 'Habilidades Blandas — Gerente de Sucursal',
      en: 'Soft Skills — Branch Manager',
      fr: 'Compétences Interpersonnelles — Directeur d\'Agence',
    },
    description: {
      es: 'Competencias de liderazgo, comunicación y gestión de equipos necesarias para dirigir una sucursal bancaria de alto rendimiento.',
      en: 'Leadership, communication, and team management competencies needed to lead a high-performing bank branch.',
      fr: 'Compétences en leadership, communication et gestion d\'équipe nécessaires pour diriger une agence bancaire performante.',
    },
    competencies: [
      {
        id: 'bank-bm-leadership',
        name: { es: 'Liderazgo y Desarrollo de Equipo', en: 'Leadership & Team Development', fr: 'Leadership et Développement d\'Équipe' },
        description: {
          es: 'Capacidad para motivar, formar y desarrollar al equipo de la sucursal, gestionar el desempeño individual y colectivo, y crear un ambiente de trabajo productivo.',
          en: 'Ability to motivate, train, and develop the branch team, manage individual and collective performance, and create a productive work environment.',
          fr: 'Capacité à motiver, former et développer l\'équipe de l\'agence, gérer la performance individuelle et collective, et créer un environnement de travail productif.',
        },
        weight: 0.35,
      },
      {
        id: 'bank-bm-client-relationship',
        name: { es: 'Relación con Clientes Clave', en: 'Key Client Relationship Management', fr: 'Gestion des Relations Clients Clés' },
        description: {
          es: 'Habilidad para establecer y mantener relaciones de confianza con clientes estratégicos, resolver escalaciones y garantizar una experiencia superior de servicio.',
          en: 'Skill in establishing and maintaining trusted relationships with strategic clients, resolving escalations, and ensuring a superior service experience.',
          fr: 'Compétence pour établir et maintenir des relations de confiance avec les clients stratégiques, résoudre les escalades et garantir une expérience de service supérieure.',
        },
        weight: 0.35,
      },
      {
        id: 'bank-bm-conflict-resolution',
        name: { es: 'Resolución de Conflictos', en: 'Conflict Resolution', fr: 'Résolution de Conflits' },
        description: {
          es: 'Capacidad para mediar y resolver conflictos entre colaboradores, con clientes o con otras áreas del banco, manteniendo la armonía operativa.',
          en: 'Ability to mediate and resolve conflicts among staff, with clients, or with other bank departments, maintaining operational harmony.',
          fr: 'Capacité à médier et résoudre les conflits entre collaborateurs, avec les clients ou d\'autres départements, en maintenant l\'harmonie opérationnelle.',
        },
        weight: 0.3,
      },
    ],
    order: 2,
  },
  {
    id: 'bank-bm-readiness',
    name: {
      es: 'Disposición al Cambio — Gerente de Sucursal',
      en: 'Readiness for Change — Branch Manager',
      fr: 'Disposition au Changement — Directeur d\'Agence',
    },
    description: {
      es: 'Capacidad de adaptación ante la transformación digital bancaria, nuevos modelos de sucursal y evolución de las expectativas del cliente.',
      en: 'Adaptability to banking digital transformation, new branch models, and evolving customer expectations.',
      fr: 'Adaptabilité à la transformation numérique bancaire, aux nouveaux modèles d\'agence et à l\'évolution des attentes des clients.',
    },
    competencies: [
      {
        id: 'bank-bm-digital-transformation',
        name: { es: 'Transformación Digital de Sucursal', en: 'Branch Digital Transformation', fr: 'Transformation Numérique de l\'Agence' },
        description: {
          es: 'Disposición para liderar la migración hacia canales digitales, autoservicio y modelos de sucursal híbrida que combinan atención presencial con tecnología.',
          en: 'Willingness to lead migration toward digital channels, self-service, and hybrid branch models combining in-person service with technology.',
          fr: 'Volonté de mener la migration vers les canaux numériques, le libre-service et les modèles d\'agence hybrides combinant service en personne et technologie.',
        },
        weight: 0.35,
      },
      {
        id: 'bank-bm-change-management',
        name: { es: 'Gestión del Cambio Organizacional', en: 'Organizational Change Management', fr: 'Gestion du Changement Organisationnel' },
        description: {
          es: 'Capacidad para implementar nuevas políticas, procesos y tecnologías en la sucursal, gestionando la resistencia al cambio del equipo.',
          en: 'Ability to implement new policies, processes, and technologies in the branch while managing team resistance to change.',
          fr: 'Capacité à mettre en œuvre de nouvelles politiques, processus et technologies dans l\'agence, en gérant la résistance au changement de l\'équipe.',
        },
        weight: 0.35,
      },
      {
        id: 'bank-bm-innovation',
        name: { es: 'Innovación en Servicio Bancario', en: 'Banking Service Innovation', fr: 'Innovation dans le Service Bancaire' },
        description: {
          es: 'Disposición para adoptar nuevas prácticas de atención al cliente, productos financieros emergentes y modelos de negocio que respondan a las necesidades cambiantes del mercado.',
          en: 'Willingness to adopt new customer service practices, emerging financial products, and business models responding to changing market needs.',
          fr: 'Volonté d\'adopter de nouvelles pratiques de service client, produits financiers émergents et modèles d\'affaires répondant aux besoins changeants du marché.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },
  // =========================================================================
  // BANKING — Loan Officer / Credit Analyst
  // =========================================================================
  {
    id: 'bank-lo-professional',
    name: {
      es: 'Habilidades Profesionales — Oficial de Crédito',
      en: 'Professional Skills — Loan Officer',
      fr: 'Compétences Professionnelles — Agent de Crédit',
    },
    description: {
      es: 'Conocimientos técnicos en análisis crediticio, evaluación de riesgos, estructuración de préstamos y normativa de otorgamiento de crédito.',
      en: 'Technical knowledge in credit analysis, risk assessment, loan structuring, and credit granting regulations.',
      fr: 'Connaissances techniques en analyse de crédit, évaluation des risques, structuration de prêts et réglementation d\'octroi de crédit.',
    },
    competencies: [
      {
        id: 'bank-lo-credit-analysis',
        name: { es: 'Análisis Crediticio', en: 'Credit Analysis', fr: 'Analyse de Crédit' },
        description: {
          es: 'Capacidad para evaluar estados financieros, flujos de caja, capacidad de pago y perfil de riesgo de solicitantes de crédito individuales y empresariales.',
          en: 'Ability to evaluate financial statements, cash flows, repayment capacity, and risk profile of individual and corporate credit applicants.',
          fr: 'Capacité à évaluer les états financiers, flux de trésorerie, capacité de remboursement et profil de risque des demandeurs de crédit.',
        },
        weight: 0.35,
      },
      {
        id: 'bank-lo-loan-structuring',
        name: { es: 'Estructuración de Créditos', en: 'Loan Structuring', fr: 'Structuration de Crédits' },
        description: {
          es: 'Habilidad para diseñar condiciones crediticias (plazo, tasa, garantías, covenants) que equilibren la viabilidad para el cliente con la protección del banco.',
          en: 'Skill in designing credit terms (tenor, rate, collateral, covenants) that balance client viability with bank protection.',
          fr: 'Compétence pour concevoir des conditions de crédit (durée, taux, garanties, covenants) équilibrant la viabilité du client et la protection de la banque.',
        },
        weight: 0.35,
      },
      {
        id: 'bank-lo-portfolio-mgmt',
        name: { es: 'Gestión de Cartera Crediticia', en: 'Credit Portfolio Management', fr: 'Gestion du Portefeuille de Crédit' },
        description: {
          es: 'Capacidad para monitorear la cartera asignada, detectar señales tempranas de deterioro, gestionar la morosidad y ejecutar acciones preventivas de recuperación.',
          en: 'Ability to monitor the assigned portfolio, detect early deterioration signals, manage delinquency, and execute preventive recovery actions.',
          fr: 'Capacité à surveiller le portefeuille assigné, détecter les signaux précoces de détérioration, gérer les impayés et exécuter des actions préventives de recouvrement.',
        },
        weight: 0.3,
      },
    ],
    order: 1,
  },
  {
    id: 'bank-lo-soft-skills',
    name: {
      es: 'Habilidades Blandas — Oficial de Crédito',
      en: 'Soft Skills — Loan Officer',
      fr: 'Compétences Interpersonnelles — Agent de Crédit',
    },
    description: {
      es: 'Competencias interpersonales para la relación con solicitantes de crédito, negociación de condiciones y comunicación de decisiones.',
      en: 'Interpersonal competencies for relationships with credit applicants, negotiation of terms, and communication of decisions.',
      fr: 'Compétences interpersonnelles pour la relation avec les demandeurs de crédit, la négociation des conditions et la communication des décisions.',
    },
    competencies: [
      {
        id: 'bank-lo-negotiation',
        name: { es: 'Negociación Crediticia', en: 'Credit Negotiation', fr: 'Négociation de Crédit' },
        description: {
          es: 'Habilidad para negociar términos y condiciones de crédito que satisfagan al cliente mientras protegen los intereses del banco.',
          en: 'Skill in negotiating credit terms and conditions that satisfy the client while protecting the bank\'s interests.',
          fr: 'Compétence pour négocier des termes et conditions de crédit satisfaisant le client tout en protégeant les intérêts de la banque.',
        },
        weight: 0.35,
      },
      {
        id: 'bank-lo-analytical-comm',
        name: { es: 'Comunicación Analítica', en: 'Analytical Communication', fr: 'Communication Analytique' },
        description: {
          es: 'Capacidad para presentar análisis crediticios complejos de forma clara ante comités de crédito, superiores y clientes.',
          en: 'Ability to present complex credit analyses clearly to credit committees, supervisors, and clients.',
          fr: 'Capacité à présenter des analyses de crédit complexes de manière claire aux comités de crédit, supérieurs et clients.',
        },
        weight: 0.35,
      },
      {
        id: 'bank-lo-ethical-judgment',
        name: { es: 'Juicio Ético y Objetividad', en: 'Ethical Judgment & Objectivity', fr: 'Jugement Éthique et Objectivité' },
        description: {
          es: 'Integridad para tomar decisiones crediticias objetivas, resistir presiones indebidas y mantener los estándares de riesgo del banco.',
          en: 'Integrity to make objective credit decisions, resist undue pressure, and maintain the bank\'s risk standards.',
          fr: 'Intégrité pour prendre des décisions de crédit objectives, résister aux pressions indues et maintenir les standards de risque de la banque.',
        },
        weight: 0.3,
      },
    ],
    order: 2,
  },
  {
    id: 'bank-lo-readiness',
    name: {
      es: 'Disposición al Cambio — Oficial de Crédito',
      en: 'Readiness for Change — Loan Officer',
      fr: 'Disposition au Changement — Agent de Crédit',
    },
    description: {
      es: 'Capacidad de adaptación ante la digitalización del crédito, nuevos modelos de scoring y evolución regulatoria.',
      en: 'Adaptability to credit digitalization, new scoring models, and regulatory evolution.',
      fr: 'Adaptabilité à la numérisation du crédit, aux nouveaux modèles de scoring et à l\'évolution réglementaire.',
    },
    competencies: [
      {
        id: 'bank-lo-digital-lending',
        name: { es: 'Crédito Digital y Automatizado', en: 'Digital & Automated Lending', fr: 'Crédit Numérique et Automatisé' },
        description: {
          es: 'Disposición para adoptar plataformas de originación digital, modelos de scoring automatizado y procesos de aprobación en línea.',
          en: 'Willingness to adopt digital origination platforms, automated scoring models, and online approval processes.',
          fr: 'Volonté d\'adopter des plateformes d\'origination numérique, modèles de scoring automatisé et processus d\'approbation en ligne.',
        },
        weight: 0.35,
      },
      {
        id: 'bank-lo-alt-data',
        name: { es: 'Datos Alternativos en Evaluación', en: 'Alternative Data in Assessment', fr: 'Données Alternatives en Évaluation' },
        description: {
          es: 'Apertura para incorporar fuentes de datos no tradicionales (transaccionales, comportamentales, redes sociales) en la evaluación crediticia.',
          en: 'Openness to incorporating non-traditional data sources (transactional, behavioral, social media) in credit assessment.',
          fr: 'Ouverture à l\'incorporation de sources de données non traditionnelles (transactionnelles, comportementales, réseaux sociaux) dans l\'évaluation de crédit.',
        },
        weight: 0.3,
      },
      {
        id: 'bank-lo-regulatory-evolution',
        name: { es: 'Evolución Regulatoria', en: 'Regulatory Evolution', fr: 'Évolution Réglementaire' },
        description: {
          es: 'Capacidad para adaptarse a cambios normativos en materia crediticia, estándares de Basilea, NIIF 9 y regulaciones de protección al consumidor.',
          en: 'Ability to adapt to regulatory changes in credit matters, Basel standards, IFRS 9, and consumer protection regulations.',
          fr: 'Capacité à s\'adapter aux changements réglementaires en matière de crédit, normes de Bâle, IFRS 9 et réglementations de protection du consommateur.',
        },
        weight: 0.35,
      },
    ],
    order: 3,
  },
  // =========================================================================
  // BANKING — Investment Advisor
  // =========================================================================
  {
    id: 'bank-ia-professional',
    name: {
      es: 'Habilidades Profesionales — Asesor de Inversiones',
      en: 'Professional Skills — Investment Advisor',
      fr: 'Compétences Professionnelles — Conseiller en Investissements',
    },
    description: {
      es: 'Conocimientos técnicos en mercados financieros, productos de inversión, gestión de portafolios y normativa de protección al inversionista.',
      en: 'Technical knowledge in financial markets, investment products, portfolio management, and investor protection regulations.',
      fr: 'Connaissances techniques en marchés financiers, produits d\'investissement, gestion de portefeuilles et réglementation de protection des investisseurs.',
    },
    competencies: [
      {
        id: 'bank-ia-market-knowledge',
        name: { es: 'Conocimiento de Mercados Financieros', en: 'Financial Markets Knowledge', fr: 'Connaissance des Marchés Financiers' },
        description: {
          es: 'Comprensión profunda de mercados de renta fija, variable, derivados, divisas y tendencias macroeconómicas que afectan las inversiones.',
          en: 'Deep understanding of fixed income, equity, derivatives, foreign exchange markets, and macroeconomic trends affecting investments.',
          fr: 'Compréhension approfondie des marchés de taux, actions, dérivés, devises et tendances macroéconomiques affectant les investissements.',
        },
        weight: 0.3,
      },
      {
        id: 'bank-ia-portfolio-advisory',
        name: { es: 'Asesoría de Portafolio', en: 'Portfolio Advisory', fr: 'Conseil en Portefeuille' },
        description: {
          es: 'Capacidad para construir y recomendar portafolios de inversión diversificados alineados al perfil de riesgo, horizonte temporal y objetivos del cliente.',
          en: 'Ability to build and recommend diversified investment portfolios aligned with the client\'s risk profile, time horizon, and goals.',
          fr: 'Capacité à construire et recommander des portefeuilles d\'investissement diversifiés alignés sur le profil de risque, l\'horizon temporel et les objectifs du client.',
        },
        weight: 0.35,
      },
      {
        id: 'bank-ia-suitability',
        name: { es: 'Idoneidad y Cumplimiento (Suitability)', en: 'Suitability & Compliance', fr: 'Adéquation et Conformité' },
        description: {
          es: 'Conocimiento de regulaciones de idoneidad (suitability), perfilamiento de riesgo del inversionista, y cumplimiento de normativas de transparencia y protección.',
          en: 'Knowledge of suitability regulations, investor risk profiling, and compliance with transparency and protection rules.',
          fr: 'Connaissance des réglementations d\'adéquation, profilage de risque des investisseurs et conformité aux normes de transparence et de protection.',
        },
        weight: 0.35,
      },
    ],
    order: 1,
  },
  {
    id: 'bank-ia-soft-skills',
    name: {
      es: 'Habilidades Blandas — Asesor de Inversiones',
      en: 'Soft Skills — Investment Advisor',
      fr: 'Compétences Interpersonnelles — Conseiller en Investissements',
    },
    description: {
      es: 'Competencias interpersonales para la relación con clientes de alto valor patrimonial, generación de confianza y comunicación de estrategias financieras.',
      en: 'Interpersonal competencies for relationships with high-net-worth clients, trust building, and communication of financial strategies.',
      fr: 'Compétences interpersonnelles pour la relation avec les clients à forte valeur patrimoniale, génération de confiance et communication de stratégies financières.',
    },
    competencies: [
      {
        id: 'bank-ia-trust-building',
        name: { es: 'Construcción de Confianza', en: 'Trust Building', fr: 'Construction de la Confiance' },
        description: {
          es: 'Habilidad para generar relaciones de largo plazo basadas en confianza, transparencia y resultados consistentes con clientes patrimoniales.',
          en: 'Skill in building long-term relationships based on trust, transparency, and consistent results with wealth clients.',
          fr: 'Compétence pour bâtir des relations à long terme basées sur la confiance, la transparence et des résultats constants avec les clients patrimoniaux.',
        },
        weight: 0.35,
      },
      {
        id: 'bank-ia-financial-comm',
        name: { es: 'Comunicación Financiera Clara', en: 'Clear Financial Communication', fr: 'Communication Financière Claire' },
        description: {
          es: 'Capacidad para explicar conceptos financieros complejos, riesgos y rendimientos esperados de forma comprensible para clientes no especializados.',
          en: 'Ability to explain complex financial concepts, risks, and expected returns in an understandable way for non-specialist clients.',
          fr: 'Capacité à expliquer des concepts financiers complexes, risques et rendements attendus de manière compréhensible pour des clients non spécialistes.',
        },
        weight: 0.35,
      },
      {
        id: 'bank-ia-needs-discovery',
        name: { es: 'Descubrimiento de Necesidades', en: 'Needs Discovery', fr: 'Découverte des Besoins' },
        description: {
          es: 'Habilidad para identificar las necesidades patrimoniales, metas de vida y preocupaciones financieras del cliente mediante escucha activa y preguntas estratégicas.',
          en: 'Skill in identifying client wealth needs, life goals, and financial concerns through active listening and strategic questioning.',
          fr: 'Compétence pour identifier les besoins patrimoniaux, objectifs de vie et préoccupations financières du client par l\'écoute active et le questionnement stratégique.',
        },
        weight: 0.3,
      },
    ],
    order: 2,
  },
  {
    id: 'bank-ia-readiness',
    name: {
      es: 'Disposición al Cambio — Asesor de Inversiones',
      en: 'Readiness for Change — Investment Advisor',
      fr: 'Disposition au Changement — Conseiller en Investissements',
    },
    description: {
      es: 'Capacidad de adaptación ante la evolución de los mercados financieros, plataformas digitales de inversión y nuevas clases de activos.',
      en: 'Adaptability to the evolution of financial markets, digital investment platforms, and new asset classes.',
      fr: 'Adaptabilité à l\'évolution des marchés financiers, des plateformes d\'investissement numériques et des nouvelles classes d\'actifs.',
    },
    competencies: [
      {
        id: 'bank-ia-digital-wealth',
        name: { es: 'Plataformas Digitales de Inversión', en: 'Digital Investment Platforms', fr: 'Plateformes d\'Investissement Numériques' },
        description: {
          es: 'Disposición para adoptar y asesorar sobre robo-advisors, plataformas de inversión en línea y herramientas digitales de gestión patrimonial.',
          en: 'Willingness to adopt and advise on robo-advisors, online investment platforms, and digital wealth management tools.',
          fr: 'Volonté d\'adopter et conseiller sur les robo-advisors, plateformes d\'investissement en ligne et outils numériques de gestion patrimoniale.',
        },
        weight: 0.3,
      },
      {
        id: 'bank-ia-new-assets',
        name: { es: 'Nuevas Clases de Activos', en: 'New Asset Classes', fr: 'Nouvelles Classes d\'Actifs' },
        description: {
          es: 'Apertura para incorporar activos alternativos (ESG, criptoactivos regulados, private equity accesible, activos tokenizados) en las recomendaciones de inversión.',
          en: 'Openness to incorporating alternative assets (ESG, regulated crypto assets, accessible private equity, tokenized assets) in investment recommendations.',
          fr: 'Ouverture à l\'incorporation d\'actifs alternatifs (ESG, crypto-actifs réglementés, private equity accessible, actifs tokenisés) dans les recommandations d\'investissement.',
        },
        weight: 0.35,
      },
      {
        id: 'bank-ia-behavioral-finance',
        name: { es: 'Finanzas Conductuales', en: 'Behavioral Finance', fr: 'Finance Comportementale' },
        description: {
          es: 'Disposición para aplicar principios de finanzas conductuales en la asesoría, ayudando a los clientes a superar sesgos cognitivos en sus decisiones de inversión.',
          en: 'Willingness to apply behavioral finance principles in advisory, helping clients overcome cognitive biases in their investment decisions.',
          fr: 'Volonté d\'appliquer les principes de la finance comportementale dans le conseil, aidant les clients à surmonter les biais cognitifs dans leurs décisions d\'investissement.',
        },
        weight: 0.35,
      },
    ],
    order: 3,
  },
  // =========================================================================
  // BANKING — Bank Teller / Operations Officer
  // =========================================================================
  {
    id: 'bank-bt-professional',
    name: {
      es: 'Habilidades Profesionales — Cajero Bancario',
      en: 'Professional Skills — Bank Teller',
      fr: 'Compétences Professionnelles — Caissier Bancaire',
    },
    description: {
      es: 'Conocimientos técnicos en procesamiento de transacciones, manejo de efectivo, prevención de fraudes y uso de sistemas bancarios centrales.',
      en: 'Technical knowledge in transaction processing, cash handling, fraud prevention, and use of core banking systems.',
      fr: 'Connaissances techniques en traitement des transactions, gestion des espèces, prévention de la fraude et utilisation des systèmes bancaires centraux.',
    },
    competencies: [
      {
        id: 'bank-bt-transactions',
        name: { es: 'Procesamiento de Transacciones', en: 'Transaction Processing', fr: 'Traitement des Transactions' },
        description: {
          es: 'Capacidad para ejecutar depósitos, retiros, transferencias, pagos de servicios y cambio de divisas con precisión, velocidad y cumplimiento de procedimientos.',
          en: 'Ability to execute deposits, withdrawals, transfers, bill payments, and foreign exchange with accuracy, speed, and procedure compliance.',
          fr: 'Capacité à exécuter dépôts, retraits, transferts, paiements de services et change de devises avec précision, rapidité et respect des procédures.',
        },
        weight: 0.35,
      },
      {
        id: 'bank-bt-cash-handling',
        name: { es: 'Manejo de Efectivo y Valores', en: 'Cash & Valuables Handling', fr: 'Gestion des Espèces et Valeurs' },
        description: {
          es: 'Habilidad para contar, verificar, custodiar y cuadrar efectivo y valores, detectar billetes falsos y mantener los niveles de caja requeridos.',
          en: 'Skill in counting, verifying, safeguarding, and balancing cash and valuables, detecting counterfeit bills, and maintaining required cash levels.',
          fr: 'Compétence pour compter, vérifier, garder et équilibrer espèces et valeurs, détecter les faux billets et maintenir les niveaux de caisse requis.',
        },
        weight: 0.35,
      },
      {
        id: 'bank-bt-fraud-prevention',
        name: { es: 'Prevención de Fraude y PLD', en: 'Fraud Prevention & AML', fr: 'Prévention de la Fraude et LCB' },
        description: {
          es: 'Conocimiento de indicadores de fraude, operaciones sospechosas, protocolos de prevención de lavado de dinero y reportes de operaciones inusuales.',
          en: 'Knowledge of fraud indicators, suspicious operations, anti-money laundering protocols, and unusual transaction reporting.',
          fr: 'Connaissance des indicateurs de fraude, opérations suspectes, protocoles de lutte contre le blanchiment et signalement d\'opérations inhabituelles.',
        },
        weight: 0.3,
      },
    ],
    order: 1,
  },
  {
    id: 'bank-bt-soft-skills',
    name: {
      es: 'Habilidades Blandas — Cajero Bancario',
      en: 'Soft Skills — Bank Teller',
      fr: 'Compétences Interpersonnelles — Caissier Bancaire',
    },
    description: {
      es: 'Competencias de servicio al cliente, atención bajo presión y trabajo en equipo necesarias para la atención en ventanilla.',
      en: 'Customer service, working under pressure, and teamwork competencies needed for counter service.',
      fr: 'Compétences en service client, travail sous pression et travail d\'équipe nécessaires pour le service au guichet.',
    },
    competencies: [
      {
        id: 'bank-bt-customer-service',
        name: { es: 'Atención al Cliente en Ventanilla', en: 'Counter Customer Service', fr: 'Service Client au Guichet' },
        description: {
          es: 'Capacidad para atender a los clientes con amabilidad, eficiencia y profesionalismo, incluso en situaciones de alta demanda o clientes difíciles.',
          en: 'Ability to serve customers with friendliness, efficiency, and professionalism, even during high-demand situations or with difficult customers.',
          fr: 'Capacité à servir les clients avec amabilité, efficacité et professionnalisme, même en situation de forte demande ou avec des clients difficiles.',
        },
        weight: 0.4,
      },
      {
        id: 'bank-bt-accuracy',
        name: { es: 'Precisión y Atención al Detalle', en: 'Accuracy & Attention to Detail', fr: 'Précision et Attention aux Détails' },
        description: {
          es: 'Rigurosidad para ejecutar transacciones sin errores, verificar documentación y mantener registros exactos bajo presión de tiempo.',
          en: 'Rigor in executing transactions without errors, verifying documentation, and maintaining accurate records under time pressure.',
          fr: 'Rigueur dans l\'exécution des transactions sans erreurs, la vérification des documents et le maintien de registres exacts sous pression temporelle.',
        },
        weight: 0.35,
      },
      {
        id: 'bank-bt-teamwork',
        name: { es: 'Trabajo en Equipo Operativo', en: 'Operational Teamwork', fr: 'Travail d\'Équipe Opérationnel' },
        description: {
          es: 'Habilidad para colaborar con compañeros de ventanilla, supervisores y otras áreas para mantener la fluidez operativa de la sucursal.',
          en: 'Skill in collaborating with fellow tellers, supervisors, and other areas to maintain the branch\'s operational flow.',
          fr: 'Compétence pour collaborer avec les collègues guichetiers, superviseurs et autres services pour maintenir la fluidité opérationnelle de l\'agence.',
        },
        weight: 0.25,
      },
    ],
    order: 2,
  },
  {
    id: 'bank-bt-readiness',
    name: {
      es: 'Disposición al Cambio — Cajero Bancario',
      en: 'Readiness for Change — Bank Teller',
      fr: 'Disposition au Changement — Caissier Bancaire',
    },
    description: {
      es: 'Capacidad de adaptación ante la automatización de transacciones, nuevos canales digitales y la evolución del rol de ventanilla.',
      en: 'Adaptability to transaction automation, new digital channels, and the evolution of the teller role.',
      fr: 'Adaptabilité à l\'automatisation des transactions, aux nouveaux canaux numériques et à l\'évolution du rôle de guichetier.',
    },
    competencies: [
      {
        id: 'bank-bt-automation',
        name: { es: 'Adaptación a la Automatización', en: 'Adaptation to Automation', fr: 'Adaptation à l\'Automatisation' },
        description: {
          es: 'Disposición para trabajar con ATMs inteligentes, kioscos de autoservicio y sistemas automatizados que transforman las tareas tradicionales de ventanilla.',
          en: 'Willingness to work with smart ATMs, self-service kiosks, and automated systems that transform traditional teller tasks.',
          fr: 'Volonté de travailler avec des DAB intelligents, bornes de libre-service et systèmes automatisés transformant les tâches traditionnelles du guichet.',
        },
        weight: 0.35,
      },
      {
        id: 'bank-bt-role-evolution',
        name: { es: 'Evolución del Rol a Asesor', en: 'Role Evolution to Advisor', fr: 'Évolution du Rôle vers Conseiller' },
        description: {
          es: 'Apertura para evolucionar de un rol transaccional a uno consultivo, ofreciendo orientación básica sobre productos bancarios y derivando a especialistas.',
          en: 'Openness to evolving from a transactional role to a consultative one, offering basic guidance on banking products and referring to specialists.',
          fr: 'Ouverture à l\'évolution d\'un rôle transactionnel vers un rôle consultatif, offrant des conseils de base sur les produits bancaires et orientant vers les spécialistes.',
        },
        weight: 0.35,
      },
      {
        id: 'bank-bt-digital-literacy',
        name: { es: 'Alfabetización Digital', en: 'Digital Literacy', fr: 'Littératie Numérique' },
        description: {
          es: 'Capacidad para aprender y utilizar nuevos sistemas bancarios, aplicaciones móviles del banco y herramientas digitales de servicio al cliente.',
          en: 'Ability to learn and use new banking systems, the bank\'s mobile applications, and digital customer service tools.',
          fr: 'Capacité à apprendre et utiliser de nouveaux systèmes bancaires, applications mobiles de la banque et outils numériques de service client.',
        },
        weight: 0.3,
      },
    ],
    order: 3,
  },
  // ==========================================================================
  // TECHNOLOGY / IT — Software Developer
  // ==========================================================================
  {
    id: 'tech-swdev-professional',
    name: { es: 'Habilidades Profesionales de Desarrollo de Software', en: 'Software Development Professional Skills', fr: 'Compétences Professionnelles en Développement Logiciel' },
    description: { es: 'Conocimientos técnicos en ingeniería de software, arquitectura, programación y prácticas de calidad.', en: 'Technical knowledge in software engineering, architecture, programming, and quality practices.', fr: 'Connaissances techniques en ingénierie logicielle, architecture, programmation et pratiques de qualité.' },
    competencies: [
      { id: 'software-engineering', name: { es: 'Ingeniería de Software', en: 'Software Engineering', fr: 'Ingénierie Logicielle' }, description: { es: 'Dominio de patrones de diseño, principios SOLID, arquitectura de software y buenas prácticas de desarrollo.', en: 'Mastery of design patterns, SOLID principles, software architecture, and development best practices.', fr: 'Maîtrise des patrons de conception, principes SOLID, architecture logicielle et bonnes pratiques de développement.' }, weight: 0.3 },
      { id: 'coding-proficiency', name: { es: 'Competencia en Programación', en: 'Coding Proficiency', fr: 'Compétence en Programmation' }, description: { es: 'Capacidad para escribir código limpio, eficiente y mantenible en múltiples lenguajes y frameworks.', en: 'Ability to write clean, efficient, and maintainable code across multiple languages and frameworks.', fr: 'Capacité à écrire du code propre, efficace et maintenable dans plusieurs langages et frameworks.' }, weight: 0.3 },
      { id: 'testing-quality', name: { es: 'Pruebas y Calidad', en: 'Testing & Quality', fr: 'Tests et Qualité' }, description: { es: 'Conocimiento y aplicación de estrategias de pruebas unitarias, integración, end-to-end y revisión de código.', en: 'Knowledge and application of unit, integration, end-to-end testing strategies and code review.', fr: 'Connaissance et application de stratégies de tests unitaires, d\'intégration, end-to-end et revue de code.' }, weight: 0.2 },
      { id: 'devops-cicd', name: { es: 'DevOps y CI/CD', en: 'DevOps & CI/CD', fr: 'DevOps et CI/CD' }, description: { es: 'Experiencia con pipelines de integración y despliegue continuo, contenedores, infraestructura como código y monitoreo.', en: 'Experience with continuous integration and deployment pipelines, containers, infrastructure as code, and monitoring.', fr: 'Expérience avec les pipelines d\'intégration et de déploiement continus, conteneurs, infrastructure as code et surveillance.' }, weight: 0.2 },
    ],
    order: 1,
  },
  {
    id: 'tech-swdev-soft-skills',
    name: { es: 'Habilidades Blandas del Desarrollador', en: 'Developer Soft Skills', fr: 'Compétences Interpersonnelles du Développeur' },
    description: { es: 'Competencias interpersonales y de colaboración esenciales para el trabajo en equipos de desarrollo.', en: 'Interpersonal and collaboration competencies essential for working in development teams.', fr: 'Compétences interpersonnelles et de collaboration essentielles pour le travail en équipes de développement.' },
    competencies: [
      { id: 'team-collaboration', name: { es: 'Colaboración en Equipo', en: 'Team Collaboration', fr: 'Collaboration en Équipe' }, description: { es: 'Capacidad para trabajar efectivamente en equipos ágiles, participar en revisiones de código y compartir conocimientos.', en: 'Ability to work effectively in agile teams, participate in code reviews, and share knowledge.', fr: 'Capacité à travailler efficacement en équipes agiles, participer aux revues de code et partager les connaissances.' }, weight: 0.35 },
      { id: 'technical-communication', name: { es: 'Comunicación Técnica', en: 'Technical Communication', fr: 'Communication Technique' }, description: { es: 'Habilidad para documentar código, explicar decisiones técnicas y comunicar complejidades a audiencias no técnicas.', en: 'Ability to document code, explain technical decisions, and communicate complexities to non-technical audiences.', fr: 'Capacité à documenter le code, expliquer les décisions techniques et communiquer les complexités aux audiences non techniques.' }, weight: 0.35 },
      { id: 'problem-solving-dev', name: { es: 'Resolución de Problemas', en: 'Problem Solving', fr: 'Résolution de Problèmes' }, description: { es: 'Capacidad analítica para depurar, diagnosticar y resolver problemas técnicos complejos de manera sistemática.', en: 'Analytical ability to debug, diagnose, and solve complex technical problems systematically.', fr: 'Capacité analytique à déboguer, diagnostiquer et résoudre systématiquement des problèmes techniques complexes.' }, weight: 0.3 },
    ],
    order: 2,
  },
  {
    id: 'tech-swdev-readiness',
    name: { es: 'Disposición al Cambio del Desarrollador', en: 'Developer Readiness for Change', fr: 'Disposition au Changement du Développeur' },
    description: { es: 'Capacidad de adaptación ante nuevas tecnologías, frameworks y paradigmas de desarrollo.', en: 'Adaptability to new technologies, frameworks, and development paradigms.', fr: 'Adaptabilité aux nouvelles technologies, frameworks et paradigmes de développement.' },
    competencies: [
      { id: 'continuous-learning', name: { es: 'Aprendizaje Continuo', en: 'Continuous Learning', fr: 'Apprentissage Continu' }, description: { es: 'Disposición para mantenerse actualizado con nuevos lenguajes, frameworks y herramientas del ecosistema tecnológico.', en: 'Willingness to stay updated with new languages, frameworks, and tools in the technology ecosystem.', fr: 'Volonté de rester à jour avec les nouveaux langages, frameworks et outils de l\'écosystème technologique.' }, weight: 0.35 },
      { id: 'ai-adoption', name: { es: 'Adopción de IA en Desarrollo', en: 'AI Adoption in Development', fr: 'Adoption de l\'IA en Développement' }, description: { es: 'Apertura para integrar herramientas de IA (copilots, generación de código, testing automatizado) en el flujo de trabajo diario.', en: 'Openness to integrating AI tools (copilots, code generation, automated testing) into daily workflow.', fr: 'Ouverture à l\'intégration d\'outils d\'IA (copilotes, génération de code, tests automatisés) dans le flux de travail quotidien.' }, weight: 0.35 },
      { id: 'cloud-native-mindset', name: { es: 'Mentalidad Cloud-Native', en: 'Cloud-Native Mindset', fr: 'Mentalité Cloud-Native' }, description: { es: 'Disposición para adoptar arquitecturas cloud-native, microservicios, serverless y prácticas de desarrollo distribuido.', en: 'Willingness to adopt cloud-native architectures, microservices, serverless, and distributed development practices.', fr: 'Volonté d\'adopter les architectures cloud-native, microservices, serverless et pratiques de développement distribué.' }, weight: 0.3 },
    ],
    order: 3,
  },
  // ==========================================================================
  // TECHNOLOGY / IT — IT Manager / CTO
  // ==========================================================================
  {
    id: 'tech-itmgr-professional',
    name: { es: 'Habilidades Profesionales de Gestión de TI', en: 'IT Management Professional Skills', fr: 'Compétences Professionnelles en Gestion IT' },
    description: { es: 'Conocimientos técnicos y estratégicos para la dirección tecnológica de una organización.', en: 'Technical and strategic knowledge for leading an organization\'s technology direction.', fr: 'Connaissances techniques et stratégiques pour la direction technologique d\'une organisation.' },
    competencies: [
      { id: 'technology-strategy', name: { es: 'Estrategia Tecnológica', en: 'Technology Strategy', fr: 'Stratégie Technologique' }, description: { es: 'Capacidad para definir y ejecutar la hoja de ruta tecnológica alineada con los objetivos de negocio.', en: 'Ability to define and execute the technology roadmap aligned with business objectives.', fr: 'Capacité à définir et exécuter la feuille de route technologique alignée avec les objectifs d\'affaires.' }, weight: 0.3 },
      { id: 'it-governance', name: { es: 'Gobernanza de TI', en: 'IT Governance', fr: 'Gouvernance IT' }, description: { es: 'Conocimiento de marcos de gobierno de TI (ITIL, COBIT), gestión de riesgos tecnológicos y cumplimiento normativo.', en: 'Knowledge of IT governance frameworks (ITIL, COBIT), technology risk management, and regulatory compliance.', fr: 'Connaissance des cadres de gouvernance IT (ITIL, COBIT), gestion des risques technologiques et conformité réglementaire.' }, weight: 0.25 },
      { id: 'budget-vendor-mgmt', name: { es: 'Gestión de Presupuesto y Proveedores', en: 'Budget & Vendor Management', fr: 'Gestion Budgétaire et Fournisseurs' }, description: { es: 'Habilidad para gestionar presupuestos de TI, negociar con proveedores y optimizar el retorno de inversión tecnológica.', en: 'Ability to manage IT budgets, negotiate with vendors, and optimize technology return on investment.', fr: 'Capacité à gérer les budgets IT, négocier avec les fournisseurs et optimiser le retour sur investissement technologique.' }, weight: 0.2 },
      { id: 'infrastructure-architecture', name: { es: 'Infraestructura y Arquitectura', en: 'Infrastructure & Architecture', fr: 'Infrastructure et Architecture' }, description: { es: 'Comprensión de arquitectura empresarial, infraestructura cloud, seguridad y escalabilidad de sistemas.', en: 'Understanding of enterprise architecture, cloud infrastructure, security, and system scalability.', fr: 'Compréhension de l\'architecture d\'entreprise, infrastructure cloud, sécurité et évolutivité des systèmes.' }, weight: 0.25 },
    ],
    order: 1,
  },
  {
    id: 'tech-itmgr-soft-skills',
    name: { es: 'Habilidades Blandas del Gerente de TI', en: 'IT Manager Soft Skills', fr: 'Compétences Interpersonnelles du Directeur IT' },
    description: { es: 'Competencias de liderazgo, comunicación y gestión de equipos tecnológicos.', en: 'Leadership, communication, and technology team management competencies.', fr: 'Compétences en leadership, communication et gestion d\'équipes technologiques.' },
    competencies: [
      { id: 'tech-leadership', name: { es: 'Liderazgo Tecnológico', en: 'Technology Leadership', fr: 'Leadership Technologique' }, description: { es: 'Capacidad para inspirar y dirigir equipos técnicos, fomentar la innovación y gestionar el talento tecnológico.', en: 'Ability to inspire and lead technical teams, foster innovation, and manage technology talent.', fr: 'Capacité à inspirer et diriger des équipes techniques, favoriser l\'innovation et gérer le talent technologique.' }, weight: 0.35 },
      { id: 'stakeholder-management', name: { es: 'Gestión de Stakeholders', en: 'Stakeholder Management', fr: 'Gestion des Parties Prenantes' }, description: { es: 'Habilidad para comunicar la visión tecnológica a la junta directiva, traducir necesidades de negocio a soluciones técnicas.', en: 'Ability to communicate the technology vision to the board, translate business needs into technical solutions.', fr: 'Capacité à communiquer la vision technologique au conseil d\'administration, traduire les besoins d\'affaires en solutions techniques.' }, weight: 0.35 },
      { id: 'change-management', name: { es: 'Gestión del Cambio', en: 'Change Management', fr: 'Gestion du Changement' }, description: { es: 'Capacidad para liderar procesos de transformación digital, gestionar resistencia al cambio y asegurar adopción tecnológica.', en: 'Ability to lead digital transformation processes, manage resistance to change, and ensure technology adoption.', fr: 'Capacité à diriger des processus de transformation numérique, gérer la résistance au changement et assurer l\'adoption technologique.' }, weight: 0.3 },
    ],
    order: 2,
  },
  {
    id: 'tech-itmgr-readiness',
    name: { es: 'Disposición al Cambio del Gerente de TI', en: 'IT Manager Readiness for Change', fr: 'Disposition au Changement du Directeur IT' },
    description: { es: 'Capacidad de adaptación ante tendencias emergentes en tecnología empresarial.', en: 'Adaptability to emerging trends in enterprise technology.', fr: 'Adaptabilité aux tendances émergentes en technologie d\'entreprise.' },
    competencies: [
      { id: 'digital-transformation', name: { es: 'Transformación Digital', en: 'Digital Transformation', fr: 'Transformation Numérique' }, description: { es: 'Disposición para liderar la adopción de tecnologías emergentes y rediseñar procesos de negocio digitalmente.', en: 'Willingness to lead the adoption of emerging technologies and digitally redesign business processes.', fr: 'Volonté de diriger l\'adoption de technologies émergentes et de redessiner numériquement les processus d\'affaires.' }, weight: 0.35 },
      { id: 'ai-ml-enterprise', name: { es: 'IA y ML Empresarial', en: 'Enterprise AI & ML', fr: 'IA et ML d\'Entreprise' }, description: { es: 'Apertura para implementar soluciones de inteligencia artificial y machine learning a escala organizacional.', en: 'Openness to implementing artificial intelligence and machine learning solutions at organizational scale.', fr: 'Ouverture à l\'implémentation de solutions d\'intelligence artificielle et d\'apprentissage automatique à l\'échelle organisationnelle.' }, weight: 0.35 },
      { id: 'zero-trust-security', name: { es: 'Seguridad Zero Trust', en: 'Zero Trust Security', fr: 'Sécurité Zero Trust' }, description: { es: 'Disposición para evolucionar hacia modelos de seguridad zero-trust y protección de datos en entornos híbridos y multi-cloud.', en: 'Willingness to evolve toward zero-trust security models and data protection in hybrid and multi-cloud environments.', fr: 'Volonté d\'évoluer vers des modèles de sécurité zero-trust et la protection des données dans des environnements hybrides et multi-cloud.' }, weight: 0.3 },
    ],
    order: 3,
  },
  // ==========================================================================
  // TECHNOLOGY / IT — Data Analyst / Data Scientist
  // ==========================================================================
  {
    id: 'tech-data-professional',
    name: { es: 'Habilidades Profesionales de Análisis de Datos', en: 'Data Analysis Professional Skills', fr: 'Compétences Professionnelles en Analyse de Données' },
    description: { es: 'Conocimientos técnicos en estadística, programación analítica, modelado de datos y herramientas de BI.', en: 'Technical knowledge in statistics, analytical programming, data modeling, and BI tools.', fr: 'Connaissances techniques en statistiques, programmation analytique, modélisation de données et outils de BI.' },
    competencies: [
      { id: 'statistical-analysis', name: { es: 'Análisis Estadístico', en: 'Statistical Analysis', fr: 'Analyse Statistique' }, description: { es: 'Dominio de métodos estadísticos, pruebas de hipótesis, regresión y análisis multivariante para extraer insights de datos.', en: 'Mastery of statistical methods, hypothesis testing, regression, and multivariate analysis to extract data insights.', fr: 'Maîtrise des méthodes statistiques, tests d\'hypothèses, régression et analyse multivariée pour extraire des insights des données.' }, weight: 0.3 },
      { id: 'data-programming', name: { es: 'Programación Analítica', en: 'Analytical Programming', fr: 'Programmation Analytique' }, description: { es: 'Competencia en Python, R, SQL y herramientas de procesamiento de datos a escala (Spark, pandas).', en: 'Proficiency in Python, R, SQL, and data processing tools at scale (Spark, pandas).', fr: 'Compétence en Python, R, SQL et outils de traitement de données à grande échelle (Spark, pandas).' }, weight: 0.25 },
      { id: 'data-visualization', name: { es: 'Visualización de Datos', en: 'Data Visualization', fr: 'Visualisation de Données' }, description: { es: 'Habilidad para crear visualizaciones efectivas y dashboards con herramientas como Tableau, Power BI o matplotlib.', en: 'Ability to create effective visualizations and dashboards with tools like Tableau, Power BI, or matplotlib.', fr: 'Capacité à créer des visualisations efficaces et des tableaux de bord avec des outils comme Tableau, Power BI ou matplotlib.' }, weight: 0.2 },
      { id: 'ml-modeling', name: { es: 'Modelado con Machine Learning', en: 'Machine Learning Modeling', fr: 'Modélisation avec Machine Learning' }, description: { es: 'Capacidad para construir, evaluar y desplegar modelos predictivos y de clasificación usando técnicas de ML.', en: 'Ability to build, evaluate, and deploy predictive and classification models using ML techniques.', fr: 'Capacité à construire, évaluer et déployer des modèles prédictifs et de classification avec des techniques de ML.' }, weight: 0.25 },
    ],
    order: 1,
  },
  {
    id: 'tech-data-soft-skills',
    name: { es: 'Habilidades Blandas del Analista de Datos', en: 'Data Analyst Soft Skills', fr: 'Compétences Interpersonnelles de l\'Analyste de Données' },
    description: { es: 'Competencias interpersonales para comunicar hallazgos y colaborar con equipos multidisciplinarios.', en: 'Interpersonal competencies for communicating findings and collaborating with multidisciplinary teams.', fr: 'Compétences interpersonnelles pour communiquer les résultats et collaborer avec des équipes multidisciplinaires.' },
    competencies: [
      { id: 'data-storytelling', name: { es: 'Narrativa de Datos', en: 'Data Storytelling', fr: 'Narration de Données' }, description: { es: 'Capacidad para traducir análisis complejos en narrativas claras y accionables para audiencias no técnicas.', en: 'Ability to translate complex analyses into clear and actionable narratives for non-technical audiences.', fr: 'Capacité à traduire des analyses complexes en récits clairs et exploitables pour des audiences non techniques.' }, weight: 0.4 },
      { id: 'cross-functional-collab', name: { es: 'Colaboración Interfuncional', en: 'Cross-Functional Collaboration', fr: 'Collaboration Interfonctionnelle' }, description: { es: 'Habilidad para trabajar con equipos de negocio, ingeniería y producto para definir y resolver problemas con datos.', en: 'Ability to work with business, engineering, and product teams to define and solve problems with data.', fr: 'Capacité à travailler avec les équipes métier, ingénierie et produit pour définir et résoudre des problèmes avec les données.' }, weight: 0.3 },
      { id: 'critical-thinking-data', name: { es: 'Pensamiento Crítico Analítico', en: 'Analytical Critical Thinking', fr: 'Pensée Critique Analytique' }, description: { es: 'Capacidad para cuestionar supuestos, identificar sesgos en datos y validar la integridad de los análisis.', en: 'Ability to question assumptions, identify data biases, and validate the integrity of analyses.', fr: 'Capacité à remettre en question les hypothèses, identifier les biais dans les données et valider l\'intégrité des analyses.' }, weight: 0.3 },
    ],
    order: 2,
  },
  {
    id: 'tech-data-readiness',
    name: { es: 'Disposición al Cambio del Analista de Datos', en: 'Data Analyst Readiness for Change', fr: 'Disposition au Changement de l\'Analyste de Données' },
    description: { es: 'Capacidad de adaptación ante la evolución de herramientas y técnicas de ciencia de datos.', en: 'Adaptability to the evolution of data science tools and techniques.', fr: 'Adaptabilité à l\'évolution des outils et techniques de science des données.' },
    competencies: [
      { id: 'generative-ai-data', name: { es: 'IA Generativa en Análisis de Datos', en: 'Generative AI in Data Analysis', fr: 'IA Générative en Analyse de Données' }, description: { es: 'Disposición para integrar modelos de lenguaje y herramientas de IA generativa en flujos de análisis de datos.', en: 'Willingness to integrate language models and generative AI tools into data analysis workflows.', fr: 'Volonté d\'intégrer des modèles de langage et des outils d\'IA générative dans les flux d\'analyse de données.' }, weight: 0.35 },
      { id: 'real-time-analytics', name: { es: 'Analítica en Tiempo Real', en: 'Real-Time Analytics', fr: 'Analytique en Temps Réel' }, description: { es: 'Apertura para adoptar plataformas de streaming analytics y procesamiento de datos en tiempo real.', en: 'Openness to adopting streaming analytics platforms and real-time data processing.', fr: 'Ouverture à l\'adoption de plateformes d\'analytique en streaming et au traitement de données en temps réel.' }, weight: 0.35 },
      { id: 'data-ethics', name: { es: 'Ética de Datos y Privacidad', en: 'Data Ethics & Privacy', fr: 'Éthique des Données et Vie Privée' }, description: { es: 'Disposición para implementar prácticas de datos responsables, privacidad diferencial y gobernanza ética de modelos.', en: 'Willingness to implement responsible data practices, differential privacy, and ethical model governance.', fr: 'Volonté de mettre en œuvre des pratiques de données responsables, confidentialité différentielle et gouvernance éthique des modèles.' }, weight: 0.3 },
    ],
    order: 3,
  },
  // ==========================================================================
  // TECHNOLOGY / IT — Cybersecurity Analyst
  // ==========================================================================
  {
    id: 'tech-cyber-professional',
    name: { es: 'Habilidades Profesionales de Ciberseguridad', en: 'Cybersecurity Professional Skills', fr: 'Compétences Professionnelles en Cybersécurité' },
    description: { es: 'Conocimientos técnicos en seguridad de la información, redes, análisis de amenazas y respuesta a incidentes.', en: 'Technical knowledge in information security, networking, threat analysis, and incident response.', fr: 'Connaissances techniques en sécurité de l\'information, réseaux, analyse des menaces et réponse aux incidents.' },
    competencies: [
      { id: 'network-security', name: { es: 'Seguridad de Redes', en: 'Network Security', fr: 'Sécurité Réseau' }, description: { es: 'Dominio de firewalls, IDS/IPS, segmentación de redes, VPN y protocolos de seguridad de red.', en: 'Mastery of firewalls, IDS/IPS, network segmentation, VPN, and network security protocols.', fr: 'Maîtrise des pare-feu, IDS/IPS, segmentation réseau, VPN et protocoles de sécurité réseau.' }, weight: 0.25 },
      { id: 'vulnerability-assessment', name: { es: 'Evaluación de Vulnerabilidades', en: 'Vulnerability Assessment', fr: 'Évaluation des Vulnérabilités' }, description: { es: 'Capacidad para realizar análisis de vulnerabilidades, pruebas de penetración y evaluaciones de riesgo de seguridad.', en: 'Ability to perform vulnerability analysis, penetration testing, and security risk assessments.', fr: 'Capacité à réaliser des analyses de vulnérabilités, tests de pénétration et évaluations des risques de sécurité.' }, weight: 0.25 },
      { id: 'incident-response', name: { es: 'Respuesta a Incidentes', en: 'Incident Response', fr: 'Réponse aux Incidents' }, description: { es: 'Habilidad para detectar, contener, erradicar y recuperarse de incidentes de seguridad siguiendo procedimientos establecidos.', en: 'Ability to detect, contain, eradicate, and recover from security incidents following established procedures.', fr: 'Capacité à détecter, contenir, éradiquer et se remettre d\'incidents de sécurité selon les procédures établies.' }, weight: 0.25 },
      { id: 'security-compliance', name: { es: 'Cumplimiento y Normativa de Seguridad', en: 'Security Compliance & Standards', fr: 'Conformité et Normes de Sécurité' }, description: { es: 'Conocimiento de marcos regulatorios (ISO 27001, NIST, GDPR, PCI-DSS) y auditorías de seguridad.', en: 'Knowledge of regulatory frameworks (ISO 27001, NIST, GDPR, PCI-DSS) and security audits.', fr: 'Connaissance des cadres réglementaires (ISO 27001, NIST, RGPD, PCI-DSS) et audits de sécurité.' }, weight: 0.25 },
    ],
    order: 1,
  },
  {
    id: 'tech-cyber-soft-skills',
    name: { es: 'Habilidades Blandas del Analista de Ciberseguridad', en: 'Cybersecurity Analyst Soft Skills', fr: 'Compétences Interpersonnelles de l\'Analyste en Cybersécurité' },
    description: { es: 'Competencias interpersonales para comunicar riesgos, capacitar usuarios y colaborar bajo presión.', en: 'Interpersonal competencies for communicating risks, training users, and collaborating under pressure.', fr: 'Compétences interpersonnelles pour communiquer les risques, former les utilisateurs et collaborer sous pression.' },
    competencies: [
      { id: 'risk-communication', name: { es: 'Comunicación de Riesgos', en: 'Risk Communication', fr: 'Communication des Risques' }, description: { es: 'Habilidad para comunicar amenazas y riesgos de seguridad de manera clara a la dirección y usuarios no técnicos.', en: 'Ability to communicate security threats and risks clearly to management and non-technical users.', fr: 'Capacité à communiquer clairement les menaces et risques de sécurité à la direction et aux utilisateurs non techniques.' }, weight: 0.35 },
      { id: 'security-awareness-training', name: { es: 'Capacitación en Concienciación', en: 'Security Awareness Training', fr: 'Formation de Sensibilisation' }, description: { es: 'Capacidad para diseñar y ejecutar programas de concienciación en seguridad para toda la organización.', en: 'Ability to design and execute security awareness programs for the entire organization.', fr: 'Capacité à concevoir et exécuter des programmes de sensibilisation à la sécurité pour toute l\'organisation.' }, weight: 0.3 },
      { id: 'pressure-management', name: { es: 'Manejo bajo Presión', en: 'Pressure Management', fr: 'Gestion sous Pression' }, description: { es: 'Capacidad para mantener la calma, tomar decisiones rápidas y coordinar respuestas durante incidentes de seguridad críticos.', en: 'Ability to remain calm, make quick decisions, and coordinate responses during critical security incidents.', fr: 'Capacité à rester calme, prendre des décisions rapides et coordonner les réponses lors d\'incidents de sécurité critiques.' }, weight: 0.35 },
    ],
    order: 2,
  },
  {
    id: 'tech-cyber-readiness',
    name: { es: 'Disposición al Cambio del Analista de Ciberseguridad', en: 'Cybersecurity Analyst Readiness for Change', fr: 'Disposition au Changement de l\'Analyste en Cybersécurité' },
    description: { es: 'Capacidad de adaptación ante la evolución del panorama de amenazas cibernéticas.', en: 'Adaptability to the evolving cyber threat landscape.', fr: 'Adaptabilité à l\'évolution du paysage des cybermenaces.' },
    competencies: [
      { id: 'ai-powered-threats', name: { es: 'Amenazas Potenciadas por IA', en: 'AI-Powered Threats', fr: 'Menaces Alimentées par l\'IA' }, description: { es: 'Disposición para enfrentar amenazas generadas por IA, deepfakes y ataques automatizados de nueva generación.', en: 'Willingness to confront AI-generated threats, deepfakes, and next-generation automated attacks.', fr: 'Volonté de faire face aux menaces générées par l\'IA, deepfakes et attaques automatisées de nouvelle génération.' }, weight: 0.35 },
      { id: 'cloud-security-evolution', name: { es: 'Evolución de Seguridad Cloud', en: 'Cloud Security Evolution', fr: 'Évolution de la Sécurité Cloud' }, description: { es: 'Apertura para adaptar estrategias de seguridad a entornos multi-cloud, edge computing y arquitecturas serverless.', en: 'Openness to adapting security strategies to multi-cloud environments, edge computing, and serverless architectures.', fr: 'Ouverture à l\'adaptation des stratégies de sécurité aux environnements multi-cloud, edge computing et architectures serverless.' }, weight: 0.35 },
      { id: 'regulatory-evolution', name: { es: 'Evolución Regulatoria', en: 'Regulatory Evolution', fr: 'Évolution Réglementaire' }, description: { es: 'Disposición para adaptarse a nuevas regulaciones de privacidad, ciberseguridad y protección de datos a nivel global.', en: 'Willingness to adapt to new privacy, cybersecurity, and data protection regulations globally.', fr: 'Volonté de s\'adapter aux nouvelles réglementations de confidentialité, cybersécurité et protection des données à l\'échelle mondiale.' }, weight: 0.3 },
    ],
    order: 3,
  },
  // ==========================================================================
  // TECHNOLOGY / IT — Agile Project Manager
  // ==========================================================================
  {
    id: 'tech-apm-professional',
    name: { es: 'Habilidades Profesionales de Gestión Ágil de Proyectos', en: 'Agile Project Management Professional Skills', fr: 'Compétences Professionnelles en Gestion de Projet Agile' },
    description: { es: 'Conocimientos técnicos en metodologías ágiles, gestión de entregas y métricas de rendimiento de equipos.', en: 'Technical knowledge in agile methodologies, delivery management, and team performance metrics.', fr: 'Connaissances techniques en méthodologies agiles, gestion des livraisons et métriques de performance d\'équipe.' },
    competencies: [
      { id: 'agile-frameworks', name: { es: 'Frameworks Ágiles', en: 'Agile Frameworks', fr: 'Cadres Agiles' }, description: { es: 'Dominio de Scrum, Kanban, SAFe y capacidad para seleccionar y adaptar el framework adecuado al contexto del proyecto.', en: 'Mastery of Scrum, Kanban, SAFe, and ability to select and adapt the right framework to the project context.', fr: 'Maîtrise de Scrum, Kanban, SAFe et capacité à sélectionner et adapter le cadre approprié au contexte du projet.' }, weight: 0.3 },
      { id: 'delivery-management', name: { es: 'Gestión de Entregas', en: 'Delivery Management', fr: 'Gestion des Livraisons' }, description: { es: 'Capacidad para planificar releases, gestionar dependencias, mitigar riesgos y asegurar entregas de valor continuas.', en: 'Ability to plan releases, manage dependencies, mitigate risks, and ensure continuous value delivery.', fr: 'Capacité à planifier les releases, gérer les dépendances, atténuer les risques et assurer des livraisons de valeur continues.' }, weight: 0.25 },
      { id: 'metrics-improvement', name: { es: 'Métricas y Mejora Continua', en: 'Metrics & Continuous Improvement', fr: 'Métriques et Amélioration Continue' }, description: { es: 'Uso de métricas ágiles (velocity, lead time, cycle time, burndown) para impulsar la mejora continua del equipo.', en: 'Use of agile metrics (velocity, lead time, cycle time, burndown) to drive continuous team improvement.', fr: 'Utilisation de métriques agiles (vélocité, lead time, cycle time, burndown) pour stimuler l\'amélioration continue de l\'équipe.' }, weight: 0.2 },
      { id: 'backlog-prioritization', name: { es: 'Priorización de Backlog', en: 'Backlog Prioritization', fr: 'Priorisation du Backlog' }, description: { es: 'Habilidad para colaborar con product owners en la priorización basada en valor, impacto y esfuerzo.', en: 'Ability to collaborate with product owners on value-based, impact, and effort prioritization.', fr: 'Capacité à collaborer avec les product owners sur la priorisation basée sur la valeur, l\'impact et l\'effort.' }, weight: 0.25 },
    ],
    order: 1,
  },
  {
    id: 'tech-apm-soft-skills',
    name: { es: 'Habilidades Blandas del Gerente de Proyectos Ágil', en: 'Agile Project Manager Soft Skills', fr: 'Compétences Interpersonnelles du Chef de Projet Agile' },
    description: { es: 'Competencias de facilitación, liderazgo servicial y gestión de conflictos en equipos ágiles.', en: 'Facilitation, servant leadership, and conflict management competencies in agile teams.', fr: 'Compétences en facilitation, leadership serviteur et gestion des conflits dans les équipes agiles.' },
    competencies: [
      { id: 'facilitation-coaching', name: { es: 'Facilitación y Coaching', en: 'Facilitation & Coaching', fr: 'Facilitation et Coaching' }, description: { es: 'Capacidad para facilitar ceremonias ágiles, coaching de equipos y promover la auto-organización.', en: 'Ability to facilitate agile ceremonies, coach teams, and promote self-organization.', fr: 'Capacité à faciliter les cérémonies agiles, coacher les équipes et promouvoir l\'auto-organisation.' }, weight: 0.35 },
      { id: 'conflict-resolution', name: { es: 'Resolución de Conflictos', en: 'Conflict Resolution', fr: 'Résolution de Conflits' }, description: { es: 'Habilidad para mediar conflictos dentro del equipo y entre stakeholders, fomentando un ambiente colaborativo.', en: 'Ability to mediate conflicts within the team and between stakeholders, fostering a collaborative environment.', fr: 'Capacité à résoudre les conflits au sein de l\'équipe et entre les parties prenantes, favorisant un environnement collaboratif.' }, weight: 0.3 },
      { id: 'stakeholder-engagement', name: { es: 'Engagement de Stakeholders', en: 'Stakeholder Engagement', fr: 'Engagement des Parties Prenantes' }, description: { es: 'Capacidad para gestionar expectativas, comunicar progreso y mantener la confianza de los stakeholders del proyecto.', en: 'Ability to manage expectations, communicate progress, and maintain project stakeholder trust.', fr: 'Capacité à gérer les attentes, communiquer le progrès et maintenir la confiance des parties prenantes du projet.' }, weight: 0.35 },
    ],
    order: 2,
  },
  {
    id: 'tech-apm-readiness',
    name: { es: 'Disposición al Cambio del Gerente de Proyectos Ágil', en: 'Agile PM Readiness for Change', fr: 'Disposition au Changement du Chef de Projet Agile' },
    description: { es: 'Capacidad de adaptación ante la evolución de metodologías de gestión de proyectos y equipos distribuidos.', en: 'Adaptability to the evolution of project management methodologies and distributed teams.', fr: 'Adaptabilité à l\'évolution des méthodologies de gestion de projet et des équipes distribuées.' },
    competencies: [
      { id: 'remote-hybrid-teams', name: { es: 'Equipos Remotos e Híbridos', en: 'Remote & Hybrid Teams', fr: 'Équipes Distantes et Hybrides' }, description: { es: 'Disposición para liderar equipos distribuidos geográficamente con herramientas de colaboración asíncrona.', en: 'Willingness to lead geographically distributed teams with asynchronous collaboration tools.', fr: 'Volonté de diriger des équipes distribuées géographiquement avec des outils de collaboration asynchrone.' }, weight: 0.35 },
      { id: 'ai-augmented-pm', name: { es: 'PM Aumentada con IA', en: 'AI-Augmented PM', fr: 'PM Augmentée par l\'IA' }, description: { es: 'Apertura para adoptar herramientas de IA que automatizan la planificación, estimación y seguimiento de proyectos.', en: 'Openness to adopting AI tools that automate project planning, estimation, and tracking.', fr: 'Ouverture à l\'adoption d\'outils d\'IA qui automatisent la planification, l\'estimation et le suivi des projets.' }, weight: 0.35 },
      { id: 'continuous-delivery-culture', name: { es: 'Cultura de Entrega Continua', en: 'Continuous Delivery Culture', fr: 'Culture de Livraison Continue' }, description: { es: 'Disposición para evolucionar hacia modelos de entrega continua, DevOps integrado y experimentación rápida.', en: 'Willingness to evolve toward continuous delivery models, integrated DevOps, and rapid experimentation.', fr: 'Volonté d\'évoluer vers des modèles de livraison continue, DevOps intégré et expérimentation rapide.' }, weight: 0.3 },
    ],
    order: 3,
  },

  // ============================================================================
  // LEGAL PRACTICE — Managing Partner
  // ============================================================================
  {
    id: 'legal-mp-professional',
    name: { es: 'Habilidades Profesionales del Socio Director', en: 'Managing Partner Professional Skills', fr: 'Compétences Professionnelles de l\'Associé Directeur' },
    description: { es: 'Conocimientos estratégicos y de gestión de firma para la dirección ejecutiva de una práctica legal.', en: 'Strategic and firm management knowledge for executive leadership of a legal practice.', fr: 'Connaissances stratégiques et de gestion de cabinet pour la direction exécutive d\'une pratique juridique.' },
    competencies: [
      { id: 'legal-strategic-leadership', name: { es: 'Liderazgo Estratégico y Gobernanza de Firma', en: 'Strategic Leadership & Firm Governance', fr: 'Leadership Stratégique et Gouvernance de Cabinet' }, description: { es: 'Capacidad para definir la visión, misión y dirección estratégica de la firma, gestionando comités de socios y estructuras de gobernanza.', en: 'Ability to define the firm\'s vision, mission, and strategic direction, managing partner committees and governance structures.', fr: 'Capacité à définir la vision, la mission et la direction stratégique du cabinet, en gérant les comités d\'associés et les structures de gouvernance.' }, weight: 0.3 },
      { id: 'legal-business-development', name: { es: 'Desarrollo de Negocios y Captación de Clientes', en: 'Business Development & Client Acquisition', fr: 'Développement Commercial et Acquisition de Clients' }, description: { es: 'Habilidad para identificar oportunidades de mercado, desarrollar relaciones comerciales y expandir la cartera de clientes de la firma.', en: 'Skill in identifying market opportunities, developing business relationships, and expanding the firm\'s client portfolio.', fr: 'Compétence pour identifier les opportunités de marché, développer les relations commerciales et élargir le portefeuille clients du cabinet.' }, weight: 0.25 },
      { id: 'legal-financial-management', name: { es: 'Gestión Financiera y Rentabilidad', en: 'Financial Management & Profitability', fr: 'Gestion Financière et Rentabilité' }, description: { es: 'Dominio de la gestión financiera de la firma, incluyendo presupuestos, facturación, distribución de utilidades y control de costos operativos.', en: 'Mastery of firm financial management, including budgets, billing, profit distribution, and operational cost control.', fr: 'Maîtrise de la gestion financière du cabinet, y compris les budgets, la facturation, la distribution des bénéfices et le contrôle des coûts opérationnels.' }, weight: 0.25 },
      { id: 'legal-industry-knowledge', name: { es: 'Conocimiento de la Industria Legal y Posicionamiento de Mercado', en: 'Legal Industry Knowledge & Market Positioning', fr: 'Connaissance de l\'Industrie Juridique et Positionnement de Marché' }, description: { es: 'Comprensión profunda del mercado legal, tendencias del sector, competencia y posicionamiento estratégico de la firma.', en: 'Deep understanding of the legal market, industry trends, competition, and strategic positioning of the firm.', fr: 'Compréhension approfondie du marché juridique, des tendances du secteur, de la concurrence et du positionnement stratégique du cabinet.' }, weight: 0.2 },
    ],
    order: 1,
  },
  {
    id: 'legal-mp-soft-skills',
    name: { es: 'Habilidades Blandas del Socio Director', en: 'Managing Partner Soft Skills', fr: 'Compétences Interpersonnelles de l\'Associé Directeur' },
    description: { es: 'Competencias interpersonales esenciales para liderar una firma legal y gestionar relaciones de alto nivel.', en: 'Essential interpersonal competencies for leading a law firm and managing high-level relationships.', fr: 'Compétences interpersonnelles essentielles pour diriger un cabinet d\'avocats et gérer les relations de haut niveau.' },
    competencies: [
      { id: 'legal-executive-communication', name: { es: 'Comunicación Ejecutiva e Influencia', en: 'Executive Communication & Influence', fr: 'Communication Exécutive et Influence' }, description: { es: 'Capacidad para comunicarse con autoridad y persuasión ante clientes, socios, medios y actores del sector legal.', en: 'Ability to communicate with authority and persuasion before clients, partners, media, and legal sector stakeholders.', fr: 'Capacité à communiquer avec autorité et persuasion auprès des clients, associés, médias et acteurs du secteur juridique.' }, weight: 0.35 },
      { id: 'legal-partner-relations', name: { es: 'Relaciones entre Socios y Construcción de Consenso', en: 'Partner Relations & Consensus Building', fr: 'Relations entre Associés et Construction du Consensus' }, description: { es: 'Habilidad para facilitar acuerdos entre socios, gestionar conflictos internos y construir consenso en decisiones estratégicas.', en: 'Skill in facilitating agreements among partners, managing internal conflicts, and building consensus on strategic decisions.', fr: 'Compétence pour faciliter les accords entre associés, gérer les conflits internes et construire le consensus sur les décisions stratégiques.' }, weight: 0.35 },
      { id: 'legal-talent-development', name: { es: 'Desarrollo de Talento y Mentoría', en: 'Talent Development & Mentoring', fr: 'Développement des Talents et Mentorat' }, description: { es: 'Compromiso con el desarrollo profesional de los abogados de la firma, mentoría de socios junior y retención del talento.', en: 'Commitment to the professional development of firm attorneys, mentoring junior partners, and talent retention.', fr: 'Engagement envers le développement professionnel des avocats du cabinet, le mentorat des associés juniors et la rétention des talents.' }, weight: 0.3 },
    ],
    order: 2,
  },
  {
    id: 'legal-mp-readiness',
    name: { es: 'Disposición al Cambio del Socio Director', en: 'Managing Partner Readiness for Change', fr: 'Disposition au Changement de l\'Associé Directeur' },
    description: { es: 'Capacidad de adaptación ante la transformación del sector legal y nuevos modelos de negocio jurídico.', en: 'Adaptability to the transformation of the legal sector and new legal business models.', fr: 'Adaptabilité à la transformation du secteur juridique et aux nouveaux modèles d\'affaires juridiques.' },
    competencies: [
      { id: 'legal-tech-ai-transformation', name: { es: 'Transformación de LegalTech e IA', en: 'Legal Tech & AI Transformation', fr: 'Transformation LegalTech et IA' }, description: { es: 'Disposición para adoptar tecnologías legales, inteligencia artificial y automatización que transforman la práctica jurídica.', en: 'Willingness to adopt legal technologies, artificial intelligence, and automation transforming legal practice.', fr: 'Volonté d\'adopter les technologies juridiques, l\'intelligence artificielle et l\'automatisation qui transforment la pratique juridique.' }, weight: 0.35 },
      { id: 'legal-alternative-fees', name: { es: 'Modelos de Honorarios Alternativos e Innovación Legal', en: 'Alternative Fee Models & Legal Innovation', fr: 'Modèles d\'Honoraires Alternatifs et Innovation Juridique' }, description: { es: 'Apertura para implementar modelos de honorarios basados en valor, suscripciones y esquemas innovadores más allá de la facturación por hora.', en: 'Openness to implementing value-based fee models, subscriptions, and innovative arrangements beyond hourly billing.', fr: 'Ouverture à la mise en place de modèles d\'honoraires basés sur la valeur, d\'abonnements et de dispositifs innovants au-delà de la facturation horaire.' }, weight: 0.35 },
      { id: 'legal-esg-ethics', name: { es: 'ESG y Evolución de la Ética Legal', en: 'ESG & Legal Ethics Evolution', fr: 'ESG et Évolution de l\'Éthique Juridique' }, description: { es: 'Disposición para integrar criterios ambientales, sociales y de gobernanza en la práctica legal y adaptarse a la evolución de los estándares éticos.', en: 'Willingness to integrate environmental, social, and governance criteria into legal practice and adapt to evolving ethical standards.', fr: 'Volonté d\'intégrer les critères environnementaux, sociaux et de gouvernance dans la pratique juridique et de s\'adapter à l\'évolution des normes éthiques.' }, weight: 0.3 },
    ],
    order: 3,
  },

  // ============================================================================
  // LEGAL PRACTICE — Practice Area Director
  // ============================================================================
  {
    id: 'legal-pd-professional',
    name: { es: 'Habilidades Profesionales del Director de Área de Práctica', en: 'Practice Area Director Professional Skills', fr: 'Compétences Professionnelles du Directeur de Département Juridique' },
    description: { es: 'Conocimientos técnicos y de gestión para dirigir un área de práctica legal y supervisar equipos de abogados.', en: 'Technical and management knowledge for leading a legal practice area and supervising attorney teams.', fr: 'Connaissances techniques et de gestion pour diriger un département juridique et superviser des équipes d\'avocats.' },
    competencies: [
      { id: 'legal-case-portfolio', name: { es: 'Gestión de Cartera de Casos', en: 'Case Portfolio Management', fr: 'Gestion du Portefeuille de Dossiers' }, description: { es: 'Capacidad para supervisar y optimizar la distribución de casos, prioridades y carga de trabajo del área de práctica.', en: 'Ability to oversee and optimize case distribution, priorities, and workload within the practice area.', fr: 'Capacité à superviser et optimiser la répartition des dossiers, les priorités et la charge de travail au sein du département.' }, weight: 0.3 },
      { id: 'legal-quality-standards', name: { es: 'Aseguramiento de Calidad y Estándares Legales', en: 'Quality Assurance & Legal Standards', fr: 'Assurance Qualité et Normes Juridiques' }, description: { es: 'Habilidad para establecer y mantener estándares de calidad en la producción legal, revisión de documentos y entregables al cliente.', en: 'Skill in establishing and maintaining quality standards in legal work product, document review, and client deliverables.', fr: 'Compétence pour établir et maintenir des normes de qualité dans la production juridique, la révision de documents et les livrables aux clients.' }, weight: 0.25 },
      { id: 'legal-team-performance', name: { es: 'Desempeño del Equipo y Asignación de Recursos', en: 'Team Performance & Resource Allocation', fr: 'Performance de l\'Équipe et Allocation des Ressources' }, description: { es: 'Capacidad para evaluar el desempeño de los abogados, asignar recursos eficientemente y gestionar la productividad del equipo.', en: 'Ability to evaluate attorney performance, allocate resources efficiently, and manage team productivity.', fr: 'Capacité à évaluer la performance des avocats, allouer les ressources efficacement et gérer la productivité de l\'équipe.' }, weight: 0.25 },
      { id: 'legal-client-relationship', name: { es: 'Gestión de Relaciones con Clientes', en: 'Client Relationship Management', fr: 'Gestion des Relations Clients' }, description: { es: 'Habilidad para cultivar y mantener relaciones sólidas con clientes, asegurando satisfacción y fidelización.', en: 'Skill in cultivating and maintaining strong client relationships, ensuring satisfaction and loyalty.', fr: 'Compétence pour cultiver et maintenir des relations solides avec les clients, en assurant leur satisfaction et leur fidélisation.' }, weight: 0.2 },
    ],
    order: 1,
  },
  {
    id: 'legal-pd-soft-skills',
    name: { es: 'Habilidades Blandas del Director de Área de Práctica', en: 'Practice Area Director Soft Skills', fr: 'Compétences Interpersonnelles du Directeur de Département Juridique' },
    description: { es: 'Competencias interpersonales para liderar equipos de abogados y gestionar dinámicas de práctica legal.', en: 'Interpersonal competencies for leading attorney teams and managing legal practice dynamics.', fr: 'Compétences interpersonnelles pour diriger des équipes d\'avocats et gérer les dynamiques de la pratique juridique.' },
    competencies: [
      { id: 'legal-team-leadership', name: { es: 'Liderazgo de Equipo y Desarrollo de Abogados', en: 'Team Leadership & Attorney Development', fr: 'Leadership d\'Équipe et Développement des Avocats' }, description: { es: 'Capacidad para inspirar, guiar y desarrollar profesionalmente a los abogados del área, fomentando su crecimiento y retención.', en: 'Ability to inspire, guide, and professionally develop attorneys in the area, fostering their growth and retention.', fr: 'Capacité à inspirer, guider et développer professionnellement les avocats du département, en favorisant leur croissance et leur rétention.' }, weight: 0.35 },
      { id: 'legal-cross-practice', name: { es: 'Colaboración entre Áreas de Práctica', en: 'Cross-Practice Collaboration', fr: 'Collaboration Interdépartementale' }, description: { es: 'Habilidad para coordinar con otros directores de área, compartir recursos y desarrollar estrategias multidisciplinarias.', en: 'Skill in coordinating with other area directors, sharing resources, and developing multidisciplinary strategies.', fr: 'Compétence pour coordonner avec les autres directeurs de département, partager les ressources et développer des stratégies multidisciplinaires.' }, weight: 0.3 },
      { id: 'legal-conflict-mediation', name: { es: 'Resolución de Conflictos y Mediación', en: 'Conflict Resolution & Mediation', fr: 'Résolution de Conflits et Médiation' }, description: { es: 'Capacidad para mediar conflictos entre abogados, gestionar desacuerdos en estrategia de casos y mantener un ambiente profesional.', en: 'Ability to mediate conflicts among attorneys, manage disagreements in case strategy, and maintain a professional environment.', fr: 'Capacité à résoudre les conflits entre avocats, gérer les désaccords sur la stratégie des dossiers et maintenir un environnement professionnel.' }, weight: 0.35 },
    ],
    order: 2,
  },
  {
    id: 'legal-pd-readiness',
    name: { es: 'Disposición al Cambio del Director de Área de Práctica', en: 'Practice Area Director Readiness for Change', fr: 'Disposition au Changement du Directeur de Département Juridique' },
    description: { es: 'Capacidad de adaptación ante la evolución de la gestión de práctica legal y nuevas herramientas.', en: 'Adaptability to the evolution of legal practice management and new tools.', fr: 'Adaptabilité à l\'évolution de la gestion de la pratique juridique et des nouveaux outils.' },
    competencies: [
      { id: 'legal-project-management', name: { es: 'Evolución de la Gestión de Proyectos Legales', en: 'Legal Project Management Evolution', fr: 'Évolution de la Gestion de Projets Juridiques' }, description: { es: 'Disposición para adoptar metodologías de gestión de proyectos legales, métricas de rendimiento y herramientas de seguimiento.', en: 'Willingness to adopt legal project management methodologies, performance metrics, and tracking tools.', fr: 'Volonté d\'adopter des méthodologies de gestion de projets juridiques, des métriques de performance et des outils de suivi.' }, weight: 0.35 },
      { id: 'legal-knowledge-management', name: { es: 'Gestión del Conocimiento y Herramientas de IA', en: 'Knowledge Management & AI Tools', fr: 'Gestion des Connaissances et Outils d\'IA' }, description: { es: 'Apertura para implementar sistemas de gestión del conocimiento legal, bases de datos de precedentes y herramientas de IA para investigación.', en: 'Openness to implementing legal knowledge management systems, precedent databases, and AI tools for research.', fr: 'Ouverture à la mise en place de systèmes de gestion des connaissances juridiques, de bases de données de précédents et d\'outils d\'IA pour la recherche.' }, weight: 0.35 },
      { id: 'legal-diversity-inclusion', name: { es: 'Diversidad e Inclusión en Equipos Legales', en: 'Diversity & Inclusion in Legal Teams', fr: 'Diversité et Inclusion dans les Équipes Juridiques' }, description: { es: 'Compromiso con la promoción de diversidad, equidad e inclusión en la composición y cultura de los equipos legales.', en: 'Commitment to promoting diversity, equity, and inclusion in the composition and culture of legal teams.', fr: 'Engagement envers la promotion de la diversité, de l\'équité et de l\'inclusion dans la composition et la culture des équipes juridiques.' }, weight: 0.3 },
    ],
    order: 3,
  },

  // ============================================================================
  // LEGAL PRACTICE — Senior Attorney
  // ============================================================================
  {
    id: 'legal-sa-professional',
    name: { es: 'Habilidades Profesionales del Abogado Senior', en: 'Senior Attorney Professional Skills', fr: 'Compétences Professionnelles de l\'Avocat Senior' },
    description: { es: 'Conocimientos técnicos y habilidades jurídicas esenciales para la práctica legal avanzada.', en: 'Technical knowledge and legal skills essential for advanced legal practice.', fr: 'Connaissances techniques et compétences juridiques essentielles pour la pratique juridique avancée.' },
    competencies: [
      { id: 'legal-analysis-strategy', name: { es: 'Análisis Legal y Estrategia de Caso', en: 'Legal Analysis & Case Strategy', fr: 'Analyse Juridique et Stratégie de Dossier' }, description: { es: 'Capacidad para analizar situaciones jurídicas complejas, identificar riesgos y desarrollar estrategias efectivas de litigio o negociación.', en: 'Ability to analyze complex legal situations, identify risks, and develop effective litigation or negotiation strategies.', fr: 'Capacité à analyser des situations juridiques complexes, identifier les risques et développer des stratégies efficaces de contentieux ou de négociation.' }, weight: 0.3 },
      { id: 'legal-litigation-advocacy', name: { es: 'Litigio y Habilidades de Defensa', en: 'Litigation & Advocacy Skills', fr: 'Contentieux et Compétences de Plaidoirie' }, description: { es: 'Dominio de técnicas de litigio, argumentación oral, presentación de pruebas y representación efectiva en tribunales.', en: 'Mastery of litigation techniques, oral argumentation, evidence presentation, and effective court representation.', fr: 'Maîtrise des techniques de contentieux, de l\'argumentation orale, de la présentation de preuves et de la représentation efficace devant les tribunaux.' }, weight: 0.25 },
      { id: 'legal-contract-negotiation', name: { es: 'Redacción de Contratos y Negociación', en: 'Contract Drafting & Negotiation', fr: 'Rédaction de Contrats et Négociation' }, description: { es: 'Habilidad para redactar contratos precisos, negociar términos favorables y proteger los intereses del cliente en acuerdos comerciales.', en: 'Skill in drafting precise contracts, negotiating favorable terms, and protecting client interests in commercial agreements.', fr: 'Compétence pour rédiger des contrats précis, négocier des conditions favorables et protéger les intérêts du client dans les accords commerciaux.' }, weight: 0.25 },
      { id: 'legal-research-precedent', name: { es: 'Investigación Legal y Aplicación de Precedentes', en: 'Legal Research & Precedent Application', fr: 'Recherche Juridique et Application des Précédents' }, description: { es: 'Capacidad para realizar investigación jurídica exhaustiva, analizar jurisprudencia y aplicar precedentes relevantes a casos actuales.', en: 'Ability to conduct thorough legal research, analyze case law, and apply relevant precedents to current cases.', fr: 'Capacité à mener une recherche juridique approfondie, analyser la jurisprudence et appliquer les précédents pertinents aux dossiers actuels.' }, weight: 0.2 },
    ],
    order: 1,
  },
  {
    id: 'legal-sa-soft-skills',
    name: { es: 'Habilidades Blandas del Abogado Senior', en: 'Senior Attorney Soft Skills', fr: 'Compétences Interpersonnelles de l\'Avocat Senior' },
    description: { es: 'Competencias interpersonales esenciales para la práctica legal y la relación con clientes.', en: 'Essential interpersonal competencies for legal practice and client relations.', fr: 'Compétences interpersonnelles essentielles pour la pratique juridique et les relations avec les clients.' },
    competencies: [
      { id: 'legal-client-counseling', name: { es: 'Asesoría al Cliente y Comunicación', en: 'Client Counseling & Communication', fr: 'Conseil au Client et Communication' }, description: { es: 'Capacidad para comunicar opciones legales complejas de manera clara, gestionar expectativas y construir relaciones de confianza con los clientes.', en: 'Ability to communicate complex legal options clearly, manage expectations, and build trust relationships with clients.', fr: 'Capacité à communiquer des options juridiques complexes de manière claire, gérer les attentes et construire des relations de confiance avec les clients.' }, weight: 0.35 },
      { id: 'legal-ethical-judgment', name: { es: 'Juicio Ético e Integridad Profesional', en: 'Ethical Judgment & Professional Integrity', fr: 'Jugement Éthique et Intégrité Professionnelle' }, description: { es: 'Compromiso inquebrantable con la ética profesional, confidencialidad del cliente y cumplimiento de los códigos deontológicos.', en: 'Unwavering commitment to professional ethics, client confidentiality, and compliance with codes of conduct.', fr: 'Engagement indéfectible envers l\'éthique professionnelle, la confidentialité du client et le respect des codes de déontologie.' }, weight: 0.35 },
      { id: 'legal-persuasion-argumentation', name: { es: 'Persuasión y Argumentación', en: 'Persuasion & Argumentation', fr: 'Persuasion et Argumentation' }, description: { es: 'Habilidad para construir argumentos convincentes, persuadir a jueces, contrapartes y clientes mediante lógica y evidencia.', en: 'Skill in building compelling arguments, persuading judges, counterparts, and clients through logic and evidence.', fr: 'Compétence pour construire des arguments convaincants, persuader les juges, les parties adverses et les clients par la logique et les preuves.' }, weight: 0.3 },
    ],
    order: 2,
  },
  {
    id: 'legal-sa-readiness',
    name: { es: 'Disposición al Cambio del Abogado Senior', en: 'Senior Attorney Readiness for Change', fr: 'Disposition au Changement de l\'Avocat Senior' },
    description: { es: 'Capacidad de adaptación ante la evolución de la práctica legal y nuevas áreas del derecho.', en: 'Adaptability to the evolution of legal practice and new areas of law.', fr: 'Adaptabilité à l\'évolution de la pratique juridique et des nouveaux domaines du droit.' },
    competencies: [
      { id: 'legal-ai-technology', name: { es: 'IA Legal y Adopción Tecnológica', en: 'Legal AI & Technology Adoption', fr: 'IA Juridique et Adoption Technologique' }, description: { es: 'Disposición para integrar herramientas de inteligencia artificial en la investigación, análisis de documentos y predicción de resultados legales.', en: 'Willingness to integrate artificial intelligence tools in research, document analysis, and legal outcome prediction.', fr: 'Volonté d\'intégrer des outils d\'intelligence artificielle dans la recherche, l\'analyse de documents et la prédiction de résultats juridiques.' }, weight: 0.35 },
      { id: 'legal-cross-border', name: { es: 'Derecho Transfronterizo e Internacional', en: 'Cross-Border & International Law', fr: 'Droit Transfrontalier et International' }, description: { es: 'Apertura para expandir competencias hacia el derecho internacional, transacciones transfronterizas y marcos regulatorios globales.', en: 'Openness to expanding competencies toward international law, cross-border transactions, and global regulatory frameworks.', fr: 'Ouverture à l\'élargissement des compétences vers le droit international, les transactions transfrontalières et les cadres réglementaires mondiaux.' }, weight: 0.35 },
      { id: 'legal-adr', name: { es: 'Resolución Alternativa de Disputas', en: 'Alternative Dispute Resolution', fr: 'Résolution Alternative des Litiges' }, description: { es: 'Disposición para dominar mecanismos alternativos como arbitraje, mediación y conciliación como complemento al litigio tradicional.', en: 'Willingness to master alternative mechanisms such as arbitration, mediation, and conciliation as complements to traditional litigation.', fr: 'Volonté de maîtriser les mécanismes alternatifs tels que l\'arbitrage, la médiation et la conciliation comme compléments au contentieux traditionnel.' }, weight: 0.3 },
    ],
    order: 3,
  },

  // ============================================================================
  // LEGAL PRACTICE — Corporate Counsel
  // ============================================================================
  {
    id: 'legal-cc-professional',
    name: { es: 'Habilidades Profesionales del Abogado Corporativo', en: 'Corporate Counsel Professional Skills', fr: 'Compétences Professionnelles du Conseiller Juridique d\'Entreprise' },
    description: { es: 'Conocimientos técnicos para la asesoría legal interna, cumplimiento corporativo y gestión de riesgos empresariales.', en: 'Technical knowledge for in-house legal advisory, corporate compliance, and enterprise risk management.', fr: 'Connaissances techniques pour le conseil juridique interne, la conformité d\'entreprise et la gestion des risques de l\'entreprise.' },
    competencies: [
      { id: 'legal-corporate-compliance', name: { es: 'Cumplimiento Corporativo y Gobernanza', en: 'Corporate Compliance & Governance', fr: 'Conformité d\'Entreprise et Gouvernance' }, description: { es: 'Capacidad para diseñar y supervisar programas de cumplimiento, políticas corporativas y estructuras de gobierno corporativo.', en: 'Ability to design and oversee compliance programs, corporate policies, and corporate governance structures.', fr: 'Capacité à concevoir et superviser des programmes de conformité, des politiques d\'entreprise et des structures de gouvernance d\'entreprise.' }, weight: 0.3 },
      { id: 'legal-contract-management', name: { es: 'Gestión y Revisión de Contratos', en: 'Contract Management & Review', fr: 'Gestion et Révision de Contrats' }, description: { es: 'Habilidad para revisar, negociar y gestionar el ciclo de vida de contratos comerciales, acuerdos de confidencialidad y términos de servicio.', en: 'Skill in reviewing, negotiating, and managing the lifecycle of commercial contracts, NDAs, and terms of service.', fr: 'Compétence pour réviser, négocier et gérer le cycle de vie des contrats commerciaux, accords de confidentialité et conditions de service.' }, weight: 0.25 },
      { id: 'legal-risk-assessment', name: { es: 'Evaluación y Mitigación de Riesgos', en: 'Risk Assessment & Mitigation', fr: 'Évaluation et Atténuation des Risques' }, description: { es: 'Capacidad para identificar riesgos legales empresariales, cuantificar exposición y diseñar estrategias de mitigación efectivas.', en: 'Ability to identify enterprise legal risks, quantify exposure, and design effective mitigation strategies.', fr: 'Capacité à identifier les risques juridiques de l\'entreprise, quantifier l\'exposition et concevoir des stratégies d\'atténuation efficaces.' }, weight: 0.25 },
      { id: 'legal-regulatory-affairs', name: { es: 'Asuntos Regulatorios y Regulaciones del Sector', en: 'Regulatory Affairs & Industry Regulations', fr: 'Affaires Réglementaires et Réglementations Sectorielles' }, description: { es: 'Conocimiento de marcos regulatorios aplicables al sector, relaciones con autoridades y gestión de licencias y permisos.', en: 'Knowledge of applicable regulatory frameworks, relationships with authorities, and management of licenses and permits.', fr: 'Connaissance des cadres réglementaires applicables au secteur, relations avec les autorités et gestion des licences et permis.' }, weight: 0.2 },
    ],
    order: 1,
  },
  {
    id: 'legal-cc-soft-skills',
    name: { es: 'Habilidades Blandas del Abogado Corporativo', en: 'Corporate Counsel Soft Skills', fr: 'Compétences Interpersonnelles du Conseiller Juridique d\'Entreprise' },
    description: { es: 'Competencias interpersonales para la asesoría legal interna y la gestión de relaciones con áreas de negocio.', en: 'Interpersonal competencies for in-house legal advisory and managing relationships with business areas.', fr: 'Compétences interpersonnelles pour le conseil juridique interne et la gestion des relations avec les secteurs d\'activité.' },
    competencies: [
      { id: 'legal-business-acumen', name: { es: 'Visión de Negocios y Comunicación Multifuncional', en: 'Business Acumen & Cross-Functional Communication', fr: 'Vision des Affaires et Communication Transversale' }, description: { es: 'Capacidad para comprender objetivos de negocio, traducir riesgos legales en términos comerciales y comunicarse efectivamente con todas las áreas.', en: 'Ability to understand business objectives, translate legal risks into commercial terms, and communicate effectively with all departments.', fr: 'Capacité à comprendre les objectifs commerciaux, traduire les risques juridiques en termes commerciaux et communiquer efficacement avec tous les départements.' }, weight: 0.35 },
      { id: 'legal-stakeholder-management', name: { es: 'Gestión de Stakeholders', en: 'Stakeholder Management', fr: 'Gestion des Parties Prenantes' }, description: { es: 'Habilidad para gestionar expectativas de la alta dirección, junta directiva y líderes funcionales en temas legales.', en: 'Skill in managing expectations of senior management, board of directors, and functional leaders on legal matters.', fr: 'Compétence pour gérer les attentes de la direction, du conseil d\'administration et des responsables fonctionnels sur les questions juridiques.' }, weight: 0.3 },
      { id: 'legal-negotiation-influence', name: { es: 'Negociación e Influencia', en: 'Negotiation & Influence', fr: 'Négociation et Influence' }, description: { es: 'Capacidad para negociar acuerdos complejos con contrapartes externas e influir en decisiones internas para proteger los intereses de la empresa.', en: 'Ability to negotiate complex agreements with external counterparts and influence internal decisions to protect corporate interests.', fr: 'Capacité à négocier des accords complexes avec des contreparties externes et influencer les décisions internes pour protéger les intérêts de l\'entreprise.' }, weight: 0.35 },
    ],
    order: 2,
  },
  {
    id: 'legal-cc-readiness',
    name: { es: 'Disposición al Cambio del Abogado Corporativo', en: 'Corporate Counsel Readiness for Change', fr: 'Disposition au Changement du Conseiller Juridique d\'Entreprise' },
    description: { es: 'Capacidad de adaptación ante nuevas regulaciones, tecnologías y modelos de operación legal corporativa.', en: 'Adaptability to new regulations, technologies, and corporate legal operations models.', fr: 'Adaptabilité aux nouvelles réglementations, technologies et modèles d\'opérations juridiques d\'entreprise.' },
    competencies: [
      { id: 'legal-data-privacy', name: { es: 'Privacidad de Datos y Derecho de Ciberseguridad', en: 'Data Privacy & Cybersecurity Law', fr: 'Protection des Données et Droit de la Cybersécurité' }, description: { es: 'Disposición para dominar regulaciones de privacidad de datos (GDPR, LGPD), ciberseguridad y protección de información corporativa.', en: 'Willingness to master data privacy regulations (GDPR, LGPD), cybersecurity, and corporate information protection.', fr: 'Volonté de maîtriser les réglementations sur la protection des données (RGPD, LGPD), la cybersécurité et la protection de l\'information d\'entreprise.' }, weight: 0.35 },
      { id: 'legal-esg-sustainability', name: { es: 'Cumplimiento ESG y Regulaciones de Sostenibilidad', en: 'ESG Compliance & Sustainability Regulations', fr: 'Conformité ESG et Réglementations de Durabilité' }, description: { es: 'Apertura para integrar criterios ESG en la estrategia legal corporativa y cumplir con regulaciones ambientales y de sostenibilidad emergentes.', en: 'Openness to integrating ESG criteria into corporate legal strategy and complying with emerging environmental and sustainability regulations.', fr: 'Ouverture à l\'intégration des critères ESG dans la stratégie juridique d\'entreprise et au respect des réglementations environnementales et de durabilité émergentes.' }, weight: 0.35 },
      { id: 'legal-operations-automation', name: { es: 'Operaciones Legales y Automatización de Procesos', en: 'Legal Operations & Process Automation', fr: 'Opérations Juridiques et Automatisation des Processus' }, description: { es: 'Disposición para implementar herramientas de automatización de procesos legales, gestión de contratos digitales y operaciones legales eficientes.', en: 'Willingness to implement legal process automation tools, digital contract management, and efficient legal operations.', fr: 'Volonté de mettre en œuvre des outils d\'automatisation des processus juridiques, de gestion numérique des contrats et d\'opérations juridiques efficaces.' }, weight: 0.3 },
    ],
    order: 3,
  },

  // ============================================================================
  // LEGAL PRACTICE — Paralegal
  // ============================================================================
  {
    id: 'legal-pl-professional',
    name: { es: 'Habilidades Profesionales del Paralegal', en: 'Paralegal Professional Skills', fr: 'Compétences Professionnelles du Parajuriste' },
    description: { es: 'Conocimientos técnicos y habilidades de soporte legal para la preparación de casos e investigación jurídica.', en: 'Technical knowledge and legal support skills for case preparation and legal research.', fr: 'Connaissances techniques et compétences de soutien juridique pour la préparation de dossiers et la recherche juridique.' },
    competencies: [
      { id: 'legal-research-preparation', name: { es: 'Investigación Legal y Preparación de Casos', en: 'Legal Research & Case Preparation', fr: 'Recherche Juridique et Préparation de Dossiers' }, description: { es: 'Capacidad para realizar investigación jurídica, compilar evidencia, preparar resúmenes de casos y organizar materiales para audiencias.', en: 'Ability to conduct legal research, compile evidence, prepare case summaries, and organize materials for hearings.', fr: 'Capacité à mener des recherches juridiques, compiler des preuves, préparer des résumés de dossiers et organiser les matériaux pour les audiences.' }, weight: 0.3 },
      { id: 'legal-document-management', name: { es: 'Gestión Documental y Sistemas de Archivo', en: 'Document Management & Filing Systems', fr: 'Gestion Documentaire et Systèmes de Classement' }, description: { es: 'Habilidad para organizar, indexar y mantener archivos legales físicos y digitales con precisión y cumplimiento de normas de retención.', en: 'Skill in organizing, indexing, and maintaining physical and digital legal files with accuracy and compliance with retention standards.', fr: 'Compétence pour organiser, indexer et maintenir les dossiers juridiques physiques et numériques avec précision et conformité aux normes de conservation.' }, weight: 0.25 },
      { id: 'legal-court-procedures', name: { es: 'Procedimientos Judiciales y Cumplimiento', en: 'Court Procedures & Compliance', fr: 'Procédures Judiciaires et Conformité' }, description: { es: 'Conocimiento de procedimientos judiciales, plazos procesales, requisitos de presentación y normativas aplicables a cada jurisdicción.', en: 'Knowledge of court procedures, filing deadlines, submission requirements, and regulations applicable to each jurisdiction.', fr: 'Connaissance des procédures judiciaires, des délais de dépôt, des exigences de présentation et des réglementations applicables à chaque juridiction.' }, weight: 0.25 },
      { id: 'legal-client-coordination', name: { es: 'Coordinación con Clientes y Seguimiento de Casos', en: 'Client Coordination & Case Tracking', fr: 'Coordination avec les Clients et Suivi des Dossiers' }, description: { es: 'Capacidad para coordinar con clientes, recopilar información necesaria y mantener un seguimiento preciso del estado de cada caso.', en: 'Ability to coordinate with clients, gather necessary information, and maintain accurate tracking of each case status.', fr: 'Capacité à coordonner avec les clients, recueillir les informations nécessaires et maintenir un suivi précis de l\'état de chaque dossier.' }, weight: 0.2 },
    ],
    order: 1,
  },
  {
    id: 'legal-pl-soft-skills',
    name: { es: 'Habilidades Blandas del Paralegal', en: 'Paralegal Soft Skills', fr: 'Compétences Interpersonnelles du Parajuriste' },
    description: { es: 'Competencias interpersonales esenciales para el soporte legal eficiente y preciso.', en: 'Essential interpersonal competencies for efficient and accurate legal support.', fr: 'Compétences interpersonnelles essentielles pour un soutien juridique efficace et précis.' },
    competencies: [
      { id: 'legal-attention-detail', name: { es: 'Atención al Detalle y Precisión', en: 'Attention to Detail & Accuracy', fr: 'Attention aux Détails et Précision' }, description: { es: 'Capacidad para revisar documentos, datos y procedimientos con alto nivel de precisión, detectando errores e inconsistencias.', en: 'Ability to review documents, data, and procedures with a high level of accuracy, detecting errors and inconsistencies.', fr: 'Capacité à réviser des documents, des données et des procédures avec un haut niveau de précision, en détectant les erreurs et les incohérences.' }, weight: 0.35 },
      { id: 'legal-organization-time', name: { es: 'Organización y Gestión del Tiempo', en: 'Organization & Time Management', fr: 'Organisation et Gestion du Temps' }, description: { es: 'Habilidad para gestionar múltiples casos simultáneamente, priorizar tareas y cumplir plazos procesales estrictos.', en: 'Skill in managing multiple cases simultaneously, prioritizing tasks, and meeting strict procedural deadlines.', fr: 'Compétence pour gérer plusieurs dossiers simultanément, prioriser les tâches et respecter des délais procéduraux stricts.' }, weight: 0.35 },
      { id: 'legal-written-communication', name: { es: 'Comunicación Escrita', en: 'Written Communication', fr: 'Communication Écrite' }, description: { es: 'Capacidad para redactar memorandos, correspondencia legal y resúmenes de manera clara, precisa y profesional.', en: 'Ability to draft memoranda, legal correspondence, and summaries in a clear, accurate, and professional manner.', fr: 'Capacité à rédiger des mémorandums, de la correspondance juridique et des résumés de manière claire, précise et professionnelle.' }, weight: 0.3 },
    ],
    order: 2,
  },
  {
    id: 'legal-pl-readiness',
    name: { es: 'Disposición al Cambio del Paralegal', en: 'Paralegal Readiness for Change', fr: 'Disposition au Changement du Parajuriste' },
    description: { es: 'Capacidad de adaptación ante la evolución de herramientas tecnológicas y el rol del paralegal.', en: 'Adaptability to the evolution of technological tools and the paralegal role.', fr: 'Adaptabilité à l\'évolution des outils technologiques et du rôle de parajuriste.' },
    competencies: [
      { id: 'legal-tech-tools', name: { es: 'Herramientas de Tecnología Legal', en: 'Legal Technology Tools', fr: 'Outils de Technologie Juridique' }, description: { es: 'Disposición para aprender y dominar software de gestión de casos, bases de datos legales y herramientas de productividad jurídica.', en: 'Willingness to learn and master case management software, legal databases, and legal productivity tools.', fr: 'Volonté d\'apprendre et de maîtriser les logiciels de gestion de dossiers, les bases de données juridiques et les outils de productivité juridique.' }, weight: 0.35 },
      { id: 'legal-e-discovery', name: { es: 'E-Discovery y Evidencia Digital', en: 'E-Discovery & Digital Evidence', fr: 'E-Discovery et Preuves Numériques' }, description: { es: 'Apertura para dominar procesos de descubrimiento electrónico, preservación de evidencia digital y análisis de datos en litigios.', en: 'Openness to mastering electronic discovery processes, digital evidence preservation, and data analysis in litigation.', fr: 'Ouverture à la maîtrise des processus de découverte électronique, de la préservation des preuves numériques et de l\'analyse de données dans les litiges.' }, weight: 0.35 },
      { id: 'legal-evolving-responsibilities', name: { es: 'Evolución de las Responsabilidades del Paralegal', en: 'Evolving Paralegal Responsibilities', fr: 'Évolution des Responsabilités du Parajuriste' }, description: { es: 'Disposición para asumir responsabilidades expandidas a medida que el rol del paralegal evoluciona con la tecnología y las necesidades del mercado.', en: 'Willingness to take on expanded responsibilities as the paralegal role evolves with technology and market needs.', fr: 'Volonté d\'assumer des responsabilités élargies à mesure que le rôle de parajuriste évolue avec la technologie et les besoins du marché.' }, weight: 0.3 },
    ],
    order: 3,
  },

  // ============================================================================
  // LEGAL PRACTICE — Legal Secretary
  // ============================================================================
  {
    id: 'legal-ls-professional',
    name: { es: 'Habilidades Profesionales del Secretario/a Legal', en: 'Legal Secretary Professional Skills', fr: 'Compétences Professionnelles du Secrétaire Juridique' },
    description: { es: 'Conocimientos técnicos y habilidades operativas para el soporte administrativo en entornos legales.', en: 'Technical knowledge and operational skills for administrative support in legal environments.', fr: 'Connaissances techniques et compétences opérationnelles pour le soutien administratif en environnement juridique.' },
    competencies: [
      { id: 'legal-document-formatting', name: { es: 'Formato de Documentos y Correspondencia Legal', en: 'Document Formatting & Legal Correspondence', fr: 'Mise en Forme de Documents et Correspondance Juridique' }, description: { es: 'Dominio de formatos legales estándar, redacción de correspondencia profesional y preparación de documentos según normas procesales.', en: 'Mastery of standard legal formats, professional correspondence drafting, and document preparation according to procedural standards.', fr: 'Maîtrise des formats juridiques standards, rédaction de correspondance professionnelle et préparation de documents selon les normes procédurales.' }, weight: 0.3 },
      { id: 'legal-court-filing', name: { es: 'Presentaciones Judiciales y Gestión de Plazos', en: 'Court Filing & Deadline Management', fr: 'Dépôts Judiciaires et Gestion des Délais' }, description: { es: 'Habilidad para preparar y presentar documentos ante tribunales, controlar plazos procesales y asegurar cumplimiento de requisitos formales.', en: 'Skill in preparing and filing court documents, tracking procedural deadlines, and ensuring compliance with formal requirements.', fr: 'Compétence pour préparer et déposer des documents au tribunal, suivre les délais procéduraux et assurer la conformité aux exigences formelles.' }, weight: 0.3 },
      { id: 'legal-scheduling', name: { es: 'Programación y Gestión de Agenda', en: 'Scheduling & Calendar Management', fr: 'Planification et Gestion de l\'Agenda' }, description: { es: 'Capacidad para gestionar agendas de abogados, coordinar audiencias, reuniones con clientes y plazos críticos de manera eficiente.', en: 'Ability to manage attorney calendars, coordinate hearings, client meetings, and critical deadlines efficiently.', fr: 'Capacité à gérer les agendas des avocats, coordonner les audiences, les réunions avec les clients et les délais critiques de manière efficace.' }, weight: 0.2 },
      { id: 'legal-record-keeping', name: { es: 'Mantenimiento de Registros y Confidencialidad', en: 'Record Keeping & Confidentiality', fr: 'Tenue de Registres et Confidentialité' }, description: { es: 'Habilidad para mantener registros organizados, proteger información confidencial y cumplir con protocolos de seguridad de datos.', en: 'Skill in maintaining organized records, protecting confidential information, and complying with data security protocols.', fr: 'Compétence pour maintenir des registres organisés, protéger les informations confidentielles et respecter les protocoles de sécurité des données.' }, weight: 0.2 },
    ],
    order: 1,
  },
  {
    id: 'legal-ls-soft-skills',
    name: { es: 'Habilidades Blandas del Secretario/a Legal', en: 'Legal Secretary Soft Skills', fr: 'Compétences Interpersonnelles du Secrétaire Juridique' },
    description: { es: 'Competencias interpersonales para el soporte administrativo eficiente en entornos legales de alta demanda.', en: 'Interpersonal competencies for efficient administrative support in high-demand legal environments.', fr: 'Compétences interpersonnelles pour un soutien administratif efficace dans des environnements juridiques exigeants.' },
    competencies: [
      { id: 'legal-precision', name: { es: 'Atención al Detalle y Precisión', en: 'Attention to Detail & Precision', fr: 'Attention aux Détails et Précision' }, description: { es: 'Capacidad para producir documentos sin errores, verificar datos y asegurar la exactitud en todas las comunicaciones y presentaciones.', en: 'Ability to produce error-free documents, verify data, and ensure accuracy in all communications and filings.', fr: 'Capacité à produire des documents sans erreurs, vérifier les données et assurer l\'exactitude dans toutes les communications et dépôts.' }, weight: 0.35 },
      { id: 'legal-professional-communication', name: { es: 'Comunicación Profesional', en: 'Professional Communication', fr: 'Communication Professionnelle' }, description: { es: 'Habilidad para comunicarse de manera clara, cortés y profesional con clientes, tribunales, abogados y personal de la firma.', en: 'Skill in communicating clearly, courteously, and professionally with clients, courts, attorneys, and firm staff.', fr: 'Compétence pour communiquer de manière claire, courtoise et professionnelle avec les clients, les tribunaux, les avocats et le personnel du cabinet.' }, weight: 0.35 },
      { id: 'legal-multitasking', name: { es: 'Multitarea y Priorización', en: 'Multitasking & Prioritization', fr: 'Multitâche et Priorisation' }, description: { es: 'Capacidad para manejar múltiples tareas simultáneamente, establecer prioridades y mantener la eficiencia bajo presión de plazos.', en: 'Ability to handle multiple tasks simultaneously, establish priorities, and maintain efficiency under deadline pressure.', fr: 'Capacité à gérer plusieurs tâches simultanément, établir les priorités et maintenir l\'efficacité sous la pression des délais.' }, weight: 0.3 },
    ],
    order: 2,
  },
  {
    id: 'legal-ls-readiness',
    name: { es: 'Disposición al Cambio del Secretario/a Legal', en: 'Legal Secretary Readiness for Change', fr: 'Disposition au Changement du Secrétaire Juridique' },
    description: { es: 'Capacidad de adaptación ante la digitalización y evolución de los procesos administrativos legales.', en: 'Adaptability to digitalization and evolution of legal administrative processes.', fr: 'Adaptabilité à la numérisation et à l\'évolution des processus administratifs juridiques.' },
    competencies: [
      { id: 'legal-digital-filing', name: { es: 'Archivo Digital y Sistemas en la Nube', en: 'Digital Filing & Cloud Systems', fr: 'Classement Numérique et Systèmes Cloud' }, description: { es: 'Disposición para migrar a sistemas de archivo digital, plataformas en la nube y gestión electrónica de documentos legales.', en: 'Willingness to migrate to digital filing systems, cloud platforms, and electronic management of legal documents.', fr: 'Volonté de migrer vers des systèmes de classement numérique, des plateformes cloud et la gestion électronique de documents juridiques.' }, weight: 0.35 },
      { id: 'legal-software-proficiency', name: { es: 'Dominio de Software Legal', en: 'Legal Software Proficiency', fr: 'Maîtrise des Logiciels Juridiques' }, description: { es: 'Apertura para aprender y dominar nuevos software de gestión legal, facturación, gestión de documentos y herramientas de productividad.', en: 'Openness to learning and mastering new legal management software, billing, document management, and productivity tools.', fr: 'Ouverture à l\'apprentissage et à la maîtrise de nouveaux logiciels de gestion juridique, de facturation, de gestion documentaire et d\'outils de productivité.' }, weight: 0.35 },
      { id: 'legal-remote-hybrid', name: { es: 'Adaptación al Trabajo Remoto e Híbrido', en: 'Remote & Hybrid Work Adaptation', fr: 'Adaptation au Travail à Distance et Hybride' }, description: { es: 'Disposición para adaptarse a modelos de trabajo remoto e híbrido, manteniendo la eficiencia y coordinación con el equipo legal.', en: 'Willingness to adapt to remote and hybrid work models, maintaining efficiency and coordination with the legal team.', fr: 'Volonté de s\'adapter aux modèles de travail à distance et hybride, en maintenant l\'efficacité et la coordination avec l\'équipe juridique.' }, weight: 0.3 },
    ],
    order: 3,
  },

  // ============================================================================
  // MICROSOFT DYNAMICS — Operator
  // ============================================================================
  {
    id: 'ms-dyn-professional',
    name: { es: 'Habilidades Profesionales del Operador de Dynamics', en: 'Dynamics Operator Professional Skills', fr: 'Compétences Professionnelles de l\'Opérateur Dynamics' },
    description: { es: 'Conocimientos técnicos y habilidades operativas para el uso eficiente de Microsoft Dynamics 365.', en: 'Technical knowledge and operational skills for efficient use of Microsoft Dynamics 365.', fr: 'Connaissances techniques et compétences opérationnelles pour l\'utilisation efficace de Microsoft Dynamics 365.' },
    competencies: [
      { id: 'ms-dyn-navigation-data-entry', name: { es: 'Navegación y Captura de Datos en Dynamics', en: 'Dynamics Navigation & Data Entry', fr: 'Navigation et Saisie de Données dans Dynamics' }, description: { es: 'Capacidad para navegar eficientemente por los módulos de Dynamics 365, realizar captura de datos precisa y utilizar formularios, vistas y filtros del sistema.', en: 'Ability to efficiently navigate Dynamics 365 modules, perform accurate data entry, and use system forms, views, and filters.', fr: 'Capacité à naviguer efficacement dans les modules de Dynamics 365, effectuer une saisie de données précise et utiliser les formulaires, vues et filtres du système.' }, weight: 0.25 },
      { id: 'ms-dyn-transaction-processing', name: { es: 'Procesamiento de Transacciones y Flujos de Trabajo', en: 'Transaction Processing & Workflows', fr: 'Traitement des Transactions et Flux de Travail' }, description: { es: 'Habilidad para ejecutar transacciones comerciales, procesar órdenes, gestionar flujos de trabajo automatizados y completar procesos de negocio dentro de Dynamics 365.', en: 'Skill in executing business transactions, processing orders, managing automated workflows, and completing business processes within Dynamics 365.', fr: 'Compétence pour exécuter des transactions commerciales, traiter des commandes, gérer des flux de travail automatisés et compléter des processus métier dans Dynamics 365.' }, weight: 0.25 },
      { id: 'ms-dyn-reporting', name: { es: 'Reportes y Análisis de Datos', en: 'Reporting & Data Analysis', fr: 'Rapports et Analyse de Données' }, description: { es: 'Capacidad para generar reportes estándar y personalizados, analizar datos operativos y utilizar dashboards para monitorear indicadores clave de rendimiento.', en: 'Ability to generate standard and custom reports, analyze operational data, and use dashboards to monitor key performance indicators.', fr: 'Capacité à générer des rapports standards et personnalisés, analyser des données opérationnelles et utiliser des tableaux de bord pour surveiller les indicateurs clés de performance.' }, weight: 0.25 },
      { id: 'ms-dyn-module-operations', name: { es: 'Operaciones por Módulo (Ventas/Finanzas/Cadena de Suministro)', en: 'Module-Specific Operations (Sales/Finance/Supply Chain)', fr: 'Opérations par Module (Ventes/Finances/Chaîne d\'Approvisionnement)' }, description: { es: 'Dominio de las operaciones específicas de los módulos de Dynamics 365, incluyendo ventas, finanzas, cadena de suministro, servicio al cliente y recursos humanos.', en: 'Mastery of module-specific operations in Dynamics 365, including sales, finance, supply chain, customer service, and human resources.', fr: 'Maîtrise des opérations spécifiques aux modules de Dynamics 365, incluant ventes, finances, chaîne d\'approvisionnement, service client et ressources humaines.' }, weight: 0.25 },
    ],
    order: 1,
  },
  {
    id: 'ms-dyn-soft-skills',
    name: { es: 'Habilidades Blandas del Operador de Dynamics', en: 'Dynamics Operator Soft Skills', fr: 'Compétences Interpersonnelles de l\'Opérateur Dynamics' },
    description: { es: 'Competencias interpersonales esenciales para la operación eficiente y precisa de Dynamics 365.', en: 'Essential interpersonal competencies for efficient and accurate Dynamics 365 operation.', fr: 'Compétences interpersonnelles essentielles pour une opération efficace et précise de Dynamics 365.' },
    competencies: [
      { id: 'ms-dyn-attention-detail', name: { es: 'Atención al Detalle y Precisión', en: 'Attention to Detail & Accuracy', fr: 'Attention aux Détails et Précision' }, description: { es: 'Capacidad para mantener altos niveles de precisión en la captura de datos, verificación de transacciones y revisión de registros dentro del sistema.', en: 'Ability to maintain high levels of accuracy in data entry, transaction verification, and record review within the system.', fr: 'Capacité à maintenir des niveaux élevés de précision dans la saisie de données, la vérification des transactions et la révision des enregistrements dans le système.' }, weight: 0.35 },
      { id: 'ms-dyn-communication', name: { es: 'Comunicación y Documentación', en: 'Communication & Documentation', fr: 'Communication et Documentation' }, description: { es: 'Habilidad para documentar procesos, comunicar incidencias, reportar errores y colaborar con equipos técnicos y de negocio de manera clara y efectiva.', en: 'Skill in documenting processes, communicating incidents, reporting errors, and collaborating with technical and business teams clearly and effectively.', fr: 'Compétence pour documenter les processus, communiquer les incidents, signaler les erreurs et collaborer avec les équipes techniques et métier de manière claire et efficace.' }, weight: 0.35 },
      { id: 'ms-dyn-problem-solving', name: { es: 'Resolución de Problemas y Diagnóstico', en: 'Problem-Solving & Troubleshooting', fr: 'Résolution de Problèmes et Diagnostic' }, description: { es: 'Capacidad para identificar y diagnosticar problemas operativos en el sistema, aplicar soluciones básicas y escalar incidentes cuando sea necesario.', en: 'Ability to identify and diagnose operational issues in the system, apply basic solutions, and escalate incidents when necessary.', fr: 'Capacité à identifier et diagnostiquer les problèmes opérationnels dans le système, appliquer des solutions de base et escalader les incidents si nécessaire.' }, weight: 0.3 },
    ],
    order: 2,
  },
  {
    id: 'ms-dyn-readiness',
    name: { es: 'Disposición al Cambio del Operador de Dynamics', en: 'Dynamics Operator Readiness for Change', fr: 'Disposition au Changement de l\'Opérateur Dynamics' },
    description: { es: 'Capacidad de adaptación ante actualizaciones de la plataforma y evolución de procesos operativos.', en: 'Adaptability to platform updates and evolution of operational processes.', fr: 'Adaptabilité aux mises à jour de la plateforme et à l\'évolution des processus opérationnels.' },
    competencies: [
      { id: 'ms-dyn-platform-updates', name: { es: 'Actualizaciones de Plataforma y Nuevas Funcionalidades', en: 'Platform Updates & New Features Adoption', fr: 'Mises à Jour de la Plateforme et Adoption de Nouvelles Fonctionnalités' }, description: { es: 'Disposición para adaptarse a actualizaciones periódicas de Dynamics 365, aprender nuevas funcionalidades y adoptar cambios en la interfaz y procesos.', en: 'Willingness to adapt to periodic Dynamics 365 updates, learn new features, and adopt changes in interface and processes.', fr: 'Volonté de s\'adapter aux mises à jour périodiques de Dynamics 365, d\'apprendre de nouvelles fonctionnalités et d\'adopter les changements d\'interface et de processus.' }, weight: 0.35 },
      { id: 'ms-dyn-process-improvement', name: { es: 'Mejora de Procesos y Automatización', en: 'Process Improvement & Automation', fr: 'Amélioration des Processus et Automatisation' }, description: { es: 'Apertura para identificar oportunidades de mejora en procesos operativos, proponer automatizaciones y contribuir a la eficiencia del uso del sistema.', en: 'Openness to identifying improvement opportunities in operational processes, proposing automations, and contributing to system usage efficiency.', fr: 'Ouverture à l\'identification d\'opportunités d\'amélioration des processus opérationnels, à la proposition d\'automatisations et à la contribution à l\'efficacité d\'utilisation du système.' }, weight: 0.35 },
      { id: 'ms-dyn-digital-literacy', name: { es: 'Alfabetización Digital y Herramientas en la Nube', en: 'Digital Literacy & Cloud Tools', fr: 'Littératie Numérique et Outils Cloud' }, description: { es: 'Disposición para desarrollar competencias digitales amplias, incluyendo herramientas complementarias en la nube, integraciones y ecosistema Microsoft.', en: 'Willingness to develop broad digital competencies, including complementary cloud tools, integrations, and the Microsoft ecosystem.', fr: 'Volonté de développer de larges compétences numériques, incluant les outils cloud complémentaires, les intégrations et l\'écosystème Microsoft.' }, weight: 0.3 },
    ],
    order: 3,
  },

  // ============================================================================
  // MICROSOFT OFFICE/365 — User
  // ============================================================================
  {
    id: 'ms-office-professional',
    name: { es: 'Habilidades Profesionales del Usuario de Office/365', en: 'Office/365 User Professional Skills', fr: 'Compétences Professionnelles de l\'Utilisateur Office/365' },
    description: { es: 'Conocimientos técnicos para el uso eficiente de la suite Microsoft 365 en el entorno laboral.', en: 'Technical knowledge for efficient use of the Microsoft 365 suite in the workplace.', fr: 'Connaissances techniques pour l\'utilisation efficace de la suite Microsoft 365 en milieu professionnel.' },
    competencies: [
      { id: 'ms-office-word', name: { es: 'Word y Gestión de Documentos', en: 'Word & Document Management', fr: 'Word et Gestion de Documents' }, description: { es: 'Dominio de Microsoft Word para la creación, formato, edición y gestión de documentos profesionales, incluyendo plantillas, estilos, tablas de contenido y combinación de correspondencia.', en: 'Mastery of Microsoft Word for creating, formatting, editing, and managing professional documents, including templates, styles, tables of contents, and mail merge.', fr: 'Maîtrise de Microsoft Word pour la création, la mise en forme, l\'édition et la gestion de documents professionnels, incluant les modèles, styles, tables des matières et publipostage.' }, weight: 0.25 },
      { id: 'ms-office-excel', name: { es: 'Excel y Análisis de Datos', en: 'Excel & Data Analysis', fr: 'Excel et Analyse de Données' }, description: { es: 'Habilidad para utilizar Excel en la gestión de datos, creación de fórmulas, tablas dinámicas, gráficos, análisis estadístico y automatización con macros básicas.', en: 'Skill in using Excel for data management, formula creation, pivot tables, charts, statistical analysis, and basic macro automation.', fr: 'Compétence pour utiliser Excel dans la gestion de données, la création de formules, les tableaux croisés dynamiques, les graphiques, l\'analyse statistique et l\'automatisation avec des macros de base.' }, weight: 0.25 },
      { id: 'ms-office-powerpoint', name: { es: 'PowerPoint y Comunicación Visual', en: 'PowerPoint & Visual Communication', fr: 'PowerPoint et Communication Visuelle' }, description: { es: 'Capacidad para crear presentaciones impactantes y profesionales, utilizando diseño visual, animaciones, transiciones y elementos multimedia para comunicar ideas efectivamente.', en: 'Ability to create impactful and professional presentations, using visual design, animations, transitions, and multimedia elements to communicate ideas effectively.', fr: 'Capacité à créer des présentations percutantes et professionnelles, en utilisant le design visuel, les animations, les transitions et les éléments multimédias pour communiquer des idées efficacement.' }, weight: 0.25 },
      { id: 'ms-office-productivity', name: { es: 'Outlook/OneNote/Planner/OneDrive Productividad', en: 'Outlook/OneNote/Planner/OneDrive Productivity', fr: 'Outlook/OneNote/Planner/OneDrive Productivité' }, description: { es: 'Dominio de herramientas de productividad de Microsoft 365: gestión de correo y calendario con Outlook, toma de notas con OneNote, planificación de tareas con Planner y almacenamiento en la nube con OneDrive.', en: 'Mastery of Microsoft 365 productivity tools: email and calendar management with Outlook, note-taking with OneNote, task planning with Planner, and cloud storage with OneDrive.', fr: 'Maîtrise des outils de productivité Microsoft 365 : gestion du courriel et du calendrier avec Outlook, prise de notes avec OneNote, planification de tâches avec Planner et stockage cloud avec OneDrive.' }, weight: 0.25 },
    ],
    order: 1,
  },
  {
    id: 'ms-office-soft-skills',
    name: { es: 'Habilidades Blandas del Usuario de Office/365', en: 'Office/365 User Soft Skills', fr: 'Compétences Interpersonnelles de l\'Utilisateur Office/365' },
    description: { es: 'Competencias interpersonales esenciales para el uso efectivo de herramientas de oficina en entornos colaborativos.', en: 'Essential interpersonal competencies for effective use of office tools in collaborative environments.', fr: 'Compétences interpersonnelles essentielles pour l\'utilisation efficace des outils bureautiques en environnements collaboratifs.' },
    competencies: [
      { id: 'ms-office-written-comm', name: { es: 'Comunicación Escrita y Formato', en: 'Written Communication & Formatting', fr: 'Communication Écrite et Mise en Forme' }, description: { es: 'Capacidad para redactar documentos claros y profesionales, aplicar formatos consistentes y comunicar información de manera efectiva a través de medios escritos.', en: 'Ability to write clear and professional documents, apply consistent formatting, and communicate information effectively through written media.', fr: 'Capacité à rédiger des documents clairs et professionnels, appliquer des formats cohérents et communiquer l\'information efficacement par écrit.' }, weight: 0.35 },
      { id: 'ms-office-organization', name: { es: 'Organización y Gestión del Tiempo', en: 'Organization & Time Management', fr: 'Organisation et Gestion du Temps' }, description: { es: 'Habilidad para organizar archivos, gestionar calendarios, priorizar tareas y mantener un flujo de trabajo eficiente utilizando las herramientas de Microsoft 365.', en: 'Skill in organizing files, managing calendars, prioritizing tasks, and maintaining an efficient workflow using Microsoft 365 tools.', fr: 'Compétence pour organiser les fichiers, gérer les calendriers, prioriser les tâches et maintenir un flux de travail efficace en utilisant les outils Microsoft 365.' }, weight: 0.35 },
      { id: 'ms-office-collaboration', name: { es: 'Colaboración y Trabajo en Equipo', en: 'Collaboration & Teamwork', fr: 'Collaboration et Travail en Équipe' }, description: { es: 'Capacidad para colaborar en documentos compartidos, coordinar proyectos a través de herramientas de equipo y contribuir efectivamente en entornos de trabajo colaborativo.', en: 'Ability to collaborate on shared documents, coordinate projects through team tools, and contribute effectively in collaborative work environments.', fr: 'Capacité à collaborer sur des documents partagés, coordonner des projets via les outils d\'équipe et contribuer efficacement dans des environnements de travail collaboratifs.' }, weight: 0.3 },
    ],
    order: 2,
  },
  {
    id: 'ms-office-readiness',
    name: { es: 'Disposición al Cambio del Usuario de Office/365', en: 'Office/365 User Readiness for Change', fr: 'Disposition au Changement de l\'Utilisateur Office/365' },
    description: { es: 'Capacidad de adaptación ante la evolución de las herramientas de productividad y colaboración en la nube.', en: 'Adaptability to the evolution of productivity and cloud collaboration tools.', fr: 'Adaptabilité à l\'évolution des outils de productivité et de collaboration dans le cloud.' },
    competencies: [
      { id: 'ms-office-cloud-adoption', name: { es: 'Adopción de Herramientas en la Nube y Colaboración', en: 'Cloud & Collaboration Tools Adoption', fr: 'Adoption des Outils Cloud et de Collaboration' }, description: { es: 'Disposición para migrar a flujos de trabajo basados en la nube, adoptar nuevas herramientas de colaboración y aprovechar las funcionalidades en línea de Microsoft 365.', en: 'Willingness to migrate to cloud-based workflows, adopt new collaboration tools, and leverage Microsoft 365 online capabilities.', fr: 'Volonté de migrer vers des flux de travail basés sur le cloud, d\'adopter de nouveaux outils de collaboration et de tirer parti des fonctionnalités en ligne de Microsoft 365.' }, weight: 0.35 },
      { id: 'ms-office-ai-copilot', name: { es: 'Funcionalidades de IA (Copilot)', en: 'AI-Powered Features (Copilot)', fr: 'Fonctionnalités d\'IA (Copilot)' }, description: { es: 'Apertura para adoptar y utilizar funcionalidades de inteligencia artificial integradas en Microsoft 365, como Copilot, para mejorar la productividad y la calidad del trabajo.', en: 'Openness to adopting and using AI-powered features integrated in Microsoft 365, such as Copilot, to improve productivity and work quality.', fr: 'Ouverture à l\'adoption et à l\'utilisation des fonctionnalités d\'intelligence artificielle intégrées dans Microsoft 365, telles que Copilot, pour améliorer la productivité et la qualité du travail.' }, weight: 0.35 },
      { id: 'ms-office-workflow-optimization', name: { es: 'Optimización de Flujos de Trabajo Digitales', en: 'Digital Workflow Optimization', fr: 'Optimisation des Flux de Travail Numériques' }, description: { es: 'Disposición para optimizar procesos de trabajo mediante la integración de herramientas, automatización de tareas repetitivas y adopción de mejores prácticas digitales.', en: 'Willingness to optimize work processes through tool integration, automation of repetitive tasks, and adoption of digital best practices.', fr: 'Volonté d\'optimiser les processus de travail par l\'intégration d\'outils, l\'automatisation des tâches répétitives et l\'adoption de meilleures pratiques numériques.' }, weight: 0.3 },
    ],
    order: 3,
  },

  // ============================================================================
  // MICROSOFT SHAREPOINT — User
  // ============================================================================
  {
    id: 'ms-sp-professional',
    name: { es: 'Habilidades Profesionales del Usuario de SharePoint', en: 'SharePoint User Professional Skills', fr: 'Compétences Professionnelles de l\'Utilisateur SharePoint' },
    description: { es: 'Conocimientos técnicos para la gestión y colaboración eficiente en la plataforma Microsoft SharePoint.', en: 'Technical knowledge for efficient management and collaboration on the Microsoft SharePoint platform.', fr: 'Connaissances techniques pour la gestion et la collaboration efficaces sur la plateforme Microsoft SharePoint.' },
    competencies: [
      { id: 'ms-sp-site-library', name: { es: 'Gestión de Sitios y Bibliotecas', en: 'Site & Library Management', fr: 'Gestion de Sites et de Bibliothèques' }, description: { es: 'Capacidad para crear, configurar y administrar sitios de SharePoint, bibliotecas de documentos, páginas de contenido y navegación del sitio.', en: 'Ability to create, configure, and manage SharePoint sites, document libraries, content pages, and site navigation.', fr: 'Capacité à créer, configurer et administrer des sites SharePoint, des bibliothèques de documents, des pages de contenu et la navigation du site.' }, weight: 0.25 },
      { id: 'ms-sp-document-management', name: { es: 'Gestión de Documentos y Control de Versiones', en: 'Document Management & Version Control', fr: 'Gestion de Documents et Contrôle de Versions' }, description: { es: 'Habilidad para gestionar documentos con control de versiones, metadatos, check-in/check-out, flujos de aprobación y políticas de retención de documentos.', en: 'Skill in managing documents with version control, metadata, check-in/check-out, approval workflows, and document retention policies.', fr: 'Compétence pour gérer les documents avec contrôle de versions, métadonnées, archivage/extraction, flux d\'approbation et politiques de conservation des documents.' }, weight: 0.25 },
      { id: 'ms-sp-lists-workflows', name: { es: 'Listas, Flujos de Trabajo y Automatización (Power Automate)', en: 'Lists/Workflows & Automation (Power Automate)', fr: 'Listes, Flux de Travail et Automatisation (Power Automate)' }, description: { es: 'Capacidad para crear y gestionar listas de SharePoint, diseñar flujos de trabajo automatizados con Power Automate y optimizar procesos de negocio.', en: 'Ability to create and manage SharePoint lists, design automated workflows with Power Automate, and optimize business processes.', fr: 'Capacité à créer et gérer des listes SharePoint, concevoir des flux de travail automatisés avec Power Automate et optimiser les processus métier.' }, weight: 0.25 },
      { id: 'ms-sp-permissions', name: { es: 'Gestión de Permisos y Seguridad', en: 'Permissions & Security Management', fr: 'Gestion des Autorisations et Sécurité' }, description: { es: 'Dominio de la configuración de permisos, grupos de seguridad, niveles de acceso, herencia de permisos y políticas de seguridad en SharePoint.', en: 'Mastery of permission configuration, security groups, access levels, permission inheritance, and security policies in SharePoint.', fr: 'Maîtrise de la configuration des autorisations, des groupes de sécurité, des niveaux d\'accès, de l\'héritage des autorisations et des politiques de sécurité dans SharePoint.' }, weight: 0.25 },
    ],
    order: 1,
  },
  {
    id: 'ms-sp-soft-skills',
    name: { es: 'Habilidades Blandas del Usuario de SharePoint', en: 'SharePoint User Soft Skills', fr: 'Compétences Interpersonnelles de l\'Utilisateur SharePoint' },
    description: { es: 'Competencias interpersonales esenciales para la gestión de contenido y colaboración en SharePoint.', en: 'Essential interpersonal competencies for content management and collaboration in SharePoint.', fr: 'Compétences interpersonnelles essentielles pour la gestion de contenu et la collaboration dans SharePoint.' },
    competencies: [
      { id: 'ms-sp-info-architecture', name: { es: 'Arquitectura de Información y Organización', en: 'Information Architecture & Organization', fr: 'Architecture de l\'Information et Organisation' }, description: { es: 'Capacidad para diseñar estructuras de información lógicas, taxonomías, metadatos y sistemas de navegación que faciliten el acceso y la búsqueda de contenido.', en: 'Ability to design logical information structures, taxonomies, metadata, and navigation systems that facilitate content access and search.', fr: 'Capacité à concevoir des structures d\'information logiques, des taxonomies, des métadonnées et des systèmes de navigation qui facilitent l\'accès et la recherche de contenu.' }, weight: 0.35 },
      { id: 'ms-sp-training-support', name: { es: 'Capacitación y Soporte a Usuarios', en: 'Training & User Support', fr: 'Formation et Support aux Utilisateurs' }, description: { es: 'Habilidad para capacitar a otros usuarios en el uso de SharePoint, crear guías de uso, resolver dudas y promover la adopción de la plataforma.', en: 'Skill in training other users on SharePoint usage, creating user guides, resolving questions, and promoting platform adoption.', fr: 'Compétence pour former les autres utilisateurs à l\'utilisation de SharePoint, créer des guides d\'utilisation, résoudre les questions et promouvoir l\'adoption de la plateforme.' }, weight: 0.3 },
      { id: 'ms-sp-cross-team', name: { es: 'Colaboración entre Equipos', en: 'Cross-Team Collaboration', fr: 'Collaboration Inter-Équipes' }, description: { es: 'Capacidad para facilitar la colaboración entre equipos y departamentos a través de SharePoint, coordinando proyectos compartidos y comunicación efectiva.', en: 'Ability to facilitate collaboration across teams and departments through SharePoint, coordinating shared projects and effective communication.', fr: 'Capacité à faciliter la collaboration entre équipes et départements via SharePoint, en coordonnant les projets partagés et la communication efficace.' }, weight: 0.35 },
    ],
    order: 2,
  },
  {
    id: 'ms-sp-readiness',
    name: { es: 'Disposición al Cambio del Usuario de SharePoint', en: 'SharePoint User Readiness for Change', fr: 'Disposition au Changement de l\'Utilisateur SharePoint' },
    description: { es: 'Capacidad de adaptación ante la evolución de SharePoint y las herramientas de colaboración empresarial.', en: 'Adaptability to the evolution of SharePoint and enterprise collaboration tools.', fr: 'Adaptabilité à l\'évolution de SharePoint et des outils de collaboration en entreprise.' },
    competencies: [
      { id: 'ms-sp-modern-experience', name: { es: 'SharePoint Online y Experiencia Moderna', en: 'SharePoint Online & Modern Experience', fr: 'SharePoint Online et Expérience Moderne' }, description: { es: 'Disposición para migrar a SharePoint Online, adoptar la experiencia moderna de sitios y aprovechar las capacidades de la nube de Microsoft 365.', en: 'Willingness to migrate to SharePoint Online, adopt the modern site experience, and leverage Microsoft 365 cloud capabilities.', fr: 'Volonté de migrer vers SharePoint Online, d\'adopter l\'expérience moderne des sites et de tirer parti des capacités cloud de Microsoft 365.' }, weight: 0.35 },
      { id: 'ms-sp-power-platform', name: { es: 'Integración con Power Platform', en: 'Power Platform Integration', fr: 'Intégration avec Power Platform' }, description: { es: 'Apertura para integrar SharePoint con Power Apps, Power Automate y Power BI, ampliando las capacidades de automatización y análisis de datos.', en: 'Openness to integrating SharePoint with Power Apps, Power Automate, and Power BI, expanding automation and data analysis capabilities.', fr: 'Ouverture à l\'intégration de SharePoint avec Power Apps, Power Automate et Power BI, élargissant les capacités d\'automatisation et d\'analyse de données.' }, weight: 0.35 },
      { id: 'ms-sp-ai-copilot', name: { es: 'IA y Copilot en SharePoint', en: 'AI & Copilot in SharePoint', fr: 'IA et Copilot dans SharePoint' }, description: { es: 'Disposición para adoptar funcionalidades de inteligencia artificial y Copilot en SharePoint para búsqueda inteligente, clasificación automática y generación de contenido.', en: 'Willingness to adopt AI and Copilot features in SharePoint for intelligent search, automatic classification, and content generation.', fr: 'Volonté d\'adopter les fonctionnalités d\'IA et de Copilot dans SharePoint pour la recherche intelligente, la classification automatique et la génération de contenu.' }, weight: 0.3 },
    ],
    order: 3,
  },
];
