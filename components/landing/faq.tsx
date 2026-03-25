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
    <section id="faq" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase text-accent font-sans font-semibold mb-4">Dúvidas Comuns</p>
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
                  <AccordionTrigger className="font-serif text-left text-lg font-normal text-foreground hover:text-accent transition-colors py-6 hover:no-underline">
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
