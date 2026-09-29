import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useShop } from '../context/ShopContext.jsx';

export default function ProductCard({ product }) {
  const { addToCart, addToWishlist } = useShop();
  return (
    <div className="rounded-xl bg-white p-4 shadow transition hover:-translate-y-1 hover:shadow-xl dark:bg-slate-800">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} className="h-44 w-full rounded-lg object-cover" />
        <p className="mt-3 text-xs font-bold uppercase text-orange-500">{product.badge}</p>
        <h3 className="line-clamp-2 min-h-12 font-bold">{product.name}</h3>
      </Link>
      <p className="text-sm text-slate-500">{product.brand} • {product.category}</p>
      <div className="mt-2 flex items-center gap-2"><span className="flex items-center rounded bg-green-600 px-2 py-1 text-xs text-white">{product.rating}<Star size={12} /></span><span className="text-xs text-slate-500">{product.reviews} reviews</span></div>
      <div className="mt-3 flex items-end gap-2"><strong className="text-xl">₹{product.price.toLocaleString()}</strong><span className="text-sm text-slate-400 line-through">₹{product.mrp.toLocaleString()}</span></div>
      <div className="mt-4 flex gap-2">
        <button onClick={() => addToCart(product)} className="flex flex-1 items-center justify-center gap-2 rounded bg-amber-400 px-3 py-2 font-semibold text-slate-950"><ShoppingCart size={18} /> Add</button>
        <button onClick={() => addToWishlist(product)} className="rounded border px-3"><Heart size={18} /></button>
      </div>
    </div>
  );
}
