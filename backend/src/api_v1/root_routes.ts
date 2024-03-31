import { Hono } from "hono";
import {blogRouter} from "./routes/blog";
import { userRouter } from "./routes/user";

export const V1Router = new Hono();

V1Router.use("/user", userRouter) 
V1Router.use("/blog", blogRouter)

