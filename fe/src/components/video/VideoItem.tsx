interface Props {
  title: string;
  thumbnail: string;
  url: string;
}

export default function VideoItem({ title, thumbnail, url }: Props) {
  return (
    <div>
      <img src={thumbnail} alt={title} />

      <h3>{title}</h3>

      <a href={url}>Xem video</a>
    </div>
  );
}
