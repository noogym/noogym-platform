"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const groups = [
  {
    title: "O App",
    links: [
      { label: "Aceder à plataforma", href: "/login" },
      { label: "Criar conta", href: "/criar-conta" },
    ],
  },
  {
    title: "Para empresas",
    links: [
      { label: "Todas as soluções", href: "/para-empresas" },
      { label: "Ginásios", href: "/para-ginasios" },
      { label: "Lojas e profissionais", href: "/para-empresas#lojas" },
    ],
  },
  {
    title: "Sobre nós",
    links: [
      { label: "A nossa visão", href: "/#sobre" },
      { label: "Blog", href: "/blog" },
      { label: "Eventos", href: "/eventos" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { label: "Contactos", href: "mailto:suporte@noogym.com" },
      { label: "Centro de ajuda", href: "/ajuda" },
      { label: "Termos de utilização", href: "/termos" },
      { label: "Política de privacidade", href: "/privacidade" },
    ],
  },
];

export function Footer() {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/esqueci-senha" || pathname.startsWith("/criar-conta");
  const currentYear = new Date().getFullYear();

  if (isAuthPage || pathname.startsWith("/dashboard")) return null;

  return (
    <footer className="border-t border-white/8 bg-[#050807]">
      <div className="container-page py-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_2.05fr] lg:gap-14">
          <div>
            <Link href="/" className="inline-flex items-center gap-2" aria-label="Noogym, página inicial">
              <Image src="/assets/logo.png" alt="" width={38} height={24} className="h-6 w-auto" />
              <span className="text-xl font-bold">noogym</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/58">Uma marca de saúde e bem-estar, com tecnologia para aproximar pessoas e negócios.</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {groups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-bold">{group.title}</h2>
                <ul className="mt-4 space-y-3 text-xs leading-5 text-white/55 sm:text-sm">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="transition hover:text-limebrand focus-visible:text-limebrand focus-visible:outline-none">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-9 flex flex-col gap-2 border-t border-white/8 pt-5 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <span>© {currentYear} Noogym. Todos os direitos reservados.</span>
          <span>Feito em Angola, para uma vida mais activa.</span>
        </div>
      </div>
    </footer>
  );
}
