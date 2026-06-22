"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { whatsappHref, trackWhatsAppLead } from "@/lib/whatsapp"
import { cn } from "@/lib/utils"

type Props = {
  message: string
  label: string
  /** valor do atributo data-gtm (gatilho de clique no GTM) */
  gtm: string
  size?: "default" | "sm" | "lg"
  className?: string
  showIcon?: boolean
}

/**
 * Botao de CTA de WhatsApp reutilizavel, com o tracking ja embutido
 * (data-gtm + trackWhatsAppLead) e navegacao nativa via <a target=_blank>.
 * Permite usar um CTA consistente a partir de server components.
 */
export function WhatsAppCtaButton({ message, label, gtm, size = "default", className, showIcon = true }: Props) {
  return (
    <Button asChild size={size} className={cn("bg-green-600 hover:bg-green-700 text-white font-semibold", className)}>
      <a
        href={whatsappHref(message)}
        target="_blank"
        rel="noopener noreferrer"
        data-gtm={gtm}
        onClick={trackWhatsAppLead}
      >
        {showIcon && <MessageCircle className="mr-2 h-4 w-4 shrink-0" />}
        {label}
      </a>
    </Button>
  )
}
