// src/store/learningStore.ts
import { create } from 'zustand';

export type ProficiencyLevel = 'beginner' | 'intermediate' | 'advanced';
export type LanguagePreference = 'british' | 'american';
export type FeedbackLevel = 'basic' | 'detailed' | 'comprehensive';

interface Settings {
  languagePreference: LanguagePreference;
  difficultyLevel: ProficiencyLevel;
  feedbackLevel: FeedbackLevel;
}

interface LearningState {
  // User Profile
  userLevel: ProficiencyLevel;
  learningGoals: string[];
  
  // Learning Mode
  currentMode: 'goal-oriented' | 'casual';
  currentSubMode: 'coach' | 'friend';
  
  // Test Preparation
  testPreparation: {
    testType?: 'IELTS' | 'TOEFL';
    targetScore?: number;
  };

  // Settings
  settings: Settings;

  // Actions
  setUserLevel: (level: ProficiencyLevel) => void;
  setMode: (mode: 'goal-oriented' | 'casual') => void;
  setSubMode: (subMode: 'coach' | 'friend') => void;
  addLearningGoal: (goal: string) => void;
  removeLearningGoal: (index: number) => void;
  setTestPrep: (test: string, score: number) => void;
  updateSettings: (settings: Partial<Settings>) => void;
  resetSettings: () => void;
}

const defaultSettings: Settings = {
  languagePreference: 'british',
  difficultyLevel: 'intermediate',
  feedbackLevel: 'detailed',
};

export const useLearningStore = create<LearningState>((set) => ({
  // Initial State
  userLevel: 'intermediate',
  currentMode: 'casual',
  currentSubMode: 'friend',
  learningGoals: [],
  testPreparation: {},
  settings: defaultSettings,
  
  // Actions
  setUserLevel: (level) => 
    set({ userLevel: level }),

  setMode: (mode) => 
    set({ currentMode: mode }),

  setSubMode: (subMode) => 
    set({ currentSubMode: subMode }),

  addLearningGoal: (goal) => 
    set((state) => ({ 
      learningGoals: [...state.learningGoals, goal] 
    })),

  removeLearningGoal: (index) =>
    set((state) => ({
      learningGoals: state.learningGoals.filter((_, i) => i !== index)
    })),

  setTestPrep: (test, score) => 
    set({ 
      testPreparation: { 
        testType: test as 'IELTS' | 'TOEFL', 
        targetScore: score 
      } 
    }),

  updateSettings: (newSettings) =>
    set((state) => ({
      settings: {
        ...state.settings,
        ...newSettings
      }
    })),

  resetSettings: () =>
    set((state) => ({
      settings: defaultSettings
    })),
}));

// Optional: Selector hooks for specific parts of the state
export const useSettings = () => useLearningStore((state) => state.settings);
export const useLearningMode = () => ({
  mode: useLearningStore((state) => state.currentMode),
  subMode: useLearningStore((state) => state.currentSubMode),
  setMode: useLearningStore((state) => state.setMode),
  setSubMode: useLearningStore((state) => state.setSubMode),
});