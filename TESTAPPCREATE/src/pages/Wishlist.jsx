import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

export default function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const moveToCart = (item) => {
    addToCart(item, 1);
    removeFromWishlist(item.id);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Wishlist</h1>

        {wishlistItems.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
            <p className="text-gray-600">Your wishlist is empty.</p>
            <Link to="/products" className="inline-block mt-4 text-blue-600 font-medium hover:underline">
              Browse products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {wishlistItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                <Link to={`/product/${item.id}`}>
                  <img src={item.image} alt={item.name} className="w-full h-44 object-cover" />
                </Link>
                <div className="p-3">
                  <Link to={`/product/${item.id}`} className="font-medium text-gray-900 text-sm line-clamp-2 hover:text-blue-600">
                    {item.name}
                  </Link>
                  <p className="text-green-600 font-semibold mt-2">
                    ₹{item.price.toLocaleString('en-IN')}
                  </p>
                  <button
                    type="button"
                    onClick={() => moveToCart(item)}
                    className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-lg"
                  >
                    Move to Cart
                  </button>
                  <button
                    type="button"
                    onClick={() => removeFromWishlist(item.id)}
                    className="mt-2 w-full text-sm text-red-600 py-1"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
