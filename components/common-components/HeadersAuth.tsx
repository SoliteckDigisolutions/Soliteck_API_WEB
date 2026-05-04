import { GoVerified } from "react-icons/go";

const headers = [
  { name: "ClientId",     desc: "Provided by Soliteck",              required: true },
  { name: "ClientPass",   desc: "Provided by Soliteck",              required: true },
  { name: "ClientTPin",   desc: "Provided by Soliteck",              required: true },
  { name: "ClientSecret", desc: "Provided by Soliteck",              required: true },
  { name: "ClientToken",  desc: "Generated using GenerateToken API", required: true, generated: true },
];

export default function Authentication() {
  return (
    <div className="max-w-8xl mx-auto">
      <section id="authentication">

        {/* Section header */}
        <p className="font-mono text-[10px] tracking-[.12em] uppercase text-muted-foreground mb-1.5">
          Security
        </p>
        <h2 className="text-lg font-medium text-foreground mb-2">
          Authentication
        </h2>
        <p className="text-[13px] leading-relaxed text-muted-foreground mb-6 max-w-lg">
          Every request must include the following headers. Credentials are
          issued at onboarding; the token must be refreshed via the
          GenerateToken API.
        </p>

        {/* Header rows */}
        <div className="rounded-xl border border-border overflow-hidden bg-card mb-6">
          {headers.map((h, i) => (
            <div
              key={h.name}
              className={`flex items-center gap-4 px-6 py-4 hover:bg-muted/30 transition-colors ${
                i !== 0 ? "border-t border-border" : ""
              }`}
            >
              {/* Header name */}
              <div className="flex-shrink-0 min-w-[130px]">
                <span className="font-mono text-[12px] font-medium text-foreground bg-muted px-2.5 py-1 rounded-md">
                  {h.name}
                </span>
              </div>

              {/* Description */}
              <p className="flex-1 text-[13px] text-muted-foreground leading-relaxed">
                {h.desc}
              </p>

              {/* Badge */}
              <div className="flex-shrink-0">
                {h.generated ? (
                  <span className="font-mono text-[10px] tracking-wide uppercase px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                    generated
                  </span>
                ) : (
                  <span className="font-mono text-[10px] tracking-wide uppercase px-2 py-0.5 rounded-md bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
                    issued
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Info callout */}
        <div className="flex items-start gap-3 px-5 py-4 rounded-xl border border-primary/20 bg-primary/5 dark:bg-primary/10">
          <GoVerified className="text-primary flex-shrink-0 mt-0.5" size={15} />
          <p className="text-[13px] text-foreground leading-relaxed">
            Keep your{" "}
            <span className="font-mono text-[12px] font-medium text-primary">ClientSecret</span>{" "}
            and{" "}
            <span className="font-mono text-[12px] font-medium text-primary">ClientToken</span>{" "}
            confidential. Never expose them in client-side code or public repositories.
          </p>
        </div>

      </section>
    </div>
  );
}