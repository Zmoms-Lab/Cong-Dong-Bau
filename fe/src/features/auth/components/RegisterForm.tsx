"use client";

import { Check, KeyRound, Lock, Mail, User, Phone } from "lucide-react";
import Image from "next/image";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema } from "../schemas";

import { z } from "zod";

import { useRegister } from "../hooks/useAuth";

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const registerMutation = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      key: "",
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log("REGISTER DATA:", data);

    registerMutation.mutate(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#FFF8FB] via-white to-[#FFF5F8] px-6">
      <div className="w-full max-w-md rounded-3xl border border-pink-100 bg-white p-8 shadow-xl shadow-pink-100/40">
        <div className="mb-8 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-50 overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-slate-900">Tạo tài khoản</h1>

          <p className="mt-2 text-sm text-slate-500">
            Nhập thông tin để kích hoạt tài khoản
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="relative">
            <KeyRound
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />

            <input
              {...register("key")}
              placeholder="Mã kích hoạt"
              className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm outline-none focus:border-pink-400"
            />
          </div>

          <div className="relative">
            <User
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />

            <input
              {...register("name")}
              placeholder="Họ và tên"
              className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm outline-none focus:border-pink-400"
            />
          </div>

          <div className="relative">
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />

            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm outline-none focus:border-pink-400"
            />
          </div>

          <div className="relative">
            <Phone
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />

            <input
              {...register("phone")}
              placeholder="Số điện thoại"
              className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm outline-none focus:border-pink-400"
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
              className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm outline-none focus:border-pink-400"
            />
          </div>

          <div className="relative">
            <Lock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />

            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="Nhập lại mật khẩu"
              className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm outline-none focus:border-pink-400"
            />
          </div>

          {Object.keys(errors).length > 0 && (
            <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {Object.entries(errors).map(([key, error]) => (
                <div key={key}>{error.message}</div>
              ))}
            </div>
          )}

          {registerMutation.isError && (
            <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              Đăng ký thất bại.
            </div>
          )}

          <button
            disabled={registerMutation.isPending}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-pink-500 font-semibold text-white hover:bg-pink-600 disabled:opacity-50"
          >
            {registerMutation.isPending
              ? "Đang tạo tài khoản..."
              : "Kích hoạt tài khoản"}

            {!registerMutation.isPending && <Check size={18} />}
          </button>
        </form>
      </div>
    </div>
  );
}
