"use client";

export function RamadanOrnaments() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      {/* Corner crescent & star - top left */}
      <div className="absolute -left-4 -top-4 opacity-20">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="text-amber-500">
          <path
            d="M60 20c0-11 9-20 20-20 0 22-18 40-40 40 11 0 20-9 20-20z"
            fill="currentColor"
          />
          <circle cx="75" cy="28" r="4" fill="currentColor" />
        </svg>
      </div>

      {/* Corner crescent - top right */}
      <div className="absolute -right-6 -top-2 opacity-15">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="text-emerald-600">
          <path
            d="M80 30c0-15 12-27 27-27 0 27-22 49-49 49 15 0 27-12 27-27z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Lantern - bottom left */}
      <div className="absolute bottom-24 -left-2 opacity-15 animate-float">
        <svg width="48" height="72" viewBox="0 0 48 72" fill="none" className="text-amber-400">
          <path d="M24 0v8M24 64v8" stroke="currentColor" strokeWidth="2" />
          <path d="M12 8h24l4 56H8L12 8z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.3" />
          <path d="M16 16h16M16 24h16M16 32h16M16 40h16M16 48h16" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        </svg>
      </div>

      {/* Lantern - bottom right */}
      <div className="absolute bottom-32 -right-2 opacity-15 animate-float" style={{ animationDelay: "1s" }}>
        <svg width="40" height="60" viewBox="0 0 40 60" fill="none" className="text-teal-500">
          <path d="M20 0v6M20 54v6" stroke="currentColor" strokeWidth="2" />
          <path d="M10 6h20l3 48H7L10 6z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.25" />
        </svg>
      </div>

      {/* Small stars scattered - with subtle twinkle */}
      <div className="absolute left-8 top-32 text-amber-300/30 text-2xl animate-twinkle">✦</div>
      <div className="absolute right-12 top-40 text-emerald-400/25 text-xl animate-twinkle" style={{ animationDelay: "0.5s" }}>✦</div>
      <div className="absolute left-16 bottom-48 text-amber-400/20 text-lg animate-twinkle" style={{ animationDelay: "1s" }}>✦</div>
      <div className="absolute right-8 bottom-64 text-teal-400/25 text-xl animate-twinkle" style={{ animationDelay: "1.5s" }}>✦</div>

      {/* Decorative border pattern - top */}
      <div className="absolute left-0 right-0 top-14 h-px bg-gradient-to-r from-transparent via-amber-300/30 to-transparent" />

      {/* Geometric arabesque - subtle */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-10">
        <svg width="60" height="120" viewBox="0 0 60 120" fill="none" className="text-emerald-600">
          <path d="M30 0v20M20 20h20M30 40v20M20 60h20M30 80v20M20 100h20" stroke="currentColor" strokeWidth="1" />
          <circle cx="30" cy="30" r="4" fill="currentColor" />
          <circle cx="30" cy="70" r="4" fill="currentColor" />
          <circle cx="30" cy="110" r="4" fill="currentColor" />
        </svg>
      </div>

      <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-10">
        <svg width="60" height="120" viewBox="0 0 60 120" fill="none" className="text-amber-500">
          <path d="M30 0v20M20 20h20M30 40v20M20 60h20M30 80v20M20 100h20" stroke="currentColor" strokeWidth="1" />
          <circle cx="30" cy="30" r="4" fill="currentColor" />
          <circle cx="30" cy="70" r="4" fill="currentColor" />
          <circle cx="30" cy="110" r="4" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
