import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { themes } from '_styles/theming';

import { zustandStorage } from './storage';

export interface ThemeState {
  loading: boolean;
  data: typeof themes.light;
}

const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      loading: false,
      data: themes.light,
    }),
    {
      name: 'theme-store',
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

export default useThemeStore;
