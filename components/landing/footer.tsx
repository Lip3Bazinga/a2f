"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight, Globe } from "lucide-react"
import Link from "next/link"
import { Logo } from "./logo"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const navLinks = [
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
]

const serviceLinks = [
  { label: "Projetos Federais", href: "#servicos" },
  { label: "Projetos Regionais", href: "#servicos" },
  { label: "Consultoria Empresarial", href: "#servicos" },
  { label: "Rede de Relacionamento", href: "#servicos" },
  { label: "Palestras e Treinamentos", href: "#servicos" },
]

const legalLinks = [
  { label: "Política de Privacidade", href: "#" },
  { label: "Termos de Uso", href: "#" },
  { label: "Cookies", href: "#" },
]

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer className="pt-20 pb-10 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-accent/3 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            {/* Logo - Horizontal version */}
            <div className="mb-6">
              <Logo 
                variant="horizontal" 
                color="color" 
                linkTo="/"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Transformando incentivo fiscal em impacto social. Conectamos empresas a projetos culturais, esportivos e sociais aprovados nas leis de incentivo brasileiras.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-accent/10 hover:bg-accent/20 transition-colors duration-300 border border-accent/15"
                aria-label="Facebook A2F"
              >
                <Facebook className="w-4 h-4 text-accent" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-accent/10 hover:bg-accent/20 transition-colors duration-300 border border-accent/15"
                aria-label="Instagram A2F"
              >
                <Instagram className="w-4 h-4 text-accent" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors duration-300 border border-primary/15"
                aria-label="LinkedIn A2F"
              >
                <Linkedin className="w-4 h-4 text-primary" />
              </a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xs tracking-widest uppercase text-accent font-semibold mb-5">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xs tracking-widest uppercase text-primary font-semibold mb-5">Serviços</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-xs tracking-widest uppercase text-accent font-semibold mb-5">Contato</h4>
            <ul className="space-y-4 mb-6">
              <li>
                <a
                  href="mailto:contato@a2f.com.br"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-300 text-sm group"
                >
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300 flex-shrink-0">
                    <Mail className="w-3.5 h-3.5 text-accent" />
                  </div>
                  contato@a2f.com.br
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <Phone className="w-3.5 h-3.5 text-primary" />
                  </div>
                  +55 (XX) XXXX-XXXX
                </div>
              </li>
              <li>
                <a
                  href="https://www.a2f.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <Globe className="w-3.5 h-3.5 text-primary" />
                  </div>
                  www.a2f.com.br
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <div className="p-2 rounded-lg bg-secondary/30 flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-foreground" />
                  </div>
                  Brasil
                </div>
              </li>
            </ul>
            {/* Legal links */}
            <div className="space-y-2 pt-4 border-t border-border">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-xs text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-xs text-muted-foreground">
            {new Date().getFullYear()} A2F Incentive. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Empresa registrada e em conformidade com as leis de incentivo fiscal brasileiras.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
