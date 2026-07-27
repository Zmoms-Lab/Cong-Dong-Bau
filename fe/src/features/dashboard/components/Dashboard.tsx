import WelcomeSection from "./WelcomeSection";
import MyCards from "./MyCards";
import FeaturedVideos from "./FeaturedVideos";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <WelcomeSection />

        <MyCards />

        <FeaturedVideos />
      </div>
    </main>
  );
}
