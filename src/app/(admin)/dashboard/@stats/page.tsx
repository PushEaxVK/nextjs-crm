import StatCard, { StatCardType } from '@/app/components/stat-card';
import { getSummaryStats } from '@/lib/api';
import Link from 'next/link';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PageProps {}

const labelByStats = {
  promotions: 'Total promotion',
  categories: 'Total categories',
  newCompanies: 'New companies',
  activeCompanies: 'Total active companies',
};

export default async function Page({}: PageProps) {
  const data = await getSummaryStats();

  return (
    <div className="grid grid-cols-12 gap-5">
      {(Object.keys(labelByStats) as (keyof typeof data)[]).map((key) => (
        <Link href={`/dashboard/${key}`} key={key} className="col-span-3">
          <StatCard
            type={StatCardType.Gradient}
            label={labelByStats[key]}
            counter={data[key]}
          />
        </Link>
      ))}
    </div>
  );
}
