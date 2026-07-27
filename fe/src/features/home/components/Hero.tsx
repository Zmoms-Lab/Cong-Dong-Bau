"use client";

import Image from "next/image";
import Link from "next/link";

import { ROUTES } from "@/constants/routes";
import { useAuthStore } from "@/store/auth.store";

export default function Hero() {
  const user = useAuthStore((state) => state.user);

  return (
    <section className="bg-gradient-to-br from-pink-50 to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2">
        <div>
          <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
            Cộng Đồng Bầu
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
            Bộ thẻ dành cho
            <br />
            <span className="text-pink-600">Mẹ bầu & Gia đình</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Kích hoạt thẻ để nhận quà, tham gia sự kiện, tích lũy quyền lợi và
            đồng hành cùng Cộng Đồng Bầu trong hành trình chăm sóc mẹ và bé.
          </p>

          {user ? (
            <div className="mt-10">
              <p className="mb-5 text-lg font-medium text-gray-700">
                Xin chào{" "}
                <span className="font-semibold text-pink-600">{user.name}</span>
                👋
              </p>

              <Link
                href={ROUTES.DASHBOARD}
                className="inline-flex rounded-xl bg-pink-600 px-8 py-4 font-semibold text-white hover:bg-pink-700"
              >
                Mẹ và bé cùng học
              </Link>
            </div>
          ) : (
            <div className="mt-10 flex gap-4">
              <Link
                href={ROUTES.ACTIVATE}
                className="rounded-xl bg-pink-600 px-8 py-4 font-semibold text-white hover:bg-pink-700"
              >
                Kích hoạt thẻ
              </Link>

              <Link
                href={ROUTES.LOGIN}
                className="rounded-xl border border-pink-600 px-8 py-4 font-semibold text-pink-600 hover:bg-pink-50"
              >
                Đăng nhập
              </Link>
            </div>
          )}
        </div>

        <Image
          src="/images/banner.png"
          alt="Banner"
          width={900}
          height={700}
          className="rounded-3xl shadow-xl"
        />
      </div>
    </section>
  );
}
