"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Flower2, Heart, Sparkles, Brain, CheckCircle2 } from "lucide-react"

export default function TerapiaFloralPage() {
  const handleWhatsAppClick = () => {
    const whatsappNumber = "5511995625889"
    const message = encodeURIComponent("Ola! Gostaria de saber mais sobre Terapia Floral.")
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
  }

  const benefits = [
    "Redução de ansiedade e estresse",
    "Melhora do equilíbrio emocional",
    "Auxílio no tratamento de traumas emocionais",
    "Fortalecimento da autoestima",
    "Apoio em processos de luto e mudanças",
    "Harmonização de padrões mentais negativos",
  ]

  const idealFor = [
    "Pessoas com ansiedade e estresse",
    "Quem busca equilíbrio emocional",
    "Momentos de transição de vida",
    "Tratamento de traumas emocionais",
    "Apoio em processos terapêuticos",
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Flower2 className="h-12 w-12 text-primary" />
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-center">Terapia Floral</h1>
            </div>
            <p className="text-xl text-muted-foreground text-center mb-8 max-w-3xl mx-auto text-pretty">
              Equilíbrio emocional através da energia vibracional das flores para harmonizar suas emoções e promover
              bem-estar integral.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 h-14 font-semibold"
              >
                Agendar Consulta pelo WhatsApp
              </Button>
            </div>
          </div>
        </section>

        {/* O que é Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6 text-center">
              O que é a Terapia Floral?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4 leading-relaxed">
                A Terapia Floral é um sistema terapêutico natural que utiliza essências florais para tratar
                desequilíbrios emocionais, mentais e comportamentais. Desenvolvida pelo médico inglês Dr. Edward Bach na
                década de 1930, essa terapia trabalha com a energia vibracional das flores para harmonizar estados
                emocionais.
              </p>
              <p className="mb-4 leading-relaxed">
                As essências florais atuam no campo energético da pessoa, ajudando a dissolver padrões emocionais
                negativos como medo, ansiedade, raiva, tristeza e insegurança. Diferente de medicamentos, os florais não
                possuem contraindicações e podem ser usados por pessoas de todas as idades.
              </p>
              <p className="leading-relaxed">
                Na Clínica Benevento, a Terapia Floral é integrada ao tratamento fisioterapêutico, reconhecendo que as
                emoções influenciam diretamente a saúde física. Muitas dores crônicas têm componentes emocionais que,
                quando tratados, potencializam significativamente os resultados do tratamento físico.
              </p>
            </div>
          </div>
        </section>

        {/* Benefícios Section */}
        <section className="py-16 px-4 bg-secondary/20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
              Benefícios da Terapia Floral
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <Card key={benefit} className="p-4 flex items-start gap-3 bg-white border-none shadow-sm">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Como Funciona Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
              Como Funciona o Tratamento
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-none">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">1. Avaliação Emocional</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Conversa detalhada para identificar padrões emocionais, traumas e bloqueios que precisam ser
                  trabalhados.
                </p>
              </Card>

              <Card className="p-6 text-center bg-gradient-to-br from-secondary/5 to-secondary/10 border-none">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">2. Seleção Personalizada</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Escolha de essências florais específicas para seu caso, criando uma fórmula única e personalizada.
                </p>
              </Card>

              <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-none">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">3. Acompanhamento</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Reavaliações periódicas para ajustar a fórmula conforme sua evolução emocional e necessidades.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Ideal Para Section */}
        <section className="py-16 px-4 bg-secondary/20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">Ideal Para Quem</h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {idealFor.map((item) => (
                <Card key={item} className="p-4 flex items-start gap-3 bg-white border-none shadow-sm">
                  <Flower2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pronta para Equilibrar suas Emoções?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Agende uma consulta e descubra como a Terapia Floral pode ajudar você a alcançar equilíbrio emocional e
              bem-estar integral.
            </p>
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 h-14 font-semibold"
            >
              Agendar Consulta pelo WhatsApp
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
