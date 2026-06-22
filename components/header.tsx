import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"
import { WhatsAppCtaButton } from "@/components/whatsapp-cta-button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BENEVENTO%20-%20LOGO%20FINAL-CUqe4raA4nK92pBVicZZL1l75NDZA4.avif"
              alt="Benevento - Fisioterapia e Práticas Integrativas"
              width={220}
              height={80}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#sobre" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Sobre
            </Link>
            <Link
              href="#tratamentos"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Tratamentos
            </Link>
            <Link href="#contato" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contato
            </Link>
          </nav>

          {/* CTA + Social Icons */}
          <div className="flex items-center gap-4">
            <Link
              href="https://www.facebook.com/beneventofisioterapia"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://instagram.com/licemarabenevento"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <WhatsAppCtaButton
              message="Ola! Vim pelo site e gostaria de agendar uma avaliacao para dor nas costas."
              label="Agendar"
              gtm="cta-whatsapp-header"
              size="sm"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
