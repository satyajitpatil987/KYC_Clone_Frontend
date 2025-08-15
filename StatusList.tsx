'use client';

type Item = { label: string; value: number };

export default function StatusList({ items }: { items: Item[] }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <div className="font-semibold mb-3">Status</div>
      <ul className="divide-y">
        {items.map((it, idx) => (
          <li key={idx} className="py-2 flex justify-between">
            <span className="text-gray-700">{it.label}</span>
            <span className="font-semibold">{it.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
