import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white font-semibold mb-3">About</h4>
          <p className="text-sm leading-relaxed">
            ShopMart is your everyday marketplace for electronics, home goods, and fashion.
            Fast shipping, easy returns, and prices that stay honest.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white">
                Products
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className="hover:text-white">
                Wishlist
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-white">
                Cart
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="text-sm space-y-2">
            <li>support@shopmart.example</li>
            <li>1-800-555-0199</li>
            <li>120 Market Street, Austin, TX</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center text-xs py-4">
        © {new Date().getFullYear()} ShopMart. All rights reserved.
      </div>
    </footer>
  );
}
