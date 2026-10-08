import { MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { whatsappUrl } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col items-center gap-6 text-center md:text-left lg:flex-row lg:justify-between">
        <Logo />
        <p className="text-sm text-zinc-500">
          © 2026 Noogym. Todos os direitos reservados.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-zinc-400 lg:justify-start">
          <a className="hover:text-noogym-green" href="/privacidade">
            Privacidade
          </a>
          <a className="hover:text-noogym-green" href="/termos">
            Termos de Uso
          </a>
          <a className="hover:text-noogym-green" href={whatsappUrl} target="_blank" rel="noreferrer">
            Suporte
          </a>
        </div>
        <div className="flex items-center justify-center gap-3 lg:justify-start">
          {[
            { icon: MessageCircle, href: whatsappUrl, label: "WhatsApp" },
          ].map((social) => (
            <a
              aria-label={social.label}
              className="grid h-9 w-9 place-items-center rounded-md border border-white/10 text-zinc-400 transition hover:border-noogym-green hover:text-noogym-green"
              href={social.href}
              key={social.label}
              target="_blank"
              rel="noreferrer"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
