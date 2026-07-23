import {
  Navbar,
  Hero,
  Features,
  CardPreview,
  CTA,
  Footer,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CardPreview />
      <CTA />
      <Footer />
    </>
  );
}
