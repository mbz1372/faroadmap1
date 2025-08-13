"use client";
import { useEffect, useState } from "react";

type Props = { slug: string; nodeId: string };

export default function ProgressControls({ slug, nodeId }: Props){
  const key = `progress:${slug}`;
  const [done, setDone] = useState(false);

  useEffect(()=>{
    try{
      const map = JSON.parse(localStorage.getItem(key) || "{}");
      setDone(!!map[nodeId]);
    }catch(e){}
  }, [key, nodeId]);

  const toggle = () => {
    try{
      const map = JSON.parse(localStorage.getItem(key) || "{}");
      map[nodeId] = !done;
      localStorage.setItem(key, JSON.stringify(map));
      setDone(!done);
      // XP & Streak
      const now = new Date();
      const last = localStorage.getItem("lastDoneAt");
      const lastDate = last ? new Date(last) : null;
      let streak = parseInt(localStorage.getItem("streak")||"0",10);
      if(!lastDate) streak = 1;
      else {
        const diffDays = Math.floor((now.setHours(0,0,0,0) - new Date(lastDate).setHours(0,0,0,0)) / 86400000);
        if(diffDays === 1) streak += 1;
        else if(diffDays > 1) streak = 1;
      }
      localStorage.setItem("lastDoneAt", new Date().toISOString());
      localStorage.setItem("streak", String(streak));
      const xp = parseInt(localStorage.getItem("xp")||"0",10) + 10;
      localStorage.setItem("xp", String(xp));
    }catch(e){}
  };

  return (
    <button onClick={toggle} className="text-sm rounded-lg border px-2 py-1 hover:bg-black/5 dark:hover:bg-white/10">
      {done ? "✅ انجام شد" : "⬜ درحال یادگیری"}
    </button>
  );
}
