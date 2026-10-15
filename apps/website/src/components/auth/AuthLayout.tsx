import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { AuthFeatureItem } from "@/components/auth/AuthFeatureItem";

type Feature = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type AuthLayoutProps = {
  children: React.ReactNode;
  heroTitle: React.ReactNode;
  heroText: React.ReactNode;
  features: Feature[];
  footerText?: React.ReactNode;
  topPrompt?: string;
  topHref?: string;
  topLabel?: string;
  backHref?: string;
  backLabel?: string;
  compact?: boolean;
};

export function AuthLayout({ children, heroTitle, heroText, features, footerText, topPrompt, topHref, topLabel, backHref, backLabel, compact }: AuthLayoutProps) {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative min-h-[100dvh] overflow-x-clip bg-[#030607] text-white sm:px-6 sm:py-5 xl:grid xl:place-items-center xl:px-8">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_18%_8%,rgba(182,255,0,0.08),transparent_24rem),radial-gradient(circle_at_82%_16%,rgba(255,255,255,0.05),transparent_22rem)]" />
      <div className="relative z-10 grid min-h-[100dvh] w-full overflow-hidden border-limebrand/18 bg-[#061012] shadow-[0_34px_120px_rgba(0,0,0,0.65)] sm:min-h-[calc(100dvh-2.5rem)] sm:rounded-xl sm:border lg:mx-auto lg:max-w-[720px] xl:min-h-[760px] xl:max-w-[1220px] xl:grid-cols-[0.95fr_1fr]">
        <aside className="relative hidden overflow-hidden bg-black xl:flex">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-70"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.62) 48%, rgba(0,0,0,0.9) 100%), linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0.84)), url('/images/home/hero-athlete-noogym.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(182,255,0,0.22),transparent_15rem),linear-gradient(90deg,rgba(0,0,0,0.92),rgba(0,0,0,0.34))]" />
          <div className="relative flex h-full w-full flex-col px-12 py-11 2xl:px-16">
            <Link href="/" className="flex w-fit items-center gap-2">
              <Image src="/assets/logo.png" alt="Noogym" width={38} height={24} className="h-6 w-auto" />
              <span className="text-2xl font-bold tracking-normal">noogym</span>
            </Link>
            <div className="mt-16 max-w-[23rem] 2xl:mt-20">
              <h1 className="text-4xl font-black leading-[1.05] tracking-normal text-white">{heroTitle}</h1>
              <p className="mt-6 text-sm leading-6 text-white/65">{heroText}</p>
            </div>
            <div className="mt-8 grid gap-5">
              {features.map((feature) => (
                <AuthFeatureItem key={feature.title} {...feature} />
              ))}
            </div>
            <div className="mt-auto pt-10 text-xs leading-5 text-white/48">
              {footerText ?? (
                <>
                  <p>© {currentYear} Noogym. Todos os direitos reservados.</p>
                  <p className="font-semibold text-limebrand">www.noogym.com</p>
                </>
              )}
            </div>
          </div>
        </aside>
        <div className="relative flex min-h-[100dvh] min-w-0 flex-col bg-[linear-gradient(135deg,#071014_0%,#05090c_60%,#081015_100%)] px-4 py-5 sm:min-h-[calc(100dvh-2.5rem)] sm:px-8 sm:py-6 md:px-10 xl:min-h-0 xl:px-14 xl:py-10 2xl:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(255,255,255,0.055),transparent_20rem)]" />
          <div className="relative flex items-center justify-between gap-4">
            <Link href="/" className="flex shrink-0 items-center gap-2 xl:hidden">
              <Image src="/assets/logo.png" alt="Noogym" width={34} height={22} className="h-5 w-auto" />
              <span className="text-lg font-bold">noogym</span>
            </Link>
            {topHref && topLabel ? (
              <div className="ml-auto flex min-w-0 items-center gap-3 text-xs text-white/55">
                {topPrompt ? <span className="hidden whitespace-nowrap sm:inline">{topPrompt}</span> : null}
                <Link href={topHref} className="shrink-0 rounded-md border border-limebrand/65 px-3 py-2 font-semibold text-limebrand transition hover:bg-limebrand hover:text-black sm:px-4">
                  {topLabel}
                </Link>
              </div>
            ) : backHref && backLabel ? (
              <Link href={backHref} className="ml-auto inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-limebrand transition hover:text-white">
                <ArrowLeft className="h-4 w-4" />
                {backLabel}
              </Link>
            ) : null}
          </div>
          <div className={`relative mx-auto flex w-full min-w-0 flex-1 flex-col justify-start py-7 sm:py-10 xl:justify-center ${compact ? "max-w-[420px]" : "max-w-[470px]"}`}>{children}</div>
        </div>
      </div>
    </section>
  );
}
