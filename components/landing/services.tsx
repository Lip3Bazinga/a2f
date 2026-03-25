"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Landmark,
  Building2,
  Handshake,
  Network,
  Presentation,
  ClipboardCheck
} from "lucide-react"

const services = [
  {
    icon: Landmark,
    title: "Projetos Federais",
    description: "Conectamos empresas e individuos a projetos aprovados pelo governo federal, apresentando oportunidades estrategicas de patrocinio com deducao fiscal e retorno de imagem.",
  },
  {
    icon: Building2,
    title: "Projetos Regionais",
    description: "Oferecemos projetos aprovados por governos estaduais e municipais, que permitem contribuicoes por meio de renuncia fiscal, de forma simples, segura e com previsibilidade.",
  },
  {
    icon: Handshake,
    title: "Consultoria Empresarial",
    description: "Assessoramos empresas de todos os segmentos na busca de parceiros do terceiro setor que executam projetos por meio de recursos de incentivos fiscais.",
  },
  {
    icon: Network,
    title: "Rede de Relacionamento",
    description: "Nosso diferencial esta em nossa rede de relacionamento nacional, que possibilita selecionar projetos alinhados aos valores e metas de cada patrocinador.",
  },
  {
    icon: Presentation,
    title: "Palestras e Treinamentos",
    description: "Realizamos palestras, treinamentos e consultorias, mostrando na pratica como funcionam as contribuicoes incentivadas e como empresas podem se beneficiar imediatamente.",
  },
  {
    icon: ClipboardCheck,
    title: "Acompanhamento Completo",
    description: "Acompanhamos todo o processo de execucao e prestacao de contas, assegurando tranquilidade total ao patrocinador.",
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicos" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase text-accent font-sans font-semibold mb-4">O que fazemos</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 text-gradient">
            Servicos
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A A2F oferece solucoes completas para empresas e pessoas fisicas que desejam transformar parte do seu Imposto de Renda em impacto social, com curadoria estrategica e gestao completa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass-card rounded-2xl p-6 lg:p-8 shadow-3d group hover:shadow-glow-accent hover:border-accent/30 transition-all duration-500 ease-out"
            >
              <div className="inline-flex p-4 rounded-xl bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-normal text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
