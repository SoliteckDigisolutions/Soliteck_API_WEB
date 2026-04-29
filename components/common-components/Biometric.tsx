"use client";
import { useState } from "react";
import CopyButton from "./CopyButton";
import Notes from "./Notes";
import { FaFingerprint } from "react-icons/fa";

export default function CodeBlock() {


    const code = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<PidOptions ver="1.0">
  <Opts env="P" fCount="1" fType="2" format="0" iCount="0" iType="0"
    indicatorforUID="0" otp="" pCount="0" pType="0"
    pidVer="2.0" posh="UNKNOWN" timeout="10000"
    wadh="E0jzJ/P8UopUHAieZn8CKqS4WPMi5ZSYXgfnlfkWjrc=" />
  <Demo/>
  <CustOpts>
    <Param name="" value=""/>
  </CustOpts>
</PidOptions>`;



    return (
        <>
            <Notes notes={["RD Service – PID OPTIONS", "RD services must supports FMR+FIR in single transaction. The Below steps will help customers to integrate this feature in their aggregator applications.   Pre-requisites:", "1. Install latest Windows RD service from Mantra’s download portal or android RD service from   Google Play store.", "2. Follow the integration steps mentioned in further sections. RD related Integration/Changes at consumer application level: To capture FMR and FIR both in single capture request from RD service, the value of element “fType” to be set as 2 under xml which is submitted to RD service during capture call.", " The definition and value of fType is as under: ▪ fType = “0” ➔ will capture FMR only ▪ fType = “1” ➔ will capture FIR only ▪ fType = “2” ➔ will capture FMR and FIR both.", "Please refer fType element in below xml structure:"]} />
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">

                {/* Header */}
                <div className="flex justify-between items-center  px-4 py-2 text-sm">
                    <span className="text-gray-600 flex gap-2 items-center"><FaFingerprint /> PID XML</span>
                    <CopyButton text={code} />
                </div>

                {/* Code */}
                <pre className="bg-gray-900 text-green-400 p-4 overflow-x-auto text-sm">
                    <code>{code}</code>
                </pre>

            </div>
        </>
    );
}