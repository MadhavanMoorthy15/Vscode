import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { useWishlist } from "../context/WishlistContext.jsx";
import { useTheme } from "../context/ThemeContext.jsx";
import { useState } from "react";

export default function Navbar() {
  const { count } = useCart();
  const { wishlist } = useWishlist();
  const { darkMode, toggleTheme } = useTheme();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/products?q=${search}`);
  };

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <Link to="/" className="text-2xl font-bold text-yellow-400 whitespace-nowrap">
          Shop<span className="text-white">Kart</span>
        </Link>

        <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for products, brands and more"
            className="w-full px-4 py-2 rounded text-gray-900 focus:outline-none"
          />
        </form>

        <nav className="flex items-center gap-5 text-sm">
          <Link to="/products" className="hover:text-yellow-400">Products</Link>

          <button onClick={toggleTheme} className="hover:text-yellow-400">
            {darkMode ? "Light" : "Dark"}
          </button>

          <Link to="/wishlist" className="relative hover:text-yellow-400">
            Wishlist
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-xs rounded-full px-1.5">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link to="/cart" className="relative hover:text-yellow-400">
            Cart
            <span className="absolute -top-2 -right-3 bg-yellow-400 text-slate-900 text-xs font-bold rounded-full px-1.5">
              {count}
            </span>
          </Link>

          <Link to="/profile" className="hover:text-yellow-400">Profile</Link>
          <Link to="/admin" className="hover:text-yellow-400">Admin</Link>
        </nav>
      </div>
    </header>
  );
}
