'use client';
import Header from '@/app/components/header';
import { notFound, useParams } from 'next/navigation';
import React, { useEffect } from 'react';

export interface CompanyPageParams {
  id: string;
  [key: string]: string | string[];
}

export default function Page() {
  const { id } = useParams<CompanyPageParams>();

  useEffect(() => {
    const parsedId = Number.parseInt(id);
    if (Number.isNaN(parsedId)) {
      notFound();
    }
  }, [id]);

  return (
    <>
      <Header>Company ({String(id)})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}
