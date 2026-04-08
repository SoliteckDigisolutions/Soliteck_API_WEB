import CopyButton from "./CopyButton";

interface Props {
  title: string;
  data: any;
color?: string;
}

export default function ResponseBlock({ title, data, color }: Props) {
  console.log(color)

  if (!data) return null;

  const text = JSON.stringify(data, null, 2);

  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-white border-b">
        <div className="flex items-center gap-2">
      <span className="relative flex h-3 w-3">
  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${"bg-green-500"} opacity-75`}></span>
  <span className={`relative inline-flex rounded-full h-3 w-3 ${"bg-green-500"}`}></span>
</span>
          <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
             
        </div>

        <CopyButton text={text} />
      </div>

      {/* Code Block */}

      <pre className="bg-[#0f172a] text-green-400 p-4 text-sm overflow-x-auto font-mono">
         <code>
      {text}
    </code>
      </pre>
    </div>
  );
}