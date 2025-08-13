"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import LangSwitch from "./LangSwitch";
import ThemeToggle from "./ThemeToggle";
import Icon from "./Icon";
import clsx from "clsx";

export default function Header(){
  const { t } = useI18n();
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [open, setOpen] = useState(false);
  useEffect(()=>{ try{ setXp(parseInt(localStorage.getItem("xp")||"0",10)); setStreak(parseInt(localStorage.getItem("streak")||"0",10)); }catch(e){} },[]);

  const Nav = () => (
    <>
      <Link href="/" className="px-3 py-1.5 rounded-xl hover:bg-white/20">{t("nav.roadmaps")}</Link>
      <Link href="/search" className="px-3 py-1.5 rounded-xl hover:bg-white/20">{t("nav.search")}</Link>
      <Link href="/bookmarks" className="px-3 py-1.5 rounded-xl hover:bg-white/20">{t("nav.bookmarks")}</Link>
      <Link href="/books" className="px-3 py-1.5 rounded-xl hover:bg-white/20">{t("nav.books")}</Link>
      <Link href="/about" className="px-3 py-1.5 rounded-xl hover:bg-white/20">{t("nav.about")}</Link>
      <Link href="/contact" className="px-3 py-1.5 rounded-xl hover:bg-white/20">{t("nav.contact")}</Link>
      <Link href="/privacy" className="px-3 py-1.5 rounded-xl hover:bg-white/20">{t("nav.privacy")}</Link>
      <Link href="/me" className="px-3 py-1.5 rounded-xl hover:bg-white/20">{t("nav.me")}</Link>
    </>
  );

  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-white/60 dark:bg-neutral-900/60 print:hidden">
      <div className="container h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button className="md:hidden btn-ghost" onClick={()=>setOpen(o=>!o)} aria-label="Toggle Navigation"><Icon name="menu" className="w-5 h-5"/></button>
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="FARoadmap" className="h-7" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-2 text-sm"><Nav/></nav>
        <div className="hidden sm:flex items-center gap-3 text-sm">
          <span>🔥 {t("streak")}: <b>{streak}</b></span>
          <span>⭐ {t("xp")}: <b>{xp}</b></span>
        </div>
        <div className="flex items-center gap-1">
          <LangSwitch />
          <ThemeToggle />
        </div>
      </div>
      <div className={clsx("md:hidden border-t border-white/10 bg-white/80 dark:bg-neutral-900/90", open ? "block" : "hidden")}>
        <div className="container py-3 flex flex-col gap-2 text-sm"><Nav/></div>
      </div>
    </header>
  );
}
