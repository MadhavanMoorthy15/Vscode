import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { useWishlist } from "../context/WishlistContext.jsx";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow hover:shadow-lg transition p-3 flex flex-col">
      <Link to={`/product/${product.id}`} className="block">
        <img
          src={product.image}
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="mt-3 font-medium text-sm line-clamp-2 h-10">{product.name}</h3>
      </Link>

      <div className="flex items-center gap-2 mt-2">
        <span className="bg-green-600 text-white text-xs px-1.5 py-0.5 rounded">
          {product.rating} ★
        </span>
        <span className="text-xs text-gray-500">{product.brand}</span>
      </div>

      <div className="mt-2 font-bold text-lg">₹{product.price.toLocaleString()}</div>

      <div className="mt-3 flex gap-2">
        <button
          onClick={() => addToCart(product)}
          className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-slate-900 text-sm font-semibold py-2 rounded"
        >
          Add to Cart
        </button>
        <button
          onClick={() => addToWishlist(product)}
          className="px-3 border border-gray-300 dark:border-slate-600 rounded hover:bg-gray-100 dark:hover:bg-slate-700"
          title="Add to Wishlist"
        >
          ♥
        </button>
      </div>
    </div>
  );
}
