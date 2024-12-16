// src/components/Sidebar.tsx
import React from 'react';

interface SidebarProps {
  mode: 'casual' | 'goal-oriented';
  subMode: 'friend' | 'coach';
  onModeChange: (mode: 'casual' | 'goal-oriented') => void;
  onSubModeChange: (subMode: 'friend' | 'coach') => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ mode, subMode, onModeChange, onSubModeChange }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h2 className="font-semibold text-gray-700 mb-4">Learning Mode</h2>
      <div className="space-y-2">
        <button 
          onClick={() => onModeChange('casual')}
          className={`w-full px-4 py-2 text-left rounded-lg ${
            mode === 'casual' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
          } transition-colors`}
        >
          Casual Learning
        </button>
        <button 
          onClick={() => onModeChange('goal-oriented')}
          className={`w-full px-4 py-2 text-left rounded-lg ${
            mode === 'goal-oriented' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
          } transition-colors`}
        >
          Goal-Oriented
        </button>
      </div>
      
      <h2 className="font-semibold text-gray-700 mt-6 mb-4">Interaction Style</h2>
      <div className="space-y-2">
        <button 
          onClick={() => onSubModeChange('friend')}
          className={`w-full px-4 py-2 text-left rounded-lg ${
            subMode === 'friend' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
          } transition-colors`}
        >
          Friend Mode
        </button>
        <button 
          onClick={() => onSubModeChange('coach')}
          className={`w-full px-4 py-2 text-left rounded-lg ${
            subMode === 'coach' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
          } transition-colors`}
        >
          Coach Mode
        </button>
      </div>
    </div>
  );
};