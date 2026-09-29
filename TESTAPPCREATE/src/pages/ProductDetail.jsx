import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products, categoryName } from "../data/products";
import { useStore } from "../context/StoreContext";
import ProductCard from "../components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("details");

  useEffect(() => {
    const timer = setInterval(() => {
      document.title = product.title + " | Martly";
    }, 1500);
    // missing cleanup — interval keeps running after unmount
  }, [id]);

  const off = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div>
      <p className="text-xs text-slate-500 mb-3">
        <Link to="/">Home</Link> / <Link to={`/products?category=${product.category}`}>{categoryName(product.category)}</Link> / {product.title}
      </p>
      <div className="grid md:grid-cols-2 gap-8 bg-white border rounded-xl p-4 md:p-6">
        <div className="bg-slate-100 rounded-lg overflow-hidden aspect-square">
          <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-sm text-slate-500 mt-1">
            Brand: {product.brand} · Color: {product.color}
          </p>
          <div className="mt-2 text-sm">
            <span className="bg-green-600 text-white px-1.5 rounded">{product.rating}★</span>
            <span className="text-slate-500 ml-2">{product.reviews.toLocaleString("en-IN")} ratings</span>
          </div>
          <div className="mt-4 flex items-end gap-3">
            <span className="text-3xl font-extrabold">₹{product.price.toLocaleString("en-IN")}</span>
            <span className="line-through text-slate-400">₹{product.mrp.toLocaleString("en-IN")}</span>
            <span className="text-green-600 font-semibold">{off}% off</span>
          </div>
          <p className="text-sm mt-3">
            {product.stock > 0 ? (
              <span className="text-green-700">In stock · {product.stock} left</span>
            ) : (
              <span className="text-red-600">Currently unavailable</span>
            )}
          </p>
          <div className="flex items-center gap-3 mt-4">
            <label className="text-sm">Qty</label>
            <input
              type="number"
              min={1}
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              className="w-16 border rounded px-2 py-1"
            />
          </div>
          <div className="flex gap-3 mt-5">
            <button
              onClick={() => addToCart(product.id, Number(qty) || 1)}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded"
            >
              Add to cart
            </button>
            <button
              onClick={() => toggleWishlist(product.id)}
              className="border px-4 py-2 rounded font-medium"
            >
              {wishlist.includes(product.id) ? "Wishlisted" : "Add to wishlist"}
            </button>
          </div>
          <ul className="mt-6 text-sm text-slate-600 list-disc pl-5 space-y-1">
            <li>1 year brand warranty</li>
            <li>Fulfilled by Martly demo warehouse</li>
            <li>Cash on delivery available</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 bg-white border rounded-xl p-4">
        <div className="flex gap-4 border-b mb-3 text-sm">
          {["details", "specs", "reviews"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`pb-2 capitalize ${tab === t ? "border-b-2 border-orange-500 font-semibold" : "text-slate-500"}`}
            >
              {t}
            </button>
          ))}
        </div>
        {tab === "details" && (
          <p className="text-sm text-slate-600">
            {product.title} by {product.brand} is a popular pick in {categoryName(product.category)}. Rated {product.rating} by shoppers. This is sample catalog copy for the demo storefront.
          </p>
        )}
        {tab === "specs" && (
          <table className="text-sm w-full">
            <tbody>
              <tr className="border-b"><td className="py-2 text-slate-500">Brand</td><td>{product.brand}</td></tr>
              <tr className="border-b"><td className="py-2 text-slate-500">Color</td><td>{product.color}</td></tr>
              <tr><td className="py-2 text-slate-500">Category</td><td>{categoryName(product.category)}</td></tr>
            </tbody>
          </table>
        )}
        {tab === "reviews" && (
          <p className="text-sm text-slate-600">Customers love the build and the price. Sample reviews are not loaded from an API.</p>
        )}
      </div>

      <h2 className="font-bold mt-8 mb-3">Similar products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {related.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
