import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { About } from "@/components/landing/about"
import { Services } from "@/components/landing/services"
import { Projects } from "@/components/landing/projects"
import { Alcance } from "@/components/landing/alcance"
import { Plans } from "@/components/landing/plans"
import { SocialImpact } from "@/components/landing/social-impact"
import { FAQ } from "@/components/landing/faq"
import { ContactForm } from "@/components/landing/contact-form"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="bg-white w-full flex flex-col">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Alcance />
      <Plans />
      <SocialImpact />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}
