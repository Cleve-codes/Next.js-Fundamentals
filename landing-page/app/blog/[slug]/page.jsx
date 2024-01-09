import React from 'react'
import Image from 'next/image'
import styles from './singlePost.module.css'

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/wutang.jpg' alt='blog' className={styles.img} fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image src='/snoop.jpg' alt='Avatar' className={styles.avatar} width={50} height={50} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>&nbsp;Cleve Momanyi</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>&nbsp;01.01.2023</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et deserunt neque similique nihil inventore rerum debitis incidunt quis perferendis doloribus ullam ab, iste, odit veniam.
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage;