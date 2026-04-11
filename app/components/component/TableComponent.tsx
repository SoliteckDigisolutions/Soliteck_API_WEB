export default function TableComponent({ data }: any) {
  return (
    <section id="authentication" className="mb-10">
      <h2 className="mb-4 text-gray-600">{data?.title}</h2>

      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-gray-300 text-gray-700">
            <tr>
              <th className="px-4 py-3 font-semibold">Key</th>
              <th className="px-4 py-3 font-semibold">Description</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {data?.tableData.map((d: any, i: any) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{d.key}</td>
                <td className="px-4 py-3 text-gray-600">{d.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
