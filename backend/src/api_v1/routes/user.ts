import { Hono  } from "hono";
import { PrismaClient } from '@prisma/client/edge'
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
    });

    const body = await c.req.json();
    console.log(body);

    try {
        const user = await prisma.user.create({
            data:{
                email: body.email,
                password: body.password,
                name: body.name,
            }
        });
        console.log(user);
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
    });

    try {
        
        const user = await prisma.user.findFirst({
            where:{
                email: data.email,
                password: data.password,
            }
        })
        if(!user) {
            c.status(403);
            return c.json({message: "User Not found"});
        }
        const token = await sign({id: user.id}, c.env.JWT_SECRET);
        return c.json({token: token});

    } catch (error) {
        c.status(403);
        console.log(error);
        return c.text("nah wrong input");
    }
})


export default userRouter;