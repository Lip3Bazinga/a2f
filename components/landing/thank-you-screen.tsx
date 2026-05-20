"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ThankYouScreenProps {
  redirectDelay?: number
  onBack?: () => void
}

export function ThankYouScreen({ redirectDelay = 10, onBack }: ThankYouScreenProps) {
  const [countdown, setCountdown] = useState(redirectDelay)

  useEffect(() => {
    if (countdown <= 0) {
      if (onBack) onBack()
      return
    }
    const timer = setInterval(() => setCountdown(prev => prev - 1), 1000)
    return () => clearInterval(timer)
  }, [countdown, onBack])

  return (
    <div className="min-h-[500px] w-full flex items-center justify-center py-16 relative overflow-hidden bg-background">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg mx-auto px-6">
        {/* Success icon */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="relative mb-10"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-accent/10 animate-ping opacity-30" />
          </div>
          <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-tr from-accent to-orange-600 shadow-lg shadow-accent/20 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3 mb-10"
        >
          <p className="text-xs tracking-widest uppercase text-accent font-sans font-semibold">Mensagem Recebida</p>
          <h2 className="font-display text-4xl sm:text-5xl font-normal text-foreground">
            Obrigado!
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-base text-muted-foreground leading-relaxed">
            Sua mensagem foi enviada com sucesso.<br />Entraremos em contato em breve.
          </p>
        </motion.div>

        {/* Countdown badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-6 py-3 border border-border shadow-sm">
            <Home className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground text-sm font-sans">Voltando em</span>
            <span className="text-2xl font-bold text-primary min-w-[2ch] tabular-nums">
              {countdown}
            </span>
            <span className="text-muted-foreground text-sm font-sans">segundos</span>
          </div>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="w-full max-w-xs mx-auto mb-8"
        >
          <div className="h-0.5 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all duration-1000 ease-linear"
              style={{ width: `${((redirectDelay - countdown) / redirectDelay) * 100}%` }}
            />
          </div>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <Button
            onClick={onBack}
            size="lg"
            className="group bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Voltar para o início
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
