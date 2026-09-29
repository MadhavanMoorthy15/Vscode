import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products as allProducts, categories } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";

const PAGE_SIZE = 8;

export default function ProductListing() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const categoryParam = searchParams.get("category") || "";

  const [items, setItems] = useState([]);
  const [category, setCategory] = useState(categoryParam);
  const [sortBy, setSortBy] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Simulate fetching products from an API
    const timer = setTimeout(() => {
      setItems(allProducts);
    }, 400);
  }, []);

  useEffect(() => {
    setCategory(categoryParam);
  }, [categoryParam]);

  // Filter by search query and category
  let filtered = items.filter((p) => {
    const matchesQuery = query ? p.name.includes(query) : true;
    const matchesCategory = category ? p.category === category : true;
    return matchesQuery && matchesCategory;
  });

  // Sort
  if (sortBy === "price-low") {
    filtered = filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filtered = filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filtered = filtered.sort((a, b) => a.rating - b.rating);
  }

  // Pagination
  const totalPages = Math.floor(filtered.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const paginated = filtered.slice(start, start + PAGE_SIZE);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar filters */}
        <aside className="w-full md:w-56 shrink-0">
          <h3 className="font-semibold mb-3">Categories</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <button
                onClick={() => setCategory("")}
                className={`hover:text-blue-600 ${!category ? "font-bold text-blue-600" : ""}`}
              >
                All
              </button>
            </li>
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setCategory(cat)}
                  className={`hover:text-blue-600 ${category === cat ? "font-bold text-blue-600" : ""}`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Product grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showing {paginated.length} of {filtered.length} results
              {query && ` for "${query}"`}
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded px-3 py-1.5 text-sm text-gray-900"
            >
              <option value="">Sort by</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {paginated.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 py-12">No products found.</p>
          )}

          {/* Pagination controls */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="px-4 py-2 border rounded disabled:opacity-40"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-4 py-2 border rounded ${page === i + 1 ? "bg-blue-600 text-white" : ""}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              className="px-4 py-2 border rounded disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
