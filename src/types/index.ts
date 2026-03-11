import { Timestamp } from 'firebase/firestore';

// Localized string type for multilingual content
export interface LocalizedString {
  es: string;
  en: string;
  fr?: string;
}

export type ProfileSector =
  | 'insurance'
  | 'education'
  | 'retail-services'
  | 'healthcare'
  | 'transportation'
  | 'finance-accounting'
  | 'compliance-legal'
  | 'human-resources'
  | 'commercial-business'
  | 'collections-credit'
  | 'customer-service'
  | 'general-management'
  | 'technology-it'
  | 'banking'
  | 'hospitality-tourism';

export type ProfileLevel =
  | 'executive'
  | 'managerial'
  | 'professional-specialist'
  | 'administrative'
  | 'operative';

// Professional profiles (e.g., "Técnico en Seguros de Salud y Vida")
export interface Profile {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  competencyCategories: string[]; // References to category IDs
  sectors: ProfileSector[];
  level: ProfileLevel;
  isActive: boolean;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

// Competency categories (Professional, Soft Skills, Readiness)
export interface CompetencyCategory {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  competencies: Competency[];
  order: number;
}

// Individual competency within a category
export interface Competency {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  weight: number; // Relative weight for scoring (0-1)
}

// Question types supported
export type QuestionType =
  | 'multiple-choice'
  | 'scale'
  | 'open-text'
  | 'scenario'
  | 'ranking';

// Option for multiple choice questions
export interface QuestionOption {
  id: string;
  text: LocalizedString;
  value: number; // Score value for this option
}

// Evaluation question
export interface Question {
  id: string;
  profileId: string;
  categoryId: string;
  competencyId: string;
  type: QuestionType;
  content: LocalizedString;
  options?: QuestionOption[]; // For multiple-choice, ranking
  scaleMin?: number; // For scale questions
  scaleMax?: number; // For scale questions
  scaleLabels?: { min: LocalizedString; max: LocalizedString }; // Labels for scale ends
  rubric?: LocalizedString; // AI evaluation rubric for open-text/scenario
  maxScore: number;
  aiEvaluated: boolean; // Whether this requires AI to score
  order: number;
  isActive: boolean;
}

// Candidate response to a question
export interface Response {
  questionId: string;
  questionType: QuestionType;
  value: string | number | string[]; // Text, scale value, or option IDs
  score?: number; // Calculated or AI-assigned score
  aiEvaluation?: string; // AI's evaluation notes (for open-text/scenario)
  answeredAt: Timestamp;
}

// Evaluation status
export type EvaluationStatus = 'in-progress' | 'completed' | 'analyzed';

// Main evaluation record
export interface Evaluation {
  id: string;
  candidateId: string;
  candidateName: string;
  candidateEmail?: string;
  profileId: string;
  status: EvaluationStatus;
  responses: Response[];
  currentQuestionIndex: number;
  locale: 'es' | 'en';
  startedAt: Timestamp;
  completedAt?: Timestamp;
  lastActivityAt: Timestamp;
}

// Index ranges for archetype profiles
export interface IndexRange {
  min: number;
  max: number;
}

// Archetype profile for categorizing candidates
export interface ArchetypeProfile {
  id: string;
  category: 'professional' | 'soft-skills' | 'readiness';
  name: LocalizedString;
  description: LocalizedString;
  traits: LocalizedString[];
  indexRange: IndexRange;
  recommendedResources: string[]; // Resource IDs
  order: number;
}

// Profile assignment in results
export interface ProfileAssignment {
  profileId: string;
  profileName: LocalizedString;
  matchPercentage: number;
  explanation: LocalizedString;
}

// Combined profile recommendations (when candidate shows traits of multiple profiles)
export interface CombinedProfileRecommendation {
  profiles: ProfileAssignment[];
  synthesisExplanation: LocalizedString;
}

// Resource types
export type ResourceType = 'course' | 'activity' | 'resource' | 'strategy';

// Training resource
export interface Resource {
  id: string;
  type: ResourceType;
  name: LocalizedString;
  description: LocalizedString;
  targetCategories: string[]; // Category IDs this resource helps
  targetProfiles: string[]; // Archetype profile IDs
  targetCompetencies: string[]; // Specific competency IDs
  url?: string;
  duration?: string;
  priority: number; // For ordering recommendations
  isActive: boolean;
}

// Training path step
export interface TrainingPathStep {
  order: number;
  resource: Resource;
  rationale: LocalizedString;
  focusAreas: LocalizedString[];
}

// Recommendations structure
export interface Recommendations {
  personalizedMessage: LocalizedString;
  trainingPath: TrainingPathStep[];
  activities: Resource[];
  resources: Resource[];
  changeManagementStrategies: LocalizedString[];
  strengthSupports: LocalizedString[];
  growthSupports: LocalizedString[];
  combinedProfileRecommendations?: CombinedProfileRecommendation;
}

// Objective indices (0-100)
export interface ObjectiveIndices {
  professional: number;
  softSkills: number;
  readiness: number;
}

// Complete analysis results
export interface AnalysisResult {
  id: string;
  evaluationId: string;
  candidateId: string;
  candidateName: string;
  profileId: string;
  indices: ObjectiveIndices;
  strengths: LocalizedString[];
  growthOpportunities: LocalizedString[];
  assignedProfiles: {
    professional: ProfileAssignment;
    softSkills: ProfileAssignment;
    readiness: ProfileAssignment;
  };
  recommendations: Recommendations;
  analyzedAt: Timestamp;
  aiProvider: string;
  modelUsed?: string;
}

// Shareable evaluation link
export interface EvaluationLink {
  id: string;
  profileId: string;
  createdBy: string;
  expiresAt?: Timestamp;
  maxUses: number;
  usesCount: number;
  isActive: boolean;
  createdAt: Timestamp;
}

// AI provider options
export type AIProvider = 'claude' | 'openai' | 'gemini';

// AI mode options
export type AIMode = 'claude' | 'openai' | 'gemini' | 'hybrid' | 'rule-based';

// Application settings
export interface AIApiKeys {
  gemini?: string;
  claude?: string;
  openai?: string;
}

export interface AppSettings {
  aiMode: AIMode;
  aiProvider: AIProvider; // For hybrid mode, which provider to use for AI tasks
  aiApiKeys?: AIApiKeys;
  defaultLocale: 'es' | 'en';
  evaluationTimeoutMinutes: number;
  enableAnonymousEvaluations: boolean;
}

// Candidate information for registration
export interface CandidateInfo {
  name: string;
  email?: string;
  department?: string;
  position?: string;
  yearsExperience?: number;
}

// Admin user
export interface AdminUser {
  uid: string;
  email: string;
  displayName?: string;
  role: 'admin' | 'viewer';
  createdAt: Timestamp;
}

// Utility type for form state
export type FormState<T> = {
  data: T;
  errors: Partial<Record<keyof T, string>>;
  isSubmitting: boolean;
  isValid: boolean;
};

// API response wrapper
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Pagination
export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

// Chart data for visualization
export interface ChartDataPoint {
  name: string;
  value: number;
  fill?: string;
}

// Evaluation progress
export interface EvaluationProgress {
  totalQuestions: number;
  answeredQuestions: number;
  currentCategory: string;
  percentComplete: number;
}

// ==========================================
// Phase 4: New Evaluation Types
// ==========================================

// All evaluation types available in the system
export type EvaluationType =
  | 'competency'    // Original competency evaluation
  | 'cognitive'     // Wonderlic/Raven's style
  | 'personality'   // Big Five
  | 'aptitude'      // Numerical/verbal/analytical
  | 'disc';         // DISC behavioral assessment

// ---------- Cognitive Test (Wonderlic/Raven's) ----------

export type CognitiveSubtype = 'logical' | 'verbal' | 'numerical' | 'pattern';

export interface CognitiveQuestion {
  id: string;
  subtype: CognitiveSubtype;
  content: LocalizedString;
  options: QuestionOption[];
  correctOptionId: string;
  difficulty: 1 | 2 | 3; // easy, medium, hard
  timeLimitSeconds: number; // per-question time limit
  imageUrl?: string; // for pattern/matrix questions
  order: number;
  isActive: boolean;
}

export interface CognitiveTestConfig {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  totalTimeLimitMinutes: number;
  questions: CognitiveQuestion[];
  isActive: boolean;
}

export interface CognitiveResult {
  totalCorrect: number;
  totalQuestions: number;
  percentile: number;
  subtypeScores: Record<CognitiveSubtype, { correct: number; total: number }>;
  iqEstimate: number; // rough estimate based on score
  timeUsedSeconds: number;
  classification: LocalizedString; // e.g., "Above Average"
}

// ---------- Personality Test (Big Five / OCEAN) ----------

export type BigFiveTrait =
  | 'openness'
  | 'conscientiousness'
  | 'extraversion'
  | 'agreeableness'
  | 'neuroticism';

export interface PersonalityStatement {
  id: string;
  content: LocalizedString;
  trait: BigFiveTrait;
  isReversed: boolean; // reversed scoring
  order: number;
  isActive: boolean;
}

export interface PersonalityTestConfig {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  statements: PersonalityStatement[];
  scaleMin: number; // typically 1
  scaleMax: number; // typically 5
  scaleLabels: {
    min: LocalizedString;
    max: LocalizedString;
  };
  isActive: boolean;
}

export interface PersonalityScores {
  openness: number;        // 0-100
  conscientiousness: number;
  extraversion: number;
  agreeableness: number;
  neuroticism: number;
}

export interface PersonalityResult {
  scores: PersonalityScores;
  dominantTraits: BigFiveTrait[];
  traitDescriptions: Record<BigFiveTrait, LocalizedString>;
  workStyleSummary: LocalizedString;
}

// ---------- Aptitude Test ----------

export type AptitudeSubtype = 'numerical' | 'verbal' | 'analytical' | 'technical';

export interface AptitudeQuestion {
  id: string;
  subtype: AptitudeSubtype;
  content: LocalizedString;
  options: QuestionOption[];
  correctOptionId: string;
  difficulty: 1 | 2 | 3;
  context?: LocalizedString; // passage or data for the question
  timeLimitSeconds?: number;
  order: number;
  isActive: boolean;
}

export interface AptitudeTestConfig {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  targetRole?: LocalizedString; // e.g., "Sales", "Technical"
  questions: AptitudeQuestion[];
  totalTimeLimitMinutes: number;
  isActive: boolean;
}

export interface AptitudeScores {
  numerical: number;   // 0-100
  verbal: number;
  analytical: number;
  technical?: number;
}

export interface AptitudeResult {
  scores: AptitudeScores;
  overallScore: number;
  strengths: AptitudeSubtype[];
  weaknesses: AptitudeSubtype[];
  suitableRoles: LocalizedString[];
}

// ---------- DISC Behavioral Assessment ----------

export type DISCDimension = 'dominance' | 'influence' | 'steadiness' | 'conscientiousness';

export interface DISCForcedChoice {
  id: string;
  optionA: {
    text: LocalizedString;
    dimension: DISCDimension;
  };
  optionB: {
    text: LocalizedString;
    dimension: DISCDimension;
  };
  order: number;
  isActive: boolean;
}

export interface DISCTestConfig {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  forcedChoices: DISCForcedChoice[];
  isActive: boolean;
}

export interface DISCProfile {
  dominance: number;       // 0-100
  influence: number;
  steadiness: number;
  conscientiousness: number;
}

export interface DISCResult {
  profile: DISCProfile;
  primaryStyle: DISCDimension;
  secondaryStyle: DISCDimension;
  styleDescription: LocalizedString;
  leadershipStyle: LocalizedString;
  communicationStyle: LocalizedString;
  strengths: LocalizedString[];
  challenges: LocalizedString[];
}

// ---------- Test Session (unified for all new test types) ----------

export interface TestSession {
  id: string;
  candidateId: string;
  candidateName: string;
  candidateEmail?: string;
  testType: EvaluationType;
  testConfigId: string;
  profileId?: string; // optional link to competency profile
  status: EvaluationStatus;
  responses: TestResponse[];
  startedAt: Timestamp;
  completedAt?: Timestamp;
  timeUsedSeconds: number;
  locale: 'es' | 'en';
}

export interface TestResponse {
  questionId: string;
  selectedOptionId?: string;  // for MC / forced-choice
  scaleValue?: number;        // for personality scale
  answeredAt: Timestamp;
  timeSpentSeconds?: number;
}

// ---------- Combined Assessment Result ----------

export interface CombinedAssessmentResult {
  id: string;
  candidateId: string;
  candidateName: string;
  candidateEmail?: string;
  competencyResult?: AnalysisResult;
  cognitiveResult?: CognitiveResult;
  personalityResult?: PersonalityResult;
  aptitudeResult?: AptitudeResult;
  discResult?: DISCResult;
  overallSummary: LocalizedString;
  jobFitScore?: number; // 0-100 if job profile provided
  jobFitDetails?: JobFitResult; // detailed breakdown if job profile provided
  createdAt: Timestamp;
}

// ==========================================
// Phase 5: Technical Knowledge & Job-Fit
// ==========================================

// ---------- Technical / Case-Study Assessments ----------

export interface CaseStudy {
  id: string;
  area: LocalizedString; // e.g., "Claims Processing", "Underwriting"
  title: LocalizedString;
  scenario: LocalizedString; // the case description
  questions: CaseStudyQuestion[];
  difficulty: 1 | 2 | 3;
  timeLimitMinutes: number;
  targetProfileIds: string[]; // which profiles this case applies to
  isActive: boolean;
  order: number;
}

export interface CaseStudyQuestion {
  id: string;
  content: LocalizedString;
  type: 'multiple-choice' | 'open-text';
  options?: QuestionOption[];
  correctOptionId?: string; // for MC
  rubric?: LocalizedString; // for AI evaluation of open-text
  maxScore: number;
  aiEvaluated: boolean;
}

export interface TechnicalTestConfig {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  targetProfileId: string;
  caseStudies: CaseStudy[];
  totalTimeLimitMinutes: number;
  passingScore: number; // minimum % to pass
  isActive: boolean;
}

export interface TechnicalResult {
  totalScore: number; // 0-100
  passed: boolean;
  caseScores: {
    caseStudyId: string;
    area: LocalizedString;
    score: number; // 0-100
    maxScore: number;
    questionScores: {
      questionId: string;
      score: number;
      maxScore: number;
      aiFeedback?: LocalizedString;
    }[];
  }[];
  areaStrengths: LocalizedString[];
  areaWeaknesses: LocalizedString[];
}

// ---------- Job Profile & Job-Fit Scoring ----------

export interface JobProfile {
  id: string;
  title: LocalizedString;
  department: LocalizedString;
  description: LocalizedString;
  profileId: string; // linked insurance profile
  requirements: JobRequirements;
  isActive: boolean;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

export interface JobRequirements {
  // Competency minimums (0-100)
  minProfessionalScore: number;
  minSoftSkillsScore: number;
  minReadinessScore: number;
  // Cognitive minimum
  minCognitivePercentile?: number;
  // Personality ideal ranges
  personalityIdeal?: Partial<Record<BigFiveTrait, { min: number; max: number }>>;
  // DISC preferred styles
  preferredDISCStyles?: DISCDimension[];
  // Aptitude minimums
  minAptitudeScores?: Partial<Record<AptitudeSubtype, number>>;
  // Technical passing score
  minTechnicalScore?: number;
  // Weighted importance of each area (0-1, should sum to 1)
  weights: JobFitWeights;
}

export interface JobFitWeights {
  competency: number;
  cognitive: number;
  personality: number;
  aptitude: number;
  disc: number;
  technical: number;
}

export interface JobFitResult {
  jobProfileId: string;
  jobTitle: LocalizedString;
  overallFitScore: number; // 0-100
  fitLevel: 'excellent' | 'good' | 'partial' | 'poor';
  dimensionScores: {
    dimension: string;
    candidateScore: number;
    requiredScore: number;
    fitPercentage: number; // how well they meet the requirement
    weight: number;
  }[];
  gapAnalysis: GapItem[];
  recommendations: LocalizedString[];
}

export interface GapItem {
  area: LocalizedString;
  currentLevel: number;
  requiredLevel: number;
  gap: number; // negative = below requirement
  priority: 'critical' | 'important' | 'minor';
  developmentSuggestion: LocalizedString;
}

// ==========================================
// Phase 7: Post-Hire Evaluations
// ==========================================

// ---------- Employee Management ----------

export type EmployeeStatus = 'probation' | 'active' | 'inactive';

export interface Employee {
  id: string;
  name: string;
  email: string;
  department: LocalizedString;
  position: LocalizedString;
  profileId: string; // linked insurance profile
  supervisorEmail: string;
  supervisorName: string;
  hireDate: Timestamp;
  probationEndDate: Timestamp; // hireDate + 6 months
  status: EmployeeStatus;
  evaluationIds: string[]; // pre-hire evaluation IDs
  createdAt: Timestamp;
  updatedAt?: Timestamp;
}

// ---------- Probation Evaluations ----------

export type ProbationPeriod = '3-month' | '6-month';

export interface ProbationEvaluation {
  id: string;
  employeeId: string;
  employeeName: string;
  supervisorEmail: string;
  supervisorName: string;
  period: ProbationPeriod;
  dueDate: Timestamp;
  completedAt?: Timestamp;
  status: 'pending' | 'in-progress' | 'completed';
  alertSent: boolean;
  alertSentAt?: Timestamp;
  scores: ProbationScores;
  comments: string;
  recommendation: 'continue' | 'extend-probation' | 'terminate';
  createdAt: Timestamp;
}

export interface ProbationScores {
  jobKnowledge: number;      // 0-100
  workQuality: number;
  productivity: number;
  initiative: number;
  teamwork: number;
  attendance: number;
  communication: number;
  overall: number;
}

// ---------- 360/180 Annual Reviews ----------

export type ReviewType = '360' | '180';
export type RaterRole = 'self' | 'supervisor' | 'peer' | 'subordinate';

export interface ReviewCampaign {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  type: ReviewType;
  year: number;
  startDate: Timestamp;
  endDate: Timestamp;
  status: 'draft' | 'active' | 'closed';
  employeeIds: string[]; // employees being reviewed
  createdAt: Timestamp;
}

export interface ReviewAssignment {
  id: string;
  campaignId: string;
  employeeId: string; // who is being reviewed
  employeeName: string;
  raterId: string; // who is doing the review
  raterEmail: string;
  raterName: string;
  raterRole: RaterRole;
  status: 'pending' | 'completed';
  completedAt?: Timestamp;
  scores: ReviewScores;
  comments: Record<string, string>; // competency -> comment
  createdAt: Timestamp;
}

export interface ReviewScores {
  leadership: number;        // 0-100
  communication: number;
  teamwork: number;
  problemSolving: number;
  adaptability: number;
  accountability: number;
  customerFocus: number;
  innovation: number;
  overall: number;
}

export interface ReviewSummary {
  id: string;
  campaignId: string;
  employeeId: string;
  employeeName: string;
  reviewType: ReviewType;
  selfScores?: ReviewScores;
  supervisorScores?: ReviewScores;
  peerAverageScores?: ReviewScores;
  subordinateAverageScores?: ReviewScores;
  overallAverageScores: ReviewScores;
  strengths: LocalizedString[];
  developmentAreas: LocalizedString[];
  createdAt: Timestamp;
}

// ---------- Climate Surveys ----------

export interface ClimateSurvey {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  questions: ClimateSurveyQuestion[];
  startDate: Timestamp;
  endDate: Timestamp;
  status: 'draft' | 'active' | 'closed';
  isAnonymous: boolean;
  targetDepartments: LocalizedString[]; // empty = all departments
  createdAt: Timestamp;
}

export interface ClimateSurveyQuestion {
  id: string;
  content: LocalizedString;
  category: ClimateCategory;
  type: 'scale' | 'open-text';
  order: number;
}

export type ClimateCategory =
  | 'work-environment'
  | 'leadership'
  | 'communication'
  | 'growth'
  | 'compensation'
  | 'work-life-balance';

export interface ClimateSurveyResponse {
  id: string;
  surveyId: string;
  department: LocalizedString;
  respondentId?: string; // null if anonymous
  answers: {
    questionId: string;
    scaleValue?: number; // 1-5
    textValue?: string;
  }[];
  completedAt: Timestamp;
}

export interface ClimateSurveyResults {
  id: string;
  surveyId: string;
  totalResponses: number;
  responseRate: number; // percentage
  categoryScores: Record<ClimateCategory, number>; // 0-100
  departmentScores: {
    department: LocalizedString;
    scores: Record<ClimateCategory, number>;
    responseCount: number;
  }[];
  overallScore: number;
  highlights: LocalizedString[];
  concernAreas: LocalizedString[];
  createdAt: Timestamp;
}

// ==========================================
// Organizations
// ==========================================

export type OrgPlan = 'free' | 'starter' | 'professional' | 'enterprise';

export interface Organization {
  id: string;
  name: string;
  description?: string;
  logoUrl?: string;
  plan: OrgPlan;
  createdBy: string;
  isActive: boolean;
  maxMembers: number;
  createdAt: Timestamp;
  updatedAt?: Timestamp;
  xaidOrgId?: string;
}

export type OrgRole = 'owner' | 'admin' | 'member' | 'viewer';

export interface OrgMember {
  id: string;
  orgId: string;
  userId: string;
  userEmail: string;
  userName: string;
  role: OrgRole;
  invitedBy?: string;
  joinedAt: Timestamp;
  updatedAt?: Timestamp;
}

export type InviteStatus = 'pending' | 'accepted' | 'expired' | 'cancelled';

export interface OrgInvite {
  id: string;
  orgId: string;
  orgName: string;
  email: string;
  role: OrgRole;
  invitedBy: string;
  invitedByName: string;
  status: InviteStatus;
  expiresAt: Timestamp;
  createdAt: Timestamp;
  acceptedAt?: Timestamp;
}

export interface UserProfile {
  id: string;
  email: string;
  displayName: string;
  photoUrl?: string;
  currentOrgId?: string;
  createdAt: Timestamp;
  updatedAt?: Timestamp;
}

// ==========================================
// Recruitment Process
// ==========================================

export type PositionStatus = 'draft' | 'open' | 'closed' | 'on-hold';

export interface Position {
  id: string;
  orgId: string;
  title: LocalizedString;
  department: LocalizedString;
  description: LocalizedString;
  status: PositionStatus;
  jobProfileId?: string; // optional link to JobProfile for scoring
  maxCandidates?: number;
  openedAt?: Timestamp;
  closedAt?: Timestamp;
  createdBy: string;
  createdAt: Timestamp;
  updatedAt?: Timestamp;
}

// Recruitment Campaigns

export type CampaignStatus = 'draft' | 'active' | 'completed' | 'cancelled';

export type CampaignStepKey = 'planning' | 'preparation' | 'execution' | 'postReview' | 'followUp';

export interface CampaignStepItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface CampaignStep {
  key: CampaignStepKey;
  title: LocalizedString;
  description: LocalizedString;
  items: CampaignStepItem[];
  notes: string;
  completed: boolean;
}

export interface RecruitmentCampaign {
  id: string;
  orgId: string;
  title: LocalizedString;
  description: LocalizedString;
  goal: LocalizedString;
  status: CampaignStatus;
  steps: CampaignStep[];
  positionIds: string[];
  candidateIds: string[];
  templateId?: string; // 'standard' | 'career-day' if created from template
  createdBy: string;
  createdAt: Timestamp;
  updatedAt?: Timestamp;
}

// ==========================================
// Candidates
// ==========================================

export type CandidateProcessStatus =
  | 'interest-received'
  | 'contacted'
  | 'interviewed'
  | 'evaluated'
  | 'reference-check'
  | 'final-review';

export type CandidateOutcome =
  | 'pending'
  | 'approved-to-hire'
  | 'discarded'
  | 'preserved-for-future';

export type ManagerRecommendation =
  | 'hire'
  | 'discard'
  | 'contact'
  | 'keep-contact-info'
  | 'no-recommendation';

export interface CandidateChecklistItem {
  id: string;
  label: string;
  completed: boolean;
  completedAt?: Timestamp;
  completedBy?: string;
}

export interface CandidateFile {
  id: string;
  name: string;
  type: 'cv' | 'picture' | 'certificate' | 'other';
  storagePath: string;
  downloadUrl: string;
  uploadedAt: Timestamp;
  uploadedBy: string;
  sizeBytes: number;
}

export interface CandidateComment {
  id: string;
  text: string;
  authorId: string;
  authorName: string;
  createdAt: Timestamp;
}

export interface Candidate {
  id: string;
  orgId: string;
  // Personal info (candidate-editable)
  name: string;
  email: string;
  phone?: string;
  linkedinUrl?: string;
  location?: string;
  // Process tracking (manager-only)
  processStatus: CandidateProcessStatus;
  outcome: CandidateOutcome;
  // Manager assessment
  managerScore?: number;
  recommendation: ManagerRecommendation;
  comments: CandidateComment[];
  // Checklist
  checklist: CandidateChecklistItem[];
  // Files
  files: CandidateFile[];
  // Linked positions and job profiles
  positionIds: string[];
  jobProfileIds: string[];
  // Linked evaluations/tests
  evaluationIds: string[];
  testSessionIds: string[];
  // Linking to Auth user
  userId?: string;
  // Metadata
  source?: 'manual' | 'invitation';
  createdBy: string;
  createdAt: Timestamp;
  updatedAt?: Timestamp;
}

export type CandidateInviteStatus = 'pending' | 'accepted' | 'expired' | 'cancelled';

export interface CandidateInvite {
  id: string;
  orgId: string;
  orgName: string;
  candidateId: string;
  positionIds: string[];
  jobProfileIds: string[];
  email: string;
  invitedBy: string;
  invitedByName: string;
  status: CandidateInviteStatus;
  message?: string;
  expiresAt: Timestamp;
  createdAt: Timestamp;
  acceptedAt?: Timestamp;
}

// Contact form submissions
export type ContactInterest =
  | 'white-label'
  | 'reseller'
  | 'corporate-license'
  | 'individual-license'
  | 'training-program'
  | 'speaking-engagement'
  | 'consulting-services'
  | 'suggest-content'
  | 'report-errors'
  | 'suggest-improvements'
  | 'general'
  | 'other';

export type ContactStatus = 'new' | 'read' | 'replied' | 'archived';

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  interest: ContactInterest;
  company?: string;
  role?: string;
  sector?: string;
  message: string;
  locale: string;
  status: ContactStatus;
  createdAt: Timestamp;
  readAt?: Timestamp;
  notes?: string;
}
