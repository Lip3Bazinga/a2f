"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/4 rounded-full blur-3xl" />
      </div>

      {/* Subtle floating shapes — brand movement pillar */}
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/5 w-20 h-20 glass-card rounded-2xl opacity-20"
      />
      <motion.div
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-1/6 w-14 h-14 glass-card rounded-xl opacity-20"
      />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-10 h-10 glass-card rounded-lg opacity-15"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Brand mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-serif text-6xl sm:text-8xl lg:text-9xl font-normal mb-4 text-gradient tracking-tight"
          >
            A2F
          </motion.h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-foreground mb-6 text-balance leading-snug"
        >
          Transformando Incentivo Fiscal em
          <span className="text-primary italic"> Impacto Social</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed font-sans"
        >
          Conectamos empresas e pessoas a projetos de esporte e cultura,
          criando pontes entre responsabilidade fiscal e transformacao social real.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#quem-somos"
            className="px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl shadow-glow transition-all duration-300 hover:shadow-lg hover:brightness-110 text-sm tracking-wide"
          >
            Conheca a A2F
          </a>
          <a
            href="#servicos"
            className="px-8 py-3.5 glass-card font-semibold rounded-xl transition-all duration-300 hover:border-primary/30 hover:shadow-glow text-sm tracking-wide"
          >
            Nossos Servicos
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#quem-somos"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <span className="text-xs tracking-widest uppercase mb-2">Saiba mais</span>
          <ArrowDown size={16} />
        </motion.a>
      </motion.div>
    </section>
  )
}
