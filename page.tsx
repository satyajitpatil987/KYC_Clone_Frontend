'use client';

import BarChartCard from '@/components/BarChartCard';
import DonutChartCard from '@/components/DonutChartCard';
import StatCard from '@/components/StatCard';
import StatusList from '@/components/StatusList';
import { useEffect, useState } from 'react';

type KycData = {
  total: number;
  newKYC: { count: number; change: number };
  modifiedKYC: { count: number; change: number };
  barData: { name: string; today: number; yesterday: number }[];
  status: { label: string; value: number }[];
  circleData: { total: number; received: number; consumed: number; pending: number };
};

export default function Home() {
  const [data, setData] = useState<KycData | null>(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/kyc')
      .then((r) => r.json())
      .then(setData)
      .catch((e) => console.error(e));
  }, []);

  if (!data) return <div className="p-8">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col gap-6">
      <div className="text-2xl font-bold">KYC Dashboard</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total KYC" value={data.total} />
        <StatCard title="New KYC" value={data.newKYC.count} change={data.newKYC.change} />
        <StatCard title="Modified KYC" value={data.modifiedKYC.count} change={data.modifiedKYC.change} />
      </div>

      <BarChartCard data={data.barData} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DonutChartCard
          received={data.circleData.received}
          consumed={data.circleData.consumed}
          pending={data.circleData.pending}
        />
        <StatusList items={data.status} />
      </div>
    </div>
  );
}
