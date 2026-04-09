"use client";

import { RiPageSeparator } from "react-icons/ri";
import Search from "./Search";

interface Props {
  endpoints: any[];
  active: string;
}

export default function RightNavigation({ endpoints, active }: Props) {
  return (
    <aside className="hidden xl:block xl:w-[260px] xl:sticky xl:top-24 h-fit pl-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-xs gap-1 flex items-center  font-semibold text-gray-500 uppercase tracking-wider mb-3">
            <RiPageSeparator size={18} /> On this page
          </h3>

          <nav className="flex flex-col gap-2 border-l pl-4">
            {endpoints.map((endpoint, index) => {
              const id = `endpoint-${index}`;

              return (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`text-sm transition-all ${
                    active === id
                      ? "text-blue-600 font-medium border-l-2 border-blue-600 -ml-[17px] pl-4"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {endpoint.title}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}
