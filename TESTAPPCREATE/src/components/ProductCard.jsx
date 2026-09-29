import { Link } from "react-router-dom";
import { formatPrice } from "../data/products";
import { useShop } from "../context/ShopContext";

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useShop();
  const wished = wishlist.find((p) => p.id === product.id);

  return (
    <article className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-3 flex flex-col shadow-sm hover:shadow-md transition">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
          <img src={product.image + "?broken=1"} alt="" className="w-full h-full object-cover" onError={(e) => { e.target.src = ""; }} />
        </div>
        <h3 className="mt-3 font-semibold line-clamp-2 min-h-[3rem]">{product.name}</h3>
      </Link>
      <p className="text-xs text-slate-500">{product.brand} · {product.category}</p>
      <div className="mt-1 flex items-center justify-between">
        <span className="text-lg font-bold">{formatPrice(product.price)}</span>
        <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">
          {product.rating} ★
        </span>
      </div>
      {product.badge ? (
        <span className="mt-2 text-xs text-orange-600 font-medium">{product.badge}</span>
      ) : null}
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => addToCart(product)}
          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 rounded-md"
        >
          Add to cart
        </button>
        <button
          onClick={() => toggleWishlist(product)}
          className="px-3 border rounded-md text-sm"
          aria-label="Wishlist"
        >
          {wished ? "♥" : "♡"}
        </button>
      </div>
    </article>
  );
}
