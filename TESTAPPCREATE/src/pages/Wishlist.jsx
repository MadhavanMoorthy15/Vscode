import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext.jsx";
import { useCart } from "../context/CartContext.jsx";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-semibold mb-3">Your wishlist is empty</h2>
        <Link to="/products" className="text-blue-600 hover:underline">
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-xl font-bold mb-4">My Wishlist ({wishlist.length})</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {wishlist.map((item) => (
          <div key={item.id} className="bg-white dark:bg-slate-800 rounded-lg shadow p-3">
            <Link to={`/product/${item.id}`}>
              <img src={item.image} alt={item.name} className="w-full h-44 object-cover rounded" />
              <h3 className="mt-2 text-sm font-medium line-clamp-2">{item.name}</h3>
            </Link>
            <div className="font-bold mt-1">₹{item.price.toLocaleString()}</div>
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => addToCart(item)}
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-slate-900 text-sm font-semibold py-2 rounded"
              >
                Add to Cart
              </button>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="px-3 border rounded hover:bg-gray-100 dark:hover:bg-slate-700"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
