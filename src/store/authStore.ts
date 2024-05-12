import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { zustandStorage } from './storage';

type CurrentUser = {
  name: string;
};

export interface AuthState {
  currentUser: CurrentUser;
  updateUser: (user: CurrentUser) => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      currentUser: {
        name: 'Bilinmeyen Kullanıcı',
      },
      updateUser: (user: CurrentUser) => set({ currentUser: user }),
    }),
    {
      name: 'auth-store',
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

export default useAuthStore;
