import BaseUrls from "@/components/common-components/BaseUrl";
import { processFlow } from "@/app/constants/GlobalConstants";

export default function ProcessFlow() {
  return (
    <div className="mt-16 px-2">

      {/* Section header */}
      <div className="mb-6">
        <p className="font-mono text-[10px] tracking-[.12em] uppercase text-muted-foreground mb-1.5">
          Integration flow
        </p>
        <h2 className="text-lg font-medium text-foreground">
          How it works
        </h2>
      </div>

      {/* Flow steps */}
      <div className="rounded-xl border border-border overflow-hidden bg-card">
        {processFlow.map((item, i) => (
          <div
            key={item.step}
            className={`flex items-start gap-5 px-6 py-5 transition-colors hover:bg-muted/30 ${
              i !== 0 ? "border-t border-border" : ""
            }`}
          >
            {/* Step number */}
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="font-mono text-[11px] font-medium text-primary">
                {String(item.step).padStart(2, "0")}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <p className="text-[13px] font-medium text-foreground">
                  {item.title}
                </p>
                <span className="h-px flex-1 bg-border" />
                <span className="font-mono text-[10px] text-muted-foreground/50 tracking-widest flex-shrink-0">
                  step {String(item.step).padStart(2, "0")}
                </span>
              </div>
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <BaseUrls />
      </div>
    </div>
  );
}