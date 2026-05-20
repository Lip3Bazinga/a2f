import dynamic from "next/dynamic"
import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"

const About = dynamic(() => import("@/components/landing/about").then(m => ({ default: m.About })))
const Services = dynamic(() => import("@/components/landing/services").then(m => ({ default: m.Services })))
const Projects = dynamic(() => import("@/components/landing/projects").then(m => ({ default: m.Projects })))
const Alcance = dynamic(() => import("@/components/landing/alcance").then(m => ({ default: m.Alcance })))
const Plans = dynamic(() => import("@/components/landing/plans").then(m => ({ default: m.Plans })))
const SocialImpact = dynamic(() => import("@/components/landing/social-impact").then(m => ({ default: m.SocialImpact })))
const FAQ = dynamic(() => import("@/components/landing/faq").then(m => ({ default: m.FAQ })))
const ContactForm = dynamic(() => import("@/components/landing/contact-form").then(m => ({ default: m.ContactForm })))
const Footer = dynamic(() => import("@/components/landing/footer").then(m => ({ default: m.Footer })))

export default function Home() {
  return (
    <main className="bg-white w-full">
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
