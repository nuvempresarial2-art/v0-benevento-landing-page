import { MapEmbed } from "@/components/map-embed"

export function LocationSection() {
  const address = "R. Antonio Feres Sada, 23 - Centro, Varzea Paulista - SP, 13220-020"
  const mapsUrl = "https://www.google.com/maps/place/R.+Ant%C3%B4nio+Feres+Sada,+23+-+Centro,+V%C3%A1rzea+Paulista+-+SP,+13220-020"

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2 text-balance">
              Onde Nos Encontrar
            </h2>
            <p className="text-muted-foreground">
              Estamos localizados em frente a Estacao de Trem de Varzea Paulista
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-border bg-card">
            {/* Google Maps Embed (carregado sob demanda para nao pesar no mobile) */}
            <div className="w-full h-72 md:h-96">
              <MapEmbed
                title="Localizacao Benevento Fisioterapia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.123456789!2d-47.0076!3d-23.2116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUi4gQW50w7RuaW8gRmVyZXMgU2FkYSwgMjMgLSBDZW50cm8sIFbDoXJ6ZWEgUGF1bGlzdGEgLSBTUCwgMTMyMjAtMDIw!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              />
            </div>

            {/* Informacoes do endereco */}
            <div className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Benevento Fisioterapia</p>
                  <p className="text-muted-foreground text-sm">{address}</p>
                  <p className="text-muted-foreground text-sm mt-0.5">Em frente a Estacao de Trem</p>
                </div>
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                Como Chegar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
