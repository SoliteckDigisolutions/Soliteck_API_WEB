import { ResponseDataInterface } from "@/app/types/MainPage";
import CopyButton from "@/app/components/component/CopyButton";


interface Props {
  data: ResponseDataInterface;
}

export default function ResponseBlock({ data }: Props) {
  if (!data) return null;

  const text = JSON.stringify(data.code, null, 2);

  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <div className="flex items-center gap-2">

          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>

          <h3 className="text-sm font-semibold text-gray-800">
            Success Response {data.code.responseCode} : {data.code.responseMessage}
          </h3>

        </div>

        <CopyButton text={text} />
      </div>

      {/* Code Block */}

      <pre className="bg-[#0f172a] text-green-400 p-4 text-sm overflow-x-auto font-mono">
        <code>{text}</code>
      </pre>

      {data.info && (
        <h3 className="text-sm font-semibold p-2 text-gray-800">
          {data.info}
        </h3>
      )}
    </div>
  );
}