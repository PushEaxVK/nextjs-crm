import React from 'react';
import { getSummaryStats, SummaryStats } from '@/lib/api';
import StatCard, { StatCardType } from '@/app/components/stat-card';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PageProps {}

const labelByStats: Record<keyof SummaryStats, string> = {
  promotions: 'Total promotion',
  categories: 'Total categories',
  newCompanies: 'New companies',
  activeCompanies: 'Total active companies',
};

export default async function Page({}: PageProps) {
  const data = await getSummaryStats({
    next: {
      revalidate: 5,
    },
  });

  return (
    <div className="grid grid-cols-12 gap-5">
      {(Object.keys(labelByStats) as (keyof SummaryStats)[]).map((key) => (
        <div key={key} className="col-span-3">
          <StatCard
            type={StatCardType.Gradient}
            label={labelByStats[key]}
            counter={data[key]}
          />
        </div>
      ))}
    </div>
  );
}
