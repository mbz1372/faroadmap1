"use client";
import { useState } from "react";

export default function SearchBar({ onChange }: { onChange: (q: string) => void }) {
  const [q, setQ] = useState("");
  return (
    <div className="relative">
      <input
        value={q}
        onChange={(e) => { setQ(e.target.value); onChange(e.target.value); }}
        placeholder="جستجو در نقشه‌ها..."
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-brand.blue"
      />
      <span className="absolute right-3 top-2.5">🔎</span>
    </div>
  );
}
