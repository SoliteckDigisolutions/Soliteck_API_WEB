"use client";

import { RiPageSeparator } from "react-icons/ri";
import ContactUs from "@/app/components/component/ContactUs";

interface Props {
  endpoints: any[];
  active: string;
}

export default function RightNavigation({ endpoints, active }: Props) {
  console.log(active);
  return (
    <aside className="hidden xl:block xl:w-[260px] xl:sticky xl:top-24 h-fit pl-4">
      <div className="space-y-6">
        <div>
          <h3 className="text-xs gap-1 flex items-center  font-semibold text-gray-500 uppercase tracking-wider mb-3">
            <RiPageSeparator size={18} /> On this page Navigation
          </h3>

          <nav className="flex flex-col gap-1  pl-4">
            {endpoints?.map((endpoint, index) => {
              const id = `endpoint-${index}`;

              return (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`text-sm transition-all ${
                    active === id
                      ? "text-blue-600 border-t border-b bg-blue-50 p-1.5 pl-1 font-medium border-l-3  border-blue-600 -ml-[17px] pl-4"
                      : "text-gray-600 border-t border-b bg-white p-1.5 pl-1 font-medium border-l-3  border-gray-10 -ml-[17px] pl-4"
                  }`}
                >
                  {endpoint.title}
                </a>
              );
            })}
          </nav>
          <div className="mx-0 m-4">
            <ContactUs />
          </div>

          {/* <button onClick={() => {<ContactUs/>}} className="shadow p-2 py-1 px-4 m-4 mx-0 rounded border font-sans text-sm bg-blue-200">Contact Us</button> */}
        </div>
      </div>
    </aside>
  );
}
