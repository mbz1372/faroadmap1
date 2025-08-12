"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60">
      <div className="container h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="FARoadmap" className="h-7" />
        </Link>
        <nav className="hidden md:flex items-center gap-2 text-sm">
          <Link href="/" className="px-3 py-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10">نقشه‌ها</Link>
          <Link href="/guides" className="px-3 py-1.5 rounded-xl hover:bg-black/5 dark:hover:bg:white/10">راهنماها</Link>
          <Link href="/best-practices" className="px-3 py-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10">Best Practices</Link>
          <a className="px-3 py-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10" href="https://github.com" target="_blank">GitHub</a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
