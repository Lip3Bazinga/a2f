'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { CheckCircle2, Award, Globe, Scale } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function SocialImpact() {
  const { ref, inView: isInView } = useInView({ once: true, margin: '-100px 0px' })

  const benefits = [
    'Dedução de até 2% do Imposto de Renda devido (Pessoa Jurídica)',
    'Dedução de até 7% do Imposto de Renda devido (Pessoa Física)',
    'Dedução de até 3% do seu ICMS',
    'Associação ao esporte feminino com impacto social real',
    'Relatório de resultados e visibilidade de mídia pós-evento',
    'Acesso ao projeto aprovado na Lei de Incentivo ao Esporte',
  ]

  const badges = [
    { label: 'Ministério do Esporte', icon: Award },
    { label: 'Governo Federal', icon: Globe },
    { label: 'Lei nº 11.438/2006', icon: Scale },
  ]

  return (
    <section ref={ref} className="relative py-20 sm:py-28 overflow-hidden bg-background">
      {/* Decorative arc */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full border-[60px] border-purple/5 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <motion.div
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="space-y-7"
          >
            <div>
              <p className="text-xs tracking-widest uppercase text-accent font-sans font-semibold mb-4">
                Impacto Social & Fiscal
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-2">
                Lei de Incentivo ao Esporte bate{' '}
                <span className="text-gradient-warm italic">RECORDE</span>{' '}
                de projetos apresentados
              </h2>
              <div className="section-divider mt-6" />
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">
              Ao apoiar projetos como este, sua empresa investe no desenvolvimento esportivo de crianças e jovens, associando sua marca à inclusão, saúde e esporte de alto nível – com benefício fiscal real.
            </p>

            {/* Benefits List */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground leading-relaxed">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: 0.65 + index * 0.06 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border"
                >
                  <badge.icon className="w-3.5 h-3.5 text-accent" />
                  <span className="text-xs font-medium text-foreground tracking-wide">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square sm:h-[520px] rounded-2xl overflow-hidden card-light">
              <Image
                src="/images/Impacto_social_1.jpg"
                alt="Lei de Incentivo ao Esporte — crianças e jovens praticando tênis"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>

            {/* Stats overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-5 card-light rounded-xl p-5 shadow-soft"
            >
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="font-display text-2xl font-normal text-accent">500+</p>
                  <p className="text-xs text-muted-foreground tracking-wide">Projetos</p>
                </div>
                <div className="text-center border-x border-border">
                  <p className="font-display text-2xl font-normal text-primary">100M+</p>
                  <p className="text-xs text-muted-foreground tracking-wide">Impacto</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-2xl font-normal text-purple">8+</p>
                  <p className="text-xs text-muted-foreground tracking-wide">Anos</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
