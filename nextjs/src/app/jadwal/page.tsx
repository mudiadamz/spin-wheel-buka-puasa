"use client";

const JADWAL_2026 = [
  { hari: 1, tanggal: "1 Maret 2026", imsak: "04:25", berbuka: "18:10" },
  { hari: 2, tanggal: "2 Maret 2026", imsak: "04:25", berbuka: "18:10" },
  { hari: 3, tanggal: "3 Maret 2026", imsak: "04:26", berbuka: "18:09" },
  { hari: 4, tanggal: "4 Maret 2026", imsak: "04:26", berbuka: "18:09" },
  { hari: 5, tanggal: "5 Maret 2026", imsak: "04:26", berbuka: "18:08" },
  { hari: 6, tanggal: "6 Maret 2026", imsak: "04:27", berbuka: "18:08" },
  { hari: 7, tanggal: "7 Maret 2026", imsak: "04:27", berbuka: "18:07" },
  { hari: 8, tanggal: "8 Maret 2026", imsak: "04:27", berbuka: "18:07" },
  { hari: 9, tanggal: "9 Maret 2026", imsak: "04:28", berbuka: "18:06" },
  { hari: 10, tanggal: "10 Maret 2026", imsak: "04:28", berbuka: "18:06" },
  { hari: 11, tanggal: "11 Maret 2026", imsak: "04:28", berbuka: "18:05" },
  { hari: 12, tanggal: "12 Maret 2026", imsak: "04:29", berbuka: "18:05" },
  { hari: 13, tanggal: "13 Maret 2026", imsak: "04:29", berbuka: "18:04" },
  { hari: 14, tanggal: "14 Maret 2026", imsak: "04:29", berbuka: "18:04" },
  { hari: 15, tanggal: "15 Maret 2026", imsak: "04:30", berbuka: "18:03" },
  { hari: 16, tanggal: "16 Maret 2026", imsak: "04:30", berbuka: "18:03" },
  { hari: 17, tanggal: "17 Maret 2026", imsak: "04:30", berbuka: "18:02" },
  { hari: 18, tanggal: "18 Maret 2026", imsak: "04:31", berbuka: "18:02" },
  { hari: 19, tanggal: "19 Maret 2026", imsak: "04:31", berbuka: "18:01" },
  { hari: 20, tanggal: "20 Maret 2026", imsak: "04:31", berbuka: "18:01" },
  { hari: 21, tanggal: "21 Maret 2026", imsak: "04:32", berbuka: "18:00" },
  { hari: 22, tanggal: "22 Maret 2026", imsak: "04:32", berbuka: "18:00" },
  { hari: 23, tanggal: "23 Maret 2026", imsak: "04:32", berbuka: "17:59" },
  { hari: 24, tanggal: "24 Maret 2026", imsak: "04:33", berbuka: "17:59" },
  { hari: 25, tanggal: "25 Maret 2026", imsak: "04:33", berbuka: "17:58" },
  { hari: 26, tanggal: "26 Maret 2026", imsak: "04:33", berbuka: "17:58" },
  { hari: 27, tanggal: "27 Maret 2026", imsak: "04:34", berbuka: "17:57" },
  { hari: 28, tanggal: "28 Maret 2026", imsak: "04:34", berbuka: "17:57" },
  { hari: 29, tanggal: "29 Maret 2026", imsak: "04:34", berbuka: "17:56" },
  { hari: 30, tanggal: "30 Maret 2026", imsak: "04:35", berbuka: "17:56" },
];

export default function JadwalPage() {
  return (
    <main className="mx-auto w-full max-w-md px-4 py-8">
      <h1 className="mb-2 text-2xl font-bold text-emerald-800">30 Hari Jadwal Berbuka</h1>
      <p className="mb-6 text-xs text-emerald-600/70">
        * Perkiraan waktu Jakarta (WIB). Sesuaikan dengan lokasi kamu.
      </p>

      <div className="overflow-hidden rounded-xl border border-amber-200 shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-emerald-800 text-white">
              <th className="px-3 py-2 text-left font-semibold">Hari</th>
              <th className="px-3 py-2 text-left font-semibold">Tanggal</th>
              <th className="px-3 py-2 text-center font-semibold">Imsak</th>
              <th className="px-3 py-2 text-center font-semibold">Buka</th>
            </tr>
          </thead>
          <tbody>
            {JADWAL_2026.map((j) => (
              <tr
                key={j.hari}
                className="border-t border-amber-100 odd:bg-white even:bg-amber-50/40"
              >
                <td className="px-3 py-2 font-semibold text-emerald-800">{j.hari}</td>
                <td className="px-3 py-2 text-emerald-700">{j.tanggal}</td>
                <td className="px-3 py-2 text-center text-emerald-600">{j.imsak}</td>
                <td className="px-3 py-2 text-center font-semibold text-amber-700">{j.berbuka}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
