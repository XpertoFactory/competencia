import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  DocumentData,
  QueryConstraint,
  Timestamp,
  writeBatch,
  onSnapshot,
  Unsubscribe,
  serverTimestamp,
} from 'firebase/firestore';
import { firestore } from './config';
import type {
  Profile,
  CompetencyCategory,
  Question,
  Evaluation,
  AnalysisResult,
  ArchetypeProfile,
  Resource,
  AppSettings,
  EvaluationLink,
  TestSession,
  CognitiveTestConfig,
  PersonalityTestConfig,
  AptitudeTestConfig,
  DISCTestConfig,
  CombinedAssessmentResult,
  TechnicalTestConfig,
  JobProfile,
  Employee,
  ProbationEvaluation,
  ReviewCampaign,
  ReviewAssignment,
  ClimateSurvey,
  ClimateSurveyResponse,
  Organization,
  OrgMember,
  OrgInvite,
  OrgRole,
  UserProfile,
} from '@/types';

// Collection names
export const COLLECTIONS = {
  PROFILES: 'profiles',
  CATEGORIES: 'competencyCategories',
  QUESTIONS: 'questions',
  EVALUATIONS: 'evaluations',
  RESULTS: 'results',
  ARCHETYPES: 'archetypeProfiles',
  RESOURCES: 'resources',
  SETTINGS: 'settings',
  EVALUATION_LINKS: 'evaluationLinks',
  // Phase 4: New test types
  COGNITIVE_TESTS: 'cognitiveTests',
  PERSONALITY_TESTS: 'personalityTests',
  APTITUDE_TESTS: 'aptitudeTests',
  DISC_TESTS: 'discTests',
  TEST_SESSIONS: 'testSessions',
  COMBINED_RESULTS: 'combinedResults',
  // Phase 5: Technical knowledge & job-fit
  TECHNICAL_TESTS: 'technicalTests',
  JOB_PROFILES: 'jobProfiles',
  // Phase 7: Post-hire
  EMPLOYEES: 'employees',
  PROBATION_EVALUATIONS: 'probationEvaluations',
  REVIEW_CAMPAIGNS: 'reviewCampaigns',
  REVIEW_ASSIGNMENTS: 'reviewAssignments',
  REVIEW_SUMMARIES: 'reviewSummaries',
  CLIMATE_SURVEYS: 'climateSurveys',
  CLIMATE_RESPONSES: 'climateResponses',
  CLIMATE_RESULTS: 'climateSurveyResults',
  // Organizations
  ORGANIZATIONS: 'organizations',
  ORG_MEMBERS: 'orgMembers',
  ORG_INVITES: 'orgInvites',
  USER_PROFILES: 'userProfiles',
} as const;

// Generic helpers
export async function getDocument<T>(
  collectionName: string,
  docId: string
): Promise<T | null> {
  const docRef = doc(firestore, collectionName, docId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as T;
  }
  return null;
}

export async function getDocuments<T>(
  collectionName: string,
  ...constraints: QueryConstraint[]
): Promise<T[]> {
  const q = query(collection(firestore, collectionName), ...constraints);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() } as T)
  );
}

export async function setDocument<T extends DocumentData>(
  collectionName: string,
  docId: string,
  data: T
): Promise<void> {
  const docRef = doc(firestore, collectionName, docId);
  await setDoc(docRef, {
    ...data,
    updatedAt: Timestamp.now(),
  });
}

export async function updateDocument(
  collectionName: string,
  docId: string,
  data: Partial<DocumentData>
): Promise<void> {
  const docRef = doc(firestore, collectionName, docId);
  await updateDoc(docRef, {
    ...data,
    updatedAt: Timestamp.now(),
  });
}

export async function deleteDocument(
  collectionName: string,
  docId: string
): Promise<void> {
  const docRef = doc(firestore, collectionName, docId);
  await deleteDoc(docRef);
}

// Profile operations
export async function getProfiles(activeOnly = true): Promise<Profile[]> {
  const constraints: QueryConstraint[] = [orderBy('name.es')];
  if (activeOnly) {
    constraints.unshift(where('isActive', '==', true));
  }
  return getDocuments<Profile>(COLLECTIONS.PROFILES, ...constraints);
}

export async function getProfile(profileId: string): Promise<Profile | null> {
  return getDocument<Profile>(COLLECTIONS.PROFILES, profileId);
}

export async function saveProfile(profile: Profile): Promise<void> {
  await setDocument(COLLECTIONS.PROFILES, profile.id, profile);
}

// Category operations
export async function getCategories(): Promise<CompetencyCategory[]> {
  return getDocuments<CompetencyCategory>(
    COLLECTIONS.CATEGORIES,
    orderBy('order')
  );
}

export async function getCategory(
  categoryId: string
): Promise<CompetencyCategory | null> {
  return getDocument<CompetencyCategory>(COLLECTIONS.CATEGORIES, categoryId);
}

// Question operations
export async function getQuestions(
  profileId: string,
  categoryId?: string
): Promise<Question[]> {
  const constraints: QueryConstraint[] = [
    where('profileId', '==', profileId),
    where('isActive', '==', true),
    orderBy('order'),
  ];
  if (categoryId) {
    constraints.splice(1, 0, where('categoryId', '==', categoryId));
  }
  return getDocuments<Question>(COLLECTIONS.QUESTIONS, ...constraints);
}

export async function getQuestion(questionId: string): Promise<Question | null> {
  return getDocument<Question>(COLLECTIONS.QUESTIONS, questionId);
}

export async function saveQuestion(question: Question): Promise<void> {
  await setDocument(COLLECTIONS.QUESTIONS, question.id, question);
}

// Evaluation operations
export async function createEvaluation(
  evaluation: Omit<Evaluation, 'id'>
): Promise<string> {
  const docRef = doc(collection(firestore, COLLECTIONS.EVALUATIONS));
  await setDoc(docRef, {
    ...evaluation,
    id: docRef.id,
    startedAt: Timestamp.now(),
    lastActivityAt: Timestamp.now(),
  });
  return docRef.id;
}

export async function getEvaluation(
  evaluationId: string
): Promise<Evaluation | null> {
  return getDocument<Evaluation>(COLLECTIONS.EVALUATIONS, evaluationId);
}

export async function updateEvaluation(
  evaluationId: string,
  data: Partial<Evaluation>
): Promise<void> {
  await updateDocument(COLLECTIONS.EVALUATIONS, evaluationId, {
    ...data,
    lastActivityAt: Timestamp.now(),
  });
}

export async function completeEvaluation(evaluationId: string): Promise<void> {
  await updateDocument(COLLECTIONS.EVALUATIONS, evaluationId, {
    status: 'completed',
    completedAt: Timestamp.now(),
  });
}

export async function getEvaluations(
  status?: string,
  limitCount = 50
): Promise<Evaluation[]> {
  const constraints: QueryConstraint[] = [
    orderBy('startedAt', 'desc'),
    limit(limitCount),
  ];
  if (status) {
    constraints.unshift(where('status', '==', status));
  }
  return getDocuments<Evaluation>(COLLECTIONS.EVALUATIONS, ...constraints);
}

// Results operations
export async function saveResult(result: AnalysisResult): Promise<void> {
  await setDocument(COLLECTIONS.RESULTS, result.id, result);
  // Also update evaluation status
  await updateDocument(COLLECTIONS.EVALUATIONS, result.evaluationId, {
    status: 'analyzed',
  });
}

export async function getResult(
  evaluationId: string
): Promise<AnalysisResult | null> {
  const results = await getDocuments<AnalysisResult>(
    COLLECTIONS.RESULTS,
    where('evaluationId', '==', evaluationId),
    limit(1)
  );
  return results[0] || null;
}

// Get all results for a given profile (for benchmark averages)
export async function getResultsByProfile(profileId: string): Promise<AnalysisResult[]> {
  return getDocuments<AnalysisResult>(
    COLLECTIONS.RESULTS,
    where('profileId', '==', profileId)
  );
}

// Archetype profile operations
export async function getArchetypeProfiles(
  category?: string
): Promise<ArchetypeProfile[]> {
  const constraints: QueryConstraint[] = [orderBy('order')];
  if (category) {
    constraints.unshift(where('category', '==', category));
  }
  return getDocuments<ArchetypeProfile>(COLLECTIONS.ARCHETYPES, ...constraints);
}

export async function getArchetypeProfile(
  archetypeId: string
): Promise<ArchetypeProfile | null> {
  return getDocument<ArchetypeProfile>(COLLECTIONS.ARCHETYPES, archetypeId);
}

// Resource operations
export async function getResources(
  type?: string,
  activeOnly = true
): Promise<Resource[]> {
  const constraints: QueryConstraint[] = [orderBy('priority')];
  if (type) {
    constraints.unshift(where('type', '==', type));
  }
  if (activeOnly) {
    constraints.unshift(where('isActive', '==', true));
  }
  return getDocuments<Resource>(COLLECTIONS.RESOURCES, ...constraints);
}

export async function getResourcesForProfile(
  archetypeProfileId: string
): Promise<Resource[]> {
  return getDocuments<Resource>(
    COLLECTIONS.RESOURCES,
    where('targetProfiles', 'array-contains', archetypeProfileId),
    where('isActive', '==', true),
    orderBy('priority')
  );
}

// Settings operations
export async function getSettings(): Promise<AppSettings | null> {
  return getDocument<AppSettings>(COLLECTIONS.SETTINGS, 'app');
}

export async function saveSettings(settings: AppSettings): Promise<void> {
  await setDocument(COLLECTIONS.SETTINGS, 'app', settings);
}

// Real-time subscription helper
export function subscribeToDocument<T>(
  collectionName: string,
  docId: string,
  callback: (data: T | null) => void
): Unsubscribe {
  const docRef = doc(firestore, collectionName, docId);
  return onSnapshot(docRef, (docSnap) => {
    if (docSnap.exists()) {
      callback({ id: docSnap.id, ...docSnap.data() } as T);
    } else {
      callback(null);
    }
  });
}

// Batch operations helper
export async function batchWrite(
  operations: Array<{
    type: 'set' | 'update' | 'delete';
    collection: string;
    docId: string;
    data?: DocumentData;
  }>
): Promise<void> {
  const batch = writeBatch(firestore);

  for (const op of operations) {
    const docRef = doc(firestore, op.collection, op.docId);
    switch (op.type) {
      case 'set':
        batch.set(docRef, { ...op.data, updatedAt: Timestamp.now() });
        break;
      case 'update':
        batch.update(docRef, { ...op.data, updatedAt: Timestamp.now() });
        break;
      case 'delete':
        batch.delete(docRef);
        break;
    }
  }

  await batch.commit();
}

// Evaluation link operations
export async function createEvaluationLink(
  data: Omit<EvaluationLink, 'id' | 'createdAt' | 'usesCount'>
): Promise<string> {
  const docRef = doc(collection(firestore, COLLECTIONS.EVALUATION_LINKS));
  await setDoc(docRef, {
    ...data,
    id: docRef.id,
    usesCount: 0,
    createdAt: Timestamp.now(),
  });
  return docRef.id;
}

export async function getEvaluationLink(
  linkId: string
): Promise<EvaluationLink | null> {
  return getDocument<EvaluationLink>(COLLECTIONS.EVALUATION_LINKS, linkId);
}

export async function incrementLinkUsage(linkId: string): Promise<void> {
  const linkDoc = await getEvaluationLink(linkId);
  if (!linkDoc) return;
  await updateDocument(COLLECTIONS.EVALUATION_LINKS, linkId, {
    usesCount: linkDoc.usesCount + 1,
  });
}

// Generate unique ID
export function generateId(): string {
  return doc(collection(firestore, '_temp')).id;
}

// ==========================================
// Phase 4: New Test Types
// ==========================================

// --- Test Config CRUD ---
export async function getCognitiveTests(): Promise<CognitiveTestConfig[]> {
  return getDocuments<CognitiveTestConfig>(COLLECTIONS.COGNITIVE_TESTS);
}

export async function getPersonalityTests(): Promise<PersonalityTestConfig[]> {
  return getDocuments<PersonalityTestConfig>(COLLECTIONS.PERSONALITY_TESTS);
}

export async function getAptitudeTests(): Promise<AptitudeTestConfig[]> {
  return getDocuments<AptitudeTestConfig>(COLLECTIONS.APTITUDE_TESTS);
}

export async function getDISCTests(): Promise<DISCTestConfig[]> {
  return getDocuments<DISCTestConfig>(COLLECTIONS.DISC_TESTS);
}

// --- Test Sessions ---
export async function createTestSession(
  session: Omit<TestSession, 'id'>
): Promise<string> {
  const docRef = doc(collection(firestore, COLLECTIONS.TEST_SESSIONS));
  await setDoc(docRef, { ...session, id: docRef.id });
  return docRef.id;
}

export async function getTestSession(sessionId: string): Promise<TestSession | null> {
  return getDocument<TestSession>(COLLECTIONS.TEST_SESSIONS, sessionId);
}

export async function updateTestSession(
  sessionId: string,
  data: Partial<TestSession>
): Promise<void> {
  return updateDocument(COLLECTIONS.TEST_SESSIONS, sessionId, data);
}

// --- Combined Results ---
export async function saveCombinedResult(
  result: CombinedAssessmentResult
): Promise<void> {
  await setDoc(
    doc(firestore, COLLECTIONS.COMBINED_RESULTS, result.id),
    result
  );
}

export async function getCombinedResult(
  resultId: string
): Promise<CombinedAssessmentResult | null> {
  return getDocument<CombinedAssessmentResult>(COLLECTIONS.COMBINED_RESULTS, resultId);
}

export async function getCandidateResults(
  candidateEmail: string
): Promise<CombinedAssessmentResult[]> {
  return getDocuments<CombinedAssessmentResult>(
    COLLECTIONS.COMBINED_RESULTS,
    where('candidateEmail', '==', candidateEmail)
  );
}

// ==========================================
// Phase 5: Technical Tests & Job Profiles
// ==========================================

export async function getTechnicalTests(): Promise<TechnicalTestConfig[]> {
  return getDocuments<TechnicalTestConfig>(COLLECTIONS.TECHNICAL_TESTS);
}

export async function getTechnicalTest(id: string): Promise<TechnicalTestConfig | null> {
  return getDocument<TechnicalTestConfig>(COLLECTIONS.TECHNICAL_TESTS, id);
}

export async function saveTechnicalTest(test: TechnicalTestConfig): Promise<void> {
  await setDoc(doc(firestore, COLLECTIONS.TECHNICAL_TESTS, test.id), test);
}

export async function getJobProfiles(activeOnly = true): Promise<JobProfile[]> {
  if (activeOnly) {
    return getDocuments<JobProfile>(COLLECTIONS.JOB_PROFILES, where('isActive', '==', true));
  }
  return getDocuments<JobProfile>(COLLECTIONS.JOB_PROFILES);
}

export async function getJobProfile(id: string): Promise<JobProfile | null> {
  return getDocument<JobProfile>(COLLECTIONS.JOB_PROFILES, id);
}

export async function saveJobProfile(profile: JobProfile): Promise<void> {
  await setDoc(doc(firestore, COLLECTIONS.JOB_PROFILES, profile.id), profile);
}

// ==========================================
// Phase 7: Post-Hire
// ==========================================

// --- Employees ---
export async function getEmployees(status?: string): Promise<Employee[]> {
  if (status) {
    return getDocuments<Employee>(COLLECTIONS.EMPLOYEES, where('status', '==', status));
  }
  return getDocuments<Employee>(COLLECTIONS.EMPLOYEES);
}

export async function getEmployee(id: string): Promise<Employee | null> {
  return getDocument<Employee>(COLLECTIONS.EMPLOYEES, id);
}

export async function saveEmployee(employee: Employee): Promise<void> {
  await setDoc(doc(firestore, COLLECTIONS.EMPLOYEES, employee.id), employee);
}

// --- Probation Evaluations ---
export async function getProbationEvaluations(employeeId?: string): Promise<ProbationEvaluation[]> {
  if (employeeId) {
    return getDocuments<ProbationEvaluation>(COLLECTIONS.PROBATION_EVALUATIONS, where('employeeId', '==', employeeId));
  }
  return getDocuments<ProbationEvaluation>(COLLECTIONS.PROBATION_EVALUATIONS);
}

export async function saveProbationEvaluation(evaluation: ProbationEvaluation): Promise<void> {
  await setDoc(doc(firestore, COLLECTIONS.PROBATION_EVALUATIONS, evaluation.id), evaluation);
}

// --- Review Campaigns ---
export async function getReviewCampaigns(): Promise<ReviewCampaign[]> {
  return getDocuments<ReviewCampaign>(COLLECTIONS.REVIEW_CAMPAIGNS, orderBy('createdAt', 'desc'));
}

export async function saveReviewCampaign(campaign: ReviewCampaign): Promise<void> {
  await setDoc(doc(firestore, COLLECTIONS.REVIEW_CAMPAIGNS, campaign.id), campaign);
}

// --- Review Assignments ---
export async function getReviewAssignments(campaignId: string): Promise<ReviewAssignment[]> {
  return getDocuments<ReviewAssignment>(COLLECTIONS.REVIEW_ASSIGNMENTS, where('campaignId', '==', campaignId));
}

export async function getMyReviewAssignments(raterEmail: string): Promise<ReviewAssignment[]> {
  return getDocuments<ReviewAssignment>(COLLECTIONS.REVIEW_ASSIGNMENTS, where('raterEmail', '==', raterEmail), where('status', '==', 'pending'));
}

export async function saveReviewAssignment(assignment: ReviewAssignment): Promise<void> {
  await setDoc(doc(firestore, COLLECTIONS.REVIEW_ASSIGNMENTS, assignment.id), assignment);
}

// --- Climate Surveys ---
export async function getClimateSurveys(): Promise<ClimateSurvey[]> {
  return getDocuments<ClimateSurvey>(COLLECTIONS.CLIMATE_SURVEYS, orderBy('createdAt', 'desc'));
}

export async function getClimateSurvey(id: string): Promise<ClimateSurvey | null> {
  return getDocument<ClimateSurvey>(COLLECTIONS.CLIMATE_SURVEYS, id);
}

export async function saveClimateSurvey(survey: ClimateSurvey): Promise<void> {
  await setDoc(doc(firestore, COLLECTIONS.CLIMATE_SURVEYS, survey.id), survey);
}

export async function saveClimateResponse(response: ClimateSurveyResponse): Promise<void> {
  await setDoc(doc(firestore, COLLECTIONS.CLIMATE_RESPONSES, response.id), response);
}

export async function getClimateResponses(surveyId: string): Promise<ClimateSurveyResponse[]> {
  return getDocuments<ClimateSurveyResponse>(COLLECTIONS.CLIMATE_RESPONSES, where('surveyId', '==', surveyId));
}

// ==========================================
// Organizations
// ==========================================

export async function createOrganization(org: Omit<Organization, 'id'>): Promise<string> {
  const orgRef = doc(collection(firestore, COLLECTIONS.ORGANIZATIONS));
  const orgData = { ...org, id: orgRef.id };

  // Create org + owner membership in batch
  const batch = writeBatch(firestore);
  batch.set(orgRef, orgData);

  const memberId = `${orgRef.id}_${org.createdBy}`;
  const memberRef = doc(firestore, COLLECTIONS.ORG_MEMBERS, memberId);
  batch.set(memberRef, {
    id: memberId,
    orgId: orgRef.id,
    userId: org.createdBy,
    userEmail: '', // will be filled by caller
    userName: '',
    role: 'owner' as OrgRole,
    joinedAt: serverTimestamp(),
  });

  await batch.commit();
  return orgRef.id;
}

export async function getOrganization(orgId: string): Promise<Organization | null> {
  return getDocument<Organization>(COLLECTIONS.ORGANIZATIONS, orgId);
}

export async function updateOrganization(orgId: string, data: Partial<Organization>): Promise<void> {
  return updateDocument(COLLECTIONS.ORGANIZATIONS, orgId, { ...data, updatedAt: serverTimestamp() });
}

export async function getOrgMembers(orgId: string): Promise<OrgMember[]> {
  return getDocuments<OrgMember>(COLLECTIONS.ORG_MEMBERS, where('orgId', '==', orgId));
}

export async function getUserMemberships(userId: string): Promise<OrgMember[]> {
  return getDocuments<OrgMember>(COLLECTIONS.ORG_MEMBERS, where('userId', '==', userId));
}

export async function addOrgMember(member: Omit<OrgMember, 'id'>): Promise<void> {
  const memberId = `${member.orgId}_${member.userId}`;
  const memberRef = doc(firestore, COLLECTIONS.ORG_MEMBERS, memberId);
  await setDoc(memberRef, { ...member, id: memberId });
}

export async function updateOrgMemberRole(orgId: string, userId: string, newRole: OrgRole): Promise<void> {
  const memberId = `${orgId}_${userId}`;
  return updateDocument(COLLECTIONS.ORG_MEMBERS, memberId, { role: newRole, updatedAt: serverTimestamp() });
}

export async function removeOrgMember(orgId: string, userId: string): Promise<void> {
  const memberId = `${orgId}_${userId}`;
  await deleteDoc(doc(firestore, COLLECTIONS.ORG_MEMBERS, memberId));
}

export async function createOrgInvite(invite: Omit<OrgInvite, 'id'>): Promise<string> {
  const inviteRef = doc(collection(firestore, COLLECTIONS.ORG_INVITES));
  await setDoc(inviteRef, { ...invite, id: inviteRef.id });
  return inviteRef.id;
}

export async function getOrgInvites(orgId: string): Promise<OrgInvite[]> {
  return getDocuments<OrgInvite>(COLLECTIONS.ORG_INVITES, where('orgId', '==', orgId), where('status', '==', 'pending'));
}

export async function getPendingInvitesForEmail(email: string): Promise<OrgInvite[]> {
  return getDocuments<OrgInvite>(COLLECTIONS.ORG_INVITES, where('email', '==', email.toLowerCase()), where('status', '==', 'pending'));
}

export async function acceptOrgInvite(inviteId: string, userId: string, userName: string): Promise<void> {
  const inviteDoc = await getDocument<OrgInvite>(COLLECTIONS.ORG_INVITES, inviteId);
  if (!inviteDoc || inviteDoc.status !== 'pending') throw new Error('Invite not found or already used');

  const batch = writeBatch(firestore);

  // Update invite status
  batch.update(doc(firestore, COLLECTIONS.ORG_INVITES, inviteId), {
    status: 'accepted',
    acceptedAt: serverTimestamp(),
  });

  // Create membership
  const memberId = `${inviteDoc.orgId}_${userId}`;
  batch.set(doc(firestore, COLLECTIONS.ORG_MEMBERS, memberId), {
    id: memberId,
    orgId: inviteDoc.orgId,
    userId,
    userEmail: inviteDoc.email,
    userName,
    role: inviteDoc.role,
    invitedBy: inviteDoc.invitedBy,
    joinedAt: serverTimestamp(),
  });

  await batch.commit();
}

export async function getUserProfile(userId: string): Promise<UserProfile | null> {
  return getDocument<UserProfile>(COLLECTIONS.USER_PROFILES, userId);
}

export async function createOrUpdateUserProfile(userId: string, data: Partial<UserProfile>): Promise<void> {
  const existing = await getUserProfile(userId);
  if (existing) {
    await updateDocument(COLLECTIONS.USER_PROFILES, userId, { ...data, updatedAt: serverTimestamp() });
  } else {
    await setDoc(doc(firestore, COLLECTIONS.USER_PROFILES, userId), {
      id: userId,
      ...data,
      createdAt: serverTimestamp(),
    });
  }
}
