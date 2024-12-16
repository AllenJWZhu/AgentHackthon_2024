// src/components/HomePage.tsx
import React, { useState, useEffect } from 'react';
import { QuickStart } from './home/QuickStart';
import { ProgressDashboard } from './home/ProgressDashboard';
import { PracticeAreas } from './home/PracticeAreas';
import { DailyChallenge } from './home/DailyChallenge';

interface ProgressStats {
  lessonsCompleted: number;
  streak: number;
  weeklyGoal: number;
  weeklyProgress: number;
  totalHours: number;
}

export const HomePage: React.FC = () => {
  // Progress Stats State
  const [progressStats, setProgressStats] = useState<ProgressStats>({
    lessonsCompleted: 0,
    streak: 0,
    weeklyGoal: 7,
    weeklyProgress: 0,
    totalHours: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  // Recent and Suggested Lessons
  const recentLessons = [
    {
      id: '1',
      title: 'Business English Basics',
      level: 'intermediate' as const,
      duration: '15 min',
      description: 'Learn essential business vocabulary and phrases'
    },
    {
      id: '2',
      title: 'Common Phrasal Verbs',
      level: 'beginner' as const,
      duration: '10 min',
      description: 'Master everyday phrasal verbs'
    }
  ];

  const suggestedLessons = [
    {
      id: '3',
      title: 'Advanced Conversation',
      level: 'advanced' as const,
      duration: '20 min',
      description: 'Practice natural conversation flows'
    },
    {
      id: '4',
      title: 'Grammar Fundamentals',
      level: 'beginner' as const,
      duration: '15 min',
      description: 'Review basic grammar rules'
    }
  ];

  // Practice Areas
  const practiceAreas = [
    {
      id: '1',
      title: 'Speaking Practice',
      description: 'Improve pronunciation and fluency',
      icon: '🗣️',
      color: 'bg-blue-50',
      href: '/practice/speaking'
    },
    {
      id: '2',
      title: 'Writing Exercise',
      description: 'Practice writing essays and letters',
      icon: '✍️',
      color: 'bg-green-50',
      href: '/practice/writing'
    },
    {
      id: '3',
      title: 'Grammar Review',
      description: 'Master English grammar rules',
      icon: '📚',
      color: 'bg-yellow-50',
      href: '/practice/grammar'
    },
    {
      id: '4',
      title: 'Vocabulary Builder',
      description: 'Expand your word knowledge',
      icon: '📝',
      color: 'bg-purple-50',
      href: '/practice/vocabulary'
    }
  ];

  // Daily Challenge
  const dailyChallenge = {
    title: "Master Business Small Talk",
    description: "Practice common phrases and responses used in professional networking situations.",
    points: 50,
    difficulty: 'medium' as const,
    timeEstimate: '15 min',
    completionStatus: 'not-started' as const
  };

  // Load Progress Data
  useEffect(() => {
    const loadProgress = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProgressStats({
          lessonsCompleted: 0,
          streak: 0,
          weeklyGoal: 10,
          weeklyProgress: 0,
          totalHours: 0
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadProgress();
  }, []);

  // Event Handlers
  const handleStartChallenge = () => {
    // Add challenge start logic here
    console.log('Starting daily challenge');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-6">
          {/* Main Content - Left Side */}
          <div className="col-span-2 space-y-6">
            <QuickStart 
              recentLessons={recentLessons}
              suggestedLessons={suggestedLessons}
            />
            <ProgressDashboard 
              stats={progressStats} 
              isLoading={isLoading}
            />
          </div>

          {/* Sidebar - Right Side */}
          <div className="space-y-6">
            <DailyChallenge 
              challenge={dailyChallenge}
              onStart={handleStartChallenge}
            />
            <PracticeAreas 
              areas={practiceAreas}
            />
          </div>
        </div>
      </div>
    </div>
  );
};