import Hero from '@/components/Hero'
import About from '@/components/About'
import Foundation from '@/components/Foundation'
import WhyChooseUs from '@/components/WhyChooseUs'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-body">
      <Hero />
      <About />
      <Foundation />
      <WhyChooseUs />
      <Services />
      <Projects />
      <CTASection />
      <Footer />
    </main>
  )
}
