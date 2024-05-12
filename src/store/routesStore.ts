import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { zustandStorage } from './storage';

export interface RouteState {
  routes: Array<any>;
  addRoute: (route: any) => void;
  removeRoute: (id: string) => void;
}

const useRoutesStore = create<RouteState>()(
  persist(
    (set, get) => ({
      routes: [],
      addRoute: (route: any) => set(state => ({ routes: [...state.routes, route] })),
      removeRoute: (id: string) =>
        set(state => ({
          routes: state.routes.filter(c => c.id !== id),
        })),
    }),
    {
      name: 'routes-store',
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

export default useRoutesStore;
