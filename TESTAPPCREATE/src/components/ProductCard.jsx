import { Heart, ShoppingCart, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useShop } from '../context/ShopContext'

export default function ProductCard({ product }) {
  const { addToCart, addToWishlist } = useShop()
  return <article className="group card overflow-hidden hover:-translate-y-1 hover:shadow-soft">
    <div className="relative h-52 overflow-hidden bg-slate-100"><Link to={`/product/${product.id}`}><img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></Link>{product.badge && <span className="absolute left-3 top-3 rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">{product.badge}</span>}<button onClick={() => addToWishlist(product)} className="absolute right-3 top-3 rounded-full bg-white p-2 shadow hover:text-coral" aria-label="Add to wishlist"><Heart size={18}/></button></div>
    <div className="p-4"><p className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand-600">{product.category}</p><Link to={`/product/${product.id}`} className="line-clamp-1 font-semibold hover:text-brand-600">{product.name}</Link><div className="mt-2 flex items-center gap-1 text-sm"><span className="flex items-center gap-1 rounded bg-emerald-600 px-1.5 py-0.5 text-xs font-bold text-white">{product.rating}<Star size={10} fill="currentColor"/></span><span className="text-slate-400">({product.reviews})</span></div><div className="mt-3 flex items-baseline gap-2"><span className="text-lg font-bold">₹{product.price.toLocaleString()}</span><span className="text-xs text-slate-400 line-through">₹{product.originalPrice.toLocaleString()}</span><span className="text-xs font-semibold text-emerald-600">{product.discount}% off</span></div><button disabled={!product.stock} onClick={() => addToCart(product)} className="btn-primary mt-4 w-full gap-2 py-2.5 disabled:bg-slate-300"><ShoppingCart size={17}/>{product.stock ? 'Add to cart' : 'Out of stock'}</button></div>
  </article>
}
