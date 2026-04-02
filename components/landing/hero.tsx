"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react"
import { Logo } from "./logo"

const slides = [
  {
    id: 1,
    headline: "CONECTANDO CAUSA E PROPÓSITO",
    theme: "Atleta / Natação",
    bgColor: "from-primary/90 via-primary/70 to-navy/90",
    image: "/images/hero/slide-1.jpg"
  },
  {
    id: 2,
    headline: "A CULTURA É NOSSO ESPORTE",
    theme: "Artes Marciais / Evento Cultural",
    bgColor: "from-purple/90 via-purple/70 to-navy/90",
    image: "/images/hero/slide-2.jpg"
  },
  {
    id: 3,
    headline: "A RUA TAMBÉM É NOSSA CULTURA",
    theme: "Dança Urbana / Street Culture",
    bgColor: "from-accent/90 via-accent/70 to-navy/90",
    image: "/images/hero/slide-3.jpg"
  },
  {
    id: 4,
    headline: "IMPACTO DE VERDADE ACONTECE QUANDO PROPÓSITO ENCONTRA AÇÃO",
    theme: "Músicos / Instrumentos",
    bgColor: "from-navy/95 via-primary/70 to-purple/90",
    image: "/images/hero/slide-4.jpg"
  }
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false) // Start false, enable after mount
  const isMountedRef = useRef(false)
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Track mount state with ref (not state to avoid re-renders)
  useEffect(() => {
    isMountedRef.current = true
    // Enable auto-play after mount
    setIsAutoPlaying(true)
    
    return () => {
      isMountedRef.current = false
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current)
      }
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current)
      }
    }
  }, [])

  const nextSlide = useCallback(() => {
    if (!isMountedRef.current) return
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    if (!isMountedRef.current) return
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const pauseAutoPlay = useCallback(() => {
    if (!isMountedRef.current) return
    
    setIsAutoPlaying(false)
    
    // Clear any existing resume timeout
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current)
      resumeTimeoutRef.current = null
    }
    
    // Resume auto-play after 10 seconds
    resumeTimeoutRef.current = setTimeout(() => {
      if (isMountedRef.current) {
        setIsAutoPlaying(true)
      }
    }, 10000)
  }, [])

  const goToSlide = useCallback((index: number) => {
    if (!isMountedRef.current) return
    setCurrentSlide(index)
    pauseAutoPlay()
  }, [pauseAutoPlay])

  const handlePrev = useCallback(() => {
    prevSlide()
    pauseAutoPlay()
  }, [prevSlide, pauseAutoPlay])

  const handleNext = useCallback(() => {
    nextSlide()
    pauseAutoPlay()
  }, [nextSlide, pauseAutoPlay])

  // Auto-advance every 5 seconds
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
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background with gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgColor}`}>
            {/* Pattern overlay for visual interest */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Decorative arc elements from brand */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border-[60px] border-white/10" />
            <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full border-[80px] border-white/5" />
            <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full border-[40px] border-white/5" />
          </div>

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Logo 
            variant="stacked" 
            color="white" 
            size="lg"
            linkTo={null}
            showText={true}
          />
        </motion.div>

        {/* Headline with animation */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={`headline-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center max-w-5xl mx-auto uppercase tracking-wide leading-tight text-balance px-4"
          >
            {slides[currentSlide].headline}
          </motion.h1>
        </AnimatePresence>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 text-white/80 text-base sm:text-lg max-w-2xl text-center"
        >
          Transformando Incentivo Fiscal em Impacto Social Real
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#quem-somos"
            className="px-8 py-3.5 bg-accent hover:bg-accent/90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-sm tracking-wide"
          >
            Conheça a A2F
          </a>
          <a
            href="#servicos"
            className="px-8 py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/20 hover:border-white/50 text-sm tracking-wide"
          >
            Nossos Serviços
          </a>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      
      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? "w-8 bg-white" 
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 w-48 h-0.5 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          key={`progress-${currentSlide}`}
          initial={{ width: "0%" }}
          animate={{ width: isAutoPlaying ? "100%" : "0%" }}
          transition={{ duration: 5, ease: "linear" }}
          className="h-full bg-white/80"
        />
      </div>

      {/* Scroll Indicator */}
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
