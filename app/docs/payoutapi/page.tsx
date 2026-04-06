'use client'

import BaseUrls from "@/app/components/BaseUrl";
import { GoVerified } from "react-icons/go";
import { RiTokenSwapLine } from "react-icons/ri";
import { payoutDocs } from "@/app/constants/payOut";
import { useEffect, useState } from "react"
import Search from "../../components/Search"

export default function PayoutApi() {
const [active, setActive] = useState<string>("");
  useEffect(() => {
  const sections = document.querySelectorAll("section");


  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0.4
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);
  return (
    <div className="flex font-sans flex-col mt-15 lg:mt-0 xl:flex-row w-full  text-black lg:mt-14">

      {/* LEFT CONTENT */}
      <div  className="w-full xl:w-[76%] p-2 lg:p-4 sm:p-4 space-y-10">

        {/* TITLE */}
        <section>
          <h1 className="text-2xl font-light mb-2">
            Soliteck Payout API
          </h1>

          <p className="text-gray-600 max-w-2xl">
            This documentation explains how to integrate with the Soliteck
            Payout APIs to perform remitter authentication, beneficiary
            management, and fund transfers.
          </p>
        </section>

        {/* BASE URL */}
        <BaseUrls />

      
        {/* GENERATE TOKEN */}
        <section id="generate-token ">
          <h2 className="flex items-center gap-2 text-xl font-light mb-3">
            <RiTokenSwapLine /> Generate Token
          </h2>

          <div className="bg-gray-100 p-3 rounded-md font-sans text-sm">
            POST /GenerateUATToken
          </div>

          <p className="mt-2 text-sm text-gray-600">
            Token valid for <strong>20 minutes</strong>
          </p>
        </section>
       

        {/* ENDPOINTS */}
       {payoutDocs.Endpoints.map((endpoint, index) => (
  <section
    key={index}
    id={`endpoint-${index}`}
    className="space-y-6 scroll-mt-24"
  >
    {/* TITLE */}
    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
      {index + 1}. {endpoint.title}
    </h2>

    <div className="bg-white   rounded-xl   sm:p-4 space-y-6">

      {/* METHOD + URL */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-md">
          POST
        </span>

        <code className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm font-sans break-all">
          {endpoint.post}
        </code>
      </div>

      {/* REQUEST */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-700">
          Request
        </h3>

        <pre className="bg-[#0f172a] text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{JSON.stringify(endpoint.request, null, 2)}
        </pre>
      </div>

      {/* RESPONSE */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-700">
          Success Response
        </h3>

        <pre className="bg-[#0f172a] text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{JSON.stringify(endpoint.respose.sucess, null, 2)}
        </pre>

        <div className="text-sm">
          <span className="font-medium text-gray-600">
            Response Code:
          </span>

          <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-medium">
            {endpoint.respose.sucess.responseCode}
          </span>
        </div>
      </div>

      {/* ERROR RESPONSE */}
      <div className="space-y-2 font-sans">
       <h3 className="text-lg  font-semibold text-red-600">
          Error Response:  <span className="text-black">{endpoint.respose.error1?.text}</span>
        </h3>

        <pre className="bg-[#111827] text-red-400 p-4 rounded-lg text-sm overflow-x-auto">
{JSON.stringify(endpoint.respose.error1, null, 2)}
        </pre>
      </div>

       <div className="space-y-2">
        <h3 className="text-lg font-semibold text-red-600">
          Error Response: <span className="text-black">{endpoint.respose.error2?.text}</span>
        </h3>

        <pre className="bg-[#111827] text-red-400 p-4 rounded-lg text-sm overflow-x-auto">
{JSON.stringify(endpoint.respose.error2, null, 2)}
        </pre>
      </div>

      {/* NOTE */}
      <div className="bg-yellow-50 border-l-4 border-black p-4 text-sm">
        <span className="font-semibold text-yellow-700">
          Note:
        </span>{" "}
        <span className="text-gray-700">{endpoint.note}</span>
      </div>

    </div>
  </section>
))}

      </div>

      {/* RIGHT NAVIGATION */}
<aside className="hidden xl:block xl:w-[260px] xl:sticky xl:top-24 h-fit pl-6">

  <div className="space-y-6">

    <Search />

    <div>
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
        On this page
      </h3>

      <nav className="flex flex-col gap-2 border-l pl-4">

        {payoutDocs.Endpoints.map((endpoint, index) => {
          const id = `endpoint-${index}`

          return (
            <a
              key={id}
              href={`#${id}`}
              className={`text-sm transition-all ${
                active === id
                  ? "text-blue-600 font-medium border-l-2 border-blue-600 -ml-[17px] pl-4"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {endpoint.title}
            </a>
          )
        })}

      </nav>
    </div>

  </div>

</aside>

    </div>
  );
}