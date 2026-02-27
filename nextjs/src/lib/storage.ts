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
