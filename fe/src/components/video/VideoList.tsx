import VideoItem from "./VideoItem";
import { Video } from "@/types/card";

interface VideoListProps {
  videos: Video[];
}

export default function VideoList({ videos }: VideoListProps) {
  return (
    <div>
      {videos.map((video) => (
        <VideoItem key={video.id} {...video} />
      ))}
    </div>
  );
}
