import { products } from "../data/products";
import { useStore } from "../context/StoreContext";
import ProductCard from "../components/ProductCard";

export default function Wishlist() {
  const { wishlist } = useStore();
  const items = wishlist
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Wishlist ({wishlist.length})</h1>
      {items.length === 0 ? (
        <p className="text-slate-500">Nothing saved yet. Tap the heart on a product.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {items.map((p, index) => (
            <ProductCard key={index} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
