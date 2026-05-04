interface ExtraInfo {
  extraInfo: any;
}

export default function ExtraInfo({ extraInfo }: ExtraInfo) {
  if (!extraInfo) return null;

  return (
    <div className="rounded-xl space-y-4">
      {/* Header */}
      <div className="flex items-center gap-2 px-1">
        <span className="font-bold text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Important Notes:
        </span>
      </div>

      {/* Flag 1 */}
      {extraInfo.flag1 && (
        <div className="p-4 bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h4 className="font-bold text-[13px] text-slate-900 dark:text-slate-100 mb-1">
            {extraInfo.flag1.name}
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-3">
            {extraInfo.flag1.desc}
          </p>
          <pre className="p-3 bg-slate-100 dark:bg-slate-950 text-[11px] font-mono rounded-lg overflow-x-auto text-blue-600 dark:text-blue-400 border border-slate-200/50 dark:border-slate-800/50">
            {extraInfo.flag1.code}
          </pre>
        </div>
      )}

      {/* Flag 2 */}
      {extraInfo.flag2 && (
        <div className="p-4 bg-white dark:bg-slate-900/50 rounded-xl border border-blue-100 dark:border-blue-900/30 shadow-sm">
          <h4 className="font-bold text-[13px] text-blue-900 dark:text-blue-100 mb-1">
            {extraInfo.flag2.name}
          </h4>
          <p className="text-blue-600 dark:text-blue-400 text-xs leading-relaxed mb-3">
            {extraInfo.flag2.desc}
          </p>
          <pre className="p-3 bg-blue-50 dark:bg-slate-950 text-[11px] font-mono rounded-lg overflow-x-auto text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900/50">
            {extraInfo.flag2.code}
          </pre>
        </div>
      )}

      {/* Footer Note */}
      {extraInfo.note && (
        <div className="px-4 py-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 rounded-xl flex items-start gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-[6px]" />
          <p className="text-xs font-medium text-amber-800 dark:text-amber-300 leading-relaxed">
            <span className="font-bold">Pro Tip:</span> {extraInfo.note}
          </p>
        </div>
      )}
    </div>
  );
}
