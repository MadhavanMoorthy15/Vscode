import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const navigate = useNavigate();
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const { darkMode, toggleTheme } = useTheme();
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = cart?.reduce((sum, item) => sum + (item.qty || 1), 0) || 0;
  const wishCount = wishlist?.length || 0;

  function handleSearch(e) {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    navigate(`/products?q=${encodeURIComponent(trimmed)}`);
  }

  return (
    <header className="bg-blue-600 text-white sticky top-0 z-50 shadow">
      <nav className="min-w-[600px] mx-auto px-4 py-3 flex items-center gap-4">
        <Link to="/" className="text-2xl font-bold tracking-tight shrink-0">
          ShopMart
        </Link>

        <form onSubmit={handleSearch} className="flex flex-1 min-w-[280px] gap-2">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="flex-1 rounded px-3 py-2 text-gray-900 outline-none"
          />
          <button
            type="submit"
            className="bg-blue-800 hover:bg-blue-900 rounded px-4 py-2 font-medium"
          >
            Search
          </button>
        </form>

        <button
          type="button"
          className="md:hidden ml-auto text-2xl leading-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          ☰
        </button>

        <div className="flex items-center gap-4 text-sm font-medium">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/products" className="hover:underline">
            Products
          </Link>
          <Link to="/wishlist" className="relative hover:underline">
            Wishlist
            {wishCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {wishCount}
              </span>
            )}
          </Link>
          <Link to="/cart" className="relative hover:underline">
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <Link to="/profile" className="hover:underline">
            Profile
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            className="border border-white/40 rounded px-2 py-1 text-xs"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>
      </nav>
    </header>
  );
}
