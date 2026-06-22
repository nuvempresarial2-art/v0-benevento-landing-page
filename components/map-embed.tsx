"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"

/**
 * Mapa com carregamento sob demanda.
 *
 * O iframe do Google Maps puxa ~300 KB de JS de terceiros. Em vez de carregar
 * no load inicial (competindo com o LCP no mobile), mostramos um placeholder
 * leve com a marca e so injetamos o iframe quando a pessoa toca/clica.
 */
export function MapEmbed({ src, title }: { src: string; title: string }) {
  const [loaded, setLoaded] = useState(false)

  if (loaded) {
    return (
      <iframe
        title={title}
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label="Carregar mapa interativo"
      className="group relative flex h-full w-full flex-col items-center justify-center gap-3 bg-secondary/20 transition-colors hover:bg-secondary/30"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-105">
        <MapPin className="h-7 w-7" />
      </div>
      <span className="font-semibold text-foreground">Toque para ver o mapa</span>
      <span className="text-sm text-muted-foreground">Carregamento rapido — mapa abre ao tocar</span>
    </button>
  )
}
