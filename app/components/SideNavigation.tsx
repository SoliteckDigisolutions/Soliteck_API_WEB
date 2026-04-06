"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { TbApi } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";
import { HiArrowTurnDownRight } from "react-icons/hi2";
import { PiBridge } from "react-icons/pi";

export default function Sidebar() {

  const pathname = usePathname();

  const [openSection, setOpenSection] =
    useState<string | null>("Getting Started");

  const [openItem, setOpenItem] =
    useState<string | null>(null);

  const sidebar = [
    {
      title: "Getting Started",
      items: [
        { name: "Introduction", href: "/docs/introduction" },
        { name: "Error Codes", href: "/docs/errorCode" },
        {
          name: "Global API Process",
          href: "",
          children: [
            { name: "Integration Process", href: "/docs/process" },
            { name: "Authentication", href: "/docs/authentication" },
            { name: "Generate Token", href: "" },
          ],
        },
      ],
    },
    {
      title: "API Reference",
      items: [
        { name: "Payout API", href: "/docs/payoutapi" },
        { name: "Mobile Recharge API", href: "/docs/verify-payment" },
        { name: "DTH API", href: "/docs/verify-payment" },
        { name: "BBPS API", href: "/docs/verify-payment" },
        { name: "CC BP API", href: "/docs/verify-payment" },
        { name: "PG API", href: "/docs/verify-payment" },
        { name: "AEPS", href: "/docs/verify-payment" },
      ],
    },
    {
      title: "Webhooks",
      items: [
        { name: "Webhook Events", href: "/docs/webhooks" }
      ],
    },
  ];

  return (
    <aside  className="hidden font-sans lg:flex flex-col w-[260px] border-r bg-white h-screen sticky top-0 pt-20 px-5 overflow-y-auto">

      {/* Logo */}
      <div className="flex items-center gap-3 mb-8">
        {/* <PiBridge size={28} className="text-black font-black" />
        */}
        <h2 className="text-xl text-neutral-900 font-semibold tracking-tight">
          API Documentation
        </h2>
      </div>

      {sidebar.map((section) => {

        const isOpen = openSection === section.title;

        return (
          <div key={section.title} className="mb-6">

            {/* Section Header */}
            <button
              onClick={() =>
                setOpenSection(isOpen ? null : section.title)
              }
              className="flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2"
            >
              {section.title}

              <FaChevronDown
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Section Items */}
            {isOpen && (
              <ul className="space-y-1">

                {section.items.map((item) => {

                  const active = pathname === item.href;
                  const hasChildren = item.children;
                  const itemOpen = openItem === item.name;

                  return (
                    <li key={item.name}>

                      {/* Main Item */}
                      <div>
                        <button
                          onClick={() =>
                            hasChildren
                              ? setOpenItem(
                                  itemOpen ? null : item.name
                                )
                              : null
                          }
                          className={`group flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm transition-all
                          ${
                            active
                              ? "bg-blue-50 text-blue-600 font-medium"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >

                          <Link
                            href={item.href}
                            className="flex items-center gap-2"
                          >
                            <HiArrowTurnDownRight
                              className="text-gray-400 group-hover:text-blue-500"
                            />
                            {item.name}
                          </Link>

                          {hasChildren && (
                            <FaChevronDown
                              className={`text-xs transition-transform duration-300 ${
                                itemOpen ? "rotate-180" : ""
                              }`}
                            />
                          )}
                        </button>

                        {/* Children */}
                        {hasChildren && itemOpen && (
                          <ul className="ml-6 mt-1 space-y-1 border-l pl-3">

                            {item.children.map((child) => {

                              const childActive =
                                pathname === child.href;

                              return (
                                <li key={child.name}>

                                  <Link
                                    href={child.href}
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition
                                    ${
                                      childActive
                                        ? "text-blue-600 font-medium"
                                        : "text-gray-500 hover:text-blue-600"
                                    }`}
                                  >
                                    <HiArrowTurnDownRight className="text-xs"/>
                                    {child.name}
                                  </Link>

                                </li>
                              );
                            })}

                          </ul>
                        )}

                      </div>

                    </li>
                  );
                })}

              </ul>
            )}
          </div>
        );
      })}
    </aside>
  );
}