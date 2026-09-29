import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { useTheme } from '../context/ThemeContext'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { cartCount } = useCart()
  const { wishlist } = useWishlist()
  const { darkMode, toggleTheme } = useTheme()
  const { user } = useAuth()
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/products?search=${query}`)
  }

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex items-center gap-4 sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold">
        ShopKart
      </Link>

      <form onSubmit={handleSearch} className="flex-1 max-w-xl">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products, brands and more"
          className="w-full px-4 py-2 rounded text-black outline-none"
        />
      </form>

      <div className="flex items-center gap-5">
        <Link to="/products" className="hover:underline">
          Products
        </Link>
        <Link to="/wishlist" className="relative hover:underline">
          Wishlist
          <span className="absolute -top-2 -right-4 bg-red-500 text-xs rounded-full px-1">
            {wishlist.length}
          </span>
        </Link>
        <Link to="/cart" className="relative hover:underline">
          Cart
          <span className="absolute -top-2 -right-4 bg-red-500 text-xs rounded-full px-1">
            {cartCount}
          </span>
        </Link>
        <Link to="/profile" className="hover:underline">
          {user ? user.name.split(' ')[0] : 'Login'}
        </Link>
        {user && user.role === 'admin' && (
          <Link to="/admin" className="hover:underline">
            Admin
          </Link>
        )}
        <button
          onClick={toggleTheme}
          className="bg-blue-800 px-3 py-1 rounded"
        >
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  )
}
