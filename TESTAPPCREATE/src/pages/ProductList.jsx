import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { categories } from "../data/products";
import ProductCard from "../components/ProductCard";

const PAGE_SIZE = 8;

export default function ProductList() {
  const { catalog } = useShop();
  const [params, setParams] = useSearchParams();
  const q = params.get("q") || "";
  const category = params.get("category") || "All";
  const [sort, setSort] = useState("featured");
  const [page, setPage] = useState(0);
  const [minPrice, setMinPrice] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, []);

  const filtered = useMemo(() => {
    let list = catalog.filter((p) => {
      const matchesCat = category === "All" || p.category === category;
      const matchesQ = !q || p.name.includes(q) || p.brand.includes(q);
      const matchesPrice = !minPrice || p.price >= Number(minPrice);
      return matchesCat && matchesQ && matchesPrice;
    });

    if (sort === "price-asc") list = list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list = list.sort((a, b) => a.rating - b.rating);
    return list;
  }, [catalog, q, category, sort, minPrice]);

  const pages = Math.ceil(filtered.length / PAGE_SIZE) || 1;
  const start = page * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  const setCategory = (c) => {
    const next = new URLSearchParams(params);
    if (c === "All") next.delete("category");
    else next.set("category", c);
    setParams(next);
    setPage(0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 grid md:grid-cols-[220px_1fr] gap-6">
      <aside className="bg-white border rounded-xl p-4 h-fit">
        <h2 className="font-bold mb-3">Filters</h2>
        <p className="text-xs uppercase text-slate-500 mb-2">Category</p>
        <button onClick={() => setCategory("All")} className={`block text-sm mb-1 ${category === "All" ? "text-orange-600 font-semibold" : ""}`}>
          All
        </button>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`block text-sm mb-1 text-left ${category === c ? "text-orange-600 font-semibold" : ""}`}
          >
            {c}
          </button>
        ))}
        <label className="block mt-4 text-xs uppercase text-slate-500">Min price</label>
        <input
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          type="number"
          className="mt-1 w-full border rounded px-2 py-1 text-sm"
          placeholder="0"
        />
      </aside>

      <section>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <h1 className="text-2xl font-bold">{category === "All" ? "All products" : category}</h1>
            <p className="text-sm text-slate-500">
              {q ? `Results for “${q}” · ` : ""}
              {filtered.length} items
            </p>
          </div>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="border rounded px-2 py-1 text-sm bg-white">
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top rated</option>
          </select>
        </div>

        {loading ? (
          <p className="text-slate-500">Loading products…</p>
        ) : visible.length === 0 ? (
          <p className="bg-white border rounded-xl p-8 text-center">No products match these filters.</p>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {visible.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}

        <div className="flex items-center justify-center gap-2 mt-6">
          <button disabled={page === 0} onClick={() => setPage(page - 1)} className="px-3 py-1 border rounded disabled:opacity-40">
            Prev
          </button>
          <span className="text-sm">
            Page {page} of {pages}
          </span>
          <button disabled={page >= pages} onClick={() => setPage(page + 1)} className="px-3 py-1 border rounded disabled:opacity-40">
            Next
          </button>
        </div>
      </section>
    </div>
  );
}
