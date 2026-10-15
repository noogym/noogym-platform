import type { Metadata } from "next";
import { Building2, Dumbbell, ShieldCheck } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Login",
  description: "Entra na tua conta Noogym e continua a tua jornada.",
};

const features = [
  { icon: ShieldCheck, title: "Acesso protegido", text: "Entra com o e-mail e a palavra-passe da tua conta." },
  { icon: Dumbbell, title: "A tua jornada", text: "Consulta as ferramentas e os serviços associados ao teu perfil." },
  { icon: Building2, title: "Acessos profissionais", text: "As permissões de ginásios e empresas são validadas à parte." },
];

export default function LoginPage() {
  return (
    <AuthLayout
      heroTitle={<>A tua jornada continua no <span className="text-limebrand">Noogym.</span></>}
      heroText="Entra na tua conta para continuares de onde ficaste. Os acessos profissionais dependem do perfil associado."
      features={features}
    >
      <LoginForm />
    </AuthLayout>
  );
}
