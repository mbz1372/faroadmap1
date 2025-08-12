# FARoadmap MAX — نزدیک‌ترین نسخه به roadmap.sh (Next.js 14 + Tailwind, RTL)

## قابلیت‌ها
- مسیرهای داینامیک: `/roadmaps/[slug]` و `/roadmaps/[slug]/[nodeId]`
- جستجوی هوشمند با Fuse.js + هایلایت نتایج
- نشان‌کردن نودها + پیگیری پیشرفت کاربر (LocalStorage)
- حالت تیره/روشن، گرادیانت پس‌زمینه، کارت‌های مینیمال
- نسخه پرینت `/roadmaps/[slug]/print`
- Sitemap و robots.txt آماده SEO
- سازگار با Vercel (ESLint غیرفعال در build)

## اجرای محلی
```bash
npm i
npm run dev
# http://localhost:3000
```

## دیپلوی
- ریپو را در GitHub پوش کنید و در Vercel ایمپورت کنید. تنظیمات پیش‌فرض کافی است.

## محتوا
- فایل `data/roadmaps.ts` را برای اضافه/ویرایش موضوعات تغییر دهید.
- توضیحات نودها Markdown هستند (با `marked` رندر می‌شوند).

## ایده‌های توسعه بعدی
- ایمپورت Markdown/MDX از فایل‌ها
- همگام‌سازی پیشرفت با حساب کاربر (Supabase/Firebase)
- صفحه Timeline به‌روزرسانی‌های هر roadmap
