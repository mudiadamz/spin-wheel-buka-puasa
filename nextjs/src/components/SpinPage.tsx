"use client";

import { useCallback, useState } from "react";
import { SpinWheel } from "./SpinWheel";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { ManualFoodPicker } from "./ManualFoodPicker";
import { RamadanOrnaments } from "./RamadanOrnaments";
import { getInitialItems, shuffleAndPick, type FoodItem } from "@/data/foods";

export function SpinPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [items, setItems] = useState<FoodItem[]>(() => getInitialItems(8));
  const [manualPickerOpen, setManualPickerOpen] = useState(false);

  const refreshFoods = useCallback(() => {
    setItems(shuffleAndPick(8));
  }, []);

  const applyManualSelection = useCallback((selected: FoodItem[]) => {
    setItems(selected);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-emerald-50 via-amber-50/30 to-teal-50">
      <RamadanOrnaments />
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center px-4 py-6">
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="text-amber-400/60 text-lg">🌙</span>
          <p className="text-center text-sm text-emerald-800/80">
            Pilih makanan untuk berbuka puasa hari ini! 🍽️
          </p>
          <span className="text-amber-400/60 text-lg">⭐</span>
        </div>

        <SpinWheel items={items} />

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={refreshFoods}
            className="flex items-center gap-2 rounded-full border-2 border-amber-300 bg-amber-50 px-5 py-2.5 font-medium text-amber-800 transition hover:bg-amber-100"
          >
            🔄 Refresh Jenis Makanan
          </button>
          <button
            onClick={() => setManualPickerOpen(true)}
            className="flex items-center gap-2 rounded-full border-2 border-emerald-300 bg-emerald-50 px-5 py-2.5 font-medium text-emerald-800 transition hover:bg-emerald-100"
          >
            ✏️ Pilih Manual
          </button>
        </div>

        {manualPickerOpen && (
          <ManualFoodPicker
            currentItems={items}
            onApply={applyManualSelection}
            onClose={() => setManualPickerOpen(false)}
          />
        )}
      </main>

      <section id="history" className="mx-auto w-full max-w-md px-4 py-8">
        <h2 className="mb-4 text-lg font-bold text-emerald-800">History Spin</h2>
        <p className="text-sm text-emerald-700/80">Lihat di menu sidebar</p>
      </section>

      <section id="about" className="mx-auto w-full max-w-md px-4 py-8">
        <h2 className="mb-4 text-lg font-bold text-emerald-800">About</h2>
        <p className="text-sm text-emerald-700/80">
          Spin Wheel Buka Puasa membantu kamu memilih menu berbuka dengan cara yang seru!
          Putar roda dan dapatkan kombinasi main course, side dish, dessert, dan minuman.
        </p>
      </section>

      <section id="contact" className="mx-auto w-full max-w-md px-4 py-8">
        <h2 className="mb-4 text-lg font-bold text-emerald-800">Contact</h2>
        <p className="text-sm text-emerald-700/80">
          Ada saran atau pertanyaan? Hubungi kami melalui email atau media sosial.
        </p>
      </section>

      <section id="privacy" className="mx-auto w-full max-w-md px-4 py-8">
        <h2 className="mb-4 text-lg font-bold text-emerald-800">Privacy Policy</h2>
        <p className="text-sm text-emerald-700/80">
          Data history spin disimpan di perangkat kamu (localStorage). Kami tidak mengumpulkan
          data pribadi. Login dengan Google opsional untuk sinkronisasi history.
        </p>
      </section>

      <section id="jadwal" className="mx-auto w-full max-w-md px-4 py-8">
        <h2 className="mb-4 text-lg font-bold text-emerald-800">30 Hari Jadwal Berbuka</h2>
        <p className="text-sm text-emerald-700/80">
          Jadwal buka puasa mengikuti waktu setempat. Gunakan spin wheel setiap hari
          untuk variasi menu selama 30 hari Ramadan!
        </p>
      </section>

      <footer className="relative border-t border-amber-200/50 bg-emerald-900/20 py-4 text-center text-xs text-emerald-800/70">
        <div className="mb-2 flex justify-center gap-4 text-amber-500/50">
          <span>🌙</span>
          <span>⭐</span>
          <span>🕌</span>
          <span>⭐</span>
          <span>🌙</span>
        </div>
        Selamat menunaikan ibadah puasa 🌙
      </footer>
    </div>
  );
}
