const videos = [
  "Dinh dưỡng thai kỳ quan trọng",
  "Chuẩn bị trước khi sinh",
  "Massage cho bé sơ sinh",
];

export default function FeaturedVideos() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-gray-900">Video đề xuất</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {videos.map((video) => (
          <div
            key={video}
            className="overflow-hidden rounded-2xl bg-white shadow-sm"
          >
            <div className="flex h-40 items-center justify-center bg-gray-200">
              <span className="text-4xl">▶</span>
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-gray-900">{video}</h3>

              <button className="mt-4 text-sm font-medium text-pink-600">
                Xem ngay
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
