const cards = [
  {
    title: "Thai kỳ 3 tháng đầu",
    description: "Kiến thức chăm sóc mẹ và bé trong giai đoạn đầu.",
  },
  {
    title: "Thai kỳ 3 tháng giữa",
    description: "Dinh dưỡng và vận động an toàn cho mẹ bầu.",
  },
  {
    title: "Chăm sóc bé 6 tháng đầu",
    description: "Hành trình nuôi con khoa học.",
  },
];

export default function MyCards() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-gray-900">
        Khóa học của tôi
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="mb-4 h-32 rounded-xl bg-pink-100" />

            <h3 className="text-lg font-semibold text-gray-900">
              {card.title}
            </h3>

            <p className="mt-2 text-sm text-gray-500">{card.description}</p>

            <button className="mt-5 rounded-lg bg-pink-500 px-4 py-2 text-sm font-medium text-white">
              Xem khóa học
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
