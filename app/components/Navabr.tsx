"use client";

import logo from "@/public/assets/Logo.svg";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { TiLink } from "react-icons/ti";
import { ChevronDown } from "lucide-react";
import Search from "../components/SearchGlobal"

const API_REFS = [
  { label: "Payout API", href: "/docs/payoutapi" },
  { label: "Mobile API", href: "/docs/mobileapi" },
  { label: "PG API", href: "/docs/pgapi" },
  { label: "DTH", href: "/docs/dthRecharge" },
  { label: "BBPS", href: "/docs/bbpsapi" },
  { label: "CC BP API", href: "/docs/ccbpapi" },
  { label: "AEPS", href: "/docs/aepsapi" },
];

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-[999] bg-white border-b border-gray-200 font-sans">

      {/* top gradient line */}
      <div className="h-[2px] bg-gradient-to-r from-blue-700 via-purple-600 to-cyan-600" />

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-14">

        {/* LOGO */}
        <div
          onClick={() => router.push("/")}
          className="flex items-center gap-2.5 cursor-pointer select-none"
        >
          <Image src={logo} alt="Soliteck logo" className="w-24" />

          <span className="text-[10px] font-mono text-gray-500 bg-gray-100 border border-gray-200 px-1.5 py-[1px] rounded">
            API
          </span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-1">

          <Link
            href="/docs/introduction"
            className="text-[13px] font-medium text-gray-700 px-3 py-1 rounded-md hover:bg-gray-100 hover:text-gray-900 transition"
          >
            Documentation
          </Link>

          {/* Dropdown */}
          <div ref={dropRef} className="relative">

            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1 text-[13px] font-medium px-3 py-1 rounded-md transition ${
                dropdownOpen
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              API Reference

              <ChevronDown
                size={14}
                className={`transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
           

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden animate-in fade-in zoom-in-95">

                {API_REFS.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => {
                      router.push(item.href);
                      setDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 border-t first:border-t-0"
                  >
                    {item.label}
                  </button>
                ))}

              </div>
            )}
          </div>
 
        </nav>
<Search />
        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://soliteck.com" target="blank"
            className="flex opacity-100 items-center  px-3 py-1 rounded-md border border-gray-200 text-xs font-mono text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition"
          >
                <Image src={logo} alt="Soliteck logo" className="w-24" />.com <TiLink size={12} />
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
        >
          {menuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 pb-5">

          <Link
            href="/docs/introduction"
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-100"
          >
            Documentation
          </Link>

          <p className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mt-4 mb-2">
            API Reference
          </p>

          {API_REFS.map((item) => (
            <button
              key={item.href}
              onClick={() => {
                router.push(item.href);
                setMenuOpen(false);
              }}
              className="block w-full text-left py-3 text-sm font-medium text-gray-700 border-b border-gray-100"
            >
              {item.label}
            </button>
          ))}

          <div className="pt-4">
            <a
              href="https://soliteck.com"
              className="inline-flex items-center gap-1 px-3 py-1 rounded-md border border-gray-200 text-xs font-mono text-gray-500"
            >
              soliteck.com <TiLink size={12} />
            </a>
          </div>

        </div>
      )}
    </header>
  );
}