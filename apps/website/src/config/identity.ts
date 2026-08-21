import { Building2, Dumbbell, ShieldCheck, ShoppingBag, Smartphone, UserCog } from "lucide-react";

export const noogymIdentity = {
  title: "Uma conta. Vários acessos.",
  shortText: "Use o mesmo login no site, app mobile, ERP dos ginásios, marketplace e painéis profissionais.",
  detailText:
    "A conta é única. O que muda são os acessos liberados para atleta, personal trainer, equipa de ginásio, vendedor ou administrador Noogym.",
  accessLabel: "Acessos liberados por perfil",
  accessScopes: [
    { icon: Dumbbell, label: "Atleta", text: "Planos, ginásios, check-ins, eventos e marketplace." },
    { icon: Smartphone, label: "App mobile", text: "Acompanhamento de rotina, treino, nutrição e benefícios." },
    { icon: Building2, label: "Ginásio / ERP", text: "Gestão, equipa, alunos, planos, pagamentos e acessos." },
    { icon: UserCog, label: "Personal", text: "Ferramentas profissionais após validação." },
    { icon: ShoppingBag, label: "Vendedor", text: "Loja e catálogo após aprovação comercial." },
    { icon: ShieldCheck, label: "Admin Noogym", text: "Operação interna e permissões avançadas." },
  ],
  professionalAccessNote:
    "Acessos profissionais e comerciais são solicitações vinculadas à mesma conta e podem ficar pendentes até validação.",
} as const;
