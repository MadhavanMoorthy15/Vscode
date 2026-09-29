import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function Checkout() {
  const { cart, getCartTotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '', email: '', phone: '', address: '', city: '', pincode: '', payment: 'cod'
  })
  const [orderPlaced, setOrderPlaced] = useState(false)

  const subtotal = getCartTotal()
  const shipping = subtotal > 999 ? 0 : 99
  const total = subtotal + shipping

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    clearCart()
    setOrderPlaced(true)
  }

  if (orderPlaced) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h1 className="text-2xl font-bold mb-2">Order Placed Successfully!</h1>
        <p className="text-gray-500 mb-6">Thank you for shopping with ShopZone.</p>
        <button onClick={() => navigate('/products')} className="btn-primary">Continue Shopping</button>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <form onSubmit={handleSubmit} className="md:col-span-2 card p-6 space-y-4">
          <h2 className="font-bold text-lg">Delivery Details</h2>

          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input name="name" value={form.name} onChange={handleChange} className="input" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input name="email" value={form.email} onChange={handleChange} className="input" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} className="input" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <textarea name="address" value={form.address} onChange={handleChange} className="input" rows="3" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input name="city" value={form.city} onChange={handleChange} className="input" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Pincode</label>
              <input name="pincode" value={form.pincode} onChange={handleChange} className="input" />
            </div>
          </div>

          <h2 className="font-bold text-lg pt-2">Payment Method</h2>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" value="cod" checked={form.payment === 'cod'} onChange={handleChange} />
              Cash on Delivery
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" value="card" checked={form.payment === 'card'} onChange={handleChange} />
              Credit / Debit Card
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" value="upi" checked={form.payment === 'upi'} onChange={handleChange} />
              UPI
            </label>
          </div>

          <button type="submit" className="btn-primary w-full">
            Place Order
          </button>
        </form>

        {/* Summary */}
        <div className="card p-6 h-fit">
          <h2 className="font-bold text-lg mb-4">Order Summary</h2>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between text-sm mb-2">
              <span className="truncate mr-2">{item.name} x{item.qty}</span>
              <span>₹{(item.price).toLocaleString()}</span>
            </div>
          ))}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span><span>₹{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span><span>₹{total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
