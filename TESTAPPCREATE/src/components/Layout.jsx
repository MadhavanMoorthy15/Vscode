import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useShop } from "../context/ShopContext";
import { categories } from "../data/products";

export default function Layout({ children }) {
  const { cartCount, wishlist, dark, setDark } = useShop();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const onSearch = (e) => {
    e.preventDefault();
    navigate(`/products?q=${encodeURIComponent(q)}`);
    setOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col w-[1100px] mx-auto">
      <header className="sticky top-0 z-40 bg-slate-900 text-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
          <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            ☰
          </button>
          <Link to="/" className="text-xl font-extrabold tracking-tight">
            Shop<span className="text-orange-400">Nest</span>
          </Link>
          <form onSubmit={onSearch} className="hidden md:flex flex-1">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search mobiles, laptops, books..."
              className="w-full rounded-l-md px-3 py-2 text-slate-900 outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-600 px-4 rounded-r-md font-semibold">
              Search
            </button>
          </form>
          <nav className="flex items-center gap-3 text-sm">
            <button
              onClick={() => setDark(!dark)}
              className="hidden sm:inline px-2 py-1 rounded bg-slate-800"
            >
              {dark ? "Light" : "Dark"}
            </button>
            <NavLink to="/profile" className="hidden sm:inline hover:text-orange-300">
              Account
            </NavLink>
            <NavLink to="/wishlist" className="hover:text-orange-300">
              Wishlist ({wishlist.length})
            </NavLink>
            <NavLink to="/cart" className="bg-orange-500 hover:bg-orange-600 px-3 py-1.5 rounded-md font-semibold">
              Cart ({cartCount})
            </NavLink>
          </nav>
        </div>
        <div className="bg-slate-800 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 flex gap-4 overflow-x-auto text-sm py-2">
            <Link to="/products" className="whitespace-nowrap hover:text-orange-300">
              All
            </Link>
            {categories.map((c) => (
              <Link key={c} to={`/products?category=${encodeURIComponent(c)}`} className="whitespace-nowrap hover:text-orange-300">
                {c}
              </Link>
            ))}
            <Link to="/admin" className="ml-auto whitespace-nowrap text-orange-300">
              Admin
            </Link>
          </div>
        </div>
        {open && (
          <div className="md:hidden bg-slate-800 px-4 py-3 space-y-2 text-sm">
            <form onSubmit={onSearch} className="flex">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="flex-1 rounded-l px-2 py-1 text-slate-900"
                placeholder="Search"
              />
              <button className="bg-orange-500 px-3 rounded-r">Go</button>
            </form>
            {categories.map((c) => (
              <Link key={c} to={`/products?category=${c}`} onClick={() => setOpen(false)} className="block">
                {c}
              </Link>
            ))}
            <Link to="/admin" onClick={() => setOpen(false)} className="block text-orange-300">
              Admin
            </Link>
          </div>
        )}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-slate-900 text-slate-300 mt-10">
        <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="text-white font-bold text-lg">ShopNest</p>
            <p className="mt-2">Mock storefront inspired by large marketplaces. UI only — no real payments.</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-2">Help</p>
            <p>Returns within 7 days</p>
            <p>support@shopnest.example</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-2">Popular</p>
            <p>Mobiles · Laptops · Fashion · Sports</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
