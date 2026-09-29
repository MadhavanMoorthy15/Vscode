import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';
import StarRating from '../components/StarRating';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  const { addToWishlist, wishlistItems, removeFromWishlist } = useWishlist();
  const [qty, setQty] = useState(1);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, [id]);

  const related = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const inWishlist = wishlistItems?.some((item) => item.id === product.id);

  const handleWishlist = () => {
    if (inWishlist && removeFromWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const savings = product.originalPrice - product.price;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <p className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          {' / '}
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          {' / '}
          <span className="text-gray-800">{product.name}</span>
        </p>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-8 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-xl flex items-center justify-center p-6">
            <img src={product.image} alt={product.name} className="max-h-96 object-contain" />
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">{product.brand}</p>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <StarRating rating={product.rating} />
              <span className="text-sm text-gray-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <div className="mt-4 flex items-end gap-3">
              <span className="text-3xl font-bold text-green-600">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span className="text-gray-400 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-red-600 font-semibold">{product.discount}% off</span>
            </div>
            <p className="text-sm text-green-700 mt-1">You save ₹{savings.toLocaleString('en-IN')}</p>
            <p className="text-gray-600 mt-4 leading-relaxed">{product.description}</p>
            <p className={`mt-3 text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
              {product.inStock ? 'In stock' : 'Out of stock'}
            </p>

            <div className="flex items-center gap-3 mt-5">
              <span className="text-sm text-gray-700">Qty</span>
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-8 h-8 rounded border border-gray-300"
              >
                −
              </button>
              <span className="w-8 text-center">{qty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                className="w-8 h-8 rounded border border-gray-300"
              >
                +
              </button>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <button
                type="button"
                onClick={() => addToCart(product, qty)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg"
              >
                Add to Cart
              </button>
              <button
                type="button"
                onClick={handleWishlist}
                className="border border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold px-6 py-2.5 rounded-lg"
              >
                {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mt-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Specifications</h2>
          <table className="w-full text-sm">
            <tbody>
              {Object.entries(product.specs || {}).map(([key, value]) => (
                <tr key={key} className="border-b border-gray-100">
                  <td className="py-2 pr-4 text-gray-500 capitalize w-40">{key}</td>
                  <td className="py-2 text-gray-800">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.slice(0, 4).map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
