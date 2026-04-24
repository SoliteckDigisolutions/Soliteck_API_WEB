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
    sm: "px-2 py-2 flex gap-4 py-1 text-xs rounded-lg",
    md: "px-2 py-2 text-sm rounded-2xl",
    lg: "px-2 py-4 text-base",
  };

  return (
    <Link
      href={href}
      className={`group inline-flex items-center flex justify-center gap-1  bg-[#1a3d80] text-white font-semibold shadow-md transition-all duration-300 hover:bg-[#163270] hover:shadow-lg ${sizes[size]} ${className}`}
    >
      {children}

      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white transition-transform duration-300 group-hover:translate-x-1">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-black   fill-current">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
        </svg>
      </span>
    </Link>
  );
}
