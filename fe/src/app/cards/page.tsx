import { getAllCards } from "@/services/card.service";
import { Card } from "@/types/card";

export default async function CardsPage() {
  const response = await getAllCards();

  const cards: Card[] = response.data || [];

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Danh sách bộ thẻ</h1>

      {cards.length === 0 ? (
        <p>Chưa có bộ thẻ nào</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card._id} className="border rounded-xl p-4 shadow-sm">
              <h2 className="text-lg font-semibold">{card.title}</h2>

              <p className="text-gray-500 mt-2">{card.description}</p>

              <p className="mt-3 text-sm">Slug: {card.slug}</p>

              <p className="text-sm">Video: {card.videos?.length || 0}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
