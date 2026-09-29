import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const subtotal = getCartTotal();
  const shipping = subtotal > 499 || subtotal === 0 ? 0 : 49;
  const total = subtotal + shipping;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Your Cart</h1>

        {cartItems.length === 0 && (
          <div className="bg-white rounded-xl border border-gray-100 p-10 text-center mb-6">
            <p className="text-lg text-gray-700">Your cart is empty.</p>
            <Link to="/products" className="inline-block mt-4 text-blue-600 font-medium hover:underline">
              Continue shopping
            </Link>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-gray-100 p-4 flex gap-4 items-center"
              >
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                <div className="flex-1">
                  <Link to={`/product/${item.id}`} className="font-medium text-gray-900 hover:text-blue-600">
                    {item.name}
                  </Link>
                  <p className="text-green-600 font-semibold mt-1">
                    ₹{item.price.toLocaleString('en-IN')}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 border border-gray-300 rounded"
                    >
                      −
                    </button>
                    <span className="w-6 text-center text-sm">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 border border-gray-300 rounded"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="ml-3 text-sm text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <p className="font-semibold text-gray-900">
                  ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                </p>
              </div>
            ))}
          </div>

          <aside className="bg-white rounded-xl border border-gray-100 p-5 h-fit">
            <h2 className="font-semibold text-gray-900 mb-4">Order Summary</h2>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-900 border-t border-gray-100 pt-3 mt-3">
              <span>Total</span>
              <span>₹{total.toLocaleString('en-IN')}</span>
            </div>
            <Link
              to="/checkout"
              className="block text-center mt-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg"
            >
              Proceed to Checkout
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
