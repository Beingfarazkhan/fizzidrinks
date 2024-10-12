import { create } from "zustand";

interface State {
  ready: boolean;
  setReady: () => void;
}

export const useStore = create<State>((set) => ({
  ready: false,
  setReady: () => set({ ready: true }),
}));
