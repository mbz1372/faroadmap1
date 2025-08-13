import { notFound } from "next/navigation";
import { roadmaps } from "@/data/roadmaps";
import RoadmapTree from "@/components/RoadmapTree";
import Link from "next/link";
import RoadmapProgress from "@/components/RoadmapProgress";

export function generateStaticParams(){ return roadmaps.map(r => ({ slug: r.slug })); }

export default function RoadmapPage({ params }:{ params:{ slug:string } }){
  const data = roadmaps.find(r => r.slug === params.slug);
  if(!data) return notFound();
  return (
    <main className="container py-10">
      <div className="flex items-center justify-between mb-4 print:hidden">
        <h1 className="text-2xl font-extrabold">{data.title}</h1>
        <Link href={`/roadmaps/${data.slug}/print`} className="btn">🖨️ نسخه چاپ</Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
        <aside className="card p-5 h-fit sticky top-24 print:hidden">
          <p className="text-sm text-gray-700 dark:text-gray-300">{data.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">{data.tags.map(t => <span key={t} className="badge">{t}</span>)}</div>
          <div className="mt-5"><RoadmapProgress slug={data.slug}/></div>
        </aside>
        <section><RoadmapTree slug={data.slug} topics={data.topics as any} /></section>
      </div>
    </main>
  );
}
