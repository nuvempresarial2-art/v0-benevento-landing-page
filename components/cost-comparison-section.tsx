"use client"

import { Check, MessageCircle, X } from "lucide-react"
import { techniques } from "@/components/about-section"
import { bridgeHref, trackWhatsAppLead } from "@/lib/whatsapp"
import { siteConfig } from "@/lib/site-config"

const surgeryPoints = ["Corte, anestesia e internação", "Semanas de recuperação e afastamento"]

const treatmentPoints = ["Sem corte, sem agulha e sem internação", "Sessões no consultório, sem sair da rotina"]

const MESSAGE =
  "Ola! Vi no site a comparacao com a cirurgia e quero saber se a maca de flexo distracao serve para o meu caso."

/**
 * Comparativo de valor: cirurgia de coluna x tratamento com a maca.
 *
 * Fica logo depois da EquipmentSection porque responde a pergunta que vem
 * na sequencia de "o que e a maca": quanto custa perto da alternativa que a
 * pessoa ja ouviu do medico. A barra minuscula do tratamento faz o argumento
 * sem precisar de texto.
 *
 * O bloco "nao e so a maca" existe para o valor nao ser lido como preco de
 * sessao de aparelho: o atendimento e integrativo.
 *
 * Tudo some com siteConfig.pricing.enabled = false.
 */
export function CostComparisonSection() {
  const { pricing } = siteConfig
  if (!pricing.enabled) return null

  const bars = [
    { ...pricing.surgery, percent: 100, highlight: false },
    { ...pricing.treatment, percent: pricing.treatment.percentOfSurgery, highlight: true },
  ]

  return (
    <section id="valores" className="scroll-mt-20 bg-accent py-14 text-accent-foreground md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center md:mb-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/70">Quanto custa</p>
            <h2 className="mb-3 text-balance font-serif text-2xl font-bold md:text-4xl">
              Antes de pensar em cirurgia, compare
            </h2>
            <p className="mx-auto max-w-[54ch] text-pretty text-sm text-white/80 md:text-base">
              Muita gente chega aqui depois de ouvir que o caminho é operar. Veja a diferença de valor entre as duas
              vias.
            </p>
          </div>

          {/* Comparativo em barras: as duas marcas tem rotulo e valor escritos,
              entao a leitura nao depende de cor nem de hover. */}
          <div className="mb-6 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 md:p-8">
            <dl className="space-y-6">
              {bars.map((bar) => (
                <div key={bar.label}>
                  <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <dt className="text-sm text-white/80 md:text-base">{bar.label}</dt>
                    <dd
                      className={
                        bar.highlight
                          ? "font-serif text-xl font-bold md:text-2xl"
                          : "font-serif text-lg font-semibold text-white/80 md:text-xl"
                      }
                    >
                      {bar.value}
                    </dd>
                  </div>
                  <div className="h-4 w-full rounded-full bg-white/10" aria-hidden="true">
                    <div
                      className={bar.highlight ? "h-full min-w-3 rounded-full bg-white" : "h-full rounded-full bg-white/35"}
                      style={{ width: `${bar.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </dl>

            <p className="mt-5 text-xs text-white/60">
              Valores de referência. O custo de uma cirurgia varia conforme o procedimento e o hospital.
            </p>
          </div>

          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
              <p className="mb-3 font-semibold text-white/80">Na cirurgia</p>
              <ul className="space-y-2">
                {surgeryPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-white/75">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                    <span className="text-pretty">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-white/10 p-5 ring-1 ring-white/25">
              <p className="mb-3 font-semibold">Na maca de flexo-distração</p>
              <ul className="space-y-2">
                {treatmentPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" />
                    <span className="text-pretty">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Nao e so a maca: o valor cobre um atendimento integrativo. */}
          <div className="mb-8 rounded-2xl bg-white p-5 text-foreground md:p-8">
            <h3 className="mb-2 text-balance font-serif text-lg font-bold md:text-xl">
              E não é só a maca: o atendimento é integrativo
            </h3>
            <p className="mb-4 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
              A Dra. Licemara não trata a coluna com um aparelho só. Conforme o seu caso, a maca entra no plano junto
              com as outras técnicas que ela usa. O acompanhamento é do seu caso inteiro, não só da sessão na máquina.
            </p>
            <ul className="flex flex-wrap gap-2">
              {techniques.map((technique) => {
                const Icon = technique.icon
                return (
                  <li
                    key={technique.name}
                    className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-xs font-medium md:text-sm"
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0 text-primary" />
                    {technique.name}
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="text-center">
            <a
              href={bridgeHref(MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              data-gtm="cta-whatsapp-comparativo"
              onClick={trackWhatsAppLead}
              className="inline-flex h-14 w-full max-w-sm items-center justify-center gap-2 rounded-xl bg-green-600 px-8 text-base font-bold text-white shadow-lg transition-colors hover:bg-green-700 md:text-lg"
            >
              <MessageCircle className="h-5 w-5 shrink-0" />
              Ver se serve para o meu caso
            </a>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-xs text-white/60">
              A comparação é só de valores. A maca não substitui uma cirurgia quando ela é indicada — é a avaliação que
              mostra qual caminho faz sentido para o seu caso.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
