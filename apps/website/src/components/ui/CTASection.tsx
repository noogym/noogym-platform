import { ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { Card } from "./Card";

export function CTASection({
  title,
  text,
  primary = "Criar conta",
  secondary,
  href = "/criar-conta",
  secondaryHref,
}: {
  title: React.ReactNode;
  text: string;
  primary?: string;
  secondary?: string;
  href?: string;
  secondaryHref?: string;
}) {
  return (
    <Card className="noise overflow-hidden p-5 sm:p-8 md:p-10">
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-balance text-2xl font-bold sm:text-3xl md:text-4xl">{title}</h2>
          <p className="mt-3 text-sm leading-6 text-white/64 sm:text-base">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href={href} className="w-full sm:w-auto">
            {primary} <ArrowRight className="h-4 w-4" />
          </Button>
          {secondary ? <Button href={secondaryHref} variant="secondary" className="w-full sm:w-auto" disabled={!secondaryHref}>{secondary}</Button> : null}
        </div>
      </div>
    </Card>
  );
}
