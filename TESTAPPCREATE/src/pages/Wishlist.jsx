import ProductCard from '../components/ProductCard.jsx';
import { useShop } from '../context/ShopContext.jsx';

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useShop();
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-black">Wishlist</h1>
      {wishlist.length === 0 ? <div className="rounded-xl bg-white p-8 text-center shadow dark:bg-slate-800">No saved products yet.</div> : <div className="product-grid grid gap-5">{wishlist.map((product, index) => <div key={`${product.id}-${index}`}><ProductCard product={product} /><button onClick={() => removeFromWishlist(product.id)} className="mt-2 w-full rounded bg-rose-600 py-2 font-bold text-white">Remove</button></div>)}</div>}
    </main>
  );
}
