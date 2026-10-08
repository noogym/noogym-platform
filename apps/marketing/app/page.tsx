import type { Metadata } from "next";
import { homeDescription, homeTitle, ogImage, siteName, siteUrl } from "./seo";
import { GymSoftwareLandingPage } from "@/components/para-ginasios/GymSoftwareLandingPage";

export const metadata: Metadata = {
  title: {
    absolute: homeTitle,
  },
  description: homeDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: siteUrl,
    siteName,
    locale: "pt_AO",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Dashboard Noogym com app mobile e faturação AGT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [ogImage],
  },
};

export default function HomePage() {
  return <GymSoftwareLandingPage />;
}
