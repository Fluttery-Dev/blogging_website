import { z } from "zod";

export const signUpInput = z.object({
    userName: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional(),
})

export const signInInput = z.object({
    userName: z.string().email(),
    password: z.string().min(6),
})


export const createBlogSchema = z.object({
    title: z.string(),
    content: z.string(),
})

export const updateBlogSchema = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string(),
})

export type singUpSchema = z.infer<typeof signUpInput>
export type signInSchema = z.infer<typeof signInInput>
export type createBlogSchema = z.infer<typeof createBlogSchema>
export type updateBlogSchema = z.infer<typeof updateBlogSchema>


