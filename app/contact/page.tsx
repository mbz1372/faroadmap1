export default function ContactPage(){
  return (
    <main className="container py-10">
      <h1 className="text-2xl font-bold mb-3">تماس با ما</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">برای همکاری، پیشنهاد محتوا، یا گزارش خطا با ما در ارتباط باشید.</p>
      <div className="card p-5 max-w-lg">
        <form className="grid gap-3">
          <input className="rounded-xl border px-4 py-2" placeholder="نام"/>
          <input className="rounded-xl border px-4 py-2" placeholder="ایمیل"/>
          <textarea className="rounded-xl border px-4 py-2" placeholder="پیام" rows={5}></textarea>
          <button type="button" className="rounded-xl border px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10">ارسال</button>
        </form>
      </div>
    </main>
  );
}
