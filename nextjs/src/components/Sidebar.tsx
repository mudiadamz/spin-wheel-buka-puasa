"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getSpinHistory, type SpinHistoryItem } from "@/lib/storage";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [history, setHistory] = useState<SpinHistoryItem[]>([]);

  useEffect(() => {
    setHistory(getSpinHistory());
  }, [isOpen]);

  const menuItems = [
    { href: "#history", label: "History Spin" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
    { href: "#privacy", label: "Privacy Policy" },
    { href: "#jadwal", label: "30 Hari Jadwal Berbuka" },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity md:hidden ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 max-w-[85vw] transform bg-gradient-to-b from-emerald-900 to-teal-900 text-white shadow-xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col p-4">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold">Menu</h2>
            <button
              onClick={onClose}
              className="rounded p-2 hover:bg-white/10"
              aria-label="Tutup menu"
            >
              ✕
            </button>
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="block rounded-lg px-3 py-2 hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 flex-1 overflow-auto">
            <h3 className="mb-2 font-semibold">History Spin</h3>
            {history.length === 0 ? (
              <p className="text-sm text-white/70">Belum ada history</p>
            ) : (
              <ul className="space-y-2">
                {history.slice(0, 20).map((item) => (
                  <li
                    key={item.id}
                    className="rounded-lg bg-white/10 px-3 py-2 text-sm"
                  >
                    <span className="font-medium">{item.result.emoji} {item.result.name}</span>
                    <p className="text-xs text-white/70">
                      {new Date(item.timestamp).toLocaleString("id-ID")}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
