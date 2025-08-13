import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { I18nProvider } from "@/lib/i18n";
import { Vazirmatn, Inter } from "next/font/google";

const vazir = Vazirmatn({ subsets: ["arabic"], variable: "--font-vazir", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "FARoadmap — Persian Roadmaps",
  description: "نسخهٔ کامل، دوزبانه و بدون خطا با پیشرفت کاربر و کتابخانه.",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${vazir.variable} ${inter.variable}`} style={{fontFamily:"var(--font-vazir), var(--font-inter), system-ui"}}>
        <script dangerouslySetInnerHTML={{__html:`
          try{
            const s = localStorage.getItem("theme");
            const m = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if(s==="dark" || (!s && m)) document.documentElement.classList.add("dark");
          }catch(e){}
        `}} />
        <div className="min-h-screen gradient-bg">
          <Header />
          <I18nProvider>{children}</I18nProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
