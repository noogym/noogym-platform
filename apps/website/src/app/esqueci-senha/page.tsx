import type { Metadata } from "next";
import { CalendarDays, Dumbbell, MapPin, ShoppingBag } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";

export const metadata: Metadata = {
  title: "Esqueci minha senha",
  description: "Recupere o acesso à sua conta Noogym.",
};

const features = [
  { icon: MapPin, title: "Site e app", text: "Recupere o acesso usado para ginásios, planos, eventos e rotina." },
  { icon: Dumbbell, title: "Treino e nutrição", text: "Mantenha programas, progresso e benefícios conectados à mesma conta." },
  { icon: CalendarDays, title: "Acessos aprovados", text: "Perfis profissionais e comerciais continuam ligados à sua identidade." },
  { icon: ShoppingBag, title: "Marketplace fitness", text: "Compras, pedidos e vendedor autorizado seguem no mesmo login." },
];

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      heroTitle={<>Recupere seu acesso e volte ao <span className="text-limebrand">Noogym.</span></>}
      heroText={<>Redefina a senha da sua conta única para continuar usando site, app, ERP, marketplace e serviços Noogym conforme seus acessos.</>}
      features={features}
      backHref="/login"
      backLabel="Voltar para o login"
      compact
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
