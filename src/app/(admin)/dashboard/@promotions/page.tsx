import React from 'react';
import { getPromotions } from '@/lib/api';
import SummaryTable from '@/app/components/summary-table';
import SummaryTableCell from '@/app/components/summary-table-cell';
import SummaryTableHeader from '@/app/components/summary-table-header';
import DashboardCard from '@/app/components/dashboard-card';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getPromotions();

  const filteredData = data.filter(
    ({ companyTitle, title }) =>
      !(
        companyTitle.includes('Invalid faker method') ||
        title.includes('Invalid faker method')
      ),
  );

  return (
    <DashboardCard label="Promotion">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader>Name</SummaryTableHeader>
            <SummaryTableHeader align="center">%</SummaryTableHeader>
          </>
        }
      >
        {filteredData.map(({ id, title, companyTitle, discount }) => (
          <tr key={id}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell>{title}</SummaryTableCell>
            <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
