import { create } from "zustand";
import { persist } from "zustand/middleware";

import { User } from "@/features/auth/types";

interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  hydrated: boolean;

  setAuth: (
    user: User,
    accessToken: string,
  ) => void;

  setUser: (
    user: User,
  ) => void;

  updateUser: (
    data: Partial<User>,
  ) => void;

  setAccessToken: (
    accessToken: string,
  ) => void;

  setLoading: (
    value: boolean,
  ) => void;

  setHydrated: (
    value: boolean,
  ) => void;

  clearAuth: () => void;

  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,

      accessToken: null,

      isAuthenticated: false,

      isLoading: true,

      hydrated: false,

      setAuth: (user, accessToken) => {
        set({
          user,
          accessToken,
          isAuthenticated: true,
          isLoading: false,
        });
      },

      setUser: (user) => {
        set({
          user,
          isAuthenticated: true,
          isLoading: false,
        });
      },

      updateUser: (data) => {
        set((state) => ({
          user: state.user
            ? {
                ...state.user,
                ...data,
              }
            : null,
        }));
      },

      setAccessToken: (accessToken) => {
        set({
          accessToken,
        });
      },

      setLoading: (value) => {
        set({
          isLoading: value,
        });
      },

      setHydrated: (value) => {
        set({
          hydrated: value,
        });
      },

      clearAuth: () => {
        set({
          user: null,
          accessToken: null,
          isAuthenticated: false,
          isLoading: false,
        });
      },

      logout: () => {
        set({
          user: null,
          accessToken: null,
          isAuthenticated: false,
          isLoading: false,
        });
      },
    }),
    {
      name: "auth-storage",

      onRehydrateStorage: () => {
        return (state) => {
          state?.setHydrated(true);
          state?.setLoading(false);
        };
      },
    },
  ),
);