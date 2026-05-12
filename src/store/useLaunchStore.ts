import { create } from 'zustand';
import { Launch } from '../types/launch';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type LaunchStore = {
  launches: Launch[];
  setLaunches: (launches: Launch[]) => void;
};

export const useLaunchStore = create<LaunchStore>()(
  persist(
    (set) => ({
      launches: [],
      setLaunches: (launches: Launch[]) => set({ launches }),
    }),
    {
      name: 'launch-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
