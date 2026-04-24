"use client";

import MainPage from "@/app/components/mainPageComp/MainPage";
import { CheckTransacStatus } from "@/app/constants/CheckTransacStatus";

export default function Page() {
  return <MainPage data={CheckTransacStatus} />;
}
