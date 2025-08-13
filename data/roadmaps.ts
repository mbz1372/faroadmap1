export const roadmaps = [
  {
    slug: "frontend",
    title: "نقشه راه فرانت‌اند",
    description: "مسیر یادگیری توسعه فرانت‌اند از مبانی وب تا فریم‌ورک‌ها و ابزارهای حرفه‌ای.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    topics: [
      {
        id: "fundamentals",
        title: "مبانی وب",
        description: `با HTML ساختار بده، با CSS استایل بده، و با JS تعامل بساز.`,
        children: [
          { id: "html", title: "HTML", description: `- تگ‌های پایه\n- سمانتیک\n- فرم‌ها` },
          { id: "css", title: "CSS (Flex/Grid, Responsive)", description: `- Flex/Grid\n- Media Query\n- متغیرهای CSS` },
          { id: "js-basics", title: "JavaScript پایه", description: `- Types\n- Scope/Hoisting\n- DOM API` }
        ]
      },
      {
        id: "ecosystem",
        title: "اکوسیستم فرانت‌اند",
        children: [
          { id: "git", title: "Git & GitHub" },
          { id: "ts", title: "TypeScript" },
          { id: "bundlers", title: "Vite / Webpack" }
        ]
      },
      {
        id: "frameworks",
        title: "فریم‌ورک‌ها",
        children: [
          { id: "react", title: "React" },
          { id: "next", title: "Next.js" },
          { id: "state", title: "State Management (Zustand/Redux)" }
        ]
      },
      {
        id: "quality",
        title: "کیفیت و تست",
        children: [
          { id: "jest", title: "Jest" },
          { id: "rtl", title: "React Testing Library" },
          { id: "e2e", title: "Playwright" }
        ]
      },
      {
        id: "ops",
        title: "انتشار و مانیتورینگ",
        children: [
          { id: "vercel", title: "Vercel" },
          { id: "monitoring", title: "Sentry / LogRocket" },
          { id: "perf", title: "Performance Basics" }
        ]
      }
    ]
  },
  {
    slug: "backend",
    title: "نقشه راه بک‌اند",
    description: "از مفاهیم سرور تا دیتابیس‌ها و معماری‌های حرفه‌ای.",
    tags: ["Node.js", "API", "Databases"],
    topics: [
      { id: "lang", title: "یک زبان (Node.js/Go/Python)" },
      { id: "rest", title: "طراحی API (REST/GraphQL)" },
      { id: "db", title: "دیتابیس‌ها (SQL/NoSQL)" },
      { id: "auth", title: "احراز هویت و امنیت" },
      { id: "ci", title: "CI/CD" },
      { id: "cloud", title: "استقرار: Docker/K8s/Cloud" }
    ]
  },
  {
    slug: "devops",
    title: "نقشه راه DevOps",
    description: "ابزارها و فرهنگ برای تحویل سریع و پایدار.",
    tags: ["Docker", "Kubernetes", "CI/CD"],
    topics: [
      { id: "linux", title: "Linux Basics" },
      { id: "net", title: "Networking" },
      { id: "container", title: "Containers (Docker)" },
      { id: "k8s", title: "Kubernetes" },
      { id: "obs", title: "Observability" }
    ]
  },
  {
    slug: "product-management",
    title: "مدیریت محصول",
    description: "مسیر یادگیری برای تبدیل شدن به یک مدیر محصول موفق",
    tags: ["Discovery", "Strategy", "Execution"],
    topics: [
      { id: "intro", title: "مقدمه", description: `- نقش PM\n- تفاوت با مدیر پروژه` },
      { id: "market-research", title: "تحقیقات بازار", description: `- تحلیل رقبا\n- مصاحبه با مشتریان\n- پرسونای کاربر` },
      { id: "roadmapping", title: "نقشه راه و اولویت‌بندی", description: `- Roadmap\n- MVP\n- RICE/MoSCoW` },
      { id: "design-dev", title: "طراحی و توسعه", description: `- همکاری Design/Engineering\n- پروتوتایپ\n- بازخورد` },
      { id: "launch-iteration", title: "لانچ و تکرار", description: `- لانچ اولیه\n- KPI\n- بهبود بر اساس داده` }
    ]
  }
];
