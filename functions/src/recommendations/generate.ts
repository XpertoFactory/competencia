import { getFirestore } from 'firebase-admin/firestore';
import { onCall, HttpsError } from 'firebase-functions/v2/https';
import { logger } from 'firebase-functions/v2';

const getDb = () => getFirestore();

interface LocalizedString {
  es: string;
  en: string;
}

interface Resource {
  id: string;
  type: 'course' | 'activity' | 'resource' | 'strategy';
  name: LocalizedString;
  description: LocalizedString;
  targetCategories: string[];
  targetProfiles: string[];
  targetCompetencies: string[];
  url?: string;
  duration?: string;
  priority: number;
}

interface TrainingPathStep {
  order: number;
  resource: Resource;
  rationale: LocalizedString;
  focusAreas: LocalizedString[];
}

interface ProfileAssignment {
  profileId: string;
  profileName: LocalizedString;
  matchPercentage: number;
  explanation: LocalizedString;
}

interface AssignedProfiles {
  professional: ProfileAssignment;
  softSkills: ProfileAssignment;
  readiness: ProfileAssignment;
}

interface CategoryScores {
  professional: number;
  softSkills: number;
  readiness: number;
}

/**
 * Generate training path recommendations based on analysis results.
 * This is called as an HTTP callable function.
 */
export const generateRecommendations = onCall(
  async (request) => {
    const { evaluationId, indices, assignedProfiles } = request.data;

    if (!evaluationId) {
      throw new HttpsError(
        'invalid-argument',
        'evaluationId is required'
      );
    }

    try {
      // Get all active resources
      const resourcesSnapshot = await getDb()
        .collection('resources')
        .where('isActive', '==', true)
        .orderBy('priority')
        .get();

      const resources = resourcesSnapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as Resource)
      );

      // Generate training path
      const trainingPath = generateTrainingPath(
        indices,
        assignedProfiles,
        resources
      );

      // Get suggested activities
      const activities = filterResourcesByType(
        resources,
        'activity',
        assignedProfiles
      );

      // Get additional resources
      const additionalResources = filterResourcesByType(
        resources,
        'resource',
        assignedProfiles
      );

      // Update the result document with recommendations
      await getDb()
        .collection('results')
        .doc(`result-${evaluationId}`)
        .update({
          'recommendations.trainingPath': trainingPath,
          'recommendations.activities': activities,
          'recommendations.resources': additionalResources,
        });

      return {
        success: true,
        trainingPath,
        activities,
        resources: additionalResources,
      };
    } catch (error) {
      logger.error('Error generating recommendations:', error);
      throw new HttpsError('internal', 'Failed to generate recommendations');
    }
  }
);

/**
 * Generate personalized training path based on indices and profiles
 */
function generateTrainingPath(
  indices: CategoryScores,
  assignedProfiles: AssignedProfiles,
  resources: Resource[]
): TrainingPathStep[] {
  const path: TrainingPathStep[] = [];
  const usedResourceIds = new Set<string>();

  // Prioritize categories with lower scores
  const categoryPriority = [
    { key: 'professional', score: indices.professional, profileId: assignedProfiles.professional.profileId },
    { key: 'soft-skills', score: indices.softSkills, profileId: assignedProfiles.softSkills.profileId },
    { key: 'readiness', score: indices.readiness, profileId: assignedProfiles.readiness.profileId },
  ].sort((a, b) => a.score - b.score);

  let order = 1;

  for (const category of categoryPriority) {
    // Find courses for this category
    const categoryResources = resources.filter(
      (r) =>
        r.type === 'course' &&
        !usedResourceIds.has(r.id) &&
        (r.targetCategories.includes(category.key) ||
          r.targetProfiles.includes(category.profileId))
    );

    // Add top 1-2 courses per category
    const coursesToAdd = categoryResources.slice(0, category.score < 60 ? 2 : 1);

    for (const resource of coursesToAdd) {
      path.push({
        order,
        resource,
        rationale: generateRationale(category.key, category.score, resource),
        focusAreas: [],
      });
      usedResourceIds.add(resource.id);
      order++;
    }
  }

  return path.slice(0, 5); // Limit to 5 courses
}

/**
 * Generate rationale for including a resource in the training path
 */
function generateRationale(
  category: string,
  score: number,
  resource: Resource
): LocalizedString {
  const categoryNames: Record<string, LocalizedString> = {
    professional: { es: 'habilidades profesionales', en: 'professional skills' },
    'soft-skills': { es: 'habilidades blandas', en: 'soft skills' },
    readiness: { es: 'disposición al cambio', en: 'readiness for change' },
  };

  const categoryName = categoryNames[category] || { es: category, en: category };

  if (score < 50) {
    return {
      es: `Este curso es fundamental para desarrollar tus ${categoryName.es}, un área prioritaria de crecimiento.`,
      en: `This course is essential for developing your ${categoryName.en}, a priority growth area.`,
    };
  } else if (score < 70) {
    return {
      es: `Este curso te ayudará a fortalecer tus ${categoryName.es} y alcanzar un nivel avanzado.`,
      en: `This course will help strengthen your ${categoryName.en} and reach an advanced level.`,
    };
  } else {
    return {
      es: `Este curso te permitirá perfeccionar tus ${categoryName.es} y explorar temas avanzados.`,
      en: `This course will allow you to perfect your ${categoryName.en} and explore advanced topics.`,
    };
  }
}

/**
 * Filter resources by type and match with assigned profiles
 */
function filterResourcesByType(
  resources: Resource[],
  type: 'activity' | 'resource',
  assignedProfiles: AssignedProfiles
): Resource[] {
  const profileIds = [
    assignedProfiles.professional.profileId,
    assignedProfiles.softSkills.profileId,
    assignedProfiles.readiness.profileId,
  ];

  return resources
    .filter(
      (r) =>
        r.type === type &&
        (r.targetProfiles.some((p) => profileIds.includes(p)) ||
          r.targetCategories.length > 0)
    )
    .slice(0, 6); // Limit to 6 items
}

/**
 * Calculate relevance score for a resource based on user profile
 */
export function calculateResourceRelevance(
  resource: Resource,
  indices: CategoryScores,
  profileIds: string[]
): number {
  let relevance = 0;

  // Profile match
  if (resource.targetProfiles.some((p) => profileIds.includes(p))) {
    relevance += 30;
  }

  // Category match weighted by need (lower score = higher relevance)
  for (const category of resource.targetCategories) {
    let categoryScore = 50; // default
    if (category === 'professional') categoryScore = indices.professional;
    if (category === 'soft-skills') categoryScore = indices.softSkills;
    if (category === 'readiness') categoryScore = indices.readiness;

    // Lower scores get higher relevance boost
    relevance += Math.max(0, 100 - categoryScore) * 0.5;
  }

  // Priority boost (lower priority number = more important)
  relevance += Math.max(0, 20 - resource.priority);

  return Math.min(100, relevance);
}
