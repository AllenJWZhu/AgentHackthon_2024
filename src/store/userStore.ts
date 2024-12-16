import { create } from 'zustand';

interface UserState {
  user: null | {
    email: string;
    name: string;
  };
  isLoading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoading: false,
  error: null,
  signIn: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      // Mock sign in
      set({ user: { email, name: 'Test User' } });
    } catch (error) {
      set({ error: 'Failed to sign in' });
    } finally {
      set({ isLoading: false });
    }
  },
  signUp: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      // Mock sign up
      set({ user: { email, name } });
    } catch (error) {
      set({ error: 'Failed to sign up' });
    } finally {
      set({ isLoading: false });
    }
  },
  signOut: () => set({ user: null })
}));