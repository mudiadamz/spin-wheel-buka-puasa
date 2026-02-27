export type FoodCategory = "main" | "side" | "dessert" | "drink";

export type Cuisine =
  | "indonesia" | "western" | "chinese" | "japanese" | "korean"
  | "thai" | "indian" | "middle_eastern" | "mexican" | "italian"
  | "french" | "american" | "vietnamese" | "spanish" | "turkish"
  | "malaysian" | "filipino" | "greek" | "brazilian" | "ethiopian"
  | "moroccan" | "german" | "caribbean" | "peruvian" | "pakistani";

export interface FoodItem {
  id: string;
  name: string;
  category: FoodCategory;
  cuisine: Cuisine;
  emoji?: string;
  desc?: string;
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
  malaysian: "Malaysian",
  filipino: "Filipino",
  greek: "Greek",
  brazilian: "Brazilian",
  ethiopian: "Ethiopian",
  moroccan: "Moroccan",
  german: "German",
  caribbean: "Caribbean",
  peruvian: "Peruvian",
  pakistani: "Pakistani",
};

export const FOOD_CATEGORIES: Record<FoodCategory, string> = {
  main: "Main Course",
  side: "Side Dish",
  dessert: "Dessert",
  drink: "Minuman",
};

export const ALL_FOODS: FoodItem[] = [
  // ── Indonesia ──
  { id: "id-1", name: "Nasi Goreng", category: "main", cuisine: "indonesia", emoji: "🍳", desc: "Nasi yang digoreng dengan bumbu kecap, bawang, dan cabai, disajikan dengan telur ceplok dan kerupuk" },
  { id: "id-2", name: "Ayam Geprek", category: "main", cuisine: "indonesia", emoji: "🍗", desc: "Ayam goreng tepung yang digeprek dan disiram sambal pedas" },
  { id: "id-3", name: "Soto Ayam", category: "main", cuisine: "indonesia", emoji: "🍲", desc: "Sup kuning kuah kunyit dengan ayam suwir, bihun, telur, dan seledri" },
  { id: "id-4", name: "Rendang", category: "main", cuisine: "indonesia", emoji: "🥘", desc: "Daging sapi yang dimasak lama dengan santan dan rempah hingga kering dan empuk" },
  { id: "id-5", name: "Bakso", category: "main", cuisine: "indonesia", emoji: "🍜", desc: "Bola daging sapi kenyal dalam kuah kaldu hangat dengan mie dan tahu" },
  { id: "id-6", name: "Mie Goreng", category: "main", cuisine: "indonesia", emoji: "🍝", desc: "Mie yang ditumis dengan kecap manis, sayuran, dan telur" },
  { id: "id-7", name: "Nasi Padang", category: "main", cuisine: "indonesia", emoji: "🍛", desc: "Nasi putih disajikan dengan aneka lauk Minang seperti rendang, gulai, dan sambal hijau" },
  { id: "id-8", name: "Gado-gado", category: "main", cuisine: "indonesia", emoji: "🥗", desc: "Salad sayuran rebus dengan saus kacang kental, tahu, tempe, dan kerupuk" },
  { id: "id-9", name: "Sate Ayam", category: "main", cuisine: "indonesia", emoji: "🍢", desc: "Tusukan ayam panggang dengan bumbu kunyit, disajikan dengan saus kacang dan lontong" },
  { id: "id-10", name: "Rawon", category: "main", cuisine: "indonesia", emoji: "🥣", desc: "Sup daging sapi hitam khas Jawa Timur dengan kluwek dan tauge" },
  { id: "id-11", name: "Nasi Uduk", category: "main", cuisine: "indonesia", emoji: "🍚", desc: "Nasi gurih yang dimasak dengan santan, disajikan dengan lauk pauk dan sambal kacang" },
  { id: "id-12", name: "Gudeg", category: "main", cuisine: "indonesia", emoji: "🫕", desc: "Masakan nangka muda yang dimasak lama dengan santan dan gula merah khas Yogya" },
  { id: "id-13", name: "Ayam Bakar", category: "main", cuisine: "indonesia", emoji: "🔥", desc: "Ayam yang dibakar dengan bumbu kecap atau padang hingga kecokelatan dan harum" },
  { id: "id-14", name: "Ikan Bakar", category: "main", cuisine: "indonesia", emoji: "🐟", desc: "Ikan segar yang dibakar dengan bumbu rempah dan disajikan dengan sambal" },
  { id: "id-15", name: "Pecel Lele", category: "main", cuisine: "indonesia", emoji: "🐟", desc: "Lele goreng renyah disajikan dengan nasi, sambal, dan lalapan segar" },
  { id: "id-16", name: "Nasi Kuning", category: "main", cuisine: "indonesia", emoji: "🍛", desc: "Nasi kunyit harum yang dimasak dengan santan dan rempah, simbol keberuntungan" },
  { id: "id-17", name: "Sop Buntut", category: "main", cuisine: "indonesia", emoji: "🍲", desc: "Sup buntut sapi dalam kaldu bening dengan wortel, kentang, dan seledri" },
  { id: "id-18", name: "Kerupuk", category: "side", cuisine: "indonesia", emoji: "🥠", desc: "Kerupuk renyah dari tepung udang atau ikan, teman makan yang wajib ada" },
  { id: "id-19", name: "Tempe Goreng", category: "side", cuisine: "indonesia", emoji: "🫘", desc: "Tempe kedelai yang digoreng garing dengan bumbu bawang putih" },
  { id: "id-20", name: "Perkedel", category: "side", cuisine: "indonesia", emoji: "🥔", desc: "Kroket kentang tumbuk yang dibalut telur dan digoreng keemasan" },
  { id: "id-21", name: "Sambal", category: "side", cuisine: "indonesia", emoji: "🌶️", desc: "Saus pedas dari cabai, tomat, dan terasi yang diulek segar" },
  { id: "id-22", name: "Kolak", category: "dessert", cuisine: "indonesia", emoji: "🍌", desc: "Pisang dan ubi dalam kuah santan manis dengan gula merah, hidangan khas Ramadan" },
  { id: "id-23", name: "Es Cendol", category: "dessert", cuisine: "indonesia", emoji: "🍧", desc: "Cendol pandan hijau dalam santan dan gula merah cair dengan es serut" },
  { id: "id-24", name: "Klepon", category: "dessert", cuisine: "indonesia", emoji: "🟢", desc: "Bola ketan hijau pandan berisi gula merah leleh, dilumuri kelapa parut" },
  { id: "id-25", name: "Es Teh Manis", category: "drink", cuisine: "indonesia", emoji: "🧋", desc: "Teh hitam manis dingin yang menyegarkan, minuman sejuta umat" },
  { id: "id-26", name: "Es Jeruk", category: "drink", cuisine: "indonesia", emoji: "🍊", desc: "Jeruk peras segar dengan es batu dan sedikit gula" },
  { id: "id-27", name: "Wedang Jahe", category: "drink", cuisine: "indonesia", emoji: "🫖", desc: "Minuman jahe hangat dengan gula merah, menghangatkan badan" },
  { id: "id-28", name: "Bajigur", category: "drink", cuisine: "indonesia", emoji: "🥥", desc: "Minuman hangat khas Sunda dari santan, gula aren, dan jahe" },
  { id: "id-29", name: "Serabi", category: "dessert", cuisine: "indonesia", emoji: "🥞", desc: "Pancake tradisional dari tepung beras dan santan, bisa manis atau gurih" },
  { id: "id-30", name: "Tahu Gejrot", category: "side", cuisine: "indonesia", emoji: "🧊", desc: "Tahu goreng dalam kuah asam pedas manis khas Cirebon" },

  // ── Western ──
  { id: "wt-1", name: "Steak", category: "main", cuisine: "western", emoji: "🥩", desc: "Juicy beef steak grilled to perfection with seasoning and served with sides" },
  { id: "wt-2", name: "Grilled Chicken", category: "main", cuisine: "western", emoji: "🍗", desc: "Herb-marinated chicken grilled until golden with a smoky flavor" },
  { id: "wt-3", name: "Fish & Chips", category: "main", cuisine: "western", emoji: "🐟", desc: "Crispy battered fish with golden thick-cut fries, a British classic" },
  { id: "wt-4", name: "Roast Beef", category: "main", cuisine: "western", emoji: "🥩", desc: "Slow-roasted beef served with gravy and roasted vegetables" },
  { id: "wt-5", name: "Lamb Chops", category: "main", cuisine: "western", emoji: "🍖", desc: "Tender lamb chops seasoned with rosemary and grilled to perfection" },
  { id: "wt-6", name: "Pork Roast", category: "main", cuisine: "western", emoji: "🥩", desc: "Slow-cooked pork roast with crispy crackling and apple sauce" },
  { id: "wt-7", name: "Mashed Potato", category: "side", cuisine: "western", emoji: "🥔", desc: "Creamy mashed potatoes with butter and a hint of garlic" },
  { id: "wt-8", name: "Coleslaw", category: "side", cuisine: "western", emoji: "🥗", desc: "Crunchy cabbage and carrot salad in a creamy mayo dressing" },
  { id: "wt-9", name: "Garden Salad", category: "side", cuisine: "western", emoji: "🥬", desc: "Fresh mixed greens with tomatoes, cucumbers, and vinaigrette" },
  { id: "wt-10", name: "Apple Pie", category: "dessert", cuisine: "western", emoji: "🥧", desc: "Classic baked pie with sweet cinnamon apple filling and flaky crust" },
  { id: "wt-11", name: "Cheesecake", category: "dessert", cuisine: "western", emoji: "🍰", desc: "Rich and creamy cheesecake on a buttery biscuit base" },
  { id: "wt-12", name: "Lemonade", category: "drink", cuisine: "western", emoji: "🍋", desc: "Refreshing drink of fresh lemon juice, water, and sugar over ice" },

  // ── Chinese ──
  { id: "cn-1", name: "Nasi Hainan", category: "main", cuisine: "chinese", emoji: "🍚", desc: "Nasi ayam Hainan dengan ayam rebus lembut, nasi aromatik, dan saus jahe" },
  { id: "cn-2", name: "Dimsum", category: "main", cuisine: "chinese", emoji: "🥟", desc: "Aneka hidangan kecil kukus seperti hakau, siumai, dan bakpao" },
  { id: "cn-3", name: "Mie Ayam", category: "main", cuisine: "chinese", emoji: "🍜", desc: "Mie dengan topping ayam cincang manis dan kuah kaldu ayam" },
  { id: "cn-4", name: "Kwetiau", category: "main", cuisine: "chinese", emoji: "🍝", desc: "Mie pipih lebar yang ditumis dengan kecap, udang, dan tauge" },
  { id: "cn-5", name: "Capcay", category: "main", cuisine: "chinese", emoji: "🥬", desc: "Tumisan sayuran campur dengan saus tiram dan bumbu bawang" },
  { id: "cn-6", name: "Peking Duck", category: "main", cuisine: "chinese", emoji: "🦆", desc: "Bebek panggang kulit renyah khas Beijing, disajikan dengan pancake tipis" },
  { id: "cn-7", name: "Kung Pao", category: "main", cuisine: "chinese", emoji: "🌶️", desc: "Ayam tumis pedas dengan kacang tanah dan cabai kering dari Sichuan" },
  { id: "cn-8", name: "Sweet Sour", category: "main", cuisine: "chinese", emoji: "🍗", desc: "Daging atau ayam goreng tepung dengan saus asam manis dan nanas" },
  { id: "cn-9", name: "Lumpia", category: "side", cuisine: "chinese", emoji: "🥟", desc: "Gulungan kulit tipis berisi sayuran dan daging, digoreng atau segar" },
  { id: "cn-10", name: "Tahu Mapo", category: "side", cuisine: "chinese", emoji: "🫕", desc: "Tahu lembut dalam saus pedas Sichuan dengan daging cincang dan merica" },
  { id: "cn-11", name: "Wonton Soup", category: "side", cuisine: "chinese", emoji: "🍲", desc: "Pangsit isi daging dalam kuah kaldu bening yang hangat" },
  { id: "cn-12", name: "Mooncake", category: "dessert", cuisine: "chinese", emoji: "🥮", desc: "Kue bulan tradisional berisi pasta kacang merah atau lotus" },
  { id: "cn-13", name: "Egg Tart", category: "dessert", cuisine: "chinese", emoji: "🥧", desc: "Tart telur custard lembut dengan kulit pastry renyah berlapis" },
  { id: "cn-14", name: "Teh Cina", category: "drink", cuisine: "chinese", emoji: "🍵", desc: "Teh tradisional Cina seperti oolong, jasmine, atau pu-erh" },

  // ── Japanese ──
  { id: "jp-1", name: "Ramen", category: "main", cuisine: "japanese", emoji: "🍜", desc: "Rich broth noodle soup with chashu pork, soft egg, and nori" },
  { id: "jp-2", name: "Sushi", category: "main", cuisine: "japanese", emoji: "🍣", desc: "Vinegared rice topped with fresh fish, seafood, or vegetables" },
  { id: "jp-3", name: "Katsu Curry", category: "main", cuisine: "japanese", emoji: "🍛", desc: "Crispy breaded pork cutlet served with Japanese curry sauce and rice" },
  { id: "jp-4", name: "Udon", category: "main", cuisine: "japanese", emoji: "🍲", desc: "Thick wheat noodles in savory dashi broth with tempura or tofu" },
  { id: "jp-5", name: "Teriyaki", category: "main", cuisine: "japanese", emoji: "🍗", desc: "Grilled meat glazed with sweet soy teriyaki sauce" },
  { id: "jp-6", name: "Sashimi", category: "main", cuisine: "japanese", emoji: "🐟", desc: "Thinly sliced premium raw fish served with wasabi and soy sauce" },
  { id: "jp-7", name: "Tempura", category: "main", cuisine: "japanese", emoji: "🍤", desc: "Light and crispy battered shrimp and vegetables deep-fried" },
  { id: "jp-8", name: "Donburi", category: "main", cuisine: "japanese", emoji: "🍚", desc: "Rice bowl topped with meat, fish, or vegetables and savory sauce" },
  { id: "jp-9", name: "Yakitori", category: "main", cuisine: "japanese", emoji: "🍢", desc: "Skewered grilled chicken with tare or salt seasoning" },
  { id: "jp-10", name: "Edamame", category: "side", cuisine: "japanese", emoji: "🫛", desc: "Steamed young soybeans lightly salted, a classic appetizer" },
  { id: "jp-11", name: "Gyoza", category: "side", cuisine: "japanese", emoji: "🥟", desc: "Pan-fried dumplings with juicy pork and vegetable filling" },
  { id: "jp-12", name: "Takoyaki", category: "side", cuisine: "japanese", emoji: "🐙", desc: "Crispy octopus balls topped with mayo, sauce, and bonito flakes" },
  { id: "jp-13", name: "Mochi", category: "dessert", cuisine: "japanese", emoji: "🍡", desc: "Chewy rice cake with sweet fillings like red bean or ice cream" },
  { id: "jp-14", name: "Matcha Latte", category: "drink", cuisine: "japanese", emoji: "🍵", desc: "Creamy latte made with premium Japanese green tea powder" },

  // ── Korean ──
  { id: "kr-1", name: "Bibimbap", category: "main", cuisine: "korean", emoji: "🍚", desc: "Mixed rice bowl with vegetables, meat, egg, and gochujang sauce" },
  { id: "kr-2", name: "Bulgogi", category: "main", cuisine: "korean", emoji: "🥩", desc: "Sweet soy-marinated beef slices grilled over charcoal" },
  { id: "kr-3", name: "Tteokbokki", category: "main", cuisine: "korean", emoji: "🌶️", desc: "Chewy rice cakes in spicy gochujang sauce with fish cakes" },
  { id: "kr-4", name: "Japchae", category: "main", cuisine: "korean", emoji: "🍝", desc: "Stir-fried glass noodles with vegetables and sesame oil" },
  { id: "kr-5", name: "Samgyeopsal", category: "main", cuisine: "korean", emoji: "🥓", desc: "Grilled pork belly wrapped in lettuce with garlic and ssamjang" },
  { id: "kr-6", name: "Sundubu Jjig", category: "main", cuisine: "korean", emoji: "🍲", desc: "Spicy soft tofu stew with seafood, vegetables, and egg" },
  { id: "kr-7", name: "Dakgalbi", category: "main", cuisine: "korean", emoji: "🍗", desc: "Spicy stir-fried chicken with cabbage, sweet potato, and tteok" },
  { id: "kr-8", name: "Kimchi", category: "side", cuisine: "korean", emoji: "🥬", desc: "Fermented napa cabbage with chili, garlic, and ginger — a Korean staple" },
  { id: "kr-9", name: "Kimbap", category: "side", cuisine: "korean", emoji: "🍙", desc: "Seaweed rice rolls with vegetables, egg, and meat filling" },
  { id: "kr-10", name: "Tteok", category: "side", cuisine: "korean", emoji: "🍡", desc: "Korean rice cakes in various sweet and savory preparations" },
  { id: "kr-11", name: "Bingsu", category: "dessert", cuisine: "korean", emoji: "🍧", desc: "Shaved ice dessert topped with sweet red beans, fruits, and mochi" },
  { id: "kr-12", name: "Sikhye", category: "drink", cuisine: "korean", emoji: "🍶", desc: "Sweet rice punch drink served cold, a traditional Korean beverage" },

  // ── Thai ──
  { id: "th-1", name: "Pad Thai", category: "main", cuisine: "thai", emoji: "🍝", desc: "Stir-fried rice noodles with shrimp, peanuts, bean sprouts, and tamarind" },
  { id: "th-2", name: "Tom Yum", category: "main", cuisine: "thai", emoji: "🍲", desc: "Hot and sour shrimp soup with lemongrass, galangal, and lime leaves" },
  { id: "th-3", name: "Green Curry", category: "main", cuisine: "thai", emoji: "🥘", desc: "Creamy coconut curry with green chilies, Thai basil, and chicken" },
  { id: "th-4", name: "Massaman", category: "main", cuisine: "thai", emoji: "🍛", desc: "Rich peanut-coconut curry with potatoes and tender braised meat" },
  { id: "th-5", name: "Pad Krapow", category: "main", cuisine: "thai", emoji: "🌿", desc: "Stir-fried holy basil with minced meat and fried egg on rice" },
  { id: "th-6", name: "Khao Pad", category: "main", cuisine: "thai", emoji: "🍳", desc: "Thai fried rice with egg, vegetables, and fish sauce" },
  { id: "th-7", name: "Tom Kha Gai", category: "main", cuisine: "thai", emoji: "🥥", desc: "Coconut milk soup with chicken, galangal, and mushrooms" },
  { id: "th-8", name: "Som Tum", category: "side", cuisine: "thai", emoji: "🥗", desc: "Spicy green papaya salad with lime, chili, and peanuts" },
  { id: "th-9", name: "Satay", category: "side", cuisine: "thai", emoji: "🍢", desc: "Grilled marinated meat skewers with peanut dipping sauce" },
  { id: "th-10", name: "Mango Sticky", category: "dessert", cuisine: "thai", emoji: "🥭", desc: "Sweet sticky rice with fresh ripe mango and coconut cream" },
  { id: "th-11", name: "Roti Canai", category: "dessert", cuisine: "thai", emoji: "🫓", desc: "Flaky flatbread served with sweetened condensed milk or curry" },
  { id: "th-12", name: "Thai Tea", category: "drink", cuisine: "thai", emoji: "🧋", desc: "Strong black tea with star anise, sweetened condensed milk, and ice" },

  // ── Indian ──
  { id: "in-1", name: "Biryani", category: "main", cuisine: "indian", emoji: "🍚", desc: "Fragrant basmati rice layered with spiced meat, saffron, and fried onions" },
  { id: "in-2", name: "Butter Chkn", category: "main", cuisine: "indian", emoji: "🍛", desc: "Tender chicken in creamy tomato butter sauce with aromatic spices" },
  { id: "in-3", name: "Tandoori", category: "main", cuisine: "indian", emoji: "🍗", desc: "Yogurt-marinated chicken roasted in a tandoor clay oven until charred" },
  { id: "in-4", name: "Palak Paneer", category: "main", cuisine: "indian", emoji: "🥬", desc: "Cottage cheese cubes in a rich creamy spinach gravy" },
  { id: "in-5", name: "Dal Makhani", category: "main", cuisine: "indian", emoji: "🫘", desc: "Black lentils slow-cooked overnight with butter and cream" },
  { id: "in-6", name: "Rogan Josh", category: "main", cuisine: "indian", emoji: "🥘", desc: "Aromatic Kashmiri lamb curry with rich red chili and yogurt gravy" },
  { id: "in-7", name: "Tikka Masala", category: "main", cuisine: "indian", emoji: "🌶️", desc: "Grilled chicken pieces in a spiced creamy tomato-onion sauce" },
  { id: "in-8", name: "Chole Bhatur", category: "main", cuisine: "indian", emoji: "🫓", desc: "Spicy chickpea curry served with fluffy deep-fried bread" },
  { id: "in-9", name: "Naan", category: "side", cuisine: "indian", emoji: "🫓", desc: "Soft leavened flatbread baked in a tandoor, perfect for scooping curries" },
  { id: "in-10", name: "Samosa", category: "side", cuisine: "indian", emoji: "🥟", desc: "Crispy triangular pastry filled with spiced potatoes and peas" },
  { id: "in-11", name: "Pakora", category: "side", cuisine: "indian", emoji: "🧅", desc: "Vegetable fritters in spiced chickpea batter, deep-fried until crispy" },
  { id: "in-12", name: "Gulab Jamun", category: "dessert", cuisine: "indian", emoji: "🍩", desc: "Soft milk dumplings soaked in rose-cardamom sugar syrup" },
  { id: "in-13", name: "Kheer", category: "dessert", cuisine: "indian", emoji: "🍮", desc: "Creamy rice pudding with cardamom, saffron, and nuts" },
  { id: "in-14", name: "Masala Chai", category: "drink", cuisine: "indian", emoji: "🍵", desc: "Spiced tea brewed with ginger, cardamom, cinnamon, and milk" },

  // ── Middle Eastern ──
  { id: "me-1", name: "Shawarma", category: "main", cuisine: "middle_eastern", emoji: "🌯", desc: "Spiced meat slow-roasted on a vertical spit, wrapped in flatbread" },
  { id: "me-2", name: "Kebab", category: "main", cuisine: "middle_eastern", emoji: "🍢", desc: "Seasoned ground meat grilled on skewers over charcoal" },
  { id: "me-3", name: "Falafel", category: "main", cuisine: "middle_eastern", emoji: "🧆", desc: "Crispy deep-fried chickpea balls with herbs, served in pita" },
  { id: "me-4", name: "Mansaf", category: "main", cuisine: "middle_eastern", emoji: "🍛", desc: "Jordanian national dish of lamb in fermented yogurt sauce over rice" },
  { id: "me-5", name: "Kofta", category: "main", cuisine: "middle_eastern", emoji: "🥩", desc: "Spiced minced meat formed into balls or patties and grilled" },
  { id: "me-6", name: "Maqluba", category: "main", cuisine: "middle_eastern", emoji: "🍚", desc: "Upside-down rice dish layered with meat, vegetables, and spices" },
  { id: "me-7", name: "Hummus", category: "side", cuisine: "middle_eastern", emoji: "🫘", desc: "Smooth chickpea dip with tahini, lemon, garlic, and olive oil" },
  { id: "me-8", name: "Tabbouleh", category: "side", cuisine: "middle_eastern", emoji: "🥗", desc: "Fresh parsley salad with bulgur wheat, tomato, and lemon dressing" },
  { id: "me-9", name: "Fattoush", category: "side", cuisine: "middle_eastern", emoji: "🥬", desc: "Lebanese salad with crispy pita chips, vegetables, and sumac" },
  { id: "me-10", name: "Baklava", category: "dessert", cuisine: "middle_eastern", emoji: "🍯", desc: "Layers of flaky phyllo pastry with nuts and honey syrup" },
  { id: "me-11", name: "Kunafa", category: "dessert", cuisine: "middle_eastern", emoji: "🧀", desc: "Crispy shredded pastry with stretchy cheese and sugar syrup" },
  { id: "me-12", name: "Mint Tea", category: "drink", cuisine: "middle_eastern", emoji: "🍵", desc: "Hot sweetened tea infused with fresh mint leaves" },

  // ── Mexican ──
  { id: "mx-1", name: "Tacos", category: "main", cuisine: "mexican", emoji: "🌮", desc: "Corn tortillas filled with seasoned meat, salsa, and fresh toppings" },
  { id: "mx-2", name: "Burrito", category: "main", cuisine: "mexican", emoji: "🌯", desc: "Large flour tortilla stuffed with rice, beans, meat, and toppings" },
  { id: "mx-3", name: "Quesadilla", category: "main", cuisine: "mexican", emoji: "🧀", desc: "Grilled tortilla filled with melted cheese and meat or vegetables" },
  { id: "mx-4", name: "Enchiladas", category: "main", cuisine: "mexican", emoji: "🌶️", desc: "Rolled tortillas filled with meat, covered in chili sauce and cheese" },
  { id: "mx-5", name: "Tamales", category: "main", cuisine: "mexican", emoji: "🫔", desc: "Corn dough stuffed with meat and steamed in corn husks" },
  { id: "mx-6", name: "Pozole", category: "main", cuisine: "mexican", emoji: "🍲", desc: "Hearty hominy corn stew with pork and red chili broth" },
  { id: "mx-7", name: "Nachos", category: "side", cuisine: "mexican", emoji: "🫓", desc: "Tortilla chips loaded with cheese, jalapeños, and toppings" },
  { id: "mx-8", name: "Guacamole", category: "side", cuisine: "mexican", emoji: "🥑", desc: "Mashed avocado dip with lime, cilantro, onion, and tomato" },
  { id: "mx-9", name: "Elote", category: "side", cuisine: "mexican", emoji: "🌽", desc: "Grilled street corn with mayo, cotija cheese, and chili powder" },
  { id: "mx-10", name: "Churros", category: "dessert", cuisine: "mexican", emoji: "🍩", desc: "Fried dough sticks coated in cinnamon sugar, served with chocolate" },
  { id: "mx-11", name: "Tres Leches", category: "dessert", cuisine: "mexican", emoji: "🍰", desc: "Sponge cake soaked in three types of milk, topped with cream" },
  { id: "mx-12", name: "Horchata", category: "drink", cuisine: "mexican", emoji: "🥛", desc: "Creamy rice milk drink flavored with cinnamon and vanilla" },

  // ── Italian ──
  { id: "it-1", name: "Pizza", category: "main", cuisine: "italian", emoji: "🍕", desc: "Wood-fired flatbread topped with tomato sauce, mozzarella, and toppings" },
  { id: "it-2", name: "Carbonara", category: "main", cuisine: "italian", emoji: "🍝", desc: "Pasta with egg, pecorino cheese, guanciale, and black pepper" },
  { id: "it-3", name: "Lasagna", category: "main", cuisine: "italian", emoji: "🫕", desc: "Layered pasta sheets with meat ragù, béchamel, and melted cheese" },
  { id: "it-4", name: "Risotto", category: "main", cuisine: "italian", emoji: "🍚", desc: "Creamy Italian rice slowly cooked with broth and parmesan" },
  { id: "it-5", name: "Ravioli", category: "main", cuisine: "italian", emoji: "🥟", desc: "Stuffed pasta parcels with ricotta, spinach, or meat filling" },
  { id: "it-6", name: "Gnocchi", category: "main", cuisine: "italian", emoji: "🥔", desc: "Soft potato dumplings in pesto, tomato, or gorgonzola sauce" },
  { id: "it-7", name: "Osso Buco", category: "main", cuisine: "italian", emoji: "🍖", desc: "Braised veal shanks in white wine, vegetables, and gremolata" },
  { id: "it-8", name: "Pesto Pasta", category: "main", cuisine: "italian", emoji: "🌿", desc: "Pasta tossed in fresh basil pesto with pine nuts and parmesan" },
  { id: "it-9", name: "Bruschetta", category: "side", cuisine: "italian", emoji: "🥖", desc: "Toasted bread topped with diced tomatoes, basil, and olive oil" },
  { id: "it-10", name: "Caprese", category: "side", cuisine: "italian", emoji: "🍅", desc: "Fresh mozzarella, tomato, and basil drizzled with olive oil" },
  { id: "it-11", name: "Minestrone", category: "side", cuisine: "italian", emoji: "🍲", desc: "Hearty vegetable soup with beans, pasta, and seasonal vegetables" },
  { id: "it-12", name: "Tiramisu", category: "dessert", cuisine: "italian", emoji: "🍰", desc: "Coffee-soaked ladyfingers layered with mascarpone cream and cocoa" },
  { id: "it-13", name: "Panna Cotta", category: "dessert", cuisine: "italian", emoji: "🍮", desc: "Silky vanilla cream dessert with berry coulis topping" },
  { id: "it-14", name: "Espresso", category: "drink", cuisine: "italian", emoji: "☕", desc: "Concentrated Italian coffee brewed under pressure, rich and bold" },

  // ── French ──
  { id: "fr-1", name: "Croissant", category: "main", cuisine: "french", emoji: "🥐", desc: "Buttery, flaky layered pastry baked golden, a French breakfast staple" },
  { id: "fr-2", name: "Coq au Vin", category: "main", cuisine: "french", emoji: "🍗", desc: "Chicken braised in red wine with mushrooms, onions, and herbs" },
  { id: "fr-3", name: "Ratatouille", category: "main", cuisine: "french", emoji: "🥘", desc: "Provençal stewed vegetables — eggplant, zucchini, tomato, and peppers" },
  { id: "fr-4", name: "Bouillabaiss", category: "main", cuisine: "french", emoji: "🍲", desc: "Marseille-style seafood stew with saffron, tomatoes, and fennel" },
  { id: "fr-5", name: "Duck Confit", category: "main", cuisine: "french", emoji: "🦆", desc: "Duck legs slow-cooked in their own fat until tender and crispy" },
  { id: "fr-6", name: "Beef Bourguig", category: "main", cuisine: "french", emoji: "🥩", desc: "Beef stew braised in Burgundy wine with carrots and pearl onions" },
  { id: "fr-7", name: "Quiche", category: "side", cuisine: "french", emoji: "🥧", desc: "Savory custard tart with cheese, ham, or vegetables in pastry shell" },
  { id: "fr-8", name: "Soupe Oignon", category: "side", cuisine: "french", emoji: "🧅", desc: "Rich caramelized onion soup topped with melted gruyère cheese crouton" },
  { id: "fr-9", name: "Crème Brûlée", category: "dessert", cuisine: "french", emoji: "🍮", desc: "Vanilla custard with a caramelized crispy sugar top layer" },
  { id: "fr-10", name: "Macaron", category: "dessert", cuisine: "french", emoji: "🍪", desc: "Delicate almond meringue cookies with flavored ganache filling" },
  { id: "fr-11", name: "Profiterole", category: "dessert", cuisine: "french", emoji: "🧁", desc: "Choux pastry puffs filled with cream and drizzled with chocolate" },
  { id: "fr-12", name: "Café au Lait", category: "drink", cuisine: "french", emoji: "☕", desc: "French coffee with equal parts hot steamed milk" },

  // ── American ──
  { id: "us-1", name: "Burger", category: "main", cuisine: "american", emoji: "🍔", desc: "Juicy beef patty on a toasted bun with lettuce, tomato, and cheese" },
  { id: "us-2", name: "Hot Dog", category: "main", cuisine: "american", emoji: "🌭", desc: "Grilled sausage in a soft bun with mustard, ketchup, and relish" },
  { id: "us-3", name: "BBQ Ribs", category: "main", cuisine: "american", emoji: "🍖", desc: "Slow-smoked pork ribs glazed with tangy barbecue sauce" },
  { id: "us-4", name: "Mac & Cheese", category: "main", cuisine: "american", emoji: "🧀", desc: "Elbow pasta in a rich creamy cheddar cheese sauce" },
  { id: "us-5", name: "Fried Chicken", category: "main", cuisine: "american", emoji: "🍗", desc: "Buttermilk-brined chicken deep-fried to golden crispy perfection" },
  { id: "us-6", name: "Clam Chowder", category: "main", cuisine: "american", emoji: "🍲", desc: "Thick creamy New England soup with clams, potatoes, and bacon" },
  { id: "us-7", name: "Fries", category: "side", cuisine: "american", emoji: "🍟", desc: "Golden crispy deep-fried potato sticks with salt" },
  { id: "us-8", name: "Onion Rings", category: "side", cuisine: "american", emoji: "🧅", desc: "Thick-cut onion rings in a crispy batter coating" },
  { id: "us-9", name: "Cornbread", category: "side", cuisine: "american", emoji: "🍞", desc: "Sweet and moist cornmeal bread, a Southern comfort classic" },
  { id: "us-10", name: "Donut", category: "dessert", cuisine: "american", emoji: "🍩", desc: "Deep-fried ring of sweet dough with glaze or toppings" },
  { id: "us-11", name: "Brownie", category: "dessert", cuisine: "american", emoji: "🍫", desc: "Dense fudgy chocolate square baked with butter and cocoa" },
  { id: "us-12", name: "Milkshake", category: "drink", cuisine: "american", emoji: "🥤", desc: "Thick blended drink with ice cream, milk, and flavor syrup" },

  // ── Vietnamese ──
  { id: "vn-1", name: "Pho", category: "main", cuisine: "vietnamese", emoji: "🍜", desc: "Aromatic beef or chicken broth with rice noodles and fresh herbs" },
  { id: "vn-2", name: "Banh Mi", category: "main", cuisine: "vietnamese", emoji: "🥖", desc: "Crusty baguette with pâté, pickled vegetables, and grilled meat" },
  { id: "vn-3", name: "Bun Cha", category: "main", cuisine: "vietnamese", emoji: "🍲", desc: "Grilled pork patties with rice noodles and dipping sauce" },
  { id: "vn-4", name: "Bun Bo Hue", category: "main", cuisine: "vietnamese", emoji: "🌶️", desc: "Spicy lemongrass beef noodle soup from central Vietnam" },
  { id: "vn-5", name: "Com Tam", category: "main", cuisine: "vietnamese", emoji: "🍚", desc: "Broken rice with grilled pork chop, egg meatloaf, and pickles" },
  { id: "vn-6", name: "Cao Lau", category: "main", cuisine: "vietnamese", emoji: "🍝", desc: "Hoi An specialty noodles with pork, greens, and crispy croutons" },
  { id: "vn-7", name: "Goi Cuon", category: "side", cuisine: "vietnamese", emoji: "🥬", desc: "Fresh rice paper rolls with shrimp, herbs, and peanut sauce" },
  { id: "vn-8", name: "Banh Xeo", category: "side", cuisine: "vietnamese", emoji: "🥞", desc: "Crispy Vietnamese crepe filled with shrimp, pork, and bean sprouts" },
  { id: "vn-9", name: "Che", category: "dessert", cuisine: "vietnamese", emoji: "🍧", desc: "Sweet Vietnamese dessert soup with beans, jelly, and coconut milk" },
  { id: "vn-10", name: "Ca Phe Sua", category: "drink", cuisine: "vietnamese", emoji: "☕", desc: "Strong drip coffee with sweetened condensed milk over ice" },

  // ── Spanish ──
  { id: "es-1", name: "Paella", category: "main", cuisine: "spanish", emoji: "🥘", desc: "Saffron rice with seafood, chicken, and vegetables from Valencia" },
  { id: "es-2", name: "Tapas", category: "main", cuisine: "spanish", emoji: "🍽️", desc: "Assortment of small Spanish appetizer dishes for sharing" },
  { id: "es-3", name: "Gazpacho", category: "main", cuisine: "spanish", emoji: "🍲", desc: "Cold tomato-based soup blended with peppers, cucumber, and garlic" },
  { id: "es-4", name: "Jamon Iberic", category: "main", cuisine: "spanish", emoji: "🥩", desc: "Premium dry-cured Iberian ham, thinly sliced and full of flavor" },
  { id: "es-5", name: "Tortilla Esp", category: "main", cuisine: "spanish", emoji: "🥚", desc: "Thick Spanish omelette with potatoes and onions" },
  { id: "es-6", name: "Patatas Brav", category: "side", cuisine: "spanish", emoji: "🥔", desc: "Crispy fried potato cubes with spicy bravas and aioli sauce" },
  { id: "es-7", name: "Croquetas", category: "side", cuisine: "spanish", emoji: "🥔", desc: "Creamy béchamel croquettes with ham or cheese, breaded and fried" },
  { id: "es-8", name: "Churros", category: "dessert", cuisine: "spanish", emoji: "🍩", desc: "Fried dough sticks dipped in thick hot Spanish chocolate" },
  { id: "es-9", name: "Crema Catala", category: "dessert", cuisine: "spanish", emoji: "🍮", desc: "Catalan custard with caramelized sugar crust, citrus-infused" },
  { id: "es-10", name: "Sangria", category: "drink", cuisine: "spanish", emoji: "🍷", desc: "Red wine punch with fresh fruits, brandy, and sparkling water" },

  // ── Turkish ──
  { id: "tr-1", name: "Doner Kebab", category: "main", cuisine: "turkish", emoji: "🥙", desc: "Seasoned meat cooked on a vertical rotisserie, sliced thin" },
  { id: "tr-2", name: "Pide", category: "main", cuisine: "turkish", emoji: "🫓", desc: "Boat-shaped Turkish flatbread filled with cheese, meat, or egg" },
  { id: "tr-3", name: "Lahmacun", category: "main", cuisine: "turkish", emoji: "🍕", desc: "Thin crispy flatbread topped with spiced minced meat and herbs" },
  { id: "tr-4", name: "Iskender", category: "main", cuisine: "turkish", emoji: "🥩", desc: "Sliced doner over pita with tomato sauce, yogurt, and melted butter" },
  { id: "tr-5", name: "Manti", category: "main", cuisine: "turkish", emoji: "🥟", desc: "Tiny Turkish dumplings in garlic yogurt and chili butter sauce" },
  { id: "tr-6", name: "Kofte", category: "main", cuisine: "turkish", emoji: "🍖", desc: "Seasoned grilled meatballs with herbs and Middle Eastern spices" },
  { id: "tr-7", name: "Borek", category: "side", cuisine: "turkish", emoji: "🥧", desc: "Flaky phyllo pastry filled with cheese, spinach, or minced meat" },
  { id: "tr-8", name: "Mercimek", category: "side", cuisine: "turkish", emoji: "🍲", desc: "Creamy red lentil soup with cumin, a Turkish daily staple" },
  { id: "tr-9", name: "Baklava", category: "dessert", cuisine: "turkish", emoji: "🍯", desc: "Layers of thin pastry with pistachios soaked in sweet syrup" },
  { id: "tr-10", name: "Turkish Tea", category: "drink", cuisine: "turkish", emoji: "🍵", desc: "Strong black tea served in tulip-shaped glasses with sugar cubes" },

  // ── Malaysian ──
  { id: "my-1", name: "Nasi Lemak", category: "main", cuisine: "malaysian", emoji: "🍚", desc: "Coconut rice with sambal, anchovies, peanuts, egg, and cucumber" },
  { id: "my-2", name: "Char Kway T", category: "main", cuisine: "malaysian", emoji: "🍝", desc: "Smoky wok-fried flat noodles with shrimp, bean sprouts, and egg" },
  { id: "my-3", name: "Laksa", category: "main", cuisine: "malaysian", emoji: "🍜", desc: "Spicy coconut curry noodle soup with shrimp and fish cake" },
  { id: "my-4", name: "Rendang", category: "main", cuisine: "malaysian", emoji: "🥘", desc: "Dry coconut curry with tender beef, lemongrass, and galangal" },
  { id: "my-5", name: "Satay", category: "main", cuisine: "malaysian", emoji: "🍢", desc: "Charcoal-grilled meat skewers with spicy peanut dipping sauce" },
  { id: "my-6", name: "Mee Goreng", category: "main", cuisine: "malaysian", emoji: "🍝", desc: "Spicy stir-fried noodles with tofu puffs, potato, and sweet sauce" },
  { id: "my-7", name: "Roti Canai", category: "side", cuisine: "malaysian", emoji: "🫓", desc: "Flaky stretched flatbread served with dhal curry for dipping" },
  { id: "my-8", name: "Rojak", category: "side", cuisine: "malaysian", emoji: "🥗", desc: "Fruit and vegetable salad in thick sweet shrimp paste sauce" },
  { id: "my-9", name: "Cendol", category: "dessert", cuisine: "malaysian", emoji: "🍧", desc: "Shaved ice with pandan jelly strips, coconut milk, and palm sugar" },
  { id: "my-10", name: "Teh Tarik", category: "drink", cuisine: "malaysian", emoji: "🧋", desc: "Pulled tea — hot milk tea frothed by pouring between two cups" },

  // ── Filipino ──
  { id: "ph-1", name: "Adobo", category: "main", cuisine: "filipino", emoji: "🍗", desc: "Chicken or pork braised in soy sauce, vinegar, garlic, and bay leaves" },
  { id: "ph-2", name: "Sinigang", category: "main", cuisine: "filipino", emoji: "🍲", desc: "Sour tamarind soup with pork, vegetables, and tomatoes" },
  { id: "ph-3", name: "Lechon", category: "main", cuisine: "filipino", emoji: "🐖", desc: "Whole roasted pig with crispy golden skin, a Filipino celebration centerpiece" },
  { id: "ph-4", name: "Kare-Kare", category: "main", cuisine: "filipino", emoji: "🥘", desc: "Oxtail stew in rich peanut sauce with eggplant and string beans" },
  { id: "ph-5", name: "Sisig", category: "main", cuisine: "filipino", emoji: "🍳", desc: "Sizzling chopped pork face and ears with chili, onions, and egg" },
  { id: "ph-6", name: "Pancit", category: "main", cuisine: "filipino", emoji: "🍝", desc: "Stir-fried noodles with vegetables, meat, and soy-citrus sauce" },
  { id: "ph-7", name: "Lumpia", category: "side", cuisine: "filipino", emoji: "🥟", desc: "Filipino spring rolls with savory meat and vegetable filling" },
  { id: "ph-8", name: "Ensaymada", category: "side", cuisine: "filipino", emoji: "🍞", desc: "Soft buttery brioche-like bread topped with cheese and sugar" },
  { id: "ph-9", name: "Halo-Halo", category: "dessert", cuisine: "filipino", emoji: "🍧", desc: "Shaved ice with sweet beans, fruits, leche flan, and ube ice cream" },
  { id: "ph-10", name: "Calamansi", category: "drink", cuisine: "filipino", emoji: "🍊", desc: "Refreshing Philippine lime juice drink sweetened with sugar" },

  // ── Greek ──
  { id: "gr-1", name: "Moussaka", category: "main", cuisine: "greek", emoji: "🍆", desc: "Layered eggplant, minced meat, and béchamel baked casserole" },
  { id: "gr-2", name: "Souvlaki", category: "main", cuisine: "greek", emoji: "🍢", desc: "Grilled marinated meat on skewers with pita and tzatziki" },
  { id: "gr-3", name: "Gyros", category: "main", cuisine: "greek", emoji: "🥙", desc: "Sliced rotisserie meat in warm pita with tomato, onion, and tzatziki" },
  { id: "gr-4", name: "Pastitsio", category: "main", cuisine: "greek", emoji: "🍝", desc: "Greek baked pasta with spiced meat sauce and creamy béchamel" },
  { id: "gr-5", name: "Spanakopita", category: "main", cuisine: "greek", emoji: "🥬", desc: "Flaky phyllo pie filled with spinach, feta cheese, and herbs" },
  { id: "gr-6", name: "Greek Salad", category: "side", cuisine: "greek", emoji: "🥗", desc: "Tomatoes, cucumbers, olives, and feta with olive oil dressing" },
  { id: "gr-7", name: "Tzatziki", category: "side", cuisine: "greek", emoji: "🥒", desc: "Cool yogurt dip with cucumber, garlic, and dill" },
  { id: "gr-8", name: "Dolmades", category: "side", cuisine: "greek", emoji: "🌿", desc: "Grape leaves stuffed with seasoned rice, herbs, and lemon" },
  { id: "gr-9", name: "Baklava", category: "dessert", cuisine: "greek", emoji: "🍯", desc: "Layered phyllo with walnuts and honey syrup, Greek-style" },
  { id: "gr-10", name: "Greek Coffee", category: "drink", cuisine: "greek", emoji: "☕", desc: "Strong unfiltered coffee brewed in a briki pot with sugar" },

  // ── Brazilian ──
  { id: "br-1", name: "Feijoada", category: "main", cuisine: "brazilian", emoji: "🫘", desc: "Black bean stew with pork, sausage, and beef — Brazil's national dish" },
  { id: "br-2", name: "Churrasco", category: "main", cuisine: "brazilian", emoji: "🥩", desc: "Brazilian-style barbecue with skewered meats carved tableside" },
  { id: "br-3", name: "Moqueca", category: "main", cuisine: "brazilian", emoji: "🐟", desc: "Bahian fish stew with coconut milk, palm oil, and peppers" },
  { id: "br-4", name: "Coxinha", category: "main", cuisine: "brazilian", emoji: "🍗", desc: "Tear-drop shaped fried dough filled with shredded chicken" },
  { id: "br-5", name: "Picanha", category: "main", cuisine: "brazilian", emoji: "🥩", desc: "Prime beef rump cap grilled on skewers with coarse salt" },
  { id: "br-6", name: "Pao de Queij", category: "side", cuisine: "brazilian", emoji: "🧀", desc: "Chewy cheese bread balls made with tapioca flour and minas cheese" },
  { id: "br-7", name: "Farofa", category: "side", cuisine: "brazilian", emoji: "🌽", desc: "Toasted cassava flour crumbles with butter, bacon, and onions" },
  { id: "br-8", name: "Acai Bowl", category: "dessert", cuisine: "brazilian", emoji: "🫐", desc: "Frozen acai berry blend topped with granola, banana, and honey" },
  { id: "br-9", name: "Brigadeiro", category: "dessert", cuisine: "brazilian", emoji: "🍫", desc: "Chocolate truffle balls made with condensed milk and cocoa" },
  { id: "br-10", name: "Guarana", category: "drink", cuisine: "brazilian", emoji: "🥤", desc: "Sweet fizzy soda made from guaraná berry, a Brazilian favorite" },

  // ── Ethiopian ──
  { id: "et-1", name: "Injera", category: "main", cuisine: "ethiopian", emoji: "🫓", desc: "Spongy sourdough flatbread used as plate and utensil for stews" },
  { id: "et-2", name: "Doro Wat", category: "main", cuisine: "ethiopian", emoji: "🍗", desc: "Spicy chicken stew with berbere spice, onions, and hard-boiled eggs" },
  { id: "et-3", name: "Kitfo", category: "main", cuisine: "ethiopian", emoji: "🥩", desc: "Ethiopian steak tartare with spiced clarified butter and mitmita" },
  { id: "et-4", name: "Tibs", category: "main", cuisine: "ethiopian", emoji: "🍖", desc: "Sautéed meat with vegetables, onions, and Ethiopian spices" },
  { id: "et-5", name: "Shiro", category: "main", cuisine: "ethiopian", emoji: "🫘", desc: "Smooth chickpea flour stew with garlic, ginger, and berbere" },
  { id: "et-6", name: "Gomen", category: "side", cuisine: "ethiopian", emoji: "🥬", desc: "Ethiopian-style sautéed collard greens with garlic and ginger" },
  { id: "et-7", name: "Ambasha", category: "dessert", cuisine: "ethiopian", emoji: "🍞", desc: "Sweet celebration bread with cardamom and a decorative scored top" },
  { id: "et-8", name: "Buna Coffee", category: "drink", cuisine: "ethiopian", emoji: "☕", desc: "Traditional Ethiopian coffee ceremony brew — birthplace of coffee" },

  // ── Moroccan ──
  { id: "ma-1", name: "Tagine", category: "main", cuisine: "moroccan", emoji: "🥘", desc: "Slow-cooked stew with meat, dried fruits, and spices in a clay pot" },
  { id: "ma-2", name: "Couscous", category: "main", cuisine: "moroccan", emoji: "🍚", desc: "Steamed semolina grains with seven vegetables and tender lamb" },
  { id: "ma-3", name: "Pastilla", category: "main", cuisine: "moroccan", emoji: "🥧", desc: "Flaky pastry pie with spiced pigeon or chicken and almonds" },
  { id: "ma-4", name: "Harira", category: "main", cuisine: "moroccan", emoji: "🍲", desc: "Hearty tomato-lentil soup with chickpeas, traditional for Ramadan" },
  { id: "ma-5", name: "Mechoui", category: "main", cuisine: "moroccan", emoji: "🍖", desc: "Whole slow-roasted lamb seasoned with cumin and butter" },
  { id: "ma-6", name: "Zaalouk", category: "side", cuisine: "moroccan", emoji: "🍆", desc: "Smoky eggplant and tomato salad with garlic and Moroccan spices" },
  { id: "ma-7", name: "Chebakia", category: "dessert", cuisine: "moroccan", emoji: "🍯", desc: "Flower-shaped fried pastry soaked in honey and coated with sesame" },
  { id: "ma-8", name: "Mint Tea", category: "drink", cuisine: "moroccan", emoji: "🍵", desc: "Moroccan green tea with fresh mint and generous sugar, poured high" },

  // ── German ──
  { id: "de-1", name: "Bratwurst", category: "main", cuisine: "german", emoji: "🌭", desc: "Grilled German pork sausage served with mustard and a bread roll" },
  { id: "de-2", name: "Schnitzel", category: "main", cuisine: "german", emoji: "🥩", desc: "Breaded and fried thin pork or veal cutlet, golden and crispy" },
  { id: "de-3", name: "Sauerbraten", category: "main", cuisine: "german", emoji: "🍖", desc: "Marinated pot roast braised in vinegar-wine with sweet gravy" },
  { id: "de-4", name: "Currywurst", category: "main", cuisine: "german", emoji: "🌶️", desc: "Sliced grilled sausage in curry-ketchup sauce, a Berlin street food icon" },
  { id: "de-5", name: "Eintopf", category: "main", cuisine: "german", emoji: "🍲", desc: "Hearty one-pot stew with meat, potatoes, and seasonal vegetables" },
  { id: "de-6", name: "Kartoffelsal", category: "side", cuisine: "german", emoji: "🥔", desc: "German potato salad with vinegar dressing or creamy mayo" },
  { id: "de-7", name: "Bretzel", category: "side", cuisine: "german", emoji: "🥨", desc: "Soft Bavarian pretzel with a golden crust and coarse salt" },
  { id: "de-8", name: "Sauerkraut", category: "side", cuisine: "german", emoji: "🥬", desc: "Fermented shredded cabbage with a tangy sour flavor" },
  { id: "de-9", name: "Strudel", category: "dessert", cuisine: "german", emoji: "🥧", desc: "Layered pastry roll filled with spiced apples, raisins, and cinnamon" },
  { id: "de-10", name: "Apfelschorle", category: "drink", cuisine: "german", emoji: "🍎", desc: "Refreshing mix of apple juice and sparkling water, Germany's favorite" },

  // ── Caribbean ──
  { id: "cb-1", name: "Jerk Chicken", category: "main", cuisine: "caribbean", emoji: "🍗", desc: "Chicken marinated in spicy jerk seasoning and grilled over pimento wood" },
  { id: "cb-2", name: "Roti", category: "main", cuisine: "caribbean", emoji: "🫓", desc: "Flatbread wrap filled with curried potatoes, chickpeas, and meat" },
  { id: "cb-3", name: "Ackee & Salt", category: "main", cuisine: "caribbean", emoji: "🐟", desc: "Jamaica's national dish — ackee fruit sautéed with saltfish and peppers" },
  { id: "cb-4", name: "Curry Goat", category: "main", cuisine: "caribbean", emoji: "🥘", desc: "Tender goat meat slow-cooked in aromatic Caribbean curry spices" },
  { id: "cb-5", name: "Pelau", category: "main", cuisine: "caribbean", emoji: "🍚", desc: "One-pot rice dish with pigeon peas, coconut milk, and caramelized chicken" },
  { id: "cb-6", name: "Plantain", category: "side", cuisine: "caribbean", emoji: "🍌", desc: "Sweet ripe plantains fried until caramelized and golden" },
  { id: "cb-7", name: "Rum Cake", category: "dessert", cuisine: "caribbean", emoji: "🍰", desc: "Dense moist cake soaked in dark Caribbean rum and spices" },
  { id: "cb-8", name: "Sorrel Drink", category: "drink", cuisine: "caribbean", emoji: "🌺", desc: "Tangy hibiscus flower drink with ginger, cinnamon, and clove" },

  // ── Peruvian ──
  { id: "pe-1", name: "Ceviche", category: "main", cuisine: "peruvian", emoji: "🐟", desc: "Fresh raw fish cured in lime juice with onions, chili, and cilantro" },
  { id: "pe-2", name: "Lomo Saltado", category: "main", cuisine: "peruvian", emoji: "🥩", desc: "Stir-fried beef with onions, tomatoes, and fries over rice" },
  { id: "pe-3", name: "Aji de Galli", category: "main", cuisine: "peruvian", emoji: "🍗", desc: "Creamy shredded chicken in spicy aji amarillo pepper and walnut sauce" },
  { id: "pe-4", name: "Arroz Chaufa", category: "main", cuisine: "peruvian", emoji: "🍚", desc: "Peruvian-Chinese fried rice with soy sauce, ginger, and green onions" },
  { id: "pe-5", name: "Anticuchos", category: "main", cuisine: "peruvian", emoji: "🍢", desc: "Grilled marinated beef heart skewers with aji panca sauce" },
  { id: "pe-6", name: "Papa Huanc", category: "side", cuisine: "peruvian", emoji: "🥔", desc: "Boiled potatoes in creamy spicy cheese and huacatay sauce" },
  { id: "pe-7", name: "Alfajores", category: "dessert", cuisine: "peruvian", emoji: "🍪", desc: "Delicate shortbread cookies sandwiched with dulce de leche" },
  { id: "pe-8", name: "Chicha Mora", category: "drink", cuisine: "peruvian", emoji: "🍇", desc: "Sweet purple corn drink spiced with cinnamon, clove, and lime" },

  // ── Pakistani ──
  { id: "pk-1", name: "Nihari", category: "main", cuisine: "pakistani", emoji: "🍲", desc: "Slow-cooked beef or lamb shank stew, rich with bone marrow and spices" },
  { id: "pk-2", name: "Haleem", category: "main", cuisine: "pakistani", emoji: "🥘", desc: "Thick stew of wheat, lentils, and slow-cooked shredded meat" },
  { id: "pk-3", name: "Biryani", category: "main", cuisine: "pakistani", emoji: "🍚", desc: "Layered spiced rice with tender meat, saffron, and fried onions" },
  { id: "pk-4", name: "Seekh Kebab", category: "main", cuisine: "pakistani", emoji: "🍢", desc: "Spiced minced meat molded on skewers and grilled over charcoal" },
  { id: "pk-5", name: "Karahi", category: "main", cuisine: "pakistani", emoji: "🥘", desc: "Stir-fried meat in a wok with tomatoes, green chilies, and ginger" },
  { id: "pk-6", name: "Chapli Kebab", category: "main", cuisine: "pakistani", emoji: "🥩", desc: "Flat round Pashtun kebab with minced meat, spices, and pomegranate" },
  { id: "pk-7", name: "Paratha", category: "side", cuisine: "pakistani", emoji: "🫓", desc: "Layered flaky flatbread cooked with ghee on a griddle" },
  { id: "pk-8", name: "Raita", category: "side", cuisine: "pakistani", emoji: "🥒", desc: "Cool yogurt condiment with cucumber, mint, and cumin" },
  { id: "pk-9", name: "Jalebi", category: "dessert", cuisine: "pakistani", emoji: "🍩", desc: "Crispy deep-fried batter spirals soaked in saffron sugar syrup" },
  { id: "pk-10", name: "Lassi", category: "drink", cuisine: "pakistani", emoji: "🥛", desc: "Creamy chilled yogurt drink, sweet with sugar or salty with cumin" },
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
  const primary = cuisine ? getFoodsByCuisine(cuisine) : ALL_FOODS;
  const shuffled = [...primary].sort(() => Math.random() - 0.5);
  const picked = shuffled.slice(0, Math.min(count, shuffled.length));
  if (picked.length < count && cuisine) {
    const ids = new Set(picked.map((f) => f.id));
    const rest = ALL_FOODS.filter((f) => !ids.has(f.id)).sort(() => Math.random() - 0.5);
    picked.push(...rest.slice(0, count - picked.length));
  }
  return picked;
}

/** Deterministic initial set for hydration safety */
export function getInitialItems(count: number = 8): FoodItem[] {
  return ALL_FOODS.slice(0, Math.min(count, ALL_FOODS.length));
}
