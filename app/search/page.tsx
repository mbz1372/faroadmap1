"use client";
import Fuse from "fuse.js";
import { useMemo, useState } from "react";
import { roadmaps } from "@/data/roadmaps";

type Flat = { slug:string; id:string; path:string[]; title:string; description?:string };
function flatten(){
  const out: Flat[] = [];
  const walk = (slug:string, t:any, stack:string[]) => {
    const path = [...stack, t.title];
    out.push({ slug, id:t.id, path, title:t.title, description:t.description });
    (t.children||[]).forEach((c:any)=>walk(slug, c, path));
  };
  roadmaps.forEach(r => r.topics.forEach((t:any)=>walk(r.slug, t, [])));
  return out;
}

export default function SearchPage(){
  const [q, setQ] = useState("");
  const dataset = useMemo(()=> flatten(), []);
  const fuse = useMemo(()=> new Fuse(dataset, { includeScore:true, keys:["title","description","path"] }), [dataset]);
  const results = useMemo(()=> q? fuse.search(q).slice(0,100):[], [q, fuse]);

  return (
    <main className="container py-8">
      <h1 className="text-2xl font-bold mb-4">جستجو</h1>
      <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="نام تکنولوژی یا موضوع…" className="w-full rounded-xl border border-white/20 bg-white/60 dark:bg-white/10 px-4 py-2 mb-4"/>
      <div className="space-y-3">
        {results.map(r => {
          const item = r.item;
          return (
            <a key={item.slug+item.id} href={`/roadmaps/${item.slug}/${item.id}`} className="block card p-4 hover:shadow-lg">
              <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">{item.path.join(" / ")}</div>
              <div className="font-medium text-lg">{item.title}</div>
              {item.description && <div className="text-sm text-gray-700 dark:text-gray-300">{item.description.replace(/\n/g," • ")}</div>}
            </a>
          );
        })}
        {!q && <p className="text-gray-500">برای شروع، عبارتی را وارد کن.</p>}
      </div>
    </main>
  );
}
