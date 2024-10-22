import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='text-center flex w-full h-screen flex-col items-center justify-center gap-2'>
        <h2 className='text-3xl'>404 Not Found</h2>
        <Link className='underline text-red-600 border border-red-600' href={"/"}>Go Back Home</Link>
    </div>
  )
}

export default NotFound