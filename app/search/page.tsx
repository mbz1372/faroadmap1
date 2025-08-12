"use client";
import Fuse from "fuse.js";
import { useMemo, useState } from "react";
import { roadmaps } from "@/data/roadmaps";
import { flattenRoadmap } from "@/lib/flatten";
import Highlight from "@/components/Highlight";
import Link from "next/link";

export default function SearchPage(){
  const [q, setQ] = useState("");
  const dataset = useMemo(()=> roadmaps.flatMap(flattenRoadmap), []);
  const fuse = useMemo(()=> new Fuse(dataset, { includeScore:true, keys:["title","description","path"] }), [dataset]);
  const results = useMemo(()=> q? fuse.search(q).slice(0,100):[], [q, fuse]);

  return (
    <main className="container py-8">
      <h1 className="text-2xl font-bold mb-4">جستجو</h1>
      <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="نام تکنولوژی یا موضوع…" className="w-full rounded-xl border px-4 py-2 mb-4"/>
      <div className="space-y-3">
        {results.map(r => {
          const item = r.item;
          return (
            <Link key={item.slug+item.id} href={{ pathname:"/roadmaps/[slug]/[nodeId]", params:{ slug:item.slug, nodeId:item.id }}} as={`/roadmaps/${item.slug}/${item.id}`} className="block card p-4 hover:shadow-lg">
              <div className="text-sm text-gray-500 mb-1">{item.path.join(" / ")}</div>
              <div className="font-medium text-lg"><Highlight text={item.title} query={q}/></div>
              {item.description && <div className="text-sm text-gray-600"><Highlight text={item.description.replace(/\n/g," • ")} query={q}/></div>}
            </Link>
          );
        })}
        {!q && <p className="text-gray-500">برای شروع، عبارتی را وارد کن.</p>}
      </div>
    </main>
  );
}
