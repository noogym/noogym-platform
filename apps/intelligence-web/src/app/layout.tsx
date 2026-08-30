import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noogym Fitness Intelligence",
  description: "Painel interno de descoberta e revisão editorial fitness em Angola.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
