import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchProducts, categories } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data))
  }, [])

  const featured = products.slice(0, 8)
  const deals = products.filter((p) => p.rating >= 4.6).slice(0, 4)

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Hero banner */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg p-10 mb-8">
        <h1 className="text-4xl font-bold mb-2">Big Billion Days Are Here!</h1>
        <p className="text-lg mb-4">
          Up to 80% off across electronics, fashion and more.
        </p>
        <Link
          to="/products"
          className="bg-white text-blue-600 px-6 py-2 rounded font-semibold"
        >
          Shop Now
        </Link>
      </div>

      {/* Categories */}
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Shop by Category</h2>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-8">
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/products?category=${cat}`}
            className="text-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-md"
          >
            <div className="text-3xl mb-1">🛍️</div>
            <span className="text-xs dark:text-gray-200">{cat}</span>
          </Link>
        ))}
      </div>

      {/* Top deals */}
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Top Deals</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {deals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Featured */}
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Featured Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
