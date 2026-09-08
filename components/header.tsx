import Link from "next/link"
import Image from "next/image"
import { WhatsAppCtaButton } from "@/components/whatsapp-cta-button"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

/**
 * Header enxuto para trafego pago.
 *
 * Nao ha menu de navegacao nem icones de redes sociais de proposito: em uma
 * landing paga, cada link no topo e uma rota de fuga antes do primeiro CTA.
 * Sobra o logo (credibilidade) e o botao de WhatsApp (a unica acao).
 *
 * A cor da barra acompanha o arquivo da logo (siteConfig.brand.logo):
 * logo com fundo teal embutido -> barra teal, para o retangulo da imagem
 * sumir dentro do header; logo transparente -> barra branca.
 */
export function Header() {
  const { logo } = siteConfig.brand

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b shadow-sm",
        logo.hasSolidBackground ? "border-brand bg-brand" : "border-border bg-white",
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex items-center gap-3" aria-label="Licemara Benevento Fisioterapia">
            {/* Logo servido localmente: o blob remoto anterior nao estava
                liberado em next.config (quebrava o dev) e custava uma
                requisicao a terceiro no caminho do LCP. */}
            <Image
              src={logo.src}
              alt={logo.alt}
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
