import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user, logout, updateProfile } = useAuth();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: typeof user?.address === 'string' ? user.address : user?.address?.street || '',
  });

  const orders = user?.orders || [
    { id: 'ORD-1042', date: '12 Mar 2026', total: 69900, status: 'Delivered' },
    { id: 'ORD-0988', date: '02 Feb 2026', total: 2499, status: 'Delivered' },
    { id: 'ORD-0911', date: '18 Jan 2026', total: 4990, status: 'Cancelled' },
  ];

  const onChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const save = (e) => {
    e.preventDefault();
    if (updateProfile) updateProfile(form);
    setEditing(false);
  };

  const initials = (user?.name || 'Guest').slice(0, 1).toUpperCase();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col sm:flex-row gap-5 items-start">
          <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
            {user?.avatar ? <img src={user.avatar} alt="" className="w-16 h-16 rounded-full object-cover" /> : initials}
          </div>
          <div className="flex-1">
            {!editing ? (
              <>
                <h1 className="text-2xl font-bold text-gray-900">{user?.name || 'Guest User'}</h1>
                <p className="text-gray-600">{user?.email || 'Not signed in'}</p>
                <p className="text-gray-600 text-sm mt-1">{user?.phone || 'No phone added'}</p>
                <p className="text-gray-600 text-sm">
                  {typeof user?.address === 'string'
                    ? user.address
                    : user?.address
                      ? `${user.address.street || ''}, ${user.address.city || ''} ${user.address.pincode || ''}`
                      : 'No address saved'}
                </p>
                <button
                  type="button"
                  onClick={() => setEditing(true)}
                  className="mt-4 border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium"
                >
                  Edit Profile
                </button>
              </>
            ) : (
              <form onSubmit={save} className="grid sm:grid-cols-2 gap-3">
                <input name="name" value={form.name} onChange={onChange} placeholder="Name" className="border border-gray-200 rounded-lg px-3 py-2 text-sm" />
                <input name="email" value={form.email} onChange={onChange} placeholder="Email" className="border border-gray-200 rounded-lg px-3 py-2 text-sm" />
                <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone" className="border border-gray-200 rounded-lg px-3 py-2 text-sm" />
                <input name="address" value={form.address} onChange={onChange} placeholder="Address" className="border border-gray-200 rounded-lg px-3 py-2 text-sm" />
                <div className="flex gap-2 sm:col-span-2">
                  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">Save</button>
                  <button type="button" onClick={() => setEditing(false)} className="border border-gray-300 px-4 py-2 rounded-lg text-sm">Cancel</button>
                </div>
              </form>
            )}
          </div>
          <button
            type="button"
            onClick={logout}
            className="text-sm text-red-600 border border-red-200 px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mt-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Order History</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="py-2">Order</th>
                  <th className="py-2">Date</th>
                  <th className="py-2">Total</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-50">
                    <td className="py-2 font-medium text-gray-800">{order.id}</td>
                    <td className="py-2 text-gray-600">{order.date}</td>
                    <td className="py-2 text-green-600">₹{Number(order.total).toLocaleString('en-IN')}</td>
                    <td className="py-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs ${order.status === 'Cancelled' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-700'}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
