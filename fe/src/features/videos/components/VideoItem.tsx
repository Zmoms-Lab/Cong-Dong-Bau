import Image from "next/image";
import type { Video } from "@/features/videos/types";

interface VideoItemProps {
  video: Video;
}

export default function VideoItem({ video }: VideoItemProps) {
  return (
    <article className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
        <Image
          src={video.thumbnail || "/images/banner.png"}
          alt={video.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="line-clamp-2 text-lg font-semibold text-gray-900">
          {video.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm text-gray-500">
          {video.description}
        </p>

        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <span>{video.brand || "Cộng Đồng Bầu"}</span>

          <span>{video.viewCount} lượt xem</span>
        </div>

        <a
          href={video.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-5
            inline-flex
            rounded-xl
            bg-pink-500
            px-5
            py-2.5
            text-sm
            font-medium
            text-white
            transition
            hover:bg-pink-600
          "
        >
          Xem video
        </a>
      </div>
    </article>
  );
}
