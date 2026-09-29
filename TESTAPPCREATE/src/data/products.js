// Mock product data - 40 products across 8 categories
let idCounter = 1
function p(name, category, price, rating, brand, description) {
  return {
    id: idCounter++,
    name,
    category,
    price,
    rating,
    brand,
    description,
    inStock: true
  }
}

export const products = [
  // Mobiles
  p('Galaxy S24 Ultra 5G', 'Mobiles', 129999, 4.7, 'Samsung', 'Flagship smartphone with 200MP camera and titanium frame.'),
  p('iPhone 15 Pro Max', 'Mobiles', 159900, 4.8, 'Apple', 'A17 Pro chip, 5x telephoto camera, titanium design.'),
  p('Pixel 8 Pro', 'Mobiles', 99999, 4.6, 'Google', 'Google Tensor G3 with advanced AI photography features.'),
  p('OnePlus 12R', 'Mobiles', 42999, 4.5, 'OnePlus', 'Snapdragon 8 Gen 2 with 100W SUPERVOOC charging.'),
  p('Redmi Note 13 Pro+', 'Mobiles', 31999, 4.4, 'Xiaomi', '200MP camera, 120W charging, curved AMOLED display.'),

  // Laptops
  p('MacBook Air M3 13"', 'Laptops', 114900, 4.7, 'Apple', 'M3 chip with 18-hour battery life, Liquid Retina display.'),
  p('ThinkPad X1 Carbon Gen 11', 'Laptops', 149990, 4.5, 'Lenovo', 'Business ultrabook with Intel 13th Gen Core i7.'),
  p('XPS 13 Plus', 'Laptops', 134990, 4.3, 'Dell', '13.4-inch 3.5K OLED display, Intel Evo platform.'),
  p('ROG Strix G16', 'Laptops', 109990, 4.4, 'Asus', 'RTX 4060 gaming laptop with 165Hz QHD display.'),
  p(' Victreus Book 14', 'Laptops', 49990, 3.9, 'HP', 'Everyday laptop with Ryzen 5 processor.'),

  // Audio
  p('WH-1000XM5 Headphones', 'Audio', 29990, 4.8, 'Sony', 'Industry-leading noise cancellation with 30hr battery.'),
  p('AirPods Pro (2nd Gen)', 'Audio', 24900, 4.6, 'Apple', 'Adaptive audio, USB-C charging case.'),
  p('JBL Tune 770NC', 'Audio', 9999, 4.3, 'JBL', 'Wireless over-ear with adaptive noise cancelling.'),
  p('boAt Rockerz 550', 'Audio', 2999, 4.1, 'boAt', 'Over-ear Bluetooth headphones with 20hr playback.'),
  p('SoundLink Flex', 'Audio', 14999, 4.5, 'Bose', 'Portable waterproof Bluetooth speaker with PositionIQ.'),

  // Wearables
  p('Apple Watch Series 9', 'Wearables', 41900, 4.7, 'Apple', 'Double tap gesture, S9 chip, always-on retina display.'),
  p('Galaxy Watch6 Classic', 'Wearables', 32999, 4.4, 'Samsung', 'Rotating bezel, body composition analysis.'),
  p('Amazfit GTS 4', 'Wearables', 14999, 4.2, 'Amazfit', 'GPS smartwatch with 8-day battery life.'),
  p('Noise ColorFit Pro 5', 'Wearables', 3499, 4.0, 'Noise', '1.8" display, Bluetooth calling, 7-day battery.'),
  p('Fitbit Charge 6', 'Wearables', 10999, 4.3, 'Fitbit', 'Health tracker with ECG and Google Maps.'),

  // Fashion
  p('Classic Cotton T-Shirt', 'Fashion', 799, 4.2, 'Levis', '100% combed cotton regular fit tee.'),
  p('Slim Fit Denim Jeans', 'Fashion', 2199, 4.4, 'Wrangler', 'Stretchable slim fit jeans with 5 pockets.'),
  p('Running Shoes AirMax', 'Fashion', 4999, 4.5, 'Nike', 'Cushioned running shoes with breathable mesh.'),
  p('Leather Wallet Classic', 'Fashion', 1299, 4.1, 'Fossil', 'Genuine leather bi-fold wallet with 8 card slots.'),
  p('Aviator Sunglasses', 'Fashion', 2499, 4.3, 'Ray-Ban', 'Polarized UV-protected glass lenses.'),

  // Home Appliances
  p('1.5 Ton 5 Star Inverter AC', 'Home Appliances', 42990, 4.4, 'Voltas', 'Split AC with copper condenser and 4-way swing.'),
  p('7kg Front Load Washing Machine', 'Home Appliances', 32990, 4.5, 'IFB', 'Aqua Energie therapy, 1400 RPM spin speed.'),
  p('265L Double Door Refrigerator', 'Home Appliances', 27990, 4.3, 'Whirlpool', 'Frost-free with IntelliSense inverter tech.'),
  p('Mixer Grinder 750W', 'Home Appliances', 3299, 4.2, 'Bajaj', '3 stainless steel jars, 5-year motor warranty.'),
  p('Air Fryer 4L Digital', 'Home Appliances', 6999, 4.6, 'Philips', 'Rapid air technology, 8 preset menus.'),

  // Books
  p('Atomic Habits', 'Books', 399, 4.7, 'Penguin', 'Tiny changes, remarkable results by James Clear.'),
  p('The Psychology of Money', 'Books', 349, 4.6, 'Jaico', 'Timeless lessons on wealth and greed.'),
  p('Clean Code', 'Books', 4999, 4.8, 'Prentice Hall', 'A handbook of agile software craftsmanship.'),
  p('Sapiens: A Brief History', 'Books', 449, 4.7, 'Harvill', 'Humankind from apes to AI by Yuval Noah Harari.'),
  p('Deep Work', 'Books', 399, 4.5, 'Grand Central', 'Rules for focused success in a distracted world.'),

  // Sports
  p('Yoga Mat 6mm Anti-Skid', 'Sports', 999, 4.4, 'Boldfit', 'Eco-friendly TPE mat with carrying strap.'),
  p('Cricket Bat Kashmir Willow', 'Sports', 2499, 4.2, 'SG', 'Full-size bat with premium grip.'),
  p('Dumbbell Set 20kg', 'Sports', 1899, 4.3, 'Kore', 'Adjustable dumbbell pair with rod and weights.'),
  p('Football Size 5', 'Sports', 799, 4.1, 'Nivia', 'Rubber moulded football for all surfaces.'),
  p('Badminton Racket Carbon', 'Sports', 1499, 4.4, 'Yonex', 'Lightweight carbon frame, comes with cover.'),
]

export const categories = [
  'Mobiles', 'Laptops', 'Audio', 'Wearables',
  'Fashion', 'Home Appliances', 'Books', 'Sports'
]
