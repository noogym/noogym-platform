import Image from "next/image";

type SoftwareMockupImageProps = {
  alt?: string;
  compact?: boolean;
  src?: string;
  priority?: boolean;
};

export function SoftwareMockupImage({
  alt = "Software de gestao Noogym em dashboard e check-in mobile",
  compact = false,
  src = "/images/software-gestao-noogym.webp",
  priority = false,
}: SoftwareMockupImageProps) {
  return (
    <div
      className={`relative mx-auto w-full ${
        compact ? "max-w-lg" : "max-w-3xl"
      }`}
    >
      <div className="absolute -inset-4 rounded-[2rem] bg-noogym-green/20 blur-3xl md:-inset-8" />
      <div className="relative overflow-hidden rounded-xl">
        <Image
          alt={alt}
          className="h-auto w-full object-contain"
          height={1060}
          priority={priority}
          sizes={
            compact
              ? "(min-width: 1024px) 430px, 88vw"
              : "(min-width: 1024px) 760px, 94vw"
          }
          src={src}
          width={1484}
        />
      </div>
    </div>
  );
}
