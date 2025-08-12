import Link from "next/link";
export default function NotFound(){
  return (
    <main className="container py-20 text-center">
      <h1 className="text-4xl font-extrabold mb-4">صفحه پیدا نشد</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">صفحه‌ای که دنبال آن هستید وجود ندارد یا منتقل شده است.</p>
      <Link href="/" className="rounded-xl border px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10">بازگشت به صفحه اصلی</Link>
    </main>
  );
}
