"use client";
import { useI18n } from "@/lib/i18n";
import Icon from "./Icon";

export default function LangSwitch(){
  const { locale, setLocale } = useI18n();
  return (
    <div className="flex items-center gap-2">
      <button onClick={()=>setLocale("fa")} className={`btn ${locale==="fa" ? "bg-black/5 dark:bg-white/10" : ""}`}>
        <Icon name="globe" className="w-4 h-4"/> فارسی
      </button>
      <button onClick={()=>setLocale("en")} className={`btn ${locale==="en" ? "bg-black/5 dark:bg-white/10" : ""}`}>
        <Icon name="globe" className="w-4 h-4"/> EN
      </button>
    </div>
  );
}
