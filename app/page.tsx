import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustBar } from "@/components/trust-bar"
import { PatientResultsSection } from "@/components/patient-results-section"
import { UnifiedPainSection } from "@/components/unified-pain-section"
import { EvaluationProcessSection } from "@/components/evaluation-process-section"
import { AboutSection } from "@/components/about-section"
import { FAQSection } from "@/components/faq-section"
import { CTASchedulingSection } from "@/components/cta-scheduling-section"
import { Footer } from "@/components/footer"

/**
 * Landing de trafego pago — sequencia deliberada:
 * oferta -> prova -> reconhecimento do problema -> como funciona ->
 * quem atende -> objecoes -> fechamento.
 *
 * O pb-24 no mobile reserva espaco para a barra fixa de WhatsApp.
 *
 * Secoes retiradas por nao contribuirem para o clique (os arquivos seguem no
 * repo, e so reimportar): QuoteSection, IntegrativeApproachSection (virou os
 * chips do AboutSection), UnifiedResultsSection, TreatmentsSection (os links
 * foram para o rodape), NewsletterSection, ContactSection (o formulario so
 * reabria o WhatsApp) e LocationSection (foi para o CTA final).
 */
export default function Home() {
  return (
    <main className="min-h-screen pb-24 md:pb-0">
      <Header />
      <HeroSection />
      <TrustBar />
      <PatientResultsSection />
      <UnifiedPainSection />
      <EvaluationProcessSection />
      <AboutSection />
      <FAQSection />
      <CTASchedulingSection />
      <Footer />
    </main>
  )
}
