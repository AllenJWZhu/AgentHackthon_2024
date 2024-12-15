import { create } from 'zustand';

export type ProficiencyLevel = 'beginner' | 'intermediate' | 'advanced';

interface LearningState {
  userLevel: ProficiencyLevel;
  currentMode: 'goal-oriented' | 'casual';
  currentSubMode: 'coach' | 'friend';
  learningGoals: string[];
  testPreparation: {
    testType?: 'IELTS' | 'TOEFL';
    targetScore?: number;
  };
  setUserLevel: (level: ProficiencyLevel) => void;
  setMode: (mode: 'goal-oriented' | 'casual') => void;
  setSubMode: (subMode: 'coach' | 'friend') => void;
  addLearningGoal: (goal: string) => void;
  setTestPrep: (test: string, score: number) => void;
}

export const useLearningStore = create<LearningState>((set) => ({
  userLevel: 'intermediate',
  currentMode: 'casual',
  currentSubMode: 'friend',
  learningGoals: [],
  testPreparation: {},
  
  setUserLevel: (level) => set({ userLevel: level }),
  setMode: (mode) => set({ currentMode: mode }),
  setSubMode: (subMode) => set({ currentSubMode: subMode }),
  addLearningGoal: (goal) => 
    set((state) => ({ learningGoals: [...state.learningGoals, goal] })),
  setTestPrep: (test, score) => 
    set({ testPreparation: { testType: test as 'IELTS' | 'TOEFL', targetScore: score } })
})); 