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
          if (!item.serviceID) return item;
          if (!hasService(item.serviceID)) return null;
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
    <aside className="hidden lg:flex flex-col w-[260px] border-r border-border bg-background h-screen sticky top-0 pt-20 px-4 overflow-y-auto hide-scrollbar transition-colors">

      {/* Logo / Title */}
      <div className="mb-8 px-1">
        <p className="font-mono text-[10px] tracking-[.12em] uppercase text-muted-foreground mb-1">
          Soliteck
        </p>
        <h2 className="text-[15px] font-medium text-foreground">
          API Documentation
        </h2>
      </div>

      {/* Sections */}
      <nav className="flex flex-col gap-5 pb-10">
        {filteredSections.map((section) => {
          const isOpen = openSection === section.title;

          return (
            <div key={section.title}>

              {/* Section toggle */}
              <button
                onClick={() => setOpenSection(isOpen ? null : section.title)}
                className="flex items-center justify-between w-full mb-1.5 px-1 group"
              >
                <span className="font-mono text-[10px] tracking-[.12em] uppercase text-muted-foreground group-hover:text-foreground transition-colors">
                  {section.title}
                </span>
                <FaChevronDown
                  size={9}
                  className={`text-muted-foreground/50 group-hover:text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Items */}
              {isOpen && (
                <ul className="flex flex-col gap-0.5">
                  {section.items.map((item) => {
                    const hasChildren = !!item?.children;
                    const itemOpen = openItem === item?.name;
                    const active = pathname === item?.href;

                    return (
                      <li key={item?.name}>
                        {hasChildren ? (
                          <>
                            <button
                              onClick={() => setOpenItem(itemOpen ? null : item.name)}
                              className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-[13px] transition-colors ${itemOpen
                                  ? "bg-primary/10 text-primary dark:bg-primary/15 dark:text-blue-400"
                                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                }`}
                            >
                              <span className="flex items-center gap-2">
                                <HiArrowTurnDownRight size={12} className="flex-shrink-0 opacity-50" />
                                {item.name}
                              </span>
                              <FaChevronDown
                                size={9}
                                className={`transition-transform duration-200 ${itemOpen ? "rotate-180" : ""}`}
                              />
                            </button>

                            {/* Children */}
                            {itemOpen && (
                              <ul className="ml-3 mt-0.5 pl-3 border-l border-border flex flex-col gap-0.5">
                                {item.children?.map((child) => {
                                  const childActive = pathname === child.href;
                                  return (
                                    <li key={child.name}>
                                      <Link
                                        href={child.href}
                                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[12px] transition-colors ${childActive
                                            ? "text-primary bg-primary/10 font-medium dark:text-blue-400 dark:bg-primary/15"
                                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                          }`}
                                      >
                                        <HiArrowTurnDownRight size={11} className="flex-shrink-0 opacity-50" />
                                        {child.name}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </>
                        ) : (
                          <Link
                            href={item?.href}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] transition-colors ${active
                                ? "bg-primary/10 text-primary font-medium border border-primary/20 dark:text-blue-400 dark:bg-primary/15"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                              }`}
                          >
                            <HiArrowTurnDownRight size={12} className="flex-shrink-0 opacity-50" />
                            {item?.name}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>

    </aside>
  );
}