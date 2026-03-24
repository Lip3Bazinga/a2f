'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function SocialImpact() {
  const { ref, inView: isInView } = useInView({
    once: true,
    margin: '-100px 0px',
  })

  const benefits = [
    'Deducção de até 1% do Imposto de Renda devido (Pessoas Jurídica)',
    'Exposição em torneio internacional chancela pela ITF',
    'Associação ao esporte feminino com impacto social real',
    'Relatório de resultados e visibilidade de mídia pós-evento',
    'Acesso ao projeto aprovado na Lei de Incentivo ao Esporte',
    '8 anos de história e credibilidade no esporte brasileiro',
  ]

  const badges = [
    { label: 'Ministério do Esporte', icon: '🏅' },
    { label: 'Governo Federal', icon: '🇧🇷' },
    { label: 'Lei nº 11.438/2008', icon: '⚖️' },
  ]

  return (
    <section ref={ref} className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Label */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2"
            >
              <span className="text-sm sm:text-base font-semibold tracking-wider uppercase text-primary">
                Impacto Social & Fiscal
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            >
              Lei de Incentivo ao Esporte bate{' '}
              <span className="text-primary">RECORDE</span> de projetos apresentados
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              Ao apoiar o torneio, sua empresa investe no desenvolvimento esportivo de crianças e jovens, associando sua marca à inclusão, saúde e esporte de alto nível — com benefício fiscal real.
            </motion.p>

            {/* Benefits List */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : 'initial'}
                  transition={{ duration: 0.4, delay: 0.35 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground leading-relaxed">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Badges */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : 'initial'}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                  className="px-3 sm:px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 backdrop-blur-sm"
                >
                  <span className="text-xs sm:text-sm font-medium text-foreground">
                    {badge.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square sm:aspect-auto sm:h-[500px] rounded-2xl overflow-hidden glass-card shadow-3d">
              {/* Placeholder with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex p-8 rounded-2xl bg-background/40 backdrop-blur-sm mb-4">
                    <div className="text-6xl">🎾</div>
                  </div>
                  <p className="text-foreground/60 text-sm font-medium">
                    Imagem do Lei de Incentivo ao Esporte
                  </p>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/10 rounded-tl-full blur-2xl" />
            </div>

            {/* Stats card overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : 'initial'}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 left-6 right-6 glass-card rounded-xl p-4 sm:p-6 shadow-3d"
            >
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-primary">500+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Projetos</p>
                </div>
                <div className="text-center border-x border-border">
                  <p className="text-xl sm:text-2xl font-bold text-primary">100M+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Impacto</p>
                </div>
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-primary">8+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Anos</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
