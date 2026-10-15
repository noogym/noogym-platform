import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function Button({ href, className, variant = "primary", size = "md", children, onClick, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex max-w-full min-w-0 items-center justify-center gap-2 rounded-md text-center font-semibold leading-snug transition duration-200 focus:outline-none focus:ring-2 focus:ring-limebrand/60 disabled:opacity-50",
    variant === "primary" && "bg-limebrand text-black hover:bg-limebrand2 hover:shadow-glow",
    variant === "secondary" && "border border-white/16 bg-white/[0.03] text-white hover:border-limebrand/70 hover:text-limebrand",
    variant === "ghost" && "text-white/80 hover:text-limebrand",
    size === "sm" && "min-h-9 px-3 py-2 text-sm",
    size === "md" && "min-h-11 px-5 py-2.5 text-sm",
    size === "lg" && "min-h-12 px-7 py-3 text-base",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
