"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"
import { MessageCircle, Hand, User, Brain, Flower } from "lucide-react"
import { whatsappHref, trackWhatsAppLead } from "@/lib/whatsapp"

// As tecnicas viraram chips aqui (antes eram uma secao inteira). Mantem as
// palavras-chave e o diferencial sem custar mais uma rolagem.
const techniques = [
  { icon: Hand, name: "Quiropraxia instrumental" },
  { icon: User, name: "RPG / RPM" },
  { icon: Brain, name: "Somato Análise" },
  { icon: Flower, name: "Terapia floral e auriculoterapia" },
]

const MESSAGE = "Ola! Gostaria de agendar uma avaliacao com a Dra. Licemara."

export function AboutSection() {
  return (
    <section id="sobre" className="bg-white py-14 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-balance text-center font-serif text-2xl font-bold text-foreground md:mb-10 md:text-4xl">
            Quem vai te atender
          </h2>

          <Card className="bg-muted p-6 shadow-lg md:p-10">
            <div className="grid items-center gap-8 md:grid-cols-[2fr_3fr]">
              <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-xl shadow-md md:w-full">
                <Image
                  src="/images/imagem-20do-20whatsapp-20de-202025-02-26-20a-cc-80-28s-29-2016-45-52-5968361b.avif"
                  alt="Dra. Licemara Benevento"
                  fill
                  sizes="(max-width: 768px) 192px, 40vw"
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Dra. Licemara Benevento</strong> — fisioterapeuta há mais de 15
                  anos, formada pela Universidade Paulista, com pós-graduação em Quiropraxia, Somato Análise e
                  Naturopatia. Registro ativo no CREFITO-3.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {techniques.map((technique) => {
                    const Icon = technique.icon
                    return (
                      <span
                        key={technique.name}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-foreground shadow-sm md:text-sm"
                      >
                        <Icon className="h-3.5 w-3.5 shrink-0 text-primary" />
                        {technique.name}
                      </span>
                    )
                  })}
                </div>

                <blockquote className="mt-6 rounded-r-lg border-l-4 border-primary bg-white p-5">
                  <p className="text-pretty font-serif italic text-foreground">
                    "Meu compromisso é te ajudar a voltar a viver em paz com o seu corpo, sem medo e sem limitações."
                  </p>
                </blockquote>

                <a
                  href={whatsappHref(MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-gtm="cta-whatsapp-avaliacao-sobre"
                  onClick={trackWhatsAppLead}
                  className="mt-6 inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-8 text-base font-bold text-white shadow-lg transition-colors hover:bg-green-700 sm:w-auto"
                >
                  <MessageCircle className="h-5 w-5 shrink-0" />
                  Falar com a Dra. Licemara
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
