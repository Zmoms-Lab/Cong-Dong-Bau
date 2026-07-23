import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Cộng Đồng Bầu"
            width={100}
            height={100}
            className="h-24 w-24 object-contain"
            priority
          />
        </Link>

        <nav className="flex gap-3">
          <Link
            href="/activate"
            className="rounded-xl bg-pink-600 px-5 py-2 text-white transition hover:bg-pink-700"
          >
            Kích hoạt thẻ
          </Link>

          <Link
            href="/login"
            className="rounded-xl border border-pink-600 px-5 py-2 text-pink-600 transition hover:bg-pink-50"
          >
            Đăng nhập
          </Link>
        </nav>
      </div>
    </header>
  );
}
