"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
type Dict = Record<string, string>;
type Ctx = { t:(k:string)=>string; locale:string; setLocale:(loc:string)=>void };
const I18nCtx = createContext<Ctx>({ t:(k)=>k, locale:"fa", setLocale:()=>{} });

export function I18nProvider({ children, initialLocale="fa" }:{ children: React.ReactNode; initialLocale?: string }){
  const [locale, setLocale] = useState<string>(initialLocale);
  const [dict, setDict] = useState<Dict>({});
  useEffect(()=>{
    const q = new URLSearchParams(typeof window!=="undefined" ? window.location.search : "");
    const forced = q.get("lang");
    const stored = typeof window!=="undefined" ? localStorage.getItem("locale") : null;
    const final = forced || stored || initialLocale;
    setLocale(final);
  }, [initialLocale]);
  useEffect(()=>{
    (async ()=>{
      try{
        const mod = await import(`@/messages/${locale}.json`);
        setDict(mod as unknown as Dict);
        if(typeof window!=="undefined") localStorage.setItem("locale", locale);
        document.documentElement.dir = locale==="fa" ? "rtl" : "ltr";
        document.documentElement.lang = locale;
      }catch(e){}
    })();
  }, [locale]);
  const t = useMemo(()=> (k:string)=> dict[k] ?? k, [dict]);
  return <I18nCtx.Provider value={{ t, locale, setLocale }}>{children}</I18nCtx.Provider>;
}
export function useI18n(){ return useContext(I18nCtx); }
