"use client";
import MainPage from "@/components/common-components/MainPage";
import { payoutDocs } from "@/app/docs/api-reference/payoutapi/payOut";

export default function Page() {
  return <MainPage data={payoutDocs} />;
}
