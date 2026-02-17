import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Testimonials } from '@/components/testimonials'
import { Signup } from '@/components/signup'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <Hero />
        <section id="features">
          <Features />
        </section>
        {/* <Testimonials /> */}
        <section id="signup">
          <Signup />
        </section>
      </div>
      <Footer />
    </main>
  )
}
