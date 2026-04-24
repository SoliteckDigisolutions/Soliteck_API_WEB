import { RiGitPullRequestFill } from "react-icons/ri";
import CopyButton from "../component/CopyButton";
import RequestBlock from "../responseComp/RequestBlock";
import ResponseBlock from "../responseComp/ResponseBlock";
import ErrorBlock from "../responseComp/ErrorBlock";

export default function SubApiEndpoint({ subData }: any) {

    console.log("SubData:", subData);
  return (
    <section     className="space-y-4 scroll-mt-24">
      
      <h2 className="text-2xl font-semibold text-gray-800">
        API Endpoints
      </h2>

      {subData.map((sub, i) => (
        <div key={i} className="space-y-3">
          
          {/* Endpoint Row */}
          <div className="flex flex-col gap-3">
            <h1>{sub.title}</h1>
            <div className="flex gap-2">
            <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-md">
              POST
            </span>

            <code className="bg-gray-100 px-3 py-1 rounded-md text-sm">
                {sub.topText}
            </code>
            </div>
          </div>

          {/* Box */}
          <div className="rounded-xl overflow-hidden flex flex-col gap-6 border-gray-200">
            
           <RequestBlock title={"Request Header"} request={sub.request} />
          
           <RequestBlock title={"Request Body"} request={sub.post} />
         
           {
            sub.response.success.map((data:any, index:number) =>(
                <ResponseBlock key={index} data={data} />

            ))
           }
        
           {
            sub.response.error.map((data:any, index:number) =>(
                <ErrorBlock key={index} data={data} /> 
            ))

           }
           
            </div>

        </div>
      ))}
    </section>
  );
}