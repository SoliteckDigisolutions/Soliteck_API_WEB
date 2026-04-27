"use client";

import { IoCopyOutline, IoCheckmarkOutline } from "react-icons/io5";
import { toast } from "sonner";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  text: string;
  className?: string;
}

export default function CopyButton({ text, className }: Props) {
  const [copied, setCopied] = useState(false);

  const fallbackCopyTextToClipboard = (textToCopy: string) => {
    // Fallback for older browsers or non-HTTPS environments without clipboard API
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    
    // Avoid scrolling when appending
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      return successful;
    } catch (err) {
      return false;
    } finally {
      document.body.removeChild(textArea);
    }
  };

  const handleCopy = async () => {
    let success = false;
    if (!navigator.clipboard) {
      success = fallbackCopyTextToClipboard(text);
    } else {
      try {
        await navigator.clipboard.writeText(text);
        success = true;
      } catch (error) {
        success = fallbackCopyTextToClipboard(text);
      }
    }

    if (success) {
      toast.success("Copied to clipboard");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      toast.error("Failed to copy to clipboard");
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={twMerge(
        "text-[16px] p-1 flex gap-1 items-center cursor-pointer transition-colors",
        copied ? "text-green-600" : "text-black hover:text-gray-400",
        className
      )}
      title="Copy to clipboard"
    >
      {copied ? <IoCheckmarkOutline className="text-green-500" /> : <IoCopyOutline />}
    </button>
  );
}
