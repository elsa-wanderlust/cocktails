import { create } from "zustand";

interface ModalSelectState {
  modalSelect: string;
  setModalSelect: (modalSelect: string) => void;
}

export const useModalSelectState = create<ModalSelectState>()((set) => ({
  modalSelect: "signup",
  setModalSelect: (modalSelect: string) => set({ modalSelect }),
}));
