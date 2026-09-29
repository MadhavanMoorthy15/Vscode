const catalog = {
  Mobiles: ['Nova X12 Pro', 'PixelEdge 8', 'Galaxy Wave 5G', 'OneMax Nord Z', 'Moto Fusion 50'],
  Laptops: ['ZenBook Air 14', 'IdeaPad Slim 5', 'MacLite Pro 13', 'Aspire Vision 15', 'Victus Play 16'],
  Audio: ['SonicPods Pro', 'BassBox Mini', 'QuietBeat 45', 'Studio Buds X', 'SoundBar Arc'],
  Wearables: ['FitPulse 4', 'Watch Active S', 'Runner GPS Pro', 'Smart Ring Air', 'HealthBand Neo'],
  Fashion: ['Classic Denim Jacket', 'Everyday Sneakers', 'Linen Summer Shirt', 'Urban Sling Bag', 'Polarized Sunglasses'],
  'Home Appliances': ['Air Fryer Digital', 'Robot Vacuum S7', 'Mixer Grinder Pro', 'Steam Iron Plus', 'Water Purifier RO'],
  Books: ['The Midnight Library', 'Atomic Habits', 'Design of Everyday Things', 'Deep Work', 'The Psychology of Money'],
  Sports: ['Pro Cricket Bat', 'Yoga Mat Comfort', 'Training Football', 'Adjustable Dumbbells', 'Badminton Racquet Pro'],
}

const categoryImages = {
  Mobiles: 'photo-1511707171634-5f897ff02aa9', Laptops: 'photo-1496181133206-80ce9b88a853',
  Audio: 'photo-1505740420928-5e560c06d30e', Wearables: 'photo-1523275335684-37898b6baf30',
  Fashion: 'photo-1445205170230-053b83016050', 'Home Appliances': 'photo-1556911220-bff31c812dba',
  Books: 'photo-1495446815901-a7297e633e8d', Sports: 'photo-1461896836934-ffe607ba8211',
}

const basePrices = { Mobiles: 18999, Laptops: 42999, Audio: 1999, Wearables: 2499, Fashion: 899, 'Home Appliances': 3499, Books: 299, Sports: 699 }

export const products = Object.entries(catalog).flatMap(([category, names], categoryIndex) =>
  names.map((name, index) => {
    const id = categoryIndex * 5 + index + 1
    const price = basePrices[category] + index * (categoryIndex < 2 ? 3500 : 450)
    return {
      id, name, category, price, originalPrice: Math.round(price * 1.28), rating: +(4 + ((id * 7) % 9) / 10).toFixed(1),
      reviews: 120 + id * 83, discount: 18 + (id % 4) * 5, stock: id % 9 === 0 ? 0 : 5 + (id % 18),
      image: id === 24 ? 'https://images.unsplash.com/photo-does-not-exist?w=800' : `https://images.unsplash.com/${categoryImages[category]}?auto=format&fit=crop&w=800&q=80&sig=${id}`,
      description: `${name} combines dependable everyday performance, thoughtful design, and excellent value. Carefully selected for quality and backed by easy returns.`,
      features: ['1 year manufacturer warranty', 'Fast and secure delivery', 'Quality checked product', '7-day easy replacement'],
      badge: id % 6 === 0 ? 'Best Seller' : id % 5 === 0 ? 'New Arrival' : '',
    }
  })
)

export const categories = Object.keys(catalog)
export const getProduct = (id) => products.find((product) => product.id === Number(id))
