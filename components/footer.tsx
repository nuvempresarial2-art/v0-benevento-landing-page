"use client"

import React from "react"

import { Facebook, Instagram, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { trackWhatsAppLead } from "@/lib/whatsapp"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="inline-block bg-accent-foreground/10 px-6 py-3 rounded-lg mb-6">
            <p className="font-semibold text-lg">CREFITO-3 | Fisioterapia Regulamentada</p>
          </div>
          <p className="text-lg leading-relaxed text-pretty">
            Atendimento realizado por <strong>fisioterapeuta regulamentada</strong>, com formação acadêmica comprovada e
            registro profissional ativo. Estamos em Várzea Paulista, região de Jundiaí. Envie uma mensagem mesmo que
            ainda tenha dúvidas – teremos prazer em te atender.
          </p>
        </div>

        <div className="max-w-xl mx-auto text-center mb-8">
          <h3 className="font-serif text-xl font-semibold mb-4">Entre em Contato</h3>
          <div className="space-y-3 text-accent-foreground/90">
            <p className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://api.whatsapp.com/send?phone=5511995625889"
                target="_blank"
                rel="noopener noreferrer"
                data-gtm="cta-whatsapp-footer-tel"
                className="hover:underline font-medium"
                onClick={trackWhatsAppLead}
              >
                (11) 99562-5889
              </a>
            </p>
            <p className="flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="font-medium">Rua Antônio Feres Sada, 23 | Centro | Várzea Pta. | SP</span>
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <Link
            href="https://www.facebook.com/beneventofisioterapia"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-accent-foreground/10 hover:bg-accent-foreground/20 flex items-center justify-center transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </Link>
          <Link
            href="https://instagram.com/licemarabenevento"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-accent-foreground/10 hover:bg-accent-foreground/20 flex items-center justify-center transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </Link>
        </div>

        {/* Copyright */}
        <div className="border-t border-accent-foreground/20 pt-6 text-center text-accent-foreground/70 text-sm">
          <p>© {currentYear} Benevento - Fisioterapia e Práticas Integrativas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
