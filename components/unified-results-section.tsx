import { CheckCircle2 } from "lucide-react"

const results = [
  "Redução significativa da intensidade e frequência da dor",
  "Melhora do movimento e flexibilidade do corpo",
  "Mais disposição para atividades do dia a dia",
  "Sono mais reparador e menos interrupções noturnas",
  "Maior confiança para se movimentar sem medo de piorar",
  "Diminuição ou eliminação da dependência de analgésicos",
  "Melhor postura e consciência corporal",
  "Capacidade de voltar a atividades que você ama",
  "Menos estresse e ansiedade relacionados à dor",
  "Sensação de bem-estar físico e emocional",
]

export function UnifiedResultsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-foreground mb-6 text-balance">
            Resultados Que Nossos Pacientes Costumam Perceber
          </h2>

          <p className="text-lg text-center text-muted-foreground mb-12 text-pretty max-w-[65ch] mx-auto">
            Cada pessoa responde de forma única, mas estes são alguns dos benefícios relatados por quem já passou pela
            clínica:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {results.map((result, index) => (
              <div
                key={index}
                className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-border/30"
              >
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-pretty">{result}</span>
              </div>
            ))}
          </div>

          <div className="bg-secondary/20 border border-primary/20 rounded-lg p-6 text-center">
            <p className="text-muted-foreground text-pretty max-w-[60ch] mx-auto">
              <strong className="text-foreground">Importante:</strong> Os resultados variam de pessoa para pessoa e
              dependem de diversos fatores, incluindo adesão ao tratamento e quadro clínico individual. Não prometemos
              cura milagrosa, mas um tratamento sério e personalizado.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
