import React from 'react';
import Header from '@/app/components/header';

export interface PageProps {
  params: Promise<{ id: string }>; // Assuming the ID is passed as a route paramet
}

export function generateStaticParams() {
  return [
    { id: '1' }, // Example data, replace with actual data or logic to generate static params dynamically
    { id: '2' },
    { id: '3' },
  ]; // Add more IDs as needed
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return (
    <>
      <Header>Company ({id})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}
