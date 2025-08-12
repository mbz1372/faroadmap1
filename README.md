# FARoadmap Pro — Next.js + Tailwind (RTL, Dark Mode)

یک نسخه‌ی نزدیک‌تر به ظاهر roadmap.sh با مسیرهای داینامیک، کارت‌ها، هدر/فوتر حرفه‌ای، تم تاریک، و درخت موضوعات باز/بسته‌شونده.

## راه‌اندازی
```bash
npm i
npm run dev
# http://localhost:3000
```

## دیپلوی در Vercel
- پیش‌فرض‌ها کافی است. در صورت فعال بودن ESLint در CI، در `next.config.mjs` غیرفعال شده تا build قطع نشود.

## محتوا
- محتوای نمونه در `data/roadmaps.ts` است. ساختار:
```ts
type RoadmapTopic = {
  id: string;
  title: string;
  description?: string; // Markdown
  children?: RoadmapTopic[];
}
```
- برای Markdown از `marked` استفاده شده است.

## TODOهای پیشنهادی
- جستجوی پیشرفته با Fuse.js
- صفحه جزئیات هر نود
- ایمپورت Markdown/MDX از فایل
- پین/نشان‌گذاری موضوعات
