import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'

export const metadata = {
  title: 'About',
  description: 'About page',
  keywords: 'about, page',
}

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>
          About Agency
        </h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p>
        We create digital ideas that are bigger, bolder, braver and better. We believe in
        game-changing ideas that move our clients’ businesses forward. We believe in the power
        of the individual and the team. We have fun along the way.
        </p>

      <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 +</h1>
            <p>Years of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>55+</h1>
            <p>Team Members</p>
          </div>
          <div className={styles.box}>
            <h1>100+</h1>
            <p>Happy Clients</p>
          </div>
      </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt='Pic' fill className={styles.aboutImg} />
      </div>
    </div>
  )
}

export default page