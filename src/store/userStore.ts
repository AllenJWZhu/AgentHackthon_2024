// src/store/userStore.ts
import { create } from 'zustand';

interface UserProfile {
  email: string;
  name: string;
  learningGoals: string[];
  proficiencyLevel: 'beginner' | 'intermediate' | 'advanced';
  statistics: {
    sessionsCompleted: number;
    hoursPracticed: number;
  };
}

interface UserState {
  user: UserProfile | null;
  isLoading: boolean;
  error: string | null;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  updateProfile: (data: Partial<UserProfile>) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoading: false,
  error: null,

  signUp: async (email, password, name) => {
    // Mock signup
    set({
      user: {
        email,
        name,
        learningGoals: [],
        proficiencyLevel: 'beginner',
        statistics: {
          sessionsCompleted: 0,
          hoursPracticed: 0
        }
      }
    });
  },

  signIn: async (email, password) => {
    // Mock signin
    set({
      user: {
        email,
        name: 'Test User',
        learningGoals: [],
        proficiencyLevel: 'beginner',
        statistics: {
          sessionsCompleted: 0,
          hoursPracticed: 0
        }
      }
    });
  },

  signOut: () => {
    set({ user: null });
  },

  updateProfile: (data) => {
    set((state) => ({
      user: state.user ? { ...state.user, ...data } : null
    }));
  }
}));