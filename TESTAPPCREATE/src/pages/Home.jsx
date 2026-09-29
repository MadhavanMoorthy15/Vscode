import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'

export default function Home() {
  const [deals, setDeals] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      // simulate live deals updates
      setDeals(products.slice(0, 4))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const featured = products.filter(p => p.rating >= 4.6).slice(0, 8)

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Hero banner */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-xl p-10 mb-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">Big Savings Days!</h1>
        <p className="text-lg mb-6">Up to 60% off on mobiles, laptops, audio & more</p>
        <Link to="/products" className="bg-white text-primary-700 font-bold px-6 py-3 rounded-lg hover:bg-gray-100">
          Shop Now
        </Link>
      </section>

      {/* Categories */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.map(cat => (
            <Link
              key={cat}
              to={`/products?category=${cat}`}
              className="card p-4 text-center hover:shadow-md"
            >
              <div className="text-3xl mb-1">{getIcon(cat)}</div>
              <div className="text-xs font-medium">{cat}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section>
        <h2 className="text-xl font-bold mb-4">Top Rated Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Flash deals */}
      <section className="mt-10">
        <h2 className="text-xl font-bold mb-4">⚡ Flash Deals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {deals.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </div>
  )
}

const categories = ['Mobiles', 'Laptops', 'Audio', 'Wearables', 'Fashion', 'Home Appliances', 'Books', 'Sports']

function getIcon(cat) {
  const icons = {
    'Mobiles': '📱', 'Laptops': '💻', 'Audio': '🎧', 'Wearables': '⌚',
    'Fashion': '👕', 'Home Appliances': '🏠', 'Books': '📚', 'Sports': '⚽'
  }
  return icons[cat] || '📦'
}
