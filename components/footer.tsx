"use client"

import { Facebook, Instagram, Phone } from "lucide-react"
import Link from "next/link"
import { bridgeHref, trackWhatsAppLead } from "@/lib/whatsapp"

// Links internos ficam so no rodape: preservam o SEO das paginas de tratamento
// sem disputar atencao com o CTA no topo da pagina.
const treatmentLinks = [
  { label: "Quiropraxia Instrumental", href: "/tratamentos/quiropraxia-instrumental" },
  { label: "RPG / RPM", href: "/tratamentos/rpg-rpm" },
  { label: "Somato Análise", href: "/tratamentos/somato-analise" },
  { label: "Terapia Floral", href: "/tratamentos/terapia-floral" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-accent py-10 text-accent-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-lg bg-accent-foreground/10 px-5 py-2 text-sm font-semibold">
            CREFITO-3 · Fisioterapia regulamentada
          </p>

          <p className="mx-auto mb-6 max-w-[60ch] text-pretty text-sm leading-relaxed text-accent-foreground/90">
            Atendimento realizado por fisioterapeuta registrada, em Várzea Paulista, região de Jundiaí.
          </p>

          <a
            href={bridgeHref("Ola! Vim pelo site e gostaria de agendar uma consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            data-gtm="cta-whatsapp-footer-tel"
            onClick={trackWhatsAppLead}
            className="inline-flex items-center gap-2 font-semibold hover:underline"
          >
            <Phone className="h-4 w-4 shrink-0" />
            (11) 99562-5889
          </a>

          <nav className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2">
            {treatmentLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-accent-foreground/70 transition-colors hover:text-accent-foreground hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="https://www.facebook.com/beneventofisioterapia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-foreground/10 transition-colors hover:bg-accent-foreground/20"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link
              href="https://instagram.com/licemarabenevento"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-foreground/10 transition-colors hover:bg-accent-foreground/20"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-8 border-t border-accent-foreground/20 pt-5 text-xs text-accent-foreground/70">
            © {currentYear} Licemara Benevento — Fisioterapia Integrativa e Quiropraxia.
          </p>
        </div>
      </div>
    </footer>
  )
}
