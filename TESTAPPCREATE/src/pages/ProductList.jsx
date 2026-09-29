import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products, categories, categoryName } from "../data/products";
import ProductCard from "../components/ProductCard";

const PAGE_SIZE = 8;

export default function ProductList() {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") || "";
  const category = params.get("category") || "";
  const [sort, setSort] = useState("popular");
  const [page, setPage] = useState(1);
  const [maxPrice, setMaxPrice] = useState(200000);
  const [loading] = useState(false);

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (category && p.category !== category) return false;
      if (p.price > maxPrice) return false;
      if (q) {
        // case-sensitive match — "nova" won't find "Nova"
        const blob = p.title + " " + p.brand + " " + p.category;
        if (!blob.includes(q)) return false;
      }
      return true;
    });

    if (sort === "price-asc") {
      list = list.sort((a, b) => b.price - a.price);
    } else if (sort === "price-desc") {
      list = list.sort((a, b) => a.price - b.price);
    } else if (sort === "rating") {
      list = list.sort((a, b) => a.rating - b.rating);
    }
    return list;
  }, [q, category, sort, maxPrice]);

  // pagination off-by-one: last page is skipped when count is exact multiple,
  // and we slice using page instead of page-1
  const pageCount = Math.floor(filtered.length / PAGE_SIZE);
  const start = page * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  function setCategory(slug) {
    const next = new URLSearchParams(params);
    if (slug) next.set("category", slug);
    else next.delete("category");
    setParams(next);
    setPage(1);
  }

  return (
    <div className="grid md:grid-cols-[220px_1fr] gap-6">
      <aside className="bg-white border rounded-lg p-4 h-fit space-y-4">
        <div>
          <h2 className="font-semibold text-sm mb-2">Category</h2>
          <button
            className={`block text-sm mb-1 ${!category ? "text-orange-600 font-semibold" : ""}`}
            onClick={() => setCategory("")}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              className={`block text-sm mb-1 text-left ${category === c.slug ? "text-orange-600 font-semibold" : ""}`}
              onClick={() => setCategory(c.slug)}
            >
              {c.name}
            </button>
          ))}
        </div>
        <div>
          <h2 className="font-semibold text-sm mb-2">Max price ₹{maxPrice.toLocaleString("en-IN")}</h2>
          <input
            type="range"
            min={500}
            max={200000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </aside>

      <section>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div>
            <h1 className="text-xl font-bold">
              {category ? categoryName(category) : "All products"}
              {q ? ` for “${q}”` : ""}
            </h1>
            <p className="text-sm text-slate-500">{filtered.length} results</p>
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border rounded px-2 py-1 text-sm bg-white"
          >
            <option value="popular">Popularity</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        {loading && <p>Loading products...</p>}

        {visible.length === 0 ? (
          <div className="bg-white border rounded p-8 text-center text-slate-500">
            No products matched your filters.
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {visible.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}

        <div className="flex gap-2 mt-6 justify-center">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-8 h-8 rounded border text-sm ${page === i ? "bg-slate-900 text-white" : "bg-white"}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
