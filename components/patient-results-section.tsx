"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface PatientResult {
  id: number
  name: string
  age?: string
  problem: string
  treatment: string
  result: string
  photos: {
    src: string
    label: string
    alt: string
  }[]
}

const patients: PatientResult[] = [
  {
    id: 1,
    name: "Paciente J.C.",
    problem:
      "Desalinhamento postural visivel, com diferenca significativa entre os ombros. A assimetria era perceptivel inclusive ao vestir o uniforme de trabalho, causando incomodo estetico e funcional no dia a dia, apesar de nao apresentar dor.",
    treatment:
      "Sessoes de RPG (Reeducacao Postural Global) focadas na correcao do alinhamento corporal e equilibrio das cadeias musculares responsaveis pela postura.",
    result:
      "Correcao progressiva do desalinhamento dos ombros e melhora do equilibrio postural geral. Tratamento realizado em 6 sessoes semanais, promovendo melhor ajuste corporal e maior conforto no dia a dia.",
    photos: [
      {
        src: "/images/paciente1-frente.jpeg",
        label: "Vista Frontal",
        alt: "Paciente J.C. - comparativo frontal antes e depois do tratamento na Benevento Fisioterapia",
      },
      {
        src: "/images/paciente1-costas.jpeg",
        label: "Vista Posterior",
        alt: "Paciente J.C. - comparativo posterior antes e depois do tratamento na Benevento Fisioterapia",
      },
    ],
  },
  {
    id: 2,
    name: "Paciente R.S.",
    problem:
      "Historico de escoliose desde a adolescencia, associado a rotina de trabalho prolongado sentado. Apresentava dores recorrentes principalmente na regiao do trapezio e cervical, alem de sobrecarga muscular.",
    treatment:
      "Tratamento fisioterapeutico com foco em correcao postural e reequilibrio muscular, utilizando tecnicas de RPG para melhorar o alinhamento da coluna e reduzir as tensoes musculares acumuladas.",
    result:
      "Reducao das dores na regiao cervical e do trapezio, melhora da postura e maior equilibrio das cadeias musculares, contribuindo para melhor conforto durante a rotina de trabalho. Tratamento realizado em 8 sessoes.",
    photos: [
      {
        src: "/images/paciente2-frente.png",
        label: "Vista Frontal",
        alt: "Paciente R.S. - comparativo frontal antes e depois do tratamento na Benevento Fisioterapia",
      },
      {
        src: "/images/paciente2-costas.png",
        label: "Vista Posterior",
        alt: "Paciente R.S. - comparativo posterior antes e depois do tratamento na Benevento Fisioterapia",
      },
    ],
  },
  {
    id: 3,
    name: "Paciente A.M.",
    problem:
      "Rotina de trabalho predominantemente sentada e alto nivel de estresse, apresentando dor intensa na regiao cervical e no trapezio, associada a tensao muscular e vicios posturais.",
    treatment:
      "Tratamento fisioterapeutico voltado inicialmente para reducao das tensoes musculares, seguido de correcao estrutural postural por meio de tecnicas de RPG para reeducacao muscular e alinhamento corporal.",
    result:
      "Diminuicao significativa das tensoes musculares, melhora da postura e reducao das dores na regiao cervical e trapezio, promovendo maior bem-estar e qualidade de vida no cotidiano.",
    photos: [
      {
        src: "/images/paciente3-frente.png",
        label: "Vista Frontal",
        alt: "Paciente A.M. - comparativo frontal antes e depois do tratamento na Benevento Fisioterapia",
      },
      {
        src: "/images/paciente3-costas.png",
        label: "Vista Posterior",
        alt: "Paciente A.M. - comparativo posterior antes e depois do tratamento na Benevento Fisioterapia",
      },
    ],
  },
]

function PatientCard({ patient }: { patient: PatientResult }) {
  const [activePhoto, setActivePhoto] = useState(0)
  const hasPhotos = patient.photos.length > 0

  return (
    <div className="flex-shrink-0 w-[320px] md:w-[380px] bg-card rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col">
      {/* Fotos com navegação */}
      <div className="relative bg-muted h-72">
        {hasPhotos ? (
          <>
            <Image
              src={patient.photos[activePhoto].src}
              alt={patient.photos[activePhoto].alt}
              fill
              className="object-cover"
            />
            {/* Label */}
            <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
              {patient.photos[activePhoto].label}
            </span>

            {/* Navegação entre fotos */}
            {patient.photos.length > 1 && (
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
              </>
            )}

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
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
            Foto em breve
          </div>
        )}
      </div>

      {/* Informacoes do paciente */}
      <div className="p-5 flex flex-col gap-4 flex-1">
        <h3 className="font-serif text-lg font-bold text-foreground">{patient.name}</h3>

        <div className="flex flex-col gap-3">
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Problema</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{patient.problem}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Tratamento realizado</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{patient.treatment}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">Resultado</p>
            <p className="text-sm text-foreground font-medium leading-relaxed">{patient.result}</p>
          </div>
        </div>
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

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Cabecalho */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Resultados Reais</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Transformacoes dos Nossos Pacientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Veja a evolucao real de pacientes que passaram pelo tratamento na Benevento Fisioterapia. Resultados
            conquistados com dedicacao, metodo e cuidado personalizado.
          </p>
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
        <p className="text-center text-xs text-muted-foreground mt-4 md:hidden">
          Deslize para ver mais pacientes
        </p>
      </div>
    </section>
  )
}
