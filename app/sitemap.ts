import { MetadataRoute } from "next";
import { roadmaps } from "@/data/roadmaps";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const urls: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date() },
    { url: `${base}/search`, lastModified: new Date() },
    { url: `${base}/bookmarks`, lastModified: new Date() },
    { url: `${base}/books`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    { url: `${base}/privacy`, lastModified: new Date() },
    { url: `${base}/me`, lastModified: new Date() },
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
