"use client";

import { IoIosLink } from "react-icons/io";
import CopyButton from "./CopyButton";

interface BaseUrlsProps {
  urls?: {
    link: string;
    auth: string;
  };
}

export default function BaseUrls({ urls }: BaseUrlsProps) {
  if (!urls) return null;

  const urlItems = [
    { label: "Uat", key: "link", value: urls.link },
    { label: "Auth", key: "auth", value: urls.auth },
  ];

  return (
    <div className="space-y-3">

      {/* Section header */}
      <p className="font-mono text-[10px] tracking-[.12em] uppercase text-muted-foreground mb-1.5">
        Endpoints
      </p>
      <h2 className="text-lg font-medium text-foreground mb-4">
        Base URLs
      </h2>

      {/* URL rows */}
      <div className="rounded-xl border border-border overflow-hidden bg-card">
        {urlItems.map((item, i) => (
          <div
            key={item.key}
            className={`flex items-center gap-4 px-5 py-4 hover:bg-muted/30 transition-colors ${
              i !== 0 ? "border-t border-border" : ""
            }`}
          >
            {/* Label badge */}
            <div className="flex-shrink-0 min-w-[90px]">
              <span className="font-mono text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20">
                {item.label}
              </span>
            </div>

            {/* URL */}
            <code className="flex-1 font-mono text-[12px] text-muted-foreground break-all leading-relaxed">
              {item.value}
            </code>

            {/* Copy */}
            <CopyButton
              text={item.value}
              className="flex-shrink-0 ml-2"
            />
          </div>
        ))}
      </div>

      {/* Info callout */}
      <div className="flex items-start gap-3 px-5 py-3.5 rounded-xl border border-primary/20 bg-primary/5">
        <IoIosLink className="text-primary flex-shrink-0 mt-0.5" size={14} />
        <p className="text-[12px] text-primary/80 leading-relaxed">
          Use the <span className="font-mono font-medium">Auth</span> base URL
          only for token generation. All other requests should use the{" "}
          <span className="font-mono font-medium">Uat</span> base URL.
        </p>
      </div>

    </div>
  );
}
