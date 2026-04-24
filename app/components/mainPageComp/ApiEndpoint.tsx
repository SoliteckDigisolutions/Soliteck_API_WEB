import RequestBlock from "@/app/components/responseComp/RequestBlock";
import ResponseBlock from "@/app/components/responseComp/ResponseBlock";
import ErrorBlock from "@/app/components/responseComp/ErrorBlock";
import TableComponent from "../component/TableComponent";
interface Props {
  endpoint: any;
  index: number;
}

export default function ApiEndpoint({ endpoint, index }: Props) {
  return (
    <section id={`endpoint-${index}`} className="space-y-4 scroll-mt-24">
      <h2 className="text-2xl sm:text-2xl font-semibold text-gray-800">
        {index + 1}. {endpoint.title}
      </h2>


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

        {/* Request */}
        {endpoint.request && (
          <RequestBlock title={"Request Header"} request={endpoint.request} />
        )}

        {
          endpoint.intro && (
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 text-sm">
              <span className="font-semibold text-blue-700">Note:</span>{" "}
              {endpoint.intro}
            </div>
          )
        }
        {
          endpoint.extraInfo && (
            <div className=" rounded-md">

              <div className="flex items-center mb-3">
                <span className="font-semibold px-2 text-gray-700 text-sm">
                  Note:
                </span>
              </div>

              {/* Flag 1 */}
              <div className="mb-4 p-3 bg-white rounded-lg border border-gary -100">
                <h4 className="font-semibold text-gray-600">
                  {endpoint.extraInfo.flag1.name}
                </h4>

                <p className="text-gray-600 text-sm mt-1">
                  {endpoint.extraInfo.flag1.desc}
                </p>

                <pre className="mt-2 bg-gray-100 text-xs p-2 rounded overflow-x-auto">
                  {endpoint.extraInfo.flag1.code}
                </pre>
              </div>

              {/* Flag 2 */}
              <div className="p-3 bg-white rounded-lg border border-blue-100">
                <h4 className="font-semibold text-gray-600">
                  {endpoint.extraInfo.flag2.name}
                </h4>

                <p className="text-gray-600 text-sm mt-1">
                  {endpoint.extraInfo.flag2.desc}
                </p>

                <pre className="mt-2 bg-gray-100 text-xs p-2 rounded overflow-x-auto">
                  {endpoint.extraInfo.flag2.code}
                </pre>
              </div>
              <p className="px-2 py-2 text-gray-800 text-sm"> <span className="font-bold">Important:</span> {endpoint.extraInfo.note} </p>

            </div>
          )
        }
        {/* Request Body */}
        {endpoint.post && (
          <RequestBlock title={"Request Body"} request={endpoint.post} />
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

{
  /* 
        {endpoint.response.success && endpoint.response.title === "Webhook" && (
          <ResponseBlock
            title="Failed Response"
            data={endpoint.response.success2}
            color="text-red-400"
          />
        )} */
}
