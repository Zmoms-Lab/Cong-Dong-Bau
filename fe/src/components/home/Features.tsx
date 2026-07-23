import { Gift, Smartphone, HeartHandshake } from "lucide-react";

const items = [
  {
    icon: Gift,
    title: "Nhận quà tặng",
    desc: "Đổi quà và nhận ưu đãi từ các đối tác.",
  },
  {
    icon: Smartphone,
    title: "Quản lý trực tuyến",
    desc: "Theo dõi thẻ và lịch sử sử dụng mọi lúc.",
  },
  {
    icon: HeartHandshake,
    title: "Đồng hành cùng mẹ",
    desc: "Tham gia các sự kiện và chương trình cộng đồng.",
  },
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Quyền lợi nổi bật</h2>

          <p className="mt-4 text-gray-500">
            Một chiếc thẻ - nhiều tiện ích dành cho mẹ và bé.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <item.icon className="mb-6 h-10 w-10 text-pink-600" />

              <h3 className="text-xl font-semibold">{item.title}</h3>

              <p className="mt-3 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
