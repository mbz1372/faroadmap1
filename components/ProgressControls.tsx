"use client";
import { useEffect, useState } from "react";
export default function ProgressControls({ slug, nodeId }:{ slug:string; nodeId:string }){
  const key = `progress:${slug}`;
  const [done, setDone] = useState(false);
  useEffect(()=>{ try{ setDone(!!(JSON.parse(localStorage.getItem(key)||"{}")[nodeId])); }catch(e){} },[key,nodeId]);
  const toggle = ()=>{
    try{
      const map = JSON.parse(localStorage.getItem(key) || "{}");
      map[nodeId] = !done; localStorage.setItem(key, JSON.stringify(map)); setDone(!done);
      const now = new Date(); const last = localStorage.getItem("lastDoneAt"); const lastDate = last? new Date(last):null;
      let streak = parseInt(localStorage.getItem("streak")||"0",10);
      if(!lastDate) streak = 1;
      else{
        const d0 = new Date(lastDate); d0.setHours(0,0,0,0);
        const d1 = new Date(now); d1.setHours(0,0,0,0);
        const diff = Math.round((+d1-+d0)/86400000);
        if(diff===1) streak += 1; else if(diff>1) streak = 1;
      }
      localStorage.setItem("lastDoneAt", now.toISOString());
      localStorage.setItem("streak", String(streak));
      const xp = parseInt(localStorage.getItem("xp")||"0",10) + 10;
      localStorage.setItem("xp", String(xp));
    }catch(e){}
  };
  return <button onClick={toggle} className="text-xs rounded-lg border border-white/20 px-2 py-1 hover:bg-white/15">{done?"✅ انجام شد":"⬜ درحال یادگیری"}</button>;
}
