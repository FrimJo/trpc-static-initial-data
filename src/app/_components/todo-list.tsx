'use client'

import { trpc } from '../_trpc/client'
import { serverClient } from '../_trpc/server-client'

export default function TodoList({ initialTodos }: { initialTodos: Awaited<ReturnType<(typeof serverClient)['getTodos']>> }) {
  const getTodos = trpc.getTodos.useQuery(undefined, {
    initialData: initialTodos,
    refetchOnMount: false,
  })
  return <><div>{JSON.stringify(getTodos.data)}</div><div>{JSON.stringify(initialTodos)}</div></>
}
