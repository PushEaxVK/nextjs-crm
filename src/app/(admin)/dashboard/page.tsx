import MagicButton from '@/app/components/magic-button';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <main>
      <h1 className="text-xl">Dashboard Page</h1>
      <MagicButton />
    </main>
  );
}
