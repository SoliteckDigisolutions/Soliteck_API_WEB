"use client";

import { FaCopy } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";

export default function BaseUrls() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`From Solitech Copied to clipboard : ${text}`);
  };

  return (
    <div>
      <h2 className="flex gap-1 items-center text-xl font-extralight mb-3">
        <IoIosLink />
        Base URLs
      </h2>

      <div className="bg-white flex flex-col gap-3 p-1 rounded-lg shadow">
        {/* Payout URL */}
        <div className="bg-mist-950 flex items-center justify-between p-3 rounded-lg text-white">
          <p className="break-all">
            <strong className="text-blue-400">Payout: </strong>
            https://api-uat.soliteck.in/uat/api/PayoutTxn/
          </p>

          <button
            onClick={() =>
              copyToClipboard("https://api-uat.soliteck.in/uat/api/PayoutTxn/")
            }
            className="ml-3 text-gray-300 hover:text-white cursor-pointer"
          >
            <IoCopyOutline />
          </button>
        </div>

        {/* Authentication URL */}
        <div className="bg-mist-950 flex items-center justify-between p-3 rounded-lg text-white">
          <p className="break-all">
            <strong className="text-blue-400">Authentication: </strong>
            https://api-uat.soliteck.in/uat/api/TokenUAT/
          </p>

          <button
            onClick={() =>
              copyToClipboard("https://api-uat.soliteck.in/uat/api/TokenUAT/")
            }
            className="ml-3 text-gray-300 hover:text-white cursor-pointer"
          >
            <IoCopyOutline />
          </button>
        </div>
      </div>
    </div>
  );
}
