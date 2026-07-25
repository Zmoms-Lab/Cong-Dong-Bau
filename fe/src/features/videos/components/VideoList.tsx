import type { Video } from "@/features/videos/types";
import VideoItem from "./VideoItem";

interface VideoListProps {
  videos: Video[];
}

export default function VideoList({ videos }: VideoListProps) {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <VideoItem key={video._id} video={video} />
      ))}
    </section>
  );
}
