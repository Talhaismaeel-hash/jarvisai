import { LandingNav } from "@/components/landing/LandingNav";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Roadmap } from "@/components/landing/Roadmap";
import { CtaBand } from "@/components/landing/CtaBand";
import { Footer } from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <LandingNav />
      <Hero />
      <Features />
      <Roadmap />
      <CtaBand />
      <Footer />
    </main>
  );
}
