"use client"

import { useEffect } from "react"
import { MessageCircle } from "lucide-react"
import { whatsappHref, trackGoogleAdsWhatsApp } from "@/lib/whatsapp"

/**
 * Ponte entre o clique no CTA e o WhatsApp.
 *
 * Por que esta rota existe: o Meta bloqueia os eventos Lead e Contact neste
 * pixel, mas nao bloqueia o PageView. A conversao personalizada do Meta tem a
 * regra "URL contem /agendar", entao basta esta rota CARREGAR para a conversao
 * contar. O redirect so pode acontecer depois que o beacon do PageView sair —
 * navegar antes disso mata o evento.
 *
 * O gtag e carregado com strategy="afterInteractive", ou seja, nao existe
 * necessariamente quando este efeito roda — disparar de cara silenciaria a
 * conversao do Google. Por isso ficamos em polling ate cada sinal aparecer, com
 * um teto para ninguem ficar preso aqui se as tags forem bloqueadas por adblock.
 */

/** Folga para o beacon do PageView sair depois que o fbevents assume a fila. */
const ESPERA_APOS_TAGS_MS = 600
const TETO_MS = 3000

/**
 * O fbevents.js ja assumiu a fila?
 *
 * NAO use fbq.loaded: quem seta `loaded = true` e o proprio snippet stub do
 * layout, de forma sincrona, ANTES de o fbevents.js sequer comecar a baixar.
 * Checar por ele fazia a ponte concluir que o pixel estava pronto quando o
 * PageView ainda estava parado em fbq.queue — e o redirect matava o beacon.
 *
 * `callMethod` so passa a existir quando o fbevents.js real carrega e troca o
 * stub (o stub apenas consulta: callMethod ? apply : queue.push). Esse e o
 * unico sinal confiavel de que a fila esta sendo escoada.
 */
function pixelEscoandoFila(): boolean {
  return typeof window.fbq === "function" && typeof window.fbq.callMethod === "function"
}

export function AgendarRedirect({ message }: { message: string }) {
  useEffect(() => {
    const destino = whatsappHref(message)
    let redirecionou = false
    let googleDisparado = false

    const ir = () => {
      if (redirecionou) return
      redirecionou = true
      // replace() em vez de assign(): nao deixa a ponte no historico, entao o
      // botao "voltar" leva de volta ao site e nao a um loop de redirect.
      window.location.replace(destino)
    }

    const inicio = Date.now()
    const timer = window.setInterval(() => {
      // Assim que o gtag existir, dispara a conversao do Google (uma vez so).
      if (!googleDisparado && typeof window.gtag === "function") {
        trackGoogleAdsWhatsApp()
        googleDisparado = true
      }

      // O PageView de /agendar e disparado pelo proprio snippet do layout (nao
      // reemitimos aqui: um segundo PageView contaria a conversao personalizada
      // em dobro, porque o Meta so deduplica com eventID).
      const pixelPronto = pixelEscoandoFila()
      const estourou = Date.now() - inicio > TETO_MS
      if (!(pixelPronto && googleDisparado) && !estourou) return

      window.clearInterval(timer)

      // No estouro alguma tag esta bloqueada (adblock, rede caida) e a outra ja
      // teve segundos de sobra para escoar: nao ha beacon novo para esperar.
      // Vamos direto, para o teto ser 3s de verdade e a pessoa nao ficar presa.
      // A folga so se aplica quando as duas ficaram prontas dentro do prazo.
      if (estourou) ir()
      else window.setTimeout(ir, ESPERA_APOS_TAGS_MS)
    }, 50)

    return () => window.clearInterval(timer)
  }, [message])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <MessageCircle className="h-8 w-8 text-green-600" />
      </div>

      <p className="text-lg font-semibold text-foreground">Redirecionando para o WhatsApp...</p>

      <p className="max-w-[38ch] text-sm text-muted-foreground">
        Se nada acontecer em alguns segundos, toque no botão abaixo.
      </p>

      {/* Saida manual: cobre adblock, JS desligado e in-app browsers teimosos. */}
      <a
        href={whatsappHref(message)}
        className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-green-600 px-6 text-base font-bold text-white shadow-lg transition-colors hover:bg-green-700"
      >
        <MessageCircle className="h-5 w-5 shrink-0" />
        Abrir o WhatsApp
      </a>
    </main>
  )
}
