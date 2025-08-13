"use client";
import { useEffect, useState } from "react";
import Icon from "./Icon";

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
      className="btn" aria-label="Toggle Theme">
      <Icon name={dark?"moon":"sun"} className="w-4 h-4"/>
      {dark ? "Dark" : "Light"}
    </button>
  );
}
