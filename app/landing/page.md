import Navbar from "../components/Navabr"
import LandingSec1 from "../components/LandingSec1"

export default function page() {
  return (
    <>
      <Navbar />

      <div className="font-sans -mt-8 lg:mt-0">

        {/* HERO */}
        <section
          className="relative min-h-screen flex items-center justify-center px-6 text-center
          bg-[linear-gradient(to_bottom,#fff_0%,#fff_40%,rgba(255,255,255,0)_100%),linear-gradient(to_right,#ff1d25,#2a2a72,#1e4b99,#ff1d25)]
          before:content-['']
          before:absolute
          before:inset-0
          before:pointer-events-none
          before:bg-[linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)]
          before:bg-[length:60px_100%]"
        >
          <div className="relative z-10 max-w-6xl">

            <div className="mb-5 inline-block text-black  rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm">
              SoliTeck API Documentation
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
              Empowering retailers and businesses with secure, fast, and utility
              payment
              <span className="text-[#2a2a72] font-extralight"> API's</span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-neutral-700">
              Integrate bill payments, FASTag recharge, settlements, and
              onboarding APIs into your platform with SoliTeck.
            </p>

          </div>
        </section>

        <LandingSec1 />

        {/* WHY SOLITECK */}
        <div className="py-16 px-6">

          <h1 className="text-3xl md:text-4xl text-center text-black mb-10">
            Why SoliTeck API?
          </h1>

          <section className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* CARD 1 */}
            <div className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100">
                <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                Quality Guaranteed
              </h3>

              <p className="mt-3 text-sm text-slate-600">
                Our technical team ensures uninterrupted services so your
                application stays online and ready for transactions.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                Fastest Servers
              </h3>

              <p className="mt-3 text-sm text-slate-600">
                Powered by high-performance cloud servers for lightning-fast
                response times.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">
                <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeWidth="2" d="M12 11c0 3.866-3.582 7-8 7 4.418 0 8 3.134 8 7 0-3.866 3.582-7 8-7-4.418 0-8-3.134-8-7z"/>
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                Safety Guaranteed
              </h3>

              <p className="mt-3 text-sm text-slate-600">
                Every transaction follows strict security and compliance
                standards to protect customers and payments.
              </p>
            </div>

          </section>
        </div>

        {/* STATISTICS */}
        <section className="max-w-7xl mx-auto px-6 py-16">

          <h1 className="text-3xl md:text-4xl text-black mb-10 text-center">
            Statistics
          </h1>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase text-slate-500">Happy Clients</p>
              <h3 className="mt-3 text-4xl font-bold text-red-600">209,878+</h3>
              <p className="mt-2 text-sm text-slate-600">
                Businesses and retailers trust SoliTeck APIs.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase text-slate-500">Service Locations</p>
              <h3 className="mt-3 text-4xl font-bold text-blue-600">5,698</h3>
              <p className="mt-2 text-sm text-slate-600">
                Expanding across cities and villages.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase text-slate-500">Daily Transactions</p>
              <h3 className="mt-3 text-4xl font-bold text-indigo-600">100,098</h3>
              <p className="mt-2 text-sm text-slate-600">
                Secure transactions processed daily.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase text-slate-500">Average Growth</p>
              <h3 className="mt-3 text-4xl font-bold text-emerald-600">12%</h3>
              <p className="mt-2 text-sm text-slate-600">
                Retail partners experience measurable growth.
              </p>
            </div>

          </div>

        </section>

      </div>
    </>
  )
}