"use client"

import Fuse from "fuse.js"
import { useState } from "react"

const data = [
  { title: "Introduction", path: "/docs/introduction" },
  { title: "Authentication", path: "/docs/authentication" },
  { title: "API process", path: "/docs/process" },
  { title: "Payout API's", path: "/docs/payoutapi" },
  { title: "Error Code", path: "/docs/errorCode" }
]

export default function Search() {
  const [query, setQuery] = useState("")

  const fuse = new Fuse(data, {
    keys: ["title"],
    threshold: 0.3
  })

  const results = query ? fuse.search(query) : []

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />

      {results.map((result) => (
        <div key={result.item.path}>
          <a href={result.item.path}>{result.item.title}</a>
        </div>
      ))}
    </div>
  )
}