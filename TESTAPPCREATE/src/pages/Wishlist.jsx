import { Link } from 'react-router-dom'
import { useWishlist } from '../context/WishlistContext.jsx'
import { useCart } from '../context/CartContext.jsx'

export default function Wishlist() {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">My Wishlist ({wishlist.length})</h1>

      {wishlist.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-5xl mb-4">❤️</div>
          <p className="text-gray-500 mb-4">Your wishlist is empty</p>
          <Link to="/products" className="btn-primary">Explore Products</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {wishlist.map(item => (
            <div key={`${item.id}-${wishlist.indexOf(item)}`} className="card p-4">
              <Link to={`/product/${item.id}`} className="text-4xl block mb-2">{getIcon(item.category)}</Link>
              <Link to={`/product/${item.id}`} className="font-medium text-sm block mb-1">
                {item.name}
              </Link>
              <div className="font-bold mb-3">₹{item.price.toLocaleString()}</div>
              <div className="flex gap-2">
                <button onClick={() => addToCart(item)} className="btn-primary flex-1 text-sm">
                  Add to Cart
                </button>
                <button onClick={() => removeFromWishlist(item.id)} className="btn-outline text-sm">
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
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
