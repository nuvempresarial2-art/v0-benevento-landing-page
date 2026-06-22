import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LocationSection } from "@/components/location-section"
import { PatientResultsSection } from "@/components/patient-results-section"
import { UnifiedPainSection } from "@/components/unified-pain-section"
import { QuoteSection } from "@/components/quote-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { EvaluationProcessSection } from "@/components/evaluation-process-section"
import { IntegrativeApproachSection } from "@/components/integrative-approach-section"
import { UnifiedResultsSection } from "@/components/unified-results-section"
import { AboutSection } from "@/components/about-section"
import { TreatmentsSection } from "@/components/treatments-section"
import { CTASchedulingSection } from "@/components/cta-scheduling-section"
import { FAQSection } from "@/components/faq-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <LocationSection />
      <PatientResultsSection />
      <UnifiedPainSection />
      <QuoteSection />
      <WhyChooseSection />
      <EvaluationProcessSection />
      <IntegrativeApproachSection />
      <UnifiedResultsSection />
      <AboutSection />
      <TreatmentsSection />
      <CTASchedulingSection />
      <FAQSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
