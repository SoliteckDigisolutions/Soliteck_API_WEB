import { RiGitPullRequestFill } from "react-icons/ri";
import CopyButton from "./CopyButton";

interface Props {
  request: any;
}

export default function RequestBlock({ request }: Props) {
  const text = JSON.stringify(request, null, 2);

  return (
    <div className="rounded-xl overflow-hidden border border-gray-200">
      {/* Editor Header */}
      <div className="flex items-center justify-between  px-4 py-2">
        <span className="text-xs flex gap-1 items-center  text-gray-800  tracking-wider">
          <RiGitPullRequestFill size={14} /> Request Header
        </span>

        <CopyButton text={text} />
      </div>

      {/* Code Area */}
      <pre className="bg-[#0f172a] text-green-400 p-4 text-sm overflow-x-auto font-mono">
        <code>{text}</code>
      </pre>
    </div>
  );
}
