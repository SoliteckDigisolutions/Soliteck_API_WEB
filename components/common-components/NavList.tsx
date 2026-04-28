"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DocsNav() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "API Documentation",
      href: "/docs/getting-started/introduction",
    },
    {
      name: "Authentication",
      href: "/docs/getting-started/authentication",
    },
    {
      name: "Integration",
      href: "/docs/getting-started/process",
    },
  ];

  return (
    <nav className="hidden md:flex border-blue-200 bg-gradient-to-br from-blue-0 to-white shadow-sm items-center gap-1 border p-[2px] rounded-lg bg-gray-50">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-[13px] px-3 py-1 rounded-md  font-medium transition-all duration-200
              ${
                isActive
                  ? "bg-white text-blue-600 shadow-sm border border-gray-200"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}