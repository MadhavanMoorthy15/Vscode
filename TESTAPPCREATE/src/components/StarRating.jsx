export default function StarRating({ rating = 0, size = 'text-sm' }) {
  const value = Math.max(0, Math.min(5, Number(rating) || 0));
  const filled = Math.round(value);

  return (
    <div className={`flex items-center gap-0.5 ${size}`} aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < filled ? 'text-yellow-400' : 'text-gray-300'}>
          {i < filled ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
}
