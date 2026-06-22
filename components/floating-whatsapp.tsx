"use client"

import { MessageCircle } from "lucide-react"
import { whatsappHref, trackWhatsAppLead } from "@/lib/whatsapp"

const FAB_MESSAGE = "Ola! Vim pelo site e gostaria de agendar uma avaliacao para dor nas costas."

/**
 * Botao flutuante de WhatsApp, sempre visivel no mobile e no desktop.
 * Usa o MESMO fluxo de tracking dos demais CTAs (data-gtm + trackWhatsAppLead)
 * e navegacao nativa do <a target=_blank> (confiavel em navegadores in-app).
 */
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref(FAB_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      data-gtm="cta-whatsapp-flutuante"
      onClick={trackWhatsAppLead}
      aria-label="Agendar pelo WhatsApp"
      className="fixed right-4 z-50 inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 font-semibold text-white shadow-xl ring-1 ring-black/10 transition-colors hover:bg-green-700 sm:right-6"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <MessageCircle className="h-6 w-6 shrink-0" />
      <span>Falar no WhatsApp</span>
    </a>
  )
}
