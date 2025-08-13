"use client";
import { useMemo, useState } from "react";
import { roadmaps } from "@/data/roadmaps";
import SearchBar from "@/components/SearchBar";
import RoadmapCard from "@/components/RoadmapCard";
import { useI18n } from "@/lib/i18n";

export default function HomePage(){
  const [q, setQ] = useState("");
  const { t } = useI18n();
  const filtered = useMemo(()=>{
    const s = q.trim().toLowerCase();
    if(!s) return roadmaps;
    return roadmaps.filter(r => r.title.toLowerCase().includes(s) || r.description.toLowerCase().includes(s) || r.tags.some(tt => tt.toLowerCase().includes(s)));
  }, [q]);

  return (
    <main>
      <section className="hero">
        <div>
          <h1 className="hero-title">{t("hero.title")}</h1>
          <p className="hero-sub">{t("hero.subtitle")}</p>
          <div className="mt-4 max-w-lg"><SearchBar onChange={setQ}/></div>
        </div>
        <div className="hidden md:block">
          <div className="card p-6">
            <ul className="space-y-2 text-sm">
              <li>✅ ساختار درختی با باز/بسته‌شدن</li>
              <li>✅ تگ‌ها، توضیحات و لینک‌ها</li>
              <li>✅ حالت تیره/روشن</li>
              <li>✅ مسیرهای داینامیک + جزئیات هر نود</li>
              <li>✅ نشان‌ها و پیگیری پیشرفت، XP و streak</li>
              <li>✅ نسخهٔ چاپ و کتابخانه</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="container pb-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(r => <RoadmapCard key={r.slug} slug={r.slug} title={r.title} description={r.description} tags={r.tags}/>)}
      </section>
    </main>
  );
}
