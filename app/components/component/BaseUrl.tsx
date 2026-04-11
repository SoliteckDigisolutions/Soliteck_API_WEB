"use client";

import { IoIosLink } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";


// interface 


export default function BaseUrls({urls}:any) {
   if (!urls) return null
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`From Solitech Copied to clipboard : ${text}`);
  };

  return (
      <div className="bg-white flex flex-col gap-3 p-1 rounded-lg shadow">
        <h2 className="flex gap-1 items-center text-xl font-extralight mb-3">
            <IoIosLink />
            Base URLs
          </h2>
                {/* Payout URL */}
                <div className="bg-mist-950 flex items-center justify-between p-3 rounded-lg text-white">
                  <p className="break-all">
                    <strong className="text-blue-400">Link: </strong>
                   {urls.link}
                  </p>
    
                  <button
                    onClick={() => copyToClipboard(urls.link)}
                    className="ml-3 text-gray-300 hover:text-white cursor-pointer"
                  >
                    <IoCopyOutline />
                  </button>
                </div>
    
                {/* Authentication URL */}
                <div className="bg-mist-950 flex items-center justify-between p-3 rounded-lg text-white">
                  <p className="break-all">
                    <strong className="text-blue-400">Auth: </strong>
                 {urls.auth}
                  </p>
    
                  <button
                    onClick={() => copyToClipboard(urls.auth)}
                    className="ml-3 text-gray-300 hover:text-white cursor-pointer"
                  >
                    <IoCopyOutline />
                  </button>
                </div>
              </div>
  );
}
