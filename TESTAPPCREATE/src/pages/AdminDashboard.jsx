import { products, categoriesList } from '../data/products.js';

export default function AdminDashboard() {
  const revenue = products.reduce((sum, p) => sum + p.price * (p.id % 7), 0);
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-black">Admin Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-4"><Card title="Products" value={products.length} /><Card title="Categories" value={categoriesList.length} /><Card title="Revenue" value={`₹${revenue.toLocaleString()}`} /><Card title="Pending Orders" value="28" /></div>
      <section className="mt-8 rounded-xl bg-white p-6 shadow dark:bg-slate-800"><h2 className="mb-4 text-xl font-bold">Inventory</h2><div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead><tr className="border-b"><th className="py-2">ID</th><th>Name</th><th>Category</th><th>Price</th><th>Stock</th><th>Status</th></tr></thead><tbody>{products.slice(0, 18).map((p) => <tr key={p.id} className="border-b"><td className="py-2">{p.id}</td><td>{p.name}</td><td>{p.category}</td><td>₹{p.price}</td><td>{p.stock}</td><td><span className="rounded bg-green-100 px-2 py-1 text-green-700">Active</span></td></tr>)}</tbody></table></div></section>
    </main>
  );
}
function Card({ title, value }) { return <div className="rounded-xl bg-white p-5 shadow dark:bg-slate-800"><p className="text-sm text-slate-500">{title}</p><strong className="mt-2 block text-2xl">{value}</strong></div>; }
