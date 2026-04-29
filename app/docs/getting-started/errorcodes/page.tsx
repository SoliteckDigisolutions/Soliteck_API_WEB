import { MdErrorOutline } from "react-icons/md";
import { httpErrors } from "@/app/constants/GlobalConstants";
import { apiErrors } from "@/app/constants/GlobalConstants";

export default function IntroductionPage() {
  // constants/errorCodes.ts
  return (
    <div className="space-y-12 p-6 pt-16">
      {/* HTTP Errors */}
      <div>
        <h2 className="text-2xl font-semibold flex gap-2 items-center text-black mb-4">
          <MdErrorOutline />
          HTTP Error Codes
        </h2>

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
                  <td className="px-6 py-4 text-gray-600">{error.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* API Errors */}
      <div>
        <h2 className="text-2xl text-black font-semibold mb-4">
          Common API Error Codes
        </h2>

        <p className="text-sm text-gray-500 mt-4">
          Error codes specific to each API are detailed in the 4XX response
          section within their respective documentation.
        </p>
      </div>
    </div>
  );
}
