"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"
import { useState } from "react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter signup logic
    alert("Obrigado por se inscrever!")
    setEmail("")
  }

  // Faixa secundaria e discreta: a acao primaria do site e o WhatsApp.
  return (
    <section className="py-10 bg-muted/40 border-y border-border/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-semibold text-foreground">Receba dicas de bem-estar por e-mail</h2>
              <p className="text-sm text-muted-foreground">Conteúdos ocasionais. Opcional — sem compromisso.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex w-full sm:w-auto gap-2">
            <Input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-10 flex-1 sm:w-56 text-sm bg-white"
            />
            <Button type="submit" variant="outline" className="h-10 px-5 shrink-0">
              Inscrever
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
