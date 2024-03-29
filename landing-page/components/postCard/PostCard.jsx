import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './postcard.module.css'


const PostCard = ({post}) => {


  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src={post ? `${post.img}` : "/bob.png"} alt="contact" fill className={styles.img} />
        </div>
        <span className={styles.date}>{new Date(post.createdAt).toLocaleDateString()}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>
            {post.desc}
        </p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default PostCard