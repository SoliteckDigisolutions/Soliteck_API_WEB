import {
  FileText, ArrowUp, Bell, Clock, Code,
  ArrowRight, CreditCard, CheckCircle, Activity,
} from "lucide-react";

const stats = [
  { label: "Uptime SLA", value: "99.99%", sub: "guaranteed availability" },
  { label: "Avg. response", value: "< 80ms", sub: "p95 latency" },
  { label: "API endpoints", value: "40+", sub: "across all services" },
];

const features = [
  { icon: <CreditCard size={15} />, label: "Secure payment gateway APIs" },
  { icon: <ArrowUp size={15} />, label: "Instant payout APIs" },
  { icon: <Activity size={15} />, label: "Recharge and bill payment APIs" },
  { icon: <Bell size={15} />, label: "Webhook event notifications" },
  { icon: <Clock size={15} />, label: "Real-time transaction status tracking", wide: true },
];

const steps = [
  { icon: <FileText size={15} />, title: "Get credentials", desc: "Create account, obtain API keys" },
  { icon: <Code size={15} />, title: "Make a request", desc: "Call endpoints with your auth token" },
  { icon: <Bell size={15} />, title: "Listen to events", desc: "Configure webhooks for updates" },
  { icon: <CheckCircle size={15} />, title: "Go live", desc: "Switch to production, start processing" },
];

export default function IntroductionPage() {
  return (
    <div className="max-w-8xl mt-8 mx-auto px-4 py-10">

      {/* Eyebrow */}
      <div className="inline-flex items-center gap-2 text-primary bg-primary/10 font-mono text-[10px] tracking-[.09em] uppercase px-3.5 py-1.5 rounded-full mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
        API Documentation
      </div>

      {/* Hero */}
      <h1 className="text-4xl font-medium tracking-tight text-foreground mb-4">
        Build with <span className="text-primary">Soliteck</span>
      </h1>
      <p className="text-[15px] leading-[1.8] text-muted-foreground max-w-lg mb-8">
        Integrate secure digital payments, payouts, recharge services, and financial
        operations into your application — reliably and at scale.
      </p>

      {/* Stat row */}
      <div className="grid grid-cols-3 gap-2.5 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-muted/50 rounded-xl p-4 border border-border">
            <p className="text-xs text-muted-foreground mb-1">{s.label}</p>
            <p className="text-xl font-medium text-foreground tracking-tight">{s.value}</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">{s.sub}</p>
          </div>
        ))}
      </div>

      <hr className="border-border mb-8" />

      {/* What you can build */}
      <p className="font-mono text-[10px] tracking-[.12em] uppercase text-muted-foreground mb-1.5">
        What you can build
      </p>
      <h2 className="text-lg font-medium text-foreground mb-2">
        Purpose-built for fintech
      </h2>
      <p className="text-sm leading-[1.8] text-muted-foreground max-w-xl mb-8">
        Using Soliteck APIs, developers can integrate payment gateways, payout systems,
        mobile recharge services, DTH services, and bill payment solutions directly into
        their platforms. Our APIs are designed for reliability, security, and high performance.
      </p>

      {/* Key features */}
      <p className="font-mono text-[10px] tracking-[.12em] uppercase text-muted-foreground mb-3">
        Key features
      </p>
      <div className="grid grid-cols-2 gap-2.5 mb-8">
        {features.map((f) => (
          <div
            key={f.label}
            className={`flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3.5 hover:border-primary/30 hover:bg-muted/30 transition-colors ${
              f.wide ? "col-span-2" : ""
            }`}
          >
            <div className="w-[34px] h-[34px] rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
              {f.icon}
            </div>
            <span className="text-[13px] text-muted-foreground">{f.label}</span>
          </div>
        ))}
      </div>

      <hr className="border-border mb-8" />

      {/* Integration flow */}
      <p className="font-mono text-[10px] tracking-[.12em] uppercase text-muted-foreground mb-5">
        Integration flow
      </p>
      <div className="flex items-start mb-8">
        {steps.map((step, i) => (
          <div key={step.title} className="flex flex-col items-center flex-1 relative">
            {i < steps.length - 1 && (
              <div className="absolute top-[19px] left-[calc(50%+22px)] right-0 h-px bg-border" />
            )}
            <div className="relative w-[38px] h-[38px] rounded-full border border-border bg-card flex items-center justify-center z-10 text-primary mb-2.5">
              {step.icon}
              <span className="absolute -top-1 -right-1 w-[14px] h-[14px] rounded-full bg-primary text-primary-foreground text-[9px] font-mono font-medium flex items-center justify-center">
                {i + 1}
              </span>
            </div>
            <p className="text-[12px] font-medium text-foreground text-center mb-1">{step.title}</p>
            <p className="text-[11px] text-muted-foreground text-center leading-snug max-w-[84px]">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Base URL banner */}
      <div className="flex items-center justify-between gap-4 bg-muted/40 border border-border rounded-xl px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground flex-shrink-0">
            <Code size={15} />
          </div>
          <div>
            <p className="text-[13px] font-medium text-foreground mb-0.5">Base URL</p>
            <p className="font-mono text-[11px] text-muted-foreground tracking-wide">
              https://api.soliteck.com/v1
            </p>
          </div>
        </div>
        <button className="flex items-center gap-1.5 text-[13px] font-medium text-primary bg-primary/10 border border-primary/20 rounded-lg px-4 py-2 hover:opacity-80 transition-opacity whitespace-nowrap">
          Quick start <ArrowRight size={13} />
        </button>
      </div>

    </div>
  );
}