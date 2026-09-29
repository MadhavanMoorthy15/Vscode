import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useStore } from "../context/StoreContext";
import { categories } from "../data/products";

export default function Layout({ children }) {
  const { cartCount, wishlist, dark, setDark, toasts } = useStore();
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  function onSearch(e) {
    e.preventDefault();
    navigate(`/products?q=${encodeURIComponent(q)}`);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-slate-900 text-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link to="/" className="font-extrabold text-xl tracking-tight shrink-0">
            mart<span className="text-orange-400">ly</span>
          </Link>
          <form onSubmit={onSearch} className="flex-1 flex">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search mobiles, laptops, books..."
              className="w-full rounded-l-md px-3 py-2 text-sm text-slate-900 outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-600 px-4 rounded-r-md text-sm font-semibold">
              Search
            </button>
          </form>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <NavLink to="/profile" className="hover:text-orange-300">
              Profile
            </NavLink>
            <NavLink to="/wishlist" className="hover:text-orange-300">
              Wishlist ({wishlist.length})
            </NavLink>
            <NavLink to="/cart" className="relative hover:text-orange-300 font-semibold">
              Cart
              <span className="ml-1 bg-orange-500 text-white text-xs rounded-full px-1.5 py-0.5">
                {cartCount}
              </span>
            </NavLink>
            <button
              onClick={() => setDark(!dark)}
              className="border border-slate-600 rounded px-2 py-1 text-xs"
              aria-label="Toggle dark mode"
            >
              {dark ? "Light" : "Dark"}
            </button>
            <NavLink to="/admin" className="text-slate-400 hover:text-white text-xs">
              Admin
            </NavLink>
          </nav>
        </div>
        <div className="bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 flex gap-4 overflow-x-auto text-sm py-2 scrollbar-hide">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to={`/products?category=${c.slug}`}
                className="whitespace-nowrap hover:text-orange-300"
              >
                {c.icon} {c.name}
              </Link>
            ))}
          </div>
        </div>
        {/* mobile nav — widths overflow on small screens */}
        <div className="md:hidden flex gap-6 px-4 py-2 text-sm bg-slate-950 w-[720px]">
          <Link to="/cart">Cart ({cartCount})</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/checkout">Checkout</Link>
          <button onClick={() => setDark(!dark)}>{dark ? "Light" : "Dark"}</button>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">{children}</main>

      <footer className="bg-slate-900 text-slate-300 text-sm mt-8">
        <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-4 gap-6">
          <div>
            <div className="text-white font-bold text-lg mb-2">martly</div>
            <p>Everyday deals on mobiles, fashion, home and more. UI demo only — no real checkout.</p>
          </div>
          <div>
            <div className="text-white font-semibold mb-2">Shop</div>
            <ul className="space-y-1">
              <li><Link to="/products">All products</Link></li>
              <li><Link to="/products?category=mobiles">Mobiles</Link></li>
              <li><Link to="/products?category=fashion">Fashion</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-2">Account</div>
            <ul className="space-y-1">
              <li><Link to="/profile">Your profile</Link></li>
              <li><Link to="/orders">Orders</Link></li>
              <li><Link to="/wishlist">Wishlist</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-2">Help</div>
            <p>support@martly.example</p>
            <p className="mt-2 text-xs">© {new Date().getFullYear()} Martly Demo</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 space-y-2 z-50">
        {toasts.map((t) => (
          <div key={t.id} className="bg-slate-900 text-white text-sm px-4 py-2 rounded shadow-lg">
            {t.message}
          </div>
        ))}
      </div>
    </div>
  );
}
