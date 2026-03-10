import Anthropic from '@anthropic-ai/sdk';
import {
  AIProvider,
  EvaluationContext,
  AIAnalysisResult,
  OpenTextAnalysis,
} from './types';

export class ClaudeProvider implements AIProvider {
  name = 'claude';
  private client: Anthropic;

  constructor(apiKey?: string) {
    this.client = new Anthropic({
      apiKey: apiKey || process.env.CLAUDE_API_KEY,
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

    const userPrompt = `Question: ${question}

Candidate's response: ${response}

Please evaluate this response.`;

    const message = await this.client.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 500,
      messages: [
        { role: 'user', content: userPrompt },
      ],
      system: systemPrompt,
    });

    const content = message.content[0];
    if (content.type !== 'text') {
      throw new Error('Unexpected response type from Claude');
    }

    try {
      const result = JSON.parse(content.text);
      return {
        score: result.score,
        evaluation: result.evaluation,
      };
    } catch {
      return {
        score: 50,
        evaluation: content.text,
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

    const userPrompt = `Here are the candidate's responses:
${context.responses.map((r) => `- ${r.questionContent.es}: ${JSON.stringify(r.value)}`).join('\n')}

Please generate a comprehensive analysis and recommendations.`;

    const message = await this.client.messages.create({
      model: 'claude-3-sonnet-20240229',
      max_tokens: 2000,
      messages: [
        { role: 'user', content: userPrompt },
      ],
      system: systemPrompt,
    });

    const content = message.content[0];
    if (content.type !== 'text') {
      throw new Error('Unexpected response type from Claude');
    }

    try {
      return JSON.parse(content.text);
    } catch {
      throw new Error('Failed to parse Claude analysis response');
    }
  }
}
