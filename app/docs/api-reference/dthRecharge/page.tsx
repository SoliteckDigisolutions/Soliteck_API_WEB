"use client";

import MainPage from "@/app/components/mainPageComp/MainPage";
import { dthApiD } from "@/app/constants/dthApiD";
import { Globalintroinfo } from "@/app/constants/GlobalApiInfo";

export default function Page() {
  return (
    <MainPage
      title={dthApiD.title}
      endpoints={dthApiD.Endpoints}
      info={Globalintroinfo.DTHAPI}
      link={dthApiD.BaseUrls.link}
      auth={dthApiD.BaseUrls.auth}
    />
  );
}
