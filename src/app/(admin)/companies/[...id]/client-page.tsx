'use client';

import Header from '@/app/components/header';
import { notFound } from 'next/navigation';
import React, { useEffect } from 'react';

export interface ClientPageProps {
  id: string;
}

export default function ClientPage({ id }: ClientPageProps) {
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
