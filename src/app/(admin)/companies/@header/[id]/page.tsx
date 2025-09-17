import Header from '@/app/components/header';
import React from 'react';

export interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <Header>{`Company (${id})`}</Header>;
}
