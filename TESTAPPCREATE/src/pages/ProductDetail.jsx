import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { formatPrice } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const { catalog, addToCart, toggleWishlist } = useShop();
  const [qty, setQty] = useState(1);
  const [related, setRelated] = useState([]);

  const product = catalog.find((p) => p.id === Number(id));

  useEffect(() => {
    const handler = () => {
      setRelated(catalog.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4));
    };
    window.addEventListener("resize", handler);
    handler();
  }, [id]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <p className="text-sm text-slate-500 mb-4">
        <Link to="/products" className="hover:underline">Products</Link> / {product.category}
      </p>
      <div className="grid md:grid-cols-2 gap-8 bg-white border rounded-2xl p-4 md:p-8">
        <img src={product.image} alt={product.name} className="w-full rounded-xl object-cover aspect-square bg-slate-100" />
        <div>
          <p className="text-sm text-orange-600 font-semibold">{product.brand}</p>
          <h1 className="text-3xl font-extrabold mt-1">{product.name}</h1>
          <p className="mt-2 text-slate-600">{product.rating} ★ · {product.reviews} ratings · {product.color}</p>
          <p className="text-3xl font-bold mt-4">{formatPrice(product.price)}</p>
          <p className="mt-4 text-slate-700 leading-relaxed">{product.description}</p>
          <p className="mt-2 text-sm">{product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}</p>
          <div className="mt-4 flex items-center gap-3">
            <label className="text-sm">Qty</label>
            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              className="w-20 border rounded px-2 py-1"
            />
          </div>
          <div className="mt-6 flex gap-3">
            <button
              onClick={() => addToCart(product, Number(qty) || 1)}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md"
            >
              Add to cart
            </button>
            <button onClick={() => toggleWishlist(product)} className="border px-4 py-3 rounded-md">
              Wishlist
            </button>
          </div>
        </div>
      </div>

      <h2 className="mt-10 font-bold text-xl mb-4">Similar items</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {related.map((p) => (
          <Link key={p.id} to={`/product/${p.id}`} className="bg-white border rounded-xl p-3">
            <img src={p.image} alt={p.name} className="aspect-square object-cover rounded" />
            <p className="mt-2 text-sm font-medium">{p.name}</p>
            <p className="text-sm">{formatPrice(p.price)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
