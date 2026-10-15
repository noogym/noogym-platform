import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, children, ...props }: CardProps) {
  return <div className={cn("glass rounded-lg", className)} {...props}>{children}</div>;
}
