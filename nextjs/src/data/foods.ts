export type FoodCategory = "main" | "side" | "dessert" | "drink";

export type Cuisine =
  | "indonesia" | "western" | "chinese" | "japanese" | "korean"
  | "thai" | "indian" | "middle_eastern" | "mexican" | "italian"
  | "french" | "american" | "vietnamese" | "spanish" | "turkish";

export interface FoodItem {
  id: string;
  name: string;
  category: FoodCategory;
  cuisine: Cuisine;
  emoji?: string;
}

export const CUISINE_LABELS: Record<Cuisine, string> = {
  indonesia: "Indonesia",
  western: "Western",
  chinese: "Chinese",
  japanese: "Japanese",
  korean: "Korean",
  thai: "Thai",
  indian: "Indian",
  middle_eastern: "Middle Eastern",
  mexican: "Mexican",
  italian: "Italian",
  french: "French",
  american: "American",
  vietnamese: "Vietnamese",
  spanish: "Spanish",
  turkish: "Turkish",
};

export const FOOD_CATEGORIES: Record<FoodCategory, string> = {
  main: "Main Course",
  side: "Side Dish",
  dessert: "Dessert",
  drink: "Minuman",
};

export const ALL_FOODS: FoodItem[] = [
  // ── Indonesia ──
  { id: "id-1", name: "Nasi Goreng", category: "main", cuisine: "indonesia", emoji: "🍳" },
  { id: "id-2", name: "Ayam Geprek", category: "main", cuisine: "indonesia", emoji: "🍗" },
  { id: "id-3", name: "Soto Ayam", category: "main", cuisine: "indonesia", emoji: "🍲" },
  { id: "id-4", name: "Rendang", category: "main", cuisine: "indonesia", emoji: "🥘" },
  { id: "id-5", name: "Bakso", category: "main", cuisine: "indonesia", emoji: "🍜" },
  { id: "id-6", name: "Mie Goreng", category: "main", cuisine: "indonesia", emoji: "🍝" },
  { id: "id-7", name: "Nasi Padang", category: "main", cuisine: "indonesia", emoji: "🍛" },
  { id: "id-8", name: "Gado-gado", category: "main", cuisine: "indonesia", emoji: "🥗" },
  { id: "id-9", name: "Sate Ayam", category: "main", cuisine: "indonesia", emoji: "🍢" },
  { id: "id-10", name: "Rawon", category: "main", cuisine: "indonesia", emoji: "🥣" },
  { id: "id-11", name: "Kerupuk", category: "side", cuisine: "indonesia", emoji: "🥠" },
  { id: "id-12", name: "Tempe Goreng", category: "side", cuisine: "indonesia", emoji: "🫘" },
  { id: "id-13", name: "Perkedel", category: "side", cuisine: "indonesia", emoji: "🥔" },
  { id: "id-14", name: "Sambal", category: "side", cuisine: "indonesia", emoji: "🌶️" },
  { id: "id-15", name: "Kolak", category: "dessert", cuisine: "indonesia", emoji: "🍌" },
  { id: "id-16", name: "Es Cendol", category: "dessert", cuisine: "indonesia", emoji: "🍧" },
  { id: "id-17", name: "Klepon", category: "dessert", cuisine: "indonesia", emoji: "🟢" },
  { id: "id-18", name: "Es Teh Manis", category: "drink", cuisine: "indonesia", emoji: "🧋" },
  { id: "id-19", name: "Es Jeruk", category: "drink", cuisine: "indonesia", emoji: "🍊" },
  { id: "id-20", name: "Wedang Jahe", category: "drink", cuisine: "indonesia", emoji: "🫖" },

  // ── Western ──
  { id: "wt-1", name: "Steak", category: "main", cuisine: "western", emoji: "🥩" },
  { id: "wt-2", name: "Grilled Chicken", category: "main", cuisine: "western", emoji: "🍗" },
  { id: "wt-3", name: "Fish & Chips", category: "main", cuisine: "western", emoji: "🐟" },
  { id: "wt-4", name: "Roast Beef", category: "main", cuisine: "western", emoji: "🥩" },
  { id: "wt-5", name: "Mashed Potato", category: "side", cuisine: "western", emoji: "🥔" },
  { id: "wt-6", name: "Coleslaw", category: "side", cuisine: "western", emoji: "🥗" },
  { id: "wt-7", name: "Apple Pie", category: "dessert", cuisine: "western", emoji: "🥧" },
  { id: "wt-8", name: "Lemonade", category: "drink", cuisine: "western", emoji: "🍋" },

  // ── Chinese ──
  { id: "cn-1", name: "Nasi Hainan", category: "main", cuisine: "chinese", emoji: "🍚" },
  { id: "cn-2", name: "Dimsum", category: "main", cuisine: "chinese", emoji: "🥟" },
  { id: "cn-3", name: "Mie Ayam", category: "main", cuisine: "chinese", emoji: "🍜" },
  { id: "cn-4", name: "Kwetiau", category: "main", cuisine: "chinese", emoji: "🍝" },
  { id: "cn-5", name: "Capcay", category: "main", cuisine: "chinese", emoji: "🥬" },
  { id: "cn-6", name: "Lumpia", category: "side", cuisine: "chinese", emoji: "🥟" },
  { id: "cn-7", name: "Tahu Mapo", category: "side", cuisine: "chinese", emoji: "🫕" },
  { id: "cn-8", name: "Mooncake", category: "dessert", cuisine: "chinese", emoji: "🥮" },
  { id: "cn-9", name: "Teh Cina", category: "drink", cuisine: "chinese", emoji: "🍵" },

  // ── Japanese ──
  { id: "jp-1", name: "Ramen", category: "main", cuisine: "japanese", emoji: "🍜" },
  { id: "jp-2", name: "Sushi", category: "main", cuisine: "japanese", emoji: "🍣" },
  { id: "jp-3", name: "Katsu Curry", category: "main", cuisine: "japanese", emoji: "🍛" },
  { id: "jp-4", name: "Udon", category: "main", cuisine: "japanese", emoji: "🍲" },
  { id: "jp-5", name: "Teriyaki", category: "main", cuisine: "japanese", emoji: "🍗" },
  { id: "jp-6", name: "Edamame", category: "side", cuisine: "japanese", emoji: "🫛" },
  { id: "jp-7", name: "Gyoza", category: "side", cuisine: "japanese", emoji: "🥟" },
  { id: "jp-8", name: "Mochi", category: "dessert", cuisine: "japanese", emoji: "🍡" },
  { id: "jp-9", name: "Matcha Latte", category: "drink", cuisine: "japanese", emoji: "🍵" },

  // ── Korean ──
  { id: "kr-1", name: "Bibimbap", category: "main", cuisine: "korean", emoji: "🍚" },
  { id: "kr-2", name: "Bulgogi", category: "main", cuisine: "korean", emoji: "🥩" },
  { id: "kr-3", name: "Tteokbokki", category: "main", cuisine: "korean", emoji: "🌶️" },
  { id: "kr-4", name: "Japchae", category: "main", cuisine: "korean", emoji: "🍝" },
  { id: "kr-5", name: "Kimchi", category: "side", cuisine: "korean", emoji: "🥬" },
  { id: "kr-6", name: "Kimbap", category: "side", cuisine: "korean", emoji: "🍙" },
  { id: "kr-7", name: "Bingsu", category: "dessert", cuisine: "korean", emoji: "🍧" },
  { id: "kr-8", name: "Soju Cocktail", category: "drink", cuisine: "korean", emoji: "🍶" },

  // ── Thai ──
  { id: "th-1", name: "Pad Thai", category: "main", cuisine: "thai", emoji: "🍝" },
  { id: "th-2", name: "Tom Yum", category: "main", cuisine: "thai", emoji: "🍲" },
  { id: "th-3", name: "Green Curry", category: "main", cuisine: "thai", emoji: "🥘" },
  { id: "th-4", name: "Som Tum", category: "side", cuisine: "thai", emoji: "🥗" },
  { id: "th-5", name: "Mango Sticky", category: "dessert", cuisine: "thai", emoji: "🥭" },
  { id: "th-6", name: "Thai Tea", category: "drink", cuisine: "thai", emoji: "🧋" },

  // ── Indian ──
  { id: "in-1", name: "Biryani", category: "main", cuisine: "indian", emoji: "🍚" },
  { id: "in-2", name: "Butter Chkn", category: "main", cuisine: "indian", emoji: "🍛" },
  { id: "in-3", name: "Tandoori", category: "main", cuisine: "indian", emoji: "🍗" },
  { id: "in-4", name: "Naan", category: "side", cuisine: "indian", emoji: "🫓" },
  { id: "in-5", name: "Samosa", category: "side", cuisine: "indian", emoji: "🥟" },
  { id: "in-6", name: "Gulab Jamun", category: "dessert", cuisine: "indian", emoji: "🍩" },
  { id: "in-7", name: "Masala Chai", category: "drink", cuisine: "indian", emoji: "🍵" },

  // ── Middle Eastern ──
  { id: "me-1", name: "Shawarma", category: "main", cuisine: "middle_eastern", emoji: "🌯" },
  { id: "me-2", name: "Kebab", category: "main", cuisine: "middle_eastern", emoji: "🍢" },
  { id: "me-3", name: "Falafel", category: "main", cuisine: "middle_eastern", emoji: "🧆" },
  { id: "me-4", name: "Hummus", category: "side", cuisine: "middle_eastern", emoji: "🫘" },
  { id: "me-5", name: "Baklava", category: "dessert", cuisine: "middle_eastern", emoji: "🍯" },
  { id: "me-6", name: "Mint Tea", category: "drink", cuisine: "middle_eastern", emoji: "🍵" },

  // ── Mexican ──
  { id: "mx-1", name: "Tacos", category: "main", cuisine: "mexican", emoji: "🌮" },
  { id: "mx-2", name: "Burrito", category: "main", cuisine: "mexican", emoji: "🌯" },
  { id: "mx-3", name: "Quesadilla", category: "main", cuisine: "mexican", emoji: "🧀" },
  { id: "mx-4", name: "Nachos", category: "side", cuisine: "mexican", emoji: "🫓" },
  { id: "mx-5", name: "Guacamole", category: "side", cuisine: "mexican", emoji: "🥑" },
  { id: "mx-6", name: "Churros", category: "dessert", cuisine: "mexican", emoji: "🍩" },
  { id: "mx-7", name: "Horchata", category: "drink", cuisine: "mexican", emoji: "🥛" },

  // ── Italian ──
  { id: "it-1", name: "Pizza", category: "main", cuisine: "italian", emoji: "🍕" },
  { id: "it-2", name: "Pasta Carbo", category: "main", cuisine: "italian", emoji: "🍝" },
  { id: "it-3", name: "Lasagna", category: "main", cuisine: "italian", emoji: "🫕" },
  { id: "it-4", name: "Risotto", category: "main", cuisine: "italian", emoji: "🍚" },
  { id: "it-5", name: "Bruschetta", category: "side", cuisine: "italian", emoji: "🥖" },
  { id: "it-6", name: "Tiramisu", category: "dessert", cuisine: "italian", emoji: "🍰" },
  { id: "it-7", name: "Espresso", category: "drink", cuisine: "italian", emoji: "☕" },

  // ── French ──
  { id: "fr-1", name: "Croissant", category: "main", cuisine: "french", emoji: "🥐" },
  { id: "fr-2", name: "Coq au Vin", category: "main", cuisine: "french", emoji: "🍗" },
  { id: "fr-3", name: "Ratatouille", category: "main", cuisine: "french", emoji: "🥘" },
  { id: "fr-4", name: "Quiche", category: "side", cuisine: "french", emoji: "🥧" },
  { id: "fr-5", name: "Crème Brûlée", category: "dessert", cuisine: "french", emoji: "🍮" },
  { id: "fr-6", name: "Macaron", category: "dessert", cuisine: "french", emoji: "🍪" },
  { id: "fr-7", name: "Café au Lait", category: "drink", cuisine: "french", emoji: "☕" },

  // ── American ──
  { id: "us-1", name: "Burger", category: "main", cuisine: "american", emoji: "🍔" },
  { id: "us-2", name: "Hot Dog", category: "main", cuisine: "american", emoji: "🌭" },
  { id: "us-3", name: "BBQ Ribs", category: "main", cuisine: "american", emoji: "🍖" },
  { id: "us-4", name: "Mac & Cheese", category: "main", cuisine: "american", emoji: "🧀" },
  { id: "us-5", name: "Fries", category: "side", cuisine: "american", emoji: "🍟" },
  { id: "us-6", name: "Donut", category: "dessert", cuisine: "american", emoji: "🍩" },
  { id: "us-7", name: "Milkshake", category: "drink", cuisine: "american", emoji: "🥤" },

  // ── Vietnamese ──
  { id: "vn-1", name: "Pho", category: "main", cuisine: "vietnamese", emoji: "🍜" },
  { id: "vn-2", name: "Banh Mi", category: "main", cuisine: "vietnamese", emoji: "🥖" },
  { id: "vn-3", name: "Bun Cha", category: "main", cuisine: "vietnamese", emoji: "🍲" },
  { id: "vn-4", name: "Goi Cuon", category: "side", cuisine: "vietnamese", emoji: "🥬" },
  { id: "vn-5", name: "Che", category: "dessert", cuisine: "vietnamese", emoji: "🍧" },
  { id: "vn-6", name: "Ca Phe Sua", category: "drink", cuisine: "vietnamese", emoji: "☕" },

  // ── Spanish ──
  { id: "es-1", name: "Paella", category: "main", cuisine: "spanish", emoji: "🥘" },
  { id: "es-2", name: "Tapas", category: "main", cuisine: "spanish", emoji: "🍽️" },
  { id: "es-3", name: "Gazpacho", category: "main", cuisine: "spanish", emoji: "🍲" },
  { id: "es-4", name: "Patatas Brav", category: "side", cuisine: "spanish", emoji: "🥔" },
  { id: "es-5", name: "Churros", category: "dessert", cuisine: "spanish", emoji: "🍩" },
  { id: "es-6", name: "Sangria", category: "drink", cuisine: "spanish", emoji: "🍷" },

  // ── Turkish ──
  { id: "tr-1", name: "Doner Kebab", category: "main", cuisine: "turkish", emoji: "🥙" },
  { id: "tr-2", name: "Pide", category: "main", cuisine: "turkish", emoji: "🫓" },
  { id: "tr-3", name: "Lahmacun", category: "main", cuisine: "turkish", emoji: "🍕" },
  { id: "tr-4", name: "Borek", category: "side", cuisine: "turkish", emoji: "🥧" },
  { id: "tr-5", name: "Baklava", category: "dessert", cuisine: "turkish", emoji: "🍯" },
  { id: "tr-6", name: "Turkish Tea", category: "drink", cuisine: "turkish", emoji: "🍵" },
];

export function getAllFoods(): FoodItem[] {
  return ALL_FOODS;
}

export function getFoodsByCuisine(cuisine: Cuisine): FoodItem[] {
  return ALL_FOODS.filter((f) => f.cuisine === cuisine);
}

export function getFoodsByCategory(category: FoodCategory): FoodItem[] {
  return ALL_FOODS.filter((f) => f.category === category);
}

export function getRandomFoods(): FoodItem[] {
  const byCat = (cat: FoodCategory) => {
    const items = getFoodsByCategory(cat);
    return items[Math.floor(Math.random() * items.length)];
  };
  return [byCat("main"), byCat("side"), byCat("dessert"), byCat("drink")];
}

export function shuffleAndPick(count: number = 8, cuisine?: Cuisine): FoodItem[] {
  const pool = cuisine ? getFoodsByCuisine(cuisine) : ALL_FOODS;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/** Deterministic initial set for hydration safety */
export function getInitialItems(count: number = 8): FoodItem[] {
  return ALL_FOODS.slice(0, Math.min(count, ALL_FOODS.length));
}
