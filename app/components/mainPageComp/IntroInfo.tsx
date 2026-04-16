"use client";

import { IntroInfo } from "@/app/constants/GlobalIntroInfo";
import { usePathname } from "next/navigation";

export default function IntroInfoSection() {
  const pathname = usePathname();
  const currentRoute = pathname.split("/").pop() || "payoutapi";
  console.log(currentRoute);
  const info = IntroInfo[currentRoute];

  if (!info) return null;

  return (
    <>
      <section className="max-w-5xl mx-auto px-2  space-y-6">
        {/* Header */}
        <div className="space-y-4 border-b pb-6">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            {info.mainHeading}
          </h1>

          <h2 className="text-xl font-semibold text-gray-800">
            {info.subTitle}
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-3xl">
            {info.subTitleContent}
          </p>
        </div>

        {/* Sections */}
        {info.subContent.map((section, index) => (
          <div key={index} className=" rounded-xl bg-white ">
            {/* Section Header */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {section.title}
              </h3>

              <p className="text-gray-600 mt-1">{section.content}</p>
            </div>

            {/* API List */}
            <div className="space-y-3">
              {section.data.map((item, idx) => (
                <div
                  key={idx}
                  className="flex lg:flex lg:flex-row flex-col items-start gap-2 border rounded-md p-3 bg-gray-50"
                >
                  <span className="text-blue-600 font-semibold whitespace-nowrap">
                    {item.title}
                  </span>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
