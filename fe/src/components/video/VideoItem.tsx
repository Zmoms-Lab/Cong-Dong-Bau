interface Props {
  title: string;
  thumbnail: string;
  videoUrl: string;
}

export default function VideoItem({ title, thumbnail, videoUrl }: Props) {
  return (
    <div>
      <img src={thumbnail} alt={title} />

      <h3>{title}</h3>

      <a href={videoUrl}>Xem video</a>
    </div>
  );
}
