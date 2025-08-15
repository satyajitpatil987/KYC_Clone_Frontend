'use client';

type Props = { title: string; value: number | string; change?: number };

export default function StatCard({ title, value, change }: Props) {
  const color = typeof change === 'number' ? (change >= 0 ? 'text-green-600' : 'text-red-600') : 'text-gray-500';
  const sign = typeof change === 'number' ? (change >= 0 ? '↑' : '↓') : '';
  const changeText = typeof change === 'number' ? `${sign} ${Math.abs(change)}%` : '';
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col gap-2">
      <div className="text-gray-500">{title}</div>
      <div className="flex items-baseline gap-3">
        <div className="text-3xl font-bold">{value}</div>
        {changeText && <div className={`text-sm font-medium ${color}`}>{changeText}</div>}
      </div>
    </div>
  );
}
