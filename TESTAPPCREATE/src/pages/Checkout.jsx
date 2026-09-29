import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../context/StoreContext";

export default function Checkout() {
  const { cartItems, cartTotal, placeOrder, user } = useStore();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: user.name,
    phone: "",
    address: user.address,
    payment: "upi",
  });
  const [placed, setPlaced] = useState(null);

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
    // no validation — empty phone / address still places the order
    const order = placeOrder(form);
    setPlaced(order);
  }

  if (placed) {
    return (
      <div className="bg-white border rounded-xl p-8 max-w-lg mx-auto text-center">
        <div className="text-4xl mb-2">✅</div>
        <h1 className="text-2xl font-bold">Order confirmed</h1>
        <p className="text-slate-500 mt-2">
          Order <span className="font-mono">{placed.id}</span> is being packed.
        </p>
        <p className="mt-2 font-semibold">₹{placed.total.toLocaleString("en-IN")}</p>
        <Link to="/profile" className="inline-block mt-4 text-orange-600 font-semibold">
          View in profile
        </Link>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-[1fr_320px] gap-6">
      <form onSubmit={submit} className="bg-white border rounded-xl p-5 space-y-3">
        <h1 className="text-xl font-bold">Checkout</h1>
        <label className="block text-sm">
          Full name
          <input name="name" value={form.name} onChange={update} className="mt-1 w-full border rounded px-3 py-2" />
        </label>
        <label className="block text-sm">
          Phone
          <input name="phone" value={form.phone} onChange={update} placeholder="10-digit mobile" className="mt-1 w-full border rounded px-3 py-2" />
        </label>
        <label className="block text-sm">
          Address
          <textarea name="address" value={form.address} onChange={update} rows={3} className="mt-1 w-full border rounded px-3 py-2" />
        </label>
        <fieldset className="text-sm">
          <legend className="font-medium mb-1">Payment</legend>
          {["upi", "card", "cod"].map((p) => (
            <label key={p} className="mr-4 capitalize">
              <input type="radio" name="payment" value={p} checked={form.payment === p} onChange={update} className="mr-1" />
              {p}
            </label>
          ))}
        </fieldset>
        <button
          type="submit"
          className="bg-orange-500 text-white font-semibold px-5 py-2 rounded"
        >
          Place order
        </button>
        <p className="text-xs text-slate-400">Demo only — no payment is processed.</p>
      </form>
      <aside className="bg-white border rounded-xl p-4 h-fit">
        <h2 className="font-semibold mb-2">Your items</h2>
        {cartItems.length === 0 && <p className="text-sm text-slate-500">Cart is empty, but you can still check out.</p>}
        <ul className="text-sm space-y-2">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between gap-2">
              <span>
                {item.product?.title} × {item.qty}
              </span>
            </li>
          ))}
        </ul>
        <div className="border-t mt-3 pt-2 font-bold flex justify-between">
          <span>Payable</span>
          <span>₹{cartTotal.toLocaleString("en-IN")}</span>
        </div>
        <button type="button" onClick={() => navigate("/cart")} className="text-sm text-orange-600 mt-3">
          Edit cart
        </button>
      </aside>
    </div>
  );
}
