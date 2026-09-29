import { useShop } from '../context/ShopContext.jsx';

export default function Profile() {
  const { profile, setProfile, cart, wishlist } = useShop();
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-black">User Profile</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <section className="rounded-xl bg-white p-6 shadow md:col-span-2 dark:bg-slate-800">
          <h2 className="text-xl font-bold">Account Information</h2>
          <div className="mt-4 grid gap-4"><input value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} className="rounded border px-3 py-2 text-slate-900" /><input value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} className="rounded border px-3 py-2 text-slate-900" /><input value={profile.city} onChange={(e) => setProfile({ ...profile, city: e.target.value })} className="rounded border px-3 py-2 text-slate-900" /></div>
        </section>
        <aside className="rounded-xl bg-white p-6 shadow dark:bg-slate-800"><h2 className="text-xl font-bold">Activity</h2><p className="mt-4">Cart items: <b>{cart.length}</b></p><p>Wishlist items: <b>{wishlist.length}</b></p><p>Orders: <b>4</b></p></aside>
      </div>
    </main>
  );
}
