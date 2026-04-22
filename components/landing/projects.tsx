"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import {
  Film,
  Globe,
  Trophy,
  Music,
  GraduationCap,
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
    description: "Projetos audiovisuais brasileiros que valorizam a cultura e a produção nacional, conectando marcas a conteúdos de alta qualidade e impacto social.",
    highlights: [
      "Filmes e documentários nacionais",
      "Séries e programas de TV",
      "Produções independentes",
      "Conteúdo para streaming"
    ],
    stats: { projects: "50+", reach: "10M+", partners: "25+" },
    images: [
      "/images/Projeto_audiovisual_nacional_1.png",
      "/images/Projeto_audiovisual_nacional_2.jpg",
      "/images/Projeto_audiovisual_nacional_3.jpg",
      "/images/Projeto_audiovisual_nacional_4.jpg",
      "/images/Projeto_audiovisual_nacional_5.JPG",
    ],
  },
  // {
  //   id: "audiovisual-estrangeiro",
  //   icon: Globe,
  //   title: "Audiovisual Estrangeiro",
  //   shortTitle: "Internacional",
  //   description: "Coproduções internacionais e projetos estrangeiros filmados no Brasil, oferecendo visibilidade global para sua marca.",
  //   highlights: [
  //     "Coproduções internacionais",
  //     "Filmagens no Brasil",
  //     "Parcerias globais",
  //     "Distribuição mundial"
  //   ],
  //   stats: { projects: "30+", reach: "50M+", partners: "15+" },
  //   images: [
  //     "/images/Projeto_cultural_1.png",
  //     "/images/Projeto_cultural_2.jpg",
  //     "/images/Projeto_cultural_3.jpg",
  //     "/images/Projeto_cultural_4.jpg",
  //     "/images/Projeto_cultural_5.jpg",
  //   ],
  // },
  {
    id: "esportivo",
    icon: Trophy,
    title: "Esportivo",
    shortTitle: "Esportivo",
    description: "Eventos e projetos esportivos que promovem saúde, bem-estar e engajamento comunitário através do esporte.",
    highlights: [
      "Torneios de tênis",
      "Corridas de rua",
      "Eventos de ciclismo",
      "Competições de e-sports"
    ],
    stats: { projects: "80+", reach: "5M+", partners: "40+" },
    images: [
      "/images/Projeto_esportivo_1.png",
      "/images/Projeto_esportivo_2.jpg",
      "/images/Projeto_esportivo_3.jpg",
      "/images/Projeto_esportivo_4.jpg",
      "/images/Projeto_esportivo_5.png",
      "/images/Projeto_esportivo_6.png",
    ],
  },
  // {
  //   id: "musical",
  //   icon: Music,
  //   title: "Musical",
  //   shortTitle: "Musical",
  //   description: "Shows, festivais e projetos musicais que conectam artistas, público e marcas em experiências memoráveis.",
  //   highlights: [
  //     "Shows e concertos",
  //     "Festivais de música",
  //     "Projetos culturais",
  //     "Eventos corporativos"
  //   ],
  //   stats: { projects: "60+", reach: "8M+", partners: "35+" },
  //   images: [
  //     "/images/Projeto_cultural_1.png",
  //     "/images/Projeto_cultural_2.jpg",
  //     "/images/Projeto_cultural_3.jpg",
  //     "/images/Projeto_cultural_4.jpg",
  //     "/images/Projeto_cultural_5.jpg",
  //   ],
  // },
  {
    id: "educacional",
    icon: GraduationCap,
    title: "Educacional",
    shortTitle: "Educacional",
    description: "Projetos educacionais que transformam vidas através do conhecimento, capacitação e desenvolvimento social.",
    highlights: [
      "Programas de capacitação",
      "Workshops e cursos",
      "Projetos sociais",
      "Inclusão digital"
    ],
    stats: { projects: "40+", reach: "2M+", partners: "20+" },
    images: [
      "/images/Projeto_educacional_1.png",
      "/images/Projeto_educacional_2.jpg",
      "/images/Projeto_educacional_3.jpg",
      "/images/Projeto_educacional_4.jpg",
    ],
  },
]

const partners = [
  { name: "Esperança do Amanhã", url: "https://esperancadoamanha.com.br/", logo: "/images/Logo_parceiro_instituto_esperanca_do_amanha.jpg" },
  { name: "ACJAM", url: "https://acjam.com.br/", logo: "/images/Logo_parceiro_ACJAM.jpg" },
  { name: "Instituto Sempre Amigos", url: "https://www.institutosempreamigos.com.br/", logo: "/images/Logo_instituto_sempre_amigos.jpg" },
  { name: "Love Brand Makers", url: "https://lovebrandmakers.com.br", logo: "/images/Logo_parceiro_love_brand_makers.jpg" },
  { name: "Esporte Clube Pinheiros", url: "https://www.pinheiros.com.br/", logo: "/images/logo-esporte-clube-pinheiros.svg" },
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
    <section id="projetos" className="py-24 sm:py-32 relative section-gray" ref={ref}>
      {/* Decorative arc */}
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full border-[50px] border-purple/5 translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase text-accent font-sans font-semibold mb-4">Curadoria Estratégica</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 text-gradient">
            Projetos e Produtos
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A A2F oferece acesso a uma curadoria de projetos esportivos e culturais certificados, além da criação de produtos exclusivos que geram posicionamento de marca e impacto social.
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
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
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
          className="card-light rounded-2xl overflow-hidden pb-0"
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
              <div className="relative h-64 sm:h-80 lg:h-auto lg:min-h-[400px] bg-secondary overflow-hidden">
                <Image
                  src={currentProject.images[0]}
                  alt={currentProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                {/* Navigation Arrows on Image */}
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/90 shadow-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  aria-label="Projeto anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/90 shadow-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  aria-label="Próximo projeto"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <currentProject.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-display text-2xl sm:text-3xl font-normal text-foreground">
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
                        <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-secondary">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">{currentProject.stats.projects}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Projetos</p>
                  </div>
                  <div className="text-center border-x border-border">
                    <p className="text-2xl font-bold text-primary">{currentProject.stats.reach}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Alcance</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">{currentProject.stats.partners}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Parceiros</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Pagination Dots */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex justify-center gap-2 mt-8 mb-16"
        >
          {projectCategories.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                activeCategory === index
                  ? "w-8 bg-accent"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Ir para projeto ${index + 1}`}
            />
          ))}
        </motion.div>

        {/* Partners Logo Slider */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="text-center mb-10">
            <p className="text-xs tracking-widest uppercase text-accent font-sans font-semibold mb-3">Unidos pela Causa</p>
            <h4 className="font-display text-2xl sm:text-3xl font-normal text-foreground">
              Parceiros pelo Impacto Social
            </h4>
          </div>

          {/* Slider Container */}
          <div className="relative overflow-hidden py-8">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-gray-bg via-gray-bg/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-gray-bg via-gray-bg/80 to-transparent z-10 pointer-events-none" />

            {/* Infinite Scroll Track */}
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {[...partners, ...partners].map((partner, index) => (
                <a
                  key={`${partner.name}-${index}`}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 mx-4 sm:mx-8 group"
                >
                  <div className="relative w-52 h-30 sm:w-60 sm:h-33 flex items-center justify-center card-light rounded-xl transition-all duration-500 ease-out hover:scale-105 hover:shadow-glow-accent">
                    <div className="relative w-full h-full">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Text */}
          <p className="text-muted-foreground text-center mt-6 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
            Organizações e instituições comprometidas com a transformação social, unidas pelo propósito de gerar impacto positivo na sociedade.
          </p>
        </motion.div>
      </div>

      {/* CSS Animation for Infinite Scroll */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
