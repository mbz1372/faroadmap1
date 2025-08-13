"use client";
import { useRouter } from "next/navigation";
import { books } from "@/data/books";

export default function BookDetail({ params }:{ params: { id:string } }){
  const b = books.find(x => x.id === params.id);
  const router = useRouter();
  if(!b) return <main className="container py-10"><p>کتاب پیدا نشد.</p></main>;
  return (
    <main className="container py-10">
      <button className="btn mb-4" onClick={()=>router.back()}>بازگشت</button>
      <div className="grid gap-6 md:grid-cols-[320px_1fr]">
        <div className="card p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={b.cover} alt={b.title} className="w-full rounded-xl mb-3"/>
          <h1 className="text-2xl font-extrabold mb-1">{b.title}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">{b.author}</p>
          <p className="text-sm mt-3">{b.summary}</p>
          <a className="btn mt-4" href={b.file}>دانلود مستقیم</a>
        </div>
        <div className="card p-4">
          <h2 className="font-bold mb-2">پیش‌نمایش</h2>
          <iframe src={b.file} className="w-full h-[70vh] rounded-xl border" />
        </div>
      </div>
    </main>
  );
}
