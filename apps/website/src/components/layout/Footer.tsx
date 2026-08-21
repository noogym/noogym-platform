"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Button } from "@/components/ui/Button";

const groups = [
  {
    title: "Plataforma",
    links: [
      { label: "Explorar Ginásios", href: "/explorar-ginasios" },
      { label: "Planos", href: "/planos" },
      { label: "Marketplace", href: "/marketplace" },
      { label: "Eventos", href: "/eventos" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Para Ginásios",
    links: [
      { label: "Seja parceiro", href: "/para-ginasios" },
      { label: "Software de gestão", href: "/para-ginasios" },
      { label: "Captação de alunos", href: "/para-ginasios" },
      { label: "Suporte", href: "mailto:suporte@noogym.com" },
    ],
  },
  {
    title: "Ajuda",
    links: [
      { label: "Central de ajuda", href: "/ajuda" },
      { label: "Termos de uso", href: "/termos" },
      { label: "Política de privacidade", href: "/privacidade" },
      { label: "Contacto", href: "mailto:suporte@noogym.com" },
    ],
  },
];

export function Footer() {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/esqueci-senha" || pathname.startsWith("/criar-conta");
  const currentYear = new Date().getFullYear();

  if (isAuthPage || pathname.startsWith("/dashboard")) return null;

  return (
    <footer className="container-page mb-6 mt-16">
      <div className="glass rounded-lg p-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <Image src="/assets/logo.png" alt="Noogym" width={38} height={24} className="h-6 w-auto" />
              <span className="text-xl font-bold">noogym</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/62">A maior rede de ginásios de Angola conectada para evoluir juntos.</p>
            <div className="mt-5 flex gap-3 text-white/60">
              <Instagram className="h-5 w-5" />
              <Facebook className="h-5 w-5" />
              <Youtube className="h-5 w-5" />
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {groups.map((group) => (
              <div key={group.title}>
                <h3 className="font-bold">{group.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/58">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="hover:text-limebrand">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h3 className="font-bold">Baixe o app</h3>
            <div className="mt-4 grid gap-3">
              <Button variant="secondary" disabled>App Store em breve</Button>
              <Button variant="secondary" disabled>Google Play em breve</Button>
            </div>
            <div className="mt-5 space-y-2 text-sm text-white/58">
              <p className="flex gap-2"><Phone className="h-4 w-4 text-limebrand" /> +244 923 456 789</p>
              <p className="flex gap-2"><Mail className="h-4 w-4 text-limebrand" /> suporte@noogym.com</p>
              <p className="flex gap-2"><MapPin className="h-4 w-4 text-limebrand" /> Luanda, Angola</p>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/42">© {currentYear} Noogym. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}
