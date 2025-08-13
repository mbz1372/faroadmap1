export default function Footer(){
  return (
    <footer className="border-t border-white/10 mt-10 print:hidden">
      <div className="container py-8 text-sm text-gray-700 dark:text-gray-300 flex items-center justify-between">
        <p>© {new Date().getFullYear()} FARoadmap</p>
        <div className="flex gap-3">
          <a className="link" href="/about">درباره</a>
          <a className="link" href="/contact">تماس</a>
          <a className="link" href="/privacy">حریم خصوصی</a>
        </div>
      </div>
    </footer>
  );
}
