"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { AlertCircle, Bed, Frown, Move, Pill, Activity } from "lucide-react"
import { trackWhatsAppLead } from "@/lib/whatsapp"

const painSituations = [
  { icon: Bed, text: "Dificuldade para dormir ou acordar travado por causa da dor" },
  { icon: Activity, text: "Limitação para trabalhar, dirigir ou ficar sentado por muito tempo" },
  { icon: Frown, text: "Dor que impede de brincar com os filhos ou fazer atividades simples" },
  { icon: Move, text: "Formigamento, dormência ou travamento ao levantar da cama" },
  { icon: Pill, text: "Necessidade constante de tomar remédios para aliviar a dor" },
  { icon: AlertCircle, text: "Medo de piorar e precisar de cirurgia no futuro" },
]

export function UnifiedPainSection() {
  const whatsappNumber = "5511995625889"
  const message = "Ola! Estou com dor e gostaria de agendar uma avaliacao."
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-foreground mb-6 text-balance">
            Como a Sua Dor Tem Atrapalhado o Seu Dia a Dia?
          </h2>

          <p className="text-lg text-center text-muted-foreground mb-12 max-w-[65ch] mx-auto text-pretty leading-relaxed">
            Sabemos como é difícil conviver com dor crônica. Ela afeta seu trabalho, seu sono, suas relações e até
            momentos simples que deveriam ser prazerosos.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {painSituations.map((situation, index) => {
              const Icon = situation.icon
              return (
                <div
                  key={index}
                  className="flex items-start gap-3 p-5 bg-muted/50 rounded-lg border border-border/50 hover:border-secondary/50 transition-colors"
                >
                  <div className="shrink-0 mt-1">
                    <Icon className="h-5 w-5 text-secondary" />
                  </div>
                  <p className="text-muted-foreground text-pretty">{situation.text}</p>
                </div>
              )
            })}
          </div>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg text-center">
            <p className="text-lg text-foreground mb-4 text-pretty max-w-[60ch] mx-auto leading-relaxed">
              Se você se identificou com esses sinais, saiba que <strong>isso não é normal</strong> e você não precisa
              aceitar essa situação. Buscar ajuda especializada é um ato de <strong>cuidado consigo mesmo</strong>.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                data-gtm="cta-whatsapp-avaliacao"
                onClick={trackWhatsAppLead}
              >
                Clique Aqui para Agendar uma Avaliacao
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
