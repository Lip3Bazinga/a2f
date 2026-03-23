"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { 
  Film,
  Globe,
  Trophy,
  Music,
  GraduationCap,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Play
} from "lucide-react"
import { cn } from "@/lib/utils"

const projectCategories = [
  {
    id: "audiovisual-nacional",
    icon: Film,
    title: "Audiovisual Nacional",
    shortTitle: "Nacional",
    description: "Projetos audiovisuais brasileiros que valorizam a cultura e a producao nacional, conectando marcas a conteudos de alta qualidade e impacto social.",
    highlights: [
      "Filmes e documentarios nacionais",
      "Series e programas de TV",
      "Producoes independentes",
      "Conteudo para streaming"
    ],
    stats: { projects: "50+", reach: "10M+", partners: "25+" },
    image: "/images/audiovisual-nacional.jpg"
  },
  {
    id: "audiovisual-estrangeiro",
    icon: Globe,
    title: "Audiovisual Estrangeiro",
    shortTitle: "Internacional",
    description: "Co-producoes internacionais e projetos estrangeiros filmados no Brasil, oferecendo visibilidade global para sua marca.",
    highlights: [
      "Co-producoes internacionais",
      "Filmagens no Brasil",
      "Parcerias globais",
      "Distribuicao mundial"
    ],
    stats: { projects: "30+", reach: "50M+", partners: "15+" },
    image: "/images/audiovisual-estrangeiro.jpg"
  },
  {
    id: "esportivo",
    icon: Trophy,
    title: "Esportivo",
    shortTitle: "Esportivo",
    description: "Eventos e projetos esportivos que promovem saude, bem-estar e engajamento comunitario atraves do esporte.",
    highlights: [
      "Torneios de tenis",
      "Corridas de rua",
      "Eventos de ciclismo",
      "Competicoes de e-sports"
    ],
    stats: { projects: "80+", reach: "5M+", partners: "40+" },
    image: "/images/esportivo.jpg"
  },
  {
    id: "musical",
    icon: Music,
    title: "Musical",
    shortTitle: "Musical",
    description: "Shows, festivais e projetos musicais que conectam artistas, publico e marcas em experiencias memoraveis.",
    highlights: [
      "Shows e concertos",
      "Festivais de musica",
      "Projetos culturais",
      "Eventos corporativos"
    ],
    stats: { projects: "60+", reach: "8M+", partners: "35+" },
    image: "/images/musical.jpg"
  },
  {
    id: "educacional",
    icon: GraduationCap,
    title: "Educacional",
    shortTitle: "Educacional",
    description: "Projetos educacionais que transformam vidas atraves do conhecimento, capacitacao e desenvolvimento social.",
    highlights: [
      "Programas de capacitacao",
      "Workshops e cursos",
      "Projetos sociais",
      "Inclusao digital"
    ],
    stats: { projects: "40+", reach: "2M+", partners: "20+" },
    image: "/images/educacional.jpg"
  },
]

const partners = [
  { name: "Esperanca do Amanha", url: "https://esperancadoamanha.com.br/" },
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
  const [activeCategory, setActiveCategory] = useState(0)

  const currentProject = projectCategories[activeCategory]

  const handlePrevious = () => {
    setActiveCategory((prev) => 
      prev === 0 ? projectCategories.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setActiveCategory((prev) => 
      prev === projectCategories.length - 1 ? 0 : prev + 1
    )
  }

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
            Projetos e Experiencias que Conectam Marcas e Pessoas
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A A2F oferece acesso a uma curadoria de projetos esportivos e culturais certificados, alem da criacao de produtos exclusivos.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {projectCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(index)}
                className={cn(
                  "flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ease-out",
                  activeCategory === index
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "glass-card text-muted-foreground hover:text-foreground hover:border-primary/30"
                )}
              >
                <category.icon className="w-5 h-5" />
                <span className="hidden sm:inline">{category.title}</span>
                <span className="sm:hidden">{category.shortTitle}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Content */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card rounded-2xl overflow-hidden shadow-3d mb-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid lg:grid-cols-2 gap-0"
            >
              {/* Image Section */}
              <div className="relative h-64 sm:h-80 lg:h-auto lg:min-h-[400px] bg-secondary/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex p-6 rounded-2xl bg-primary/10 mb-4">
                      <currentProject.icon className="w-16 h-16 text-primary" />
                    </div>
                    <p className="text-muted-foreground text-sm">Imagem do projeto</p>
                    <button className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors duration-300">
                      <Play className="w-4 h-4" />
                      <span className="text-sm font-medium">Ver showcase</span>
                    </button>
                  </div>
                </div>
                {/* Navigation Arrows on Image */}
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Projeto anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Proximo projeto"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <currentProject.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-bold text-foreground">
                    {currentProject.title}
                  </h4>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {currentProject.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                    Destaques
                  </h5>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {currentProject.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-secondary/30">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">{currentProject.stats.projects}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Projetos</p>
                  </div>
                  <div className="text-center border-x border-border">
                    <p className="text-2xl font-bold text-primary">{currentProject.stats.reach}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Alcance</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">{currentProject.stats.partners}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Parceiros</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 pb-6">
            {projectCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeCategory === index
                    ? "w-8 bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Ir para projeto ${index + 1}`}
              />
            ))}
          </div>
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
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-4 rounded-xl bg-secondary/50 hover:bg-primary/15 hover:border-primary/30 border border-transparent transition-all duration-300 ease-out group"
              >
                <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {partner.name}
                </span>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>

          <p className="text-muted-foreground text-center mt-8 leading-relaxed">
            Criamos experiencias que fortalecem marcas, aproximam comunidades e geram resultados duradouros.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
