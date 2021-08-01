import create from 'zustand';
import {persist, StateStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CounterStore {
  count: number;
  addToCount: (toAdd: number) => void;
}

// Custom storage object
const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    console.log(name, 'has been retrieved');
    return (await AsyncStorage.getItem(name)) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    console.log(name, 'with value', value, 'has been saved');
    AsyncStorage.setItem(name, value);
  },
};

export const useCounterStore = create<CounterStore>(
  persist(
    (set, get) => ({
      count: 0,
      addToCount: toAdd => set(() => ({count: get().count + toAdd})),
    }),
    {
      name: '@VALEO/COUNT', // unique name
      getStorage: () => storage,
    },
  ),
);
