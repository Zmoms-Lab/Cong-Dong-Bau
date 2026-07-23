"use client";

import { Mail, Lock, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/routes";

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = () => {
    // Chưa xử lý login
    router.push(ROUTES.CARDS);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Đăng nhập</h1>

          <p className="mt-2 text-sm text-gray-500">
            Nhập thông tin để tiếp tục
          </p>
        </div>

        <div className="space-y-4">
          {/* Email / Phone */}
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
                outline-none
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
                outline-none
                focus:border-pink-400
              "
            />
          </div>

          {/* Forgot password */}
          <div className="text-right">
            <button
              className="
                text-sm
                text-pink-500
                hover:text-pink-600
              "
            >
              Quên mật khẩu?
            </button>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="
              w-full
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-pink-500
              py-3
              text-white
              font-medium
              hover:bg-pink-600
              transition
            "
          >
            Đăng nhập
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
