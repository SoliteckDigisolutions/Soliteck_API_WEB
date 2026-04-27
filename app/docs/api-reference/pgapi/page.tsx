"use client";

import MainPage from "@/components/common-components/MainPage";
import { pgApiD } from "@/app/docs/api-reference/pgapi/pgApiD";

export default function Page() {
  return <MainPage data={pgApiD} />;
}
