import { Navigation } from './components/navigation'
import { Hero } from './components/hero'
import { Features } from './components/features'
import { HowItWorks } from './components/how-it-works'
import { Footer } from './components/footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <Hero />
      <section id="features">
        <Features />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <Footer />
    </div>
  )
}

