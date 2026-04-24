"use client";

import { IoIosLink } from "react-icons/io";
import CopyButton from "./CopyButton";

// interface

export default function BaseUrls({ urls }: any) {
  if (!urls) return null;

  return (
    <div className="bg-white flex flex-col  gap-3 p-1 rounded-lg">
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

        <CopyButton 
          text={urls.link} 
          className="ml-3 text-gray-300 hover:text-white hover:bg-mist-800 rounded p-1.5" 
        />
      </div>

      {/* Authentication URL */}
      <div className="bg-mist-950 flex items-center justify-between p-3 rounded-lg text-white">
        <p className="break-all">
          <strong className="text-blue-400">Auth: </strong>
          {urls.auth}
        </p>

        <CopyButton 
          text={urls.auth} 
          className="ml-3 text-gray-300 hover:text-white hover:bg-mist-800 rounded p-1.5" 
        />
      </div>
    </div>
  );
}
