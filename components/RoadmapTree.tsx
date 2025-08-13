"use client";
import { useState } from "react";
import type { RoadmapTopic } from "@/data/roadmaps";
import { marked } from "marked";
import ProgressControls from "@/components/ProgressControls";
import BookmarkButton from "@/components/BookmarkButton";

export default function RoadmapTree({ slug, topics }:{ slug:string; topics: RoadmapTopic[] }){
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setExpanded(p => ({...p, [id]: !p[id]}));

  const render = (t: any) => (
    <div key={t.id} className="mb-2">
      <div className="flex items-start gap-2">
        {t.children?.length ? (
          <button onClick={() => toggle(t.id)} className="mt-0.5 w-6 h-6 rounded-lg border border-white/20 flex items-center justify-center text-sm">{expanded[t.id] ? "−" : "+"}</button>
        ) : <span className="w-6 h-6 text-center">•</span>}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <a href={`/roadmaps/${slug}/${t.id}`} className="font-medium hover:underline">{t.title}</a>
            <ProgressControls slug={slug} nodeId={t.id} />
            <BookmarkButton slug={slug} nodeId={t.id} />
          </div>
          {t.description && (<div className="prose prose-sm rtl max-w-none dark:prose-invert" dangerouslySetInnerHTML={{__html: marked.parse(t.description)}} />)}
          {expanded[t.id] && t.children && (<div className="pl-4 border-r border-white/15 pr-3 mt-2">{t.children.map((c:any) => render(c))}</div>)}
        </div>
      </div>
    </div>
  );
  return <div>{topics.map(t => render(t))}</div>;
}
