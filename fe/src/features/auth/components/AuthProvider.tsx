"use client";

import { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";

import { useAuthStore } from "@/store/auth.store";

import { authService } from "../services/auth.service";

interface Props {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: Props) {
  const user = useAuthStore((state) => state.user);

  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  const setUser = useAuthStore((state) => state.setUser);

  const clearAuth = useAuthStore((state) => state.clearAuth);

  const setLoading = useAuthStore((state) => state.setLoading);

  const query = useQuery({
    queryKey: ["auth-init"],

    enabled: !user,

    queryFn: async () => {
      const refresh = await authService.refresh();

      setAccessToken(refresh.accessToken);

      const me = await authService.me();

      return me;
    },

    retry: false,
  });

  useEffect(() => {
    if (query.data?.user) {
      setUser(query.data.user);
    }

    if (query.isError) {
      clearAuth();
    }

    if (!query.isLoading) {
      setLoading(false);
    }
  }, [
    query.data,
    query.isError,
    query.isLoading,
    setUser,
    clearAuth,
    setLoading,
  ]);

  return children;
}
