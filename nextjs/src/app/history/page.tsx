"use client";

import { useEffect, useState } from "react";
import { getSpinHistory, type SpinHistoryItem } from "@/lib/storage";

export default function HistoryPage() {
  const [history, setHistory] = useState<SpinHistoryItem[]>([]);

  useEffect(() => {
    setHistory(getSpinHistory());
  }, []);

  return (
    <main className="mx-auto w-full max-w-md px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-emerald-800">History Spin</h1>

      {history.length === 0 ? (
        <div className="rounded-xl border border-amber-200 bg-amber-50/50 px-6 py-8 text-center">
          <p className="text-lg">🎰</p>
          <p className="mt-2 text-sm text-emerald-700/80">
            Belum ada history. Coba spin dulu!
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {history.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between rounded-xl border border-amber-200 bg-white px-4 py-3 shadow-sm"
            >
              <div>
                <a
                  href={`https://www.google.com/search?q=${encodeURIComponent(item.result.name + " food")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-800 hover:text-blue-600 transition"
                >
                  {item.result.emoji} {item.result.name} <span className="text-xs opacity-50">🔍</span>
                </a>
                <p className="text-xs text-emerald-600/70">
                  {item.result.category}
                </p>
              </div>
              <span className="text-xs text-amber-700/70">
                {new Date(item.timestamp).toLocaleString("id-ID")}
              </span>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
