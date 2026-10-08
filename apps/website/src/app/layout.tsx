import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/components/layout/CartContext";
import { I18nProvider } from "@/i18n/I18nProvider";
import { FitlandiaModal } from "@/components/modals/FitlandiaModal";
import { SessionProvider } from "@/components/auth/SessionContext";

const googleAnalyticsId = "G-35VZ22GGP9";
const clarityProjectId = "xp491n099f";

export const metadata: Metadata = {
  title: {
    default: "Noogym | Treine em qualquer ginásio",
    template: "%s | Noogym",
  },
  description: "Noogym conecta usuários aos melhores ginásios, planos, marketplace, eventos e gestão fitness em Angola.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-AO">
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityProjectId}");
          `}
        </Script>
        <I18nProvider>
          <SessionProvider>
            <CartProvider>
              <Header />
              <main>{children}</main>
              <Footer />
              <FitlandiaModal />
            </CartProvider>
          </SessionProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
