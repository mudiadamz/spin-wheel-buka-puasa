"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getSpinHistory, type SpinHistoryItem } from "@/lib/storage";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/history", label: "History Spin", icon: "📜" },
  { href: "/about", label: "About", icon: "ℹ️" },
  { href: "/contact", label: "Contact", icon: "📬" },
  { href: "/privacy", label: "Privacy Policy", icon: "🔒" },
  { href: "/jadwal", label: "30 Hari Jadwal Berbuka", icon: "📅" },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [history, setHistory] = useState<SpinHistoryItem[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) setHistory(getSpinHistory());
  }, [isOpen]);

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
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition ${
                    isActive
                      ? "bg-white/20 font-semibold"
                      : "hover:bg-white/10"
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 flex-1 overflow-auto">
            <h3 className="mb-2 font-semibold">History Terbaru</h3>
            {history.length === 0 ? (
              <p className="text-sm text-white/70">Belum ada history</p>
            ) : (
              <ul className="space-y-2">
                {history.slice(0, 10).map((item) => (
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
            {history.length > 0 && (
              <Link
                href="/history"
                onClick={onClose}
                className="mt-3 block text-center text-xs text-amber-300 hover:text-amber-200"
              >
                Lihat semua history →
              </Link>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
