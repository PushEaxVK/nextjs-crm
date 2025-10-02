import React from 'react';
import CompanyTable from '@/app/components/company-table';
import CompanyRow from '@/app/components/company-row';
import { Status } from '@/app/components/stauts-label';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <CompanyTable>
      <CompanyRow
        id={1}
        category="Products"
        company="Costco"
        status={Status.Pending}
        promotion={true}
        county="USA"
        joinedDate="02.19.2023"
      />
    </CompanyTable>
  );
}
