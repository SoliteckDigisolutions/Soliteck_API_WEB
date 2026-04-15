"use client";

import MainPage from "@/app/components/mainPageComp/MainPage";
import { BbpsApiD } from "@/app/constants/BbpsApiD";
import { Globalintroinfo } from "@/app/constants/GlobalApiInfo";

export default function Page() {
  return (
    <MainPage
      title={BbpsApiD.title}
      endpoints={BbpsApiD.Endpoints}
      info={Globalintroinfo.BBPSAPI}
      link={BbpsApiD.BaseUrls.link}
      auth={BbpsApiD.BaseUrls.auth}
    />
  );
}
