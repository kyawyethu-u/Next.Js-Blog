import React from 'react'
import CustomButton from './custom-buttom'
import {createPost } from '@/server/action'

const CreateForm = () => {
  return (
    <div>
        <form action={createPost}>
            <div className='space-y-4 mt-4'>
            <input type="text"
             name="title"
             placeholder='title...'
             className="bg-transparent border-2 w-full border-blue-600 rounded-md focus:outline-none p-2" required />
            <textarea
             name="description"
             placeholder='description...'
             className="bg-transparent border-2 w-full border-blue-600 rounded-md focus:outline-none p-2 block" required/>
            </div>
            <div className='flex justify-end'>
            <CustomButton label="create post"/>
            </div>
        </form>
    </div>
  )
}

export default CreateForm