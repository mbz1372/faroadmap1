import { MetadataRoute } from "next";
import { roadmaps } from "@/data/roadmaps";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";
  const urls: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date() },
    { url: `${base}/search`, lastModified: new Date() },
    { url: `${base}/bookmarks`, lastModified: new Date() },
  ];
  roadmaps.forEach(r => {
    urls.push({ url: `${base}/roadmaps/${r.slug}`, lastModified: new Date() });
    const walk = (t:any) => {
      urls.push({ url: `${base}/roadmaps/${r.slug}/${t.id}`, lastModified: new Date() });
      (t.children||[]).forEach(walk);
    };
    r.topics.forEach(walk);
  });
  return urls;
}
