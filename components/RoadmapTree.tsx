"use client";
import { useMemo, useState } from "react";
import { roadmaps, RoadmapTopic } from "@/data/roadmaps";
import { NodeCard } from "./NodeCard";

export default function RoadmapTree({ slug }: { slug: string }) {
  const data = useMemo(() => roadmaps.find(r => r.slug === slug), [slug]);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  if (!data) return <div>نقشه راه یافت نشد.</div>;

  const toggle = (id: string) => setExpanded(prev => ({...prev, [id]: !prev[id]}));

  const renderTopic = (t: RoadmapTopic, level=0) => (
    <div key={t.id} className="ml-0">
      <div className="flex items-center gap-2 mb-1">
        {t.children?.length ? (
          <button
            onClick={() => toggle(t.id)}
            className="rounded-lg border px-2 py-0.5 text-xs hover:bg-gray-50"
            aria-expanded={!!expanded[t.id]}
          >
            {expanded[t.id] ? "−" : "+"}
          </button>
        ) : <span className="w-6 text-center">•</span>}
        <span className="font-medium">{t.title}</span>
        {t.badge && <span className="badge">{t.badge}</span>}
      </div>
      {t.description && <p className="text-sm text-gray-600 mb-2 pr-8">{t.description}</p>}
      {expanded[t.id] && t.children && (
        <div className="pl-6 border-r pr-3 border-dashed">
          {t.children.map(c => renderTopic(c, level+1))}
        </div>
      )}
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
      <aside className="card p-4 h-fit sticky top-4">
        <h2 className="font-bold text-lg mb-3">درباره نقشه</h2>
        <p className="text-sm text-gray-600">{data.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {data.tags.map(tag => <span key={tag} className="badge">{tag}</span>)}
        </div>
      </aside>
      <main>
        <h1 className="text-2xl font-extrabold mb-4">{data.title}</h1>
        <div className="space-y-2">
          {data.topics.map(t => (
            <NodeCard key={t.id} title={t.title} level={0}>
              {renderTopic(t, 1)}
            </NodeCard>
          ))}
        </div>
      </main>
    </div>
  );
}
