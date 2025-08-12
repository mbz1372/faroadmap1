import { ReactNode } from "react";
import clsx from "clsx";

export function NodeCard({
  title, children, level=0
}: { title: string; children?: ReactNode; level?: number }) {
  return (
    <div className={clsx("card p-4 mb-3", level === 0 ? "border-brand.blue/20" : "border-gray-100")}>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2.5 h-2.5 rounded-full" style={{background: level===0? "#1e88e5" : level===1? "#00b894" : "#ffd166"}}/>
        <h3 className={clsx("font-bold", level===0 ? "text-lg" : "text-base")}>{title}</h3>
      </div>
      {children}
    </div>
  );
}
