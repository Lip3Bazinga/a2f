"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { 
  Target, 
  Users, 
  Lightbulb, 
  Trophy, 
  Briefcase, 
  Linkedin, 
  Mail,
  Link2,
  Search,
  Sparkles,
  TrendingUp,
  Eye,
  Heart,
  Shield,
  Brain,
  Award
} from "lucide-react"
import { cn } from "@/lib/utils"

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

const founders = [
  {
    id: "adriano",
    name: "Adriano Ferreira",
    role: "Co-fundador",
    image: "/images/adriano.jpg",
    color: "accent"
  },
  {
    id: "abner",
    name: "Abner H. Ferreira",
    role: "Co-fundador",
    image: "/images/abner.jpg",
    color: "primary"
  }
]

const pilares = [
  {
    icon: Link2,
    title: "Conexão",
    description: "Ligação entre empresas, projetos e sociedade",
    color: "primary"
  },
  {
    icon: Search,
    title: "Curadoria",
    description: "Seleção estratégica de projetos alinhados às marcas",
    color: "purple"
  },
  {
    icon: Sparkles,
    title: "Impacto",
    description: "Transformação social, cultural e esportiva",
    color: "accent"
  },
  {
    icon: TrendingUp,
    title: "Movimento",
    description: "Dinamismo, geração de oportunidades e crescimento",
    color: "primary"
  }
]

const valores = [
  {
    icon: Link2,
    title: "Conexão",
    description: "Criar pontes entre empresas, projetos e pessoas"
  },
  {
    icon: Eye,
    title: "Transparência",
    description: "Processos claros, seguros e confiáveis"
  },
  {
    icon: Heart,
    title: "Impacto Social",
    description: "Promover iniciativas que geram transformação real"
  },
  {
    icon: Brain,
    title: "Estratégia",
    description: "Direcionar investimentos de forma inteligente"
  },
  {
    icon: Award,
    title: "Credibilidade",
    description: "Atuar com responsabilidade na gestão de incentivos fiscais"
  }
]

type TabType = "essencia" | "pilares" | "proposito" | "missao" | "visao" | "valores"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState<TabType>("essencia")

  const tabs: { id: TabType; label: string }[] = [
    { id: "essencia", label: "Essência" },
    { id: "pilares", label: "Pilares" },
    { id: "proposito", label: "Propósito" },
    { id: "missao", label: "Missão" },
    { id: "visao", label: "Visão" },
    { id: "valores", label: "Valores" }
  ]

  return (
    <section id="quem-somos" className="py-24 sm:py-32 relative bg-white" ref={ref}>
      {/* Decorative arc */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full border-[60px] border-primary/5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase text-accent font-sans font-semibold mb-4">Nossa História</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 text-foreground">
            Quem <span className="text-gradient">Somos</span>
          </h2>
          <div className="section-divider mx-auto mb-8" />
        </motion.div>

        {/* Intro Text */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-20 space-y-6"
        >
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            A A2F nasceu com a missão de impulsionar o esporte e a cultura no Brasil, conectando marcas, pessoas e projetos que transformam vidas. Somos especialistas em criar pontes eficientes entre empresas e iniciativas sociais, oferecendo caminhos simples, seguros e altamente vantajosos para utilizar incentivos fiscais de forma estratégica.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Com a liderança de <span className="text-accent font-medium">Adriano Ferreira</span>, um dos maiores nomes do esporte nacional, trazemos a vivência, credibilidade e disciplina do ambiente esportivo para dentro do processo de captação. Sua trajetória inspira nossa atuação transparente, humana e focada em resultados.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Ao lado dele, compõe nossa sociedade <span className="text-primary font-medium">Abner H. Ferreira</span>, especialista tributário com sólida carreira em grandes multinacionais. Ele leva à A2F a profundidade técnica necessária para garantir segurança jurídica, conformidade e excelência na formalização e execução de patrocínios incentivados.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Somos um time dedicado a oferecer atendimento personalizado, alinhando objetivos de empresas e pessoas físicas a projetos certificados que promovem impacto real na sociedade — sempre com simplicidade, agilidade e transparência.
          </p>
        </motion.div>

        {/* Founders Photo Section */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="font-display text-2xl sm:text-3xl font-normal text-foreground text-center mb-10">
            Nossos Fundadores
          </h3>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-3xl mx-auto">
            {founders.map((founder, index) => (
              <div
                key={founder.id}
                className="card-light rounded-2xl overflow-hidden group hover:shadow-lg transition-all duration-500 ease-out"
              >
                {/* Image Placeholder */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={cn(
                      "p-8 rounded-full",
                      founder.color === "accent" ? "bg-accent/10" : "bg-primary/10"
                    )}>
                      {founder.color === "accent" 
                        ? <Trophy className="w-16 h-16 text-accent" />
                        : <Briefcase className="w-16 h-16 text-primary" />
                      }
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h4 className="font-display text-xl sm:text-2xl font-normal text-foreground mb-1">
                    {founder.name}
                  </h4>
                  <p className={cn(
                    "text-sm font-medium",
                    founder.color === "accent" ? "text-accent" : "text-primary"
                  )}>
                    {founder.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tabbed Subsections */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card-light rounded-2xl p-6 sm:p-8 lg:p-10"
        >
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 pb-6 border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-100 text-muted-foreground hover:bg-gray-200 hover:text-foreground"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[300px]">
            {/* Essência da Marca */}
            {activeTab === "essencia" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center max-w-3xl mx-auto"
              >
                <h3 className="font-display text-2xl sm:text-3xl font-normal text-foreground mb-6">
                  Essência da <span className="text-primary">Marca</span>
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                  A A2F atua como uma ponte estratégica entre empresas, projetos e impacto social, utilizando as leis de incentivo para transformar investimento em valor para marcas e para a sociedade. A empresa não apenas conecta patrocinadores a projetos: ela curadoria, estrutura e acompanha iniciativas que geram posicionamento de marca e impacto real.
                </p>
                <div className="inline-block bg-primary/10 rounded-xl px-6 py-4">
                  <p className="text-primary font-medium text-lg">
                    Transformar incentivos fiscais em conexões estratégicas e impacto concreto.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Pilares da Marca */}
            {activeTab === "pilares" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="font-display text-2xl sm:text-3xl font-normal text-foreground text-center mb-10">
                  Pilares da <span className="text-primary">Marca</span>
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {pilares.map((pilar, index) => (
                    <div
                      key={pilar.title}
                      className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300"
                    >
                      <div className={cn(
                        "inline-flex p-4 rounded-xl mb-4",
                        pilar.color === "accent" ? "bg-accent/10" : 
                        pilar.color === "purple" ? "bg-purple/10" : "bg-primary/10"
                      )}>
                        <pilar.icon className={cn(
                          "w-7 h-7",
                          pilar.color === "accent" ? "text-accent" : 
                          pilar.color === "purple" ? "text-purple" : "text-primary"
                        )} />
                      </div>
                      <h4 className="font-display text-lg font-normal text-foreground mb-2">{pilar.title}</h4>
                      <p className="text-sm text-muted-foreground">{pilar.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Propósito */}
            {activeTab === "proposito" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center max-w-3xl mx-auto"
              >
                <div className="inline-flex p-6 rounded-2xl bg-accent/10 mb-8">
                  <Target className="w-12 h-12 text-accent" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-normal text-foreground mb-6">
                  Nosso <span className="text-accent">Propósito</span>
                </h3>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Transformar recursos incentivados em impacto social, cultural e esportivo relevante, conectando empresas a projetos que geram valor para a sociedade.
                </p>
              </motion.div>
            )}

            {/* Missão */}
            {activeTab === "missao" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center max-w-3xl mx-auto"
              >
                <div className="inline-flex p-6 rounded-2xl bg-primary/10 mb-8">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-normal text-foreground mb-6">
                  Nossa <span className="text-primary">Missão</span>
                </h3>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Conectar empresas e projetos por meio das leis de incentivo, oferecendo curadoria estratégica, consultoria especializada e gestão completa, garantindo que cada investimento gere impacto e fortalecimento de marca.
                </p>
              </motion.div>
            )}

            {/* Visão */}
            {activeTab === "visao" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center max-w-3xl mx-auto"
              >
                <div className="inline-flex p-6 rounded-2xl bg-purple/10 mb-8">
                  <Eye className="w-12 h-12 text-purple" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-normal text-foreground mb-6">
                  Nossa <span className="text-purple">Visão</span>
                </h3>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Ser reconhecida nacionalmente como uma das principais plataformas de conexão e gestão de projetos incentivados, referência em curadoria, estratégia e geração de impacto.
                </p>
              </motion.div>
            )}

            {/* Valores */}
            {activeTab === "valores" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="font-display text-2xl sm:text-3xl font-normal text-foreground text-center mb-10">
                  Nossos <span className="text-primary">Valores</span>
                </h3>
                <div className="space-y-4 max-w-2xl mx-auto">
                  {valores.map((valor, index) => (
                    <div
                      key={valor.title}
                      className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                    >
                      <div className={cn(
                        "p-3 rounded-lg flex-shrink-0",
                        index % 3 === 0 ? "bg-primary/10" : 
                        index % 3 === 1 ? "bg-accent/10" : "bg-purple/10"
                      )}>
                        <valor.icon className={cn(
                          "w-5 h-5",
                          index % 3 === 0 ? "text-primary" : 
                          index % 3 === 1 ? "text-accent" : "text-purple"
                        )} />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">{valor.title}</h4>
                        <p className="text-sm text-muted-foreground">{valor.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
