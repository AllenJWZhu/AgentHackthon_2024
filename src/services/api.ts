// src/services/api.ts
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

// src/services/api.ts
export class AIService {
  static async analyzeText(text: string): Promise<LearningFeedback> {
    if (!import.meta.env.VITE_OPENAI_API_KEY) {
      throw new Error('OpenAI API key is missing');
    }

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are an English language tutor. Analyze the text and provide feedback."
          },
          {
            role: "user",
            content: text
          }
        ],
        functions: [{
          name: "provideFeedback",
          description: "Provide feedback on English language usage",
          parameters: {
            type: "object",
            properties: {
              grammarCorrections: {
                type: "array",
                items: { type: "string" }
              },
              vocabularySuggestions: {
                type: "array",
                items: { type: "string" }
              },
              structuralImprovement: { type: "string" },
              overallPerformance: { type: "number" }
            },
            required: ["grammarCorrections", "vocabularySuggestions", "structuralImprovement", "overallPerformance"]
          }
        }],
        function_call: { name: "provideFeedback" }
      });

      if (!completion.choices[0].message.function_call?.arguments) {
        throw new Error('Invalid response from OpenAI');
      }

      return JSON.parse(completion.choices[0].message.function_call.arguments);

    } catch (error) {
      console.error('Error in AIService:', error);
      if (error instanceof Error) {
        return {
          grammarCorrections: [],
          vocabularySuggestions: [],
          structuralImprovement: `Error: ${error.message}`,
          overallPerformance: 0
        };
      }
      return {
        grammarCorrections: [],
        vocabularySuggestions: [],
        structuralImprovement: 'An unexpected error occurred',
        overallPerformance: 0
      };
    }
  }
}