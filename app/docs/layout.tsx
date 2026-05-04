"use client";

import dynamic from "next/dynamic";
import Sidebar from "@/components/common-components/SideNavigation";

const Navbar = dynamic(() => import("@/components/common-components/Navabr"), {
  ssr: false,
  loading: () => (
    <div className="h-16 bg-background border-b border-border animate-pulse" />
  ),
});

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <div className="flex bg-background">
        <Sidebar />

        <main className="flex-1 p-2 w-100 font-sans">{children}</main>
      </div>
    </>
  );
}
