"use client"

import { Fragment, useState } from "react"
import Image from "next/image"
import {
  Activity,
  ArrowUpDown,
  BedDouble,
  Layers,
  MessageCircle,
  Move,
  Ruler,
  Settings2,
  ShieldCheck,
  Sparkles,
  Waves,
  Zap,
  type LucideIcon,
} from "lucide-react"
import { bridgeHref, trackWhatsAppLead } from "@/lib/whatsapp"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

/**
 * ---------------------------------------------------------------------------
 * FOTO DO EQUIPAMENTO — troque quando tiver a imagem da maca na clinica.
 *
 * Coloque o arquivo em /public/images (webp de preferencia) e escreva o
 * caminho aqui, por exemplo: "/images/maca-flexo-distracao-500z.webp".
 * Enquanto for null, a coluna mostra so o diagrama interativo — que ja funciona
 * sozinho e nao deixa buraco no layout.
 *
 * IMPORTANTE p/ trafego pago: use aqui a MESMA foto do criativo do anuncio.
 * O reconhecimento visual imediato ("e essa mesma maca") e o que segura a
 * pessoa na pagina nos primeiros segundos.
 * -------------------------------------------------------------------------- */
const EQUIPMENT_PHOTO: { src: string; alt: string } | null = null

/** Ficha tecnica curta — le-se de relance, sem jargao. */
const specs = [
  { icon: Settings2, text: "Movimento controlado eletronicamente" },
  { icon: Ruler, text: "Laterização e rotação ajustáveis" },
  { icon: ShieldCheck, text: "Não invasiva: sem corte, sem agulha" },
  { icon: Sparkles, text: "TechMec® — tecnologia brasileira" },
]

/** Como funciona, em 3 passos. Um por linha, frase curta. */
const steps = [
  {
    icon: BedDouble,
    title: "Você deita e relaxa",
    description: "Sem esforço e sem posição forçada. Quem trabalha é a maca.",
  },
  {
    icon: Waves,
    title: "A maca faz o movimento",
    description: "Flexão suave e controlada, regulada para a sua coluna.",
  },
  {
    icon: ArrowUpDown,
    title: "A pressão sai da coluna",
    description: "O movimento abre espaço entre as vértebras e alivia o disco.",
  },
]

type Condition = {
  id: string
  chip: string
  icon: LucideIcon
  headline: string
  body: string
  bullets: string[]
  message: string
}

/**
 * O seletor de casos e o coracao da secao: em vez de um texto tecnico que
 * ninguem le, a pessoa toca no que ela sente e recebe a resposta do caso dela
 * — ja com um CTA cuja mensagem chega no WhatsApp com o contexto certo.
 */
const conditions: Condition[] = [
  {
    id: "hernia",
    chip: "Hérnia ou protrusão de disco",
    icon: Layers,
    headline: "Tirar a pressão de cima do disco",
    body: "A flexo-distração afasta as vértebras com movimentos suaves e reduz a carga sobre o disco — normalmente é essa sobrecarga que gera a dor e o formigamento.",
    bullets: [
      "Recurso conservador: sem corte, sem agulha e sem afastamento.",
      "Procurada inclusive por quem já ouviu falar em cirurgia e quer tentar antes uma via não invasiva.",
    ],
    message: "Ola! Vi a maca de flexo distracao 500Z no site. Tenho hernia ou protrusao de disco e quero saber se serve para o meu caso.",
  },
  {
    id: "lombalgia",
    chip: "Dor lombar",
    icon: Activity,
    headline: "Aliviar a lombar que dói o dia inteiro",
    body: "O movimento controlado reduz a sobrecarga nos segmentos da lombar e ajuda a soltar a tensão muscular que vem junto com a dor.",
    bullets: [
      "A intensidade acompanha o que o seu corpo aceita naquele dia.",
      "Combina com o restante do tratamento: quiropraxia, RPG e terapia manual.",
    ],
    message: "Ola! Vi a maca de flexo distracao 500Z no site. Tenho dor lombar e quero saber se serve para o meu caso.",
  },
  {
    id: "ciatica",
    chip: "Dor ciática ou formigamento",
    icon: Zap,
    headline: "Quando a dor desce pela perna",
    body: "Dor que irradia, formigamento ou dormência costumam vir de uma raiz nervosa sob pressão. A descompressão trabalha exatamente essa região.",
    bullets: [
      "O ajuste é feito no segmento que está gerando o sintoma.",
      "A avaliação identifica de onde vem a dor antes de qualquer sessão.",
    ],
    message: "Ola! Vi a maca de flexo distracao 500Z no site. Tenho dor ciatica ou formigamento na perna e quero saber se serve para o meu caso.",
  },
  {
    id: "mobilidade",
    chip: "Coluna travada",
    icon: Move,
    headline: "Voltar a se mover sem medo",
    body: "Movimentos graduais devolvem mobilidade à coluna e à pelve, no ritmo que o seu corpo permite — sem solavanco e sem esforço da sua parte.",
    bullets: [
      "Indicada para quem sente rigidez ao levantar da cama ou do carro.",
      "Ganho de amplitude trabalhado sessão a sessão, sem forçar.",
    ],
    message: "Ola! Vi a maca de flexo distracao 500Z no site. Minha coluna vive travada e quero saber se serve para o meu caso.",
  },
  {
    id: "mecanica",
    chip: "Alterações mecânicas da coluna",
    icon: Ruler,
    headline: "Ajustada à sua coluna, não o contrário",
    body: "Com os recursos de laterização e rotação, o movimento é regulado caso a caso. Duas colunas diferentes não recebem o mesmo ajuste.",
    bullets: [
      "Os parâmetros são definidos a partir dos seus testes de movimento.",
      "O plano é revisto conforme a sua coluna responde.",
    ],
    message: "Ola! Vi a maca de flexo distracao 500Z no site. Tenho uma alteracao na coluna e quero saber se serve para o meu caso.",
  },
]

/** Beneficios em uma linha so — para bater o olho, nao para ler. */
const benefits = [
  "Alívio da dor",
  "Descompressão vertebral",
  "Mais mobilidade",
  "Menos tensão muscular",
  "Sem cirurgia",
]

const VERTEBRAE = [0, 1, 2, 3, 4, 5]

/**
 * Diagrama do princípio da flexo-distração, controlado pela pessoa.
 *
 * Vale mais que um paragrafo explicando "descompressao vertebral": o dedo dela
 * abre o espaco entre as vertebras e a ideia fica obvia em um toque.
 */
function SpineDiagram({ decompressed }: { decompressed: boolean }) {
  return (
    <div className="flex flex-col items-center" aria-hidden="true">
      {VERTEBRAE.map((index) => (
        <Fragment key={index}>
          <div className="h-5 w-24 rounded-md bg-primary shadow-sm md:h-6 md:w-28" />
          {index < VERTEBRAE.length - 1 && (
            /* O disco e BRANCO nos dois estados de proposito: contra as
               vertebras em teal solido, o que muda e so a altura — e o "espaco
               abrindo" fica obvio sem precisar de legenda. Com o disco tambem
               em teal, a pilha inteira virava um bloco unico. */
            <div
              className={cn(
                "w-[4.5rem] rounded-full bg-white transition-all duration-700 ease-out md:w-[5.5rem]",
                decompressed ? "h-4 md:h-5" : "h-1 md:h-1.5",
              )}
            />
          )}
        </Fragment>
      ))}
    </div>
  )
}

const CTA_MESSAGE = "Ola! Vi a maca de flexo distracao 500Z no site e quero agendar uma avaliacao."

export function EquipmentSection() {
  const [decompressed, setDecompressed] = useState(false)
  const [activeId, setActiveId] = useState(conditions[0].id)

  const active = conditions.find((condition) => condition.id === activeId) ?? conditions[0]
  const ActiveIcon = active.icon

  return (
    <section id="equipamento" className="scroll-mt-20 bg-white py-14 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Cabecalho: a primeira linha existe para casar com o anuncio.
              Quem clicou no criativo precisa reconhecer o equipamento aqui. */}
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Novidade na clínica</p>
            <h2 className="mb-3 text-balance font-serif text-2xl font-bold text-foreground md:text-4xl">
              A maca de flexo-distração que você viu no anúncio
            </h2>
            <p className="mx-auto max-w-[56ch] text-pretty text-sm text-muted-foreground md:text-base">
              Descompressão vertebral com movimentos suaves e controlados eletronicamente — ajustados para a sua coluna,
              sem cirurgia e sem dor.
            </p>
          </div>

          <div className="mb-10 grid items-start gap-6 md:grid-cols-2 md:gap-8">
            {/* Coluna visual: foto (quando houver) + diagrama interativo */}
            <div className="rounded-2xl border border-border bg-muted/40 p-5 md:p-6">
              {EQUIPMENT_PHOTO && (
                <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-xl bg-white">
                  <Image
                    src={EQUIPMENT_PHOTO.src}
                    alt={EQUIPMENT_PHOTO.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover"
                  />
                </div>
              )}

              <p className="mb-3 text-center text-sm font-semibold text-foreground">
                Toque e veja o que acontece com a sua coluna
              </p>

              {/* Toggle de dois estados: comprimido x descomprimido */}
              <div className="mx-auto mb-5 flex max-w-sm rounded-full border border-border bg-white p-1">
                {[
                  { label: "Sob pressão", value: false },
                  { label: "Na flexo-distração", value: true },
                ].map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => setDecompressed(option.value)}
                    aria-pressed={decompressed === option.value}
                    className={cn(
                      "flex-1 rounded-full px-3 py-2 text-xs font-semibold transition-colors md:text-sm",
                      decompressed === option.value
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              <SpineDiagram decompressed={decompressed} />

              {/* aria-live: quem usa leitor de tela ouve a mudanca de estado */}
              <p
                aria-live="polite"
                className="mx-auto mt-5 min-h-[3rem] max-w-[38ch] text-pretty text-center text-sm text-muted-foreground"
              >
                {decompressed
                  ? "Espaço recuperado: menos carga sobre o disco e sobre o nervo — é isso que costuma aliviar a dor."
                  : "Disco comprimido entre as vértebras: é daí que costumam vir a dor e o formigamento."}
              </p>

              <p className="mt-3 text-center text-xs text-muted-foreground/70">
                Ilustração do princípio da flexo-distração.
              </p>
            </div>

            {/* Coluna de conteudo: 3 passos + ficha tecnica */}
            <div>
              <h3 className="mb-4 font-serif text-lg font-semibold text-foreground md:text-xl">
                Como é uma sessão, na prática
              </h3>

              <ol className="mb-6 space-y-3">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <li key={step.title} className="flex gap-4 rounded-xl border border-border/60 bg-muted/30 p-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white">
                        {index + 1}
                      </span>
                      <div>
                        <p className="mb-1 flex items-center gap-2 font-semibold text-foreground">
                          <Icon className="h-4 w-4 shrink-0 text-secondary" />
                          {step.title}
                        </p>
                        <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                      </div>
                    </li>
                  )
                })}
              </ol>

              <ul className="grid gap-2 sm:grid-cols-2">
                {specs.map((spec) => {
                  const Icon = spec.icon
                  return (
                    <li key={spec.text} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-pretty">{spec.text}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          {/* Seletor de casos: a pessoa toca no que sente e le so o que
              interessa a ela — e o CTA ja sai com o contexto na mensagem. */}
          <div className="rounded-2xl border border-border bg-muted/40 p-5 md:p-8">
            <h3 className="mb-1 text-balance text-center font-serif text-xl font-bold text-foreground md:text-2xl">
              Serve para o meu caso?
            </h3>
            <p className="mb-5 text-center text-sm text-muted-foreground">
              Toque no que você sente e veja o que a maca faz nessa situação.
            </p>

            {/* Chips: rolagem horizontal no mobile, quebra de linha no desktop */}
            <div className="-mx-5 mb-6 flex snap-x gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:justify-center md:overflow-visible md:px-0 md:pb-0">
              {conditions.map((condition) => {
                const Icon = condition.icon
                const isActive = condition.id === activeId
                return (
                  <button
                    key={condition.id}
                    type="button"
                    onClick={() => setActiveId(condition.id)}
                    aria-pressed={isActive}
                    className={cn(
                      "flex shrink-0 snap-start items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "border-primary bg-primary text-primary-foreground shadow-sm"
                        : "border-border bg-white text-muted-foreground hover:border-primary/40 hover:text-foreground",
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {condition.chip}
                  </button>
                )
              })}
            </div>

            {/* key força o remount a cada troca: reinicia a animacao de entrada */}
            <div key={active.id} className="animate-fade-up rounded-xl border-l-4 border-primary bg-white p-5 md:p-6">
              <p className="mb-2 flex items-center gap-2 text-balance font-serif text-lg font-bold text-foreground md:text-xl">
                <ActiveIcon className="h-5 w-5 shrink-0 text-primary" />
                {active.headline}
              </p>

              <p className="mb-4 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                {active.body}
              </p>

              <ul className="mb-5 space-y-2">
                {active.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-pretty">{bullet}</span>
                  </li>
                ))}
              </ul>

              <a
                href={bridgeHref(active.message)}
                target="_blank"
                rel="noopener noreferrer"
                data-gtm="cta-whatsapp-equipamento-caso"
                onClick={trackWhatsAppLead}
                className="inline-flex h-14 w-full max-w-sm items-center justify-center gap-2 rounded-xl bg-green-600 px-6 text-base font-bold text-white shadow-lg transition-colors hover:bg-green-700"
              >
                <MessageCircle className="h-5 w-5 shrink-0" />
                Perguntar sobre o meu caso
              </a>
            </div>

            {/* Beneficios: leitura de relance, sem paragrafo */}
            <ul className="mt-6 flex flex-wrap justify-center gap-2">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-foreground shadow-sm md:text-sm"
                >
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-primary" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Fechamento: a tecnologia nao substitui a avaliacao — e o que
              mantem a promessa honesta e a expectativa no lugar certo. */}
          <div className="mt-8 text-center">
            <p className="mx-auto mb-5 max-w-[54ch] text-pretty text-base text-foreground md:text-lg">
              A tecnologia sozinha não resolve. <strong>Seu tratamento começa com uma avaliação</strong> — é a partir
              dela que definimos se a maca entra no seu plano e com quais ajustes.
            </p>

            <a
              href={bridgeHref(CTA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              data-gtm="cta-whatsapp-equipamento"
              onClick={trackWhatsAppLead}
              className="inline-flex h-14 w-full max-w-sm items-center justify-center gap-2 rounded-xl bg-green-600 px-8 text-base font-bold text-white shadow-lg transition-colors hover:bg-green-700 md:text-lg"
            >
              <MessageCircle className="h-5 w-5 shrink-0" />
              Agendar minha avaliação
            </a>

            {siteConfig.offer.enabled && <p className="mt-3 text-sm text-muted-foreground">{siteConfig.offer.label}</p>}

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-xs text-muted-foreground/80">
              A maca de flexo-distração é um recurso terapêutico complementar e não substitui avaliação clínica. A
              indicação depende de cada caso e os resultados variam de pessoa para pessoa.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
