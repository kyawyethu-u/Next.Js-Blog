import CustomButton from '@/app/components/custom-buttom'
import { getPost, updatePost } from '@/server/action'
import React from 'react'

type EditTodoProps = {
    params: {
        id: string
    }
}

const EditTodo =async ({params}: EditTodoProps) => {
  const {success} = await getPost(Number(params.id))
  
  return <main>
     <h2 className='title-text'>Update post</h2>
    <form action={updatePost}>
      <div className='space-y-4 mt-4'>
      <input type="text" name="id" value={params.id} hidden readOnly/>
        <input type="text" name="title"placeholder='title...'
        defaultValue={success?.title}
        className="bg-transparent border-2 w-full border-blue-600 rounded-md focus:outline-none p-2 block" required/>
      <textarea
        name="description"
        placeholder='description...'
        className="bg-transparent border-2 w-full border-blue-600 rounded-md focus:outline-none p-2 block" required
        rows={5}
        defaultValue={success?.description}
        />
      </div>
         <div className='flex justify-end'>
         <CustomButton label="Update post"/>
         </div>
    </form>
    </main>
}

export default EditTodo