import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl rounded-[40px] bg-pink-600 px-10 py-16 text-center text-white">
        <h2 className="text-4xl font-bold">Bắt đầu ngay hôm nay</h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg opacity-90">
          Kích hoạt thẻ để trải nghiệm toàn bộ quyền lợi từ Cộng Đồng Bầu.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/activate"
            className="rounded-xl bg-white px-8 py-4 font-semibold text-pink-600"
          >
            Kích hoạt thẻ
          </Link>

          <Link
            href="/login"
            className="rounded-xl border border-white px-8 py-4 font-semibold"
          >
            Đăng nhập
          </Link>
        </div>
      </div>
    </section>
  );
}
