import { useParams } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { products } from '../data/products.js';
import { useShop } from '../context/ShopContext.jsx';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const { addToCart, addToWishlist } = useShop();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid gap-8 rounded-2xl bg-white p-6 shadow lg:grid-cols-2 dark:bg-slate-800">
        <img src={product.image} alt={product.name} className="h-[480px] w-full rounded-xl object-cover" />
        <div>
          <p className="font-bold uppercase text-orange-500">{product.badge}</p>
          <h1 className="mt-2 text-4xl font-black">{product.name}</h1>
          <p className="mt-2 text-slate-500">{product.brand} • {product.category}</p>
          <div className="mt-4 flex items-center gap-2"><span className="flex rounded bg-green-600 px-2 py-1 text-white">{product.rating}<Star size={16} /></span><span>{product.reviews} customer ratings</span></div>
          <div className="mt-6 flex items-end gap-3"><strong className="text-4xl">₹{product.price.toLocaleString()}</strong><span className="text-xl text-slate-400 line-through">₹{product.mrp.toLocaleString()}</span></div>
          <p className="mt-4 leading-7">{product.description}</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">{product.specs.map((spec) => <li key={spec} className="rounded bg-slate-100 p-3 dark:bg-slate-700">{spec}</li>)}</ul>
          <p className="mt-4 font-semibold">Stock: {product.stock}</p>
          <div className="mt-8 flex gap-3">
            <button onClick={() => addToCart(product)} className="flex items-center gap-2 rounded bg-amber-400 px-6 py-3 font-bold text-slate-950"><ShoppingCart /> Add to Cart</button>
            <button onClick={() => addToWishlist(product)} className="flex items-center gap-2 rounded border px-6 py-3 font-bold"><Heart /> Wishlist</button>
          </div>
        </div>
      </div>
    </main>
  );
}
