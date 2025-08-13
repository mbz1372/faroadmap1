"use client";
import { useMemo, useState } from "react";
import { books } from "@/data/books";
import Icon from "@/components/Icon";

export default function BooksPage(){
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if(!s) return books;
    return books.filter(b =>
      b.title.toLowerCase().includes(s) ||
      b.author.toLowerCase().includes(s) ||
      (b.summary || "").toLowerCase().includes(s)
    );
  }, [q]);

  return (
    <main className="container py-10">
      <div className="flex items-center justify-between mb-5 gap-3">
        <h1 className="text-3xl font-extrabold">کتابخانه</h1>
        <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="جستجو در کتاب‌ها…" className="rounded-xl border px-4 py-2 w-full max-w-xs"/>
      </div>

      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(b => (
          <div key={b.id} className="card p-4 flex flex-col transition-transform hover:-translate-y-0.5">
            <div className="aspect-[3/4] w-full overflow-hidden rounded-xl mb-3 bg-gray-100 dark:bg-neutral-800 ring-1 ring-black/5 dark:ring-white/10 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={b.cover} alt={b.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold text-lg">{b.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{b.author}</p>
            <p className="text-sm text-gray-700 dark:text-gray-200 flex-1">{b.summary}</p>
            <div className="mt-4 flex gap-2">
              <a href={`/books/${b.id}`} className="btn">مشاهده</a>
              <a href={b.file} className="btn"><Icon name="download" className="w-4 h-4"/> دانلود</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
