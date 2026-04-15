"use client";
import MainPage from "@/app/components/mainPageComp/MainPage";
import { payoutDocs } from "@/app/constants/payOut";

export default function Page() {
  return <MainPage data={payoutDocs} />;
}
