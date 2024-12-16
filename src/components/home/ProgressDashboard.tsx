// src/components/home/ProgressDashboard.tsx
import React from 'react';

interface ProgressStats {
  lessonsCompleted: number;
  streak: number;
  weeklyGoal: number;
  weeklyProgress: number;
  totalHours: number;
}

interface ProgressDashboardProps {
  stats: ProgressStats;
  isLoading?: boolean;
}

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({ 
  stats, 
  isLoading = false 
}) => {
  const progressPercentage = (stats.weeklyProgress / stats.weeklyGoal) * 100;

  if (isLoading) {
    return (
      <section className="bg-white rounded-lg shadow-sm p-6 mt-6 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-100 rounded-lg p-4 h-24"></div>
          ))}
        </div>
        <div className="mt-6">
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
          <div className="h-2 bg-gray-200 rounded-full"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white rounded-lg shadow-sm p-6 mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Progress</h2>
      
      <div className="grid grid-cols-3 gap-6">
        {/* Streak Card */}
        <div className="bg-orange-50 rounded-lg p-4">
          <div className="text-orange-600 text-sm font-medium mb-1">
            Current Streak
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-800">
              {stats.streak}
            </span>
            <span className="ml-1 text-gray-600">days</span>
          </div>
        </div>

        {/* Lessons Completed Card */}
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="text-blue-600 text-sm font-medium mb-1">
            Lessons Completed
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-800">
              {stats.lessonsCompleted}
            </span>
          </div>
        </div>

        {/* Study Time Card */}
        <div className="bg-green-50 rounded-lg p-4">
          <div className="text-green-600 text-sm font-medium mb-1">
            Total Study Time
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-800">
              {stats.totalHours}
            </span>
            <span className="ml-1 text-gray-600">hours</span>
          </div>
        </div>
      </div>

      {/* Weekly Progress */}
      <div className="mt-6">
        <div className="flex justify-between items-baseline mb-2">
          <h3 className="text-sm font-medium text-gray-700">Weekly Goal Progress</h3>
          <span className="text-sm text-gray-500">
            {stats.weeklyProgress}/{stats.weeklyGoal} lessons
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
          />
        </div>
      </div>
    </section>
  );
};