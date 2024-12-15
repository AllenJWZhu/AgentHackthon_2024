import OpenAI from 'openai';

export interface LearningFeedback {
  grammarCorrections: string[];
  vocabularySuggestions: string[];
  structuralImprovement: string;
  overallPerformance: number;
}

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export class AIService {
  static async analyzeText(text: string): Promise<LearningFeedback> {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{
          role: "system",
          content: "You are an English language tutor. Analyze the following text and provide feedback in this JSON format: {grammarCorrections: string[], vocabularySuggestions: string[], structuralImprovement: string, overallPerformance: number}"
        }, {
          role: "user",
          content: text
        }]
      });

      return this.parseFeedback(response.choices[0].message?.content || '');
    } catch (error) {
      console.error('Error analyzing text:', error);
      return {
        grammarCorrections: [],
        vocabularySuggestions: [],
        structuralImprovement: 'Error analyzing text',
        overallPerformance: 0
      };
    }
  }

  private static parseFeedback(response: string): LearningFeedback {
    try {
      return JSON.parse(response);
    } catch {
      return {
        grammarCorrections: [],
        vocabularySuggestions: [],
        structuralImprovement: '',
        overallPerformance: 0
      };
    }
  }
}

