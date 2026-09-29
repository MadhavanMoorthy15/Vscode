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

const img = (seed, w = 600, h = 600) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const products = [
  { id: 1, name: "NovaPhone X12", category: "Mobiles", brand: "Nova", price: 54999, rating: 4.4, reviews: 1820, stock: 24, color: "Midnight", badge: "Bestseller", image: img("phone1"), description: "6.7-inch AMOLED, 108MP camera, 5000mAh battery with 67W charging." },
  { id: 2, name: "NovaPhone Lite 8", category: "Mobiles", brand: "Nova", price: 18999, rating: 4.1, reviews: 940, stock: 61, color: "Blue", badge: "Deal", image: img("phone2"), description: "Everyday 5G phone with a 90Hz display and dual stereo speakers." },
  { id: 3, name: "PixelAir 9 Pro", category: "Mobiles", brand: "PixelAir", price: 79999, rating: 4.7, reviews: 2311, stock: 12, color: "Graphite", badge: "New", image: img("phone3"), description: "Flagship camera system, titanium frame, and all-day battery." },
  { id: 4, name: "Orbit M5", category: "Mobiles", brand: "Orbit", price: 12999, rating: 3.9, reviews: 410, stock: 80, color: "Green", badge: "", image: img("phone4"), description: "Compact budget phone with a clean software experience." },
  { id: 5, name: "Helio Fold Mini", category: "Mobiles", brand: "Helio", price: 99999, rating: 4.3, reviews: 188, stock: 6, color: "Cream", badge: "Limited", image: img("phone5"), description: "Foldable cover display and desktop mode for multitasking." },

  { id: 6, name: "AeroBook 14", category: "Laptops", brand: "Aero", price: 62990, rating: 4.5, reviews: 760, stock: 18, color: "Silver", badge: "Bestseller", image: img("lap1"), description: "14-inch lightweight laptop, 16GB RAM, 512GB SSD, 12-hour battery." },
  { id: 7, name: "ForgeBook Pro 16", category: "Laptops", brand: "Forge", price: 124990, rating: 4.6, reviews: 402, stock: 9, color: "Space Gray", badge: "Pro", image: img("lap2"), description: "Creator laptop with a dedicated GPU and 120Hz display." },
  { id: 8, name: "Campus Slim 13", category: "Laptops", brand: "Campus", price: 38990, rating: 4.0, reviews: 1102, stock: 33, color: "Blue", badge: "Student", image: img("lap3"), description: "Student laptop with a backlit keyboard and webcam privacy shutter." },
  { id: 9, name: "Workstation Z1", category: "Laptops", brand: "Forge", price: 189000, rating: 4.8, reviews: 96, stock: 4, color: "Black", badge: "", image: img("lap4"), description: "32GB RAM workstation for CAD, video, and local ML workloads." },
  { id: 10, name: "NotePad Convertible", category: "Laptops", brand: "Aero", price: 54990, rating: 4.2, reviews: 255, stock: 21, color: "Rose", badge: "2-in-1", image: img("lap5"), description: "Touchscreen convertible with a stylus included in the box." },

  { id: 11, name: "Pulse Buds ANC", category: "Audio", brand: "Pulse", price: 4999, rating: 4.3, reviews: 3201, stock: 120, color: "Black", badge: "Deal", image: img("aud1"), description: "Active noise cancelling earbuds with 30 hours of case battery." },
  { id: 12, name: "Pulse Studio Headphones", category: "Audio", brand: "Pulse", price: 12999, rating: 4.6, reviews: 870, stock: 40, color: "Navy", badge: "Bestseller", image: img("aud2"), description: "Over-ear studio headphones with spatial audio and a 40mm driver." },
  { id: 13, name: "BoomBar Mini", category: "Audio", brand: "Boom", price: 2499, rating: 4.0, reviews: 540, stock: 75, color: "Orange", badge: "", image: img("aud3"), description: "Pocket Bluetooth speaker, IPX7, 12-hour playtime." },
  { id: 14, name: "HomeSound 360", category: "Audio", brand: "HomeSound", price: 8999, rating: 4.4, reviews: 301, stock: 28, color: "White", badge: "Smart", image: img("aud4"), description: "Room-filling smart speaker with multi-room pairing." },
  { id: 15, name: "Studio Mic USB", category: "Audio", brand: "Pulse", price: 6490, rating: 4.5, reviews: 190, stock: 36, color: "Silver", badge: "", image: img("aud5"), description: "Cardioid USB microphone for calls, podcasts, and streaming." },

  { id: 16, name: "FitBand 6", category: "Wearables", brand: "Fitly", price: 2999, rating: 4.1, reviews: 2100, stock: 90, color: "Black", badge: "Deal", image: img("wear1"), description: "Heart-rate, SpO2, and sleep tracking with a 10-day battery." },
  { id: 17, name: "Fitly Watch Ultra", category: "Wearables", brand: "Fitly", price: 24999, rating: 4.7, reviews: 640, stock: 15, color: "Titanium", badge: "New", image: img("wear2"), description: "GPS watch with ECG, always-on display, and 5ATM water resistance." },
  { id: 18, name: "Kids Tracker Band", category: "Wearables", brand: "Orbit", price: 1999, rating: 3.8, reviews: 220, stock: 50, color: "Pink", badge: "", image: img("wear3"), description: "Lightweight kids band with step goals and a school-mode mute." },
  { id: 19, name: "Smart Ring S2", category: "Wearables", brand: "Helio", price: 14990, rating: 4.2, reviews: 88, color: "Gold", stock: 11, badge: "Limited", image: img("wear4"), description: "Sleep and recovery ring with a 6-day charge." },
  { id: 20, name: "RunWatch Pace", category: "Wearables", brand: "Fitly", price: 7990, rating: 4.4, reviews: 430, stock: 27, color: "Lime", badge: "", image: img("wear5"), description: "GPS running watch with training load and recovery suggestions." },

  { id: 21, name: "Cotton Oversized Tee", category: "Fashion", brand: "Streetloom", price: 799, rating: 4.2, reviews: 1500, stock: 200, color: "Sand", badge: "", image: img("fash1"), description: "Heavyweight cotton tee with a relaxed fit." },
  { id: 22, name: "Denim Jacket Classic", category: "Fashion", brand: "Streetloom", price: 2499, rating: 4.5, reviews: 610, stock: 44, color: "Indigo", badge: "Bestseller", image: img("fash2"), description: "Mid-wash denim jacket with brass buttons." },
  { id: 23, name: "Everyday Sneakers", category: "Fashion", brand: "Stride", price: 3299, rating: 4.3, reviews: 980, stock: 70, color: "White", badge: "Deal", image: img("fash3"), description: "Cushioned daily sneakers with a gum sole." },
  { id: 24, name: "Linen Shirt", category: "Fashion", brand: "Northlane", price: 1899, rating: 4.0, reviews: 240, stock: 38, color: "Olive", badge: "", image: img("fash4"), description: "Breathable linen shirt for warm weather." },
  { id: 25, name: "Wool Blend Coat", category: "Fashion", brand: "Northlane", price: 6990, rating: 4.6, reviews: 120, stock: 14, color: "Camel", badge: "Winter", image: img("fash5"), description: "Tailored wool-blend overcoat with a hidden placket." },

  { id: 26, name: "AirFry Crisp 4L", category: "Home Appliances", brand: "Kitchenly", price: 5999, rating: 4.5, reviews: 2400, stock: 55, color: "Black", badge: "Bestseller", image: img("home1"), description: "4-litre air fryer with 8 presets and a dishwasher-safe basket." },
  { id: 27, name: "BlendPro Mixer", category: "Home Appliances", brand: "Kitchenly", price: 3499, rating: 4.1, reviews: 700, stock: 42, color: "Red", badge: "", image: img("home2"), description: "750W mixer grinder with three stainless jars." },
  { id: 28, name: "QuietVac Robot", category: "Home Appliances", brand: "HomeSound", price: 18999, rating: 4.3, reviews: 310, stock: 16, color: "White", badge: "Smart", image: img("home3"), description: "Robot vacuum with app mapping and mop mode." },
  { id: 29, name: "Steam Iron Glide", category: "Home Appliances", brand: "Kitchenly", price: 1499, rating: 4.0, reviews: 890, stock: 100, color: "Blue", badge: "Deal", image: img("home4"), description: "Non-stick steam iron with auto shut-off." },
  { id: 30, name: "Tower Fan Breeze", category: "Home Appliances", brand: "BreezeCo", price: 4290, rating: 4.2, reviews: 260, stock: 30, color: "White", badge: "", image: img("home5"), description: "Oscillating tower fan with a remote and sleep mode." },

  { id: 31, name: "Designing Everyday Systems", category: "Books", brand: "Harbor Press", price: 599, rating: 4.7, reviews: 410, stock: 80, color: "Paperback", badge: "Staff pick", image: img("book1"), description: "A practical book on product thinking for builders." },
  { id: 32, name: "The Quiet Algorithm", category: "Books", brand: "Harbor Press", price: 449, rating: 4.4, reviews: 220, stock: 60, color: "Paperback", badge: "", image: img("book2"), description: "Fiction about a city run by recommendation engines." },
  { id: 33, name: "Kitchen Notes", category: "Books", brand: "Table & Co", price: 799, rating: 4.6, reviews: 150, stock: 35, color: "Hardcover", badge: "", image: img("book3"), description: "Weeknight recipes with short ingredient lists." },
  { id: 34, name: "Running Form", category: "Books", brand: "Stride Press", price: 399, rating: 4.1, reviews: 90, stock: 48, color: "Paperback", badge: "Deal", image: img("book4"), description: "Illustrated guide to injury-aware running form." },
  { id: 35, name: "Sketchbook Field Notes", category: "Books", brand: "Harbor Press", price: 299, rating: 4.8, reviews: 70, stock: 100, color: "Cream", badge: "", image: img("book5"), description: "Blank dotted sketchbook, 120 gsm, lay-flat binding." },

  { id: 36, name: "Trail Runner Shoe", category: "Sports", brand: "Stride", price: 4599, rating: 4.5, reviews: 530, stock: 40, color: "Olive", badge: "Bestseller", image: img("sport1"), description: "Grip outsole trail shoe with a rock plate." },
  { id: 37, name: "Yoga Mat Grip", category: "Sports", brand: "Align", price: 1299, rating: 4.3, reviews: 800, stock: 90, color: "Sage", badge: "", image: img("sport2"), description: "6mm non-slip yoga mat with a carry strap." },
  { id: 38, name: "Adjustable Dumbbell 20kg", category: "Sports", brand: "ForgeFit", price: 8990, rating: 4.4, reviews: 210, stock: 18, color: "Black", badge: "", image: img("sport3"), description: "Dial-adjust dumbbell replacing a full rack." },
  { id: 39, name: "Hydration Bottle 750", category: "Sports", brand: "Align", price: 699, rating: 4.2, reviews: 1200, stock: 150, color: "Teal", badge: "Deal", image: img("sport4"), description: "Insulated bottle that keeps drinks cold for 18 hours." },
  { id: 40, name: "Football Match Ball", category: "Sports", brand: "ForgeFit", price: 1490, rating: 4.0, reviews: 340, stock: 55, color: "White", badge: "", image: img("sport5"), description: "Size 5 match ball with a textured grip panel." },
];

export function formatPrice(n) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}
