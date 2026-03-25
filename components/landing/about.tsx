"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Target, Users, Lightbulb, Trophy, Briefcase, Linkedin, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

const founders = [
  {
    id: "adriano",
    name: "Adriano Ferreira",
    role: "Diretor Esportivo",
    image: "/images/adriano.jpg",
    shortBio: "Um dos maiores nomes do esporte nacional",
    fullBio: "Com a lideranca de Adriano Ferreira, um dos maiores nomes do esporte nacional, trazemos a vivencia, credibilidade e disciplina do ambiente esportivo para dentro do processo de captacao. Sua trajetoria como atleta de alto rendimento e sua visao estrategica de mercado permitem criar conexoes autenticas entre marcas e projetos esportivos.",
    highlights: [
      "Ex-atleta profissional de alto rendimento",
      "Mais de 20 anos de experiencia no esporte",
      "Conexoes com os principais clubes e federacoes",
      "Visao estrategica de patrocinio esportivo"
    ],
    icon: Trophy,
    color: "accent"
  },
  {
    id: "abner",
    name: "Abner H. Ferreira",
    role: "Diretor Tributario",
    image: "/images/abner.jpg",
    shortBio: "Especialista tributario com carreira em multinacionais",
    fullBio: "Especialista tributario com solida carreira em grandes multinacionais, Abner leva a A2F a profundidade tecnica necessaria para garantir seguranca juridica, conformidade e excelencia na formalizacao de patrocinios incentivados. Sua expertise em legislacao fiscal permite maximizar os beneficios para empresas e pessoas fisicas.",
    highlights: [
      "Especialista em legislacao de incentivos fiscais",
      "Carreira em Big Four e multinacionais",
      "Expertise em compliance tributario",
      "Seguranca juridica em todas as operacoes"
    ],
    icon: Briefcase,
    color: "primary"
  }
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFounder, setActiveFounder] = useState<string | null>(null)

  return (
    <section id="quem-somos" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase text-accent font-sans font-semibold mb-4">Nossa Historia</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 text-gradient">
            Quem Somos
          </h2>
          <div className="section-divider mx-auto mb-8" />
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            A A2F nasceu com a missao de impulsionar o esporte e a cultura no Brasil, conectando marcas, pessoas e projetos que transformam vidas atraves de incentivos fiscais estrategicos.
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.id}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="relative group"
              onMouseEnter={() => setActiveFounder(founder.id)}
              onMouseLeave={() => setActiveFounder(null)}
            >
              <div className={cn(
                "glass-card rounded-2xl overflow-hidden shadow-3d transition-all duration-500 ease-out",
                activeFounder === founder.id 
                  ? founder.color === "accent" 
                    ? "shadow-glow-accent border-accent/40" 
                    : "shadow-glow border-primary/40"
                  : "hover:border-border/50"
              )}>
                {/* Image Section */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-secondary/30">
                  {/* Placeholder for image - replace with actual images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-card to-secondary/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={cn(
                      "p-8 rounded-full transition-all duration-500",
                      founder.color === "accent" ? "bg-accent/20" : "bg-primary/20"
                    )}>
                      <founder.icon className={cn(
                        "w-20 h-20 transition-transform duration-500 group-hover:scale-110",
                        founder.color === "accent" ? "text-accent" : "text-primary"
                      )} />
                    </div>
                  </div>
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Role badge */}
                  <div className={cn(
                    "absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium",
                    founder.color === "accent" 
                      ? "bg-accent/20 text-accent" 
                      : "bg-primary/20 text-primary"
                  )}>
                    {founder.role}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8">
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-foreground mb-2">
                    {founder.name}
                  </h3>
                  <p className={cn(
                    "text-sm font-medium mb-4",
                    founder.color === "accent" ? "text-accent" : "text-primary"
                  )}>
                    {founder.shortBio}
                  </p>
                  
                  {/* Expandable content on hover */}
                  <div className={cn(
                    "overflow-hidden transition-all duration-500 ease-out",
                    activeFounder === founder.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {founder.fullBio}
                    </p>
                    
                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      {founder.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className={cn(
                            "w-1.5 h-1.5 rounded-full flex-shrink-0",
                            founder.color === "accent" ? "bg-accent" : "bg-primary"
                          )} />
                          <span className="text-xs text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Social links placeholder */}
                    <div className="flex gap-3">
                      <button className={cn(
                        "p-2 rounded-lg transition-colors duration-300",
                        founder.color === "accent" 
                          ? "bg-accent/10 text-accent hover:bg-accent/20" 
                          : "bg-primary/10 text-primary hover:bg-primary/20"
                      )}>
                        <Linkedin className="w-4 h-4" />
                      </button>
                      <button className={cn(
                        "p-2 rounded-lg transition-colors duration-300",
                        founder.color === "accent" 
                          ? "bg-accent/10 text-accent hover:bg-accent/20" 
                          : "bg-primary/10 text-primary hover:bg-primary/20"
                      )}>
                        <Mail className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Hint to hover */}
                  <p className={cn(
                    "text-xs text-muted-foreground/60 mt-4 transition-opacity duration-300",
                    activeFounder === founder.id ? "opacity-0" : "opacity-100"
                  )}>
                    Passe o mouse para saber mais
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card rounded-2xl p-8 sm:p-10 text-center mb-16 shadow-3d"
        >
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            Somos especialistas em criar pontes eficientes entre empresas e iniciativas sociais, oferecendo caminhos 
            <span className="text-accent font-medium"> simples</span>, 
            <span className="text-primary font-medium"> seguros</span> e 
            <span className="text-foreground font-medium"> altamente vantajosos</span> para utilizar incentivos fiscais de forma estrategica.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <div className="glass-card rounded-xl p-6 text-center shadow-3d hover:shadow-glow-accent hover:border-accent/30 transition-all duration-500 ease-out group">
            <div className="inline-flex p-4 rounded-xl bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors duration-300">
              <Target className="w-7 h-7 text-accent" />
            </div>
            <h4 className="font-serif text-lg font-normal text-foreground mb-2">Missao</h4>
            <p className="text-sm text-muted-foreground">Impulsionar o esporte e a cultura no Brasil</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 text-center shadow-3d hover:shadow-glow hover:border-primary/30 transition-all duration-500 ease-out group">
            <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <h4 className="font-serif text-lg font-normal text-foreground mb-2">Conexao</h4>
            <p className="text-sm text-muted-foreground">Marcas, pessoas e projetos transformadores</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 text-center shadow-3d hover:shadow-glow hover:border-secondary/50 transition-all duration-500 ease-out group">
            <div className="inline-flex p-4 rounded-xl bg-secondary/30 mb-4 group-hover:bg-secondary/50 transition-colors duration-300">
              <Lightbulb className="w-7 h-7 text-foreground" />
            </div>
            <h4 className="font-serif text-lg font-normal text-foreground mb-2">Confianca</h4>
            <p className="text-sm text-muted-foreground">Seguranca juridica e transparencia total</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
