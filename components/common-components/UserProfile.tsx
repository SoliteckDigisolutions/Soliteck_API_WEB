"use client";
import profileGif from "@/public/assets/animation cat GIF by Olle Engstrom.gif";
import { User, LogOut } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
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
    parsed =
      typeof reduxData === "string" ? JSON.parse(reduxData) : reduxData || [];
  } catch {
    parsed = [];
  }

  const fullName = parsed?.[0]?.FullName || "Guest User";
  const mobileNumber = parsed?.[0]?.MobileNumber || "Not available";

  const menuItems = [
    { icon: User, label: fullName },
    { icon: FaPhoneAlt, label: mobileNumber },
  ];

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
    <div className="relative cursor-pointer" ref={dropdownRef}>
      {/* Avatar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-11 h-11 flex items-center justify-center rounded-full cursor-pointer overflow-hidden border hover:ring-2 hover:ring-gray-400 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-expanded={isOpen}
      >
        <img src={profileGif.src} alt="User Avatar" className="w-full h-full object-cover" />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute right-0 mt-2 w-56 bg-white shadow-xl rounded-lg border transition-all duration-200 z-50 origin-top-right ${isOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
          }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-3 border-b text-sm font-semibold">
          My Account
          {auth?.isLoggedIn ? (
            <LogoutButton />
          ) : (
            <FancyButton  className="ml-4">
              Login
            </FancyButton>
          )}
        </div>

        {/* Menu */}
        <div className="py-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-100"
              >
                {auth?.isLoggedIn ? (
                  <>
                    <Icon size={16} className="text-gray-500" />
                    <span>{item.label}</span>
                  </>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
