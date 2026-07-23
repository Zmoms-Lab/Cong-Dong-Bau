import VideoItem from "./VideoItem";
import { Video } from "@/types";

interface VideoListProps {
  videos: Video[];
}

export default function VideoList({ videos }: VideoListProps) {
  return (
    <div>
      {videos.map((video) => (
        <VideoItem
          key={video._id}
          title={video.title}
          thumbnail={video.thumbnail}
          videoUrl={video.videoUrl}
        />
      ))}
    </div>
  );
}
