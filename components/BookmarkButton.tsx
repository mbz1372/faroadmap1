"use client";
import { useEffect, useState } from "react";
export default function BookmarkButton({ slug, nodeId }:{ slug:string; nodeId:string }){
  const id = `${slug}:${nodeId}`, key="bookmarks";
  const [saved, setSaved] = useState(false);
  useEffect(()=>{ try{ setSaved((JSON.parse(localStorage.getItem(key)||"[]") as string[]).includes(id)); }catch(e){} },[id]);
  const toggle=()=>{ try{ const arr = JSON.parse(localStorage.getItem(key)||"[]"); const i=arr.indexOf(id); i>-1?arr.splice(i,1):arr.push(id); localStorage.setItem(key, JSON.stringify(arr)); setSaved(!saved);}catch(e){} };
  return <button onClick={toggle} className="text-xs rounded-lg border border-white/20 px-2 py-1 hover:bg-white/15">{saved?"★ نشان‌شده":"☆ نشان کردن"}</button>;
}
