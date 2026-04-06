"use client"

import Fuse from "fuse.js"
import { useMemo, useState } from "react"
import { CiSearch } from "react-icons/ci"
import Link from "next/link"
import {data} from "../constants/GlobalSearch"

  
export default function Search() {

  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(true)

  const fuse = useMemo(() => {
    return new Fuse(data, {
      keys: ["title"],
      threshold: 0.3
    })
  }, [])

  const results = query ? fuse.search(query) : []

  return (
    <div className="relative w-60 lg:block hidden max-w-sm">

      {/* Search Input */}
      <div className="flex gap-2 items-center border rounded-xl  px-2 py-1">
        <CiSearch />
        <input
          type="text"
          value={query}
          placeholder="Search docs..."
          className="outline-none text-sm w-full"
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
          }}
        />
      </div>

      {/* Results Dropdown */}
      {open && query && (
        <div className="absolute top-9 w-full border  bg-white  rounded-xl shadow-md z-50">

          {results.length === 0 && (
            <div className="p-2 text-sm text-gray-500">
              No results
            </div>
          )}

          {results.map((result) => (
            <Link
              key={result.item.path}
              href={result.item.path}
              onClick={() => {
                setOpen(false)
                setQuery("")
              }}
              className="block p-2 text-sm border-b  hover:bg-gray-50"
            >
              {result.item.title}
            </Link>
          ))}

        </div>
      )}

    </div>
  )
}