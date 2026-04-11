"use client";

import { IoCopyOutline } from "react-icons/io5";
import { toast } from "sonner";

interface Props {
  text: string;
}

export default function CopyButton({ text }: Props) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  return (
    <button
      onClick={copyToClipboard}
      className="ml-3 text-black text-[16px] p-1 flex gap-1 items-center hover:text-gray-400 cursor-pointer"
    >
      <IoCopyOutline />
    </button>
  );
}
