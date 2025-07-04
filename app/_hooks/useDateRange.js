import { create } from 'zustand';

const initialRange = { from: undefined, to: undefined };

export const useDateRange = create((set) => ({
  range: initialRange,
  setRange: (newRange) => set({ range: newRange }),
  resetRange: () => set({ range: initialRange }),
}));
