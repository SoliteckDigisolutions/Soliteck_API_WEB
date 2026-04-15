"use client";

import MainPage from "@/app/components/mainPageComp/MainPage";
import { MobileDocs } from "@/app/constants/mobileApi";

export default function Page() {
  return <MainPage data={MobileDocs} />;
}
