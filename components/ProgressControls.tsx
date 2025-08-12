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
    }catch(e){}
  };

  return (
    <button onClick={toggle} className="text-sm rounded-lg border px-2 py-1 hover:bg-black/5 dark:hover:bg-white/10">
      {done ? "✅ انجام شد" : "⬜ درحال یادگیری"}
    </button>
  );
}
