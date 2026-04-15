"use client";

import { User, Settings, LogOut, CreditCard, Bell } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import LogoutButton from "./LogoutButton";

export default function UserDropdown() {
  const reduxData = useSelector((state: any) => state.responseData?.respDatat);

  let parsed = [];

  try {
    parsed = typeof reduxData === "string" ? JSON.parse(reduxData) : [];
  } catch {
    parsed = [];
  }

  const fullName = parsed?.[0]?.FullName || "User";
  const MobileNumber = parsed?.[0]?.MobileNumber || "0000000000";

  const menuItems = [
    { icon: User, label: fullName },
    { icon: FaPhoneAlt, label: MobileNumber },
    { icon: CreditCard, label: "Billing" },
    { icon: Bell, label: "Notifications" },
  ];
  return (
    <div className="relative group">
      {/* Avatar */}
      <button className="w-10 h-10 rounded-full overflow-hidden border">
        <img
          src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png"
          alt="user"
          className="w-full h-full object-cover"
        />
      </button>

      {/* Dropdown */}
      <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border hidden group-hover:block">
        <div className="p-2 text-sm font-semibold border-b justify-between flex gap-2">
          My Account <LogoutButton />
        </div>

        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
            >
              <Icon size={16} />
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
