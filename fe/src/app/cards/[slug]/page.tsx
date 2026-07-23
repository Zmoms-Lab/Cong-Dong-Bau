import { cards } from "@/constants/cards";

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

  return <main></main>;
}
