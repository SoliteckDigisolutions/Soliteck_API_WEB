"use client";

import { MdErrorOutline } from "react-icons/md";

export default function IntroductionPage() {

    // constants/errorCodes.ts

 const httpErrors = [
  { code: "400", title: "Bad Request", desc: "Your request parameters are incorrect." },
  { code: "401", title: "Unauthorized", desc: "Your API key is wrong or missing." },
  { code: "403", title: "Forbidden", desc: "The requested resource is hidden for administrators only." },
  { code: "404", title: "Not Found", desc: "The specified resource could not be found." },
  { code: "405", title: "Method Not Allowed", desc: "You tried to access a resource with an invalid method." },
  { code: "406", title: "Not Acceptable", desc: "You requested a format that isn’t json." },
  { code: "410", title: "Gone", desc: "The resource requested has been removed from our servers." },
  { code: "429", title: "Too Many Requests", desc: "You’re requesting too many resources! Slow down!" },
  { code: "500", title: "Internal Server Error", desc: "We had a problem with our server." },
  { code: "503", title: "Service Unavailable", desc: "Server temporarily offline for maintenance." }
];

const apiErrors = [
  { code: "UDAPI10000", desc: "This request is not supported by API." },
  { code: "UDAPI100016", desc: "Invalid Credentials." },
  { code: "UDAPI10005", desc: "Too many requests sent." },
  { code: "UDAPI100015", desc: "API Version does not exist." },
  { code: "UDAPI100050", desc: "Invalid token used to access API." },
  { code: "UDAPI100067", desc: "API not permitted with extended_token." },
  { code: "UDAPI100036", desc: "Invalid input passed to the API." },
  { code: "UDAPI100038", desc: "Invalid input passed to the API." },
  { code: "UDAPI100073", desc: "Client ID is inactive." },
  { code: "UDAPI100500", desc: "Unexpected server error. Contact support." }
];
  return (
    <div className="space-y-12 p-6 pt-16">

      {/* HTTP Errors */}
      <div>
        <h2 className="text-2xl font-semibold flex gap-2 items-center text-black mb-4"><MdErrorOutline />HTTP Error Codes</h2>

        <div className="overflow-x-auto border rounded-xl">
          <table className="w-full text-sm">
            <thead className="bg-gray-300 text-black">
              <tr>
                <th className="text-left px-6 py-3">Code</th>
                <th className="text-left px-6 py-3">Description</th>
              </tr>
            </thead>

            <tbody>
              {httpErrors.map((error) => (
                <tr key={error.code} className="border-t  hover:bg-gray-50">
                  <td className="px-6 py-4 font-mono text-red-600">
                    {error.code} {error.title}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {error.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* API Errors */}
      <div>
        <h2 className="text-2xl text-black font-semibold mb-4">Common API Error Codes</h2>

        {/* <div className="overflow-x-auto border rounded-xl">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-6 py-3">Error Code</th>
                <th className="text-left px-6 py-3">Description</th>
              </tr>
            </thead>

            <tbody>
              {apiErrors.map((error) => (
                <tr key={error.code} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4 font-mono text-blue-600">
                    {error.code}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {error.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}

        <p className="text-sm text-gray-500 mt-4">
          Error codes specific to each API are detailed in the 4XX response
          section within their respective documentation.
        </p>
      </div>

    </div>
  );
}