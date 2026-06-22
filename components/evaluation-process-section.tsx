"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { Calendar, ClipboardCheck, HeartPulse, TrendingUp } from "lucide-react"
import { trackWhatsAppLead } from "@/lib/whatsapp"

const steps = [
  {
    number: 1,
    icon: Calendar,
    title: "Agende sua Avaliação",
    description: "Entre em contato por WhatsApp. Escolha o melhor dia e horário para você.",
  },
  {
    number: 2,
    icon: ClipboardCheck,
    title: "Avaliação Completa",
    description: "Análise detalhada da sua postura, movimento e fatores emocionais envolvidos.",
  },
  {
    number: 3,
    icon: HeartPulse,
    title: "Plano Personalizado",
    description: "Criamos um tratamento sob medida, combinando as técnicas mais adequadas para você.",
  },
  {
    number: 4,
    icon: TrendingUp,
    title: "Acompanhamento Contínuo",
    description: "Monitoramos sua evolução e ajustamos o tratamento para garantir os melhores resultados.",
  },
]

export function EvaluationProcessSection() {
  const whatsappNumber = "5511995625889"
  const message = "Ola! Quero agendar minha avaliacao pelo WhatsApp."
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-foreground mb-4 text-balance">
            Como Funciona a Avaliação
          </h2>

          <p className="text-lg text-center text-muted-foreground mb-16 text-pretty max-w-[65ch] mx-auto">
            Um processo simples e acolhedor para você começar sua jornada rumo ao alívio da dor
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative">
                  <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                      {step.number}
                    </div>
                    <Icon className="h-8 w-8 text-secondary mb-4" />
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-3 text-balance">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm text-pretty leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {step.number < 4 && (
                    <div className="hidden lg:block absolute top-7 left-full w-full h-0.5 bg-primary/20 -translate-x-3" />
                  )}
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 h-14 font-semibold shadow-lg"
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                data-gtm="cta-whatsapp-avaliacao-processo"
                onClick={trackWhatsAppLead}
              >
                Quero Agendar Minha Avaliacao pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
