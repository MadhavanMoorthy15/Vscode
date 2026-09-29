import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const { addToWishlist } = useWishlist()

  return (
    <div className="border rounded-lg p-3 bg-white dark:bg-gray-700 hover:shadow-lg transition">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="mt-2 font-medium text-gray-800 dark:text-gray-100 truncate">
          {product.name}
        </h3>
      </Link>
      <p className="text-sm text-gray-500 dark:text-gray-300">{product.brand}</p>
      <div className="flex items-center justify-between mt-1">
        <span className="text-lg font-bold text-gray-900 dark:text-white">
          ₹{product.price.toLocaleString()}
        </span>
        <span className="text-sm bg-green-600 text-white px-2 py-0.5 rounded">
          {product.rating} ★
        </span>
      </div>
      <div className="flex gap-2 mt-3">
        <button
          onClick={() => addToCart(product)}
          className="flex-1 bg-yellow-500 text-white py-1 rounded hover:bg-yellow-600"
        >
          Add to Cart
        </button>
        <button
          onClick={() => addToWishlist(product)}
          className="px-3 border rounded hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          ♥
        </button>
      </div>
    </div>
  )
}
