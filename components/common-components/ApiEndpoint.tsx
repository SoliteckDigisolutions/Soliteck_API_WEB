import RequestBlock from "@/components/common-components/RequestBlock";
import ResponseBlock from "@/components/common-components/ResponseBlock";
import ErrorBlock from "@/components/common-components/ErrorBlock";
import TableComponent from "@/components/common-components/TableComponent";
import Notes from "./Notes";
import Biometric from "@/components/common-components/Biometric"
import ExtraInfo from "./ExtraInfo";
interface Props {
  endpoint: any;
  index: number;
}

export default function ApiEndpoint({ endpoint, index }: Props) {
  return (
    <section id={`endpoint-${index}`} className="space-y-2 scroll-mt-24">
      <h2 className="text-2xl sm:text-2xl font-semibold text-gray-800">
        {index + 1}. {endpoint.title}
      </h2>
      <p className="px-4 text-[15px] text-gray-600 leading-relaxed">
        {endpoint.subInforamtion}
      </p>
      <div className="bg-white rounded-xl sm:p-4 space-y-6">
        <div className="flex items-center gap-3">
          {endpoint.topText && (
            <>
              <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-md">
                POST
              </span>

              <code className="bg-gray-100 px-3 py-1 rounded-md text-sm">
                {endpoint.topText}
              </code>
            </>
          )}
        </div>
        {
          endpoint.biometric && (<Biometric />)
        }
        {/* Request */}
        {endpoint.request && (
          <RequestBlock title={"Request Header"} request={endpoint.request} />
        )}
        <Notes notes={endpoint.notes} />
        <ExtraInfo extraInfo={endpoint.extraInfo} />
        {/* Request Body */}
        {endpoint.post && (
          <RequestBlock title={"Request Body"} request={endpoint.post} />
        )}
        <Notes notes={endpoint.notes2} />
        {endpoint.post2 && (
          <RequestBlock title={"Request Body"} request={endpoint.post2} />
        )}
        {/* Responses */}
        {endpoint.response && (
          <>
            {endpoint.response.success?.map((item: any, i: number) => (
              <ResponseBlock key={i} data={item} />
            ))}

            {endpoint.response.error?.map((item: any, i: number) => (
              <ErrorBlock key={i} data={item} />
            ))}
          </>
        )}
        {/* Table */}
        {endpoint.table &&
          Object.entries(endpoint.table).map(([key, value], index) => (
            <TableComponent key={index} data={value} />
          ))}

        <div className="bg-yellow-50 border-l-4 border-black p-4 text-sm">
          <span className="font-semibold text-yellow-700">Note:</span>{" "}
          {endpoint.note}
        </div>
      </div>
    </section>
  );
}

