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
      {/* Background Effect */}
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            Planos de Incentivo
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <h3 className="text-xl sm:text-2xl text-foreground font-medium mb-4">
            Oportunidades Exclusivas
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Empresas tributadas pelo Lucro Real podem destinar parte do Imposto de Renda devido diretamente para projetos incentivados — transformando obrigação fiscal em impacto positivo e visibilidade social.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Empresas Card */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02, rotateY: 2 }}
            className="glass-card rounded-2xl p-8 shadow-3d transition-all duration-300"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-primary/10">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-2xl font-semibold text-foreground">Empresas</h4>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30">
                <span className="text-3xl font-bold text-primary">4%</span>
                <span className="text-muted-foreground">do IR para projetos da Lei Rouanet</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30">
                <span className="text-3xl font-bold text-primary">2%</span>
                <span className="text-muted-foreground">para projetos da Lei de Incentivo ao Esporte (LIE)</span>
              </div>
            </div>
          </motion.div>

          {/* Pessoas Físicas Card */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02, rotateY: -2 }}
            className="glass-card rounded-2xl p-8 shadow-3d transition-all duration-300"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-primary/10">
                <User className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-2xl font-semibold text-foreground">Pessoas Físicas</h4>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30">
                <span className="text-3xl font-bold text-primary">6%</span>
                <span className="text-muted-foreground">do IR devido em ambos os mecanismos (Lei Rouanet e LIE)</span>
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
          className="glass-card rounded-2xl p-8 shadow-3d shadow-glow mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-xl bg-primary/20">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-foreground">A partir de 2028</h4>
              <p className="text-muted-foreground">Novos limites da LIE</p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30">
              <span className="text-3xl font-bold text-primary">3%</span>
              <span className="text-muted-foreground">para empresas</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30">
              <span className="text-3xl font-bold text-primary">7%</span>
              <span className="text-muted-foreground">para pessoas físicas</span>
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
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">Projetos Personalizados</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Também desenvolvemos projetos regionais e personalizados, ideais para posicionamento de marca, ativação institucional e fortalecimento de imagem corporativa.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
