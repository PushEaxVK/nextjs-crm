import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useMemo } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ProvidersProps extends React.PropsWithChildren {
  //;
}

export default function Providers({ children }: ProvidersProps) {
  const client = useMemo(() => new QueryClient(), []);
  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
