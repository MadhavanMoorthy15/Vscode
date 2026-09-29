import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { products } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import ProductCard from '../components/ProductCard.jsx'

export default function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const [product, setProduct] = useState(null)
  const [imgLoaded, setImgLoaded] = useState(false)

  useEffect(() => {
    const found = products.find(p => p.id === parseInt(id))
    setProduct(found)
    window.scrollTo(0, 0)
  }, [id])

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-2">Product not found</h2>
        <Link to="/products" className="text-primary-600 hover:underline">Back to products</Link>
      </div>
    )
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <button onClick={() => navigate(-1)} className="btn-outline mb-4">← Back</button>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="card p-6 flex items-center justify-center h-80 text-8xl">
          {!imgLoaded && <div className="animate-pulse w-full h-full bg-gray-200 rounded-lg absolute" />}
          <img
            src={product.image || 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>svg'}
            alt={product.name}
            onError={e => { e.target.style.display = 'none' }}
            onLoad={() => setImgLoaded(true)}
            style={{ display: 'none' }}
          />
          {getIcon(product.category)}
        </div>

        {/* Info */}
        <div>
          <h1 className="text-2xl font-bold mb-1">{product.name}</h1>
          <p className="text-gray-500 mb-2">{product.brand}</p>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-green-600 text-white px-2 py-0.5 rounded text-sm">
              {product.rating} ★
            </span>
            <span className="text-sm text-gray-500">(248 ratings)</span>
          </div>
          <div className="text-3xl font-bold mb-1">₹{product.price.toLocaleString()}</div>
          <p className="text-sm text-gray-500 mb-4">Inclusive of all taxes</p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">{product.description}</p>

          <div className="flex gap-3">
            <button onClick={() => addToCart(product)} className="btn-primary flex-1">
              Add to Cart
            </button>
            <button
              onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}
              className="btn-outline"
            >
              {isInWishlist(product.id) ? '❤️ Wishlisted' : '🤍 Wishlist'}
            </button>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold mb-4">Similar Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  )
}

function getIcon(category) {
  const icons = {
    'Mobiles': '📱', 'Laptops': '💻', 'Audio': '🎧', 'Wearables': '⌚',
    'Fashion': '👕', 'Home Appliances': '🏠', 'Books': '📚', 'Sports': '⚽'
  }
  return icons[category] || '📦'
}
