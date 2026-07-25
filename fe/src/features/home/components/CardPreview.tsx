import Image from "next/image";

export default function CardPreview() {
  return (
    <section className="bg-pink-50 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <Image
          src="/images/logo.png"
          alt="Card"
          width={700}
          height={500}
          className="mx-auto"
        />

        <div>
          <h2 className="text-4xl font-bold">Bộ thẻ Cộng Đồng Bầu</h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Chỉ với vài bước kích hoạt, bạn có thể bắt đầu sử dụng thẻ để nhận
            ưu đãi, đổi quà và tham gia các chương trình dành riêng cho mẹ bầu
            và gia đình.
          </p>
        </div>
      </div>
    </section>
  );
}
