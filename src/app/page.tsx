import TodoList from './_components/todo-list'
import { serverClient } from './_trpc/server-client'

export const revalidate = 0
export const dynamicParams = false

export default async function Home() {
  const todos = await serverClient.getTodos()
  return (
    <main className="my-auto flex min-h-screen max-w-5xl">
      <TodoList initialTodos={todos} />
    </main>
  )
}
