import type { Metadata } from "next";
import { AppSection } from "@/components/home/AppSection";
import { BusinessSection } from "@/components/home/BusinessSection";
import { CommunitySection } from "@/components/home/CommunitySection";
import { EcosystemSection } from "@/components/home/EcosystemSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { HeroSection } from "@/components/home/HeroSection";
import { PurposeSection } from "@/components/home/PurposeSection";

export const metadata: Metadata = {
  title: { absolute: "Noogym — O teu bem-estar começa aqui" },
  description: "Descobre o Noogym, o ecossistema que conecta pessoas, profissionais e negócios para tornar o fitness e o bem-estar mais acessíveis.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Noogym — O teu bem-estar começa aqui",
    description: "Pessoas, profissionais e negócios ligados para tornar o fitness e o bem-estar mais acessíveis.",
    type: "website",
    locale: "pt_AO",
    siteName: "Noogym",
    url: "https://noogym.com/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PurposeSection />
      <AppSection />
      <BusinessSection />
      <EcosystemSection />
      <CommunitySection />
      <FinalCTASection />
    </>
  );
}
