import { createData, deleteData, readData } from "@/server/action";
import CustomButton from "./components/custom-buttom";
import Link from "next/link";

//server component  (log work in just terminal or console)
//can calls directly server action form (/server/action)

export default async function Home() {
  const {error,success} = await readData(); //calls directly server action
 
  if(error){
    throw new Error(error)
  }
  return (
      <main>
        <h1 className="text-xl font-bold ">Todos</h1>
        { 
          success?.map((todo) =>( 
          <div key={todo.id}>
            <p >{todo.title}</p>
            <form action={deleteData}>
              <input type="text" name="id" value={todo.id} hidden readOnly/>
              <button type="submit" className="text-red-600 underline">Delete</button>
            </form>
            <Link href={`/update/${todo.id}`} className="underline text-green-600" >Edit</Link>
          </div>
        ))
        }
        <div className="mt-2">
          <form action={createData} >
            <input type="text" name="todoTitle" className="bg-transparent border border-white"/>
            <CustomButton label="create"/>
          </form>
        </div>
      </main>
  )
}
