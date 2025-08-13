"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import fa from "@/messages/fa.json";

type Dict = Record<string, string>;
type Ctx = { t:(k:string)=>string; locale:string; setLocale:(loc:string)=>void };
const I18nCtx = createContext<Ctx>({ t:(k)=>k, locale:"fa", setLocale:()=>{} });

export function I18nProvider({ children }:{ children: React.ReactNode }){
  const [locale, setLocale] = useState<string>("fa");
  const [dict, setDict] = useState<Dict>(fa as Dict);
  useEffect(()=>{
    try{
      const qs = new URLSearchParams(window.location.search);
      const forced = qs.get("lang");
      const stored = localStorage.getItem("locale");
      const next = (forced || stored || "fa") as "fa"|"en";
      setLocale(next);
    }catch(e){}
  }, []);
  useEffect(()=>{
    (async ()=>{
      try{
        const mod = await import(`@/messages/${locale}.json`);
        setDict((mod as any).default as Dict);
        localStorage.setItem("locale", locale);
        document.documentElement.dir = locale==="fa" ? "rtl" : "ltr";
        document.documentElement.lang = locale;
      }catch(e){}
    })();
  }, [locale]);
  const t = useMemo(()=> (k:string) => dict[k] ?? k, [dict]);
  return <I18nCtx.Provider value={{ t, locale, setLocale }}>{children}</I18nCtx.Provider>;
}
export function useI18n(){ return useContext(I18nCtx); }
