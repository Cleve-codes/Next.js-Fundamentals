import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './postcard.module.css'


const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/post.png" alt="contact" fill className={styles.img} />
        </div>
        <span className={styles.date}>09.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>DEsc</p>
        <Link href='/blog/post'>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default PostCard