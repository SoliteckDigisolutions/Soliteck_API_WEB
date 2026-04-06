import { GoVerified } from "react-icons/go";
import BaseUrls from "./BaseUrl";
import CodeSection from "./CodeSection";
import { RiTokenSwapLine } from "react-icons/ri";

export default function MainSection() {
  return (
    <div className="flex text-black flex-col lg:pt-0 lg:flex-row  lg:mt-18  h-screen w-full">

      {/* LEFT SIDE - API DOCUMENTATION */}
      <div className="lg:w-[60%] p-4 overflow-y-auto pt-18 lg:pt-4 min-h-screen space-y-8">

        <div>
          <h1 className="text-2xl font-extralight mb-2">Soliteck Payout API</h1>
          <p className="text-gray-600 ">
            This documentation explains how to integrate with the Soliteck
            Payout APIs to perform remitter authentication, beneficiary
            management, and fund transfers.
          </p>
        </div>

        {/* Base URL */}
        <BaseUrls/>

        {/* Authentication */}
        <div>
          <h2 className="text-xl flex items-center gap-1 font-extralight mb-2"><GoVerified />Authentication</h2>

          <p className="mb-2">
            Every request must include the following headers.
          </p>

          <table className="w-full border text-sm">
            <thead className="bg-mist-950 text-white">
              <tr>
                <th className="border p-2 text-left">Header</th>
                <th className="border p-2 text-left">Description</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-2">ClientId</td>
                <td className="border p-2">Provided by Soliteck</td>
              </tr>
              <tr>
                <td className="border p-2">ClientPass</td>
                <td className="border p-2">Provided by Soliteck</td>
              </tr>
              <tr>
                <td className="border p-2">ClientTPin</td>
                <td className="border p-2">Provided by Soliteck</td>
              </tr>
              <tr>
                <td className="border p-2">ClientSecret</td>
                <td className="border p-2">Provided by Soliteck</td>
              </tr>
              <tr>
                <td className="border p-2">ClientToken</td>
                <td className="border p-2">Generated using GenerateToken API</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Generate Token API */}
        <div>
          <h2 className="flex gap-1 items-center text-xl font-extralight mb-2"><RiTokenSwapLine />Generate Token</h2>

          <p className="mb-2">
            This API generates an authentication token required for all
            payout APIs.
          </p>

          <div className="bg-gray-100 p-3 rounded-md">
            POST /GenerateUATToken
          </div>

          <p className="mt-2 text-sm text-gray-600">
            The token generated is valid for <strong>20 minutes</strong>.
          </p>
        </div>

      </div>

      {/* RIGHT SIDE - CODE BLOCKS */}
      <div className="lg:w-[40%] min-h-screen bg-mist-900 overflow-y-auto p-4">
        <CodeSection />
      </div>

    </div>
  );
}