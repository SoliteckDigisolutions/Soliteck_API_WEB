"use client";
import { useEffect, useState } from "react";
import RightNavigation from "@/app/components/navigationComp/RightNavigation";
import ApiEndpoint from "@/app/components/mainPageComp/ApiEndpoint";
import HeadersAuth from "@/app/components/component/HeadersAuth";
import { MainInterface } from "../../types/MainPage";
import IntroInfo from "./IntroInfo";
import BaseUrls from "../component/BaseUrl";

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
        root: null,
        rootMargin: "-15% 0px -15% 0px",
        threshold: 0.1,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex w-full flex-col xl:flex-row mt-18">
      {/* LEFT CONTENT */}
      <main className="w-full xl:w-[76%]  space-y-12">
        <IntroInfo />

        <BaseUrls urls={data?.BaseUrls} />

        {
          data.BaseUrls?.auth && <HeadersAuth />
        }



        {data?.Endpoints?.map((endpoint, index) => (
          <ApiEndpoint key={index} endpoint={endpoint} index={index} />
        ))}
      </main>

      {/* RIGHT NAVIGATION */}
      <aside className="w-full xl:w-[24%] flex justify-center">
        <RightNavigation endpoints={data?.Endpoints} active={active} />
      </aside>
    </div>
  );
}
