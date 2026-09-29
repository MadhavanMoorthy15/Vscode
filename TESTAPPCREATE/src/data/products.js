const picsum = (id) => `https://picsum.photos/id/${id}/640/640`;

export const categories = [
  { slug: "mobiles", name: "Mobiles", icon: "📱" },
  { slug: "laptops", name: "Laptops", icon: "💻" },
  { slug: "audio", name: "Audio", icon: "🎧" },
  { slug: "wearables", name: "Wearables", icon: "⌚" },
  { slug: "fashion", name: "Fashion", icon: "👕" },
  { slug: "home-appliances", name: "Home Appliances", icon: "🏠" },
  { slug: "books", name: "Books", icon: "📚" },
  { slug: "sports", name: "Sports", icon: "⚽" },
];

export const products = [
  { id: 1, title: "Nova X Pro 5G", brand: "Nova", category: "mobiles", price: 54999, mrp: 69999, rating: 4.4, reviews: 12840, stock: 18, badge: "Bestseller", color: "Midnight Black", image: picsum(160) },
  { id: 2, title: "Pixelora 12", brand: "Pixelora", category: "mobiles", price: 42999, mrp: 49999, rating: 4.2, reviews: 6421, stock: 9, badge: "Deal", color: "Glacier", image: picsum(201) },
  { id: 3, title: "AeroLite 9", brand: "Aero", category: "mobiles", price: 18999, mrp: 22999, rating: 4.0, reviews: 3102, stock: 40, badge: null, color: "Blue", image: picsum(250) },
  { id: 4, title: "ZenFold Duo", brand: "Zen", category: "mobiles", price: 89999, mrp: 109999, rating: 4.6, reviews: 980, stock: 4, badge: "New", color: "Cream", image: picsum(119) },
  { id: 5, title: "Spark Mini", brand: "Spark", category: "mobiles", price: 9999, mrp: 12999, rating: 3.8, reviews: 22011, stock: 0, badge: "Value", color: "Green", image: picsum(111) },

  { id: 6, title: "BookAir 14", brand: "Nimbus", category: "laptops", price: 74999, mrp: 89999, rating: 4.5, reviews: 4102, stock: 12, badge: "Editor's pick", color: "Silver", image: picsum(48) },
  { id: 7, title: "Forge 15 RTX", brand: "Forge", category: "laptops", price: 124999, mrp: 149999, rating: 4.7, reviews: 1888, stock: 6, badge: "Gaming", color: "Black", image: picsum(0) },
  { id: 8, title: "Campus Note 13", brand: "Campus", category: "laptops", price: 39999, mrp: 45999, rating: 4.1, reviews: 7600, stock: 22, badge: null, color: "Grey", image: picsum(2) },
  { id: 9, title: "Studio Pro 16", brand: "Nimbus", category: "laptops", price: 189999, mrp: 209999, rating: 4.8, reviews: 640, stock: 3, badge: "Pro", color: "Space Grey", image: picsum(3) },
  { id: 10, title: "LiteBook Go", brand: "Campus", category: "laptops", price: 28999, mrp: 34999, rating: 3.9, reviews: 5120, stock: 15, badge: "Deal", color: "Blue", image: picsum(6) },

  { id: 11, title: "Pulse ANC Headphones", brand: "Pulse", category: "audio", price: 7999, mrp: 12999, rating: 4.3, reviews: 15440, stock: 30, badge: "Bestseller", color: "Black", image: picsum(96) },
  { id: 12, title: "Buds Air Mini", brand: "Pulse", category: "audio", price: 2499, mrp: 3999, rating: 4.0, reviews: 28901, stock: 50, badge: null, color: "White", image: picsum(106) },
  { id: 13, title: "Studio Monitor 80", brand: "Wave", category: "audio", price: 14999, mrp: 18999, rating: 4.6, reviews: 870, stock: 8, badge: "New", color: "Walnut", image: picsum(145) },
  { id: 14, title: "Boom Bar Portable", brand: "Wave", category: "audio", price: 3499, mrp: 4999, rating: 4.1, reviews: 6402, stock: 19, badge: null, color: "Orange", image: picsum(146) },
  { id: 15, title: "MicCast USB", brand: "Pulse", category: "audio", price: 4599, mrp: 5999, rating: 4.4, reviews: 1204, stock: 11, badge: null, color: "Black", image: picsum(180) },

  { id: 16, title: "FitBand 6", brand: "Stride", category: "wearables", price: 2999, mrp: 4499, rating: 4.2, reviews: 9800, stock: 34, badge: "Deal", color: "Teal", image: picsum(101) },
  { id: 17, title: "Chrono Watch S", brand: "Stride", category: "wearables", price: 18999, mrp: 22999, rating: 4.5, reviews: 3201, stock: 7, badge: "New", color: "Gold", image: picsum(175) },
  { id: 18, title: "RunPods Open Ear", brand: "Pulse", category: "wearables", price: 5999, mrp: 7999, rating: 4.0, reviews: 2100, stock: 14, badge: null, color: "Grey", image: picsum(152) },
  { id: 19, title: "Health Ring", brand: "Stride", category: "wearables", price: 9999, mrp: 12999, rating: 3.7, reviews: 540, stock: 5, badge: null, color: "Silver", image: picsum(133) },
  { id: 20, title: "Kids Tracker Band", brand: "Stride", category: "wearables", price: 1999, mrp: 2499, rating: 3.9, reviews: 880, stock: 20, badge: "Value", color: "Pink", image: picsum(102) },

  { id: 21, title: "Oxford Shirt", brand: "Loom", category: "fashion", price: 1499, mrp: 2499, rating: 4.3, reviews: 4300, stock: 60, badge: null, color: "Sky Blue", image: picsum(21) },
  { id: 22, title: "Denim Jacket", brand: "Loom", category: "fashion", price: 3499, mrp: 4999, rating: 4.5, reviews: 2104, stock: 16, badge: "Trending", color: "Indigo", image: picsum(29) },
  { id: 23, title: "Running Sneakers", brand: "Stride", category: "fashion", price: 4299, mrp: 5999, rating: 4.4, reviews: 7601, stock: 25, badge: "Bestseller", color: "White", image: picsum(21) },
  { id: 24, title: "Wool Overcoat", brand: "Atelier", category: "fashion", price: 8999, mrp: 12999, rating: 4.6, reviews: 640, stock: 8, badge: null, color: "Camel", image: picsum(64) },
  { id: 25, title: "Everyday Tote", brand: "Loom", category: "fashion", price: 1999, mrp: 2799, rating: 4.1, reviews: 1502, stock: 18, badge: null, color: "Tan", image: picsum(30) },

  { id: 26, title: "AirFry 4.5L", brand: "Hearth", category: "home-appliances", price: 7999, mrp: 10999, rating: 4.5, reviews: 11200, stock: 13, badge: "Bestseller", color: "Black", image: picsum(292) },
  { id: 27, title: "QuietVac Robot", brand: "Hearth", category: "home-appliances", price: 24999, mrp: 32999, rating: 4.2, reviews: 980, stock: 6, badge: "New", color: "White", image: picsum(106) },
  { id: 28, title: "BlendPro 700", brand: "Hearth", category: "home-appliances", price: 3499, mrp: 4999, rating: 4.0, reviews: 5400, stock: 22, badge: null, color: "Red", image: picsum(225) },
  { id: 29, title: "Steam Iron Glide", brand: "Hearth", category: "home-appliances", price: 1899, mrp: 2499, rating: 3.8, reviews: 3200, stock: 30, badge: null, color: "Blue", image: picsum(201) },
  { id: 30, title: "1.5 Ton Inverter AC", brand: "Coolio", category: "home-appliances", price: 32999, mrp: 42999, rating: 4.4, reviews: 4100, stock: 5, badge: "Deal", color: "White", image: picsum(103) },

  { id: 31, title: "The Midnight Library", brand: "Harbor Press", category: "books", price: 399, mrp: 599, rating: 4.6, reviews: 22040, stock: 80, badge: "Bestseller", color: "Paperback", image: picsum(24) },
  { id: 32, title: "Atomic Habits", brand: "Harbor Press", category: "books", price: 449, mrp: 699, rating: 4.8, reviews: 54021, stock: 100, badge: null, color: "Paperback", image: picsum(24) },
  { id: 33, title: "Designing Data Systems", brand: "TechShelf", category: "books", price: 899, mrp: 1299, rating: 4.5, reviews: 3100, stock: 14, badge: null, color: "Hardcover", image: picsum(367) },
  { id: 34, title: "Kitchen Stories", brand: "Harbor Press", category: "books", price: 549, mrp: 799, rating: 4.2, reviews: 870, stock: 9, badge: null, color: "Hardcover", image: picsum(292) },
  { id: 35, title: "Field Guide to Birds", brand: "Wild Ink", category: "books", price: 699, mrp: 999, rating: 4.3, reviews: 430, stock: 7, badge: "New", color: "Paperback", image: picsum(429) },

  { id: 36, title: "Match Football", brand: "Arena", category: "sports", price: 1299, mrp: 1899, rating: 4.4, reviews: 6400, stock: 40, badge: null, color: "White/Black", image: picsum(1074) },
  { id: 37, title: "Yoga Mat Pro", brand: "Stride", category: "sports", price: 1499, mrp: 2199, rating: 4.3, reviews: 5102, stock: 28, badge: "Deal", color: "Purple", image: picsum(1015) },
  { id: 38, title: "Adjustable Dumbbells", brand: "Arena", category: "sports", price: 6999, mrp: 8999, rating: 4.6, reviews: 2100, stock: 10, badge: null, color: "Black", image: picsum(866) },
  { id: 39, title: "Carbon Tennis Racket", brand: "Arena", category: "sports", price: 4599, mrp: 5999, rating: 4.1, reviews: 760, stock: 12, badge: null, color: "Yellow", image: picsum(1080) },
  { id: 40, title: "Hydration Bottle 1L", brand: "Stride", category: "sports", price: 799, mrp: 1299, rating: 4.0, reviews: 9800, stock: 55, badge: "Value", color: "Steel", image: picsum(30) },
];

export function getProduct(id) {
  return products.find((p) => p.id === Number(id));
}

export function categoryName(slug) {
  return categories.find((c) => c.slug === slug)?.name || slug;
}
