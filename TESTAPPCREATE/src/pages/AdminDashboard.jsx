import { useState } from "react";
import { products as initialProducts, categories } from "../data/products.js";

export default function AdminDashboard() {
  const [products, setProducts] = useState(initialProducts);

  const totalRevenue = products.reduce((sum, p) => sum + p.price * (100 - p.stock), 0);
  const lowStock = products.filter((p) => p.stock < 10);

  const stats = [
    { label: "Total Products", value: products.length },
    { label: "Categories", value: categories.length },
    { label: "Low Stock Items", value: lowStock.length },
    { label: "Est. Revenue", value: `₹${(totalRevenue / 100000).toFixed(1)}L` },
  ];

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-white dark:bg-slate-800 rounded-lg shadow p-5">
            <div className="text-sm text-gray-500">{s.label}</div>
            <div className="text-2xl font-bold mt-1">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 dark:bg-slate-700 text-left">
            <tr>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3">Rating</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t dark:border-slate-700">
                <td className="px-4 py-3 flex items-center gap-3">
                  <img src={p.image} alt={p.name} className="w-10 h-10 object-cover rounded" />
                  {p.name}
                </td>
                <td className="px-4 py-3">{p.category}</td>
                <td className="px-4 py-3">₹{p.price.toLocaleString()}</td>
                <td className="px-4 py-3">
                  <span className={p.stock < 10 ? "text-red-500 font-semibold" : ""}>
                    {p.stock}
                  </span>
                </td>
                <td className="px-4 py-3">{p.rating} ★</td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => deleteProduct(p.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
