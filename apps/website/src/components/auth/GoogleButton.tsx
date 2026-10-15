"use client";

type GoogleButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function GoogleButton({ children, onClick }: GoogleButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-12 w-full items-center justify-center gap-3 rounded-md border border-white/15 bg-white/[0.015] px-4 text-sm font-semibold text-white transition hover:border-limebrand/55 hover:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-limebrand/45"
    >
      <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-[13px] font-black leading-none">
        <span className="bg-gradient-to-r from-[#4285F4] via-[#34A853] to-[#EA4335] bg-clip-text text-transparent">G</span>
      </span>
      {children}
    </button>
  );
}
