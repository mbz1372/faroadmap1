export type RoadmapTopic = {
  id: string;
  title: string;
  description?: string;
  badge?: string;
  children?: RoadmapTopic[];
};

export type Roadmap = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  topics: RoadmapTopic[];
};

export const roadmaps: Roadmap[] = [
  {
    slug: "frontend",
    title: "نقشه راه فرانت‌اند",
    description: "مسیر یادگیری توسعه فرانت‌اند از مبانی وب تا فریم‌ورک‌ها و ابزارهای حرفه‌ای.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    topics: [
      {
        id: "fundamentals",
        title: "مبانی وب",
        description: "ساختار صفحات، استایل‌دهی و تعامل اولیه.",
        children: [
          { id: "html", title: "HTML", badge: "شروع" },
          { id: "css", title: "CSS (Flex/Grid, Responsive)" },
          { id: "js-basics", title: "JavaScript پایه" },
        ],
      },
      {
        id: "frontend-ecosystem",
        title: "اکوسیستم فرانت‌اند",
        children: [
          { id: "git", title: "Git & GitHub" },
          { id: "ts", title: "TypeScript" },
          { id: "bundlers", title: "Vite / Webpack" },
        ],
      },
      {
        id: "frameworks",
        title: "فریم‌ورک‌ها",
        children: [
          { id: "react", title: "React" },
          { id: "next", title: "Next.js" },
          { id: "state", title: "State Management (Zustand/Redux)" },
        ],
      },
      {
        id: "testing",
        title: "تست و کیفیت",
        children: [
          { id: "jest", title: "Jest" },
          { id: "rtl", title: "React Testing Library" },
          { id: "e2e", title: "Playwright" },
        ],
      },
      {
        id: "deploy",
        title: "انتشار و مانیتورینگ",
        children: [
          { id: "vercel", title: "Vercel" },
          { id: "monitoring", title: "Sentry / LogRocket" },
          { id: "perf", title: "Performance Basics" },
        ],
      },
    ],
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
      { id: "cloud", title: "استقرار: Docker/K8s/Cloud" },
    ],
  },
];
