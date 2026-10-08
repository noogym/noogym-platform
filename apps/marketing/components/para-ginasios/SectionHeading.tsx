import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`mx-auto mb-8 max-w-3xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
