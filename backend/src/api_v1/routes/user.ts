import { Hono  } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign,decode, verify } from "hono/jwt";


const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
    }
}>()


userRouter.post("/signUp", async (c)=>{
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    try {
        const user = await prisma.user.create({
            data:{
                email: body.email,
                password: body.password,
                name: body.name,
            }
        });
        const token = await sign({id: user.id}, c.env.JWT_SECRET);
        return c.json({token: token});
    } catch (error) {
        console.log(error);
        c.status(403);
        return c.json({message: "Failed to signUp"})
    }
        
})

userRouter.post("/signIn", async (c)=>{
    
    const data = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        
        const user = await prisma.user.findFirstOrThrow({
            where:{
                email: data.email,
                password: data.password,
            }
        })

        const token = await sign({id: user.id}, c.env.JWT_SECRET);
        return c.json({token: token});

    } catch (error) {
        c.status(403);
        console.log(error);
        return c.text("nah wrong input");
    }
})


export default userRouter;