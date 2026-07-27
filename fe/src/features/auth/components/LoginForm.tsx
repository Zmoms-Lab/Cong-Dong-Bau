"use client";

import { ArrowRight, Lock, Mail } from "lucide-react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "../schemas";

import { z } from "zod";

import { useLogin } from "../hooks/useAuth";

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const loginMutation = useLogin();

  const { register, handleSubmit } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#FFF8FB] via-white to-[#FFF5F8] px-6">
      <div className="w-full max-w-md rounded-3xl border border-pink-100 bg-white p-8 shadow-xl shadow-pink-100/40">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Đăng nhập</h1>

          <p className="mt-2 text-sm text-slate-500">
            Tiếp tục sử dụng tài khoản của bạn
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="relative">
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />

            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4"
            />
          </div>

          <div className="relative">
            <Lock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />

            <input
              {...register("password")}
              type="password"
              placeholder="Mật khẩu"
              className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4"
            />
          </div>

          {loginMutation.isError && (
            <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              Email hoặc mật khẩu không đúng.
            </div>
          )}

          <button
            disabled={loginMutation.isPending}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-pink-500 font-semibold text-white hover:bg-pink-600 disabled:opacity-50"
          >
            {loginMutation.isPending ? "Đang đăng nhập..." : "Đăng nhập"}

            {!loginMutation.isPending && <ArrowRight size={18} />}
          </button>
        </form>
      </div>
    </div>
  );
}
