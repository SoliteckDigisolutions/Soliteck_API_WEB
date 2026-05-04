import { stats } from "@/app/constants/GlobalConstants";

export default function StatsBar() {
  return (
    <>
      {/* Stats bar */}
      <div className="relative z-10 mt-20 w-full max-w-3xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-background/70 backdrop-blur-md border border-border rounded-2xl p-4 text-center shadow-sm"
            >
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
