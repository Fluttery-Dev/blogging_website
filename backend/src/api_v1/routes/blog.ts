
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
            JWT_SECRET: string;
        },
        Variables: Variables,
    }>();


    blogRouter.use("/*", async (c,next)=>{
    
        const jwt = c.req.header('Authorization') ||  "";

        if(!jwt){
            c.status(401);
            return c.json({message: "Authorization info missing"});
        }

        const token = jwt.split(" ")[1];

        const payload = await verify(token, c.env.JWT_SECRET);
        if(!payload) {
            c.status(401);
            return c.json({message: "Unauthorized"});
        }
        console.log(payload)
        c.set('authorId', payload.id);
        await next();
    })

    // blogRouter.get('/', (c) => {
    //     return c.text('Hello Hono!')
    // })

    blogRouter.post("/create", async (c)=>{
        console.log("here");
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
        } finally {
            await prisma.$disconnect();
          }
    })

    blogRouter.put("/update", async (c)=>{
        
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());

        const body = await c.req.json();

        try {
            const blog = await prisma.post.update({
                where:{
                    id: body.blogId,
                },
                data:{
                    title: body.title,
                    content: body.content,
                }
            });
            return c.json({message: "content updated"});
            
        } catch (error) {
            c.status(500);
            return c.json({message: "could not update the blog"});
        } finally {
            await prisma.$disconnect();
          }

    })

       //Todo: Add todo

       blogRouter.get("/bulk", async  (c)=>{   
        console.log("bulk");

        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());

        try {
            const blogs = await prisma.post.findMany();
            console.log(blogs);
            return c.json({blogs: blogs});
            
        } catch (error) {
            c.status(500);
            return c.json({message: "could not fetch the blogs"});
        } finally {
            await prisma.$disconnect();
          }
    })
    
    blogRouter.get("/:id", async (c)=>{

        
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());


        const blogId = c.req.param('id');
        try {
            const blog = await prisma.post.findFirst({
                where:{
                    id: blogId,
                },
            })
            return c.json( blog);
            
        } catch (error) {
            c.status(403);
            return c.json({message: "could not fetch the blog"});
        } finally {
            await prisma.$disconnect();
          }

    })

 

    export default blogRouter;