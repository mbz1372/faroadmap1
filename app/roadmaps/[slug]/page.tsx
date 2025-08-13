"use client";
import { notFound } from "next/navigation";
import { roadmaps } from "@/data/roadmaps";
import RoadmapTree from "@/components/RoadmapTree";
import Link from "next/link";
import { useEffect } from "react";

type Props = { params: { slug: string } };

export function generateStaticParams(){ return roadmaps.map(r => ({ slug: r.slug })); }

export default function RoadmapPage({ params }: Props){
  const data = roadmaps.find(r => r.slug === params.slug);
  if(!data) return notFound();

  useEffect(()=>{
    try{
      const map = JSON.parse(localStorage.getItem(`progress:${data.slug}`) || "{}");
      const total = document.querySelectorAll("a[href^='/roadmaps']").length || 1;
      const done = Object.values(map).filter(Boolean).length;
      const percent = Math.min(100, Math.round((done/Math.max(Object.keys(map).length || 1, 1))*100));
      const el = document.getElementById("rm-progress");
      if(el) el.style.width = percent+"%";
    }catch(e){}
  }, [data.slug]);

  return (
    <main className="container py-10">
      <div className="flex items-center justify-between mb-4 print:hidden">
        <h1 className="text-2xl font-extrabold">{data.title}</h1>
        <Link href={`/roadmaps/${data.slug}/print`} className="btn">🖨️ نسخه چاپ</Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
        <aside className="card p-5 h-fit sticky top-24 print:hidden">
          <p className="text-sm text-gray-600 dark:text-gray-300">{data.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">{data.tags.map(t => <span key={t} className="badge">{t}</span>)}</div>
          <div className="mt-5">
            <div className="progress-bar"><span id="rm-progress" style={{width:"0%"}}/></div>
          </div>
        </aside>
        <section>
          <RoadmapTree slug={data.slug} topics={data.topics as any} />
        </section>
      </div>
    </main>
  );
}
