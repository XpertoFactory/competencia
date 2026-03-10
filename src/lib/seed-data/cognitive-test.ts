import type { CognitiveTestConfig, CognitiveQuestion, QuestionOption } from '@/types';

// ---------------------------------------------------------------------------
// Helper to build a question concisely
// ---------------------------------------------------------------------------
function q(
  id: string,
  subtype: CognitiveQuestion['subtype'],
  difficulty: 1 | 2 | 3,
  es: string,
  en: string,
  optionsEs: [string, string, string, string],
  optionsEn: [string, string, string, string],
  values: [number, number, number, number],
  correctIndex: 0 | 1 | 2 | 3,
  order: number,
): CognitiveQuestion {
  const opts: QuestionOption[] = [0, 1, 2, 3].map((i) => ({
    id: `${id}-opt-${i + 1}`,
    text: { es: optionsEs[i], en: optionsEn[i] },
    value: values[i],
  }));
  return {
    id,
    subtype,
    content: { es, en },
    options: opts,
    correctOptionId: opts[correctIndex].id,
    difficulty,
    timeLimitSeconds: 60,
    order,
    isActive: true,
  };
}

// ---------------------------------------------------------------------------
// LOGICAL REASONING (5 questions)
// ---------------------------------------------------------------------------
const logicalQuestions: CognitiveQuestion[] = [
  q(
    'cog-log-01',
    'logical',
    1,
    'Todos los agentes de seguros deben aprobar un examen de certificación. María es agente de seguros. ¿Qué se puede concluir?',
    'All insurance agents must pass a certification exam. Maria is an insurance agent. What can be concluded?',
    [
      'María no necesita el examen',
      'María debe aprobar el examen de certificación',
      'María ya aprobó el examen',
      'María puede omitir el examen si tiene experiencia',
    ],
    [
      'Maria does not need the exam',
      'Maria must pass the certification exam',
      'Maria already passed the exam',
      'Maria can skip the exam if she has experience',
    ],
    [0, 1, 0, 0],
    1,
    1,
  ),
  q(
    'cog-log-02',
    'logical',
    2,
    'Si una póliza cubre daños por inundación, entonces cubre daños por lluvia. La póliza de Juan no cubre daños por lluvia. ¿Qué se puede concluir?',
    'If a policy covers flood damage, then it covers rain damage. Juan\'s policy does not cover rain damage. What can be concluded?',
    [
      'La póliza de Juan cubre inundación',
      'La póliza de Juan no cubre inundación',
      'La póliza de Juan cubre daños parciales',
      'No se puede determinar',
    ],
    [
      'Juan\'s policy covers flood damage',
      'Juan\'s policy does not cover flood damage',
      'Juan\'s policy covers partial damage',
      'It cannot be determined',
    ],
    [0, 1, 0, 0],
    1,
    2,
  ),
  q(
    'cog-log-03',
    'logical',
    2,
    'En una compañía de seguros, los analistas trabajan en el piso 3 o en el piso 5. Los del piso 3 se especializan en vida. Los del piso 5 se especializan en autos. Pedro es analista y no trabaja en vida. ¿Dónde trabaja Pedro?',
    'In an insurance company, analysts work on floor 3 or floor 5. Those on floor 3 specialize in life insurance. Those on floor 5 specialize in auto insurance. Pedro is an analyst and does not work in life insurance. Where does Pedro work?',
    [
      'Piso 3',
      'Piso 4',
      'Piso 5',
      'No se puede determinar',
    ],
    [
      'Floor 3',
      'Floor 4',
      'Floor 5',
      'It cannot be determined',
    ],
    [0, 0, 1, 0],
    2,
    3,
  ),
  q(
    'cog-log-04',
    'logical',
    3,
    'Tres suscriptores (Ana, Beto, Clara) evalúan riesgos de diferente tipo: salud, hogar y auto. Ana no evalúa hogar ni auto. Beto no evalúa hogar. ¿Quién evalúa riesgos de hogar?',
    'Three underwriters (Ana, Beto, Clara) assess different risk types: health, home, and auto. Ana does not assess home or auto. Beto does not assess home. Who assesses home risks?',
    [
      'Ana',
      'Beto',
      'Clara',
      'No se puede determinar',
    ],
    [
      'Ana',
      'Beto',
      'Clara',
      'It cannot be determined',
    ],
    [0, 0, 1, 0],
    2,
    4,
  ),
  q(
    'cog-log-05',
    'logical',
    3,
    'Ninguna reclamación fraudulenta debe ser aprobada. Algunas reclamaciones aprobadas requieren auditoría. ¿Cuál de las siguientes es necesariamente verdadera?',
    'No fraudulent claim should be approved. Some approved claims require auditing. Which of the following is necessarily true?',
    [
      'Todas las reclamaciones auditadas son fraudulentas',
      'Algunas reclamaciones que requieren auditoría no son fraudulentas',
      'Las reclamaciones fraudulentas requieren auditoría',
      'Ninguna reclamación aprobada es auditada',
    ],
    [
      'All audited claims are fraudulent',
      'Some claims requiring auditing are not fraudulent',
      'Fraudulent claims require auditing',
      'No approved claim is audited',
    ],
    [0, 1, 0, 0],
    1,
    5,
  ),
];

// ---------------------------------------------------------------------------
// VERBAL REASONING (5 questions)
// ---------------------------------------------------------------------------
const verbalQuestions: CognitiveQuestion[] = [
  q(
    'cog-ver-01',
    'verbal',
    1,
    '¿Cuál de las siguientes palabras es sinónimo de "prima" en el contexto de seguros?',
    'Which of the following words is synonymous with "premium" in the insurance context?',
    [
      'Descuento',
      'Cuota de seguro',
      'Deducible',
      'Cobertura',
    ],
    [
      'Discount',
      'Insurance fee',
      'Deductible',
      'Coverage',
    ],
    [0, 1, 0, 0],
    1,
    6,
  ),
  q(
    'cog-ver-02',
    'verbal',
    1,
    'Seleccione la palabra que NO pertenece al grupo: póliza, cobertura, siniestro, nómina.',
    'Select the word that does NOT belong to the group: policy, coverage, claim, payroll.',
    [
      'Póliza',
      'Cobertura',
      'Siniestro',
      'Nómina',
    ],
    [
      'Policy',
      'Coverage',
      'Claim',
      'Payroll',
    ],
    [0, 0, 0, 1],
    3,
    7,
  ),
  q(
    'cog-ver-03',
    'verbal',
    2,
    '"El riesgo moral ocurre cuando una parte asegurada actúa de forma más arriesgada porque sabe que está protegida." ¿Cuál es la idea principal?',
    '"Moral hazard occurs when an insured party acts more recklessly because they know they are protected." What is the main idea?',
    [
      'Las aseguradoras siempre pierden dinero',
      'El seguro puede incentivar comportamientos más riesgosos',
      'Los asegurados siempre son responsables',
      'El riesgo moral solo afecta seguros de vida',
    ],
    [
      'Insurers always lose money',
      'Insurance can incentivize riskier behavior',
      'Insured parties are always responsible',
      'Moral hazard only affects life insurance',
    ],
    [0, 1, 0, 0],
    1,
    8,
  ),
  q(
    'cog-ver-04',
    'verbal',
    2,
    'Complete la analogía: Asegurado es a póliza como paciente es a ___.',
    'Complete the analogy: Policyholder is to policy as patient is to ___.',
    [
      'Hospital',
      'Historia clínica',
      'Médico',
      'Receta',
    ],
    [
      'Hospital',
      'Medical record',
      'Doctor',
      'Prescription',
    ],
    [0, 1, 0, 0],
    1,
    9,
  ),
  q(
    'cog-ver-05',
    'verbal',
    3,
    '"La diversificación del riesgo permite a las aseguradoras distribuir la exposición entre múltiples pólizas, reduciendo el impacto de cualquier evento individual." ¿Qué conclusión se desprende del texto?',
    '"Risk diversification allows insurers to spread exposure across multiple policies, reducing the impact of any single event." What conclusion follows from the text?',
    [
      'Diversificar elimina todo el riesgo',
      'Una sola póliza grande es más segura',
      'Tener muchas pólizas variadas reduce el riesgo global',
      'La diversificación solo aplica a seguros de vida',
    ],
    [
      'Diversification eliminates all risk',
      'A single large policy is safer',
      'Having many varied policies reduces overall risk',
      'Diversification only applies to life insurance',
    ],
    [0, 0, 1, 0],
    2,
    10,
  ),
];

// ---------------------------------------------------------------------------
// NUMERICAL REASONING (5 questions)
// ---------------------------------------------------------------------------
const numericalQuestions: CognitiveQuestion[] = [
  q(
    'cog-num-01',
    'numerical',
    1,
    'Una póliza tiene una prima anual de $12,000. Si el cliente paga mensualmente, ¿cuánto paga cada mes?',
    'A policy has an annual premium of $12,000. If the client pays monthly, how much is each payment?',
    ['$100', '$1,000', '$1,200', '$120'],
    ['$100', '$1,000', '$1,200', '$120'],
    [0, 1, 0, 0],
    1,
    11,
  ),
  q(
    'cog-num-02',
    'numerical',
    1,
    'Un seguro de auto tiene un deducible de $5,000. Si el daño total es de $18,000, ¿cuánto cubre la aseguradora?',
    'An auto insurance policy has a $5,000 deductible. If the total damage is $18,000, how much does the insurer cover?',
    ['$18,000', '$13,000', '$5,000', '$23,000'],
    ['$18,000', '$13,000', '$5,000', '$23,000'],
    [0, 1, 0, 0],
    1,
    12,
  ),
  q(
    'cog-num-03',
    'numerical',
    2,
    'En el primer trimestre se vendieron 120 pólizas, en el segundo 150 y en el tercero 180. Si la tendencia continúa, ¿cuántas pólizas se venderán en el cuarto trimestre?',
    'In Q1, 120 policies were sold, Q2 had 150, and Q3 had 180. If the trend continues, how many policies will be sold in Q4?',
    ['190', '200', '210', '240'],
    ['190', '200', '210', '240'],
    [0, 0, 1, 0],
    2,
    13,
  ),
  q(
    'cog-num-04',
    'numerical',
    2,
    'Una aseguradora tiene una tasa de siniestralidad del 65%. Si recaudó $2,000,000 en primas, ¿cuánto pagó en siniestros?',
    'An insurer has a loss ratio of 65%. If it collected $2,000,000 in premiums, how much did it pay in claims?',
    ['$650,000', '$1,300,000', '$1,350,000', '$2,000,000'],
    ['$650,000', '$1,300,000', '$1,350,000', '$2,000,000'],
    [0, 1, 0, 0],
    1,
    14,
  ),
  q(
    'cog-num-05',
    'numerical',
    3,
    'Un agente vendió 40 pólizas en enero. Sus ventas aumentaron un 25% en febrero y luego disminuyeron un 20% en marzo. ¿Cuántas pólizas vendió en marzo?',
    'An agent sold 40 policies in January. Sales increased by 25% in February and then decreased by 20% in March. How many policies were sold in March?',
    ['42', '40', '38', '44'],
    ['42', '40', '38', '44'],
    [0, 1, 0, 0],
    1,
    15,
  ),
];

// ---------------------------------------------------------------------------
// PATTERN RECOGNITION (5 questions — text-based)
// ---------------------------------------------------------------------------
const patternQuestions: CognitiveQuestion[] = [
  q(
    'cog-pat-01',
    'pattern',
    1,
    '¿Qué número sigue en la secuencia? 2, 4, 8, 16, __',
    'What number comes next in the sequence? 2, 4, 8, 16, __',
    ['18', '24', '32', '20'],
    ['18', '24', '32', '20'],
    [0, 0, 1, 0],
    2,
    16,
  ),
  q(
    'cog-pat-02',
    'pattern',
    1,
    '¿Qué número sigue en la secuencia? 5, 10, 15, 20, __',
    'What number comes next in the sequence? 5, 10, 15, 20, __',
    ['30', '22', '25', '35'],
    ['30', '22', '25', '35'],
    [0, 0, 1, 0],
    2,
    17,
  ),
  q(
    'cog-pat-03',
    'pattern',
    2,
    '¿Qué número sigue en la secuencia? 1, 1, 2, 3, 5, 8, __',
    'What number comes next in the sequence? 1, 1, 2, 3, 5, 8, __',
    ['11', '13', '10', '15'],
    ['11', '13', '10', '15'],
    [0, 1, 0, 0],
    1,
    18,
  ),
  q(
    'cog-pat-04',
    'pattern',
    2,
    '¿Qué número sigue en la secuencia? 3, 6, 12, 24, 48, __',
    'What number comes next in the sequence? 3, 6, 12, 24, 48, __',
    ['60', '72', '84', '96'],
    ['60', '72', '84', '96'],
    [0, 0, 0, 1],
    3,
    19,
  ),
  q(
    'cog-pat-05',
    'pattern',
    3,
    '¿Qué número sigue en la secuencia? 2, 6, 12, 20, 30, __',
    'What number comes next in the sequence? 2, 6, 12, 20, 30, __',
    ['40', '42', '36', '44'],
    ['40', '42', '36', '44'],
    [0, 1, 0, 0],
    1,
    20,
  ),
];

// ---------------------------------------------------------------------------
// Exported config
// ---------------------------------------------------------------------------
export const cognitiveTestConfig: CognitiveTestConfig = {
  id: 'cog-test-01',
  name: {
    es: 'Prueba Cognitiva General',
    en: 'General Cognitive Test',
  },
  description: {
    es: 'Evaluación de habilidades cognitivas que incluye razonamiento lógico, verbal, numérico y reconocimiento de patrones. Diseñada para profesionales del sector asegurador.',
    en: 'Cognitive skills assessment covering logical, verbal, numerical reasoning, and pattern recognition. Designed for insurance sector professionals.',
  },
  totalTimeLimitMinutes: 12,
  questions: [
    ...logicalQuestions,
    ...verbalQuestions,
    ...numericalQuestions,
    ...patternQuestions,
  ],
  isActive: true,
};
