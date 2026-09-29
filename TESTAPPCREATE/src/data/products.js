// Mock product catalog - 40 products across 8 categories
export const categories = [
  "Mobiles",
  "Laptops",
  "Audio",
  "Wearables",
  "Fashion",
  "Home Appliances",
  "Books",
  "Sports",
];

const img = (seed) =>
  `https://picsum.photos/seed/${seed}/400/400`;

export const products = [
  // Mobiles
  { id: 1, name: "Galaxy S24 Ultra", category: "Mobiles", price: 124999, rating: 4.6, stock: 12, brand: "Samsung", image: img("mobile1"), description: "6.8-inch QHD+ display, 200MP camera, Snapdragon 8 Gen 3, 5000mAh battery." },
  { id: 2, name: "iPhone 15 Pro", category: "Mobiles", price: 134900, rating: 4.7, stock: 8, brand: "Apple", image: img("mobile2"), description: "A17 Pro chip, titanium frame, 48MP main camera, USB-C." },
  { id: 3, name: "Pixel 8", category: "Mobiles", price: 75999, rating: 4.4, stock: 20, brand: "Google", image: img("mobile3"), description: "Tensor G3, 6.2-inch OLED, best-in-class computational photography." },
  { id: 4, name: "OnePlus 12", category: "Mobiles", price: 64999, rating: 4.5, stock: 15, brand: "OnePlus", image: img("mobile4"), description: "Snapdragon 8 Gen 3, 100W fast charging, 120Hz display." },
  { id: 5, name: "Redmi Note 13 Pro", category: "Mobiles", price: 25999, rating: 4.2, stock: 40, brand: "Xiaomi", image: img("mobile5"), description: "200MP camera, AMOLED display, budget flagship." },

  // Laptops
  { id: 6, name: "MacBook Air M3", category: "Laptops", price: 114900, rating: 4.8, stock: 10, brand: "Apple", image: img("laptop1"), description: "13.6-inch Liquid Retina, M3 chip, 18-hour battery life." },
  { id: 7, name: "Dell XPS 15", category: "Laptops", price: 165000, rating: 4.6, stock: 6, brand: "Dell", image: img("laptop2"), description: "Intel Core i9, RTX 4060, 15.6-inch OLED touch display." },
  { id: 8, name: "HP Spectre x360", category: "Laptops", price: 139999, rating: 4.4, stock: 9, brand: "HP", image: img("laptop3"), description: "Convertible 2-in-1, Intel Evo, gorgeous 3K2K OLED." },
  { id: 9, name: "Lenovo ThinkPad X1", category: "Laptops", price: 158000, rating: 4.5, stock: 7, brand: "Lenovo", image: img("laptop4"), description: "Business-class durability, Core i7, 14-inch WUXGA." },
  { id: 10, name: "Asus ROG Zephyrus", category: "Laptops", price: 189999, rating: 4.7, stock: 5, brand: "Asus", image: img("laptop5"), description: "Ryzen 9, RTX 4080, 240Hz gaming display." },

  // Audio
  { id: 11, name: "Sony WH-1000XM5", category: "Audio", price: 29990, rating: 4.8, stock: 25, brand: "Sony", image: img("audio1"), description: "Industry-leading noise cancellation, 30-hour battery." },
  { id: 12, name: "AirPods Pro 2", category: "Audio", price: 24900, rating: 4.7, stock: 30, brand: "Apple", image: img("audio2"), description: "Adaptive audio, USB-C, active noise cancellation." },
  { id: 13, name: "Bose QC Ultra", category: "Audio", price: 33990, rating: 4.6, stock: 18, brand: "Bose", image: img("audio3"), description: "Immersive spatial audio, plush comfort." },
  { id: 14, name: "JBL Flip 6", category: "Audio", price: 9999, rating: 4.5, stock: 50, brand: "JBL", image: img("audio4"), description: "Portable waterproof Bluetooth speaker, bold sound." },
  { id: 15, name: "Marshall Emberton", category: "Audio", price: 15999, rating: 4.4, stock: 22, brand: "Marshall", image: img("audio5"), description: "Iconic design, 360-degree sound, 30+ hours playtime." },

  // Wearables
  { id: 16, name: "Apple Watch Series 9", category: "Wearables", price: 41900, rating: 4.7, stock: 20, brand: "Apple", image: img("wear1"), description: "S9 chip, double tap gesture, always-on Retina display." },
  { id: 17, name: "Galaxy Watch 6", category: "Wearables", price: 29999, rating: 4.5, stock: 24, brand: "Samsung", image: img("wear2"), description: "Advanced sleep coaching, rotating bezel, Wear OS." },
  { id: 18, name: "Garmin Fenix 7", category: "Wearables", price: 69990, rating: 4.8, stock: 8, brand: "Garmin", image: img("wear3"), description: "Multisport GPS watch, solar charging, rugged build." },
  { id: 19, name: "Fitbit Charge 6", category: "Wearables", price: 15999, rating: 4.3, stock: 35, brand: "Fitbit", image: img("wear4"), description: "Heart rate tracking, built-in GPS, 7-day battery." },
  { id: 20, name: "Amazfit GTR 4", category: "Wearables", price: 18999, rating: 4.2, stock: 28, brand: "Amazfit", image: img("wear5"), description: "AMOLED display, 150+ sports modes, 14-day battery." },

  // Fashion
  { id: 21, name: "Levi's 511 Slim Jeans", category: "Fashion", price: 3499, rating: 4.4, stock: 60, brand: "Levi's", image: img("fashion1"), description: "Classic slim-fit denim, versatile everyday wear." },
  { id: 22, name: "Nike Windrunner Jacket", category: "Fashion", price: 5999, rating: 4.5, stock: 40, brand: "Nike", image: img("fashion2"), description: "Lightweight windbreaker, iconic chevron design." },
  { id: 23, name: "Ray-Ban Aviator", category: "Fashion", price: 8990, rating: 4.6, stock: 30, brand: "Ray-Ban", image: img("fashion3"), description: "Timeless aviator sunglasses, polarized lenses." },
  { id: 24, name: "Fossil Leather Wallet", category: "Fashion", price: 2999, rating: 4.3, stock: 55, brand: "Fossil", image: img("fashion4"), description: "Genuine leather bifold wallet, RFID protection." },
  { id: 25, name: "Adidas Ultraboost", category: "Fashion", price: 16999, rating: 4.7, stock: 25, brand: "Adidas", image: img("fashion5"), description: "Responsive Boost cushioning, Primeknit upper." },

  // Home Appliances
  { id: 26, name: "Dyson V15 Detect", category: "Home Appliances", price: 62900, rating: 4.7, stock: 10, brand: "Dyson", image: img("home1"), description: "Laser dust detection, powerful cordless vacuum." },
  { id: 27, name: "Philips Air Fryer XXL", category: "Home Appliances", price: 18999, rating: 4.6, stock: 20, brand: "Philips", image: img("home2"), description: "Rapid Air technology, family-sized, oil-free frying." },
  { id: 28, name: "LG 260L Refrigerator", category: "Home Appliances", price: 28990, rating: 4.4, stock: 12, brand: "LG", image: img("home3"), description: "Frost-free double door, smart inverter compressor." },
  { id: 29, name: "Bosch Washing Machine", category: "Home Appliances", price: 42999, rating: 4.5, stock: 8, brand: "Bosch", image: img("home4"), description: "Front-load 8kg, EcoSilence drive, anti-vibration." },
  { id: 30, name: "Prestige Induction Cooktop", category: "Home Appliances", price: 3499, rating: 4.2, stock: 45, brand: "Prestige", image: img("home5"), description: "2000W induction, auto shut-off, Indian menu presets." },

  // Books
  { id: 31, name: "Atomic Habits", category: "Books", price: 499, rating: 4.8, stock: 100, brand: "James Clear", image: img("book1"), description: "An easy and proven way to build good habits and break bad ones." },
  { id: 32, name: "The Psychology of Money", category: "Books", price: 399, rating: 4.7, stock: 90, brand: "Morgan Housel", image: img("book2"), description: "Timeless lessons on wealth, greed, and happiness." },
  { id: 33, name: "Deep Work", category: "Books", price: 450, rating: 4.6, stock: 75, brand: "Cal Newport", image: img("book3"), description: "Rules for focused success in a distracted world." },
  { id: 34, name: "Sapiens", category: "Books", price: 599, rating: 4.7, stock: 80, brand: "Yuval Noah Harari", image: img("book4"), description: "A brief history of humankind." },
  { id: 35, name: "Rich Dad Poor Dad", category: "Books", price: 349, rating: 4.5, stock: 120, brand: "Robert Kiyosaki", image: img("book5"), description: "What the rich teach their kids about money." },

  // Sports
  { id: 36, name: "Yonex Badminton Racket", category: "Sports", price: 4999, rating: 4.5, stock: 40, brand: "Yonex", image: img("sport1"), description: "Lightweight graphite frame, ideal for intermediate players." },
  { id: 37, name: "SG Cricket Bat", category: "Sports", price: 7999, rating: 4.4, stock: 25, brand: "SG", image: img("sport2"), description: "English willow, professional grade, superb pickup." },
  { id: 38, name: "Nivia Football", category: "Sports", price: 899, rating: 4.3, stock: 80, brand: "Nivia", image: img("sport3"), description: "Machine-stitched, durable size 5 match ball." },
  { id: 39, name: "Cosco Yoga Mat", category: "Sports", price: 1299, rating: 4.2, stock: 60, brand: "Cosco", image: img("sport4"), description: "6mm anti-slip, eco-friendly TPE, carrying strap." },
  { id: 40, name: "Wildcraft Trekking Bag", category: "Sports", price: 3499, rating: 4.6, stock: 30, brand: "Wildcraft", image: img("sport5"), description: "45L rucksack, water-resistant, ergonomic straps." },
];
