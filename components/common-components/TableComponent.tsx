import { SiAirtable } from "react-icons/si";

export default function TableComponent({ data }: any) {
  return (
    <section id="authentication" className="mb-12">

      {/* Heading */}
      <h2 className="mb-5 flex items-center gap-2 text-[15px] font-semibold text-foreground">
        <SiAirtable className="text-primary" size={16} />
        {data?.title}
      </h2>

      {/* Table Container */}
      <div className="overflow-hidden rounded-xl border border-border bg-card">

        <table className="w-full text-sm text-left">

          {/* Head */}
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Key
              </th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Description
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y divide-border">
            {data?.tableData.map((d: any, i: number) => (
              <tr
                key={i}
                className="group hover:bg-muted/30 transition-colors"
              >
                <td className="px-5 py-3 font-mono text-[13px] text-foreground">
                  {d.key}
                </td>

                <td className="px-5 py-3 text-muted-foreground leading-relaxed">
                  {d.description}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </section>
  );
}