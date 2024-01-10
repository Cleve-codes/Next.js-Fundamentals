import React from 'react'
import styles from './blog.module.css'
import PostCard from '../../components/postCard/PostCard'
import { getPosts } from '../../lib/data'

// const getData = async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: "no-store"})

//   if(!res.ok) {
//     throw new Error("Something went wrong")
//   }

//   return res.json()
// }

const page = async() => {

  // const posts = await getData()
  const posts = await getPosts()
  // console.log(posts)

  return (
    <div className={styles.container}>
     {posts.map((post) =>
     <div key={post.id} className={styles.post}>
      <PostCard post={post} />
     </div>
     )}
    </div>
  )
}

export default page