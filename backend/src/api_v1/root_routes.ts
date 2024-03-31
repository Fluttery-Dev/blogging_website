import { Hono } from "hono";
import blogRouter from "./routes/blog";
import userRouter from "./routes/user";

const V1Router = new Hono();

V1Router.get('/', (c) => {
    return c.text('Hello Hono v1router!')
  })

V1Router.route("/user", userRouter) 
V1Router.route("/blog", blogRouter)

export default V1Router;