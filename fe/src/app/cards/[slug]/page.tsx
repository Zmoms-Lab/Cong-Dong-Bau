import { cards } from "@/constants/cards";
import CardDetail from "@/components/card/CardDetail";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function CardDetailPage({ params }: PageProps) {
  const card = cards.find((item) => item.slug === params.slug);

  if (!card) {
    return (
      <main>
        <h1>Không tìm thấy thẻ</h1>
      </main>
    );
  }

  return (
    <main>
      <CardDetail
        title={card.title}
        image={card.image}
        description={card.description}
        benefits={card.benefits}
        videos={card.videos}
      />
    </main>
  );
}
