import Link from "next/link";
import React from "react";
export default function RoadmapCard({ slug, title, description, tags }:{ slug:string; title:string; description:string; tags:string[] }){
  const [progress, setProgress] = React.useState(0);
  React.useEffect(()=>{
    try{
      const map = JSON.parse(localStorage.getItem(`progress:${slug}`) || "{}");
      const total = Object.keys(map).length || 1;
      const done = Object.values(map).filter(Boolean).length;
      setProgress(Math.round((done/total)*100));
    }catch(e){}
  }, [slug]);
  return (
    <Link href={`/roadmaps/${slug}`} className="block">
      <div className="card p-5 transition-transform hover:-translate-y-0.5">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">{tags.map(t => <span key={t} className="badge">{t}</span>)}</div>
        <div className="mt-3 progress-bar"><span style={{width:`${progress}%`}}/></div>
      </div>
    </Link>
  );
}
