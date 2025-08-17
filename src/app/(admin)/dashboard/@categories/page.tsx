import { getSummaryCategories } from '@/lib/api';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PageProps {
  //;
}

export default async function Page({}: PageProps) {
  const data = await getSummaryCategories();

  return <div></div>;
}
