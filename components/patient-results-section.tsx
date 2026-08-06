"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react"
import Image from "next/image"
import { siteConfig } from "@/lib/site-config"
import { whatsappHref, trackWhatsAppLead } from "@/lib/whatsapp"

interface PatientResult {
  id: number
  photos: {
    src: string
    alt: string
  }[]
}

const patients: PatientResult[] = [
  {
    id: 1,
    photos: [
      { src: "/images/paciente1-1.webp", alt: "Resultado de tratamento na Benevento Fisioterapia" },
      { src: "/images/paciente1-2.webp", alt: "Resultado de tratamento na Benevento Fisioterapia" },
      { src: "/images/paciente1-3.webp", alt: "Resultado de tratamento na Benevento Fisioterapia" },
      { src: "/images/paciente1-4.webp", alt: "Resultado de tratamento na Benevento Fisioterapia" },
      { src: "/images/paciente1-5.webp", alt: "Resultado de tratamento na Benevento Fisioterapia" },
      { src: "/images/paciente1-6.webp", alt: "Resultado de tratamento na Benevento Fisioterapia" },
    ],
  },
  {
    id: 2,
    photos: [
      { src: "/images/paciente2-1.webp", alt: "Resultado de tratamento na Benevento Fisioterapia" },
    ],
  },
  {
    id: 3,
    photos: [
      { src: "/images/paciente3-1.webp", alt: "Resultado de tratamento na Benevento Fisioterapia" },
      { src: "/images/paciente3-2.webp", alt: "Resultado de tratamento na Benevento Fisioterapia" },
      { src: "/images/paciente3-3.webp", alt: "Resultado de tratamento na Benevento Fisioterapia" },
      { src: "/images/paciente3-4.webp", alt: "Resultado de tratamento na Benevento Fisioterapia" },
    ],
  },
]

function PatientCard({ patient }: { patient: PatientResult }) {
  const [activePhoto, setActivePhoto] = useState(0)
  const hasPhotos = patient.photos.length > 0
  const hasMultiple = patient.photos.length > 1

  return (
    <div className="flex-shrink-0 w-[320px] md:w-[380px] bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
      {/* Carrossel de fotos */}
      <div className="relative bg-muted aspect-square">
        {hasPhotos ? (
          <>
            <Image
              src={patient.photos[activePhoto].src}
              alt={patient.photos[activePhoto].alt}
              fill
              sizes="(max-width: 768px) 320px, 380px"
              className="object-contain"
            />

            {/* Navegação entre fotos */}
            {hasMultiple && (
              <>
                <button
                  onClick={() => setActivePhoto((prev) => (prev === 0 ? patient.photos.length - 1 : prev - 1))}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActivePhoto((prev) => (prev === patient.photos.length - 1 ? 0 : prev + 1))}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
                  aria-label="Proxima foto"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Indicadores */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {patient.photos.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePhoto(idx)}
                      className={`w-2 h-2 rounded-full transition-colors ${idx === activePhoto ? "bg-white" : "bg-white/40"}`}
                      aria-label={`Ver foto ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
            Foto em breve
          </div>
        )}
      </div>
    </div>
  )
}

export function PatientResultsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const amount = 400
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    })
  }

  // Compliance (COFFITO/CREFITO): fotos antes/depois podem ser ocultadas
  // inteiramente alterando showBeforeAfterPhotos em lib/site-config.ts.
  if (!siteConfig.showBeforeAfterPhotos) return null

  return (
    <section className="bg-secondary/20 py-14 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Cabecalho */}
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Resultados reais</p>
          <h2 className="text-balance font-serif text-2xl font-bold text-foreground md:text-4xl">
            Pacientes atendidos aqui na clínica
          </h2>
        </div>

        {/* Carrossel com botoes de navegacao */}
        <div className="relative">
          {/* Botao esquerda */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-md items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Rolar para esquerda"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards deslizantes */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {patients.map((patient) => (
              <div key={patient.id} className="snap-start">
                <PatientCard patient={patient} />
              </div>
            ))}
          </div>

          {/* Botao direita */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-md items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Rolar para direita"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Instrucao mobile */}
        <p className="mt-4 text-center text-xs text-muted-foreground md:hidden">Deslize para ver mais pacientes</p>

        <div className="mt-8 text-center">
          <a
            href={whatsappHref("Ola! Vi os resultados no site e quero agendar uma avaliacao.")}
            target="_blank"
            rel="noopener noreferrer"
            data-gtm="cta-whatsapp-contato"
            onClick={trackWhatsAppLead}
            className="inline-flex h-14 w-full max-w-sm items-center justify-center gap-2 rounded-xl bg-green-600 px-8 text-base font-bold text-white shadow-lg transition-colors hover:bg-green-700"
          >
            <MessageCircle className="h-5 w-5 shrink-0" />
            Quero um plano para o meu caso
          </a>
        </div>

        {/* Disclaimer obrigatorio — nao prometer cura */}
        <p className="mx-auto mt-8 max-w-2xl text-pretty text-center text-xs text-muted-foreground/80">
          {siteConfig.resultsDisclaimer}
        </p>
      </div>
    </section>
  )
}
