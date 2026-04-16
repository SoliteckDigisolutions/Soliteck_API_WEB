import Link from "next/link";

interface FancyButtonProps {
  href?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function FancyButton({
  href = "/login",
  children,
  size = "md",
  className = "",
}: FancyButtonProps) {
  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-lg bg-[#1a3d80] text-white font-semibold shadow-md transition-all duration-300 hover:bg-[#163270] hover:shadow-lg ${sizes[size]} ${className}`}
    >
      {children}

      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
        </svg>
      </span>
    </Link>
  );
}
