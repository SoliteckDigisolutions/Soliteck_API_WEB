"use client";

import { useEffect, useState } from "react";
import RightNavigation from "@/app/components/RightNavigation";
import { MobileDocs } from "@/app/constants/mobileApi";
import ApiEndpoint from "@/app/components/ApiEndpoint";

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
          <h1 className=" font-sans font-semibold text-2xl">{MobileDocs.title}</h1>
        <ul>
  <li><strong>Success:</strong> Use the Jio Operator ApiCode with amounts <b>19</b>, <b>29</b>, or <b>119</b>.</li>
  <li><strong>Pending:</strong> Use the Airtel ApiCode.</li>
  <li><strong>Failed:</strong> Use any remaining ApiCode.</li>
</ul>
        {MobileDocs.Endpoints.map((endpoint, index) => (
          <ApiEndpoint
            key={index}
            endpoint={endpoint}
            index={index}
          />
        ))}
      </div>

      {/* RIGHT NAVIGATION */}
      <RightNavigation
        endpoints={MobileDocs.Endpoints}
        active={active}
      />

    </div>
  );
}