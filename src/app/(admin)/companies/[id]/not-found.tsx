'use client';

import React from 'react';
import Link from 'next/link';

//eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface NotFoundProps {}

export default function NotFound({}: NotFoundProps) {
  return (
    <div>
      <p>Could not found company</p>
      <Link href="/companies" className="text-blue-500">
        Back to companies
      </Link>
    </div>
  );
}
