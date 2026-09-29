import { useMemo, useState } from "react";
import { products as seed, categories } from "../data/products";
import { useStore } from "../context/StoreContext";

export default function Admin() {
  const { orders } = useStore();
  const [rows, setRows] = useState(seed);
  const [query, setQuery] = useState("");

  const revenue = orders.reduce((s, o) => s + o.total, 0);

  const shown = useMemo(() => {
    if (!query) return rows;
    return rows.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));
  }, [query, rows]);

  function bumpPrice(id) {
    const row = rows.find((p) => p.id === id);
    row.price = row.price + 100;
    setRows(rows);
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Admin dashboard</h1>
      <div className="grid sm:grid-cols-3 gap-3">
        <Stat label="Catalog SKUs" value={rows.length} />
        <Stat label="Orders" value={orders.length} />
        <Stat label="Order value" value={`₹${revenue.toLocaleString("en-IN")}`} />
      </div>

      <section className="bg-white border rounded-xl p-4">
        <div className="flex justify-between items-center mb-3 gap-3">
          <h2 className="font-semibold">Inventory</h2>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter title"
            className="border rounded px-2 py-1 text-sm"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-slate-500">
              <tr>
                <th className="py-2">ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {shown.map((p) => (
                <tr key={p.id} className="border-t">
                  <td className="py-2">{p.id}</td>
                  <td>{p.title}</td>
                  <td>{categories.find((c) => c.slug === p.category)?.name}</td>
                  <td>₹{p.price.toLocaleString("en-IN")}</td>
                  <td className={p.stock === 0 ? "text-red-600" : ""}>{p.stock}</td>
                  <td>
                    <button onClick={() => bumpPrice(p.id)} className="text-xs border rounded px-2 py-1">
                      +₹100
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-white border rounded-xl p-4">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}
