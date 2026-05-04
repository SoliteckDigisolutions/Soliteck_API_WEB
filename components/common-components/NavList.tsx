"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "API Documentation", href: "/docs/getting-started/introduction" },
  { name: "Authentication",    href: "/docs/getting-started/authentication" },
  { name: "Integration",       href: "/docs/getting-started/process" },
];

export default function DocsNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Documentation sections"
      className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-muted/30 border border-border/50"
    >
      {navItems.map(({ name, href }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 outline-none",
              isActive
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            )}
          >
            {name}
          </Link>
        );
      })}
    </nav>
  );
}