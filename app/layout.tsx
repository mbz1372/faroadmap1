import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FARoadmap — Persian Roadmaps",
  description: "نسخه‌ی کامل و نزدیک به roadmap.sh با قابلیت‌های پیشرفته.",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{__html:`
          try{
            const s = localStorage.getItem("theme");
            const m = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if(s==="dark" || (!s && m)) document.documentElement.classList.add("dark");
          }catch(e){}
        `}} />
        <div className="min-h-screen gradient-bg">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
