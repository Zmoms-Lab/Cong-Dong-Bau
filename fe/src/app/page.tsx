import { Hero, Features, CardPreview, CTA } from "@/features/home";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features />
        <CardPreview />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
