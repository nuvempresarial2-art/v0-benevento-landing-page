"use client"

import { MessageCircle } from "lucide-react"
import { bridgeHref, trackWhatsAppLead } from "@/lib/whatsapp"

const FAB_MESSAGE = "Ola! Vim pelo site e gostaria de agendar uma avaliacao para dor nas costas."

/**
 * CTA persistente de WhatsApp.
 *
 * No mobile e uma BARRA de largura total colada no rodape (alvo de toque muito
 * maior que o antigo botao redondo de canto, que competia com o gesto de
 * rolagem). No desktop volta a ser uma pilula flutuante.
 *
 * Usa o MESMO fluxo de tracking dos demais CTAs (data-gtm + trackWhatsAppLead)
 * e navegacao nativa do <a target=_blank> (confiavel em navegadores in-app).
 */
export function FloatingWhatsApp() {
  return (
    <>
      {/* Mobile: barra fixa de largura total */}
      <div
        className="fixed inset-x-0 bottom-0 z-50 border-t border-green-700/30 bg-white/95 p-3 backdrop-blur-sm md:hidden"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <a
          href={bridgeHref(FAB_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          data-gtm="cta-whatsapp-flutuante"
          onClick={trackWhatsAppLead}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3.5 text-base font-bold text-white shadow-lg transition-colors active:bg-green-700"
        >
          <MessageCircle className="h-5 w-5 shrink-0" />
          Agendar pelo WhatsApp
        </a>
      </div>

      {/* Desktop: pilula flutuante */}
      <a
        href={bridgeHref(FAB_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        data-gtm="cta-whatsapp-flutuante"
        onClick={trackWhatsAppLead}
        aria-label="Agendar pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 hidden items-center gap-2 rounded-full bg-green-600 px-5 py-3 font-semibold text-white shadow-xl ring-1 ring-black/10 transition-colors hover:bg-green-700 md:inline-flex"
      >
        <MessageCircle className="h-6 w-6 shrink-0" />
        <span>Falar no WhatsApp</span>
      </a>
    </>
  )
}
