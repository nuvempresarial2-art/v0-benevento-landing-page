import Link from "next/link"
import Image from "next/image"
import { WhatsAppCtaButton } from "@/components/whatsapp-cta-button"

/**
 * Header enxuto para trafego pago.
 *
 * Nao ha menu de navegacao nem icones de redes sociais de proposito: em uma
 * landing paga, cada link no topo e uma rota de fuga antes do primeiro CTA.
 * Sobra o logo (credibilidade) e o botao de WhatsApp (a unica acao).
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-white shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex items-center gap-3" aria-label="Benevento Fisioterapia">
            {/* Logo servido localmente: o blob remoto anterior nao estava
                liberado em next.config (quebrava o dev) e custava uma
                requisicao a terceiro no caminho do LCP. */}
            <Image
              src="/images/benevento-20-20logo-20final.avif"
              alt="Benevento - Fisioterapia e Práticas Integrativas"
              width={220}
              height={80}
              className="h-11 w-auto md:h-14"
              priority
            />
          </Link>

          <WhatsAppCtaButton
            message="Ola! Vim pelo site e gostaria de agendar uma avaliacao para dor nas costas."
            label="Agendar"
            gtm="cta-whatsapp-header"
            size="sm"
          />
        </div>
      </div>
    </header>
  )
}
