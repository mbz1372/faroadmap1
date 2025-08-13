"use client";
import { useI18n } from "@/lib/i18n";
import Icon from "./Icon";
export default function LangSwitch(){
  const { locale, setLocale } = useI18n();
  const next = locale==="fa" ? "en" : "fa";
  return (
    <button onClick={()=>setLocale(next)} className="btn-ghost" title={locale==="fa"?"Switch to English":"تغییر به فارسی"} aria-label="Switch language">
      <Icon name="globe" className="w-4 h-4"/>
      <span className="text-xs font-medium">{locale==="fa"?"FA":"EN"}</span>
    </button>
  );
}
