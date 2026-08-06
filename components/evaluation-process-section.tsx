"use client"

import { Calendar, ClipboardCheck, HeartPulse, TrendingUp, MessageCircle } from "lucide-react"
import { whatsappHref, trackWhatsAppLead } from "@/lib/whatsapp"
import { siteConfig } from "@/lib/site-config"

const steps = [
  {
    number: 1,
    icon: Calendar,
    title: "Você chama no WhatsApp",
    description: "Conta o que está sentindo e escolhe o melhor horário.",
  },
  {
    number: 2,
    icon: ClipboardCheck,
    title: "Avaliação de 90 minutos",
    description: "Histórico, testes posturais e de movimento, sem pressa.",
  },
  {
    number: 3,
    icon: HeartPulse,
    title: "Plano para o seu caso",
    description: "Nada de protocolo pronto — o tratamento é montado para você.",
  },
  {
    number: 4,
    icon: TrendingUp,
    title: "Acompanhamento",
    description: "Ajustamos o plano conforme a sua evolução.",
  },
]

const MESSAGE = "Ola! Quero agendar minha avaliacao pelo WhatsApp."

export function EvaluationProcessSection() {
  return (
    <section className="bg-muted py-14 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-3 text-balance text-center font-serif text-2xl font-bold text-foreground md:text-4xl">
            O que acontece depois que você chama
          </h2>

          {/* Tirar o "medo do clique" e o principal ganho de conversao aqui:
              a pessoa precisa saber exatamente o que vem a seguir. */}
          <p className="mx-auto mb-10 max-w-[52ch] text-pretty text-center text-sm text-muted-foreground md:text-base">
            O botão abre uma conversa no WhatsApp. Sem formulário, sem compromisso.
          </p>

          <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="flex h-full flex-col rounded-xl bg-white p-5 shadow-md">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white">
                      {step.number}
                    </span>
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="mb-2 text-balance font-serif text-base font-semibold text-foreground md:text-lg">
                    {step.title}
                  </h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <a
              href={whatsappHref(MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              data-gtm="cta-whatsapp-avaliacao-processo"
              onClick={trackWhatsAppLead}
              className="inline-flex h-14 w-full max-w-sm items-center justify-center gap-2 rounded-xl bg-green-600 px-8 text-base font-bold text-white shadow-lg transition-colors hover:bg-green-700 md:text-lg"
            >
              <MessageCircle className="h-5 w-5 shrink-0" />
              Agendar minha avaliação
            </a>

            {siteConfig.offer.enabled && (
              <p className="mt-3 text-sm text-muted-foreground">{siteConfig.offer.label}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
