
 interface ExtraInfo {
        extraInfo : any
    }

export default function ExtraInfo({extraInfo}:ExtraInfo) {

   
    return(
        <>
         {
          extraInfo && (
            <div className=" rounded-md">

              <div className="flex items-center mb-3">
                <span className="font-semibold px-2 text-gray-700 text-sm">
                  Note:
                </span>
              </div>

              {/* Flag 1 */}
              <div className="mb-4 p-3 bg-white rounded-lg border border-gary -100">
                <h4 className="font-semibold text-gray-600">
                  {extraInfo.flag1.name}
                </h4>

                <p className="text-gray-600 text-sm mt-1">
                  {extraInfo.flag1.desc}
                </p>

                <pre className="mt-2 bg-gray-100 text-xs p-2 rounded overflow-x-auto">
                  {extraInfo.flag1.code}
                </pre>
              </div>

              {/* Flag 2 */}
              <div className="p-3 bg-white rounded-lg border border-blue-100">
                <h4 className="font-semibold text-gray-600">
                  {extraInfo.flag2.name}
                </h4>

                <p className="text-gray-600 text-sm mt-1">
                  {extraInfo.flag2.desc}
                </p>

                <pre className="mt-2 bg-gray-100 text-xs p-2 rounded overflow-x-auto">
                  {extraInfo.flag2.code}
                </pre>
              </div>
              <p className="px-2 py-2 text-gray-800 text-sm"> <span className="font-bold">Important:</span> {extraInfo.note} </p>

            </div>
          )
        }
        
        </>
    )

}
