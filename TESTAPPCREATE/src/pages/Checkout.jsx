import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "cod",
  });
  const [placed, setPlaced] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryCharge = subtotal > 50000 ? 0 : 99;
  const total = subtotal + deliveryCharge;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    clearCart();
    setPlaced(true);
  };

  if (placed) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h2 className="text-2xl font-bold mb-2">Order Placed Successfully!</h2>
        <p className="text-gray-500 mb-6">
          Thank you for shopping with ShopKart. Your order will be delivered soon.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-yellow-400 text-slate-900 font-semibold px-6 py-3 rounded"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-lg shadow p-6">
        <h1 className="text-xl font-bold mb-5">Shipping Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full Name" className="border rounded px-3 py-2 text-gray-900" />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border rounded px-3 py-2 text-gray-900" />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="border rounded px-3 py-2 text-gray-900" />
          <input name="pincode" value={form.pincode} onChange={handleChange} placeholder="Pincode" className="border rounded px-3 py-2 text-gray-900" />
          <input name="address" value={form.address} onChange={handleChange} placeholder="Address" className="border rounded px-3 py-2 text-gray-900 md:col-span-2" />
          <input name="city" value={form.city} onChange={handleChange} placeholder="City" className="border rounded px-3 py-2 text-gray-900" />
        </div>

        <h2 className="font-semibold mt-6 mb-3">Payment Method</h2>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" value="cod" checked={form.payment === "cod"} onChange={handleChange} />
            Cash on Delivery
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" value="card" checked={form.payment === "card"} onChange={handleChange} />
            Credit / Debit Card
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" value="upi" checked={form.payment === "upi"} onChange={handleChange} />
            UPI
          </label>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-5 h-fit">
        <h2 className="font-semibold border-b pb-3 mb-3">ORDER SUMMARY</h2>
        <div className="flex justify-between text-sm mb-2">
          <span>Items ({cart.length})</span>
          <span>₹{subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span>Delivery</span>
          <span>{deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}</span>
        </div>
        <div className="flex justify-between font-bold border-t pt-3 mt-3">
          <span>Total</span>
          <span>₹{total.toLocaleString()}</span>
        </div>
        <button
          onClick={handlePlaceOrder}
          className="w-full mt-5 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
}
