import { HeroSection } from "@/components/hero-section"
import { SignatureGenerator } from "@/components/signature-generator"
import { SEOOptimizedContent } from "@/components/seo-optimized-content"
import { SignatureExamples } from "@/components/signature-examples"
import { HowItWorks } from "@/components/how-it-works"
import { WhyChooseUs } from "@/components/why-choose-us"
import { UseCases } from "@/components/use-cases"
import { SignatureStyles } from "@/components/signature-styles"
import { FAQ } from "@/components/faq"
import { AdvancedFeatures } from "@/components/advanced-features"
import { Header } from "@/components/header"
import { Breadcrumb } from "@/components/breadcrumb"
import { FAQStructuredData } from "@/components/structured-data"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <FAQStructuredData />
      <Header />
      <Breadcrumb />
      <HeroSection />
      <SignatureGenerator />
      <SEOOptimizedContent />
      <SignatureExamples />
      <AdvancedFeatures />
      <HowItWorks />
      <WhyChooseUs />
      <UseCases />
      <SignatureStyles />
      <FAQ />
    </main>
  )
}
