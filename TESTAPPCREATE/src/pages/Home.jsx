import { Link } from "react-router-dom";
import { categories } from "../data/products";
import { useShop } from "../context/ShopContext";
import ProductCard from "../components/ProductCard";

const banners = [
  { title: "Festival deals on mobiles", sub: "Up to 40% off flagship phones", to: "/products?category=Mobiles" },
  { title: "Work-from-home setups", sub: "Laptops & audio under ₹70,000", to: "/products?category=Laptops" },
  { title: "Move more this week", sub: "Sports gear starting ₹699", to: "/products?category=Sports" },
];

export default function Home() {
  const { catalog } = useShop();
  const featured = catalog.slice(0, 8);

  return (
    <div>
      <section className="bg-gradient-to-r from-slate-900 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="uppercase tracking-widest text-orange-200 text-xs">Marketplace · UI demo</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-2 leading-tight">
              Everything you need, one checkout away.
            </h1>
            <p className="mt-4 text-slate-200 max-w-md">
              Browse 40 products across electronics, fashion, home, books, and sports. Cart, wishlist, and profile stay in your browser.
            </p>
            <Link to="/products" className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-md font-semibold">
              Shop all products
            </Link>
          </div>
          <div className="grid gap-3">
            {banners.map((b) => (
              <Link key={b.title} to={b.to} className="bg-white/10 hover:bg-white/20 rounded-xl p-4">
                <p className="font-bold">{b.title}</p>
                <p className="text-sm text-orange-100">{b.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-4">Shop by category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.map((c) => (
            <Link
              key={c}
              to={`/products?category=${encodeURIComponent(c)}`}
              className="bg-white border rounded-xl p-3 text-center text-sm font-medium hover:border-orange-400"
            >
              <div className="h-10 w-10 mx-auto mb-2 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold">
                {c[0]}
              </div>
              {c}
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-10">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-xl font-bold">Trending now</h2>
          <Link to="/products" className="text-orange-600 text-sm font-semibold">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
