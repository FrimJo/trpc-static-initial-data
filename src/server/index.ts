import { publicProcedure, router } from './trpc'

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
  }),
})

export type AppRouter = typeof appRouter
