import { Navigation } from "./components/navigation";
import { HowItWorks } from "./components/HowItWorks";
import Features from "./components/Features";
import { Download } from "./components/Download";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <Hero />
      <section id="Features">
        <Features />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <Download />
      <Footer />
    </div>
  );
}
