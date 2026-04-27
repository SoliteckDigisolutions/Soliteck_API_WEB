"use client";

import MainPage from "@/components/common-components/MainPage";
import { WebHook } from "@/app/docs/api-reference/webhook/WebHook";

export default function Page() {
  return <MainPage data={WebHook} />;
}
