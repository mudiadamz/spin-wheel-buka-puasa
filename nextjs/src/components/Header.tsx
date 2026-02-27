"use client";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-amber-200/50 bg-gradient-to-r from-emerald-800/95 to-teal-800/95 px-4 py-3 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <span className="text-amber-300/80 text-xl">🌙</span>
        <h1 className="text-lg font-bold text-white drop-shadow-md">
          🕌 Spin Wheel Buka Puasa
        </h1>
        <span className="text-amber-300/80 text-xl">⭐</span>
      </div>
      <button
        onClick={onMenuClick}
        className="rounded-lg p-2 text-white hover:bg-white/20"
        aria-label="Buka menu"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
}
