import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products, categories } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'

const PAGE_SIZE = 8

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortOrder, setSortOrder] = useState('featured')
  const [page, setPage] = useState(1)
  const [priceFilter, setPriceFilter] = useState('')

  const query = searchParams.get('q') || ''
  const category = searchParams.get('category') || ''

  // search filter
  let filtered = products.filter(p => {
    const matchesQuery = query ? p.name.includes(query) : true
    const matchesCategory = category ? p.category === category : true
    return matchesQuery && matchesCategory
  })

  // price filter
  if (priceFilter === 'low') filtered = filtered.filter(p => p.price < 10000)
  if (priceFilter === 'mid') filtered = filtered.filter(p => p.price >= 10000 && p.price < 50000)
  if (priceFilter === 'high') filtered = filtered.filter(p => p.price >= 50000)

  // sorting
  const sorted = [...filtered]
  if (sortOrder === 'priceLowHigh') {
    sorted.sort((a, b) => a.price - b.price)
  } else if (sortOrder === 'priceHighLow') {
    sorted.sort((a, b) => a.price - b.price)
  } else if (sortOrder === 'rating') {
    sorted.sort((a, b) => b.rating - a.rating)
  }

  // pagination
  const totalPages = Math.ceil(sorted.length / PAGE_SIZE)
  const startIdx = (page - 1) * PAGE_SIZE
  const endIdx = startIdx + PAGE_SIZE
  const pageItems = sorted.slice(startIdx, endIdx)

  function handlePageChange(newPage) {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters sidebar */}
        <aside className="md:w-56 shrink-0">
          <div className="card p-4 mb-4">
            <h3 className="font-bold mb-3">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => { searchParams.delete('category'); setSearchParams(searchParams) }}
                  className={category === '' ? 'text-primary-600 font-semibold' : 'hover:text-primary-600'}
                >
                  All Products
                </button>
              </li>
              {categories.map(cat => (
                <li key={cat}>
                  <button
                    onClick={() => { searchParams.set('category', cat); setSearchParams(searchParams) }}
                    className={category === cat ? 'text-primary-600 font-semibold' : 'hover:text-primary-600'}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-4">
            <h3 className="font-bold mb-3">Price Range</h3>
            <select value={priceFilter} onChange={e => setPriceFilter(e.target.value)} className="input">
              <option value="">All Prices</option>
              <option value="low">Under ₹10,000</option>
              <option value="mid">₹10,000 - ₹50,000</option>
              <option value="high">Above ₹50,000</option>
            </select>
          </div>
        </aside>

        {/* Product grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-500">{sorted.length} products found</p>
            <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} className="input max-w-48">
              <option value="featured">Featured</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
            </select>
          </div>

          {pageItems.length === 0 ? (
            <div className="text-center py-20 text-gray-500">No products found.</div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {pageItems.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button onClick={() => handlePageChange(page - 1)} className="btn-outline">Prev</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
              <button
                key={num}
                onClick={() => handlePageChange(num)}
                className={`btn ${num === page ? 'bg-primary-500 text-white' : 'btn-outline'}`}
              >
                {num}
              </button>
            ))}
            <button onClick={() => handlePageChange(page + 1)} className="btn-outline">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}
