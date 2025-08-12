"use client";
import { useMemo, useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import RoadmapTree from "@/components/RoadmapTree";
import { roadmaps } from "@/data/roadmaps";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [slug, setSlug] = useState<string>("frontend");

  useEffect(() => {
    const usp = new URLSearchParams(window.location.search);
    const r = usp.get("r");
    if (r && roadmaps.find(x => x.slug === r)) setSlug(r);
  }, []);

  const filtered = useMemo(() => {
    if (!query) return roadmaps;
    const q = query.toLowerCase();
    return roadmaps.map(r => ({
      ...r,
      topics: r.topics.filter(t => t.title.toLowerCase().includes(q) || (t.children ?? []).some(c => c.title.toLowerCase().includes(q)))
    }));
  }, [query]);

  const current = useMemo(() => roadmaps.find(r => r.slug === slug) ?? roadmaps[0], [slug]);

  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between py-3 gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" className="h-8" alt="FARoadmap" />
            <nav className="hidden md:flex gap-2 text-sm">
              <a className="px-3 py-1 rounded-xl hover:bg-gray-50" href="https://github.com">GitHub</a>
              <a className="px-3 py-1 rounded-xl hover:bg-gray-50" href="#">درباره</a>
            </nav>
          </div>
          <div className="w-full max-w-lg">
            <SearchBar onChange={setQuery} />
          </div>
        </div>
      </header>
      <div className="container py-6 grid grid-cols-1 lg:grid-cols-[18rem_1fr] gap-6">
        <Sidebar />
        <main>
          <div className="mb-4 flex items-center gap-2">
            <span className="badge">نسخه MVP</span>
            <span className="text-sm text-gray-500">شباهت ظاهری به roadmap.sh با داده‌های نمونه و پشتیبانی کامل RTL</span>
          </div>
          <RoadmapTree slug={current.slug} />
        </main>
      </div>
      <footer className="mt-10 border-t">
        <div className="container py-6 text-sm text-gray-500">
          ساخته شده برای شما — می‌توانید این پروژه را توسعه داده و محتوای واقعی اضافه کنید.
        </div>
      </footer>
    </div>
  );
}
