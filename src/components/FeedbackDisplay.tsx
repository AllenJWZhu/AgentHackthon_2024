import React from 'react';
import { LearningFeedback } from '../services/api';

interface FeedbackDisplayProps {
  feedback: LearningFeedback;
}

export const FeedbackDisplay: React.FC<FeedbackDisplayProps> = ({ feedback }) => {
  return (
    <div className="feedback-container bg-gray-50 p-4 rounded-lg">
      {feedback.grammarCorrections?.length > 0 && (
        <div className="grammar-corrections">
          <h4 className="text-sm font-bold text-gray-700">Grammar Corrections:</h4>
          <ul className="list-disc pl-4">
            {feedback.grammarCorrections.map((correction, idx) => (
              <li key={idx} className="text-sm text-red-600">{correction}</li>
            ))}
          </ul>
        </div>
      )}
      
      {feedback.vocabularySuggestions?.length > 0 && (
        <div className="vocabulary-suggestions mt-2">
          <h4 className="text-sm font-bold text-gray-700">Vocabulary Suggestions:</h4>
          <ul className="list-disc pl-4">
            {feedback.vocabularySuggestions.map((suggestion, idx) => (
              <li key={idx} className="text-sm text-blue-600">{suggestion}</li>
            ))}
          </ul>
        </div>
      )}

      {feedback.structuralImprovement && (
        <div className="structural-improvement mt-2">
          <h4 className="text-sm font-bold text-gray-700">Structure Improvement:</h4>
          <p className="text-sm text-gray-600">{feedback.structuralImprovement}</p>
        </div>
      )}

      {feedback.overallPerformance !== undefined && (
        <div className="performance mt-2">
          <h4 className="text-sm font-bold text-gray-700">Performance:</h4>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ width: `${feedback.overallPerformance * 100}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}; 