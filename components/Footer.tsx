export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 mt-10">
      <div className="container py-8 text-sm text-gray-600 dark:text-gray-300">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} FARoadmap — الهام‌گرفته از roadmap.sh</p>
          <div className="flex gap-3">
            <a className="link" href="#">درباره</a>
            <a className="link" href="#">تماس</a>
            <a className="link" href="#">حریم خصوصی</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
