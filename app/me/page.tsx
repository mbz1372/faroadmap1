"use client";
import { useEffect, useMemo, useState } from "react";
import { roadmaps } from "@/data/roadmaps";

export default function MePage(){
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [progress, setProgress] = useState<{slug:string; percent:number}[]>([]);

  useEffect(()=>{
    try{
      setXp(parseInt(localStorage.getItem("xp")||"0",10));
      setStreak(parseInt(localStorage.getItem("streak")||"0",10));
      const list = roadmaps.map(r => {
        const map = JSON.parse(localStorage.getItem(`progress:${r.slug}`) || "{}");
        const values = Object.values(map) as boolean[];
        const done = values.filter(Boolean).length;
        const total = Math.max(values.length, 1);
        return { slug: r.slug, percent: Math.round(done/total*100) };
      });
      setProgress(list);
    }catch(e){}
  }, []);

  const totalPercent = useMemo(()=> Math.round(progress.reduce((a,b)=>a+b.percent,0)/Math.max(progress.length,1)),[progress]);

  return (
    <main className="container py-10">
      <h1 className="text-3xl font-extrabold mb-4">داشبورد من</h1>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="card p-4"><div className="text-sm text-gray-500">XP</div><div className="text-3xl font-extrabold">{xp}</div></div>
        <div className="card p-4"><div className="text-sm text-gray-500">Streak</div><div className="text-3xl font-extrabold">{streak} روز</div></div>
        <div className="card p-4"><div className="text-sm text-gray-500">میانگین پیشرفت</div><div className="text-3xl font-extrabold">{totalPercent}%</div></div>
      </div>
      <h2 className="text-xl font-bold mt-6 mb-3">پیشرفت هر مسیر</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {progress.map(p => (
          <div key={p.slug} className="card p-4">
            <div className="font-medium mb-2">{p.slug}</div>
            <div className="progress-bar"><span style={{width:`${p.percent}%`}}/></div>
          </div>
        ))}
      </div>
    </main>
  );
}
