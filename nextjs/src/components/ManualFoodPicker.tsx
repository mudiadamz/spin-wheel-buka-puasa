"use client";

import { useCallback, useState } from "react";
import type { FoodItem, Cuisine } from "@/data/foods";
import { ALL_FOODS, CUISINE_LABELS } from "@/data/foods";

interface ManualFoodPickerProps {
  currentItems: FoodItem[];
  onApply: (items: FoodItem[]) => void;
  onClose: () => void;
}

const CUISINES = Object.keys(CUISINE_LABELS) as Cuisine[];

export function ManualFoodPicker({ currentItems, onApply, onClose }: ManualFoodPickerProps) {
  const currentIds = new Set(currentItems.map((i) => i.id));
  const [selectedIds, setSelectedIds] = useState<Set<string>>(() => new Set(currentIds));
  const [openCuisines, setOpenCuisines] = useState<Set<Cuisine>>(() => new Set());

  const toggleCuisine = useCallback((cuisine: Cuisine) => {
    setOpenCuisines((prev) => {
      const next = new Set(prev);
      if (next.has(cuisine)) next.delete(cuisine);
      else next.add(cuisine);
      return next;
    });
  }, []);

  const toggle = useCallback((id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const selectAllInGroup = useCallback((items: FoodItem[]) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      items.forEach((i) => next.add(i.id));
      return next;
    });
  }, []);

  const clearGroup = useCallback((items: FoodItem[]) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      items.forEach((i) => next.delete(i.id));
      return next;
    });
  }, []);

  const handleApply = useCallback(() => {
    const items = ALL_FOODS.filter((f) => selectedIds.has(f.id));
    if (items.length > 0) {
      onApply(items);
      onClose();
    }
  }, [selectedIds, onApply, onClose]);

  const count = selectedIds.size;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="max-h-[85vh] w-full max-w-md overflow-hidden rounded-2xl border-2 border-amber-200 bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-amber-100 bg-amber-50 px-4 py-3">
          <h3 className="font-bold text-amber-800">Pilih Makanan Manual</h3>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-amber-600 hover:bg-amber-100"
            aria-label="Tutup"
          >
            ✕
          </button>
        </div>

        <div className="max-h-[55vh] overflow-y-auto p-4">
          {CUISINES.map((cuisine) => {
            const items = ALL_FOODS.filter((f) => f.cuisine === cuisine);
            const isOpen = openCuisines.has(cuisine);
            const selectedCount = items.filter((i) => selectedIds.has(i.id)).length;

            return (
              <div key={cuisine} className="mb-2">
                {/* Dropdown header */}
                <button
                  type="button"
                  onClick={() => toggleCuisine(cuisine)}
                  className="flex w-full items-center justify-between rounded-lg border border-amber-200 bg-amber-50/80 px-3 py-2.5 text-left transition hover:bg-amber-100"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block text-xs transition-transform duration-200"
                      style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
                    >
                      ▶
                    </span>
                    <span className="font-semibold text-emerald-800">
                      {CUISINE_LABELS[cuisine]}
                    </span>
                  </div>
                  <span className="rounded-full bg-amber-200/60 px-2 py-0.5 text-xs text-amber-700">
                    {selectedCount}/{items.length}
                  </span>
                </button>

                {/* Collapsible content */}
                {isOpen && (
                  <div className="mt-1 rounded-lg border border-amber-100 bg-white px-3 py-3">
                    <div className="mb-2 flex justify-end gap-1">
                      <button
                        type="button"
                        onClick={() => selectAllInGroup(items)}
                        className="rounded px-2 py-0.5 text-xs text-amber-600 hover:bg-amber-100"
                      >
                        Pilih semua
                      </button>
                      <button
                        type="button"
                        onClick={() => clearGroup(items)}
                        className="rounded px-2 py-0.5 text-xs text-amber-600 hover:bg-amber-100"
                      >
                        Hapus
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <label
                          key={item.id}
                          className="flex cursor-pointer items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50/50 px-3 py-1.5 text-sm transition hover:bg-amber-100 has-[:checked]:border-amber-400 has-[:checked]:bg-amber-100"
                        >
                          <input
                            type="checkbox"
                            checked={selectedIds.has(item.id)}
                            onChange={() => toggle(item.id)}
                            className="h-4 w-4 rounded border-amber-300 text-amber-600"
                          />
                          <span>{item.emoji} {item.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between border-t border-amber-100 bg-amber-50/50 px-4 py-3">
          <span className="text-sm text-amber-700">
            {count} makanan dipilih
          </span>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="rounded-full border border-amber-300 px-4 py-2 text-sm font-medium text-amber-800 hover:bg-amber-100"
            >
              Batal
            </button>
            <button
              onClick={handleApply}
              disabled={count === 0}
              className="rounded-full bg-amber-500 px-4 py-2 text-sm font-medium text-white hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Terapkan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
