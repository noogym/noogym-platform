import Image from "next/image";
import { Badge } from "./Badge";
import { Button } from "./Button";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  primary,
  secondary,
  primaryHref,
  secondaryHref,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle: string;
  image?: string;
  primary?: string;
  secondary?: string;
  primaryHref?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="container-page pt-8 md:pt-10">
      <div className="glass noise relative overflow-hidden rounded-lg p-5 sm:p-8 md:p-12">
        {image ? (
          <Image src={image} alt="" fill priority className="absolute inset-0 -z-10 object-cover opacity-35" />
        ) : null}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/82 to-transparent" />
        <div className="max-w-3xl">
          {eyebrow ? <Badge>{eyebrow}</Badge> : null}
          <h1 className="mt-5 text-balance text-3xl font-black leading-tight sm:text-4xl md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">{subtitle}</p>
          {(primary || secondary) ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {primary ? <Button href={primaryHref} className="w-full sm:w-auto" disabled={!primaryHref}>{primary}</Button> : null}
              {secondary ? <Button href={secondaryHref} variant="secondary" className="w-full sm:w-auto" disabled={!secondaryHref}>{secondary}</Button> : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
