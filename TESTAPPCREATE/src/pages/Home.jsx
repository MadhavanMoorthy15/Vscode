import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import { categoriesList, products } from '../data/products.js';

export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-amber-300">Mega Festival Sale</p>
          <h1 className="mt-2 max-w-3xl text-5xl font-black">Everything from mobiles to fashion, delivered fast.</h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">A marketplace-inspired storefront with product discovery, wishlist, cart, checkout, profile and admin views.</p>
          <Link to="/products" className="mt-8 inline-block rounded bg-amber-400 px-6 py-3 font-bold text-slate-950">Shop now</Link>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
          {categoriesList.map((cat) => <Link key={cat} to="/products" className="rounded-xl bg-white p-4 text-center font-semibold shadow dark:bg-slate-800">{cat}</Link>)}
        </div>
        <h2 className="mb-4 mt-10 text-2xl font-black">Top deals</h2>
        <div className="product-grid grid gap-5">{products.slice(0, 8).map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>
    </main>
  );
}
