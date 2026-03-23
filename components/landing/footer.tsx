"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

const navLinks = [
  { label: "Quem Somos", href: "#sobre" },
  { label: "Servicos", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
]

const legalLinks = [
  { label: "Politica de Privacidade", href: "#" },
  { label: "Termos de Uso", href: "#" },
  { label: "Cookies", href: "#" },
]

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer className="py-16 sm:py-20 relative" ref={ref}>
      {/* Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h3 className="text-3xl font-bold text-gradient mb-4">A2F</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transformando incentivo fiscal em impacto social. Conectamos empresas a projetos culturais, esportivos e sociais aprovados nas leis de incentivo.
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors border border-primary/20"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors border border-primary/20"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors border border-primary/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </motion.a>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-foreground font-semibold mb-5">Navegacao</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-foreground font-semibold mb-5">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:contato@a2f.com.br"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span>contato@a2f.com.br</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span>+55 (XX) XXXX-XXXX</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span>Brasil</span>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-foreground font-semibold mb-5">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-card/50 border border-border">
              <p className="text-xs text-muted-foreground">
                Empresa registrada e em conformidade com as leis de incentivo fiscal brasileiras.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-muted-foreground text-center md:text-left">
            {new Date().getFullYear()} A2F Incentive. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Desenvolvido com compromisso e transparencia.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
