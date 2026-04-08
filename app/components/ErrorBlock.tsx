import CopyButton from "./CopyButton";

interface Props {
  error: any;
}

export default function ErrorBlock({ error }: Props) {
  if (!error) return null;

  const text = JSON.stringify(error, null, 2);

  return (
     <div className="rounded-xl overflow-hidden border border-gray-200">
   
         {/* Editor Header */}
         <div className="flex items-center justify-between  px-4 py-2">
             <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${"bg-red-500"} opacity-75`}></span>
  <span className={`relative inline-flex rounded-full h-3 w-3 ${"bg-red-500"}`}></span>
</span>
          <h3 className="text-sm font-semibold text-gray-700">Error {error.responseCode} : {error.responseMessage}</h3>
        </div>
   
           <CopyButton text={text} />
         </div>
   
         {/* Code Area */}
         <pre className="bg-[#0f172a] text-red-400 p-4 text-sm overflow-x-auto font-mono">
           <code>{text}</code>
         </pre>
       </div>

  );
}