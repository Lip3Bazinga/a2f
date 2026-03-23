"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Trophy, 
  Music, 
  Bike, 
  Gamepad2, 
  PartyPopper, 
  Users,
  ExternalLink 
} from "lucide-react"

const experiences = [
  { icon: Trophy, title: "Torneios de tênis" },
  { icon: Users, title: "Corridas de rua" },
  { icon: Bike, title: "Eventos de ciclismo" },
  { icon: Gamepad2, title: "E-sports" },
  { icon: Music, title: "Shows musicais" },
  { icon: PartyPopper, title: "Eventos corporativos e personalizados" },
]

const partners = [
  { name: "Esperança do Amanhã", url: "https://esperancadoamanha.com.br/" },
  { name: "ACJAM", url: "https://acjam.com.br/" },
  { name: "Instituto Sempre Amigos", url: "https://www.institutosempreamigos.com.br/" },
  { name: "Love Brand Makers", url: "https://lovebrandmakers.com.br" },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projetos" className="py-24 sm:py-32 relative" ref={ref}>
      {/* Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
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
            Projetos e Produtos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <h3 className="text-xl sm:text-2xl text-foreground font-medium mb-4">
            Projetos e Experiências que Conectam Marcas e Pessoas
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A A2F oferece acesso a uma curadoria de projetos esportivos e culturais certificados, além da criação de produtos exclusivos.
          </p>
        </motion.div>

        {/* Experiences Grid */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card rounded-xl p-4 text-center shadow-3d transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-3">
                <exp.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">{exp.title}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners Section */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card rounded-2xl p-8 lg:p-12 shadow-3d"
        >
          <h4 className="text-xl font-semibold text-foreground mb-6 text-center">
            Parceiros Renomados
          </h4>
          <p className="text-muted-foreground text-center mb-8 leading-relaxed">
            Trabalhamos com parceiros renomados, garantindo credibilidade e impacto ampliado.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partners.map((partner, index) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-all duration-300 group"
              >
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {partner.name}
                </span>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>

          <p className="text-muted-foreground text-center mt-8 leading-relaxed">
            Criamos experiências que fortalecem marcas, aproximam comunidades e geram resultados duradouros.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
