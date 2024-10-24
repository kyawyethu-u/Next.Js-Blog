"use server"

import { db } from "@/server"
import { error } from "console"
import { todos } from "./schema"
import { posts } from "./schema"
import { revalidatePath } from "next/cache"
import { eq } from "drizzle-orm"
import { redirect } from "next/navigation"



export const getPosts = async() =>{
        const posts = await db.query.posts.findMany()
        if(!posts){
            return {error: "No posts found"}
        }
        return {success: posts}
}

export const getPost = async(id: number) =>{
        const post = await db.query.posts.findFirst({where: eq(posts.id,id)})
        if(!post){
            redirect("/");
        }
        return{success: post}
}

export const createPost = async(formData : FormData) =>{
        console.log(formData);
        const title =formData.get("title")?.toString();
        const description =formData.get("description")?.toString();
        if(!title || !description){
            return {error: "Invalid data found"}
        }
    await db.insert(posts).values({title, description})
    revalidatePath("/")
    redirect("/")
    return {success: "Post created!"}
}


export const deletePost = async(formData: FormData) => {
    const id = Number(formData.get("id"));
    if(!id){
        return {error: "No id found!"}
    }
    await db.delete(posts).where(eq(posts.id,id))
    revalidatePath("/")
    redirect("/")
    return {success: "Todo deleted!"}
}

export const updatePost = async(formData: FormData) =>{
    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();
    const id = Number(formData.get("id"));

    if(!title){
        return {error: "Invalid post found"}
    }
    await db.update(posts).set({title,description}).where(eq(posts.id, id))
    revalidatePath("/");
    redirect("/");
}