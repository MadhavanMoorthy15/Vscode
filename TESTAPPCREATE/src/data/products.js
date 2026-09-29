const categories = ['Mobiles','Laptops','Audio','Wearables','Fashion','Home Appliances','Books','Sports'];
const names = {
  Mobiles: ['Galaxy M55','iPhone Air','Pixel Nova','OnePlus Ace','Redmi Prime'],
  Laptops: ['MacBook Lite','Dell Inspiron','HP Pavilion','Lenovo Flex','Asus Vivobook'],
  Audio: ['BassPods Pro','SoundBar 360','Noise Cancelling Max','Mini Speaker','Studio Buds'],
  Wearables: ['FitWatch 5','Amazfit Neo','Galaxy Watch','Smart Band','Runner Pro'],
  Fashion: ['Denim Jacket','Running Shoes','Cotton Hoodie','Leather Wallet','Classic Sunglasses'],
  'Home Appliances': ['Air Fryer','Robot Vacuum','Mixer Grinder','Smart TV','Water Purifier'],
  Books: ['React Handbook','Mystery Lane','Atomic Habits','Design Patterns','The Startup Way'],
  Sports: ['Cricket Bat','Yoga Mat','Football','Dumbbell Set','Badminton Racket']
};

export const products = categories.flatMap((category, catIndex) =>
  names[category].map((name, itemIndex) => {
    const id = catIndex * 5 + itemIndex + 1;
    return {
      id,
      name,
      category,
      brand: ['AmazonBasics','FlipStar','NovaKart','UrbanDeal','PrimeChoice'][itemIndex],
      price: 499 + id * 317,
      mrp: 999 + id * 420,
      rating: Number((3.4 + ((id % 15) / 10)).toFixed(1)),
      reviews: 80 + id * 23,
      stock: id % 9 === 0 ? 0 : 8 + id,
      badge: id % 4 === 0 ? 'Deal of the day' : id % 5 === 0 ? 'Bestseller' : 'Prime',
      image: id === 17 ? '' : `https://picsum.photos/seed/shop-${id}/500/500`,
      description: `${name} brings reliable performance, stylish design and great everyday value for shoppers who compare before buying.`,
      specs: ['Fast delivery','7 day replacement','Secure payment','Warranty included']
    };
  })
);

export const categoriesList = categories;
