import Header from '@/app/components/header';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Dashboard</Header>
    </>
  );
}
