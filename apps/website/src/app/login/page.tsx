import type { Metadata } from "next";
import { CalendarDays, Dumbbell, MapPin, ShoppingBag } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Login",
  description: "Entre na sua conta e acesse o ecossistema Noogym.",
};

const features = [
  { icon: MapPin, title: "Site e app", text: "Explore ginásios, planos, eventos, benefícios e acompanhe sua rotina." },
  { icon: Dumbbell, title: "Treino e nutrição", text: "Use a mesma conta para programas, evolução e serviços de acompanhamento." },
  { icon: CalendarDays, title: "ERP e equipa", text: "Acessos de ginásio são liberados por vínculo e permissão aprovada." },
  { icon: ShoppingBag, title: "Noogym Market", text: "Compras e operação de vendedor usam a mesma identidade com acessos separados." },
];

export default function LoginPage() {
  return (
    <AuthLayout
      heroTitle={<>Volte ao <span className="text-limebrand">Noogym</span> e continue sua evolução.</>}
      heroText={<>A sua conta conecta site, app mobile, ERP dos ginásios, marketplace e painéis profissionais. O que muda são os acessos liberados para cada perfil.</>}
      features={features}
    >
      <LoginForm />
    </AuthLayout>
  );
}
