"use client";

import MainPage from "@/components/common-components/MainPage";
import { MobileDocs } from "@/app/docs/api-reference/mobileapi/mobileApi";

export default function Page() {
  return <MainPage data={MobileDocs} />;
}
