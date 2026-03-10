import type { Question } from '@/types';

// ============================================================================
// BUSINESS MANAGER (Gerente de Negocios) QUESTIONS
// ============================================================================

export const bmProfessionalQuestions: Question[] = [
  // --- Revenue Growth ---
  {
    id: 'bm-rev-01',
    profileId: 'business-manager',
    categoryId: 'bm-professional',
    competencyId: 'bm-revenue-growth',
    type: 'multiple-choice',
    content: {
      es: 'Su empresa enfrenta un estancamiento de ingresos en el segundo trimestre. Tras analizar los datos, identifica que el 70% de los ingresos proviene de solo 3 clientes. ¿Cuál es la estrategia más adecuada para revertir esta situación y lograr un crecimiento sostenido?',
      en: 'Your company faces a revenue plateau in Q2. After analyzing the data, you identify that 70% of revenue comes from only 3 clients. What is the most appropriate strategy to reverse this situation and achieve sustained growth?',
      fr: 'Votre entreprise fait face à une stagnation des revenus au deuxième trimestre. Après analyse des données, vous identifiez que 70% des revenus proviennent de seulement 3 clients. Quelle est la stratégie la plus appropriée pour inverser cette situation et atteindre une croissance durable ?',
    },
    options: [
      { id: 'a', text: { es: 'Concentrar todos los recursos en retener a esos 3 clientes y aumentar el volumen de ventas con ellos', en: 'Concentrate all resources on retaining those 3 clients and increasing sales volume with them', fr: 'Concentrer toutes les ressources sur la rétention de ces 3 clients et augmenter le volume de ventes avec eux' }, value: 20 },
      { id: 'b', text: { es: 'Diversificar la cartera prospectando nuevos segmentos de mercado, mientras se implementa un plan de cross-selling con los clientes actuales y se desarrollan propuestas de valor diferenciadas', en: 'Diversify the portfolio by prospecting new market segments, while implementing a cross-selling plan with current clients and developing differentiated value propositions', fr: 'Diversifier le portefeuille en prospectant de nouveaux segments de marché, tout en mettant en place un plan de vente croisée avec les clients actuels et en développant des propositions de valeur différenciées' }, value: 100 },
      { id: 'c', text: { es: 'Reducir precios generalizadamente para atraer nuevos clientes rápidamente', en: 'Reduce prices across the board to attract new clients quickly', fr: 'Réduire les prix de manière généralisée pour attirer rapidement de nouveaux clients' }, value: 10 },
      { id: 'd', text: { es: 'Esperar a que el mercado se recupere y mantener las operaciones actuales sin cambios', en: 'Wait for the market to recover and maintain current operations without changes', fr: 'Attendre que le marché se redresse et maintenir les opérations actuelles sans changements' }, value: 5 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },

  // --- Client Relationship Management ---
  {
    id: 'bm-crm-01',
    profileId: 'business-manager',
    categoryId: 'bm-professional',
    competencyId: 'bm-client-relationship',
    type: 'scenario',
    content: {
      es: 'Uno de sus clientes estratégicos, que representa el 25% de la facturación anual, le informa que está evaluando migrar a un competidor que le ofrece precios 15% más bajos. Usted sabe que su servicio tiene mayor valor agregado, pero el cliente está presionado por reducir costos internamente. Describa su plan de acción para retener a este cliente, incluyendo las acciones inmediatas, la propuesta de valor que presentaría y cómo fortalecería la relación a largo plazo.',
      en: 'One of your strategic clients, representing 25% of annual billing, informs you they are evaluating a switch to a competitor offering 15% lower prices. You know your service has greater added value, but the client is under internal pressure to cut costs. Describe your action plan to retain this client, including immediate actions, the value proposition you would present, and how you would strengthen the long-term relationship.',
      fr: 'L\'un de vos clients stratégiques, représentant 25% de la facturation annuelle, vous informe qu\'il envisage de migrer vers un concurrent offrant des prix 15% inférieurs. Vous savez que votre service a une plus grande valeur ajoutée, mais le client subit une pression interne pour réduire les coûts. Décrivez votre plan d\'action pour retenir ce client, incluant les actions immédiates, la proposition de valeur que vous présenteriez et comment vous renforceriez la relation à long terme.',
    },
    rubric: {
      es: 'Evaluar: (1) Reunión inmediata con el cliente para entender sus necesidades reales, (2) Análisis del TCO (costo total de propiedad) vs. precio, (3) Propuesta de valor diferenciada y cuantificada, (4) Flexibilidad en la estructura de precios sin destruir margen, (5) Plan de cuentas estratégicas con revisiones periódicas, (6) Escalamiento a nivel directivo si es necesario, (7) Estrategia de fidelización a largo plazo.',
      en: 'Evaluate: (1) Immediate meeting with the client to understand real needs, (2) TCO (total cost of ownership) analysis vs. price, (3) Differentiated and quantified value proposition, (4) Pricing structure flexibility without destroying margin, (5) Strategic account plan with periodic reviews, (6) Executive-level escalation if needed, (7) Long-term loyalty strategy.',
      fr: 'Évaluer : (1) Réunion immédiate avec le client pour comprendre ses besoins réels, (2) Analyse du TCO (coût total de possession) vs. prix, (3) Proposition de valeur différenciée et quantifiée, (4) Flexibilité de la structure de prix sans détruire la marge, (5) Plan de comptes stratégiques avec révisions périodiques, (6) Escalade au niveau de la direction si nécessaire, (7) Stratégie de fidélisation à long terme.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 2,
    isActive: true,
  },

  // --- Market Analysis ---
  {
    id: 'bm-mkt-01',
    profileId: 'business-manager',
    categoryId: 'bm-professional',
    competencyId: 'bm-market-analysis',
    type: 'multiple-choice',
    content: {
      es: 'Al realizar un análisis de mercado para lanzar un nuevo producto de seguros, ¿cuál combinación de herramientas y marcos analíticos le proporcionaría la visión más completa del entorno competitivo y las oportunidades?',
      en: 'When conducting a market analysis to launch a new insurance product, which combination of tools and analytical frameworks would give you the most comprehensive view of the competitive environment and opportunities?',
      fr: 'Lors de la réalisation d\'une analyse de marché pour lancer un nouveau produit d\'assurance, quelle combinaison d\'outils et de cadres analytiques vous donnerait la vision la plus complète de l\'environnement concurrentiel et des opportunités ?',
    },
    options: [
      { id: 'a', text: { es: 'Solo revisar los informes financieros de los competidores principales', en: 'Only review the financial reports of the main competitors', fr: 'Uniquement consulter les rapports financiers des principaux concurrents' }, value: 15 },
      { id: 'b', text: { es: 'Análisis PESTEL del macroentorno, las 5 Fuerzas de Porter para la industria, segmentación de mercado basada en datos demográficos y comportamentales, y análisis FODA cruzado para identificar estrategias', en: 'PESTEL analysis of the macro-environment, Porter\'s 5 Forces for the industry, market segmentation based on demographic and behavioral data, and cross-SWOT analysis to identify strategies', fr: 'Analyse PESTEL du macro-environnement, les 5 Forces de Porter pour l\'industrie, segmentation du marché basée sur des données démographiques et comportementales, et analyse SWOT croisée pour identifier les stratégies' }, value: 100 },
      { id: 'c', text: { es: 'Encuestas informales a algunos clientes actuales sobre sus preferencias', en: 'Informal surveys of some current clients about their preferences', fr: 'Sondages informels auprès de quelques clients actuels sur leurs préférences' }, value: 20 },
      { id: 'd', text: { es: 'Basarse únicamente en la intuición y experiencia del equipo de ventas', en: 'Rely solely on the intuition and experience of the sales team', fr: 'Se baser uniquement sur l\'intuition et l\'expérience de l\'équipe de vente' }, value: 5 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 3,
    isActive: true,
  },

  // --- Business Strategy ---
  {
    id: 'bm-str-01',
    profileId: 'business-manager',
    categoryId: 'bm-professional',
    competencyId: 'bm-business-strategy',
    type: 'open-text',
    content: {
      es: 'La junta directiva le solicita desarrollar un plan estratégico comercial a 3 años para expandir la presencia de la empresa en dos nuevos mercados regionales. Actualmente la empresa opera en un solo país y tiene un equipo comercial de 15 personas. Describa los componentes clave de su plan, los indicadores de éxito que establecería y cómo alinearía la estrategia comercial con los objetivos corporativos.',
      en: 'The board of directors asks you to develop a 3-year commercial strategic plan to expand the company\'s presence into two new regional markets. Currently the company operates in a single country and has a sales team of 15 people. Describe the key components of your plan, the success indicators you would establish, and how you would align the commercial strategy with corporate objectives.',
      fr: 'Le conseil d\'administration vous demande de développer un plan stratégique commercial sur 3 ans pour étendre la présence de l\'entreprise dans deux nouveaux marchés régionaux. Actuellement, l\'entreprise opère dans un seul pays et dispose d\'une équipe commerciale de 15 personnes. Décrivez les composantes clés de votre plan, les indicateurs de succès que vous établiriez et comment vous aligneriez la stratégie commerciale avec les objectifs de l\'entreprise.',
    },
    rubric: {
      es: 'Evaluar: (1) Análisis de mercados objetivo con criterios de selección claros, (2) Modelo de entrada al mercado (directo, alianzas, adquisiciones), (3) Plan de inversiones y recursos necesarios, (4) Estructura organizacional y plan de contratación, (5) KPIs cuantitativos (ingresos, cuota de mercado, CAC, LTV), (6) Cronograma de hitos por fase, (7) Gestión de riesgos y planes de contingencia, (8) Alineación con la visión y objetivos corporativos.',
      en: 'Evaluate: (1) Target market analysis with clear selection criteria, (2) Market entry model (direct, partnerships, acquisitions), (3) Investment plan and required resources, (4) Organizational structure and hiring plan, (5) Quantitative KPIs (revenue, market share, CAC, LTV), (6) Milestone timeline by phase, (7) Risk management and contingency plans, (8) Alignment with corporate vision and objectives.',
      fr: 'Évaluer : (1) Analyse des marchés cibles avec des critères de sélection clairs, (2) Modèle d\'entrée sur le marché (direct, partenariats, acquisitions), (3) Plan d\'investissements et ressources nécessaires, (4) Structure organisationnelle et plan de recrutement, (5) KPIs quantitatifs (revenus, part de marché, CAC, LTV), (6) Calendrier des jalons par phase, (7) Gestion des risques et plans de contingence, (8) Alignement avec la vision et les objectifs de l\'entreprise.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 4,
    isActive: true,
  },

  // --- Sales Team Leadership ---
  {
    id: 'bm-stl-01',
    profileId: 'business-manager',
    categoryId: 'bm-professional',
    competencyId: 'bm-sales-leadership',
    type: 'scenario',
    content: {
      es: 'Usted lidera un equipo de ventas de 10 ejecutivos. El rendimiento del equipo ha caído un 20% en el último trimestre. Al analizar las métricas individuales, descubre que 3 vendedores de alto rendimiento están desmotivados por la falta de un plan de carrera claro, 4 vendedores de rendimiento medio tienen brechas de competencias en negociación, y 3 vendedores nuevos aún no dominan el producto. Describa un plan integral para revertir el desempeño del equipo en los próximos 90 días.',
      en: 'You lead a sales team of 10 executives. Team performance has dropped 20% in the last quarter. Analyzing individual metrics, you find that 3 high-performers are demotivated by the lack of a clear career path, 4 mid-level performers have negotiation skill gaps, and 3 new hires still do not fully understand the product. Describe a comprehensive plan to reverse team performance within the next 90 days.',
      fr: 'Vous dirigez une équipe de vente de 10 cadres commerciaux. La performance de l\'équipe a chuté de 20% au dernier trimestre. En analysant les métriques individuelles, vous constatez que 3 vendeurs performants sont démotivés par l\'absence d\'un plan de carrière clair, 4 vendeurs de niveau moyen ont des lacunes en négociation, et 3 nouvelles recrues ne maîtrisent pas encore le produit. Décrivez un plan intégral pour inverser la performance de l\'équipe dans les 90 prochains jours.',
    },
    rubric: {
      es: 'Evaluar: (1) Diagnóstico diferenciado por segmento del equipo, (2) Plan de carrera y retención para top performers, (3) Programa de capacitación focalizado en negociación para el grupo medio, (4) Onboarding acelerado y mentoría para nuevos, (5) Métricas de seguimiento semanal, (6) Sistema de incentivos y reconocimiento, (7) Sesiones de coaching individual, (8) Comunicación clara de expectativas y metas.',
      en: 'Evaluate: (1) Differentiated diagnosis by team segment, (2) Career path and retention plan for top performers, (3) Focused negotiation training program for mid-level group, (4) Accelerated onboarding and mentoring for new hires, (5) Weekly tracking metrics, (6) Incentive and recognition system, (7) Individual coaching sessions, (8) Clear communication of expectations and goals.',
      fr: 'Évaluer : (1) Diagnostic différencié par segment de l\'équipe, (2) Plan de carrière et rétention pour les meilleurs, (3) Programme de formation ciblé en négociation pour le groupe intermédiaire, (4) Intégration accélérée et mentorat pour les nouveaux, (5) Métriques de suivi hebdomadaire, (6) Système d\'incentives et de reconnaissance, (7) Sessions de coaching individuel, (8) Communication claire des attentes et objectifs.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 5,
    isActive: true,
  },

  // --- P&L Management ---
  {
    id: 'bm-pnl-01',
    profileId: 'business-manager',
    categoryId: 'bm-professional',
    competencyId: 'bm-pl-management',
    type: 'multiple-choice',
    content: {
      es: 'Al revisar el estado de resultados (P&L) de su unidad de negocios, observa que los ingresos crecieron 10% pero el margen operativo se redujo de 18% a 12%. ¿Cuál es la acción prioritaria para investigar y corregir esta situación?',
      en: 'When reviewing your business unit\'s P&L statement, you notice that revenue grew 10% but the operating margin decreased from 18% to 12%. What is the priority action to investigate and correct this situation?',
      fr: 'En examinant le compte de résultat (P&L) de votre unité commerciale, vous constatez que les revenus ont augmenté de 10% mais la marge opérationnelle est passée de 18% à 12%. Quelle est l\'action prioritaire pour investiguer et corriger cette situation ?',
    },
    options: [
      { id: 'a', text: { es: 'Celebrar el crecimiento de ingresos y asumir que el margen se recuperará naturalmente', en: 'Celebrate the revenue growth and assume the margin will recover naturally', fr: 'Célébrer la croissance des revenus et supposer que la marge se rétablira naturellement' }, value: 5 },
      { id: 'b', text: { es: 'Recortar inmediatamente el presupuesto de marketing en un 50%', en: 'Immediately cut the marketing budget by 50%', fr: 'Couper immédiatement le budget marketing de 50%' }, value: 15 },
      { id: 'c', text: { es: 'Realizar un análisis detallado de la estructura de costos por línea de producto, identificar las fuentes de erosión de margen (costos de adquisición, descuentos excesivos, ineficiencias operativas) y diseñar un plan correctivo con metas trimestrales', en: 'Conduct a detailed cost structure analysis by product line, identify margin erosion sources (acquisition costs, excessive discounts, operational inefficiencies) and design a corrective plan with quarterly targets', fr: 'Réaliser une analyse détaillée de la structure des coûts par ligne de produit, identifier les sources d\'érosion de marge (coûts d\'acquisition, remises excessives, inefficacités opérationnelles) et concevoir un plan correctif avec des objectifs trimestriels' }, value: 100 },
      { id: 'd', text: { es: 'Subir los precios de todos los productos un 10% para compensar la caída del margen', en: 'Raise prices on all products by 10% to compensate for the margin drop', fr: 'Augmenter les prix de tous les produits de 10% pour compenser la baisse de marge' }, value: 15 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 6,
    isActive: true,
  },
];

export const bmSoftSkillsQuestions: Question[] = [
  // --- Negotiation ---
  {
    id: 'bm-neg-01',
    profileId: 'business-manager',
    categoryId: 'bm-soft-skills',
    competencyId: 'bm-negotiation',
    type: 'scenario',
    content: {
      es: 'Está negociando un contrato anual de servicios con una empresa multinacional. El comprador le exige una reducción del 25% en el precio y amenaza con cambiar de proveedor. Usted sabe que su costo mínimo permite solo un 10% de descuento sin afectar la rentabilidad. Además, el comprador necesita una solución que solo su empresa puede ofrecer en el plazo requerido. Describa su estrategia de negociación paso a paso.',
      en: 'You are negotiating an annual service contract with a multinational company. The buyer demands a 25% price reduction and threatens to switch providers. You know your minimum cost allows only a 10% discount without affecting profitability. Additionally, the buyer needs a solution that only your company can deliver within the required timeframe. Describe your step-by-step negotiation strategy.',
      fr: 'Vous négociez un contrat annuel de services avec une entreprise multinationale. L\'acheteur exige une réduction de 25% du prix et menace de changer de fournisseur. Vous savez que votre coût minimum ne permet qu\'une remise de 10% sans affecter la rentabilité. De plus, l\'acheteur a besoin d\'une solution que seule votre entreprise peut livrer dans le délai requis. Décrivez votre stratégie de négociation étape par étape.',
    },
    rubric: {
      es: 'Evaluar: (1) Preparación previa con BATNA y ZOPA definidos, (2) Uso de preguntas abiertas para entender intereses reales del comprador, (3) Presentación del valor diferencial cuantificado, (4) Propuesta de concesiones no monetarias (capacitación, soporte premium, SLAs mejorados), (5) Técnica de anclaje apropiada, (6) Manejo de la amenaza sin ceder a la presión, (7) Búsqueda de acuerdo win-win, (8) Cierre con compromisos claros y documentados.',
      en: 'Evaluate: (1) Preparation with defined BATNA and ZOPA, (2) Use of open-ended questions to understand buyer\'s real interests, (3) Presentation of quantified differential value, (4) Proposal of non-monetary concessions (training, premium support, improved SLAs), (5) Appropriate anchoring technique, (6) Handling the threat without yielding to pressure, (7) Pursuit of a win-win agreement, (8) Close with clear and documented commitments.',
      fr: 'Évaluer : (1) Préparation avec BATNA et ZOPA définis, (2) Utilisation de questions ouvertes pour comprendre les intérêts réels de l\'acheteur, (3) Présentation de la valeur différentielle quantifiée, (4) Proposition de concessions non monétaires (formation, support premium, SLAs améliorés), (5) Technique d\'ancrage appropriée, (6) Gestion de la menace sans céder à la pression, (7) Recherche d\'accord gagnant-gagnant, (8) Clôture avec des engagements clairs et documentés.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 1,
    isActive: true,
  },

  // --- Executive Communication ---
  {
    id: 'bm-com-01',
    profileId: 'business-manager',
    categoryId: 'bm-soft-skills',
    competencyId: 'bm-communication',
    type: 'scale',
    content: {
      es: '¿Con qué frecuencia adapta la estructura, el nivel de detalle y el formato de sus presentaciones según la audiencia (equipo de ventas, comité de dirección, clientes, socios estratégicos)?',
      en: 'How often do you adapt the structure, level of detail, and format of your presentations based on the audience (sales team, executive committee, clients, strategic partners)?',
      fr: 'À quelle fréquence adaptez-vous la structure, le niveau de détail et le format de vos présentations en fonction de l\'audience (équipe de vente, comité de direction, clients, partenaires stratégiques) ?',
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

  // --- Influence & Persuasion ---
  {
    id: 'bm-inf-01',
    profileId: 'business-manager',
    categoryId: 'bm-soft-skills',
    competencyId: 'bm-influence',
    type: 'scenario',
    content: {
      es: 'Usted necesita convencer al comité de dirección de aprobar una inversión de $500,000 en una nueva plataforma CRM que transformará el proceso de ventas. El CFO está preocupado por el costo, el CEO quiere ver retorno rápido, y el CTO tiene dudas sobre la integración técnica. Describa cómo estructuraría su presentación y qué argumentos utilizaría para cada stakeholder.',
      en: 'You need to convince the executive committee to approve a $500,000 investment in a new CRM platform that will transform the sales process. The CFO is concerned about cost, the CEO wants to see quick returns, and the CTO has doubts about technical integration. Describe how you would structure your presentation and what arguments you would use for each stakeholder.',
      fr: 'Vous devez convaincre le comité de direction d\'approuver un investissement de 500 000 $ dans une nouvelle plateforme CRM qui transformera le processus de vente. Le DAF est préoccupé par le coût, le PDG veut voir un retour rapide, et le CTO a des doutes sur l\'intégration technique. Décrivez comment vous structureriez votre présentation et quels arguments vous utiliseriez pour chaque partie prenante.',
    },
    rubric: {
      es: 'Evaluar: (1) Argumentos financieros personalizados para el CFO (ROI, payback period, TCO), (2) Caso de negocio con impacto en ingresos para el CEO, (3) Plan de integración técnica y mitigación de riesgos para el CTO, (4) Datos y benchmarks de la industria, (5) Testimonios o casos de éxito de empresas similares, (6) Propuesta de implementación por fases, (7) Uso de storytelling con datos, (8) Anticipación de objeciones.',
      en: 'Evaluate: (1) Personalized financial arguments for the CFO (ROI, payback period, TCO), (2) Business case with revenue impact for the CEO, (3) Technical integration plan and risk mitigation for the CTO, (4) Industry data and benchmarks, (5) Testimonials or success stories from similar companies, (6) Phased implementation proposal, (7) Use of data-driven storytelling, (8) Anticipation of objections.',
      fr: 'Évaluer : (1) Arguments financiers personnalisés pour le DAF (ROI, période de retour, TCO), (2) Cas d\'affaires avec impact sur les revenus pour le PDG, (3) Plan d\'intégration technique et mitigation des risques pour le CTO, (4) Données et benchmarks de l\'industrie, (5) Témoignages ou cas de succès d\'entreprises similaires, (6) Proposition de mise en oeuvre par phases, (7) Utilisation du storytelling avec des données, (8) Anticipation des objections.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },

  // --- Team Development ---
  {
    id: 'bm-tdev-01',
    profileId: 'business-manager',
    categoryId: 'bm-soft-skills',
    competencyId: 'bm-team-development',
    type: 'open-text',
    content: {
      es: 'Describa su enfoque para identificar y desarrollar talento dentro de su equipo comercial. ¿Cómo diseña planes de desarrollo individualizados? ¿Qué métricas utiliza para medir el progreso? ¿Cómo equilibra las necesidades del negocio con las aspiraciones profesionales de cada colaborador?',
      en: 'Describe your approach to identifying and developing talent within your sales team. How do you design individualized development plans? What metrics do you use to measure progress? How do you balance business needs with each team member\'s professional aspirations?',
      fr: 'Décrivez votre approche pour identifier et développer les talents au sein de votre équipe commerciale. Comment concevez-vous des plans de développement individualisés ? Quelles métriques utilisez-vous pour mesurer les progrès ? Comment équilibrez-vous les besoins de l\'entreprise avec les aspirations professionnelles de chaque collaborateur ?',
    },
    rubric: {
      es: 'Evaluar: (1) Uso de evaluaciones de competencias y desempeño para diagnosticar brechas, (2) Planes de desarrollo individualizados con metas SMART, (3) Combinación de capacitación formal, coaching y aprendizaje en el puesto, (4) Métricas de progreso claras (productividad, conversión, desarrollo de pipeline), (5) Conversaciones periódicas de carrera, (6) Programas de mentoría y acompañamiento, (7) Alineación con planes de sucesión.',
      en: 'Evaluate: (1) Use of competency and performance assessments to diagnose gaps, (2) Individualized development plans with SMART goals, (3) Combination of formal training, coaching, and on-the-job learning, (4) Clear progress metrics (productivity, conversion, pipeline development), (5) Regular career conversations, (6) Mentoring and shadowing programs, (7) Alignment with succession plans.',
      fr: 'Évaluer : (1) Utilisation d\'évaluations de compétences et de performance pour diagnostiquer les écarts, (2) Plans de développement individualisés avec des objectifs SMART, (3) Combinaison de formation formelle, coaching et apprentissage en poste, (4) Métriques de progrès claires (productivité, conversion, développement du pipeline), (5) Conversations de carrière régulières, (6) Programmes de mentorat et d\'accompagnement, (7) Alignement avec les plans de succession.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 4,
    isActive: true,
  },

  // --- Commercial Resilience ---
  {
    id: 'bm-res-01',
    profileId: 'business-manager',
    categoryId: 'bm-soft-skills',
    competencyId: 'bm-resilience',
    type: 'scale',
    content: {
      es: 'Cuando pierde una cuenta importante después de meses de negociación, ¿con qué rapidez logra recuperar su enfoque y energía para redirigir sus esfuerzos hacia nuevas oportunidades?',
      en: 'When you lose a major account after months of negotiation, how quickly are you able to recover your focus and energy to redirect your efforts toward new opportunities?',
      fr: 'Lorsque vous perdez un compte important après des mois de négociation, avec quelle rapidité parvenez-vous à récupérer votre concentration et votre énergie pour rediriger vos efforts vers de nouvelles opportunités ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Tardo semanas en recuperarme', en: 'It takes me weeks to recover', fr: 'Il me faut des semaines pour me remettre' },
      max: { es: 'Analizo rápidamente las lecciones y me enfoco en nuevas oportunidades el mismo día', en: 'I quickly analyze the lessons and focus on new opportunities the same day', fr: 'J\'analyse rapidement les leçons et me concentre sur de nouvelles opportunités le jour même' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
];

export const bmReadinessQuestions: Question[] = [
  // --- Commercial Digital Transformation ---
  {
    id: 'bm-dig-01',
    profileId: 'business-manager',
    categoryId: 'bm-readiness',
    competencyId: 'bm-digital-transformation',
    type: 'multiple-choice',
    content: {
      es: '¿Cuál de las siguientes iniciativas representa la mejor estrategia de transformación digital para un área comercial que aún opera con procesos manuales de seguimiento de clientes y reportes en hojas de cálculo?',
      en: 'Which of the following initiatives represents the best digital transformation strategy for a commercial area that still operates with manual client tracking processes and spreadsheet-based reports?',
      fr: 'Laquelle des initiatives suivantes représente la meilleure stratégie de transformation numérique pour un département commercial qui fonctionne encore avec des processus manuels de suivi des clients et des rapports sur tableur ?',
    },
    options: [
      { id: 'a', text: { es: 'Comprar el CRM más costoso del mercado e implementarlo de una vez en toda la organización', en: 'Buy the most expensive CRM on the market and implement it all at once across the organization', fr: 'Acheter le CRM le plus coûteux du marché et le déployer d\'un coup dans toute l\'organisation' }, value: 10 },
      { id: 'b', text: { es: 'Implementar un CRM escalable por fases, comenzando con un piloto en un equipo, integrando automatización de procesos clave, dashboards en tiempo real y capacitación continua del equipo', en: 'Implement a scalable CRM in phases, starting with a pilot in one team, integrating automation of key processes, real-time dashboards, and continuous team training', fr: 'Mettre en oeuvre un CRM évolutif par phases, en commençant par un pilote dans une équipe, en intégrant l\'automatisation des processus clés, des tableaux de bord en temps réel et la formation continue de l\'équipe' }, value: 100 },
      { id: 'c', text: { es: 'Mantener las hojas de cálculo pero agregar macros para automatizar algunos cálculos', en: 'Keep the spreadsheets but add macros to automate some calculations', fr: 'Garder les tableurs mais ajouter des macros pour automatiser certains calculs' }, value: 20 },
      { id: 'd', text: { es: 'Esperar a que la competencia adopte la tecnología primero para aprender de sus errores', en: 'Wait for the competition to adopt the technology first to learn from their mistakes', fr: 'Attendre que la concurrence adopte la technologie d\'abord pour apprendre de leurs erreurs' }, value: 5 },
    ],
    maxScore: 100,
    aiEvaluated: false,
    order: 1,
    isActive: true,
  },
  {
    id: 'bm-dig-02',
    profileId: 'business-manager',
    categoryId: 'bm-readiness',
    competencyId: 'bm-digital-transformation',
    type: 'scale',
    content: {
      es: '¿En qué medida utiliza actualmente herramientas digitales de analítica de datos, inteligencia artificial o automatización para tomar decisiones comerciales?',
      en: 'To what extent do you currently use digital data analytics, artificial intelligence, or automation tools to make commercial decisions?',
      fr: 'Dans quelle mesure utilisez-vous actuellement des outils d\'analyse de données numériques, d\'intelligence artificielle ou d\'automatisation pour prendre des décisions commerciales ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'No uso ninguna herramienta digital', en: 'I do not use any digital tools', fr: 'Je n\'utilise aucun outil numérique' },
      max: { es: 'Uso intensivo de múltiples herramientas integradas', en: 'Intensive use of multiple integrated tools', fr: 'Utilisation intensive de multiples outils intégrés' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 2,
    isActive: true,
  },

  // --- Market Adaptation ---
  {
    id: 'bm-adp-01',
    profileId: 'business-manager',
    categoryId: 'bm-readiness',
    competencyId: 'bm-market-adaptation',
    type: 'scenario',
    content: {
      es: 'Una nueva regulación gubernamental acaba de entrar en vigor y prohíbe uno de los canales de distribución que representa el 30% de sus ventas. Al mismo tiempo, un competidor acaba de lanzar un producto sustituto con precios agresivos. Tiene 60 días para adaptar su estrategia comercial. Describa cómo respondería a esta doble amenaza.',
      en: 'A new government regulation has just taken effect, prohibiting one of your distribution channels that represents 30% of your sales. At the same time, a competitor has just launched a substitute product with aggressive pricing. You have 60 days to adapt your commercial strategy. Describe how you would respond to this dual threat.',
      fr: 'Une nouvelle réglementation gouvernementale vient d\'entrer en vigueur, interdisant l\'un de vos canaux de distribution qui représente 30% de vos ventes. En même temps, un concurrent vient de lancer un produit de substitution avec des prix agressifs. Vous avez 60 jours pour adapter votre stratégie commerciale. Décrivez comment vous répondriez à cette double menace.',
    },
    rubric: {
      es: 'Evaluar: (1) Evaluación rápida del impacto financiero, (2) Identificación de canales alternativos de distribución, (3) Análisis del producto sustituto del competidor y diferenciación, (4) Plan de comunicación a clientes afectados, (5) Reasignación de recursos y equipo, (6) Exploración de oportunidades en la nueva regulación, (7) Plan de contingencia con escenarios, (8) Velocidad de respuesta y capacidad de ejecución.',
      en: 'Evaluate: (1) Rapid assessment of financial impact, (2) Identification of alternative distribution channels, (3) Analysis of competitor\'s substitute product and differentiation, (4) Communication plan for affected clients, (5) Resource and team reallocation, (6) Exploration of opportunities in the new regulation, (7) Contingency plan with scenarios, (8) Speed of response and execution capability.',
      fr: 'Évaluer : (1) Évaluation rapide de l\'impact financier, (2) Identification de canaux de distribution alternatifs, (3) Analyse du produit de substitution du concurrent et différenciation, (4) Plan de communication aux clients affectés, (5) Réallocation des ressources et de l\'équipe, (6) Exploration des opportunités dans la nouvelle réglementation, (7) Plan de contingence avec scénarios, (8) Rapidité de réponse et capacité d\'exécution.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 3,
    isActive: true,
  },

  // --- Business Model Innovation ---
  {
    id: 'bm-inn-01',
    profileId: 'business-manager',
    categoryId: 'bm-readiness',
    competencyId: 'bm-innovation',
    type: 'open-text',
    content: {
      es: 'La industria de seguros está experimentando una disrupción significativa con la llegada de las insurtechs, modelos de seguros on-demand y la personalización mediante inteligencia artificial. ¿Cómo transformaría el modelo de negocio actual de su empresa para aprovechar estas tendencias en lugar de ser víctima de ellas? Proponga al menos tres iniciativas concretas de innovación.',
      en: 'The insurance industry is experiencing significant disruption with the arrival of insurtechs, on-demand insurance models, and AI-driven personalization. How would you transform your company\'s current business model to leverage these trends instead of falling victim to them? Propose at least three concrete innovation initiatives.',
      fr: 'L\'industrie de l\'assurance connaît une disruption significative avec l\'arrivée des insurtechs, des modèles d\'assurance à la demande et de la personnalisation par l\'intelligence artificielle. Comment transformeriez-vous le modèle d\'affaires actuel de votre entreprise pour tirer parti de ces tendances au lieu d\'en être victime ? Proposez au moins trois initiatives d\'innovation concrètes.',
    },
    rubric: {
      es: 'Evaluar: (1) Comprensión de las tendencias disruptivas del sector, (2) Propuestas concretas y viables de innovación, (3) Exploración de nuevos canales digitales, (4) Personalización de productos mediante datos e IA, (5) Modelos de revenue innovadores (suscripción, on-demand, embedded insurance), (6) Estrategia de alianzas con insurtechs, (7) Plan de implementación realista, (8) Equilibrio entre innovación y negocio core.',
      en: 'Evaluate: (1) Understanding of disruptive industry trends, (2) Concrete and viable innovation proposals, (3) Exploration of new digital channels, (4) Product personalization through data and AI, (5) Innovative revenue models (subscription, on-demand, embedded insurance), (6) Partnership strategy with insurtechs, (7) Realistic implementation plan, (8) Balance between innovation and core business.',
      fr: 'Évaluer : (1) Compréhension des tendances disruptives du secteur, (2) Propositions d\'innovation concrètes et viables, (3) Exploration de nouveaux canaux numériques, (4) Personnalisation des produits par les données et l\'IA, (5) Modèles de revenus innovants (abonnement, à la demande, assurance embarquée), (6) Stratégie de partenariats avec les insurtechs, (7) Plan de mise en oeuvre réaliste, (8) Équilibre entre innovation et activité principale.',
    },
    maxScore: 100,
    aiEvaluated: true,
    order: 4,
    isActive: true,
  },
  {
    id: 'bm-inn-02',
    profileId: 'business-manager',
    categoryId: 'bm-readiness',
    competencyId: 'bm-innovation',
    type: 'scale',
    content: {
      es: '¿Con qué frecuencia dedica tiempo a explorar nuevos modelos de negocio, tendencias del sector o tecnologías emergentes que podrían crear nuevas fuentes de ingreso para su organización?',
      en: 'How often do you dedicate time to exploring new business models, industry trends, or emerging technologies that could create new revenue sources for your organization?',
      fr: 'À quelle fréquence consacrez-vous du temps à l\'exploration de nouveaux modèles d\'affaires, tendances du secteur ou technologies émergentes qui pourraient créer de nouvelles sources de revenus pour votre organisation ?',
    },
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      min: { es: 'Nunca', en: 'Never', fr: 'Jamais' },
      max: { es: 'Semanalmente', en: 'Weekly', fr: 'Chaque semaine' },
    },
    maxScore: 100,
    aiEvaluated: false,
    order: 5,
    isActive: true,
  },
];
