"use client";

import { Check, KeyRound, Lock, Mail } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { useRouter } from "next/navigation";

export default function ActivateForm() {
  const router = useRouter();

  const handleActivate = (e: React.FormEvent) => {
    e.preventDefault();

    router.push(ROUTES.CARDS);
  };

  return (
    <div className="flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Kích hoạt tài khoản
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Nhập mã kích hoạt để tạo tài khoản
          </p>
        </div>

        <form onSubmit={handleActivate} className="space-y-4">
          {/* Activation Code */}
          <div className="relative">
            <KeyRound
              className="absolute left-3 top-3.5 text-gray-400"
              size={20}
            />

            <input
              type="text"
              placeholder="Mã kích hoạt"
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

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-gray-400" size={20} />

            <input
              type="email"
              placeholder="Email đăng ký"
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

          {/* Confirm Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-gray-400" size={20} />

            <input
              type="password"
              placeholder="Nhập lại mật khẩu"
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

          <button
            type="submit"
            className="
              mt-4
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
            Kích hoạt tài khoản
            <Check size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
