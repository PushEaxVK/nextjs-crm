'use client';

import PromotionForm from '@/app/components/promotion-form';
import { useParams } from 'next/navigation';
import React from 'react';

export default function Page() {
  const params = useParams<{ id: string }>();
  return (
    <div className="py-6 px-10">
      <PromotionForm companyId={params.id} />
    </div>
  );
}
