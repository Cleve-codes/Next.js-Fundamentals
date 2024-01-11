import React from 'react'
import { addPost } from '../../lib/action'

const Page = () => {
  return (
    <form action={ addPost} className='flex gap-[2em]'>
        <input name='title' type='text' placeholder='title' />
        <input name='desc' type='text' placeholder='Email' />
        <button type='submit'>create</button>
    </form>
  )
}

export default Page