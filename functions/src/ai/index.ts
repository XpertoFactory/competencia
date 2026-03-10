import { AIProvider, AIProviderType } from './types';
import { ClaudeProvider } from './claude';
import { OpenAIProvider } from './openai';
import { GeminiProvider } from './gemini';

export * from './types';
export { ClaudeProvider } from './claude';
export { OpenAIProvider } from './openai';
export { GeminiProvider } from './gemini';

export function createAIProvider(type?: AIProviderType, apiKey?: string): AIProvider {
  const providerType = type || 'gemini';
  switch (providerType) {
    case 'gemini':
      return new GeminiProvider(apiKey);
    case 'claude':
      return new ClaudeProvider(apiKey);
    case 'openai':
      return new OpenAIProvider(apiKey);
    default:
      throw new Error(`Unknown AI provider type: ${providerType}`);
  }
}
