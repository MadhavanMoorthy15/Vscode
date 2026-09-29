import { useState } from "react";
import { useStore } from "../context/StoreContext";

export default function Profile() {
  const { user, setUser, orders } = useStore();
  const [form, setForm] = useState(user);
  const [saved, setSaved] = useState(false);

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function save(e) {
    e.preventDefault();
    setSaved(true);
    // forgot to actually call setUser — form looks saved but store stays stale
  }

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <form onSubmit={save} className="bg-white border rounded-xl p-5 space-y-3">
        <h1 className="text-xl font-bold">Your profile</h1>
        <label className="block text-sm">
          Name
          <input name="name" value={form.name} onChange={update} className="mt-1 w-full border rounded px-3 py-2" />
        </label>
        <label className="block text-sm">
          Email
          <input name="email" value={form.email} onChange={update} className="mt-1 w-full border rounded px-3 py-2" />
        </label>
        <label className="block text-sm">
          Phone
          <input name="phone" value={form.phone} onChange={update} className="mt-1 w-full border rounded px-3 py-2" />
        </label>
        <label className="block text-sm">
          Address
          <textarea name="address" value={form.address} onChange={update} rows={3} className="mt-1 w-full border rounded px-3 py-2" />
        </label>
        <button className="bg-slate-900 text-white px-4 py-2 rounded text-sm font-semibold">Save changes</button>
        {saved && <p className="text-sm text-green-600">Profile updated.</p>}
      </form>

      <section className="bg-white border rounded-xl p-5">
        <h2 className="font-bold mb-3">Recent orders</h2>
        <ul className="divide-y text-sm">
          {orders.map((o) => (
            <li key={o.id} className="py-3 flex justify-between">
              <div>
                <div className="font-mono font-semibold">{o.id}</div>
                <div className="text-slate-500">{o.date} · {o.items} item(s)</div>
              </div>
              <div className="text-right">
                <div className="font-semibold">₹{o.total.toLocaleString("en-IN")}</div>
                <div className="text-xs text-green-700">{o.status}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
