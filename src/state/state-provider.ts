import { create, StateCreator } from "zustand";

export type State = {
  // Example :
  showModal: boolean;
  setShowModal: (show: boolean) => void;
};

const initialState: StateCreator<State> = (set: (partial: Partial<State>) => void) => ({
  // Example :
  showModal: false,
  setShowModal: (show: boolean) => set({ showModal: show }),
});

export const useStore = create<State>(initialState);
