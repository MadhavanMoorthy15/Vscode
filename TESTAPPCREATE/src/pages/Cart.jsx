import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { formatPrice } from "../data/products";

export default function Cart() {
  const { cart, updateQty, removeFromCart, cartTotal } = useShop();
  const shipping = cartTotal > 999 ? 0 : 49;
  const grand = cartTotal + shipping;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your cart</h1>
      {cart.length === 0 ? (
        <div className="bg-white border rounded-xl p-10 text-center">
          <p>Your cart is empty.</p>
          <Link to="/products" className="inline-block mt-4 text-orange-600 font-semibold">
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-[1fr_280px] gap-6">
          <ul className="space-y-3">
            {cart.map((item, idx) => (
              <li key={idx} className="bg-white border rounded-xl p-3 flex gap-3">
                <img src={item.image} alt="" className="w-24 h-24 object-cover rounded" />
                <div className="flex-1">
                  <Link to={`/product/${item.id}`} className="font-semibold hover:text-orange-600">
                    {item.name}
                  </Link>
                  <p className="text-sm text-slate-500">{item.brand}</p>
                  <p className="font-bold mt-1">{formatPrice(item.price)}</p>
                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <button onClick={() => updateQty(item.id, item.qty - 1)} className="border px-2 rounded">-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} className="border px-2 rounded">+</button>
                    <button onClick={() => removeFromCart(item.id)} className="ml-auto text-red-600">
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <aside className="bg-white border rounded-xl p-4 h-fit">
            <h2 className="font-bold mb-3">Price details</h2>
            <div className="flex justify-between text-sm mb-1">
              <span>Items</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>
            <div className="flex justify-between text-sm mb-1">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
            </div>
            <div className="flex justify-between font-bold border-t mt-3 pt-3">
              <span>Total</span>
              <span>{formatPrice(grand)}</span>
            </div>
            <Link to="/checkout" className="block text-center mt-4 bg-orange-500 text-white font-semibold py-2 rounded-md">
              Checkout
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}
