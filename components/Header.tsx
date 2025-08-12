"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Header(){
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 print-hidden">
      <div className="container h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3"><img src="/logo.svg" alt="FARoadmap" className="h-7"/></Link>
        <nav className="hidden md:flex items-center gap-2 text-sm">
          <Link href="/" className={clsx("px-3 py-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10", pathname==="/" && "font-semibold")}>نقشه‌ها</Link>
          <Link href="/search" className={clsx("px-3 py-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10", pathname==="/search" && "font-semibold")}>جستجو</Link>
          <Link href="/bookmarks" className={clsx("px-3 py-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10", pathname==="/bookmarks" && "font-semibold")}>نشان‌ها</Link>
        <Link href="/about" className="px-3 py-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10">درباره</Link>
<Link href="/contact" className="px-3 py-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10">تماس</Link>
<a href="/books" className="px-3 py-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10">کتابخانه</a>
</nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
