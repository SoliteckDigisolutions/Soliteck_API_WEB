import { RiGitPullRequestFill } from "react-icons/ri";
import CopyButton from "@/components/common-components/CopyButton";

interface Props {
  request: any;
  title: string;
}

export default function RequestBlock({ request, title }: Props) {
  const text = JSON.stringify(request, null, 2);

  return (
    <div className="rounded-xl overflow-hidden border border-border">

      {/* ── Header bar ── */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-muted/50 border-b border-border">
        <div className="flex items-center gap-2">
          {/* Traffic lights */}
          <span className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-70" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 opacity-70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-70" />

          <div className="w-px h-3.5 bg-border mx-1.5" />

          <RiGitPullRequestFill size={12} className="text-muted-foreground" />
          <span className="font-mono text-[11px] tracking-wide text-muted-foreground">
            {title}
          </span>
        </div>

        <CopyButton text={text} />
      </div>

      {/* ── Code area ── */}
      <pre className="bg-[#0d1117] text-[13px] leading-relaxed p-5 overflow-x-auto font-mono">
        <code>
          {text.split("\n").map((line, i) => {
            // Key detection for syntax colouring
            const keyMatch = line.match(/^(\s*)("[\w\s]+")(\s*:\s*)(.*)/);
            const isString = /:\s*"/.test(line) && !keyMatch;

            if (keyMatch) {
              const [, indent, key, colon, val] = keyMatch;
              const isStringVal = val.startsWith('"');
              const isNumVal = /^-?\d/.test(val.trim());
              const isBoolNull =
                /^(true|false|null)/.test(val.trim());

              return (
                <span key={i} className="block">
                  {indent}
                  <span className="text-[#79c0ff]">{key}</span>
                  <span className="text-gray-500">{colon}</span>
                  <span
                    className={
                      isStringVal
                        ? "text-[#a5d6ff]"
                        : isNumVal
                        ? "text-[#f2cc60]"
                        : isBoolNull
                        ? "text-[#ff7b72]"
                        : "text-gray-300"
                    }
                  >
                    {val}
                  </span>
                </span>
              );
            }

            return (
              <span key={i} className="block text-gray-400">
                {line}
              </span>
            );
          })}
        </code>
      </pre>

    </div>
  );
}