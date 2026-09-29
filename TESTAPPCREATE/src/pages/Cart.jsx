import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { useShop } from '../context/ShopContext.jsx';

export default function Cart() {
  const { cart, removeFromCart, updateQty, cartTotal } = useShop();
  const tax = cartTotal * 0.18;
  const delivery = 99;
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-black">Shopping Cart</h1>
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <section className="space-y-4">
          {cart.length === 0 && <div className="rounded-xl bg-white p-8 text-center shadow dark:bg-slate-800">Your cart is empty.</div>}
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4 rounded-xl bg-white p-4 shadow dark:bg-slate-800">
              <img src={item.image} className="h-28 w-28 rounded object-cover" />
              <div className="flex-1">
                <h2 className="font-bold">{item.name}</h2><p className="text-sm text-slate-500">{item.category}</p><strong>₹{item.price.toLocaleString()}</strong>
                <div className="mt-3 flex items-center gap-3"><input type="number" value={item.qty} min="1" onChange={(e) => updateQty(item.id, Number(e.target.value))} className="w-20 rounded border px-2 py-1 text-slate-900" /><button onClick={() => removeFromCart(item.id)} className="text-rose-600"><Trash2 /></button></div>
              </div>
            </div>
          ))}
        </section>
        <aside className="h-max rounded-xl bg-white p-5 shadow dark:bg-slate-800">
          <h2 className="text-xl font-black">Price Details</h2>
          <div className="mt-4 space-y-3 text-sm"><p className="flex justify-between"><span>Subtotal</span><b>₹{cartTotal.toLocaleString()}</b></p><p className="flex justify-between"><span>Tax</span><b>₹{tax.toFixed(0)}</b></p><p className="flex justify-between"><span>Delivery</span><b>₹{delivery}</b></p></div>
          <hr className="my-4" /><p className="flex justify-between text-lg font-black"><span>Total</span><span>₹{(cartTotal + tax + delivery).toFixed(0)}</span></p>
          <Link to="/checkout" className="mt-5 block rounded bg-orange-500 px-4 py-3 text-center font-bold text-white">Proceed to Checkout</Link>
        </aside>
      </div>
    </main>
  );
}
