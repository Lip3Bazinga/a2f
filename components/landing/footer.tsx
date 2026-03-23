"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone, Globe, MapPin, Facebook, Instagram } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer className="py-16 sm:py-24 relative" ref={ref}>
      {/* Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Fale Conosco Card */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-6 shadow-3d"
          >
            <h3 className="text-xl font-semibold text-foreground mb-5">
              Fale Conosco
            </h3>
            <div className="space-y-4">
              <a 
                href="mailto:contato@a2f.com.br"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span>contato@a2f.com.br</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span>(XX) XXXXX-XXXX</span>
              </div>
              <a 
                href="https://www.a2f.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <span>www.a2f.com.br</span>
              </a>
            </div>
          </motion.div>

          {/* Telefone Card */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 shadow-3d"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="text-xs tracking-wider text-muted-foreground block mb-1">
                  TELEFONE
                </span>
                <span className="text-foreground font-medium">+55 (XX) XXXX-XXXX</span>
              </div>
            </div>
          </motion.div>

          {/* Localizacao Card */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-2xl p-6 shadow-3d"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="text-xs tracking-wider text-muted-foreground block mb-1">
                  LOCALIZACAO
                </span>
                <span className="text-foreground font-medium">Brasil</span>
              </div>
            </div>
          </motion.div>

          {/* Social Media Card */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-2xl p-6 shadow-3d"
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Redes Sociais
            </h3>
            <div className="flex gap-3">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Brand & Copyright */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center pt-8 border-t border-border"
        >
          <h3 className="text-3xl font-bold text-gradient mb-3">A2F</h3>
          <p className="text-muted-foreground text-sm max-w-md mx-auto mb-4">
            Transformando incentivo fiscal em impacto social.
          </p>
          <p className="text-xs text-muted-foreground">
            {new Date().getFullYear()} A2F Incentive. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
