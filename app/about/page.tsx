export default function AboutPage(){
  return (
    <main className="container py-10">
      <h1 className="text-3xl font-extrabold mb-4">دربارهٔ FARoadmap</h1>
      <div className="prose rtl dark:prose-invert max-w-none leading-8">
        <p>
          FARoadmap مجموعه‌ای از نقشه‌های راه آموزشی فارسی است؛ هدف ما ارائهٔ مسیرهای عملی، به‌روز و قابل اقدام
          برای یادگیری مهارت‌های فنی است. محتوای سایت به‌صورت تدریجی تکمیل می‌شود و تمرکز آن روی تجربهٔ
          یادگیری قابل پیگیری (Progress) و تمرین‌های کاربردی است.
        </p>
        <h3>چرا FARoadmap؟</h3>
        <ul>
          <li>تمرکز روی مسیرهای یادگیری ساختاریافته</li>
          <li>حالت تیره/روشن، نسخه چاپ و جستجوی هوشمند</li>
          <li>امکان افزودن محتوای Markdown برای هر نود</li>
        </ul>
        <p className="text-sm text-gray-500">
          توجه: ما به حقوق نشر احترام می‌گذاریم و صرفاً محتوای اصلی و قانونی منتشر می‌کنیم.
        </p>
      </div>
    </main>
  );
}
