"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle } from "lucide-react"
import { whatsappHref, trackWhatsAppLead } from "@/lib/whatsapp"
import { siteConfig } from "@/lib/site-config"

// FAQ enxuto de proposito: so as objecoes que travam o clique no WhatsApp.
// Perguntas educativas (que nao destravam o agendamento) sairam daqui.
const faqs = [
  {
    question: "Quanto custa?",
    answer: `${siteConfig.offer.label}. São cerca de 90 minutos de avaliação, e só depois dela conseguimos estimar o número de sessões. Não trabalhamos com pacote fechado obrigatório.`,
  },
  {
    question: "O tratamento dói?",
    answer:
      "A quiropraxia instrumental usa força controlada, sem manobras bruscas. Pode haver um desconforto pontual, mas respeitamos o seu limite o tempo todo — é uma técnica indicada inclusive para quem tem medo ou nunca fez.",
  },
  {
    question: "Quantas sessões vou precisar?",
    answer:
      "Depende do caso. Alguns pacientes sentem melhora em poucas semanas; quadros mais antigos costumam pedir acompanhamento mais longo. Você recebe uma estimativa personalizada logo após a avaliação.",
  },
  {
    question: "Meu convênio cobre?",
    answer:
      "Não atendemos por convênio, mas emitimos nota fiscal para reembolso. Porto Seguro, SulAmérica e Bradesco costumam reembolsar — vale confirmar as regras com a sua operadora.",
  },
  {
    question: "Onde fica a clínica?",
    answer:
      "Rua Antônio Feres Sada, 23 — Centro, Várzea Paulista, em frente à Estação de Trem. Tem estacionamento no local.",
  },
  {
    question: "Preciso levar exames?",
    answer:
      "Se tiver exames recentes (raio-X, ressonância, tomografia), traga — ajudam. Mas não são obrigatórios para começar.",
  },
]

const MESSAGE = "Ola! Tenho uma duvida sobre o tratamento."

export function FAQSection() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-balance text-center font-serif text-2xl font-bold text-foreground md:text-4xl">
            Perguntas frequentes
          </h2>

          <Accordion type="single" collapsible className="mb-8 w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium hover:text-primary md:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-pretty leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="rounded-xl bg-muted p-6 text-center">
            <p className="mb-4 text-pretty text-muted-foreground">Ficou alguma dúvida? Pergunte direto para a gente.</p>

            <a
              href={whatsappHref(MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              data-gtm="cta-whatsapp-faq"
              onClick={trackWhatsAppLead}
              className="inline-flex h-14 w-full max-w-sm items-center justify-center gap-2 rounded-xl bg-green-600 px-8 text-base font-bold text-white shadow-lg transition-colors hover:bg-green-700"
            >
              <MessageCircle className="h-5 w-5 shrink-0" />
              Tirar minha dúvida no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
