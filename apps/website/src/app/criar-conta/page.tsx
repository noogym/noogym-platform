import type { Metadata } from "next";
import { Dumbbell, MapPin, ShoppingBag } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { SignupForm } from "@/components/auth/SignupForm";

export const metadata: Metadata = {
  title: "Criar conta",
  description: "Cria a tua conta pessoal Noogym para acompanhar a tua evolução e descobrir experiências de bem-estar.",
};

const features = [
  { icon: Dumbbell, title: "Começa pela tua jornada", text: "Cria o teu perfil e acompanha treinos, hábitos e evolução." },
  { icon: MapPin, title: "Descobre o que está perto", text: "Encontra ginásios, profissionais e experiências de bem-estar." },
  { icon: ShoppingBag, title: "Acessos profissionais depois", text: "Se representas um negócio, podes pedir acesso à tua equipa mais tarde." },
];

export default function SignupPage() {
  return (
    <AuthLayout
      heroTitle={<>Começa a tua jornada <span className="text-limebrand">Noogym.</span></>}
      heroText="Cria a tua conta pessoal para acompanhar a tua evolução. Acessos profissionais e comerciais podem ser pedidos depois."
      features={features}
      footerText={<>Começa com uma conta pessoal. Os acessos de ginásio e de outros negócios são pedidos e validados à parte.</>}
    >
      <SignupForm />
    </AuthLayout>
  );
}
