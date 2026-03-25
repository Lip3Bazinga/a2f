"use client"

import { motion } from "framer-motion"
import { ArrowDown, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/8 rounded-full blur-3xl" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/5 w-20 h-20 glass-card rounded-2xl opacity-30"
      />
      <motion.div
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-1/6 w-14 h-14 glass-card rounded-xl opacity-25"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-muted-foreground">Incentivo Fiscal Inteligente</span>
        </motion.div>

        {/* Brand Logo */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-serif text-7xl sm:text-8xl lg:text-9xl font-normal mb-6 text-gradient tracking-tight"
        >
          A2F
        </motion.h2>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-foreground mb-6 text-balance leading-snug"
        >
          Transformando Incentivo Fiscal em{" "}
          <span className="text-gradient-warm">Impacto Social</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed"
        >
          Conectamos empresas e pessoas a projetos de esporte e cultura,
          criando pontes entre responsabilidade fiscal e transformacao social real.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#quem-somos"
            className="px-8 py-3.5 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl shadow-glow-accent transition-all duration-300 hover:scale-[1.02] text-sm tracking-wide"
          >
            Conheca a A2F
          </a>
          <a
            href="#servicos"
            className="px-8 py-3.5 glass-card text-foreground font-semibold rounded-xl transition-all duration-300 hover:border-accent/30 text-sm tracking-wide"
          >
            Nossos Servicos
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#quem-somos"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="flex flex-col items-center text-muted-foreground hover:text-accent transition-colors duration-300"
        >
          <span className="text-xs tracking-widest uppercase mb-2">Saiba mais</span>
          <ArrowDown size={16} />
        </motion.a>
      </motion.div>
    </section>
  )
}
