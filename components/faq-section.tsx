"use client"

import React from "react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void
  }
}

const trackWhatsAppConversion = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault()
  const href = e.currentTarget.href
  
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", {
      content_name: "WhatsApp Click",
      content_category: "Contact",
    })
  }
  
  setTimeout(() => {
    window.open(href, "_blank")
  }, 300)
}

const faqs = [
  {
    question: "O tratamento dói?",
    answer:
      "Nossos tratamentos são planejados para serem confortáveis e seguros. A quiropraxia instrumental utiliza força controlada e não requer movimentos bruscos. Algumas técnicas podem gerar leve desconforto pontual, mas sempre respeitamos seus limites e ajustamos conforme sua tolerância.",
  },
  {
    question: "Quantas sessões vou precisar?",
    answer:
      "O número de sessões varia de acordo com cada caso. Algumas pessoas sentem melhora significativa em poucas semanas, enquanto quadros mais complexos podem precisar de acompanhamento mais longo. Após a avaliação inicial, apresentamos uma estimativa personalizada para o seu caso.",
  },
  {
    question: "A quiropraxia é segura?",
    answer:
      "Sim! Quando realizada por profissional qualificado, a quiropraxia é um tratamento seguro e respaldado cientificamente. Utilizamos a técnica instrumental, que oferece controle preciso da força aplicada, tornando-a ainda mais confortável e adequada para diferentes perfis de pacientes.",
  },
  {
    question: "Meu convenio cobre o tratamento?",
    answer:
      "A Benevento Fisioterapia nao trabalha diretamente com convenios. Porem, alguns convenios oferecem reembolso ao apresentar a nota fiscal do servico prestado. Convenios como Porto Seguro, Sul America e Bradesco costumam fazer esse tipo de reembolso. Para saber se voce esta apto a receber o reembolso pelo seu convenio, entre em contato diretamente com sua operadora e verifique os procedimentos necessarios.",
  },
  {
    question: "Onde fica a clínica?",
    answer:
      "Estamos localizados em Várzea Paulista, região de Jundiaí/SP. A clínica conta com estacionamento e fácil acesso. Entre em contato pelo WhatsApp que enviaremos a localização exata e orientações de como chegar.",
  },
  {
    question: "Posso fazer tratamento usando medicações?",
    answer:
      "Sim! Muitos pacientes iniciam o tratamento enquanto fazem uso de medicamentos prescritos por seus médicos. À medida que o tratamento avança e a dor diminui, é comum que a necessidade de medicação reduza naturalmente. Sempre orientamos a manter diálogo com seu médico.",
  },
  {
    question: "É necessário levar exames na primeira consulta?",
    answer:
      "Se você possui exames recentes (raio-X, ressonância, tomografia), traga! Eles ajudam a complementar a avaliação. Mas não são obrigatórios – nossa avaliação clínica já fornece informações valiosas para iniciar o tratamento.",
  },
]

export function FAQSection() {
  const whatsappNumber = "5511995625889"
  const message = "Ola! Tenho uma duvida sobre o tratamento."
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-foreground mb-4 text-balance">
            Perguntas Frequentes
          </h2>

          <p className="text-lg text-center text-muted-foreground mb-12 text-pretty">
            Tire suas dúvidas sobre o tratamento
          </p>

          <Accordion type="single" collapsible className="w-full mb-12">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-pretty pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="bg-muted rounded-lg p-6 text-center">
            <p className="text-muted-foreground mb-4 text-pretty">Ainda tem dúvidas? Estamos aqui para te ajudar!</p>

            <Button asChild className="bg-green-600 hover:bg-green-700 text-white font-semibold">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                data-gtm="cta-whatsapp-faq"
                onClick={trackWhatsAppConversion}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Enviar Mensagem pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
