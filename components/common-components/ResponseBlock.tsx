import { ResponseDataInterface } from "@/app/types/MainPage";
import CopyButton from "@/components/common-components/CopyButton";

interface Props {
  data: ResponseDataInterface;
}

export default function ResponseBlock({ data }: Props) {
  if (!data) return null;

  const text = JSON.stringify(data.code, null, 2);

  return (
    <div className="rounded-xl border border-border overflow-hidden">

      {/* ── Header ── */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-muted/50 border-b border-border">
        <div className="flex items-center gap-2.5">

          {/* Traffic lights */}
          <span className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-70" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 opacity-70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-70" />

          <div className="w-px h-3.5 bg-border mx-1" />

          {/* Pulsing dot */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>

          <span className="font-mono text-[11px] tracking-wide text-muted-foreground">
            success response
          </span>

          {data.code?.responseCode && (
            <span className="font-mono text-[11px] font-medium px-2 py-0.5 rounded-md bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
              {data.code.responseCode}
            </span>
          )}

          {data.code?.responseMessage && (
            <span className="font-mono text-[11px] text-muted-foreground/70 hidden sm:inline">
              {data.code.responseMessage}
            </span>
          )}
        </div>

        <CopyButton text={text} />
      </div>

      {/* ── Code area ── */}
      <pre className="bg-[#0d1117] text-green-400 p-5 text-[13px] leading-relaxed overflow-x-auto font-mono">
        <code>{text}</code>
      </pre>

      {/* ── Info footer ── */}
      {data.info && (
        <div className="flex items-start gap-2.5 px-5 py-3.5 border-t border-border bg-muted/30">
          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 flex-shrink-0 mt-[5px]" />
          <p className="text-[12px] text-muted-foreground leading-relaxed">{data.info}</p>
        </div>
      )}

    </div>
  );
}