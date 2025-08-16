import React from 'react';
import Header from '@/app/components/header';

export interface PageProps {
  params: Promise<{ id: string }>; // Assuming the ID is passed as a route paramet
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return (
    <>
      <Header>Company ({String(id)})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}
