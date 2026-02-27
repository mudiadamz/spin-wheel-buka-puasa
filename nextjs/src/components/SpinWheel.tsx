"use client";

import { useCallback, useRef, useState } from "react";
import type { FoodItem } from "@/data/foods";
import { CUISINE_LABELS } from "@/data/foods";
import { addSpinHistory } from "@/lib/storage";
import { playTick, playWin } from "@/lib/sounds";

const SEGMENT_COLORS = [
  "#e74c3c", "#27ae60", "#2980b9", "#8e44ad", "#f39c12",
  "#d35400", "#16a085", "#c0392b", "#2ecc71", "#e67e22",
  "#1abc9c", "#e91e63", "#3f51b5", "#ff9800", "#009688",
];

const SIZE = 300;
const CX = SIZE / 2;
const CY = SIZE / 2;
const WHEEL_R = 125;
const RIM_INNER = 128;
const RIM_OUTER = 142;
const NUM_DOTS = 36;

function toXY(angleDeg: number, r: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

function arcPath(startAngle: number, endAngle: number, r: number = WHEEL_R): string {
  const p1 = toXY(startAngle, r);
  const p2 = toXY(endAngle, r);
  const large = endAngle - startAngle > 180 ? 1 : 0;
  return `M${CX},${CY} L${p1.x},${p1.y} A${r},${r} 0 ${large} 1 ${p2.x},${p2.y} Z`;
}

interface SpinWheelProps {
  items: FoodItem[];
  onSpinComplete?: (result: FoodItem) => void;
}

export function SpinWheel({ items, onSpinComplete }: SpinWheelProps) {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<FoodItem | null>(null);
  const rotationRef = useRef(0);
  const lastTickSegRef = useRef(-1);

  const spin = useCallback(() => {
    if (isSpinning || items.length === 0) return;
    setIsSpinning(true);
    setResult(null);
    lastTickSegRef.current = -1;

    const segmentAngle = 360 / items.length;
    const randomIndex = Math.floor(Math.random() * items.length);
    const targetAngle = 360 * 5 + (360 - randomIndex * segmentAngle) - segmentAngle / 2;
    const duration = 4000;
    const startTime = performance.now();
    const startRotation = rotationRef.current;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const newRotation = startRotation + targetAngle * easeOutCubic(progress);
      rotationRef.current = newRotation;
      setRotation(newRotation);

      const currentSeg = Math.floor(((newRotation % 360) + 360) % 360 / segmentAngle);
      if (currentSeg !== lastTickSegRef.current) {
        lastTickSegRef.current = currentSeg;
        playTick();
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        const winner = items[randomIndex];
        playWin();
        setResult(winner);
        setIsSpinning(false);
        addSpinHistory({
          timestamp: Date.now(),
          result: { name: winner.name, category: winner.category, emoji: winner.emoji },
        });
        onSpinComplete?.(winner);
      }
    };
    requestAnimationFrame(animate);
  }, [items, isSpinning, onSpinComplete]);

  if (items.length === 0) {
    return (
      <div className="flex aspect-square max-w-[320px] items-center justify-center rounded-full border-4 border-amber-200 bg-amber-50/50 text-amber-800">
        <p className="text-center text-sm">Tidak ada makanan. Refresh dulu!</p>
      </div>
    );
  }

  const seg = 360 / items.length;

  return (
    <div className="relative flex flex-col items-center gap-4">
      <div className="relative">
        {/* Pointer at top */}
        <div className="pointer-events-none absolute left-1/2 -top-1 z-10 -translate-x-1/2">
          <div className="h-0 w-0 border-l-[14px] border-r-[14px] border-t-[28px] border-l-transparent border-r-transparent border-t-yellow-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />
        </div>

        {/* Wheel */}
        <div className="relative aspect-square w-[min(320px,85vw)]">
          <svg
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            className="h-full w-full"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <defs>
              <radialGradient id="centerGold" cx="40%" cy="35%">
                <stop offset="0%" stopColor="#fff3a0" />
                <stop offset="40%" stopColor="#ffd700" />
                <stop offset="100%" stopColor="#b8860b" />
              </radialGradient>
              <radialGradient id="rimGold" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#daa520" />
                <stop offset="100%" stopColor="#8b6914" />
              </radialGradient>
            </defs>

            {/* Dark background ring behind dots */}
            <circle cx={CX} cy={CY} r={RIM_OUTER} fill="#1a1a2e" />
            <circle cx={CX} cy={CY} r={RIM_OUTER} fill="none" stroke="#daa520" strokeWidth="2" />
            <circle cx={CX} cy={CY} r={RIM_INNER} fill="none" stroke="#daa520" strokeWidth="1.5" />

            {/* Decorative dots on rim */}
            {Array.from({ length: NUM_DOTS }).map((_, i) => {
              const pos = toXY((i / NUM_DOTS) * 360, (RIM_INNER + RIM_OUTER) / 2);
              const colors = ["#ffd700", "#ff6b6b", "#4fc3f7", "#ffd700"];
              return (
                <circle
                  key={`dot-${i}`}
                  cx={pos.x}
                  cy={pos.y}
                  r="2.8"
                  fill={colors[i % colors.length]}
                  opacity="0.9"
                />
              );
            })}

            {/* Segments */}
            {items.map((item, i) => {
              const startAngle = i * seg;
              const endAngle = (i + 1) * seg;
              const midAngle = startAngle + seg / 2;
              const color = SEGMENT_COLORS[i % SEGMENT_COLORS.length];

              const lineMax = items.length <= 6 ? 7 : 5;
              const words = item.name.split(" ");
              let line1 = "";
              let line2 = "";
              for (const w of words) {
                if (!line1 || (line1 + " " + w).length <= lineMax) {
                  line1 = line1 ? line1 + " " + w : w;
                } else if (!line2 || (line2 + " " + w).length <= lineMax) {
                  line2 = line2 ? line2 + " " + w : w;
                }
              }
              if (line1.length > lineMax) line1 = line1.slice(0, lineMax - 1) + "…";
              if (line2.length > lineMax) line2 = line2.slice(0, lineMax - 1) + "…";
              const hasTwo = line2.length > 0;

              const textR = WHEEL_R * 0.55;
              const emojiR = WHEEL_R * 0.85;
              const isBottomHalf = midAngle > 90 && midAngle < 270;
              const fs = items.length <= 6 ? 8 : 7;
              const lineGap = fs + 1;
              const localRot = isBottomHalf ? -90 : 90;

              return (
                <g key={item.id}>
                  <path
                    d={arcPath(startAngle, endAngle)}
                    fill={color}
                    stroke="rgba(0,0,0,0.15)"
                    strokeWidth="0.5"
                  />

                  <g transform={`rotate(${midAngle} ${CX} ${CY})`}>
                    {item.emoji && (
                      <text
                        x={CX}
                        y={CY - emojiR}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize="11"
                        transform={`rotate(${-midAngle} ${CX} ${CY - emojiR})`}
                      >
                        {item.emoji}
                      </text>
                    )}

                    {hasTwo ? (
                      <>
                        <text
                          x={CX}
                          y={CY - textR - lineGap / 2}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize={fs}
                          fontWeight="bold"
                          fill="white"
                          stroke="rgba(0,0,0,0.4)"
                          strokeWidth="2"
                          paintOrder="stroke"
                          transform={`rotate(${localRot} ${CX} ${CY - textR - lineGap / 2})`}
                        >
                          {line1}
                        </text>
                        <text
                          x={CX}
                          y={CY - textR + lineGap / 2}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize={fs}
                          fontWeight="bold"
                          fill="white"
                          stroke="rgba(0,0,0,0.4)"
                          strokeWidth="2"
                          paintOrder="stroke"
                          transform={`rotate(${localRot} ${CX} ${CY - textR + lineGap / 2})`}
                        >
                          {line2}
                        </text>
                      </>
                    ) : (
                      <text
                        x={CX}
                        y={CY - textR}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize={fs}
                        fontWeight="bold"
                        fill="white"
                        stroke="rgba(0,0,0,0.4)"
                        strokeWidth="2"
                        paintOrder="stroke"
                        transform={`rotate(${localRot} ${CX} ${CY - textR})`}
                      >
                        {line1}
                      </text>
                    )}
                  </g>
                </g>
              );
            })}

            {/* Segment divider lines */}
            {items.map((_, i) => {
              const p = toXY(i * seg, WHEEL_R);
              return (
                <line
                  key={`line-${i}`}
                  x1={CX}
                  y1={CY}
                  x2={p.x}
                  y2={p.y}
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="1"
                />
              );
            })}

            {/* Golden center circle */}
            <circle cx={CX} cy={CY} r="30" fill="url(#centerGold)" stroke="#b8860b" strokeWidth="2.5" />
            <circle cx={CX} cy={CY} r="24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          </svg>

          {/* Center tap area */}
          <button
            onClick={spin}
            disabled={isSpinning}
            className="absolute left-1/2 top-1/2 z-20 flex h-[56px] w-[56px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-yellow-400 via-amber-500 to-amber-700 text-[10px] font-extrabold tracking-wider text-white shadow-[0_2px_8px_rgba(0,0,0,0.4)] ring-2 ring-yellow-300/50 transition hover:from-yellow-300 hover:to-amber-600 disabled:cursor-not-allowed disabled:opacity-70"
            aria-label="Spin"
          >
            {isSpinning ? "..." : "▶"}
          </button>
        </div>
      </div>

      {/* Primary SPIN button */}
      <button
        onClick={spin}
        disabled={isSpinning}
        className="animate-spin-pulse mt-5 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 px-12 py-4 text-lg font-extrabold uppercase tracking-widest text-white shadow-xl transition-all hover:scale-105 hover:from-amber-400 hover:via-orange-400 hover:to-red-400 active:scale-95 disabled:animate-none disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSpinning ? "Spinning..." : "🎰 SPIN!"}
      </button>

      {result && (
        <>
          {/* Overlay backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setResult(null)}
          />

          {/* Popup */}
          <div className="animate-popup-in fixed left-1/2 top-1/2 z-50 w-[85vw] max-w-xs -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 border-amber-300 bg-gradient-to-b from-amber-50 to-white p-6 text-center shadow-2xl animate-pulse-glow">
            {/* Confetti particles */}
            <div className="pointer-events-none absolute inset-x-0 -top-2 flex justify-center gap-3">
              {["🎉", "⭐", "✨", "🎊", "🌙"].map((c, i) => (
                <span
                  key={i}
                  className="animate-confetti text-lg"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {c}
                </span>
              ))}
            </div>

            <p className="mb-1 text-sm text-amber-600/80">Menu berbuka hari ini</p>
            <p className="text-4xl">{result.emoji}</p>
            <p className="mt-2 text-xl font-extrabold text-amber-800">{result.name}</p>
            <p className="mt-1 text-xs text-emerald-600">
              {CUISINE_LABELS[result.cuisine]} · {result.category === "main" ? "Main Course" : result.category === "side" ? "Side Dish" : result.category === "dessert" ? "Dessert" : "Minuman"}
            </p>

            {result.desc && (
              <p className="mt-3 text-xs leading-relaxed text-gray-600">{result.desc}</p>
            )}

            <div className="mt-4 flex items-center justify-center gap-3">
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(result.name + " food")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-blue-300 bg-blue-50 px-5 py-2 text-xs font-semibold text-blue-700 transition hover:bg-blue-100"
              >
                🔍 Cari di Google
              </a>
              <button
                onClick={() => setResult(null)}
                className="rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-2 text-sm font-bold text-white shadow-lg transition hover:from-amber-400 hover:to-amber-500"
              >
                OK
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
