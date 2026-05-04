"use client";
import profileGif from "@/public/assets/animation cat GIF by Olle Engstrom.gif";
import { User, LogOut, Phone } from "lucide-react";
import { useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import LogoutButton from "./LogoutButton";
import FancyButton from "./buttonLogin";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const reduxData = useSelector((state: any) => state.responseData?.respDatat);
  const auth = useSelector((state: any) => state.auth);

  let parsed: any[] = [];
  try {
    parsed = typeof reduxData === "string" ? JSON.parse(reduxData) : reduxData || [];
  } catch {
    parsed = [];
  }

  const fullName = parsed?.[0]?.FullName || "Guest User";
  const mobileNumber = parsed?.[0]?.MobileNumber || "Not available";

  // Initials for fallback avatar letter
  const initials = fullName
    .split(" ")
    .map((w: string) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>

      {/* ── Avatar trigger ── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Open user menu"
        className={`
          group relative w-9 h-9 rounded-full overflow-hidden
          ring-2 ring-transparent transition-all duration-200
          focus:outline-none focus-visible:ring-blue-500
          ${isOpen ? "ring-blue-500 shadow-md" : "hover:ring-slate-300"}
        `}
      >
        <img
          src={profileGif.src}
          alt="User Avatar"
          className="w-full h-full object-cover"
        />
        {/* Online indicator */}
        {auth?.isLoggedIn && (
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white" />
        )}
      </button>

      {/* ── Dropdown panel ── */}
      <div
        role="menu"
        className={`
          absolute right-0 mt-2.5 w-64 z-50
          bg-popover rounded-2xl border border-border
          shadow-xl shadow-foreground/5
          transition-all duration-200 origin-top-right
          ${isOpen ? "opacity-100 visible translate-y-0 scale-100" : "opacity-0 invisible -translate-y-1 scale-95"}
        `}
      >
        {auth?.isLoggedIn ? (
          <>
            {/* User info card */}
            <div className="px-4 pt-4 pb-3">
              <div className="flex items-center gap-3">
                {/* Avatar thumbnail */}
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-muted shrink-0">
                  <img src={profileGif.src} alt="" className="w-full h-full object-cover" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-semibold text-foreground truncate leading-tight">
                    {fullName}
                  </p>
                  <p className="text-[11px] text-muted-foreground truncate mt-0.5">
                    Soliteck API Docs
                  </p>
                </div>
                {/* Verified badge */}
                <div className="ml-auto shrink-0">
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-2 py-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Active
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border mx-4" />

            {/* Info rows */}
            <div className="px-3 py-2.5 space-y-0.5">
              <div className="flex items-center gap-3 px-2 py-2 rounded-xl bg-muted/50">
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <User size={13} className="text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-muted-foreground leading-none mb-0.5">Full name</p>
                  <p className="text-[12px] font-medium text-foreground truncate">{fullName}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-muted/50 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <Phone size={13} className="text-secondary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-muted-foreground leading-none mb-0.5">Mobile</p>
                  <p className="text-[12px] font-medium text-foreground truncate">{mobileNumber}</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border mx-4" />

            {/* Logout */}
            <div className="px-3 py-2.5">
              <LogoutButton />
            </div>
          </>
        ) : (
          /* Guest state */
          <div className="px-4 py-5 text-center">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
              <User size={20} className="text-muted-foreground" />
            </div>
            <p className="text-[13px] font-semibold text-foreground mb-0.5">Not signed in</p>
            <p className="text-[11px] text-muted-foreground mb-4">Sign in to access your account</p>
            <FancyButton className="w-full">Login</FancyButton>
          </div>
        )}
      </div>
    </div>
  );
}