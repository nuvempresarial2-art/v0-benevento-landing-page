export function QuoteSection() {
  return (
    <section className="bg-accent py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <blockquote className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-accent-foreground italic text-balance leading-relaxed">
            "Não há dor maior do que carregar em si uma história não contada."
          </p>
          <footer className="mt-6 text-accent-foreground/80 text-lg">— Maya Angelou</footer>
        </blockquote>
      </div>
    </section>
  )
}
