export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-md px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-emerald-800">Privacy Policy</h1>

      <div className="space-y-4 text-sm leading-relaxed text-emerald-700/80">
        <section>
          <h2 className="mb-2 font-bold text-emerald-800">Data yang Disimpan</h2>
          <p>
            Kami hanya menyimpan data history spin di perangkat kamu (localStorage).
            Data ini tidak dikirim ke server manapun.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-bold text-emerald-800">Cookies</h2>
          <p>
            Aplikasi ini tidak menggunakan cookies untuk tracking. Hanya localStorage
            yang digunakan untuk menyimpan preferensi dan history.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-bold text-emerald-800">Login Google (Opsional)</h2>
          <p>
            Fitur login dengan Google bersifat opsional dan digunakan hanya untuk
            sinkronisasi history spin antar perangkat. Kami tidak menyimpan data
            pribadi selain nama dan email untuk identifikasi akun.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-bold text-emerald-800">Keamanan Data</h2>
          <p>
            Kami berkomitmen menjaga keamanan data pengguna. Data yang tersimpan
            di localStorage hanya bisa diakses oleh browser kamu sendiri.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-bold text-emerald-800">Perubahan Kebijakan</h2>
          <p>
            Kebijakan privasi ini dapat diperbarui sewaktu-waktu. Perubahan akan
            diumumkan melalui halaman ini.
          </p>
        </section>
      </div>
    </main>
  );
}
