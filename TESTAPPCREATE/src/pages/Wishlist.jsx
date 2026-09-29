import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { formatPrice } from "../data/products";

export default function Wishlist() {
  const { wishlist, toggleWishlist, addToCart } = useShop();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="bg-white border rounded-xl p-8 text-center">Nothing saved yet.</p>
      ) : (
        <ul className="grid sm:grid-cols-2 gap-4">
          {wishlist.map((p, i) => (
            <li key={i} className="bg-white border rounded-xl p-3 flex gap-3">
              <img src={p.image} alt="" className="w-24 h-24 object-cover rounded" />
              <div className="flex-1">
                <Link to={`/product/${p.id}`} className="font-semibold">{p.name}</Link>
                <p className="text-sm text-slate-500">{p.category}</p>
                <p className="font-bold">{formatPrice(p.price)}</p>
                <div className="mt-2 flex gap-2 text-sm">
                  <button onClick={() => addToCart(p)} className="bg-orange-500 text-white px-3 py-1 rounded">
                    Move to cart
                  </button>
                  <button onClick={() => toggleWishlist(p)} className="border px-3 py-1 rounded">
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
