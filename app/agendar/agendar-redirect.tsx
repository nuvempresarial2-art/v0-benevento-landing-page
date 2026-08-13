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
 * Tanto o Pixel quanto o gtag sao carregados com strategy="afterInteractive",
 * ou seja, NENHUM dos dois existe necessariamente quando este efeito roda —
 * disparar de cara silenciaria a conversao do Google. Por isso ficamos em
 * polling ate cada um aparecer, com um teto para ninguem ficar preso aqui se
 * as tags forem bloqueadas por adblock.
 */

const ESPERA_APOS_TAGS_MS = 400
const TETO_MS = 3000

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

      // O PageView de /agendar e disparado pelo proprio snippet do layout;
      // fbq.loaded === true significa que o fbevents ja esta escoando a fila.
      const pixelPronto = typeof window.fbq === "function" && window.fbq.loaded === true
      const estourou = Date.now() - inicio > TETO_MS
      if (!(pixelPronto && googleDisparado) && !estourou) return

      window.clearInterval(timer)
      window.setTimeout(ir, ESPERA_APOS_TAGS_MS)
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
