"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ApiDropdown() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const apiRefs = [
    { label: "Payout API", href: "/docs/payoutapi" },
    { label: "Mobile API", href: "/docs/mobileRechargeAPI" },
    { label: "PG API", href: "/docs/pgapi" },
    { label: "DTH", href: "/docs/dth" },
    { label: "BBPS", href: "/docs/bbps" },
    { label: "AEPS", href: "/docs/aeps" },
  ];

  const filteredApis = apiRefs.filter((api) =>
    api.label.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline">API Reference</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 p-2">
        <Input
          placeholder="Search API..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-2"
        />

        {filteredApis.map((api) => (
          <DropdownMenuTrigger asChild>
            <Button variant="outline">API Reference</Button>
          </DropdownMenuTrigger>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
