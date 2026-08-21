import Image from "next/image";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="relative flex h-7 w-10 items-center justify-center overflow-hidden rounded-sm">
        <Image
          src="/images/noogym-mark.png"
          alt=""
          width={72}
          height={42}
          className="h-7 w-10 object-contain"
          priority
        />
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block text-lg font-black tracking-tight text-white">
            noogym
          </span>
          <span className="block text-[9px] font-black uppercase tracking-[0.16em] text-noogym-green">
            software de gestão
          </span>
        </span>
      )}
    </div>
  );
}
