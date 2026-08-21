"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, whatsappUrl } from "./data";
import { Logo } from "./Logo";

export function Header() {
  const [activeId, setActiveId] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.12, 0.2, 0.45],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleAnchorClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <a
          href="#inicio"
          onClick={(event) => handleAnchorClick(event, "#inicio")}
          aria-label="Noogym início"
        >
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => {
            const isActive = activeId === item.href.slice(1);
            return (
              <a
                className={`rounded-md px-3 py-2 text-xs font-bold transition ${
                  isActive
                    ? "bg-noogym-green/10 text-noogym-green"
                    : "text-zinc-300 hover:text-noogym-green"
                }`}
                href={item.href}
                key={item.href}
                onClick={(event) => handleAnchorClick(event, item.href)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            className="dark-button px-4 py-2.5"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Falar no WhatsApp
            <MessageCircle className="h-4 w-4" />
          </a>
          <button
            className="green-button px-4 py-2.5"
            data-demo-trigger
            type="button"
          >
            Agendar demonstração
          </button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-md border border-white/15 text-white xl:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          type="button"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-white/10 bg-black/95 xl:hidden">
          <div className="section-shell py-4">
            <nav className="grid gap-1">
              {navItems.map((item) => {
                const isActive = activeId === item.href.slice(1);
                return (
                  <a
                    className={`rounded-md px-3 py-3 text-sm font-bold ${
                      isActive
                        ? "bg-noogym-green/10 text-noogym-green"
                        : "text-zinc-300"
                    }`}
                    href={item.href}
                    key={item.href}
                    onClick={(event) => handleAnchorClick(event, item.href)}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <button
                className="green-button w-full"
                data-demo-trigger
                type="button"
                onClick={() => setMenuOpen(false)}
              >
                Agendar demonstração
              </button>
              <a
                className="dark-button w-full"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Falar no WhatsApp
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
