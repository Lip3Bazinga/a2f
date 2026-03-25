"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, User, Calendar, Sparkles } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

export function Plans() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="planos" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase text-accent font-sans font-semibold mb-4">Incentivos Fiscais</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 text-gradient">
            Planos de Incentivo
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empresas tributadas pelo Lucro Real podem destinar parte do Imposto de Renda devido diretamente para projetos incentivados — transformando obrigação fiscal em impacto positivo e visibilidade de marca.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Empresas */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 shadow-3d hover:shadow-glow-accent hover:border-accent/30 transition-all duration-500 ease-out"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-accent/10">
                <Building2 className="w-7 h-7 text-accent" />
              </div>
              <h4 className="font-serif text-2xl font-normal text-foreground">Empresas</h4>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/40">
                <span className="font-serif text-4xl font-normal text-accent min-w-[4rem]">4%</span>
                <span className="text-sm text-muted-foreground">do IR para projetos da Lei Rouanet</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/40">
                <span className="font-serif text-4xl font-normal text-accent min-w-[4rem]">2%</span>
                <span className="text-sm text-muted-foreground">para projetos da Lei de Incentivo ao Esporte (LIE)</span>
              </div>
            </div>
          </motion.div>

          {/* Pessoas Físicas */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-2xl p-8 shadow-3d hover:shadow-glow hover:border-primary/30 transition-all duration-500 ease-out"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <User className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-serif text-2xl font-normal text-foreground">Pessoas Físicas</h4>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/40">
                <span className="font-serif text-4xl font-normal text-primary min-w-[4rem]">6%</span>
                <span className="text-sm text-muted-foreground">do IR devido em ambos os mecanismos (Lei Rouanet e LIE)</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Future Changes */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card rounded-2xl p-8 shadow-3d mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-secondary/50">
              <Calendar className="w-7 h-7 text-foreground" />
            </div>
            <div>
              <h4 className="font-serif text-xl font-normal text-foreground">A partir de 2028</h4>
              <p className="text-sm text-muted-foreground">Novos limites da LIE</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/40">
              <span className="font-serif text-4xl font-normal text-accent min-w-[4rem]">3%</span>
              <span className="text-sm text-muted-foreground">para empresas</span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/40">
              <span className="font-serif text-4xl font-normal text-primary min-w-[4rem]">7%</span>
              <span className="text-sm text-muted-foreground">para pessoas físicas</span>
            </div>
          </div>
        </motion.div>

        {/* Custom Projects */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3 mb-4 border-accent/20">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Projetos Personalizados</span>
          </div>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Também desenvolvemos projetos regionais e personalizados, ideais para posicionamento de marca, ativação institucional e fortalecimento de imagem corporativa.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
