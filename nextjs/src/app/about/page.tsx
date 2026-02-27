export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-md px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-emerald-800">About</h1>

      <div className="space-y-4 text-sm leading-relaxed text-emerald-700/80">
        <p>
          <strong className="text-emerald-800">Spin Wheel Buka Puasa</strong> membantu kamu
          memilih menu berbuka dengan cara yang seru! Putar roda dan dapatkan pilihan makanan
          dari berbagai cuisine dunia.
        </p>
        <p>
          Aplikasi ini menyediakan lebih dari 100 pilihan makanan dari 15 jenis cuisine:
          Indonesia, Western, Chinese, Japanese, Korean, Thai, Indian, Middle Eastern,
          Mexican, Italian, French, American, Vietnamese, Spanish, dan Turkish.
        </p>
        <p>
          Kamu bisa mengacak makanan dengan tombol Refresh, atau memilih sendiri makanan
          yang ingin ditampilkan di wheel melalui fitur Pilih Manual.
        </p>

        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50/50 p-4">
          <h2 className="mb-2 font-bold text-emerald-800">Developer</h2>
          <a
            href="https://lynk.id/adm.uiux"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-amber-700 underline hover:text-amber-900"
          >
            lynk.id/adm.uiux →
          </a>
        </div>

        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50/50 p-4">
          <h2 className="mb-2 font-bold text-emerald-800">Fitur</h2>
          <ul className="list-inside list-disc space-y-1">
            <li>Spin wheel interaktif dengan animasi</li>
            <li>119+ makanan dari 15 cuisine</li>
            <li>Refresh acak atau pilih manual</li>
            <li>History spin tersimpan otomatis</li>
            <li>Jadwal buka puasa 30 hari</li>
            <li>Tampilan khas Ramadan</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
