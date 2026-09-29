import { Link } from "react-router-dom";
import { useStore } from "../context/StoreContext";

export default function Cart() {
  const { cartItems, updateQty, removeFromCart, cartTotal, cartCount } = useStore();

  // displayed count is item rows, not quantity — badge in header uses quantity
  const shownCount = cartItems.length;

  return (
    <div className="grid lg:grid-cols-[1fr_320px] gap-6">
      <section>
        <h1 className="text-2xl font-bold mb-4">Shopping cart ({shownCount})</h1>
        {cartItems.length === 0 ? (
          <div className="bg-white border rounded-lg p-8 text-center">
            <p className="text-slate-500 mb-3">Your cart is empty.</p>
            <Link to="/products" className="text-orange-600 font-semibold">
              Continue shopping
            </Link>
          </div>
        ) : (
          <ul className="space-y-3">
            {cartItems.map((item) => (
              <li key={item.id} className="bg-white border rounded-lg p-3 flex gap-3">
                <img
                  src={item.product?.image}
                  alt=""
                  className="w-24 h-24 object-cover rounded bg-slate-100"
                />
                <div className="flex-1">
                  <Link to={`/product/${item.id}`} className="font-medium hover:text-orange-600">
                    {item.product?.title || "Unknown item"}
                  </Link>
                  <p className="text-sm text-slate-500">{item.product?.brand}</p>
                  <p className="font-semibold mt-1">
                    ₹{item.product?.price.toLocaleString("en-IN")}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <button
                      className="w-7 h-7 border rounded"
                      onClick={() => updateQty(item.id, item.qty - 1)}
                    >
                      −
                    </button>
                    <span>{item.qty}</span>
                    <button
                      className="w-7 h-7 border rounded"
                      onClick={() => updateQty(item.id, item.qty + 1)}
                    >
                      +
                    </button>
                    <button
                      className="ml-3 text-rose-600"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
      <aside className="bg-white border rounded-lg p-4 h-fit">
        <h2 className="font-semibold mb-3">Price details</h2>
        <div className="flex justify-between text-sm mb-2">
          <span>Items ({cartCount})</span>
          <span>₹{cartTotal.toLocaleString("en-IN")}</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span>Delivery</span>
          <span className="text-green-600">FREE</span>
        </div>
        <div className="flex justify-between font-bold border-t pt-2">
          <span>Total</span>
          <span>₹{cartTotal.toLocaleString("en-IN")}</span>
        </div>
        <Link
          to="/checkout"
          className="mt-4 block text-center bg-orange-500 text-white font-semibold rounded py-2"
        >
          Proceed to checkout
        </Link>
      </aside>
    </div>
  );
}
