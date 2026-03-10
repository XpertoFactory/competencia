import type { AptitudeTestConfig, AptitudeQuestion, QuestionOption } from '@/types';

// ---------------------------------------------------------------------------
// Helper – keeps option creation concise
// ---------------------------------------------------------------------------
function opt(id: string, es: string, en: string, value: number): QuestionOption {
  return { id, text: { es, en }, value };
}

// ---------------------------------------------------------------------------
// NUMERICAL questions (7) – arithmetic, percentages, data interpretation
// ---------------------------------------------------------------------------
const numericalQuestions: AptitudeQuestion[] = [
  {
    id: 'apt-num-01',
    subtype: 'numerical',
    content: {
      es: 'Una poliza de seguro tiene una prima anual de $1,200. Si el asegurado paga trimestralmente con un recargo del 5%, ¿cual es el monto total pagado al ano?',
      en: 'An insurance policy has an annual premium of $1,200. If the insured pays quarterly with a 5% surcharge, what is the total amount paid per year?',
    },
    options: [
      opt('apt-num-01-a', '$1,200', '$1,200', 0),
      opt('apt-num-01-b', '$1,260', '$1,260', 1),
      opt('apt-num-01-c', '$1,320', '$1,320', 0),
      opt('apt-num-01-d', '$1,250', '$1,250', 0),
    ],
    correctOptionId: 'apt-num-01-b',
    difficulty: 1,
    order: 1,
    isActive: true,
  },
  {
    id: 'apt-num-02',
    subtype: 'numerical',
    content: {
      es: 'Un agente de seguros vendio 45 polizas en enero y 54 en febrero. ¿Cual fue el porcentaje de incremento en ventas?',
      en: 'An insurance agent sold 45 policies in January and 54 in February. What was the percentage increase in sales?',
    },
    options: [
      opt('apt-num-02-a', '15%', '15%', 0),
      opt('apt-num-02-b', '20%', '20%', 1),
      opt('apt-num-02-c', '25%', '25%', 0),
      opt('apt-num-02-d', '18%', '18%', 0),
    ],
    correctOptionId: 'apt-num-02-b',
    difficulty: 1,
    order: 2,
    isActive: true,
  },
  {
    id: 'apt-num-03',
    subtype: 'numerical',
    context: {
      es: 'La tabla muestra las primas mensuales por rango de edad:\n18-30: $85\n31-45: $120\n46-60: $175\n61+: $230',
      en: 'The table shows monthly premiums by age range:\n18-30: $85\n31-45: $120\n46-60: $175\n61+: $230',
    },
    content: {
      es: 'Si una empresa asegura a 10 empleados de 18-30, 15 de 31-45 y 5 de 46-60, ¿cual es el costo mensual total de primas?',
      en: 'If a company insures 10 employees aged 18-30, 15 aged 31-45, and 5 aged 46-60, what is the total monthly premium cost?',
    },
    options: [
      opt('apt-num-03-a', '$3,425', '$3,425', 0),
      opt('apt-num-03-b', '$3,525', '$3,525', 0),
      opt('apt-num-03-c', '$3,475', '$3,475', 1),
      opt('apt-num-03-d', '$3,575', '$3,575', 0),
    ],
    correctOptionId: 'apt-num-03-c',
    difficulty: 2,
    order: 3,
    isActive: true,
  },
  {
    id: 'apt-num-04',
    subtype: 'numerical',
    content: {
      es: 'Un siniestro se liquida en $50,000. El deducible es del 10% y el coaseguro es 80/20 sobre el monto restante. ¿Cuanto paga la aseguradora?',
      en: 'A claim is settled at $50,000. The deductible is 10% and the coinsurance is 80/20 on the remaining amount. How much does the insurer pay?',
    },
    options: [
      opt('apt-num-04-a', '$36,000', '$36,000', 1),
      opt('apt-num-04-b', '$40,000', '$40,000', 0),
      opt('apt-num-04-c', '$35,000', '$35,000', 0),
      opt('apt-num-04-d', '$38,000', '$38,000', 0),
    ],
    correctOptionId: 'apt-num-04-a',
    difficulty: 2,
    order: 4,
    isActive: true,
  },
  {
    id: 'apt-num-05',
    subtype: 'numerical',
    content: {
      es: 'Una aseguradora tiene una tasa de siniestralidad del 65%. Si recaudo $2,400,000 en primas, ¿cuanto destino al pago de siniestros?',
      en: 'An insurer has a loss ratio of 65%. If it collected $2,400,000 in premiums, how much was allocated to claim payments?',
    },
    options: [
      opt('apt-num-05-a', '$1,440,000', '$1,440,000', 0),
      opt('apt-num-05-b', '$1,560,000', '$1,560,000', 1),
      opt('apt-num-05-c', '$1,620,000', '$1,620,000', 0),
      opt('apt-num-05-d', '$1,500,000', '$1,500,000', 0),
    ],
    correctOptionId: 'apt-num-05-b',
    difficulty: 2,
    order: 5,
    isActive: true,
  },
  {
    id: 'apt-num-06',
    subtype: 'numerical',
    context: {
      es: 'Datos trimestrales de reclamaciones:\nQ1: 120 reclamaciones, $480,000 pagados\nQ2: 98 reclamaciones, $412,000 pagados\nQ3: 145 reclamaciones, $595,000 pagados\nQ4: 137 reclamaciones, $561,000 pagados',
      en: 'Quarterly claims data:\nQ1: 120 claims, $480,000 paid\nQ2: 98 claims, $412,000 paid\nQ3: 145 claims, $595,000 paid\nQ4: 137 claims, $561,000 paid',
    },
    content: {
      es: '¿Cual fue el costo promedio por reclamacion en el trimestre con mayor numero de reclamaciones?',
      en: 'What was the average cost per claim in the quarter with the highest number of claims?',
    },
    options: [
      opt('apt-num-06-a', '$4,000', '$4,000', 0),
      opt('apt-num-06-b', '$4,103.45', '$4,103.45', 1),
      opt('apt-num-06-c', '$4,204.08', '$4,204.08', 0),
      opt('apt-num-06-d', '$4,094.89', '$4,094.89', 0),
    ],
    correctOptionId: 'apt-num-06-b',
    difficulty: 3,
    order: 6,
    isActive: true,
  },
  {
    id: 'apt-num-07',
    subtype: 'numerical',
    content: {
      es: 'Un corredor de seguros gana una comision del 12% sobre la prima del primer ano y 4% sobre renovaciones. Si coloca una poliza de $3,600 anuales y el cliente renueva por 3 anos mas, ¿cual es la comision total acumulada?',
      en: 'An insurance broker earns a 12% commission on the first-year premium and 4% on renewals. If they place a $3,600 annual policy and the client renews for 3 more years, what is the total accumulated commission?',
    },
    options: [
      opt('apt-num-07-a', '$864', '$864', 0),
      opt('apt-num-07-b', '$432', '$432', 0),
      opt('apt-num-07-c', '$576', '$576', 0),
      opt('apt-num-07-d', '$864', '$864', 1),
    ],
    correctOptionId: 'apt-num-07-d',
    difficulty: 3,
    order: 7,
    isActive: true,
  },
];

// ---------------------------------------------------------------------------
// VERBAL questions (7) – comprehension, analogies, word relationships
// ---------------------------------------------------------------------------
const verbalQuestions: AptitudeQuestion[] = [
  {
    id: 'apt-ver-01',
    subtype: 'verbal',
    content: {
      es: 'Seleccione la palabra que mejor complete la oracion: "La _____ del riesgo es el primer paso en el proceso de suscripcion de seguros."',
      en: 'Select the word that best completes the sentence: "Risk _____ is the first step in the insurance underwriting process."',
    },
    options: [
      opt('apt-ver-01-a', 'eliminacion / elimination', 'elimination', 0),
      opt('apt-ver-01-b', 'evaluacion / assessment', 'assessment', 1),
      opt('apt-ver-01-c', 'transferencia / transfer', 'transfer', 0),
      opt('apt-ver-01-d', 'ignorancia / ignorance', 'ignorance', 0),
    ],
    correctOptionId: 'apt-ver-01-b',
    difficulty: 1,
    order: 8,
    isActive: true,
  },
  {
    id: 'apt-ver-02',
    subtype: 'verbal',
    content: {
      es: 'PRIMA es a POLIZA como SALARIO es a:',
      en: 'PREMIUM is to POLICY as SALARY is to:',
    },
    options: [
      opt('apt-ver-02-a', 'Banco / Bank', 'Bank', 0),
      opt('apt-ver-02-b', 'Contrato laboral / Employment contract', 'Employment contract', 1),
      opt('apt-ver-02-c', 'Dinero / Money', 'Money', 0),
      opt('apt-ver-02-d', 'Oficina / Office', 'Office', 0),
    ],
    correctOptionId: 'apt-ver-02-b',
    difficulty: 1,
    order: 9,
    isActive: true,
  },
  {
    id: 'apt-ver-03',
    subtype: 'verbal',
    context: {
      es: 'El reaseguro es un mecanismo mediante el cual una compania de seguros transfiere parte de los riesgos que ha asumido a otra entidad aseguradora. Esto permite a la aseguradora original reducir su exposicion a perdidas catastroficas y mantener una cartera mas equilibrada. El reasegurador, a cambio, recibe una porcion de la prima original.',
      en: 'Reinsurance is a mechanism through which an insurance company transfers part of the risks it has assumed to another insuring entity. This allows the original insurer to reduce its exposure to catastrophic losses and maintain a more balanced portfolio. The reinsurer, in return, receives a portion of the original premium.',
    },
    content: {
      es: 'Segun el texto, ¿cual es el principal beneficio del reaseguro para la aseguradora original?',
      en: 'According to the text, what is the main benefit of reinsurance for the original insurer?',
    },
    options: [
      opt('apt-ver-03-a', 'Aumentar las primas cobradas / Increase premiums charged', 'Increase premiums charged', 0),
      opt('apt-ver-03-b', 'Reducir la exposicion a perdidas catastroficas / Reduce exposure to catastrophic losses', 'Reduce exposure to catastrophic losses', 1),
      opt('apt-ver-03-c', 'Eliminar todos los riesgos / Eliminate all risks', 'Eliminate all risks', 0),
      opt('apt-ver-03-d', 'Incrementar el numero de polizas / Increase the number of policies', 'Increase the number of policies', 0),
    ],
    correctOptionId: 'apt-ver-03-b',
    difficulty: 1,
    order: 10,
    isActive: true,
  },
  {
    id: 'apt-ver-04',
    subtype: 'verbal',
    content: {
      es: '¿Cual de las siguientes palabras es un antonimo de "solvencia" en el contexto financiero?',
      en: 'Which of the following words is an antonym of "solvency" in the financial context?',
    },
    options: [
      opt('apt-ver-04-a', 'Liquidez / Liquidity', 'Liquidity', 0),
      opt('apt-ver-04-b', 'Insolvencia / Insolvency', 'Insolvency', 1),
      opt('apt-ver-04-c', 'Rentabilidad / Profitability', 'Profitability', 0),
      opt('apt-ver-04-d', 'Capitalización / Capitalization', 'Capitalization', 0),
    ],
    correctOptionId: 'apt-ver-04-b',
    difficulty: 2,
    order: 11,
    isActive: true,
  },
  {
    id: 'apt-ver-05',
    subtype: 'verbal',
    context: {
      es: 'La transformacion digital en el sector asegurador ha generado un cambio paradigmatico en la relacion con el cliente. Las insurtech han introducido modelos de negocio disruptivos que desafian las practicas tradicionales, desde la suscripcion automatizada hasta los microseguros bajo demanda. Sin embargo, esta innovacion tambien plantea desafios regulatorios significativos, ya que los marcos normativos existentes no siempre contemplan estas nuevas modalidades.',
      en: 'Digital transformation in the insurance sector has generated a paradigm shift in the customer relationship. Insurtechs have introduced disruptive business models that challenge traditional practices, from automated underwriting to on-demand microinsurance. However, this innovation also poses significant regulatory challenges, as existing regulatory frameworks do not always account for these new modalities.',
    },
    content: {
      es: '¿Cual es la idea principal del parrafo?',
      en: 'What is the main idea of the paragraph?',
    },
    options: [
      opt('apt-ver-05-a', 'Las insurtech eliminaran a las aseguradoras tradicionales / Insurtechs will eliminate traditional insurers', 'Insurtechs will eliminate traditional insurers', 0),
      opt('apt-ver-05-b', 'La digitalizacion trae innovacion pero tambien retos regulatorios / Digitalization brings innovation but also regulatory challenges', 'Digitalization brings innovation but also regulatory challenges', 1),
      opt('apt-ver-05-c', 'Los microseguros son el futuro del sector / Microinsurance is the future of the sector', 'Microinsurance is the future of the sector', 0),
      opt('apt-ver-05-d', 'La regulacion impide la innovacion / Regulation prevents innovation', 'Regulation prevents innovation', 0),
    ],
    correctOptionId: 'apt-ver-05-b',
    difficulty: 2,
    order: 12,
    isActive: true,
  },
  {
    id: 'apt-ver-06',
    subtype: 'verbal',
    content: {
      es: 'SUSCRIPCION es a RIESGO como AUDITORIA es a:',
      en: 'UNDERWRITING is to RISK as AUDITING is to:',
    },
    options: [
      opt('apt-ver-06-a', 'Ganancia / Profit', 'Profit', 0),
      opt('apt-ver-06-b', 'Cumplimiento / Compliance', 'Compliance', 1),
      opt('apt-ver-06-c', 'Contrato / Contract', 'Contract', 0),
      opt('apt-ver-06-d', 'Venta / Sale', 'Sale', 0),
    ],
    correctOptionId: 'apt-ver-06-b',
    difficulty: 2,
    order: 13,
    isActive: true,
  },
  {
    id: 'apt-ver-07',
    subtype: 'verbal',
    context: {
      es: 'En el ambito de la gestion de siniestros, el principio de subrogacion permite a la aseguradora, una vez indemnizado el asegurado, ejercer los derechos de este frente al tercero responsable del dano. Este mecanismo busca evitar el enriquecimiento indebido del asegurado y recuperar los fondos desembolsados. No obstante, la subrogacion no aplica en seguros de personas, donde la prestacion tiene caracter indemnizatorio fijo.',
      en: 'In the field of claims management, the principle of subrogation allows the insurer, once the insured has been indemnified, to exercise the insured\'s rights against the third party responsible for the damage. This mechanism seeks to prevent unjust enrichment of the insured and recover the funds disbursed. However, subrogation does not apply in personal insurance, where the benefit has a fixed indemnity character.',
    },
    content: {
      es: 'Segun el texto, ¿por que la subrogacion no aplica en seguros de personas?',
      en: 'According to the text, why does subrogation not apply in personal insurance?',
    },
    options: [
      opt('apt-ver-07-a', 'Porque no hay tercero responsable / Because there is no responsible third party', 'Because there is no responsible third party', 0),
      opt('apt-ver-07-b', 'Porque la prestacion es de caracter indemnizatorio fijo / Because the benefit has a fixed indemnity character', 'Because the benefit has a fixed indemnity character', 1),
      opt('apt-ver-07-c', 'Porque el asegurado ya fue compensado / Because the insured was already compensated', 'Because the insured was already compensated', 0),
      opt('apt-ver-07-d', 'Porque la ley lo prohibe expresamente / Because the law expressly prohibits it', 'Because the law expressly prohibits it', 0),
    ],
    correctOptionId: 'apt-ver-07-b',
    difficulty: 3,
    order: 14,
    isActive: true,
  },
];

// ---------------------------------------------------------------------------
// ANALYTICAL questions (6) – logical deductions, pattern analysis
// ---------------------------------------------------------------------------
const analyticalQuestions: AptitudeQuestion[] = [
  {
    id: 'apt-ana-01',
    subtype: 'analytical',
    content: {
      es: 'Si todos los clientes de alto riesgo pagan primas mas altas, y Juan paga una prima alta, ¿cual de las siguientes afirmaciones es necesariamente verdadera?',
      en: 'If all high-risk clients pay higher premiums, and Juan pays a high premium, which of the following statements is necessarily true?',
    },
    options: [
      opt('apt-ana-01-a', 'Juan es un cliente de alto riesgo / Juan is a high-risk client', 'Juan is a high-risk client', 0),
      opt('apt-ana-01-b', 'Juan podria ser de alto riesgo u otra razon justifica su prima / Juan could be high-risk or another reason justifies his premium', 'Juan could be high-risk or another reason justifies his premium', 1),
      opt('apt-ana-01-c', 'Todos los que pagan primas altas son de alto riesgo / All who pay high premiums are high-risk', 'All who pay high premiums are high-risk', 0),
      opt('apt-ana-01-d', 'Juan eligio pagar mas voluntariamente / Juan chose to pay more voluntarily', 'Juan chose to pay more voluntarily', 0),
    ],
    correctOptionId: 'apt-ana-01-b',
    difficulty: 1,
    order: 15,
    isActive: true,
  },
  {
    id: 'apt-ana-02',
    subtype: 'analytical',
    context: {
      es: 'Una aseguradora clasifica sus clientes en tres niveles: A (bajo riesgo), B (riesgo medio) y C (alto riesgo). Las reglas son:\n- Clientes menores de 25 anos siempre son nivel B o C.\n- Clientes con mas de 2 siniestros en el ultimo ano son nivel C.\n- Clientes con historial limpio y mayores de 30 son nivel A.',
      en: 'An insurer classifies its clients into three levels: A (low risk), B (medium risk) and C (high risk). The rules are:\n- Clients under 25 are always level B or C.\n- Clients with more than 2 claims in the last year are level C.\n- Clients with a clean record and over 30 are level A.',
    },
    content: {
      es: 'Maria tiene 22 anos y tuvo 3 siniestros el ultimo ano. ¿Cual es su clasificacion?',
      en: 'Maria is 22 years old and had 3 claims last year. What is her classification?',
    },
    options: [
      opt('apt-ana-02-a', 'Nivel A / Level A', 'Level A', 0),
      opt('apt-ana-02-b', 'Nivel B / Level B', 'Level B', 0),
      opt('apt-ana-02-c', 'Nivel C / Level C', 'Level C', 1),
      opt('apt-ana-02-d', 'Puede ser B o C / Could be B or C', 'Could be B or C', 0),
    ],
    correctOptionId: 'apt-ana-02-c',
    difficulty: 1,
    order: 16,
    isActive: true,
  },
  {
    id: 'apt-ana-03',
    subtype: 'analytical',
    context: {
      es: 'En una reunion, cinco gerentes (Ana, Bruno, Clara, Diego, Elena) deben sentarse en una fila. Se sabe que:\n- Ana no puede sentarse junto a Bruno.\n- Clara debe estar en uno de los dos extremos.\n- Diego se sienta inmediatamente a la derecha de Elena.',
      en: 'In a meeting, five managers (Ana, Bruno, Clara, Diego, Elena) must sit in a row. It is known that:\n- Ana cannot sit next to Bruno.\n- Clara must be at one of the two ends.\n- Diego sits immediately to the right of Elena.',
    },
    content: {
      es: 'Si Clara esta en el extremo izquierdo y Elena esta en la segunda posicion, ¿quien puede estar en la posicion 4?',
      en: 'If Clara is at the left end and Elena is in the second position, who can be in position 4?',
    },
    options: [
      opt('apt-ana-03-a', 'Solo Ana / Only Ana', 'Only Ana', 0),
      opt('apt-ana-03-b', 'Solo Bruno / Only Bruno', 'Only Bruno', 0),
      opt('apt-ana-03-c', 'Ana o Bruno / Ana or Bruno', 'Ana or Bruno', 1),
      opt('apt-ana-03-d', 'Solo Diego / Only Diego', 'Only Diego', 0),
    ],
    correctOptionId: 'apt-ana-03-c',
    difficulty: 2,
    order: 17,
    isActive: true,
  },
  {
    id: 'apt-ana-04',
    subtype: 'analytical',
    context: {
      es: 'Datos de renovacion de polizas por canal de venta:\nCanal digital: 2020: 60%, 2021: 65%, 2022: 72%, 2023: 78%\nAgentes: 2020: 80%, 2021: 78%, 2022: 75%, 2023: 73%\nCorredores: 2020: 70%, 2021: 71%, 2022: 70%, 2023: 69%',
      en: 'Policy renewal data by sales channel:\nDigital channel: 2020: 60%, 2021: 65%, 2022: 72%, 2023: 78%\nAgents: 2020: 80%, 2021: 78%, 2022: 75%, 2023: 73%\nBrokers: 2020: 70%, 2021: 71%, 2022: 70%, 2023: 69%',
    },
    content: {
      es: '¿Cual de las siguientes conclusiones se puede deducir de los datos?',
      en: 'Which of the following conclusions can be deduced from the data?',
    },
    options: [
      opt('apt-ana-04-a', 'Los agentes siempre tendran mejor renovacion que el canal digital / Agents will always have better renewal than digital', 'Agents will always have better renewal than digital', 0),
      opt('apt-ana-04-b', 'Si la tendencia continua, el canal digital superara a los agentes en renovacion / If the trend continues, digital will surpass agents in renewal', 'If the trend continues, digital will surpass agents in renewal', 1),
      opt('apt-ana-04-c', 'Los corredores muestran una tendencia de crecimiento sostenido / Brokers show sustained growth', 'Brokers show sustained growth', 0),
      opt('apt-ana-04-d', 'Todos los canales convergen hacia el 75% / All channels converge toward 75%', 'All channels converge toward 75%', 0),
    ],
    correctOptionId: 'apt-ana-04-b',
    difficulty: 2,
    order: 18,
    isActive: true,
  },
  {
    id: 'apt-ana-05',
    subtype: 'analytical',
    content: {
      es: 'Una compania de seguros observa que: (1) El 90% de las reclamaciones fraudulentas se presentan dentro de los primeros 6 meses de la poliza. (2) El 30% de todas las reclamaciones se presentan en los primeros 6 meses. (3) El 5% de todas las reclamaciones son fraudulentas. Si una reclamacion se presenta en el mes 3, ¿cual es la probabilidad aproximada de que sea fraudulenta?',
      en: 'An insurance company observes that: (1) 90% of fraudulent claims are filed within the first 6 months of the policy. (2) 30% of all claims are filed in the first 6 months. (3) 5% of all claims are fraudulent. If a claim is filed in month 3, what is the approximate probability it is fraudulent?',
    },
    options: [
      opt('apt-ana-05-a', '5%', '5%', 0),
      opt('apt-ana-05-b', '10%', '10%', 0),
      opt('apt-ana-05-c', '15%', '15%', 1),
      opt('apt-ana-05-d', '20%', '20%', 0),
    ],
    correctOptionId: 'apt-ana-05-c',
    difficulty: 3,
    order: 19,
    isActive: true,
  },
  {
    id: 'apt-ana-06',
    subtype: 'analytical',
    context: {
      es: 'Un sistema de deteccion de fraude utiliza tres indicadores independientes (X, Y, Z). La politica establece:\n- Si X e Y son positivos, se investiga.\n- Si solo Z es positivo, se marca para revision.\n- Si X y Z son positivos pero Y es negativo, se investiga solo si el monto supera $10,000.\n- Si ninguno es positivo, se aprueba automaticamente.',
      en: 'A fraud detection system uses three independent indicators (X, Y, Z). The policy states:\n- If X and Y are positive, investigate.\n- If only Z is positive, flag for review.\n- If X and Z are positive but Y is negative, investigate only if the amount exceeds $10,000.\n- If none are positive, auto-approve.',
    },
    content: {
      es: 'Un caso muestra X positivo, Y negativo, Z positivo y un monto de $8,500. ¿Cual es la accion correcta?',
      en: 'A case shows X positive, Y negative, Z positive, and an amount of $8,500. What is the correct action?',
    },
    options: [
      opt('apt-ana-06-a', 'Investigar / Investigate', 'Investigate', 0),
      opt('apt-ana-06-b', 'Marcar para revision / Flag for review', 'Flag for review', 1),
      opt('apt-ana-06-c', 'Aprobar automaticamente / Auto-approve', 'Auto-approve', 0),
      opt('apt-ana-06-d', 'Rechazar / Reject', 'Reject', 0),
    ],
    correctOptionId: 'apt-ana-06-b',
    difficulty: 3,
    order: 20,
    isActive: true,
  },
];

// ---------------------------------------------------------------------------
// Full test configuration
// ---------------------------------------------------------------------------
export const aptitudeTestConfig: AptitudeTestConfig = {
  id: 'apt-test-001',
  name: {
    es: 'Prueba de Aptitud para el Sector Asegurador',
    en: 'Aptitude Test for the Insurance Sector',
  },
  description: {
    es: 'Evaluacion de habilidades numericas, verbales y analiticas aplicadas al contexto de seguros y negocios. Consta de 20 preguntas con un tiempo limite de 15 minutos.',
    en: 'Assessment of numerical, verbal, and analytical skills applied to the insurance and business context. Consists of 20 questions with a 15-minute time limit.',
  },
  targetRole: {
    es: 'Profesional del sector asegurador',
    en: 'Insurance sector professional',
  },
  questions: [...numericalQuestions, ...verbalQuestions, ...analyticalQuestions],
  totalTimeLimitMinutes: 15,
  isActive: true,
};
