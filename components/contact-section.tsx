"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Phone, MapPin } from "lucide-react"
import { useState } from "react"
import { bridgeHref, trackWhatsAppLead } from "@/lib/whatsapp"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `Ola! Meu nome eh ${formData.name}.\n\nTelefone: ${formData.phone}\n\nMensagem: ${formData.message}`

    trackWhatsAppLead()

    // Passa pela ponte /agendar para a conversao contar, igual aos demais CTAs.
    window.open(bridgeHref(message), "_blank")

    setFormData({ name: "", phone: "", message: "" })
  }

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-foreground mb-4 text-balance">
          Entre em Contato
        </h2>

        <p className="text-lg text-center text-muted-foreground mb-16 text-pretty">
          Estamos prontos para te atender e tirar todas as suas dúvidas
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <MessageCircle className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 text-balance">
              Fale Conosco pelo WhatsApp
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">
              Atendimento rápido e personalizado. Tire suas dúvidas e agende sua avaliação agora!
            </p>
            <Button
              size="lg"
              asChild
              className="bg-green-600 hover:bg-green-700 text-white mb-8 font-semibold shadow-md"
            >
              <a
                href={bridgeHref("Ola! Vim pelo site e gostaria de agendar uma consulta.")}
                target="_blank"
                rel="noopener noreferrer"
                data-gtm="cta-whatsapp-contato"
                onClick={trackWhatsAppLead}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chamar no WhatsApp
              </a>
            </Button>

            <div className="space-y-4 w-full">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="font-medium text-foreground">(11) 99562-5889</p>
                </div>
              </div>

              <div className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="h-5 w-5 text-muted-foreground mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Endereço</p>
                  <p className="font-medium text-foreground text-pretty">
                    Rua Antônio Feres Sada, 23
                    <br />
                    Centro | Várzea Paulista | SP
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">Envie uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Nome
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Telefone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Seu telefone (WhatsApp)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Sua mensagem"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                Enviar via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
