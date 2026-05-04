import { ResponseDataInterface } from "@/app/types/MainPage";
import CopyButton from "@/components/common-components/CopyButton";

interface Props {
  data: ResponseDataInterface;
}

export default function ErrorBlock({ data }: Props) {
  if (!data) return null;

  const text = JSON.stringify(data.code, null, 2);

  return (
    <div className="rounded-xl border border-destructive/20 dark:border-destructive/30 overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-destructive/5 dark:bg-destructive/10 border-b border-destructive/20 dark:border-destructive/30">
        <div className="flex items-center gap-2.5">

          {/* Traffic lights */}
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 opacity-40" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-40" />

          <div className="w-px h-3.5 bg-destructive/20 mx-1" />

          {/* Pulsing dot */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
          </span>

          <span className="font-mono text-[11px] tracking-wide text-red-500 dark:text-red-400">
            error response
          </span>

          {data.code?.responseCode && (
            <span className="font-mono text-[11px] font-medium px-2 py-0.5 rounded-md bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
              {data.code.responseCode}
            </span>
          )}

          {data.code?.responseMessage && (
            <span className="font-mono text-[11px] text-red-400/70 dark:text-red-500/70 hidden sm:inline">
              {data.code.responseMessage}
            </span>
          )}
        </div>

        <CopyButton text={text} />
      </div>

      {/* Code area */}
      <pre className="bg-[#0d1117] text-red-400 p-5 text-[13px] leading-relaxed overflow-x-auto font-mono">
        <code>{text}</code>
      </pre>

      {/* Info footer */}
      {data.info && (
        <div className="flex items-start gap-2.5 px-5 py-3.5 border-t border-destructive/20 dark:border-destructive/30 bg-destructive/5 dark:bg-destructive/10">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-[5px]" />
          <p className="text-[12px] text-red-600 dark:text-red-400 leading-relaxed">{data.info}</p>
        </div>
      )}

    </div>
  );
}