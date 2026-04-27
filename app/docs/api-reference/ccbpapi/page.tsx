"use client";

import MainPage from "@/components/common-components/MainPage";
import { CcBpApiD } from "@/app/docs/api-reference/ccbpapi/CcbpApiD";

export default function Page() {
  return <MainPage data={CcBpApiD} />;
}
