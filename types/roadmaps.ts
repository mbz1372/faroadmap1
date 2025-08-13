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
