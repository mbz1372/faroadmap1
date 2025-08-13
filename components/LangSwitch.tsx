"use client";
import { useI18n } from "@/lib/i18n";
import Icon from "./Icon";

export default function LangSwitch(){
  const { locale, setLocale } = useI18n();
  const next = locale === "fa" ? "en" : "fa";
  const label = locale === "fa" ? "FA" : "EN";
  return (
    <button
      aria-label="Change language"
      title={locale === "fa" ? "Switch to English" : "تغییر به فارسی"}
      onClick={()=>setLocale(next)}
      className="inline-flex items-center gap-2 rounded-xl border px-2.5 py-1.5 hover:bg-black/5 dark:hover:bg-white/10"
    >
      <Icon name="globe" className="w-4 h-4"/>
      <span className="text-xs font-bold tracking-widest">{label}</span>
    </button>
  );
}
