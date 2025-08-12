export default function Highlight({ text, query }:{ text:string; query:string }){
  if(!query) return <>{text}</>;
  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return <>{parts.map((p,i)=> p.toLowerCase()===query.toLowerCase() ? <mark key={i} className="bg-yellow-200 dark:bg-yellow-500/40 rounded px-1">{p}</mark> : <span key={i}>{p}</span>)}</>;
}
