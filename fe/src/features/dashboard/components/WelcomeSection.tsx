"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Lock, LogOut, User } from "lucide-react";

import { ROUTES } from "@/constants/routes";

export default function WelcomeSection() {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    // TODO:
    // 1. Clear access token
    // 2. Clear refresh token
    // 3. Reset user store
    // 4. Redirect login

    console.log("Logout");
  };

  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          <Image
            src="/images/logo.png"
            alt="Cộng Đồng Bầu"
            width={90}
            height={90}
            className="rounded-xl object-contain"
          />

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Xin chào, Mẹ Phát ❤️
            </h1>

            <p className="mt-2 text-gray-500">
              Chào mừng bạn quay trở lại Cộng Đồng Bầu. Hãy tiếp tục hành trình
              chăm sóc bé yêu.
            </p>
          </div>
        </div>

        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center gap-3 rounded-xl bg-pink-50 px-5 py-3 transition hover:bg-pink-100"
          >
            <div className="text-left">
              <p className="text-sm text-gray-500">Trạng thái tài khoản</p>

              <p className="font-semibold text-green-600">Đang hoạt động</p>
            </div>

            <ChevronDown
              size={18}
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>

          {open && (
            <div className="absolute right-0 z-50 mt-3 w-60 rounded-xl border bg-white p-2 shadow-lg">
              <Link
                href={ROUTES.PROFILE}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-50"
              >
                <User size={18} />

                <span>Thông tin cá nhân</span>
              </Link>

              <Link
                href={ROUTES.CHANGE_PASSWORD}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-50"
              >
                <Lock size={18} />

                <span>Đổi mật khẩu</span>
              </Link>

              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-red-600 transition hover:bg-red-50"
              >
                <LogOut size={18} />

                <span>Đăng xuất</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
