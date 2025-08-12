"use client";
import { useEffect, useState } from "react";

export default function BookmarkButton({ slug, nodeId }:{ slug:string; nodeId:string }){
  const key = `bookmarks`;
  const id = `${slug}:${nodeId}`;
  const [saved, setSaved] = useState(false);
  useEffect(()=>{
    try{
      const arr = JSON.parse(localStorage.getItem(key) || "[]");
      setSaved(arr.includes(id));
    }catch(e){}
  }, [id]);
  const toggle = () => {
    try{
      const arr = JSON.parse(localStorage.getItem(key) || "[]");
      if(saved){
        const idx = arr.indexOf(id); if(idx>-1) arr.splice(idx,1);
      }else{
        arr.push(id);
      }
      localStorage.setItem(key, JSON.stringify(arr));
      setSaved(!saved);
    }catch(e){}
  };
  return (
    <button onClick={toggle} className="text-sm rounded-lg border px-2 py-1 hover:bg-black/5 dark:hover:bg-white/10">
      {saved ? "★ نشان‌شده" : "☆ نشان کردن"}
    </button>
  );
}
