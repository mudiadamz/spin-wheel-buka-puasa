export interface SpinHistoryItem {
  id: string;
  timestamp: number;
  result: {
    name: string;
    category: string;
    emoji?: string;
  };
}

const STORAGE_KEY = "spin-wheel-buka-puasa-history";
const MAX_HISTORY = 50;

export function getSpinHistory(): SpinHistoryItem[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    const parsed = JSON.parse(data) as SpinHistoryItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function addSpinHistory(item: Omit<SpinHistoryItem, "id">): void {
  if (typeof window === "undefined") return;
  const history = getSpinHistory();
  const newItem: SpinHistoryItem = {
    ...item,
    id: `spin-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
  };
  const updated = [newItem, ...history].slice(0, MAX_HISTORY);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function clearSpinHistory(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

const STATS_KEY = "spin-wheel-stats";

interface SiteStats {
  totalSpins: number;
  totalVisits: number;
  lastVisit: string;
}

function getStats(): SiteStats {
  if (typeof window === "undefined") return { totalSpins: 0, totalVisits: 0, lastVisit: "" };
  try {
    const data = localStorage.getItem(STATS_KEY);
    if (!data) return { totalSpins: 0, totalVisits: 0, lastVisit: "" };
    return JSON.parse(data) as SiteStats;
  } catch {
    return { totalSpins: 0, totalVisits: 0, lastVisit: "" };
  }
}

function saveStats(stats: SiteStats): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

export function recordVisit(): SiteStats {
  const stats = getStats();
  const today = new Date().toISOString().slice(0, 10);
  if (stats.lastVisit !== today) {
    stats.totalVisits += 1;
    stats.lastVisit = today;
    saveStats(stats);
  }
  return stats;
}

export function recordSpin(): SiteStats {
  const stats = getStats();
  stats.totalSpins += 1;
  saveStats(stats);
  return stats;
}

export function getSiteStats(): SiteStats {
  return getStats();
}
