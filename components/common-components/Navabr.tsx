"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { TiLink } from "react-icons/ti";
import logo from "@/public/assets/Logo.svg";
import Search from "./SearchGlobal";
import UserProfile from "./UserProfile";
import { useServiceAccess } from "@/hooks/useServiceAccess";
import { sidebarMenu } from "@/app/constants/GlobalConstants";
import NavList from "@/components/common-components/NavList"

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const { hasService } = useServiceAccess();

  const filteredSections = sidebarMenu
    .map((section) => ({
      ...section,
      items: section.items
        .map((item) => {
          // allow items without service restriction
          if (!item.serviceID) return item;

          // check permission
          if (!hasService(item.serviceID)) return null;

          // check children if exist
          if (item.children) {
            const filteredChildren = item.children.filter(
              (child) => !child.serviceID || hasService(child.serviceID),
            );

            return { ...item, children: filteredChildren };
          }

          return item;
        })
        .filter(Boolean),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <header className="w-full fixed top-0 left-0 z-[999] bg-white border-b border-gray-200 font-sans">
      {/* top gradient line */}
      <div className="h-[2px] bg-gradient-to-r from-blue-700 via-purple-600 to-cyan-600" />

      <div className="max-w-8xl mx-auto flex items-center justify-between px-4 md:px-8 h-14">
        {/* LOGO */}
        <div
          onClick={() => router.push("/")}
          className="flex items-center gap-2.5 cursor-pointer select-none"
        >
          <Image src={logo} alt="Soliteck logo" className="w-26" />

          <span className="text-[10px] font-mono text-gray-500 bg-gray-100 border border-gray-200 px-1.5 py-[1px] rounded">
            API
          </span>
        </div>

        {/* DESKTOP NAV */}
        <NavList/>

      

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-4">
            {/* SEARCH */}
        <div className="">
          <Search />
        </div>
          <a
            href="https://soliteck.com"
            target="_blank"
            className="flex items-center gap-1 px-3 py-1 rounded-lg border border-gray-200 text-xs font-mono text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition"
          >
            <Image src={logo} alt="Soliteck logo" className="w-16" />
            .com <TiLink size={12} />
          </a>

          <UserProfile />
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition"
        >
          {menuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className=" bg-white border-t border-gray-200 shadow-lg">
          <div className="px-5 py-4 space-y-4">
            {/* SEARCH */}
            <Search />

            {/* Documentation */}
            <Link
              href="/docs/getting-started/introduction"
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition"
            >
              Documentation
            </Link>

            {/* Divider */}
            <div className="border-t border-gray-100" />

            {/* API Reference */}
            <p className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">
              API Reference
            </p>

            <div className="flex flex-col rounded-lg border border-gray-100 overflow-hidden">
              {filteredSections?.[1]?.items
                ?.filter(Boolean)
                .map((section: any, index: number) => (
                  <button
                    key={section?.name || index}
                    onClick={() => {
                      router.push(section?.href);
                      setMenuOpen(false);
                    }}
                    className="flex items-center justify-between px-3 py-3 text-sm text-gray-700 hover:bg-gray-50 transition border-b last:border-none"
                  >
                    {section?.name}

                    <span className="text-gray-400 text-xs">→</span>
                  </button>
                ))}
            </div>

            {/* User Profile */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="pt-3 relative z-10 border-t border-gray-100"
            >
              <UserProfile />
            </div>

            {/* Website Link */}
            <div className="pt-2 ">
              <a
                href="https://soliteck.com"
                target="_blank"
                className="inline-flex items-center  gap-1 px-3 py-1 rounded-md border border-gray-200 text-xs font-mono text-gray-500 hover:bg-gray-50"
              >
                soliteck.com <TiLink size={12} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
