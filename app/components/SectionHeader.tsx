interface SectionHeaderProps {
  label: string;
  align?: "left" | "center";
  color?: "blue" | "zinc";
  withLine?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  align = "left",
  color = "blue",
  withLine = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""} ${className}`}
    >
      {withLine && (
        <div className={`w-10 h-px ${color === "blue" ? "bg-blue-500" : "bg-zinc-900"}`} />
      )}
      <h2
        className={`text-xs font-black uppercase tracking-[0.5em] ${color === "blue" ? "text-blue-500" : "text-zinc-700"}`}
      >
        {label}
      </h2>
    </div>
  );
}
