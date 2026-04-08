import RequestBlock from "./RequestBlock";
import ResponseBlock from "./ResponseBlock";
import ErrorBlock from "./ErrorBlock";
import BaseUrls from "./BaseUrl";
import { RiTokenSwapLine } from "react-icons/ri";
import { GoVerified } from "react-icons/go";
import Link from "next/link";
import HeadersAuth from "@/app/components/HeadersAuth"
import RequestBoady from "@/app/components/RequestBoady"
interface Props {
  endpoint: any;
  index: number;
}

export default function ApiEndpoint({ endpoint, index }: Props) {
  return (
    <>

    {/* <div className="p-2 ">
            <BaseUrls/>
        <div className=" flex gap-2 m-4 mx-0">
            <Link href="/docs/authentication">
             <button className="border bg-white hover:bg-gray-300 flex gap-1 items-center p-1 rounded-sm px-1"> <GoVerified  />Authentication</button> 
            </Link>
            
          <Link href="/docs/tokengen">
          <button className="border bg-white hover:bg-gray-300 flex gap-1 items-center p-1 rounded-sm px-1"><RiTokenSwapLine />Tokens</button>  
          </Link>
            </div>    
        </div> */}
    <section
      id={`endpoint-${index}`}
      className="space-y-4 scroll-mt-24"
    >
        
      <h2 className="text-2xl sm:text-2xl font-semibold text-gray-800">
        {index + 1}. {endpoint.title}
      </h2>

      <div className="bg-white rounded-xl sm:p-4 space-y-6">
        <div className="flex items-center gap-3">
          <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-md">
            POST
          </span>

          <code className="bg-gray-100 px-3 py-1 rounded-md text-sm">
            {endpoint.topText}
          </code>
        </div>

        <RequestBlock request={endpoint.request} />
        <RequestBoady request={endpoint.post} />
        
        <ResponseBlock
          title="Success Response"
          data={endpoint.response.success}
        />

         
        <ResponseBlock
          title="Success Response"
          data={endpoint.response.success1}
        />


  <ResponseBlock
          title="Success Response"
          data={endpoint.response.success2}
        />

        {
            endpoint.response.pending &&  
        <ResponseBlock
          title="Pending Response"
          data={endpoint.response.pending}
          color="text-yellow-400"
        />
        }

       

        <ErrorBlock error={endpoint.response.failed} />
        <ErrorBlock error={endpoint.response.error1} />
        <ErrorBlock error={endpoint.response.error2} />

        <div className="bg-yellow-50 border-l-4 border-black p-4 text-sm">
          <span className="font-semibold text-yellow-700">Note:</span>{" "}
          {endpoint.note}
        </div>
      </div>
    </section>
    </>
  );
}