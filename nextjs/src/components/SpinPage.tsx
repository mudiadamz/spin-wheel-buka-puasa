"use client";

import { useCallback, useState } from "react";
import { SpinWheel } from "./SpinWheel";
import {
  shuffleAndPick,
  CUISINE_LABELS,
  type FoodItem,
  type Cuisine,
} from "@/data/foods";
import { playRefresh } from "@/lib/sounds";

const CUISINE_OPTIONS = Object.entries(CUISINE_LABELS) as [Cuisine, string][];

const WHEEL_SIZES = [4, 6, 8, 10, 12];

function pickRandomCuisine(): Cuisine {
  const keys = CUISINE_OPTIONS.map(([k]) => k);
  return keys[Math.floor(Math.random() * keys.length)];
}

const INITIAL_CUISINE = pickRandomCuisine();

export function SpinPage() {
  const [wheelSize, setWheelSize] = useState(8);
  const [selectedCuisine, setSelectedCuisine] = useState<Cuisine | "all">(INITIAL_CUISINE);
  const [items, setItems] = useState<FoodItem[]>(() => shuffleAndPick(8, INITIAL_CUISINE));

  const refreshFoods = useCallback(() => {
    playRefresh();
    const cuisines = CUISINE_OPTIONS.map(([key]) => key);
    const randomCuisine = cuisines[Math.floor(Math.random() * cuisines.length)];
    setSelectedCuisine(randomCuisine);
    setItems(shuffleAndPick(wheelSize, randomCuisine));
  }, [wheelSize]);

  const handleCuisineChange = useCallback((cuisine: Cuisine | "all") => {
    setSelectedCuisine(cuisine);
    setItems(shuffleAndPick(wheelSize, cuisine === "all" ? undefined : cuisine));
  }, [wheelSize]);

  const handleWheelSizeChange = useCallback((size: number) => {
    setWheelSize(size);
    setItems(shuffleAndPick(size, selectedCuisine === "all" ? undefined : selectedCuisine));
  }, [selectedCuisine]);

  const handleSpinComplete = useCallback(() => {
    const next = pickRandomCuisine();
    setSelectedCuisine(next);
    setItems(shuffleAndPick(wheelSize, next));
  }, [wheelSize]);

  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center px-4 py-6">
      <div className="mb-4 flex items-center justify-center gap-2">
        <span className="text-amber-400/60 text-lg">🌙</span>
        <p className="text-center text-sm text-emerald-800/80">
          Pilih makanan untuk berbuka puasa hari ini! 🍽️
        </p>
        <span className="text-amber-400/60 text-lg">⭐</span>
      </div>

      <SpinWheel items={items} onSpinComplete={handleSpinComplete} />

      <div className="mt-4 flex w-full flex-col items-center gap-2 opacity-80">
        <div className="flex items-center gap-2">
          <button
            onClick={refreshFoods}
            className="flex items-center gap-1.5 rounded-full border border-amber-300/70 bg-amber-50/60 px-3 py-1.5 text-xs text-amber-700 transition hover:bg-amber-100"
          >
            🔄 Refresh
          </button>

          <div className="relative">
            <select
              value={selectedCuisine}
              onChange={(e) => handleCuisineChange(e.target.value as Cuisine | "all")}
              className="appearance-none rounded-full border border-emerald-300/70 bg-emerald-50/60 py-1.5 pl-3 pr-7 text-xs text-emerald-700 transition hover:bg-emerald-100 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            >
              <option value="all">Semua Cuisine</option>
              {CUISINE_OPTIONS.map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-emerald-500">
              ▾
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-emerald-700/60">Item:</span>
          {WHEEL_SIZES.map((size) => (
            <button
              key={size}
              onClick={() => handleWheelSizeChange(size)}
              className={`h-6 w-6 rounded-full text-[10px] font-semibold transition ${
                wheelSize === size
                  ? "bg-amber-500 text-white shadow-sm"
                  : "border border-amber-200 bg-amber-50/50 text-amber-700 hover:bg-amber-100"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
