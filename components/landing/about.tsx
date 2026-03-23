"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
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
      {/* Background Effect */}
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            Quem Somos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
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
            <p className="text-lg text-muted-foreground leading-relaxed">
              A A2F nasceu com a missão de impulsionar o esporte e a cultura no Brasil, conectando marcas, pessoas e projetos que transformam vidas.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos especialistas em criar pontes eficientes entre empresas e iniciativas sociais, oferecendo caminhos simples, seguros e altamente vantajosos para utilizar incentivos fiscais de forma estratégica.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos um time dedicado a oferecer atendimento personalizado, alinhando objetivos de empresas e pessoas físicas a projetos certificados que promovem impacto real na sociedade — sempre com simplicidade, agilidade e transparência.
            </p>
          </motion.div>

          {/* Founders Cards */}
          <div className="space-y-6">
            {/* Adriano Ferreira */}
            <motion.div
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              className="glass-card rounded-2xl p-6 shadow-3d transition-all duration-300"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Adriano Ferreira
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Com a liderança de Adriano Ferreira, um dos maiores nomes do esporte nacional, trazemos a vivência, credibilidade e disciplina do ambiente esportivo para dentro do processo de captação. Sua trajetória inspira nossa atuação transparente, humana e focada em resultados.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Abner H. Ferreira */}
            <motion.div
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02, rotateY: -2 }}
              className="glass-card rounded-2xl p-6 shadow-3d transition-all duration-300"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Abner H. Ferreira
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ao lado dele, compõe nossa sociedade Abner H. Ferreira, especialista tributário com sólida carreira em grandes multinacionais. Ele leva à A2F a profundidade técnica necessária para garantir segurança jurídica, conformidade e excelência na formalização e execução de patrocínios incentivados.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Values Icons */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
        >
          {[
            { icon: Target, title: "Missão", desc: "Impulsionar o esporte e a cultura no Brasil" },
            { icon: Users, title: "Conexão", desc: "Marcas, pessoas e projetos transformadores" },
            { icon: Shield, title: "Confiança", desc: "Segurança jurídica e transparência total" },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card rounded-xl p-6 text-center shadow-3d transition-all duration-300"
            >
              <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
