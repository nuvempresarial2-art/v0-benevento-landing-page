import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Hand, User, Brain, Flower } from "lucide-react"
import Link from "next/link"

const treatments = [
  {
    icon: Hand,
    title: "Quiropraxia Instrumental",
    benefit: "Alívio rápido e seguro para dores na coluna, sem manobras agressivas",
    bgColor: "bg-white",
    href: "/tratamentos/quiropraxia-instrumental",
  },
  {
    icon: User,
    title: "RPG/RPM",
    benefit: "Corrija sua postura e elimine dores causadas por desequilíbrios corporais",
    bgColor: "bg-muted/30",
    href: "/tratamentos/rpg-rpm",
  },
  {
    icon: Brain,
    title: "Somato Análise",
    benefit: "Libere tensões emocionais que se transformam em dor física",
    bgColor: "bg-white",
    href: "/tratamentos/somato-analise",
  },
  {
    icon: Flower,
    title: "Terapia Floral e Acupuntura",
    benefit: "Equilíbrio emocional e energético para potencializar sua recuperação",
    bgColor: "bg-muted/30",
    href: "/tratamentos/terapia-floral-e-acupuntura",
  },
]

export function TreatmentsSection() {
  return (
    <section id="tratamentos" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-foreground mb-4 text-balance">
          Nossos Tratamentos
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto text-pretty">
          Abordagem integrativa para sua saúde e bem-estar
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {treatments.map((treatment) => {
            const Icon = treatment.icon
            return (
              <Card
                key={treatment.title}
                className={`${treatment.bgColor} p-8 border-border shadow-md hover:shadow-lg transition-all`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3 text-balance">
                    {treatment.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">{treatment.benefit}</p>

                  <Link href={treatment.href}>
                    <Button
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                    >
                      Saiba mais
                    </Button>
                  </Link>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
