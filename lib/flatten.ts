export type RoadmapTopic = {
  id: string;
  title: string;
  description?: string;
  children?: RoadmapTopic[];
};
export type Roadmap = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  topics: RoadmapTopic[];
};
import type { RoadmapTopic as T } from "@/types/roadmaps";
export type FlatNode = { slug:string; id:string; path:string[]; title:string; description?:string };
export function flattenRoadmap(r: {slug:string; topics:T[]}): FlatNode[]{
  const out: FlatNode[] = [];
  const walk = (t:T, stack:string[]) => {
    const path = [...stack, t.title];
    out.push({ slug:r.slug, id:t.id, path, title:t.title, description:t.description });
    (t.children||[]).forEach(c => walk(c, path));
  };
  r.topics.forEach(t => walk(t, []));
  return out;
}
