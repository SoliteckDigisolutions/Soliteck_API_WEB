"use client";

import { IntroInfo } from "@/app/constants/GlobalIntroInfo";
import { usePathname } from "next/navigation";

export default function IntroInfoSection() {
  const pathname = usePathname();
  const currentRoute = pathname.split("/").pop() || "payoutapi";
  const info = IntroInfo[currentRoute];

  if (!info) return null;

  return (
    <section className="space-y-10 pb-4">

      {/* Page header */}
      <div className="space-y-4 border-b border-border pb-6 sm:pb-8">
        
        <p className="font-mono text-[10px] sm:text-[11px] tracking-[.12em] uppercase text-muted-foreground">
          {currentRoute}
        </p>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-foreground leading-tight">
          {info.mainHeading}
        </h1>

        {info.subTitle && (
          <h2 className="text-sm sm:text-[15px] md:text-base font-medium text-muted-foreground">
            {info.subTitle}
          </h2>
        )}

        {info.subTitleContent && (
          <p className="text-sm sm:text-[13px] md:text-[14px] leading-relaxed text-muted-foreground max-w-2xl">
            {info.subTitleContent}
          </p>
        )}
      </div>

      {/* Sub-sections */}
      {info?.subContent?.map((section, index) => (
        <div key={index} className="space-y-5 sm:space-y-6">

          {/* Section heading */}
          <div>
            <p className="font-mono text-[10px] sm:text-[11px] tracking-[.12em] uppercase text-muted-foreground mb-1">
              {String(index + 1).padStart(2, "0")}
            </p>

            <h3 className="text-sm sm:text-[15px] md:text-[16px] font-medium text-foreground mb-1">
              {section.title}
            </h3>

            {section.content && (
              <p className="text-sm sm:text-[13px] md:text-[14px] leading-relaxed text-muted-foreground max-w-2xl">
                {section.content}
              </p>
            )}
          </div>

          {/* API item rows */}
          {section.data?.length > 0 && (
            <div className="rounded-xl border border-border overflow-hidden bg-card">

              {section.data.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col sm:flex-row gap-2 sm:gap-5 px-4 sm:px-5 py-4 hover:bg-muted/30 transition-colors ${
                    idx !== 0 ? "border-t border-border" : ""
                  }`}
                >
                  {/* Title badge */}
                  <div className="sm:min-w-[160px]">
                    <span className="inline-block font-mono text-[11px] sm:text-xs font-medium text-foreground bg-muted px-2.5 py-1 rounded-md">
                      {item.title}
                    </span>
                  </div>

                  {/* Content */}
                  <p className="text-sm sm:text-[13px] md:text-[14px] leading-relaxed text-muted-foreground">
                    {item.content}
                  </p>
                </div>
              ))}

            </div>
          )}

        </div>
      ))}

    </section>
  );
}