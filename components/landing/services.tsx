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
    description: "Conectamos empresas e indivíduos a projetos aprovados pelo governo federal, apresentando oportunidades estratégicas de patrocínio com dedução fiscal e retorno de imagem.",
  },
  {
    icon: Building2,
    title: "Projetos Regionais",
    description: "Bem como oferecemos projetos aprovados por governos estaduais e municipais, que permitem também contribuições por meio de renúncia fiscal, de forma simples, segura e previsibilidade para o contribuinte.",
  },
  {
    icon: Handshake,
    title: "Consultoria Empresarial",
    description: "Estamos à disposição de empresas brasileiras de todos os segmentos, para ajudá-las na busca de parceiros do terceiro setor, que executam projetos e eventos por meio de recursos de incentivos fiscais.",
  },
  {
    icon: Network,
    title: "Rede de Relacionamento",
    description: "Nosso diferencial está em nossa rede de relacionamento nacional, que possibilita selecionar projetos alinhados aos valores e metas de cada patrocinador.",
  },
  {
    icon: Presentation,
    title: "Palestras e Treinamentos",
    description: "Além disso, realizamos palestras, treinamentos e consultorias, mostrando na prática como funcionam as contribuições incentivadas e como empresas podem se beneficiar imediatamente desse mecanismo.",
  },
  {
    icon: ClipboardCheck,
    title: "Acompanhamento Completo",
    description: "Acompanhamos todo o processo de execução e prestação de contas, assegurando tranquilidade total ao patrocinador.",
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
      {/* Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
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
            Serviços
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A A2F oferece soluções completas para empresas e pessoas físicas que desejam transformar parte do seu Imposto de Renda ou impostos estaduais e municipais em impacto social. Atuamos com projetos esportivos, culturais e iniciativas personalizadas de marketing e visibilidade institucional.
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
              className="glass-card rounded-2xl p-6 lg:p-8 shadow-3d group hover:shadow-glow hover:border-primary/30 transition-all duration-500 ease-out"
            >
              <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
