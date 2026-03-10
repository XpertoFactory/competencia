export { profiles, competencyCategories } from './profiles';
export { archetypeProfiles } from './archetypes';
export { resources } from './resources';
export { questions } from './questions';
export { cognitiveTestConfig } from './cognitive-test';
export { personalityTestConfig } from './personality-test';
export { aptitudeTestConfig } from './aptitude-test';
export { discTestConfig } from './disc-test';
export { technicalTestConfig, technicalTestConfigRG } from './technical-test';

// Re-export for convenient seeding
import { profiles, competencyCategories } from './profiles';
import { archetypeProfiles } from './archetypes';
import { resources } from './resources';
import { questions } from './questions';
import { cognitiveTestConfig } from './cognitive-test';
import { personalityTestConfig } from './personality-test';
import { aptitudeTestConfig } from './aptitude-test';
import { discTestConfig } from './disc-test';
import { technicalTestConfig, technicalTestConfigRG } from './technical-test';

export const seedData = {
  profiles,
  competencyCategories,
  archetypeProfiles,
  resources,
  questions,
  cognitiveTestConfig,
  personalityTestConfig,
  aptitudeTestConfig,
  discTestConfig,
  technicalTestConfig,
  technicalTestConfigRG,
};
