"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BookmarksPage(){
  const [items, setItems] = useState<string[]>([]);
  useEffect(()=>{
    try{ setItems(JSON.parse(localStorage.getItem("bookmarks")||"[]")); }catch(e){}
  },[]);
  if(items.length===0) return <main className="container py-10"><h1 className="text-2xl font-bold mb-2">نشان‌ها</h1><p className="text-gray-600">هنوز موردی نشان نشده.</p></main>;
  return (
    <main className="container py-10">
      <h1 className="text-2xl font-bold mb-4">نشان‌ها</h1>
      <div className="grid gap-3">
        {items.map(id => {
          const [slug, nodeId] = id.split(":");
          return (
            <Link key={id} href={`/roadmaps/${slug}/${nodeId}`} className="card p-4 hover:shadow-lg">
              <div className="text-sm text-gray-500">{slug}</div>
              <div className="font-medium">{nodeId}</div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
