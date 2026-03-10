import { GoogleGenerativeAI } from '@google/generative-ai';
import {
  AIProvider,
  EvaluationContext,
  AIAnalysisResult,
  OpenTextAnalysis,
} from './types';

export class GeminiProvider implements AIProvider {
  name = 'gemini';
  private client: GoogleGenerativeAI;
  private modelName = 'gemini-2.5-flash';

  constructor(apiKey?: string) {
    this.client = new GoogleGenerativeAI(
      apiKey || process.env.GEMINI_API_KEY || ''
    );
  }

  /**
   * Extract and parse JSON from a text response, handling markdown code blocks
   * and other wrapper formats that LLMs commonly produce.
   */
  private parseJsonResponse<T>(text: string, context: string): T {
    // First, try to parse the entire response as JSON
    try {
      return JSON.parse(text) as T;
    } catch {
      // Not pure JSON, continue with extraction
    }

    // Strip markdown code blocks (```json ... ``` or ``` ... ```)
    const codeBlockMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (codeBlockMatch) {
      try {
        return JSON.parse(codeBlockMatch[1].trim()) as T;
      } catch {
        // Code block content wasn't valid JSON
      }
    }

    // Fall back to extracting the first JSON object
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      try {
        return JSON.parse(jsonMatch[0]) as T;
      } catch (error) {
        throw new Error(
          `[Gemini ${context}] Found JSON-like content but failed to parse it: ${error instanceof Error ? error.message : String(error)}`
        );
      }
    }

    throw new Error(
      `[Gemini ${context}] No valid JSON found in model response. Raw response: ${text.substring(0, 200)}...`
    );
  }

  async analyzeOpenText(
    question: string,
    response: string,
    rubric?: string
  ): Promise<OpenTextAnalysis> {
    const model = this.client.getGenerativeModel({ model: this.modelName });

    const prompt = `You are an expert evaluator for insurance industry competency assessments.
Your task is to evaluate open-text responses and provide a score from 0-100.

Evaluation criteria:
- Completeness: Does the response fully address the question?
- Accuracy: Is the information correct and relevant?
- Depth: Does the response show deep understanding?
- Practical application: Does it demonstrate real-world applicability?

${rubric ? `Additional rubric:\n${rubric}` : ''}

Question: ${question}

Candidate's response: ${response}

Please evaluate this response.

Respond ONLY in JSON format with:
{
  "score": <number 0-100>,
  "evaluation": "<brief evaluation in Spanish explaining the score>"
}`;

    try {
      const result = await model.generateContent(prompt);
      const text = result.response.text();

      const parsed = this.parseJsonResponse<{ score: number; evaluation: string }>(
        text,
        'analyzeOpenText'
      );

      if (typeof parsed.score !== 'number' || parsed.score < 0 || parsed.score > 100) {
        throw new Error(`[Gemini analyzeOpenText] Invalid score value: ${parsed.score}`);
      }

      return {
        score: parsed.score,
        evaluation: parsed.evaluation || '',
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error(`[Gemini analyzeOpenText] Error: ${errorMessage}`);
      return {
        score: 50,
        evaluation: `Evaluation could not be completed via AI: ${errorMessage}`,
      };
    }
  }

  async generateAnalysis(context: EvaluationContext): Promise<AIAnalysisResult> {
    const model = this.client.getGenerativeModel({ model: this.modelName });

    const prompt = `You are an expert career development advisor for the insurance industry.
Your task is to analyze evaluation results and generate personalized recommendations.

The candidate's name is ${context.candidateName}.
They were evaluated for the profile: ${context.profileName.es} / ${context.profileName.en}

Their scores are:
- Professional Skills: ${context.categoryScores.professional}%
- Soft Skills: ${context.categoryScores.softSkills}%
- Readiness for Change: ${context.categoryScores.readiness}%

Here are the candidate's responses:
${context.responses.map((r) => `- ${r.questionContent.es}: ${JSON.stringify(r.value)}`).join('\n')}

Generate a comprehensive analysis with:
1. Key strengths (3-5 items)
2. Growth opportunities (3-4 items, use positive framing)
3. A personalized message summarizing results and recommendations
4. Change management strategies (3-4 items)
5. Ways to leverage strengths (2-3 items)
6. Ways to develop growth areas (2-3 items)

All text must be in both Spanish (es) and English (en).

Respond ONLY in JSON format matching this structure:
{
  "strengths": [{ "es": "...", "en": "..." }],
  "growthOpportunities": [{ "es": "...", "en": "..." }],
  "personalizedMessage": { "es": "...", "en": "..." },
  "changeManagementStrategies": [{ "es": "...", "en": "..." }],
  "strengthSupports": [{ "es": "...", "en": "..." }],
  "growthSupports": [{ "es": "...", "en": "..." }]
}`;

    try {
      const result = await model.generateContent(prompt);
      const text = result.response.text();

      return this.parseJsonResponse<AIAnalysisResult>(text, 'generateAnalysis');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      throw new Error(
        `[Gemini generateAnalysis] Failed to generate or parse analysis: ${errorMessage}`
      );
    }
  }
}
