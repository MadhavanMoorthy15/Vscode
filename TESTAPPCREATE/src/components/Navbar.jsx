import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import { useTheme } from '../context/ThemeContext.jsx'

export default function Navbar() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const { cartCount } = useCart()
  const { wishlist } = useWishlist()
  const { darkMode, toggleTheme } = useTheme()

  function handleSearch(e) {
    e.preventDefault()
    navigate(`/products?q=${search}`)
  }

  return (
    <header className="bg-primary-600 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <Link to="/" className="text-2xl font-bold tracking-tight">ShopZone</Link>

        <form onSubmit={handleSearch} className="flex-1 max-w-xl hidden md:flex">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 bg-white outline-none"
          />
          <button type="submit" className="bg-primary-700 hover:bg-primary-800 px-4 rounded-r-lg">
            Search
          </button>
        </form>

        <nav className="ml-auto flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded hover:bg-primary-700">
            {darkMode ? '☀️' : '🌙'}
          </button>
          <Link to="/profile" className="hover:underline">Account</Link>
          <Link to="/wishlist" className="relative">
            ❤️
            <span className="absolute -top-1 -right-2 bg-yellow-400 text-black text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {wishlist.length}
            </span>
          </Link>
          <Link to="/cart" className="relative">
            🛒
            <span className="absolute -top-1 -right-2 bg-yellow-400 text-black text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {cartCount}
            </span>
          </Link>
          <Link to="/admin" className="hover:underline hidden md:block">Admin</Link>
        </nav>
      </div>
    </header>
  )
}
