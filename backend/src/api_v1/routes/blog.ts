
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from "hono";
import { verify } from 'hono/jwt';

type Variables = {
    authorId: string;
}


const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string;
        JWT_STRING: string;
    },
    Variables: Variables,
}>();


blogRouter.use("/*", async (c,next)=>{

    const jwt = c.req.header('authorization') ||  "";

    if(!jwt){
        c.status(401);
        return c.json({message: "Authorization infor missing"});
    }

    const token = jwt.split(" ")[1];

    const payload = await verify(token, c.env.JWT_STRING);

    if(!payload) {
        c.status(401);
        return c.json({message: "Unauthorized"});
    }
    
    c.set('authorId', payload.id);
    await next();
})

blogRouter.post("/", async (c)=>{

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const authorId= c.get('authorId');

    try {
        const blog = await prisma.post.create({
            data:{
                title: body.title,
                content: body.content,
                authorId: authorId,
            }
        })
        return c.json({blogId: blog.id});

    } catch (error) {
        c.status(500);
        return c.json({message: "could not create the blog"});
    }


})

blogRouter.put("/", async (c)=>{
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const authorId= c.get('authorId');
    try {
        const blog = await prisma.post.update({
            where:{
                id: authorId,
            },
            data:{
                title: body.title,
                content: body.content,
            }
        })
        return c.json({blogId: blog.id});
        
    } catch (error) {
        c.status(500);
        return c.json({message: "could not update the blog"});
    }

})

blogRouter.get("/:id", async (c)=>{

       
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const authorId= c.get('authorId');
    try {
        const blog = await prisma.post.findFirst({
            where:{
                id: authorId,
            },
        })
        return c.json({blogId: blog});
        
    } catch (error) {
        c.status(403);
        return c.json({message: "could not fetch the blog"});
    }

})

//Todo: Add todo

blogRouter.get("/bulk", async  (c)=>{
       
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const blogs = await prisma.post.findMany();
        return c.json({blogs: blogs});
        
    } catch (error) {
        c.status(500);
        return c.json({message: "could not fetch the blogs"});
    }
})

export default blogRouter;