export default function ContactPage(){
  return (
    <main className="container py-10">
      <h1 className="text-3xl font-extrabold mb-4">اطلاعات تماس</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-5">
          <h2 className="font-bold text-lg mb-2">راه‌های ارتباطی</h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>ایمیل: <a className="link" href="mailto:hello@faroadmap.local">hello@faroadmap.local</a></li>
            <li>گیت‌هاب: <a className="link" href="https://github.com" target="_blank">GitHub</a></li>
            <li>لینکدین: <a className="link" href="https://www.linkedin.com/in/mbzolfaghari" target="_blank">mbzolfaghari</a></li>
          </ul>
        </div>
        <div className="card p-5">
          <h2 className="font-bold text-lg mb-3">فرم تماس</h2>
          <form className="grid gap-3 max-w-lg">
            <input className="rounded-xl border px-4 py-2" placeholder="نام" />
            <input className="rounded-xl border px-4 py-2" placeholder="ایمیل" />
            <textarea className="rounded-xl border px-4 py-2" rows={5} placeholder="پیام شما"></textarea>
            <button type="button" className="btn">ارسال</button>
          </form>
        </div>
      </div>
    </main>
  );
}
