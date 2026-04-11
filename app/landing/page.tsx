import Navbar from "@/app/components/navigationComp/Navabr"
import Link from "next/link"
import StatsBar from "../components/landingComp/StatsBar"
import AnimatedCard from "@/app/components/landingComp/AimatedCard"

const categories = [
  { label: "Payout API",          href: "",     color: "bg-blue-50 text-blue-700 border-blue-200",   dot: "bg-blue-500" },
  { label: "Mobile Recharge API", href: "", color: "bg-violet-50 text-violet-700 border-violet-200", dot: "bg-violet-500" },
  { label: "DTH API",             href: "", color: "bg-orange-50 text-orange-700 border-orange-200", dot: "bg-orange-400" },
  { label: "Payment Gateway API", href: "", color: "bg-green-50 text-green-700 border-green-200",   dot: "bg-green-500" },
  { label: "BBPS API",            href: "", color: "bg-yellow-50 text-yellow-700 border-yellow-200", dot: "bg-yellow-500" },
  { label: "CC Bill Payment API", href: "", color: "bg-rose-50 text-rose-700 border-rose-200",     dot: "bg-rose-500" },
  { label: "AEPS API",            href: "", color: "bg-teal-50 text-teal-700 border-teal-200",     dot: "bg-teal-500" },
]

const whyCards = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    accent: "text-blue-600",
    bg:     "bg-blue-50",
    border: "border-blue-100",
    title:  "Bank-Grade Security",
    desc:   "End-to-end encrypted transactions with strict compliance and fraud prevention built into every API call.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    accent: "text-violet-600",
    bg:     "bg-violet-50",
    border: "border-violet-100",
    title:  "Lightning Fast",
    desc:   "Sub-200ms average response times powered by high-performance cloud infrastructure across multiple regions.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    accent: "text-emerald-600",
    bg:     "bg-emerald-50",
    border: "border-emerald-100",
    title:  "Simple Integration",
    desc:   "RESTful APIs with clear documentation, sample code, and a sandbox environment to test before going live.",
  },
]



export default function LandingPage() {
  return (
    <>
      <Navbar />

      <main className="font-sans">

        {/* ═══════════════════════════ HERO ═══════════════════════════ */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">

          {/* Gradient background */}
          <div className="absolute rounded-r-[100%] inset-0 pointer-events-none
bg-[linear-gradient(to_bottom,#fff_0%,#fff_40%,rgba(255,255,255,0)_100%),linear-gradient(to_right,#ff1d25,#2a2a72,#1e4b99,#ff1d25)]
before:content-['']
before:absolute
before:inset-0
before:pointer-events-none
before:bg-[linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)]
before:bg-[length:60px_100%]" />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-violet-400/10 rounded-full blur-3xl pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 max-w-4xl animate-fade-up" style={{ paddingTop: "60px" }}>

            <div className="badge border w-fit px-2 py-1 rounded-xl bg-white text-mist-600 mx-auto mb-2">
              <span className="w-2  h-2 rounded-full animate-pulse" />
              SoliTeck API Documentation · v1.0
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900 mb-6">
              Powering Payments
              <br />
              <span className="gradient-text">For Every Business</span>
            </h1>

            <p className="text-slate-800 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Integrate bill payments, FASTag recharge, payouts, and settlement APIs
              into your platform with SoliTeck's battle-tested infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/docs/introduction"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300"
              >
                Read Documentation →
              </Link>
              <Link
                href="/docs/payoutapis"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-700 text-sm font-semibold border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm"
              >
                Explore APIs
              </Link>
            </div>
          </div>
<StatsBar/>

        </section>
     <section>
            
     </section>

        {/* ═══════════════════════════ API CATEGORIES ═══════════════════════════ */}
        <section className="px-4 md:px-10 py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">What We Offer</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">API Categories</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">
                Everything you need to build full-featured fintech applications, from payouts to utility bill payments.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {categories.map((cat) => (
                <Link
                  key={cat.label}
                  href={cat.href}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-md ${cat.color}`}
                >
                  <span className={`w-2 h-2 rounded-full shrink-0 ${cat.dot}`} />
                  {cat.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section>
          <AnimatedCard />
        </section>

        {/* ═══════════════════════════ WHY SOLITECK ═══════════════════════════ */}
        <section className="px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">Why Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Built for Developers</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {whyCards.map((card) => (
                <div
                  key={card.title}
                  className={`rounded-2xl border p-6 hover:shadow-lg transition-all ${card.border} bg-white`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${card.bg} ${card.accent}`}>
                    {card.icon}
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ CTA BANNER ═══════════════════════════ */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto rounded-3xl bg-linear-to-br from-blue-600 to-blue-800 p-10 text-center text-white shadow-2xl shadow-blue-200">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to integrate?</h2>
            <p className="text-blue-200 mb-8 text-sm max-w-lg mx-auto">
              Start building with our sandbox environment. No credit card required.
            </p>
            <Link
              href="/docs/introduction"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white text-blue-700 font-semibold text-sm hover:bg-blue-50 transition-all shadow-sm"
            >
              Start Reading →
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-400">
          © {new Date().getFullYear()}  Soliteck Digisolutions Private Limited · All rights reserved
        </footer>

      </main>
    </>
  )
}