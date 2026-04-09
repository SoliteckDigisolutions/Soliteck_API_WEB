export default function StatsBar() {
  const stats = [
    { value: "209K+", label: "Happy Clients", color: "text-blue-600" },
    { value: "99.9%", label: "Uptime SLA", color: "text-emerald-600" },
    { value: "100K+", label: "Daily Transactions", color: "text-violet-600" },
    { value: "<200ms", label: "Avg. Response Time", color: "text-orange-500" },
  ];
  return (
    <>
      {/* Stats bar */}
      <div className="relative z-10 mt-20 w-full max-w-3xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white border border-slate-200 rounded-2xl p-4 text-center shadow-sm"
            >
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
              <p className="text-xs text-slate-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
