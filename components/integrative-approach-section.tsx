import { Hand, User, Brain, Flower } from "lucide-react"

const techniques = [
  { icon: Hand, name: "Quiropraxia Instrumental" },
  { icon: User, name: "RPG/RPM (Reeducação Postural)" },
  { icon: Brain, name: "Somato Análise" },
  { icon: Flower, name: "Terapia Floral e Auriculoterapia" },
]

export function IntegrativeApproachSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-foreground mb-6 text-balance">
            Muito Além da Fisioterapia Tradicional
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-pretty">
                Trabalhamos com uma <strong className="text-foreground">abordagem integrativa</strong> que combina o
                melhor da fisioterapia ortopédica com técnicas complementares.
              </p>

              <p className="text-pretty">
                Não tratamos apenas o sintoma – investigamos também as{" "}
                <strong className="text-foreground">tensões emocionais</strong> guardadas no corpo, os{" "}
                <strong className="text-foreground">padrões posturais</strong> inadequados e os hábitos que mantêm o
                ciclo da dor.
              </p>
            </div>

            {/* Lista de técnicas */}
            <div className="bg-muted/50 rounded-lg p-8">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 text-balance">
                Técnicas Integradas
              </h3>
              <div className="space-y-4">
                {techniques.map((technique) => {
                  const Icon = technique.icon
                  return (
                    <div key={technique.name} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">{technique.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
