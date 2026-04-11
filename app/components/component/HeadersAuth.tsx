import { GoVerified } from "react-icons/go";

export default function HeaderAuthentication() {
  return (
    <div className="m-2  text-black">
      {/* AUTHENTICATION */}
      <section id="authentication" className="mb-10">
        <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
          <GoVerified className="text-blue-600" /> Headers parameters
        </h2>

        <p className="mb-4 text-gray-600">
          Every request must include the following headers.
        </p>

        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-gray-300 text-gray-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Header</th>
                <th className="px-4 py-3 font-semibold">Description</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">ClientId</td>
                <td className="px-4 py-3 text-gray-600">
                  Provided by Soliteck
                </td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">ClientPass</td>
                <td className="px-4 py-3 text-gray-600">
                  Provided by Soliteck
                </td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">ClientTPin</td>
                <td className="px-4 py-3 text-gray-600">
                  Provided by Soliteck
                </td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">ClientSecret</td>
                <td className="px-4 py-3 text-gray-600">
                  Provided by Soliteck
                </td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">ClientToken</td>
                <td className="px-4 py-3 text-gray-600">
                  Generated using GenerateToken API
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
