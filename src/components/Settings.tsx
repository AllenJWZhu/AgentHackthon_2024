// src/components/Settings.tsx
import React, { useState } from 'react';
import { useLearningStore } from '../store/learningStore';

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Settings: React.FC<SettingsProps> = ({ isOpen, onClose }) => {
  const { settings, updateSettings } = useLearningStore();
  const [localSettings, setLocalSettings] = useState(settings);

  if (!isOpen) return null;

  const handleSave = () => {
    updateSettings(localSettings);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-[480px] shadow-xl">
        {/* ... existing header ... */}
        
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Language Preferences</h3>
            <select 
              value={localSettings.languagePreference}
              onChange={(e) => setLocalSettings(prev => ({
                ...prev,
                languagePreference: e.target.value as 'british' | 'american'
              }))}
              className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              <option value="british">British English</option>
              <option value="american">American English</option>
            </select>
          </div>

          <div>
            <h3 className="font-medium mb-2">Difficulty Level</h3>
            <select 
              value={localSettings.difficultyLevel}
              onChange={(e) => setLocalSettings(prev => ({
                ...prev,
                difficultyLevel: e.target.value as 'beginner' | 'intermediate' | 'advanced'
              }))}
              className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div>
            <h3 className="font-medium mb-2">Feedback Detail Level</h3>
            <select 
              value={localSettings.feedbackLevel}
              onChange={(e) => setLocalSettings(prev => ({
                ...prev,
                feedbackLevel: e.target.value as 'basic' | 'detailed' | 'comprehensive'
              }))}
              className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              <option value="basic">Basic</option>
              <option value="detailed">Detailed</option>
              <option value="comprehensive">Comprehensive</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button 
            onClick={handleSave}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};