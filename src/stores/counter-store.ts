import create from 'zustand';

interface CounterStore {
  count: number;
  addToCount: (toAdd: number) => void;
}

export const useCounterStore = create<CounterStore>(set => ({
  count: 0,
  addToCount: toAdd => set(state => ({count: state.count + toAdd})),
}));
