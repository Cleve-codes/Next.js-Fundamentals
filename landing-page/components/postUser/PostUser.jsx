import React from 'react'
import styles from './postUser.module.css'
import { getUser } from '../../lib/data'
import Image from 'next/image'

// const getData = async(userId) => {
//     const data = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: "no-store"})

//     if(!data.ok) {
//         throw new Error("Something went wrong")
//     }

//     return data.json()
// }

const PostUser = async ({userId}) => {

  // const user = await getData(userId)

  const user = await getUser(userId)


  return (
    <div className={styles.container}>
      <Image src={user.img ? user.img : '/snoop.jpg'} alt='Avatar' className={styles.avatar} width={50} height={50} />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>&nbsp;{user.username}</span>
      </div>
    </div>
  )
}

export default PostUser