"use client";

import { processFlow } from "@/constants/processFlow";

export default function ProcessFlow() {
    // constants/processFlow.ts
 const processFlow = [
  {
    step: "01",
    title: "Get Endpoint",
    desc: "Obtain the API endpoint from the documentation."
  },
  {
    step: "02",
    title: "Authenticate",
    desc: "Send API key or credentials in request headers."
  },
  {
    step: "03",
    title: "Authorize",
    desc: "Server validates the authentication credentials."
  },
  {
    step: "04",
    title: "Generate Token",
    desc: "A token is generated which is valid for 20 minutes."
  },
  {
    step: "05",
    title: "Make Request",
    desc: "Use the token to access protected APIs."
  },
  {
    step: "06",
    title: "Receive Response",
    desc: "Server processes request and returns JSON response."
  }
];
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {processFlow.map((item) => (
        <div
          key={item.step}
          className="p-5 border border-gray-400 rounded-xl bg-white shadow-sm"
        >
          <p className="text-xs p-2 py-1 font-sans  bg-blue-100 w-fit rounded-xl text-gray-800">Step {item.step}</p>

          <h3 className="text-lg text-gray-600 font-semibold mt-1">
            {item.title}
          </h3>

          <p className="text-sm text-gray-600 mt-2">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
}