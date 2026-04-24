"use client";

import MainPage from "@/app/components/mainPageComp/MainPage";
import { WebHook } from "@/app/constants/WebHook";

export default function Page() {
  return <MainPage data={WebHook} />;
}
