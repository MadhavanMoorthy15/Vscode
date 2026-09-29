import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function Checkout() {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const [placed, setPlaced] = useState(false);
  const [payment, setPayment] = useState('UPI');
  const [form, setForm] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    street: user?.address?.street || user?.address || '',
    city: user?.address?.city || '',
    state: user?.address?.state || '',
    pincode: user?.address?.pincode || '',
  });

  const subtotal = getCartTotal();
  const shipping = subtotal > 499 || subtotal === 0 ? 0 : 49;
  const total = subtotal + shipping;

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    clearCart();
    setPlaced(true);
  };

  if (placed) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center max-w-md">
          <div className="text-5xl mb-3">✅</div>
          <h1 className="text-2xl font-bold text-gray-900">Order Placed!</h1>
          <p className="text-gray-600 mt-2">Thanks for shopping with us. A confirmation will be sent shortly.</p>
          <Link to="/" className="inline-block mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h1>
        <form onSubmit={onSubmit} className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <section className="bg-white rounded-xl border border-gray-100 p-5">
              <h2 className="font-semibold text-gray-900 mb-4">Shipping Address</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                <input name="name" value={form.name} onChange={onChange} placeholder="Full name" className="border border-gray-200 rounded-lg px-3 py-2 text-sm" />
                <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone" className="border border-gray-200 rounded-lg px-3 py-2 text-sm" />
                <input name="street" value={form.street} onChange={onChange} placeholder="Street" className="border border-gray-200 rounded-lg px-3 py-2 text-sm sm:col-span-2" />
                <input name="city" value={form.city} onChange={onChange} placeholder="City" className="border border-gray-200 rounded-lg px-3 py-2 text-sm" />
                <input name="state" value={form.state} onChange={onChange} placeholder="State" className="border border-gray-200 rounded-lg px-3 py-2 text-sm" />
                <input name="pincode" value={form.pincode} onChange={onChange} placeholder="Pincode" className="border border-gray-200 rounded-lg px-3 py-2 text-sm" />
              </div>
            </section>

            <section className="bg-white rounded-xl border border-gray-100 p-5">
              <h2 className="font-semibold text-gray-900 mb-4">Payment Method</h2>
              {['UPI', 'Card', 'COD'].map((method) => (
                <label key={method} className="flex items-center gap-2 mb-2 text-sm text-gray-700">
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={payment === method}
                    onChange={() => setPayment(method)}
                  />
                  {method === 'COD' ? 'Cash on Delivery' : method}
                </label>
              ))}
            </section>
          </div>

          <aside className="bg-white rounded-xl border border-gray-100 p-5 h-fit">
            <h2 className="font-semibold text-gray-900 mb-4">Order Summary</h2>
            <ul className="space-y-2 mb-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between text-sm text-gray-700">
                  <span className="truncate pr-2">{item.name} × {item.quantity}</span>
                  <span>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                </li>
              ))}
              {cartItems.length === 0 && (
                <li className="text-sm text-gray-500">No items in cart</li>
              )}
            </ul>
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-3">
              <span>Total</span>
              <span className="text-green-600">₹{total.toLocaleString('en-IN')}</span>
            </div>
            <button
              type="submit"
              className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg"
            >
              Place Order
            </button>
          </aside>
        </form>
      </div>
    </div>
  );
}
