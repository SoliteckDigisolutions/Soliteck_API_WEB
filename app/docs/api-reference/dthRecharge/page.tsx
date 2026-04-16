"use client";

import MainPage from "@/app/components/mainPageComp/MainPage";
import { dthApiD } from "@/app/constants/dthApiD";

export default function Page() {
   return <MainPage data={dthApiD} />;
}
