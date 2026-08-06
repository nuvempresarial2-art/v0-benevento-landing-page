"use client"

import { AlertCircle, Bed, Frown, Move, Pill, Activity, MessageCircle } from "lucide-react"
import { whatsappHref, trackWhatsAppLead } from "@/lib/whatsapp"

// Frases curtas de proposito: a pessoa precisa se reconhecer numa batida de
// olho, nao ler um paragrafo.
const painSituations = [
  { icon: Bed, text: "Acorda travado ou não dorme direito por causa da dor" },
  { icon: Activity, text: "Não aguenta ficar sentado ou dirigindo por muito tempo" },
  { icon: Frown, text: "Deixou de fazer coisas simples com quem você ama" },
  { icon: Move, text: "Sente formigamento ou dormência ao levantar da cama" },
  { icon: Pill, text: "Depende de remédio para aguentar o dia" },
  { icon: AlertCircle, text: "Tem medo de piorar e precisar de cirurgia" },
]

const MESSAGE = "Ola! Estou com dor e gostaria de agendar uma avaliacao."

export function UnifiedPainSection() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-balance text-center font-serif text-2xl font-bold text-foreground md:mb-10 md:text-4xl">
            Se você se identifica com algum destes, tem tratamento
          </h2>

          <div className="mb-8 grid gap-3 sm:grid-cols-2">
            {painSituations.map((situation) => {
              const Icon = situation.icon
              return (
                <div
                  key={situation.text}
                  className="flex items-start gap-3 rounded-lg border border-border/50 bg-muted/50 p-4"
                >
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <p className="text-pretty text-sm text-muted-foreground md:text-base">{situation.text}</p>
                </div>
              )
            })}
          </div>

          <div className="rounded-xl border-l-4 border-primary bg-primary/5 p-6 text-center">
            <p className="mx-auto mb-5 max-w-[52ch] text-pretty text-base text-foreground md:text-lg">
              Conviver com isso <strong>não é normal</strong>. Conte o seu caso pelo WhatsApp e a gente diz se o
              tratamento faz sentido para você.
            </p>

            <a
              href={whatsappHref(MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              data-gtm="cta-whatsapp-avaliacao"
              onClick={trackWhatsAppLead}
              className="inline-flex h-14 w-full max-w-sm items-center justify-center gap-2 rounded-xl bg-green-600 px-8 text-base font-bold text-white shadow-lg transition-colors hover:bg-green-700"
            >
              <MessageCircle className="h-5 w-5 shrink-0" />
              Falar com a Dra. Licemara
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
