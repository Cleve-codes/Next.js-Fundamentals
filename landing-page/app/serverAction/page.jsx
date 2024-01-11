import React from 'react'
import { serverAction } from '../../lib/action'

const Page = () => {
  return (
    <form action={serverAction} className='flex gap-[2em]'>
        <input name='name' type='text' placeholder='Name' />
        <input name='email' type='email' placeholder='Email' />
        <input name='message' type='text' placeholder='Message' />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Page