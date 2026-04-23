"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react"
import Image from "next/image"
import { Logo } from "./logo"

const slides = [
  {
    id: 1,
    headline: "CONECTANDO CAUSA E PROPÓSITO",
    theme: "Atleta / Natação",
    bgColor: "from-primary/90 via-primary/70 to-navy/90",
    image: "/images/Banner_principal_1.png"
  },
  {
    id: 2,
    headline: "A CULTURA É NOSSO ESPORTE",
    theme: "Artes Marciais / Evento Cultural",
    bgColor: "from-purple/90 via-purple/70 to-navy/90",
    image: "/images/Banner_principal_2.png"
  },
  {
    id: 3,
    headline: "A RUA TAMBÉM É NOSSA CULTURA",
    theme: "Dança Urbana / Street Culture",
    bgColor: "from-accent/90 via-accent/70 to-navy/90",
    image: "/images/Banner_principal_3.png"
  },
  {
    id: 4,
    headline: "IMPACTO DE VERDADE ACONTECE QUANDO PROPÓSITO ENCONTRA AÇÃO",
    theme: "Músicos / Instrumentos",
    bgColor: "from-navy/95 via-primary/70 to-purple/90",
    image: "/images/Banner_principal_4.png"
  },
  // {
  //   id: 5,
  //   headline: "TRANSFORMANDO INCENTIVO FISCAL EM IMPACTO SOCIAL REAL",
  //   theme: "Impacto Social",
  //   bgColor: "from-primary/90 via-accent/70 to-purple/90",
  //   image: "/images/Banner_principal_5.jpg",
  //   diffStyle: true
  // },
  {
    id: 6,
    headline: "ONDE PROPÓSITO ENCONTRA RESULTADO",
    theme: "Resultado",
    bgColor: "from-navy/90 via-purple/70 to-primary/90",
    image: "/images/Banner_principal_6.jpg",
    diffStyle: false
  }
]

// Direção: 1 = próximo (entra da direita, sai pela esquerda), -1 = anterior (entra da esquerda, sai pela direita)
const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", zIndex: 1 }),
  center: { x: "0%", zIndex: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", zIndex: 0 }),
}

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const isMountedRef = useRef(false)
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    isMountedRef.current = true
    setIsAutoPlaying(true)
    return () => {
      isMountedRef.current = false
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
      if (autoPlayIntervalRef.current) clearInterval(autoPlayIntervalRef.current)
    }
  }, [])

  const pauseAutoPlay = useCallback(() => {
    if (!isMountedRef.current) return
    setIsAutoPlaying(false)
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current)
      resumeTimeoutRef.current = null
    }
    resumeTimeoutRef.current = setTimeout(() => {
      if (isMountedRef.current) setIsAutoPlaying(true)
    }, 10000)
  }, [])

  const handleNext = useCallback(() => {
    if (!isMountedRef.current) return
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    pauseAutoPlay()
  }, [pauseAutoPlay])

  const handlePrev = useCallback(() => {
    if (!isMountedRef.current) return
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    pauseAutoPlay()
  }, [pauseAutoPlay])

  const goToSlide = useCallback((index: number) => {
    if (!isMountedRef.current) return
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
    pauseAutoPlay()
  }, [currentSlide, pauseAutoPlay])

  useEffect(() => {
    if (!isAutoPlaying) {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current)
        autoPlayIntervalRef.current = null
      }
      return
    }
    autoPlayIntervalRef.current = setInterval(() => {
      if (isMountedRef.current) {
        setDirection(1)
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }
    }, 5000)
    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current)
        autoPlayIntervalRef.current = null
      }
    }
  }, [isAutoPlaying])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides — transição horizontal simultânea */}
      <AnimatePresence mode="sync" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.65, ease: [0.32, 0, 0.18, 1] }}
          className="absolute inset-0"
          style={{ willChange: "transform" }}
        >
          {/* Imagem de fundo */}
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].theme}
            fill
            className={slides[currentSlide].diffStyle ? "object-fill" : "object-cover"}
            priority={currentSlide === 0}
          />

          {/* Camada escura base — garante legibilidade em qualquer imagem */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Véu de cor do slide */}
          <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgColor} opacity-30`} />

          {/* Vignette — reforça bordas e topo/rodapé sem clarear o centro */}
          <div
            className="absolute inset-0"
            style={{
              background: [
                "radial-gradient(ellipse 60% 55% at 50% 46%, transparent 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.65) 100%)",
                "linear-gradient(to bottom, rgba(0,0,0,0.40) 0%, transparent 20%, transparent 70%, rgba(0,0,0,0.60) 100%)",
              ].join(", "),
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Conteúdo fixo — não anima junto com o slide */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Logo variant="stacked" color="white" size="lg" linkTo={null} />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.h1
            key={`headline-${currentSlide}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center max-w-5xl mx-auto uppercase tracking-wide leading-tight text-balance px-4 drop-shadow-[0_2px_16px_rgba(0,0,0,0.6)]"
          >
            {slides[currentSlide].headline}
          </motion.h1>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 text-white/85 text-base sm:text-lg max-w-2xl text-center drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
        >
          Transformando Incentivo Fiscal em Impacto Social Real
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#quem-somos"
            className="px-8 py-3.5 bg-accent hover:bg-accent/90 active:scale-95 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-sm tracking-wide"
          >
            Conheça a A2F
          </a>
          <a
            href="#servicos"
            className="px-8 py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/20 hover:border-white/50 active:scale-95 text-sm tracking-wide"
          >
            Nossos Serviços
          </a>
        </motion.div>
      </div>

      {/* Setas de navegação */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/25 active:scale-90 transition-all duration-200 group"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/25 active:scale-90 transition-all duration-200 group"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Dots de navegação */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 active:scale-90 ${currentSlide === index ? "w-8 bg-white" : "w-2.5 bg-white/40 hover:bg-white/65"
              }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Barra de progresso */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 w-48 h-0.5 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          key={`progress-${currentSlide}`}
          initial={{ width: "0%" }}
          animate={{ width: isAutoPlaying ? "100%" : "0%" }}
          transition={{ duration: 5, ease: "linear" }}
          className="h-full bg-white/80"
        />
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.a
          href="#quem-somos"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300"
        >
          <span className="text-xs tracking-widest uppercase mb-1">Saiba mais</span>
          <ArrowDown size={14} />
        </motion.a>
      </motion.div>
    </section>
  )
}
