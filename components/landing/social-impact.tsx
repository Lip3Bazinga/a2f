'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle2, Award, Globe, Scale } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function SocialImpact() {
  const { ref, inView: isInView } = useInView({ once: true, margin: '-100px 0px' })

  const benefits = [
    'Deducao de ate 1% do Imposto de Renda devido (Pessoa Juridica)',
    'Exposicao em torneio internacional chancelado pela ITF',
    'Associacao ao esporte feminino com impacto social real',
    'Relatorio de resultados e visibilidade de midia pos-evento',
    'Acesso ao projeto aprovado na Lei de Incentivo ao Esporte',
    '8 anos de historia e credibilidade no esporte brasileiro',
  ]

  const badges = [
    { label: 'Ministerio do Esporte', icon: Award },
    { label: 'Governo Federal', icon: Globe },
    { label: 'Lei n 11.438/2006', icon: Scale },
  ]

  return (
    <section ref={ref} className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-20 right-10 w-48 h-48 bg-primary/4 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary/4 rounded-full blur-3xl" />

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
              <p className="text-xs tracking-widest uppercase text-primary font-sans font-semibold mb-4">
                Impacto Social & Fiscal
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-2">
                Lei de Incentivo ao Esporte bate{' '}
                <span className="text-primary italic">RECORDE</span>{' '}
                de projetos apresentados
              </h2>
              <div className="section-divider mt-6" />
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">
              Ao apoiar o torneio, sua empresa investe no desenvolvimento esportivo de criancas e jovens, associando sua marca a inclusao, saude e esporte de alto nivel — com beneficio fiscal real.
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
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground leading-relaxed">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Badges — no emojis, icon + label only */}
            <div className="flex flex-wrap gap-3 pt-2">
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: 0.65 + index * 0.06 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20"
                >
                  <badge.icon className="w-3.5 h-3.5 text-primary" />
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
            <div className="relative aspect-square sm:h-[520px] rounded-2xl overflow-hidden glass-card shadow-3d">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner_lei_de_incentivo_ao_esporte-lwlMhMrdawPnh06igdCVuoiO1tXaeh.jpeg"
                alt="Lei de Incentivo ao Esporte — criancas e jovens praticando tenis"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Stats overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 left-6 right-6 glass-card rounded-xl p-5 shadow-3d"
            >
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="font-serif text-2xl font-normal text-primary">500+</p>
                  <p className="text-xs text-muted-foreground tracking-wide">Projetos</p>
                </div>
                <div className="text-center border-x border-border">
                  <p className="font-serif text-2xl font-normal text-primary">100M+</p>
                  <p className="text-xs text-muted-foreground tracking-wide">Impacto</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-2xl font-normal text-primary">8+</p>
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
