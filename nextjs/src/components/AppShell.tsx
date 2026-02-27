"use client";

import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { RamadanOrnaments } from "./RamadanOrnaments";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-emerald-50 via-amber-50/30 to-teal-50">
      <RamadanOrnaments />
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1">
        {children}
      </div>

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
