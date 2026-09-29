import { useState } from "react";
import { useShop } from "../context/ShopContext";
import { formatPrice } from "../data/products";

export default function Profile() {
  const { user, setUser, orders } = useShop();
  const [form, setForm] = useState(user);
  const [saved, setSaved] = useState(false);

  const save = (e) => {
    e.preventDefault();
    if (!form.email.includes("@")) return;
    setUser(form);
    setSaved(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-6">
      <form onSubmit={save} className="bg-white border rounded-xl p-5 space-y-3">
        <h1 className="text-xl font-bold">Your profile</h1>
        {["name", "email", "phone", "address"].map((f) => (
          <label key={f} className="block text-sm capitalize">
            {f}
            <input
              value={form[f]}
              onChange={(e) => setForm({ ...form, [f]: e.target.value })}
              className="mt-1 w-full border rounded px-3 py-2"
            />
          </label>
        ))}
        <button className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm">Save</button>
        {saved && <p className="text-green-700 text-sm">Saved.</p>}
      </form>
      <section>
        <h2 className="text-xl font-bold mb-3">Orders</h2>
        {orders.length === 0 ? (
          <p className="text-slate-500 text-sm">No orders yet.</p>
        ) : (
          <ul className="space-y-3">
            {orders.map((o) => (
              <li key={o.id} className="bg-white border rounded-xl p-3 text-sm">
                <p className="font-semibold">{o.id}</p>
                <p className="text-slate-500">{new Date(o.date).toLocaleString()}</p>
                <p>{o.items.map((i) => i.name).join(", ")}</p>
                <p className="font-bold">{formatPrice(o.total)}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
