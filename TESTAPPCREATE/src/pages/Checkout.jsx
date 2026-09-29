import { useState } from 'react';
import { useShop } from '../context/ShopContext.jsx';

export default function Checkout() {
  const { cart, cartTotal } = useShop();
  const [form, setForm] = useState({ name: '', phone: '', address: '', payment: 'cod' });
  const [placed, setPlaced] = useState(false);
  function submit(e) { e.preventDefault(); setPlaced(true); }
  if (placed) return <main className="mx-auto max-w-3xl px-4 py-16"><div className="rounded-xl bg-white p-10 text-center shadow dark:bg-slate-800"><h1 className="text-3xl font-black text-green-600">Order placed!</h1><p className="mt-2">Your order for {cart.length} items has been received.</p></div></main>;
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-black">Checkout</h1>
      <form onSubmit={submit} className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <section className="rounded-xl bg-white p-6 shadow dark:bg-slate-800">
          <h2 className="mb-4 text-xl font-bold">Shipping Details</h2>
          <div className="grid gap-4"><input placeholder="Full name" className="rounded border px-3 py-2 text-slate-900" onChange={(e) => setForm({ ...form, name: e.target.value })} /><input placeholder="Phone" className="rounded border px-3 py-2 text-slate-900" onChange={(e) => setForm({ ...form, phone: e.target.value })} /><textarea placeholder="Address" className="rounded border px-3 py-2 text-slate-900" onChange={(e) => setForm({ ...form, address: e.target.value })} /><select className="rounded border px-3 py-2 text-slate-900" onChange={(e) => setForm({ ...form, payment: e.target.value })}><option value="cod">Cash on delivery</option><option value="card">Credit/Debit card</option><option value="upi">UPI</option></select></div>
        </section>
        <aside className="h-max rounded-xl bg-white p-6 shadow dark:bg-slate-800"><h2 className="text-xl font-bold">Order Summary</h2><p className="mt-3 flex justify-between"><span>Items</span><b>{cart.length}</b></p><p className="mt-3 flex justify-between"><span>Total</span><b>₹{cartTotal}</b></p><button className="mt-6 w-full rounded bg-orange-500 px-4 py-3 font-bold text-white">Place Order</button></aside>
      </form>
    </main>
  );
}
