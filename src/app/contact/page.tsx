export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="text-2xl text-ink">Contact</h1>
      <div className="mt-4 rounded-xl border border-ink/10 bg-offwhite p-6">
        <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="md:col-span-1">
            <label className="block text-xs text-ink/60">Name</label>
            <input className="mt-1 w-full rounded-md border border-ink/10 bg-white px-3 py-2 text-sm" />
          </div>
          <div className="md:col-span-1">
            <label className="block text-xs text-ink/60">Email</label>
            <input type="email" className="mt-1 w-full rounded-md border border-ink/10 bg-white px-3 py-2 text-sm" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs text-ink/60">Message</label>
            <textarea rows={5} className="mt-1 w-full rounded-md border border-ink/10 bg-white px-3 py-2 text-sm" />
          </div>
          <div className="md:col-span-2">
            <button className="rounded-md bg-ink px-5 py-3 text-sm text-offwhite hover:bg-ink/90">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
