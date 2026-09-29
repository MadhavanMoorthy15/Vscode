import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const { addToWishlist, isInWishlist } = useWishlist()

  return (
    <div className="card p-4 flex flex-col hover:shadow-md transition-shadow">
      <Link to={`/product/${product.id}`}>
        <div className="h-40 bg-gray-100 dark:bg-gray-700 rounded-lg mb-3 flex items-center justify-center text-5xl">
          {getCategoryIcon(product.category)}
        </div>
        <h3 className="font-medium text-sm mb-1 line-clamp-2">{product.name}</h3>
      </Link>
      <div className="text-xs text-gray-500 mb-1">{product.brand}</div>
      <div className="flex items-center gap-1 text-sm mb-2">
        <span className="bg-green-600 text-white px-1.5 py-0.5 rounded text-xs">
          {product.rating} ★
        </span>
      </div>
      <div className="text-lg font-bold mb-3">₹{product.price.toLocaleString()}</div>
      <div className="mt-auto flex gap-2">
        <button onClick={() => addToCart(product)} className="btn-primary flex-1 text-sm">
          Add to Cart
        </button>
        <button
          onClick={() => addToWishlist(product)}
          className="btn-outline text-sm"
          title="Add to wishlist"
        >
          {isInWishlist(product.id) ? '❤️' : '🤍'}
        </button>
      </div>
    </div>
  )
}

function getCategoryIcon(category) {
  const icons = {
    'Mobiles': '📱', 'Laptops': '💻', 'Audio': '🎧', 'Wearables': '⌚',
    'Fashion': '👕', 'Home Appliances': '🏠', 'Books': '📚', 'Sports': '⚽'
  }
  return icons[category] || '📦'
}
