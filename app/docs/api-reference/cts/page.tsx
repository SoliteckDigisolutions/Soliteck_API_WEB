"use client";

import MainPage from "@/components/common-components/MainPage";
import { CheckTransacStatus } from "@/app/docs/api-reference/cts/CheckTransacStatus";

export default function Page() {
  return <MainPage data={CheckTransacStatus} />;
}
