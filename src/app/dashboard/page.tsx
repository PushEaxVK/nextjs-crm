import React from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div>
      <main>
        <h1 className="text-xl">Dashboard Page</h1>
      </main>
    </div>
  );
}
