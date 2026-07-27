"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/auth.store";

import { ROUTES } from "@/constants/routes";

interface Props {
  children: React.ReactNode;
}

export default function RequireAuth({ children }: Props) {
  const router = useRouter();

  const { user, hydrated } = useAuthStore();

  useEffect(() => {
    if (hydrated && !user) {
      router.replace(ROUTES.HOME);
    }
  }, [hydrated, user, router]);

  if (!hydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-slate-500">Đang kiểm tra tài khoản...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return children;
}
