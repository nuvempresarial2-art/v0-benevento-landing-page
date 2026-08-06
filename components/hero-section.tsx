"use client"

import { Moon, Activity, Pill, CheckCircle2, Clock, MessageCircle } from "lucide-react"
import Image from "next/image"
import { whatsappHref, trackWhatsAppLead } from "@/lib/whatsapp"
import { siteConfig } from "@/lib/site-config"

const benefits = [
  { icon: Moon, text: "Durma sem dor" },
  { icon: Activity, text: "Volte a se movimentar" },
  { icon: Pill, text: "Menos remédios" },
]

const AGENDAR_MSG = "Ola! Vim pelo site e gostaria de agendar uma avaliacao para dor nas costas."
const DUVIDA_MSG = "Ola! Tenho uma duvida sobre o tratamento."

/**
 * Hero otimizado para trafego pago.
 *
 * Regra que guia este bloco: o CTA precisa caber ACIMA DA DOBRA no mobile.
 * Por isso nao ha cards de tratamento nem links de saida aqui — cada clique
 * que nao vai para o WhatsApp e um lead pago perdido.
 */
export function HeroSection() {
  const badgeText = siteConfig.offer.showPriceInHeroBadge ? siteConfig.offer.label : siteConfig.offer.heroBadge

  return (
    <section id="home" className="relative flex items-center">
      <div className="absolute inset-0">
        <Image src="/images/hero.webp" alt="" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-secondary/80" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-10 md:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {siteConfig.offer.enabled && (
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-white/30 backdrop-blur-sm">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              {badgeText}
            </span>
          )}

          <h1 className="mb-3 text-balance font-serif text-3xl font-bold text-white md:text-5xl">
            Alívio para Dor nas Costas e Coluna em Várzea Paulista
          </h1>

          <p className="mx-auto mb-5 max-w-[46ch] text-pretty text-base leading-relaxed text-white/95 md:text-xl">
            Fisioterapia integrativa com quiropraxia e RPG, feita sob medida para o seu caso.
          </p>

          <div className="mb-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.text} className="flex items-center gap-2 text-sm font-medium text-white md:text-base">
                  <Icon className="h-4 w-4 shrink-0 text-white/80" />
                  {benefit.text}
                </div>
              )
            })}
          </div>

          {/* CTA unico e dominante. O secundario e um link discreto de proposito:
              dois botoes do mesmo peso dividem o clique. */}
          <a
            href={whatsappHref(AGENDAR_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            data-gtm="cta-whatsapp-agendar"
            onClick={trackWhatsAppLead}
            className="inline-flex h-14 w-full max-w-md items-center justify-center gap-2 rounded-xl bg-green-600 px-8 text-base font-bold text-white shadow-xl transition-colors hover:bg-green-700 md:text-lg"
          >
            <MessageCircle className="h-5 w-5 shrink-0" />
            Agendar minha avaliação
          </a>

          {siteConfig.offer.enabled && !siteConfig.offer.showPriceInHeroBadge && (
            <p className="mx-auto mt-3 max-w-[42ch] text-sm text-white/85">
              {siteConfig.offer.label} · avaliação de cerca de 90 minutos, sem pacote fechado.
            </p>
          )}

          <p className="mt-3">
            <a
              href={whatsappHref(DUVIDA_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              data-gtm="cta-whatsapp-duvida"
              onClick={trackWhatsAppLead}
              className="text-sm text-white/80 underline underline-offset-4 transition-colors hover:text-white"
            >
              Ainda tenho dúvidas, quero só conversar
            </a>
          </p>

          {siteConfig.urgency.enabled && (
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-black/20 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm md:text-sm">
              <Clock className="h-4 w-4 shrink-0" />
              {siteConfig.urgency.text}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
