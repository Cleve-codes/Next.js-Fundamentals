import React from 'react'
import Image from 'next/image'
import styles from './singlePost.module.css'
import PostUser from '../../../components/postUser/PostUser'


const getData = async(slug) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)

    if(!data.ok) {
        throw new Error("Something went wrong")
    }

    return data.json()
}

const SinglePostPage = async ({params}) => {

  const {slug} = params

  const post = await getData(slug)


  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/wutang.jpg' alt='blog' className={styles.img} fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image src='/snoop.jpg' alt='Avatar' className={styles.avatar} width={50} height={50} />
          <PostUser userId={post.userId} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>&nbsp;01.01.2023</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.body}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage;