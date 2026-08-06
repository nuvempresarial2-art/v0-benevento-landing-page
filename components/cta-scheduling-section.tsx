"use client"

import { MessageCircle, CheckCircle2, Clock, MapPin, Phone, Navigation } from "lucide-react"
import { MapEmbed } from "@/components/map-embed"
import { whatsappHref, trackWhatsAppLead } from "@/lib/whatsapp"
import { siteConfig } from "@/lib/site-config"

const MESSAGE = "Ola! Quero agendar minha avaliacao."
const MAPS_URL =
  "https://www.google.com/maps/place/R.+Ant%C3%B4nio+Feres+Sada,+23+-+Centro,+V%C3%A1rzea+Paulista+-+SP,+13220-020"

/**
 * Fechamento da pagina: o ultimo CTA junto das duas objecoes que sobram no fim
 * (onde fica / como falo). Antes isso eram tres secoes separadas — CTA,
 * localizacao e um formulario de contato que so reabria o WhatsApp.
 */
export function CTASchedulingSection() {
  return (
    <section id="contato" className="bg-gradient-to-br from-secondary/30 to-secondary/10 py-14 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {siteConfig.offer.enabled && (
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground shadow-md md:text-base">
              <CheckCircle2 className="h-5 w-5 shrink-0" />
              {siteConfig.offer.label}
            </span>
          )}

          <h2 className="mb-3 text-balance font-serif text-2xl font-bold text-foreground md:text-4xl">
            Dê o próximo passo para sair da dor
          </h2>

          <p className="mx-auto mb-6 max-w-[52ch] text-pretty text-base text-muted-foreground md:text-lg">
            {siteConfig.offer.subtext}
          </p>

          <a
            href={whatsappHref(MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            data-gtm="cta-whatsapp-footer"
            onClick={trackWhatsAppLead}
            className="inline-flex h-14 w-full max-w-md items-center justify-center gap-2 rounded-xl bg-green-600 px-8 text-base font-bold text-white shadow-xl transition-colors hover:bg-green-700 md:text-lg"
          >
            <MessageCircle className="h-5 w-5 shrink-0" />
            Agendar minha avaliação
          </a>

          {siteConfig.urgency.enabled && (
            <p className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-medium text-primary">
              <Clock className="h-4 w-4 shrink-0" />
              {siteConfig.urgency.text}
            </p>
          )}
        </div>

        {/* Localizacao: objecao de fim de pagina, nao argumento de venda */}
        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
          <div className="h-56 w-full md:h-72">
            <MapEmbed
              title="Localizacao Benevento Fisioterapia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.123456789!2d-47.0076!3d-23.2116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUi4gQW50w7RuaW8gRmVyZXMgU2FkYSwgMjMgLSBDZW50cm8sIFbDoXJ6ZWEgUGF1bGlzdGEgLSBTUCwgMTMyMjAtMDIw!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            />
          </div>

          <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3 text-left">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div className="text-sm">
                <p className="font-semibold text-foreground">Benevento Fisioterapia</p>
                <p className="text-muted-foreground">
                  R. Antônio Feres Sada, 23 — Centro, Várzea Paulista/SP
                </p>
                <p className="text-muted-foreground">Em frente à Estação de Trem · estacionamento no local</p>
                <a
                  href={whatsappHref("Ola! Vim pelo site e gostaria de agendar uma consulta.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-gtm="cta-whatsapp-footer-tel"
                  onClick={trackWhatsAppLead}
                  className="mt-1 inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  (11) 99562-5889
                </a>
              </div>
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Navigation className="h-4 w-4 shrink-0" />
              Como chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
