"use client";
import { useMemo, useState } from "react";
import { roadmaps } from "@/data/roadmaps";
import SearchBar from "@/components/SearchBar";
import RoadmapCard from "@/components/RoadmapCard";

export default function HomePage(){
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if(!query) return roadmaps;
    return roadmaps.filter(r => 
      r.title.toLowerCase().includes(query) ||
      r.description.toLowerCase().includes(query) ||
      r.tags.some(t => t.toLowerCase().includes(query))
    );
  }, [q]);

  return (
    <main>
      <section className="container pt-10 pb-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-snug">
              نقشه‌های راه یادگیری؛
              <span className="text-sky-600 dark:text-sky-400"> ساده، شفاف، عملی</span>
            </h1>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              از مبانی تا حرفه‌ای؛ مسیر یادگیریت را با نقشه‌های راه ساختاریافته دنبال کن.
            </p>
            <div className="mt-4 max-w-lg">
              <SearchBar onChange={setQ} />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="card p-6">
              <ul className="space-y-2 text-sm">
                <li>✅ ساختار درختی با باز/بسته‌شدن</li>
                <li>✅ تگ‌ها، توضیحات و لینک‌ها</li>
                <li>✅ حالت تیره/روشن</li>
                <li>✅ مسیرهای داینامیک هر نقشه</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(r => (
            <RoadmapCard key={r.slug} slug={r.slug} title={r.title} description={r.description} tags={r.tags} />
          ))}
        </div>
      </section>
    </main>
  );
}
