import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useCart()

  const total = getCartTotal()
  const shipping = total > 999 ? 0 : 99
  const grandTotal = total + shipping

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-5xl mb-4">🛒</div>
          <p className="text-gray-500 mb-4">Your cart is empty</p>
          <Link to="/products" className="btn-primary">Start Shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {/* Items */}
          <div className="md:col-span-2 space-y-4">
            {cart.map(item => (
              <div key={item.id} className="card p-4 flex items-center gap-4">
                <Link to={`/product/${item.id}`} className="text-4xl">{getIcon(item.category)}</Link>
                <div className="flex-1">
                  <Link to={`/product/${item.id}`} className="font-medium hover:text-primary-600">
                    {item.name}
                  </Link>
                  <div className="text-sm text-gray-500">{item.brand}</div>
                  <div className="font-bold mt-1">₹{item.price.toLocaleString()}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.qty - 1)}
                    className="btn-outline w-8 h-8 flex items-center justify-center"
                  >-</button>
                  <span className="w-8 text-center">{item.qty}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.qty + 1)}
                    className="btn-outline w-8 h-8 flex items-center justify-center"
                  >+</button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 text-sm ml-2"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="card p-6 h-fit">
            <h2 className="font-bold text-lg mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span><span>₹{total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3 flex justify-between font-bold text-lg">
              <span>Total</span><span>₹{grandTotal.toLocaleString()}</span>
            </div>
            <Link to="/checkout" className="btn-primary w-full block text-center mt-6">
              Proceed to Checkout
            </Link>
          </div>
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
