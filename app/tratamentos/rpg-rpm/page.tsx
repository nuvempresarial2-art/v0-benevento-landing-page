import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppCtaButton } from "@/components/whatsapp-cta-button"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, MessageCircle, Heart, Sparkles, Clock } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "RPG/RPM - Reeducação Postural | Benevento Fisioterapia",
  description:
    "Corrija sua postura e elimine dores causadas por desequilíbrios corporais. Método global de reequilíbrio muscular.",
}

export default function RpgRpmPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-secondary/20 via-background to-muted/30 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">RPG/RPM</h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
                Corrija sua postura e elimine dores causadas por desequilíbrios corporais
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
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">O que é RPG/RPM?</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  RPG (Reeducação Postural Global) e RPM (Reeducação Postural Muscular) são métodos terapêuticos que
                  trabalham o corpo de forma global, ou seja, não tratam apenas o local da dor, mas sim todo o sistema
                  de cadeias musculares que podem estar causando o desequilíbrio.
                </p>
                <p>
                  Através de posturas específicas e alongamentos progressivos, o método identifica e corrige
                  encurtamentos, tensões e compensações que se acumulam ao longo dos anos – seja por má postura no
                  trabalho, estresse, sedentarismo ou traumas antigos.
                </p>
                <p>
                  Na Benevento, aplicamos RPG/RPM com uma visão integrativa: não olhamos apenas para o corpo físico, mas
                  também para como questões emocionais e padrões de comportamento se manifestam em tensões musculares e
                  dores crônicas. Assim, o tratamento vai além da correção mecânica – é uma reconexão profunda com seu
                  corpo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Para quem é indicada */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">Para quem é indicado?</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Dores crônicas na coluna (cervical, torácica, lombar)",
                  "Má postura (ombros caídos, cabeça projetada)",
                  "Escoliose leve a moderada",
                  "Hiperlordose ou hipercifose",
                  "Dores associadas a ficar muito tempo sentado",
                  "Tensões musculares persistentes",
                  "Limitação de movimentos",
                  "Dores de cabeça tensionais",
                  "Respiração superficial ou tensão torácica",
                  "Desequilíbrios posturais após gestação",
                ].map((indication, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{indication}</span>
                  </div>
                ))}
              </div>

              <Card className="bg-secondary/10 border-secondary/30 p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Principais Benefícios</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Correção postural profunda e duradoura</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Alívio de dores crônicas relacionadas à postura</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Melhora da flexibilidade e amplitude de movimento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Redução de tensões musculares acumuladas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Maior consciência corporal e prevenção de lesões</span>
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
                <Card className="p-6 border-l-4 border-secondary">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-secondary-foreground">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Avaliação Postural</h3>
                      <p className="text-muted-foreground">
                        Analisamos sua postura estática e dinâmica, identificando desvios, encurtamentos e padrões de
                        compensação que podem estar gerando dor.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-secondary">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-secondary-foreground">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Posturas Terapêuticas</h3>
                      <p className="text-muted-foreground">
                        Você é conduzido a posturas específicas de alongamento global, mantidas por alguns minutos,
                        enquanto trabalhamos o alinhamento e a respiração. O tratamento é ativo: você participa
                        conscientemente do processo.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-secondary">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-secondary-foreground">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Reeducação e Orientações</h3>
                      <p className="text-muted-foreground">
                        Ao longo das sessões, você desenvolve maior consciência corporal e recebe orientações para
                        manter uma postura saudável no dia a dia, potencializando os resultados.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="bg-secondary/10 border-secondary/30 p-6 mt-8">
                <p className="text-center text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Tratamento progressivo:</strong> As sessões são individuais e
                  respeitam seu ritmo. Com o tempo, você perceberá mudanças profundas não apenas na dor, mas também na
                  forma como se movimenta e se relaciona com seu corpo.
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
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Visão Integrativa</h3>
                  <p className="text-muted-foreground">
                    Entendemos que a postura não é apenas mecânica – ela reflete suas emoções, estresse e história de
                    vida. Tratamos você como um todo.
                  </p>
                </Card>

                <Card className="p-6 bg-white">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Formação Especializada</h3>
                  <p className="text-muted-foreground">
                    Dra. Licemara possui formação completa em RPG/RPM, além de 17 anos de experiência clínica,
                    garantindo um tratamento seguro e eficaz.
                  </p>
                </Card>

                <Card className="p-6 bg-white">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Atendimento Individualizado</h3>
                  <p className="text-muted-foreground">
                    Cada sessão é planejada para suas necessidades específicas. Respeitamos seu corpo, suas limitações e
                    seu tempo de evolução.
                  </p>
                </Card>

                <Card className="p-6 bg-white">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Espaço Acolhedor</h3>
                  <p className="text-muted-foreground">
                    Ambiente tranquilo e privativo, ideal para o trabalho profundo de reconexão corporal que o método
                    propõe.
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
                  <h3 className="font-semibold text-foreground mb-2">As sessões de RPG/RPM doem?</h3>
                  <p className="text-muted-foreground">
                    Não exatamente. Você pode sentir um desconforto durante os alongamentos, mas é uma sensação de
                    "tensão boa", nunca dor intensa. O processo é sempre respeitoso com seus limites.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Quanto tempo dura cada sessão?</h3>
                  <p className="text-muted-foreground">
                    Aproximadamente 50 a 60 minutos. É importante ter tempo para trabalhar as cadeias musculares de
                    forma completa e consciente.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Quantas sessões são necessárias?</h3>
                  <p className="text-muted-foreground">
                    Depende do quadro. Geralmente, recomendamos de 10 a 20 sessões para mudanças duradouras, com
                    frequência semanal ou quinzenal.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Posso fazer RPG/RPM em qualquer idade?</h3>
                  <p className="text-muted-foreground">
                    Sim. O método pode ser adaptado para crianças, adultos, idosos e até gestantes (com devidas
                    adaptações). A avaliação individual definirá a melhor abordagem.
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
                Pronto para corrigir sua postura e viver sem dor?
              </h2>
              <p className="text-xl mb-8 text-accent-foreground/90">
                Agende sua avaliação e descubra como RPG/RPM pode transformar sua relação com seu corpo.
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
