"use client";

import { KeyRound, Check, Mail, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/routes";

export default function ActivateForm() {
  const router = useRouter();

  const handleActivate = () => {
    // Chưa xử lý chức năng
    router.push(ROUTES.CARDS);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Kích hoạt tài khoản
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Nhập mã kích hoạt và tạo tài khoản của bạn
          </p>
        </div>

        {/* Activation Code */}
        <div className="relative mb-4">
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
              outline-none
              focus:border-pink-400
            "
          />
        </div>

        {/* Email */}
        <div className="relative mb-4">
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
              outline-none
              focus:border-pink-400
            "
          />
        </div>

        {/* Password */}
        <div className="relative mb-4">
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

        {/* Confirm Password */}
        <div className="relative mb-6">
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
              outline-none
              focus:border-pink-400
            "
          />
        </div>

        {/* Submit */}
        <button
          onClick={handleActivate}
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
          Kích hoạt tài khoản
          <Check size={18} />
        </button>
      </div>
    </div>
  );
}
