"use client";
import { useMemo, useState } from "react";
import { roadmaps } from "@/data/roadmaps";
import RoadmapCard from "@/components/RoadmapCard";
import { useI18n } from "@/lib/i18n";

export default function HomePage(){
  const [q, setQ] = useState("");
  const { t } = useI18n();
  const list = useMemo(()=>{
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
          <div className="mt-4 max-w-lg">
            <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="جستجو در نقشه‌ها…" className="w-full rounded-xl border border-white/20 bg-white/60 dark:bg-white/10 px-4 py-2"/>
          </div>
        </div>
        <div>
          <div className="card p-6">
            <ul className="space-y-2 text-sm">
              <li>✅ ساختار درختی با باز/بسته‌شدن</li>
              <li>✅ لینک هر نود + Markdown</li>
              <li>✅ حالت تیره/روشن + دوزبانه</li>
              <li>✅ نشان‌ها و پیگیری پیشرفت، XP و streak</li>
              <li>✅ نسخهٔ چاپ و کتابخانه</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="container pb-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(r => <RoadmapCard key={r.slug} slug={r.slug} title={r.title} description={r.description} tags={r.tags}/>)}
      </section>
    </main>
  );
}
