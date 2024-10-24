import { createPost, getPosts,  } from "@/server/action";
import CustomButton from "./components/custom-buttom";
import Link from "next/link";
import BlogCard from "./components/blog-card";
import CreateForm from "./components/create-form";

//server component  (log work in just terminal or console)
//can calls directly server action form (/server/action)

export default async function Home() {
  const {error,success} = await getPosts(); //calls directly server action
 
  if(error){
    throw new Error(error)
  }
  return (
      <main className="mt-4">
        <h1 className="title-text mb-4">Recent Blogs</h1>
        {success?.length === 0 && <p className="text-medium font-sm">No posts to show</p>}
        { 
          success?.map((post) =>( 
          <BlogCard id={post.id} title={post.title} key={post.id} description={post.description}/>
        ))
        }
        <div className="mt-2">
          
        </div>
      </main>
  )
}
