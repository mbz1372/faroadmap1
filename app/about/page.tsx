export default function AboutPage(){
  return (
    <main className="container py-10">
      <h1 className="text-3xl font-extrabold mb-4">دربارهٔ FARoadmap</h1>
      <div className="prose rtl dark:prose-invert max-w-none leading-8">
        <p>FARoadmap مجموعه‌ای از نقشه‌های راه آموزشی فارسی است برای یادگیری مسیرهای شغلی حوزهٔ فناوری.</p>
        <h3>ماموریت</h3>
        <ul>
          <li>مسیرهای ساختاریافته و به‌روز</li>
          <li>پیشرفت قابل‌پیگیری (XP/Streak/Progress)</li>
          <li>محتوای Markdown و بومی‌سازی فارسی/انگلیسی</li>
        </ul>
        <p className="text-sm text-gray-500">این پروژه الهام‌گرفته از roadmap.sh است اما محتوای آن مستقل و بومی است.</p>
      </div>
    </main>
  );
}
