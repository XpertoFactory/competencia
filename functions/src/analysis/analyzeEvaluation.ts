import { getFirestore, FieldValue, Timestamp } from 'firebase-admin/firestore';
import { logger } from 'firebase-functions/v2';
import { calculateIndices } from './calculateIndices';
import { assignProfiles } from './assignProfiles';
import { createAIProvider, EvaluationContext, AIProviderType } from '../ai';

const getDb = () => getFirestore();

interface Response {
  questionId: string;
  questionType: string;
  value: string | number | string[];
  score?: number;
  answeredAt: Timestamp;
}

interface Evaluation {
  id: string;
  candidateId: string;
  candidateName: string;
  profileId: string;
  responses: Response[];
  locale: 'es' | 'en';
}

interface Question {
  id: string;
  categoryId: string;
  competencyId: string;
  type: string;
  content: { es: string; en: string };
  options?: { id: string; text: { es: string; en: string }; value: number }[];
  maxScore: number;
  aiEvaluated: boolean;
  rubric?: { es: string; en: string };
}

interface Settings {
  aiMode: 'claude' | 'openai' | 'gemini' | 'hybrid' | 'rule-based';
  aiProvider: AIProviderType;
}

export async function analyzeEvaluation(evaluationId: string): Promise<void> {
  logger.info(`Starting analysis for evaluation: ${evaluationId}`);

  // Get evaluation data
  const evalDoc = await getDb().collection('evaluations').doc(evaluationId).get();
  if (!evalDoc.exists) {
    throw new Error(`Evaluation ${evaluationId} not found`);
  }
  const evaluation = { id: evalDoc.id, ...evalDoc.data() } as Evaluation;

  // Get settings
  const settingsDoc = await getDb().collection('settings').doc('app').get();
  const settings = (settingsDoc.data() || {
    aiMode: 'gemini',
    aiProvider: 'gemini',
  }) as Settings;

  // Get profile info
  const profileDoc = await getDb().collection('profiles').doc(evaluation.profileId).get();
  const profile = profileDoc.data();

  // Get questions for scoring
  const questionsSnapshot = await getDb()
    .collection('questions')
    .where('profileId', '==', evaluation.profileId)
    .get();
  const questions: Record<string, Question> = {};
  questionsSnapshot.docs.forEach((doc) => {
    questions[doc.id] = { id: doc.id, ...doc.data() } as Question;
  });

  // Score responses and prepare context
  const scoredResponses: Response[] = [];
  const useAI = settings.aiMode !== 'rule-based';
  let aiProvider = null;

  if (useAI) {
    const providerType =
      settings.aiMode === 'hybrid' ? settings.aiProvider : (settings.aiMode as AIProviderType);
    // Read API key from settings (stored via admin UI) or fall back to env vars
    const aiApiKeys = (settings as unknown as Record<string, unknown>).aiApiKeys as Record<string, string> | undefined;
    const apiKey = aiApiKeys?.[providerType] || undefined;
    aiProvider = createAIProvider(providerType, apiKey);
  }

  for (const response of evaluation.responses) {
    const question = questions[response.questionId];
    if (!question) continue;

    let score = response.score;

    // Calculate score based on question type
    if (score === undefined) {
      if (question.type === 'multiple-choice' && question.options) {
        const selectedOption = question.options.find((o) => o.id === response.value);
        score = selectedOption ? selectedOption.value : 0;
      } else if (question.type === 'scale') {
        // Scale questions: 1-5 mapped to 0-100
        const scaleValue = response.value as number;
        score = ((scaleValue - 1) / 4) * 100;
      } else if (question.type === 'ranking' && question.options) {
        // Ranking: simplified scoring based on order
        score = 75; // Default for rankings
      } else if (
        (question.type === 'open-text' || question.type === 'scenario') &&
        question.aiEvaluated &&
        aiProvider
      ) {
        // AI-evaluated questions
        try {
          const result = await aiProvider.analyzeOpenText(
            question.content.es,
            response.value as string,
            question.rubric?.es
          );
          score = result.score;
        } catch (error) {
          logger.error('AI evaluation failed:', error);
          score = 50; // Default score on error
        }
      } else {
        // Default rule-based scoring for open text
        const textLength = (response.value as string).length;
        score = Math.min(100, textLength / 10); // Simple length-based score
      }
    }

    scoredResponses.push({ ...response, score });
  }

  // Calculate indices
  const indices = calculateIndices(scoredResponses, questions);

  // Assign archetype profiles
  const archetypesSnapshot = await getDb().collection('archetypeProfiles').get();
  const archetypes = archetypesSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  const assignedProfiles = assignProfiles(indices, archetypes as any);

  // Generate AI analysis if enabled
  let aiAnalysis = null;
  if (useAI && aiProvider) {
    try {
      const context: EvaluationContext = {
        candidateName: evaluation.candidateName,
        profileName: profile?.name || { es: 'Perfil', en: 'Profile' },
        responses: scoredResponses.map((r) => ({
          questionId: r.questionId,
          questionContent: questions[r.questionId]?.content || { es: '', en: '' },
          questionType: r.questionType,
          categoryId: questions[r.questionId]?.categoryId || '',
          competencyId: questions[r.questionId]?.competencyId || '',
          value: r.value,
          maxScore: questions[r.questionId]?.maxScore || 100,
        })),
        categoryScores: indices,
      };

      aiAnalysis = await aiProvider.generateAnalysis(context);
    } catch (error) {
      logger.error('AI analysis generation failed:', error);
    }
  }

  // Build result document
  const result = {
    id: `result-${evaluationId}`,
    evaluationId,
    candidateId: evaluation.candidateId,
    candidateName: evaluation.candidateName,
    profileId: evaluation.profileId,
    indices,
    strengths: aiAnalysis?.strengths || generateRuleBasedStrengths(indices),
    growthOpportunities:
      aiAnalysis?.growthOpportunities || generateRuleBasedOpportunities(indices),
    assignedProfiles,
    recommendations: {
      personalizedMessage:
        aiAnalysis?.personalizedMessage ||
        generateRuleBasedMessage(evaluation.candidateName, indices),
      trainingPath: [],
      activities: [],
      resources: [],
      changeManagementStrategies:
        aiAnalysis?.changeManagementStrategies || generateRuleBasedStrategies(indices),
      strengthSupports: aiAnalysis?.strengthSupports || [],
      growthSupports: aiAnalysis?.growthSupports || [],
    },
    analyzedAt: FieldValue.serverTimestamp(),
    aiProvider: useAI ? settings.aiProvider : 'rule-based',
  };

  // Save result
  await getDb().collection('results').doc(result.id).set(result);

  // Update evaluation status
  await getDb().collection('evaluations').doc(evaluationId).update({
    status: 'analyzed',
  });

  logger.info(`Analysis completed for evaluation: ${evaluationId}`);
}

// Rule-based fallback functions
function generateRuleBasedStrengths(indices: { professional: number; softSkills: number; readiness: number }) {
  const strengths = [];

  if (indices.professional >= 70) {
    strengths.push({
      es: 'Sólido conocimiento técnico del sector',
      en: 'Strong technical knowledge of the sector',
    });
  }
  if (indices.softSkills >= 70) {
    strengths.push({
      es: 'Excelentes habilidades de comunicación e interpersonales',
      en: 'Excellent communication and interpersonal skills',
    });
  }
  if (indices.readiness >= 70) {
    strengths.push({
      es: 'Alta disposición al aprendizaje y adaptación',
      en: 'High willingness to learn and adapt',
    });
  }

  if (strengths.length === 0) {
    strengths.push({
      es: 'Potencial de desarrollo en múltiples áreas',
      en: 'Development potential in multiple areas',
    });
  }

  return strengths;
}

function generateRuleBasedOpportunities(indices: { professional: number; softSkills: number; readiness: number }) {
  const opportunities = [];

  if (indices.professional < 60) {
    opportunities.push({
      es: 'Profundizar en conocimientos técnicos específicos del sector',
      en: 'Deepen specific technical knowledge of the sector',
    });
  }
  if (indices.softSkills < 60) {
    opportunities.push({
      es: 'Desarrollar habilidades de comunicación y trabajo en equipo',
      en: 'Develop communication and teamwork skills',
    });
  }
  if (indices.readiness < 60) {
    opportunities.push({
      es: 'Aumentar la apertura al cambio y nuevas tecnologías',
      en: 'Increase openness to change and new technologies',
    });
  }

  return opportunities;
}

function generateRuleBasedMessage(
  candidateName: string,
  indices: { professional: number; softSkills: number; readiness: number }
) {
  const avg = (indices.professional + indices.softSkills + indices.readiness) / 3;

  if (avg >= 80) {
    return {
      es: `${candidateName}, tu evaluación demuestra un perfil profesional excepcional. Tus fortalezas te posicionan como un candidato destacado para roles de mayor responsabilidad.`,
      en: `${candidateName}, your evaluation demonstrates an exceptional professional profile. Your strengths position you as an outstanding candidate for higher responsibility roles.`,
    };
  } else if (avg >= 60) {
    return {
      es: `${candidateName}, tu evaluación muestra un perfil profesional sólido con áreas de desarrollo identificadas. Con enfoque en las recomendaciones, podrás alcanzar tu máximo potencial.`,
      en: `${candidateName}, your evaluation shows a solid professional profile with identified development areas. By focusing on the recommendations, you can reach your full potential.`,
    };
  } else {
    return {
      es: `${candidateName}, tu evaluación identifica oportunidades significativas de crecimiento. Las recomendaciones personalizadas te guiarán en tu desarrollo profesional.`,
      en: `${candidateName}, your evaluation identifies significant growth opportunities. The personalized recommendations will guide you in your professional development.`,
    };
  }
}

function generateRuleBasedStrategies(indices: { professional: number; softSkills: number; readiness: number }) {
  const strategies = [];

  if (indices.readiness < 70) {
    strategies.push({
      es: 'Participa en proyectos piloto de nuevas herramientas para ganar confianza',
      en: 'Participate in pilot projects for new tools to build confidence',
    });
    strategies.push({
      es: 'Busca un mentor que te apoye en el proceso de adaptación',
      en: 'Find a mentor to support you in the adaptation process',
    });
  }

  strategies.push({
    es: 'Establece metas de aprendizaje semanales medibles',
    en: 'Set measurable weekly learning goals',
  });

  return strategies;
}
