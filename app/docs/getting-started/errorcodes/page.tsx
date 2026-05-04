import { MdErrorOutline } from "react-icons/md";
import { httpErrors } from "@/app/constants/GlobalConstants";
import { apiErrors } from "@/app/constants/GlobalConstants";

const httpStatusColor = (code: number | string) => {
  const c = Number(code);
  if (c >= 500) return { bg: "bg-red-500/10", text: "text-red-600 dark:text-red-400", border: "border-red-500/20" };
  if (c >= 400) return { bg: "bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/20" };
  return { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20" };
};

export default function ErrorCodesPage() {
  return (
    <div className="max-w-8xl mt-8 mx-auto px-4 py-10">

      {/* HTTP Errors */}
      <section>
        <p className="font-mono text-[10px] tracking-[.12em] uppercase text-muted-foreground mb-1.5">
          Reference
        </p>
        <h2 className="text-lg font-medium text-foreground mb-6">
          HTTP error codes
        </h2>

        <div className="rounded-xl border border-border overflow-hidden bg-card">
          {httpErrors.map((error, i) => {
            const color = httpStatusColor(error.code);
            return (
              <div
                key={error.code}
                className={`flex items-start gap-5 px-6 py-4 hover:bg-muted/30 transition-colors ${
                  i !== 0 ? "border-t border-border" : ""
                }`}
              >
                {/* Code badge */}
                <div
                  className={`flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-lg border font-mono text-[12px] font-medium ${color.bg} ${color.text} ${color.border} min-w-[90px]`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 flex-shrink-0" />
                  {error.code}
                </div>

                {/* Title + desc */}
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-medium text-foreground mb-0.5">
                    {error.title}
                  </p>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">
                    {error.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* API Errors */}
      <section className="mt-12">
        <p className="font-mono text-[10px] tracking-[.12em] uppercase text-muted-foreground mb-1.5">
          API errors
        </p>
        <h2 className="text-lg font-medium text-foreground mb-2">
          Common API error codes
        </h2>
        <p className="text-[13px] leading-relaxed text-muted-foreground mb-6 max-w-lg">
          Error codes specific to each API are detailed in the 4XX response
          section within their respective documentation.
        </p>

        {apiErrors && apiErrors.length > 0 && (
          <div className="rounded-xl border border-border overflow-hidden bg-card">
            {apiErrors.map((error, i) => (
              <div
                key={error.code}
                className={`flex items-start gap-5 px-6 py-4 hover:bg-muted/30 transition-colors ${
                  i !== 0 ? "border-t border-border" : ""
                }`}
              >
                <div className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-lg border font-mono text-[12px] font-medium bg-destructive/10 text-destructive border-destructive/20 min-w-[90px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 flex-shrink-0" />
                  {error.code}
                </div>
                <div className="flex-1 min-w-0">
                 
                  <p className="text-[13px] leading-relaxed text-muted-foreground">
                    {error.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Fallback notice if no apiErrors data */}
        {(!apiErrors || apiErrors.length === 0) && (
          <div className="flex items-start gap-3 px-5 py-4 rounded-xl border border-amber-500/20 bg-amber-500/10">
            <MdErrorOutline className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" size={16} />
            <p className="text-[13px] text-amber-700 dark:text-amber-300 leading-relaxed">
              API-specific error codes are documented inline within each endpoint's 4XX response section.
            </p>
          </div>
        )}
      </section>

    </div>
  );
}