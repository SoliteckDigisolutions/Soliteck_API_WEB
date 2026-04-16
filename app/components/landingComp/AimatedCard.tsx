// "use client";

// import { useRef } from "react";

// /* ─────────────────────────────────────────────
//    DATA
// ───────────────────────────────────────────── */

// const STATS = [
//   { value: "2,400+", label: "Active businesses" },
//   { value: "₹18,000 Cr", label: "Monthly volume" },
//   { value: "99.97%", label: "API uptime" },
// ];

// const FEATURED = [
//   {
//     name: "PhonePe",
//     abbr: "PP",
//     bg: "#E8F0FE",
//     fg: "#185FA5",
//     tag: "Payments",
//     tagBg: "#E8F0FE",
//     tagFg: "#185FA5",
//   },
//   {
//     name: "Groww",
//     abbr: "GW",
//     bg: "#EAF3DE",
//     fg: "#3B6D11",
//     tag: "Investing",
//     tagBg: "#EAF3DE",
//     tagFg: "#3B6D11",
//   },
//   {
//     name: "CRED",
//     abbr: "CR",
//     bg: "#EEEDFE",
//     fg: "#534AB7",
//     tag: "Credit",
//     tagBg: "#EEEDFE",
//     tagFg: "#534AB7",
//   },
//   {
//     name: "Slice",
//     abbr: "SL",
//     bg: "#FCEBEB",
//     fg: "#A32D2D",
//     tag: "Lending",
//     tagBg: "#FCEBEB",
//     tagFg: "#A32D2D",
//   },
//   {
//     name: "Navi",
//     abbr: "NV",
//     bg: "#EAF3DE",
//     fg: "#3B6D11",
//     tag: "Insurance",
//     tagBg: "#EAF3DE",
//     tagFg: "#3B6D11",
//   },
//   {
//     name: "Jupiter",
//     abbr: "JP",
//     bg: "#FAEEDA",
//     fg: "#854F0B",
//     tag: "Neo-bank",
//     tagBg: "#FAEEDA",
//     tagFg: "#854F0B",
//   },
//   {
//     name: "Fi Money",
//     abbr: "FM",
//     bg: "#E8F0FE",
//     fg: "#185FA5",
//     tag: "Banking",
//     tagBg: "#E8F0FE",
//     tagFg: "#185FA5",
//   },
//   {
//     name: "Kreditbee",
//     abbr: "KB",
//     bg: "#FCEBEB",
//     fg: "#A32D2D",
//     tag: "Lending",
//     tagBg: "#FCEBEB",
//     tagFg: "#A32D2D",
//   },
//   {
//     name: "Uni Cards",
//     abbr: "UC",
//     bg: "#EEEDFE",
//     fg: "#534AB7",
//     tag: "Cards",
//     tagBg: "#EEEDFE",
//     tagFg: "#534AB7",
//   },
//   {
//     name: "mPokket",
//     abbr: "MP",
//     bg: "#FAEEDA",
//     fg: "#854F0B",
//     tag: "Micro-loan",
//     tagBg: "#FAEEDA",
//     tagFg: "#854F0B",
//   },
//   {
//     name: "Stashfin",
//     abbr: "SF",
//     bg: "#EAF3DE",
//     fg: "#3B6D11",
//     tag: "Credit",
//     tagBg: "#EAF3DE",
//     tagFg: "#3B6D11",
//   },
//   {
//     name: "Freo",
//     abbr: "FR",
//     bg: "#E8F0FE",
//     fg: "#185FA5",
//     tag: "Neo-bank",
//     tagBg: "#E8F0FE",
//     tagFg: "#185FA5",
//   },
// ];

// const MARQUEE = [
//   "Paytm",
//   "BharatPe",
//   "MobiKwik",
//   "Freecharge",
//   "Jar",
//   "Smallcase",
//   "Zerodha",
//   "Upstox",
//   "INDmoney",
//   "EarlySalary",
//   "MoneyView",
//   "CashE",
//   "Rupeek",
//   "Kissht",
//   "Lendingkart",
//   "Capital Float",
//   "Progcap",
//   "OkCredit",
//   "Khatabook",
//   "RazorpayX",
// ];

// const DOT_COLORS = ["#185FA5", "#3B6D11", "#534AB7", "#A32D2D", "#854F0B"];

// /* ─────────────────────────────────────────────
//    SUB-COMPONENTS
// ───────────────────────────────────────────── */

// function Divider({ label }: { label: string }) {
//   return (
//     <div className="flex items-center gap-4 my-10">
//       <div className="flex-1 h-px bg-slate-200" />
//       <span className="text-[10px] tracking-[.18em] text-slate-400 uppercase whitespace-nowrap">
//         {label}
//       </span>
//       <div className="flex-1 h-px bg-slate-200" />
//     </div>
//   );
// }

// function StatCard({ value, label }: { value: string; label: string }) {
//   return (
//     <div className="bg-slate-50 rounded-xl p-5 text-center">
//       <span className="block text-2xl font-semibold text-slate-900 mb-0.5">
//         {value}
//       </span>
//       <span className="text-xs text-slate-500">{label}</span>
//     </div>
//   );
// }

// function LogoCell({
//   name,
//   abbr,
//   bg,
//   fg,
//   tag,
//   tagBg,
//   tagFg,
// }: (typeof FEATURED)[0]) {
//   return (
//     <div className="group flex flex-col items-center justify-center gap-2.5 px-4 py-5 bg-white hover:bg-slate-50 transition-colors border-r border-b border-slate-100 cursor-default">
//       {/* Monogram mark */}
//       <div
//         className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-semibold tracking-tight shrink-0"
//         style={{ background: bg, color: fg }}
//       >
//         {abbr}
//       </div>

//       {/* Name */}
//       <span className="text-xs text-slate-700 text-center leading-tight font-medium">
//         {name}
//       </span>

//       {/* Category tag */}
//       <span
//         className="text-[10px] px-2 py-0.5 rounded"
//         style={{ background: tagBg, color: tagFg }}
//       >
//         {tag}
//       </span>
//     </div>
//   );
// }

// function MarqueePill({ name, color }: { name: string; color: string }) {
//   return (
//     <div className="flex items-center gap-2 px-3.5 py-2 border border-slate-200 rounded-full bg-white shrink-0">
//       <span
//         className="w-1.5 h-1.5 rounded-full shrink-0"
//         style={{ background: color }}
//       />
//       <span className="text-xs text-slate-500 whitespace-nowrap">{name}</span>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    MAIN SECTION
// ───────────────────────────────────────────── */

// export default function TrustedBySection() {
//   const trackRef = useRef<HTMLDivElement>(null);

//   /* Pause on hover */
//   const pause = () => {
//     if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
//   };
//   const play = () => {
//     if (trackRef.current) trackRef.current.style.animationPlayState = "running";
//   };

//   const doubled = [...MARQUEE, ...MARQUEE];

//   return (
//     <section className="w-full bg-white px-4 md:px-10 py-20">
//       <div className="max-w-5xl mx-auto">
//         {/* ── Header ── */}
//         <div className="text-center mb-10">
//           <p className="text-[11px] font-medium tracking-[.18em] text-slate-400 uppercase mb-2">
//             Trusted by
//           </p>
//           <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">
//             Powering India's leading fintechs
//           </h2>
//           <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
//             From early-stage startups to public enterprises — thousands of
//             businesses rely on our APIs every day.
//           </p>
//         </div>

//         {/* ── Stats ── */}
//         <div className="grid grid-cols-3 gap-3 mb-4">
//           {STATS.map((s) => (
//             <StatCard key={s.label} {...s} />
//           ))}
//         </div>

//         <Divider label="Featured partners" />

//         {/* ── Logo grid ── */}
//         <div className="border border-slate-100 rounded-2xl overflow-hidden grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 mb-4">
//           {FEATURED.map((f) => (
//             <LogoCell key={f.name} {...f} />
//           ))}
//         </div>

//         <Divider label="And many more" />

//         {/* ── Marquee ── */}
//         <div
//           className="overflow-hidden relative"
//           onMouseEnter={pause}
//           onMouseLeave={play}
//         >
//           {/* fade masks */}
//           <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-white to-transparent" />
//           <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-white to-transparent" />

//           <div
//             ref={trackRef}
//             className="flex gap-2.5 w-max"
//             style={{ animation: "marquee 30s linear infinite" }}
//           >
//             {doubled.map((name, i) => (
//               <MarqueePill
//                 key={`${name}-${i}`}
//                 name={name}
//                 color={DOT_COLORS[i % DOT_COLORS.length]}
//               />
//             ))}
//           </div>
//         </div>

//         {/* ── Bottom CTA ── */}
//         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-10 pt-6 border-t border-slate-100">
//           <p className="text-sm text-slate-500">
//             Join{" "}
//             <span className="font-medium text-slate-800">2,400+ companies</span>{" "}
//             already building with our APIs.
//           </p>
//           <a
//             href="/apply"
//             className="text-xs font-medium px-4 py-2.5 rounded-lg border border-blue-200 text-blue-600 hover:bg-blue-50 transition-colors"
//           >
//             Get API access →
//           </a>
//         </div>
//       </div>

//       {/* Marquee keyframe */}
//       <style>{`
//         @keyframes marquee {
//           from { transform: translateX(0); }
//           to   { transform: translateX(-50%); }
//         }
//       `}</style>
//     </section>
//   );
// }

// /*
// ─── SWAP REAL LOGOS ────────────────────────────────────────────────────────────

// Replace the <div> monogram mark in LogoCell with an actual <img>:

//   <img
//     src="/logos/phonepay.svg"
//     alt={name}
//     className="w-8 h-8 object-contain"
//   />

// Or use Next.js <Image> for optimised loading:

//   import Image from "next/image";
//   <Image src={`/logos/${abbr.toLowerCase()}.svg`} alt={name} width={32} height={32} />

// ─── USAGE ──────────────────────────────────────────────────────────────────────

// import TrustedBySection from "@/components/TrustedBySection";

// <TrustedBySection />

// No extra dependencies needed — only Tailwind + React.
// */
