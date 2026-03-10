import { initializeApp } from 'firebase-admin/app';
import { logger } from 'firebase-functions/v2';
import { onDocumentUpdated } from 'firebase-functions/v2/firestore';
import { analyzeEvaluation } from './analysis/analyzeEvaluation';

// Initialize Firebase Admin
initializeApp();

// Re-export callable functions
export { generateRecommendations } from './recommendations/generate';

// Trigger analysis when evaluation is completed
export const onEvaluationComplete = onDocumentUpdated(
  'evaluations/{evaluationId}',
  async (event) => {
    const before = event.data?.before.data();
    const after = event.data?.after.data();

    if (!before || !after) return;

    // Check if status changed to 'completed'
    if (before.status !== 'completed' && after.status === 'completed') {
      const evaluationId = event.params.evaluationId;

      try {
        await analyzeEvaluation(evaluationId);
        logger.info(`Analysis completed for evaluation ${evaluationId}`);
      } catch (error) {
        logger.error(`Error analyzing evaluation ${evaluationId}:`, error);
        throw error;
      }
    }
  }
);
