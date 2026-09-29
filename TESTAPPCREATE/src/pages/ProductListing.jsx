import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ProductListing() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const initialCategory = searchParams.get('category') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  const toggleCategory = (name) => {
    setSelectedCategories((prev) =>
      prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name]
    );
    setCurrentPage(1);
  };

  const filtered = useMemo(() => {
    let list = products.filter((product) => {
      if (searchQuery && !product.name.includes(searchQuery)) {
        return false;
      }
      if (selectedCategories.length && !selectedCategories.includes(product.category)) {
        return false;
      }
      if (minPrice !== '' && product.price < Number(minPrice)) {
        return false;
      }
      if (maxPrice !== '' && product.price > Number(maxPrice)) {
        return false;
      }
      if (minRating && product.rating < minRating) {
        return false;
      }
      return true;
    });

    const sorted = [...list];
    if (sortBy === 'price-asc') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    return sorted;
  }, [searchQuery, selectedCategories, minPrice, maxPrice, minRating, sortBy]);

  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  const startIndex = currentPage * pageSize;
  const paginatedProducts = filtered.slice(startIndex, startIndex + pageSize);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
        <aside className="w-full md:w-64 bg-white rounded-xl shadow-sm border border-gray-100 p-4 h-fit">
          <h2 className="font-semibold text-gray-900 mb-3">Filters</h2>
          <div className="mb-5">
            <p className="text-sm font-medium text-gray-700 mb-2">Category</p>
            <div className="space-y-2">
              {categories.map((cat) => (
                <label key={cat.id} className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat.name)}
                    onChange={() => toggleCategory(cat.name)}
                    className="rounded border-gray-300 text-blue-600"
                  />
                  {cat.icon} {cat.name}
                </label>
              ))}
            </div>
          </div>
          <div className="mb-5">
            <p className="text-sm font-medium text-gray-700 mb-2">Price range</p>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => {
                  setMinPrice(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-sm"
              />
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-sm"
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Rating</p>
            {[4, 3, 2, 1].map((r) => (
              <label key={r} className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                <input
                  type="radio"
                  name="rating"
                  checked={minRating === r}
                  onChange={() => {
                    setMinRating(r);
                    setCurrentPage(1);
                  }}
                />
                {r}+ stars
              </label>
            ))}
            <button
              type="button"
              onClick={() => setMinRating(0)}
              className="text-xs text-blue-600 mt-1"
            >
              Clear rating
            </button>
          </div>
        </aside>

        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4 flex flex-col sm:flex-row gap-3 sm:items-center">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search products"
              className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Rating</option>
              <option value="newest">Newest</option>
            </select>
            <span className="text-sm text-gray-500 whitespace-nowrap">
              {filtered.length} results
            </span>
          </div>

          {paginatedProducts.length === 0 ? (
            <div className="bg-white rounded-xl p-10 text-center text-gray-500">
              No products found. Try another search or page.
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              className="px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-sm"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i).map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentPage(i)}
                className={`w-9 h-9 rounded-lg text-sm ${
                  currentPage === i
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border border-gray-200 text-gray-700'
                }`}
              >
                {i}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={!(currentPage < totalPages)}
              className="px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-sm disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
