import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FARoadmap — Persian Roadmaps",
  description: "نسخه فارسی نقشه‌های راه یادگیری، الهام‌گرفته از roadmap.sh",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${inter.className} rtl`}>
        <div className="min-h-screen gradient-bg">
          <Header />
          {children}
          <Footer />
        </div>
        <script dangerouslySetInnerHTML={{__html:`
          (function(){
            try{
              const s = localStorage.getItem("theme");
              const m = window.matchMedia("(prefers-color-scheme: dark)").matches;
              if(s==="dark" || (!s && m)) document.documentElement.classList.add("dark");
            }catch(e){}
          })();
        `}} />
      </body>
    </html>
  );
}
