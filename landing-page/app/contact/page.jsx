import React from 'react'
import Image from 'next/image'
import styles from './contact.module.css'

export const metadata = {
  title: 'Contact',
  description: 'Contact page',
  keywords: 'contact, page',
}

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="contact" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
            <input type='text' placeholder='Name and Surname' />
            <input type="text" placeholder='Email Adress' />
            <input type="text" placeholder='Phone Number (optional)' />
            <textarea name='' id='' cols='30' rows='10' placeholder='Message' />
            <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default page