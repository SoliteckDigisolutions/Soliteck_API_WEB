"use client";

import { RiPageSeparator } from "react-icons/ri";
import ContactUs from "@/components/common-components/ContactUs";

interface Props {
  endpoints: any[];
  active: string;
}

export default function RightNavigation({ endpoints, active }: Props) {
  return (
    <aside className="hidden xl:block xl:w-[260px] xl:sticky xl:top-24 h-fit">
      
      <div className="space-y-6">

        {/* Heading */}
        <div>
          <h3 className="flex items-center gap-2 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            <RiPageSeparator size={16} />
            On this page
          </h3>

          {/* Nav */}
          <nav className="relative flex flex-col gap-1 pl-4 border-l border-border">
            {endpoints?.map((endpoint, index) => {
              const id = `endpoint-${index}`;
              const isActive = active === id;

              return (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`relative text-[13px] py-1 transition-all duration-200
                    ${
                      isActive
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {/* Active indicator line */}
                  {isActive && (
                    <span className="absolute -left-[17px] top-0 h-full w-[2px] bg-primary rounded-full" />
                  )}

                  {endpoint.title}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Contact Card */}
        <div className=" border-border rounded-lg p-1 w-fit bg-muted/50">
          <ContactUs />
        </div>

      </div>
    </aside>
  );
}