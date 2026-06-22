"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Moon, Activity, Pill } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { trackWhatsAppLead } from "@/lib/whatsapp"

const treatments = [
  {
    title: "Quiropraxia Instrumental",
    description: "Alivio rapido sem manobras agressivas",
    link: "/tratamentos/quiropraxia-instrumental",
  },
  {
    title: "RPG/RPM",
    description: "Corrija sua postura e elimine dores",
    link: "/tratamentos/rpg-rpm",
  },
  {
    title: "Somato Analise",
    description: "Libere tensoes que viram dor fisica",
    link: "/tratamentos/somato-analise",
  },
  {
    title: "Terapia Floral",
    description: "Equilibrio emocional e recuperacao",
    link: "/tratamentos/terapia-floral",
  },
]

const benefits = [
  { icon: Moon, text: "Durma melhor sem dor" },
  { icon: Activity, text: "Volte a se movimentar com seguranca" },
  { icon: Pill, text: "Reduza a necessidade de remedios" },
]

export function HeroSection() {
  const whatsappNumber = "5511995625889"
  const agendarMsg = "Ola! Vim pelo site e gostaria de agendar uma avaliacao para dor nas costas."
  const duvidaMsg = "Ola! Tenho uma duvida sobre o tratamento."

  const waAgendarHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(agendarMsg)}`
  const waDuvidaHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(duvidaMsg)}`

  return (
    <section id="home" className="relative min-h-[700px] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-secondary/75" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6 text-balance max-w-4xl mx-auto">
            Alívio Especializado para Dor nas Costas, Pescoço e Coluna em Várzea Paulista
          </h1>

          <p className="text-lg md:text-xl text-white/95 text-center mb-8 max-w-[70ch] mx-auto text-pretty leading-relaxed">
            Fisioterapia integrativa com quiropraxia, RPG e somato análise. Tratamento personalizado que une corpo,
            mente e emoções.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.text} className="flex items-center gap-3 text-white">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium">{benefit.text}</span>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 h-14 font-semibold shadow-lg"
            >
              <a href={waAgendarHref} target="_blank" rel="noopener noreferrer" data-gtm="cta-whatsapp-agendar" onClick={trackWhatsAppLead}>
                Agendar Avaliacao pelo WhatsApp
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/95 hover:bg-white text-foreground text-lg px-10 h-14 border-2 font-semibold"
            >
              <a href={waDuvidaHref} target="_blank" rel="noopener noreferrer" data-gtm="cta-whatsapp-duvida" onClick={trackWhatsAppLead}>
                Quero Tirar uma Duvida
              </a>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {treatments.map((treatment) => (
              <Card
                key={treatment.title}
                className="p-6 bg-white/95 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-shadow flex flex-col"
              >
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2 text-balance">
                  {treatment.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 text-pretty flex-grow">{treatment.description}</p>
                <Button
                  asChild
                  variant="default"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-auto"
                >
                  <Link href={treatment.link}>Saiba mais</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
