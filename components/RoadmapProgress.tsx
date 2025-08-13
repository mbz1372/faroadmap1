"use client";
import { useEffect, useState } from "react";
export default function RoadmapProgress({ slug }:{ slug:string }){
  const [percent, setPercent] = useState(0);
  useEffect(()=>{
    try{
      const map = JSON.parse(localStorage.getItem(`progress:${slug}`) || "{}");
      const values = Object.values(map) as boolean[];
      const done = values.filter(Boolean).length;
      const total = Math.max(values.length, 1);
      setPercent(Math.round(done/total*100));
    }catch(e){}
  }, [slug]);
  return <div className="progress-bar"><span style={{width:`${percent}%`}}/></div>;
}
