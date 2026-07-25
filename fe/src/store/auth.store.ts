import { create } from "zustand";

import { User } from "@/features/auth/types";


interface AuthState {
  user: User | null;

  accessToken: string | null;

  isAuthenticated: boolean;

  setAuth: (
    user: User,
    accessToken: string,
  ) => void;

  setUser: (
    user: User,
  ) => void;

  clearAuth: () => void;
}


export const useAuthStore = create<AuthState>(
  (set) => ({
    user: null,

    accessToken: null,

    isAuthenticated: false,


    setAuth: (
      user,
      accessToken,
    ) =>
      set({
        user,
        accessToken,
        isAuthenticated: true,
      }),


    setUser: (
      user,
    ) =>
      set({
        user,
        isAuthenticated: true,
      }),


    clearAuth: () =>
      set({
        user: null,
        accessToken: null,
        isAuthenticated: false,
      }),
  }),
);