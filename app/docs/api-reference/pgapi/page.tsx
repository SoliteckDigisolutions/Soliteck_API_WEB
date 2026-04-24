"use client";

import MainPage from "@/app/components/mainPageComp/MainPage";
import { pgApiD } from "@/app/constants/pgApiD";

export default function Page() {
  return <MainPage data={pgApiD} />;
}
