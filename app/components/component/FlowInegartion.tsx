"use client";

import { processFlow } from "@/app/constants/GlobalConstants";

export default function ProcessFlow() {
  // constants/processFlow.ts

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {processFlow.map((item) => (
        <div
          key={item.step}
          className="p-5 border border-gray-400 rounded-xl bg-white shadow-sm"
        >
          <p className="text-xs p-2 py-1 font-sans  bg-blue-100 w-fit rounded-xl text-gray-800">
            Step {item.step}
          </p>

          <h3 className="text-lg text-gray-600 font-semibold mt-1">
            {item.title}
          </h3>

          <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
