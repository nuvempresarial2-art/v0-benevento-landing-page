import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppCtaButton } from "@/components/whatsapp-cta-button"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, MessageCircle, Heart, Sparkles, Clock } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Somato Análise | Benevento Fisioterapia",
  description: "Libere tensões emocionais que se transformam em dor física. Abordagem integrativa corpo-mente-emoção.",
}

export default function SomatoAnalisePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-primary/20 via-secondary/10 to-muted/30 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Somato Análise
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
                Libere tensões emocionais que se transformam em dor física
              </p>
              <WhatsAppCtaButton
                message="Ola! Vim pelo site e gostaria de agendar uma avaliacao."
                label="Agendar pelo WhatsApp"
                gtm="cta-whatsapp-tratamento-topo"
                size="lg"
                className="h-auto px-8 py-6 text-lg"
              />
              <p className="text-muted-foreground mt-4">Atendimento em Várzea Paulista – SP | Benevento Fisioterapia</p>
            </div>
          </div>
        </section>

        {/* O que é */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">O que é Somato Análise?</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  A Somato Análise é uma abordagem terapêutica que integra corpo, mente e emoção. Ela parte do princípio
                  de que muitas dores físicas – especialmente as crônicas e sem causa aparente – têm origem em tensões
                  emocionais não processadas, traumas antigos ou padrões de estresse acumulados ao longo da vida.
                </p>
                <p>
                  Quando vivemos situações de medo, raiva, tristeza ou ansiedade sem conseguir expressar ou elaborar
                  essas emoções, o corpo "guarda" essas memórias em forma de rigidez muscular, bloqueios respiratórios e
                  dores que parecem não ter explicação. A Somato Análise trabalha justamente nessa conexão: liberando as
                  tensões físicas enquanto acolhe e ressignifica as emoções subjacentes.
                </p>
                <p>
                  Na Benevento, a Somato Análise é aplicada com profundo respeito ao seu ritmo e história. Não se trata
                  de "forçar" emoções ou fazer terapias invasivas – é um processo gradual de reconexão consigo mesmo,
                  onde corpo e mente trabalham juntos em direção ao equilíbrio e bem-estar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Para quem é indicada */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">Para quem é indicada?</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Dores crônicas sem causa orgânica clara",
                  "Tensões musculares persistentes ligadas ao estresse",
                  "Ansiedade e sintomas físicos (aperto no peito, dor de cabeça)",
                  "Insônia e dificuldade de relaxamento",
                  "Sensação de peso ou travamento no corpo",
                  "Dores que pioram em períodos de estresse emocional",
                  "Quadros de fibromialgia e fadiga crônica",
                  "Dificuldade de expressar emoções",
                  "Histórico de traumas ou perdas não elaboradas",
                  "Busca por autoconhecimento e equilíbrio emocional",
                ].map((indication, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{indication}</span>
                  </div>
                ))}
              </div>

              <Card className="bg-primary/5 border-primary/20 p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Principais Benefícios</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Alívio de dores crônicas de origem emocional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Redução de ansiedade e estresse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Melhora da qualidade do sono</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Maior consciência corporal e emocional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Sensação de leveza e bem-estar integral</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
                Como funciona a sessão?
              </h2>
              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Escuta e Acolhimento</h3>
                      <p className="text-muted-foreground">
                        Iniciamos com uma conversa acolhedora sobre sua história, suas dores e o que você tem vivido
                        emocionalmente. O espaço é seguro e livre de julgamentos.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Trabalho Corporal e Emocional</h3>
                      <p className="text-muted-foreground">
                        Através de técnicas manuais suaves, movimentos conscientes e respiração, trabalhamos as áreas de
                        tensão física enquanto acolhemos as emoções que podem surgir. Não é necessário "fazer" nada – o
                        corpo naturalmente se expressa.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Integração e Ressignificação</h3>
                      <p className="text-muted-foreground">
                        Ao final, conversamos sobre o que foi percebido e vivenciado durante a sessão. Muitas vezes,
                        insights importantes surgem, ajudando a ressignificar padrões antigos e abrir caminho para novas
                        formas de lidar com as emoções.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="bg-primary/5 border-primary/20 p-6 mt-8">
                <p className="text-center text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Um processo respeitoso:</strong> Cada pessoa tem seu próprio
                  ritmo. Não há pressa nem cobrança. Você será acompanhado com cuidado e empatia em cada etapa desse
                  caminho de autocura.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Por que fazer na Benevento */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-10 text-center">
                Por que fazer na Benevento?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-white">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Abordagem Integrativa Real</h3>
                  <p className="text-muted-foreground">
                    Na Benevento, realmente olhamos para você como um todo. Corpo, mente e emoção são trabalhados de
                    forma integrada, sem separações artificiais.
                  </p>
                </Card>

                <Card className="p-6 bg-white">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Formação em Somato Análise</h3>
                  <p className="text-muted-foreground">
                    Dra. Licemara possui formação específica em Somato Análise e 17 anos de experiência em práticas
                    integrativas, garantindo um acompanhamento seguro e profundo.
                  </p>
                </Card>

                <Card className="p-6 bg-white">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Espaço Seguro e Acolhedor</h3>
                  <p className="text-muted-foreground">
                    Ambiente tranquilo e privativo, onde você pode se permitir sentir, relaxar e se reconectar sem
                    julgamentos ou pressões.
                  </p>
                </Card>

                <Card className="p-6 bg-white">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Respeito ao Seu Ritmo</h3>
                  <p className="text-muted-foreground">
                    Não há pressa. Cada sessão é conduzida no seu tempo, respeitando suas necessidades emocionais e
                    físicas.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mini FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">Perguntas Frequentes</h2>
              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Vou precisar falar sobre traumas pessoais?</h3>
                  <p className="text-muted-foreground">
                    Não necessariamente. A Somato Análise trabalha com o que o corpo expressa no momento presente. Você
                    só compartilha o que se sentir confortável para compartilhar.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Somato Análise substitui a psicoterapia?</h3>
                  <p className="text-muted-foreground">
                    Não. Ela é complementar. Se você faz terapia, a Somato Análise pode potencializar seus resultados ao
                    trabalhar as questões emocionais também pelo corpo.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Vou chorar ou ter reações emocionais fortes?</h3>
                  <p className="text-muted-foreground">
                    Pode acontecer, mas não é obrigatório. Cada pessoa reage de forma única. O importante é que o
                    ambiente é seguro e você será acolhido em qualquer reação que surgir.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Quantas sessões são necessárias?</h3>
                  <p className="text-muted-foreground">
                    Varia de acordo com sua necessidade. Algumas pessoas sentem alívio já nas primeiras sessões, outras
                    preferem manter um acompanhamento mais longo. Vamos construir isso juntos.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-br from-accent/90 to-accent text-accent-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Pronto para liberar suas tensões emocionais?
              </h2>
              <p className="text-xl mb-8 text-accent-foreground/90">
                Agende sua sessão e inicie um processo de reconexão profunda com seu corpo e suas emoções.
              </p>
              <WhatsAppCtaButton
                message="Ola! Vim pelo site e gostaria de agendar uma avaliacao."
                label="Agendar pelo WhatsApp"
                gtm="cta-whatsapp-tratamento-final"
                size="lg"
                className="h-auto px-8 py-6 text-lg"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
