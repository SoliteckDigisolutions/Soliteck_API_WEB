"use client";

import { useEffect, useState } from "react";
import RightNavigation from "@/components/common-components/RightNavigation";
import ApiEndpoint from "@/components/common-components/ApiEndpoint";
import HeadersAuth from "@/components/common-components/HeadersAuth";
import { MainInterface } from "@/app/types/MainPage";
import IntroInfo from "./IntroInfo";
import BaseUrls from "@/components/common-components/BaseUrl";

interface Props {
  data: MainInterface;
}

export default function MainPage({ data }: Props) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActive(id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
  <div className="w-full flex justify-start">

      {/* Container */}
      <div className="w-full max-w-7xl flex flex-col xl:flex-row gap-8 px-4 sm:px-2 md:px-8 lg:px-4 mt-16">

        {/* LEFT CONTENT */}
        <main className="w-full xl:flex-1 max-w-full xl:max-w-3xl space-y-12 sm:space-y-14">

          <IntroInfo />

          <BaseUrls urls={data?.BaseUrls} />

          {data?.BaseUrls?.auth && <HeadersAuth />}

          <div className="space-y-14 sm:space-y-16">
            {data?.Endpoints?.map((endpoint, index) => (
              <ApiEndpoint
                key={index}
                endpoint={endpoint}
                index={index}
              />
            ))}
          </div>

        </main>

        {/* RIGHT NAVIGATION */}
        <aside className="hidden xl:block w-[260px] flex-shrink-0">
          <RightNavigation endpoints={data?.Endpoints} active={active} />
        </aside>

      </div>
    </div>
  );
}