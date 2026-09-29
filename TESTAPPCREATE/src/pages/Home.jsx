import { Link } from "react-router-dom";
import { categories, products } from "../data/products";
import ProductCard from "../components/ProductCard";

const banners = [
  {
    title: "Mega Mobile Fest",
    subtitle: "Up to 40% off on 5G phones",
    to: "/products?category=mobiles",
    gradient: "from-orange-500 to-rose-500",
  },
  {
    title: "Work-from-home setups",
    subtitle: "Laptops & audio starting ₹2,499",
    to: "/products?category=laptops",
    gradient: "from-indigo-600 to-sky-500",
  },
  {
    title: "Home refresh sale",
    subtitle: "Appliances with bank offers",
    to: "/products?category=home-appliances",
    gradient: "from-emerald-600 to-teal-500",
  },
];

export default function Home() {
  const deals = [...products].sort((a, b) => b.rating - a.rating).slice(0, 8);

  return (
    <div className="space-y-8">
      <section className="grid md:grid-cols-3 gap-3">
        {banners.map((b) => (
          <Link
            key={b.title}
            to={b.to}
            className={`rounded-xl p-6 text-white bg-gradient-to-br ${b.gradient} min-h-[140px] flex flex-col justify-end`}
          >
            <div className="text-xs uppercase tracking-wide opacity-80">Limited time</div>
            <h2 className="text-2xl font-extrabold">{b.title}</h2>
            <p className="text-sm opacity-90">{b.subtitle}</p>
          </Link>
        ))}
      </section>

      <section>
        <h2 className="text-lg font-bold mb-3">Shop by category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to={`/products?category=${c.slug}`}
              className="bg-white border rounded-lg p-3 text-center hover:border-orange-400"
            >
              <div className="text-2xl">{c.icon}</div>
              <div className="text-xs mt-1 font-medium">{c.name}</div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold">Top rated</h2>
          <Link to="/products" className="text-sm text-orange-600 font-semibold">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {deals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="bg-white border rounded-xl p-5 grid md:grid-cols-3 gap-4 text-sm">
        <div>
          <div className="font-bold">Free delivery</div>
          <p className="text-slate-500">On orders above ₹499 in select cities.</p>
        </div>
        <div>
          <div className="font-bold">Easy returns</div>
          <p className="text-slate-500">7-day replacement on most electronics.</p>
        </div>
        <div>
          <div className="font-bold">Secure payments</div>
          <p className="text-slate-500">UPI, cards, and cash on delivery.</p>
        </div>
      </section>
    </div>
  );
}
