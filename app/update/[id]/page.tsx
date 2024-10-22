import CustomButton from '@/app/components/custom-buttom'
import { updateData } from '@/server/action'
import React from 'react'

type EditTodoProps = {
    params: {
        id: string
    }
}

const EditTodo = ({params}: EditTodoProps) => {
  return <main>
    <h2>Update todo</h2>
    <form action={updateData}>
        <input type="text" name="id" value={params.id} hidden readOnly/>
        <input type="text" name="title" required className='bg-transparent border border-white'/>
        <CustomButton label="update"/>
    </form>
  </main>
}

export default EditTodo