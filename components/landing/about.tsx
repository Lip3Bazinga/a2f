"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Users, Shield } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="quem-somos" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase text-primary font-sans font-semibold mb-4">Nossa Historia</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 text-gradient">
            Quem Somos
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Main Content */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              A A2F nasceu com a missao de impulsionar o esporte e a cultura no Brasil, conectando marcas, pessoas e projetos que transformam vidas.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Somos especialistas em criar pontes eficientes entre empresas e iniciativas sociais, oferecendo caminhos simples, seguros e altamente vantajosos para utilizar incentivos fiscais de forma estrategica.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Somos um time dedicado a oferecer atendimento personalizado, alinhando objetivos de empresas e pessoas fisicas a projetos certificados que promovem impacto real na sociedade — sempre com simplicidade, agilidade e transparencia.
            </p>
          </motion.div>

          {/* Founders Cards */}
          <div className="space-y-6">
            <motion.div
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card rounded-2xl p-6 shadow-3d hover:shadow-glow hover:border-primary/30 transition-all duration-500 ease-out"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-normal text-foreground mb-2">
                    Adriano Ferreira
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Com a lideranca de Adriano Ferreira, um dos maiores nomes do esporte nacional, trazemos a vivencia, credibilidade e disciplina do ambiente esportivo para dentro do processo de captacao.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-card rounded-2xl p-6 shadow-3d hover:shadow-glow hover:border-primary/30 transition-all duration-500 ease-out"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-normal text-foreground mb-2">
                    Abner H. Ferreira
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Especialista tributario com solida carreira em grandes multinacionais, leva a A2F a profundidade tecnica necessaria para garantir seguranca juridica, conformidade e excelencia na formalizacao de patrocinios incentivados.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Values */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
        >
          {[
            { icon: Target, title: "Missao", desc: "Impulsionar o esporte e a cultura no Brasil" },
            { icon: Users, title: "Conexao", desc: "Marcas, pessoas e projetos transformadores" },
            { icon: Shield, title: "Confianca", desc: "Seguranca juridica e transparencia total" },
          ].map((item) => (
            <div
              key={item.title}
              className="glass-card rounded-xl p-6 text-center shadow-3d hover:shadow-glow hover:border-primary/30 transition-all duration-500 ease-out group"
            >
              <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-serif text-lg font-normal text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
