import { UserData } from '@/types/api/auth';
import create from 'zustand';

export interface AuthStore {
  user: UserState;
  setUser: (data: UserData) => void;
  logout: () => void;
}

export interface UserState {
  isLogin: boolean;
  data: UserData | null;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: {
    isLogin: false,
    data: null,
  },
  setUser: (data: UserData) => set((state) => ({ user: { isLogin: true, data } })),
  logout: () => set((state) => ({ user: { isLogin: false, data: null } })),
}));

export default useAuthStore;
