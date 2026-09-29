import { Heart, Menu, Moon, Search, ShoppingCart, Sun, User, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useShop } from '../context/ShopContext'

export default function Header() {
  const { cartCount, wishlist, darkMode, setDarkMode } = useShop()
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const submitSearch = (event) => { event.preventDefault(); navigate(`/products?search=${encodeURIComponent(search)}`) }
  return <>
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="bg-ink py-2 text-center text-xs font-medium text-white">Free delivery on orders above ₹499 · Easy 7-day returns</div>
      <div className="container-page flex h-16 items-center gap-4">
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Open menu"><Menu /></button>
        <Link to="/" className="shrink-0 text-xl font-extrabold tracking-tight text-ink">Shop<span className="text-brand-600">Sphere</span></Link>
        <form onSubmit={submitSearch} className="mx-auto hidden max-w-2xl flex-1 sm:flex">
          <input className="w-full rounded-l-xl border border-r-0 bg-slate-50 px-4 outline-none focus:border-brand-500" placeholder="Search products, brands and categories" value={search} onChange={(e) => setSearch(e.target.value)} />
          <button className="rounded-r-xl bg-brand-600 px-5 text-white" aria-label="Search"><Search size={20} /></button>
        </form>
        <nav className="flex items-center gap-1 sm:gap-3">
          <button onClick={() => setDarkMode(!darkMode)} className="rounded-full p-2 hover:bg-slate-100" aria-label="Toggle theme">{darkMode ? <Sun size={20} /> : <Moon size={20} />}</button>
          <Link to="/wishlist" className="relative rounded-full p-2 hover:bg-slate-100"><Heart size={21} /><span className="absolute -right-1 -top-1 rounded-full bg-coral px-1.5 text-[10px] text-white">{wishlist.length}</span></Link>
          <Link to="/cart" className="relative rounded-full p-2 hover:bg-slate-100"><ShoppingCart size={21} /><span className="absolute -right-1 -top-1 rounded-full bg-brand-600 px-1.5 text-[10px] text-white">{cartCount}</span></Link>
          <Link to="/profile" className="hidden items-center gap-2 rounded-xl p-2 hover:bg-slate-100 md:flex"><User size={21} /><span className="text-sm font-semibold">Account</span></Link>
        </nav>
      </div>
      <form onSubmit={submitSearch} className="container-page flex pb-3 sm:hidden"><input className="input rounded-r-none py-2" placeholder="Search products" value={search} onChange={(e) => setSearch(e.target.value)} /><button className="rounded-r-xl bg-brand-600 px-4 text-white"><Search size={18} /></button></form>
    </header>
    {open && <div className="fixed inset-0 z-[60] bg-black/40 lg:hidden"><div className="h-full w-72 bg-white p-5"><button onClick={() => setOpen(false)} className="mb-8 ml-auto block"><X /></button>{['Home','Products','Cart','Wishlist','Profile','Admin'].map((item) => <Link key={item} onClick={() => setOpen(false)} className="block border-b py-4 font-semibold" to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>{item}</Link>)}</div></div>}
  </>
}
