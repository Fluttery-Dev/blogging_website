import { Hono } from 'hono'
import  V1Router  from './api_v1/root_routes'
import { cors } from 'hono/cors'
const app = new Hono()

app.use('/*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization'],
}));


app.route("/api/v1", V1Router);

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
