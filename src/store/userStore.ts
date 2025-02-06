import { create } from 'zustand';

interface UserState {
  user: {
    email: string;
    name: string;
    proficiencyLevel: string;
    learningGoals: string[];
    statistics: {
      sessionsCompleted: number;
      hoursPracticed: number;
    };
  } | null;
  error: string | null;
  isLoading: boolean;
  updateProfile: (profileData: {
    name: string;
    proficiencyLevel: string;
    learningGoals: string[];
  }) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoading: false,
  error: null,
  updateProfile: async (profileData) => {
    set((state) => {
      if (!state.user) return { user: null };
      return {
        user: {
          ...state.user,
          ...profileData,
        },
      };
    });
  },
  signIn: async (email, _password) => {
    set({ isLoading: true, error: null });
    try {
      // Mock sign in with default fields
      set({
        user: {
          email,
          name: 'Test User',
          proficiencyLevel: 'beginner',
          learningGoals: [],
          statistics: {
            sessionsCompleted: 0,
            hoursPracticed: 0,
          },
        },
      });
    } catch (error) {
      set({ error: 'Failed to sign in' });
    } finally {
      set({ isLoading: false });
    }
  },
  signUp: async (email, _password, name) => {
    set({ isLoading: true, error: null });
    try {
      // Mock sign up with default fields
      set({
        user: {
          email,
          name,
          proficiencyLevel: 'beginner',
          learningGoals: [],
          statistics: {
            sessionsCompleted: 0,
            hoursPracticed: 0,
          },
        },
      });
    } catch (error) {
      set({ error: 'Failed to sign up' });
    } finally {
      set({ isLoading: false });
    }
  },
  signOut: () => set({ user: null })
}));