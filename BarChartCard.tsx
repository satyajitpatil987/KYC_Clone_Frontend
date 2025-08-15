'use client';

import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

type Row = { name: string; today: number; yesterday: number };

export default function BarChartCard({ data }: { data: Row[] }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 h-72">
      <div className="font-semibold mb-3">KYC Types (Today vs Yesterday)</div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="today" fill="#2563eb" />
          <Bar dataKey="yesterday" fill="#93c5fd" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
