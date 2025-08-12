"use client";
import { useState } from "react";

export default function SearchBar({ onChange }:{ onChange:(q:string)=>void }){
  const [q, setQ] = useState("");
  return (
    <div className="relative">
      <input
        className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white/90 dark:bg-neutral-900/80 px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-sky-500"
        placeholder="جستجو در نقشه‌ها..."
        value={q}
        onChange={(e)=>{ setQ(e.target.value); onChange(e.target.value);}}
      />
      <span className="absolute right-3 top-2.5">🔎</span>
    </div>
  );
}
