"use client";

import { ArrowRight, Lock, Mail } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    router.push(ROUTES.CARDS);
  };

  return (
    <div className="flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Đăng nhập</h1>

          <p className="mt-2 text-sm text-gray-500">
            Nhập thông tin để tiếp tục
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-gray-400" size={20} />

            <input
              type="text"
              placeholder="Email hoặc số điện thoại"
              className="
                w-full
                rounded-xl
                border
                border-gray-200
                py-3
                pl-10
                pr-4
                text-sm
                outline-none
                transition
                focus:border-pink-400
              "
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-gray-400" size={20} />

            <input
              type="password"
              placeholder="Mật khẩu"
              className="
                w-full
                rounded-xl
                border
                border-gray-200
                py-3
                pl-10
                pr-4
                text-sm
                outline-none
                transition
                focus:border-pink-400
              "
            />
          </div>

          {/* Forgot password */}
          <div className="text-right">
            <button
              type="button"
              className="
                text-sm
                text-pink-500
                hover:text-pink-600
              "
            >
              Quên mật khẩu?
            </button>
          </div>

          <button
            type="submit"
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-pink-500
              py-3
              font-medium
              text-white
              transition
              hover:bg-pink-600
            "
          >
            Đăng nhập
            <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
