# FARoadmap Starter (Next.js + Tailwind + TypeScript)

A clean, RTL-friendly starter that mimics the structure and feel of **roadmap.sh**.
Ready for Persian content, with a sidebar of roadmaps and expandable topics.

## 🚀 Quick Start

```bash
npm i
npm run dev
# open http://localhost:3000
```

## 🧩 Tech
- Next.js 14 (App Router)
- TailwindCSS 3
- TypeScript

## 📁 Structure
- `app/` — App Router pages, layout, and global styles
- `components/` — Sidebar, RoadmapTree, etc.
- `data/roadmaps.ts` — Sample roadmaps data (edit/extend here)
- `public/` — Logo & favicon

## 📝 Add a roadmap
Edit `data/roadmaps.ts` and add a new object with `slug`, `title`, `description`, `tags`, and `topics`.
Then open `/?r=your-slug`

## ☁️ Deploy
1. Push to GitHub
2. Import repo in Vercel
3. Set **Build Command**: `npm run build` and **Output**: `.next` (defaults are fine)

## 🛣️ Next steps
- Replace sample data with real content
- Add dynamic routes like `/roadmaps/[slug]`
- Add Markdown support for topic descriptions
- Add search indexing (e.g., Fuse.js)
