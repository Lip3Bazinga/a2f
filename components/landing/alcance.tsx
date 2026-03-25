"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Globe, 
  Users, 
  Image as ImageIcon, 
  UsersRound, 
  TrendingUp, 
  Flag, 
  Heart, 
  Receipt
} from "lucide-react"
import { cn } from "@/lib/utils"

const reachCards = [
  {
    id: "alcance-internacional",
    icon: Globe,
    title: "Alcance Internacional",
    description: "Torneio chancelado pela Federação Internacional de Tênis (ITF) e pela Confederação Brasileira de Tênis (CBT), com cobertura midiática nacional e internacional.",
    size: "large",
    color: "primary",
  },
  {
    id: "tenistas",
    icon: Users,
    title: "+64 Tenistas",
    description: "Atletas profissionais de alto nível competindo nas quadras de saibro.",
    size: "small",
    color: "accent",
  },
  {
    id: "exposicao-marca",
    icon: ImageIcon,
    title: "Exposição de Marca",
    description: "Logo estampado nas quadras, uniformes, placares e toda comunicação visual.",
    size: "small",
    color: "primary",
  },
  {
    id: "espectadores",
    icon: UsersRound,
    title: "+5.000 Espectadores",
    description: "Público qualificado e engajado durante os dias de competição.",
    size: "medium",
    color: "accent",
  },
  {
    id: "midia-espontanea",
    icon: TrendingUp,
    title: "Mídia Espontânea",
    description: "Cobertura em portais esportivos, redes sociais e transmissão ao vivo gerando imenso valor de mídia.",
    size: "medium",
    color: "primary",
  },
  {
    id: "naming-rights",
    icon: Flag,
    title: "Naming Rights",
    description: "A maior cota inclui naming rights do torneio, com seu nome na identidade oficial.",
    size: "small",
    color: "accent",
  },
  {
    id: "impacto-social",
    icon: Heart,
    title: "Impacto Social",
    description: "Apoio ao esporte feminino e jovens talentos do Brasil, gerando responsabilidade social.",
    size: "small",
    color: "primary",
  },
  {
    id: "lei-incentivo",
    icon: Receipt,
    title: "Lei de Incentivo",
    description: "Invista via Lei de Incentivo ao Esporte e deduza até 1% do IR. Patrocínio sem custo real.",
    size: "small",
    color: "accent",
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
}

export function Alcance() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getCardStyles = (size: string, color: string) => {
    const baseStyles = "glass-card rounded-2xl p-6 transition-all duration-500 ease-out hover:shadow-glow-accent group cursor-pointer border border-transparent hover:border-accent/30"
    
    const sizeStyles = {
      large: "lg:col-span-2 lg:row-span-2",
      medium: "lg:col-span-1 lg:row-span-1",
      small: "lg:col-span-1 lg:row-span-1",
    }

    return cn(baseStyles, sizeStyles[size as keyof typeof sizeStyles])
  }

  const getIconStyles = (color: string) => {
    return color === "accent" 
      ? "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground" 
      : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
  }

  return (
    <section id="alcance" className="py-24 sm:py-32 relative" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs tracking-widest uppercase text-accent font-sans font-semibold mb-4">
            Por que Patrocinar?
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal mb-6">
            <span className="text-foreground">A </span>
            <span className="text-gradient-warm">Oportunidade</span>
            <br />
            <span className="text-foreground">de Patrocínio</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
            Múltiplas atrações e propriedades para exposição da sua marca em um torneio internacional chancelado pela ITF e CBT, voltado para tenistas femininas.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Large Card - Alcance Internacional */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={scaleIn}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={getCardStyles("large", "primary")}
          >
            <div className={cn(
              "inline-flex p-3 rounded-xl mb-6 transition-all duration-300",
              getIconStyles("primary")
            )}>
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl font-normal text-foreground mb-4">
              {reachCards[0].title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
              {reachCards[0].description}
            </p>
            {/* Decorative gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
          </motion.div>

          {/* Right Column - Stacked Cards */}
          <div className="lg:col-span-2 lg:row-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
            {reachCards.slice(1, 3).map((card, index) => (
              <motion.div
                key={card.id}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                variants={scaleIn}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={getCardStyles(card.size, card.color)}
              >
                <div className={cn(
                  "inline-flex p-3 rounded-xl mb-4 transition-all duration-300",
                  getIconStyles(card.color)
                )}>
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Middle Row - Two Medium Cards */}
          {reachCards.slice(3, 5).map((card, index) => (
            <motion.div
              key={card.id}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={scaleIn}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className={getCardStyles(card.size, card.color)}
            >
              <div className={cn(
                "inline-flex p-3 rounded-xl mb-4 transition-all duration-300",
                getIconStyles(card.color)
              )}>
                <card.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}

          {/* Bottom Row - Three Small Cards */}
          {reachCards.slice(5).map((card, index) => (
            <motion.div
              key={card.id}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={scaleIn}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className={getCardStyles(card.size, card.color)}
            >
              <div className={cn(
                "inline-flex p-3 rounded-xl mb-4 transition-all duration-300",
                getIconStyles(card.color)
              )}>
                <card.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
