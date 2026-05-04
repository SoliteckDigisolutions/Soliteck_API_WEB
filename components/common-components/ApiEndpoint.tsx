import RequestBlock from "@/components/common-components/RequestBlock";
import ResponseBlock from "@/components/common-components/ResponseBlock";
import ErrorBlock from "@/components/common-components/ErrorBlock";
import TableComponent from "@/components/common-components/TableComponent";
import Notes from "./Notes";
import Biometric from "@/components/common-components/Biometric";
import ExtraInfo from "./ExtraInfo";

interface Props {
  endpoint: any;
  index: number;
}

export default function ApiEndpoint({ endpoint, index }: Props) {
  return (
<section id={`endpoint-${index}`} className="scroll-mt-24 space-y-6 px-0">

      {/* ── Header ── */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-[20px] tracking-[.12em] uppercase text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="flex-1 h-px bg-border" />
        </div>

        <h2 className="text-[17px] font-medium text-foreground mb-2">
          {endpoint.title}
        </h2>

        {endpoint.subInforamtion && (
          <p className="text-[13px] leading-relaxed text-muted-foreground max-w-2xl">
            {endpoint.subInforamtion}
          </p>
        )}
      </div>

      {/* ── Method + URL ── */}
      {endpoint.topText && (
        <div className="flex items-center gap-2.5">
          <span className="flex-shrink-0 font-mono text-[11px] font-medium tracking-wide px-2.5 py-1 rounded-lg bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
            POST
          </span>
          <code className="font-mono text-[12px] text-muted-foreground bg-muted border border-border px-3 py-1 rounded-lg break-all">
            {endpoint.topText}
          </code>
        </div>
      )}

      {/* ── Biometric ── */}
      {endpoint.biometric && <Biometric />}

      {/* ── Content blocks ── */}
      <div className="space-y-4">

        {endpoint.request && (
          <RequestBlock title="Request Header" request={endpoint.request} />
        )}

        <Notes notes={endpoint.notes} />
        <ExtraInfo extraInfo={endpoint.extraInfo} />

        {endpoint.post && (
          <RequestBlock title="Request Body" request={endpoint.post} />
        )}

        <Notes notes={endpoint.notes2} />

        {endpoint.post2 && (
          <RequestBlock title="Request Body" request={endpoint.post2} />
        )}

        {endpoint.post3 && (
          <RequestBlock title="Request Body" request={endpoint.post3} />
        )}

        {endpoint.response && (
          <div className="space-y-3">
            {endpoint.response.success?.map((item: any, i: number) => (
              <ResponseBlock key={i} data={item} />
            ))}
            {endpoint.response.error?.map((item: any, i: number) => (
              <ErrorBlock key={i} data={item} />
            ))}
          </div>
        )}

        {endpoint.table &&
          Object.entries(endpoint.table).map(([key, value], i) => (
            <TableComponent key={i} data={value} />
          ))}

      </div>

      {/* ── Note callout ── */}
      {endpoint.note && (
        <div className="flex items-start gap-3 px-5 py-4 rounded-xl border border-amber-500/20 bg-amber-500/10">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-[7px]" />
          <p className="text-[13px] text-amber-700 dark:text-amber-300 leading-relaxed">
            <span className="font-medium">Note: </span>
            {endpoint.note}
          </p>
        </div>
      )}

    </section>
  );
}
