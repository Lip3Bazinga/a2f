"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Scale, Trophy, HelpCircle } from "lucide-react"

const lawFaqs = [
  {
    id: "cultura",
    icon: Scale,
    title: "Lei Federal de Incentivo à Cultura",
    details: [
      { label: "Âmbito", value: "Federal" },
      { label: "Benefício fiscal", value: "Imposto de Renda" },
    ],
    whoCanContribute: [
      "Pessoas jurídicas com lucro real (até 4% do IR)",
      "Pessoas físicas no modelo completo (até 7% do IR)",
    ],
    whenToContribute: "Até o último dia útil do ano para dedução na declaração de ajuste anual do ano subsequente",
    howToContribute: "Depósito ou transferência bancária para a conta aberta em nome do projeto",
  },
  {
    id: "esporte",
    icon: Trophy,
    title: "Lei Federal de Incentivo ao Esporte",
    details: [
      { label: "Âmbito", value: "Federal" },
      { label: "Benefício fiscal", value: "Imposto de Renda" },
    ],
    whoCanContribute: [
      "Pessoas jurídicas com lucro real (até 2% do IR)",
      "Pessoas físicas no modelo completo (até 7% do IR)",
    ],
    whenToContribute: "Até o último dia útil do ano para dedução na declaração de ajuste anual do ano subsequente",
    howToContribute: "Depósito ou transferência bancária para a conta aberta em nome do projeto",
  },
]

const generalFaqs = [
  {
    question: "Quem pode contribuir?",
    answer: "Empresas tributadas pelo Lucro Real e pessoas físicas pagadoras de Imposto de Renda.",
  },
  {
    question: "Como fazer o patrocínio ou contribuição?",
    answer: "Após escolher o projeto, o processo é simples e rápido: basta realizar o depósito ou transferência para a conta oficial do projeto no Banco do Brasil. Esse comprovante servirá como base legal para a dedução do Imposto de Renda.",
  },
  {
    question: "O que são projetos incentivados?",
    answer: "São iniciativas aprovadas pelo governo federal que permitem que empresas e indivíduos direcionem parte do imposto para ações que o Estado não consegue alcançar sozinho — ampliando o impacto social de forma direta, transparente e legal.",
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="faq" className="py-24 sm:py-32 relative section-gray" ref={ref}>
      {/* Decorative arc */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full border-[50px] border-primary/5 -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase text-accent font-sans font-semibold mb-4">Dúvidas Comuns</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 text-gradient">
            Perguntas Frequentes
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        {/* Law FAQs */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="font-display text-xl text-foreground mb-6 flex items-center gap-2">
            <Scale className="w-5 h-5 text-primary" />
            Leis de Incentivo Fiscal
          </h3>
          
          <Accordion type="single" collapsible className="space-y-4">
            {lawFaqs.map((law, index) => (
              <motion.div
                key={law.id}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
              >
                <AccordionItem
                  value={law.id}
                  className="card-light rounded-xl border-0 px-6 overflow-hidden"
                >
                  <AccordionTrigger className="font-display text-left text-lg font-normal text-foreground hover:text-primary transition-colors py-6 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <law.icon className="w-5 h-5 text-primary" />
                      </div>
                      {law.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-4">
                      {/* Details badges */}
                      <div className="flex flex-wrap gap-2">
                        {law.details.map((detail, i) => (
                          <span key={i} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                            <span className="font-medium">{detail.label}:</span> {detail.value}
                          </span>
                        ))}
                      </div>
                      
                      {/* Who can contribute */}
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2">Quem pode destinar?</p>
                        <ul className="space-y-1">
                          {law.whoCanContribute.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* When to contribute */}
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Quando destinar?</p>
                        <p className="text-sm text-muted-foreground">{law.whenToContribute}</p>
                      </div>
                      
                      {/* How to contribute */}
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Como contribuir ou patrocinar?</p>
                        <p className="text-sm text-muted-foreground">{law.howToContribute}</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
          
          {/* Important note */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 p-4 rounded-xl bg-accent/10 border border-accent/20"
          >
            <p className="text-sm text-foreground">
              <span className="font-semibold text-accent">Importante:</span> As leis não são concorrentes — empresa pode aportar até <span className="font-semibold">6% do IR devido</span> (4% cultura + 2% esporte).
            </p>
          </motion.div>
        </motion.div>

        {/* General FAQs */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-display text-xl text-foreground mb-6 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-accent" />
            Dúvidas Gerais
          </h3>
          
          <Accordion type="single" collapsible className="space-y-4">
            {generalFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.1 * index + 0.5 }}
              >
                <AccordionItem
                  value={`general-${index}`}
                  className="card-light rounded-xl border-0 px-6 overflow-hidden"
                >
                  <AccordionTrigger className="font-display text-left text-lg font-normal text-foreground hover:text-accent transition-colors py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
