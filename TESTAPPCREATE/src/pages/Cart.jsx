import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const deliveryCharge = subtotal > 50000 ? 0 : 99;
  const total = subtotal + deliveryCharge;

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-semibold mb-3">Your cart is empty</h2>
        <p className="text-gray-500 mb-6">Add items to get started.</p>
        <Link to="/products" className="bg-yellow-400 text-slate-900 font-semibold px-6 py-3 rounded">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-4">
        <h1 className="text-xl font-bold">My Cart ({cart.length})</h1>
        {cart.map((item) => (
          <div key={item.id} className="flex gap-4 bg-white dark:bg-slate-800 rounded-lg shadow p-4">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.brand}</p>
              <div className="font-bold mt-1">₹{item.price.toLocaleString()}</div>

              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center border rounded">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1"
                  >
                    −
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Price summary */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-5 h-fit">
        <h2 className="font-semibold border-b pb-3 mb-3">PRICE DETAILS</h2>
        <div className="flex justify-between text-sm mb-2">
          <span>Price ({cart.length} items)</span>
          <span>₹{subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span>Delivery Charges</span>
          <span className={deliveryCharge === 0 ? "text-green-600" : ""}>
            {deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}
          </span>
        </div>
        <div className="flex justify-between font-bold border-t pt-3 mt-3">
          <span>Total Amount</span>
          <span>₹{total.toLocaleString()}</span>
        </div>
        <button
          onClick={() => navigate("/checkout")}
          className="w-full mt-5 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
