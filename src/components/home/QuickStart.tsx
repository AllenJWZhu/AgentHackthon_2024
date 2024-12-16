// src/components/home/QuickStart.tsx
import React from 'react';

interface LessonCard {
  id: string;
  title: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  description: string;
}

interface QuickStartProps {
  recentLessons: LessonCard[];
  suggestedLessons: LessonCard[];
}

export const QuickStart: React.FC<QuickStartProps> = ({ recentLessons, suggestedLessons }) => {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Quick Start</h2>
      
      {/* Recent Lessons */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Continue Learning</h3>
        <div className="grid grid-cols-2 gap-4">
          {recentLessons.map((lesson) => (
            <button
              key={lesson.id}
              className="flex items-start p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-left"
            >
              <div>
                <h4 className="font-medium text-gray-800">{lesson.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{lesson.description}</p>
                <div className="flex items-center mt-2 space-x-3">
                  <span className="text-xs px-2 py-1 bg-blue-100 rounded text-blue-700">
                    {lesson.level}
                  </span>
                  <span className="text-xs text-gray-500">
                    {lesson.duration}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Suggested Lessons */}
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-4">Suggested for You</h3>
        <div className="grid grid-cols-2 gap-4">
          {suggestedLessons.map((lesson) => (
            <button
              key={lesson.id}
              className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left"
            >
              <div>
                <h4 className="font-medium text-gray-800">{lesson.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{lesson.description}</p>
                <div className="flex items-center mt-2 space-x-3">
                  <span className="text-xs px-2 py-1 bg-gray-200 rounded text-gray-700">
                    {lesson.level}
                  </span>
                  <span className="text-xs text-gray-500">
                    {lesson.duration}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};