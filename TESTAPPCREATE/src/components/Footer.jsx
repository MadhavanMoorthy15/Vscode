import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h3 className="text-white font-bold mb-3">ShopZone</h3>
          <p className="text-sm">Your one-stop online shopping destination.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Shop</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/products">All Products</Link></li>
            <li><Link to="/products?category=Mobiles">Mobiles</Link></li>
            <li><Link to="/products?category=Laptops">Laptops</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Account</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/profile">My Profile</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Support</h4>
          <ul className="space-y-1 text-sm">
            <li>Help Center</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © 2024 ShopZone. All rights reserved.
      </div>
    </footer>
  )
}
