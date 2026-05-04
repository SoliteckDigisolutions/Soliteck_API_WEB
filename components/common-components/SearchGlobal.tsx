"use client";

import Fuse from "fuse.js";
import { useMemo, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { data } from "@/app/constants/GlobalSearch";

export default function Search() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(true);

  const fuse = useMemo(() => {
    return new Fuse(data, {
      keys: ["title"],
      threshold: 0.6,
    });
  }, []);

  const results = query ? fuse.search(query) : [];

  return (
    <div className="relative w-60 lg:block hidden max-w-sm">
      {/* Search Input */}
      <div className="flex gap-2 items-center border border-border rounded-xl px-2 py-1 bg-muted/20">
        <CiSearch className="text-muted-foreground" />
        <input
          type="text"
          value={query}
          placeholder="Search docs..."
          className="outline-none text-sm w-full bg-transparent text-foreground"
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
        />
      </div>

      {/* Results Dropdown */}
      {open && query && (
        <div className="absolute top-9 w-full border border-border bg-white dark:bg-gray-950 rounded-xl shadow-md z-50 overflow-hidden">
          {results.length === 0 && (
            <div className="p-2 text-sm text-gray-500 dark:text-gray-400">No results</div>
          )}

          {results.map((result) => (
            <Link
              key={result.item.path}
              href={result.item.path}
              onClick={() => {
                setOpen(false);
                setQuery("");
              }}
              className="block p-2 text-sm border-b border-border hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              {result.item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
