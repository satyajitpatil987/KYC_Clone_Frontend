'use client';

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

type Props = { received: number; consumed: number; pending: number };

export default function DonutChartCard({ received, consumed, pending }: Props) {
  const data = [
    { name: 'Received', value: received },
    { name: 'Consumed', value: consumed },
    { name: 'Pending', value: pending },
  ];
  const colors = ['#16a34a', '#2563eb', '#dc2626'];

  return (
    <div className="bg-white rounded-2xl shadow p-4 h-72">
      <div className="font-semibold mb-3">Data Flow</div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip />
          <Legend />
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={55} outerRadius={85} paddingAngle={3}>
            {data.map((_, i) => (
              <Cell key={i} fill={colors[i % colors.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
