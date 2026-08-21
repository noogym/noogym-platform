import { BenefitsSection } from "./BenefitsSection";
import { DemoModalController } from "./DemoModalController";
import { FAQSection } from "./FAQSection";
import { FeaturesSection } from "./FeaturesSection";
import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { LocalSEOSection } from "./LocalSEOSection";
import { PricingSection } from "./PricingSection";
import { ResourcesSection } from "./ResourcesSection";
import { StructuredData } from "./StructuredData";
import { TestimonialsSection } from "./TestimonialsSection";
import { TrustLogos } from "./TrustLogos";

export function GymSoftwareLandingPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#020403] text-white">
      <StructuredData />
      <Header />
      <main>
        <HeroSection />
        <TrustLogos />
        <FeaturesSection />
        <BenefitsSection />
        <LocalSEOSection />
        <ResourcesSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <DemoModalController />
    </div>
  );
}
