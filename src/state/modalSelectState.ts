import { create } from "zustand";

interface IsConnectedState {
  isConnected: string;
  setIsConnected: (isConnected: string) => void;
}

export const useIsConnectedState = create<IsConnectedState>()((set) => ({
  isConnected: "",
  setIsConnected: (isConnected: string) => set({ isConnected }),
}));
