import VideoList from "@/components/video/VideoList";
import { Video } from "@/types/card";

interface CardDetailProps {
  title: string;
  image: string;
  description: string;
  benefits: string[];
  videos: Video[];
}

export default function CardDetail({
  title,
  image,
  description,
  benefits,
  videos,
}: CardDetailProps) {
  return (
    <article>
      <img src={image} alt={title} />

      <h1>{title}</h1>

      <p>{description}</p>

      <h2>Công dụng</h2>

      <ul>
        {benefits.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <section>
        <h2>Video hướng dẫn</h2>

        <VideoList videos={videos} />
      </section>
    </article>
  );
}
