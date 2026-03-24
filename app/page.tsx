import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { About } from "@/components/landing/about"
import { Services } from "@/components/landing/services"
import { Projects } from "@/components/landing/projects"
import { Plans } from "@/components/landing/plans"
import { SocialImpact } from "@/components/landing/social-impact"
import { FAQ } from "@/components/landing/faq"
import { ContactForm } from "@/components/landing/contact-form"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Plans />
      <SocialImpact />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}
