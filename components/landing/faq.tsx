"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Quem pode contribuir?",
    answer: "Empresas tributadas pelo Lucro Real; Pessoas fisicas pagadoras de Imposto de Renda.",
  },
  {
    question: "Como fazer o patrocinio ou contribuicao?",
    answer: "Apos escolher o projeto, o processo e simples e rapido: Basta realizar o deposito ou transferencia para a conta oficial do projeto no Banco do Brasil. Esse comprovante servira como base legal para a deducao do Imposto de Renda.",
  },
  {
    question: "O que sao projetos incentivados?",
    answer: "Sao iniciativas aprovadas pelo governo federal que permitem que empresas e individuos direcionem parte do imposto para acoes que o Estado nao consegue alcançar sozinho — ampliando o impacto social de forma direta, transparente e legal.",
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
    <section id="faq" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase text-primary font-sans font-semibold mb-4">Duvidas Comuns</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 text-gradient">
            Perguntas Frequentes
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="glass-card rounded-xl border-0 px-6 shadow-3d overflow-hidden"
                >
                  <AccordionTrigger className="font-serif text-left text-lg font-normal text-foreground hover:text-primary transition-colors py-6 hover:no-underline">
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
