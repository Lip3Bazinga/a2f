"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, MapPin, Landmark, ExternalLink, AlertCircle, Sparkles } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

export function Plans() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="planos" className="py-24 sm:py-32 relative bg-white" ref={ref}>
      {/* Decorative arc */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full border-[50px] border-primary/5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase text-accent font-sans font-semibold mb-4">Incentivos Fiscais</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 text-foreground">
            Mecanismo de Financiamento a Cultura,<br />
            <span className="text-gradient">Esporte e Desenvolvimento Social</span>
          </h2>
          <div className="section-divider mx-auto mb-8" />
        </motion.div>

        {/* Three Branches Diagram */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <div className="card-light rounded-2xl p-6 text-center border-t-4 border-accent hover:shadow-glow-accent transition-all duration-500">
            <Landmark className="w-10 h-10 text-accent mx-auto mb-4" />
            <h3 className="font-display text-xl font-normal text-foreground mb-2">Leis Federais</h3>
            <p className="text-sm text-muted-foreground">Imposto de Renda</p>
          </div>
          <div className="card-light rounded-2xl p-6 text-center border-t-4 border-primary hover:shadow-glow transition-all duration-500">
            <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-display text-xl font-normal text-foreground mb-2">Leis Estaduais – SP</h3>
            <p className="text-sm text-muted-foreground">ICMS</p>
          </div>
          <div className="card-light rounded-2xl p-6 text-center border-t-4 border-purple hover:shadow-glow-purple transition-all duration-500">
            <Building2 className="w-10 h-10 text-purple mx-auto mb-4" />
            <h3 className="font-display text-xl font-normal text-foreground mb-2">Leis Municipais</h3>
            <p className="text-sm text-muted-foreground">ISS e/ou IPTU</p>
          </div>
        </motion.div>

        {/* ÂMBITO FEDERAL */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-accent/10">
              <Landmark className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-display text-2xl font-normal text-foreground">Âmbito Federal</h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            {/* Lei Rouanet */}
            <div className="card-light rounded-2xl p-6 hover:shadow-glow-accent transition-all duration-500">
              <div className="flex items-center gap-2 text-xs text-accent font-semibold uppercase tracking-wider mb-3">
                <span>Federal</span>
                <span className="text-muted-foreground">|</span>
                <span>Imposto de Renda</span>
              </div>
              <h4 className="font-display text-lg font-normal text-foreground mb-4">
                Lei Federal de Incentivo à Cultura
                <span className="block text-sm text-muted-foreground font-sans mt-1">Lei Rouanet – 8.313/91</span>
              </h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                  <span>Pessoa Jurídica (lucro real)</span>
                  <span className="font-display text-xl text-accent">até 4%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                  <span>Pessoa Física (modelo completo)</span>
                  <span className="font-display text-xl text-accent">até 7%</span>
                </div>
                <p><strong>Quando destinar:</strong> até o último dia útil do ano</p>
                <p><strong>Como:</strong> depósito/transferência para conta do projeto</p>
              </div>
            </div>

            {/* Lei Incentivo ao Esporte */}
            <div className="card-light rounded-2xl p-6 hover:shadow-glow-accent transition-all duration-500">
              <div className="flex items-center gap-2 text-xs text-accent font-semibold uppercase tracking-wider mb-3">
                <span>Federal</span>
                <span className="text-muted-foreground">|</span>
                <span>Imposto de Renda</span>
              </div>
              <h4 className="font-display text-lg font-normal text-foreground mb-4">
                Lei Federal de Incentivo ao Esporte
              </h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                  <span>Pessoa Jurídica (lucro real)</span>
                  <span className="font-display text-xl text-accent">até 2%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                  <span>Pessoa Física (modelo completo)</span>
                  <span className="font-display text-xl text-accent">até 7%</span>
                </div>
                <p><strong>Quando destinar:</strong> até o último dia útil do ano</p>
                <p><strong>Como:</strong> depósito/transferência para conta do projeto</p>
                <div className="p-3 bg-accent/5 rounded-lg border border-accent/20 text-xs">
                  <strong>Obs.:</strong> As leis não são concorrentes — empresa pode aportar até 6% do IR (4% cultura + 2% esporte)
                </div>
              </div>
            </div>

            {/* FUMCAD */}
            <div className="card-light rounded-2xl p-6 hover:shadow-glow-accent transition-all duration-500">
              <div className="flex items-center gap-2 text-xs text-accent font-semibold uppercase tracking-wider mb-3">
                <span>Federal</span>
                <span className="text-muted-foreground">|</span>
                <span>Imposto de Renda</span>
              </div>
              <h4 className="font-display text-lg font-normal text-foreground mb-4">
                Fundo Municipal da Criança e do Adolescente
                <span className="block text-sm text-muted-foreground font-sans mt-1">Lei 9.069/90</span>
              </h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                  <span>Pessoa Jurídica</span>
                  <span className="font-display text-xl text-accent">até 1%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                  <span>Pessoa Física</span>
                  <span className="font-display text-xl text-accent">até 6%</span>
                </div>
                <p className="text-xs">ou 3% no ato da declaração</p>
                <p><strong>Quando destinar:</strong> até o último dia útil bancário do ano</p>
                <p><strong>Como:</strong> depósito na conta do Fundo do Município</p>
              </div>
            </div>
          </div>

          {/* Callout - Total IR */}
          <div className="bg-gradient-to-r from-accent to-primary rounded-2xl p-6 text-white text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <AlertCircle className="w-6 h-6" />
              <span className="font-display text-3xl font-normal">Total de benefícios no IR: até 10%</span>
            </div>
            <p className="text-sm text-white/80">Combine diferentes mecanismos para maximizar seu impacto social</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a
              href="https://www.gov.br/esporte"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm text-foreground hover:bg-accent hover:text-white transition-colors duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              Ministério do Esporte
            </a>
            <a
              href="https://www.gov.br/cultura/pt-br/assuntos/lei-rouanet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm text-foreground hover:bg-accent hover:text-white transition-colors duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              Lei Rouanet
            </a>
          </div>
        </motion.div>

        {/* ÂMBITO ESTADUAL */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-normal text-foreground">Âmbito Estadual – São Paulo</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {/* ProAC */}
            <div className="card-light rounded-2xl p-6 hover:shadow-glow transition-all duration-500">
              <div className="flex items-center gap-2 text-xs text-primary font-semibold uppercase tracking-wider mb-3">
                <span>Estadual SP</span>
                <span className="text-muted-foreground">|</span>
                <span>ICMS</span>
              </div>
              <h4 className="font-display text-lg font-normal text-foreground mb-4">
                ProAC – Programa de Ação Cultural
                <span className="block text-sm text-muted-foreground font-sans mt-1">Lei nº 12.268/2006</span>
              </h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                  <span>Pessoas Jurídicas</span>
                  <span className="font-display text-xl text-primary">até 3% ICMS</span>
                </div>
                <p><strong>Dedução:</strong> 100% (sem contrapartida)</p>
                <p><strong>Credenciamento:</strong> pfe.fazenda.sp.gov.br</p>
                <p className="text-xs">Sistema aponta limite individual do contribuinte mensalmente</p>
              </div>
            </div>

            {/* LPIE */}
            <div className="card-light rounded-2xl p-6 hover:shadow-glow transition-all duration-500">
              <div className="flex items-center gap-2 text-xs text-primary font-semibold uppercase tracking-wider mb-3">
                <span>Estadual SP</span>
                <span className="text-muted-foreground">|</span>
                <span>ICMS</span>
              </div>
              <h4 className="font-display text-lg font-normal text-foreground mb-4">
                LPIE – Lei Paulista de Incentivo ao Esporte
                <span className="block text-sm text-muted-foreground font-sans mt-1">Decreto 55.636 de 26/03/2010</span>
              </h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                  <span>Pessoas Jurídicas</span>
                  <span className="font-display text-xl text-primary">até 3% ICMS</span>
                </div>
                <p><strong>Dedução:</strong> 100% (sem contrapartida)</p>
                <p><strong>Credenciamento:</strong> pfe.fazenda.sp.gov.br</p>
                <div className="p-3 bg-primary/5 rounded-lg border border-primary/20 text-xs">
                  <strong>ProAC + LPIE são cumulativos</strong> — empresa pode usar até 6% do ICMS
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ÂMBITO MUNICIPAL */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-purple/10">
              <Building2 className="w-6 h-6 text-purple" />
            </div>
            <h3 className="font-display text-2xl font-normal text-foreground">Âmbito Municipal</h3>
          </div>

          <div className="w-full ">
            <div className="card-light rounded-2xl p-6 hover:shadow-glow-purple transition-all duration-500">
              <div className="flex items-center gap-2 text-xs text-purple font-semibold uppercase tracking-wider mb-3">
                <span>Municipal</span>
                <span className="text-muted-foreground">|</span>
                <span>IPTU e ISS</span>
              </div>
              <h4 className="font-display text-lg font-normal text-foreground mb-4">
                Lei de Incentivo Fiscal (LIF)
                <span className="block text-sm text-muted-foreground font-sans mt-1">Varia por Município</span>
              </h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                  <span>Pessoa Jurídica</span>
                  <span className="font-display text-xl text-purple">até 100%*</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                  <span>Pessoa Física</span>
                  <span className="font-display text-xl text-purple">até 100%*</span>
                </div>
                <p className="text-xs">*do IPTU e/ou ISS devidos, acrescido de contrapartida financeira de 20% sobre o valor destinado</p>
                <p><strong>Quando destinar:</strong> mensalmente ou em parcela única</p>
                <p><strong>Como:</strong> depósito na conta da LIF</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Custom Projects */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 bg-secondary rounded-full px-6 py-3 mb-4">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Projetos Personalizados</span>
          </div>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Também desenvolvemos projetos regionais e personalizados, ideais para posicionamento de marca, ativação institucional e fortalecimento de imagem corporativa.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
