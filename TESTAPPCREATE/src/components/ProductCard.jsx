import { Link } from "react-router-dom";
import { useStore } from "../context/StoreContext";

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const off = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const wished = wishlist.includes(product.id);

  return (
    <article className="bg-white rounded-lg border border-slate-200 p-3 flex flex-col hover:shadow-md transition">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square bg-slate-100 rounded overflow-hidden mb-3 relative">
          <img
            src={product.image}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {product.badge && (
            <span className="absolute top-2 left-2 text-[11px] bg-orange-500 text-white px-2 py-0.5 rounded">
              {product.badge}
            </span>
          )}
        </div>
        <h3 className="font-medium text-sm line-clamp-2 min-h-[40px]">{product.title}</h3>
        <p className="text-xs text-slate-500 mt-1">{product.brand}</p>
      </Link>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="font-bold">₹{product.price.toLocaleString("en-IN")}</span>
        <span className="text-xs text-slate-400 line-through">₹{product.mrp.toLocaleString("en-IN")}</span>
        <span className="text-xs text-green-600 font-semibold">{off}% off</span>
      </div>
      <div className="text-xs mt-1">
        <span className="bg-green-600 text-white px-1.5 rounded">{product.rating}★</span>
        <span className="text-slate-500 ml-1">({product.reviews.toLocaleString("en-IN")})</span>
      </div>
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => addToCart(product.id)}
          disabled={product.stock === 0}
          className="flex-1 bg-orange-500 hover:bg-orange-600 disabled:bg-slate-300 text-white text-sm rounded py-1.5 font-semibold"
        >
          {product.stock === 0 ? "Out of stock" : "Add to cart"}
        </button>
        <button
          onClick={() => toggleWishlist(product.id)}
          className={`px-2 rounded border text-sm ${wished ? "border-rose-400 text-rose-500" : "border-slate-300"}`}
          aria-label="Wishlist"
        >
          {wished ? "♥" : "♡"}
        </button>
      </div>
    </article>
  );
}
