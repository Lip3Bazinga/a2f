"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Phone, Mail, User, Building2, MessageSquare, ArrowRight, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const steps = [
  { id: 1, label: "Seus Dados", icon: User },
  { id: 2, label: "Sua Empresa", icon: Building2 },
  { id: 3, label: "Contato", icon: Phone },
  { id: 4, label: "Mensagem", icon: MessageSquare },
]

export function ContactForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    empresa: "",
    cargo: "",
    email: "",
    telefone: "",
    mensagem: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleNext = () => { if (currentStep < 4) setCurrentStep(currentStep + 1) }
  const handleBack = () => { if (currentStep > 1) setCurrentStep(currentStep - 1) }
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault() }

  const inputClass = "pl-10 bg-secondary border-border h-12 text-foreground placeholder:text-muted-foreground focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 rounded-xl text-sm"

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2 font-sans">Nome Completo</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input name="nome" value={formData.nome} onChange={handleInputChange} placeholder="Seu nome" className={inputClass} />
              </div>
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2 font-sans">Sobrenome</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input name="sobrenome" value={formData.sobrenome} onChange={handleInputChange} placeholder="Seu sobrenome" className={inputClass} />
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2 font-sans">Nome da Empresa</label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input name="empresa" value={formData.empresa} onChange={handleInputChange} placeholder="Nome da sua empresa" className={inputClass} />
              </div>
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2 font-sans">Cargo</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input name="cargo" value={formData.cargo} onChange={handleInputChange} placeholder="Seu cargo" className={inputClass} />
              </div>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2 font-sans">E-mail</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="seu@email.com" className={inputClass} />
              </div>
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2 font-sans">Telefone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input name="telefone" value={formData.telefone} onChange={handleInputChange} placeholder="+55 (XX) XXXXX-XXXX" className={inputClass} />
              </div>
            </div>
          </div>
        )
      case 4:
        return (
          <div>
            <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2 font-sans">Sua Mensagem</label>
            <Textarea
              name="mensagem"
              value={formData.mensagem}
              onChange={handleInputChange}
              placeholder="Escreva sua mensagem aqui..."
              className="bg-secondary border-border min-h-[160px] text-foreground placeholder:text-muted-foreground focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 resize-none rounded-xl text-sm"
            />
          </div>
        )
    }
  }

  return (
    <section id="contato" className="py-24 sm:py-32 relative overflow-hidden bg-background">
      {/* Decorative arc */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full border-[60px] border-accent/5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase text-accent font-sans font-semibold mb-4">Fale com Nossa Equipe</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal mb-6">
            Torne-se um{" "}
            <span className="text-gradient-warm italic">Patrocinador Oficial</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Preencha o formulário ou entre em contato diretamente com nossa equipe comercial para receber o dossiê completo de patrocínio e as cotas disponíveis.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Fale Conosco card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="card-light rounded-2xl p-8"
            >
              <h3 className="font-serif text-2xl font-normal text-foreground mb-6">
                Fale Conosco
              </h3>
              <div className="space-y-5">
                <a
                  href="mailto:contato@a2f.com.br"
                  className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300 flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm">contato@a2f.com.br</span>
                </a>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm">(XX) XXXXX-XXXX</span>
                </div>
                <a
                  href="https://www.a2f.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm">www.a2f.com.br</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Multi-step form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card-light rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit}>
              {/* Step Indicator */}
              <div className="mb-8">
                <span className="text-xs tracking-widest uppercase text-muted-foreground font-sans">
                  Passo {currentStep} de 4
                </span>
                <div className="flex items-center justify-between mt-5">
                  {steps.map((step) => (
                    <div key={step.id} className="flex flex-col items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(step.id)}
                        className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          currentStep === step.id
                            ? "bg-accent/20 border-2 border-accent text-accent"
                            : currentStep > step.id
                            ? "bg-accent/10 border border-accent/30 text-accent"
                            : "bg-secondary border border-border text-muted-foreground"
                        }`}
                      >
                        <step.icon className="w-4 h-4" />
                      </button>
                      <span className={`text-xs hidden sm:block font-sans tracking-wide ${
                        currentStep === step.id ? "text-accent" : "text-muted-foreground"
                      }`}>
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Progress bar */}
                <div className="mt-5 h-0.5 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent transition-all duration-500 ease-out rounded-full"
                    style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                  />
                </div>
              </div>

              {/* Form Content */}
              <div className="min-h-[180px]">
                {renderStepContent()}
              </div>

              {/* Navigation */}
              <div className="flex gap-3 mt-8">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBack}
                    className="flex-1 h-12 border-border bg-transparent hover:bg-secondary text-foreground rounded-xl text-sm"
                  >
                    Voltar
                  </Button>
                )}
                <Button
                  type={currentStep === 4 ? "submit" : "button"}
                  onClick={currentStep < 4 ? handleNext : undefined}
                  className="flex-1 h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl transition-all duration-300 text-sm"
                >
                  {currentStep === 4 ? "Enviar" : "Continuar"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
