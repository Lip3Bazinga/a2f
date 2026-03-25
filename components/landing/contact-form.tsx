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

  const inputClass = "pl-10 bg-muted border-border h-12 text-foreground placeholder:text-muted-foreground focus:border-orange focus-visible:ring-0 focus-visible:ring-offset-0 rounded-xl text-sm"

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
              <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2 font-sans">E-Mail</label>
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
              className="bg-muted border-border min-h-[160px] text-foreground placeholder:text-muted-foreground focus:border-orange focus-visible:ring-0 focus-visible:ring-offset-0 resize-none rounded-xl text-sm"
            />
          </div>
        )
    }
  }

  return (
    <section id="contato" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase text-orange font-sans font-semibold mb-4">Fale com Nossa Equipe</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal mb-6">
            Torne-se um{" "}
            <span className="text-gradient-orange italic">Patrocinador Oficial</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Preencha o formulario ou entre em contato diretamente com nossa equipe comercial para receber o dossie completo de patrocinio e as cotas disponiveis.
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
              className="glass-card rounded-2xl p-8 shadow-3d"
            >
              <h3 className="font-serif text-2xl font-normal text-foreground mb-6">
                Fale Conosco
              </h3>
              <div className="space-y-5">
                <a
                  href="mailto:contato@a2f.com.br"
                  className="flex items-center gap-4 text-muted-foreground hover:text-orange transition-colors duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-orange/10 group-hover:bg-orange/20 transition-colors duration-300 flex-shrink-0">
                    <Mail className="w-5 h-5 text-orange" />
                  </div>
                  <span className="text-sm">contato@a2f.com.br</span>
                </a>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="p-3 rounded-xl bg-purple/10 flex-shrink-0">
                    <Phone className="w-5 h-5 text-purple" />
                  </div>
                  <span className="text-sm">(XX) XXXXX-XXXX</span>
                </div>
                <a
                  href="https://www.a2f.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-pink transition-colors duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-pink/10 group-hover:bg-pink/20 transition-colors duration-300 flex-shrink-0">
                    <Globe className="w-5 h-5 text-pink" />
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
            className="glass-card rounded-2xl p-8 shadow-3d"
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
                            ? "bg-orange/20 border-2 border-orange text-orange"
                            : currentStep > step.id
                            ? "bg-orange/10 border border-orange/30 text-orange"
                            : "bg-muted border border-border text-muted-foreground"
                        }`}
                      >
                        <step.icon className="w-4 h-4" />
                      </button>
                      <span className={`text-xs hidden sm:block font-sans tracking-wide ${
                        currentStep === step.id ? "text-orange" : "text-muted-foreground"
                      }`}>
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Progress bar */}
                <div className="mt-5 h-0.5 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange transition-all duration-500 ease-out rounded-full"
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
                    className="flex-1 h-12 border-border bg-transparent hover:bg-muted/50 text-foreground rounded-xl text-sm"
                  >
                    Voltar
                  </Button>
                )}
                <Button
                  type={currentStep === 4 ? "submit" : "button"}
                  onClick={currentStep < 4 ? handleNext : undefined}
                  className="flex-1 h-12 bg-orange hover:brightness-110 text-white font-semibold rounded-xl transition-all duration-300 text-sm shadow-glow-orange"
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
