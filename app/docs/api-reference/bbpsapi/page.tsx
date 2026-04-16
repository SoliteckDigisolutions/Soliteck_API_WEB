"use client";

import MainPage from "@/app/components/mainPageComp/MainPage";
import { BbpsApiD } from "@/app/constants/BbpsApiD";

export default function Page() {
  return <MainPage data={BbpsApiD} />;
}
