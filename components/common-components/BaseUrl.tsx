"use client";

import { IoIosLink } from "react-icons/io";
import CopyButton from "./CopyButton";

interface BaseUrlsProps {
  urls?: {
    link: string;
    auth: string;
  };
}

export default function BaseUrls({ urls }: BaseUrlsProps) {
  if (!urls) return null;

  const urlItems = [
    { label: "Link", value: urls.link },
    { label: "Auth", value: urls.auth },
  ];

  return (
    <div className=" flex flex-col gap-4 p-4 rounded-lg ">
      <h2 className="flex items-center gap-2 text-lg font-medium text-gray-700">
        <IoIosLink className="text-blue-500" />
        Base URLs
      </h2>

      {urlItems.map((item) => (
        <div
          key={item.label}
          className="bg-mist-950 flex items-center justify-between p-3 rounded-lg text-white"
        >
          <p className="break-all text-sm">
            <span className="text-blue-400 font-semibold">
              {item.label}:
            </span>{" "}
            {item.value}
          </p>

          <CopyButton
            text={item.value}
            className="ml-3 text-gray-300 hover:text-white hover:bg-mist-800 rounded p-1.5 transition"
          />
        </div>
      ))}
    </div>
  );
}