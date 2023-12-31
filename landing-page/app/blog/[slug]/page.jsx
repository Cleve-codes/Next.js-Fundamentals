import React, { Suspense } from 'react'
import Image from 'next/image'
import styles from './singlePost.module.css'
import PostUser from '../../../components/postUser/PostUser'
import { getPost } from '../../../lib/data'

// Data Fecthing using an API
// const getData = async(slug) => {
//     const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)

//     if(!data.ok) {
//         throw new Error("Something went wrong")
//     }

//     return data.json()
// }

// Data Fetching without API

const SinglePostPage = async ({params}) => {

  const {slug} = params

  const post = await getPost(slug)


  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/wutang.jpg' alt='blog' className={styles.img} fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Image src='/snoop.jpg' alt='Avatar' className={styles.avatar} width={50} height={50} />
          {post && <Suspense fallback={<div>Loading...</div>}>
          <PostUser userId={post.userId} />
          </Suspense>}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>&nbsp;01.01.2023</span>
          </div>
        </div>
        <div className={styles.content}>
          {post?.body}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage;