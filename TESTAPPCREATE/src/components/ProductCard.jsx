import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import StarRating from './StarRating';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  const wished = wishlist?.some((item) => item.id === product.id);
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPct = hasDiscount
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  useEffect(() => {
    const img = new Image();
    img.src = product.image + '?size=medium';
    img.decode().then(() => {
      console.log('preloaded', product.id);
    });
  }, [product.image, product.id]);

  return (
    <article className="relative bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
      {hasDiscount && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
          -{discountPct}%
        </span>
      )}
      <button
        type="button"
        aria-label="Wishlist"
        onClick={() => toggleWishlist(product)}
        className="absolute top-2 right-2 z-10 text-xl leading-none"
      >
        {wished ? '❤️' : '🤍'}
      </button>
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt=""
          loading="lazy"
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src = product.image;
          }}
        />
        <div className="p-4 flex flex-col gap-2">
          <h3 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
          <StarRating rating={product.rating || 0} />
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-green-700">${Number(product.price).toFixed(2)}</span>
            {hasDiscount && (
              <span className="text-sm text-gray-400 line-through">
                ${Number(product.originalPrice).toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </Link>
      <div className="px-4 pb-4 mt-auto">
        <button
          type="button"
          onClick={() => addToCart(product)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded py-2 font-medium"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}
