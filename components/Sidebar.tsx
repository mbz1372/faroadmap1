"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { roadmaps } from "@/data/roadmaps";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="card p-3 sticky top-4">
        <div className="flex items-center justify-between mb-3">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="FARoadmap" className="h-7" />
          </Link>
        </div>
        <div className="space-y-1">
          {roadmaps.map(r => {
            const href = `/?r=${r.slug}`;
            const active = pathname === "/" && (typeof window !== "undefined" ? (new URLSearchParams(window.location.search).get("r") ?? "frontend") : "frontend") === r.slug;
            return (
              <Link key={r.slug} href={href} className={clsx("block rounded-xl px-3 py-2 text-sm hover:bg-gray-50", active && "bg-gray-100 font-semibold")}>
                {r.title}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
