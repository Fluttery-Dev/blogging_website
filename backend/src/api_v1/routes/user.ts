import { Hono  } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { sign } from "hono/jwt";
import { signInInput, signUpInput } from "@viper_08/medium-common";
import { withAccelerate } from "@prisma/extension-accelerate";


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

    const {success} = signUpInput.safeParse(body);

    if(!success){
        c.status(403);
        return c.json({message: "wrong inputs"});
    }

    const user = await prisma.user.findFirst({
        where:{
            email: body.userName,
        }
    })
    if(user) {
        c.status(403);
        return c.json({message: "User already exists"});
    }

    try {
        const user = await prisma.user.create({
            data:{
                email: body.userName,
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
    
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());



    try {
        const data = await c.req.json();

        const {success} = signInInput.safeParse(data);
    
        if(!success){
            c.status(403);
            return c.json({message: "wrong inputs"});
        }
        
        const user = await prisma.user.findFirst({
            where:{
                email: data.userName,
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