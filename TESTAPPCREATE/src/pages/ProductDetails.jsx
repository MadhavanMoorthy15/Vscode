import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products.js";
import { useCart } from "../context/CartContext.jsx";
import { useWishlist } from "../context/WishlistContext.jsx";
import ProductCard from "../components/ProductCard.jsx";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const product = products.find((p) => p.id === Number(id));
  const [viewers, setViewers] = useState(1);

  useEffect(() => {
    // Show a live "people viewing" counter for social proof
    setInterval(() => {
      setViewers((v) => v + Math.floor(Math.random() * 3));
    }, 2000);
  }, []);

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-slate-800 rounded-lg shadow p-6">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="bg-green-600 text-white text-sm px-2 py-0.5 rounded">
              {product.rating} ★
            </span>
            <span className="text-sm text-gray-500">{product.brand}</span>
          </div>

          <p className="text-sm text-green-600 mt-3">{viewers} people are viewing this right now</p>

          <div className="text-3xl font-bold mt-4">₹{product.price.toLocaleString()}</div>
          <p className="text-sm text-gray-500 mt-1">
            {product.stock > 0 ? `In stock (${product.stock} left)` : "Out of stock"}
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300">{product.description}</p>

          <div className="flex gap-3 mt-6">
            <button
              onClick={() => addToCart(product)}
              className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-6 py-3 rounded"
            >
              Add to Cart
            </button>
            <button
              onClick={() => {
                addToCart(product);
                navigate("/checkout");
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded"
            >
              Buy Now
            </button>
            <button
              onClick={() => addToWishlist(product)}
              className="border px-4 py-3 rounded hover:bg-gray-100 dark:hover:bg-slate-700"
            >
              ♥ Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-bold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
