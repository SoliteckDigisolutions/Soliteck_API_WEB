  import Navbar from "@/components/common-components/Navabr";
  import Link from "next/link";
  import StatsBar from "../../components/common-components/StatsBar";
  // import AnimatedCard from "@/app/components/landingComp/AimatedCard";
  import FancyButton from "@/components/common-components/buttonLogin";
  import { categorieses } from "@/app/constants/GlobalConstants";

  const whyCards = [
    {
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      accent: "text-primary",
      bg: "bg-primary/10",
      border: "border-primary/20",
      title: "Bank-Grade Security",
      desc: "End-to-end encrypted transactions with strict compliance and fraud prevention built into every API call.",
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      accent: "text-secondary-foreground",
      bg: "bg-secondary",
      border: "border-border",
      title: "Lightning Fast",
      desc: "Sub-200ms average response times powered by high-performance cloud infrastructure across multiple regions.",
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            stroke="currentColor"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      accent: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      title: "Simple Integration",
      desc: "RESTful APIs with clear documentation, sample code, and a sandbox environment to test before going live.",
    },
  ];

  export default function LandingPage() {
    return (
      <>
        <Navbar />

        <main className="font-sans mt-4">
          {/* HERO SECTION */}
          <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden">
            {/* Gradient background */}
            <div
              className="absolute rounded-r-[100%] inset-0 pointer-events-none
  bg-[linear-gradient(to_bottom,var(--background)_0%,var(--background)_40%,rgba(255,255,255,0)_100%),linear-gradient(to_right,#ff1d25,#2a2a72,#1e4b99,#ff1d25)]
  dark:bg-[linear-gradient(to_bottom,var(--background)_0%,var(--background)_40%,rgba(0,0,0,0)_100%),linear-gradient(to_right,#800e12,#15153a,#0f264d,#800e12)]
  before:content-['']
  before:absolute
  before:inset-0
  before:pointer-events-none
  before:bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
  before:bg-[length:60px_100%]"
            />

            {/* Grid overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            {/* Glowing orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-violet-400/10 dark:bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

            {/* Content */}
            <div
              className="relative z-10 max-w-4xl animate-fade-up"
              style={{ paddingTop: "60px" }}
            >
              <div className="badge border border-border w-fit px-3 py-1 rounded-full bg-background/50 backdrop-blur-md text-muted-foreground mx-auto mb-6 flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                SoliTeck API Documentation · v1.0
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-foreground mb-6">
                Powering Payments
                <br />
                <span className="gradient-text">For Every Business</span>
              </h1>

              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Integrate bill payments, FASTag recharge, payouts, and settlement
                APIs into your platform with SoliTeck's battle-tested
                infrastructure.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <FancyButton>Login to get Access</FancyButton>
              </div>
            </div>
            <StatsBar />
          </section>

          {/* API CATEGORIES */}
          <section className="px-4 md:px-10 py-24 bg-muted/30">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                  What We Offer
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                  API Categories
                </h2>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base">
                  Everything you need to build full-featured fintech applications,
                  from payouts to utility bill payments.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {categorieses.map((cat) => (
                  <Link
                    key={cat.label}
                    href={cat.href}
                    className={`flex items-center gap-3 px-5 py-4 rounded-2xl border border-border bg-card text-sm font-medium transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/20 ${cat.color}`}
                  >
                    <span
                      className={`w-2.5 h-2.5 rounded-full shrink-0 ${cat.dot}`}
                    />
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* WHY SOLITECK */}
          <section className="px-6 py-24 bg-background">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                  Why Us
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                  Built for Developers
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {whyCards.map((card) => (
                  <div
                    key={card.title}
                    className={`rounded-3xl border border-border p-8 hover:shadow-2xl transition-all bg-card/50 backdrop-blur-sm group`}
                  >
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${card.bg} ${card.accent} group-hover:scale-110 transition-transform`}
                    >
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA BANNER */}
          <section className="px-6 py-24">
            <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-12 md:p-20 text-center text-white shadow-2xl shadow-blue-500/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#fff,transparent)]" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                  Ready to integrate?
                </h2>
                <p className="text-blue-50 mb-10 text-lg md:text-xl max-w-xl mx-auto font-medium leading-relaxed">
                  Start building with our sandbox environment. <br className="hidden md:block" /> No credit card required.
                </p>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-white text-blue-700 font-bold text-lg hover:bg-blue-50 transition-all shadow-xl  active:scale-95"
                >
                  Start Building Now →
                </Link>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-border py-12 text-center text-sm text-muted-foreground bg-muted/10">
            <div className="max-w-6xl mx-auto px-4">
              <p>© {new Date().getFullYear()} Soliteck Digisolutions Private Limited · All rights reserved</p>
            </div>
          </footer>
        </main>
      </>
    );
  }
