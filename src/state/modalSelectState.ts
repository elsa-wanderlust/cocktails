import { create } from "zustand";
// import { getCookie } from "cookies-next";

// interface ModalSelectState {
//   modalSelect: string;
//   setModalSelect: (modalSelect: string) => void;
// }

// export const useModalSelectState = create<ModalSelectState>()((set) => ({
//   modalSelect: "signup",
//   setModalSelect: (modalSelect: string) => set({ modalSelect }),
// }));

// const token = getCookie("cocktails");

interface IsConnectedState {
  isConnected: boolean;
  setIsConnected: (isConnected: boolean) => void;
}

export const useIsConnectedState = create<IsConnectedState>()((set) => ({
  isConnected: true,
  setIsConnected: (isConnected: boolean) => set({ isConnected }),
}));
