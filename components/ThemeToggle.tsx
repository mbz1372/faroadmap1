"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle(){
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  useEffect(()=>{ setMounted(true); setDark(document.documentElement.classList.contains("dark")); },[]);
  if(!mounted) return null;
  return (
    <button
      onClick={()=>{
        const next = !dark; setDark(next);
        document.documentElement.classList.toggle("dark", next);
        try{ localStorage.setItem("theme", next?"dark":"light"); }catch(e){}
      }}
      className="rounded-xl border px-3 py-1.5 text-sm hover:bg-black/5 dark:hover:bg-white/10">
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
