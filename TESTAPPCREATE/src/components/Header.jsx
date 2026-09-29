import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart, User, Moon, Search } from 'lucide-react';
import { useShop } from '../context/ShopContext.jsx';

export default function Header({ search, setSearch }) {
  const { cartCount, wishlist, toggleDark } = useShop();
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    navigate('/products');
  }

  return (
    <header className="sticky top-0 z-30 bg-slate-900 text-white shadow-lg">
      <div className="mobile-cramp mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
        <Link to="/" className="text-2xl font-black tracking-tight text-amber-400">ShopKart</Link>
        <form onSubmit={submit} className="flex flex-1 overflow-hidden rounded bg-white text-slate-900">
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for products, brands and more" className="w-full px-4 py-2 outline-none" />
          <button className="bg-amber-400 px-4"><Search size={20} /></button>
        </form>
        <nav className="flex items-center gap-4 text-sm font-semibold">
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/wishlist" className="relative"><Heart /> <span className="absolute -right-2 -top-2 rounded-full bg-rose-500 px-1 text-xs">{wishlist.length}</span></NavLink>
          <NavLink to="/cart" className="relative"><ShoppingCart /> <span className="absolute -right-2 -top-2 rounded-full bg-rose-500 px-1 text-xs">{cartCount}</span></NavLink>
          <NavLink to="/profile"><User /></NavLink>
          <button onClick={toggleDark}><Moon /></button>
        </nav>
      </div>
    </header>
  );
}
