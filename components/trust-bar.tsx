import { ShieldCheck } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

/**
 * Faixa fina de credibilidade logo abaixo do hero.
 *
 * Existe para responder, em 2 segundos, a duvida silenciosa de quem chegou
 * pelo anuncio: "isso aqui e serio?". Somente fatos verificaveis — nao
 * inventar numeros de pacientes ou taxas de sucesso.
 */
export function TrustBar() {
  return (
    <section className="border-b border-border bg-white py-4">
      <div className="container mx-auto px-4 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center">
          {siteConfig.trust.map((item) => (
            <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground md:text-sm">
              <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
