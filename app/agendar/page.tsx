import type { Metadata } from "next"
import { AgendarRedirect } from "./agendar-redirect"

/** Mensagem usada quando alguem abre /agendar sem o parametro (link solto, digitado). */
const MENSAGEM_PADRAO = "Ola! Vim pelo site e gostaria de agendar uma avaliacao."

export const metadata: Metadata = {
  title: "Redirecionando para o WhatsApp | Benevento Fisioterapia",
  // Pagina de passagem: nao deve entrar no indice nem competir com a landing.
  robots: { index: false, follow: false },
}

export default async function AgendarPage({
  searchParams,
}: {
  searchParams: Promise<{ m?: string | string[] }>
}) {
  const { m } = await searchParams
  const bruto = Array.isArray(m) ? m[0] : m

  // Só a MENSAGEM vem da URL — o numero e o dominio de destino sao montados
  // por whatsappHref(), entao nao ha como transformar isso em open redirect.
  const message = bruto && bruto.trim() ? bruto : MENSAGEM_PADRAO

  return <AgendarRedirect message={message} />
}
