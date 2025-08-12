import { notFound } from "next/navigation";
import { roadmaps } from "@/data/roadmaps";
import RoadmapTree from "@/components/RoadmapTree";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return roadmaps.map(r => ({ slug: r.slug }));
}

export default function RoadmapPage({ params }: Props){
  const data = roadmaps.find(r => r.slug === params.slug);
  if(!data) return notFound();

  return (
    <main className="container py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
        <aside className="card p-5 h-fit sticky top-24">
          <h2 className="font-bold text-lg mb-2">{data.title}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">{data.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {data.tags.map(t => <span key={t} className="badge">{t}</span>)}
          </div>
        </aside>
        <section>
          <div className="mb-5">
            <h1 className="text-2xl font-extrabold mb-2">درخت موضوعات</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">روی + بزن تا زیربخش‌ها باز شوند.</p>
          </div>
          <RoadmapTree topics={data.topics} />
        </section>
      </div>
    </main>
  );
}
