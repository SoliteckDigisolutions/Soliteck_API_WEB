import Image from "next/image";
import homeImg from "@/public/assets/home.png";

export default function LandingSec1() {
  const categories = [
    "Payout API",
    "Mobile API",
    "DTH API",
    "Payment Gateway API",
    "FASTag API",
    "BBPS API",
    "CC Bill Payment API",
    "AEPS API",
  ];

  return (
    <section className="relative -mt-24 px-4 pb-20 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl border border-blue-100 bg-white/95 p-4 shadow-2xl backdrop-blur lg:flex-row">

        {/* Sidebar */}
        <aside className="w-full rounded-2xl bg-[#2a2a72] p-6 text-white lg:w-[32%]">
          <h2 className="mb-6 text-xl font-semibold">API Categories</h2>

          <div className="space-y-3">
            {categories.map((item) => (
              <div
                key={item}
                className="cursor-pointer rounded-xl border border-white/40 px-4 py-3 text-sm text-slate-200 transition-all duration-200 hover:border-blue-400 hover:bg-blue-500/10 hover:text-white"
              >
                {item}
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full rounded-2xl bg-blue-50 p-4 lg:w-[68%]">

          <div className="relative h-[420px] w-full overflow-hidden rounded-xl">
            <Image
              src={homeImg}
              alt="API documentation preview"
              fill
              className="object-cover"
              priority
            />
          </div>

        </main>
      </div>
    </section>
  );
}