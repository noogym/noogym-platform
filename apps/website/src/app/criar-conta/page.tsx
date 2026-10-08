import type { Metadata } from "next";
import { CalendarDays, Dumbbell, MapPin, ShoppingBag } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { SignupForm } from "@/components/auth/SignupForm";

export const metadata: Metadata = {
  title: "Criar conta",
  description: "Crie uma conta Noogym e use a mesma identidade no site, app, ERP, ginásios parceiros e marketplace.",
};

const features = [
  { icon: MapPin, title: "Uma identidade", text: "O mesmo login serve para site, app mobile, ginásios parceiros e marketplace." },
  { icon: Dumbbell, title: "Perfil de atleta", text: "Planos, check-ins, treinos, nutrição, eventos e evolução ficam conectados." },
  { icon: CalendarDays, title: "Acessos profissionais", text: "Personal, vendedor e equipa de ginásio entram por solicitação e aprovação." },
  { icon: ShoppingBag, title: "Ecossistema Noogym", text: "As permissões mudam por perfil, mas a conta continua sendo a mesma." },
];

export default function SignupPage() {
  return (
    <AuthLayout
      heroTitle={<>Uma conta para toda a sua jornada <span className="text-limebrand">Noogym.</span></>}
      heroText="Crie uma conta para treinar, comprar, participar de eventos e, quando necessário, solicitar acessos profissionais ou comerciais."
      features={features}
      footerText={<>A conta é única. Os acessos de ERP, personal, vendedor ou admin são liberados por vínculo e permissão.</>}
    >
      <SignupForm />
    </AuthLayout>
  );
}
