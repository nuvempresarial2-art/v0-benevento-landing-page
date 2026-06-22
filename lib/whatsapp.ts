// Fonte unica de verdade para os links e o tracking de conversao do WhatsApp.
// Mantenha o numero aqui; os componentes apenas montam a mensagem.

export const WHATSAPP_NUMBER = "5511995625889"

/** Monta o link do WhatsApp ja com a mensagem codificada. */
export function whatsappHref(message: string): string {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

/**
 * Dispara o evento de conversao do WhatsApp NO CLIQUE.
 *
 * IMPORTANTE (nao quebrar o tracking):
 * - NAO chamamos e.preventDefault() nem window.open(). A navegacao fica a cargo
 *   do proprio <a target="_blank">, que e confiavel inclusive em navegadores
 *   in-app (Instagram/Facebook) — onde window.open() apos um setTimeout costuma
 *   ser bloqueado, deixando a pessoa "presa" na pagina.
 * - Como o link abre em NOVA ABA, a pagina nao e descarregada e todas as tags
 *   terminam de disparar: Facebook Pixel (aqui), GTM (gatilho de clique nos
 *   atributos data-gtm) e a conversao do Google Ads acionada pelo GTM.
 * - NAO adicionamos dataLayer.push aqui para nao duplicar a contagem do GTM.
 */
export function trackWhatsAppLead(): void {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", {
      content_name: "WhatsApp Click",
      content_category: "Contact",
    })
  }
}
