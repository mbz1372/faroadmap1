import { notFound } from "next/navigation";
import fs from 'node:fs/promises';
import path from 'node:path';
import { roadmaps } from "@/data/roadmaps";
import Link from "next/link";
import { marked } from "marked";
import ProgressControls from "@/components/ProgressControls";
import BookmarkButton from "@/components/BookmarkButton";

type Props = { params: { slug: string; nodeId: string } };
export function generateStaticParams(){
  const params: { slug:string; nodeId:string }[] = [];
  roadmaps.forEach(r => {
    const walk = (t:any) => { params.push({ slug:r.slug, nodeId:t.id }); (t.children||[]).forEach(walk); };
    r.topics.forEach(walk);
  });
  return params;
}

export default async function NodePage({ params }: Props){
  const r = roadmaps.find(x => x.slug === params.slug);
  if(!r) return notFound();
  const find = (arr:any[]):any => {
    for(const t of arr){
      if(t.id===params.nodeId) return t;
      const f = t.children && find(t.children);
      if(f) return f;
    }
  };
  const node = find(r.topics);
// Try to load Markdown content from /content/roadmaps/{slug}/{nodeId}.md
let fileContent: string | null = null;
try {
  const filePath = path.join(process.cwd(), "content", "roadmaps", r.slug, `${params.nodeId}.md`);
  fileContent = await fs.readFile(filePath, "utf-8");
} catch (e) { /* fallback to inline description */ }

  if(!node) return notFound();

  return (
    <main className="container py-10">
      <div className="text-sm text-gray-500 mb-2">
        <Link href={`/roadmaps/${r.slug}`} className="link">بازگشت به نقشه</Link>
      </div>
      <div className="flex items-center gap-3 mb-2">
        <h1 className="text-2xl font-extrabold">{node.title}</h1>
        <ProgressControls slug={r.slug} nodeId={node.id} />
        <BookmarkButton slug={r.slug} nodeId={node.id} />
      </div>
      {fileContent ? (
        <article className="prose rtl max-w-none dark:prose-invert" dangerouslySetInnerHTML={{__html: marked.parse(fileContent)}} />
      ) : node.description ? (
        <article className="prose rtl max-w-none dark:prose-invert" dangerouslySetInnerHTML={{__html: marked.parse(node.description)}} />
      ) : (
        <p className="text-gray-600">برای این نود هنوز توضیحی ثبت نشده.</p>
      )}
    </main>
  );
}
