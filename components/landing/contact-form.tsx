"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Phone, Mail, User, Building2, MessageSquare, ArrowRight } from "lucide-react"
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

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-xs tracking-wider text-muted-foreground mb-2">
                NOME COMPLETO
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="Seu nome"
                  className="pl-10 bg-[#0a1f29] border-[#1a3a4a] h-12 text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs tracking-wider text-muted-foreground mb-2">
                SOBRENOME
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  name="sobrenome"
                  value={formData.sobrenome}
                  onChange={handleInputChange}
                  placeholder="Seu sobrenome"
                  className="pl-10 bg-[#0a1f29] border-[#1a3a4a] h-12 text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-xs tracking-wider text-muted-foreground mb-2">
                NOME DA EMPRESA
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleInputChange}
                  placeholder="Nome da sua empresa"
                  className="pl-10 bg-[#0a1f29] border-[#1a3a4a] h-12 text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs tracking-wider text-muted-foreground mb-2">
                CARGO
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  name="cargo"
                  value={formData.cargo}
                  onChange={handleInputChange}
                  placeholder="Seu cargo"
                  className="pl-10 bg-[#0a1f29] border-[#1a3a4a] h-12 text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-xs tracking-wider text-muted-foreground mb-2">
                E-MAIL
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  className="pl-10 bg-[#0a1f29] border-[#1a3a4a] h-12 text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs tracking-wider text-muted-foreground mb-2">
                TELEFONE
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  placeholder="+55 (XX) XXXXX-XXXX"
                  className="pl-10 bg-[#0a1f29] border-[#1a3a4a] h-12 text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
            </div>
          </div>
        )
      case 4:
        return (
          <div>
            <label className="block text-xs tracking-wider text-muted-foreground mb-2">
              SUA MENSAGEM
            </label>
            <Textarea
              name="mensagem"
              value={formData.mensagem}
              onChange={handleInputChange}
              placeholder="Escreva sua mensagem aqui..."
              className="bg-[#0a1f29] border-[#1a3a4a] min-h-[150px] text-foreground placeholder:text-muted-foreground focus:border-primary resize-none"
            />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">
              Fale com nossa equipe
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Torne-se um{" "}
              <span className="text-gradient">
                Patrocinador Oficial
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Preencha o formulario ou entre em contato diretamente com nossa equipe comercial para receber o dossie completo de patrocinio e as cotas disponiveis.
            </p>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8"
          >
            <form onSubmit={handleSubmit}>
              {/* Step Indicator */}
              <div className="mb-8">
                <span className="text-sm text-muted-foreground">
                  PASSO {currentStep} DE 4
                </span>
                <div className="flex items-center justify-between mt-4">
                  {steps.map((step) => (
                    <div
                      key={step.id}
                      className="flex flex-col items-center gap-2"
                    >
                      <button
                        type="button"
                        onClick={() => setCurrentStep(step.id)}
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          currentStep === step.id
                            ? "bg-primary/20 border-2 border-primary text-primary"
                            : currentStep > step.id
                            ? "bg-primary/10 border border-primary/30 text-primary"
                            : "bg-[#0a1f29] border border-[#1a3a4a] text-muted-foreground"
                        }`}
                      >
                        <step.icon className="w-5 h-5" />
                      </button>
                      <span
                        className={`text-xs hidden sm:block ${
                          currentStep === step.id
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Content */}
              <div className="min-h-[200px]">
                {renderStepContent()}
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBack}
                    className="flex-1 h-14 border-[#1a3a4a] bg-transparent hover:bg-[#1a3a4a]/50 text-foreground"
                  >
                    Voltar
                  </Button>
                )}
                <Button
                  type={currentStep === 4 ? "submit" : "button"}
                  onClick={currentStep < 4 ? handleNext : undefined}
                  className="flex-1 h-14 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold"
                >
                  {currentStep === 4 ? "Enviar" : "Continuar"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
