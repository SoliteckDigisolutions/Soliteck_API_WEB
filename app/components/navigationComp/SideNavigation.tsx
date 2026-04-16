"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { HiArrowTurnDownRight } from "react-icons/hi2";
import { useServiceAccess } from "@/hooks/useServiceAccess";
import { sidebarMenu } from "@/app/constants/GlobalConstants";


export default function Sidebar() {
  const pathname = usePathname();
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
  console.log(filteredSections, "filtered sections");

  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openItem, setOpenItem] = useState<string | null>(null);

  useEffect(() => {
    sidebarMenu.forEach((section) => {
      section.items.forEach((item) => {
        if (item.href === pathname) {
          setOpenSection(section.title);
        }

        if (item.children) {
          item.children.forEach((child) => {
            if (child.href === pathname) {
              setOpenSection(section.title);
              setOpenItem(item.name);
            }
          });
        }
      });
    });
  }, [pathname]);

  return (
    <aside className="hidden lg:flex flex-col w-[260px] border-r bg-white h-screen sticky top-0 pt-20 px-5 overflow-y-auto">
      <h2 className="text-xl text-neutral-900 font-semibold mb-8">
        API Documentation
      </h2>

      {filteredSections.map((section) => {
        const isOpen = openSection === section.title;

        return (
          <div key={section.title} className="mb-6">
            {/* Section */}
            <button
              onClick={() => setOpenSection(isOpen ? null : section.title)}
              className="flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2"
            >
              {section.title}

              <FaChevronDown
                className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isOpen && (
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const hasChildren = !!item?.children;
                  const itemOpen = openItem === item?.name;

                  const active =
                    // pathname === item.href || pathname.startsWith(item.href);
                    pathname === item?.href;

                  return (
                    <li key={item?.name}>
                      {/* Parent Item */}
                      <div className="flex flex-col">
                        {hasChildren ? (
                          <button
                            onClick={() =>
                              setOpenItem(itemOpen ? null : item.name)
                            }
                            className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition
                            ${
                              itemOpen
                                ? "bg-blue-50 text-blue-600 font-medium"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <HiArrowTurnDownRight />
                              {item.name}
                            </span>

                            <FaChevronDown
                              className={`text-xs transition-transform ${
                                itemOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        ) : (
                          <Link
                            href={item?.href}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition
                            ${
                              active
                                ? "bg-blue-50 text-blue-600 font-medium"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            <HiArrowTurnDownRight />
                            {item?.name}
                          </Link>
                        )}

                        {/* Children */}
                        {hasChildren && itemOpen && (
                          <ul className="ml-6 mt-1 space-y-1 border-l pl-3">
                            {item.children?.map((child) => {
                              const childActive = pathname === child.href;

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
                                    <HiArrowTurnDownRight className="text-xs" />
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
