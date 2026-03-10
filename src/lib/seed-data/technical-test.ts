import type { TechnicalTestConfig, CaseStudy, CaseStudyQuestion, QuestionOption } from '@/types';

// ============================================================
// Technical Test: Insurance - Salud y Vida (Health & Life)
// ============================================================

const claimsProcessingQuestions: CaseStudyQuestion[] = [
  {
    id: 'tech-cs1-q1',
    content: {
      es: '¿Cuál es el primer paso que debe tomar el agente al recibir este reclamo con documentación incompleta?',
      en: 'What is the first step the agent should take upon receiving this claim with incomplete documentation?',
    },
    type: 'multiple-choice',
    options: [
      {
        id: 'tech-cs1-q1-a',
        text: {
          es: 'Rechazar el reclamo inmediatamente por falta de documentación',
          en: 'Reject the claim immediately due to lack of documentation',
        },
        value: 0,
      },
      {
        id: 'tech-cs1-q1-b',
        text: {
          es: 'Notificar al cliente por escrito sobre los documentos faltantes y otorgar un plazo razonable para presentarlos',
          en: 'Notify the client in writing about the missing documents and grant a reasonable deadline to submit them',
        },
        value: 1,
      },
      {
        id: 'tech-cs1-q1-c',
        text: {
          es: 'Procesar el reclamo con la documentación disponible sin informar al cliente',
          en: 'Process the claim with the available documentation without informing the client',
        },
        value: 0,
      },
      {
        id: 'tech-cs1-q1-d',
        text: {
          es: 'Transferir el caso directamente al departamento legal',
          en: 'Transfer the case directly to the legal department',
        },
        value: 0,
      },
    ] as QuestionOption[],
    correctOptionId: 'tech-cs1-q1-b',
    maxScore: 10,
    aiEvaluated: false,
  },
  {
    id: 'tech-cs1-q2',
    content: {
      es: 'El cliente menciona que el tratamiento fue realizado en una clínica fuera de la red de proveedores. ¿Cómo afecta esto al procesamiento del reclamo según las condiciones típicas de una póliza de salud?',
      en: 'The client mentions the treatment was performed at a clinic outside the provider network. How does this affect claim processing under typical health policy conditions?',
    },
    type: 'multiple-choice',
    options: [
      {
        id: 'tech-cs1-q2-a',
        text: {
          es: 'El reclamo se rechaza automáticamente por usar un proveedor fuera de red',
          en: 'The claim is automatically rejected for using an out-of-network provider',
        },
        value: 0,
      },
      {
        id: 'tech-cs1-q2-b',
        text: {
          es: 'Se procesa igual que un reclamo dentro de red, sin diferencias',
          en: 'It is processed the same as an in-network claim, with no differences',
        },
        value: 0,
      },
      {
        id: 'tech-cs1-q2-c',
        text: {
          es: 'Se puede procesar pero con un reembolso reducido según los términos de cobertura fuera de red, y se debe verificar si aplica alguna excepción por urgencia',
          en: 'It can be processed but with a reduced reimbursement per out-of-network coverage terms, and it should be verified whether any emergency exception applies',
        },
        value: 1,
      },
      {
        id: 'tech-cs1-q2-d',
        text: {
          es: 'Se requiere aprobación del gerente general para cualquier reclamo fuera de red',
          en: 'General manager approval is required for any out-of-network claim',
        },
        value: 0,
      },
    ] as QuestionOption[],
    correctOptionId: 'tech-cs1-q2-c',
    maxScore: 10,
    aiEvaluated: false,
  },
  {
    id: 'tech-cs1-q3',
    content: {
      es: 'Explique el procedimiento completo que seguiría para resolver este reclamo, incluyendo la comunicación con el cliente, la verificación de cobertura y los plazos regulatorios aplicables.',
      en: 'Explain the complete procedure you would follow to resolve this claim, including client communication, coverage verification, and applicable regulatory deadlines.',
    },
    type: 'open-text',
    rubric: {
      es: 'Evaluar: (1) Mención de verificación de vigencia de póliza y condiciones de cobertura (2pts), (2) Proceso de solicitud de documentos faltantes con plazos claros (2pts), (3) Verificación de exclusiones y preexistencias (2pts), (4) Comunicación transparente con el cliente en cada etapa (2pts), (5) Conocimiento de plazos regulatorios para respuesta al asegurado (2pts). Respuesta completa = 10pts.',
      en: 'Evaluate: (1) Mention of policy validity and coverage condition verification (2pts), (2) Process for requesting missing documents with clear deadlines (2pts), (3) Verification of exclusions and pre-existing conditions (2pts), (4) Transparent client communication at each stage (2pts), (5) Knowledge of regulatory deadlines for response to insured (2pts). Complete answer = 10pts.',
    },
    maxScore: 10,
    aiEvaluated: true,
  },
  {
    id: 'tech-cs1-q4',
    content: {
      es: '¿Qué documentos son indispensables para procesar un reclamo de gastos médicos mayores en un seguro de salud?',
      en: 'What documents are essential for processing a major medical expense claim in a health insurance policy?',
    },
    type: 'multiple-choice',
    options: [
      {
        id: 'tech-cs1-q4-a',
        text: {
          es: 'Solo la factura del hospital es suficiente',
          en: 'Only the hospital invoice is sufficient',
        },
        value: 0,
      },
      {
        id: 'tech-cs1-q4-b',
        text: {
          es: 'Formulario de reclamo, facturas originales, historial clínico, recetas médicas y comprobante de pago del deducible',
          en: 'Claim form, original invoices, clinical history, medical prescriptions, and deductible payment receipt',
        },
        value: 1,
      },
      {
        id: 'tech-cs1-q4-c',
        text: {
          es: 'Una carta del cliente explicando sus gastos',
          en: 'A letter from the client explaining their expenses',
        },
        value: 0,
      },
      {
        id: 'tech-cs1-q4-d',
        text: {
          es: 'Solo el formulario de reclamo y una copia de la póliza',
          en: 'Only the claim form and a copy of the policy',
        },
        value: 0,
      },
    ] as QuestionOption[],
    correctOptionId: 'tech-cs1-q4-b',
    maxScore: 10,
    aiEvaluated: false,
  },
];

const claimsProcessingCase: CaseStudy = {
  id: 'tech-cs1',
  area: {
    es: 'Procesamiento de Reclamos',
    en: 'Claims Processing',
  },
  title: {
    es: 'Reclamo de Gastos Médicos con Complicaciones',
    en: 'Medical Expense Claim with Complications',
  },
  scenario: {
    es: 'María González, asegurada desde hace 3 años con una póliza de salud integral, presenta un reclamo por una cirugía de emergencia realizada en una clínica privada fuera de la red de proveedores autorizados. La cirugía se realizó hace 45 días y el monto total asciende a $15,000 USD. María presenta la factura del hospital y un resumen médico, pero no incluye el formulario de reclamo oficial, las recetas médicas post-operatorias ni el comprobante de pago del deducible. Además, al revisar su historial, se observa que María declaró no tener condiciones preexistentes al momento de la contratación, pero el informe quirúrgico menciona "antecedentes de hipertensión arterial controlada". El plazo regulatorio para responder al reclamo vence en 15 días.',
    en: 'María González, insured for 3 years with a comprehensive health policy, files a claim for an emergency surgery performed at a private clinic outside the authorized provider network. The surgery was performed 45 days ago and the total amount is $15,000 USD. María submits the hospital invoice and a medical summary but does not include the official claim form, post-operative medical prescriptions, or the deductible payment receipt. Additionally, upon reviewing her file, it is noted that María declared no pre-existing conditions at the time of enrollment, but the surgical report mentions "history of controlled arterial hypertension." The regulatory deadline to respond to the claim expires in 15 days.',
  },
  questions: claimsProcessingQuestions,
  difficulty: 2,
  timeLimitMinutes: 10,
  targetProfileIds: ['salud-vida'],
  isActive: true,
  order: 1,
};

// -----------------------------------------------------------

const underwritingQuestions: CaseStudyQuestion[] = [
  {
    id: 'tech-cs2-q1',
    content: {
      es: '¿Qué factores de riesgo adicionales debería investigar el suscriptor antes de tomar una decisión sobre esta solicitud?',
      en: 'What additional risk factors should the underwriter investigate before making a decision on this application?',
    },
    type: 'multiple-choice',
    options: [
      {
        id: 'tech-cs2-q1-a',
        text: {
          es: 'Solo el historial médico familiar es relevante',
          en: 'Only family medical history is relevant',
        },
        value: 0,
      },
      {
        id: 'tech-cs2-q1-b',
        text: {
          es: 'Historial médico completo, estilo de vida, ocupación, historial de reclamos previos, exámenes médicos actualizados y antecedentes familiares',
          en: 'Complete medical history, lifestyle, occupation, prior claims history, updated medical exams, and family background',
        },
        value: 1,
      },
      {
        id: 'tech-cs2-q1-c',
        text: {
          es: 'Solo la edad y el género del solicitante',
          en: 'Only the applicant\'s age and gender',
        },
        value: 0,
      },
      {
        id: 'tech-cs2-q1-d',
        text: {
          es: 'Únicamente los resultados de laboratorio recientes',
          en: 'Only recent lab results',
        },
        value: 0,
      },
    ] as QuestionOption[],
    correctOptionId: 'tech-cs2-q1-b',
    maxScore: 10,
    aiEvaluated: false,
  },
  {
    id: 'tech-cs2-q2',
    content: {
      es: 'Dado el diagnóstico de diabetes tipo 2 controlada, ¿cuál sería la decisión de suscripción más apropiada?',
      en: 'Given the diagnosis of controlled type 2 diabetes, what would be the most appropriate underwriting decision?',
    },
    type: 'multiple-choice',
    options: [
      {
        id: 'tech-cs2-q2-a',
        text: {
          es: 'Rechazar la solicitud por completo debido a la condición preexistente',
          en: 'Reject the application entirely due to the pre-existing condition',
        },
        value: 0,
      },
      {
        id: 'tech-cs2-q2-b',
        text: {
          es: 'Aceptar sin modificaciones ya que la diabetes está controlada',
          en: 'Accept without modifications since the diabetes is controlled',
        },
        value: 0,
      },
      {
        id: 'tech-cs2-q2-c',
        text: {
          es: 'Aceptar con una prima ajustada al riesgo, posible período de exclusión para complicaciones relacionadas con diabetes, y requerir exámenes médicos periódicos',
          en: 'Accept with a risk-adjusted premium, possible exclusion period for diabetes-related complications, and require periodic medical exams',
        },
        value: 1,
      },
      {
        id: 'tech-cs2-q2-d',
        text: {
          es: 'Aceptar pero reducir el monto máximo de cobertura al 50%',
          en: 'Accept but reduce the maximum coverage amount to 50%',
        },
        value: 0,
      },
    ] as QuestionOption[],
    correctOptionId: 'tech-cs2-q2-c',
    maxScore: 10,
    aiEvaluated: false,
  },
  {
    id: 'tech-cs2-q3',
    content: {
      es: 'Describa el proceso de cálculo de prima ajustada que aplicaría para este caso. Incluya los factores de recargo, las tablas de mortalidad/morbilidad relevantes y cómo comunicaría la decisión al solicitante.',
      en: 'Describe the adjusted premium calculation process you would apply for this case. Include surcharge factors, relevant mortality/morbidity tables, and how you would communicate the decision to the applicant.',
    },
    type: 'open-text',
    rubric: {
      es: 'Evaluar: (1) Identificación de factores de recargo aplicables: edad, IMC, HbA1c, tiempo de diagnóstico (2.5pts), (2) Referencia a tablas actuariales o de morbilidad para diabetes controlada (2.5pts), (3) Cálculo lógico del porcentaje de recargo sobre prima base (2.5pts), (4) Comunicación clara y empática de la decisión con opciones para el solicitante (2.5pts). Respuesta completa = 10pts.',
      en: 'Evaluate: (1) Identification of applicable surcharge factors: age, BMI, HbA1c, time since diagnosis (2.5pts), (2) Reference to actuarial or morbidity tables for controlled diabetes (2.5pts), (3) Logical calculation of surcharge percentage on base premium (2.5pts), (4) Clear and empathetic communication of decision with options for applicant (2.5pts). Complete answer = 10pts.',
    },
    maxScore: 10,
    aiEvaluated: true,
  },
];

const underwritingCase: CaseStudy = {
  id: 'tech-cs2',
  area: {
    es: 'Evaluación de Riesgo de Suscripción',
    en: 'Underwriting Risk Assessment',
  },
  title: {
    es: 'Evaluación de Solicitud con Condiciones Preexistentes',
    en: 'Application Evaluation with Pre-existing Conditions',
  },
  scenario: {
    es: 'Roberto Méndez, de 52 años, solicita una póliza de seguro de vida con cobertura de $500,000 USD. En su declaración de salud indica que fue diagnosticado con diabetes tipo 2 hace 4 años, actualmente controlada con metformina. Su último examen de hemoglobina glicosilada (HbA1c) muestra un valor de 6.8% (control aceptable). Roberto tiene un índice de masa corporal (IMC) de 29.5, no fuma, y trabaja como gerente de oficina. Su padre falleció a los 65 años por infarto al miocardio. Roberto actualmente no tiene ningún seguro de vida y desea la cobertura para proteger a su familia. La aseguradora tiene una política de aceptar clientes con condiciones preexistentes bajo ciertas condiciones.',
    en: 'Roberto Méndez, age 52, applies for a life insurance policy with $500,000 USD coverage. In his health declaration, he indicates he was diagnosed with type 2 diabetes 4 years ago, currently controlled with metformin. His latest glycated hemoglobin (HbA1c) test shows a value of 6.8% (acceptable control). Roberto has a body mass index (BMI) of 29.5, does not smoke, and works as an office manager. His father passed away at age 65 from myocardial infarction. Roberto currently has no life insurance and wants coverage to protect his family. The insurer has a policy of accepting clients with pre-existing conditions under certain terms.',
  },
  questions: underwritingQuestions,
  difficulty: 2,
  timeLimitMinutes: 10,
  targetProfileIds: ['salud-vida'],
  isActive: true,
  order: 2,
};

// -----------------------------------------------------------

const complianceQuestions: CaseStudyQuestion[] = [
  {
    id: 'tech-cs3-q1',
    content: {
      es: '¿Cuál debería ser la acción inmediata al descubrir esta irregularidad durante la auditoría?',
      en: 'What should be the immediate action upon discovering this irregularity during the audit?',
    },
    type: 'multiple-choice',
    options: [
      {
        id: 'tech-cs3-q1-a',
        text: {
          es: 'Ignorar el hallazgo si los montos son menores y continuar con la auditoría',
          en: 'Ignore the finding if the amounts are minor and continue with the audit',
        },
        value: 0,
      },
      {
        id: 'tech-cs3-q1-b',
        text: {
          es: 'Documentar el hallazgo, suspender el procesamiento de reclamos similares, notificar al oficial de cumplimiento y preservar toda la evidencia',
          en: 'Document the finding, suspend processing of similar claims, notify the compliance officer, and preserve all evidence',
        },
        value: 1,
      },
      {
        id: 'tech-cs3-q1-c',
        text: {
          es: 'Confrontar directamente al empleado sospechoso',
          en: 'Directly confront the suspected employee',
        },
        value: 0,
      },
      {
        id: 'tech-cs3-q1-d',
        text: {
          es: 'Reportar inmediatamente a la policía antes de informar a la empresa',
          en: 'Immediately report to the police before informing the company',
        },
        value: 0,
      },
    ] as QuestionOption[],
    correctOptionId: 'tech-cs3-q1-b',
    maxScore: 10,
    aiEvaluated: false,
  },
  {
    id: 'tech-cs3-q2',
    content: {
      es: '¿Ante qué entidad reguladora debe reportarse este tipo de irregularidad y cuál es el plazo máximo para hacerlo?',
      en: 'To which regulatory body must this type of irregularity be reported and what is the maximum deadline for doing so?',
    },
    type: 'multiple-choice',
    options: [
      {
        id: 'tech-cs3-q2-a',
        text: {
          es: 'No es necesario reportar a ninguna entidad si se resuelve internamente',
          en: 'It is not necessary to report to any entity if resolved internally',
        },
        value: 0,
      },
      {
        id: 'tech-cs3-q2-b',
        text: {
          es: 'A la Superintendencia de Seguros o entidad reguladora equivalente, dentro de los plazos establecidos por la normativa local (generalmente 24-72 horas para irregularidades materiales)',
          en: 'To the Insurance Superintendency or equivalent regulatory body, within the deadlines established by local regulations (generally 24-72 hours for material irregularities)',
        },
        value: 1,
      },
      {
        id: 'tech-cs3-q2-c',
        text: {
          es: 'Solo al banco central del país',
          en: 'Only to the country\'s central bank',
        },
        value: 0,
      },
      {
        id: 'tech-cs3-q2-d',
        text: {
          es: 'A la asociación de aseguradoras en la reunión anual',
          en: 'To the insurers\' association at the annual meeting',
        },
        value: 0,
      },
    ] as QuestionOption[],
    correctOptionId: 'tech-cs3-q2-b',
    maxScore: 10,
    aiEvaluated: false,
  },
  {
    id: 'tech-cs3-q3',
    content: {
      es: 'Elabore un plan de remediación completo para esta situación. Incluya las acciones correctivas inmediatas, los controles preventivos a implementar, el plan de comunicación interna y externa, y las medidas disciplinarias aplicables.',
      en: 'Develop a complete remediation plan for this situation. Include immediate corrective actions, preventive controls to implement, the internal and external communication plan, and applicable disciplinary measures.',
    },
    type: 'open-text',
    rubric: {
      es: 'Evaluar: (1) Acciones correctivas inmediatas: congelamiento de cuentas, revisión de reclamos afectados, auditoría forense (2.5pts), (2) Controles preventivos: segregación de funciones, doble aprobación, monitoreo automatizado (2.5pts), (3) Plan de comunicación: reporte regulatorio, comunicación a directivos, manejo de asegurados afectados (2.5pts), (4) Medidas disciplinarias: proceso de investigación interna, acciones legales, documentación para regulador (2.5pts). Respuesta completa = 10pts.',
      en: 'Evaluate: (1) Immediate corrective actions: account freezing, affected claims review, forensic audit (2.5pts), (2) Preventive controls: segregation of duties, dual approval, automated monitoring (2.5pts), (3) Communication plan: regulatory report, executive communication, affected policyholder management (2.5pts), (4) Disciplinary measures: internal investigation process, legal actions, documentation for regulator (2.5pts). Complete answer = 10pts.',
    },
    maxScore: 10,
    aiEvaluated: true,
  },
  {
    id: 'tech-cs3-q4',
    content: {
      es: '¿Qué tipo de controles internos deberían haber prevenido esta situación?',
      en: 'What type of internal controls should have prevented this situation?',
    },
    type: 'multiple-choice',
    options: [
      {
        id: 'tech-cs3-q4-a',
        text: {
          es: 'Solo se necesitaba un software antivirus actualizado',
          en: 'Only an updated antivirus software was needed',
        },
        value: 0,
      },
      {
        id: 'tech-cs3-q4-b',
        text: {
          es: 'Segregación de funciones, límites de autorización, auditorías periódicas sorpresa, sistema de denuncias anónimas y revisión automatizada de patrones inusuales',
          en: 'Segregation of duties, authorization limits, periodic surprise audits, anonymous reporting system, and automated review of unusual patterns',
        },
        value: 1,
      },
      {
        id: 'tech-cs3-q4-c',
        text: {
          es: 'Confiar en la honestidad de los empleados es suficiente',
          en: 'Trusting employee honesty is sufficient',
        },
        value: 0,
      },
      {
        id: 'tech-cs3-q4-d',
        text: {
          es: 'Instalar cámaras de vigilancia en todas las oficinas',
          en: 'Install surveillance cameras in all offices',
        },
        value: 0,
      },
    ] as QuestionOption[],
    correctOptionId: 'tech-cs3-q4-b',
    maxScore: 10,
    aiEvaluated: false,
  },
];

const complianceCase: CaseStudy = {
  id: 'tech-cs3',
  area: {
    es: 'Cumplimiento Regulatorio',
    en: 'Regulatory Compliance',
  },
  title: {
    es: 'Irregularidad Descubierta en Auditoría Interna',
    en: 'Irregularity Discovered in Internal Audit',
  },
  scenario: {
    es: 'Durante una auditoría interna rutinaria en la compañía de seguros "Protección Total S.A.", el equipo auditor descubre un patrón inusual en el departamento de reclamos de seguros de salud. Un ajustador senior ha aprobado 47 reclamos en los últimos 6 meses que presentan las siguientes anomalías: (1) Los proveedores médicos son todos del mismo grupo de clínicas, (2) Los montos están consistentemente justo por debajo del umbral que requiere doble aprobación ($5,000 USD), (3) Varios asegurados comparten la misma dirección, y (4) Los diagnósticos son genéricos y repetitivos. El monto total de estos reclamos sospechosos asciende a $187,000 USD. La auditoría también revela que el sistema de control interno no generó alertas porque los reclamos individualmente cumplían con los parámetros establecidos. La empresa tiene obligación de reportar irregularidades materiales a la Superintendencia de Seguros dentro de 72 horas de su detección.',
    en: 'During a routine internal audit at insurance company "Protección Total S.A.", the audit team discovers an unusual pattern in the health insurance claims department. A senior adjuster has approved 47 claims in the last 6 months that present the following anomalies: (1) The medical providers all belong to the same group of clinics, (2) The amounts are consistently just below the threshold requiring dual approval ($5,000 USD), (3) Several policyholders share the same address, and (4) The diagnoses are generic and repetitive. The total amount of these suspicious claims is $187,000 USD. The audit also reveals that the internal control system did not generate alerts because individual claims met the established parameters. The company is obligated to report material irregularities to the Insurance Superintendency within 72 hours of detection.',
  },
  questions: complianceQuestions,
  difficulty: 3,
  timeLimitMinutes: 10,
  targetProfileIds: ['salud-vida'],
  isActive: true,
  order: 3,
};

// ============================================================
// Export: Salud y Vida Technical Test Config
// ============================================================

export const technicalTestConfig: TechnicalTestConfig = {
  id: 'tech-test-insurance-1',
  name: {
    es: 'Evaluación Técnica - Seguros de Salud y Vida',
    en: 'Technical Assessment - Health & Life Insurance',
  },
  description: {
    es: 'Evaluación basada en casos prácticos para profesionales de seguros de salud y vida. Cubre procesamiento de reclamos, suscripción de riesgos y cumplimiento regulatorio.',
    en: 'Case-study based assessment for health and life insurance professionals. Covers claims processing, risk underwriting, and regulatory compliance.',
  },
  targetProfileId: 'salud-vida',
  caseStudies: [claimsProcessingCase, underwritingCase, complianceCase],
  totalTimeLimitMinutes: 30,
  passingScore: 60,
  isActive: true,
};

// ============================================================
// Technical Test: Riesgos Generales (Property & Casualty)
// ============================================================

const propertyClaimQuestions: CaseStudyQuestion[] = [
  {
    id: 'tech-rg-cs1-q1',
    content: {
      es: '¿Cuál es el primer paso en la evaluación de este siniestro por incendio industrial?',
      en: 'What is the first step in evaluating this industrial fire loss?',
    },
    type: 'multiple-choice',
    options: [
      {
        id: 'tech-rg-cs1-q1-a',
        text: {
          es: 'Pagar el monto reclamado inmediatamente para mantener al cliente satisfecho',
          en: 'Pay the claimed amount immediately to keep the client satisfied',
        },
        value: 0,
      },
      {
        id: 'tech-rg-cs1-q1-b',
        text: {
          es: 'Designar un ajustador de pérdidas, asegurar la escena del siniestro, y solicitar el informe oficial de bomberos y las autoridades correspondientes',
          en: 'Assign a loss adjuster, secure the loss scene, and request the official fire department and relevant authorities report',
        },
        value: 1,
      },
      {
        id: 'tech-rg-cs1-q1-c',
        text: {
          es: 'Rechazar el reclamo hasta que el cliente demuestre que no fue intencional',
          en: 'Reject the claim until the client proves it was not intentional',
        },
        value: 0,
      },
      {
        id: 'tech-rg-cs1-q1-d',
        text: {
          es: 'Enviar únicamente un formulario de reclamo por correo electrónico',
          en: 'Only send a claim form via email',
        },
        value: 0,
      },
    ] as QuestionOption[],
    correctOptionId: 'tech-rg-cs1-q1-b',
    maxScore: 10,
    aiEvaluated: false,
  },
  {
    id: 'tech-rg-cs1-q2',
    content: {
      es: 'El informe pericial indica que el sistema de rociadores automáticos no estaba funcional al momento del incendio, a pesar de ser un requisito de la póliza. ¿Cómo impacta esto en la cobertura?',
      en: 'The expert report indicates the automatic sprinkler system was not functional at the time of the fire, despite being a policy requirement. How does this impact coverage?',
    },
    type: 'multiple-choice',
    options: [
      {
        id: 'tech-rg-cs1-q2-a',
        text: {
          es: 'No tiene ningún impacto; la póliza cubre todo tipo de incendio',
          en: 'It has no impact; the policy covers all types of fire',
        },
        value: 0,
      },
      {
        id: 'tech-rg-cs1-q2-b',
        text: {
          es: 'La póliza se anula completamente por incumplimiento de garantías',
          en: 'The policy is completely voided due to breach of warranties',
        },
        value: 0,
      },
      {
        id: 'tech-rg-cs1-q2-c',
        text: {
          es: 'Se debe evaluar si el incumplimiento de la garantía de mantenimiento del sistema contra incendios contribuyó al agravamiento del siniestro, lo cual podría resultar en una reducción proporcional de la indemnización',
          en: 'It must be evaluated whether the breach of the fire system maintenance warranty contributed to the worsening of the loss, which could result in a proportional reduction of the indemnity',
        },
        value: 1,
      },
      {
        id: 'tech-rg-cs1-q2-d',
        text: {
          es: 'Solo se reduce el deducible aplicable',
          en: 'Only the applicable deductible is reduced',
        },
        value: 0,
      },
    ] as QuestionOption[],
    correctOptionId: 'tech-rg-cs1-q2-c',
    maxScore: 10,
    aiEvaluated: false,
  },
  {
    id: 'tech-rg-cs1-q3',
    content: {
      es: 'Realice un análisis completo de este siniestro. Incluya: la determinación de la causa probable, el cálculo de la indemnización considerando el infracoseguro, las exclusiones aplicables, y el proceso de subrogación contra terceros responsables.',
      en: 'Perform a complete analysis of this loss. Include: the determination of the probable cause, the indemnity calculation considering underinsurance, applicable exclusions, and the subrogation process against responsible third parties.',
    },
    type: 'open-text',
    rubric: {
      es: 'Evaluar: (1) Análisis de causa probable con base en evidencia disponible (2pts), (2) Cálculo correcto de indemnización aplicando regla proporcional si hay infracoseguro (valor asegurado vs valor real) (3pts), (3) Identificación de exclusiones aplicables: incumplimiento de garantía de rociadores, posible negligencia (2.5pts), (4) Proceso de subrogación: identificar al proveedor de mantenimiento como potencial tercero responsable (2.5pts). Respuesta completa = 10pts.',
      en: 'Evaluate: (1) Probable cause analysis based on available evidence (2pts), (2) Correct indemnity calculation applying proportional rule if underinsured (insured value vs actual value) (3pts), (3) Identification of applicable exclusions: sprinkler warranty breach, possible negligence (2.5pts), (4) Subrogation process: identify maintenance provider as potential responsible third party (2.5pts). Complete answer = 10pts.',
    },
    maxScore: 10,
    aiEvaluated: true,
  },
  {
    id: 'tech-rg-cs1-q4',
    content: {
      es: '¿Qué es el principio de "infracoseguro" y cómo se aplica en este caso?',
      en: 'What is the principle of "underinsurance" and how does it apply in this case?',
    },
    type: 'multiple-choice',
    options: [
      {
        id: 'tech-rg-cs1-q4-a',
        text: {
          es: 'Es cuando el asegurado tiene más de una póliza para el mismo riesgo',
          en: 'It is when the insured has more than one policy for the same risk',
        },
        value: 0,
      },
      {
        id: 'tech-rg-cs1-q4-b',
        text: {
          es: 'Cuando el valor asegurado es inferior al valor real del bien, la indemnización se reduce proporcionalmente mediante la regla proporcional',
          en: 'When the insured value is less than the actual value of the property, the indemnity is proportionally reduced using the proportional rule',
        },
        value: 1,
      },
      {
        id: 'tech-rg-cs1-q4-c',
        text: {
          es: 'Es un tipo de fraude de seguros',
          en: 'It is a type of insurance fraud',
        },
        value: 0,
      },
      {
        id: 'tech-rg-cs1-q4-d',
        text: {
          es: 'Se refiere al deducible que paga el asegurado',
          en: 'It refers to the deductible paid by the insured',
        },
        value: 0,
      },
    ] as QuestionOption[],
    correctOptionId: 'tech-rg-cs1-q4-b',
    maxScore: 10,
    aiEvaluated: false,
  },
];

const propertyClaimCase: CaseStudy = {
  id: 'tech-rg-cs1',
  area: {
    es: 'Siniestros de Propiedad',
    en: 'Property Claims',
  },
  title: {
    es: 'Incendio Industrial con Complicaciones de Cobertura',
    en: 'Industrial Fire with Coverage Complications',
  },
  scenario: {
    es: 'La empresa "Manufacturas del Norte S.A." tiene una póliza de seguros de propiedad industrial con cobertura de $2,000,000 USD que protege su planta de producción, maquinaria y materia prima. Un incendio se origina en el área de almacenamiento de materiales inflamables a las 3:00 AM de un domingo, cuando la planta estaba cerrada. El incendio destruye el 60% de la planta, incluyendo maquinaria especializada valorada en $800,000 USD y materia prima por $300,000 USD. El informe preliminar de bomberos indica que el origen fue un cortocircuito en el panel eléctrico del almacén. Sin embargo, el perito de la aseguradora descubre que: (1) El sistema de rociadores automáticos estaba fuera de servicio desde hace 3 meses (un requisito de la póliza era mantenerlo funcional), (2) El valor real total de los activos de la planta era de $3,500,000 USD pero solo estaban asegurados por $2,000,000 USD, y (3) La empresa de mantenimiento eléctrico había advertido sobre riesgos en el panel eléctrico hace 6 meses sin que se tomaran acciones.',
    en: 'The company "Manufacturas del Norte S.A." has an industrial property insurance policy with $2,000,000 USD coverage protecting its production plant, machinery, and raw materials. A fire originates in the flammable materials storage area at 3:00 AM on a Sunday when the plant was closed. The fire destroys 60% of the plant, including specialized machinery valued at $800,000 USD and raw materials worth $300,000 USD. The preliminary fire department report indicates the origin was a short circuit in the warehouse electrical panel. However, the insurer\'s expert discovers that: (1) The automatic sprinkler system had been out of service for 3 months (a policy requirement was to maintain it functional), (2) The total actual value of the plant\'s assets was $3,500,000 USD but only $2,000,000 USD was insured, and (3) The electrical maintenance company had warned about risks in the electrical panel 6 months ago without action being taken.',
  },
  questions: propertyClaimQuestions,
  difficulty: 2,
  timeLimitMinutes: 12,
  targetProfileIds: ['riesgos-generales'],
  isActive: true,
  order: 1,
};

// -----------------------------------------------------------

const liabilityQuestions: CaseStudyQuestion[] = [
  {
    id: 'tech-rg-cs2-q1',
    content: {
      es: '¿Qué tipo de cobertura de responsabilidad civil aplica en este caso y cuáles son sus alcances?',
      en: 'What type of liability coverage applies in this case and what are its scopes?',
    },
    type: 'multiple-choice',
    options: [
      {
        id: 'tech-rg-cs2-q1-a',
        text: {
          es: 'Solo aplica la responsabilidad civil contractual entre la constructora y el centro comercial',
          en: 'Only contractual liability between the construction company and the shopping center applies',
        },
        value: 0,
      },
      {
        id: 'tech-rg-cs2-q1-b',
        text: {
          es: 'Aplica la responsabilidad civil general (CGL) que cubre daños corporales y materiales a terceros, incluyendo la responsabilidad patronal por los trabajadores lesionados y la responsabilidad por operaciones completadas',
          en: 'General liability (CGL) applies covering bodily injury and property damage to third parties, including employer liability for injured workers and completed operations liability',
        },
        value: 1,
      },
      {
        id: 'tech-rg-cs2-q1-c',
        text: {
          es: 'Solo la póliza de accidentes personales de los trabajadores',
          en: 'Only the workers\' personal accident policy',
        },
        value: 0,
      },
      {
        id: 'tech-rg-cs2-q1-d',
        text: {
          es: 'La póliza de propiedad del centro comercial es la única que aplica',
          en: 'The shopping center\'s property policy is the only one that applies',
        },
        value: 0,
      },
    ] as QuestionOption[],
    correctOptionId: 'tech-rg-cs2-q1-b',
    maxScore: 10,
    aiEvaluated: false,
  },
  {
    id: 'tech-rg-cs2-q2',
    content: {
      es: '¿Cuál es la implicación de que la constructora haya subcontratado la demolición a una empresa sin seguro adecuado?',
      en: 'What is the implication of the construction company having subcontracted the demolition to a company without adequate insurance?',
    },
    type: 'multiple-choice',
    options: [
      {
        id: 'tech-rg-cs2-q2-a',
        text: {
          es: 'No tiene implicación; cada empresa es responsable de sus propios seguros',
          en: 'It has no implication; each company is responsible for its own insurance',
        },
        value: 0,
      },
      {
        id: 'tech-rg-cs2-q2-b',
        text: {
          es: 'La constructora principal puede ser solidariamente responsable por los actos del subcontratista, y su póliza de CGL puede activar la cláusula de subcontratistas, potencialmente afectando la cobertura si no se cumplió el requisito de verificar seguros de subcontratistas',
          en: 'The main construction company may be jointly liable for the subcontractor\'s acts, and its CGL policy may trigger the subcontractor clause, potentially affecting coverage if the requirement to verify subcontractor insurance was not met',
        },
        value: 1,
      },
      {
        id: 'tech-rg-cs2-q2-c',
        text: {
          es: 'El subcontratista absorbe toda la responsabilidad automáticamente',
          en: 'The subcontractor automatically absorbs all liability',
        },
        value: 0,
      },
      {
        id: 'tech-rg-cs2-q2-d',
        text: {
          es: 'La aseguradora no necesita verificar la cadena de subcontratación',
          en: 'The insurer does not need to verify the subcontracting chain',
        },
        value: 0,
      },
    ] as QuestionOption[],
    correctOptionId: 'tech-rg-cs2-q2-b',
    maxScore: 10,
    aiEvaluated: false,
  },
  {
    id: 'tech-rg-cs2-q3',
    content: {
      es: 'Analice la cadena de responsabilidades en este siniestro. Identifique todas las pólizas que podrían responder, determine el orden de prelación de coberturas, y explique cómo se distribuiría la indemnización entre las diferentes aseguradoras involucradas.',
      en: 'Analyze the chain of liabilities in this loss. Identify all policies that could respond, determine the order of coverage priority, and explain how the indemnity would be distributed among the different insurers involved.',
    },
    type: 'open-text',
    rubric: {
      es: 'Evaluar: (1) Identificación de todas las partes responsables: constructora, subcontratista, centro comercial, ingeniero supervisor (2pts), (2) Pólizas aplicables: CGL de constructora, RC profesional del ingeniero, póliza de propiedad del centro comercial, seguro de accidentes laborales (2.5pts), (3) Orden de prelación: póliza primaria del subcontratista (si existe), póliza de la constructora como principal, póliza de exceso/paraguas (2.5pts), (4) Distribución de indemnización: contribución proporcional entre aseguradoras, aplicación de cláusulas de contribución y otros seguros (3pts). Respuesta completa = 10pts.',
      en: 'Evaluate: (1) Identification of all responsible parties: construction company, subcontractor, shopping center, supervising engineer (2pts), (2) Applicable policies: construction company CGL, engineer professional liability, shopping center property policy, workers\' accident insurance (2.5pts), (3) Priority order: subcontractor primary policy (if exists), construction company policy as principal, excess/umbrella policy (2.5pts), (4) Indemnity distribution: proportional contribution among insurers, application of contribution and other insurance clauses (3pts). Complete answer = 10pts.',
    },
    maxScore: 10,
    aiEvaluated: true,
  },
];

const liabilityCase: CaseStudy = {
  id: 'tech-rg-cs2',
  area: {
    es: 'Responsabilidad Civil y Siniestros Complejos',
    en: 'Liability and Complex Claims',
  },
  title: {
    es: 'Accidente en Obra de Construcción con Múltiples Responsables',
    en: 'Construction Site Accident with Multiple Liable Parties',
  },
  scenario: {
    es: 'La constructora "Edificaciones Modernas S.A." tiene una póliza de Responsabilidad Civil General (CGL) con límite de $5,000,000 USD y deducible de $25,000 USD. Durante la demolición parcial de un ala del centro comercial "Plaza Central" para su remodelación, una pared estructural colapsa inesperadamente, causando los siguientes daños: (1) Tres trabajadores de la constructora resultan heridos, uno de gravedad con fracturas múltiples, (2) Un local comercial adyacente sufre daños estructurales valorados en $150,000 USD, con pérdida de inventario por $80,000 USD, (3) Dos clientes del centro comercial que estaban en el área resultan con lesiones menores, (4) El centro comercial debe cerrar un ala completa durante 3 meses, perdiendo ingresos por arrendamiento estimados en $200,000 USD. La investigación revela que la constructora subcontrató la demolición a "Demoliciones Rápidas", una empresa que no contaba con seguro de responsabilidad civil propio. Además, el ingeniero supervisor de la obra había aprobado el plan de demolición sin considerar un informe estructural que indicaba debilidades en la pared colapsada.',
    en: 'Construction company "Edificaciones Modernas S.A." has a Commercial General Liability (CGL) policy with a $5,000,000 USD limit and $25,000 USD deductible. During the partial demolition of a wing of "Plaza Central" shopping center for remodeling, a structural wall unexpectedly collapses, causing the following damages: (1) Three construction workers are injured, one seriously with multiple fractures, (2) An adjacent commercial unit suffers structural damage valued at $150,000 USD, with inventory loss of $80,000 USD, (3) Two shopping center customers in the area sustain minor injuries, (4) The shopping center must close an entire wing for 3 months, losing estimated rental income of $200,000 USD. The investigation reveals that the construction company subcontracted the demolition to "Demoliciones Rápidas," a company that did not have its own liability insurance. Additionally, the site\'s supervising engineer had approved the demolition plan without considering a structural report indicating weaknesses in the collapsed wall.',
  },
  questions: liabilityQuestions,
  difficulty: 3,
  timeLimitMinutes: 12,
  targetProfileIds: ['riesgos-generales'],
  isActive: true,
  order: 2,
};

// ============================================================
// Export: Riesgos Generales Technical Test Config
// ============================================================

export const technicalTestConfigRG: TechnicalTestConfig = {
  id: 'tech-test-insurance-rg-1',
  name: {
    es: 'Evaluación Técnica - Riesgos Generales (Propiedad y Responsabilidad Civil)',
    en: 'Technical Assessment - General Risks (Property & Casualty)',
  },
  description: {
    es: 'Evaluación basada en casos prácticos para profesionales de seguros de riesgos generales. Cubre siniestros de propiedad industrial y responsabilidad civil con escenarios complejos.',
    en: 'Case-study based assessment for general insurance professionals. Covers industrial property claims and liability with complex scenarios.',
  },
  targetProfileId: 'riesgos-generales',
  caseStudies: [propertyClaimCase, liabilityCase],
  totalTimeLimitMinutes: 25,
  passingScore: 60,
  isActive: true,
};
