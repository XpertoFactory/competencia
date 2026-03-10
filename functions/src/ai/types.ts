// AI Provider types

export interface LocalizedString {
  es: string;
  en: string;
}

export interface EvaluationContext {
  candidateName: string;
  profileName: LocalizedString;
  responses: ResponseData[];
  categoryScores: CategoryScores;
}

export interface ResponseData {
  questionId: string;
  questionContent: LocalizedString;
  questionType: string;
  categoryId: string;
  competencyId: string;
  value: string | number | string[];
  maxScore: number;
}

export interface CategoryScores {
  professional: number;
  softSkills: number;
  readiness: number;
}

export interface OpenTextAnalysis {
  score: number;
  evaluation: string;
}

export interface AIAnalysisResult {
  strengths: LocalizedString[];
  growthOpportunities: LocalizedString[];
  personalizedMessage: LocalizedString;
  changeManagementStrategies: LocalizedString[];
  strengthSupports: LocalizedString[];
  growthSupports: LocalizedString[];
}

export interface AIProvider {
  name: string;
  analyzeOpenText(question: string, response: string, rubric?: string): Promise<OpenTextAnalysis>;
  generateAnalysis(context: EvaluationContext): Promise<AIAnalysisResult>;
}

export type AIProviderType = 'claude' | 'openai' | 'gemini';
