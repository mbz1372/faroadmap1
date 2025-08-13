"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Icon from "./Icon";
import LangSwitch from "./LangSwitch";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import clsx from "clsx";

export default function Header(){
  const { t } = useI18n();
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(()=>{
    try{
      setXp(parseInt(localStorage.getItem("xp")||"0",10));
      setStreak(parseInt(localStorage.getItem("streak")||"0",10));
    }catch(e){}
  },[]);
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 print:hidden">
      <div className="container h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button className="md:hidden btn" onClick={()=>setMobileOpen(v=>!v)} aria-label="Toggle Navigation">
            <Icon name="menu" className="w-5 h-5"/>
          </button>
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="FARoadmap" className="h-7" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-2 text-sm">
          <Link href="/" className="px-3 py-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10">{t("nav.roadmaps")}</Link>
          <Link href="/search" className="px-3 py-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10">{t("nav.search")}</Link>
          <Link href="/bookmarks" className="px-3 py-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10">{t("nav.bookmarks")}</Link>
          <Link href="/books" className="px-3 py-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10">{t("nav.books")}</Link>
          <Link href="/about" className="px-3 py-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10">{t("nav.about")}</Link>
          <Link href="/contact" className="px-3 py-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10">{t("nav.contact")}</Link>
          <Link href="/privacy" className="px-3 py-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10">{t("nav.privacy")}</Link>
          <Link href="/me" className="px-3 py-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10">{t("nav.me")}</Link>
        </nav>
        <div className="hidden sm:flex items-center gap-3 text-sm text-gray-700 dark:text-gray-200">
          <span>🔥 {t("streak")}: <b>{streak}</b></span>
          <span>⭐ {t("xp")}: <b>{xp}</b></span>
        </div>
        <div className="flex items-center gap-2">
          <LangSwitch />
          <ThemeToggle />
        </div>
      </div>
      <div className={clsx("md:hidden border-t bg-white/95 dark:bg-neutral-900/90 backdrop-blur", mobileOpen ? "block" : "hidden")}>
        <div className="container py-3 flex flex-col gap-2 text-sm">
          <a href="/" className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10">{t("nav.roadmaps")}</a>
          <a href="/search" className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10">{t("nav.search")}</a>
          <a href="/bookmarks" className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10">{t("nav.bookmarks")}</a>
          <a href="/books" className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg:white/10">{t("nav.books")}</a>
          <a href="/about" className="px-3 py-2 rounded-xl hover:bg:black/5 dark:hover:bg-white/10">{t("nav.about")}</a>
          <a href="/contact" className="px-3 py-2 rounded-xl hover:bg:black/5 dark:hover:bg-white/10">{t("nav.contact")}</a>
          <a href="/privacy" className="px-3 py-2 rounded-xl hover:bg:black/5 dark:hover:bg-white/10">{t("nav.privacy")}</a>
          <a href="/me" className="px-3 py-2 rounded-xl hover:bg:black/5 dark:hover:bg-white/10">{t("nav.me")}</a>
        </div>
      </div>
    </header>
  );
}
