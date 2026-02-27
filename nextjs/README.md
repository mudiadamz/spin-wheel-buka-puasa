# Spin Wheel Buka Puasa - Next.js

Aplikasi spin wheel untuk memilih makanan berbuka puasa, dibangun dengan Next.js 16, React 19, dan Tailwind CSS.

## Fitur

- **Spin wheel 3D** – Roda berwarna-warni dengan efek 3D
- **Animasi realistis** – Berputar seperti roda asli, melambat saat selesai (ease-out)
- **4 kategori makanan** – Main course, side dish, dessert, minuman
- **History spin** – Disimpan di localStorage
- **Refresh makanan** – Tombol untuk mengacak ulang pilihan
- **Sidebar menu** – History, About, Contact, Privacy Policy, Jadwal 30 Hari
- **Tema Ramadan** – Warna hijau-emerald dan amber khas Ramadan
- **Mobile-first** – Max width, responsive

## Menjalankan

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Struktur

```
src/
├── app/           # App Router (layout, page)
├── components/    # SpinWheel, Header, Sidebar, SpinPage
├── data/          # Data makanan (foods.ts)
└── lib/           # localStorage helpers (storage.ts)
```

## Catatan

- Login dengan Google dan notifikasi Firebase dapat ditambahkan di kemudian hari
- History saat ini hanya di localStorage (client-side)
