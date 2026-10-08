import Image from "next/image";
import { cn } from "@/lib/utils";

type UserAvatarProps = {
  alt?: string;
  className?: string;
  size?: number;
  src?: string | null;
};

export function UserAvatar({ alt = "Utilizador Noogym", className, size = 44, src }: UserAvatarProps) {
  return (
    <Image
      src={src || "/images/dashboard/avatar-miguel.png"}
      alt={alt}
      width={size}
      height={size}
      className={cn("rounded-full border border-white/15 object-cover shadow-glow", className)}
    />
  );
}
