import { homeDescription, homeTitle, ogImage, siteName, siteUrl } from "@/app/seo";
import { faqs, pricingPlans } from "./data";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/images/noogym-logo.png`,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          areaServed: "AO",
          availableLanguage: ["pt-AO", "pt"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      inLanguage: "pt-AO",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: siteName,
      url: siteUrl,
      image: `${siteUrl}${ogImage}`,
      description: homeDescription,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, Android, iOS",
      areaServed: {
        "@type": "Country",
        name: "Angola",
      },
      offers: pricingPlans.map((plan) => ({
        "@type": "Offer",
        name: `Plano ${plan.name}`,
        price: plan.price.replace(/\./g, ""),
        priceCurrency: "AOA",
        availability: "https://schema.org/InStock",
        url: siteUrl,
      })),
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: homeTitle,
      description: homeDescription,
      inLanguage: "pt-AO",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#software`,
      },
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
