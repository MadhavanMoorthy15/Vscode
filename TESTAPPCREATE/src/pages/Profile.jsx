import { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'

export default function Profile() {
  const { cart } = useCart()
  const { wishlist } = useWishlist()
  const [profile, setProfile] = useState({
    name: 'Demo User',
    email: 'demo@shopzone.com',
    phone: '9876543210',
    address: '221B Baker Street, Mumbai'
  })
  const [saved, setSaved] = useState(false)

  function handleChange(e) {
    setProfile({ ...profile, [e.target.name]: e.target.value })
    setSaved(false)
  }

  function handleSave(e) {
    e.preventDefault()
    setSaved(true)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="card p-6 text-center">
          <div className="text-3xl font-bold text-primary-600">{cart.length}</div>
          <div className="text-sm text-gray-500">Cart Items</div>
        </div>
        <div className="card p-6 text-center">
          <div className="text-3xl font-bold text-primary-600">{wishlist.length}</div>
          <div className="text-sm text-gray-500">Wishlist Items</div>
        </div>
        <div className="card p-6 text-center">
          <div className="text-3xl font-bold text-primary-600">12</div>
          <div className="text-sm text-gray-500">Orders</div>
        </div>
      </div>

      {/* Edit form */}
      <form onSubmit={handleSave} className="card p-6 space-y-4">
        <h2 className="font-bold text-lg">Personal Information</h2>
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input name="name" value={profile.name} onChange={handleChange} className="input" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input name="email" value={profile.email} onChange={handleChange} className="input" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input name="phone" value={profile.phone} onChange={handleChange} className="input" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <textarea name="address" value={profile.address} onChange={handleChange} className="input" rows="3" />
        </div>
        <button type="submit" className="btn-primary">Save Changes</button>
        {saved && <p className="text-green-600">Profile saved!</p>}
      </form>

      {/* Recent orders */}
      <section className="mt-8">
        <h2 className="font-bold text-lg mb-4">Recent Orders</h2>
        <div className="card divide-y divide-gray-200 dark:divide-gray-700">
          {[
            { id: 'SZ-10045', date: '2024-05-12', total: 4999, status: 'Delivered' },
            { id: 'SZ-10038', date: '2024-05-02', total: 129999, status: 'Shipped' },
            { id: 'SZ-10021', date: '2024-04-18', total: 799, status: 'Delivered' },
          ].map(order => (
            <div key={order.id} className="p-4 flex justify-between items-center">
              <div>
                <div className="font-medium">Order {order.id}</div>
                <div className="text-sm text-gray-500">{order.date}</div>
              </div>
              <div className="font-bold">₹{order.total.toLocaleString()}</div>
              <span className={`text-xs px-2 py-1 rounded ${
                order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}>
                {order.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
