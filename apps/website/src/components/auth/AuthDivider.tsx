export function AuthDivider({ label = "ou" }: { label?: string }) {
  return (
    <div className="flex items-center gap-4 text-xs text-white/50">
      <span className="h-px flex-1 bg-white/12" />
      <span>{label}</span>
      <span className="h-px flex-1 bg-white/12" />
    </div>
  );
}
