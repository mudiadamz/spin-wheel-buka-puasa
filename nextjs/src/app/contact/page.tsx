export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-md px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-emerald-800">Contact</h1>

      <div className="space-y-4 text-sm leading-relaxed text-emerald-700/80">
        <p>
          Ada saran, masukan, atau pertanyaan? Jangan ragu untuk menghubungi kami.
        </p>

        <div className="space-y-3">
          <a
            href="https://lynk.id/adm.uiux"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 rounded-xl border border-amber-200 bg-white p-4 shadow-sm transition hover:bg-amber-50"
          >
            <span className="text-lg">🔗</span>
            <div>
              <p className="font-semibold text-emerald-800">Hubungi Kami</p>
              <p className="text-amber-700 underline">lynk.id/adm.uiux</p>
            </div>
          </a>

          <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-white p-4 shadow-sm">
            <span className="text-lg">💡</span>
            <div>
              <p className="font-semibold text-emerald-800">Saran Fitur</p>
              <p>Punya ide fitur baru? Kirimkan saran kamu melalui link di atas!</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
