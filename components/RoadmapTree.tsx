"use client";
import { useState } from "react";
import type { RoadmapTopic } from "@/types/roadmaps";
import { marked } from "marked";
import ProgressControls from "./ProgressControls";
import BookmarkButton from "./BookmarkButton";
import Link from "next/link";

export default function RoadmapTree({ slug, topics }:{ slug:string; topics: RoadmapTopic[] }){
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setExpanded(p => ({...p, [id]: !p[id]}));

  const render = (t: RoadmapTopic, depth=0) => (
    <div key={t.id} className="mb-2">
      <div className="flex items-start gap-2">
        {t.children?.length ? (
          <button onClick={() => toggle(t.id)} className="mt-0.5 w-6 h-6 rounded-lg border flex items-center justify-center text-sm">{expanded[t.id] ? "−" : "+"}</button>
        ) : <span className="w-6 h-6 text-center">•</span>}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Link href={`/roadmaps/${slug}/${t.id}`} className="font-medium hover:underline">{t.title}</Link>
            <ProgressControls slug={slug} nodeId={t.id} />
            <BookmarkButton slug={slug} nodeId={t.id} />
          </div>
          {t.description && (
            <div className="prose prose-sm rtl max-w-none dark:prose-invert" dangerouslySetInnerHTML={{__html: marked.parse(t.description)}} />
          )}
          {expanded[t.id] && t.children && (
            <div className="pl-4 border-r pr-3 border-dashed mt-2">{t.children.map(c => render(c, depth+1))}</div>
          )}
        </div>
      </div>
    </div>
  );
  return <div>{topics.map(t => render(t))}</div>;
}
