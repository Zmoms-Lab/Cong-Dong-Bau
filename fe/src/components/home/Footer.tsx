import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-6 text-center">
        <Image
          src="/images/logo.png"
          alt="Cộng Đồng Bầu"
          width={100}
          height={100}
          className="h-20 w-20 object-contain"
        />

        <p className="text-gray-500">
          © 2026 Cộng Đồng Bầu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
