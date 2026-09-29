import { useEffect, useMemo, useState } from 'react'
import { products, categories } from '../data/products.js'

export default function Admin() {
  const [productList, setProductList] = useState(products)
  const [search, setSearch] = useState('')
  const [newProduct, setNewProduct] = useState({
    name: '', category: 'Mobiles', price: '', brand: ''
  })
  const [message, setMessage] = useState('')

  useEffect(() => {
    document.title = 'Admin Dashboard | ShopZone'
  }, [])

  const stats = useMemo(() => {
    const totalValue = productList.reduce((sum, p) => sum + p.price, 0)
    return {
      totalProducts: productList.length,
      totalValue,
      avgPrice: totalValue / productList.length,
      categories: categories.length
    }
  }, [productList])

  function handleAddProduct(e) {
    e.preventDefault()
    const newId = productList.length + 1
    productList.push({
      id: newId,
      name: newProduct.name,
      category: newProduct.category,
      price: Number(newProduct.price),
      brand: newProduct.brand,
      rating: 0,
      description: '',
      inStock: true
    })
    setMessage(`Product "${newProduct.name}" added!`)
    setNewProduct({ name: '', category: 'Mobiles', price: '', brand: '' })
  }

  function handleDelete(id) {
    setProductList(productList.filter(p => p.id !== id))
  }

  const filtered = productList.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="card p-6">
          <div className="text-3xl font-bold text-primary-600">{stats.totalProducts}</div>
          <div className="text-sm text-gray-500">Total Products</div>
        </div>
        <div className="card p-6">
          <div className="text-3xl font-bold text-primary-600">₹{Math.round(stats.avgPrice).toLocaleString()}</div>
          <div className="text-sm text-gray-500">Avg. Price</div>
        </div>
        <div className="card p-6">
          <div className="text-3xl font-bold text-primary-600">{stats.categories}</div>
          <div className="text-sm text-gray-500">Categories</div>
        </div>
        <div className="card p-6">
          <div className="text-3xl font-bold text-primary-600">₹{(stats.totalValue / 100000).toFixed(1)}L</div>
          <div className="text-sm text-gray-500">Inventory Value</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Add product */}
        <form onSubmit={handleAddProduct} className="card p-6 space-y-3 h-fit">
          <h2 className="font-bold text-lg">Add New Product</h2>
          {message && <p className="text-green-600 text-sm">{message}</p>}
          <input
            placeholder="Product name"
            value={newProduct.name}
            onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
            className="input"
          />
          <select
            value={newProduct.category}
            onChange={e => setNewProduct({ ...newProduct, category: e.target.value })}
            className="input"
          >
            {categories.map(c => <option key={c}>{c}</option>)}
          </select>
          <input
            placeholder="Price"
            type="number"
            value={newProduct.price}
            onChange={e => setNewProduct({ ...newProduct, price: e.target.value })}
            className="input"
          />
          <input
            placeholder="Brand"
            value={newProduct.brand}
            onChange={e => setNewProduct({ ...newProduct, brand: e.target.value })}
            className="input"
          />
          <button type="submit" className="btn-primary w-full">Add Product</button>
        </form>

        {/* Product table */}
        <div className="lg:col-span-2">
          <input
            placeholder="Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="input mb-4"
          />
          <div className="card overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="p-3 text-left">ID</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-right">Price</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filtered.map(p => (
                  <tr key={p.id}>
                    <td className="p-3">{p.id}</td>
                    <td className="p-3">{p.name}</td>
                    <td className="p-3">{p.category}</td>
                    <td className="p-3 text-right">₹{p.price.toLocaleString()}</td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => handleDelete(p.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
