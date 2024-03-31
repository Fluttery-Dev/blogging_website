import { Hono } from 'hono'
import { V1Router } from './api_v1/root_routes'

const app = new Hono()

app.use("/api/v1", V1Router);

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
