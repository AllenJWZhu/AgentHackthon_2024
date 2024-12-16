import React from 'react';

interface Challenge {
  title: string;
  description: string;
  points: number;
  difficulty: 'easy' | 'medium' | 'hard';
  timeEstimate: string;
  completionStatus: 'not-started' | 'in-progress' | 'completed';
}

interface DailyChallengeProps {
  challenge: Challenge;
  onStart: () => void;
}

export const DailyChallenge: React.FC<DailyChallengeProps> = ({ challenge, onStart }) => {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Daily Challenge</h2>
        <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
          +{challenge.points} points
        </span>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-800">{challenge.title}</h3>
        <p className="text-gray-600">{challenge.description}</p>

        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <span role="img" aria-label="clock">⏱️</span>
            {challenge.timeEstimate}
          </span>
          <span className="flex items-center gap-1">
            <span role="img" aria-label="difficulty">
              {challenge.difficulty === 'easy' ? '🟢' : 
               challenge.difficulty === 'medium' ? '🟡' : '🔴'}
            </span>
            {challenge.difficulty}
          </span>
        </div>

        <div className="pt-4">
          {challenge.completionStatus === 'completed' ? (
            <div className="flex items-center justify-center p-3 bg-green-50 text-green-700 rounded-lg">
              <span role="img" aria-label="completed" className="mr-2">✅</span>
              Completed
            </div>
          ) : (
            <button
              onClick={onStart}
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                       transition-colors flex items-center justify-center gap-2"
            >
              {challenge.completionStatus === 'in-progress' ? (
                <>Continue Challenge <span role="img" aria-label="continue">▶️</span></>
              ) : (
                <>Start Challenge <span role="img" aria-label="start">🎯</span></>
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};