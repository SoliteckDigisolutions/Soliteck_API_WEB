import BaseUrls from "@/components/common-components/BaseUrl";
import { processFlow } from "@/app/constants/GlobalConstants";

export default function ProcessFlow() {
  // constants/processFlow.ts

  return (
    <div className="mt-20 m-2 overflow-x-auto">
      <table className="w-full border border-gray-200 rounded-xl overflow-hidden">
        <thead className="bg-gray-300">
          <tr>
            <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
              Step
            </th>
            <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
              Title
            </th>
            <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
              Description
            </th>
          </tr>
        </thead>

        <tbody>
          {processFlow.map((item) => (
            <tr
              key={item.step}
              className="border-t hover:bg-gray-50 transition"
            >
              <td className="px-6 py-4 text-gray-600 font-medium">
                {item.step}
              </td>

              <td className="px-6 py-4 text-gray-600 font-semibold">
                {item.title}
              </td>

              <td className="px-6 py-4 text-gray-600 text-sm">{item.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <BaseUrls />
    </div>
  );
}
