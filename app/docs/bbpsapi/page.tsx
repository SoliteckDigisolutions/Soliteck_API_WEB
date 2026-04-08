"use client";

import { useEffect, useState } from "react";
import RightNavigation from "@/app/components/RightNavigation";
import ApiEndpoint from "@/app/components/ApiEndpoint";
import {BbpsApiD} from "@/app/constants/BbpsApiD"
import HeadersAuth from "@/app/components/HeadersAuth"
import BaseUrls from "@/app/components/BaseUrl"

export default function page  () {

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
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
     
  return (
    <div className="flex mt-16 flex-col xl:flex-row w-full">
    
      {/* LEFT CONTENT */}
      <div className="w-full xl:w-[76%] p-2 space-y-10">
          <h1 className=" font-sans font-semibold text-2xl">{BbpsApiD.title}</h1>
            <BaseUrls/>
           <HeadersAuth />
        {BbpsApiD.Endpoints.map((endpoint:any, index : any) => (
          <ApiEndpoint
            key={index}
            endpoint={endpoint}
            index={index}
          />
        ))}
      </div>

      {/* RIGHT NAVIGATION */}
      <RightNavigation
        endpoints={BbpsApiD.Endpoints}
        active={active}
      />

    </div>
  );
}