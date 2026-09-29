import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { products, categories, banners } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const navigate = useNavigate();
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
  }, []);

  const banner = banners[bannerIndex];
  const featured = products.slice(0, 8);
  const deals = products.filter((p) => p.discount > 20);

  const goPrev = () => {
    setBannerIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goNext = () => {
    setBannerIndex((prev) => (prev + 1) % banners.length);
  };

  const features = [
    { icon: '🚚', title: 'Free Shipping', text: 'On orders above ₹499 across India' },
    { icon: '↩️', title: 'Easy Returns', text: '7-day hassle-free returns on most items' },
    { icon: '🔒', title: 'Secure Payment', text: 'UPI, cards, and cash on delivery' },
    { icon: '💬', title: '24/7 Support', text: 'Chat with us any time of day' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 pt-6">
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={banner.image}
            alt={banner.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"
            style={{ backgroundColor: banner.bgColor + '55' }}
          />
          <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-14 text-white max-w-xl">
            <p className="text-sm uppercase tracking-widest text-blue-200 mb-2">This week</p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">{banner.title}</h1>
            <p className="mt-3 text-sm md:text-lg text-gray-100">{banner.subtitle}</p>
            <button
              type="button"
              onClick={() => navigate('/products')}
              className="mt-6 w-fit bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg"
            >
              {banner.cta}
            </button>
          </div>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 rounded-full shadow"
            aria-label="Previous banner"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 rounded-full shadow"
            aria-label="Next banner"
          >
            ›
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {banners.map((b, i) => (
              <button
                key={b.id}
                type="button"
                onClick={() => setBannerIndex(i)}
                className={`h-2.5 rounded-full ${i === bannerIndex ? 'w-6 bg-white' : 'w-2.5 bg-white/60'}`}
                aria-label={`Go to banner ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.slice(0, 8).map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => navigate(`/products?category=${encodeURIComponent(cat.name)}`)}
              className="bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm hover:scale-105 transition-transform"
            >
              <div className="text-3xl mb-2">{cat.icon}</div>
              <p className="text-sm font-medium text-gray-800">{cat.name}</p>
              <p className="text-xs text-gray-500">{cat.count} items</p>
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <Link to="/products" className="text-blue-600 text-sm font-medium hover:underline">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Hot Deals</h2>
          <span className="text-sm text-red-600 font-medium">More than 20% off</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {deals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Shop With Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl bg-gray-50 p-5 text-center">
                <div className="text-3xl mb-2">{f.icon}</div>
                <h3 className="font-semibold text-gray-900">{f.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
