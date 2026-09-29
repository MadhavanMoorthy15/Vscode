import { Link } from "react-router-dom";
import { products, categories } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";

export default function Home() {
  const featured = products.filter((p) => p.rating >= 4.6).slice(0, 8);
  const deals = products.slice(10, 16);

  return (
    <div>
      {/* Hero banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold mb-3">Big Billion Days Are Here!</h1>
            <p className="text-lg mb-5 opacity-90">
              Up to 80% off across mobiles, laptops, fashion and more.
            </p>
            <Link
              to="/products"
              className="inline-block bg-yellow-400 text-slate-900 font-semibold px-6 py-3 rounded"
            >
              Shop Now
            </Link>
          </div>
          <img
            src="https://picsum.photos/seed/herobanner/500/280"
            alt="Sale banner"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-5">Shop by Category</h2>
        <div className="grid grid-cols-8 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/products?category=${cat}`}
              className="bg-white dark:bg-slate-800 rounded-lg shadow p-4 text-center hover:shadow-md transition"
            >
              <div className="text-3xl mb-2">🛍️</div>
              <div className="text-sm font-medium">{cat}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-5">Top Rated Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Deals */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-5">Deals of the Day</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {deals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
