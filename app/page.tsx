import { Navigation } from "./components/navigation";
import { HowItWorks } from "./components/HowItWorks";
import Features from "./components/features";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Download } from "lucide-react";

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
      <section id="download">
        <Download />
      </section>
      <Footer />
    </div>
  );
}
