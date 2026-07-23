import CardItem from "./CardItem";
import { cards } from "@/constants/cards";

export default function CardList() {
  return (
    <section>
      {cards.map((card) => (
        <CardItem
          key={card.id}
          title={card.title}
          image={card.image}
          description={card.description}
          slug={card.slug}
        />
      ))}
    </section>
  );
}
