"use client";
import MainPage from "@/app/components/mainPageComp/MainPage";
import { bbpsonline } from "@/app/constants/bbpsonline";

export default function Page() {
    return <MainPage data={bbpsonline} />;
}
