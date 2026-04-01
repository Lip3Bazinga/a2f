"use client"

import { motion } from "framer-motion"
import { ArrowDown, Sparkles } from "lucide-react"
import { Logo } from "./logo"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Decorative Arc Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top right arc */}
        <div className="absolute -top-64 -right-64 w-[600px] h-[600px] rounded-full border-[80px] border-primary/5" />
        {/* Bottom left arc */}
        <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full border-[60px] border-purple/5" />
        {/* Center decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-[100px] border-accent/3" />
      </div>

      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-foreground/70">Incentivo Fiscal Inteligente</span>
        </motion.div>

        {/* Brand Logo - Stacked version, prominent display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="flex justify-center mb-8"
        >
          <Logo 
            variant="stacked" 
            color="color" 
            linkTo={undefined}
            showText={false}
            className="scale-150"
          />
        </motion.div>

        {/* Brand Name */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-serif text-7xl sm:text-8xl lg:text-9xl font-normal mb-2 text-gradient tracking-tight"
        >
          A2F
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-sm uppercase tracking-[0.3em] text-accent mb-8 font-medium"
        >
          Incentivos
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
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
          criando pontes entre responsabilidade fiscal e transformação social real.
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
            className="px-8 py-3.5 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl shadow-sm hover:shadow-glow-accent transition-all duration-300 hover:scale-[1.02] text-sm tracking-wide"
          >
            Conheça a A2F
          </a>
          <a
            href="#servicos"
            className="px-8 py-3.5 bg-background border border-border text-foreground font-semibold rounded-xl transition-all duration-300 hover:border-primary/50 hover:bg-secondary text-sm tracking-wide"
          >
            Nossos Serviços
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
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <span className="text-xs tracking-widest uppercase mb-2">Saiba mais</span>
          <ArrowDown size={16} />
        </motion.a>
      </motion.div>
    </section>
  )
}
