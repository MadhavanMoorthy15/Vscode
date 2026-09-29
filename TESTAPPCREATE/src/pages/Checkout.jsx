import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { formatPrice } from "../data/products";

export default function Checkout() {
  const { cart, cartTotal, user, placeOrder } = useShop();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    address: user.address,
    payment: "cod",
  });
  const [done, setDone] = useState(null);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const order = placeOrder(form);
    setDone(order);
  };

  if (done) {
    return (
      <div className="max-w-lg mx-auto px-4 py-16 text-center">
        <div className="bg-white border rounded-2xl p-8">
          <p className="text-4xl">✓</p>
          <h1 className="text-2xl font-bold mt-2">Order placed</h1>
          <p className="text-slate-600 mt-2">Order {done.id} · {formatPrice(done.total)}</p>
          <p className="text-sm mt-2">We’ll pretend to ship this to {done.details.address}.</p>
          <Link to="/profile" className="inline-block mt-6 text-orange-600 font-semibold">View in profile</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={submit} className="bg-white border rounded-xl p-5 grid gap-3">
        {["name", "email", "phone", "address"].map((field) => (
          <label key={field} className="text-sm capitalize">
            {field}
            <input
              name={field}
              value={form[field]}
              onChange={onChange}
              className="mt-1 w-full border rounded px-3 py-2"
            />
          </label>
        ))}
        <label className="text-sm">
          Payment
          <select name="payment" value={form.payment} onChange={onChange} className="mt-1 w-full border rounded px-3 py-2">
            <option value="cod">Cash on delivery</option>
            <option value="upi">UPI</option>
            <option value="card">Card</option>
          </select>
        </label>
        <p className="text-sm text-slate-600">{cart.length} item(s) · Payable {formatPrice(cartTotal)}</p>
        <div className="flex gap-3">
          <button type="submit" disabled={cart.length > 0} className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-md disabled:opacity-50">
            Place order
          </button>
          <button type="button" onClick={() => navigate("/cart")} className="border px-4 py-2 rounded-md">
            Back
          </button>
        </div>
      </form>
    </div>
  );
}
