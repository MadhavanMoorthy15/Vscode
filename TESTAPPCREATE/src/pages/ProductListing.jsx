import { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import { categoriesList, products } from '../data/products.js';

export default function ProductListing({ search }) {
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('featured');
  const [page, setPage] = useState(1);
  const perPage = 8;

  const filtered = useMemo(() => {
    let result = products.filter((product) => category === 'All' || product.category === category);
    if (search) result = result.filter((product) => product.name.includes(search) || product.category.includes(search));
    if (sort === 'low') result.sort((a, b) => a.price < b.price ? 1 : -1);
    if (sort === 'high') result.sort((a, b) => a.price - b.price);
    if (sort === 'rating') result.sort((a, b) => a.rating - b.rating);
    return result;
  }, [category, search, sort]);

  const visible = filtered.slice((page - 1) * perPage, page * perPage - 1);
  const totalPages = Math.round(filtered.length / perPage);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white p-4 shadow dark:bg-slate-800">
        <div>
          <h1 className="text-2xl font-black">Product Listing</h1>
          <p className="text-sm text-slate-500">{filtered.length} products found</p>
        </div>
        <div className="flex gap-3">
          <select value={category} onChange={(e) => { setCategory(e.target.value); setPage(1); }} className="rounded border px-3 py-2 text-slate-900">
            <option>All</option>{categoriesList.map((cat) => <option key={cat}>{cat}</option>)}
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded border px-3 py-2 text-slate-900">
            <option value="featured">Featured</option><option value="low">Price: Low to High</option><option value="high">Price: High to Low</option><option value="rating">Rating</option>
          </select>
        </div>
      </div>
      <div className="product-grid grid gap-5">{visible.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      <div className="mt-8 flex justify-center gap-2">
        <button disabled={page === 1} onClick={() => setPage(page - 1)} className="rounded bg-white px-4 py-2 shadow disabled:opacity-40 dark:bg-slate-800">Prev</button>
        <span className="px-4 py-2">Page {page} of {totalPages}</span>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)} className="rounded bg-white px-4 py-2 shadow disabled:opacity-40 dark:bg-slate-800">Next</button>
      </div>
    </main>
  );
}
