"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { MessageCircle, Calendar } from "lucide-react"

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void
  }
}

const trackWhatsAppConversion = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault()
  const href = e.currentTarget.href
  
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", {
      content_name: "WhatsApp Click",
      content_category: "Contact",
    })
  }
  
  setTimeout(() => {
    window.open(href, "_blank")
  }, 300)
}

export function CTASchedulingSection() {
  const whatsappNumber = "5511995625889"
  const message = "Ola! Quero agendar minha avaliacao."
  const whatsappHref = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`

  const handleScheduleClick = () => {
    const contactSection = document.getElementById("contato")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-secondary/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Dê o Próximo Passo Para Sair da Dor
          </h2>

          <p className="text-lg text-muted-foreground mb-4 text-pretty max-w-[60ch] mx-auto leading-relaxed">
            A avaliação inicial dura cerca de 60 minutos. Conversamos sobre seu histórico, realizamos testes físicos e
            posturais para entender sua condição e montamos um plano personalizado.
          </p>

          <div className="bg-white rounded-lg p-8 shadow-lg mb-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-10 h-14 font-semibold shadow-md"
              >
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-gtm="cta-whatsapp-footer"
                  onClick={trackWhatsAppConversion}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar no WhatsApp
                </a>
              </Button>

              <Button
                size="lg"
                onClick={handleScheduleClick}
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 h-14 font-semibold"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Avaliação
              </Button>
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-pretty">
            Várzea Paulista, região de Jundiaí. Estacionamento disponível.
          </p>
        </div>
      </div>
    </section>
  )
}
