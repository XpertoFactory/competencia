import OpenAI from 'openai';
import {
  AIProvider,
  EvaluationContext,
  AIAnalysisResult,
  OpenTextAnalysis,
} from './types';

export class OpenAIProvider implements AIProvider {
  name = 'openai';
  private client: OpenAI;

  constructor(apiKey?: string) {
    this.client = new OpenAI({
      apiKey: apiKey || process.env.OPENAI_API_KEY,
    });
  }

  async analyzeOpenText(
    question: string,
    response: string,
    rubric?: string
  ): Promise<OpenTextAnalysis> {
    const systemPrompt = `You are an expert evaluator for insurance industry competency assessments.
Your task is to evaluate open-text responses and provide a score from 0-100.

Evaluation criteria:
- Completeness: Does the response fully address the question?
- Accuracy: Is the information correct and relevant?
- Depth: Does the response show deep understanding?
- Practical application: Does it demonstrate real-world applicability?

${rubric ? `Additional rubric:\n${rubric}` : ''}

Respond in JSON format with:
{
  "score": <number 0-100>,
  "evaluation": "<brief evaluation in Spanish explaining the score>"
}`;

    const completion = await this.client.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: systemPrompt },
        {
          role: 'user',
          content: `Question: ${question}\n\nCandidate's response: ${response}\n\nPlease evaluate this response.`,
        },
      ],
      response_format: { type: 'json_object' },
      max_tokens: 500,
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    try {
      const result = JSON.parse(content);
      return {
        score: result.score,
        evaluation: result.evaluation,
      };
    } catch {
      return {
        score: 50,
        evaluation: content,
      };
    }
  }

  async generateAnalysis(context: EvaluationContext): Promise<AIAnalysisResult> {
    const systemPrompt = `You are an expert career development advisor for the insurance industry.
Your task is to analyze evaluation results and generate personalized recommendations.

The candidate's name is ${context.candidateName}.
They were evaluated for the profile: ${context.profileName.es} / ${context.profileName.en}

Their scores are:
- Professional Skills: ${context.categoryScores.professional}%
- Soft Skills: ${context.categoryScores.softSkills}%
- Readiness for Change: ${context.categoryScores.readiness}%

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

    const completion = await this.client.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: systemPrompt },
        {
          role: 'user',
          content: `Here are the candidate's responses:\n${context.responses.map((r) => `- ${r.questionContent.es}: ${JSON.stringify(r.value)}`).join('\n')}\n\nPlease generate a comprehensive analysis and recommendations.`,
        },
      ],
      response_format: { type: 'json_object' },
      max_tokens: 2000,
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    try {
      return JSON.parse(content);
    } catch {
      throw new Error('Failed to parse OpenAI analysis response');
    }
  }
}
