import type { Roadmap, RoadmapTopic } from "@/data/roadmaps";

export type FlatNode = { slug:string; id:string; path:string[]; title:string; description?:string };
export function flattenRoadmap(r: Roadmap): FlatNode[]{
  const out: FlatNode[] = [];
  const walk = (t:RoadmapTopic, stack:string[]) => {
    const path = [...stack, t.title];
    out.push({ slug:r.slug, id:t.id, path, title:t.title, description:t.description });
    (t.children||[]).forEach(c => walk(c, path));
  };
  r.topics.forEach(t => walk(t, []));
  return out;
}
