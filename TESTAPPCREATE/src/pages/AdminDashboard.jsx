import { useState } from 'react';
import { products } from '../data/products';

const recentOrders = [
  { id: 'ORD-2201', customer: 'Aisha Khan', total: 64999, status: 'Processing', date: '24 Mar 2026' },
  { id: 'ORD-2200', customer: 'Rahul Mehta', total: 3695, status: 'Shipped', date: '24 Mar 2026' },
  { id: 'ORD-2198', customer: 'Priya Nair', total: 139999, status: 'Delivered', date: '23 Mar 2026' },
  { id: 'ORD-2194', customer: 'Vikram Shah', total: 999, status: 'Delivered', date: '22 Mar 2026' },
  { id: 'ORD-2190', customer: 'Neha Gupta', total: 54999, status: 'Cancelled', date: '21 Mar 2026' },
];

export default function AdminDashboard() {
  const [view, setView] = useState('dashboard');
  const lowStock = products.filter((p) => p.inStock === false);

  const nav = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'products', label: 'Products' },
    { id: 'orders', label: 'Orders' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex">
      <aside className="w-56 bg-slate-900 text-white min-h-screen p-4 hidden md:block">
        <p className="text-lg font-bold mb-6 px-2">Admin</p>
        <nav className="space-y-1">
          {nav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setView(item.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                view === item.id ? 'bg-blue-600' : 'hover:bg-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-4 md:p-8">
        <div className="flex gap-2 mb-4 md:hidden">
          {nav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setView(item.id)}
              className={`px-3 py-1.5 rounded-lg text-sm ${view === item.id ? 'bg-blue-600 text-white' : 'bg-white'}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {view === 'dashboard' && (
          <>
            <h1 className="text-2xl font-bold text-gray-900 mb-5">Dashboard</h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Stat label="Total Products" value={products.length} />
              <Stat label="Total Orders" value="128" />
              <Stat label="Revenue" value="₹45,67,890" />
              <Stat label="Customers" value="1,234" />
            </div>
            <section className="bg-white rounded-xl border border-gray-100 p-5 mb-6">
              <h2 className="font-semibold mb-3">Recent Orders</h2>
              <OrdersTable orders={recentOrders} />
            </section>
            <section className="bg-white rounded-xl border border-red-100 p-5">
              <h2 className="font-semibold text-red-700 mb-3">Low stock alert</h2>
              {lowStock.length === 0 ? (
                <p className="text-sm text-gray-500">All products are in stock.</p>
              ) : (
                <ul className="text-sm space-y-1">
                  {lowStock.map((p) => (
                    <li key={p.id} className="text-gray-700">{p.name} — {p.category}</li>
                  ))}
                </ul>
              )}
            </section>
          </>
        )}

        {view === 'products' && (
          <>
            <h1 className="text-2xl font-bold text-gray-900 mb-5">Products</h1>
            <div className="bg-white rounded-xl border border-gray-100 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="p-3">Name</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Stock</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p.id} className="border-b border-gray-50">
                      <td className="p-3">{p.name}</td>
                      <td className="p-3 text-gray-600">{p.category}</td>
                      <td className="p-3 text-green-700">₹{p.price.toLocaleString('en-IN')}</td>
                      <td className="p-3">
                        <span className={p.inStock ? 'text-green-600' : 'text-red-600'}>
                          {p.inStock ? 'In stock' : 'Out of stock'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {view === 'orders' && (
          <>
            <h1 className="text-2xl font-bold text-gray-900 mb-5">Orders</h1>
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <OrdersTable orders={recentOrders} />
            </div>
          </>
        )}
      </main>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
    </div>
  );
}

function OrdersTable({ orders }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="py-2 pr-3">Order</th>
            <th className="py-2 pr-3">Customer</th>
            <th className="py-2 pr-3">Date</th>
            <th className="py-2 pr-3">Total</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b border-gray-50">
              <td className="py-2 pr-3 font-medium">{order.id}</td>
              <td className="py-2 pr-3">{order.customer}</td>
              <td className="py-2 pr-3 text-gray-600">{order.date}</td>
              <td className="py-2 pr-3">₹{order.total.toLocaleString('en-IN')}</td>
              <td className="py-2">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
