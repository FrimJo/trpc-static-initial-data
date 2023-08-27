'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { httpBatchLink } from '@trpc/react-query'
import React, { useMemo } from 'react'
import { trpc } from './client'

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  const queryClient = useMemo(() => new QueryClient(), [])
  const trpcClient = useMemo(
    () =>
      trpc.createClient({
        links: [
          httpBatchLink({
            url: `/api/trpc`,
          }),
        ],
      }),
    []
  )

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </trpc.Provider>
  )
}
