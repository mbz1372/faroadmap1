export default function PrivacyPage(){
  return (
    <main className="container py-10">
      <h1 className="text-3xl font-extrabold mb-4">حریم خصوصی</h1>
      <div className="prose rtl dark:prose-invert max-w-none">
        <p>ما حریم خصوصی کاربران را جدی می‌گیریم. اطلاعات فنی برای بهبود عملکرد و امنیت ثبت می‌شود.</p>
        <h3>کوکی‌ها و ذخیره‌سازی محلی</h3>
        <p>برای حالت تیره/روشن، پیشرفت و نشان‌ها از LocalStorage استفاده می‌کنیم؛ این داده‌ها فقط روی مرورگر شماست.</p>
        <p className="text-sm text-gray-500">آخرین به‌روزرسانی: 2025-08-13</p>
      </div>
    </main>
  );
}
