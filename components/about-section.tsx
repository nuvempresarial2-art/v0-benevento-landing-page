"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { trackWhatsAppLead } from "@/lib/whatsapp"

export function AboutSection() {
  const whatsappNumber = "5511995625889"
  const message = "Ola! Gostaria de agendar uma avaliacao com a Dra. Licemara."
  const whatsappHref = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-foreground mb-4 text-balance">
            Conheça a Dra. Licemara Benevento
          </h2>

          <p className="text-lg text-center text-muted-foreground mb-16 text-pretty">
            Mais de 15 anos dedicados a ajudar pessoas a viverem sem dor
          </p>

          <Card className="p-8 md:p-12 bg-muted shadow-lg">
            <div className="grid md:grid-cols-[2fr,3fr] gap-12 items-center">
              <div>
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/imagem-20do-20whatsapp-20de-202025-02-26-20a-cc-80-28s-29-2016-45-52-5968361b.avif"
                    alt="Dra. Licemara Benevento"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Texto à direita - reduzido para 2-3 parágrafos */}
              <div>
                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p className="text-pretty">
                    A Dra. Licemara entende o que é conviver com dor porque acompanhou milhares de pacientes ao longo de{" "}
                    <strong className="text-foreground">mais de 15 anos</strong>. Formada em{" "}
                    <strong className="text-foreground">Fisioterapia pela Universidade Paulista</strong>, com
                    pós-graduação em{" "}
                    <strong className="text-foreground">Quiropraxia, Somato Análise e Naturopatia</strong>.
                  </p>

                  <p className="text-pretty">
                    Aqui você não é mais um número. Você é ouvido, compreendido e tratado de forma integral:{" "}
                    <strong className="text-foreground">corpo, mente e emoção trabalhando juntos</strong> pela sua
                    recuperação.
                  </p>

                  <blockquote className="bg-white border-l-4 border-primary p-5 rounded-r-lg mt-6">
                    <p className="text-foreground italic text-pretty font-serif text-lg">
                      "Meu compromisso é te ajudar a voltar a viver em paz com o seu corpo, sem medo e sem limitações."
                    </p>
                    <footer className="text-sm text-muted-foreground mt-3">— Dra. Licemara Benevento</footer>
                  </blockquote>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-gtm="cta-whatsapp-avaliacao-sobre"
                    onClick={trackWhatsAppLead}
                  >
                    Agende sua Avaliacao
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
