import { notFound } from "next/navigation";
import { roadmaps } from "@/data/roadmaps";

export function generateStaticParams(){ return roadmaps.map(r => ({ slug: r.slug })); }

export default function PrintPage({ params }:{ params:{ slug:string } }){
  const data = roadmaps.find(r => r.slug === params.slug);
  if(!data) return notFound();
  const lines: string[] = [];
  const walk = (t:any, depth=0) => { lines.push(`${" ".repeat(depth*2)}• ${t.title}`); if(t.description) lines.push(`${" ".repeat(depth*2+2)}${t.description.replace(/\n/g," ")}`); (t.children||[]).forEach((c:any)=>walk(c, depth+1)); };
  data.topics.forEach(walk);
  return (
    <main className="container py-8">
      <h1 className="text-2xl font-extrabold mb-3">{data.title} — نسخه چاپ</h1>
      <p className="mb-4 text-sm text-gray-600">برای چاپ از Ctrl/Cmd + P استفاده کن.</p>
      <pre className="whitespace-pre-wrap text-sm bg-white/60 dark:bg-white/10 p-4 rounded-xl border border-white/15">{lines.join("\n")}</pre>
    </main>
  );
}
