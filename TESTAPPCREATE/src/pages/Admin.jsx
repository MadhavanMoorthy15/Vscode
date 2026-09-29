import { useMemo, useState } from "react";
import { useShop } from "../context/ShopContext";
import { categories, formatPrice } from "../data/products";

export default function Admin() {
  const { catalog, orders, addProduct } = useShop();
  const [form, setForm] = useState({
    name: "",
    category: "Mobiles",
    brand: "",
    price: "",
    rating: 4,
    reviews: 0,
    stock: 10,
    color: "Black",
    badge: "New",
    image: "https://picsum.photos/seed/newitem/600/600",
    description: "",
  });

  const stats = useMemo(() => {
    const revenue = orders.reduce((s, o) => s + o.total, 0);
    return {
      products: catalog.length,
      orders: orders.length,
      revenue,
      low: catalog.filter((p) => p.stock < 10).length,
    };
  }, [catalog, orders]);

  const submit = (e) => {
    e.preventDefault();
    addProduct({
      ...form,
      price: Number(form.price),
      rating: Number(form.rating),
      stock: Number(form.stock),
    });
    setForm({ ...form, name: "", price: "", description: "" });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Admin dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {[
          ["Products", stats.products],
          ["Orders", stats.orders],
          ["Revenue", formatPrice(stats.revenue)],
          ["Low stock", stats.low],
        ].map(([label, value]) => (
          <div key={label} className="bg-white border rounded-xl p-4">
            <p className="text-xs uppercase text-slate-500">{label}</p>
            <p className="text-2xl font-bold">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <form onSubmit={submit} className="bg-white border rounded-xl p-4 space-y-2">
          <h2 className="font-bold">Add product</h2>
          <input required placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border rounded px-2 py-1" />
          <input required placeholder="Brand" value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })} className="w-full border rounded px-2 py-1" />
          <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full border rounded px-2 py-1">
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <input required placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="w-full border rounded px-2 py-1" />
          <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full border rounded px-2 py-1" />
          <button className="bg-slate-900 text-white px-4 py-2 rounded text-sm">Publish</button>
        </form>
        <div className="bg-white border rounded-xl p-4 overflow-auto max-h-[480px]">
          <h2 className="font-bold mb-2">Catalog</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500">
                <th className="py-1">Name</th>
                <th>Cat</th>
                <th>Price</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {catalog.map((p) => (
                <tr key={p.id} className="border-t">
                  <td className="py-1 pr-2">{p.name}</td>
                  <td>{p.category}</td>
                  <td>{formatPrice(p.price)}</td>
                  <td>{p.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
