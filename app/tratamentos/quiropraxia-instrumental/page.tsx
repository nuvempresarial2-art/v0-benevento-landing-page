import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppCtaButton } from "@/components/whatsapp-cta-button"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, MessageCircle, Heart, Sparkles, Clock } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quiropraxia Instrumental | Benevento Fisioterapia",
  description:
    "Técnica moderna e precisa para alívio de dores na coluna, sem manobras agressivas. Atendimento em Várzea Paulista.",
}

export default function QuiropraxiaInstrumentalPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-muted/30 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Quiropraxia Instrumental
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
                Alívio rápido e seguro para dores na coluna, sem manobras agressivas
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
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                O que é a Quiropraxia Instrumental?
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  A Quiropraxia Instrumental é uma técnica moderna e precisa que utiliza instrumentos especializados
                  para ajustar as articulações da coluna e de outras regiões do corpo. Diferentemente das manipulações
                  manuais tradicionais, ela oferece um tratamento mais suave, controlado e confortável.
                </p>
                <p>
                  Através de impulsos mecânicos de alta velocidade e baixa amplitude, o instrumento corrige
                  desalinhamentos vertebrais, reduz tensões musculares e restaura a mobilidade articular – tudo isso sem
                  aqueles "estalos" que podem gerar receio em alguns pacientes.
                </p>
                <p>
                  Na Benevento, integramos a quiropraxia instrumental à nossa visão holística: corpo, mente e emoção
                  trabalham juntos. Por isso, não tratamos apenas a dor – buscamos entender a causa raiz, considerando
                  postura, hábitos, estresse emocional e padrões de movimento que podem estar perpetuando o problema.
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
                  "Dores na coluna cervical (pescoço)",
                  "Dores na coluna lombar (região baixa das costas)",
                  "Dores na coluna torácica (meio das costas)",
                  "Travamentos e rigidez na coluna",
                  "Dores de cabeça de origem tensional",
                  "Hérnias de disco (em fase não-aguda)",
                  "Dores ciáticas",
                  "Limitação de movimentos do tronco",
                  "Dores relacionadas à má postura",
                  "Desconforto ao ficar muito tempo sentado ou em pé",
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
                    <span>Alívio rápido da dor sem uso de medicamentos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Restauração da mobilidade e amplitude de movimento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Correção de desalinhamentos posturais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Redução de tensões musculares e espasmos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Prevenção de recidivas e agravamento do quadro</span>
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
                      <h3 className="font-semibold text-foreground mb-2">Avaliação Inicial</h3>
                      <p className="text-muted-foreground">
                        Conversamos sobre seu histórico de dor, realizamos testes de mobilidade e identificamos as
                        regiões que precisam de atenção.
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
                      <h3 className="font-semibold text-foreground mb-2">Aplicação da Técnica</h3>
                      <p className="text-muted-foreground">
                        Com o instrumento específico, aplicamos impulsos controlados nos pontos identificados. O
                        procedimento é indolor e você permanece confortável durante toda a sessão.
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
                      <h3 className="font-semibold text-foreground mb-2">Orientações Personalizadas</h3>
                      <p className="text-muted-foreground">
                        Ao final, você recebe orientações sobre postura, movimentos e cuidados para potencializar os
                        resultados e prevenir novas crises de dor.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="bg-secondary/10 border-secondary/30 p-6 mt-8">
                <p className="text-center text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Segurança e conforto:</strong> A quiropraxia instrumental é
                  considerada uma das formas mais seguras de ajuste vertebral, ideal para pessoas que buscam alívio sem
                  procedimentos invasivos.
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
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Visão Integrativa</h3>
                  <p className="text-muted-foreground">
                    Não tratamos apenas a dor pontual. Olhamos para você como um todo: corpo, mente e emoção, buscando a
                    causa raiz do problema.
                  </p>
                </Card>

                <Card className="p-6 bg-white">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    Experiência e Especialização
                  </h3>
                  <p className="text-muted-foreground">
                    Dra. Licemara possui 17 anos de experiência e formação em quiropraxia, somato análise e naturopatia,
                    garantindo um tratamento de excelência.
                  </p>
                </Card>

                <Card className="p-6 bg-white">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Tratamento Personalizado</h3>
                  <p className="text-muted-foreground">
                    Cada sessão é planejada para suas necessidades específicas, respeitando seu ritmo e suas limitações
                    individuais.
                  </p>
                </Card>

                <Card className="p-6 bg-white">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Ambiente Acolhedor</h3>
                  <p className="text-muted-foreground">
                    Espaço pensado para seu conforto e bem-estar, onde você se sente seguro e cuidado desde o primeiro
                    atendimento.
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
                  <h3 className="font-semibold text-foreground mb-2">A quiropraxia instrumental dói?</h3>
                  <p className="text-muted-foreground">
                    Não. O procedimento é indolor e muito mais suave que as manipulações manuais tradicionais. A maioria
                    dos pacientes relata apenas uma leve pressão durante a aplicação.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Quantas sessões são necessárias?</h3>
                  <p className="text-muted-foreground">
                    Depende do seu quadro clínico. Alguns pacientes sentem alívio já na primeira sessão, mas geralmente
                    recomendamos um protocolo de 4 a 8 sessões para resultados duradouros.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    Posso fazer quiropraxia se tenho hérnia de disco?
                  </h3>
                  <p className="text-muted-foreground">
                    Sim, mas é fundamental uma avaliação criteriosa. Em muitos casos, a técnica é segura e benéfica, mas
                    cada situação é única e será avaliada individualmente.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Há alguma contraindicação?</h3>
                  <p className="text-muted-foreground">
                    Fraturas recentes, infecções ósseas, osteoporose grave e algumas condições neurológicas podem
                    contraindicar o procedimento. Por isso, sempre realizamos uma avaliação completa antes de iniciar.
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
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Pronto para cuidar da sua dor?</h2>
              <p className="text-xl mb-8 text-accent-foreground/90">
                Agende sua avaliação e descubra como a quiropraxia instrumental pode transformar sua qualidade de vida.
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
