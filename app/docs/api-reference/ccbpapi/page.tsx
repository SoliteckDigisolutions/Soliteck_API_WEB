"use client";

import MainPage from "@/app/components/mainPageComp/MainPage";
import { CcBpApiD } from "@/app/constants/CcbpApiD";

export default function Page() {
  return <MainPage data={CcBpApiD} />;
}
