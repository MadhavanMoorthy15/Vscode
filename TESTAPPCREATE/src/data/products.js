// Mock product catalog
export const categories = [
  'Mobiles',
  'Laptops',
  'Audio',
  'Wearables',
  'Fashion',
  'Home Appliances',
  'Books',
  'Sports',
]

export const products = [
  // Mobiles
  { id: 1, name: 'Galaxy S23 Ultra', category: 'Mobiles', price: 84999, rating: 4.6, stock: 12, brand: 'Samsung', image: 'https://picsum.photos/seed/mobile1/400/400', description: 'Flagship smartphone with 200MP camera and S-Pen support.' },
  { id: 2, name: 'iPhone 15 Pro', category: 'Mobiles', price: 119900, rating: 4.8, stock: 8, brand: 'Apple', image: 'https://picsum.photos/seed/mobile2/400/400', description: 'A17 Pro chip, titanium design, and USB-C connectivity.' },
  { id: 3, name: 'Pixel 8', category: 'Mobiles', price: 59999, rating: 4.4, stock: 20, brand: 'Google', image: 'https://picsum.photos/seed/mobile3/400/400', description: 'Best-in-class camera with Google Tensor G3 chip.' },
  { id: 4, name: 'OnePlus 12', category: 'Mobiles', price: 64999, rating: 4.5, stock: 15, brand: 'OnePlus', image: 'https://picsum.photos/seed/mobile4/400/400', description: 'Snapdragon 8 Gen 3 with 100W fast charging.' },
  { id: 5, name: 'Redmi Note 13', category: 'Mobiles', price: 17999, rating: 4.2, stock: 40, brand: 'Xiaomi', image: 'https://picsum.photos/seed/mobile5/400/400', description: 'Budget champion with AMOLED display.' },

  // Laptops
  { id: 6, name: 'MacBook Air M3', category: 'Laptops', price: 114900, rating: 4.7, stock: 10, brand: 'Apple', image: 'https://picsum.photos/seed/laptop1/400/400', description: 'Thin and light with the powerful M3 chip.' },
  { id: 7, name: 'Dell XPS 15', category: 'Laptops', price: 149990, rating: 4.5, stock: 6, brand: 'Dell', image: 'https://picsum.photos/seed/laptop2/400/400', description: 'Premium build with InfinityEdge display.' },
  { id: 8, name: 'HP Spectre x360', category: 'Laptops', price: 129999, rating: 4.4, stock: 9, brand: 'HP', image: 'https://picsum.photos/seed/laptop3/400/400', description: 'Convertible 2-in-1 with OLED touchscreen.' },
  { id: 9, name: 'Lenovo Legion 5', category: 'Laptops', price: 99990, rating: 4.6, stock: 14, brand: 'Lenovo', image: 'https://picsum.photos/seed/laptop4/400/400', description: 'Gaming laptop with RTX 4060 GPU.' },
  { id: 10, name: 'Asus ROG Zephyrus', category: 'Laptops', price: 169990, rating: 4.7, stock: 5, brand: 'Asus', image: 'https://picsum.photos/seed/laptop5/400/400', description: 'Ultra-slim gaming powerhouse.' },

  // Audio
  { id: 11, name: 'Sony WH-1000XM5', category: 'Audio', price: 29990, rating: 4.8, stock: 25, brand: 'Sony', image: 'https://picsum.photos/seed/audio1/400/400', description: 'Industry-leading noise cancellation headphones.' },
  { id: 12, name: 'AirPods Pro 2', category: 'Audio', price: 24900, rating: 4.7, stock: 30, brand: 'Apple', image: 'https://picsum.photos/seed/audio2/400/400', description: 'Active noise cancellation with adaptive audio.' },
  { id: 13, name: 'Bose QC Ultra', category: 'Audio', price: 34990, rating: 4.6, stock: 18, brand: 'Bose', image: 'https://picsum.photos/seed/audio3/400/400', description: 'Immersive spatial audio earbuds.' },
  { id: 14, name: 'JBL Flip 6', category: 'Audio', price: 9999, rating: 4.5, stock: 50, brand: 'JBL', image: 'https://picsum.photos/seed/audio4/400/400', description: 'Portable waterproof Bluetooth speaker.' },
  { id: 15, name: 'Marshall Emberton', category: 'Audio', price: 15999, rating: 4.4, stock: 22, brand: 'Marshall', image: 'https://picsum.photos/seed/audio5/400/400', description: 'Iconic design with 360 sound.' },

  // Wearables
  { id: 16, name: 'Apple Watch Series 9', category: 'Wearables', price: 41900, rating: 4.7, stock: 16, brand: 'Apple', image: 'https://picsum.photos/seed/wear1/400/400', description: 'Advanced health tracking with S9 chip.' },
  { id: 17, name: 'Galaxy Watch 6', category: 'Wearables', price: 29999, rating: 4.5, stock: 21, brand: 'Samsung', image: 'https://picsum.photos/seed/wear2/400/400', description: 'Sleek smartwatch with body composition analysis.' },
  { id: 18, name: 'Fitbit Charge 6', category: 'Wearables', price: 14999, rating: 4.3, stock: 35, brand: 'Fitbit', image: 'https://picsum.photos/seed/wear3/400/400', description: 'Fitness tracker with built-in GPS.' },
  { id: 19, name: 'Garmin Fenix 7', category: 'Wearables', price: 69990, rating: 4.8, stock: 7, brand: 'Garmin', image: 'https://picsum.photos/seed/wear4/400/400', description: 'Rugged multisport GPS watch.' },
  { id: 20, name: 'Amazfit GTR 4', category: 'Wearables', price: 15999, rating: 4.2, stock: 28, brand: 'Amazfit', image: 'https://picsum.photos/seed/wear5/400/400', description: 'Long battery life smartwatch.' },

  // Fashion
  { id: 21, name: 'Classic Denim Jacket', category: 'Fashion', price: 2999, rating: 4.1, stock: 60, brand: 'Levis', image: 'https://picsum.photos/seed/fashion1/400/400', description: 'Timeless denim jacket for all seasons.' },
  { id: 22, name: 'Running Sneakers', category: 'Fashion', price: 4999, rating: 4.4, stock: 45, brand: 'Nike', image: 'https://picsum.photos/seed/fashion2/400/400', description: 'Lightweight sneakers with cushioned sole.' },
  { id: 23, name: 'Leather Wallet', category: 'Fashion', price: 1499, rating: 4.0, stock: 80, brand: 'Fossil', image: 'https://picsum.photos/seed/fashion3/400/400', description: 'Genuine leather bifold wallet.' },
  { id: 24, name: 'Cotton T-Shirt', category: 'Fashion', price: 799, rating: 4.2, stock: 100, brand: 'H&M', image: 'https://picsum.photos/seed/fashion4/400/400', description: 'Soft cotton crew neck t-shirt.' },
  { id: 25, name: 'Aviator Sunglasses', category: 'Fashion', price: 3499, rating: 4.3, stock: 33, brand: 'RayBan', image: 'https://picsum.photos/seed/fashion5/400/400', description: 'Polarized aviator sunglasses.' },

  // Home Appliances
  { id: 26, name: 'Air Fryer 5L', category: 'Home Appliances', price: 7999, rating: 4.5, stock: 27, brand: 'Philips', image: 'https://picsum.photos/seed/home1/400/400', description: 'Oil-free cooking with rapid air technology.' },
  { id: 27, name: 'Robot Vacuum', category: 'Home Appliances', price: 24999, rating: 4.4, stock: 12, brand: 'iRobot', image: 'https://picsum.photos/seed/home2/400/400', description: 'Smart mapping robot vacuum cleaner.' },
  { id: 28, name: 'Microwave Oven', category: 'Home Appliances', price: 12999, rating: 4.2, stock: 19, brand: 'LG', image: 'https://picsum.photos/seed/home3/400/400', description: '28L convection microwave oven.' },
  { id: 29, name: 'Coffee Maker', category: 'Home Appliances', price: 8999, rating: 4.3, stock: 24, brand: 'Nespresso', image: 'https://picsum.photos/seed/home4/400/400', description: 'Automatic espresso machine.' },
  { id: 30, name: 'Air Purifier', category: 'Home Appliances', price: 15999, rating: 4.6, stock: 14, brand: 'Dyson', image: 'https://picsum.photos/seed/home5/400/400', description: 'HEPA air purifier with app control.' },

  // Books
  { id: 31, name: 'Atomic Habits', category: 'Books', price: 499, rating: 4.9, stock: 120, brand: 'Penguin', image: 'https://picsum.photos/seed/book1/400/400', description: 'An easy and proven way to build good habits.' },
  { id: 32, name: 'The Psychology of Money', category: 'Books', price: 399, rating: 4.7, stock: 95, brand: 'Harriman', image: 'https://picsum.photos/seed/book2/400/400', description: 'Timeless lessons on wealth and happiness.' },
  { id: 33, name: 'Deep Work', category: 'Books', price: 450, rating: 4.6, stock: 70, brand: 'Grand Central', image: 'https://picsum.photos/seed/book3/400/400', description: 'Rules for focused success in a distracted world.' },
  { id: 34, name: 'Rich Dad Poor Dad', category: 'Books', price: 349, rating: 4.5, stock: 110, brand: 'Plata', image: 'https://picsum.photos/seed/book4/400/400', description: 'What the rich teach their kids about money.' },
  { id: 35, name: 'Sapiens', category: 'Books', price: 599, rating: 4.8, stock: 60, brand: 'Harper', image: 'https://picsum.photos/seed/book5/400/400', description: 'A brief history of humankind.' },

  // Sports
  { id: 36, name: 'Yoga Mat', category: 'Sports', price: 1299, rating: 4.4, stock: 88, brand: 'Boldfit', image: 'https://picsum.photos/seed/sport1/400/400', description: 'Non-slip eco-friendly yoga mat.' },
  { id: 37, name: 'Adjustable Dumbbells', category: 'Sports', price: 8999, rating: 4.6, stock: 15, brand: 'PowerMax', image: 'https://picsum.photos/seed/sport2/400/400', description: 'Space-saving adjustable dumbbell set.' },
  { id: 38, name: 'Cricket Bat', category: 'Sports', price: 3499, rating: 4.3, stock: 40, brand: 'SG', image: 'https://picsum.photos/seed/sport3/400/400', description: 'English willow cricket bat.' },
  { id: 39, name: 'Football', category: 'Sports', price: 1499, rating: 4.5, stock: 65, brand: 'Nivia', image: 'https://picsum.photos/seed/sport4/400/400', description: 'Professional match football size 5.' },
  { id: 40, name: 'Badminton Racket', category: 'Sports', price: 2799, rating: 4.4, stock: 50, brand: 'Yonex', image: 'https://picsum.photos/seed/sport5/400/400', description: 'Lightweight graphite badminton racket.' },
]

// Simulated async fetch
export const fetchProducts = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(products), 600)
  })

export const fetchProductById = (id) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(products.find((p) => p.id === Number(id))), 400)
  })
