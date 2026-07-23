interface CardItemProps {
  title: string;
  image: string;
  description: string;
  slug: string;
}

export default function CardItem({
  title,
  image,
  description,
  slug,
}: CardItemProps) {
  return (
    <article>
      <img src={image} alt={title} />

      <h2>{title}</h2>

      <p>{description}</p>

      <a href={`/cards/${slug}`}>Xem chi tiết</a>
    </article>
  );
}
