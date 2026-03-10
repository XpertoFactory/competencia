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

  constructor(apiKey?: string) {
    this.client = new GoogleGenerativeAI(
      apiKey || process.env.GEMINI_API_KEY || ''
    );
  }

  async analyzeOpenText(
    question: string,
    response: string,
    rubric?: string
  ): Promise<OpenTextAnalysis> {
    const model = this.client.getGenerativeModel({ model: 'gemini-pro' });

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

Respond in JSON format with:
{
  "score": <number 0-100>,
  "evaluation": "<brief evaluation in Spanish explaining the score>"
}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    try {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        return {
          score: parsed.score,
          evaluation: parsed.evaluation,
        };
      }
      throw new Error('No JSON found in response');
    } catch {
      return {
        score: 50,
        evaluation: text,
      };
    }
  }

  async generateAnalysis(context: EvaluationContext): Promise<AIAnalysisResult> {
    const model = this.client.getGenerativeModel({ model: 'gemini-pro' });

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

Respond in JSON format matching this structure:
{
  "strengths": [{ "es": "...", "en": "..." }],
  "growthOpportunities": [{ "es": "...", "en": "..." }],
  "personalizedMessage": { "es": "...", "en": "..." },
  "changeManagementStrategies": [{ "es": "...", "en": "..." }],
  "strengthSupports": [{ "es": "...", "en": "..." }],
  "growthSupports": [{ "es": "...", "en": "..." }]
}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    try {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      throw new Error('No JSON found in response');
    } catch {
      throw new Error('Failed to parse Gemini analysis response');
    }
  }
}
