import { LuTestTubeDiagonal } from "react-icons/lu";

interface notes {
  notes: any;
}

export default function Notes({ notes }: notes) {
  if (!notes) return null;

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 overflow-hidden backdrop-blur-sm">

      {/* ── Header ── */}
      {notes[0] && notes.length > 1 && (
        <div className="flex items-center gap-2.5 px-5 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-800/50">
          <LuTestTubeDiagonal size={14} className="text-slate-400 dark:text-slate-500 flex-shrink-0" />
          <h3 className="font-mono text-[11px] font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
            {notes[0]}
          </h3>
        </div>
      )}

      {/* ── Note lines ── */}
      <div className="px-5 py-4 space-y-3">
        {notes.length > 1 ? (
          notes.slice(1).map((line: string, index: number) => (
            <div key={index} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0 mt-[6.5px] shadow-[0_0_8px_rgba(59,130,246,0.3)]" />
              <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed font-medium">{line}</p>
            </div>
          ))
        ) : (
          <div className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0 mt-[6.5px] shadow-[0_0_8px_rgba(59,130,246,0.3)]" />
            <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed font-medium">{notes[0]}</p>
          </div>
        )}
      </div>

    </div>
  );
}