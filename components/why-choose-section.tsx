import { Heart, ShieldCheck, UserCheck, Stethoscope, Sparkles } from "lucide-react"

const pillars = [
  {
    icon: Heart,
    title: "Visão Integral do Corpo",
    description:
      "Avaliamos seu corpo inteiro, postura, estilo de vida e até emoções que contribuem para o desconforto.",
  },
  {
    icon: Stethoscope,
    title: "Experiência em Coluna",
    description: "Mais de 15 anos tratando dores de coluna, ombros e articulações. Centenas de pacientes recuperados.",
  },
  {
    icon: ShieldCheck,
    title: "Quiropraxia Segura",
    description: "Técnica instrumental moderna, sem manobras agressivas. Ideal para quem tem medo ou nunca fez.",
  },
  {
    icon: UserCheck,
    title: "Tratamentos Personalizados",
    description:
      "Nada de protocolo pronto. Seu plano é montado após avaliação detalhada e ajustado conforme sua evolução.",
  },
  {
    icon: Sparkles,
    title: "Ambiente Acolhedor",
    description: "Você é ouvido, compreendido e acompanhado em cada etapa. Não é só mais um paciente.",
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-foreground mb-4 text-balance">
            Por Que Tantos Pacientes Confiam na Dra. Licemara?
          </h2>

          <p className="text-xl text-center text-muted-foreground mb-16 text-pretty">
            Referência em tratamento de coluna e dores crônicas em Várzea Paulista
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3 text-balance">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{pillar.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
