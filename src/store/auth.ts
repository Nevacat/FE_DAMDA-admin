import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface AuthStore {
  isLogin: boolean;
  setLogin: () => void;
  setLogout: () => void;
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      isLogin: false,

      setLogin: () => set({ isLogin: true }),
      setLogout: () => set({ isLogin: false }),
    }),
    { name: 'login-state' },
  ),
);

export default useAuthStore;
