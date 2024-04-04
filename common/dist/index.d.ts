import { z } from "zod";
export declare const signUpInput: z.ZodObject<{
    userName: z.ZodString;
    password: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    userName: string;
    password: string;
    name?: string | undefined;
}, {
    userName: string;
    password: string;
    name?: string | undefined;
}>;
export declare const signInInput: z.ZodObject<{
    userName: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    userName: string;
    password: string;
}, {
    userName: string;
    password: string;
}>;
export declare const createBlogSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
export declare const updateBlogSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    id: string;
}, {
    title: string;
    content: string;
    id: string;
}>;
export type singUpSchema = z.infer<typeof signUpInput>;
export type signInSchema = z.infer<typeof signInInput>;
export type createBlogSchema = z.infer<typeof createBlogSchema>;
export type updateBlogSchema = z.infer<typeof updateBlogSchema>;
