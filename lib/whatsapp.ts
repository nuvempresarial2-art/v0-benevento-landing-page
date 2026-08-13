// Fonte unica de verdade para os links e o tracking de conversao do WhatsApp.
// Mantenha o numero aqui; os componentes apenas montam a mensagem.

export const WHATSAPP_NUMBER = "5511995625889"

/**
 * Conversao "clique no WhatsApp" ja configurada na conta do Google Ads.
 * Extraida do container GTM-PPFMNS4T (tag_id 6). O gatilho do GTM que deveria
 * dispara-la exige "wa.me" na URL do clique e os links do site usam
 * "api.whatsapp.com" — ou seja, ele nunca casou. Por isso a pagina-ponte
 * dispara a conversao direto pelo gtag.
 */
export const GOOGLE_ADS_WHATSAPP_CONVERSION = "AW-11438469662/b1AICJeuz9UbEJ7kpM4q"

/** Monta o link do WhatsApp ja com a mensagem codificada. */
export function whatsappHref(message: string): string {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`
}

/**
 * Destino dos CTAs: a pagina-ponte interna /agendar.
 *
 * O Meta bloqueia os eventos Lead e Contact neste pixel (enforcement de
 * vertical de saude), mas NAO bloqueia o PageView. A conversao personalizada
 * "Whatsaapppp" tem a regra "URL contem /agendar", entao ela pega carona no
 * PageView desta rota. A /agendar redireciona para o WhatsApp em seguida,
 * preservando a mensagem de cada botao.
 */
export function bridgeHref(message: string): string {
  return `/agendar?m=${encodeURIComponent(message)}`
}

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & { loaded?: boolean }
    gtag?: (...args: unknown[]) => void
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

/**
 * Dispara a conversao de WhatsApp do Google Ads.
 *
 * Chamada na /agendar (e nao no clique) porque, com os CTAs apontando para uma
 * rota interna, o gatilho de clique de link externo do GTM nao dispararia de
 * jeito nenhum. Vai direto pelo gtag para nao depender do container.
 *
 * ATENCAO: se algum dia o gatilho do GTM for corrigido para casar com
 * "api.whatsapp.com", esta chamada passa a duplicar a contagem — nesse caso
 * remova uma das duas.
 */
export function trackGoogleAdsWhatsApp(): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", { send_to: GOOGLE_ADS_WHATSAPP_CONVERSION })
  }
}
